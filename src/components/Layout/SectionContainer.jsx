import React from 'react';

export default function SectionContainer({ title, icon, children, className = '' }) {
  return (
    <section className={`bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden ${className}`}>
      {title && (
        <div className="px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex items-center gap-2">
          {icon && <span className="text-slate-500">{icon}</span>}
          <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">{title}</h3>
        </div>
      )}
      <div className="p-4 h-full">
        {children}
      </div>
    </section>
  );
}