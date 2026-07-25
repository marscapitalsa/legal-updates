import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mars Capital Regulatory Brief | Swiss asset management",
  description: "Swiss legal and regulatory updates for asset managers.",
  openGraph: {
    title: "Mars Capital Regulatory Brief",
    description: "Swiss legal and regulatory updates for asset managers.",
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mars Capital Regulatory Brief",
    description: "Swiss legal and regulatory updates for asset managers.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
