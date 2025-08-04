import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { Toaster } from "sonner";
import { generateMetadata, pageSEO } from "@/lib/seo";
import {
  StructuredData,
  structuredDataSchemas,
} from "@/components/StructuredData";

export const metadata: Metadata = generateMetadata(pageSEO.home);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <StructuredData data={structuredDataSchemas.organization} />
        <StructuredData data={structuredDataSchemas.softwareApplication} />
        <Toaster />
        {children}
      </body>
    </html>
  );
}
