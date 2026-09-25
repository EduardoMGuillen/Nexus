import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import JsonLd from "@/components/JsonLd";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import RevealObserver from "@/components/RevealObserver";
import { organizationJsonLd, websiteJsonLd } from "@/lib/jsonld";
import { HONDURAS_KEYWORDS, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const DESCRIPTION =
  "Desarrollo web y soluciones empresariales en Honduras. Páginas web desde 150 USD con libro de marca incluido, CRM a medida y marketing digital. Cotiza por WhatsApp.";

export const viewport: Viewport = {
  themeColor: "#05080f",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Nexus Global | Desarrollo web y soluciones empresariales en Honduras",
    template: "%s | Nexus Global",
  },
  description: DESCRIPTION,
  keywords: HONDURAS_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  applicationName: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "es_HN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Nexus Global | Páginas web desde $150 con libro de marca",
    description: DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Global | Páginas web desde $150 con libro de marca",
    description: DESCRIPTION,
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
    <html lang="es-HN" className={`${inter.variable} ${sora.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans">
        <JsonLd data={organizationJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-7TYVWC1F92" strategy="lazyOnload" />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7TYVWC1F92');
          `}
        </Script>
        <Header />
        {children}
        <Footer />
        <WhatsAppFloat />
        <RevealObserver />
      </body>
    </html>
  );
}
