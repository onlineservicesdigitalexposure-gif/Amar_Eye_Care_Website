import clinicInt1 from '../assets/Gallery/Clinic Interior1.jpg';
import clinicInt2 from '../assets/Gallery/Clinic Interior2.jpg';
import equip1 from '../assets/Gallery/Equipment1.jpg';
import equip2 from '../assets/Gallery/Equipment2.jpg';
import equip3 from '../assets/Gallery/Equipment3.jpeg';
import patient1 from '../assets/Gallery/Patient Care1.jpg';
import surgery1 from '../assets/Gallery/Surgery Room1.jpg';
import surgery2 from '../assets/Gallery/Surgery Room2.jpg';

// Surgery Results (Before/After)
import before1 from '../assets/Surgery/BeforeSurgery1.jpg';
import after1 from '../assets/Surgery/AfterSurgery1.jpg';
import before2 from '../assets/Surgery/BeforeSurgery2.jpg';
import after2 from '../assets/Surgery/AfterSurgery2.jpg';
import before3 from '../assets/Surgery/BeforeSurgery3.jpg';
import after3 from '../assets/Surgery/AfterSurgery3.jpg';

export interface GalleryImage {
  id: number;
  url: string;
  category: "Clinic Interior" | "Equipment" | "Patient Care" | "Surgery Room";
  alt: string;
}

export const galleryData: GalleryImage[] = [
  { id: 7, category: "Patient Care", url: patient1, alt: "Doctor consulting a patient" },

  { id: 3, category: "Equipment", url: equip1, alt: "Advanced OCT Machine" },
  { id: 4, category: "Equipment", url: equip2, alt: "Phacoemulsification Console" },
  { id: 8, category: "Equipment", url: equip3, alt: "Vision Testing" },

  { id: 1, category: "Clinic Interior", url: clinicInt1, alt: "Modern Reception Area" },
  { id: 2, category: "Clinic Interior", url: clinicInt2, alt: "Comfortable Waiting Lounge" },
  
  { id: 5, category: "Surgery Room", url: surgery1, alt: "Sterile Operating Theater" },
  { id: 6, category: "Surgery Room", url: surgery2, alt: "Laser Vison Correction Suite" }
];

export interface SurgeryResult {
  id: number;
  before: string;
  after: string;
  title: string;
  description: string;
}

export const surgeryResults: SurgeryResult[] = [
  {
    id: 1,
    before: before1,
    after: after1,
    title: "Cataract Transformation",
    description: "Successful micro-incision surgery restoring full clarity."
  },
  {
    id: 2,
    before: before2,
    after: after2,
    title: "Visual Restoration",
    description: "Precision treatment for complex ocular conditions."
  },
  {
    id: 3,
    before: before3,
    after: after3,
    title: "Surgical Excellence",
    description: "Advanced surgical outcomes for optimal eye health."
  }
];
