import clinicInt1 from '../assets/Gallery/Clinic Interior1.jpg';
import clinicInt2 from '../assets/Gallery/Clinic Interior2.jpg';
import equip1 from '../assets/Gallery/Equipment1.jpg';
import equip2 from '../assets/Gallery/Equipment2.jpg';
import patient1 from '../assets/Gallery/Patient Care1.jpg';
import patient2 from '../assets/Gallery/Patient Care2.jpg';
import patient3 from '../assets/Gallery/Patient Care3.jpg';
import patient4 from '../assets/Gallery/Patient Care4.jpg';
import patient5 from '../assets/Gallery/Patient Care5.jpg';
import patient6 from '../assets/Gallery/Patient Care6.jpg';
import patient7 from '../assets/Gallery/Patient Care7.jpg';
import surgery1 from '../assets/Gallery/Surgery Room1.jpg';
import surgery2 from '../assets/Gallery/Surgery Room2.jpg';

export interface GalleryImage {
  id: number;
  url: string;
  category: "Clinic Interior" | "Equipment" | "Patient Care" | "Surgery Room";
  alt: string;
}

export const galleryData: GalleryImage[] = [
  { id: 1, category: "Clinic Interior", url: clinicInt1, alt: "Modern Reception Area" },
  { id: 2, category: "Clinic Interior", url: clinicInt2, alt: "Comfortable Waiting Lounge" },
  
  { id: 3, category: "Equipment", url: equip1, alt: "Advanced OCT Machine" },
  { id: 4, category: "Equipment", url: equip2, alt: "Phacoemulsification Console" },
  
  { id: 5, category: "Surgery Room", url: surgery1, alt: "Sterile Operating Theater" },
  { id: 6, category: "Surgery Room", url: surgery2, alt: "Laser Vison Correction Suite" },
  
  { id: 7, category: "Patient Care", url: patient1, alt: "Doctor consulting a patient" },
  { id: 8, category: "Patient Care", url: patient2, alt: "Vision Testing" },
  { id: 9, category: "Patient Care", url: patient3, alt: "Slit Lamp Examination" },
  { id: 10, category: "Patient Care", url: patient4, alt: "Comprehensive Eye Exam" },
  { id: 11, category: "Patient Care", url: patient5, alt: "Patient Consultation" },
  { id: 12, category: "Patient Care", url: patient6, alt: "Eye Care Checkup" },
  { id: 13, category: "Patient Care", url: patient7, alt: "Dedicated Patient Service" }
];
