import { m as motion } from "framer-motion";
import { ShieldCheck, Zap, HeartPulse, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { useLanguage } from "../context/LanguageContext";

export const WhyChooseUs = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t.why.benefits.tech.title,
      description: t.why.benefits.tech.description,
      icon: Zap,
      color: "bg-teal-500"
    },
    {
      title: t.why.benefits.expertise.title,
      description: t.why.benefits.expertise.description,
      icon: ShieldCheck,
      color: "bg-primary-600"
    },
    {
      title: t.why.benefits.care.title,
      description: t.why.benefits.care.description,
      icon: HeartPulse,
      color: "bg-teal-600"
    },
    {
      title: t.why.benefits.hygiene.title,
      description: t.why.benefits.hygiene.description,
      icon: Sparkles,
      color: "bg-slate-800"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t.why.section.title}
          subtitle={t.why.section.subtitle}
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
              className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-300 group relative border border-slate-100"
            >
              <div className={`w-14 h-14 rounded-2xl ${benefit.color} flex items-center justify-center text-white mb-6 transform group-hover:rotate-12 transition-transform`}>
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4 tracking-tight">
                {benefit.title}
              </h3>
              <p className="text-sm font-medium text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
