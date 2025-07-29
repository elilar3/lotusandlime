import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lotus & Lime - Asian Fusion Restaurant | Fine Dining Experience",
    template: "%s | Lotus & Lime"
  },
  description: "Experience the perfect blend of traditional Asian flavors with modern culinary innovation at Lotus & Lime. Located in the heart of the city. Book your table for an unforgettable dining experience.",
  keywords: [
    "Asian fusion restaurant",
    "sushi restaurant",
    "dim sum",
    "modern dining",
    "fine dining",
    "Lotus & Lime",
    "Asian cuisine",
    "fusion food",
    "restaurant reservations",
    "downtown dining",
    "sushi bar",
    "Asian fusion menu"
  ],
  authors: [{ name: "Lotus & Lime" }],
  creator: "Lotus & Lime",
  publisher: "Lotus & Lime",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lotusandlime.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lotusandlime.com",
    title: "Lotus & Lime - Asian Fusion Restaurant | Fine Dining Experience",
    description: "Experience the perfect blend of traditional Asian flavors with modern culinary innovation at Lotus & Lime. Located in the heart of the city.",
    siteName: "Lotus & Lime",
    images: [
      {
        url: "https://images.unsplash.com/photo-1743514240526-dcc36f4e15c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        width: 1470,
        height: 980,
        alt: "Lotus & Lime Asian Fusion Restaurant - Elegant dining atmosphere",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lotus & Lime - Asian Fusion Restaurant | Fine Dining Experience",
    description: "Experience the perfect blend of traditional Asian flavors with modern culinary innovation at Lotus & Lime.",
    images: ["https://images.unsplash.com/photo-1743514240526-dcc36f4e15c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"],
    creator: "@lotusandlime",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
