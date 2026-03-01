"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface HomeIntroOverlayProps {
  onFinish?: () => void;
}

export default function HomeIntroOverlay({
  onFinish,
}: HomeIntroOverlayProps) {
  const [show, setShow] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  /* =========================================================
     INIT — Only on Home & Only Once Per Session
  ========================================================= */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = false;

    if (!seen && window.location.pathname === "/") {
      setShow(true);
      sessionStorage.setItem("homeIntroSeen", "true");
    }
  }, []);

  /* =========================================================
     HOLD + EXIT CONTROL
  ========================================================= */
  useEffect(() => {
    if (!show || !imageLoaded) return;

    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, 1800); // ideal cinematic timing

    return () => clearTimeout(timer);
  }, [imageLoaded, show, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] pointer-events-auto bg-black"
        >
          {/* Background Image */}
          <img
            src="/intro_screen.jpg"
            alt="M·ART Introduction"
            onLoad={() => setImageLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Text (only after image loaded) */}
          {imageLoaded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 flex items-center justify-center text-white"
            >
              <div className="text-center select-none">
                <div
                  className="font-[Didot] font-bold uppercase"
                  style={{
                    fontSize: "clamp(64px, 10vw, 180px)",
                    letterSpacing: "0.35em",
                  }}
                >
                  M•ART
                </div>

                <div
                  className="uppercase"
                  style={{
                    fontSize: "clamp(16px, 2.5vw, 28px)",
                    letterSpacing: "0.35em",
                    marginTop: "-20px",
                  }}
                >
                  GENEVA MAKEUP ACADEMY
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}