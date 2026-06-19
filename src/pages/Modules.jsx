// src/pages/Modules.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { modules } from "../data/modules";
import { words } from "../data/words";

export default function Modules({ progress }) {
  const [activeLevel, setActiveLevel] = useState("A1");

  const getModuleWordCount = (moduleId) => {
    return words.filter((w) => w.module === moduleId).length;
  };

  const filteredModules = modules.filter((m) => (m.level || "A1") === activeLevel);

  const a1Count = modules.filter((m) => (m.level || "A1") === "A1").length;
  const a2Count = modules.filter((m) => m.level === "A2").length;
  const a1Completed = modules
    .filter((m) => (m.level || "A1") === "A1")
    .filter((m) => (progress[m.id] || {}).completed).length;
  const a2Completed = modules
    .filter((m) => m.level === "A2")
    .filter((m) => (progress[m.id] || {}).completed).length;

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-black text-slate-800 dark:text-slate-100">
          Eğitim Modülleri
        </h1>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
          A1'den A2'ye tam kurs: {a1Count + a2Count} modül, {words.length} kelime.
        </p>
      </div>

      {/* Level Tabs */}
      <div className="flex gap-3 flex-wrap">
        {[
          { level: "A1", label: "A1 — Başlangıç", total: a1Count, completed: a1Completed, color: "sky" },
          { level: "A2", label: "A2 — Temel", total: a2Count, completed: a2Completed, color: "violet" },
        ].map(({ level, label, total, completed, color }) => (
          <button
            key={level}
            onClick={() => setActiveLevel(level)}
            className={`flex items-center gap-3 px-5 py-3 rounded-2xl border font-extrabold transition-all text-sm ${
              activeLevel === level
                ? level === "A1"
                  ? "bg-sky-500 border-sky-500 text-white shadow-lg shadow-sky-500/20"
                  : "bg-violet-600 border-violet-600 text-white shadow-lg shadow-violet-500/20"
                : "bg-white dark:bg-darkNavy-900 border-slate-200 dark:border-indigo-950/60 text-slate-600 dark:text-slate-300 hover:border-slate-300"
            }`}
          >
            <span className={`text-xs font-black px-2 py-0.5 rounded-lg ${
              activeLevel === level ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-darkNavy-800 text-slate-500"
            }`}>{level}</span>
            <span>{label}</span>
            <span className={`text-xs font-semibold ${activeLevel === level ? "text-white/70" : "text-slate-400"}`}>
              {completed}/{total} tamamlandı
            </span>
          </button>
        ))}
      </div>

      {/* Level description */}
      <div className={`p-4 rounded-2xl border text-sm font-semibold ${
        activeLevel === "A1"
          ? "bg-sky-50 dark:bg-sky-900/10 border-sky-200 dark:border-sky-800/30 text-sky-700 dark:text-sky-300"
          : "bg-violet-50 dark:bg-violet-900/10 border-violet-200 dark:border-violet-800/30 text-violet-700 dark:text-violet-300"
      }`}>
        {activeLevel === "A1"
          ? "🌱 A1 Seviyesi: Günlük temel ihtiyaçlar, tanışma, sayılar, renkler, aile, yiyecek ve acil durumlar. Almancayla ilk adımlarınız için 12 modül."
          : "🚀 A2 Seviyesi: Geçmiş zaman (Perfekt & Präteritum), sıfat çekimi, karşılaştırma, dönüşlü fiiller, yan cümleler, edatlar, meslekler ve seyahat. A1'i tamamladıktan sonra başlayın."}
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredModules.map((module) => {
          const modProgress = progress[module.id] || { score: 0, completed: false, date: "" };
          const wordCount = getModuleWordCount(module.id);

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
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded ${
                      (module.level || "A1") === "A2"
                        ? "bg-violet-500/10 text-violet-500 border border-violet-500/20"
                        : "bg-sky-500/10 text-sky-500 border border-sky-500/20"
                    }`}>
                      {module.level || "A1"}
                    </span>
                    {modProgress.completed && (
                      <span className="inline-flex items-center gap-0.5 text-[10px] font-bold bg-emerald-500/10 text-emerald-500 px-1.5 py-0.5 rounded border border-emerald-500/20">
                        ✓ Tamamlandı
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
                    {wordCount}
                  </span>
                </div>
                <div className="text-center px-4 md:border-r border-slate-100 dark:border-indigo-950/40">
                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">En Yüksek</span>
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
