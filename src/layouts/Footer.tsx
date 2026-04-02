import { Eye, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: t.footer.links.home, href: "/" },
    { name: t.footer.links.doctor, href: "/doctor" },
    { name: t.footer.links.book, href: "/contact" },
    { name: t.footer.links.contact, href: "/contact" },
  ];

  const specialtyServices = [
    { name: t.footer.services.phaco, href: "/services/painless-cataract-surgery" },
    { name: t.footer.services.glaucoma, href: "/services/glaucoma-management" },
    { name: t.footer.services.squint, href: "/services/pediatric-eye-care" },
    { name: t.footer.services.diabetic, href: "/services/diabetic-retinopathy" },
    { name: t.footer.services.checkup, href: "/services" },
  ];

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-8 rounded-t-[3rem] -mt-8 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-teal-500 p-2 rounded-xl text-white">
                <Eye className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-white leading-tight tracking-tight">
                  {t.footer.brand.name}
                </span>
                <span className="text-[11px] font-semibold text-teal-400 uppercase tracking-wider leading-none">
                  {t.footer.brand.tagline}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed pr-6">
              {t.footer.brand.about}
            </p>
            {/* Social Icons (Inline SVGs avoiding Lucide brand deprecations) */}
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.links.heading}</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-sm font-medium hover:text-teal-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.services.heading}</h4>
            <ul className="space-y-4">
              {specialtyServices.map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-sm font-medium hover:text-teal-400 transition-colors flex items-center gap-2 group">
                    <span className="w-1 h-1 bg-slate-700 rounded-full group-hover:bg-teal-400 transition-colors"></span>
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Branches */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-6">{t.footer.contact.heading}</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div className="flex flex-col space-y-1">
                  <a href={`tel:${t.footer.contact.phone1.replace(/\s/g, "")}`} className="text-sm font-medium hover:text-white transition-colors">{t.footer.contact.phone1}</a>
                  <a href={`tel:${t.footer.contact.phone2.replace(/\s/g, "")}`} className="text-sm font-medium hover:text-white transition-colors">{t.footer.contact.phone2}</a>
                  <a href={`tel:${t.footer.contact.phone3.replace(/\s/g, "")}`} className="text-sm font-medium hover:text-white transition-colors">{t.footer.contact.phone3}</a>
                  <a href={`tel:${t.footer.contact.phone4.replace(/\s/g, "")}`} className="text-sm font-medium hover:text-white transition-colors">{t.footer.contact.phone4}</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <a href={`mailto:${t.footer.contact.email}`} className="text-sm font-medium hover:text-white transition-colors">
                  {t.footer.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div className="text-sm font-medium leading-relaxed">
                  <span className="text-white font-bold block mb-1">{t.footer.contact.mainLabel}</span>
                  {t.footer.contact.mainAddress}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-500 shrink-0 mt-0.5" />
                <div className="text-sm font-medium leading-relaxed">
                  <span className="text-white font-bold block mb-1">{t.footer.contact.amtalaLabel}</span>
                  {t.footer.contact.amtalaAddress}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credit */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            {t.footer.bottom.copyright.replace("{year}", currentYear.toString())}
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1">
            {t.footer.bottom.credit}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-teal-400 font-bold hover:text-teal-300 transition-colors ml-1 lg:ml-0">
              {t.footer.bottom.creditLink}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
