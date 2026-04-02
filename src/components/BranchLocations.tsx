import { m as motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { useLanguage } from "../context/LanguageContext";

export const BranchLocations = () => {
  const { t } = useLanguage();

  const branches = [
    {
      name: t.branches.kolkata.name,
      label: t.branches.kolkata.label,
      address: t.branches.kolkata.address,
      phones: [
        { label: t.branches.kolkata.phone1, href: `tel:${t.branches.kolkata.phone1.replace(/\s/g, "")}` },
        { label: t.branches.kolkata.phone2, href: `tel:${t.branches.kolkata.phone2.replace(/\s/g, "")}` },
      ],
      hours: t.branches.kolkata.hours,
      mapUrl: "https://maps.app.goo.gl/GNNkk4H7nniYdZr27",
    },
    {
      name: t.branches.murshidabad.name,
      label: t.branches.murshidabad.label,
      address: t.branches.murshidabad.address,
      phones: [
        { label: t.branches.murshidabad.phone1, href: `tel:${t.branches.murshidabad.phone1.replace(/\s/g, "")}` },
        { label: t.branches.murshidabad.phone2, href: `tel:${t.branches.murshidabad.phone2.replace(/\s/g, "")}` },
      ],
      hours: t.branches.murshidabad.hours,
      mapUrl: "https://maps.app.goo.gl/UG4Zb8f5hqFTgYXC9",
    },
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title={t.branches.section.title}
          subtitle={t.branches.section.subtitle}
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {branches.map((branch, idx) => (
            <motion.div
              key={idx}
              variants={fadeUpVariants}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50 flex flex-col items-start relative group overflow-hidden border border-slate-100"
            >
              {/* Abstract Icon Backdrop */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary-50 rounded-full opacity-50 group-hover:bg-teal-50 group-hover:scale-125 transition-all duration-700" />

              <div className="bg-teal-500 p-4 rounded-2xl text-white mb-4 shadow-lg shadow-teal-500/20 group-hover:rotate-12 transition-transform">
                <MapPin className="w-8 h-8" />
              </div>

              {/* Branch label badge */}
              <span className="text-xs font-bold text-teal-600 uppercase tracking-widest mb-2 bg-teal-50 px-3 py-1 rounded-full">
                {branch.label}
              </span>

              <h3 className="text-3xl font-bold text-primary-950 mb-6 tracking-tight leading-none">
                {branch.name}
              </h3>

              <div className="space-y-5 flex-grow w-full relative z-10">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-lg text-slate-500 shrink-0 mt-0.5">
                    <Navigation className="w-5 h-5" />
                  </div>
                  <p className="text-base font-semibold text-slate-600 leading-relaxed pr-4">
                    {branch.address}
                  </p>
                </div>

                {/* Phone Numbers */}
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-lg text-slate-500 shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-1">
                    {branch.phones.map((p) => (
                      <a
                        key={p.href}
                        href={p.href}
                        className="text-base font-bold text-primary-900 hover:text-teal-600 transition-colors"
                      >
                        {p.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-2 rounded-lg text-slate-500 shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <p className="text-base font-semibold text-slate-500 italic leading-relaxed">
                    {branch.hours}
                  </p>
                </div>
              </div>

              {/* Navigation Button */}
              <motion.a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 flex items-center justify-center gap-3 w-full bg-slate-900 text-white py-5 rounded-2xl font-bold hover:bg-teal-500 transition-all shadow-xl shadow-slate-900/10 group-hover:shadow-teal-500/20"
              >
                {t.branches.btn.directions}
                <Navigation className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

