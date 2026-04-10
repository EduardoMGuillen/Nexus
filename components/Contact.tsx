"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Mail, Instagram, CheckCircle } from "lucide-react";
import { useMessages } from "./LocaleProvider";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const m = useMessages();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || m.contact.errSend);
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });

      setTimeout(() => {
        setSubmitted(false);
      }, 4000);
    } catch (err: unknown) {
      console.error(err);
      const msg = err instanceof Error ? err.message : m.contact.errGeneric;
      setError(msg || m.contact.errGeneric);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contacto"
      ref={ref}
      className="py-24 bg-gradient-to-b from-slate-50 to-slate-100 dark:from-dark-900 dark:to-dark-800 relative overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="text-slate-900 dark:text-white">{m.contact.titleLets}</span>{" "}
            <span className="gradient-text">{m.contact.titleHighlight}</span>
          </h2>
          <p className="text-slate-600 dark:text-dark-300 text-lg max-w-2xl mx-auto">
            {m.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8 text-center lg:text-left"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {m.contact.infoTitle}
              </h3>
              <p className="text-slate-600 dark:text-dark-300 mb-8">{m.contact.infoDesc}</p>
            </div>

            <div className="space-y-6">
              <motion.a
                href="mailto:Eduardoguillendev@proton.me"
                whileHover={{ x: 5 }}
                className="flex items-center justify-center lg:justify-start space-x-4 p-4 bg-slate-100 dark:bg-dark-800/50 rounded-lg border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 transition-all"
              >
                <div className="p-3 bg-primary-500/20 rounded-lg">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-600 dark:text-dark-400">{m.contact.email}</div>
                  <div className="text-slate-900 dark:text-white">Eduardoguillendev@proton.me</div>
                </div>
              </motion.a>

              <motion.a
                href="https://www.instagram.com/nexusglobalhn/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-center justify-center lg:justify-start space-x-4 p-4 bg-slate-100 dark:bg-dark-800/50 rounded-lg border border-slate-200 dark:border-dark-700 hover:border-primary-500/50 transition-all"
              >
                <div className="p-3 bg-primary-500/20 rounded-lg">
                  <Instagram className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-600 dark:text-dark-400">
                    {m.contact.instagram}
                  </div>
                  <div className="text-slate-900 dark:text-white">@nexusglobalhn</div>
                </div>
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 bg-slate-100 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-slate-200 dark:border-dark-700 space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-700 dark:text-dark-300 mb-2"
                >
                  {m.contact.labelName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-slate-300 dark:border-dark-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder={m.contact.phName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-700 dark:text-dark-300 mb-2"
                >
                  {m.contact.labelEmail}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-slate-300 dark:border-dark-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder={m.contact.phEmail}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700 dark:text-dark-300 mb-2"
                >
                  {m.contact.labelPhone}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-slate-300 dark:border-dark-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder={m.contact.phPhone}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700 dark:text-dark-300 mb-2"
                >
                  {m.contact.labelMessage}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white dark:bg-dark-900 border border-slate-300 dark:border-dark-700 rounded-lg text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-dark-500 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder={m.contact.phMessage}
                />
              </div>

              {error && <p className="text-sm text-red-400">{error}</p>}

              <motion.button
                type="submit"
                disabled={isSubmitting || submitted}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>{m.contact.btnSent}</span>
                  </>
                ) : isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{m.contact.btnSending}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{m.contact.btnSend}</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
