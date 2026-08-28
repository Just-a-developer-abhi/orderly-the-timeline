import { FRANCHISES } from "../server/data/franchises.js";

export default function handler(req, res) {
  const universes = Object.values(FRANCHISES).map(f => ({
    id: f.id,
    name: f.name,
    tagline: f.tagline,
    icon: f.icon,
    themeColor: f.themeColor,
    presetTargets: f.presetTargets,
    totalNodes: f.nodes.length
  }));
  
  return res.status(200).json({ success: true, universes });
}
