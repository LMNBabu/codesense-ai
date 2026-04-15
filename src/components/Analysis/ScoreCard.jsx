import React from 'react';

const ScoreItem = ({ label, score, color }) => (
  <div className="flex flex-col items-center p-4 bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
    <div className={`text-3xl font-bold ${color}`}>{score}%</div>
    <div className="text-xs uppercase tracking-wider text-slate-500 mt-1">{label}</div>
    <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full mt-3 overflow-hidden">
      <div 
        className={`h-full transition-all duration-1000 ease-out`} 
        style={{ width: `${score}%`, backgroundColor: 'currentColor' }}
      ></div>
    </div>
  </div>
);

export default function ScoreCard({ scores }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <ScoreItem label="Code Quality" score={scores.quality} color="text-blue-500" />
      <ScoreItem label="UI / UX" score={scores.uiux} color="text-purple-500" />
      <ScoreItem label="Accessibility" score={scores.a11y} color="text-emerald-500" />
    </div>
  );
}