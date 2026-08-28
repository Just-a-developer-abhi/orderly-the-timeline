import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { FRANCHISES } from "./data/franchises.js";
import { runQueryParserAgent } from "./agents/queryParserAgent.js";
import { runKnowledgeGraphAgent } from "./agents/knowledgeGraphAgent.js";
import { runPathOptimizerAgent } from "./agents/pathOptimizerAgent.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// List all universes
app.get("/api/universes", (req, res) => {
  const universes = Object.values(FRANCHISES).map(f => ({
    id: f.id,
    name: f.name,
    tagline: f.tagline,
    icon: f.icon,
    themeColor: f.themeColor,
    presetTargets: f.presetTargets,
    totalNodes: f.nodes.length
  }));
  res.json({ success: true, universes });
});

// Quick preset targets
app.get("/api/preset-targets", (req, res) => {
  const presets = [];
  Object.values(FRANCHISES).forEach(f => {
    f.presetTargets.forEach(p => {
      presets.push({
        ...p,
        franchiseId: f.id,
        franchiseName: f.name
      });
    });
  });
  res.json({ success: true, presets });
});

// Main Agentic Watch Order Pipeline Endpoint
app.post("/api/watch-order/generate", async (req, res) => {
  try {
    const { query, targetId, franchiseId, mode, maxHours } = req.body;
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

    const responsePayload = {
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
    };

    res.json(responsePayload);
  } catch (error) {
    console.error("Watch Order Agent Pipeline Error:", error);
    res.status(500).json({
      success: false,
      error: error.message || "Failed to execute watch order agent workflow"
    });
  }
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "healthy", timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`⚡ Orderly Agentic Engine Server listening on port ${PORT}`);
});
