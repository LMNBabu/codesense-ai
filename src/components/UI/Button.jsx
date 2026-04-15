import React from 'react';

export default function Button({ children, onClick, variant = 'primary', className = '' }) {
  const baseStyle = "px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2 text-sm";
  
  const variants = {
    primary: "bg-brand-500 hover:bg-brand-600 text-white shadow-sm",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-white",
    outline: "border-2 border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600 bg-transparent"
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
}