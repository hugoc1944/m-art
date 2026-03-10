"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import VideoIntroOverlay from "@/components/intro/VideoIntroOverlay";

import { videoIntroCopy } from "@/data/ui/videoIntro";

import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/types";

export default function RootLayoutShell({
  children,
  locale,
  dictionary,
}: {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
}) {

  const pathname = usePathname();

  /* =========================================================
     Detect localized homepage
  ========================================================= */

  const isHome =
    pathname === `/${locale}` || pathname === `/${locale}/`;

  const [introFinished, setIntroFinished] = useState(!isHome);
  const [layoutVisible, setLayoutVisible] = useState(!isHome);

  /* =========================================================
     Skip intro on non-home pages
  ========================================================= */

  useEffect(() => {
    if (!isHome) {
      setIntroFinished(true);
      setLayoutVisible(true);
    }
  }, [isHome]);

  /* =========================================================
     Layout fade-in after intro
  ========================================================= */

  useEffect(() => {
    if (introFinished) {
      const timer = setTimeout(() => {
        setLayoutVisible(true);
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [introFinished]);

  return (
    <>
      {/* =========================================
          Intro Overlay (Home Only)
      ========================================= */}

      {isHome && !introFinished && (
        <VideoIntroOverlay
          onFinish={() => setIntroFinished(true)}
          videoSrc="/video_entrance.mp4"
          posterSrc="/video_cover.png"
          copy={videoIntroCopy[locale]}
        />
      )}

      {/* =========================================
          Layout
      ========================================= */}

      {introFinished && (
        <div className="min-h-screen flex flex-col bg-editorialWhite text-charcoal">

          <Navbar locale={locale} dict={dictionary} />

          <motion.main
            initial={{ filter: "blur(8px)" }}
            animate={{ filter: layoutVisible ? "blur(0px)" : "blur(8px)" }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="flex-1 pt-[70px]"
          >
            {children}
          </motion.main>

          <Footer locale={locale} dict={dictionary} />

        </div>
      )}
    </>
  );
}