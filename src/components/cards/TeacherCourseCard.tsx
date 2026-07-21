import React from "react";
import { Clock, User } from "lucide-react";

export interface TeacherCourseCardProps {
  imageUrl: string;
  title: string;
  topicBadge: string;
  date: string;
  seatsOrStatus: string;
  isFull?: boolean;
  className?: string;
}

export default function TeacherCourseCard({
  imageUrl,
  title,
  topicBadge,
  date,
  seatsOrStatus,
  isFull = false,
  className = "",
}: TeacherCourseCardProps) {
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
        
        {/* Badges Row */}
        <div className="flex items-center gap-1.5 flex-wrap">
          {/* Long Topic Badge (Primary Red) */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md bg-primary text-white text-[11px] font-medium select-none truncate max-w-full">
            {topicBadge}
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
