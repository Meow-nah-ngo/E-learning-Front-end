import React from "react";
import { Crown, GraduationCap, Clock, User, Star } from "lucide-react";

export interface CourseCardProps {
  imageUrl: string;
  title: string;
  code: string;
  benefit: string;
  benefitType?: "certificate" | "diploma" | "none";
  rating: number;
  reviewCount: number;
  date: string;
  seatsOrStatus: string;
  isFull?: boolean;
  className?: string;
}

export default function CourseCard({
  imageUrl,
  title,
  code,
  benefit,
  benefitType = "certificate",
  rating,
  reviewCount,
  date,
  seatsOrStatus,
  isFull = false,
  className = "",
}: CourseCardProps) {
  
  // Benefit icon matching Figma WebSprout UI Kit
  const renderBenefitIcon = () => {
    if (benefitType === "certificate") {
      return <Crown className="w-4 h-4 text-white fill-white shrink-0" />;
    }
    if (benefitType === "diploma") {
      return <GraduationCap className="w-4 h-4 text-white shrink-0" />;
    }
    return null;
  };

  return (
    <div className={`max-w-[420px] w-full bg-white rounded-[32px] border border-neutral/40 shadow-sm p-5 flex flex-col gap-4 font-sans ${className}`}>
      {/* 1. Header Image Section */}
      <div className="relative aspect-[1.5] w-full overflow-hidden rounded-[22px]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Body Content Section */}
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h3 className="text-[26px] font-extrabold text-[#053C5E] leading-tight tracking-tight line-clamp-2 min-h-[64px]">
          {title}
        </h3>
        
        {/* Badges & Rating Row */}
        <div className="flex items-center gap-3 flex-wrap">
          {/* Code Badge */}
          <span className="inline-flex items-center px-4 py-2 rounded-[14px] bg-[#A4161A] text-white text-base font-bold shadow-xs select-none">
            {code}
          </span>
          
          {/* Benefit Badge */}
          <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[14px] bg-[#FFB000] text-white text-base font-bold shadow-xs select-none">
            {renderBenefitIcon()}
            {benefit}
          </span>

          {/* Rating (Dark Navy Star as seen in Figma design) */}
          <div className="ml-auto flex items-center gap-1.5 text-lg font-bold text-[#053C5E]">
            <Star className="w-5 h-5 text-[#053C5E] fill-[#053C5E] shrink-0" />
            <span>{rating}</span>
            <span className="text-[#053C5E]/70 font-normal">({reviewCount})</span>
          </div>
        </div>
      </div>

      {/* 3. Footer Status Section */}
      <div className="pt-2 flex items-center justify-between text-base font-bold">
        {/* Date Info */}
        <div className="flex items-center gap-2 text-[#334155]">
          <Clock className="w-5 h-5 text-[#334155] shrink-0" />
          <span>{date}</span>
        </div>

        {/* Status Info (คอร์สเต็ม uses text-accent / bright red #EC2329) */}
        <div className={`flex items-center gap-1.5 font-bold ${isFull ? 'text-[#EC2329]' : 'text-[#053C5E]'}`}>
          <User className={`w-5 h-5 shrink-0 ${isFull ? 'text-[#EC2329]' : 'text-[#053C5E]'}`} />
          <span>{seatsOrStatus}</span>
        </div>
      </div>
    </div>
  );
}
