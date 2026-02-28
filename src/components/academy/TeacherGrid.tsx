"use client";

interface Founder {
  name: string;
  title: string;
  bio: string[];
  image: string;
}

interface TeacherGridProps {
  teachers: Founder[];
}

export default function TeacherGrid({ teachers }: TeacherGridProps) {
  return (
    <section className="w-full bg-white">

      {teachers.map((person, index) => {
        const isImageLeft = index % 2 === 0;

        return (
          <div key={index} className="w-full">

            {/* ================= DESKTOP ================= */}
            <div className="hidden lg:grid grid-cols-2 min-h-[520px]">

              {/* IMAGE SIDE */}
              <div
                className={`relative ${isImageLeft ? "order-1" : "order-2"}`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${person.image})` }}
                />
              </div>

              {/* TEXT SIDE */}
              <div
                className={`flex items-center ${
                  isImageLeft ? "order-2" : "order-1"
                }`}
              >
                <div className="max-w-[560px] px-16 py-7">

                  <h3 className="heading-lg text-[#050505] mb-3">
                    {person.name}
                  </h3>

                  <p className="ui-nav text-[#050505] mb-6">
                    {person.title}
                  </p>

                  <div className="space-y-4 pl-6">
                    {person.bio.map((paragraph, i) => (
                      <p
                        key={i}
                        className="body-standard text-[#23252b] leading-[1.6]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                </div>
              </div>

            </div>

            {/* ================= TABLET ================= */}
            <div className="hidden md:block lg:hidden container py-14">

              <div
                className="relative h-[420px] mb-8 bg-cover bg-center"
                style={{ backgroundImage: `url(${person.image})` }}
              />

              <div className="max-w-[680px] mx-auto">

                <h3 className="heading-lg text-[#050505] mb-3 text-center">
                  {person.name}
                </h3>

                <p className="ui-nav text-[#050505] mb-6 text-center">
                  {person.title}
                </p>

                <div className="space-y-4">
                  {person.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="body-standard text-[#23252b] leading-[1.6]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

              </div>

            </div>

            {/* ================= MOBILE ================= */}
            <div className="md:hidden py-10">

              <div
                className="w-full h-[360px] bg-cover bg-center"
                style={{ backgroundImage: `url(${person.image})` }}
              />

              <div className="px-6 pt-6">

                <h3 className="heading-lg text-[#050505] mb-3 text-center">
                  {person.name}
                </h3>

                <p className="ui-nav text-[#050505] mb-5 text-center">
                  {person.title}
                </p>

                <div className="space-y-4">
                  {person.bio.map((paragraph, i) => (
                    <p
                      key={i}
                      className="body-standard text-[#23252b] leading-[1.6]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

              </div>

            </div>

          </div>
        );
      })}

    </section>
  );
}