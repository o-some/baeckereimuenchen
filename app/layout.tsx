import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ISARGOLD — Münchner Backkultur",
  description: "Gutes Brot. Gute Haltung. Eine fiktive Münchner Backstube und das Buchkonzept Kruste & Haltung.",
  icons: {
    icon: "/baeckereimuenchen/favicon.svg",
    shortcut: "/baeckereimuenchen/brand/favicon.ico",
    apple: "/baeckereimuenchen/brand/apple-touch.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
