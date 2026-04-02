import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export const Breadcrumb = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Map slugs to translation data keys
  const slugToKeyMap: Record<string, string> = {
    "painless-cataract-surgery": "cataract",
    "glaucoma-management": "glaucoma",
    "vision-correction": "vision",
    "pediatric-eye-care": "pediatric",
    "diabetic-retinopathy": "diabetic",
    "advanced-diagnostics": "diagnostics"
  };

  // Don't show breadcrumbs on the home page
  if (pathnames.length === 0) return null;

  const getLabel = (segment: string) => {
    // Check main nav links
    if (segment === "doctor") return t.nav.links.doctor;
    if (segment === "services") return t.nav.links.services;
    if (segment === "branches") return t.nav.links.branches;
    if (segment === "gallery") return t.nav.links.gallery;
    if (segment === "contact") return t.nav.links.contact;

    // Check if it's a service slug
    const translationKey = slugToKeyMap[segment];
    if (translationKey) {
      const localizedService = (t.servicesPage.data as any)[translationKey];
      return localizedService?.title.split(' (')[0] || segment;
    }

    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  return (
    <nav className="flex px-4 py-4 text-slate-500 max-w-7xl mx-auto w-full z-10" aria-label={t.nav.breadcrumbs.aria}>
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link
            to="/"
            className="inline-flex items-center text-sm font-medium text-slate-700 hover:text-teal-600 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            {t.nav.links.home}
          </Link>
        </li>
        {pathnames.map((segment, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={segment}>
              <div className="flex items-center">
                <ChevronRight className="w-4 h-4 text-slate-400 mx-1" />
                {isLast ? (
                  <span className="ml-1 text-sm font-bold text-teal-600 md:ml-2">
                    {getLabel(segment)}
                  </span>
                ) : (
                  <Link
                    to={routeTo}
                    className="ml-1 text-sm font-medium text-slate-700 hover:text-teal-600 md:ml-2 transition-colors"
                  >
                    {getLabel(segment)}
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
