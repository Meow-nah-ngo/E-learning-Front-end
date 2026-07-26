"use client";

import React, { useState } from "react";
import Button from "./Button";
import { Menu, X } from "lucide-react";
import Dropdown from "./Dropdown";

const classItems = [
  { label: "Physics", href: "#" },
  { label: "Chemistry", href: "#" },
  { label: "Biology", href: "#" }
];

const categoryItems = [
  { label: "For Individuals", href: "#" },
  { label: "For Students", href: "#" },
  { label: "For Teachers", href: "#" }
];

const learnerTypeItems = [
  { label: "Self-paced", href: "#" },
  { label: "Live Class", href: "#" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Single active state to coordinate all dropdowns (Open one, close others)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleToggle = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className="md:top-0 md:left-0 md:right-0 md:sticky z-50 bg-black/50 backdrop-blur-md border-b border-neutral font-sans text-white">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <a
            href="/"
            className="text-xl sm:text-2xl font-extrabold tracking-tight text-white select-none">
            Satriwit3 E-Learning
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-white/90">
          <Dropdown
            title="Classes"
            items={classItems}
            isOpen={activeDropdown === "classes"}
            onToggle={() => handleToggle("classes")}
          />
          <Dropdown
            title="Category"
            items={categoryItems}
            isOpen={activeDropdown === "category"}
            onToggle={() => handleToggle("category")}
          />
          <Dropdown
            title="Learner Type"
            items={learnerTypeItems}
            isOpen={activeDropdown === "learnerType"}
            onToggle={() => handleToggle("learnerType")}
          />
        </nav>

        {/* Right Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://sw3.moodiy.school/my/"
            className="text-white hover:text-white/80 text-sm font-semibold"
          >
            Log in
          </a>
          <a
            href="https://sw3.moodiy.school/login/index.php"
            className="inline-flex items-center justify-center rounded-full px-6 py-2 bg-primary hover:bg-primary-tint text-white text-sm font-bold shadow-md"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => {
            setMobileMenuOpen(!mobileMenuOpen);
            setActiveDropdown(null); // Clear dropdowns when opening/closing drawer
          }}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/5 backdrop-blur-lg border-b border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            <Dropdown
              title="Classes"
              items={classItems}
              variant="mobile"
              isOpen={activeDropdown === "classes-mobile"}
              onToggle={() => handleToggle("classes-mobile")}
            />
            <Dropdown
              title="Category"
              items={categoryItems}
              variant="mobile"
              isOpen={activeDropdown === "category-mobile"}
              onToggle={() => handleToggle("category-mobile")}
            />
            <Dropdown
              title="Learner Type"
              items={learnerTypeItems}
              variant="mobile"
              isOpen={activeDropdown === "learnerType-mobile"}
              onToggle={() => handleToggle("learnerType-mobile")}
            />
          </div>

          {/* Auth Buttons */}
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="https://sw3.moodiy.school/my/"
              className="text-white hover:text-white/80 text-sm font-semibold w-full flex items-center justify-center py-2.5"
              style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
            >
              Log in
            </a>
            <a
              href="https://sw3.moodiy.school/login/index.php"
              className="w-full inline-flex items-center justify-center rounded-full py-2.5 bg-primary hover:bg-primary-tint text-white text-sm font-bold shadow-md"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
