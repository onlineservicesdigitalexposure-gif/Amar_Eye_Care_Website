import { m as motion } from "framer-motion";
import { Eye, Activity, Target, Users, Microchip, Microscope } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../utils/cn";
import { fadeUpVariants, staggerContainer } from "../../animations/variants";

export const ServicesGrid = () => {
  const servicesData = [
    {
      id: "painless-cataract-surgery",
      title: "Painless Cataract Surgery",
      description: "Advanced micro-incision cataract surgery using state-of-the-art technology for rapid visual recovery.",
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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <SectionHeading
          title="Clinical Services"
          subtitle="Delivering world-class ophthalmic care using the most advanced diagnostic and surgical technologies available."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={fadeUpVariants}
                className={cn(
                  "group relative bg-white border border-slate-100 rounded-3xl p-8 flex flex-col items-start text-left",
                  "shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-400",
                  "hover:-translate-y-2 hover:shadow-2xl hover:border-teal-100"
                )}
              >
                <div className="absolute top-0 inset-x-0 h-1 rounded-t-3xl bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 mb-6 group-hover:scale-110 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300">
                  <Icon className="w-8 h-8 stroke-2" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-900 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm font-medium text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
