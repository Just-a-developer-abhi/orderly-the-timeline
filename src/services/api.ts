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
  const pipelineStartTime = Date.now();

  try {
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
  } catch (error: any) {
    console.error("Watch Order Agent Pipeline Error:", error);
    return {
      success: false,
      error: error?.message || "Failed to execute watch order agent workflow"
    };
  }
}
