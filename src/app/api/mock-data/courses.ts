import { CourseCardProps } from "@/components/CourseCard";

export interface InstructorInfo {
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
}

export interface CourseDetailInfo {
  description: string;
  objectives: string[];
  duration: string;
  benefit?: string;
}

export interface CourseItem extends CourseCardProps {
  id: string;
  subject: string;
  
  // Nested structures for API standardization
  details?: CourseDetailInfo;
  instructorInfo?: InstructorInfo;
}

export const individualCourses: CourseItem[] = [
  {
    id: "ind-1",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
    title: "Creative Writing",
    code: "SW20246",
    benefit: "Certificate",
    benefitType: "certificate",
    rating: 4.8,
    reviewCount: 32,
    date: "17 สิงหาคม 2569",
    seatsOrStatus: "คอร์สเต็ม",
    isFull: true,
    subject: "Computer Science",
    instructor: "ครูอารีย์ วิทยกุล",
    
    // API Nested Data
    details: {
      description: "คอร์สเรียน Creative Writing ที่จะช่วยปูพื้นฐานการเขียนเชิงสร้างสรรค์ ตั้งแต่การสร้างสรรค์ตัวละคร การพล็อตเรื่อง ไปจนถึงเทคนิคการเรียบเรียงภาษาที่ทรงพลังและดึงดูดใจผู้อ่าน เหมาะสำหรับผู้ที่ต้องการเริ่มต้นเขียนนวนิยาย บทละคร หรือบทความสร้างสรรค์",
      objectives: [
        "เข้าใจหลักการสร้างสรรค์ตัวละครที่มีมิติอย่างชัดเจน",
        "เรียนรู้โครงสร้างการเล่าเรื่องและการวางพล็อตเรื่องประเภทต่างๆ",
        "ฝึกฝนการใช้ภาษาและน้ำเสียงในการบรรยายเรื่องราวอย่างมืออาชีพ",
        "รับใบประกาศนียบัตรรับรองวิทยฐานะหลังสำเร็จหลักสูตร"
      ],
      duration: "16 ชั่วโมงการเรียนรู้",
      benefit: "Certificate"
    },
    instructorInfo: {
      name: "ครูอารีย์ วิทยกุล",
      title: "อาจารย์ผู้เชี่ยวชาญการเขียนเชิงสร้างสรรค์และวรรณกรรมร่วมสมัย",
      bio: "มีประสบการณ์สอนเขียนวรรณกรรมสร้างสรรค์มานานกว่า 12 ปี และได้รับรางวัลวรรณกรรมสร้างสรรค์ระดับประเทศหลายรางวัล",
      avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "ind-2",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop",
    title: "Digital Marketing",
    code: "DM30112",
    benefit: "Diploma",
    benefitType: "diploma",
    rating: 4.6,
    reviewCount: 58,
    date: "12 กันยายน 2569",
    registeredSeats: 500,
    maxSeats: 3000,
    subject: "Computer Science",
    instructor: "ครูพัชราภรณ์ ตั้งจิต",
    
    // API Nested Data
    details: {
      description: "ศึกษาแนวทางและกลยุทธ์การทำการตลาดดิจิทัลในยุคปัจจุบัน ครอบคลุมการทำ SEO, SEM, Social Media Marketing, Content Marketing และการวิเคราะห์ข้อมูลผู้บริโภค เพื่อสร้างการเติบโตอย่างยั่งยืนให้กับแบรนด์และธุรกิจ",
      objectives: [
        "เข้าใจพื้นฐานและเครื่องมือต่างๆ ในการทำการตลาดออนไลน์",
        "ออกแบบและวางแผนแคมเปญโฆษณาบนโซเชียลมีเดียได้อย่างมีประสิทธิภาพ",
        "เรียนรู้เทคนิคการทำ SEO เพื่อติดอันดับค้นหาหน้าแรกของ Google",
        "สามารถอ่านและวิเคราะห์ข้อมูลพฤติกรรมลูกค้าผ่านเครื่องมือ Analytics"
      ],
      duration: "24 ชั่วโมงการเรียนรู้",
      benefit: "Diploma"
    },
    instructorInfo: {
      name: "ครูพัชราภรณ์ ตั้งจิต",
      title: "ที่ปรึกษากลยุทธ์การตลาดดิจิทัลสำหรับแบรนด์และธุรกิจยุคใหม่",
      bio: "นักการตลาดดิจิทัลประสบการณ์กว่า 8 ปี เป็นเบื้องหลังความสำเร็จของแบรนด์สินค้าและการท่องเที่ยวระดับประเทศ",
      avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "ind-3",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop",
    title: "Data Science Fundamentals",
    code: "DS10101",
    benefit: "Certificate",
    benefitType: "certificate",
    rating: 4.9,
    reviewCount: 120,
    date: "5 มกราคม 2570",
    registeredSeats: 1000,
    maxSeats: 4000,
    subject: "Statistics",
    instructor: "ครูสมเจตน์ รัตนภักดี",
    
    // API Nested Data
    details: {
      description: "เริ่มต้นก้าวเข้าสู่อาชีพวิทยาการข้อมูล (Data Science) ปูพื้นฐานการจัดการข้อมูล การใช้เครื่องมือภาษา Python สำหรับวิเคราะห์เชิงลึก การทำ Data Visualization และสร้างโมเดล Machine Learning เบื้องต้น",
      objectives: [
        "เข้าใจกระบวนการทำงานของนักวิทยาการข้อมูลเบื้องต้น",
        "สามารถเขียนโปรแกรม Python เพื่อจัดการและคัดกรองข้อมูลดิบได้",
        "สร้างรายงานและกราฟสรุปข้อมูลแบบอินเตอร์แอคทีฟได้ชัดเจน",
        "ทำความเข้าใจโมเดลทำนายผลลัพธ์เชิงสถิติขั้นต้น"
      ],
      duration: "30 ชั่วโมงการเรียนรู้",
      benefit: "Certificate"
    },
    instructorInfo: {
      name: "ครูสมเจตน์ รัตนภักดี",
      title: "ผู้เชี่ยวชาญด้านวิทยาการข้อมูลและระบบการประมวลผลคลาวด์",
      bio: "อดีตนักพัฒนาซอฟต์แวร์ระดับอาวุโสและที่ปรึกษาด้าน Big Data ให้กับสถาบันการเงินและสตาร์ทอัพเทคโนโลยีชั้นนำ",
      avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "ind-4",
    imageUrl: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=600&auto=format&fit=crop",
    title: "Photography Basics",
    code: "PH10001",
    benefit: "Certificate",
    benefitType: "certificate",
    rating: 4.7,
    reviewCount: 45,
    date: "20 มกราคม 2570",
    registeredSeats: 50,
    maxSeats: 200,
    subject: "Art",
    instructor: "ครูกิตติพงษ์ แก้วสกุล",
    
    // API Nested Data
    details: {
      description: "เรียนรู้ศิลปะและเทคนิคการถ่ายภาพตั้งแต่พื้นฐาน การจัดองค์ประกอบภาพ ทฤษฎีแสง การควบคุมความไวแสง (ISO), รูรับแสง (Aperture), และความเร็วชัตเตอร์ (Shutter Speed) เพื่อถ่ายภาพให้สวยงามในสถานการณ์ต่างๆ",
      objectives: [
        "เข้าใจหลักสามเหลี่ยมการรับแสงในการตั้งค่ากล้องถ่ายรูป",
        "เรียนรู้การจัดองค์ประกอบภาพด้วยกฎสามส่วนและเส้นนำสายตา",
        "ฝึกทักษะการถ่ายภาพบุคคล ทิวทัศน์ และภาพแนวสตรีทในสภาวะแสงธรรมชาติ",
        "สามารถแต่งภาพเบื้องต้นด้วยโปรแกรม Lightroom ได้"
      ],
      duration: "10 ชั่วโมงการเรียนรู้",
      benefit: "Certificate"
    },
    instructorInfo: {
      name: "ครูกิตติพงษ์ แก้วสกุล",
      title: "ช่างภาพมืออาชีพและผู้สร้างสรรค์เนื้อหาภาพถ่ายสารคดี",
      bio: "ช่างภาพและบล็อกเกอร์ผู้เดินทางถ่ายภาพเชิงวิถีชีวิตและวัฒนธรรมทั่วเอเชีย ประสบการณ์สอนและจัดนิทรรศการภาพถ่ายมากกว่า 15 ปี",
      avatarUrl: "https://images.unsplash.com/photo-1628157582853-a796fa650a6a?q=80&w=200&auto=format&fit=crop"
    }
  },
];

export const studentCourses: CourseItem[] = [
  {
    id: "std-1",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    title: "Innovative Strategies in Tech Development",
    code: "คณิตศาสตร์ 10123",
    gradeLevel: "ม.1",
    instructor: "ครูพินิจกุล",
    date: "23 สิงหาคม 2569",
    seatsOrStatus: "คอร์สเต็ม",
    isFull: true,
    subject: "Engineering",
    
    // API Nested Data
    details: {
      description: "เรียนรู้หลักสูตรวิเคราะห์และวางกลยุทธ์ด้านเทคโนโลยีสำหรับนักเรียนมัธยมศึกษาตอนต้น ปูพื้นฐานการทำโปรเจกต์เชิงนวัตกรรมและการแก้ไขโจทย์ปัญหาแบบคิดนอกกรอบในยุคสารสนเทศ",
      objectives: [
        "สร้างความคุ้นเคยกับการวิเคราะห์ปัญหาเทคโนโลยีในชีวิตประจำวัน",
        "เรียนรู้ขั้นตอนการวางแผนและทำแผนผังความคิดโครงงาน",
        "นำเสนอแผนพัฒนาไอเดียเทคโนโลยีอย่างง่ายและมีประสิทธิภาพ",
        "ฝึกทักษะการทำงานร่วมกันเป็นทีมผ่านเวิร์กช็อปออนไลน์"
      ],
      duration: "12 ชั่วโมงการเรียนรู้"
    },
    instructorInfo: {
      name: "ครูพินิจกุล",
      title: "ครูผู้เชี่ยวชาญการจัดการเรียนรู้ประจำกลุ่มสาระวิทยาศาสตร์และเทคโนโลยี",
      bio: "ได้รับรางวัลการจัดการเรียนรู้ยอดเยี่ยมประจำปีการศึกษา เน้นกิจกรรมที่เด็กๆ ได้คิดและทดลองอย่างเป็นรูปธรรม",
      avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "std-2",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    title: "Sustainable Growth through Economic Marketing",
    code: "คณิตศาสตร์ 10123",
    gradeLevel: "ม.1",
    instructor: "ครูพินิจกุล",
    date: "12 กันยายน 2569",
    registeredSeats: 500,
    maxSeats: 2000,
    subject: "Computer Science",
    
    // API Nested Data
    details: {
      description: "ทำความเข้าใจพื้นฐานระบบเศรษฐศาสตร์และหลักการตลาดสำหรับนักเรียน ส่งเสริมการคิดเชิงพาณิชย์สร้างสรรค์ การทำธุรกิจส่วนตัวขนาดย่อม และการเติบโตอย่างเป็นมิตรต่อสังคมและสิ่งแวดล้อม",
      objectives: [
        "เข้าใจแก่นคำศัพท์เศรษฐศาสตร์เบื้องต้นที่ใกล้ตัวผู้เรียน",
        "หัดวิเคราะห์ความต้องการของผู้ซื้อและการตั้งราคาสินค้าเบื้องต้น",
        "จำลองแผนการขายผลิตภัณฑ์ในโรงเรียนอย่างถูกต้องและสร้างกำไร",
        "เข้าใจความรับผิดชอบต่อสิ่งแวดล้อมในการดำเนินกิจกรรมทางเศรษฐกิจ"
      ],
      duration: "14 ชั่วโมงการเรียนรู้"
    },
    instructorInfo: {
      name: "ครูพินิจกุล",
      title: "ครูผู้เชี่ยวชาญการสอนวิชาสังคมศึกษาและเศรษฐศาสตร์ประยุกต์",
      bio: "เน้นกระบวนการเรียนรู้แบบ Active Learning ให้ลงมือสร้างโมเดลธุรกิจจำลองและทดลองขายจริงเพื่อเรียนรู้ประสบการณ์ตรง",
      avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "std-3",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
    title: "Innovative Strategies for Digital Engagement",
    code: "วิทยาศาสตร์ 20245",
    gradeLevel: "ม.2",
    instructor: "ครูสมชาย",
    date: "5 มกราคม 2570",
    registeredSeats: 800,
    maxSeats: 2000,
    subject: "Computer Science",
    
    // API Nested Data
    details: {
      description: "เรียนรู้พฤติกรรมการมีส่วนร่วมและรักษาสิทธิบนสื่อดิจิทัลอย่างสร้างสรรค์และปลอดภัย ฝึกทักษะการสร้างตัวตน (Personal Brand) เชิงบวก และการใช้ประโยชน์จากโซเชียลมีเดียเพื่อสร้างโอกาสการเรียนรู้ใหม่ๆ",
      objectives: [
        "ตระหนักรู้สิทธิ หน้าที่ และความรับผิดชอบในการสื่อสารออนไลน์",
        "มีทักษะคัดกรองข้อมูลข่าวสารที่ถูกต้องและหลีกเลี่ยงข่าวปลอม",
        "สร้างคอนเทนต์สำหรับพอร์ตโฟลิโอสะสมผลงานดิจิทัล",
        "รับรู้วิธีป้องกันความเป็นส่วนตัวและภัยคุกคามไซเบอร์เบื้องต้น"
      ],
      duration: "10 ชั่วโมงการเรียนรู้"
    },
    instructorInfo: {
      name: "ครูสมชาย",
      title: "ครูผู้เชี่ยวชาญการสอนเทคโนโลยีสารสนเทศและวิทยาการคำนวณ",
      bio: "มีความมุ่งมั่นที่จะพัฒนาทักษะพลเมืองดิจิทัล (Digital Citizenship) ให้แก่เยาวชนไทยเพื่อให้ก้าวทันยุคสารสนเทศอย่างปลอดภัย",
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "std-4",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop",
    title: "Creative Problem Solving in UI/UX Design",
    code: "ศิลปะ 30567",
    gradeLevel: "ม.3",
    instructor: "ครูพิชญา",
    date: "17 สิงหาคม 2569",
    registeredSeats: 96,
    maxSeats: 100,
    subject: "Computer Science",
    
    // API Nested Data
    details: {
      description: "เรียนรู้กระบวนการคิดเชิงออกแบบ (Design Thinking) ผ่านโลกของการพัฒนาส่วนติดต่อผู้ใช้งาน (UI) และประสบการณ์การใช้งาน (UX) สำหรับแอปพลิเคชันมือถือและเว็บไซต์ ฝึกปฏิบัติสร้างเว็บต้นแบบอย่างเป็นระบบ",
      objectives: [
        "เข้าใจความแตกต่างและการเชื่อมโยงระหว่างศาสตร์ UI และ UX",
        "ฝึกการสร้างสัมภาษณ์ผู้ใช้งานเพื่อรวบรวมความต้องการที่แท้จริง",
        "ออกแบบลวดลายโครงร่างแอปพลิเคชัน (Wireframe) และหน้าจอสีสันจริง",
        "ทดลองสร้างลิงก์การใช้งานหน้าจอจำลอง (Interactive Prototype) บน Figma"
      ],
      duration: "18 ชั่วโมงการเรียนรู้"
    },
    instructorInfo: {
      name: "ครูพิชญา",
      title: "หัวหน้ากลุ่มวิชาเทคโนโลยีการออกแบบสื่อประสม",
      bio: "ผู้ออกแบบหลักสูตรการสร้างสื่อดิจิทัลและร่วมมือกับมหาวิทยาลัยเทคโนโลยีชั้นนำในการสร้างเด็กที่มีความสามารถด้าน UI/UX",
      avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    }
  },
];

export const teacherCourses: CourseItem[] = [
  {
    id: "tch-1",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
    title: "Innovative Teaching Strategies for Modern Classrooms",
    code: "การสอนสำหรับครู SW20234",
    benefitType: "none",
    date: "5 ตุลาคม 2569",
    registeredSeats: 96,
    maxSeats: 100,
    subject: "Engineering",
    instructor: "ดร.วิชัย รุ่งเรือง",
    
    // API Nested Data
    details: {
      description: "หลักสูตรพัฒนาศักยภาพผู้สอนในการจัดคลาสเรียนยุคใหม่ เน้นเทคนิคการจัดการชั้นเรียนด้วยเกม (Gamification) เทคโนโลยีทางการศึกษา (EdTech) และกระบวนการวิจัยในชั้นเรียนเพื่อปรับปรุงการเรียนการสอนรายบุคคล",
      objectives: [
        "สามารถนำเครื่องมือช่วยสอนออนไลน์มาบูรณาการการสอนตามธรรมชาติวิชา",
        "ออกแบบกิจกรรมการจัดห้องเรียนกลับทาง (Flipped Classroom) ได้",
        "สร้างระบบคะแนนและการวัดประเมินผลเชิงบวกที่เป็นมิตรต่อนักเรียน",
        "จัดทำกระบวนการแก้ไขปัญหาผู้เรียนด้วยวิจัยในชั้นเรียนเบื้องต้น"
      ],
      duration: "20 ชั่วโมงการเรียนรู้"
    },
    instructorInfo: {
      name: "ดร.วิชัย รุ่งเรือง",
      title: "ศึกษานิเทศก์เชี่ยวชาญพิเศษด้านนวัตกรรมหลักสูตรและการเรียนรู้",
      bio: "มีประวัติการวิจัยและพัฒนาวิชาชีพครูระดับประเทศและทำงานขับเคลื่อนการปรับโครงสร้างการศึกษาไทยในระดับสากล",
      avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "tch-2",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    title: "Advanced Mathematics Tutoring",
    code: "การจัดการเรียนรู้การสอนวิชาคณิตศาสตร์ขั้นสูง MATH205",
    benefitType: "none",
    date: "10 มกราคม 2570",
    registeredSeats: 30,
    maxSeats: 100,
    subject: "Statistics",
    instructor: "ผศ.ดร.มนตรี ศักดิ์เจริญ",
    
    // API Nested Data
    details: {
      description: "เทคนิคระดับสูงสำหรับการสอนคณิตศาสตร์ระดับโรงเรียนมัธยมศึกษา เพื่อกระตุ้นให้เด็กรักในคณิตศาสตร์และการคิดคำนวณขั้นสูง ปูทางเพื่อเตรียมพร้อมสอบแข่งขัน สสวท. และคณิตศาสตร์โอลิมปิกวิชาการ",
      objectives: [
        "ทำความเข้าใจวิธีการปูตรรกะคณิตศาสตร์ที่ซับซ้อนให้เห็นภาพเชิงประยุกต์",
        "ฝึกการใช้อุปกรณ์จำลองสถานการณ์ทางเรขาคณิตด้วยคอมพิวเตอร์",
        "วิเคราะห์ข้อสอบคณิตศาสตร์โอลิมปิกและแนวทางแก้ไขสูตรแบบลัดเชิงตรรกะ",
        "แนะแนวการให้กำลังใจผู้เรียนที่กลัวการคิดคำนวณตัวเลขและสัญลักษณ์"
      ],
      duration: "16 ชั่วโมงการเรียนรู้"
    },
    instructorInfo: {
      name: "ผศ.ดร.มนตรี ศักดิ์เจริญ",
      title: "อาจารย์ประจำภาควิชาคณิตศาสตร์การสอน คณะศึกษาศาสตร์",
      bio: "ผู้เขียนตำราคณิตศาสตร์ระดับชาติและผู้เชี่ยวชาญพัฒนาหลักสูตรติวเตอร์สำหรับการเตรียมตัวสอบแข่งขันโอลิมปิกวิชาการ",
      avatarUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "tch-3",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
    title: "Creative Writing Seminar",
    code: "สัมมนาการเขียนเชิงสร้างสรรค์ ENG102",
    benefitType: "none",
    date: "22 มกราคม 2570",
    registeredSeats: 25,
    maxSeats: 100,
    subject: "Computer Science",
    instructor: "ครูจีรวรรณ ศิริวงศ์",
    
    // API Nested Data
    details: {
      description: "กระบวนการจัดฝึกอบรมเชิงปฏิบัติการให้แก่คุณครูสอนวิชาภาษาอังกฤษและภาษาไทย เพื่อให้สามารถออกแบบหลักสูตรวิชาเลือก 'การเขียนเชิงสร้างสรรค์' ในโรงเรียนได้อย่างสนุกสนาน ทันสมัย และยึดผู้เรียนเป็นหลัก",
      objectives: [
        "พัฒนาทักษะการตั้งหัวข้อเขียนอิสระ (Prompt) ที่สร้างสรรค์และลึกซึ้ง",
        "เรียนรู้วิธีการจัดกิจกรรมสัมมนาเพื่อวิจารณ์ผลงานเขียนอย่างสุภาพ (Workshop Circle)",
        "เข้าใจวิธีการวัดประเมินผลงานศิลปะการเขียนโดยไม่อิงเกณฑ์สอบมาตรฐานปกติ",
        "การคัดสรรงานเขียนของเด็กๆ มารวมเล่มเผยแพร่สาธารณะ"
      ],
      duration: "15 ชั่วโมงการเรียนรู้"
    },
    instructorInfo: {
      name: "ครูจีรวรรณ ศิริวงศ์",
      title: "หัวหน้าภาควิชาภาษาต่างประเทศและกวีนิพนธ์ประยุกต์",
      bio: "นักแปลวรรณกรรมที่มีผลงานตีพิมพ์แพร่หลายและกูรูด้านการจัดกิจกรรมศิลปะบำบัดด้วยการเขียนบันทึกประจำวัน",
      avatarUrl: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=200&auto=format&fit=crop"
    }
  },
  {
    id: "tch-4",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    title: "Physics Experiment Design",
    code: "ห้องปฏิบัติการฟิสิกส์ LAB401",
    benefitType: "none",
    date: "15 มกราคม 2570",
    registeredSeats: 30,
    maxSeats: 100,
    subject: "Physics",
    instructor: "ครูสิทธิชัย เกียรติวร",
    
    // API Nested Data
    details: {
      description: "การสอนวิทยาศาสตร์กายภาพจะไร้ประโยชน์หากปราศจากการทดลองจริง หลักสูตรนี้จะพาคุณครูผู้สอนฟิสิกส์ร่วมมือกันออกแบบอุปกรณ์ทดลองแบบประหยัดในห้องปฏิบัติการ แต่แสดงผลการค้นหาตามทฤษฎีกลศาสตร์ ไฟฟ้า และแสงได้อย่างแม่นยำ",
      objectives: [
        "เข้าใจเทคนิคการสร้างชุดการทดลองที่มีความปลอดภัยสูงในโรงเรียน",
        "การใช้วัสดุเหลือใช้นำมารีไซเคิลเป็นอุปกรณ์วัดแรงเคลื่อนไฟฟ้าและกลศาสตร์",
        "วิเคราะห์และบันทึกความคลาดเคลื่อนทางสถิติจากการทดลองเพื่อสอนวิธีวิจัยให้เด็ก",
        "ฝึกการสาธิตการทดลองแบบดึงดูดใจผ่านสื่อออนไลน์"
      ],
      duration: "18 ชั่วโมงการเรียนรู้"
    },
    instructorInfo: {
      name: "ครูสิทธิชัย เกียรติวร",
      title: "ที่ปรึกษางานทดลองวิทยาศาสตร์ในสถานศึกษาเครือข่ายความร่วมมือวิชาการ",
      bio: "ผู้ประดิษฐ์ชุดทดลองฟิสิกส์ระดับมัธยมศึกษาได้รับรางวัลผลงานสิ่งประดิษฐ์ทางการศึกษาดีเด่นหลายรายการ",
      avatarUrl: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop"
    }
  },
];

export const mockCourses: CourseItem[] = [
  ...individualCourses,
  ...studentCourses,
  ...teacherCourses
];
