// src/app/page.tsx

/**
 * Home Page Test
 * Validates typography system, color tokens,
 * layout containers, and spacing rhythm.
 */

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="section-padding bg-editorialWhite">
        <div className="container">
          <h1 className="heading-display mb-8">
            Professional Artistic Education
          </h1>

          <p className="body-intro max-w-2xl mb-12">
            A professional artistic makeup academy that combines real-world
            industry preparation with creative identity development.
          </p>

          <div className="flex gap-6">
            <button className="bg-charcoal text-white px-8 py-4 ui-button">
              APPLY NOW
            </button>

            <button className="border border-charcoal text-charcoal px-8 py-4 ui-button">
              PROGRAM DETAILS
            </button>
          </div>
        </div>
      </section>

      {/* Accent Test Section */}
      <section className="section-padding bg-white">
        <div className="container grid grid-cols-2 gap-12">
          <div className="bg-coral text-white p-10">
            <h2 className="heading-lg mb-4">Creative Identity</h2>
            <p className="body-standard">
              Industry immersion, portfolio building, and structured artistic
              development.
            </p>
          </div>

          <div className="bg-honey text-charcoal p-10">
            <h2 className="heading-lg mb-4">Professional Grounding</h2>
            <p className="body-standard">
              Real terrain preparation, employment pathways, and technical
              excellence.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}