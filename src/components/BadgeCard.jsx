// src/components/BadgeCard.jsx
import React from "react";
import { Lock } from "lucide-react";

export default function BadgeCard({ badge }) {
  const { title, description, icon, unlocked, color } = badge;

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 ${
        unlocked
          ? "bg-white dark:bg-darkNavy-900 border-slate-200 dark:border-indigo-950/60 shadow-md hover:shadow-xl hover:-translate-y-1 pulse-glow-active"
          : "bg-slate-100/50 dark:bg-darkNavy-950/20 border-slate-200/50 dark:border-indigo-950/20 opacity-50"
      }`}
      style={unlocked ? { borderBottom: `4px solid ${color || "#6366f1"}` } : {}}
    >
      {/* Icon Sphere */}
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center text-3.5xl mb-4 relative shadow-sm ${
          unlocked
            ? "bg-slate-50 dark:bg-indigo-950/40 border border-slate-100 dark:border-indigo-900/30"
            : "bg-slate-200 dark:bg-darkNavy-900/60"
        }`}
      >
        <span className={unlocked ? "animate-bounce duration-1000 delay-300" : "filter grayscale"}>
          {icon}
        </span>
        {!unlocked && (
          <div className="absolute inset-0 flex items-center justify-center bg-slate-300/40 dark:bg-darkNavy-950/40 rounded-full">
            <Lock className="w-5 h-5 text-slate-500 dark:text-slate-400" />
          </div>
        )}
      </div>

      <h4 className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-1 text-center">
        {title}
      </h4>
      <p className="text-xs text-slate-400 dark:text-slate-500 text-center font-medium max-w-[150px]">
        {description}
      </p>

      {unlocked && (
        <span className="absolute top-2.5 right-2.5 text-[10px] font-extrabold uppercase bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/10">
          Açildi
        </span>
      )}
    </div>
  );
}
