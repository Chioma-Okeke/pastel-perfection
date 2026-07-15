import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import BackToTop from "@/components/shared/back-to-top";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  style: ['normal', 'italic'],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pastelperfection.vercel.app/"),
  title: {
    default: "Pastel Perfection",
    template: "Pastel Perfection | %s",
  },
  authors: [
    {
      name: "Pastel Perfection",
      url: "https://pastelperfection.vercel.app/",
    },
  ],
  description:
    "Pastel Perfection is a wholesale beauty distributor supplying authentic Medicube, Dr. Rashel and more in bulk to retailers and resellers across Nigeria.",
  keywords: [
    "Pastel Perfection",
    "Wholesale beauty",
    "Beauty distributor Nigeria",
    "Medicube",
    "Dr. Rashel",
    "K-beauty wholesale",
    "Skincare wholesale",
    "Bulk beauty supply",
    "Body lotion",
    "Shower gel",
    "Retailers",
    "Resellers",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://pastelperfection.vercel.app/",
    siteName: "Pastel Perfection",
    title: "Pastel Perfection",
    description:
      "Wholesale beauty distributor supplying authentic Medicube, Dr. Rashel and more in bulk. Explore the catalog, pricing, and Pastel Perfection's own upcoming body care line.",
    images: [
      {
        url: "https://res.cloudinary.com/djrp3aaq9/image/upload/v1783890254/Logo_j3qivj.png",
        width: 1200,
        height: 630,
        alt: "Pastel Perfection Wholesale Beauty Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pastel Perfection",
    description:
      "Wholesale beauty distributor supplying authentic Medicube, Dr. Rashel and more in bulk across Nigeria.",
    creator: "@pastelperfection",
    images: ["https://res.cloudinary.com/djrp3aaq9/image/upload/v1783890254/Logo_j3qivj.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  applicationName: "Pastel Perfection",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* <BackToTop /> */}
      </body>
    </html>
  );
}
