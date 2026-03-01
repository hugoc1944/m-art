"use client";

import { useState, useEffect } from "react";
import type { ReactNode } from "react";
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

  /* =========================================================
     If not home, skip intro immediately
  ========================================================= */
  useEffect(() => {
    if (!isHome) {
      setIntroFinished(true);
    }
  }, [isHome]);

  return (
    <>
      {/* Intro Overlay (Home Only) */}
      {isHome && !introFinished && (
        <div className="fixed inset-0 z-[9999] bg-black">
          <HomeIntroOverlay onFinish={() => setIntroFinished(true)} />
        </div>
      )}

      {/* Render full layout ONLY after intro finished */}
      {introFinished && (
        <div className="min-h-screen flex flex-col bg-editorialWhite text-charcoal">
          <Navbar />

          <main className="flex-1 pt-[70px]">
            {children}
          </main>

          <Footer />
        </div>
      )}
    </>
  );
}