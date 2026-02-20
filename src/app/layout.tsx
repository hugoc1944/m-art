// src/app/layout.tsx

import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import RootLayoutShell from "@/components/layout/RootLayoutShell";

export const metadata: Metadata = {
  title: "M-ART Academy",
  description:
    "Professional artistic makeup academy grounded in real industry.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        <RootLayoutShell>
          {children}
        </RootLayoutShell>
      </body>
    </html>
  );
}