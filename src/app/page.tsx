"use client";

import React, { useState, useMemo } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import Badge from "@/components/Badge";
import CourseCard from "@/components/CourseCard";
import {
  individualCourses,
  studentCourses,
  teacherCourses,
  CourseItem
} from "@/app/api/mock-data/courses";
import { mockSubjects } from "@/app/api/mock-data/subjects";

export default function HomePage() {
  const [searchValue, setSearchValue] = useState("");
  const [selectedSubject, setSelectedSubject] = useState<string | null>(null);

  // Filtering Logic helper
  const matchesFilter = (item: CourseItem) => {
    const matchesSubject = selectedSubject ? item.subject.toLowerCase() === selectedSubject.toLowerCase() : true;
    const searchTarget = (item.title + " " + item.code).toLowerCase();
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
            size="large"
            className="cursor-pointer font-medium px-4 py-1.5 hover:bg-primary hover:text-white transition-all duration-200"
            onClick={() => setSelectedSubject(null)}
          >
            All Subjects
          </Badge>

          {mockSubjects.map((subj) => {
            const isSelected = selectedSubject === subj;
            return (
              <Badge
                key={subj}
                variant={isSelected ? "fill" : "outline"}
                color="primary"
                shape="pill"
                size="large"
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
              <span className="px-2.5 py-0.5 rounded-md bg-accent text-white text-xs font-bold uppercase tracking-wide">
                NEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-secondary tracking-tight">
                For Individuals
              </h2>
            </div>
            <a href="#" className="hidden sm:inline text-xs sm:text-sm font-semibold text-description-light hover:text-primary transition-colors">
              View All
            </a>
          </div>

          {filteredIndividuals.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-description-light/70 font-medium">
              📭 ไม่พบคอร์สเรียนในหมวดหมู่นี้
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:overflow-x-auto sm:pb-8 sm:pt-4 px-2 scrollbar-thin scrollbar-thumb-neutral/40 scrollbar-track-transparent">
              {filteredIndividuals.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </div>

        {/* Category 2: For Students */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-md bg-accent text-white text-xs font-bold uppercase tracking-wide">
                NEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-secondary tracking-tight">
                For Students
              </h2>
            </div>
            <a href="#" className="hidden sm:inline text-xs sm:text-sm font-semibold text-description-light hover:text-primary transition-colors">
              View All
            </a>
          </div>

          {filteredStudents.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-description-light/70 font-medium">
              📭 ไม่พบคอร์สเรียนในหมวดหมู่นี้
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:overflow-x-auto sm:pb-8 sm:pt-4 px-2 scrollbar-thin scrollbar-thumb-neutral/40 scrollbar-track-transparent">
              {filteredStudents.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          )}
        </div>

        {/* Category 3: For Teachers */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-0.5 rounded-md bg-accent text-white text-xs font-bold uppercase tracking-wide">
                NEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-secondary tracking-tight">
                For Teachers
              </h2>
            </div>
            <a href="#" className="hidden sm:inline text-xs sm:text-sm font-semibold text-description-light hover:text-primary transition-colors">
              View All
            </a>
          </div>

          {filteredTeachers.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center text-description-light/70 font-medium">
              📭 ไม่พบคอร์สเรียนในหมวดหมู่นี้
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6 sm:flex-row sm:overflow-x-auto sm:pb-8 sm:pt-4 px-2 scrollbar-thin scrollbar-thumb-neutral/40 scrollbar-track-transparent">
              {filteredTeachers.map((course) => (
                <CourseCard key={course.id} {...course} />
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
