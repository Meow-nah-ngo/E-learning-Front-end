import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
  variant?: "fill" | "outline" | "soft";
  color?: "primary" | "success" | "benefit" | "warning" | "error" | "info";
  shape?: "pill" | "square";
  size?: "small" | "medium" | "large";
  iconPosition?: "left" | "right";
  removable?: boolean;
  onRemove?: () => void;
  className?: string; 
}

export default function Badge({
  children,
  variant = "fill",
  color = "primary",
  shape = "pill",
  size = "medium",
  iconPosition = "left",
  removable = false,
  onRemove,
  className = "",
  ...props
}: BadgeProps) {
  
  const base = "inline-flex items-center justify-center font-normal transition-all duration-200 select-none";

  const sizes = {
    small: "px-xs py-xxs text-xs",
    medium: "px-sm py-xxs text-xs",
    large: "px-md py-xs text-sm",
  }[size];

  const shapes = {
    pill: "rounded-full",
    square: "rounded-sm",
  }[shape];

  const colors = {
    primary: {
      fill: "bg-primary text-white border border-transparent",
      outline: "bg-transparent text-primary border border-primary",
      soft: "bg-primary/10 text-primary border border-transparent",
    },
    success: {
      fill: "bg-success text-white border border-transparent",
      outline: "bg-transparent text-success border border-success",
      soft: "bg-success/10 text-success border border-transparent",
    },
    benefit: {
      fill: "bg-benefit text-white border border-transparent",
      outline: "bg-transparent text-benefit border border-benefit",
      soft: "bg-benefit/10 text-benefit border border-transparent",
    },
    warning: {
      fill: "bg-warning text-white border border-transparent",
      outline: "bg-transparent text-warning border border-warning",
      soft: "bg-warning/10 text-warning border border-transparent",
    },
    error: {
      fill: "bg-error text-white border border-transparent",
      outline: "bg-transparent text-error border border-error",
      soft: "bg-error/10 text-error border border-transparent",
    },
    info: {
      fill: "bg-info text-white border border-transparent",
      outline: "bg-transparent text-info border border-info",
      soft: "bg-info/10 text-info border border-transparent",
    },
  };

  const variantClass = colors[color][variant];

  // Determine direction based on iconPosition
  const flexDir = iconPosition === "right" ? "flex-row-reverse" : "flex-row";

  // Hover background for close button
  const closeBtnHover = variant === "fill" ? "hover:bg-white/20" : "hover:bg-black/10";

  return (
    <span
      className={`${base} ${sizes} ${shapes} ${variantClass} ${flexDir} gap-xs ${className}`}
      {...props}
    >
      {children}
      
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            if (onRemove) onRemove();
          }}
          className={`inline-flex items-center justify-center rounded-full p-xxs transition-colors focus:outline-none ${closeBtnHover}`}
          aria-label="Remove badge"
        >
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      )}
    </span>
  );
}
