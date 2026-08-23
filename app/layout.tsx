import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LocaleProvider } from "@/components/LocaleProvider";
import JsonLd from "@/components/JsonLd";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { HONDURAS_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexus Honduras | Nexus Global — páginas web en Honduras",
    template: "%s | Nexus Global",
  },
  description:
    "Nexus Honduras es Nexus Global: agencia de páginas web en Honduras. Sitios, tiendas y plataformas para Tegucigalpa, San Pedro Sula y todo el país. Desde 300 USD.",
  keywords: HONDURAS_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  applicationName: SITE_NAME,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_HN",
    alternateLocale: ["es_ES", "en_US"],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Nexus Honduras | Nexus Global — agencia web en Honduras",
    description:
      "Diseño y desarrollo web en Honduras: sitios rápidos, SEO local, hosting y mantenimiento. Tegucigalpa, SPS y todo el país.",
    images: [
      {
        url: "/logo-nexus.png",
        width: 1200,
        height: 630,
        alt: "Nexus Global — desarrollo web en Honduras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Honduras | Nexus Global — agencia web en Honduras",
    description:
      "Agencia hondureña de páginas web, e-commerce y plataformas. Desde 300 USD.",
    images: ["/logo-nexus.png"],
  },
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
  icons: {
    icon: "/nexus-icon.png",
    apple: "/nexus-icon.png",
  },
  other: {
    "geo.region": "HN",
    "geo.placename": "Honduras",
    "geo.position": "14.0723;-87.1921",
    ICBM: "14.0723, -87.1921",
  },
  verification: {
    google: "C1-TpRohR56HdjN26dHTOVNmkVRqR1PlMgerjWJ6riA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-HN" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7TYVWC1F92"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7TYVWC1F92');
          `}
        </Script>
        <ThemeProvider>
          <LocaleProvider>{children}</LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
