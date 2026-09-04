import React, { useState, useRef, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Sparkles, 
  Search, 
  Check, 
  Film, 
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
  AlertOctagon 
} from 'lucide-react';
import { UniverseOption } from '../types';

interface UniversesDropdownProps {
  universes: UniverseOption[];
  selectedFranchiseId: string;
  onSelectUniverse: (franchiseId: string) => void;
  className?: string;
}

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

const WESTERN_IDS = new Set([
  'mcu', 'starwars', 'arrowverse', 'walkingdead', 'matrix', 'terminator', 
  'planetoftheapes', 'saw', 'transformers', 'dune', 'buffyverse', 'battlestargalactica'
]);

export const UniversesDropdown: React.FC<UniversesDropdownProps> = ({
  universes,
  selectedFranchiseId,
  onSelectUniverse,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterQuery, setFilterQuery] = useState("");
  const [activeTab, setActiveTab] = useState<'all' | 'western' | 'anime'>('all');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedUniverse = useMemo(() => {
    return universes.find(u => u.id === selectedFranchiseId) || universes[0];
  }, [universes, selectedFranchiseId]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredUniverses = useMemo(() => {
    return universes.filter((u) => {
      if (activeTab === 'western' && !WESTERN_IDS.has(u.id)) return false;
      if (activeTab === 'anime' && WESTERN_IDS.has(u.id)) return false;

      if (!filterQuery.trim()) return true;
      const q = filterQuery.toLowerCase();
      return (
        u.name.toLowerCase().includes(q) ||
        (u.tagline && u.tagline.toLowerCase().includes(q))
      );
    });
  }, [universes, activeTab, filterQuery]);

  const handleSelect = (id: string) => {
    onSelectUniverse(id);
    setIsOpen(false);
  };

  const SelectedIcon = (selectedUniverse && ICON_MAP[selectedUniverse.icon]) || Globe;

  return (
    <div ref={dropdownRef} className={`relative ${className}`}>
      
      {/* Main Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-red-950/60 to-black/80 hover:from-red-900/70 hover:to-slate-900/90 border border-red-500/40 hover:border-red-400/80 rounded-full text-xs font-mono text-white transition-all shadow-[0_0_15px_rgba(226,26,34,0.25)] group cursor-pointer"
        title="Switch Universe"
      >
        <div className="p-1 rounded-full bg-red-600/30 text-red-400 group-hover:scale-110 transition-transform">
          <SelectedIcon className="w-3.5 h-3.5" />
        </div>

        <div className="flex items-center gap-1.5">
          <span className="font-semibold text-white tracking-wide truncate max-w-[130px] sm:max-w-[170px]">
            {selectedUniverse?.name.split(' (')[0].split(' - ')[0] || "Select Universe"}
          </span>
          <span className="text-[10px] text-red-400 font-bold px-1.5 py-0.2 rounded-full bg-red-600/20">
            {selectedUniverse?.totalNodes || 0}
          </span>
        </div>

        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform duration-200 ${isOpen ? 'rotate-180 text-red-400' : ''}`} />
      </button>

      {/* Floating Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            data-scrollable="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="fixed inset-x-3 top-18 sm:absolute sm:inset-x-auto sm:left-0 sm:top-full mt-2 sm:mt-2 w-auto sm:w-[460px] max-h-[85vh] sm:max-h-[520px] bg-[#07090f]/98 border border-white/20 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.95)] backdrop-blur-2xl z-50 overflow-hidden flex flex-col text-slate-200"
          >
            {/* Header & Search */}
            <div className="p-3 bg-white/[0.02] border-b border-white/10 space-y-2">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-red-400 font-semibold uppercase tracking-wider text-[10px]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>24 Multiverse Universes</span>
                </div>
                <span>325 Total Releases</span>
              </div>

              {/* In-Dropdown Search */}
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={filterQuery}
                  onChange={(e) => setFilterQuery(e.target.value)}
                  placeholder="Quick filter universes..."
                  className="w-full bg-black/80 border border-white/15 focus:border-red-500/70 rounded-xl py-1.5 pl-8 pr-3 text-xs text-white placeholder-slate-500 outline-none font-mono"
                  autoFocus
                />
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1 bg-white/[0.03] p-0.5 rounded-lg border border-white/5 text-[11px] font-mono">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`flex-1 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'all'
                      ? 'bg-red-600 text-white font-semibold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  All (24)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('western')}
                  className={`flex-1 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'western'
                      ? 'bg-red-600 text-white font-semibold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Western (12)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('anime')}
                  className={`flex-1 py-1 rounded-md transition-all cursor-pointer ${
                    activeTab === 'anime'
                      ? 'bg-red-600 text-white font-semibold shadow'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Anime (12)
                </button>
              </div>
            </div>

            {/* Scrollable Compact Grid of Clickable Cards */}
            <div 
              data-scrollable="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="p-2 overflow-y-auto max-h-[340px] grid grid-cols-1 sm:grid-cols-2 gap-1.5 custom-scrollbar overscroll-contain"
            >
              {filteredUniverses.map((u) => {
                const isSelected = u.id === selectedFranchiseId;
                const IconComponent = ICON_MAP[u.icon] || Globe;

                return (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => handleSelect(u.id)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl border text-left transition-all cursor-pointer group ${
                      isSelected
                        ? 'bg-red-950/40 border-red-500/60 shadow-[0_0_12px_rgba(226,26,34,0.3)]'
                        : 'bg-white/[0.02] hover:bg-white/[0.08] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className={`p-1.5 rounded-lg border shrink-0 transition-transform group-hover:scale-105 ${
                        isSelected 
                          ? 'bg-red-600/30 border-red-500/50 text-red-300' 
                          : 'bg-white/[0.04] border-white/10 text-slate-400 group-hover:text-white'
                      }`}>
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>

                      <div className="min-w-0">
                        <div className={`text-xs font-semibold truncate transition-colors ${
                          isSelected ? 'text-white font-bold' : 'text-slate-300 group-hover:text-white'
                        }`}>
                          {u.name.split(' (')[0].split(' - ')[0]}
                        </div>
                        <div className="text-[10px] font-mono text-slate-500 truncate">
                          {WESTERN_IDS.has(u.id) ? 'Western Canon' : 'Anime Saga'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                      <span className={`px-1.5 py-0.5 rounded-full font-mono text-[10px] ${
                        isSelected ? 'bg-red-600 text-white font-bold' : 'bg-white/[0.06] text-slate-400'
                      }`}>
                        {u.totalNodes || 0}
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-red-400" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Dropdown Footer */}
            <div className="px-3 py-2 bg-black border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>Click any universe to load its timeline</span>
              <span>24 Available</span>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
