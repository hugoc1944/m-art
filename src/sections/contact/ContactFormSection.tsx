"use client";

import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@/components/ui/Button";
import { fastTransition } from "@/lib/motion";

const contactSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(1, "Required"),
  request: z.string().min(1, "Required"),
  message: z.string().min(1, "Required"),
  consent: z.boolean().refine((val) => val === true, {
    message: "Required",
  }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactFormSectionProps {
  locale: "en" | "fr" | "es" | "pt"

  defaultRequest?: string
  intent?: string

  formCopy: {
    labels: {
      firstName: string
      lastName: string
      email: string
      phone: string
      request: string
      message: string
      consent: string
    }

    placeholders: {
      requestSelect: string
    }

    requestOptions: string[]

    buttons: {
      submitMeeting: string
      submitEnquiry: string
      submitting: string
      submitAnother: string
    }

    success: {
      meetingTitle: string
      meetingText: string
      enquiryTitle: string
      enquiryText: string
    }

    errors: {
      generic: string
    }
  }
}

export default function ContactFormSection({
  locale,
  defaultRequest,
  intent,
  formCopy,
}: ContactFormSectionProps) {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      request: defaultRequest || "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      setIsError(false);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          locale,
        }),
      });

      if (!response.ok) throw new Error();

      setIsSuccess(true);
      reset({
        request: defaultRequest || "",
      });
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (isSuccess && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [isSuccess]);

  const isMeeting = intent === "meeting";

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[var(--color-editorial-white)] pb-[var(--space-24)]"
    >
      <div className="container">

        <AnimatePresence mode="wait">

          {!isSuccess ? (

            <motion.form
              key="form"
              onSubmit={handleSubmit(onSubmit)}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={fastTransition}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-[var(--space-12)] gap-y-[var(--space-8)]"
            >

              <div className="flex flex-col gap-[var(--space-2)]">
                <label className="body-small uppercase">{formCopy.labels.firstName}</label>
                <input {...register("firstName")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                />
                {errors.firstName && (
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[var(--space-2)]">
                <label className="body-small uppercase">{formCopy.labels.lastName}</label>
                <input {...register("lastName")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                />
                {errors.lastName && (
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-[var(--space-2)]">
                <label className="body-small uppercase">{formCopy.labels.email}</label>
                <input type="email" {...register("email")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-[var(--space-2)]">
                <label className="body-small uppercase">{formCopy.labels.phone}</label>
                <input {...register("phone")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-[var(--space-2)] md:col-span-2">
                <label className="body-small uppercase">{formCopy.labels.request}</label>
                <select {...register("request")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                >
                  <option value="">{formCopy.placeholders.requestSelect}</option>

                  {formCopy.requestOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}

                </select>
              </div>

              <div className="flex flex-col gap-[var(--space-2)] md:col-span-2">
                <label className="body-small uppercase">{formCopy.labels.message}</label>
                <textarea rows={4}
                  {...register("message")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none resize-none"
                />
              </div>

              <div className="md:col-span-2 flex items-start gap-[var(--space-3)]">
                <input type="checkbox" {...register("consent")} />
                <p className="body-small">{formCopy.labels.consent}</p>
              </div>

              {isError && (
                <div className="md:col-span-2">
                  <p className="body-small text-[var(--color-muted-coral)]">
                    {formCopy.errors.generic}
                  </p>
                </div>
              )}

              <div className="md:col-span-2 pt-[var(--space-2)]">
                <Button type="submit" variant="solid" tone="dark" size="sm" disabled={isSubmitting}>
                  {isSubmitting
                    ? formCopy.buttons.submitting
                    : isMeeting
                    ? formCopy.buttons.submitMeeting
                    : formCopy.buttons.submitEnquiry}
                </Button>
              </div>

            </motion.form>

          ) : (

            <motion.div
              key="success"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={fastTransition}
              className="container-narrow"
            >
              <div className="bg-[var(--color-warm-black)] text-white px-[var(--space-16)] py-[var(--space-16)]">

                <h3 className="heading-md uppercase">
                  {isMeeting
                    ? formCopy.success.meetingTitle
                    : formCopy.success.enquiryTitle}
                </h3>

                <p className="body-standard mt-[var(--space-6)] text-white/90">
                  {isMeeting
                    ? formCopy.success.meetingText
                    : formCopy.success.enquiryText}
                </p>

                <div className="mt-[var(--space-8)]">
                  <Button
                    variant="outline"
                    tone="light"
                    size="sm"
                    onClick={() => setIsSuccess(false)}
                  >
                    {formCopy.buttons.submitAnother}
                  </Button>
                </div>

              </div>
            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
}