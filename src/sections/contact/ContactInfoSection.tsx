import Icon from "@/components/ui/Icon";

interface InfoBlock {
  title: string;
  lines: string[];
}

interface ContactInfoSectionProps {
  visit: InfoBlock;
  call: InfoBlock;
  email: InfoBlock;
}

export default function ContactInfoSection({
  visit,
  call,
  email,
}: ContactInfoSectionProps) {
  const blocks = [
    { ...visit, icon: "mapPin" as const },
    { ...call, icon: "phone" as const },
    { ...email, icon: "mail" as const },
  ];

  return (
    <section className="w-full bg-[var(--color-editorial-white)] pb-[var(--space-24)]">
      <div className="container">
        <div className="flex flex-col gap-[var(--space-10)]">
          
          {/* Section Heading */}
          <h2 className="heading-lg uppercase">
            Our Contacts
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-10)]">
            {blocks.map((block, index) => (
              <div
                key={index}
                className="flex flex-col gap-[var(--space-4)]"
              >
                {/* Title + Icon */}
                <div className="flex items-center gap-[var(--space-3)]">
                  <Icon
                    icon={block.icon}
                    className="w-[var(--space-5)] h-[var(--space-5)] text-[var(--color-deep-charcoal)]"
                  />
                  <h3 className="heading-sm uppercase">
                    {block.title}
                  </h3>
                </div>

                {/* Lines */}
                <div className="flex flex-col gap-[var(--space-2)]">
                  {block.lines.map((line, i) => (
                    <p
                      key={i}
                      className="body-standard text-[var(--color-deep-charcoal)]"
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}