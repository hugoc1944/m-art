// src/components/layout/RootLayoutShell.tsx

import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HomeIntroOverlay from "./HomeIntroOverlay";

interface RootLayoutShellProps {
  children: ReactNode;
}

/**
 * RootLayoutShell
 * Global structural wrapper for all pages.
 * Keeps layout consistent and enforces container rhythm.
 */
export default function RootLayoutShell({
  children,
}: RootLayoutShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-editorialWhite text-charcoal">
      
      <HomeIntroOverlay/>
      
      <Navbar />

      <main className="flex-1 pt-[70px]"> 
         {children}
      </main>

      <Footer />
    </div>
  );
}