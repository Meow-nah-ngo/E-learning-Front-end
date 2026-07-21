import React from "react";
import { Clock, User } from "lucide-react";

export interface StudentCourseCardProps {
  imageUrl: string;
  title: string;
  subjectCode: string;
  gradeLevel?: string;
  unitTag?: string;
  instructor: string;
  date: string;
  seatsOrStatus: string;
  isFull?: boolean;
  className?: string;
}

export default function StudentCourseCard({
  imageUrl,
  title,
  subjectCode,
  gradeLevel,
  unitTag,
  instructor,
  date,
  seatsOrStatus,
  isFull = false,
  className = "",
}: StudentCourseCardProps) {
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
        
        {/* Badges & Instructor Row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Subject Code Badge (Primary Red) */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary text-white text-[11px] font-medium select-none truncate max-w-[130px]">
            {subjectCode}
          </span>

          {/* Optional Grade Level Badge (e.g. ม.1, ม.2, ม.3) */}
          {gradeLevel && (
            <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-primary text-white text-[11px] font-medium select-none">
              {gradeLevel}
            </span>
          )}
          
          {/* Optional Unit Tag (Yellow Benefit, e.g. U1, U2, U3) */}
          {unitTag && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-benefit text-white text-[11px] font-medium select-none">
              {unitTag}
            </span>
          )}

          {/* Instructor Name on Right */}
          <span className="ml-auto text-xs text-description-light font-normal truncate max-w-[80px]">
            {instructor}
          </span>
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
