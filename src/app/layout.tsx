// src/app/layout.tsx

import type { Metadata } from "next";
import "@/styles/globals.css";
import { inter } from "@/styles/fonts";
import RootLayoutShell from "@/components/layout/RootLayoutShell";

export const metadata: Metadata = {
  title: "M•ART Geneva Makeup Academy",
  description:
    "Professional artistic makeup academy grounded in real industry.",
    icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",
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