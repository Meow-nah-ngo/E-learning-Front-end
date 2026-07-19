import React from 'react';

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: 'primary' | 'secondary' | 'tertiary' | 'text' | 'link' | 'disabled';
  shape?: 'standard' | 'circle';
  size?: 'small' | 'medium' | 'large';
  danger?: boolean;
  ghost?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  title?: string;
  htmlType?: 'submit' | 'reset' | 'button';
}

export default function Button({
  type = 'primary', shape = 'standard', size = 'medium',
  danger = false, ghost = false, loading = false, disabled = false,
  icon, title, className = '', onClick, htmlType = 'button', ...props
}: ButtonProps) {

  const base = "inline-flex items-center justify-center font-normal transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none";

  const sizes = {
    small: shape === 'circle' ? 'w-7 h-7 text-xs' : 'px-sm py-xxs text-xs',
    medium: shape === 'circle' ? 'w-8 h-8 text-sm' : 'px-md py-xs text-sm',
    large: shape === 'circle' ? 'w-10 h-10 text-md' : 'px-xl py-sm text-md',
  }[size];

  const shapes = { standard: 'rounded-md', circle: 'rounded-full aspect-square'}[shape];

  const key = `${type}${danger ? '_danger' : ''}${ghost ? '_ghost' : ''}`;
  const colors: Record<string, string> = {
    // 1. Primary
    primary: "bg-primary text-white hover:bg-primary-tint border border-transparent shadow-xs",
    primary_danger: "bg-accent text-white hover:bg-accent-tint border border-transparent shadow-xs",
    primary_ghost: "bg-transparent border border-primary text-primary",
    primary_danger_ghost: "bg-transparent border border-accent text-accent hover:border-accent-tint hover:text-accent-tint",

    // 2. Secondary
    secondary: "bg-white border border-neutral text-secondary hover:text-secondary-tint hover:border-secondary-tint shadow-xs",
    secondary_danger: "bg-white border border-accent text-accent hover:text-accent-tint hover:border-accent-tint shadow-xs",
    secondary_ghost: "bg-transparent border border-white text-white",
    secondary_danger_ghost: "bg-transparent border border-accent text-accent hover:border-accent-tint hover:text-accent-tint",

    // 3. Tertiary 
    tertiary: "bg-transparent text-secondary hover:text-secondary-tint",
    tertiary_danger: "bg-transparent text-accent hover:text-accent-tint",
    tertiary_ghost: "bg-transparent text-white",
    tertiary_danger_ghost: "bg-transparent text-accent hover:text-accent-tint",

    // 4. Text
    text: "bg-transparent text-description-light",
    text_danger: "bg-transparent text-accent",

    // 5. Link
    link: "bg-transparent p-0 text-secondary hover:text-secondary-tint underline-offset-4 hover:underline active:scale-100",
    link_danger: "bg-transparent p-0 text-accent hover:text-accent-tint underline-offset-4 hover:underline active:scale-100",

    // 6. Disabled
    disabled: "bg-disabled border border-neutral text-dis cursor-not-allowed",
  };

  return (
    <button
      type={htmlType}
      onClick={onClick} disabled={disabled || loading || type === 'disabled'}
      className={`${base} ${sizes} ${shapes} ${colors[key] || colors[type]} ${className}`}
      {...props}
    >
      {loading && (
        <svg className="animate-spin -ml-1 mr-1.5 h-4 w-4 text-current" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      )}
      {icon && !loading && <span className={title ? "mr-1.5 inline-flex items-center" : "inline-flex items-center"}>{icon}</span>}
      {title && <span>{title}</span>}
    </button>
  );
}