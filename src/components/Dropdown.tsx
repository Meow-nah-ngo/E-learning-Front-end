"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface DropdownItem {
  label: string;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  title: string;
  items: DropdownItem[];
  variant?: "desktop" | "mobile";
  isOpen?: boolean;        
  onToggle?: () => void;  
}

export default function Dropdown({
  title,
  items,
  variant = "desktop",
  isOpen: controlledIsOpen,
  onToggle
}: DropdownProps) {
  const [localIsOpen, setLocalIsOpen] = useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const isDropdownOpen = controlledIsOpen !== undefined ? controlledIsOpen : localIsOpen;
  const handleToggle = onToggle ? onToggle : () => setLocalIsOpen(!localIsOpen);

  // Close dropdown when clicking outside (Desktop only)
  React.useEffect(() => {
    if (!isDropdownOpen || variant === "mobile") return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        if (onToggle) {
          onToggle();
        } else {
          setLocalIsOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, onToggle, variant]);

  // 1. Mobile Accordion Variant
  if (variant === "mobile") {
    return (
      <div className="w-full">
        <button
          onClick={handleToggle}
          className="w-full flex justify-between items-center py-3 text-white/90 font-medium border-b border-white/10"
        >
          <span>{title}</span>
          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
        </button>

        {isDropdownOpen && (
          <div className="pl-4 pt-2 pb-3 space-y-2 animate-in fade-in slide-in-from-top-1 duration-150">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href || "#"}
                onClick={() => {
                  if (item.onClick) item.onClick();
                  setLocalIsOpen(false);
                  if (onToggle) onToggle();
                }}
                className="block text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  }

  // 2. Desktop Overlay Variant (Default)
  return (
    <div ref={containerRef} className="relative inline-block text-left">
      <button
        onClick={handleToggle}
        className="flex items-center gap-1 hover:text-white/80 transition-colors duration-150 py-2"
      >
        <span>{title}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`} />
      </button>

      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 text-black z-50">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || "#"}
              onClick={() => {
                if (item.onClick) item.onClick();
                setLocalIsOpen(false);
                if (onToggle) onToggle();
              }}
              className="block px-4 py-2 hover:bg-neutral/40 text-sm"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}