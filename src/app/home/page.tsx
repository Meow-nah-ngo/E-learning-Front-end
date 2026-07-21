"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Badge from "@/components/Badge";
import IndividualCourseCard, { IndividualCourseCardProps } from "@/components/cards/IndividualCourseCard";
import StudentCourseCard, { StudentCourseCardProps } from "@/components/cards/StudentCourseCard";
import TeacherCourseCard, { TeacherCourseCardProps } from "@/components/cards/TeacherCourseCard";

// Subject List
const subjectList = [
  "Physics",
  "Chemistry",
  "Biology",
  "Computer Science",
  "Statistics",
  "Engineering",
  "Astronomy",
  "Environmental Science",
  "Geology",
];

// 1. Individual Courses Data
interface IndividualCourseItem extends IndividualCourseCardProps {
  id: string;
  subject: string;
}

const individualCourses: IndividualCourseItem[] = [
  {
    id: "ind-1",
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
    subject: "Computer Science",
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
    seatsOrStatus: "2,500 ที่นั่ง",
    isFull: false,
    subject: "Computer Science",
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
    seatsOrStatus: "3,000 ที่นั่ง",
    isFull: false,
    subject: "Statistics",
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
    seatsOrStatus: "150 ที่นั่ง",
    isFull: false,
    subject: "Art",
  },
];

// 2. Student Courses Data
interface StudentCourseItem extends StudentCourseCardProps {
  id: string;
  subject: string;
}

const studentCourses: StudentCourseItem[] = [
  {
    id: "std-1",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop",
    title: "Innovative Strategies in Tech Development",
    subjectCode: "คณิตศาสตร์ 10123",
    gradeLevel: "ม.1",
    unitTag: "U1",
    instructor: "ครูพินิจกุล",
    date: "23 สิงหาคม 2569",
    seatsOrStatus: "คอร์สเต็ม",
    isFull: true,
    subject: "Engineering",
  },
  {
    id: "std-2",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
    title: "Sustainable Growth through Economic Marketing",
    subjectCode: "คณิตศาสตร์ 10123",
    gradeLevel: "ม.1",
    unitTag: "U1",
    instructor: "ครูพินิจกุล",
    date: "12 กันยายน 2569",
    seatsOrStatus: "1,500 ที่นั่ง",
    isFull: false,
    subject: "Computer Science",
  },
  {
    id: "std-3",
    imageUrl: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
    title: "Innovative Strategies for Digital Engagement",
    subjectCode: "วิทยาศาสตร์ 20245",
    gradeLevel: "ม.2",
    unitTag: "U2",
    instructor: "ครูสมชาย",
    date: "5 มกราคม 2570",
    seatsOrStatus: "1,200 ที่นั่ง",
    isFull: false,
    subject: "Computer Science",
  },
  {
    id: "std-4",
    imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop",
    title: "Creative Problem Solving in UI/UX Design",
    subjectCode: "ศิลปะ 30567",
    gradeLevel: "ม.3",
    unitTag: "U3",
    instructor: "ครูพิชญา",
    date: "17 สิงหาคม 2569",
    seatsOrStatus: "150 ที่นั่ง",
    isFull: false,
    subject: "Computer Science",
  },
];

// 3. Teacher Courses Data
interface TeacherCourseItem extends TeacherCourseCardProps {
  id: string;
  subject: string;
}

