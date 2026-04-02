import { m as motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { useLanguage } from "../context/LanguageContext";

export const Testimonials = () => {
  const { t } = useLanguage();

  const reviews = [
    {
      name: t.testimonials.reviews.prabir.name,
      role: t.testimonials.reviews.prabir.role,
      content: t.testimonials.reviews.prabir.content,
      rating: 5
    },
    {
      name: t.testimonials.reviews.sumi.name,
      role: t.testimonials.reviews.sumi.role,
      content: t.testimonials.reviews.sumi.content,
      rating: 5
    },
    {
      name: t.testimonials.reviews.animesh.name,
      role: t.testimonials.reviews.animesh.role,
      content: t.testimonials.reviews.animesh.content,
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t.testimonials.section.title}
          subtitle={t.testimonials.section.subtitle}
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
              className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100 flex flex-col relative h-full group hover:bg-white hover:shadow-xl transition-all duration-400"
            >
              <div className="absolute top-8 right-8 text-slate-200 group-hover:text-teal-500 transition-colors">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-lg font-medium text-slate-700 leading-relaxed mb-8 grow">
                "{review.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 leading-none mb-1">{review.name}</h4>
                  <span className="text-xs font-bold text-teal-600 uppercase tracking-widest">{review.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
