"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeIntroOverlay from "./HomeIntroOverlay";
import { usePathname } from "next/navigation";

export default function RootLayoutShell({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [introFinished, setIntroFinished] = useState(!isHome);
  const [layoutVisible, setLayoutVisible] = useState(!isHome);

  /* =========================================================
     If not home, skip intro immediately
  ========================================================= */
  useEffect(() => {
    if (!isHome) {
      setIntroFinished(true);
      setLayoutVisible(true);
    }
  }, [isHome]);

  /* =========================================================
     When intro finishes → trigger layout fade-in
  ========================================================= */
  useEffect(() => {
    if (introFinished) {
      const timer = setTimeout(() => {
        setLayoutVisible(true);
      }, 100); // small breathing delay after overlay exit

      return () => clearTimeout(timer);
    }
  }, [introFinished]);

  return (
    <>
      {/* Intro Overlay (Home Only) */}
      {isHome && !introFinished && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <HomeIntroOverlay onFinish={() => setIntroFinished(true)} />
        </div>
      )}

      {/* Layout with fade-in */}
      {introFinished && (
        <div className="min-h-screen flex flex-col bg-editorialWhite text-charcoal">
          <Navbar />

          <motion.main
            initial={{ filter: "blur(8px)" }}
            animate={{ filter: layoutVisible ? "blur(0px)" : "blur(8px)" }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 pt-[70px]"
          >
            {children}
          </motion.main>

          <Footer />
        </div>
      )}
    </>
  );
}