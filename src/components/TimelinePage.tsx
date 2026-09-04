import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Sparkles, Compass } from 'lucide-react';
import { BranchTimeline } from './BranchTimeline';
import { WatchNode } from './NodeDetailModal';
import { UniverseOption } from '../types';
import { MultiverseDirectoryModal } from './MultiverseDirectoryModal';
import { SearchCommandPalette } from './SearchCommandPalette';
import { UniversesDropdown } from './UniversesDropdown';

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
  const [isDirectoryOpen, setIsDirectoryOpen] = useState(false);

  const effectiveFranchiseId = watchOrderData.franchiseId || selectedFranchiseId;
  const currentUniverse = universes.find(u => u.id === effectiveFranchiseId);
  const currentPresets = currentUniverse?.presetTargets || [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="min-h-screen bg-[#030508] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white"
    >
      {/* Top Navigation Bar for Timeline View */}
      <header className="sticky top-0 z-40 w-full bg-[#030508]/95 backdrop-blur-xl border-b border-white/[0.08] px-3 sm:px-8 py-2.5 sm:py-3 safe-pt">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Left: Back to Home Button, Orderly Logo & Universes Dropdown */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0 min-w-0">
            <button
              onClick={() => {
                onBackToHero();
              }}
              className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 bg-white/[0.04] hover:bg-red-950/30 border border-white/10 hover:border-red-500/50 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition-all group cursor-pointer shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform text-red-400" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Back</span>
            </button>

            {/* Top-Left Universes Dropdown (All 24 Universes) */}
            <UniversesDropdown
              universes={universes}
              selectedFranchiseId={effectiveFranchiseId}
              onSelectUniverse={(id) => {
                if (onFranchiseChange) {
                  onFranchiseChange(id);
                }
              }}
            />

            {/* Multiverse Directory Fullscreen Modal Trigger */}
            <button
              onClick={() => setIsDirectoryOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 bg-white/[0.03] hover:bg-white/10 border border-white/10 rounded-xl text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer shrink-0"
              title="Open Full Multiverse Directory"
            >
              <Compass className="w-3.5 h-3.5 text-red-400" />
              <span className="text-[11px]">Directory</span>
            </button>
          </div>

          {/* Right: Search Command Palette */}
          <div className="w-36 sm:w-72 md:w-80 shrink-0">
            <SearchCommandPalette
              universes={universes}
              selectedFranchiseId={effectiveFranchiseId}
              onSearchSubmit={onSearchSubmit}
              onSelectTarget={(tId, fId) => {
                if (onSelectTarget) {
                  onSelectTarget(tId, fId || effectiveFranchiseId);
                }
              }}
              onOpenDirectory={() => setIsDirectoryOpen(true)}
            />
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
          <div className="flex items-center gap-4 text-slate-400">
            <span>24 Universes • 325 Canonical Releases</span>
          </div>
        </div>
      </footer>

      {/* Multiverse Directory Modal */}
      <MultiverseDirectoryModal
        isOpen={isDirectoryOpen}
        onClose={() => setIsDirectoryOpen(false)}
        universes={universes}
        selectedFranchiseId={effectiveFranchiseId}
        onSelectUniverse={(id) => {
          if (onFranchiseChange) onFranchiseChange(id);
        }}
        onSelectTarget={(targetId, franchiseId) => {
          if (onSelectTarget) onSelectTarget(targetId, franchiseId || effectiveFranchiseId);
        }}
      />

    </motion.div>
  );
};
