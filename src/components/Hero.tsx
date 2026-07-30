"use client";

import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1920&auto=format&fit=crop"
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % IMAGES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  }, []);

  // Automatic slide transition every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [handleNext]);

  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[480px] lg:min-h-[520px] -mt-20 overflow-hidden font-sans bg-black">
      {/* Background Slides Container */}
      <div className="absolute inset-0 w-full h-full z-0">
        {IMAGES.map((image, idx) => {
          const isActive = idx === currentSlide;
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* Background Image with Ken Burns zoom effect */}
              <img
                src={image}
                alt={`Hero Slide ${idx + 1}`}
                className={`absolute inset-0 w-full h-full object-cover object-center transition-transform duration-[5000ms] ease-out ${
                  isActive ? "scale-100" : "scale-105"
                }`}
              />

              {/* Dark Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/55 to-black/85" />
            </div>
          );
        })}
      </div>

      {/* Static Content Container (Z-Index 10 to sit on top of background slides) */}
      <div className="relative z-10 w-full min-h-[400px] sm:min-h-[480px] lg:min-h-[520px] flex items-center justify-center pt-28 sm:pt-36 pb-16 px-4">
        <div className="w-full max-w-[1024px] mx-auto text-center">
          {/* Top Pill Badge */}
          <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase select-none">
            New Courses Available
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md mb-4 max-w-[900px] mx-auto">
            Empower Your Learning Journey with Satriwit3 E-Learning
          </h1>

          {/* Subtitle Paragraph */}
          <p className="text-base sm:text-xl text-white/80 font-normal tracking-wide max-w-[720px] mx-auto mb-8 leading-relaxed">
            Discover a world of knowledge at your fingertips. Explore our diverse range of courses and enhance your skills anytime, anywhere.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-[400px] sm:max-w-none mx-auto">
            <button className="whitespace-nowrap cursor-pointer w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-tint text-white text-base font-bold shadow-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95">
              Get Started
            </button>

            <button className="whitespace-nowrap cursor-pointer w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-neutral/60 hover:border-secondary text-secondary text-base font-bold shadow-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-105 active:scale-95">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5 text-secondary" />
            </button>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation Arrows (Z-Index 20 to sit on top of content) */}
      <button
        onClick={handlePrev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer p-2.5 sm:p-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-90"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 cursor-pointer p-2.5 sm:p-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white transition-all duration-200 hover:scale-110 active:scale-90"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </button>

      {/* Bottom Radio Indicators (Dots) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`cursor-pointer h-2.5 rounded-full transition-all duration-300 ${
              idx === currentSlide 
                ? "w-8 bg-primary" 
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
