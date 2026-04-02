export interface ServiceData {
  title: string;
  slug: string;
  shortDescription: string;
  category: "Surgical" | "Diagnostic" | "Laser Care";
}

export const servicesData: ServiceData[] = [
  {
    title: "Painless Cataract (Phaco) Surgery",
    slug: "painless-cataract-surgery",
    category: "Surgical",
    shortDescription: "Advanced micro-incision cataract surgery using state-of-the-art ultrasonic technology for rapid visual recovery.",
  },
  {
    title: "Glaucoma Management",
    slug: "glaucoma-management",
    category: "Surgical",
    shortDescription: "Comprehensive management and surgical interventions to reduce intraocular pressure and prevent optic nerve damage.",
  },
  {
    title: "Vision Correction & Spectacle Removal",
    slug: "vision-correction",
    category: "Laser Care",
    shortDescription: "Customized refractive solutions to restore perfect visual acuity and reduce dependency on glasses.",
  },
  {
    title: "Pediatric & Squint Eye Care",
    slug: "pediatric-eye-care",
    category: "Surgical",
    shortDescription: "Specialized screenings, amblyopia management, and squint correction for healthy child visual development.",
  },
  {
    title: "Diabetic Retinopathy Screening",
    slug: "diabetic-retinopathy",
    category: "Laser Care",
    shortDescription: "Meticulous screening and advanced laser treatments to preserve long-term retinal health in diabetic patients.",
  },
  {
    title: "Advanced Eye Diagnostics",
    slug: "advanced-diagnostics",
    category: "Diagnostic",
    shortDescription: "State-of-the-art ocular imaging, OCT, and precise biometric analysis for accurate treatment planning.",
  },
];
