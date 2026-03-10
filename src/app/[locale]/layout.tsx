import { ReactNode } from "react";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, locales } from "@/i18n/config";
import { notFound } from "next/navigation";
import RootLayoutShell from "@/components/layout/RootLayoutShell";

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {

  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale as Locale);

  return (
    <RootLayoutShell locale={locale as Locale} dictionary={dictionary}>
      {children}
    </RootLayoutShell>
  );
}