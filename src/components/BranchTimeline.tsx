import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Tv2, 
  ExternalLink, 
  CheckCircle2, 
  Circle, 
  Sparkles, 
  Calendar, 
  ArrowUpRight, 
  Filter,
  Search
} from 'lucide-react';
import { WatchNode, NodeDetailModal } from './NodeDetailModal';

interface BranchTimelineProps {
  nodes: WatchNode[];
  targetTitle: string;
  universeName: string;
  agentAdvice?: string;
  selectedFranchiseId?: string;
  selectedMode: string;
  watchedIds: Set<string>;
  onToggleWatched: (id: string) => void;
  onModeChange: (mode: string) => void;
}

// Dedicated Master Poster for each franchise to use whenever an image is missing
const FRANCHISE_MASTER_POSTERS: Record<string, string> = {
  mcu: "/assets/Images/posters/marvel-poster.jpeg",
  starwars: "/assets/Images/posters/starwars-poster.jpeg",
  anime_naruto: "/assets/Images/posters/naruto-poster.jpeg",
  dragonball: "/assets/Images/posters/dbz-poster.jpeg"
};

// Subcomponent for resilient Card Poster with dedicated Master Poster fallback
const CardPoster: React.FC<{
  poster?: string;
  title: string;
  nodeId: string;
  nodeFranchiseId?: string;
  timelineFranchiseId?: string;
  universeName?: string;
  nodeIndex: number;
  isTarget?: boolean;
}> = ({ poster, title, nodeId, nodeFranchiseId, timelineFranchiseId, universeName, isTarget }) => {
  let fKey = "mcu";
  
  if (nodeFranchiseId && FRANCHISE_MASTER_POSTERS[nodeFranchiseId]) {
    fKey = nodeFranchiseId;
  } else if (timelineFranchiseId && FRANCHISE_MASTER_POSTERS[timelineFranchiseId]) {
    fKey = timelineFranchiseId;
  } else if (nodeId.startsWith("sw-")) {
    fKey = "starwars";
  } else if (nodeId.startsWith("naruto-") || nodeId.startsWith("boruto-")) {
    fKey = "anime_naruto";
  } else if (nodeId.startsWith("db-") || nodeId.startsWith("dbz-") || nodeId.startsWith("dbs-")) {
    fKey = "dragonball";
  } else if (nodeId.startsWith("mcu-") || nodeId.startsWith("fox-")) {
    fKey = "mcu";
  } else if (universeName) {
    const uLower = universeName.toLowerCase();
    if (uLower.includes("star wars") || uLower.includes("starwars") || uLower.includes("galaxy")) {
      fKey = "starwars";
    } else if (uLower.includes("naruto") || uLower.includes("shippuden") || uLower.includes("shinobi")) {
      fKey = "anime_naruto";
    } else if (uLower.includes("dragon") || uLower.includes("dbz") || uLower.includes("saiyan")) {
      fKey = "dragonball";
    }
  }

  const masterPoster = FRANCHISE_MASTER_POSTERS[fKey] || FRANCHISE_MASTER_POSTERS.mcu;
  const [imgSrc, setImgSrc] = useState(poster || masterPoster);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(masterPoster);
    }
  };

  return (
    <div className="relative w-20 sm:w-24 h-28 sm:h-34 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10 shadow-lg">
      <img
        src={imgSrc}
        alt={title}
        onError={handleError}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        loading="lazy"
      />
      {isTarget && (
        <div className="absolute top-1 left-1 bg-red-600 text-white font-mono text-[8px] font-bold px-1.5 py-0.5 rounded shadow">
          TARGET
        </div>
      )}
      {hasError && (
        <div className="absolute bottom-1 right-1 bg-black/80 px-1 py-0.5 rounded text-[8px] font-mono text-slate-400">
          Archived
        </div>
      )}
    </div>
  );
};

