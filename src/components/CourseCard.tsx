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
      return <Crown className="w-3.5 h-3.5 mr-1 text-white fill-white shrink-0" />;
    }
    if (benefitType === "diploma") {
      return <GraduationCap className="w-3.5 h-3.5 mr-1 text-white fill-white shrink-0" />;
    }
    return null;
  };

  // Smart seat status calculation using Database props
  const renderSeatStatus = () => {
    if (isFull || seatsOrStatus === "คอร์สเต็ม") {
      return {
        text: "คอร์สเต็ม",
        colorClass: "text-accent",
        icon: <User className="w-4 h-4 shrink-0 text-accent" />,
      };
    }

    if (registeredSeats !== undefined && maxSeats !== undefined) {
      const remaining = maxSeats - registeredSeats;

      if (remaining <= 0) {
        return {
          text: "คอร์สเต็ม",
          colorClass: "text-accent",
          icon: <User className="w-4 h-4 shrink-0 text-accent" />,
        };
      }

      if (remaining < 5) {
        return {
          text: `${remaining} ที่นั่ง`,
          colorClass: "text-warning font-bold",
          icon: <AlertCircle className="w-4 h-4 shrink-0 text-warning" />,
        };
      }

      return {
        text: `${remaining.toLocaleString()} ที่นั่ง`,
        colorClass: "text-description-light",
        icon: <User className="w-4 h-4 shrink-0 text-description-light" />,
      };
    }

    // Fallback to text status if no seat numbers are passed
    return {
      text: seatsOrStatus || "",
      colorClass: "text-description-light",
      icon: <User className="w-4 h-4 shrink-0 text-description-light" />,
    };
  };

  const statusInfo = renderSeatStatus();

  // Check if custom width/height classes are passed to support Figma's Hug/Fill behaviors
  const hasWidth = className.split(" ").some(c => c.startsWith("w-") || c.startsWith("max-w-") || c.startsWith("min-w-"));
  const hasHeight = className.split(" ").some(c => c.startsWith("h-") || c.startsWith("max-h-") || c.startsWith("min-h-"));

  const widthStyle = hasWidth ? "" : "w-[352px]";
  const heightStyle = hasHeight ? "" : "h-[440px]";

  return (
    <div className={`${widthStyle} ${heightStyle} shrink-0 bg-white rounded-[20px] border border-neutral/40 shadow-xs p-6 flex flex-col font-sans ${className}`}>
      
      <div className="w-full h-[200px] shrink-0 overflow-hidden rounded-[16px] mb-6">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-6 flex-grow">
        {/* Title */}
        <h3 className="text-xl font-bold text-secondary leading-snug line-clamp-2">
          {title}
        </h3>
        
        {/* Badges Row */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Main Code Badge (Red) */}
          <span className="inline-flex items-center px-3 py-1 rounded-[6px] bg-primary text-white text-[13px] font-semibold select-none">
            {code}
          </span>

          {/* Optional Grade Level Badge (Red, e.g. ม.1, ม.2, ม.3) */}
          {gradeLevel && (
            <span className="inline-flex items-center px-3 py-1 rounded-[6px] bg-primary text-white text-[13px] font-semibold select-none">
              {gradeLevel}
            </span>
          )}
          
          {/* Optional Benefit Badge (Yellow) */}
          {benefit && (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-[6px] bg-benefit text-white text-[13px] font-semibold select-none">
              {renderBenefitIcon()}
              {benefit}
            </span>
          )}

          {/* Rating or Instructor on the Right */}
          {rating !== undefined ? (
            <div className="ml-auto flex items-center gap-1 text-sm font-bold text-secondary">
              <Star className="w-4 h-4 text-secondary fill-secondary shrink-0" />
              <span>{rating}</span>
              {reviewCount !== undefined && <span className="text-secondary/70 font-normal">({reviewCount})</span>}
            </div>
          ) : instructor ? (
            <span className="ml-auto text-sm text-description-light font-normal truncate max-w-[90px]">
              {instructor}
            </span>
          ) : null}
        </div>
      </div>

      {/* 3. Bottom-Aligned Footer Section (Push to bottom using mt-auto) */}
      <div className="flex items-center justify-between text-sm font-semibold mt-auto pt-6 border-t border-neutral/30">
        {/* Date Info */}
        <div className="flex items-center gap-1.5 text-description-light">
          <Clock className="w-4 h-4 text-description-light shrink-0" />
          <span>{date}</span>
        </div>

        {/* Dynamic Status Info */}
        <div className={`flex items-center gap-1.5 ${statusInfo.colorClass}`}>
          {statusInfo.icon}
          <span>{statusInfo.text}</span>
        </div>
      </div>

    </div>
  );
}
