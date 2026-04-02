import type { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading = ({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "flex flex-col gap-3 mb-12",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-primary-900 tracking-tight">
        {title}
      </h2>
      <div className="w-16 h-1 bg-teal-500 rounded-full" />
      {subtitle && (
        <p className="max-w-2xl text-lg text-slate-600 font-medium">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
