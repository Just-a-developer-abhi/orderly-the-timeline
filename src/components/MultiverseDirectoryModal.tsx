import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Search, 
  Sparkles, 
  Globe, 
  Tv, 
  Flame, 
  Shield, 
  Crosshair, 
  Zap, 
  Target, 
  Cpu, 
  Skull, 
  Crown, 
  Activity, 
  Sun, 
  Moon, 
  Radio, 
  Binary, 
  AlertOctagon, 
  ArrowRight,
  Film,
  Layers
} from 'lucide-react';
import { UniverseOption } from '../types';

interface MultiverseDirectoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  universes: UniverseOption[];
  selectedFranchiseId: string;
  onSelectUniverse: (franchiseId: string) => void;
  onSelectTarget: (targetId: string, franchiseId?: string) => void;
}

// Icon mapping helper
const ICON_MAP: Record<string, React.ElementType> = {
  Sparkles,
  Tv,
  Skull,
  Binary,
  Cpu,
  Crown,
  Activity,
  Shield,
  Sun,
  Moon,
  Radio,
  Crosshair,
  Zap,
  ShieldAlert: AlertOctagon,
  Flame,
  Sword: Crosshair,
  Target,
  Search,
  AlertOctagon,
  Globe
};

const WESTERN_UNIVERSE_IDS = new Set([
  'mcu', 'starwars', 'arrowverse', 'walkingdead', 'matrix', 'terminator', 
  'planetoftheapes', 'saw', 'transformers', 'dune', 'buffyverse', 'battlestargalactica'
]);

