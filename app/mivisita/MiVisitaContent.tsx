"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  CheckCircle,
  QrCode,
  ShieldCheck,
  UserCheck,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useMessages } from "@/components/LocaleProvider";

const roleIcons = [Users, UserCheck, Building2] as const;

export default function MiVisitaContent() {
  const m = useMessages();
  const v = m.mivisita;

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark-900 to-dark-800">
      <Header />

      <section id="inicio" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <Link
            href="/#proyectos"
            className="inline-flex items-center text-primary-400 hover:text-primary-300 mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {m.common.backToProjects}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold mb-6">
                <span className="text-white">{v.heroTitle1}</span>{" "}
                <span className="gradient-text">{v.heroTitle2}</span>
              </h1>
              <p className="text-lg text-dark-300 mb-6">{v.heroBody}</p>

              <div className="space-y-3 mb-8">
                {v.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                    <p className="text-dark-200">{item}</p>
                  </div>
                ))}
              </div>

              <a
                href="http://mivisita.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 transition-all shadow-lg shadow-primary-600/30"
              >
                {v.ctaApp}
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
            </div>

            <div className="bg-dark-800/60 border border-dark-700 rounded-2xl p-6 sm:p-8">
              <div className="flex justify-center mb-8">
                <Image
                  src="/mivista.png"
                  alt={v.logoAlt}
                  width={280}
                  height={280}
                  priority
                  className="rounded-xl"
                />
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <QrCode className="w-5 h-5 text-primary-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{v.cardSecureTitle}</p>
                    <p className="text-dark-300">{v.cardSecureBody}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary-400 mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-white">{v.cardProcessTitle}</p>
                    <p className="text-dark-300">{v.cardProcessBody}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-white">{v.sectionTitle1}</span>{" "}
              <span className="gradient-text">{v.sectionTitle2}</span>
            </h2>
            <p className="text-dark-300 max-w-3xl mx-auto">{v.sectionSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {v.roles.map((role, index) => {
              const Icon = roleIcons[index];
              return (
                <div
                  key={role.title}
                  className="bg-dark-800/60 border border-dark-700 rounded-2xl p-6"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary-500/20 mb-4">
                    <Icon className="w-5 h-5 text-primary-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{role.title}</h3>
                  <div className="space-y-3">
                    {role.points.map((point) => (
                      <div key={point} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary-500 mt-1 shrink-0" />
                        <p className="text-dark-300 text-sm">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-dark-800/40 border border-dark-700 rounded-2xl p-6 sm:p-8">
            <h3 className="text-2xl font-semibold text-white mb-4">{v.securityTitle}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {v.securityBullets.map((text) => (
                <div key={text} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary-500 mt-0.5 shrink-0" />
                  <p className="text-dark-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
