export interface Course {
  id: string;
  imageUrl: string;
  title: string;
  code: string;
  benefit: string;
  benefitType: "certificate" | "diploma" | "none";
  rating: number;
  reviewCount: number;
  date: string;
  seatsOrStatus: string;
  isFull: boolean;
  subject: string;
}

export const mockCourses: Course[] = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop",
    title: "Creative Writing",
    code: "SW20246",
    benefit: "Certificate",
    benefitType: "certificate",
    rating: 4.8,
    reviewCount: 32,
    date: "17 สิงหาคม 2569",
    seatsOrStatus: "คอร์สเต็ม",
    isFull: true,
    subject: "Computer Science"
  },
  {
    id: "2",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    title: "Digital Marketing",
    code: "DM30112",
    benefit: "Diploma",
    benefitType: "diploma",
    rating: 4.6,
    reviewCount: 58,
    date: "12 กันยายน 2569",
    seatsOrStatus: "2,500 ที่นั่ง",
    isFull: false,
    subject: "Computer Science"
  },
  {
    id: "3",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop",
    title: "Quantum Mechanics & Astrophysics",
    code: "PH20311",
    benefit: "Certificate",
    benefitType: "certificate",
    rating: 4.9,
    reviewCount: 120,
    date: "25 ตุลาคม 2569",
    seatsOrStatus: "120 ที่นั่ง",
    isFull: false,
    subject: "Physics"
  },
  {
    id: "4",
    imageUrl: "https://images.unsplash.com/photo-1532187863486-abf9d39d66e8?q=80&w=600&auto=format&fit=crop",
    title: "Organic Chemistry Laboratory",
    code: "CH10202",
    benefit: "Certificate",
    benefitType: "certificate",
    rating: 4.5,
    reviewCount: 45,
    date: "5 พฤศจิกายน 2569",
    seatsOrStatus: "คอร์สเต็ม",
    isFull: true,
    subject: "Chemistry"
  }
];
