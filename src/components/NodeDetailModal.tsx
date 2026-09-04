import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Film, 
  Tv, 
  Clock, 
  Calendar, 
  Tv2, 
  ShieldAlert, 
  Sparkles, 
  Users, 
  CheckCircle2, 
  Circle,
  ExternalLink,
  ArrowUpRight
} from 'lucide-react';

export interface WatchNode {
  order: number;
  id: string;
  franchiseId?: string;
  title: string;
  type: string;
  year: number;
  chronoYear?: string;
  phase?: string;
  tier: "Essential" | "Supplementary" | "Skippable";
  runtimeMinutes: number;
  streamingOn: string;
  streamUrl?: string;
  poster?: string;
  synopsis: string;
  reason: string;
  postCredits?: string | null;
  charactersIntroduced?: string[];
  prerequisites: string[];
  isTarget?: boolean;
}

interface NodeDetailModalProps {
  node: WatchNode | null;
  isWatched: boolean;
  onToggleWatched: (id: string) => void;
  onClose: () => void;
}

export const NodeDetailModal: React.FC<NodeDetailModalProps> = ({
  node,
  isWatched,
  onToggleWatched,
  onClose
}) => {
  if (!node) return null;

  const getTierBadge = (tier: string) => {
    switch (tier) {
      case "Essential":
        return "bg-red-500/20 text-red-400 border-red-500/50 shadow-[0_0_15px_rgba(239,68,68,0.3)]";
      case "Supplementary":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/50";
      default:
        return "bg-slate-800 text-slate-400 border-slate-700";
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          className="relative w-full max-w-2xl bg-[#0C101A] border border-white/15 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[92vh] flex flex-col"
        >
          {/* Header Gradient Stripe */}
          <div className={`h-2 w-full shrink-0 ${node.isTarget ? 'bg-gradient-to-r from-red-500 via-yellow-500 to-red-600' : 'bg-gradient-to-r from-red-600 via-red-900 to-red-600'}`} />

          {/* Close Button */}
          <button
            onClick={() => {
              onClose();
            }}
            className="absolute top-4 right-4 p-2.5 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition-all z-10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          <div 
            data-scrollable="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="p-4 sm:p-8 space-y-4 sm:space-y-6 overflow-y-auto flex-1 custom-scrollbar overscroll-contain"
          >
            
            {/* Title & Canon Tags */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-0.5 rounded-full font-mono text-xs font-bold bg-white/10 text-white border border-white/15">
                  NODE #{node.order}
                </span>
                <span className={`px-3 py-0.5 rounded-full font-mono text-xs font-bold uppercase border ${getTierBadge(node.tier)}`}>
                  {node.tier.toUpperCase()} CANON
                </span>
                {node.isTarget && (
                  <span className="px-3 py-0.5 rounded-full font-mono text-xs font-bold bg-red-600/30 text-red-400 border border-red-500 animate-pulse">
                    🎯 TARGET CLIMAX
                  </span>
                )}
                {node.phase && (
                  <span className="px-3 py-0.5 rounded-full font-mono text-xs text-slate-400 bg-black/50 border border-white/10">
                    {node.phase}
                  </span>
                )}
              </div>

              <h2 className="font-cinematic font-black text-2xl sm:text-3xl text-white tracking-wide leading-snug">
                {node.title}
              </h2>

              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Release: {node.year}</span>
                </div>
                {node.chronoYear && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-red-400" />
                    <span>Timeline: {node.chronoYear}</span>
                  </div>
                )}
                <div className="flex items-center gap-1.5">
                  <Tv2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{node.streamingOn}</span>
                </div>
                <div>Runtime: ~{node.runtimeMinutes} min</div>
              </div>
            </div>

            {/* Why Watch Lore Rationale */}
            <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-red-950/40 to-black border border-red-500/40 space-y-2">
              <div className="flex items-center gap-2 text-yellow-300 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <span>Canon Significance & Lore Nexus:</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans font-light">
                {node.reason}
              </p>
            </div>

            {/* Synopsis */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">Archival Synopsis:</h4>
              <p className="text-sm text-slate-300 leading-relaxed font-sans font-light">
                {node.synopsis}
              </p>
            </div>

            {/* Post-Credits Scene Breakdown */}
            {node.postCredits && (
              <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-red-400 font-mono text-xs font-bold uppercase tracking-[0.2em]">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  <span>Post-Credits Lore Connection:</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                  {node.postCredits}
                </p>
              </div>
            )}

            {/* Characters / Lore Debuts */}
            {node.charactersIntroduced && node.charactersIntroduced.length > 0 && (
              <div className="space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
                  <Users className="w-3.5 h-3.5 text-yellow-400" />
                  <span>Key Characters & Lore Debuts:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {node.charactersIntroduced.map((char, cIdx) => (
                    <span
                      key={cIdx}
                      className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {char}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Action: Watched Checkbox & Streaming Direct Link */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => {
                  onToggleWatched(node.id);
                }}
                className={`px-5 py-2.5 rounded-xl font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all border cursor-pointer ${
                  isWatched
                    ? "bg-emerald-500/20 border-emerald-500 text-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    : "bg-white/10 hover:bg-white/20 border-white/20 text-white"
                }`}
              >
                {isWatched ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Archived (Watched)</span>
                  </>
                ) : (
                  <>
                    <Circle className="w-4 h-4 text-slate-400" />
                    <span>Mark as Watched</span>
                  </>
                )}
              </button>

              {node.streamUrl && (
                <a
                  href={node.streamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold tracking-wider uppercase rounded-xl transition-all flex items-center gap-1.5 shadow-[0_0_15px_rgba(226,26,34,0.4)]"
                >
                  <span>Watch on {node.streamingOn.split(' ')[0]}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
