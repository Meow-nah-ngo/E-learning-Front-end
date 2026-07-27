import React from "react";
import { Crown, GraduationCap, Clock, User, Star, AlertCircle } from "lucide-react";
import Badge from "./Badge";
import Link from "next/link";

export interface CourseCardProps {
  id: string;                    // Unique identifier for routing
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
  id,
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

  // Seat status calculation using Database props
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
          colorClass: "text-warning font-semibold",
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
  const heightStyle = hasHeight ? "" : "h-[390px]";

  return (
    <Link href={`/courses/${id}`} className={`${widthStyle} ${heightStyle} shrink-0 bg-white rounded-[20px] border border-neutral/40 shadow-xs p-5 flex flex-col font-sans cursor-pointer hover:border-primary focus-within:ring-2 hover:ring-primary/10 transition-all duration-200 hover:scale-101 active:scale-102 ${className}`}>
      
      <div className="w-full h-[180px] shrink-0 overflow-hidden rounded-[16px] mb-4 bg-neutral/20">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold text-secondary leading-snug line-clamp-2">
          {title}
        </h3>
        
        {/* Badges and Metadata Row */}
        <div className="flex items-center justify-between gap-2 mt-auto mb-4">
          <div className="flex items-center gap-1.5 flex-wrap flex-grow">
            {/* Main Code Badge (Red) */}
            <Badge 
              variant="fill"
              color="primary"
              shape="square"
              size="small"
              className="font-medium px-3.5 py-1.5 bg-primary text-white"
            >
              {code}
            </Badge>

            {/* Optional Grade Level Badge (Red, e.g. ม.1, ม.2, ม.3) */}
            {gradeLevel && (
              <Badge
                variant="fill"
                color="primary"
                shape="square"
                size="small"
                className="font-medium px-3.5 py-1.5 bg-primary text-white line-clamp-1"
              >
                {gradeLevel}
              </Badge>
            )}

            {/* Optional Benefit Badge (Yellow) */}
            {benefit && (
              <Badge
                variant="fill"
                color="benefit"
                shape="square"
                size="small"
                className="font-medium px-3.5 py-1.5 bg-benefit text-white"
              >
                {renderBenefitIcon()}
                {benefit}
              </Badge>
            )}
          </div>

          {/* Right Column: Instructor or Rating (Fixed width, never squished) */}
          <div className="shrink-0 flex items-center justify-end">
            {rating !== undefined ? (
              <div className="flex items-center gap-1 text-sm font-semibold text-secondary">
                <Star className="w-4 h-4 text-secondary fill-secondary shrink-0" />
                <span>{rating}</span>
                {reviewCount !== undefined && <span className="text-secondary/70 font-normal">({reviewCount})</span>}
              </div>
            ) : instructor ? (
              <span className="text-sm text-description-light font-normal truncate max-w-[100px]" title={instructor}>
                {instructor}
              </span>
            ) : null}
          </div>
        </div>
      </div>

      {/* 3. Bottom-Aligned Footer Section (Push to bottom using mt-auto) */}
      <div className="flex items-center justify-between text-sm font-medium mt-auto pt-4 border-t border-neutral/30">
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

    </Link>
  );
}
