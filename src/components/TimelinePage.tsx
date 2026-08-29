import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Search, Sparkles, Filter, Tv2, ExternalLink, ChevronDown, Check } from 'lucide-react';
import { BranchTimeline } from './BranchTimeline';
import { WatchNode } from './NodeDetailModal';
import { UniverseOption } from '../types';

interface TimelinePageProps {
  watchOrderData: {
    target: string;
    targetId?: string;
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
  onFranchiseChange?: (id: string) => void;
  onSelectTarget?: (targetId: string, franchiseId?: string) => void;
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
  onModeChange,
  onFranchiseChange,
  onSelectTarget
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const effectiveFranchiseId = watchOrderData.franchiseId || selectedFranchiseId;
  const currentUniverse = universes.find(u => u.id === effectiveFranchiseId);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery.trim());
      setSearchQuery("");
      setIsSearchFocused(false);
    }
  };

  // Filtered preset targets for search autocomplete
  const currentPresets = currentUniverse?.presetTargets || [];
  const searchSuggestions = searchQuery.trim()
    ? watchOrderData.nodes.filter(n => 
        n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (n.charactersIntroduced && n.charactersIntroduced.some(c => c.toLowerCase().includes(searchQuery.toLowerCase())))
      ).slice(0, 6)
    : [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#030508] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white"
    >
      {/* Top Navigation Bar for Timeline View */}
      <header className="sticky top-0 z-40 w-full bg-[#030508]/95 backdrop-blur-xl border-b border-white/[0.08] px-4 sm:px-8 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          
          {/* Left: Back to Home Button & Orderly Logo */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => {
                onBackToHero();
              }}
              className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.04] hover:bg-red-950/30 border border-white/10 hover:border-red-500/50 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition-all group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-red-400" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </button>

            <span className="font-cinematic font-bold text-sm tracking-[0.25em] text-white uppercase hidden md:inline">
              ORDERLY
            </span>
          </div>

          {/* Center: Universe Switcher Pills */}
          <div className="flex items-center gap-1 sm:gap-1.5 overflow-x-auto no-scrollbar py-1">
            {universes.map((u) => {
              const isActive = u.id === effectiveFranchiseId;
              const shortLabel = u.id === "mcu" ? "Marvel" : u.id === "starwars" ? "Star Wars" : u.id === "anime_naruto" ? "Naruto" : "Dragon Ball";
              return (
                <button
                  key={u.id}
                  onClick={() => {
                    if (onFranchiseChange && u.id !== effectiveFranchiseId) {
                      onFranchiseChange(u.id);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer whitespace-nowrap border ${
                    isActive
                      ? "bg-red-600/20 border-red-500 text-white shadow-[0_0_12px_rgba(226,26,34,0.3)] font-semibold"
                      : "bg-white/[0.03] border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  <span>{shortLabel}</span>
                  {u.totalNodes && (
                    <span className={`ml-1.5 text-[10px] ${isActive ? "text-red-400 font-bold" : "text-slate-500"}`}>
                      {u.totalNodes}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: Search Input */}
          <div className="relative w-40 sm:w-64 shrink-0">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search movie or arc..."
                className="w-full bg-black/60 hover:bg-white/[0.06] focus:bg-black border border-white/15 focus:border-red-500/80 rounded-full py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-500 outline-none transition-all font-mono"
              />
            </form>

            {/* Instant Search Suggestions Dropdown */}
            {isSearchFocused && searchSuggestions.length > 0 && (
              <div className="absolute right-0 mt-2 w-72 bg-[#090d14] border border-white/15 rounded-xl shadow-2xl overflow-hidden z-50 p-1.5 space-y-1">
                <div className="text-[10px] font-mono text-slate-500 px-2 py-1 uppercase tracking-wider">
                  Matching Releases
                </div>
                {searchSuggestions.map((node) => (
                  <button
                    key={node.id}
                    onMouseDown={() => {
                      if (onSelectTarget) {
                        onSelectTarget(node.id, effectiveFranchiseId);
                      }
                      setSearchQuery("");
                      setIsSearchFocused(false);
                    }}
                    className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-white/10 flex items-center justify-between text-xs transition-colors group cursor-pointer"
                  >
                    <div className="truncate mr-2">
                      <div className="font-semibold text-slate-200 group-hover:text-white truncate">
                        {node.title}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400">
                        {node.year} • {node.type} {node.tier === "Essential" ? "• Essential" : ""}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-red-400 uppercase shrink-0">
                      View
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Preset Target Quick-Picker Bar */}
        {currentPresets.length > 0 && (
          <div className="max-w-6xl mx-auto pt-2.5 flex items-center gap-2 overflow-x-auto no-scrollbar border-t border-white/[0.04]">
            <span className="text-[10px] font-mono text-slate-500 uppercase shrink-0 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-red-400" />
              <span>Targets:</span>
            </span>
            {currentPresets.map((preset) => {
              const isTargetActive = watchOrderData.targetId === preset.id || watchOrderData.target.includes(preset.title);
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    if (onSelectTarget) {
                      onSelectTarget(preset.id, effectiveFranchiseId);
                    }
                  }}
                  className={`px-2.5 py-0.5 rounded-md text-[11px] font-mono whitespace-nowrap transition-all cursor-pointer border ${
                    isTargetActive
                      ? "bg-red-600 text-white border-red-500 font-bold shadow-[0_0_10px_rgba(226,26,34,0.4)]"
                      : "bg-white/[0.02] border-white/5 text-slate-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {preset.title}
                </button>
              );
            })}
          </div>
        )}
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
