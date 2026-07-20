import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function SearchBar({ value, onChange, placeholder = "ค้นหาคอร์สเรียน..." }: SearchBarProps) {
  return (
    <div className="flex items-center w-full max-w-[420px] bg-white border border-neutral/60 rounded-full py-[10px] px-[16px] shadow-xs focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-200">
      {/* ไอคอนแว่นขยาย */}
      <span className="text-secondary mr-[10px] text-sm select-none">
        🔍
      </span>
      
      {/* ช่องกรอกข้อความ */}
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-none focus:outline-none text-xs text-secondary placeholder-description-light/50 font-sans"
      />

      {/* ปุ่มเคลียร์ข้อความ (แสดงเมื่อมีข้อความพิมพ์อยู่เท่านั้น) */}
      {value && (
        <button
          onClick={() => onChange("")}
          className="text-description-light/50 hover:text-error text-xxs transition-colors duration-150 ml-[8px]"
          title="ล้างข้อความ"
        >
          ❌
        </button>
      )}
    </div>
  );
}