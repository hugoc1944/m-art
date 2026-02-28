import LegalPageLayout from "@/components/legal/LegalPageLayout";

export default function TermsAndConditionsOfSalePage() {
  return (
    <LegalPageLayout
      title="TERMS & CONDITIONS OF SALE"
      breadcrumbLabel="Terms & Conditions of Sale"
      intro={
        <>
          These Terms and Conditions of Sale govern the relationship between
          M•ART Geneva Makeup Academy and any individual enrolling in a
          training program.
          <br />
          <br />
          By signing a training agreement or confirming enrollment, the
          participant acknowledges having read and accepted these Terms.
          <br />
          <br />
          Last updated: 28/02/2026
        </>
      }
      sections={[
        {
          title: "I. Training Programs",
          content: (
            <>
              <p>
                M•ART Geneva Makeup Academy provides in-person professional
                training programs delivered at its Geneva location.
              </p>
              <p>
                Programs may include modular structures and multi-year
                pathways (Year 1, Year 2, Year 3), delivered on a part-time
                morning schedule.
              </p>
              <p>
                Detailed program content, duration, structure, and objectives
                are provided prior to enrollment.
              </p>
            </>
          ),
        },
        {
          title: "II. Enrollment and Contract Formation",
          content: (
            <>
              <p>
                Enrollment is conducted in person or via written exchange
                (email) prior to confirmation.
              </p>
              <p>
                A binding agreement is formed once:
              </p>
              <ul className="list-disc ml-[var(--space-6)] space-y-[var(--space-2)]">
                <li>The training agreement is signed by the participant</li>
                <li>
                  Written confirmation of enrollment is issued by the Academy
                </li>
              </ul>
              <p>
                Enrollment is personal and non-transferable.
              </p>
            </>
          ),
        },
        {
          title: "III. Withdrawal Right ⚠ LEGAL REVIEW",
          content: (
            <>
              <p>
                If enrollment is completed remotely (distance agreement), the
                participant may benefit from a withdrawal period of fourteen
                (14) calendar days from the date of contract confirmation.
              </p>
              <p>
                If enrollment is completed in person at the Academy premises,
                Swiss contractual law applies and withdrawal conditions are
                governed by the signed agreement.
              </p>
              <p>
                Any withdrawal request must be submitted in writing to:
                <br />
                info@ecoledemaquillage.ch
              </p>
              <p>
                ⚠ This clause should be validated depending on final enrollment
                structure and EU consumer exposure.
              </p>
            </>
          ),
        },
        {
          title: "IV. Fees and Payment Terms",
          content: (
            <>
              <p>
                Training fees are communicated prior to enrollment and
                confirmed in the signed agreement.
              </p>
              <p>
                Payment may be made by bank transfer or other agreed method.
              </p>
              <p>
                Payment schedules, including possible installment plans, are
                defined in the individual training agreement.
              </p>
              <p>
                Failure to comply with agreed payment terms may result in
                suspension of participation.
              </p>
            </>
          ),
        },
        {
          title: "V. Cancellation",
          content: (
            <>
              <p>
                In case of cancellation by the participant outside the
                withdrawal period, fees already paid may be retained according
                to the terms defined in the signed agreement.
              </p>
              <p>
                In the event of cancellation due to circumstances beyond the
                participant’s reasonable control (force majeure), each case
                will be evaluated individually.
              </p>
              <p>
                The Academy reserves the right to reschedule sessions if
                necessary for operational or pedagogical reasons.
              </p>
            </>
          ),
        },
        {
          title: "VI. Force Majeure",
          content: (
            <>
              <p>
                Neither party shall be held liable for failure or delay in
                performing obligations due to events beyond reasonable control,
                including but not limited to natural disasters, public health
                emergencies, government restrictions, or other unforeseen
                events.
              </p>
              <p>
                In such cases, obligations may be suspended or adapted where
                appropriate.
              </p>
            </>
          ),
        },
        {
          title: "VII. Certification ⚠ LEGAL REVIEW",
          content: (
            <>
              <p>
                Upon successful completion of the training program, the
                participant may receive a formal certification issued by
                M•ART Geneva Makeup Academy.
              </p>
              <p>
                Certification is granted subject to attendance requirements,
                successful evaluation, and compliance with Academy standards.
              </p>
              <p>
                ⚠ Certification criteria and formal recognition framework
                should be validated and detailed contractually.
              </p>
            </>
          ),
        },
        {
          title: "VIII. Image Rights",
          content: (
            <>
              <p>
                During training sessions, photographs or video recordings may
                be taken for communication or promotional purposes.
              </p>
              <p>
                Any use of a participant’s image will be subject to separate,
                explicit written consent.
              </p>
              <p>
                Refusal to grant image consent will not affect participation in
                the training.
              </p>
            </>
          ),
        },
        {
          title: "IX. Intellectual Property",
          content: (
            <>
              <p>
                All training materials, course content, documentation, and
                pedagogical resources remain the exclusive intellectual property
                of M•ART Geneva Makeup Academy.
              </p>
              <p>
                Participants may not reproduce, distribute, or commercially
                exploit any materials without prior written authorization.
              </p>
            </>
          ),
        },
        {
          title: "X. Responsibilities",
          content: (
            <>
              <p>
                The Academy undertakes to provide training in accordance with
                the described program and professional standards.
              </p>
              <p>
                Participants are responsible for complying with Academy rules
                and maintaining professional conduct.
              </p>
            </>
          ),
        },
        {
          title: "XI. Personal Data",
          content: (
            <>
              <p>
                Personal data collected in the context of enrollment and
                training is processed in accordance with our Privacy Policy.
              </p>
              <p>
                Participants may exercise their data protection rights by
                contacting:
                <br />
                privacy@ecoledemaquillage.ch
              </p>
            </>
          ),
        },
        {
          title: "XII. Governing Law and Jurisdiction",
          content: (
            <>
              <p>
                These Terms and Conditions of Sale are governed by Swiss law.
              </p>
              <p>
                Any dispute arising from their interpretation or execution
                shall fall under the jurisdiction of the competent courts of
                Geneva, Switzerland.
              </p>
              <p>
                If the participant is a consumer residing in the European
                Union, mandatory consumer protection provisions of their
                country of residence may apply.
              </p>
            </>
          ),
        },
        {
          title: "XIII. Updates",
          content: (
            <>
              <p>
                M•ART Geneva Makeup Academy reserves the right to update these
                Terms and Conditions of Sale at any time.
              </p>
              <p>
                The version applicable is the one in force at the time of
                contract formation.
              </p>
            </>
          ),
        },
      ]}
    />
  );
}