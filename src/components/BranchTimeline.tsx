import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Tv2, 
  ExternalLink, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Sparkles, 
  Calendar, 
  Layers, 
  ArrowUpRight, 
  Shield, 
  Users 
} from 'lucide-react';
import { WatchNode, NodeDetailModal } from './NodeDetailModal';
import { playHudClick } from '../utils/soundEffects';

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

// 1 Dedicated Master Poster for each franchise to use whenever an image is missing
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
}> = ({ poster, title, nodeId, nodeFranchiseId, timelineFranchiseId, universeName, nodeIndex, isTarget }) => {
  // Determine franchise key with robust multi-layer resolution
  let fKey = "mcu";
  
  if (nodeFranchiseId && FRANCHISE_MASTER_POSTERS[nodeFranchiseId]) {
    fKey = nodeFranchiseId;
  } else if (timelineFranchiseId && FRANCHISE_MASTER_POSTERS[timelineFranchiseId]) {
    fKey = timelineFranchiseId;
  } else if (nodeId.startsWith("sw-")) {
    fKey = "starwars";
  } else if (nodeId.startsWith("naruto-")) {
    fKey = "anime_naruto";
  } else if (nodeId.startsWith("db-")) {
    fKey = "dragonball";
  } else if (nodeId.startsWith("mcu-")) {
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
        <div className="absolute bottom-1 right-1 bg-black/80 text-[8px] font-mono text-yellow-400 px-1 rounded border border-white/10">
          CANON
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
  const [selectedModalNode, setSelectedModalNode] = React.useState<WatchNode | null>(null);

  const totalCount = nodes.length;
  const watchedCount = nodes.filter(n => watchedIds.has(n.id)).length;
  const remainingHours = Math.round(
    nodes.filter(n => !watchedIds.has(n.id)).reduce((sum, n) => sum + (n.runtimeMinutes || 130), 0) / 60 * 10
  ) / 10;

  return (
    <section className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
      
      {/* Timeline Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/[0.08] pb-6">
        <div>
          <div className="flex items-center gap-2 text-red-500 font-mono text-xs uppercase tracking-[0.25em] mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>PREREQUISITE WATCH TIMELINE</span>
          </div>
          <h2 className="font-cinematic font-black text-3xl sm:text-4xl text-white tracking-wide uppercase">
            {targetTitle}
          </h2>
          <p className="text-xs font-mono text-slate-400 mt-1">
            {universeName} • {totalCount} Prerequisite Releases
          </p>
        </div>

        {/* Progress & Remaining Time */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 bg-white/[0.03] border border-white/10 rounded-xl text-right">
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
          className="p-4 rounded-xl bg-gradient-to-r from-red-950/40 via-black/80 to-red-950/20 border border-red-500/30 flex items-start gap-3 shadow-lg"
        >
          <div className="p-1.5 rounded-lg bg-red-600/20 border border-red-500/40 text-red-400 shrink-0 mt-0.5">
            <Sparkles className="w-4 h-4" />
          </div>
          <div className="space-y-0.5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-red-400 font-bold">
              AI WATCH ORDER AGENT
            </div>
            <p className="text-xs sm:text-sm text-slate-200 font-sans font-light leading-relaxed">
              {agentAdvice}
            </p>
          </div>
        </motion.div>
      )}

      {/* Mode Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-xs font-mono text-slate-500 uppercase mr-1">Filter Path:</span>
        {[
          { id: "fast-track", label: "Fast-Track (Essential)" },
          { id: "full-lore", label: "Full Canon Lore" },
          { id: "chronological", label: "Chronological" },
          { id: "zero-filler", label: "Zero Filler" }
        ].map((m) => (
          <button
            key={m.id}
            onClick={() => {
              playHudClick();
              onModeChange(m.id);
            }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all border ${
              selectedMode === m.id
                ? "bg-red-600/20 border-red-500/80 text-white shadow-[0_0_12px_rgba(226,26,34,0.3)]"
                : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      {/* The Central Vertical Timeline Tree (Leaf Branch Flow) */}
      <div className="relative w-full py-8">
        
        {/* Central Vertical Timeline Line */}
        <div className="absolute top-0 bottom-0 left-6 lg:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-red-600 via-red-900/60 to-red-600/30 shadow-[0_0_10px_rgba(226,26,34,0.3)]" />

        {/* Nodes List */}
        <div className="space-y-12 sm:space-y-16">
          {nodes.map((node, index) => {
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
                  className="absolute left-6 lg:left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
                >
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    isWatched
                      ? "bg-emerald-500 border-emerald-300 shadow-[0_0_12px_#10b981]"
                      : node.isTarget
                      ? "bg-red-600 border-white animate-pulse shadow-[0_0_15px_rgba(226,26,34,0.8)]"
                      : "bg-[#030508] border-red-500 shadow-[0_0_8px_rgba(226,26,34,0.5)]"
                  }`}>
                    <div className="w-1.5 h-1.5 rounded-full bg-white" />
                  </div>

                  {/* Year Tag Badge floating right above the dot */}
                  <span className="mt-1 px-2 py-0.5 rounded bg-black/80 border border-white/15 text-[10px] font-mono text-slate-300 whitespace-nowrap shadow-md">
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
                  className={`w-full lg:w-1/2 pl-14 lg:pl-0 ${
                    isLeft ? "lg:pr-14 lg:text-right" : "lg:pl-14 lg:ml-auto lg:text-left"
                  }`}
                >
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: isLeft ? -30 : 30,
                      scale: 0.95
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      scale: 1
                    }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className={`relative rounded-2xl border p-4 sm:p-5 backdrop-blur-xl transition-all group ${
                      node.isTarget
                        ? "bg-gradient-to-br from-red-950/40 via-[#070A10] to-[#070A10] border-red-500/60 shadow-[0_0_30px_rgba(226,26,34,0.25)]"
                        : isWatched
                        ? "bg-[#070A10]/70 border-emerald-500/30 text-slate-300"
                        : "bg-[#070A10]/90 border-white/[0.08] hover:border-red-500/40 hover:bg-[#0B0F17]"
                    }`}
                  >
                    
                    {/* Card Content Grid */}
                    <div className="flex flex-col sm:flex-row items-start gap-4">
                      
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
                      <div className="flex-1 space-y-2 text-left">
                        
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="font-mono text-[10px] text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded border border-white/10">
                            #{node.order} • {node.type}
                          </span>
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase ${
                            node.tier === "Essential" 
                              ? "bg-red-500/15 text-red-400 border border-red-500/40" 
                              : "bg-yellow-500/10 text-yellow-300 border border-yellow-500/30"
                          }`}>
                            {node.tier}
                          </span>
                          {node.phase && (
                            <span className="text-[10px] font-mono text-slate-500">
                              {node.phase}
                            </span>
                          )}
                        </div>

                        <h3 
                          onClick={() => setSelectedModalNode(node)}
                          className="font-cinematic font-bold text-lg sm:text-xl text-white hover:text-red-400 transition-colors cursor-pointer leading-snug"
                        >
                          {node.title}
                        </h3>

                        <p className="text-xs text-slate-300 font-sans font-light line-clamp-2 leading-relaxed">
                          {node.reason}
                        </p>

                        {/* Character Pills */}
                        {node.charactersIntroduced && node.charactersIntroduced.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 pt-1">
                            <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                              <Users className="w-3 h-3 text-red-400" />
                              <span>Key Cast:</span>
                            </span>
                            {node.charactersIntroduced.slice(0, 3).map((char, cIdx) => (
                              <span
                                key={cIdx}
                                className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[10px] font-mono text-slate-300"
                              >
                                {char}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Interactive Actions Row */}
                        <div className="pt-2 flex flex-wrap items-center gap-2.5">
                          
                          {/* Clickable Streaming Button (Redirects to Disney+ Hotstar or Netflix) */}
                          <a
                            href={node.streamUrl || "https://www.hotstar.com"}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-red-600/20 hover:bg-red-600 text-white border border-red-500/50 rounded-lg text-[11px] font-mono font-semibold transition-all shadow group/btn"
                          >
                            <Tv2 className="w-3.5 h-3.5 text-red-400 group-hover/btn:text-white" />
                            <span>Watch on {node.streamingOn.split(' ')[0]}</span>
                            <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/btn:text-white" />
                          </a>

                          {/* Mark Watched Toggle */}
                          <button
                            onClick={() => {
                              playHudClick();
                              onToggleWatched(node.id);
                            }}
                            className={`p-1.5 rounded-lg border text-xs font-mono transition-all flex items-center gap-1 ${
                              isWatched
                                ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                                : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white"
                            }`}
                            title={isWatched ? "Archived" : "Mark as watched"}
                          >
                            {isWatched ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Circle className="w-4 h-4" />}
                          </button>

                          {/* Dossier Brief */}
                          <button
                            onClick={() => {
                              playHudClick();
                              setSelectedModalNode(node);
                            }}
                            className="text-[11px] font-mono text-slate-400 hover:text-white underline underline-offset-2 ml-auto"
                          >
                            Lore details
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

      {/* Node Detail Dossier Modal */}
      <NodeDetailModal
        node={selectedModalNode}
        isWatched={selectedModalNode ? watchedIds.has(selectedModalNode.id) : false}
        onToggleWatched={(id) => onToggleWatched(id)}
        onClose={() => setSelectedModalNode(null)}
      />

    </section>
  );
};
