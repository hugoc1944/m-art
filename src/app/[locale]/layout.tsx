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
  params: Promise<{ locale: Locale }>;
}) {

  const { locale } = await params;

  if (!locales.includes(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);

  return (
    <RootLayoutShell locale={locale} dictionary={dictionary}>
      {children}
    </RootLayoutShell>
  );
}