const teacherCourses: TeacherCourseItem[] = [
  {
    id: "tch-1",
    imageUrl: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&auto=format&fit=crop",
    title: "Innovative Teaching Strategies for Modern Classrooms",
    topicBadge: "การสอนสำหรับครู SW20234",
    date: "5 มกราคม 2570",
    seatsOrStatus: "0 ที่นั่ง",
    isFull: true,
    subject: "Engineering",
  },
  {
    id: "tch-2",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600&auto=format&fit=crop",
    title: "Advanced Mathematics Tutoring",
    topicBadge: "การจัดการเรียนรู้การสอนวิชาคณิตศาสตร์ขั้นสูง MATH205",
    date: "10 มกราคม 2570",
    seatsOrStatus: "70 ที่นั่ง",
    isFull: false,
    subject: "Statistics",
  },
  {
    id: "tch-3",
    imageUrl: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
    title: "Creative Writing Seminar",
    topicBadge: "สัมมนาการเขียนเชิงสร้างสรรค์ ENG102",
    date: "22 มกราคม 2570",
    seatsOrStatus: "75 ที่นั่ง",
    isFull: false,
    subject: "Computer Science",
  },
  {
    id: "tch-4",
    imageUrl: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=600&auto=format&fit=crop",
    title: "Physics Experiment Design",
    topicBadge: "ห้องปฏิบัติการฟิสิกส์ LAB401",
    date: "15 มกราคม 2570",
    seatsOrStatus: "70 ที่นั่ง",
    isFull: false,
    subject: "Physics",
  },
];

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // Filtering Logic helper
  const matchesFilter = (item: { title: string; subject: string; topicBadge?: string; code?: string; subjectCode?: string }) => {
    const matchesSubject = selectedSubject ? item.subject.toLowerCase() === selectedSubject.toLowerCase() : true;
    
    const searchTarget = (
      item.title + " " + 
      (item.code || "") + " " + 
      (item.subjectCode || "") + " " + 
      (item.topicBadge || "")
    ).toLowerCase();
    
    const matchesSearch = searchValue ? searchTarget.includes(searchValue.toLowerCase()) : true;
    return matchesSubject && matchesSearch;
  };

  const filteredIndividuals = useMemo(() => individualCourses.filter(matchesFilter), [selectedSubject, searchValue]);
  const filteredStudents = useMemo(() => studentCourses.filter(matchesFilter), [selectedSubject, searchValue]);
  const filteredTeachers = useMemo(() => teacherCourses.filter(matchesFilter), [selectedSubject, searchValue]);

  return (
    <div className="min-h-screen bg-light-2 font-sans flex flex-col selection:bg-primary selection:text-white">
      {/* Navbar Header */}
      <Navbar />

      {/* Hero Banner */}
      <Hero />

      {/* Search & Subject Filters Section */}
      <section className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-6 sm:space-y-8">
        
        {/* Search Bar */}
        <div className="flex justify-center">
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            placeholder="Search lesson..."
          />
        </div>

        {/* Subject Filter Pills */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
          <Badge
            variant={selectedSubject === null ? "fill" : "outline"}
            color="primary"
            shape="pill"
            size="medium"
            className="cursor-pointer font-medium px-4 py-1.5 hover:bg-primary hover:text-white transition-all duration-200"
            onClick={() => setSelectedSubject(null)}
          >
            All Subjects
          </Badge>

          {subjectList.map((subj) => {
            const isSelected = selectedSubject === subj;
            return (
              <Badge
                key={subj}
                variant={isSelected ? "fill" : "outline"}
                color="primary"
                shape="pill"
                size="medium"
                className="cursor-pointer font-medium px-4 py-1.5 hover:bg-primary hover:text-white transition-all duration-200"
                onClick={() => setSelectedSubject(isSelected ? null : subj)}
              >
                {subj}
              </Badge>
            );
          })}
        </div>

      </section>

      {/* Main Course Categories Container */}
      <main className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12 sm:space-y-16">
        
        {/* Category 1: For Individuals */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-md bg-primary text-white text-xs font-bold uppercase tracking-wide">
                NEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
                For Individuals
              </h2>
            </div>
            <a href="#" className="text-xs sm:text-sm font-semibold text-description-light hover:text-primary transition-colors">
              View All
            </a>
          </div>

          {filteredIndividuals.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-description-light/70 font-medium">
              📭 ไม่พบคอร์สเรียนในหมวดหมู่นี้
            </div>
          ) : (
            <div className="flex gap-5 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-neutral/40 scrollbar-track-transparent">
              {filteredIndividuals.map((course) => (
                <IndividualCourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </div>

        {/* Category 2: For Students */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-md bg-primary text-white text-xs font-bold uppercase tracking-wide">
                NEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
                For Students
              </h2>
            </div>
            <a href="#" className="text-xs sm:text-sm font-semibold text-description-light hover:text-primary transition-colors">
              View All
            </a>
          </div>

          {filteredStudents.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-description-light/70 font-medium">
              📭 ไม่พบคอร์สเรียนในหมวดหมู่นี้
            </div>
          ) : (
            <div className="flex gap-5 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-neutral/40 scrollbar-track-transparent">
              {filteredStudents.map((course) => (
                <StudentCourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </div>

        {/* Category 3: For Teachers */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-md bg-primary text-white text-xs font-bold uppercase tracking-wide">
                NEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight">
                For Teachers
              </h2>
            </div>
            <a href="#" className="text-xs sm:text-sm font-semibold text-description-light hover:text-primary transition-colors">
              View All
            </a>
          </div>

          {filteredTeachers.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-description-light/70 font-medium">
              📭 ไม่พบคอร์สเรียนในหมวดหมู่นี้
            </div>
          ) : (
            <div className="flex gap-5 overflow-x-auto pb-4 pt-1 scrollbar-thin scrollbar-thumb-neutral/40 scrollbar-track-transparent">
              {filteredTeachers.map((course) => (
                <TeacherCourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </div>

      </main>

      {/* Footer & Pre-Footer Banner */}
      <Footer />
    </div>
  );
}
