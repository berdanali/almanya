// src/pages/Modules.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Lock } from "lucide-react";
import { modules } from "../data/modules";
import { words } from "../data/words";

const SUBLEVELS = [
  {
    key: "A1.1",
    label: "A1.1",
    fullLabel: "A1.1 — Temel Başlangıç",
    desc: "Telaffuz, tanışma, sein/haben, düzenli/düzensiz fiiller, artikel ve kasus temelleri.",
    color: "sky",
  },
  {
    key: "A1.2",
    label: "A1.2",
    fullLabel: "A1.2 — Temel Orta",
    desc: "Modal fiiller, edatlar, ayrılan fiiller, sayılar/saat, kelime hazinesi ve günlük diyaloglar.",
    color: "teal",
  },
  {
    key: "A2.1",
    label: "A2.1",
    fullLabel: "A2.1 — Orta Seviye",
    desc: "Perfekt, Dativ, possessif/kişi zamirleri, Präteritum ve dönüşlü fiiller.",
    color: "violet",
  },
  {
    key: "A2.2",
    label: "A2.2",
    fullLabel: "A2.2 — Orta-İleri",
    desc: "Yan cümleler, Wechselpräpositionen, sıfat çekimi, karşılaştırma ve Konjunktiv II.",
    color: "indigo",
  },
];

// Every module now carries an explicit subLevel tag in modules.js.
// The ID-range fallback below only kicks in if a module is ever added without one.
function getSubLevel(mod) {
  if (mod.subLevel) return mod.subLevel;
  if ((mod.level || "A1") === "A2") {
    const a2Ids = modules.filter(m => (m.level || "A1") === "A2").map(m => m.id);
    const half = Math.ceil(a2Ids.length / 2);
    const a21Ids = a2Ids.slice(0, half);
    return a21Ids.includes(mod.id) ? "A2.1" : "A2.2";
  }
  return "A1.1";
}

export default function Modules({ progress }) {
  const [active, setActive] = useState("A1.1");

  const getWordCount = (moduleId) => words.filter(w => w.module === moduleId).length;

  const filtered = modules.filter(m => getSubLevel(m) === active);
  const meta = SUBLEVELS.find(sl => sl.key === active);

  const sublevelCounts = SUBLEVELS.map(sl => {
    const mods = modules.filter(m => getSubLevel(m) === sl.key);
    const done = mods.filter(m => (progress[m.id] || {}).completed).length;
    return { key: sl.key, total: mods.length, done };
  });

  const colorMap = {
    sky:    { tab: "bg-sky-500 text-white border-sky-500",    badge: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",    info: "bg-sky-50 dark:bg-sky-900/10 border-sky-200 dark:border-sky-800/30 text-sky-700 dark:text-sky-300" },
    teal:   { tab: "bg-teal-500 text-white border-teal-500",   badge: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",   info: "bg-teal-50 dark:bg-teal-900/10 border-teal-200 dark:border-teal-800/30 text-teal-700 dark:text-teal-300" },
    violet: { tab: "bg-violet-600 text-white border-violet-600", badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20", info: "bg-violet-50 dark:bg-violet-900/10 border-violet-200 dark:border-violet-800/30 text-violet-700 dark:text-violet-300" },
    indigo: { tab: "bg-indigo-600 text-white border-indigo-600", badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20", info: "bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800/30 text-indigo-700 dark:text-indigo-300" },
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div>
        <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">Almanca Kursu</h1>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
          A1 → A2 tam müfredat · {modules.length} modül · {words.length} kelime
        </p>
      </div>

      {/* Sub-level tabs */}
      <div className="flex gap-2 flex-wrap">
        {SUBLEVELS.map(sl => {
          const counts = sublevelCounts.find(c => c.key === sl.key);
          const colors = colorMap[sl.color];
          const isActive = active === sl.key;
          return (
            <button
              key={sl.key}
              onClick={() => setActive(sl.key)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-bold text-sm transition-all ${
                isActive
                  ? colors.tab + " shadow-md"
                  : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-600"
              }`}
            >
              <span className={`text-xs font-black px-2 py-0.5 rounded-lg border ${
                isActive ? "bg-white/25 border-white/20 text-white" : colors.badge
              }`}>{sl.key}</span>
              <span className="hidden sm:inline">{sl.fullLabel.split(" — ")[1]}</span>
              <span className={`text-xs ${isActive ? "text-white/70" : "text-slate-400"}`}>
                {counts.done}/{counts.total}
              </span>
            </button>
          );
        })}
      </div>

      {/* Sub-level description */}
      {meta && (
        <div className={`p-4 rounded-xl border text-sm font-semibold ${colorMap[meta.color].info}`}>
          <span className="font-black">{meta.fullLabel}</span> — {meta.desc}
        </div>
      )}

      {/* Module list */}
      <div className="grid grid-cols-1 gap-3">
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-400">
            <Lock className="w-8 h-8 mx-auto mb-3 opacity-40" />
            <p className="font-semibold">Bu seviyenin modülleri hazırlanıyor…</p>
          </div>
        ) : (
          filtered.map(module => <ModuleCard key={module.id} module={module} modProgress={progress[module.id]} wordCount={getWordCount(module.id)} />)
        )}
      </div>
    </div>
  );
}

function ModuleCard({ module, modProgress = {}, wordCount }) {
  const { score, percentage, completed } = modProgress;
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all group">

      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left w-full sm:w-auto">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm"
          style={{ backgroundColor: module.color + "20" }}
        >
          {module.icon}
        </div>
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap mb-1">
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest">Modül {module.id}</span>
            {completed && (
              <span className="text-[10px] font-bold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-500/20">
                ✓ Tamamlandı
              </span>
            )}
          </div>
          <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {module.titleDE}
          </h3>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">{module.titleTR}</p>
        </div>
      </div>

      <div className="flex items-center gap-5 my-3 sm:my-0 flex-shrink-0">
        <div className="text-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Kelime</span>
          <span className="text-sm font-extrabold text-slate-700 dark:text-slate-300">{wordCount}</span>
        </div>
        <div className="text-center">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">En Yüksek</span>
          <span className={`text-sm font-extrabold ${completed ? "text-emerald-500" : percentage > 0 ? "text-amber-500" : "text-slate-400"}`}>
            {percentage > 0 ? `%${percentage}` : "—"}
          </span>
        </div>
        <Link
          to={`/kurslar/${module.id}`}
          className="flex items-center gap-1.5 px-5 py-2.5 bg-slate-50 hover:bg-indigo-600 dark:bg-slate-800 dark:hover:bg-indigo-600 text-slate-700 dark:text-slate-200 hover:text-white font-bold rounded-xl text-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-600 transition-all"
        >
          İncele <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
