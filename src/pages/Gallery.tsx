import { useState, useMemo } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, SlidersHorizontal, Image as ImageIcon } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { galleryData, surgeryResults } from "../data/gallery";
import { cn } from "../utils/cn";
import { fadeUpVariants, staggerContainer } from "../animations/variants";
import { useLanguage } from "../context/LanguageContext";
import { SEO } from "../components/ui/SEO";

export const Gallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "All", label: t.gallery.filter.all },
    { id: "Patient Care", label: t.gallery.filter.care },
    { id: "Equipment", label: t.gallery.filter.equipment },
    { id: "Clinic Interior", label: t.gallery.filter.interior },
    { id: "Surgery Room", label: t.gallery.filter.surgery },
  ];

  // Map alt text to translation keys
  const altToKeyMap: Record<string, keyof typeof t.gallery.images> = {
    "Modern Reception Area": "reception",
    "Advanced OCT Machine": "oct",
    "Sterile Operating Theater": "theater",
    "Doctor consulting a patient": "consultation",
    "Phacoemulsification Console": "phaco",
    "Comfortable Waiting Lounge": "lounge",
    "Laser Vison Correction Suite": "laser", // Handling the typo in data
    "Vision Testing": "visionTest",
    "Slit Lamp Examination": "slitLamp",
  };

  const filteredImages = useMemo(() => {
    return activeCategory === "All" 
      ? galleryData 
      : galleryData.filter(img => img.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      <SEO 
        title={t.seo.gallery.title}
        description={t.seo.gallery.description}
      />
      {/* Section 1: Surgical Outcomes Header & Content */}
      <section className="bg-white pt-24 pb-20 border-b border-slate-100 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-40 translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title={t.gallery.surgerySection.title} 
            subtitle={t.gallery.surgerySection.subtitle}
            align="left"
          />

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-24 mt-12"
          >
            {surgeryResults.map((result) => (
              <motion.div 
                key={result.id} 
                variants={fadeUpVariants}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
              >
                {/* Before Image Box */}
                <div className="group space-y-6">
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl flex items-center justify-center p-8">
                    <img 
                      src={result.before} 
                      alt="Before Surgery"
                      className="w-full h-full object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-8 left-8 bg-slate-900/90 backdrop-blur-md px-5 py-2 rounded-2xl text-[10px] font-bold text-white uppercase tracking-[0.2em] border border-white/10 shadow-lg">
                      {t.gallery.surgerySection.before}
                    </div>
                  </div>
                  <div className="px-8">
                    <h4 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">{result.title}</h4>
                    <p className="text-base text-slate-500 leading-relaxed max-w-md">{result.description}</p>
                  </div>
                </div>

                {/* After Image Box */}
                <div className="group space-y-6">
                  <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden bg-[#f0fdfa] border border-teal-100 shadow-sm transition-all duration-500 hover:shadow-2xl flex items-center justify-center p-8">
                    <img 
                      src={result.after} 
                      alt="After Surgery"
                      className="w-full h-full object-contain drop-shadow-2xl transform transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-8 right-8 bg-teal-600/90 backdrop-blur-md px-5 py-2 rounded-2xl text-[10px] font-bold text-white uppercase tracking-[0.2em] border border-white/10 shadow-lg">
                      {t.gallery.surgerySection.after}
                    </div>
                  </div>
                  <div className="px-8">
                    <h4 className="text-2xl font-bold text-teal-700 mb-3 tracking-tight">{t.gallery.surgerySection.after} Result</h4>
                    <p className="text-base text-slate-500 leading-relaxed max-w-md">Vision restoration achieved through specialized ophthalmic care and advanced recovery protocols.</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 2: The AMR Facility Header, Filters & Grid */}
      <section className="bg-slate-50 py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-50/50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title={t.gallery.section.title} 
            subtitle={t.gallery.section.subtitle}
          />
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 mt-8 mb-16 p-2 bg-white/80 backdrop-blur-md border border-slate-200 rounded-[2rem] w-fit overflow-x-auto no-scrollbar mx-auto lg:mx-0 shadow-sm">
            <div className="flex items-center gap-2 px-4 py-2 text-slate-400 border-r border-slate-200 hidden sm:flex">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-[0.15em]">{t.gallery.filter.label}</span>
            </div>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "px-6 py-3 rounded-2xl text-xs font-bold transition-all whitespace-nowrap tracking-wide",
                  activeCategory === cat.id 
                    ? "bg-teal-600 text-white shadow-md shadow-teal-600/20" 
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            {filteredImages.length > 0 ? (
              <motion.div 
                layout
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredImages.map((image) => {
                  const translationKey = altToKeyMap[image.alt];
                  const localizedAlt = translationKey ? t.gallery.images[translationKey] : image.alt;
                  const localizedCategory = categories.find(c => c.id === image.category)?.label || image.category;

                  return (
                    <motion.div
                      layout
                      variants={fadeUpVariants}
                      key={image.id}
                      className="group relative aspect-[4/3] rounded-[2.5rem] overflow-hidden cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 bg-slate-200 border border-slate-100"
                      onClick={() => setSelectedImage(image.url)}
                    >
                      <img 
                        src={image.url} 
                        alt={localizedAlt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      
                      <div className="absolute inset-0 bg-primary-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-md p-5 rounded-full text-white transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                          <ZoomIn className="w-8 h-8" />
                        </div>
                      </div>
                      
                      <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md px-5 py-2 rounded-2xl text-[10px] font-bold text-slate-700 uppercase tracking-widest shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-y-2 group-hover:translate-y-0">
                        {localizedCategory}
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            ) : (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <ImageIcon className="w-16 h-16 text-slate-200 mb-6" />
                <h3 className="text-2xl font-bold text-slate-800">{t.gallery.empty.title}</h3>
                <p className="text-slate-500">{t.gallery.empty.message}</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Reusable Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-950/95 backdrop-blur-xl p-4 sm:p-12"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-8 right-8 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all z-10"
              onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
              aria-label={t.gallery.lightbox.closeAria}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              src={selectedImage || undefined}
              alt={t.gallery.lightbox.imgAlt}
              className="max-w-full max-h-[85vh] object-contain rounded-[2.5rem] shadow-none"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
