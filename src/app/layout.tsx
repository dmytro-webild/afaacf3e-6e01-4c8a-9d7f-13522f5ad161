import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Manrope } from "next/font/google";
import { DM_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'SoundVault | Discover & Download Music Plugins Instantly',
  description: 'SoundVault is the ultimate platform for musicians, producers, and audio engineers to search, compare, and download audio plugins across all categories and formats. Find your perfect sound.',
  keywords: ["music plugins, audio plugins, VST, AU, AAX, DAW compatibility, music production, sound engineering, plugin download, music software"],
  openGraph: {
    "title": "SoundVault | Discover & Download Music Plugins Instantly",
    "description": "SoundVault is the ultimate platform for musicians, producers, and audio engineers to search, compare, and download audio plugins across all categories and formats. Find your perfect sound.",
    "url": "https://www.soundvault.com",
    "siteName": "SoundVault",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/abstract-neon-lights-wonder-wheel_23-2148328075.jpg",
        "alt": "Futuristic music studio with glowing audio equipment"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "SoundVault | Discover & Download Music Plugins Instantly",
    "description": "SoundVault is the ultimate platform for musicians, producers, and audio engineers to search, compare, and download audio plugins across all categories and formats. Find your perfect sound.",
    "images": [
      "http://img.b2bpic.net/free-photo/abstract-neon-lights-wonder-wheel_23-2148328075.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${manrope.variable} ${dmSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
