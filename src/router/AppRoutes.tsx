import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";

// Lazy load pages for efficient bundle splitting
const Home = lazy(() => import("../pages/Home").then(m => ({ default: m.Home })));
const Doctor = lazy(() => import("../pages/Doctor").then(m => ({ default: m.Doctor })));
const Services = lazy(() => import("../pages/Services").then(m => ({ default: m.Services })));
const Branches = lazy(() => import("../pages/Branches").then(m => ({ default: m.Branches })));
const Gallery = lazy(() => import("../pages/Gallery").then(m => ({ default: m.Gallery })));
const Contact = lazy(() => import("../pages/Contact").then(m => ({ default: m.Contact })));

// Loading Fallback Component
const PageLoader = () => (
  <div className="h-[60vh] w-full flex items-center justify-center">
    <div className="w-12 h-12 rounded-full border-4 border-teal-500 border-t-transparent animate-spin shadow-xl"></div>
  </div>
);

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        } />
        <Route path="/doctor" element={
          <Suspense fallback={<PageLoader />}>
            <Doctor />
          </Suspense>
        } />
        <Route path="/services" element={
          <Suspense fallback={<PageLoader />}>
            <Services />
          </Suspense>
        } />
        <Route path="/branches" element={
          <Suspense fallback={<PageLoader />}>
            <Branches />
          </Suspense>
        } />
        <Route path="/gallery" element={
          <Suspense fallback={<PageLoader />}>
            <Gallery />
          </Suspense>
        } />
        <Route path="/contact" element={
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        } />
      </Route>
    </Routes>
  );
};
