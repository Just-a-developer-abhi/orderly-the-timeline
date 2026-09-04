import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  Film, 
  Tv, 
  X, 
  Layers, 
  Zap, 
  User, 
  Compass,
  CheckCircle2
} from 'lucide-react';
import { fetchAllCanonicalNodes } from '../services/api';
import { UniverseOption } from '../types';

interface SearchCommandPaletteProps {
  universes: UniverseOption[];
  selectedFranchiseId: string;
  onSearchSubmit: (query: string) => void;
  onSelectTarget: (targetId: string, franchiseId?: string) => void;
  onOpenDirectory?: () => void;
  className?: string;
}

const ROTATING_SEARCH_PROMPTS = [
  "Try 'Crisis on Infinite Earths'...",
  "Try 'What to watch before Doomsday'...",
  "Try 'The Matrix Resurrections'...",
  "Try 'The Ones Who Live (Rick Grimes)'...",
  "Try 'Railgun Sisters Arc'...",
  "Try 'End of Evangelion'...",
  "Try 'All Spider-Man movies in order'...",
  "Try 'Dune Part Two'...",
  "Try 'Saw chronological order'...",
  "Try 'Mobile Suit Gundam Hathaway'...",
  "Search 325 releases across 24 universes..."
];

const POPULAR_QUERIES = [
  { query: "Crisis on Infinite Earths", badge: "Arrowverse", desc: "5-show interleaved crossover" },
  { query: "What to watch before Avengers Doomsday", badge: "MCU", desc: "Prerequisite multiverse path" },
  { query: "The Ones Who Live", badge: "Walking Dead", desc: "Rick & Michonne CRM conclusion" },
  { query: "Railgun Sisters Arc", badge: "Raildex", desc: "Simultaneous timeline sequence" },
  { query: "End of Evangelion", badge: "Evangelion", desc: "Canonical TV & Film climax" },
  { query: "Dune Part Two", badge: "Dune", desc: "Bene Gesserit & Paul Atreides saga" },
  { query: "JoJo Stone Ocean", badge: "JoJo", desc: "Generational universe reset" },
  { query: "Saw X chronological", badge: "Saw", desc: "Interquel between Saw 1 & 2" }
];

const POPULAR_CHARACTERS = [
  { name: "Spider-Man", franchise: "mcu" },
  { name: "Darth Vader", franchise: "starwars" },
  { name: "Rick Grimes", franchise: "walkingdead" },
  { name: "Neo", franchise: "matrix" },
  { name: "Sarah Connor", franchise: "terminator" },
  { name: "Caesar", franchise: "planetoftheapes" },
  { name: "Jigsaw", franchise: "saw" },
  { name: "Optimus Prime", franchise: "transformers" },
  { name: "Paul Atreides", franchise: "dune" },
  { name: "Buffy Summers", franchise: "buffyverse" },
  { name: "Amuro Ray", franchise: "gundam_uc" },
  { name: "Misaka Mikoto", franchise: "toaru_raildex" },
  { name: "Shinji Ikari", franchise: "evangelion" },
  { name: "Jotaro Kujo", franchise: "jojo" },
  { name: "Edward Elric", franchise: "fma" },
  { name: "Kirito", franchise: "sao" },
  { name: "Conan Edogawa", franchise: "detective_conan" }
];

