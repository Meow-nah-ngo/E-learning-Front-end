"use client";

import React, { useState } from "react";
import Button from "./Button";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 font-sans text-white">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-white select-none">
            Satriwit E-Learning
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <button className="flex items-center gap-1.5 hover:text-white transition-colors duration-150 py-2">
            <span>Classes</span>
            <ChevronDown className="w-4 h-4 opacity-80" />
          </button>

          <button className="flex items-center gap-1.5 hover:text-white transition-colors duration-150 py-2">
            <span>Category</span>
            <ChevronDown className="w-4 h-4 opacity-80" />
          </button>

          <button className="flex items-center gap-1.5 hover:text-white transition-colors duration-150 py-2">
            <span>Learner Type</span>
            <ChevronDown className="w-4 h-4 opacity-80" />
          </button>
        </nav>

        {/* Right Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button type="text" className="text-white hover:text-white/80 text-sm font-semibold">
            Log in
          </Button>
          <Button type="primary" shape="standard" className="rounded-full px-6 py-2 bg-primary hover:bg-primary-tint text-white text-sm font-bold shadow-md">
            Sign Up
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-secondary/95 backdrop-blur-lg border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-2">
            <button className="w-full flex justify-between items-center py-2 text-white/90 font-medium border-b border-white/10">
              <span>Classes</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="w-full flex justify-between items-center py-2 text-white/90 font-medium border-b border-white/10">
              <span>Category</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="w-full flex justify-between items-center py-2 text-white/90 font-medium border-b border-white/10">
              <span>Learner Type</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Button type="text" className="w-full justify-center text-white font-semibold">
              Log in
            </Button>
            <Button type="primary" shape="standard" className="w-full justify-center rounded-full bg-primary text-white font-bold py-2.5">
              Sign Up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
