/**
 * Path Optimizer Agent
 * Prunes filler content, applies mode filters, calculates total watch hours,
 * and formats natural conversational explanations and timeline nodes.
 */
export async function runPathOptimizerAgent({ parsedQuery, graphData }) {
  const startTime = Date.now();
  const reasoning = [];
  const { mode, maxHours, direction, anchorNode, characterName, phaseName } = parsedQuery;
  const { rawNodes, subgraphNodes, targetNode } = graphData;

  const currentFranchiseId = parsedQuery.franchiseId || "mcu";

  // Master franchise fallback poster mapping
  const MASTER_POSTERS = {
    mcu: "/assets/Images/posters/marvel-poster.jpeg",
    starwars: "/assets/Images/posters/starwars-poster.jpeg",
    anime_naruto: "/assets/Images/posters/naruto-poster.jpeg",
    dragonball: "/assets/Images/posters/dbz-poster.jpeg"
  };

  const defaultPoster = MASTER_POSTERS[currentFranchiseId] || MASTER_POSTERS.mcu;

  let finalNodes = [];
  let displayTitle = targetNode.title;
  let agentAdvice = "";

  // 1. FORWARD PROGRESSION (What to watch AFTER X)
  if (direction === "after" && anchorNode) {
    displayTitle = `Next Releases After ${anchorNode.title} (${anchorNode.year})`;
    agentAdvice = `Having completed "${anchorNode.title}" (${anchorNode.year}), your chronological sequel journey continues with the following releases starting immediately with "${subgraphNodes[0]?.title || 'the next chapter'}".`;
    reasoning.push(`[Forward Path Sequencing] Curating releases immediately following "${anchorNode.title}".`);

    if (mode === "fast-track") {
      finalNodes = subgraphNodes.filter(n => n.tier !== "Skippable");
    } else if (mode === "zero-filler") {
      finalNodes = subgraphNodes.filter(n => n.tier !== "Skippable");
    } else {
      finalNodes = subgraphNodes;
    }

    // Limit to next 12 sequential releases if list is very large
    if (finalNodes.length > 14) {
      finalNodes = finalNodes.slice(0, 14);
    }
  } 
  // 2. CHARACTER ARC
  else if (direction === "character_arc" && characterName) {
    displayTitle = `${characterName}: Complete Canonical Arc`;
    agentAdvice = `Here is every canonical storyline and pivotal appearance featuring ${characterName} in chronological release sequence.`;
    finalNodes = subgraphNodes;
  }
  // 3. PHASE / SAGA
  else if (direction === "phase" && phaseName) {
    displayTitle = `${phaseName} Complete Watch Order`;
    agentAdvice = `Here are all canonical movies and series released within ${phaseName}.`;
    finalNodes = subgraphNodes;
  }
  // 4. BACKWARD PREREQUISITE DAG (Default)
  else {
    displayTitle = targetNode.title;
    agentAdvice = `Here is your optimized prerequisite watch order leading directly to "${targetNode.title}".`;
    const subgraphIdSet = new Set(subgraphNodes.map(n => n.id));

    if (mode === "fast-track") {
      reasoning.push(`[Pruning Algorithm] Pruning non-essential branches and supplementary filler.`);
      finalNodes = rawNodes.filter(node => {
        if (!subgraphIdSet.has(node.id)) return false;
        if (node.tier === "Skippable") return false;
        return true;
      });
    } else if (mode === "zero-filler") {
      reasoning.push(`[Filler Stripper] Removing all non-canon filler arcs.`);
      finalNodes = rawNodes.filter(node => {
        const isBeforeOrAtTarget = rawNodes.indexOf(node) <= rawNodes.indexOf(targetNode);
        return isBeforeOrAtTarget && node.tier !== "Skippable";
      });
    } else {
      reasoning.push(`[Full Lore Compilation] Retaining all canonical media leading to target.`);
      finalNodes = rawNodes.filter(node => {
        const targetIndex = rawNodes.findIndex(n => n.id === targetNode.id);
        const nodeIndex = rawNodes.findIndex(n => n.id === node.id);
        return nodeIndex <= targetIndex;
      });
    }

    if (!finalNodes.some(n => n.id === targetNode.id)) {
      finalNodes.push(targetNode);
    }
  }

  // Calculate total runtime
  let totalMinutes = 0;
  finalNodes.forEach(node => {
    totalMinutes += node.runtimeMinutes || (node.type === "Series" ? 240 : 130);
  });

  const estimatedHours = Math.round((totalMinutes / 60) * 10) / 10;
  reasoning.push(`[Watch Time Metrics] Total estimated watch time: ${estimatedHours} hours (${finalNodes.length} nodes).`);

  // Optional hour budget constraint handling
  if (maxHours && estimatedHours > maxHours) {
    reasoning.push(`[Constraint Check] Estimated ${estimatedHours}h exceeds budget of ${maxHours}h. Applying aggressive critical-only trimming.`);
    finalNodes = finalNodes.filter(n => n.tier === "Essential" || n.id === targetNode.id);
  }

  // Format node output
  const formattedNodes = finalNodes.map((node, index) => {
    return {
      order: index + 1,
      id: node.id,
      franchiseId: currentFranchiseId,
      title: node.title,
      type: node.type,
      year: node.year,
      chronoYear: node.chronoYear || `${node.year}`,
      phase: node.phase || undefined,
      tier: node.tier,
      runtimeMinutes: node.runtimeMinutes || (node.type === "Series" ? 240 : 130),
      streamingOn: node.streamingOn || (currentFranchiseId === "anime_naruto" || currentFranchiseId === "dragonball" ? "Crunchyroll" : "Disney+ Hotstar"),
      streamUrl: node.streamUrl || (currentFranchiseId === "anime_naruto" || currentFranchiseId === "dragonball" ? "https://www.crunchyroll.com" : "https://www.hotstar.com"),
      poster: node.poster || defaultPoster,
      synopsis: node.synopsis,
      reason: node.reason,
      postCredits: node.postCredits || null,
      charactersIntroduced: node.charactersIntroduced || [],
      prerequisites: node.prerequisites || [],
      isTarget: node.id === targetNode.id
    };
  });

  reasoning.push(`[Compilation Complete] Generated optimized JSON watch path.`);

  return {
    target: displayTitle,
    targetId: targetNode.id,
    targetType: targetNode.type,
    universe: parsedQuery.franchiseName,
    franchiseId: currentFranchiseId,
    mode: parsedQuery.mode,
    direction: parsedQuery.direction,
    agentAdvice,
    nodeCount: formattedNodes.length,
    estimatedWatchTimeHours: estimatedHours,
    nodes: formattedNodes,
    telemetry: {
      agent: "Path Optimizer Agent",
      status: "COMPLETED",
      latencyMs: Date.now() - startTime,
      prunedCount: rawNodes.length - formattedNodes.length,
      finalNodeCount: formattedNodes.length,
      estimatedHours,
      reasoning,
      confidence: 0.99
    }
  };
}
