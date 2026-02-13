import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Prata } from "next/font/google";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pinkcitymouthfresheners.com'),
  title: "PinkCity Mouth Freshener | Premium Mukhwas Since 1982 | Jaipur",
  description:
    "PinkCity Mouth Freshener - Jaipur's trusted manufacturer of premium mukhwas, paan, and mouth fresheners since 1982. Authentic flavors, traditional recipes, hygienically packed. Shop now!",
  keywords: [
    "pinkcity mouth freshener",
    "pink city mouth freshener",
    "mouth freshener jaipur",
    "mukhwas manufacturer",
    "paan mukhwas",
    "traditional mukhwas",
    "indian mouth freshener",
    "saunf mouth freshener",
    "supari products",
    "jaipur mukhwas",
    "authentic mouth freshener",
    "premium mukhwas",
    "mouth freshener manufacturer",
    "wholesale mouth freshener",
    "mouth freshener supplier",
    "best mouth freshener brands in Rajasthan India popular brands mouth freshener Rajasthan",
    "best selling mouth freshener brands in India that are commonly available in Rajasthan"
  ],
  authors: [{ name: "PinkCity Mouth Freshener" }],
  creator: "PinkCity Mouth Freshener",
  publisher: "PinkCity Mouth Freshener",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.pinkcitymouthfresheners.com",
    title: "PinkCity Mouth Freshener | Premium Mukhwas Since 1982",
    description:
      "Discover PinkCity Mouth Freshener - Jaipur's finest manufacturer of traditional mukhwas and mouth fresheners since 1982. Authentic taste, premium quality.",
    siteName: "PinkCity Mouth Freshener",
    images: [
      {
        url: "/images/logo.svg",
        width: 1200,
        height: 630,
        alt: "PinkCity Mouth Freshener - Premium Mukhwas Products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PinkCity Mouth Freshener | Premium Mukhwas Since 1982",
    description:
      "Jaipur's trusted manufacturer of premium mouth fresheners and traditional mukhwas since 1982. Authentic flavors, hygienically packed.",
    images: ["/multimedia/products/mukhwas_main.png"],
  },
  alternates: {
    canonical: "https://www.pinkcitymouthfresheners.com",
  },
  category: "Food & Beverage",
};

import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Disable Font Awesome's automatic CSS injection

import AnalyticsProvider from "./AnalyticsProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const bentham = Prata({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bentham",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.pinkcitymouthfresheners.com/#organization",
        name: "PinkCity Mouth Freshener",
        alternateName: "Pink City MouthFresheners",
        url: "https://www.pinkcitymouthfresheners.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.pinkcitymouthfresheners.com/images/logo.svg",
          width: 250,
          height: 60,
        },
        description: "Premium mouth freshener and mukhwas manufacturer in Jaipur, India since 1982",
        foundingDate: "1982",
        foundingLocation: {
          "@type": "Place",
          name: "Jaipur, Rajasthan, India",
        },
        areaServed: "IN",
        sameAs: [
          "https://www.instagram.com/pinkcitymouthfresheners",
          "https://www.facebook.com/share/1PAhoafFNe/",
        ],
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.pinkcitymouthfresheners.com/#localbusiness",
        name: "PinkCity Mouth Freshener",
        image: "https://www.pinkcitymouthfresheners.com/multimedia/products/mukhwas_main.png",
        description: "PinkCity Mouth Freshener is Jaipur's trusted manufacturer of premium mukhwas, paan, and traditional mouth fresheners since 1982. We offer authentic flavors with hygienically packed products.",
        priceRange: "₹₹",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Jaipur",
          addressRegion: "Rajasthan",
          addressCountry: "IN",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 26.9124,
          longitude: 75.7873,
        },
        url: "https://www.pinkcitymouthfresheners.com",
        telephone: "+91-XXXXXXXXXX",
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.8",
          reviewCount: "250",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://www.pinkcitymouthfresheners.com/#website",
        url: "https://www.pinkcitymouthfresheners.com",
        name: "PinkCity Mouth Freshener",
        description: "Premium mukhwas and mouth freshener manufacturer in Jaipur",
        publisher: {
          "@id": "https://www.pinkcitymouthfresheners.com/#organization",
        },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.pinkcitymouthfresheners.com/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.pinkcitymouthfresheners.com",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${poppins.variable} ${bentham.variable}`}>
        <AnalyticsProvider />
        {children}
      </body>
    </html>
  );
}
