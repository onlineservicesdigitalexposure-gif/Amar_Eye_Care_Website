import { m as motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, ShieldCheck, Star } from "lucide-react";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { useLanguage } from "../context/LanguageContext";
import heroImage from "../assets/Gallery/HeroPage.jpg";

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white">
      {/* Background abstract elements */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-primary-50/50 rounded-l-[5rem] -z-10 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-50 rounded-full blur-3xl opacity-60 -z-10 -translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start space-y-8"
          >
            <motion.div variants={fadeUpVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-100/50 text-teal-700 text-sm font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.hero.badge}</span>
            </motion.div>

            <motion.h1 
              variants={fadeUpVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary-950 leading-[1.1] tracking-tight"
            >
              {t.hero.heading.line1} <br /> 
              <span className="text-teal-500">{t.hero.heading.highlight} </span><br />
              {t.hero.heading.line2}
            </motion.h1>

            <motion.p 
              variants={fadeUpVariants}
              className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-xl"
            >
              {t.hero.subtitle.prefix} 
              <span className="text-slate-900 font-bold ml-1">{t.hero.subtitle.doctorName}</span>. 
              {t.hero.subtitle.suffix}
            </motion.p>

            <motion.div variants={fadeUpVariants} className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <Link
                to="/contact"
                className="flex items-center gap-3 bg-teal-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-teal-500/20 hover:bg-teal-600 hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto justify-center"
              >
                <Calendar className="w-5 h-5 font-bold" />
                {t.hero.cta.primary}
              </Link>
              <Link
                to="/services"
                className="flex items-center gap-2 bg-white text-primary-900 border-2 border-slate-100 px-8 py-4 rounded-2xl font-bold text-lg hover:border-teal-500 hover:text-teal-600 transition-all w-full sm:w-auto justify-center"
              >
                {t.hero.cta.secondary}
              </Link>
            </motion.div>

            <motion.div variants={fadeUpVariants} className="flex items-center gap-6 pt-4 border-t border-slate-100 w-full">
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex gap-1 text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                  {t.hero.trust.patients.value} {t.hero.trust.patients.label}
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white aspect-4/5 md:aspect-square bg-slate-100">
              <img
                src={heroImage}
                alt={t.hero.img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
            </div>
            
            {/* Float Cards */}
            <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity }}
               className="absolute -top-6 -left-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-teal-500 p-2.5 rounded-xl text-white">
                   <ShieldCheck className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                   <span className="font-bold text-slate-800 text-lg leading-none">{t.hero.floatingCards.nabh.title}</span>
                   <span className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-tight">{t.hero.floatingCards.nabh.label}</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 5, repeat: Infinity }}
               className="absolute -bottom-8 -right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hidden sm:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-primary-600 p-2.5 rounded-xl text-white">
                   <Target className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                   <span className="font-bold text-slate-800 text-lg leading-none tracking-tight">{t.hero.floatingCards.painless.title}</span>
                   <span className="text-xs font-bold text-teal-600 mt-1 uppercase tracking-tight">{t.hero.floatingCards.painless.label}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

const Target = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);
