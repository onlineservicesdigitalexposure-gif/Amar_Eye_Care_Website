import { useState } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { Send, PhoneCall, MessageCircle, AlertCircle, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../utils/cn";
import { useLanguage } from "../../context/LanguageContext";

interface FormData {
  name: string;
  phone: string;
  problem: string;
  branch: string;
}

export const AppointmentContact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    problem: "",
    branch: t.contact.form.branch.mainBranch,
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Exact map embed showing 40/1 Rafi Ahmed Kidwai Road, Kolkata 700016
  const mapEmbedUrl = "https://maps.google.com/maps?q=40/1+Rafi+Ahmed+Kidwai+Road,+Kolkata&t=m&z=15&output=embed&iwloc=near";
  const mainPhone = "9027598667"; 
  const whatsappNumber = "9147741140"; 

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = t.contact.form.errors.nameRequired;
    if (!formData.phone.trim()) {
      newErrors.phone = t.contact.form.errors.phoneRequired;
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = t.contact.form.errors.phoneInvalid;
    }
    if (!formData.problem.trim()) newErrors.problem = t.contact.form.errors.problemRequired;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call to email/whatsapp service
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
          setIsSuccess(false);
          setFormData({ name: "", phone: "", problem: "", branch: t.contact.form.branch.mainBranch });
        }, 4000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.contact.section.title}
          subtitle={t.contact.section.subtitle}
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 mt-16">
          
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-white rounded-4xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">{t.contact.form.title}</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.form.name.label}</label>
                <input
                  type="text"
                  id="name"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all",
                    errors.name ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:border-teal-400 focus:ring-teal-100"
                  )}
                  placeholder={t.contact.form.name.placeholder}
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: undefined });
                  }}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.form.phone.label}</label>
                <input
                  type="tel"
                  id="phone"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all",
                    errors.phone ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:border-teal-400 focus:ring-teal-100"
                  )}
                  placeholder={t.contact.form.phone.placeholder}
                  value={formData.phone}
                  onChange={(e) => {
                    setFormData({ ...formData, phone: e.target.value });
                    if (errors.phone) setErrors({ ...errors, phone: undefined });
                  }}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="branch" className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.form.branch.label}</label>
                <div className="relative">
                  <select
                    id="branch"
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-teal-400 focus:ring-teal-100 transition-all appearance-none cursor-pointer text-sm font-medium"
                    value={formData.branch}
                    onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                  >
                    <option value={t.contact.form.branch.mainBranch}>{t.contact.form.branch.mainBranch}</option>
                    <option value={t.contact.form.branch.amtalaBranch}>{t.contact.form.branch.amtalaBranch}</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-semibold text-slate-700 mb-2">{t.contact.form.problem.label}</label>
                <textarea
                  id="problem"
                  rows={3}
                  className={cn(
                    "w-full px-4 py-3 rounded-xl border bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 transition-all resize-none",
                    errors.problem ? "border-red-300 focus:ring-red-200" : "border-slate-200 focus:border-teal-400 focus:ring-teal-100"
                  )}
                  placeholder={t.contact.form.problem.placeholder}
                  value={formData.problem}
                  onChange={(e) => {
                    setFormData({ ...formData, problem: e.target.value });
                    if (errors.problem) setErrors({ ...errors, problem: undefined });
                  }}
                />
                {errors.problem && (
                  <p className="text-red-500 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.problem}
                  </p>
                )}
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className="w-full relative flex items-center justify-center gap-2 bg-teal-500 text-white py-4 px-6 rounded-xl font-bold shadow-lg shadow-teal-500/30 overflow-hidden hover:bg-teal-600 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-80 disabled:cursor-not-allowed disabled:transform-none"
                >
                  <AnimatePresence mode="popLayout" initial={false}>
                    {isSubmitting ? (
                       <motion.div
                         key="loading"
                         initial={{ opacity: 0, y: 10 }}
                         animate={{ opacity: 1, y: 0 }}
                         exit={{ opacity: 0, y: -10 }}
                         className="flex items-center gap-2"
                       >
                         <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                         </svg>
                         {t.contact.form.submit.loading}
                       </motion.div>
                    ) : isSuccess ? (
                      <motion.div
                         key="success"
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.8 }}
                         className="flex items-center gap-2"
                       >
                         <CheckCircle2 className="w-5 h-5" /> {t.contact.form.submit.success}
                       </motion.div>
                    ) : (
                      <motion.div
                        key="default"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                         <span>{t.contact.form.submit.default}</span>
                         <Send className="w-4 h-4" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </div>
            </form>
          </motion.div>

          {/* Right Column - Direct Contacts & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="flex flex-col space-y-6"
          >
            
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${mainPhone}`}
                className="flex flex-col items-center justify-center gap-2 bg-primary-50 p-6 rounded-2xl border border-primary-100 hover:bg-primary-100 hover:border-primary-200 transition-colors group"
              >
                <div className="bg-white p-3 rounded-full text-primary-600 shadow-sm group-hover:scale-110 transition-transform">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 mt-2 text-lg">{t.contact.quickContact.call.title}</p>
                  <p className="text-sm font-medium text-slate-500">{t.contact.quickContact.call.subtitle}</p>
                </div>
              </a>

              <a
                href={`https://wa.me/91${whatsappNumber}?text=Hi%20AMR%20Eye%20Center,%20I%20would%20like%20to%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center gap-2 bg-green-50 p-6 rounded-2xl border border-green-100 hover:bg-green-100 hover:border-green-200 transition-colors group"
              >
                <div className="bg-white p-3 rounded-full text-green-600 shadow-sm group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div className="text-center">
                  <p className="font-bold text-slate-900 mt-2 text-lg">{t.contact.quickContact.whatsapp.title}</p>
                  <p className="text-sm font-medium text-slate-500">{t.contact.quickContact.whatsapp.subtitle}</p>
                </div>
              </a>
            </div>

            {/* Google Maps Exact Location Embed */}
            <div className="grow bg-slate-200 rounded-4xl overflow-hidden min-h-75 lg:min-h-0 border-2 border-slate-100 shadow-inner relative">
               <iframe 
                 src={mapEmbedUrl}
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, position: 'absolute', inset: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title={t.contact.map.title}
               />
               <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl text-xs font-bold text-slate-800 shadow-lg pointer-events-none">
                 {t.contact.map.overlay}
               </div>
            </div>

          </motion.div>
        </div >
      </div>
    </section>
  );
};
