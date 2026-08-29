import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
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
      "/assets/Images/Spiderman/spiderman1.jpg",
      "/assets/Images/Spiderman/spiderman2.jpg",
      "/assets/Images/Spiderman/spiderman3.jpg",
      "/assets/Images/Spiderman/Spiderman4.jpeg",
      "/assets/Images/Spiderman/Marvel3.jpg"
    ],
    stages: [
      {
        badge: "Watch it in Right order • Phase 1 to 6",
        titleLine1: "NEVER WATCH",
        titleLine2: "OUT OF ORDER",
        leftSub: "The sacred Marvel Cinematic Universe & Spider-Man multiversal timeline directory.",
        rightTag: "CANONICAL GENESIS",
        rightText: "From Tony Stark's cave origin in 2008 to the fracturing of the Sacred Timeline.",
        rightAction: "Explore Avengers: Doomsday",
        targetId: "mcu-doomsday"
      },
      {
        badge: "Phase 6 Incursions • The Doom Variant Theory",
        titleLine1: "THE INVASION",
        titleLine2: "OF DOOMSDAY",
        leftSub: "Robert Downey Jr. returns as Victor Von Doom. Universes collide as multiversal incursions accelerate.",
        rightTag: "MULTIVERSE COLLAPSE",
        rightText: "Is Doom a Tony Stark variant from an incursion-ravaged Earth, or the absolute ruler of Latveria?",
        rightAction: "Explore Doomsday Path →",
        targetId: "mcu-doomsday"
      },
      {
        badge: "Battleworld Nexus • Phase 6 Climax",
        titleLine1: "SECRET WARS",
        titleLine2: "BATTLEWORLD",
        leftSub: "The ultimate collision of all Marvel realities. Avengers, X-Men, Spider-Men, and Fantastic Four collide.",
        rightTag: "OMEGA CONVERGENCE",
        rightText: "From Loki's timeline tree at the End of Time to the Void and the death of the multiverse.",
        rightAction: "Explore Secret Wars →",
        targetId: "mcu-secret-wars"
      },
      {
        badge: "Spider-Man Saga • Multiverse Web",
        titleLine1: "THE WEB OF",
        titleLine2: "ALL REALITIES",
        leftSub: "Peter Parker's memory wiped from the world, the left-behind Venom symbiote, and the road to Spider-Man 4.",
        rightTag: "SYMBIOTE & STREET",
        rightText: "Kingpin rules New York while Peter operates in the shadows. The multiverse still remembers his sacrifice.",
        rightAction: "Explore Spider-Man Arc →",
        targetId: "mcu-spiderman-nwh"
      },
      {
        badge: "Mutants & Fantastic Four • First Steps",
        titleLine1: "MUTANT DAWN &",
        titleLine2: "THE FIRST STEPS",
        leftSub: "The X-Men cross dimensional barriers as Marvel's First Family arrives from their retro-futuristic 1960s universe.",
        rightTag: "ANCHOR BEINGS",
        rightText: "The TVA monitors timeline decay as Wolverine, Deadpool, and Galactus herald the rebirth of the cosmos.",
        rightAction: "Explore Deadpool & Wolverine →",
        targetId: "mcu-deadpool-wolverine"
      },
      {
        badge: "Zero Filler • Surgical Pruning",
        titleLine1: "PRUNED TO",
        titleLine2: "PERFECTION",
        leftSub: "Autonomous DAG traversal strips 100+ hours of filler and calculates mandatory narrative arcs.",
        rightTag: "DEPENDENCY ENGINE",
        rightText: "Every post-credit scene, Infinity Stone movement, and Kang/Doom breadcrumb mapped seamlessly.",
        rightAction: "Open Full Watch Path →",
        targetId: "mcu-doomsday"
      }
    ]
  },

  starwars: {
    name: "Star Wars Canon",
    shortName: "Star Wars",
    images: [
      "/assets/Images/Starwars/Darth Vader 4K Wallpaper.jpg",
      "/assets/Images/Starwars/Darth Vader Lightsaber Wallpaper 4K.jpg",
      "/assets/Images/Starwars/Sith Lightsaber Wallpaper 4K.jpg"
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
        targetId: "sw-ahsoka-s1"
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
        targetId: "sw-ahsoka-s1"
      },
      {
        badge: "Zero-Filler Purge • Full Galactic Canon",
        titleLine1: "THE CHOSEN",
        titleLine2: "ONE LEGACY",
        leftSub: "From Anakin Skywalker's rise and fall to the redemption of Darth Vader.",
        rightTag: "FORCE CONVERGENCE",
        rightText: "Streamlined essential viewing order with zero unnecessary side filler.",
        rightAction: "Explore Star Wars Path →",
        targetId: "sw-ep6"
      }
    ]
  },

  anime_naruto: {
    name: "Naruto & Shippuden",
    shortName: "Naruto",
    images: [
      "/assets/Images/Naruto/Naruto1.png",
      "/assets/Images/Naruto/Naruto2.png",
      "/assets/Images/Naruto/Naruo3.jpg",
      "/assets/Images/Naruto/Naruto4.png",
      "/assets/Images/Naruto/Naruto5.jpg"
    ],
    stages: [
      {
        badge: "Believe It! (Dattebayo)",
        titleLine1: "THE SHINOBI",
        titleLine2: "CHRONICLES",
        leftSub: "From Genin in Hidden Leaf Village to the Savior of the Ninja World.",
        rightTag: "LEAF VILLAGE ORIGIN",
        rightText: "Land of Waves, Chunin Exams, and the legendary Valley of the End.",
        rightAction: "Explore Final Battle",
        targetId: "naruto-final-battle"
      },
      {
        badge: "Zero-Filler Purge Activated",
        titleLine1: "100+ FILLER",
        titleLine2: "STRIPPED AWAY",
        leftSub: "Watch only the true manga canon arcs and Jiraiya's defining narrative.",
        rightTag: "AKATSUKI CONFLICT",
        rightText: "Pain's Assault, Five Kage Summit, and the truth of the Uchiha Clan.",
        rightAction: "Explore Pain Assault",
        targetId: "naruto-pain-assault"
      },
      {
        badge: "Akatsuki Assault • Jiraiya's Will of Fire",
        titleLine1: "THE PATH OF",
        titleLine2: "PAIN & DESTINY",
        leftSub: "Sage Mode awakening, the destruction of Konoha, and Naruto's meeting with Minato.",
        rightTag: "PROPHESIED HERO",
        rightText: "Nagato's philosophy of true peace and the tragic burden of the Six Paths.",
        rightAction: "Explore Pain Arc →",
        targetId: "naruto-pain-assault"
      },
      {
        badge: "Fourth Great Ninja War",
        titleLine1: "VALLEY OF THE",
        titleLine2: "END CLIMAX",
        leftSub: "Madara descends, Kaguya awakens, and Naruto & Sasuke fight their final duel.",
        rightTag: "TARGET CLIMAX",
        rightText: "The streamlined canon watch path straight to the finale.",
        rightAction: "Open Naruto Watch Path →",
        targetId: "naruto-final-battle"
      },
      {
        badge: "Two Blue Vortex • Next Generation",
        titleLine1: "WILL OF FIRE",
        titleLine2: "IMMORTALIZED",
        leftSub: "From the lonely swing outside the academy to Boruto: Two Blue Vortex.",
        rightTag: "ULTIMATE CANON",
        rightText: "The definitive guide to every canon battle up to the modern timeskip era.",
        rightAction: "Open Boruto Path →",
        targetId: "boruto-two-blue-vortex"
      }
    ]
  },

  dragonball: {
    name: "Dragon Ball Z & Super",
    shortName: "DBZ",
    images: [
      "/assets/Images/DBZ/DBZ1.jpg",
      "/assets/Images/DBZ/DBZ2.jpg",
      "/assets/Images/DBZ/DBZ3.jpg",
      "/assets/Images/DBZ/DBZ4.png"
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
        targetId: "dbs-super-hero"
      },
      {
        badge: "God Ki & Ultra Instinct",
        titleLine1: "TOURNAMENT",
        titleLine2: "OF POWER",
        leftSub: "Lord Beerus, Whis, Golden Frieza, and the 8-universe Battle Royale.",
        rightTag: "GOD KI EVOLUTION",
        rightText: "Canon movies and essential Super arcs streamlined for maximum impact.",
        rightAction: "Explore Tournament of Power",
        targetId: "dbs-tournament-of-power"
      },
      {
        badge: "Legendary Super Saiyan • Broly Nexus",
        titleLine1: "FRACTURING",
        titleLine2: "DIMENSIONS",
        leftSub: "Gogeta Blue vs Broly in a reality-shattering clash that redefined dragon ball animation.",
        rightTag: "MAXIMUM POWER",
        rightText: "Canon Toriyama narrative integrating Planet Vegeta lore directly with modern Super.",
        rightAction: "Explore Broly Movie →",
        targetId: "dbs-broly-canon"
      },
      {
        badge: "Beast Unleashed",
        titleLine1: "GOHAN BEAST",
        titleLine2: "SUPER HERO",
        leftSub: "Orange Piccolo and Gohan Beast ascend to crush the Red Ribbon Army.",
        rightTag: "TARGET CLIMAX",
        rightText: "The definitive Dragon Ball Super watch journey directly to Super Hero.",
        rightAction: "Open DBZ Watch Path →",
        targetId: "dbs-super-hero"
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
  const [step, setStep] = useState(0);

  const config = UNIVERSE_CONFIGS[selectedFranchiseId] || UNIVERSE_CONFIGS.mcu;
  const images = config.images;
  const numImages = images.length;
  const numStages = config.stages.length;

  // Maximum scroll steps:
  // Step 0: Image 0, Stage 0
  // Step 1: Image 1, Stage 0 (on 2 scroll -> image changes)
  // Step 2: Image 1, Stage 1 (on next 2 scroll -> text changes)
  // Step 3: Image 2, Stage 1 (on next 2 scroll -> image changes)
  // Step 4: Image 2, Stage 2 (on next 2 scroll -> text changes)
  // Step 5: Image 3, Stage 2...
  const maxSteps = Math.max((numImages - 1) * 2, (numStages - 1) * 2);

  // Reset step whenever franchise changes
  useEffect(() => {
    setStep(0);
  }, [selectedFranchiseId]);

  // Derived alternating image & stage indices
  const activeImageIndex = Math.min(numImages - 1, Math.floor((step + 1) / 2));
  const activeStageIndex = Math.min(numStages - 1, Math.floor(step / 2));
  const currentStage = config.stages[activeStageIndex] || config.stages[0];

  const stepRef = useRef(step);
  useEffect(() => {
    stepRef.current = step;
  }, [step]);

  const scrollAccumulatorRef = useRef(0);
  const lastStepTimeRef = useRef(0);
  const decayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive Bidirectional 2-Scroll Step Listener
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const now = Date.now();
      const currentStep = stepRef.current;

      // 1. Boundary check: Prevent accumulation when already at top or bottom edge
      if (currentStep >= maxSteps && e.deltaY > 0) {
        scrollAccumulatorRef.current = 0;
        return;
      }
      if (currentStep <= 0 && e.deltaY < 0) {
        scrollAccumulatorRef.current = 0;
        return;
      }

      // 2. Immediate Direction Reversal Reset: Don't fight old momentum when reversing scroll direction
      if (
        (e.deltaY > 0 && scrollAccumulatorRef.current < 0) ||
        (e.deltaY < 0 && scrollAccumulatorRef.current > 0)
      ) {
        scrollAccumulatorRef.current = 0;
      }

      // 3. Accumulate with threshold clamping
      const STEP_THRESHOLD = 130;
      const COOLDOWN_MS = 200;

      scrollAccumulatorRef.current = Math.max(
        -STEP_THRESHOLD * 1.5,
        Math.min(STEP_THRESHOLD * 1.5, scrollAccumulatorRef.current + e.deltaY)
      );

      // Fast decay when user pauses scrolling
      if (decayTimeoutRef.current) clearTimeout(decayTimeoutRef.current);
      decayTimeoutRef.current = setTimeout(() => {
        scrollAccumulatorRef.current = 0;
      }, 180);

      // 4. Trigger step change once threshold reached and cooldown satisfied
      if (now - lastStepTimeRef.current > COOLDOWN_MS) {
        if (scrollAccumulatorRef.current >= STEP_THRESHOLD) {
          setStep((prev) => Math.min(maxSteps, prev + 1));
          scrollAccumulatorRef.current = 0;
          lastStepTimeRef.current = now;
        } else if (scrollAccumulatorRef.current <= -STEP_THRESHOLD) {
          setStep((prev) => Math.max(0, prev - 1));
          scrollAccumulatorRef.current = 0;
          lastStepTimeRef.current = now;
        }
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const diffY = touchStartY - touchEndY;
      const TOUCH_THRESHOLD = 40;
      if (Math.abs(diffY) > TOUCH_THRESHOLD) {
        if (diffY > 0) {
          setStep((prev) => Math.min(maxSteps, prev + 1));
        } else {
          setStep((prev) => Math.max(0, prev - 1));
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      if (decayTimeoutRef.current) clearTimeout(decayTimeoutRef.current);
    };
  }, [maxSteps]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearchSubmit(searchQuery.trim());
    }
  };

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden flex flex-col justify-between select-none">
      
      {/* FULLSCREEN EDGE-TO-EDGE CHARACTER CANVAS */}
      <div className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden">
        {images.map((imgSrc, i) => {
          const isCurrent = i === activeImageIndex;

          return (
            <div
              key={imgSrc}
              className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                isCurrent ? "opacity-100 z-1" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={imgSrc}
                alt={`${config.name} frame ${i + 1}`}
                className="w-full h-full object-cover object-center filter contrast-105 brightness-100"
              />
            </div>
          );
        })}
      </div>

      {/* Subtle Top & Bottom Gradient Overlays for Elegance and Contrast */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/80 via-black/30 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-x-0 bottom-0 h-64 sm:h-80 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none z-10" />

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
                    onFranchiseChange(key);
                  }}
                  className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
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
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 bg-red-600 rounded-full text-white cursor-pointer"
              >
                <ArrowRight className="w-2.5 h-2.5" />
              </button>
            )}
          </form>
        </div>

      </header>

      {/* CENTER INTERACTIVE CONTENT: UPPER LEFT & LOWER RIGHT */}
      <div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 sm:px-10 flex flex-col justify-between py-12 pointer-events-none">
        
        {/* UPPER LEFT CONTENT AREA */}
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

        {/* LOWER RIGHT CONTENT AREA */}
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
          FRAME: 0{activeImageIndex + 1} // 0{numImages}
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <span>Scroll slowly to shift frames & text</span>
          <ChevronDown className="w-3 h-3 text-red-500 animate-bounce" />
        </div>

        <div>
          STAGE: {activeStageIndex + 1} / {numStages}
        </div>
      </footer>

    </div>
  );
};
