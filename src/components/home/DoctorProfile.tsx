import { m as motion } from "framer-motion";
import { CheckCircle2, ShieldPlus, GraduationCap, Building2, Ribbon } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { fadeUpVariants, staggerContainer } from "../../animations/variants";
import drMohitImg from "../../assets/Dr. Abdul Mohit.jpeg";

export const DoctorProfile = () => {
  return (
    <section id="doctor" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Layout: Image & Badges */}
          <motion.div variants={fadeUpVariants} className="relative">
            {/* Experience Badge - Floating */}
            <div className="absolute top-8 -left-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:flex items-center gap-4">
              <div className="bg-primary-50 p-3 rounded-full text-primary-600">
                <Ribbon className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-2xl leading-none">31+</p>
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Years Exp.</p>
              </div>
            </div>

            {/* Main Portrait Frame */}
            <div className="relative rounded-3xl overflow-hidden aspect-4/5 bg-slate-200 shadow-2xl">
               <img 
                  src={drMohitImg}
                  alt="Dr. Abdul Mohit, Senior Consultant Ophthalmologist" 
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                  decoding="async"
                />
               {/* Elegant Gradient overlay at bottom for depth */}
               <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-900/60 to-transparent"></div>
            </div>

            {/* Registration Badge - Floating Bottom Right */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-teal-500 p-6 rounded-2xl shadow-xl text-white max-w-xs transform rotate-2">
              <ShieldPlus className="w-8 h-8 mb-3 opacity-90" />
              <p className="text-xl font-bold leading-tight mb-1">Regn. No 43361</p>
              <p className="text-teal-100 text-sm font-medium">(WBMC) Registered Consultant</p>
            </div>
          </motion.div>

          {/* Right Layout: Content */}
          <motion.div variants={fadeUpVariants} className="flex flex-col space-y-8 pl-0 lg:pl-8">
            <SectionHeading 
               title="Meet Your Doctor" 
               align="left"
               className="mb-0"
            />
            
            <div className="space-y-2">
               <h3 className="text-4xl font-bold text-primary-900">Dr. Abdul Mohit</h3>
               <p className="text-xl text-teal-600 font-semibold">Senior Consultant Ophthalmologist</p>
            </div>

            {/* Degrees / Qualifications */}
            <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-800 text-sm font-bold border border-primary-100">
                  <GraduationCap className="w-4 h-4" /> MBBS (Hons.)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-800 text-sm font-bold border border-primary-100">
                  M.S. (Ophth)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary-50 text-primary-800 text-sm font-bold border border-primary-100">
                  D.O. (Alig)
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-bold border border-slate-200">
                  F.R.C.S. (Glasgow, UK)
                </span>
            </div>

            {/* Hospital Background */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4">
               <div className="mt-1">
                 <Building2 className="w-6 h-6 text-primary-500" />
               </div>
               <div>
                 <h4 className="text-slate-900 font-bold mb-1">Global Hospital Background</h4>
                 <p className="text-slate-600 bg-white leading-relaxed text-sm">
                   Former Eye Surgeon at <span className="font-semibold text-slate-800">Al Noor Specialist Hospital</span> &amp; <span className="font-semibold text-slate-800">Hera General Hospital</span> (Holy Makkah, KSA). Bringing over three decades of international and domestic clinical excellence.
                 </p>
               </div>
            </div>

            {/* Specializations List */}
            <div className="space-y-4">
              <h4 className="text-slate-900 font-bold text-lg">Key Specializations</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {[
                  "Phaco Surgery (Cataract)",
                  "Glaucoma Management",
                  "Squint Correction",
                  "Diabetic Eye Care",
                  "Complex Ocular Surgeries"
                ].map((spec) => (
                  <li key={spec} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
