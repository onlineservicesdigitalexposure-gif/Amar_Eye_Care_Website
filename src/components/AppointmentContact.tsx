import { useState } from "react";
import { m as motion } from "framer-motion";
import { User, Phone, Calendar, Clock, MapPin, Stethoscope, MessageSquare, ArrowRight, CheckCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { useLanguage } from "../context/LanguageContext";

const WHATSAPP_NUMBER = "8274071117";

interface FormData {
  name: string;
  phone: string;
  age: string;
  gender: string;
  branch: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  age: "",
  gender: "",
  branch: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

export const AppointmentContact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const buildWhatsAppMessage = () => {
    const lines = [
      t.contact.form.whatsapp.header,
      ``,
      `${t.contact.form.whatsapp.patientName} ${form.name}`,
      `${t.contact.form.whatsapp.phone} +91 ${form.phone}`,
      `${t.contact.form.whatsapp.age} ${form.age}`,
      `${t.contact.form.whatsapp.gender} ${form.gender}`,
      ``,
      `${t.contact.form.whatsapp.branch} ${form.branch}`,
      `${t.contact.form.whatsapp.service} ${form.service}`,
      `${t.contact.form.whatsapp.date} ${form.preferredDate}`,
      `${t.contact.form.whatsapp.time} ${form.preferredTime}`,
      ``,
      form.message ? `${t.contact.form.whatsapp.notes} ${form.message}` : "",
      ``,
      t.contact.form.whatsapp.footer,
    ]
      .filter((l) => l !== undefined)
      .join("\n");

    return encodeURIComponent(lines);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = buildWhatsAppMessage();
    setSubmitted(true);
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
    }, 600);
  };

  const isValid =
    form.name.trim() &&
    form.phone.trim().length >= 10 &&
    form.gender &&
    form.branch &&
    form.service &&
    form.preferredDate;

  const BRANCHES = [
    t.contact.form.branch.mainBranch,
    t.contact.form.branch.amtalaBranch,
  ];

  const SERVICES = [
    t.contact.form.service.options.cataract,
    t.contact.form.service.options.glaucoma,
    t.contact.form.service.options.vision,
    t.contact.form.service.options.pediatric,
    t.contact.form.service.options.diabetic,
    t.contact.form.service.options.diagnostics,
    t.contact.form.service.options.checkup,
    t.contact.form.service.options.other,
  ];

  const TIME_SLOTS_KOLKATA = [
    t.contact.slots.k1,
    t.contact.slots.k2,
    t.contact.slots.k3,
    t.contact.slots.k4,
    t.contact.slots.k5,
    t.contact.slots.k6,
  ];

  const infoItems = [
    {
      icon: MapPin,
      title: t.contact.info.kolkata.title,
      desc: `${t.contact.info.kolkata.address}\n${t.contact.info.kolkata.hours}`,
    },
    {
      icon: MapPin,
      title: t.contact.info.amtala.title,
      desc: `${t.contact.info.amtala.address}\n${t.contact.info.amtala.hours}`,
    },
    {
      icon: Phone,
      title: t.contact.info.contact.title,
      desc: t.contact.info.contact.subtitle,
    },
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-3xl opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40%] h-[30%] bg-primary-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader
          title={t.contact.section.title}
          subtitle={t.contact.section.subtitle}
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mt-4"
        >
          {/* ── LEFT: Info Panel ── */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-1 flex flex-col gap-6"
          >
            {/* Quick Info Cards */}
            {infoItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-md flex items-start gap-4"
              >
                <div className="bg-teal-50 p-3 rounded-xl text-teal-600 shrink-0">
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-primary-950 mb-1">{item.title}</p>
                  <p className="text-sm text-slate-500 font-medium whitespace-pre-line leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Direct WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-2xl font-bold shadow-lg shadow-green-500/20 transition-all hover:-translate-y-0.5 text-sm"
            >
              <MessageSquare className="w-5 h-5" />
              {t.contact.info.cta}
            </a>
          </motion.div>

          {/* ── RIGHT: Form ── */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-2 bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 p-8 md:p-12"
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12 gap-6">
                <div className="bg-teal-50 p-6 rounded-full">
                  <CheckCircle className="w-16 h-16 text-teal-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary-950">
                  {t.contact.form.submit.redirecting}
                </h3>
                <p className="text-slate-500 font-medium max-w-sm">
                  {t.contact.form.postSubmit.message}{" "}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${buildWhatsAppMessage()}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-teal-600 font-bold underline"
                  >
                    {t.contact.form.postSubmit.link}
                  </a>
                  .
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="text-sm text-slate-400 hover:text-teal-600 font-medium underline transition-colors"
                >
                  {t.contact.form.postSubmit.another}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h3 className="text-2xl font-bold text-primary-950 mb-2">
                  {t.contact.form.title}
                </h3>

                {/* Row 1 – Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-teal-500" /> {t.contact.form.name.label} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder={t.contact.form.name.placeholder}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-teal-500" /> {t.contact.form.phone.label} *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      minLength={10}
                      maxLength={10}
                      value={form.phone}
                      onChange={handleChange}
                      placeholder={t.contact.form.phone.placeholder}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    />
                  </div>
                </div>

                {/* Row 2 – Age + Gender */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700">
                      {t.contact.form.age.label} *
                    </label>
                    <input
                      type="number"
                      name="age"
                      required
                      min={1}
                      max={120}
                      value={form.age}
                      onChange={handleChange}
                      placeholder={t.contact.form.age.placeholder}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700">
                      {t.contact.form.gender.label} *
                    </label>
                    <select
                      name="gender"
                      required
                      value={form.gender}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    >
                      <option value="">{t.contact.form.gender.placeholder}</option>
                      <option value={t.contact.form.gender.male}>{t.contact.form.gender.male}</option>
                      <option value={t.contact.form.gender.female}>{t.contact.form.gender.female}</option>
                      <option value={t.contact.form.gender.other}>{t.contact.form.gender.other}</option>
                    </select>
                  </div>
                </div>

                {/* Row 3 – Branch */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-teal-500" /> {t.contact.form.branch.label} *
                  </label>
                  <select
                    name="branch"
                    required
                    value={form.branch}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                  >
                    <option value="">{t.contact.form.branch.placeholder}</option>
                    {BRANCHES.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>

                {/* Row 4 – Service */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <Stethoscope className="w-4 h-4 text-teal-500" /> {t.contact.form.service.label} *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                  >
                    <option value="">{t.contact.form.service.placeholder}</option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Row 5 – Date + Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-teal-500" /> {t.contact.form.date.label} *
                    </label>
                    <input
                      type="date"
                      name="preferredDate"
                      required
                      min={new Date().toISOString().split("T")[0]}
                      value={form.preferredDate}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-500" /> {t.contact.form.time.label}
                    </label>
                    <select
                      name="preferredTime"
                      value={form.preferredTime}
                      onChange={handleChange}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-teal-400 transition"
                    >
                      <option value="">{t.contact.form.time.placeholder}</option>
                      {TIME_SLOTS_KOLKATA.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Optional message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-bold text-slate-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-teal-500" /> {t.contact.form.message.label}{" "}
                    <span className="text-slate-400 font-normal">{t.contact.form.message.optional}</span>
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t.contact.form.message.placeholder}
                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 transition resize-none"
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={!isValid}
                  whileHover={isValid ? { scale: 1.02 } : {}}
                  whileTap={isValid ? { scale: 0.98 } : {}}
                  className={`w-full flex items-center justify-center gap-3 py-4 rounded-2xl font-bold text-base transition-all shadow-lg ${isValid
                    ? "bg-teal-500 hover:bg-teal-600 text-white shadow-teal-500/30 cursor-pointer"
                    : "bg-slate-100 text-slate-400 cursor-not-allowed shadow-none"
                    }`}
                >
                  {t.contact.form.submit.whatsapp}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>

                <p className="text-center text-xs text-slate-400 font-medium">
                  {t.contact.form.submit.disclaimer}
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
