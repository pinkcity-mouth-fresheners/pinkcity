import type { Metadata } from "next";
import "./globals.css";
import { Poppins, Prata } from "next/font/google";
import Script from "next/script";

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
    // 2026-06-07 (SEO): removed two full-sentence keyword-stuffed entries — they read as spam.
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
        // 2026-06-07 (SEO): SVG isn't rendered by social scrapers (FB/LinkedIn/WhatsApp) and the
        // old www-origin product path is now a 404 (product images live on R2). Use the real R2 image.
        url: "https://media.pinkcitymouthfresheners.com/multimedia/products/mukhwas_main.png",
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
    // 2026-06-07 (SEO): the www-origin path is a 404 — product images are served from R2.
    images: ["https://media.pinkcitymouthfresheners.com/multimedia/products/mukhwas_main.png"],
  },
  alternates: {
    canonical: "https://www.pinkcitymouthfresheners.com",
  },
  category: "Food & Beverage",
};

import "@fortawesome/fontawesome-svg-core/styles.css"; // Import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false; // Disable Font Awesome's automatic CSS injection

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
  // 2026-06-07 (SEO): GA4 measurement ID for the gtag.js tag below. Reuses the existing Firebase
  // measurement-ID env var so the GA4 property and its historical data are unchanged.
  const GA_ID = process.env.NEXT_PUBLIC_MEASUREMENT_ID;
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
        // 2026-06-07 (SEO): product images live on R2; the www-origin path 404s.
        image: "https://media.pinkcitymouthfresheners.com/multimedia/products/mukhwas_main.png",
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
        // 2026-06-07 (SEO): removed placeholder telephone — fake schema data risks Google
        // discounting the markup, and no phone number is shown anywhere on the site.
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        // 2026-06-07 (SEO): removed aggregateRating — no reviews are displayed on the page, so an
        // unverifiable 4.8/250 rating violates Google's review-snippet policy and risks a penalty.
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
        {/* 2026-06-04 (perf): warm DNS for the R2 media origin early. Product images are still served
            from media.pinkcitymouthfresheners.com (below the fold); resolving its DNS up front shaves
            latency off the first such fetch without competing with the critical path (the logo is now
            same-origin, so nothing render-critical depends on this host). */}
        <link rel="dns-prefetch" href="https://media.pinkcitymouthfresheners.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${poppins.variable} ${bentham.variable}`}>
        {/* 2026-06-07 (SEO): standard GA4 via gtag.js, replacing the Firebase Analytics SDK.
            Firebase already reported to this same GA4 property, so reusing GA_ID keeps data
            continuity while dropping the Firebase SDK from the bundle. afterInteractive keeps
            the tag off the critical path; gtag's config fires a single page_view per load. */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
        {children}
      </body>
    </html>
  );
}
