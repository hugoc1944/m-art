import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="PRIVACY POLICY"
      breadcrumbLabel="Privacy Policy"
      intro={
        <>
          M•ART Geneva Makeup Academy places great importance on the handling,
          confidentiality, and security of personal data. This Privacy Policy
          explains how personal data is collected, processed, stored, and
          protected in accordance with the General Data Protection Regulation
          (EU) 2016/679 (GDPR), applicable Swiss data protection legislation,
          and other relevant laws.
          <br />
          <br />
          Last updated: 28/02/2026
        </>
      }
      sections={[
        {
          title: "I. Data Controller",
          content: (
            <>
              <p>
                The Data Controller responsible for the processing of personal
                data is:
              </p>
              <p>
                <strong>[Full Legal Company Name]</strong>
                <br />
                Registered office: [Full Legal Address]
                <br />
                Registration number: [Registration Number]
                <br />
                VAT / UID number: [If applicable]
              </p>
              <p>
                Operating as: M•ART Geneva Makeup Academy
              </p>
              <p>
                General enquiries: info@ecoledemaquillage.ch
                <br />
                Data protection contact: privacy@ecoledemaquillage.ch
              </p>
            </>
          ),
        },
        {
          title: "II. What Is Personal Data?",
          content: (
            <>
              <p>
                Personal data refers to any information relating to an
                identified or identifiable natural person, directly or
                indirectly.
              </p>
              <p>
                This includes, for example, names, email addresses, phone
                numbers, IP addresses, and online identifiers.
              </p>
            </>
          ),
        },
        {
          title: "III. What Data We Collect",
          content: (
            <>
              <p>
                We collect personal data in the following situations:
              </p>

              <p>
                <strong>1. When You Contact Us</strong>
              </p>
              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>First Name</li>
                <li>Last Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Subject of your request</li>
                <li>Message content</li>
              </ul>

              <p>
                Fields marked as mandatory are necessary for us to respond to
                your inquiry.
              </p>

              <p>
                <strong>2. When You Browse Our Website</strong>
              </p>
              <p>
                We may automatically collect technical and interaction data
                such as IP address, browser type, device type, pages visited,
                time spent on pages, and interaction events.
              </p>
              <p>
                This data is collected through consent-based tracking tools
                including Google Analytics, Google Tag Manager, Google Ads, and
                Meta Pixel.
              </p>
            </>
          ),
        },
        {
          title: "IV. Purposes of Processing",
          content: (
            <>
              <p>We process personal data for the following purposes:</p>

              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>Responding to inquiries and contact requests</li>
                <li>Providing information about our programs</li>
                <li>Improving website performance and user experience</li>
                <li>Measuring marketing and advertising effectiveness</li>
                <li>Ensuring website security and integrity</li>
              </ul>

              <p>
                We do not engage in automated decision-making that produces
                legal or similarly significant effects.
              </p>
            </>
          ),
        },
        {
          title: "V. Legal Basis for Processing",
          content: (
            <>
              <p>
                Personal data is processed based on:
              </p>

              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>
                  Your consent (for analytics, marketing cookies, and
                  communications)
                </li>
                <li>
                  Our legitimate interest in responding to inquiries and
                  maintaining website security
                </li>
                <li>
                  Compliance with applicable legal obligations where required
                </li>
              </ul>
            </>
          ),
        },
        {
          title: "VI. Data Retention",
          content: (
            <>
              <p>
                Contact form data is retained for a maximum period of 365 days.
              </p>
              <p>
                If no further interaction occurs within this period, the data
                is automatically deleted.
              </p>
              <p>
                You may request deletion of your data at any time by contacting
                privacy@ecoledemaquillage.ch.
              </p>
              <p>
                Analytics and marketing data retention periods depend on the
                respective platform configuration.
              </p>
            </>
          ),
        },
        {
          title: "VII. Data Sharing and Processors",
          content: (
            <>
              <p>
                We do not sell personal data.
              </p>
              <p>
                Personal data may be processed by trusted service providers
                strictly for operational purposes:
              </p>

              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>Vercel Inc. (hosting infrastructure)</li>
                <li>Resend (email delivery services)</li>
                <li>Prisma (database management layer)</li>
                <li>Google Analytics and Google Ads</li>
                <li>Meta Pixel</li>
              </ul>

              <p>
                These providers are contractually required to ensure
                appropriate data protection measures.
              </p>
            </>
          ),
        },
        {
          title: "VIII. International Data Transfers",
          content: (
            <>
              <p>
                Some service providers may process data outside Switzerland or
                the European Union.
              </p>
              <p>
                Where applicable, transfers are safeguarded using Standard
                Contractual Clauses (SCCs), adequacy decisions, or equivalent
                legal mechanisms.
              </p>
            </>
          ),
        },
        {
          title: "IX. Data Security",
          content: (
            <>
              <p>
                We implement appropriate technical and organizational measures
                to protect personal data, including encrypted HTTPS
                communication, secure hosting infrastructure, access control,
                and database protection.
              </p>
              <p>
                While we strive to protect your data, no system can guarantee
                absolute security.
              </p>
            </>
          ),
        },
        {
          title: "X. Your Rights",
          content: (
            <>
              <p>
                Under GDPR and applicable laws, you have the right to:
              </p>

              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>Access your personal data</li>
                <li>Request rectification of inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Restrict or object to processing</li>
                <li>Withdraw consent at any time</li>
                <li>Request data portability where applicable</li>
              </ul>

              <p>
                To exercise your rights, contact:
                <br />
                privacy@ecoledemaquillage.ch
              </p>
              <p>
                You also have the right to lodge a complaint with your local
                data protection authority.
              </p>
            </>
          ),
        },
        {
          title: "XI. Cookies",
          content: (
            <>
              <p>
                Our website uses essential, analytics, and marketing cookies.
              </p>
              <p>
                Non-essential cookies are activated only after your explicit
                consent via our cookie banner, where you can manage your
                preferences at any time.
              </p>
              <p>
                For detailed information, please refer to our Cookie Policy.
              </p>
            </>
          ),
        },
        {
          title: "XII. Changes to This Policy",
          content: (
            <>
              <p>
                We may update this Privacy Policy from time to time to reflect
                legal or operational changes.
              </p>
              <p>
                The latest version will always be available on this page with
                the updated revision date.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}