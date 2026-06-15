// src/components/ModuleCard.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Lock, Play } from "lucide-react";
import { getLevelInfo } from "../utils/xp";

export default function ModuleCard({ module, progress, index }) {
  const modProgress = progress[module.id] || { score: 0, completed: false, percentage: 0 };
  const percentage = modProgress.completed ? 100 : (modProgress.percentage || 0);

  const isActive = !modProgress.completed;
  const isCompleted = modProgress.completed;

  return (
    <div
      className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-300 overflow-hidden group ${
        isCompleted
          ? "border-emerald-500 bg-emerald-50/10 dark:bg-emerald-900/10 hover:shadow-md"
          : "border-slate-200 dark:border-indigo-950/60 bg-white dark:bg-darkNavy-900 hover:shadow-md"
      }`}
    >
      {/* Accent Top Border */}
      <div 
        className="absolute top-0 left-0 right-0 h-1" 
        style={{ backgroundColor: isCompleted ? "#10b981" : module.color }} 
      />

      <div className="p-5 pt-6">
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-xl shadow-sm border border-slate-100 dark:border-indigo-900/20"
            style={{ backgroundColor: `${module.color}10` }}
          >
            {module.icon}
          </div>
          {isCompleted && (
            <span className="flex items-center gap-1 text-[10px] font-black bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/30">
              <CheckCircle2 className="w-3 h-3 fill-emerald-500 text-white" />
              TAMAM
            </span>
          )}
        </div>

        <div className="mb-3">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">
            Modül {module.id}
          </span>
          <h3 className="text-base font-bold mb-1 text-slate-800 dark:text-slate-100 group-hover:text-sky-600 transition-colors">
            {module.titleDE}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">{module.titleTR}</p>
          <p className="text-xs text-slate-400 dark:text-slate-500 mt-2 line-clamp-2 leading-relaxed">
            {module.description}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5">
        {/* Progress bar */}
        <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 mb-2">
          <span>İlerleme</span>
          <span>{percentage}%</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-indigo-950/60 h-1 rounded-full overflow-hidden mb-4">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${percentage}%`,
              backgroundColor: isCompleted ? "#10b981" : module.color,
            }}
          />
        </div>

        <Link
          to={`/modules/${module.id}`}
          className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg text-sm font-bold transition-all border ${
            isCompleted
              ? "bg-white border-emerald-200 text-emerald-600 hover:bg-emerald-50 dark:bg-darkNavy-800 dark:border-emerald-900/50 dark:text-emerald-400"
              : "bg-slate-900 text-white hover:bg-slate-800 border-transparent dark:bg-sky-600 dark:hover:bg-sky-500"
          }`}
        >
          {isCompleted ? (
            <>Tekrar Çalış <Play className="w-3.5 h-3.5" /></>
          ) : (
            <>Derse Başla <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" /></>
          )}
        </Link>
      </div>
    </div>
  );
}
