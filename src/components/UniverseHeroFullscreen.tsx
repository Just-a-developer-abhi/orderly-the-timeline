import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { playHudClick } from '../utils/soundEffects';
import { UniverseOption } from '../types';

interface UniverseHeroFullscreenProps {
  universes: UniverseOption[];
  selectedFranchiseId: string;
  onFranchiseChange: (id: string) => void;
  onSearchSubmit: (query: string) => void;
  onSelectTarget: (targetId: string, franchiseId?: string) => void;
}

const UNIVERSE_CONFIGS: Record<string, {
  name: string;
  shortName: string;
  images: string[];
  stages: Array<{
    badge: string;
    titleLine1: string;
    titleLine2: string;
    leftSub: string;
    rightTag: string;
    rightText: string;
    rightAction: string;
    targetId: string;
  }>;
}> = {
  mcu: {
    name: "Marvel Cinematic Universe",
    shortName: "Marvel",
    images: [
      "/assets/Images/Spiderman/Spiderman1.jpeg",
      "/assets/Images/Spiderman/Spiderman2.jpeg",
      "/assets/Images/Spiderman/Spiderman3.jpeg",
      "/assets/Images/Spiderman/Spiderman4.jpeg"
    ],
    stages: [
      {
        badge: "Watch it in Right order",
        titleLine1: "NEVER WATCH",
        titleLine2: "OUT OF ORDER",
        leftSub: "The sacred Marvel Cinematic Universe & Spider-Man timeline directory.",
        rightTag: "CANONICAL GENESIS",
        rightText: "From Tony Stark's cave origin in 2008 to multiversal incursion points.",
        rightAction: "Explore Avengers: Doomsday",
        targetId: "mcu-doomsday"
      },
      {
        badge: "Zero Filler • Surgical Pruning",
        titleLine1: "PRUNED TO",
        titleLine2: "PERFECTION",
        leftSub: "Recursive DAG algorithm strips filler and reveals mandatory canon paths.",
        rightTag: "DEPENDENCY MATRIX",
        rightText: "Every post-credit scene, character debut, and multiversal convergence mapped.",
        rightAction: "Explore Secret Wars",
        targetId: "mcu-secret-wars"
      },
      {
        badge: "Multiverse Nexus • Phase 6",
        titleLine1: "THE INVASION",
        titleLine2: "OF DOOMSDAY",
        leftSub: "Robert Downey Jr. returns as Doctor Doom. The Sacred Timeline fractures.",
        rightTag: "CLIMAX TARGET",
        rightText: "Ready for Battleworld? Navigate the complete prerequisite watch path.",
        rightAction: "Open Full Watch Path →",
        targetId: "mcu-doomsday"
      }
    ]
  },

  starwars: {
    name: "Star Wars Canon",
    shortName: "Star Wars",
    images: [
      "/assets/Images/Starwars/SW2.jpeg",
      "/assets/Images/Starwars/SW3.jpeg",
      "/assets/Images/Starwars/SW4.jpeg",
      "/assets/Images/Starwars/SW5.jpeg"
    ],
    stages: [
      {
        badge: "A Long Time Ago in a Galaxy Far Away",
        titleLine1: "THE JEDI & SITH",
        titleLine2: "CANON ORDER",
        leftSub: "From the Dawn of the Clone Wars to the Mandoverse & Ahsoka.",
        rightTag: "GALACTIC TIMELINE",
        rightText: "Experience the complete Skywalker legacy without missing key animated lore.",
        rightAction: "Explore Ahsoka Timeline",
        targetId: "sw-ahsoka"
      },
      {
        badge: "The Clone Wars & Rebels Nexus",
        titleLine1: "THE WORLD",
        titleLine2: "BETWEEN WORLDS",
        leftSub: "Siege of Mandalore, Andor, Rogue One, and the return of Luke Skywalker.",
        rightTag: "MANDOVERSE LORE",
        rightText: "Connect the dots leading straight to Grand Admiral Thrawn's resurgence.",
        rightAction: "Explore The Mandalorian",
        targetId: "sw-mando-s3"
      },
      {
        badge: "Heir to the Empire Climax",
        titleLine1: "THE RETURN",
        titleLine2: "OF THRAWN",
        leftSub: "Grand Admiral Thrawn returns from extra-galactic exile on Peridea.",
        rightTag: "TARGET CLIMAX",
        rightText: "Pruned essential watch path directly to Ahsoka and the New Republic era.",
        rightAction: "Open Ahsoka Watch Path →",
        targetId: "sw-ahsoka"
      }
    ]
  },

  anime_naruto: {
    name: "Naruto & Shippuden",
    shortName: "Naruto",
    images: [
      "/assets/Images/Naruto/Naruto.jpeg",
      "/assets/Images/Naruto/Naruto1.jpeg",
      "/assets/Images/Naruto/Naruto2.jpeg",
      "/assets/Images/Naruto/Naruto3.jpeg"
    ],
    stages: [
      {
        badge: "Believe It! (Dattebayo)",
        titleLine1: "THE SHINOBI",
        titleLine2: "CHRONICLES",
        leftSub: "From Genin in Hidden Leaf Village to the Savior of the Ninja World.",
        rightTag: "LEAF VILLAGE ORIGIN",
        rightText: "Land of Waves, Chunin Exams, and the legendary Valley of the End.",
        rightAction: "Explore War Finale",
        targetId: "naruto-war-finale"
      },
      {
        badge: "Zero-Filler Purge Activated",
        titleLine1: "100+ FILLER",
        titleLine2: "STRIPPED AWAY",
        leftSub: "Watch only the true manga canon arcs and Jiraiya's defining narrative.",
        rightTag: "AKATSUKI CONFLICT",
        rightText: "Pain's Assault, Five Kage Summit, and the truth of the Uchiha Clan.",
        rightAction: "Explore Pain Arc",
        targetId: "naruto-pain-arc"
      },
      {
        badge: "Fourth Great Ninja War",
        titleLine1: "VALLEY OF THE",
        titleLine2: "END CLIMAX",
        leftSub: "Madara descends, Kaguya awakens, and Naruto & Sasuke fight their final duel.",
        rightTag: "TARGET CLIMAX",
        rightText: "The streamlined 17-hour canon watch path straight to the finale.",
        rightAction: "Open Naruto Watch Path →",
        targetId: "naruto-war-finale"
      }
    ]
  },

  dragonball: {
    name: "Dragon Ball Z & Super",
    shortName: "DBZ",
    images: [
      "/assets/Images/DBZ/DBZ.jpeg",
      "/assets/Images/DBZ/DBZ2.jpeg",
      "/assets/Images/DBZ/DBZ3.jpeg",
      "/assets/Images/DBZ/DBZ4.jpeg"
    ],
    stages: [
      {
        badge: "Kamehameha!",
        titleLine1: "THE SAIYAN",
        titleLine2: "SAGA ODYSSEY",
        leftSub: "From Saiyan invasions to Planet Namek, Cell Games, and Majin Buu.",
        rightTag: "SUPER SAIYAN DAWN",
        rightText: "Goku, Vegeta, and the legendary transformations that defined anime history.",
        rightAction: "Explore Super Hero",
        targetId: "db-super-hero"
      },
      {
        badge: "God Ki & Ultra Instinct",
        titleLine1: "TOURNAMENT",
        titleLine2: "OF POWER",
        leftSub: "Lord Beerus, Whis, Golden Frieza, and the 8-universe Battle Royale.",
        rightTag: "GOD KI EVOLUTION",
        rightText: "Canon movies and essential Super arcs streamlined for maximum impact.",
        rightAction: "Explore Broly Movie",
        targetId: "db-super-broly"
      },
      {
        badge: "Beast Unleashed",
        titleLine1: "GOHAN BEAST",
        titleLine2: "SUPER HERO",
        leftSub: "Orange Piccolo and Gohan Beast ascend to crush the Red Ribbon Army.",
        rightTag: "TARGET CLIMAX",
        rightText: "The definitive Dragon Ball Super watch journey directly to Super Hero.",
        rightAction: "Open DBZ Watch Path →",
        targetId: "db-super-hero"
      }
    ]
  }
};

