"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Play, Volume2, VolumeX } from "lucide-react";
import { VideoIntroCopy } from "@/data/ui/videoIntro";

interface VideoIntroOverlayProps {
  onFinish: () => void;
  videoSrc: string;
  posterSrc?: string;
  autoplay?: boolean;
  muted?: boolean;
  showControls?: boolean;
  copy: VideoIntroCopy;
}

export default function VideoIntroOverlay({
  onFinish,
  videoSrc,
  posterSrc,
  autoplay = false,
  muted = true,
  showControls = true,
  copy,
}: VideoIntroOverlayProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [isExiting, setIsExiting] = useState(false);
  const [showFinalCTA, setShowFinalCTA] = useState(false);

  /* =========================================================
     Video Controls
  ========================================================= */

  const handlePlay = async () => {
    if (!videoRef.current) return;

    try {
      const video = videoRef.current;

      video.volume = 0.3;
      video.muted = false;

      setIsMuted(false);

      await video.play();
      setIsPlaying(true);
    } catch {}
  };

  const handlePause = () => {
    videoRef.current?.pause();
    setIsPlaying(false);
  };

  const toggleSound = () => {
    if (!videoRef.current) return;

    const newMuted = !isMuted;
    videoRef.current.muted = newMuted;
    setIsMuted(newMuted);
  };

  /* =========================================================
     Detect Last Second of Video
  ========================================================= */

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!video.duration) return;

      if (video.currentTime >= video.duration - 1) {
        setShowFinalCTA(true);
      } else {
        setShowFinalCTA(false);
      }
    };

    video.addEventListener("timeupdate", handleTimeUpdate);

    return () =>
      video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  /* =========================================================
     Exit Flow
  ========================================================= */

  const handleExit = () => {
    setIsExiting(true);

    setTimeout(() => {
      onFinish();
    }, 500);
  };

  /* =========================================================
     Motion Variants
  ========================================================= */

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const fade: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
    exit: { opacity: 0, transition: { duration: 0.4 } },
  };

  const fadeUp: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const pulse: Variants = {
    idle: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  /* =========================================================
     Render
  ========================================================= */

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 z-[9999] bg-[#050505] overflow-hidden"
        >
          {/* VIDEO */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[calc(100%-32px)] h-[calc(100%-32px)]
              md:w-[calc(100%-64px)] md:h-[calc(100%-64px)]
              sm:w-[calc(100%-48px)] sm:h-[calc(100%-48px)]
              border border-white/10
              overflow-hidden
            "
          >
            <video
              ref={videoRef}
              src={videoSrc}
              poster={posterSrc}
              className="w-full h-full object-cover"
              playsInline
              controls={isPlaying && showControls}
              onPause={handlePause}
              onPlay={() => setIsPlaying(true)}
            />
          </motion.div>

          {/* PLAY BUTTON */}

          {!isPlaying && (
            <motion.button
              variants={pulse}
              animate="idle"
              whileHover={{ scale: 1.1, borderColor: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlay}
              className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-[120px] h-[120px]
                flex items-center justify-center
                rounded-full
                border-2 border-white/30
                bg-white/10 backdrop-blur-md
                shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                text-white
              "
            >
              <Play size={32} />
            </motion.button>
          )}

          {/* TOP LEFT CTA */}

          <AnimatePresence>
            {!showFinalCTA && (
              <motion.button
                variants={fade}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{
                  backgroundColor: "#ffffff",
                  color: "#050505",
                  y: -2,
                  boxShadow: "0 4px 16px rgba(255,255,255,0.25)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExit}
                className="
                  fixed top-[26px] left-[26px]
                  md:top-[40px] md:left-[40px]
                  sm:top-[20px] sm:left-[20px]
                  px-6 py-3
                  border border-white
                  text-white
                  font-extrabold text-[13px]
                  tracking-[-0.5px]
                  backdrop-blur-md
                  bg-white/10
                "
              >
                → {copy.goToHome}
              </motion.button>
            )}
          </AnimatePresence>

          {/* SOUND */}

          <motion.button
            variants={fade}
            onClick={toggleSound}
            className="
              fixed top-[26px] right-[26px]
              md:top-[40px] md:right-[40px]
              sm:top-[32px] sm:right-[32px]
              px-5 py-4
              rounded-full
              bg-white/10 backdrop-blur-md
              border border-white/20
              text-white
            "
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </motion.button>

          {/* BRAND TEXT */}

          <motion.div
            variants={fadeUp}
            className="
              fixed bottom-[60px] left-1/2
              -translate-x-1/2
              text-center text-white
            "
          >
            <div
              className="font-[Didot] font-bold tracking-[3.84px]"
              style={{ fontSize: "32px" }}
            >
              {copy.brandLine}
            </div>

            <div
              className="font-inter tracking-[2.04px]"
              style={{ fontSize: "12px" }}
            >
              {copy.academyLine}
            </div>
          </motion.div>

          {/* FINAL CTA */}

          <AnimatePresence>
            {showFinalCTA && (
              <motion.button
                variants={fade}
                initial="initial"
                animate="animate"
                exit="exit"
                whileHover={{
                  backgroundColor: "#ffffff",
                  color: "#050505",
                  y: -2,
                }}
                whileTap={{ scale: 0.98 }}
                onClick={handleExit}
                className="
                  fixed bottom-[80px] left-1/2
                  -translate-x-1/2
                  h-[56px] px-10
                  border-2 border-white
                  text-white
                  font-extrabold text-[15px]
                  tracking-[-0.5px]
                  backdrop-blur-md bg-white/10
                "
              >
                → {copy.goToHome}
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}