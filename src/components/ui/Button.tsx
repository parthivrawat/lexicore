import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  loading?: boolean;
}

const variantClasses = {
  primary: 'gradient-primary text-white shadow-soft hover:shadow-medium hover:scale-105 active:scale-95 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
  secondary: 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white shadow-soft hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-medium hover:scale-105 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  outline: 'border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 shadow-soft hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500 hover:shadow-medium hover:scale-105 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  ghost: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white hover:shadow-soft hover:scale-105 active:scale-95 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2',
  accent: 'gradient-accent text-white shadow-soft hover:shadow-medium hover:scale-105 active:scale-95 focus:ring-2 focus:ring-accent-500 focus:ring-offset-2',
};

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs font-semibold',
  md: 'px-4 py-2 text-sm font-semibold',
  lg: 'px-6 py-3 text-base font-semibold',
  xl: 'px-8 py-4 text-lg font-bold',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'md', loading = false, children, disabled, ...props }, ref) => {
    const baseClasses = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 ease-out focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none';
    
    const classes = [
      baseClasses,
      variantClasses[variant],
      sizeClasses[size],
      className,
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...props}
      >
        {loading && (
          <svg 
            className="mr-2 h-4 w-4 animate-spin" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 6v6m0 0v6m0-6h6m-6 0H6" 
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
