import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const heading = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Outsos | Strategic Marketing & Communication Agency in Dubai",
  description:
    "Outsos is a creative and strategic marketing agency in Dubai. Brand identity, digital presence, content strategy, campaigns, personal branding and launch events.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}
