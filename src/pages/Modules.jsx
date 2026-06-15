// src/pages/Modules.jsx
import React from "react";
import { Link } from "react-router-dom";
import { BookOpen, CheckCircle, ChevronRight, Award } from "lucide-react";
import { modules } from "../data/modules";
import { words } from "../data/words";

export default function Modules({ progress }) {
  
  const getModuleWordCount = (moduleId) => {
    return words.filter((w) => w.module === moduleId).length;
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100">
          Eğitim Modülleri
        </h1>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
          A1 seviyesi hedefinize ulaşmak için 12 yapılandırılmış adımı takip edin.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {modules.map((module) => {
          const modProgress = progress[module.id] || { score: 0, completed: false, date: "" };
          const wordCount = getModuleWordCount(module.id);
          const hasScore = modProgress.score > 0;

          return (
            <div
              key={module.id}
              className="flex flex-col md:flex-row items-center justify-between p-5 rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all group"
            >
              {/* Module Title info */}
              <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left w-full md:w-auto">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-slate-100 dark:border-indigo-950/20 flex-shrink-0"
                  style={{ backgroundColor: `${module.color}15` }}
                >
                  {module.icon}
                </div>
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-2 flex-wrap">
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">
                      Modül {module.id}
                    </span>
                    {modProgress.completed && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-500 px-1.5 py-0.2 rounded border border-emerald-500/20">
                        Başarili
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-accentViolet-500 transition-colors">
                    {module.titleDE}
                  </h3>
                  <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
                    {module.titleTR}
                  </p>
                </div>
              </div>

              {/* Middle Section: Vocab count & Quiz score */}
              <div className="flex items-center gap-6 my-4 md:my-0 flex-wrap justify-center">
                <div className="text-center px-4 border-r border-slate-100 dark:border-indigo-950/40">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">Kelime</span>
                  <span className="text-base font-extrabold text-slate-700 dark:text-slate-300">
                    {wordCount} Kelime
                  </span>
                </div>
                <div className="text-center px-4 md:border-r border-slate-100 dark:border-indigo-950/40">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">En Yüksek Başarı</span>
                  <span className={`text-base font-extrabold ${modProgress.completed ? "text-emerald-500" : modProgress.percentage > 0 ? "text-amber-500" : "text-slate-400 dark:text-slate-500"}`}>
                    {modProgress.percentage > 0 ? `%${modProgress.percentage}` : "-"}
                  </span>
                </div>
              </div>

              {/* Action Button */}
              <Link
                to={`/modules/${module.id}`}
                className="w-full md:w-auto flex items-center justify-center gap-1.5 px-6 py-3 bg-slate-50 hover:bg-accentViolet-500 dark:bg-darkNavy-850 dark:hover:bg-accentViolet-500 text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white font-extrabold rounded-xl text-sm border border-slate-200/50 dark:border-indigo-900/15 shadow-sm hover:shadow-md transition-all"
              >
                <span>İçeriği İncele</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
