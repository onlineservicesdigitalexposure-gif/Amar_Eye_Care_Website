import { m as motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, X, ChevronUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../utils/cn";
import { useLanguage } from "../context/LanguageContext";

export const FloatingContact = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactActions = [
    {
      id: "whatsapp",
      icon: MessageCircle,
      label: t.floating.whatsapp,
      href: "https://wa.me/918274071117",
      color: "bg-green-500",
      shadow: "shadow-green-500/20"
    },
    {
      id: "call",
      icon: Phone,
      label: t.floating.call,
      href: "tel:+918274071117",
      color: "bg-blue-500",
      shadow: "shadow-blue-500/20"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 pointer-events-none">
      
      {/* Scroll to Top - Desktop only or high up on mobile */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="pointer-events-auto p-3 bg-white text-slate-800 rounded-full shadow-xl border border-slate-100 hover:bg-slate-50 transition-colors"
            aria-label={t.floating.scrollTopAria}
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Action Menu */}
      <div className="relative flex flex-col items-end gap-3">
        <AnimatePresence>
          {isOpen && (
            <div className="flex flex-col items-end gap-3 mb-2">
              {contactActions.map((action, idx) => (
                <motion.a
                  key={action.id}
                  href={action.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 20, scale: 0.8 }}
                  transition={{ delay: idx * 0.1 }}
                  className={cn(
                    "pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-2xl text-white shadow-2xl font-bold transition-all hover:-translate-x-2 active:scale-95",
                    action.color,
                    action.shadow
                  )}
                >
                  <span className="text-sm">{action.label}</span>
                  <action.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          layout
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            "pointer-events-auto w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all active:scale-90",
            isOpen ? "bg-slate-800" : "bg-teal-500 shadow-teal-500/30"
          )}
        >
          {isOpen ? (
            <X className="w-6 h-6 animate-in spin-in-90 duration-300" />
          ) : (
            <div className="relative">
              <Phone className="w-6 h-6 animate-pulse" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-bounce" />
            </div>
          )}
        </motion.button>
      </div>
    </div>
  );
};
