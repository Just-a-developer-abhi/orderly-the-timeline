import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Volume2, 
  VolumeX, 
  FastForward, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface CinematicVideoIntroProps {
  onComplete: () => void;
}

export const CinematicVideoIntro: React.FC<CinematicVideoIntroProps> = ({ onComplete }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [showTitleOverlay, setShowTitleOverlay] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 0.9;
    video.muted = false;

    const tryPlay = async () => {
      try {
        await video.play();
        setIsMuted(false);
      } catch {
        // If modern browser restricts unmuted autoplay before interaction,
        // start playback and immediately unmute on the very first touch/click
        video.muted = true;
        setIsMuted(true);
        video.play().catch(console.error);

        const unmuteOnInteraction = () => {
          if (videoRef.current) {
            videoRef.current.muted = false;
            setIsMuted(false);
          }
          window.removeEventListener('pointerdown', unmuteOnInteraction);
          window.removeEventListener('keydown', unmuteOnInteraction);
        };

        window.addEventListener('pointerdown', unmuteOnInteraction, { once: true });
        window.addEventListener('keydown', unmuteOnInteraction, { once: true });
      }
    };

    tryPlay();

    // Fade out overlay text after 2.5 seconds as video's built-in ORDERLY animation appears
    const timer = setTimeout(() => {
      setShowTitleOverlay(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleVideoEnded = () => {
    onComplete();
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleEnter = () => {
    onComplete();
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.02, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-between bg-black text-white overflow-hidden select-none"
    >
      {/* Background Video Player */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-black">
        <video
          ref={videoRef}
          src="/Intro2.mp4"
          className="w-full h-full object-cover sm:object-contain"
          playsInline
          onEnded={handleVideoEnded}
        />
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none" />

      {/* Top Header Minimal Controls */}
      <div className="relative z-30 w-full max-w-7xl px-4 sm:px-6 safe-pt flex items-center justify-between">
        <div />

        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="p-3 sm:p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center bg-black/50 hover:bg-white/15 border border-white/20 rounded-full text-slate-300 hover:text-white backdrop-blur-md transition-all cursor-pointer shadow-lg"
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-slate-400" />
            ) : (
              <Volume2 className="w-4 h-4 text-slate-200" />
            )}
          </button>
        </div>
      </div>

      {/* Center Ambient Presence (Fades out after 2.5s once video's title appears) */}
      <div className="relative z-20 pointer-events-none text-center px-4">
        <AnimatePresence>
          {showTitleOverlay && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
              transition={{ 
                duration: 0.8,
                ease: "easeInOut"
              }}
              className="space-y-1"
            >
              <div className="text-[9px] sm:text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase">
                THE ARCHIVAL MULTIVERSE DIRECTORY
              </div>
              <h1 className="font-cinematic font-black text-2xl sm:text-5xl text-white tracking-[0.25em] uppercase">
                ORDERLY
              </h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Subtle Enter CTA (No progressbar, clean & elegant) */}
      <div className="relative z-30 w-full max-w-md px-4 sm:px-6 safe-pb flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={handleEnter}
          className="flex items-center justify-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3.5 sm:py-3 min-h-[48px] bg-black/70 hover:bg-white/15 border border-white/25 hover:border-white/50 text-slate-200 hover:text-white rounded-full font-mono text-[11px] sm:text-xs tracking-[0.25em] uppercase backdrop-blur-xl transition-all shadow-2xl group cursor-pointer w-full sm:w-auto text-center"
        >
          <span>ENTER DIRECTORY</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
        </motion.button>
      </div>
    </motion.div>
  );
};
