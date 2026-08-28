import { FRANCHISES } from "../data/franchises.js";

/**
 * Franchise Knowledge Graph Agent
 * Intelligently traverses timeline graphs for:
 * - Forward Progression (All canonical media released AFTER a specific movie/arc)
 * - Backward Prerequisite DAG (Recursive dependency tree leading up to a target)
 * - Character Arc Tracking (Every canonical appearance of a character)
 * - Phase Bounds (All releases in a specific Phase or Saga)
 */
export async function runKnowledgeGraphAgent({
  franchiseId,
  targetId,
  parsedQuery,
}) {
  const startTime = Date.now();
  const reasoning = [];

  const franchise = FRANCHISES[franchiseId] || FRANCHISES.mcu;
  const nodeMap = new Map(franchise.nodes.map((n) => [n.id, n]));

  reasoning.push(
    `[Graph Init] Initializing Knowledge Graph for "${franchise.name}" with ${franchise.nodes.length} canonical nodes.`,
  );

  const direction = parsedQuery?.direction || "backward";
  const anchorNode =
    parsedQuery?.anchorNode ||
    (parsedQuery?.anchorId ? nodeMap.get(parsedQuery.anchorId) : null);
  const targetNode =
    parsedQuery?.targetNode || (targetId ? nodeMap.get(targetId) : null);

  let selectedNodes = [];

  // CASE 1: FORWARD PROGRESSION ("What should I watch AFTER X?")
  if (direction === "after" && anchorNode) {
    reasoning.push(
      `[Forward Progression Engine] Locating anchor node "${anchorNode.title}" (${anchorNode.year}).`,
    );
    const anchorIndex = franchise.nodes.findIndex(
      (n) => n.id === anchorNode.id,
    );

    if (anchorIndex !== -1) {
      // Gather all media strictly released AFTER the anchor node
      const afterNodes = franchise.nodes.slice(anchorIndex + 1);
      reasoning.push(
        `[Forward DAG Slice] Discovered ${afterNodes.length} releases following "${anchorNode.title}".`,
      );
      selectedNodes = afterNodes;
    } else {
      selectedNodes = franchise.nodes;
    }

    return {
      direction: "after",
      anchorNode,
      targetNode: selectedNodes[selectedNodes.length - 1] || anchorNode,
      rawNodes: franchise.nodes,
      subgraphNodes: selectedNodes,
      allNodesMap: nodeMap,
      telemetry: {
        agent: "Franchise Knowledge Graph Agent",
        status: "COMPLETED",
        latencyMs: Date.now() - startTime,
        traversalType: "FORWARD_SEQUEL_PROGRESSION",
        anchorTitle: anchorNode.title,
        nodesFound: selectedNodes.length,
        reasoning,
        confidence: 0.99,
      },
    };
  }

  // CASE 2: CHARACTER ARC ("All Spider-Man / Loki / Ahsoka / Goku movies")
  if (parsedQuery?.characterName) {
    const charName = parsedQuery.characterName.toLowerCase();
    reasoning.push(
      `[Character Arc Scanner] Filtering nodes featuring "${parsedQuery.characterName}".`,
    );

    selectedNodes = franchise.nodes.filter((node) => {
      const titleMatch = node.title.toLowerCase().includes(charName);
      const castMatch =
        node.charactersIntroduced &&
        node.charactersIntroduced.some((c) =>
          c.toLowerCase().includes(charName),
        );
      const synopsisMatch = (node.synopsis || "")
        .toLowerCase()
        .includes(charName);
      const reasonMatch = (node.reason || "").toLowerCase().includes(charName);
      return titleMatch || castMatch || synopsisMatch || reasonMatch;
    });

    if (selectedNodes.length > 0) {
      return {
        direction: "character_arc",
        characterName: parsedQuery.characterName,
        targetNode: selectedNodes[selectedNodes.length - 1],
        rawNodes: franchise.nodes,
        subgraphNodes: selectedNodes,
        allNodesMap: nodeMap,
        telemetry: {
          agent: "Franchise Knowledge Graph Agent",
          status: "COMPLETED",
          latencyMs: Date.now() - startTime,
          traversalType: "CHARACTER_ARC_ISOLATION",
          character: parsedQuery.characterName,
          nodesFound: selectedNodes.length,
          reasoning,
          confidence: 0.99,
        },
      };
    }
  }

  // CASE 3: PHASE BOUNDS ("Phase 2 MCU")
  if (parsedQuery?.phaseName) {
    reasoning.push(
      `[Phase Boundary Extraction] Isolating releases in "${parsedQuery.phaseName}".`,
    );
    selectedNodes = franchise.nodes.filter(
      (n) => n.phase === parsedQuery.phaseName,
    );
    if (selectedNodes.length > 0) {
      return {
        direction: "phase",
        phaseName: parsedQuery.phaseName,
        targetNode: selectedNodes[selectedNodes.length - 1],
        rawNodes: franchise.nodes,
        subgraphNodes: selectedNodes,
        allNodesMap: nodeMap,
        telemetry: {
          agent: "Franchise Knowledge Graph Agent",
          status: "COMPLETED",
          latencyMs: Date.now() - startTime,
          traversalType: "PHASE_BOUNDARY_ISOLATION",
          nodesFound: selectedNodes.length,
          reasoning,
          confidence: 0.99,
        },
      };
    }
  }

  // CASE 4: BACKWARD PREREQUISITE DAG (Default / Target-focused)
  const rootTarget = targetNode || franchise.nodes[franchise.nodes.length - 1];
  reasoning.push(
    `[Target Root] Starting recursive DAG dependency traversal from root node: "${rootTarget.title}" (${rootTarget.id}).`,
  );

  const visitedIds = new Set();
  const traversalQueue = [rootTarget.id];
  const dependencyTree = [];

  while (traversalQueue.length > 0) {
    const currentId = traversalQueue.shift();
    if (!visitedIds.has(currentId)) {
      visitedIds.add(currentId);
      const node = nodeMap.get(currentId);
      if (node) {
        dependencyTree.push(node);
        if (node.prerequisites && node.prerequisites.length > 0) {
          for (const prereqId of node.prerequisites) {
            if (!visitedIds.has(prereqId) && nodeMap.has(prereqId)) {
              traversalQueue.push(prereqId);
            }
          }
        }
      }
    }
  }

  reasoning.push(
    `[Graph Subgraph Extracted] Successfully resolved ${visitedIds.size} prerequisite nodes leading to "${rootTarget.title}".`,
  );

  return {
    direction: "backward",
    rawNodes: franchise.nodes,
    subgraphNodes: dependencyTree,
    targetNode: rootTarget,
    allNodesMap: nodeMap,
    telemetry: {
      agent: "Franchise Knowledge Graph Agent",
      status: "COMPLETED",
      latencyMs: Date.now() - startTime,
      traversalType: "BACKWARD_PREREQUISITE_DAG",
      nodesEvaluated: franchise.nodes.length,
      subgraphSize: visitedIds.size,
      reasoning,
      confidence: 0.99,
    },
  };
}
