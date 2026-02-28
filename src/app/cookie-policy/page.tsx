import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="COOKIE POLICY"
      breadcrumbLabel="Cookie Policy"
      intro={
        <>
          This Cookie Policy explains how M•ART Geneva Makeup Academy uses
          cookies and similar technologies on this website. It describes what
          cookies are, how we use them, and how you can manage your preferences.
          <br />
          <br />
          Last updated: 28/02/2026
        </>
      }
      sections={[
        {
          title: "I. What Are Cookies?",
          content: (
            <>
              <p>
                Cookies are small text files placed on your device (computer,
                tablet, or smartphone) when you visit a website. They allow the
                website to recognize your device and store certain information
                about your preferences or past actions.
              </p>
              <p>
                Cookies may be set directly by us (first-party cookies) or by
                third-party service providers whose services we use.
              </p>
            </>
          ),
        },
        {
          title: "II. How We Use Cookies",
          content: (
            <>
              <p>
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>Ensuring the proper functioning of the website</li>
                <li>Measuring website performance and usage</li>
                <li>Improving user experience</li>
                <li>Measuring advertising effectiveness</li>
                <li>Delivering relevant advertisements</li>
              </ul>
              <p>
                Non-essential cookies are activated only after your explicit
                consent via our cookie banner.
              </p>
            </>
          ),
        },
        {
          title: "III. Categories of Cookies We Use",
          content: (
            <>
              <p>
                We use the following categories of cookies:
              </p>

              <p>
                <strong>1. Strictly Necessary Cookies</strong>
              </p>
              <p>
                These cookies are essential for the website to function
                properly. They enable core features such as security,
                accessibility, and consent preference storage. These cookies do
                not require prior consent.
              </p>

              <p>
                <strong>2. Analytics Cookies (Performance Cookies)</strong>
              </p>
              <p>
                These cookies allow us to measure website traffic and analyze
                how visitors interact with our pages. This helps us improve
                structure, content, and performance.
              </p>
              <p>
                We use Google Analytics (GA4). Data collected may include IP
                address (processed with privacy safeguards), device
                information, browser information, pages visited, and interaction
                events.
              </p>
              <p>
                Analytics cookies are stored for a maximum period of 13 months,
                in accordance with EU best practices.
              </p>

              <p>
                <strong>3. Marketing and Advertising Cookies</strong>
              </p>
              <p>
                These cookies are used to measure advertising effectiveness and
                to display relevant advertisements on third-party platforms.
              </p>
              <p>
                We use:
              </p>
              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>Google Ads (conversion tracking and remarketing)</li>
                <li>Meta Pixel (PageView and event tracking)</li>
              </ul>
              <p>
                In some cases, enhanced conversion features may process
                hashed identifiers (such as email addresses) to improve
                advertising accuracy. These features are activated only where
                consent has been provided.
              </p>
              <p>
                Marketing cookies are stored for a maximum period of 13 months.
              </p>
            </>
          ),
        },
        {
          title: "IV. Legal Basis",
          content: (
            <>
              <p>
                Strictly necessary cookies are processed based on our
                legitimate interest in ensuring website functionality and
                security.
              </p>
              <p>
                Analytics and marketing cookies are processed solely based on
                your explicit consent (Article 6(1)(a) GDPR). You may withdraw
                your consent at any time.
              </p>
            </>
          ),
        },
        {
          title: "V. Managing Your Cookie Preferences",
          content: (
            <>
              <p>
                When you first visit our website, you are presented with a
                cookie banner allowing you to accept, refuse, or customize your
                cookie preferences.
              </p>
              <p>
                You may change or withdraw your consent at any time through the
                cookie preference management tool available on our website.
              </p>
              <p>
                You can also configure your browser to block or delete cookies.
                Please note that disabling certain cookies may affect the
                functionality of the website.
              </p>
            </>
          ),
        },
        {
          title: "VI. Third-Party Services",
          content: (
            <>
              <p>
                Some cookies are placed by third-party service providers,
                including:
              </p>
              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>Google Analytics and Google Ads</li>
                <li>Meta Platforms (Meta Pixel)</li>
              </ul>
              <p>
                These providers may process data outside Switzerland or the
                European Union. Where required, appropriate safeguards such as
                Standard Contractual Clauses (SCCs) or adequacy decisions are
                applied.
              </p>
              <p>
                We do not control the privacy practices of these third parties
                and encourage you to review their respective privacy policies.
              </p>
            </>
          ),
        },
        {
          title: "VII. Data Retention",
          content: (
            <>
              <p>
                Cookies are retained for no longer than 13 months from the date
                of placement, in accordance with EU regulatory guidance.
              </p>
              <p>
                Consent preferences may be stored for up to 12 months before
                renewal is requested.
              </p>
            </>
          ),
        },
        {
          title: "VIII. Contact",
          content: (
            <>
              <p>
                If you have any questions regarding this Cookie Policy or the
                way we use cookies, please contact:
              </p>
              <p>
                privacy@ecoledemaquillage.ch
              </p>
            </>
          ),
        },
      ]}
    />
  );
}