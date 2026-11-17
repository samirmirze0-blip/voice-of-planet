import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://voiceofplanet.com"),
  title: {
    default: "Voice of Planet | Technology, AI & Innovation",
    template: "%s | Voice of Planet"
  },
  description: "Your global signal for technology, artificial intelligence, science, gadgets and the ideas shaping tomorrow.",
  applicationName: "Voice of Planet",
  openGraph: {
    type: "website",
    siteName: "Voice of Planet",
    title: "Voice of Planet | Technology, AI & Innovation",
    description: "Your global signal for technology and the future."
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice of Planet | Technology, AI & Innovation",
    description: "Your global signal for technology and the future."
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
