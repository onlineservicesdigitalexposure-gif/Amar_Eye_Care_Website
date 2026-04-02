import { m as motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { useLanguage } from "../context/LanguageContext";

export const QuickFAQ = () => {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t.faq.items.painless.question,
      answer: t.faq.items.painless.answer
    },
    {
      question: t.faq.items.recovery.question,
      answer: t.faq.items.recovery.answer
    },
    {
      question: t.faq.items.insurance.question,
      answer: t.faq.items.insurance.answer
    },
    {
      question: t.faq.items.technology.question,
      answer: t.faq.items.technology.answer
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t.faq.section.title}
          subtitle={t.faq.section.subtitle}
          align="center"
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors group"
              >
                <span className="text-lg font-bold text-slate-800 group-hover:text-teal-600 transition-colors">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-xl transition-all duration-300 ${openIndex === idx ? "bg-teal-500 text-white" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"}`}>
                  {openIndex === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-8 pb-6 text-base font-medium text-slate-500 leading-relaxed border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
