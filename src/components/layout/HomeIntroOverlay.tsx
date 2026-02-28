"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HomeIntroOverlay() {
  const [show, setShow] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const seen = false;

    if (!seen && window.location.pathname === "/") {
      setShow(true);
      sessionStorage.setItem("homeIntroSeen", "true");
    }
  }, []);

  useEffect(() => {
    if (imageLoaded && show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 2000); // HOLD TIME (text visible duration)

      return () => clearTimeout(timer);
    }
  }, [imageLoaded, show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] pointer-events-auto"
        >
          {/* Background */}
          <img
            src="/intro_screen.jpg"
            alt="M·ART Introduction"
            onLoad={() => setImageLoaded(true)}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Text */}
          {imageLoaded && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-white "
            >
              <div className="text-center">
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