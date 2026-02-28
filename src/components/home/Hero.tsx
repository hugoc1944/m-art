"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden h-[690px] lg:h-[690px] md:h-[620px] sm:min-h-[520px]">

      {/* Background */}
      <Image
      src="/hero_2.png"
      alt="Hero Background"
      fill
      priority
      quality={95}
      sizes="(max-width: 640px) 100vw,
            (max-width: 1024px) 100vw,
            100vw"
      className="object-cover object-[center_60%] md:object-center sm:object-[left_40%]"
    />

      {/* Overlay */}
      <div className="
        absolute inset-0 z-[1]
        bg-black/20
        md:bg-black/30
        sm:bg-black/40
      " />

      <div className="relative z-[2] w-full h-full">

        {/* ================= DESKTOP (UNCHANGED) ================= */}
        <div className="hidden lg:flex absolute inset-0 items-center">

          <div className="ml-[100px]">
            <Image
              src="/logo_v2.png"
              alt="M-ART Icon"
              width={250}
              height={230}
              priority
            />
            <div className="mt-2 text-white brand-logo-lg">
              M•ART
            </div>
          </div>

          <div className="ml-[10px] max-w-[980px]">
            <h1 className="text-white heading-display text-[78px] leading-[1.05]">
              WHERE PASSION
              BECOMES <br /> PROFESSION.
            </h1>

            <p className="mt-4 text-white text-[26px] tracking-[-0.48px] uppercase">
              Professional makeup academy in Geneva.
            </p>
          </div>
        </div>

        {/* ================= TABLET ================= */}
        <div className="hidden sm:flex lg:hidden absolute inset-0 items-center">

          <div className="px-12 max-w-[700px]">
            <h1 className="
              text-white
              text-[48px]
              leading-[1.08]
              tracking-[-2px]
              uppercase
              font-bold
            ">
              WHERE PASSION BECOMES PROFESSION.
            </h1>

            <p className="
              mt-6
              text-white
              text-[18px]
              tracking-[-0.3px]
              uppercase
              max-w-[500px]
            ">
              Professional makeup academy in Geneva.
            </p>
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="flex sm:hidden absolute inset-0 items-center">

          <div className="px-6">

            <h1 className="
              text-white
              text-[42px]
              leading-[1.1]
              tracking-[-1.6px]
              uppercase
              font-bold
            ">
              WHERE PASSION
              BECOMES PROFESSION.
            </h1>

            <p className="
              mt-2
              text-white
              text-[16px]
              font-medium
              tracking-[-0.2px]
              uppercase
              max-w-[280px]
            ">
              Professional makeup academy in Geneva.
            </p>

          </div>
        </div>

      </div>
    </section>
  );
}