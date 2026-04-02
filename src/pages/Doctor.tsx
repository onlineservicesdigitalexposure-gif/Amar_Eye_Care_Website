import { DoctorProfile } from "../components/DoctorProfile";
import { SEO } from "../components/ui/SEO";
import { useLanguage } from "../context/LanguageContext";

export const Doctor = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title={t.seo.doctor.title}
        description={t.seo.doctor.description}
      />
      <DoctorProfile />
    </div>
  );
};
