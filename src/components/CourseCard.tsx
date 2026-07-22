import React from "react";
import { Crown, GraduationCap, Clock, User, Star, AlertCircle } from "lucide-react";

export interface CourseCardProps {
  imageUrl: string;
  title: string;
  code: string;                 // Main red badge
  gradeLevel?: string;          // Optional red grade level badge (e.g. ม.1, ม.2, ม.3)
  benefit?: string;             // Optional yellow benefit badge (e.g. Certificate, U1)
  benefitType?: "certificate" | "diploma" | "none";
  rating?: number;
  reviewCount?: number;
  instructor?: string;
  date: string;
  registeredSeats?: number;     // Database: Number of registered students
  maxSeats?: number;            // Database: Course capacity limit
  seatsOrStatus?: string;       // Text fallback (e.g. "คอร์สเต็ม", "ปิดรับสมัคร")
  isFull?: boolean;
  className?: string;
}

export default function CourseCard({
  imageUrl,
  title,
  code,
  gradeLevel,
  benefit,
  benefitType = "none",
  rating,
  reviewCount,
  instructor,
  date,
  registeredSeats,
  maxSeats,
  seatsOrStatus,
  isFull = false,
  className = "",
}: CourseCardProps) {
  
  // Render benefit icon based on benefitType
  const renderBenefitIcon = () => {
    if (benefitType === "certificate") {
      return <Crown className="w-3 h-3 mr-1 text-white fill-white shrink-0" />;
    }
    if (benefitType === "diploma") {
      return <GraduationCap className="w-3 h-3 mr-1 text-white fill-white shrink-0" />;
    }
    return null;
  };

  // Smart seat status calculation using Database props
  const renderSeatStatus = () => {
    if (isFull || seatsOrStatus === "คอร์สเต็ม") {
      return {
        text: "คอร์สเต็ม",
        colorClass: "text-accent",
        icon: <User className="w-3.5 h-3.5 shrink-0 text-accent" />,
      };
    }

    if (registeredSeats !== undefined && maxSeats !== undefined) {
      const remaining = maxSeats - registeredSeats;

      if (remaining <= 0) {
        return {
          text: "คอร์สเต็ม",
          colorClass: "text-accent",
          icon: <User className="w-3.5 h-3.5 shrink-0 text-accent" />,
        };
      }

      if (remaining < 5) {
        return {
          text: `${remaining} ที่นั่ง`,
          colorClass: "text-warning font-semibold",
          icon: <AlertCircle className="w-3.5 h-3.5 shrink-0 text-warning" />,
        };
      }

      return {
        text: `${remaining.toLocaleString()} ที่นั่ง`,
        colorClass: "text-description-light",
        icon: <User className="w-3.5 h-3.5 shrink-0 text-description-light" />,
      };
    }

    // Fallback to text status if no seat numbers are passed
    return {
      text: seatsOrStatus || "",
      colorClass: "text-description-light",
      icon: <User className="w-3.5 h-3.5 shrink-0 text-description-light" />,
    };
  };

  const statusInfo = renderSeatStatus();

  return (
    <div className={`w-[285px] shrink-0 bg-white rounded-2xl border border-neutral/40 shadow-xs p-4 flex flex-col gap-3 font-sans ${className}`}>
      {/* 1. Header Image */}
      <div className="relative aspect-[1.5] w-full overflow-hidden rounded-xl">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. Body Content */}
      <div className="flex flex-col gap-2.5 flex-grow justify-between">
        {/* Title */}
        <h3 className="text-base font-bold text-secondary leading-snug line-clamp-2 overflow-hidden text-ellipsis min-h-[44px]">
          {title}
        </h3>
        
        {/* Badges & Rating/Instructor Row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Main Code Badge (Red) */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary text-white text-[11px] font-medium select-none">
            {code}
          </span>

          {/* Optional Grade Level Badge (Red, e.g. ม.1, ม.2, ม.3) */}
          {gradeLevel && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary text-white text-[11px] font-medium select-none">
              {gradeLevel}
            </span>
          )}
          
          {/* Optional Benefit Badge (Yellow) */}
          {benefit && (
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-benefit text-white text-[11px] font-medium select-none">
              {renderBenefitIcon()}
              {benefit}
            </span>
          )}

          {/* Rating or Instructor on the Right */}
          {rating !== undefined ? (
            <div className="ml-auto flex items-center gap-1 text-xs font-semibold text-secondary">
              <Star className="w-3.5 h-3.5 text-secondary fill-secondary shrink-0" />
              <span>{rating}</span>
              {reviewCount !== undefined && <span className="text-secondary/70 font-normal">({reviewCount})</span>}
            </div>
          ) : instructor ? (
            <span className="ml-auto text-xs text-description-light font-normal truncate max-w-[80px]">
              {instructor}
            </span>
          ) : null}
        </div>
      </div>

      {/* 3. Footer Status Section */}
      <div className="pt-2 border-t border-neutral/30 flex items-center justify-between text-xs font-normal">
        {/* Date Info */}
        <div className="flex items-center gap-1 text-description-light">
          <Clock className="w-3.5 h-3.5 text-description-light shrink-0" />
          <span>{date}</span>
        </div>

        {/* Dynamic Status Info */}
        <div className={`flex items-center gap-1 font-medium ${statusInfo.colorClass}`}>
          {statusInfo.icon}
          <span>{statusInfo.text}</span>
        </div>
      </div>
    </div>
  );
}