export const BranchTimeline: React.FC<BranchTimelineProps> = ({
  nodes,
  targetTitle,
  universeName,
  agentAdvice,
  selectedFranchiseId,
  selectedMode,
  watchedIds,
  onToggleWatched,
  onModeChange
}) => {
  const [selectedModalNode, setSelectedModalNode] = useState<WatchNode | null>(null);
  const [selectedPhaseFilter, setSelectedPhaseFilter] = useState<string>("ALL");
  const [inPageSearch, setInPageSearch] = useState<string>("");

  const totalCount = nodes.length;
  const watchedCount = nodes.filter(n => watchedIds.has(n.id)).length;

  let totalMinutes = 0;
  let remainingMinutes = 0;
  nodes.forEach(n => {
    const mins = n.runtimeMinutes || (n.type === "Series" ? 240 : 130);
    totalMinutes += mins;
    if (!watchedIds.has(n.id)) {
      remainingMinutes += mins;
    }
  });

  const remainingHours = Math.round((remainingMinutes / 60) * 10) / 10;

  const availablePhases = Array.from(
    new Set(nodes.map(n => n.phase).filter((p): p is string => Boolean(p)))
  );

  const filteredNodes = nodes.filter(n => {
    if (selectedPhaseFilter !== "ALL" && n.phase !== selectedPhaseFilter) {
      return false;
    }
    if (inPageSearch.trim()) {
      const q = inPageSearch.toLowerCase();
      const titleMatch = n.title.toLowerCase().includes(q);
      const charMatch = n.charactersIntroduced && n.charactersIntroduced.some(c => c.toLowerCase().includes(q));
      const synopsisMatch = (n.synopsis || "").toLowerCase().includes(q);
      const reasonMatch = (n.reason || "").toLowerCase().includes(q);
      return titleMatch || charMatch || synopsisMatch || reasonMatch;
    }
    return true;
  });

  return (
    <section className="relative w-full max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-8">
      
      {/* Timeline Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6 border-b border-white/[0.08] pb-4 sm:pb-6">
        <div>
          <div className="flex items-center gap-1.5 sm:gap-2 text-red-500 font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PREREQUISITE WATCH TIMELINE</span>
          </div>
          <h2 className="font-cinematic font-black text-2xl sm:text-4xl text-white tracking-wide uppercase">
            {targetTitle}
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            {universeName} • {totalCount} Prerequisite Releases
          </p>
        </div>

        {/* Progress & Remaining Time */}
        <div className="flex items-center gap-3">
          <div className="px-3.5 sm:px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-left sm:text-right w-full sm:w-auto">
            <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              Archived Progress
            </div>
            <div className="font-mono font-bold text-sm text-white">
              {watchedCount} / {totalCount} <span className="text-red-400 font-normal">({remainingHours}h left)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Natural Language Agent Guidance Banner */}
      {agentAdvice && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3.5 sm:p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-black/80 to-red-950/20 border border-red-500/30 flex items-start gap-2.5 sm:gap-3 shadow-lg"
        >
          <div className="p-1.5 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 shrink-0 mt-0.5">
            <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
          </div>
          <div className="space-y-0.5">
            <div className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-red-400 font-bold">
              AI WATCH ORDER AGENT
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-sans font-light leading-relaxed">
              {agentAdvice}
            </p>
          </div>
        </motion.div>
      )}

      {/* Mode Filter Tabs & In-Page Filter Row */}
      <div className="space-y-3 sm:space-y-4">
        
        {/* Strategy Mode Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <span className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-red-400" />
              <span>Strategy:</span>
            </span>
            {[
              { id: "fast-track", label: "⚡ Fast-Track (Essential)" },
              { id: "zero-filler", label: "🎯 Zero Filler (Canon)" },
              { id: "full-lore", label: "📚 Full Canon Lore" },
              { id: "chronological", label: "⏳ Chronological" },
              { id: "all", label: "🌌 All Universe Releases" }
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => {
                  onModeChange(m.id);
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer border ${
                  selectedMode === m.id
                    ? "bg-red-600/20 border-red-500 text-white shadow-[0_0_12px_rgba(226,26,34,0.3)] font-semibold"
                    : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>

          {/* In-Page Quick Filter */}
          <div className="relative w-full sm:w-56">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3 h-3 text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={inPageSearch}
              onChange={(e) => setInPageSearch(e.target.value)}
              placeholder="Filter character or movie..."
              className="w-full bg-black/60 border border-white/10 focus:border-red-500/80 rounded-full py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-500 outline-none font-mono"
            />
          </div>
        </div>

        {/* Phase / Saga Filter Chips (when available) */}
        {availablePhases.length > 1 && (
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1 text-xs font-mono">
            <span className="text-[10px] text-slate-500 uppercase shrink-0 mr-1">
              Phases:
            </span>
            <button
              onClick={() => setSelectedPhaseFilter("ALL")}
              className={`px-2.5 py-0.5 rounded-md text-[11px] whitespace-nowrap transition-all cursor-pointer border ${
                selectedPhaseFilter === "ALL"
                  ? "bg-white/15 border-white/30 text-white font-bold"
                  : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white"
              }`}
            >
              All ({nodes.length})
            </button>
            {availablePhases.map((phase) => {
              const count = nodes.filter(n => n.phase === phase).length;
              return (
                <button
                  key={phase}
                  onClick={() => setSelectedPhaseFilter(phase)}
                  className={`px-2.5 py-0.5 rounded-md text-[11px] whitespace-nowrap transition-all cursor-pointer border ${
                    selectedPhaseFilter === phase
                      ? "bg-red-600/30 border-red-500 text-white font-bold"
                      : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white"
                  }`}
                >
                  {phase} ({count})
                </button>
              );
            })}
          </div>
        )}

      </div>

      {/* The Central Vertical Timeline Tree (Leaf Branch Flow) */}
      <div className="relative w-full py-4 sm:py-6">
        
        {/* Central Vertical Timeline Line */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-red-600 via-red-900/60 to-red-600/30 shadow-[0_0_10px_rgba(226,26,34,0.3)]" />

        {/* Nodes List */}
        <div className="space-y-8 sm:space-y-16">
          {filteredNodes.map((node, index) => {
            const isLeft = index % 2 === 0;
            const isWatched = watchedIds.has(node.id);

            return (
              <div
                key={node.id}
                className="relative flex flex-col lg:flex-row items-center w-full"
              >
                
                {/* Central Timeline Milestone Dot & Release Year */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4 }}
                  className="absolute left-4 sm:left-6 lg:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
                >
                  <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isWatched
                      ? "bg-emerald-500 border-emerald-300 shadow-[0_0_12px_#10b981]"
                      : node.isTarget
                      ? "bg-red-600 border-white animate-pulse shadow-[0_0_15px_rgba(226,26,34,0.8)]"
                      : "bg-[#030508] border-red-500 shadow-[0_0_8px_rgba(226,26,34,0.5)]"
                  }`}>
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Year Tag Badge */}
                  <span className="mt-1 px-1.5 sm:px-2 py-0.5 rounded bg-black/90 border border-white/15 text-[9px] sm:text-[10px] font-mono text-slate-300 whitespace-nowrap shadow-md">
                    {node.year}
                  </span>
                </motion.div>

                {/* Horizontal Connector Branch (Desktop) */}
                <div
                  className={`hidden lg:block absolute top-2.5 h-0.5 bg-gradient-to-r ${
                    isLeft
                      ? "right-1/2 from-transparent to-red-600/70 w-12"
                      : "left-1/2 from-red-600/70 to-transparent w-12"
                  }`}
                />

                {/* Movie Card Container (Alternating Left or Right) */}
                <div
                  className={`w-full lg:w-1/2 pl-10 sm:pl-14 lg:pl-0 ${
                    isLeft ? "lg:pr-14 lg:text-right" : "lg:pl-14 lg:ml-auto lg:text-left"
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -20 : 20,
                      scale: 0.96
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1
                    }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className={`relative rounded-xl sm:rounded-2xl border p-3.5 sm:p-5 backdrop-blur-xl transition-all group ${
                      node.isTarget
                        ? "bg-gradient-to-br from-red-950/40 via-[#070A10] to-[#070A10] border-red-500/60 shadow-[0_0_30px_rgba(226,26,34,0.25)]"
                        : isWatched
                        ? "bg-[#070A10]/70 border-emerald-500/30 text-slate-300"
                        : "bg-[#070A10]/90 border-white/[0.08] hover:border-red-500/40 hover:bg-[#0B0F17]"
                    }`}
                  >
                    
                    {/* Card Content Grid */}
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                      
                      {/* Card Poster with Master Poster Fallback */}
                      <CardPoster
                        poster={node.poster}
                        title={node.title}
                        nodeId={node.id}
                        nodeFranchiseId={node.franchiseId}
                        timelineFranchiseId={selectedFranchiseId}
                        universeName={universeName}
                        nodeIndex={index}
                        isTarget={node.isTarget}
                      />

                      {/* Text Details */}
                      <div className="flex-1 space-y-1.5 sm:space-y-2 text-left min-w-0">
                        
                        {/* Top Badges: Tier, Type & Chrono */}
                        <div className="flex flex-wrap items-center gap-1 sm:gap-1.5">
                          <span className={`px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono uppercase tracking-wider font-semibold border ${
                            node.tier === "Essential"
                              ? "bg-red-500/10 text-red-400 border-red-500/30"
                              : node.tier === "Supplementary"
                              ? "bg-purple-500/10 text-purple-400 border-purple-500/30"
                              : "bg-slate-500/10 text-slate-400 border-slate-500/30"
                          }`}>
                            {node.tier}
                          </span>

                          <span className="px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-white/[0.05] border border-white/10 text-slate-300">
                            {node.type}
                          </span>

                          {node.phase && (
                            <span className="px-1.5 sm:px-2 py-0.5 rounded text-[9px] sm:text-[10px] font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300">
                              {node.phase}
                            </span>
                          )}

                          {node.chronoYear && (
                            <span className="text-[9px] sm:text-[10px] font-mono text-slate-400 flex items-center gap-1 ml-auto">
                              <Calendar className="w-2.5 h-2.5" />
                              <span>{node.chronoYear}</span>
                            </span>
                          )}
                        </div>

                        {/* Title & Order Number */}
                        <h3 className="font-cinematic font-bold text-base sm:text-xl text-white group-hover:text-red-400 transition-colors leading-snug">
                          <span className="text-red-500 font-mono mr-1.5 text-xs sm:text-base">
                            #{node.order}
                          </span>
                          {node.title}
                        </h3>

                        {/* Synopsis & Key Relevance */}
                        <p className="text-xs sm:text-sm text-slate-300 font-sans font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                          {node.reason || node.synopsis}
                        </p>

                        {/* Introduced Characters Tags */}
                        {node.charactersIntroduced && node.charactersIntroduced.length > 0 && (
                          <div className="pt-0.5 flex flex-wrap items-center gap-1">
                            <span className="text-[8px] sm:text-[9px] font-mono text-slate-500 uppercase mr-1">
                              Debuts:
                            </span>
                            {node.charactersIntroduced.slice(0, 3).map((c, i) => (
                              <span key={i} className="px-1.5 py-0.2 bg-white/[0.03] border border-white/5 rounded text-[8px] sm:text-[9px] font-mono text-slate-400">
                                {c}
                              </span>
                            ))}
                            {node.charactersIntroduced.length > 3 && (
                              <span className="text-[8px] sm:text-[9px] font-mono text-slate-500">
                                +{node.charactersIntroduced.length - 3}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Action Buttons */}
                        <div className="pt-2 flex flex-wrap items-center gap-1.5 sm:gap-2 border-t border-white/[0.06]">
                          
                          {/* Mark Watched Toggle */}
                          <button
                            onClick={() => onToggleWatched(node.id)}
                            className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer border min-h-[36px] ${
                              isWatched
                                ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40"
                                : "bg-white/[0.04] text-slate-400 border-white/10 hover:text-white hover:border-white/20"
                            }`}
                          >
                            {isWatched ? (
                              <>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Watched</span>
                              </>
                            ) : (
                              <>
                                <Circle className="w-3.5 h-3.5 text-slate-500" />
                                <span>Mark Watched</span>
                              </>
                            )}
                          </button>

                          {/* Streaming Provider Tag */}
                          {node.streamingOn && (
                            <a
                              href={node.streamUrl || "https://www.google.com/search?q=" + encodeURIComponent(node.title + " stream")}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-mono bg-white/[0.03] hover:bg-white/[0.08] text-slate-300 hover:text-white border border-white/10 transition-all cursor-pointer min-h-[36px]"
                              title={`Watch ${node.title} on ${node.streamingOn}`}
                            >
                              <Tv2 className="w-3.5 h-3.5 text-red-400" />
                              <span className="truncate max-w-[110px] sm:max-w-[140px]">{node.streamingOn}</span>
                              <ExternalLink className="w-2.5 h-2.5 text-slate-500 ml-0.5" />
                            </a>
                          )}

                          {/* Lore Details Modal Trigger */}
                          <button
                            onClick={() => setSelectedModalNode(node)}
                            className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-mono text-slate-400 hover:text-white hover:bg-white/[0.05] transition-all cursor-pointer ml-auto min-h-[36px]"
                          >
                            <span>Details</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>

                        </div>

                      </div>

                    </div>

                  </motion.div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Deep Lore Modal popup */}
      {selectedModalNode && (
        <NodeDetailModal
          node={selectedModalNode}
          onClose={() => setSelectedModalNode(null)}
          isWatched={watchedIds.has(selectedModalNode.id)}
          onToggleWatched={(id) => onToggleWatched(id)}
        />
      )}

    </section>
  );
};
