// src/pages/Conversations.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MessageCircle, Star, CheckCircle2, ChevronRight } from "lucide-react";
import { conversations } from "../data/conversations";

const STORAGE_KEY = "almanca_conv_completed";

function getCompleted() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch { return {}; }
}

const levelColors = {
  A1: {
    gradient: "from-sky-500 to-blue-600",
    badge: "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400",
  },
  A2: {
    gradient: "from-violet-500 to-purple-600",
    badge: "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400",
  },
};

export default function Conversations() {
  const [completed, setCompleted] = useState({});
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setCompleted(getCompleted());
  }, []);

  const filtered = filter === "all" ? conversations : conversations.filter(c => c.level === filter);
  const totalCompleted = conversations.filter(c => completed[c.id]).length;
  const totalXP = conversations.filter(c => completed[c.id]).reduce((s, c) => s + c.xp, 0);

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* ── Header ── */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-black text-slate-900 dark:text-white">Konuşma Pratiği</h1>
            <p className="text-sm text-slate-400 mt-0.5">
              Gerçek hayat senaryolarında AI karakterlerle Almanca konuşun
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
            <p className="text-lg font-black text-slate-800 dark:text-white">{totalCompleted}/{conversations.length}</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide mt-0.5">Tamamlandı</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
            <p className="text-lg font-black text-amber-500">{totalXP}</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide mt-0.5">XP Kazanıldı</p>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800 rounded-xl p-3 text-center">
            <p className="text-lg font-black text-slate-800 dark:text-white">{conversations.length}</p>
            <p className="text-[10px] text-slate-400 font-semibold uppercase tracking-wide mt-0.5">Senaryo</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between text-xs text-slate-400 mb-1.5 font-semibold">
            <span>Toplam İlerleme</span>
            <span>{Math.round((totalCompleted / conversations.length) * 100)}%</span>
          </div>
          <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-700"
              style={{ width: `${(totalCompleted / conversations.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* ── Filtre ── */}
      <div className="flex gap-2">
        {[
          { key: "all", label: "Tümü" },
          { key: "A1", label: "A1 — Başlangıç" },
          { key: "A2", label: "A2 — Orta" },
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
              filter === key
                ? "bg-indigo-600 text-white shadow-sm"
                : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-400 dark:hover:border-indigo-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Kartlar ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filtered.map(scenario => {
          const isCompleted = !!completed[scenario.id];
          const colors = levelColors[scenario.level] || levelColors.A1;

          return (
            <Link
              key={scenario.id}
              to={`/conversations/${scenario.id}`}
              className={`group relative bg-white dark:bg-slate-900 border rounded-2xl p-5 hover:shadow-lg transition-all hover:-translate-y-0.5 ${
                isCompleted
                  ? "border-emerald-200 dark:border-emerald-900/50"
                  : "border-slate-200 dark:border-slate-800"
              }`}
            >
              {isCompleted && (
                <div className="absolute top-4 right-4">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
              )}

              <div className="flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${colors.gradient} flex items-center justify-center text-2xl flex-shrink-0 shadow-sm`}>
                  {scenario.emoji}
                </div>
                <div className="min-w-0 flex-1 pr-6">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${colors.badge}`}>
                      {scenario.level}
                    </span>
                    <span className="text-[10px] text-slate-400 font-semibold">{scenario.tag}</span>
                  </div>
                  <p className="font-black text-slate-800 dark:text-white text-sm leading-snug">{scenario.titleDE}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{scenario.titleTR}</p>
                  <div className="flex items-center gap-1 mt-2.5">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-bold text-amber-500">+{scenario.xp} XP</span>
                    <span className="text-slate-300 dark:text-slate-600 mx-1">·</span>
                    <span className="text-xs text-slate-400">{Object.keys(scenario.nodes).length} düğüm</span>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className={`text-xs font-bold ${isCompleted ? "text-emerald-600 dark:text-emerald-400" : "text-indigo-500 dark:text-indigo-400"}`}>
                  {isCompleted ? "Tekrar Oyna" : "Başla"}
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>

      <p className="text-center text-xs text-slate-400 pb-2">
        Yeni senaryolar yakında ekleniyor! 🚀
      </p>
    </div>
  );
}
