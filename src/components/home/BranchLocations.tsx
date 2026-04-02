import { m as motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation2, PhoneCall } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { cn } from "../../utils/cn";
import { fadeUpVariants, staggerContainer } from "../../animations/variants";

export const BranchLocations = () => {
  const branchesData = [
    {
      id: "main",
      name: "Main Branch (Kolkata)",
      isPrimary: true,
      address: [
        "1st Floor, Kidwai Apartment",
        "40/1 Rafi Ahmed Kidwai Road",
        "Kolkata - 700016"
      ],
      landmark: "Near Bata More, Opposite to Trikon Park",
      timing: "11 AM - 2 PM & 5 PM - 8 PM (Mon - Sat)",
      phones: ["+91 91477 41140", "+91 82740 71117"],
      mainActionPhone: "9147741140",
      mapLink: "https://maps.google.com/?q=40/1+Rafi+Ahmed+Kidwai+Road+Kolkata",
    },
    {
      id: "amtala (Murshidabad)",
      name: "Amtala Branch",
      isPrimary: false,
      address: [
        "AMR Eye Centre",
        "Romana Clinic",
        "Opposite To Amtala Haat"
      ],
      landmark: "",
      timing: "Two weeks intervally on Sunday",
      phones: ["+91 74077 59050", "+91 86429 23439"],
      mainActionPhone: "7407759050",
      mapLink: "https://maps.google.com/?q=Romana+Clinic+Amtala+Haat",
    }
  ];

  return (
    <section id="branches" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-50 rounded-l-full opacity-50 blur-3xl z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          title="Our Clinic Locations"
          subtitle="Visit us at our primary consulting center in Kolkata or our specialized branch in Amtala for world-class eye care."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12"
        >
          {branchesData.map((branch) => (
            <motion.div
              key={branch.id}
              variants={fadeUpVariants}
              className={cn(
                "group relative bg-white rounded-4xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full",
                branch.isPrimary
                  ? "border-2 border-primary-200 shadow-xl shadow-primary-900/5 hover:border-primary-400 hover:shadow-2xl"
                  : "border border-slate-100 shadow-lg shadow-slate-200/50 hover:border-teal-200 hover:shadow-xl"
              )}
            >
              {branch.isPrimary && (
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-primary-600 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-md">
                  Primary Location
                </div>
              )}

              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                <div className={cn(
                  "p-4 rounded-2xl",
                  branch.isPrimary ? "bg-primary-50 text-primary-600" : "bg-teal-50 text-teal-600"
                )}>
                  <MapPin className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-primary-800 transition-colors">
                    {branch.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-6 grow">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Clinic Address</h4>
                    <div className="text-slate-600 leading-relaxed text-sm">
                      {branch.address.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                      {branch.landmark && (
                        <p className="mt-2 text-primary-600 font-medium bg-primary-50 inline-block px-2 py-1 rounded">
                          {branch.landmark}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Consultation Hours</h4>
                    <p className="text-slate-600 text-sm font-medium">{branch.timing}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-slate-400 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">Contact Numbers</h4>
                    <div className="text-slate-600 font-medium text-sm space-y-1">
                      {branch.phones.map((phone, i) => (
                        <p key={i}>{phone}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-6 border-t border-slate-100">
                <a
                  href={`tel:${branch.mainActionPhone}`}
                  aria-label={`Call ${branch.name}`}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold transition-all duration-300",
                    branch.isPrimary
                      ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20 hover:bg-primary-700 hover:shadow-xl hover:-translate-y-0.5"
                      : "bg-teal-500 text-white shadow-lg shadow-teal-500/20 hover:bg-teal-600 hover:shadow-xl hover:-translate-y-0.5"
                  )}
                >
                  <PhoneCall className="w-5 h-5" />
                  Call Location
                </a>
                
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Get directions to ${branch.name}`}
                  className={cn(
                    "flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold border-2 transition-all duration-300",
                    branch.isPrimary
                      ? "border-primary-100 text-primary-700 hover:bg-primary-50 hover:border-primary-200"
                      : "border-teal-100 text-teal-700 hover:bg-teal-50 hover:border-teal-200"
                  )}
                >
                  <Navigation2 className="w-5 h-5" />
                  Get Directions
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
