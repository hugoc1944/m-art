"use client";

import { useEffect } from "react";

export default function StudentsPage() {

  /* =============================
     LOCK PAGE SCROLL
  ============================= */
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    const originalHeight = document.body.style.height;

    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.height = originalHeight;
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/students-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/portfolio_1.jpg"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center text-center px-[var(--space-6)]">
        <div className="flex flex-col items-center">

          <h1 className="font-[Didot] leading-[1] font-bold text-white text-[72px] md:text-[52px] sm:text-[36px] tracking-[8px] uppercase">
            Coming Soon
          </h1>

          <p className="text-white/80 text-[14px] tracking-[3px] mt-[var(--space-8)] uppercase">
            Discover the work of our students
          </p>

        </div>
      </div>

    </section>
  );
}