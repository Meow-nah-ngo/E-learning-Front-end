import React from "react";
import Badge from "./Badge";

export interface CourseCardProps {
  imageUrl: string;
  title: string;
  subject: string;
  level: string;
  teacher: string;
  date: string;
  status: string;
  isFull?: boolean;
  className?: string;
}

export default function CourseCard({
  imageUrl,
  title,
  subject,
  level,
  teacher,
  date,
  status,
  isFull = false,
  className = "",
}: CourseCardProps) {
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
        <h3 className="text-lg font-bold text-secondary leading-snug line-clamp-2 min-h-[52px]">
          {title}
        </h3>
        
        <div className="flex items-center gap-xs">
          <Badge color="primary" size="medium">
            {subject}
          </Badge>
          <Badge color="primary" size="medium">
            {level}
          </Badge>
          <span className="ml-auto text-xs text-description-light font-medium">
            {teacher}
          </span>
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
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
}
