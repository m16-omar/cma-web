import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play, Check, ChevronRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  icon?: 'arrow-right' | 'arrow-up-right' | 'play' | 'check' | 'chevron-right';
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs font-semibold rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm font-semibold rounded-xl gap-2',
    lg: 'px-7 py-3.5 text-base font-bold rounded-2xl gap-2.5',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-[#FF6B00] via-[#FF7711] to-[#E55F00] text-white shadow-lg shadow-[#FF6B00]/25 hover:shadow-[#FF6B00]/45 hover:brightness-110 active:scale-[0.98] border border-orange-400/30',
    secondary:
      'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 shadow-md active:scale-[0.98]',
    outline:
      'border border-slate-300 dark:border-white/20 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 active:scale-[0.98]',
    ghost:
      'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5',
    glass:
      'bg-white/10 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 text-slate-900 dark:text-white hover:bg-white/20 dark:hover:bg-white/15 shadow-sm active:scale-[0.98]',
  };

  const renderIcon = () => {
    switch (icon) {
      case 'arrow-right':
        return <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />;
      case 'arrow-up-right':
        return <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />;
      case 'play':
        return <Play className="w-4 h-4 fill-current" />;
      case 'check':
        return <Check className="w-4 h-4 text-emerald-400" />;
      case 'chevron-right':
        return <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />;
      default:
        return null;
    }
  };

  const baseClasses = `inline-flex items-center justify-center transition-all duration-200 cursor-pointer select-none group font-sans ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {icon && iconPosition === 'left' && renderIcon()}
          <span>{children}</span>
          {icon && iconPosition === 'right' && renderIcon()}
        </a>
      );
    }

    return (
      <Link to={href} className={baseClasses}>
        {icon && iconPosition === 'left' && renderIcon()}
        <span>{children}</span>
        {icon && iconPosition === 'right' && renderIcon()}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {icon && iconPosition === 'left' && renderIcon()}
      <span>{children}</span>
      {icon && iconPosition === 'right' && renderIcon()}
    </button>
  );
};
