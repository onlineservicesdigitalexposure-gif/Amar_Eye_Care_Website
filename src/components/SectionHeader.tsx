import { m as motion } from "framer-motion";
import { cn } from "../utils/cn";
import { fadeUpVariants } from "../animations/variants";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
  dark?: boolean;
}

export const SectionHeader = ({ 
  title, 
  subtitle, 
  align = "left", 
  className,
  dark = false 
}: SectionHeaderProps) => {
  return (
    <motion.div
      variants={fadeUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center mx-auto max-w-3xl",
        align === "right" && "text-right ml-auto",
        className
      )}
    >
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4",
        dark ? "text-white" : "text-primary-900"
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          "text-base md:text-lg lg:text-xl font-medium leading-relaxed max-w-2xl",
          dark ? "text-slate-400" : "text-slate-500",
          align === "center" && "mx-auto"
        )}>
          {subtitle}
        </p>
      )}
      <div className={cn(
        "h-1.5 w-20 rounded-full mt-6",
        dark ? "bg-teal-500/50" : "bg-teal-500",
        align === "center" && "mx-auto",
        align === "right" && "ml-auto"
      )} />
    </motion.div>
  );
};
