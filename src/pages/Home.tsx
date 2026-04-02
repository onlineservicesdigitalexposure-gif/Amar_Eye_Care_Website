import { Hero } from "../components/Hero";
import { DoctorProfile } from "../components/DoctorProfile";
import { BranchLocations } from "../components/BranchLocations";
import { ClinicalStats } from "../components/ClinicalStats";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials } from "../components/Testimonials";
import { QuickFAQ } from "../components/QuickFAQ";
import { SEO } from "../components/ui/SEO";
import { useLanguage } from "../context/LanguageContext";

export const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
        schema={{
          "@context": "https://schema.org",
          "@type": "MedicalOrganization",
          "name": t.footer.brand.name + " " + t.footer.brand.tagline,
          "alternateName": "Amar Eye Center",
          "description": t.seo.home.description,
          "url": "https://amreyecenter.in",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kolkata",
            "addressRegion": "West Bengal",
            "addressCountry": "IN"
          }
        }}
      />
      <Hero />
      <ClinicalStats />
      <WhyChooseUs />
      <DoctorProfile />
      <Testimonials />
      <QuickFAQ />
      <BranchLocations />
    </div>
  );
};
