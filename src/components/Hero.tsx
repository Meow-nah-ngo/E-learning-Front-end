import React from "react";
import Button from "./Button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden font-sans">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1920&auto=format&fit=crop"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center gap-6 sm:gap-8">
        
        {/* Top Pill Badge */}
        <div className="inline-flex items-center px-4 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-semibold tracking-wider uppercase select-none">
          Home
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Banner text or CTA
          </h1>
          <p className="text-base sm:text-xl text-white/80 font-normal tracking-wide max-w-xl mx-auto">
            about us
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto pt-2">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary hover:bg-primary-tint text-white text-base font-bold shadow-lg transition-all duration-200 active:scale-95">
            Get Started
          </button>

          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-white/95 text-secondary text-base font-bold shadow-lg flex items-center justify-center gap-2 transition-all duration-200 active:scale-95">
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5 text-secondary" />
          </button>
        </div>

      </div>
    </section>
  );
}
