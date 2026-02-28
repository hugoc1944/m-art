"use client";

import Image from "next/image";

interface InfoBandProps {
  diploma: string;
}

export default function InfoBand({ diploma }: InfoBandProps) {
  const items = [
    {
      icon: "/icons/calendar.png",
      label: "DURATION",
      value: "September – June",
    },
    {
      icon: "/icons/format.png",
      label: "FORMAT",
      value: "Part-time (morning schedule)",
    },
    {
      icon: "/icons/language.png",
      label: "LANGUAGE",
      value: "French / English",
    },
    {
      icon: "/icons/diploma.png",
      label: "DIPLOMA",
      value: diploma,
    },
    {
      icon: "/icons/location.png",
      label: "LOCATION",
      value: "Lausanne, Switzerland",
    },
  ];

  return (
    <section className="bg-[#f4f4f4]">
      <div className="container py-8 md:py-5">

        {/* ================= DESKTOP / TABLET ================= */}
        <div className="hidden md:grid grid-cols-5 gap-8 text-center">

          {items.map((item) => (
            <div key={item.label} className="flex flex-col items-center">

              {/* Icon + Label */}
              <div className="flex items-center gap-2 mb-2">
                <Image
                  src={item.icon}
                  alt=""
                  width={22}
                  height={22}
                  className="object-contain"
                />
                <div className="text-[20px] font-bold italic uppercase tracking-[-0.3px] text-[#050505]">
                  {item.label}
                </div>
              </div>

              {/* Value */}
              <div className="text-[14px] font-medium tracking-[-0.28px] text-[#050505] text-center max-w-[180px]">
                {item.value}
              </div>

            </div>
          ))}

        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden divide-y divide-black/10">

          {items.map((item) => (
            <div
              key={item.label}
              className="py-5 flex flex-col gap-1"
            >
              <div className="flex items-center gap-2">
                <Image
                  src={item.icon}
                  alt=""
                  width={16}
                  height={16}
                  className="object-contain"
                />
                <div className="text-[14px] font-bold italic uppercase tracking-[-0.28px] text-[#050505]">
                  {item.label}
                </div>
              </div>

              <div className="text-[13px] font-medium tracking-[-0.28px] text-[#050505] mt-1">
                {item.value}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}