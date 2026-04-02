import { m as motion } from "framer-motion";
import { Link } from "react-router-dom";
import DrAbdulMohit from "../assets/Dr. Abdul Mohit.jpeg";
import { Award, GraduationCap, Microscope, ShieldCheck } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { useLanguage } from "../context/LanguageContext";

export const DoctorProfile = () => {
  const { t } = useLanguage();

  const qualifications = [
    { icon: GraduationCap, title: t.doctor.qualifications.specialization.title, text: t.doctor.qualifications.specialization.text },
    { icon: Microscope, title: t.doctor.qualifications.expertise.title, text: t.doctor.qualifications.expertise.text },
    { icon: Award, title: t.doctor.qualifications.experience.title, text: t.doctor.qualifications.experience.text },
    { icon: ShieldCheck, title: t.doctor.qualifications.nabh.title, text: t.doctor.qualifications.nabh.text },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group lg:pr-12"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-4 border-slate-100 bg-slate-50 aspect-4/5 md:aspect-square lg:aspect-auto h-full">
              <img
                src={DrAbdulMohit}
                alt={t.doctor.img.alt}
                className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-primary-950/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Float Badge */}
            <div className="absolute -bottom-6 -right-6 lg:right-6 bg-teal-500 text-white p-8 rounded-3xl shadow-xl shadow-teal-500/20 max-w-50">
              <span className="text-4xl font-bold block mb-1">{t.doctor.floatBadge.value}</span>
              <span className="text-xs font-bold uppercase tracking-widest leading-tight">{t.doctor.floatBadge.label}</span>
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col items-start"
          >
            <motion.span variants={fadeUpVariants} className="text-teal-600 font-bold tracking-[0.2em] mb-4 uppercase">
              {t.doctor.overline}
            </motion.span>

            <motion.h2 variants={fadeUpVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-950 mb-6 tracking-tight leading-none">
              {t.doctor.name}
            </motion.h2>

            <motion.p variants={fadeUpVariants} className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl mb-10 font-medium italic">
              "{t.doctor.quote}"
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
              {qualifications.map((q, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUpVariants}
                  className="flex items-start gap-4 group"
                >
                  <div className="bg-primary-50 p-3 rounded-xl text-primary-600 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110">
                    <q.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 leading-none mb-1.5">{q.title}</h4>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-tight">{q.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeUpVariants} className="mt-12">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-teal-500 transition-all hover:shadow-2xl shadow-slate-900/20"
              >
                {t.doctor.cta}
                <span className="w-8 h-0.5 bg-white group-hover:w-12 transition-all"></span>
              </Link>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
