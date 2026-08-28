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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 0.85;
    video.muted = false;

    video.play().catch(() => {
      video.muted = true;
      setIsMuted(true);
      video.play().catch(console.error);
    });
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
          src="/MCU.mp4"
          className="w-full h-full object-cover sm:object-contain"
          playsInline
          onEnded={handleVideoEnded}
        />
      </div>

      {/* Cinematic Vignette */}
      <div className="absolute inset-0 bg-radial-vignette opacity-70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/60 pointer-events-none" />

      {/* Top Header Minimal Controls */}
      <div className="relative z-30 w-full max-w-7xl px-6 pt-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-cinematic font-bold text-xs tracking-[0.3em] text-slate-300 uppercase">
            MARVEL STUDIOS
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="p-2.5 bg-black/40 hover:bg-white/10 border border-white/15 rounded-full text-slate-300 hover:text-white backdrop-blur-md transition-all"
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

      {/* Center Ambient Presence */}
      <div className="relative z-20 pointer-events-none text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-1"
        >
          <div className="text-[10px] font-mono tracking-[0.35em] text-slate-400 uppercase">
            THE ARCHIVAL MULTIVERSE DIRECTORY
          </div>
          <h1 className="font-cinematic font-black text-3xl sm:text-5xl text-white tracking-[0.25em] uppercase">
            ORDERLY
          </h1>
        </motion.div>
      </div>

      {/* Bottom Subtle Enter CTA (No progressbar, clean & elegant) */}
      <div className="relative z-30 w-full max-w-md px-6 pb-12 flex justify-center">
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          onClick={handleEnter}
          className="flex items-center gap-3 px-8 py-3 bg-black/60 hover:bg-white/10 border border-white/20 hover:border-white/40 text-slate-200 hover:text-white rounded-full font-mono text-xs tracking-[0.25em] uppercase backdrop-blur-xl transition-all shadow-2xl group cursor-pointer"
        >
          <span>ENTER DIRECTORY</span>
          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-1 group-hover:text-white transition-all" />
        </motion.button>
      </div>
    </motion.div>
  );
};
