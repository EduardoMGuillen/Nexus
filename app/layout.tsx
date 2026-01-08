import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nexus Global - Soluciones Digitales Personalizadas",
  description: "Creamos páginas web, plataformas personalizadas y soluciones digitales que conectan tu negocio con el futuro.",
  keywords: "desarrollo web, páginas web, plataformas personalizadas, soluciones digitales, diseño web",
  openGraph: {
    title: "Nexus Global - Soluciones Digitales Personalizadas",
    description: "Creamos páginas web, plataformas personalizadas y soluciones digitales que conectan tu negocio con el futuro.",
    type: "website",
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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

