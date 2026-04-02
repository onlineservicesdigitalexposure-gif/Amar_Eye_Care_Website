import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { ScrollToTop } from "../utils/ScrollToTop";
import { Breadcrumbs } from "../components/ui/Breadcrumbs";

export const MainLayout = () => {
  return (
    <div className="min-h-screen relative font-sans flex flex-col pt-20">
      <ScrollToTop />
      <Navbar />
      <Breadcrumbs />
      <main className="flex-1 w-full bg-slate-50 flex flex-col relative">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
