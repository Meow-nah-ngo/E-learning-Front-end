"use client";

import React, { use } from "react";
import Link from "next/link";
import { ArrowLeft, Star, Clock, User, Award, BookOpen, Check, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Badge from "@/components/Badge";
import Button from "@/components/Button";
import {
  individualCourses,
  studentCourses,
  teacherCourses,
  CourseItem
} from "@/app/api/mock-data/courses";

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  // Combine all mock data to search for the specific course
  const allCourses: CourseItem[] = [
    ...individualCourses,
    ...studentCourses,
    ...teacherCourses
  ];
  
  const course = allCourses.find((c) => c.id === id);

  // Handle case where course is not found
  if (!course) {
    return (
      <div className="min-h-screen bg-light-2 font-sans flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-6 text-center">
          <div className="bg-white rounded-3xl p-8 max-w-md shadow-md border border-neutral/30 space-y-4">
            <AlertCircle className="w-12 h-12 text-primary mx-auto" />
            <h2 className="text-2xl font-semibold text-secondary">ไม่พบคอร์สเรียน</h2>
            <p className="text-description-light text-sm">ขออภัยด้วยครับ ไม่พบคอร์สเรียนที่ตรงกับรหัสวิชาที่คุณค้นหาในขณะนี้</p>
            <Link href="/" className="inline-block mt-4">
              <Button type="primary" className="rounded-full px-6">
                กลับหน้าหลัก
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Calculate seat statistics based on numeric attributes
  const isFull = course.isFull || (course.registeredSeats !== undefined && course.maxSeats !== undefined && course.registeredSeats >= course.maxSeats);
  const remainingSeats = (course.maxSeats !== undefined && course.registeredSeats !== undefined) 
    ? course.maxSeats - course.registeredSeats 
    : undefined;
  
  const isUrgent = remainingSeats !== undefined && remainingSeats > 0 && remainingSeats < 5;

  return (
    <div className="min-h-screen bg-light-2 font-sans flex flex-col selection:bg-primary selection:text-white">
      <Navbar />

      <main className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-grow">
        
        {/* 1. Breadcrumbs / Go Back link */}
        <div className="mb-6 flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-description-light hover:text-primary transition-colors duration-150">
            <ArrowLeft className="w-4 h-4" />
            <span>ย้อนกลับไปหน้ารวมวิชา</span>
          </Link>
          <span className="text-xs text-description-light hidden sm:inline">
            หน้าหลัก / คอร์สเรียน / {course.title}
          </span>
        </div>

        {/* 2. Main Detail Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Left Column: Course Main Info (Col span 2) */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Header section */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center px-3 py-1 rounded-[6px] bg-primary text-white text-xs font-semibold select-none">
                  {course.code}
                </span>
                {course.gradeLevel && (
                  <Badge variant="fill" color="primary" shape="square" size="small" className="font-semibold">
                    {course.gradeLevel}
                  </Badge>
                )}
                <Badge variant="outline" color="primary" shape="pill" size="small" className="font-semibold">
                  {course.subject}
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl font-semibold text-secondary leading-tight tracking-tight">
                {course.title}
              </h1>

              {/* Rating and review block */}
              {course.rating !== undefined && (
                <div className="flex items-center gap-2 text-sm text-secondary font-medium">
                  <div className="flex items-center text-secondary">
                    <Star className="w-4 h-4 fill-secondary" />
                    <span className="ml-1 font-semibold">{course.rating}</span>
                  </div>
                  <span className="text-neutral/80">•</span>
                  <span className="text-description-light">{course.reviewCount || 0} รีวิวจากผู้เรียน</span>
                </div>
              )}
            </div>

            {/* Main Course Hero Image */}
            <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-sm bg-neutral/20 border border-neutral/30">
              <img
                src={course.imageUrl}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Course Description */}
            <div className="space-y-4 bg-white rounded-3xl p-6 sm:p-8 border border-neutral/30 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-semibold text-secondary flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" />
                <span>คำอธิบายรายวิชา (About this Course)</span>
              </h2>
              <p className="text-secondary/80 text-[15px] leading-relaxed font-sans">
                คอร์สเรียนนี้จะพาทุกคนไปเรียนรู้อย่างละเอียด เจาะลึกแบบลงมือทำจริง (Hands-on) โดยมีคุณครูผู้เชี่ยวชาญคอยดูแลตลอดหลักสูตร
                เหมาะสำหรับปูพื้นฐาน พัฒนาทักษะของตนเองอย่างมีทิศทาง ตลอดจนนำไปประยุกต์ใช้เพื่อยกระดับผลการเรียนและการทำงาน
                ผู้เรียนจะได้เรียนผ่านสื่อการเรียนการสอนแบบผสมผสาน ทั้งวิดีโอ เอกสารประกอบการเรียน และกิจกรรมวัดความรู้ตลอดเส้นทาง
              </p>
            </div>

            {/* Objectives */}
            <div className="space-y-4 bg-white rounded-3xl p-6 sm:p-8 border border-neutral/30 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-semibold text-secondary">สิ่งที่คุณจะได้รับจากคอร์สนี้</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {[
                  "ปูพื้นฐานความรู้จากระดับเริ่มต้นไปจนถึงระดับสูง",
                  "เข้าใจตรรกะเบื้องหลังและการทำงานอย่างถูกทิศทาง",
                  "ทำข้อสอบและแบบฝึกหัดทบทวนบทเรียนพร้อมเฉลยละเอียด",
                  "รับใบรับรองระบบ (Certificate) ทันทีที่ทำข้อสอบผ่าน",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-secondary/80">
                    <span className="p-0.5 bg-primary/10 rounded-full text-primary shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </span>
                    <span className="font-sans leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor profiles */}
            <div className="space-y-4 bg-white rounded-3xl p-6 sm:p-8 border border-neutral/30 shadow-xs">
              <h2 className="text-xl sm:text-2xl font-semibold text-secondary flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <span>ประวัติผู้สอน (Instructor Profile)</span>
              </h2>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-neutral/10 flex items-center justify-center shrink-0 border border-neutral">
                  <User className="w-8 h-8 text-neutral" />
                </div>
                <div className="text-center sm:text-left space-y-1">
                  <h3 className="font-semibold text-secondary text-lg">
                    {course.instructor || "คุณครูโรงเรียนสตรีวิทยา (Satriwit Faculty)"}
                  </h3>
                  <p className="text-xs text-description-light font-medium">ครูผู้เชี่ยวชาญการจัดการเรียนรู้ประจำกลุ่มสาระ</p>
                  <p className="text-sm text-secondary/80 font-sans leading-relaxed mt-2">
                    มีประสบการณ์ในการถ่ายทอดและพัฒนาศักยภาพผู้เรียนมากกว่า 10 ปี เน้นการสอนให้ผู้เรียนเห็นภาพ ปูรากฐานแน่น
                    และแก้โจทย์ปัญหาได้อย่างสร้างสรรค์
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Pricing & Registration Widget (Col span 1) */}
          <div className="space-y-6">
            <div className="bg-white rounded-[24px] border border-neutral/40 shadow-lg p-6 space-y-6 sticky top-24">
              
              {/* Cost Display */}
              <div>
                <span className="text-xs text-description-light font-semibold block uppercase tracking-wider mb-0.5">
                  ค่าธรรมเนียมสมัครเรียน
                </span>
                <span className="text-3xl font-bold text-secondary">
                  Free <span className="text-sm font-semibold text-description-light/70 ml-1">ไม่มีค่าใช้จ่าย</span>
                </span>
              </div>

              {/* Dynamic Seat Availability / Status Details */}
              <div className="border-t border-b border-neutral/30 py-4 space-y-3">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-description-light">สถานะคอร์สเรียน:</span>
                  {isFull ? (
                    <span className="text-primary font-semibold flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      คอร์สเต็ม
                    </span>
                  ) : isUrgent ? (
                    <span className="text-warning font-semibold flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      เหลือเพียง {remainingSeats} ที่นั่งสุดท้าย
                    </span>
                  ) : (
                    <span className="text-success font-semibold">เปิดรับสมัคร</span>
                  )}
                </div>

                {course.maxSeats !== undefined && course.registeredSeats !== undefined && (
                  <div className="space-y-1.5">
                    <div className="flex justify-between text-xs text-description-light font-medium">
                      <span>ยอดลงทะเบียนแล้ว: {course.registeredSeats} คน</span>
                      <span>จำนวนจำกัด: {course.maxSeats} คน</span>
                    </div>
                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-neutral/20 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-300 ${isFull ? "bg-primary" : isUrgent ? "bg-warning" : "bg-success"}`} 
                        style={{ width: `${Math.min(100, (course.registeredSeats / course.maxSeats) * 100)}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Primary Call To Action Enrol Button */}
              <Button
                type={isFull ? "disabled" : "primary"}
                className={`w-full py-3.5 rounded-full font-bold text-base transition-all duration-200 ${
                  isFull 
                    ? "bg-disabled border-neutral text-dis" 
                    : "bg-primary hover:bg-primary-tint text-white shadow-md active:scale-[0.98]"
                }`}
                disabled={isFull}
                onClick={() => {
                  if (!isFull) {
                    alert("ลงทะเบียนเข้าสู่บทเรียนสตรีวิทยาสำเร็จ! ยินดีต้อนรับครับ 🎉");
                  }
                }}
              >
                {isFull ? "คอร์สเรียนปิดรับสมัครแล้ว" : "ลงทะเบียนเข้าสู่ระบบ"}
              </Button>

              {/* Course Key parameters details list */}
              <div className="space-y-3.5 text-sm pt-2">
                
                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-description-light shrink-0" />
                  <span className="text-secondary/70">ระยะเวลา: <strong className="text-secondary font-semibold">12 ชั่วโมงการเรียนรู้</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <User className="w-4 h-4 text-description-light shrink-0" />
                  <span className="text-secondary/70">ผู้บรรยายหลัก: <strong className="text-secondary font-semibold">{course.instructor || "คุณครูโรงเรียนสตรีวิทยา"}</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-description-light shrink-0" />
                  <span className="text-secondary/70">สิทธิ์ผู้เข้าเรียน: <strong className="text-secondary font-semibold">{course.gradeLevel ? `ระดับ ${course.gradeLevel}` : "ทุกคนที่สนใจ"}</strong></span>
                </div>

                <div className="flex items-center gap-3">
                  <Award className="w-4 h-4 text-description-light shrink-0" />
                  <span className="text-secondary/70">ใบรับรอง (Certificate): <strong className="text-secondary font-semibold">{course.benefit ? `ได้รับแบบ ${course.benefit}` : "ได้รับหลังเรียนจบ"}</strong></span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
