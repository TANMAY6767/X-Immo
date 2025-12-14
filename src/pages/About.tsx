import {
  Building2,
  Users,
  TrendingUp,
  Shield,
  Sparkles,
  CheckCircle,
  Globe,
  Award,
  Clock,
  Zap,
  ArrowRight,
} from "lucide-react";
import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  motion,
  useMotionValue,
  useTransform,
  useInView,
  useSpring,
  useAnimation,
} from "framer-motion";
import { useRef, useEffect } from "react";

export const About = () => {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState(null);

  /* -------------  HELPERS  ------------- */
  const sections = [
    {
      title: t.about.sections.mission.title,
      description: t.about.sections.mission.description,
      icon: Globe,
      color: "bg-blue-500",
      content: t.about.sections.mission.content,
      details: t.about.sections.mission.details,
    },
    {
      title: t.about.sections.problem.title,
      description: t.about.sections.problem.description,
      icon: Shield,
      color: "bg-emerald-500",
      content: t.about.sections.problem.content,
      details: t.about.sections.problem.details,
    },
    {
      title: t.about.sections.vision.title,
      description: t.about.sections.vision.description,
      icon: Building2,
      color: "bg-purple-500",
      content: t.about.sections.vision.content,
      details: t.about.sections.vision.details,
    },
  ];

  type ColorKey = "blue" | "emerald" | "purple" | "amber";
  type Feature = {
    icon: React.ElementType;
    title: string;
    description: string;
    color: ColorKey;
  };

  const features: Feature[] = [
    {
      icon: Building2,
      title: t.about.features.propertyDashboard.title,
      description: t.about.features.propertyDashboard.description,
      color: "blue",
    },
    {
      icon: TrendingUp,
      title: t.about.features.financialTracking.title,
      description: t.about.features.financialTracking.description,
      color: "emerald",
    },
    {
      icon: Users,
      title: t.about.features.tenantPortal.title,
      description: t.about.features.tenantPortal.description,
      color: "purple",
    },
    {
      icon: Zap,
      title: t.about.features.automation.title,
      description: t.about.features.automation.description,
      color: "amber",
    },
  ];

  type Stat = {
    value: number;
    suffix: string;
    label: string;
    color: ColorKey;
  };

  const stats: Stat[] = [
    { value: 10, suffix: "K+", label: t.about.stats.properties, color: "blue" },
    { value: 99.9, suffix: "%", label: t.about.stats.uptime, color: "emerald" },
    { value: 40, suffix: "%", label: t.about.stats.timeSaved, color: "purple" },
    { value: 500, suffix: "+", label: t.about.stats.landlords, color: "amber" },
  ];

  type AnimatedStatProps = {
    value: number;
    suffix: string;
    color: "blue" | "emerald" | "purple" | "amber";
  };

  /* -------------  ANIMATED NUMBER  ------------- */
  const AnimatedStat = ({ value, suffix, color }: AnimatedStatProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const inView = useInView(ref, { once: true });
    const spring = useSpring(0, { stiffness: 80, damping: 18 });
    const display = useTransform(
      spring,
      (latest) => Math.round(latest) + suffix
    );

    useEffect(() => {
      if (inView) spring.set(value);
    }, [inView, value, spring]);

    return (
      <motion.div
        ref={ref}
        className="bg-white p-4 rounded-xl border border-gray-200 text-center"
      >
        <motion.div className={`text-2xl font-bold text-${color}-600 mb-1`}>
          {display}
        </motion.div>
        <div className="text-sm text-gray-500">
          {stats.find((s) => s.value === value && s.suffix === suffix)?.label}
        </div>
      </motion.div>
    );
  };

  /* -------------  PARALLAX BG  ------------- */
  const scrollY = useMotionValue(0);
  useEffect(() => {
    const onScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);
  const parallaxSlow = useTransform(scrollY, [0, 800], [0, -80]);
  type Card3DProps = {
    children: React.ReactNode;
    className?: string;
  };
  /* -------------  HOVER CARD  ------------- */
  const Card3D = ({ children, className }: Card3DProps) => {
    const ref = useRef<HTMLDivElement | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useTransform(y, [-150, 150], [8, -8]);
    const rotateY = useTransform(x, [-150, 150], [-8, 8]);
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      x.set(e.clientX - rect.left - rect.width / 2);
      y.set(e.clientY - rect.top - rect.height / 2);
    };

    const springX = useSpring(rotateX, { stiffness: 400, damping: 40 });
    const springY = useSpring(rotateY, { stiffness: 400, damping: 40 });
    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        style={{
          rotateX: springX,
          rotateY: springY,
          transformPerspective: 800,
        }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  /* -------------  RENDER  ------------- */
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Hero */}
      <div className="relative">
        <motion.div
          style={{ y: parallaxSlow }}
          className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white/50"
        />
        <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center space-x-2 mb-6"
              >
                <div className="w-2 h-2 rounded-full bg-blue-500" />
                <div className="text-sm text-blue-600 font-medium">
                  {t.about.hero.badge}
                </div>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
                {t.about.hero.titleLine1}
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="block text-blue-600 mt-2"
                >
                  {t.about.hero.titleLine2}
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-gray-600 max-w-2xl mx-auto mb-8"
              >
                {t.about.hero.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  {t.about.hero.buttons.startTrial} <ArrowRight className="w-4 h-4 ml-2" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
                >
                  {t.about.hero.buttons.watchDemo}
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <AnimatedStat value={s.value} suffix={s.suffix} color={s.color} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* About Sections */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            {t.nav.about}
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            We're building the modern property management platform.
          </p>
        </motion.div>
        <div className="space-y-6">
          {sections.map((sec, i) => {
            const Icon = sec.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card3D className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="flex items-start md:items-center gap-4 md:gap-6">
                      <motion.div
                        whileHover={{
                          rotate: 360,
                          transition: { duration: 0.5 },
                        }}
                        className={`w-12 h-12 ${sec.color} rounded-lg flex items-center justify-center flex-shrink-0`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {sec.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{sec.content}</p>
                        <div className="flex flex-wrap gap-2">
                          {sec.details.map((d, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: i * 0.15 + idx * 0.05 }}
                              className="inline-flex items-center text-sm text-gray-700 bg-gray-50 px-3 py-1 rounded-full"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 mr-1" />{" "}
                              {d}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Core Features
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Everything you need in one platform.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            const colorClasses = {
              blue: "bg-blue-50 text-blue-600 border-blue-100",
              emerald: "bg-emerald-50 text-emerald-600 border-emerald-100",
              purple: "bg-purple-50 text-purple-600 border-purple-100",
              amber: "bg-amber-50 text-amber-600 border-amber-100",
            };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className={`bg-white rounded-xl border ${
                  colorClasses[f.color]
                } p-5`}
              >
                <div className="flex items-center space-x-4">
                  <motion.div
                    whileHover={{ rotate: -12 }}
                    className={`p-2 rounded-lg ${
                      colorClasses[f.color].split(" ")[0]
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{f.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      {f.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Benefits */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl overflow-hidden"
        >
          <div className="p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  {t.about.benefits.title}
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Clock,
                      text: t.about.benefits.saveTime.title,
                      sub: t.about.benefits.saveTime.description,
                      color: "blue",
                    },
                    {
                      icon: TrendingUp,
                      text: t.about.benefits.growPortfolio.title,
                      sub: t.about.benefits.growPortfolio.description,
                      color: "emerald",
                    },
                    {
                      icon: Shield,
                      text: t.about.benefits.enterpriseSecurity.title,
                      sub: t.about.benefits.enterpriseSecurity.description,
                      color: "purple",
                    },
                  ].map((b, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div
                        className={`w-6 h-6 rounded-full bg-${b.color}-100 flex items-center justify-center flex-shrink-0`}
                      >
                        <b.icon className={`w-3 h-3 text-${b.color}-600`} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {b.text}
                        </h4>
                        <p className="text-gray-600">{b.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring" }}
                  >
                    <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {t.about.benefits.trustedPlatform.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {t.about.benefits.trustedPlatform.description}
                  </p>
                  <div className="space-y-2">
                    {t.about.benefits.trustedPlatform.benefits.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Final CTA */}
      <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto pb-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {t.about.cta.title}
          </h2>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            {t.about.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t.about.cta.buttons.startTrial}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-blue-400 hover:text-blue-600 transition-colors"
            >
              {t.about.cta.buttons.scheduleDemo}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};