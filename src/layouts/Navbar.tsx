import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { m as motion, AnimatePresence } from "framer-motion";
import { Menu, X, Eye, PhoneCall, ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";
import { useLanguage } from "../context/LanguageContext";

export const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: t.nav.links.home, href: "/" },
    { name: t.nav.links.doctor, href: "/doctor" },
    { 
      name: t.nav.links.services, 
      href: "/services",
      children: [
        { name: t.nav.dropdown.cataract, href: "/services/painless-cataract-surgery" },
        { name: t.nav.dropdown.glaucoma, href: "/services/glaucoma-management" },
        { name: t.nav.dropdown.vision, href: "/services/vision-correction" },
        { name: t.nav.dropdown.pediatric, href: "/services/pediatric-eye-care" },
        { name: t.nav.dropdown.diabetic, href: "/services/diabetic-retinopathy" },
        { name: t.nav.dropdown.diagnostics, href: "/services/advanced-diagnostics" }
      ]
    },
    { name: t.nav.links.branches, href: "/branches" },
    { name: t.nav.links.gallery, href: "/gallery" },
    { name: t.nav.links.contact, href: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
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
          
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-2 group" aria-label={t.nav.logo.aria}>
            <div className="bg-primary-50 p-2 rounded-xl text-primary-600 group-hover:bg-primary-100 transition-colors">
              <Eye className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-primary-900 leading-tight tracking-tight">
                {t.nav.logo.name}
              </span>
              <span className="text-[11px] font-semibold text-teal-600 uppercase tracking-wider leading-none">
                {t.nav.logo.tagline}
              </span>
            </div>
          </Link>

          {/* Nav Links - Center (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8" role="menubar">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  to={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors flex items-center gap-1 py-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-sm"
                  aria-haspopup={link.children ? "true" : undefined}
                  role="menuitem"
                >
                  {link.name}
                  {link.children && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden="true" />}
                </Link>
                
                {/* Desktop Dropdown with Hover & Focus Within Animation */}
                {link.children && (
                  <div 
                    className="absolute top-[80%] -left-6 w-72 bg-white rounded-2xl shadow-xl py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 border border-slate-100 transform translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0"
                    role="menu"
                    aria-label={`${link.name} submenu`}
                  >
                    <div className="px-5 pb-2 mb-2 border-b border-slate-50" aria-hidden="true">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t.nav.dropdown.heading}</p>
                    </div>
                    {link.children.map(child => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="block px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-primary-700 hover:bg-slate-50 focus:bg-slate-50 focus:text-primary-700 outline-none transition-colors"
                        role="menuitem"
                      >
                        {child.name}
                      </Link>
                    ))}
                    <div className="px-5 pt-2 mt-2 border-t border-slate-50">
                      <Link to="/services" className="text-xs font-bold text-teal-600 hover:text-teal-700 focus:outline-none transition-colors flex items-center gap-1 w-fit" role="menuitem">
                        {t.nav.dropdown.viewAll}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions - Right (Desktop & some Mobile) */}
          <div className="flex items-center gap-4">
            
            {/* Language Switcher */}
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

            {/* Appointment Button */}
            <Link
              to="/contact"
              aria-label={t.nav.cta.bookAppointment}
              className="hidden sm:flex items-center gap-2 bg-teal-500 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-lg shadow-teal-500/30 hover:bg-teal-600 hover:-translate-y-0.5 transition-all duration-300"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{t.nav.cta.bookAppointment}</span>
            </Link>

            {/* Mobile Menu Toggle */}
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

      {/* Mobile Navigation Menu */}
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
                <div key={link.href}>
                  {link.children ? (
                    <details className="group">
                      <summary className="flex items-center justify-between px-4 py-3 text-base font-medium text-slate-800 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors list-none cursor-pointer">
                        <Link to={link.href} onClick={() => setMobileMenuOpen(false)}>{link.name}</Link>
                        <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                      </summary>
                      <div className="flex flex-col gap-1 pl-6 pr-2 py-2 mt-1 bg-slate-50 rounded-xl">
                        {link.children.map(child => (
                          <Link
                            key={child.href}
                            to={child.href}
                            className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-primary-700 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </details>
                  ) : (
                    <Link
                      to={link.href}
                      className="block px-4 py-3 text-base font-medium text-slate-800 rounded-xl hover:bg-primary-50 hover:text-primary-700 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="my-2 border-t border-slate-100" />
              
              {/* Mobile Lang and CTA */}
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
