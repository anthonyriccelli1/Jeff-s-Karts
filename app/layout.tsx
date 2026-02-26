import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jeffskarts.com'),
  title: {
    default: "Jeff's Karts | Custom Golf Carts Melbourne FL",
    template: "%s | Jeff's Karts",
  },
  description: "Melbourne, Florida's premier custom golf cart dealer. Custom painting, full customization, street legal conversions, and repairs. Transform your golf cart today!",
  keywords: [
    'golf carts Melbourne FL',
    'custom golf carts',
    'golf cart customization',
    'street legal golf carts',
    'golf cart painting',
    'Brevard County golf carts',
    'golf cart repairs Melbourne',
    'custom golf cart builds',
  ],
  authors: [{ name: "Jeff's Karts" }],
  creator: "Jeff's Karts",
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jeffskarts.com',
    siteName: "Jeff's Karts",
    title: "Jeff's Karts | Custom Golf Carts Melbourne FL",
    description: "Melbourne, Florida's premier custom golf cart dealer. Custom painting, full customization, and repairs.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: "Jeff's Karts - Custom Golf Carts Melbourne FL",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Jeff's Karts | Custom Golf Carts Melbourne FL",
    description: "Melbourne, Florida's premier custom golf cart dealer.",
    images: ['/og-image.jpg'],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: "Jeff's Karts",
              description: "Melbourne, Florida's premier custom golf cart dealer specializing in custom painting, full customization, street legal conversions, and repairs.",
              url: 'https://jeffskarts.com',
              telephone: '',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Melbourne',
                addressRegion: 'FL',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 28.0836,
                longitude: -80.6081,
              },
              areaServed: [
                {
                  '@type': 'City',
                  name: 'Melbourne',
                  containedInPlace: {
                    '@type': 'State',
                    name: 'Florida',
                  },
                },
                {
                  '@type': 'County',
                  name: 'Brevard County',
                },
              ],
              priceRange: '$$',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '17:00',
                },
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Golf Cart Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Custom Golf Cart Painting',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Golf Cart Customization',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Street Legal Conversions',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Golf Cart Repairs',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="bg-white text-slate-900 antialiased font-sans">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