export const MultiverseDirectoryModal: React.FC<MultiverseDirectoryModalProps> = ({
  isOpen,
  onClose,
  universes,
  selectedFranchiseId,
  onSelectUniverse,
  onSelectTarget,
}) => {
  const [filterQuery, setFilterQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'western' | 'anime'>('all');

  const totalReleases = useMemo(() => {
    return universes.reduce((acc, u) => acc + (u.totalNodes || 0), 0);
  }, [universes]);

  const filteredUniverses = useMemo(() => {
    return universes.filter((u) => {
      // Category filter
      if (activeCategory === 'western' && !WESTERN_UNIVERSE_IDS.has(u.id)) return false;
      if (activeCategory === 'anime' && WESTERN_UNIVERSE_IDS.has(u.id)) return false;

      // Text query filter
      if (!filterQuery.trim()) return true;
      const q = filterQuery.toLowerCase();
      const matchName = u.name.toLowerCase().includes(q);
      const matchTagline = u.tagline?.toLowerCase().includes(q);
      const matchPreset = u.presetTargets?.some(p => p.title.toLowerCase().includes(q));
      return matchName || matchTagline || matchPreset;
    });
  }, [universes, activeCategory, filterQuery]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        
        {/* Backdrop Blur */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-all"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          data-scrollable="true"
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
          className="relative z-10 w-full max-w-5xl max-h-[90vh] bg-[#07090e] border border-white/15 rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.9)] flex flex-col overflow-hidden text-slate-100"
        >
          {/* Header Banner */}
          <div className="px-6 sm:px-8 pt-6 pb-4 border-b border-white/10 flex items-center justify-between gap-4 bg-gradient-to-r from-red-950/20 via-black to-slate-900/20 shrink-0">
            <div>
              <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-red-400">
                <Sparkles className="w-3.5 h-3.5 text-red-500" />
                <span>Multiverse Catalog</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{universes.length} Universes</span>
                <span className="text-slate-600">•</span>
                <span className="text-slate-400">{totalReleases} Canonical Releases</span>
              </div>
              <h2 className="font-cinematic font-black text-2xl sm:text-3xl text-white tracking-wide uppercase mt-1">
                Explore The Multiverse
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/[0.04] hover:bg-white/15 border border-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
              title="Close (ESC)"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search & Category Filter Controls */}
          <div className="px-6 sm:px-8 py-3.5 bg-black/40 border-b border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 bg-white/[0.03] p-1 border border-white/10 rounded-xl">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === 'all'
                    ? 'bg-red-600 text-white font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                All (24)
              </button>
              <button
                onClick={() => setActiveCategory('western')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === 'western'
                    ? 'bg-red-600 text-white font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Western & Cinema (12)
              </button>
              <button
                onClick={() => setActiveCategory('anime')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                  activeCategory === 'anime'
                    ? 'bg-red-600 text-white font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Anime & Japanese (12)
              </button>
            </div>

            {/* In-Modal Instant Filter */}
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
              <input
                type="text"
                value={filterQuery}
                onChange={(e) => setFilterQuery(e.target.value)}
                placeholder="Filter universes or characters..."
                className="w-full bg-black/60 border border-white/15 focus:border-red-500/80 rounded-xl py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-500 outline-none transition-all font-mono"
              />
              {filterQuery && (
                <button
                  onClick={() => setFilterQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white text-xs"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

          </div>

          {/* Grid of Universe Cards */}
          <div 
            data-scrollable="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="p-6 sm:p-8 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 custom-scrollbar overscroll-contain"
          >
            {filteredUniverses.map((u) => {
              const isSelected = u.id === selectedFranchiseId;
              const IconComponent = ICON_MAP[u.icon] || Globe;

              return (
                <motion.div
                  key={u.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`group relative p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gradient-to-b from-red-950/40 to-black/80 border-red-500/60 shadow-[0_0_20px_rgba(226,26,34,0.2)]'
                      : 'bg-white/[0.02] hover:bg-white/[0.06] border-white/10 hover:border-white/25'
                  }`}
                >
                  <div>
                    {/* Top Row: Icon + Badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-xl bg-white/[0.05] border border-white/10 text-red-400 group-hover:scale-110 transition-transform">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                          {WESTERN_UNIVERSE_IDS.has(u.id) ? 'Western Canon' : 'Anime Saga'}
                        </span>
                      </div>

                      <span className="px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/10 font-mono text-[10px] text-slate-300">
                        {u.totalNodes || u.presetTargets?.length || 0} releases
                      </span>
                    </div>

                    {/* Universe Title */}
                    <h3 className="font-cinematic font-bold text-lg text-white tracking-wide group-hover:text-red-400 transition-colors">
                      {u.name}
                    </h3>

                    {/* Tagline */}
                    <p className="text-xs text-slate-400 font-sans line-clamp-2 mt-1 leading-relaxed">
                      {u.tagline}
                    </p>
                  </div>

                  {/* Preset Target Shortcuts */}
                  <div className="mt-4 pt-3 border-t border-white/[0.08] space-y-1.5">
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                      Popular Targets:
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {(u.presetTargets || []).slice(0, 2).map((target) => (
                        <button
                          key={target.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectTarget(target.id, u.id);
                            onClose();
                          }}
                          className="px-2.5 py-1 rounded-lg bg-black/60 hover:bg-red-600/30 border border-white/10 hover:border-red-500/50 text-[11px] font-mono text-slate-300 hover:text-white transition-all text-left truncate max-w-[200px] cursor-pointer group/btn"
                        >
                          <span className="text-red-400 mr-1">⚡</span>
                          {target.title}
                        </button>
                      ))}
                    </div>

                    {/* Browse Complete Timeline Action */}
                    <button
                      onClick={() => {
                        onSelectUniverse(u.id);
                        onClose();
                      }}
                      className="w-full mt-2 flex items-center justify-between px-3 py-1.5 rounded-xl bg-white/[0.04] hover:bg-white/15 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all cursor-pointer"
                    >
                      <span>Explore Timeline</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-red-400" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Footer Info */}
          <div className="px-6 sm:px-8 py-3 bg-black border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <div>
              Click any universe to explore or select a target to generate its prerequisite DAG.
            </div>
            <div className="hidden sm:block">
              24 Connected Universes Available
            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
