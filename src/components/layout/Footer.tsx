"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[#050505] text-white">

      {/* ================= DESKTOP (RESTORED EXACTLY) ================= */}
      <div className="hidden lg:block relative w-[1282px] h-[329px] mx-auto">

        {/* ================= LEFT COLUMN ================= */}
        <div className="absolute left-[46px] top-[48px] w-[510px]">

          {/* LOGO BLOCK */}
          <div className="relative w-[169px] h-[151px]">
            <div className="absolute left-0 top-0">
              <Image
                src="/logo_v2.png"
                alt="M•ART Logo"
                width={155}
                height={120}
                className="object-contain"
              />
            </div>

            <div className="absolute left-[20px] top-[120px] text-[36px] tracking-[3.84px] font-[Didot] font-bold whitespace-nowrap">
              M•ART
            </div>

            <div className="absolute left-[8px] top-[165px] text-[9px] tracking-[1.53px] uppercase whitespace-nowrap">
              GENEVA MAKEUP ACADEMY
            </div>
          </div>

          {/* SOCIAL HEADING */}
          <div className="absolute left-[195px] top-[25px] w-[320px]">
            <h3 className="text-[36px] font-bold tracking-[-1.8px] leading-[1.07] uppercase">
              FOLLOW M•ART <br />
              ON SOCIAL MEDIA
            </h3>
          </div>

          {/* SOCIAL ICONS */}
          <div className="absolute left-[195px] top-[115px] flex gap-[15px]">
            <Link href="#"><Image src="/icons/ig.png" alt="" width={28} height={28} /></Link>
            <Link href="#"><Image src="/icons/fb.png" alt="" width={28} height={28} /></Link>
            <Link href="#"><Image src="/icons/yt.png" alt="" width={28} height={28} /></Link>
          </div>
        </div>

        {/* ================= RIGHT NAVIGATION ================= */}
        <div className="absolute left-[620px] top-[73px] ">

          {/* COLUMN 1 — PROGRAMS */}
          <div className="absolute left-0 w-[154px]">
            <h4 className="text-[16px] font-bold italic tracking-[-0.32px] uppercase">
              Trainings
            </h4>

            <div className="mt-[8px] flex flex-col gap-[5px] text-[14px] tracking-[-0.28px]">
              <Link href="/programs">Programs</Link>
              <Link href="/modules">Individual Modules</Link>
            </div>
          </div>

          {/* COLUMN 2 — M•ART ACADEMY */}
          <div className="absolute left-[222px] w-[154px]">
            <h4 className="text-[16px] tracking-[-0.32px] uppercase">
              <span className="font-bold">M•ART </span>
              <span className="font-bold italic">academy</span>
            </h4>

            <div className="mt-[8px] flex flex-col gap-[5px] text-[14px] tracking-[-0.28px]">
              <Link href="/the-academy">Introduction</Link>
              <Link href="/students">Students</Link>
              <Link href="/contact?intent=meeting">Join the Academy</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* COLUMN 3 — INFORMATION */}
          <div className="absolute left-[444px] w-[196px]">
            <h4 className="text-[16px] font-bold italic tracking-[-0.32px] uppercase">
              Information
            </h4>

            <div className="mt-[8px] flex flex-col gap-[5px] text-[14px] tracking-[-0.28px]">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/legal-notices">Legal Notices</Link>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
              <Link href="/cookie-settings">Cookie Settings</Link>
            </div>
          </div>

          {/* COLUMN 4 — ADDRESS */}
          <div className="absolute left-0 top-[90px] w-[154px]">
            <h4 className="text-[16px] font-bold italic tracking-[-0.32px] uppercase">
              Address
            </h4>

            <p className="mt-[8px] text-[14px] italic tracking-[-0.28px] leading-[1.35]">
              Erlacherweg 33,<br />
              2503 Geneva<br />
              Switzerland
            </p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="absolute bottom-[20px] left-1/2 -translate-x-1/2 text-[14px] tracking-[-0.28px] text-center whitespace-nowrap">
          © {year} M•ART GENEVA MAKEUP ACADEMY ALL RIGHTS RESERVED
        </div>

      </div>

      {/* ================= MOBILE + TABLET ================= */}
      <div className="lg:hidden px-6 py-12">

        {/* LOGO */}
        <div className="flex flex-col items-center text-center">
          <Image src="/logo_v2.png" alt="" width={120} height={90} />
          <div className="mt-1 text-[28px] tracking-[3px] font-[Didot] font-bold">
            M•ART
          </div>
          <div className="text-[9px] tracking-[1.53px] uppercase mt-[-5px]">
            GENEVA MAKEUP ACADEMY
          </div>
        </div>

        {/* SOCIAL */}
        <div className="mt-5 text-center">
          <h3 className="text-[22px] font-bold uppercase tracking-[-1px]">
            FOLLOW M•ART ON SOCIAL MEDIA
          </h3>
          <div className="mt-4 flex justify-center gap-6">
            <Link href="#"><Image src="/icons/ig.png" alt="" width={28} height={28} /></Link>
            <Link href="#"><Image src="/icons/fb.png" alt="" width={28} height={28} /></Link>
            <Link href="#"><Image src="/icons/yt.png" alt="" width={28} height={28} /></Link>
          </div>
        </div>

        {/* NAVIGATION — 2 COLUMNS ON MOBILE */}
        <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 text-left">

          {/* PROGRAMS */}
          <div>
            <h4 className="text-[16px] font-bold italic uppercase mb-3">
              Trainings
            </h4>
            <div className="flex flex-col gap-2 text-[14px]">
              <Link href="/programs">Programs</Link>
              <Link href="/modules">Individual Modules</Link>
            </div>
          </div>

          {/* ACADEMY */}
          <div>
            <h4 className="text-[16px] font-bold uppercase mb-3">
              M•ART Academy
            </h4>
            <div className="flex flex-col gap-2 text-[14px]">
              <Link href="/the-academy">Introduction</Link>
              <Link href="/students">Students</Link>
              <Link href="/contact?intent=meeting">Join the Academy</Link>
              <Link href="/contact">Contact Us</Link>
            </div>
          </div>

          {/* INFORMATION */}
          <div>
            <h4 className="text-[16px] font-bold italic uppercase mb-3">
              Information
            </h4>
            <div className="flex flex-col gap-2 text-[14px]">
              <Link href="/privacy-policy">Privacy Policy</Link>
              <Link href="/legal-notices">Legal Notices</Link>
              <Link href="/terms-and-conditions">Terms and Conditions</Link>
              <Link href="/cookie-policy">Cookie Policy</Link>
              <Link href="/cookie-settings">Cookie Settings</Link>
            </div>
          </div>

          {/* ADDRESS */}
          <div>
            <h4 className="text-[16px] font-bold italic uppercase mb-3">
              Address
            </h4>
            <p className="text-[14px] italic leading-[1.4]">
              Erlacherweg 33,<br />
              2503 Geneva<br />
              Switzerland
            </p>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 text-center text-[13px] tracking-[-0.28px]">
          © {year} M•ART GENEVA MAKEUP ACADEMY ALL RIGHTS RESERVED
        </div>

      </div>

    </footer>
  );
}