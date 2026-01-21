import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://nexusglobal.com"), // Actualizar con tu dominio real
  title: {
    default: "Nexus Global - Soluciones Digitales Personalizadas",
    template: "%s | Nexus Global",
  },
  description: "Creamos páginas web, plataformas personalizadas y soluciones digitales que conectan tu negocio con el futuro.",
  keywords: [
    "desarrollo web",
    "páginas web",
    "plataformas personalizadas",
    "soluciones digitales",
    "diseño web",
    "e-commerce",
    "Shopify",
    "tiendas online",
    "dashboard empresarial",
    "facturación electrónica",
    "Google Ads",
    "hosting",
    "CRM",
    "desarrollo web personalizado",
    "soluciones tecnológicas",
  ],
  authors: [{ name: "Nexus Global" }],
  creator: "Nexus Global",
  publisher: "Nexus Global",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://nexusglobal.com", // Actualizar con tu dominio real
    siteName: "Nexus Global",
    title: "Nexus Global - Soluciones Digitales Personalizadas",
    description: "Creamos páginas web, plataformas personalizadas y soluciones digitales que conectan tu negocio con el futuro.",
    images: [
      {
        url: "/NexusGPTHD.png",
        width: 1200,
        height: 630,
        alt: "Nexus Global Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexus Global - Soluciones Digitales Personalizadas",
    description: "Creamos páginas web, plataformas personalizadas y soluciones digitales que conectan tu negocio con el futuro.",
    images: ["/NexusGPTHD.png"],
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
    icon: "/NexusGPTHD.png",
    apple: "/NexusGPTHD.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}