export const SearchCommandPalette: React.FC<SearchCommandPaletteProps> = ({
  universes,
  selectedFranchiseId,
  onSearchSubmit,
  onSelectTarget,
  onOpenDirectory,
  className = ""
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load all 325 nodes for fast in-memory filtering
  const allNodes = useMemo(() => fetchAllCanonicalNodes(), []);

  // Rotate search prompt placeholder every 3.2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % ROTATING_SEARCH_PROMPTS.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard shortcut CMD+K or Ctrl+K to focus search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Live Matching Nodes (Filtered by Title, Characters, or Universe)
  const matchingNodes = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase().trim();

    return allNodes
      .filter((node) => {
        const titleMatch = node.title.toLowerCase().includes(q);
        const franchiseMatch = node.franchiseName.toLowerCase().includes(q);
        const charMatch = node.charactersIntroduced?.some((c) => c.toLowerCase().includes(q));
        const synopsisMatch = node.synopsis?.toLowerCase().includes(q);
        return titleMatch || franchiseMatch || charMatch || synopsisMatch;
      })
      .slice(0, 6);
  }, [query, allNodes]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearchSubmit(query.trim());
      setIsOpen(false);
    }
  };

  const handleSelectQueryPrompt = (promptText: string) => {
    setQuery(promptText);
    onSearchSubmit(promptText);
    setIsOpen(false);
  };

  const handleSelectNodeTarget = (node: typeof allNodes[0]) => {
    onSelectTarget(node.id, node.franchiseId);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      
      {/* Search Input Bar */}
      <form onSubmit={handleFormSubmit} className="relative w-full">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
        
        <input
          ref={inputRef}
          type="text"
          value={query}
          onFocus={() => setIsOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            if (!isOpen) setIsOpen(true);
          }}
          placeholder={ROTATING_SEARCH_PROMPTS[promptIndex]}
          className="w-full bg-black/70 hover:bg-white/[0.07] focus:bg-black/95 border border-white/15 focus:border-red-500/80 rounded-full py-2.5 pl-10 pr-20 text-xs sm:text-sm text-white placeholder-slate-400 outline-none transition-all font-mono backdrop-blur-xl shadow-lg"
        />

        {/* Right side controls: Clear or Submit Button + CMD+K Hint */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="p-1 text-slate-400 hover:text-white rounded-full"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          ) : (
            <span className="hidden sm:inline-block px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/10 font-mono text-[9px] text-slate-400">
              ⌘K
            </span>
          )}

          <button
            type="submit"
            className="p-1.5 bg-red-600 hover:bg-red-500 rounded-full text-white cursor-pointer shadow-md transition-all"
            title="Search"
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>

      {/* Floating Autocomplete & Command Palette Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            data-scrollable="true"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            className="fixed inset-x-3 top-18 sm:absolute sm:inset-x-auto sm:top-full sm:right-0 sm:left-auto mt-2 w-auto sm:w-[540px] max-h-[82vh] sm:max-h-[480px] bg-[#07090f]/98 border border-white/20 rounded-2xl shadow-[0_15px_50px_rgba(0,0,0,0.9)] backdrop-blur-2xl z-50 overflow-hidden flex flex-col text-slate-200"
          >
            
            {/* Header info / Directory quick link */}
            <div className="px-4 py-2.5 bg-white/[0.02] border-b border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400 shrink-0">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-red-400" />
                <span>Multiverse Intelligence</span>
              </div>

              {onOpenDirectory && (
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenDirectory();
                  }}
                  className="text-red-400 hover:text-red-300 underline underline-offset-2 flex items-center gap-1 cursor-pointer"
                >
                  <Compass className="w-3 h-3" />
                  <span>Browse 24 Universes</span>
                </button>
              )}
            </div>

            {/* Content area */}
            <div 
              data-scrollable="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="p-3 overflow-y-auto space-y-4 max-h-[400px] custom-scrollbar overscroll-contain flex-1"
            >
              
              {/* IF QUERY HAS TEXT: SHOW LIVE MATCHING RELEASES */}
              {query.trim() ? (
                <div>
                  <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 flex items-center justify-between">
                    <span>Direct Canonical Matches ({matchingNodes.length})</span>
                    <span className="text-[9px]">Click to generate watch order</span>
                  </div>

                  {matchingNodes.length > 0 ? (
                    <div className="space-y-1.5 mt-1">
                      {matchingNodes.map((node) => (
                        <div
                          key={node.id}
                          onClick={() => handleSelectNodeTarget(node)}
                          className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-red-500/40 cursor-pointer transition-all group"
                        >
                          <img
                            src={node.poster}
                            alt={node.title}
                            className="w-10 h-14 object-cover rounded-lg shrink-0 border border-white/10"
                            onError={(e) => {
                              (e.target as HTMLElement).style.display = 'none';
                            }}
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="px-1.5 py-0.5 rounded bg-red-600/20 text-red-400 font-mono text-[9px] uppercase font-semibold">
                                {node.franchiseName.split(' ')[0]}
                              </span>
                              <span className="text-slate-400 font-mono text-[10px]">
                                {node.year}
                              </span>
                            </div>
                            <h4 className="text-xs font-semibold text-white truncate group-hover:text-red-400 transition-colors mt-0.5">
                              {node.title}
                            </h4>
                            <p className="text-[11px] text-slate-400 truncate mt-0.5 font-light">
                              {node.synopsis}
                            </p>
                          </div>
                          <div className="shrink-0 text-slate-500 group-hover:text-white transition-colors">
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center text-xs text-slate-400 font-mono">
                      No exact title match for "{query}". Press Enter to run full NLP agent search.
                    </div>
                  )}

                  {/* Ask Agent directly */}
                  <div
                    onClick={() => handleSelectQueryPrompt(query)}
                    className="mt-2 p-2.5 rounded-xl bg-red-950/30 hover:bg-red-900/40 border border-red-500/40 cursor-pointer flex items-center justify-between text-xs font-mono text-white transition-all"
                  >
                    <div className="flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-red-400" />
                      <span>Search AI: <strong className="text-red-300">"{query}"</strong></span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-red-400" />
                  </div>
                </div>
              ) : (
                /* IF QUERY IS EMPTY: SHOW POPULAR QUERIES & CHARACTERS */
                <>
                  {/* Popular Watch Prompts */}
                  <div>
                    <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Zap className="w-3 h-3 text-red-400" />
                      <span>What Users Ask (Click to Test)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mt-1">
                      {POPULAR_QUERIES.map((item) => (
                        <button
                          key={item.query}
                          type="button"
                          onClick={() => handleSelectQueryPrompt(item.query)}
                          className="flex flex-col text-left p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-red-500/40 transition-all cursor-pointer group"
                        >
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-xs font-semibold text-slate-200 group-hover:text-white truncate">
                              {item.query}
                            </span>
                            <span className="text-[9px] font-mono px-1 rounded bg-white/[0.05] text-red-400">
                              {item.badge}
                            </span>
                          </div>
                          <span className="text-[10px] text-slate-500 font-sans mt-0.5 truncate">
                            {item.desc}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Character Filters */}
                  <div>
                    <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <User className="w-3 h-3 text-red-400" />
                      <span>Search by Character Arc</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-1 px-1">
                      {POPULAR_CHARACTERS.map((char) => (
                        <button
                          key={char.name}
                          type="button"
                          onClick={() => handleSelectQueryPrompt(char.name)}
                          className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-red-600/30 border border-white/10 hover:border-red-500/40 text-[11px] font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
                        >
                          {char.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Quick Universe Jump Bar */}
                  {onOpenDirectory && (
                    <div className="pt-2 border-t border-white/10">
                      <button
                        type="button"
                        onClick={() => {
                          setIsOpen(false);
                          onOpenDirectory();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-200 hover:text-white transition-all cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Compass className="w-4 h-4 text-red-400" />
                          <span>Browse Full Directory of All 24 Universes</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>
                  )}
                </>
              )}

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
