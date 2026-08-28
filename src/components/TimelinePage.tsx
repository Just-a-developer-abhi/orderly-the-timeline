import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Search, Sparkles, Filter, Tv2, ExternalLink } from 'lucide-react';
import { BranchTimeline } from './BranchTimeline';
import { WatchNode } from './NodeDetailModal';
import { UniverseOption } from '../types';

interface TimelinePageProps {
  watchOrderData: {
    target: string;
    universe: string;
    franchiseId?: string;
    agentAdvice?: string;
    estimatedWatchTimeHours: number;
    nodes: WatchNode[];
  };
  selectedMode: string;
  watchedIds: Set<string>;
  universes: UniverseOption[];
  selectedFranchiseId: string;
  onBackToHero: () => void;
  onSearchSubmit: (query: string) => void;
  onToggleWatched: (id: string) => void;
  onModeChange: (mode: string) => void;
}

export const TimelinePage: React.FC<TimelinePageProps> = ({
  watchOrderData,
  selectedMode,
  watchedIds,
  universes,
  selectedFranchiseId,
  onBackToHero,
  onSearchSubmit,
  onToggleWatched,
  onModeChange
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery.trim());
      setSearchQuery("");
    }
  };

  const effectiveFranchiseId = watchOrderData.franchiseId || selectedFranchiseId;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#030508] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white"
    >
      {/* Top Navigation Bar for Timeline View */}
      <header className="sticky top-0 z-40 w-full bg-[#030508]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-8 py-3.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Back to Home Button & Orderly Logo */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                onBackToHero();
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] hover:bg-red-950/30 border border-white/10 hover:border-red-500/50 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition-all group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-red-400" />
              <span>Back to Home</span>
            </button>

            <span className="font-cinematic font-bold text-sm tracking-[0.25em] text-white uppercase hidden sm:inline">
              ORDERLY
            </span>
          </div>

          {/* Right: Search Input */}
          <form onSubmit={handleSearch} className="relative w-48 sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search another movie..."
              className="w-full bg-black/60 hover:bg-white/[0.06] focus:bg-black border border-white/15 focus:border-red-500/80 rounded-full py-2 pl-9 pr-4 text-xs text-white placeholder-slate-500 outline-none transition-all font-mono"
            />
          </form>

        </div>
      </header>

      {/* Main Alternating Central Branch Timeline Content */}
      <main className="flex-1 w-full bg-[#030508]">
        <BranchTimeline
          nodes={watchOrderData.nodes}
          targetTitle={watchOrderData.target}
          universeName={watchOrderData.universe}
          agentAdvice={watchOrderData.agentAdvice}
          selectedFranchiseId={effectiveFranchiseId}
          selectedMode={selectedMode}
          watchedIds={watchedIds}
          onToggleWatched={onToggleWatched}
          onModeChange={onModeChange}
        />
      </main>

      {/* Minimal Footer */}
      <footer className="w-full bg-black border-t border-white/[0.06] py-8 px-4 text-center">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-cinematic font-bold text-white tracking-widest">ORDERLY</span>
            <span>• Archival Prerequisite Engine.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>Marvel • Star Wars • Naruto • Dragon Ball</span>
          </div>
        </div>
      </footer>

    </motion.div>
  );
};
