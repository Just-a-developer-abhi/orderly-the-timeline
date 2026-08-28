import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CinematicVideoIntro } from './components/CinematicVideoIntro';
import { UniverseHeroFullscreen } from './components/UniverseHeroFullscreen';
import { TimelinePage } from './components/TimelinePage';
import { WatchNode } from './components/NodeDetailModal';
import { UniverseOption } from './types';
import { fetchUniverses, generateWatchOrder } from './services/api';
import { playTargetAcquiredSound } from './utils/soundEffects';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [currentView, setCurrentView] = useState<"hero" | "timeline">("hero");
  const [universes, setUniverses] = useState<UniverseOption[]>([]);
  const [selectedFranchiseId, setSelectedFranchiseId] = useState("mcu");
  const [selectedTargetId, setSelectedTargetId] = useState("mcu-doomsday");
  const [selectedMode, setSelectedMode] = useState("fast-track");
  
  const [watchOrderData, setWatchOrderData] = useState<{
    target: string;
    universe: string;
    franchiseId?: string;
    estimatedWatchTimeHours: number;
    nodes: WatchNode[];
  } | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  // Watched nodes state saved to LocalStorage
  const [watchedIds, setWatchedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem("orderly_watched_nodes");
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  // Save watched IDs to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("orderly_watched_nodes", JSON.stringify(Array.from(watchedIds)));
    } catch (e) {
      console.error(e);
    }
  }, [watchedIds]);

  // Load universes on mount
  useEffect(() => {
    fetchUniverses().then((univs) => {
      if (univs && univs.length > 0) {
        setUniverses(univs);
      }
    });
  }, []);

  // Fetch watch order
  const executePipeline = async (params: {
    query?: string;
    targetId?: string;
    franchiseId?: string;
    mode?: string;
    maxHours?: number | null;
  }) => {
    setIsLoading(true);
    try {
      // If a search query is passed, do NOT lock targetId so the agent can resolve the query
      const isSearchQuery = Boolean(params.query && params.query.trim().length > 0);
      
      const res = await generateWatchOrder({
        query: params.query,
        targetId: isSearchQuery ? undefined : (params.targetId || selectedTargetId),
        franchiseId: isSearchQuery ? undefined : (params.franchiseId || selectedFranchiseId),
        mode: params.mode || selectedMode,
        maxHours: params.maxHours
      });

      if (res && res.success && res.data) {
        setWatchOrderData(res.data);
        if (res.data.franchiseId) {
          setSelectedFranchiseId(res.data.franchiseId);
        }
        if (res.data.targetId) {
          setSelectedTargetId(res.data.targetId);
        }
        if (res.data.mode) {
          setSelectedMode(res.data.mode);
        }
        playTargetAcquiredSound();
      }
    } catch (err) {
      console.error("Pipeline execution failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    executePipeline({
      franchiseId: selectedFranchiseId,
      targetId: selectedTargetId,
      mode: selectedMode
    });
  }, []);

  const handleSearchSubmit = (query: string) => {
    executePipeline({ query }).then(() => {
      setCurrentView("timeline");
    });
  };

  const handleSelectTarget = (targetId: string, franchiseId?: string) => {
    const fId = franchiseId || selectedFranchiseId;
    setSelectedTargetId(targetId);
    if (franchiseId) setSelectedFranchiseId(franchiseId);
    executePipeline({
      franchiseId: fId,
      targetId,
      mode: selectedMode
    }).then(() => {
      setCurrentView("timeline");
    });
  };

  const handleModeChange = (mode: string) => {
    setSelectedMode(mode);
    executePipeline({
      franchiseId: selectedFranchiseId,
      targetId: selectedTargetId,
      mode
    });
  };

  const handleToggleWatched = (id: string) => {
    setWatchedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      
      {/* Intro Video (MCU.mp4) with subtle Enter button */}
      <AnimatePresence>
        {showIntro && (
          <CinematicVideoIntro onComplete={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      {/* Main Flow: Switch cleanly between Fullscreen Hero and Timeline Page */}
      {!showIntro && (
        <AnimatePresence mode="wait">
          {currentView === "hero" ? (
            <motion.div
              key="hero-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="w-full h-screen"
            >
              <UniverseHeroFullscreen
                universes={universes}
                selectedFranchiseId={selectedFranchiseId}
                onFranchiseChange={(id) => {
                  setSelectedFranchiseId(id);
                  executePipeline({ franchiseId: id, mode: selectedMode });
                }}
                onSearchSubmit={handleSearchSubmit}
                onSelectTarget={handleSelectTarget}
              />
            </motion.div>
          ) : (
            watchOrderData && (
              <motion.div
                key="timeline-view"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <TimelinePage
                  watchOrderData={watchOrderData}
                  selectedMode={selectedMode}
                  watchedIds={watchedIds}
                  universes={universes}
                  selectedFranchiseId={selectedFranchiseId}
                  onBackToHero={() => setCurrentView("hero")}
                  onSearchSubmit={handleSearchSubmit}
                  onToggleWatched={handleToggleWatched}
                  onModeChange={handleModeChange}
                />
              </motion.div>
            )
          )}
        </AnimatePresence>
      )}

    </div>
  );
}
