import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Local SEO Citation Validator – NAP Consistency Checker",
  description: "Validate your business Name, Address, and Phone across 50+ local directories. Fix citation inconsistencies hurting your local SEO rankings."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e43c355f-7850-4d02-b121-2095a0223454"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
