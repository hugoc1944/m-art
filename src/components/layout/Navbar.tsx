"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/Icon";
import { usePathname, useRouter } from "next/navigation";
import { Locale } from "@/i18n/config";
import { Dictionary } from "@/i18n/types";

export default function Navbar({
  locale,
  dict,
}: {
  locale: Locale;
  dict: Dictionary;
}) {

  const pathname = usePathname();
  const router = useRouter();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTrainingsOpen, setIsTrainingsOpen] = useState(false);

  /* =========================================================
     Detect students page (localized)
  ========================================================= */

  const isStudentsPage = pathname === `/${locale}/students`;

  const isCompact = isScrolled || isStudentsPage || isMenuOpen;

  /* =========================================================
     Close mobile menu on route change
  ========================================================= */

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  /* =========================================================
     Scroll detection
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================================================
     Scroll lock mobile
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  /* =========================================================
     Language Switch
  ========================================================= */

  const switchLanguage = (newLocale: Locale) => {
    const segments = pathname.split("/");
    segments[1] = newLocale;
    router.push(segments.join("/"));
  };

  const localized = (path: string) => `/${locale}${path}`;

  return (
    <>
      {/* =========================================================
          DESKTOP NAV
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

            {/* FULL LOGO */}

            <div
              className={cn(
                "relative transition-opacity duration-400",
                isCompact ? "opacity-0 pointer-events-none" : "opacity-100"
              )}
            >
              <Link
                href={`/${locale}`}
                className="relative block w-[157px] h-[93px]"
              >
                <div className="absolute left-[23px] top-0 w-[96px] h-[58px] overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="M-ART Logo"
                    width={96}
                    height={58}
                    priority
                  />
                </div>

                <div className="absolute left-[36px] top-[58px] brand-logo-sm text-charcoal whitespace-nowrap">
                  M•ART
                </div>

                <div className="absolute left-0 top-[85px] text-[9px] tracking-[1.53px] text-charcoal uppercase whitespace-nowrap">
                  GENEVA MAKEUP ACADEMY
                </div>
              </Link>
            </div>

            {/* COMPACT LOGO */}

            <div
              className={cn(
                "absolute transition-opacity duration-400 flex flex-col justify-center",
                isCompact ? "opacity-100" : "opacity-0 pointer-events-none"
              )}
            >
              <Link href={`/${locale}`} className="flex flex-col leading-none">
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
                isCompact
                  ? "items-center text-white mb-0"
                  : "mt-[63px] mb-[20px]"
              )}
            >

              <Link
                href={localized("/the-academy")}
                className={cn(
                  "ui-nav",
                  isCompact ? "text-white" : "text-charcoal"
                )}
              >
                {dict.nav.academy}
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
                  {dict.nav.trainings}

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
                        <Link href={localized("/programs")} className="ui-nav">
                          {dict.nav.programs}
                        </Link>

                        <Link href={localized("/modules")} className="ui-nav">
                          {dict.nav.modules}
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href={localized("/students")}
                className={cn(
                  "ui-nav",
                  isCompact ? "text-white" : "text-charcoal"
                )}
              >
                {dict.nav.students}
              </Link>

              {!isCompact && (
                <Link
                  href={localized("/contact")}
                  className="ui-nav text-charcoal"
                >
                  {dict.nav.contact}
                </Link>
              )}

              {isCompact && (
                <Button
                  href={localized("/contact")}
                  variant="outline"
                  tone="light"
                  size="sm"
                  className="w-[73px]"
                >
                  {dict.nav.contact}
                </Button>
              )}
            </div>
          </div>

          {/* RIGHT SIDE */}

          {!isCompact && (
            <div className="absolute right-[22px] top-0 h-[108px] flex flex-col items-end">
              <div className="mt-[11px] flex items-center gap-[24px] whitespace-nowrap">

                <Link
                  href={localized("/partnerships")}
                  className="text-[14px] tracking-[-0.7px] text-charcoal"
                >
                  {dict.footer.partnerships}
                </Link>

                {/* LANGUAGE SWITCHER */}
                <div className="text-[11px] font-extrabold tracking-[-0.55px] flex gap-[10px]">

                  {(["fr", "en", "es", "pt"] as Locale[]).map((lng) => {

                    const isActive = locale === lng;

                    return (
                      <button
                        key={lng}
                        onClick={() => switchLanguage(lng)}
                        className={cn(
                          "uppercase transition-colors cursor-pointer",

                          isActive
                            ? "text-[var(--color-muted-coral)]"
                            : "text-charcoal hover:text-[var(--color-muted-coral)]"
                        )}
                      >
                        {lng.toUpperCase()}
                      </button>
                    );

                  })}

                </div>
              </div>

              <div className="mt-[14px] flex gap-[4px]">

                <Button
                  href={localized("/brochure")}
                  variant="solid"
                  tone="dark"
                  size="sm"
                  icon="download"
                  className="w-[204px]"
                >
                  {dict.cta.downloadBrochure}
                </Button>

                <Button
                  href={localized("/contact?intent=meeting")}
                  variant="outline"
                  tone="dark"
                  size="sm"
                  icon="arrowRight"
                >
                  {dict.cta.requestMeeting}
                </Button>

              </div>
            </div>
          )}

          {isCompact && (
            <div className="absolute right-[22px] top-0 h-full flex items-center gap-[4px]">

              <Button
                href={localized("/brochure")}
                variant="solid"
                tone="light"
                size="sm"
                icon="download"
                className="w-[204px]"
              >
                {dict.cta.downloadBrochure}
              </Button>

              <Button
                href={localized("/contact?intent=meeting")}
                variant="outline"
                tone="light"
                size="sm"
                icon="arrowRight"
              >
                {dict.cta.requestMeeting}
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

        {/* Logo */}

        <Link
          href={`/${locale}`}
          className="flex items-center gap-2"
          onClick={() => setIsMenuOpen(false)}
        >

          {/* Icon disappears in compact mode */}
          {!isCompact && (
            <Image
              src="/logo_v2.png"
              alt="M-ART Logo"
              width={48}
              height={32}
              priority
            />
          )}

          <span
            className={cn(
              "brand-logo-sm",
              isCompact ? "text-white" : "text-charcoal"
            )}
          >
            M•ART
          </span>

        </Link>

        {/* Right Side */}

        <div className="flex items-center gap-4">

          <Button
            href={localized("/contact")}
            variant="outline"
            tone={isCompact ? "light" : "dark"}
            size="sm"
          >
            {dict.nav.contact}
          </Button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "ui-nav tracking-[2px]",
              isCompact ? "text-white" : "text-charcoal"
            )}
          >
            {isMenuOpen ? "CLOSE" : "MENU"}
          </button>

        </div>

      </div>
    </header>

