import React from "react";
import { Crown, GraduationCap, Clock, User, Star } from "lucide-react";

export interface IndividualCourseCardProps {
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

export default function IndividualCourseCard({
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
}: IndividualCourseCardProps) {
  
  const renderBenefitIcon = () => {
    if (benefitType === "certificate") {
      return <Crown className="w-3 h-3 mr-1 text-white fill-white shrink-0" />;
    }
    if (benefitType === "diploma") {
      return <GraduationCap className="w-3 h-3 mr-1 text-white fill-white shrink-0" />;
    }
    return null;
  };

  return (
    <div className={`w-[285px] shrink-0 bg-white rounded-2xl border border-neutral/40 shadow-xs p-4 flex flex-col gap-3 font-sans ${className}`}>
      {/* Header Image */}
      <div className="relative aspect-[1.5] w-full overflow-hidden rounded-xl">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Body Content */}
      <div className="flex flex-col gap-2.5 flex-grow justify-between">
        <h3 className="text-base font-bold text-secondary leading-snug line-clamp-2 min-h-[44px]">
          {title}
        </h3>
        
        {/* Badges & Rating Row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Code Badge */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary text-white text-[11px] font-medium select-none truncate max-w-[120px]">
            {code}
          </span>
          
          {/* Benefit Badge */}
          {benefit && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-benefit text-white text-[11px] font-medium select-none">
              {renderBenefitIcon()}
              {benefit}
            </span>
          )}

          {/* Rating */}
          <div className="ml-auto flex items-center gap-1 text-xs font-semibold text-secondary">
            <Star className="w-3.5 h-3.5 text-secondary fill-secondary shrink-0" />
            <span>{rating}</span>
            <span className="text-secondary/70 font-normal">({reviewCount})</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-2 border-t border-neutral/30 flex items-center justify-between text-xs font-normal">
        <div className="flex items-center gap-1 text-description-light">
          <Clock className="w-3.5 h-3.5 text-description-light shrink-0" />
          <span>{date}</span>
        </div>

        <div className={`flex items-center gap-1 font-medium ${isFull ? 'text-accent' : 'text-description-light'}`}>
          <User className={`w-3.5 h-3.5 shrink-0 ${isFull ? 'text-accent' : 'text-description-light'}`} />
          <span>{seatsOrStatus}</span>
        </div>
      </div>
    </div>
  );
}
