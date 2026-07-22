import React from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "ค้นหาคอร์สเรียน..." }: SearchBarProps) {
  return (
    <div className="flex items-center w-full max-w-[fill] bg-white border border-neutral/60 rounded-full py-[10px] px-[16px] shadow-xs focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-200">
      <Search className="w-4 h-4 text-secondary mr-[10px] shrink-0" />
      
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-none focus:outline-none text-xs text-secondary placeholder-description-light/50 font-sans"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="text-description-light/50 hover:text-error transition-colors duration-150 ml-[8px] p-0.5"
          title="ล้างข้อความ"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}