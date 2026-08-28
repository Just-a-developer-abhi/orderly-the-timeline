import { FRANCHISES } from "../data/franchises.js";

/**
 * User Query Parser Agent
 * Comprehends natural language requests:
 * - "What should I watch after Avengers 2012?" (Forward sequel progression)
 * - "What to watch before Doomsday?" (Backward prerequisite DAG)
 * - "What to watch after Episode III in Star Wars?" (Universe-locked forward sequencing)
 * - "All Spider-Man movies in order" (Character arc filtering)
 * - "Phase 2 MCU" (Phase/Saga bounds)
 * - "Fast track / zero filler in 10 hours" (Constraint optimization)
 */
export async function runQueryParserAgent({ query, targetId, franchiseId, mode = "fast-track", maxHours = null }) {
  const startTime = Date.now();
  const reasoning = [];

  const rawQuery = (query || "").trim();
  reasoning.push(`[NLP Scanner] Comprehending user query: "${rawQuery || targetId || 'default'}"`);

  let detectedFranchiseKey = franchiseId || "mcu";
  let detectedTargetId = targetId;
  let detectedAnchorId = null;
  let detectedDirection = "backward"; // "after", "before", "character_arc", "phase"
  let detectedCharacter = null;
  let detectedPhase = null;
  let selectedMode = mode || "fast-track";

  if (rawQuery) {
    const qLower = rawQuery.toLowerCase();
    const queryTokens = qLower.split(/\s+/).filter(t => t.length > 0);

    // 1. Explicit Franchise Identification
    let explicitFranchise = null;
    if (qLower.includes("star wars") || qLower.includes("starwars") || qLower.includes("jedi") || qLower.includes("sith") || qLower.includes("skywalker") || qLower.includes("clone wars")) {
      explicitFranchise = "starwars";
      detectedFranchiseKey = "starwars";
      reasoning.push(`[Franchise Locked] Star Wars universe detected from keywords.`);
    } else if (qLower.includes("naruto") || qLower.includes("shippuden") || qLower.includes("shinobi") || qLower.includes("leaf village")) {
      explicitFranchise = "anime_naruto";
      detectedFranchiseKey = "anime_naruto";
      reasoning.push(`[Franchise Locked] Naruto universe detected from keywords.`);
    } else if (qLower.includes("dragon ball") || qLower.includes("dbz") || qLower.includes("super saiyan") || qLower.includes("dragonball")) {
      explicitFranchise = "dragonball";
      detectedFranchiseKey = "dragonball";
      reasoning.push(`[Franchise Locked] Dragon Ball universe detected from keywords.`);
    } else if (qLower.includes("marvel") || qLower.includes("mcu") || qLower.includes("avengers") || qLower.includes("sacred timeline")) {
      explicitFranchise = "mcu";
      detectedFranchiseKey = "mcu";
      reasoning.push(`[Franchise Locked] Marvel Cinematic Universe detected from keywords.`);
    }

    // 2. Detect Direction / Intent
    if (
      qLower.includes("after") || 
      qLower.includes("next") || 
      qLower.includes("following") || 
      qLower.includes("continue from") ||
      qLower.includes("finished") ||
      qLower.includes("completed")
    ) {
      detectedDirection = "after";
      reasoning.push(`[Intent Detection] User requested FORWARD progression ("What to watch AFTER...")`);
    } else if (qLower.includes("before") || qLower.includes("prepare") || qLower.includes("prerequisite") || qLower.includes("lead up")) {
      detectedDirection = "before";
      reasoning.push(`[Intent Detection] User requested BACKWARD prerequisite path ("What to watch BEFORE...")`);
    }

    // 3. Detect Strategy Mode
    if (qLower.includes("fast") || qLower.includes("quick") || qLower.includes("essential") || qLower.includes("speedrun") || qLower.includes("minimum")) {
      selectedMode = "fast-track";
      reasoning.push(`[Mode Resolved] Fast-Track (Essential Only).`);
    } else if (qLower.includes("full") || qLower.includes("complete") || qLower.includes("all") || qLower.includes("everything") || qLower.includes("lore")) {
      selectedMode = "full-lore";
      reasoning.push(`[Mode Resolved] Full Canon Lore mode.`);
    } else if (qLower.includes("chrono") || qLower.includes("timeline")) {
      selectedMode = "chronological";
      reasoning.push(`[Mode Resolved] Chronological timeline.`);
    } else if (qLower.includes("filler") || qLower.includes("no filler") || qLower.includes("zero filler")) {
      selectedMode = "zero-filler";
      reasoning.push(`[Mode Resolved] Zero-Filler stripping.`);
    }

    // 4. Detect Hours constraint
    const hoursMatch = qLower.match(/(\d+)\s*(?:hours|hrs|hr)/);
    let detectedHours = maxHours;
    if (hoursMatch && hoursMatch[1]) {
      detectedHours = parseInt(hoursMatch[1], 10);
      reasoning.push(`[Constraint Extraction] Target watch budget: ${detectedHours} hours.`);
    }

    // 5. Detect Phase / Saga
    const phaseMatch = qLower.match(/phase\s*([1-6])/i);
    if (phaseMatch && phaseMatch[1]) {
      detectedPhase = `Phase ${phaseMatch[1]}`;
      detectedDirection = "phase";
      reasoning.push(`[Scope Resolved] Isolated scope to ${detectedPhase}.`);
    }

    // 6. Detect Character Arc
    const KEY_CHARACTERS = [
      "Spider-Man", "Iron Man", "Captain America", "Thor", "Loki", "Deadpool", "Wolverine",
      "Doctor Strange", "Black Panther", "Scarlet Witch", "Thanos",
      "Ahsoka", "Anakin", "Darth Vader", "Obi-Wan", "Luke Skywalker", "Mandalorian",
      "Naruto", "Sasuke", "Kakashi", "Itachi", "Madara", "Pain", "Jiraiya",
      "Goku", "Vegeta", "Broly", "Gohan", "Piccolo", "Frieza"
    ];

    for (const char of KEY_CHARACTERS) {
      if (qLower.includes(char.toLowerCase())) {
        detectedCharacter = char;
        break;
      }
    }

    // 7. Score all nodes across all franchises
    let bestScore = -1;
    let bestMatch = null;
    let bestFranchiseKey = null;

    Object.entries(FRANCHISES).forEach(([fKey, fData]) => {
      // If user specified an explicit franchise, skip other franchises
      if (explicitFranchise && fKey !== explicitFranchise) {
        return;
      }

      const fNameLower = fData.name.toLowerCase();
      let franchiseBonus = 0;
      if (queryTokens.some(t => fNameLower.includes(t))) franchiseBonus = 30;

      fData.nodes.forEach(node => {
        let score = franchiseBonus;
        const nodeTitleLower = node.title.toLowerCase();
        const nodeIdLower = node.id.toLowerCase();
        const nodeYearStr = `${node.year}`;
        const synopsisLower = (node.synopsis || "").toLowerCase();

        // Exact & substring matches
        if (nodeTitleLower === qLower) score += 300;
        if (nodeTitleLower.includes(qLower)) score += 150;

        // Content token matching
        const contentTokens = queryTokens.filter(t => 
          !["what", "should", "watch", "after", "before", "next", "from", "the", "and", "movie", "movies", "show", "series", "in"].includes(t)
        );

        contentTokens.forEach(token => {
          if (nodeTitleLower.includes(token)) score += 40;
          if (nodeIdLower.includes(token)) score += 35;
          if (nodeYearStr === token) score += 200; // Major boost for exact release year match like "2012"
          
          // Roman numerals matching (e.g. "iii" -> "episode iii")
          if (["i", "ii", "iii", "iv", "v", "vi"].includes(token) && nodeTitleLower.includes(token)) {
            score += 50;
          }

          if (node.charactersIntroduced && node.charactersIntroduced.some(c => c.toLowerCase().includes(token))) {
            score += 35;
          }
          if (synopsisLower.includes(token)) score += 10;
        });

        if (score > bestScore) {
          bestScore = score;
          bestMatch = node;
          bestFranchiseKey = fKey;
        }
      });
    });

    if (bestMatch && bestScore > 20) {
      detectedFranchiseKey = bestFranchiseKey;
      if (detectedDirection === "after") {
        detectedAnchorId = bestMatch.id;
        reasoning.push(`[Anchor Resolved] Starting AFTER node: "${bestMatch.title}" (${bestMatch.year}) [ID: ${bestMatch.id}]`);
      } else {
        detectedTargetId = bestMatch.id;
        reasoning.push(`[Target Resolved] Target node: "${bestMatch.title}" (${bestMatch.year}) [ID: ${bestMatch.id}]`);
      }
    }
  }

  // Fallback to default target for franchise if not resolved
  const franchise = FRANCHISES[detectedFranchiseKey] || FRANCHISES.mcu;
  if (!detectedTargetId && !detectedAnchorId) {
    const defaultPreset = franchise.presetTargets[0] || franchise.nodes[franchise.nodes.length - 1];
    detectedTargetId = defaultPreset.id;
    reasoning.push(`[Target Fallback] Defaulting to apex target: "${defaultPreset.title}".`);
  }

  const anchorNode = detectedAnchorId ? franchise.nodes.find(n => n.id === detectedAnchorId) : null;
  const targetNode = detectedTargetId ? franchise.nodes.find(n => n.id === detectedTargetId) : null;

  return {
    rawQuery,
    franchiseId: detectedFranchiseKey,
    franchiseName: franchise.name,
    direction: detectedDirection,
    anchorId: detectedAnchorId,
    anchorNode,
    targetId: detectedTargetId || (anchorNode ? anchorNode.id : null),
    targetNode,
    characterName: detectedCharacter,
    phaseName: detectedPhase,
    mode: selectedMode,
    maxHours: maxHours || null,
    telemetry: {
      agent: "User Query Parser Agent",
      status: "COMPLETED",
      latencyMs: Date.now() - startTime,
      reasoning,
      confidence: 0.99
    }
  };
}
