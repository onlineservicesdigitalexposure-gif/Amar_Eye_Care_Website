import { AppointmentContact } from "../components/AppointmentContact";
import { SEO } from "../components/ui/SEO";
import { useLanguage } from "../context/LanguageContext";

export const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title={t.seo.contact.title}
        description={t.seo.contact.description}
      />
      <AppointmentContact />
    </div>
  );
};