export const UniverseHeroFullscreen: React.FC<UniverseHeroFullscreenProps> = ({
  universes,
  selectedFranchiseId,
  onFranchiseChange,
  onSearchSubmit,
  onSelectTarget,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [turnProgress, setTurnProgress] = useState(0); // 0.0 to 1.0
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const targetProgressRef = useRef(0);
  const animationFrameRef = useRef<number | null>(null);

  // Wheel and touch gesture listener with smooth reduced sensitivity & dwell buffer
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      // Reduced sensitivity: ~4x slower so images stay for multiple scrolls
      const delta = e.deltaY * 0.00035;
      targetProgressRef.current = Math.max(0, Math.min(1, targetProgressRef.current + delta));
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      // Reduced touch delta
      const delta = (touchStartY - e.touches[0].clientY) * 0.0008;
      touchStartY = e.touches[0].clientY;
      targetProgressRef.current = Math.max(0, Math.min(1, targetProgressRef.current + delta));
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    // Smooth lerp loop with weighted inertia
    const animate = () => {
      setTurnProgress((prev) => {
        const next = prev + (targetProgressRef.current - prev) * 0.08;
        const stage = next < 0.38 ? 0 : next < 0.72 ? 1 : 2;
        setActiveStageIndex(stage);
        return next;
      });
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      playHudClick();
      onSearchSubmit(searchQuery.trim());
    }
  };

  const config = UNIVERSE_CONFIGS[selectedFranchiseId] || UNIVERSE_CONFIGS.mcu;
  const currentStage = config.stages[activeStageIndex] || config.stages[0];
  const images = config.images;
  const numImages = images.length;

  // Dwell / Plateau function so images stay 100% visible for a couple of scrolls
  // u is continuous index in [0, numImages - 1]
  const u = turnProgress * (numImages - 1);
  const activeImageIdx = Math.floor(u);
  const frac = u - activeImageIdx;

  // Dwell calculation:
  // frac in [0, 0.40] -> Dwell solidly on activeImageIdx
  // frac in [0.40, 0.70] -> Smooth cosine crossfade to activeImageIdx + 1
  // frac in [0.70, 1.0] -> Dwell solidly on activeImageIdx + 1
  const getImageOpacity = (index: number) => {
    if (index === activeImageIdx) {
      if (frac <= 0.40) return 1;
      if (frac >= 0.70) return 0;
      // Cosine ease out
      const t = (frac - 0.40) / 0.30;
      return 0.5 * (1 + Math.cos(t * Math.PI));
    }
    if (index === activeImageIdx + 1) {
      if (frac <= 0.40) return 0;
      if (frac >= 0.70) return 1;
      // Cosine ease in
      const t = (frac - 0.40) / 0.30;
      return 0.5 * (1 - Math.cos(t * Math.PI));
    }
    return 0;
  };

  const yawAngle = (1 - turnProgress) * -12;

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-between select-none">
      
      {/* Infinite Pure Black Vignette Background */}
      <div className="absolute inset-0 bg-[#000000]" />
      
      {/* Subtle Ambient Red Atmospheric Rim */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] h-[85vh] bg-red-950/15 rounded-full blur-[160px] pointer-events-none" />

      {/* FULLSCREEN INFINITE CHARACTER CANVAS (Dwells solidly on each image before slow subtle transition) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
        <div 
          className="relative w-full h-full max-w-7xl max-h-screen flex items-center justify-center perspective-1000"
          style={{
            transform: `rotateY(${yawAngle}deg)`,
            transition: "transform 0.2s ease-out"
          }}
        >
          {images.map((imgSrc, i) => {
            const opacity = getImageOpacity(i);

            return (
              <div
                key={imgSrc}
                style={{ 
                  opacity,
                  visibility: opacity > 0.01 ? 'visible' : 'hidden'
                }}
                className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
              >
                <img
                  src={imgSrc}
                  alt={`${config.name} frame ${i + 1}`}
                  className="w-full h-full object-contain filter contrast-125 brightness-100 drop-shadow-[0_0_40px_rgba(226,26,34,0.25)]"
                />
              </div>
            );
          })}
        </div>

        {/* Soft edge fade blending seamlessly into pure black */}
        <div className="absolute inset-0 bg-radial-vignette opacity-75 pointer-events-none" />
      </div>

      {/* TOP NAVIGATION BAR (As Specified in Reference Image) */}
      <header className="relative z-30 w-full px-6 sm:px-10 pt-6 flex items-center justify-between">
        
        {/* Top Left: Subtle Website Name & Rest of the Bar */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-cinematic font-bold text-sm sm:text-base tracking-[0.3em] text-white uppercase">
              ORDERLY
            </span>
          </div>

          {/* Rest of the Bar: Dedicated Universe Switchers */}
          <div className="hidden md:flex items-center gap-1.5 border-l border-white/10 pl-6">
            {Object.entries(UNIVERSE_CONFIGS).map(([key, item]) => {
              const isSelected = key === selectedFranchiseId;
              return (
                <button
                  key={key}
                  onClick={() => {
                    playHudClick();
                    onFranchiseChange(key);
                  }}
                  className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all ${
                    isSelected
                      ? "bg-white/10 text-white border border-white/20 shadow-md font-semibold"
                      : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {item.shortName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Top Right: Search Bar */}
        <div className="flex items-center gap-3">
          <form onSubmit={handleSearch} className="relative w-56 sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${config.shortName} or target...`}
              className="w-full bg-black/60 hover:bg-white/[0.06] focus:bg-black/90 border border-white/15 focus:border-red-500/80 rounded-full py-2 pl-9 pr-8 text-xs text-white placeholder-slate-500 outline-none transition-all font-mono backdrop-blur-md"
            />
            {searchQuery && (
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-red-600 rounded-full text-white"
              >
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            )}
          </form>
        </div>

      </header>

      {/* CENTER INTERACTIVE CONTENT: UPPER LEFT & LOWER RIGHT (Marked 'HERE' in Reference Mockup) */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-between py-12 pointer-events-none">
        
        {/* UPPER LEFT CONTENT AREA (Marked 'HERE' in Reference Mockup) */}
        <div className="max-w-md pt-4 sm:pt-8 text-left pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedFranchiseId}-${activeStageIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              {/* Subtle Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-red-400 font-mono text-[11px] uppercase tracking-[0.25em]">
                <Sparkles className="w-3 h-3 text-red-500" />
                <span>{currentStage.badge}</span>
              </div>

              {/* Bold Cinematic Title */}
              <h1 className="font-cinematic font-black text-3xl sm:text-5xl text-white tracking-wide uppercase leading-tight">
                {currentStage.titleLine1} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-white">
                  {currentStage.titleLine2}
                </span>
              </h1>

              <p className="text-xs sm:text-sm font-sans font-light text-slate-400 leading-relaxed max-w-sm">
                {currentStage.leftSub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* LOWER RIGHT CONTENT AREA (Marked 'HERE' in Reference Mockup) */}
        <div className="max-w-sm ml-auto pb-6 text-right pointer-events-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedFranchiseId}-${activeStageIndex}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5 }}
              className="space-y-2.5"
            >
              <div className="font-mono text-[10px] text-red-500 uppercase tracking-[0.3em] font-semibold">
                {currentStage.rightTag}
              </div>

              <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                {currentStage.rightText}
              </p>

              <button
                onClick={() => {
                  playHudClick();
                  onSelectTarget(currentStage.targetId, selectedFranchiseId);
                }}
                className="mt-2 inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600 text-white border border-red-500/50 rounded-xl text-xs font-mono tracking-wider uppercase transition-all shadow-[0_0_15px_rgba(226,26,34,0.3)] group cursor-pointer"
              >
                <span>{currentStage.rightAction}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* BOTTOM SCROLL / TURN HINT */}
      <footer className="relative z-30 w-full pb-6 flex items-center justify-between px-6 sm:px-10 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
        <div>
          FRAME: 0{Math.min(numImages, activeImageIdx + 1)} // 0{numImages}
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span>Scroll slowly to shift frames</span>
          <ChevronDown className="w-3 h-3 text-red-500 animate-bounce" />
        </div>

        <div>
          STAGE: {activeStageIndex + 1} / 3
        </div>
      </footer>

    </div>
  );
};
