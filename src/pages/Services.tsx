import { useState, useMemo } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { Search, SlidersHorizontal, Eye, Activity, Target, Users, Microchip, Microscope } from "lucide-react";
import { servicesData } from "../data/services";
import { ServiceCard } from "../components/ServiceCard";
import { SectionHeader } from "../components/SectionHeader";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { cn } from "../utils/cn";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/ui/SEO";

const iconMap: Record<string, any> = {
  "painless-cataract-surgery": Eye,
  "glaucoma-management": Activity,
  "vision-correction": Target,
  "pediatric-eye-care": Users,
  "diabetic-retinopathy": Microchip,
  "advanced-diagnostics": Microscope
};

// Map slugs to translation data keys
const slugToKeyMap: Record<string, any> = {
  "painless-cataract-surgery": "cataract",
  "glaucoma-management": "glaucoma",
  "vision-correction": "vision",
  "pediatric-eye-care": "pediatric",
  "diabetic-retinopathy": "diabetic",
  "advanced-diagnostics": "diagnostics"
};

export const Services = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    { id: "All", label: t.servicesPage.filter.all },
    { id: "Surgical", label: t.servicesPage.filter.surgical },
    { id: "Laser Care", label: t.servicesPage.filter.laser },
    { id: "Diagnostic", label: t.servicesPage.filter.diagnostic },
  ];

  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const translationKey = slugToKeyMap[service.slug];
      const localizedService = (t.servicesPage.data as any)[translationKey];
      
      const title = localizedService?.title || service.title;
      const description = localizedService?.description || service.shortDescription;

      const matchesSearch =
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || service.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory, t]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title={t.seo.services.title}
        description={t.seo.services.description}
      />
      {/* Header Section */}
      <section className="bg-white pt-12 pb-20 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader
            title={t.servicesPage.section.title}
            subtitle={t.servicesPage.section.subtitle}
          />

          {/* Search and Filters Bar */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mt-8">
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400 group-focus-within:text-teal-500 transition-colors">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                placeholder={t.servicesPage.search.placeholder}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all font-medium"
              />
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl w-full lg:w-auto overflow-x-auto no-scrollbar">
              <div className="flex items-center gap-1.5 px-3 py-2 text-slate-400 border-r border-slate-200 sm:flex">
                <SlidersHorizontal className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">{t.servicesPage.filter.label}</span>
              </div>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "px-5 py-2.5 rounded-xl text-sm font-bold transition-all whitespace-nowrap",
                    activeCategory === cat.id
                      ? "bg-white text-teal-600 shadow-sm"
                      : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              <motion.div
                layout
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredServices.map((service) => {
                  const translationKey = slugToKeyMap[service.slug];
                  const localizedService = (t.servicesPage.data as any)[translationKey];
                  
                  return (
                    <motion.div layout key={service.slug} variants={fadeUpVariants}>
                      <ServiceCard
                        id={service.slug}
                        title={localizedService?.title || service.title}
                        description={localizedService?.description || service.shortDescription}
                        icon={iconMap[service.slug] || Eye}
                        variant="elevated"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="bg-slate-100 p-6 rounded-full mb-6">
                  <Search className="w-12 h-12 text-slate-300" />
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-2">{t.servicesPage.empty.title}</h3>
                <p className="text-slate-500 max-w-sm">
                  {t.servicesPage.empty.message.replace("{query}", searchQuery)}
                </p>
                <button
                  onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                  className="mt-8 text-teal-600 font-bold hover:underline"
                >
                  {t.servicesPage.empty.clear}
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
