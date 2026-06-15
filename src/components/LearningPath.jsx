// src/components/LearningPath.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Lock, Play, ChevronRight } from "lucide-react";
import { modules } from "../data/modules";

export default function LearningPath({ progress }) {
  return (
    <div className="rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-indigo-950/40">
        <div className="flex items-center gap-2">
          <span className="text-xl">🗺️</span>
          <div>
            <h3 className="text-sm font-black text-slate-800 dark:text-slate-100">Öğrenme Yolu</h3>
            <p className="text-[10px] font-semibold text-slate-400">
              {Object.values(progress).filter(p => p.completed).length}/{modules.length} Modül Tamamlandı
            </p>
          </div>
        </div>
        <Link to="/modules" className="text-xs font-bold text-accentViolet-500 hover:underline flex items-center gap-1">
          Tümü <ChevronRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Path items */}
      <div className="p-4 space-y-2 max-h-[340px] overflow-y-auto scrollbar-thin">
        {modules.map((mod, idx) => {
          const modProg = progress[mod.id] || { completed: false, score: 0, percentage: 0 };
          const prevMod = idx > 0 ? progress[modules[idx - 1].id] : { completed: true };
          const isLocked = idx > 0 && !prevMod?.completed;
          const isActive = !modProg.completed && !isLocked;
          const isCompleted = modProg.completed;

          return (
            <div key={mod.id} className="relative">
              {/* Connector line */}
              {idx < modules.length - 1 && (
                <div className={`absolute left-[22px] top-[44px] w-0.5 h-3 ${isCompleted ? "bg-emerald-400" : "bg-slate-200 dark:bg-indigo-950/60"}`} />
              )}

              <Link
                to={isLocked ? "#" : `/modules/${mod.id}`}
                className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                  isLocked
                    ? "opacity-40 cursor-not-allowed"
                    : isCompleted
                    ? "bg-emerald-50/60 dark:bg-emerald-900/10 hover:bg-emerald-50 dark:hover:bg-emerald-900/20"
                    : isActive
                    ? "bg-indigo-50/60 dark:bg-indigo-900/10 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 ring-1 ring-indigo-200 dark:ring-indigo-800/40"
                    : "hover:bg-slate-50 dark:hover:bg-indigo-950/20"
                }`}
                onClick={isLocked ? e => e.preventDefault() : undefined}
              >
                {/* Icon circle */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 shadow-sm border ${
                    isCompleted
                      ? "border-emerald-200 dark:border-emerald-800/40 bg-emerald-500/10"
                      : isActive
                      ? "border-indigo-200 dark:border-indigo-800/40 bg-indigo-500/10"
                      : "border-slate-200 dark:border-indigo-950/40 bg-slate-50 dark:bg-darkNavy-800"
                  }`}
                  style={isActive || isCompleted ? { borderColor: mod.color + "40" } : {}}
                >
                  {isLocked ? "🔒" : mod.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-extrabold truncate ${
                      isCompleted ? "text-emerald-700 dark:text-emerald-300" :
                      isActive ? "text-indigo-700 dark:text-indigo-300" :
                      "text-slate-700 dark:text-slate-300"
                    }`}>
                      {mod.titleDE}
                    </span>
                    {isActive && (
                      <span className="flex-shrink-0 text-[9px] font-black px-1.5 py-0.5 rounded-full bg-indigo-500 text-white animate-pulse">
                        DEVAM
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400 truncate block">{mod.titleTR}</span>
                  {isCompleted && (
                    <div className="mt-1 w-full h-1 bg-emerald-100 dark:bg-emerald-900/30 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${modProg.percentage || 100}%` }} />
                    </div>
                  )}
                </div>

                {/* Status */}
                <div className="flex-shrink-0">
                  {isCompleted && <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500" />}
                  {isActive && <Play className="w-4 h-4 text-indigo-500 fill-indigo-500" />}
                  {isLocked && <Lock className="w-4 h-4 text-slate-300 dark:text-slate-600" />}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
