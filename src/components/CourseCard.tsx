import React from "react";
import Badge from "./Badge";

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
  
  // Render benefit icon dynamically
  const renderBenefitIcon = () => {
    if (benefitType === "certificate") {
      return (
        <svg className="w-3.5 h-3.5 mr-1 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 19h20v2H2v-2zm1-2L5 5l5 4.5L12 3l2 6.5L19 5l2 12H3z" />
        </svg>
      );
    }
    if (benefitType === "diploma") {
      return (
        <svg className="w-3.5 h-3.5 mr-1 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z M5.89 12.55L12 15.88l6.11-3.33v3.74L12 19.62l-6.11-3.33v-3.74z" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className={`max-w-[340px] w-full bg-white rounded-xl border border-neutral/50 shadow-xs overflow-hidden flex flex-col font-sans ${className}`}>
      {/* 1. Header Image Section */}
      <div className="relative aspect-[1.48] w-full overflow-hidden p-md pb-0">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* 2. Body Content Section */}
      <div className="p-md flex flex-col flex-grow gap-md justify-between">
        {/* Title */}
        <h3 className="text-lg font-bold text-secondary leading-snug line-clamp-2 min-h-[52px]">
          {title}
        </h3>
        
        {/* Badges & Rating Row */}
        <div className="flex items-center gap-xs flex-wrap">
          {/* Code Badge (Red, Square shape) */}
          <Badge color="primary" variant="fill" size="medium" shape="square" className="font-medium">
            {code}
          </Badge>
          
          {/* Benefit Badge (Yellow/Benefit, Square shape) */}
          <Badge color="benefit" variant="fill" size="medium" shape="square" className="font-medium text-white">
            <span className="flex items-center">
              {renderBenefitIcon()}
              {benefit}
            </span>
          </Badge>

          {/* Rating */}
          <div className="ml-auto flex items-center gap-[2px] text-xs font-semibold text-description-light">
            <svg className="w-3.5 h-3.5 text-amber-500 fill-amber-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>{rating}</span>
            <span className="text-description-light/60 font-normal">({reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-neutral/30 mx-md"></div>

      {/* 3. Footer Status Section */}
      <div className="px-md py-sm flex items-center justify-between text-xs font-normal">
        {/* Date Info */}
        <div className="flex items-center gap-xs text-description-light">
          <svg className="w-4 h-4 text-description-light/70" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>{date}</span>
        </div>

        {/* Status Info */}
        <div className={`flex items-center gap-xs font-medium ${isFull ? 'text-primary' : 'text-secondary-tint'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
          </svg>
          <span>{seatsOrStatus}</span>
        </div>
      </div>
    </div>
  );
}
