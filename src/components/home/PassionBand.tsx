export default function PassionBand() {
  return (
    <div
      className="
        flex items-center

        /* Mobile (base) */
        h-auto py-[20px]

        /* Tablet */
        md:h-[80px] md:py-0

        /* Desktop (restore original exactly) */
        lg:h-[91px]
      "
    >
      <div
        className="
          text-[#23252b]
          font-bold italic uppercase

          /* =========================
             MOBILE (base)
          ========================= */
          text-[22px]
          tracking-[-0.28px]
          leading-[1.1]
          text-center
          max-w-[390px]
          mx-auto
          px-[0px]

          /* =========================
             TABLET
          ========================= */
          md:text-[20px]
          md:tracking-[-0.4px]
          md:max-w-[600px]
          md:px-[24px]

          /* =========================
             DESKTOP (exact original)
          ========================= */
          lg:text-[24px]
          lg:tracking-[-0.48px]
          lg:leading-[1.1]
          lg:text-left
          lg:max-w-none
          lg:px-0
          lg:mx-0
          lg:ml-[196px]
        "
      >
        PASSION, SHAPED INTO PROFESSION. <br />
        INCLUSIVE. DEMANDING. EXCELLENT.
      </div>
    </div>
  );
}