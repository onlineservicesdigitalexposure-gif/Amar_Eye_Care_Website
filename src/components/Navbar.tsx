import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { m as motion, AnimatePresence } from "framer-motion";
import { PhoneCall, Menu, X } from "lucide-react";
import { cn } from "../utils/cn";
import Logo from "../assets/Logo.png";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t.nav.links.home, href: "/" },
    { name: t.nav.links.doctor, href: "/doctor" },
    { name: t.nav.links.services, href: "/services" },
    { name: t.nav.links.branches, href: "/branches" },
    { name: t.nav.links.gallery, href: "/gallery" },
    { name: t.nav.links.contact, href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200 py-3"
          : "bg-white py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          <Link to="/" className="flex items-center group" aria-label={t.nav.logo.aria}>
            <img
              src={Logo}
              alt={t.nav.logo.aria}
              className="h-22 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-sm"
                role="menuitem"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-slate-100 p-1 rounded-full" aria-label={t.nav.lang.label}>
              <button
                onClick={() => setLanguage("EN")}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all",
                  language === "EN" ? "bg-white shadow-sm text-primary-800" : "text-slate-500 hover:text-slate-700"
                )}
              >
                {t.nav.lang.enShort}
              </button>
              <button
                onClick={() => setLanguage("BN")}
                className={cn(
                  "px-3 py-1 text-xs font-semibold rounded-full transition-all",
                  language === "BN" ? "bg-white shadow-sm text-primary-800" : "text-slate-500 hover:text-slate-700"
                )}
              >
                {t.nav.lang.bnShort}
              </button>
            </div>

            <Link
              to="/contact"
              className="hidden sm:flex items-center gap-2 bg-teal-500 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.nav.cta.bookAppointment}</span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
              aria-label={t.nav.toggle.aria}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="block px-4 py-3 text-base font-medium text-slate-800 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <div className="my-2 border-t border-slate-100" />

              <div className="flex flex-col gap-4 px-4 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-slate-600">{t.nav.lang.label}</span>
                  <div className="flex items-center bg-slate-100 p-1 rounded-full">
                    <button
                      onClick={() => setLanguage("EN")}
                      className={cn(
                        "px-4 py-1.5 text-xs font-semibold rounded-full transition-all",
                        language === "EN" ? "bg-white shadow-sm text-primary-800" : "text-slate-500"
                      )}
                    >
                      {t.nav.lang.enFull}
                    </button>
                    <button
                      onClick={() => setLanguage("BN")}
                      className={cn(
                        "px-4 py-1.5 text-xs font-semibold rounded-full transition-all",
                        language === "BN" ? "bg-white shadow-sm text-primary-800" : "text-slate-500"
                      )}
                    >
                      {t.nav.lang.bnFull}
                    </button>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 bg-teal-500 text-white w-full py-3.5 rounded-xl font-medium shadow-md hover:bg-teal-600 transition-colors mt-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>{t.nav.cta.callToBook}</span>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
