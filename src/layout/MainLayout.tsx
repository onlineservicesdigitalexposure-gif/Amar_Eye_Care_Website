import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../utils/ScrollToTop";
import { Breadcrumb } from "../components/Breadcrumb";
import { FloatingContact } from "../components/FloatingContact";
import { useLanguage } from "../context/LanguageContext";

export const MainLayout = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative font-sans flex flex-col pt-20 w-full overflow-x-hidden">
      <ScrollToTop />
      <Navbar />
      <Breadcrumb />
      <main className="flex-1 w-full bg-slate-50 flex flex-col relative">
        <Outlet />
      </main>
      <FloatingContact />
      <Footer />
      
      {/* Mobile Sticky Appointment CTA */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 p-4 bg-white/80 backdrop-blur-md border-t border-slate-200">
        <a 
          href="https://wa.me/919027598667" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-teal-500 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-teal-500/20 active:scale-[0.98] transition-all"
        >
          {t.nav.cta.bookAppointment}
        </a>
      </div>
    </div>
  );
};
