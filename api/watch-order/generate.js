import { FRANCHISES } from "../server/data/franchises.js";
import { runQueryParserAgent } from "../server/agents/queryParserAgent.js";
import { runKnowledgeGraphAgent } from "../server/agents/knowledgeGraphAgent.js";
import { runPathOptimizerAgent } from "../server/agents/pathOptimizerAgent.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { query, targetId, franchiseId, mode, maxHours } = req.body || {};
    const pipelineStartTime = Date.now();

    // Step 1: User Query Parser Agent
    const parsedQuery = await runQueryParserAgent({
      query,
      targetId,
      franchiseId,
      mode,
      maxHours
    });

    // Step 2: Franchise Knowledge Graph Agent
    const graphData = await runKnowledgeGraphAgent({
      franchiseId: parsedQuery.franchiseId,
      targetId: parsedQuery.targetId,
      parsedQuery
    });

    // Step 3: Path Optimizer Agent
    const optimizedResult = await runPathOptimizerAgent({
      parsedQuery,
      graphData
    });

    const pipelineTotalLatency = Date.now() - pipelineStartTime;

    return res.status(200).json({
      success: true,
      data: optimizedResult,
      pipeline: {
        totalLatencyMs: pipelineTotalLatency,
        agents: [
          parsedQuery.telemetry,
          graphData.telemetry,
          optimizedResult.telemetry
        ]
      }
    });
  } catch (error) {
    console.error("Vercel Serverless Agent Pipeline Error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to execute watch order agent workflow"
    });
  }
}
