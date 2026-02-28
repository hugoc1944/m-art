"use client";

import Link from "next/link";

interface LegalSection {
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  breadcrumbLabel: string;
  intro?: React.ReactNode;
  sections: LegalSection[];
}

export default function LegalPageLayout({
  title,
  breadcrumbLabel,
  intro,
  sections,
}: LegalPageLayoutProps) {
  return (
    <main className="w-full bg-[var(--color-editorial-white)]">

      <div className="container-narrow section-padding">

        {/* =========================
            BREADCRUMB
        ========================= */}
        <div className="ui-utility mb-[var(--space-6)] uppercase flex gap-2 text-[var(--color-deep-charcoal)]">

          <Link
            href="/"
            className="hover:opacity-70 transition-opacity"
          >
            HOME
          </Link>

          <span>/</span>

          <span className="opacity-70">
            {breadcrumbLabel}
          </span>

        </div>

        {/* =========================
            PAGE TITLE
        ========================= */}
        <h1 className="heading-xl mb-[var(--space-8)] text-[var(--color-deep-charcoal)]">
          {title}
        </h1>

        {/* =========================
            INTRO
        ========================= */}
        {intro && (
          <div className="body-standard mb-[var(--space-12)] text-[var(--color-deep-charcoal)] leading-[1.6]">
            {intro}
          </div>
        )}

        {/* =========================
            SECTIONS
        ========================= */}
        <div className="flex flex-col gap-[var(--space-12)]">

          {sections.map((section, index) => (
            <div key={index}>

              <h2 className="heading-sm uppercase mb-[var(--space-4)] text-[var(--color-deep-charcoal)]">
                {section.title}
              </h2>

              <div className=" text-[var(--color-deep-charcoal)] leading-[1.7] space-y-[var(--space-4)]">
                {section.content}
              </div>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}