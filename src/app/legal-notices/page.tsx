import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function LegalNoticesPage() {
  return (
    <LegalPageLayout
      title="LEGAL NOTICES & TERMS OF USE"
      breadcrumbLabel="Legal Notices"
      intro={
        <>
          This page provides the legal information relating to the publication
          and use of the M•ART Geneva Makeup Academy website. By accessing and
          browsing this website, you agree to the terms set out below.
          <br />
          <br />
          Last updated: 28/02/2026
        </>
      }
      sections={[
        {
          title: "I. Publisher Information",
          content: (
            <>
              <p>
                <strong>[Full Legal Company Name]*mandatory</strong>
              </p>
              <p>
                Registered office*mandatory: [Full Legal Address]
                <br />
                Registration number (UID)*mandatory: [Registration Number]
                <br />
                VAT number: [If applicable]
              </p>
              <p>
                Operating as: M•ART Geneva Makeup Academy
              </p>
              <p>
                Contact email*mandatory: info@ecoledemaquillage.ch
                <br />
                Phone number: +41 21 555 48 72
              </p>
            </>
          ),
        },
        {
          title: "II. Hosting",
          content: (
            <>
              <p>
                This website is hosted by:
              </p>
              <p>
                Vercel Inc.
                <br />
                United States
              </p>
            </>
          ),
        },
        {
          title: "III. Scope of the Website",
          content: (
            <>
              <p>
                The website provides information about M•ART Geneva Makeup
                Academy, its programs, and related activities.
              </p>
              <p>
                The website includes a contact form allowing users to request
                information.
              </p>
              <p>
                The website does not provide online purchasing services or a
                student portal. An internal administrative portal may exist for
                operational purposes.
              </p>
              <p>
                Information published on this website is provided for
                informational purposes only and does not constitute a binding
                contractual offer unless expressly stated otherwise.
              </p>
            </>
          ),
        },
        {
          title: "IV. Intellectual Property",
          content: (
            <>
              <p>
                All content available on this website, including but not
                limited to text, images, graphics, logos, design elements,
                layout, and branding, is protected by intellectual property
                laws.
              </p>
              <p>
                Unless otherwise indicated, such content is the exclusive
                property of M•ART Geneva Makeup Academy or is used under
                appropriate license.
              </p>
              <p>
                Any reproduction, distribution, modification, or use of the
                website content without prior written authorization is strictly
                prohibited.
              </p>
            </>
          ),
        },
        {
          title: "V. Acceptable Use",
          content: (
            <>
              <p>
                Users agree to access and use this website in compliance with
                applicable laws and regulations.
              </p>
              <p>
                Users must not:
              </p>
              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>Use the website for unlawful purposes</li>
                <li>Attempt to gain unauthorized access to systems or data</li>
                <li>Interfere with the website’s security or functionality</li>
                <li>Upload or transmit malicious software or harmful code</li>
                <li>Misrepresent identity or affiliation</li>
              </ul>
            </>
          ),
        },
        {
          title: "VI. Hyperlinks",
          content: (
            <>
              <p>
                Linking to this website is permitted provided that the link is
                lawful, fair, and not misleading.
              </p>
              <p>
                The website may contain links to external websites. M•ART
                Geneva Makeup Academy does not control and is not responsible
                for the content, availability, or privacy practices of such
                third-party websites.
              </p>
            </>
          ),
        },
        {
          title: "VII. Limitation of Liability",
          content: (
            <>
              <p>
                The website and its content are provided “as is” without
                warranties of any kind, either express or implied.
              </p>
              <p>
                M•ART Geneva Makeup Academy shall not be liable for direct or
                indirect damages resulting from access to or use of this
                website, including but not limited to data loss, technical
                interruption, or inaccuracies in published information.
              </p>
              <p>
                We do not guarantee uninterrupted or error-free access to the
                website.
              </p>
            </>
          ),
        },
        {
          title: "VIII. Personal Data and Cookies",
          content: (
            <>
              <p>
                For information regarding how we process personal data, please
                refer to our Privacy Policy.
              </p>
              <p>
                For information regarding cookies and tracking technologies,
                please refer to our Cookie Policy.
              </p>
            </>
          ),
        },
        {
          title: "IX. Governing Law and Jurisdiction",
          content: (
            <>
              <p>
                These Legal Notices and Terms of Use are governed by Swiss law.
              </p>
              <p>
                Any dispute arising in connection with the use of this website
                shall fall under the jurisdiction of the competent courts of
                Geneva, Switzerland.
              </p>
              <p>
                If you are a consumer residing in the European Union,
                mandatory consumer protection provisions of your country of
                residence may also apply.
              </p>
            </>
          ),
        },
        {
          title: "X. Updates",
          content: (
            <>
              <p>
                M•ART Geneva Makeup Academy reserves the right to modify these
                Legal Notices and Terms of Use at any time.
              </p>
              <p>
                Users are encouraged to consult this page regularly to remain
                informed of any updates.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}