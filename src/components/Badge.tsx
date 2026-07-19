import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "primary" | "secondary" | "accent" | "gold" | "danger";
  size?: "small" | "medium" | "large";
  ghost?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}



