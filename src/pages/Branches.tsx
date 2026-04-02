import { BranchLocations } from "../components/BranchLocations";
import { SEO } from "../components/ui/SEO";
import { useLanguage } from "../context/LanguageContext";

export const Branches = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full">
      <SEO 
        title={t.seo.branches.title}
        description={t.seo.branches.description}
      />
      <BranchLocations />
    </div>
  );
};