{/* =========================================================
    MOBILE MENU OVERLAY
========================================================= */}

<div
  className={cn(
    "xl:hidden fixed inset-0 z-40 bg-[var(--color-deep-charcoal)] text-white transition-all duration-500",
    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
  )}
>
  <div className="h-full overflow-y-auto px-[var(--space-6)]">

    <div className="min-h-full flex flex-col justify-center py-[var(--space-16)]">

      <nav className="flex flex-col gap-[var(--space-8)] text-[28px] font-bold tracking-[-0.5px] uppercase">

        <Link href={`/${locale}`} onClick={() => setIsMenuOpen(false)}>
          HOME
        </Link>

        <Link href={localized("/the-academy")} onClick={() => setIsMenuOpen(false)}>
          {dict.nav.academy}
        </Link>

        <Link href={localized("/programs")} onClick={() => setIsMenuOpen(false)}>
          {dict.nav.programs}
        </Link>

        <Link href={localized("/modules")} onClick={() => setIsMenuOpen(false)}>
          {dict.nav.modules}
        </Link>

        <Link href={localized("/students")} onClick={() => setIsMenuOpen(false)}>
          {dict.nav.students}
        </Link>

        <Link href={localized("/contact")} onClick={() => setIsMenuOpen(false)}>
          {dict.nav.contact}
        </Link>

      </nav>

      <div className="mt-[var(--space-12)] border-t border-white/10 pt-[var(--space-8)] flex flex-col gap-[var(--space-6)]">

  <Button
    href={localized("/brochure")}
    variant="solid"
    tone="light"
    size="sm"
    icon="download"
    className="w-full"
  >
    {dict.cta.downloadBrochure}
  </Button>

  <Button
    href={localized("/contact?intent=meeting")}
    variant="outline"
    tone="light"
    size="sm"
    icon="arrowRight"
    className="w-full"
  >
    {dict.cta.requestMeeting}
  </Button>

  {/* LANGUAGE SWITCHER */}

  <div className="pt-[var(--space-6)] border-t border-white/10 flex justify-center gap-[14px] text-[12px] font-extrabold tracking-[1px] uppercase">

    {(["fr", "en", "es", "pt"] as Locale[]).map((lng) => {

      const isActive = locale === lng;

      return (
        <button
          key={lng}
          onClick={() => switchLanguage(lng)}
          className={cn(
            "transition-colors",

            isActive
              ? "text-[var(--color-muted-coral)]"
              : "text-white hover:text-[var(--color-muted-coral)]"
          )}
        >
          {lng.toUpperCase()}
        </button>
      );

    })}

  </div>

</div>

    </div>
  </div>
</div>
    </>
  );
}