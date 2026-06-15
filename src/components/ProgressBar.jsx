// src/components/ProgressBar.jsx
import React from "react";

export default function ProgressBar({ percentage, label }) {
  const cappedPercentage = Math.min(Math.max(percentage || 0, 0), 100);
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs font-bold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider">
          <span>{label}</span>
          <span>{cappedPercentage}%</span>
        </div>
      )}
      <div className="w-full bg-slate-100 dark:bg-indigo-950/60 h-2.5 rounded-full overflow-hidden shadow-inner border border-slate-200/20 dark:border-indigo-950/40">
        <div
          className="h-full rounded-full bg-gradient-to-r from-accentViolet-500 to-emerald-500 transition-all duration-500"
          style={{ width: `${cappedPercentage}%` }}
        />
      </div>
    </div>
  );
}
