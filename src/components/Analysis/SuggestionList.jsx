import React from 'react';
import { AlertCircle, CheckCircle, Info } from 'lucide-react';

const SeverityIcon = ({ level }) => {
  if (level === 'high') return <AlertCircle className="text-red-500 w-5 h-5" />;
  if (level === 'medium') return <Info className="text-amber-500 w-5 h-5" />;
  return <CheckCircle className="text-blue-500 w-5 h-5" />;
};

export default function SuggestionList({ suggestions }) {
  return (
    <div className="space-y-3 h-[400px] overflow-y-auto pr-2">
      {suggestions.length === 0 ? (
        <div className="text-slate-400 text-center py-10 italic">No issues detected. Great job!</div>
      ) : (
        suggestions.map((s) => (
          <div key={s.id} className="p-4 bg-white dark:bg-slate-900 border-l-4 border-l-brand-500 rounded-r-lg shadow-sm border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2 mb-1">
              <SeverityIcon level={s.severity} />
              <h4 className="font-semibold text-sm">{s.title}</h4>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">{s.description}</p>
            <div className="text-[10px] uppercase font-bold text-brand-600 bg-brand-50 dark:bg-brand-900/20 px-2 py-1 inline-block rounded">
              Fix: {s.recommendation}
            </div>
          </div>
        ))
      )}
    </div>
  );
}