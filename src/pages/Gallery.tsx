import { useState, useMemo } from "react";
import { m as motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, SlidersHorizontal, Image as ImageIcon } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";
import { galleryData } from "../data/gallery";
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
    { id: "Clinic Interior", label: t.gallery.filter.interior },
    { id: "Equipment", label: t.gallery.filter.equipment },
    { id: "Patient Care", label: t.gallery.filter.care },
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
      {/* Header Section */}
      <section className="bg-white pt-12 pb-20 border-b border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-40 -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader 
            title={t.gallery.section.title} 
            subtitle={t.gallery.section.subtitle}
          />
          
          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 mt-8 p-1.5 bg-slate-100 rounded-2xl w-fit overflow-x-auto no-scrollbar mx-auto lg:mx-0">
            <div className="flex items-center gap-1.5 px-3 py-2 text-slate-400 border-r border-slate-200 hidden sm:flex">
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{t.gallery.filter.label}</span>
            </div>
            {categories.map(cat => (
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
      </section>

      {/* Grid Layout */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              src={selectedImage}
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
