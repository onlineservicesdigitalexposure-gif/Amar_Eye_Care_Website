import { m as motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "../utils/cn";
import { fadeUpVariants } from "../animations/variants";

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  variant?: "outline" | "elevated";
}

export const ServiceCard = ({
  title,
  description,
  icon: Icon,
  variant = "outline"
}: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      className={cn(
        "group relative bg-white rounded-3xl p-8 flex flex-col items-start text-left h-full",
        "transition-all duration-400 hover:-translate-y-2",
        variant === "outline"
          ? "border border-slate-100 shadow-sm hover:border-teal-100 hover:shadow-2xl"
          : "shadow-xl hover:shadow-2xl"
      )}
    >
      {/* Accent Line */}
      <div className="absolute top-0 inset-x-0 h-1.5 rounded-t-3xl bg-teal-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Icon Wrapper */}
      <div className="bg-primary-50 p-4 rounded-2xl text-primary-600 mb-6 group-hover:scale-110 group-hover:bg-teal-50 group-hover:text-teal-600 transition-all duration-300">
        <Icon className="w-8 h-8 stroke-2" />
      </div>

      <h3 className="text-xl md:text-2xl font-bold text-primary-900 mb-3 group-hover:text-teal-600 transition-colors">
        {title.split(' (')[0]}
      </h3>

      <p className="text-sm md:text-base font-medium text-slate-500 leading-relaxed grow">
        {description}
      </p>
    </motion.div>
  );
};
