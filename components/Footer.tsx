"use client";

import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-900 border-t border-dark-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Link href="#inicio" className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/nexuscasa.png"
                  alt="Nexus Global Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold gradient-text">
                Nexus Global
              </span>
            </Link>
            <p className="text-dark-400 text-sm">
              Conectando tu negocio con el futuro digital
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {[
                { name: "Inicio", href: "#inicio" },
                { name: "Servicios", href: "#servicios" },
                { name: "Proyectos", href: "#proyectos" },
                { name: "Contacto", href: "#contacto" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/nexus_suministros/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-dark-800 rounded-lg hover:bg-primary-500/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-primary-400" />
              </motion.a>
              <motion.a
                href="mailto:contacto@nexusglobal.com"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-dark-800 rounded-lg hover:bg-primary-500/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-primary-400" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-dark-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-dark-500 text-sm">
            © {currentYear} Nexus Global. Todos los derechos reservados.
          </p>
          <p className="text-dark-500 text-sm mt-2 sm:mt-0">
            Hecho con ❤️ por Nexus Global
          </p>
        </div>
      </div>
    </footer>
  );
}

