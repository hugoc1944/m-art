"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);
  const pathname = usePathname();
  const isStudentsPage = pathname === "/students";
  const isCompact = isScrolled || isStudentsPage;
  /* =============================
     Scroll Detection
  ============================= */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =============================
     Scroll Lock (Mobile)
  ============================= */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* =========================================================
          DESKTOP NAV (xl and above)
      ========================================================= */}
      <header
        className={cn(
          "hidden xl:block fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isCompact ? "h-[72px]" : "h-[108px]"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 transition-colors duration-500",
            isCompact ? "bg-black" : "bg-white"
          )}
        />

        <div className="relative h-full w-full">
          <div className="absolute left-[22px] top-0 h-full flex items-center">

            {/* FULL VERSION */}
            <div
              className={cn(
                "relative transition-opacity duration-400",
                isCompact ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              <Link href="/" className="relative block w-[157px] h-[93px]">
                <div className="absolute left-[23px] top-0 w-[96px] h-[58px] overflow-hidden">
                  <Image src="/logo.png" alt="M-ART Logo" width={96} height={58} priority />
                </div>

                <div className="absolute left-[36px] top-[58px] brand-logo-sm text-charcoal whitespace-nowrap">
                  M•ART
                </div>

                <div className="absolute left-0 top-[85px] text-[9px] tracking-[1.53px] text-charcoal uppercase whitespace-nowrap">
                  GENEVA MAKEUP ACADEMY
                </div>
              </Link>
            </div>

            {/* COMPACT VERSION */}
            <div
              className={cn(
                "absolute transition-opacity duration-400 flex flex-col justify-center",
                isCompact ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <Link href="/" className="flex flex-col leading-none">
                <span className="text-white font-[Didot] font-bold text-[28px] tracking-[3px] whitespace-nowrap">
                  M•ART
                </span>
                <span className="text-white text-[9px] tracking-[1.53px] uppercase whitespace-nowrap mt-[4px]">
                  GENEVA MAKEUP ACADEMY
                </span>
              </Link>
            </div>

            {/* NAV LINKS */}
            <div
              className={cn(
                "ml-[55px] flex gap-[40px] whitespace-nowrap transition-all duration-500",
                isCompact ? "items-center text-white mb-0" : "mt-[63px] mb-[20px]"
              )}
            >
              <Link href="/the-academy" className={cn("ui-nav", isCompact ? "text-white" : "text-charcoal")}>
                THE ACADEMY
              </Link>

              {/* TRAININGS DROPDOWN */}
              <div
                className="relative"
                onMouseEnter={() => setIsTrainingsOpen(true)}
                onMouseLeave={() => setIsTrainingsOpen(false)}
              >
                <button
                  className={cn(
                    "ui-nav flex items-center gap-2 cursor-pointer",
                    isCompact ? "text-white" : "text-charcoal"
                  )}
                >
                  TRAININGS
                  <motion.span
                    animate={{ rotate: isTrainingsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Icon icon="chevronDown" size={16} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {isTrainingsOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-[20px]"
                    >
                      <div
                        className={cn(
                          "w-[240px] py-[20px] px-[24px] flex flex-col gap-[16px] shadow-lg",
                          isCompact
                            ? "bg-black text-white border border-white/10"
                            : "bg-white text-charcoal"
                        )}
                      >
                        <Link href="/programs" className="ui-nav">
                          PROGRAMS
                        </Link>

                        <Link href="/modules" className="ui-nav">
                          INDIVIDUAL MODULES
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/students" className={cn("ui-nav", isCompact ? "text-white" : "text-charcoal")}>
                STUDENTS
              </Link>

              {!isCompact && (
                <Link href="/contact" className="ui-nav text-charcoal">
                  CONTACT
                </Link>
              )}

              {isCompact && (
                <Button
                  href="/contact"
                  variant="outline"
                  tone="light"
                  size="sm"
                  className="w-[73px]"
                >
                  Contact
                </Button>
              )}
            </div>
          </div>

          {/* RIGHT SIDE — UNTOUCHED */}
          {!isCompact && (
            <div className="absolute right-[22px] top-0 h-[108px] flex flex-col items-end">
              <div className="mt-[11px] flex items-center gap-[24px] whitespace-nowrap">

                <Link href="/partnerships" className="text-[14px] tracking-[-0.7px] text-charcoal">
                  Partnerships
                </Link>

                <div className="text-[11px] font-extrabold tracking-[-0.55px]">
                  <span className="text-charcoal">FR / </span>
                  <span className="text-coral">EN</span>
                </div>
              </div>

              <div className="mt-[14px] flex gap-[4px]">
                <Button href="/brochure" variant="solid" tone="dark" size="sm" icon="download" className="w-[204px]">
                  DOWNLOAD A BROCHURE
                </Button>

                <Button href="/contact?intent=meeting" variant="outline" tone="dark" size="sm" icon="arrowRight">
                  Request an Information Meeting
                </Button>
              </div>
            </div>
          )}

          {isCompact && (
            <div className="absolute right-[22px] top-0 h-full flex items-center gap-[4px]">
              <Button href="/brochure" variant="solid" tone="light" size="sm" icon="download" className="w-[204px]">
                DOWNLOAD A BROCHURE
              </Button>

              <Button href="/contact?intent=meeting" variant="outline" tone="light" size="sm" icon="arrowRight">
                Request an Information Meeting
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* =========================================================
          MOBILE + TABLET NAV
      ========================================================= */}
      <header
        className={cn(
          "xl:hidden fixed top-0 left-0 w-full z-50 transition-all duration-500",
          isCompact ? "h-[72px] bg-black" : "h-[108px] bg-white"
        )}
      >
        <div className="container h-full flex items-center justify-between relative">

          {/* Logo system unchanged */}
          <div className="relative flex-1 h-full">

            <div
              className={cn(
                "absolute top-1/2 left-[80px] -translate-y-1/2 transition-all duration-500",
                isCompact ? "opacity-0 pointer-events-none" : "opacity-100 -translate-x-[60%]"
              )}
            >
              <div className="flex flex-col items-center leading-none gap-[3px]">
                <Image src="/logo_v2.png" alt="M-ART Logo" width={60} height={36} priority />
                <span className="brand-logo-sm text-charcoal leading-none">M•ART</span>
                <span className="text-[9px] tracking-[1.53px] uppercase text-charcoal leading-none whitespace-nowrap">
                  GENEVA MAKEUP ACADEMY
                </span>
              </div>
            </div>

            <div
              className={cn(
                "absolute inset-y-0 left-[-20px] flex flex-col justify-center transition-all duration-500 pl-[var(--space-6)] leading-none",
                isCompact ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <span className="font-[Didot] font-bold text-[22px] tracking-[3px] text-white leading-none">
                M•ART
              </span>
              <span className="text-[9px] tracking-[1.53px] uppercase text-white mt-[3px] leading-none">
                GENEVA MAKEUP ACADEMY
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button href="/contact" variant="outline" tone={isCompact ? "light" : "dark"} size="sm">
              Contact
            </Button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn("ui-nav tracking-[2px]", isCompact ? "text-white" : "text-charcoal")}
            >
              {isMenuOpen ? "CLOSE" : "MENU"}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE OVERLAY
      ========================================================= */}
      <div
        className={cn(
          "xl:hidden fixed inset-0 z-40 bg-[var(--color-deep-charcoal)] text-white transition-all duration-500",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="h-full flex flex-col justify-center px-[var(--space-6)]">

          <nav className="flex flex-col gap-[var(--space-8)] text-[28px] font-bold tracking-[-0.5px] uppercase">
            <Link href="/the-academy" onClick={() => setIsMenuOpen(false)}>THE ACADEMY</Link>
            <Link href="/programs" onClick={() => setIsMenuOpen(false)}>PROGRAMS</Link>
            <Link href="/modules" onClick={() => setIsMenuOpen(false)}>INDIVIDUAL MODULES</Link>
            <Link href="/students" onClick={() => setIsMenuOpen(false)}>STUDENTS</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>CONTACT</Link>
            <Link href="/partnerships" onClick={() => setIsMenuOpen(false)}>PARTNERSHIPS</Link>
          </nav>

          <div className="mt-[var(--space-12)] border-t border-white/10 pt-[var(--space-8)] flex flex-col gap-[var(--space-4)]">
            <Button href="/brochure" variant="solid" tone="light" size="sm" icon="download" className="w-full">
              DOWNLOAD A BROCHURE
            </Button>

            <Button href="/contact?intent=meeting" variant="outline" tone="light" size="sm" icon="arrowRight" className="w-full">
              Request an Information Meeting
            </Button>

            <div className="pt-[var(--space-6)] text-[11px] font-semibold tracking-[1px] uppercase">
              FR / EN
            </div>
          </div>

        </div>
      </div>
    </>
  );
}