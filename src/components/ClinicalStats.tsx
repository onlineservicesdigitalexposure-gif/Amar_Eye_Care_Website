import { m as motion } from "framer-motion";
import { Users, Award, Calendar, Activity } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { useLanguage } from "../context/LanguageContext";

export const ClinicalStats = () => {
  const { t } = useLanguage();

  const stats = [
    { label: t.stats.procedures.label, value: t.stats.procedures.value, icon: Activity, color: "text-blue-600" },
    { label: t.stats.years.label, value: t.stats.years.value, icon: Calendar, color: "text-teal-600" },
    { label: t.stats.consultants.label, value: t.stats.consultants.value, icon: Users, color: "text-primary-600" },
    { label: t.stats.awards.label, value: t.stats.awards.value, icon: Award, color: "text-amber-600" },
  ];

  return (
    <section className="py-12 bg-white relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 bg-slate-50 border border-slate-100 p-8 md:p-12 rounded-[2.5rem] shadow-sm"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
              className="flex flex-col items-center text-center group"
            >
              <div className={`p-4 rounded-2xl bg-white shadow-sm mb-4 transition-transform group-hover:scale-110 group-hover:-rotate-3 duration-300 ${stat.color}`}>
                <stat.icon className="w-8 h-8" />
              </div>
              <span className="text-3xl md:text-4xl font-bold text-slate-800 mb-1">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm font-bold text-slate-400 uppercase tracking-widest leading-tight">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
