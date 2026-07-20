"use client";

import React from 'react';
import Button from '@/components/Button';
import CourseCard from '@/components/CourseCard';
import Badge from '@/components/Badge';
import SearchBar from '@/components/SearchBar';

const defaultSubjects = [
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Statistics",
  "Engineering",
  "Astronomy",
  "Environmental Science",
  "Geology"
];

const defaultCourses = [
  {
    id: "1",
    imageUrl: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop",
    title: "Creative Writing",
    code: "SW20246",
    benefit: "Certificate",
    benefitType: "certificate" as const,
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
    benefitType: "diploma" as const,
    rating: 4.6,
    reviewCount: 58,
    date: "12 กันยายน 2569",
    seatsOrStatus: "2,500 ที่นั่ง",
    isFull: false,
    subject: "Computer Science"
  }
];

export default function Page() {
  const [subjects, setSubjects] = React.useState<string[]>(defaultSubjects);
  const [selectedSubject, setSelectedSubject] = React.useState<string | null>(null);
  const [courses, setCourses] = React.useState<any[]>(defaultCourses);

  React.useEffect(() => {
    fetch("/api/subjects")
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => setSubjects(data))
      .catch((err) => console.log("Failed to fetch subjects, using defaults", err));
  }, []);

  React.useEffect(() => {
    const url = selectedSubject
      ? `/api/courses?subject=${encodeURIComponent(selectedSubject)}`
      : "/api/courses";
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("API error");
        return res.json();
      })
      .then((data) => setCourses(data))
      .catch((err) => console.log("Failed to fetch courses, using defaults", err));
  }, [selectedSubject]);

  return (
    <main className="min-h-screen bg-light-2 py-[48px] px-[16px] md:px-[32px]">
      <div className="max-w-[896px] w-full mx-auto space-y-[32px] bg-white p-[24px] md:p-[48px] rounded-3xl border border-neutral/50 shadow-xs">
        
        {/* หัวข้อโปรเจกต์ */}
        <div className="space-y-xs">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Ant Design Token Mapping
          </div>
          <h1 className="text-4xl font-bold text-primary">Ant Design Button Showcase</h1>
          <p className="text-md text-description-light">
            ปุ่มคอมโพเนนต์ที่คุณปรับปรุงและเรียบเรียงใหม่ แสดงคุณสมบัติที่อัปเดตล่าสุด
          </p>
        </div>

        {/* หมวดหมู่ 1: Type */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">1. Type (รูปแบบปุ่ม)</h2>
          <div className="flex flex-wrap gap-md items-center">
            <Button type="primary" title="Primary" />
            <Button type="secondary" title="Secondary" />
            <Button type="tertiary" title="Tertiary" />
            <Button type="text" title="Text Button" />
            <Button type="link" title="Link Button" />
            <Button type="disabled" title="Disabled State" />
          </div>
        </div>

        {/* หมวดหมู่ 2: Shape */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">2. Shape (รูปทรง)</h2>
          <div className="flex flex-wrap gap-md items-center">
            <Button type="primary" shape="standard" title="Standard Button" />
            <Button type="primary" shape="circle" title="A" />
            <Button type="secondary" shape="circle" icon={<span>🔍</span>} />
          </div>
        </div>

        {/* หมวดหมู่ 3: Size */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">3. Size (ขนาดปุ่ม)</h2>
          <div className="flex flex-wrap gap-md items-center">
            <Button type="primary" size="small" title="Small Button" />
            <Button type="primary" size="medium" title="Medium Button" />
            <Button type="primary" size="large" title="Large Button" />
          </div>
        </div>

        {/* หมวดหมู่ 4: Danger & State */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">4. Danger & State (สถานะและอันตราย)</h2>
          <div className="flex flex-wrap gap-md items-center">
            <Button type="primary" danger title="Danger Primary" />
            <Button type="secondary" danger title="Danger Secondary" />
            <Button type="tertiary" danger title="Danger Tertiary" />
            <Button type="primary" loading title="Loading Button" />
            <Button type="primary" disabled title="Disabled Prop" />
          </div>
        </div>

        {/* หมวดหมู่ 5: Ghost */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">5. Ghost (ปุ่มโปร่งแสงบนพื้นหลังสีเข้ม)</h2>
          <div className="p-md rounded-2xl bg-secondary/95 flex flex-wrap gap-md items-center">
            <Button type="primary" ghost title="Ghost Primary" />
            <Button type="secondary" ghost title="Ghost Secondary" />
            <Button type="tertiary" ghost title="Ghost Tertiary" />
            <Button type="disabled" ghost title="Ghost Disabled" />
          </div>
        </div>

        {/* หมวดหมู่ 6: Badge Showcase */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">6. Badge (ป้ายกำกับและแท็ก)</h2>
          
          <div className="space-y-md p-md bg-light-2 rounded-2xl">
            {/* Variants & Colors */}
            <div className="space-y-xs">
              <h3 className="text-sm font-semibold text-secondary">6.1 Variants (รูปแบบ) & Colors (สี)</h3>
              
              <div className="space-y-xs">
                <div className="flex flex-wrap gap-xs items-center">
                  <span className="text-xs font-medium w-16 text-description-light">Fill:</span>
                  <Badge variant="fill" color="primary">Primary</Badge>
                  <Badge variant="fill" color="success">Success</Badge>
                  <Badge variant="fill" color="benefit">Benefit</Badge>
                  <Badge variant="fill" color="warning">Warning</Badge>
                  <Badge variant="fill" color="error">Error</Badge>
                  <Badge variant="fill" color="info">Info</Badge>
                </div>
                
                <div className="flex flex-wrap gap-xs items-center">
                  <span className="text-xs font-medium w-16 text-description-light">Outline:</span>
                  <Badge variant="outline" color="primary">Primary</Badge>
                  <Badge variant="outline" color="success">Success</Badge>
                  <Badge variant="outline" color="benefit">Benefit</Badge>
                  <Badge variant="outline" color="warning">Warning</Badge>
                  <Badge variant="outline" color="error">Error</Badge>
                  <Badge variant="outline" color="info">Info</Badge>
                </div>

                <div className="flex flex-wrap gap-xs items-center">
                  <span className="text-xs font-medium w-16 text-description-light">Soft:</span>
                  <Badge variant="soft" color="primary">Primary</Badge>
                  <Badge variant="soft" color="success">Success</Badge>
                  <Badge variant="soft" color="benefit">Benefit</Badge>
                  <Badge variant="soft" color="warning">Warning</Badge>
                  <Badge variant="soft" color="error">Error</Badge>
                  <Badge variant="soft" color="info">Info</Badge>
                </div>
              </div>
            </div>

            {/* Shapes */}
            <div className="space-y-xs">
              <h3 className="text-sm font-semibold text-secondary">6.2 Shapes (รูปทรง)</h3>
              <div className="flex flex-wrap gap-md items-center">
                <Badge shape="pill" color="primary">Pill Shape</Badge>
                <Badge shape="square" color="primary">Square Shape</Badge>
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-xs">
              <h3 className="text-sm font-semibold text-secondary">6.3 Sizes (ขนาด)</h3>
              <div className="flex flex-wrap gap-md items-center">
                <Badge size="small" color="success">Small</Badge>
                <Badge size="medium" color="success">Medium</Badge>
                <Badge size="large" color="success">Large</Badge>
              </div>
            </div>

            {/* Removable & Icons */}
            <div className="space-y-xs">
              <h3 className="text-sm font-semibold text-secondary">6.4 Icon Position & Removable (ปุ่มลบแท็ก)</h3>
              <div className="flex flex-wrap gap-md items-center">
                <Badge color="info" iconPosition="left">
                  <span>ℹ️</span> Info Icon Left
                </Badge>
                <Badge color="info" iconPosition="right">
                  Info Icon Right <span>ℹ️</span>
                </Badge>
                <Badge 
                  color="error" 
                  removable 
                  onRemove={() => alert("ลบแท็กเรียบร้อย!")}
                >
                  คลิกเพื่อลบแท็ก
                </Badge>
              </div>
            </div>

          </div>
        </div>

        {/* หมวดหมู่ 6.5: Subject Filter Interactive Demo */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">6.5 Subject Filters from API (ระบบตัวกรองวิชาที่เชื่อมต่อ API)</h2>
          <div className="p-md bg-light-2 rounded-2xl space-y-md">
            
            {/* แถบตัวกรองรายวิชา (ดึงมาจาก API หลังบ้าน) */}
            <div className="flex flex-wrap gap-xs justify-center">
              {/* ปุ่ม Clear Filter */}
              <Badge
                variant={selectedSubject === null ? "fill" : "outline"}
                color="primary"
                shape="pill"
                size="medium"
                className="cursor-pointer font-medium hover:bg-primary hover:text-white transition-all duration-200"
                onClick={() => setSelectedSubject(null)}
              >
                All Subjects
              </Badge>

              {subjects.map((subj) => {
                const isSelected = selectedSubject === subj;
                return (
                  <Badge
                    key={subj}
                    variant={isSelected ? "fill" : "outline"}
                    color="primary"
                    shape="pill"
                    size="medium"
                    className="cursor-pointer font-medium hover:bg-primary hover:text-white transition-all duration-200"
                    onClick={() => setSelectedSubject(isSelected ? null : subj)}
                  >
                    {subj}
                  </Badge>
                );
              })}
            </div>

            {/* ส่วนแสดงผลข้อมูลการ์ดที่ถูกคัดกรอง */}
            <div className="space-y-xs pt-sm border-t border-neutral/30">
              <div className="flex justify-between items-center text-xs text-description-light mb-sm">
                <span>แสดงผลวิชา: <span className="font-semibold text-secondary">{selectedSubject || "ทั้งหมด"}</span></span>
                <span>พบคอร์สทั้งหมด: <span className="font-semibold text-secondary">{courses.length} คอร์ส</span></span>
              </div>

              {courses.length === 0 ? (
                <div className="text-center py-lg text-xs text-description-light/60">
                  📭 ไม่พบคอร์สเรียนในหมวดหมู่นี้
                </div>
              ) : (
                <div className="flex flex-wrap gap-md justify-center pt-xs">
                  {courses.map((course) => (
                    <CourseCard
                      key={course.id}
                      imageUrl={course.imageUrl}
                      title={course.title}
                      code={course.code}
                      benefit={course.benefit}
                      benefitType={course.benefitType}
                      rating={course.rating}
                      reviewCount={course.reviewCount}
                      date={course.date}
                      seatsOrStatus={course.seatsOrStatus}
                      isFull={course.isFull}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>
        </div>

        {/* หมวดหมู่ 7: Course Card Showcase */}
        <div className="space-y-sm">
          <h2 className="text-xl font-bold border-b border-neutral pb-xxs text-primary">7. Course Card (การ์ดแสดงคอร์สเรียน)</h2>
          <div className="flex flex-wrap gap-md justify-center p-md bg-light-2 rounded-2xl">
            <CourseCard
              imageUrl="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=600&auto=format&fit=crop"
              title="Creative Writing"
              code="SW20246"
              benefit="Certificate"
              benefitType="certificate"
              rating={4.8}
              reviewCount={32}
              date="17 สิงหาคม 2569"
              seatsOrStatus="คอร์สเต็ม"
              isFull={true}
            />
            <CourseCard
              imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
              title="Digital Marketing"
              code="DM30112"
              benefit="Diploma"
              benefitType="diploma"
              rating={4.6}
              reviewCount={58}
              date="12 กันยายน 2569"
              seatsOrStatus="2,500 ที่นั่ง"
              isFull={false}
            />
          </div>
        </div>

      </div>
    </main>
  );
}
