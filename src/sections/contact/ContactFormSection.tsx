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
  defaultRequest?: string;
  intent?: string;
}

export default function ContactFormSection({
  defaultRequest,
  intent,
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
        body: JSON.stringify(data),
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
              {/* All original fields unchanged */}

              {/* First Name */}
              <div className="flex flex-col gap-[var(--space-2)]">
                <label className="body-small uppercase">First Name*</label>
                <input
                  {...register("firstName")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                />
                {errors.firstName && (
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-[var(--space-2)]">
                <label className="body-small uppercase">Last Name*</label>
                <input
                  {...register("lastName")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                />
                {errors.lastName && (
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-[var(--space-2)]">
                <label className="body-small uppercase">Email*</label>
                <input
                  type="email"
                  {...register("email")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                />
                {errors.email && (
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-[var(--space-2)]">
                <label className="body-small uppercase">Phone Number*</label>
                <input
                  {...register("phone")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                />
                {errors.phone && (
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.phone.message}
                  </span>
                )}
              </div>

              {/* Request */}
              <div className="flex flex-col gap-[var(--space-2)] md:col-span-2">
                <label className="body-small uppercase">
                  Your request concerns*
                </label>
                <select
                  {...register("request")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none"
                >
                  <option value="">Select an option</option>
                  <option value="Request an Information Meeting">
                    Request an Information Meeting
                  </option>
                  <option value="Program Details">Program Details</option>
                  <option value="Application Support">
                    Application Support
                  </option>
                  <option value="General Enquiry">General Enquiry</option>
                </select>
                {errors.request && (
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.request.message}
                  </span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-[var(--space-2)] md:col-span-2">
                <label className="body-small uppercase">Message*</label>
                <textarea
                  rows={4}
                  {...register("message")}
                  className="border-b border-[var(--color-deep-charcoal)] bg-transparent py-[var(--space-2)] focus:outline-none resize-none"
                />
                {errors.message && (
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Consent */}
              <div className="md:col-span-2 flex items-start gap-[var(--space-3)]">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-[var(--space-1)]"
                />
                <p className="body-small text-[var(--color-deep-charcoal)]">
                  I agree to receive communications from M•ART Academy and
                  consent to the processing of my personal data for this
                  purpose.
                </p>
              </div>

              {errors.consent && (
                <div className="md:col-span-2">
                  <span className="body-small text-[var(--color-muted-coral)]">
                    {errors.consent.message}
                  </span>
                </div>
              )}

              {isError && (
                <div className="md:col-span-2">
                  <p className="body-small text-[var(--color-muted-coral)]">
                    Something went wrong. Please try again.
                  </p>
                </div>
              )}

              {/* Submit */}
              <div className="md:col-span-2 pt-[var(--space-2)]">
                <Button
                  type="submit"
                  variant="solid"
                  tone="dark"
                  size="sm"
                  disabled={isSubmitting}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : isMeeting
                    ? "Request Meeting"
                    : "Submit Your Enquiry"}
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
              <div className="bg-[var(--color-warm-black)] text-[var(--color-white)] px-[var(--space-16)] py-[var(--space-16)]">
                <h3 className="heading-md uppercase">
                  {isMeeting
                    ? "Meeting Request Received"
                    : "Enquiry Received"}
                </h3>

                <p className="body-standard mt-[var(--space-6)] text-white/90">
                  {isMeeting
                    ? "Thank you. Our team will contact you shortly to schedule your information meeting."
                    : "Thank you for your intention. Our team will personally review your message and respond shortly."}
                </p>

                <div className="mt-[var(--space-8)]">
                  <Button
                    variant="outline"
                    tone="light"
                    size="sm"
                    onClick={() => setIsSuccess(false)}
                  >
                    Submit Another Enquiry
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