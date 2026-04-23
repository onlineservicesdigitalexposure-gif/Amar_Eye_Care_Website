import { m as motion } from "framer-motion";
import { Eye, Activity, Target, Users, Microchip, Microscope } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { staggerContainer } from "../animations/variants";
import { Link } from "react-router-dom";

export const ServicesGrid = () => {
  const servicesData = [
    {
      id: "painless-cataract-surgery",
      title: "Painless Cataract Surgery",
      description: "PHACOSURGERY and Advanced micro-incision cataract surgery using state-of-the-art technology for rapid visual recovery.",
      icon: Eye,
    },
    {
      id: "glaucoma-management",
      title: "Glaucoma Management",
      description: "Comprehensive management and surgical interventions to reduce intraocular pressure and prevent optic nerve damage.",
      icon: Activity,
    },
    {
      id: "vision-correction",
      title: "Vision Correction",
      description: "Customized refractive solutions to restore perfect visual acuity and reduce dependency on glasses.",
      icon: Target,
    },
    {
      id: "pediatric-eye-care",
      title: "Pediatric Eye Care",
      description: "Specialized screenings, amblyopia management, and squint correction for healthy child visual development.",
      icon: Users,
    },
    {
      id: "diabetic-retinopathy",
      title: "Diabetic Retinopathy",
      description: "Meticulous screening and advanced laser treatments to preserve long-term retinal health in diabetic patients.",
      icon: Microchip,
    },
    {
      id: "advanced-diagnostics",
      title: "Advanced Diagnostics",
      description: "State-of-the-art ocular imaging, OCT, and precise biometric analysis for accurate treatment planning.",
      icon: Microscope,
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            title="Clinical Excellence"
            subtitle="Delivering world-class ophthalmic care using the most advanced diagnostic and surgical technologies available."
            className="mb-0 md:mb-0"
          />
          <Link
            to="/services"
            className="group flex items-center gap-2 text-primary-600 font-bold hover:text-teal-600 transition-colors py-2"
          >
            Explore All Departments
            <span className="w-8 h-0.5 bg-primary-600 group-hover:bg-teal-600 group-hover:w-12 transition-all duration-300"></span>
          </Link>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              variant="elevated"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
