"use client"

import Image from "next/image"

interface InfoBandProps {
  items: {
    icon: string
    label: string
    value: string
  }[]
}

export default function InfoBand({ items }: InfoBandProps) {

  return (
    <section className="bg-[#f4f4f4]">
      <div className="container py-8 md:py-5">

        <div className="hidden md:grid grid-cols-5 gap-8 text-center">

          {items.map((item) => (

            <div key={item.label} className="flex flex-col items-center">

              <div className="flex items-center gap-2 mb-2">
                <Image src={item.icon} alt="" width={22} height={22} />
                <div className="text-[20px] font-bold italic uppercase">
                  {item.label}
                </div>
              </div>

              <div className="text-[14px] font-medium max-w-[180px]">
                {item.value}
              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  )
}