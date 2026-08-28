// @ts-ignore
import { FRANCHISES } from '../../server/data/franchises.js';
// @ts-ignore
import { runQueryParserAgent } from '../../server/agents/queryParserAgent.js';
// @ts-ignore
import { runKnowledgeGraphAgent } from '../../server/agents/knowledgeGraphAgent.js';
// @ts-ignore
import { runPathOptimizerAgent } from '../../server/agents/pathOptimizerAgent.js';

export interface WatchOrderRequest {
  query?: string;
  targetId?: string;
  franchiseId?: string;
  mode?: string;
  maxHours?: number | null;
}

export async function fetchUniverses() {
  try {
    const res = await fetch('/api/universes');
    if (res.ok) {
      const data = await res.json();
      return data.universes;
    }
  } catch (e) {
    console.warn("Using local universe fallback data", e);
  }

  // Fallback to local import
  return Object.values(FRANCHISES).map((f: any) => ({
    id: f.id,
    name: f.name,
    tagline: f.tagline,
    icon: f.icon,
    presetTargets: f.presetTargets,
    totalNodes: f.nodes.length
  }));
}

export async function generateWatchOrder(params: WatchOrderRequest) {
  try {
    const res = await fetch('/api/watch-order/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(params)
    });

    if (res.ok) {
      const payload = await res.json();
      return payload;
    }
  } catch (e) {
    console.warn("API request failed, executing client-side agent pipeline fallback", e);
  }

  // Fallback to direct client-side execution of the 3-agent pipeline
  const pipelineStartTime = Date.now();
  const parsedQuery = await runQueryParserAgent({
    query: params.query || '',
    targetId: params.targetId,
    franchiseId: params.franchiseId,
    mode: params.mode || 'fast-track',
    maxHours: params.maxHours
  });
  const graphData = await runKnowledgeGraphAgent({
    franchiseId: parsedQuery.franchiseId,
    targetId: parsedQuery.targetId,
    parsedQuery
  });
  const optimizedResult = await runPathOptimizerAgent({
    parsedQuery,
    graphData
  });

  return {
    success: true,
    data: optimizedResult,
    pipeline: {
      totalLatencyMs: Date.now() - pipelineStartTime,
      agents: [
        parsedQuery.telemetry,
        graphData.telemetry,
        optimizedResult.telemetry
      ]
    }
  };
}
