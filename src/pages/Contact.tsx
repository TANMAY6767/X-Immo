"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  /* -------- Animated stat -------- */
  const Stat = ({ value, label }: { value: number; label: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const spring = useSpring(0, { stiffness: 70, damping: 18 });
    const display = useTransform(spring, (v) =>
      Math.round(v).toLocaleString()
    );

    useEffect(() => {
      if (inView) spring.set(value);
    }, [inView, value, spring]);

    return (
      <div ref={ref} className="text-center">
        <motion.div className="text-2xl font-semibold text-gray-900">
          {display}
        </motion.div>
        <p className="text-xs text-gray-500 mt-1">{label}</p>
      </div>
    );
  };

  const info = [
    {
      icon: Mail,
      title: t.contact.info.email.title,
      lines: t.contact.info.email.lines
    },
    {
      icon: Phone,
      title: t.contact.info.phone.title,
      lines: t.contact.info.phone.lines
    },
    {
      icon: MapPin,
      title: t.contact.info.office.title,
      lines: t.contact.info.office.lines
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 pt-24 pb-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-14"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t.contact.title}
          </h1>
          <p className="mt-3 text-sm text-gray-600 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          <Stat value={500} label={t.contact.stats.happyClients} />
          <Stat value={99} label={t.contact.stats.uptime} />
          <Stat value={24} label={t.contact.stats.hourResponse} />
          <Stat value={10} label={t.contact.stats.properties} />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left info */}
          <div className="space-y-5">
            {info.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white border border-gray-200 rounded-xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900">
                        {c.title}
                      </h3>
                      {c.lines.map((l) => (
                        <p key={l} className="text-sm text-gray-600">
                          {l}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl p-6"
          >
            {isSubmitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500 flex items-center justify-center">
                  <CheckCircle className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {t.contact.successMessage}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {t.contact.successNote}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-medium text-gray-600">
                    {t.contact.namePlaceholder}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600">
                    {t.contact.emailPlaceholder}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-600">
                    {t.contact.messagePlaceholder}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="mt-1 w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-lg flex items-center justify-center gap-2 transition"
                >
                  {t.contact.submitButton}
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};