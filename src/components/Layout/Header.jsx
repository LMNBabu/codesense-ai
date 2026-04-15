import React from 'react';
import { Sun, Moon, Zap } from 'lucide-react';

export default function Header({ isDark, toggleDark }) {
  return (
    <header className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-brand-500 p-1.5 rounded-lg">
            <Zap className="text-white" size={20} fill="white" />
          </div>
          <h1 className="text-xl font-bold tracking-tight">
            CodeSense <span className="text-brand-500">AI</span>
          </h1>
        </div>
        
        <button 
          onClick={toggleDark}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
}