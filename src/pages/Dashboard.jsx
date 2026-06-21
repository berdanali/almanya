// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, ShieldCheck, Layers, ChevronRight,
  User, Award, Flame, BarChart2, CheckCircle2, GraduationCap, ArrowRight, MessageCircle
} from "lucide-react";
import { modules } from "../data/modules";
import { words } from "../data/words";
import { getRandomQuote } from "../utils/helpers";

function XPLevel(xp) {
  const level = Math.floor(xp / 200) + 1;
  const current = xp - (level - 1) * 200;
  const pct = Math.round((current / 200) * 100);
  return { level, pct, current, needed: 200 };
}

export default function Dashboard({ username, streak, points, xp, progress, learnedWords, dailyQuests, setUsername }) {
  const [nameInput, setNameInput] = useState("");
  const [quote, setQuote] = useState({ de: "", tr: "" });

  useEffect(() => { setQuote(getRandomQuote()); }, []);

  const totalWords = words.length;
  const a1Modules = modules.filter(m => (m.level || "A1") === "A1");
  const a2Modules = modules.filter(m => m.level === "A2");
  const completedModules = Object.values(progress).filter(m => m.completed).length;
  const a1Completed = a1Modules.filter(m => (progress[m.id] || {}).completed).length;
  const a2Completed = a2Modules.filter(m => (progress[m.id] || {}).completed).length;
  const learnedPct = Math.round((learnedWords.length / totalWords) * 100) || 0;
  const xpInfo = XPLevel(xp || 0);
  const nextModule = modules.find(m => { const p = progress[m.id]; return !p || !p.completed; });
  const completedQuests = (dailyQuests || []).filter(q => q.completed).length;
  const totalQuests = (dailyQuests || []).length;

  if (!username) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-sm w-full bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg p-8 space-y-7">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-xl bg-indigo-600 flex items-center justify-center mx-auto">
              <span className="text-white font-black text-xl">A1</span>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">Almancakursu</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Goethe A1 sınav hazırlık platformuna hoş geldiniz
              </p>
            </div>
          </div>
          <form onSubmit={e => { e.preventDefault(); if (nameInput.trim()) setUsername(nameInput.trim()); }} className="space-y-3">
            <div className="relative">
              <User className="absolute left-3.5 top-3 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Adınız"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                maxLength={30}
                required
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm font-semibold text-slate-800 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-sm transition shadow-sm active:scale-[0.98]"
            >
              Eğitime Başla
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">

      {/* ── Welcome ── */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-black text-slate-900 dark:text-white">Willkommen, {username}!</h1>
          {quote.de && (
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1 italic">
              „{quote.de}" — {quote.tr}
            </p>
          )}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="flex items-center gap-1.5 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 px-3 py-2 rounded-xl text-sm font-black text-amber-600 dark:text-amber-400">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500" />
            {streak} günlük seri
          </div>
          <div className="flex items-center gap-1.5 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200/60 dark:border-indigo-800/40 px-3 py-2 rounded-xl text-sm font-black text-indigo-600 dark:text-indigo-400">
            <Award className="w-4 h-4" />
            {points.toLocaleString()} puan
          </div>
        </div>
      </div>

      {/* ── 4 Stats ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Seviye" value={`Sev. ${xpInfo.level}`} sub={`${xp || 0} XP`} pct={xpInfo.pct} barColor="bg-indigo-500" />
        <StatCard label="Kelimeler" value={`${learnedWords.length}/${totalWords}`} sub={`${learnedPct}% öğrenildi`} pct={learnedPct} barColor="bg-emerald-500" />
        <StatCard label="Modüller" value={`${completedModules}/${modules.length}`} sub="tamamlanan" pct={Math.round((completedModules / modules.length) * 100) || 0} barColor="bg-violet-500" />
        <StatCard
          label="Günlük Görev"
          value={`${completedQuests}/${totalQuests}`}
          sub="bugünkü hedef"
          pct={totalQuests > 0 ? Math.round((completedQuests / totalQuests) * 100) : 0}
          barColor="bg-amber-500"
        />
      </div>

      {/* ── Main Sections ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

        {/* Kurs Card - big */}
        <Link
          to="/modules"
          className="lg:col-span-2 group bg-slate-900 dark:bg-slate-800 rounded-2xl p-6 border border-slate-800 dark:border-slate-700 hover:shadow-xl transition-all hover:-translate-y-0.5 relative overflow-hidden"
        >
          <div className="absolute right-0 top-0 opacity-[0.04] pointer-events-none">
            <BookOpen className="w-56 h-56 text-white translate-x-8 -translate-y-8" />
          </div>
          <div className="relative z-10 h-full flex flex-col justify-between gap-8">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <h2 className="text-xl font-black text-white">Almanca Kursu (A1 → A2)</h2>
                <p className="text-slate-400 text-sm mt-1 leading-relaxed">
                  {modules.length} modül, {totalWords} kelime. Temel grameri ve günlük dili öğrenin.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold text-slate-400">
                <span>A1 — {a1Completed}/{a1Modules.length}</span>
                <span>A2 — {a2Completed}/{a2Modules.length}</span>
              </div>
              <div className="space-y-1.5">
                <BarLine pct={Math.round((a1Completed / a1Modules.length) * 100) || 0} color="bg-sky-500" />
                <BarLine pct={Math.round((a2Completed / a2Modules.length) * 100) || 0} color="bg-violet-500" />
              </div>
              <div className="pt-1 flex items-center gap-1.5 text-sky-400 font-bold text-sm group-hover:gap-2.5 transition-all">
                Kursa Devam Et <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>

        {/* Side cards */}
        <div className="space-y-4">
          <QuickLink
            to="/goethe"
            icon={<ShieldCheck className="w-4 h-4 text-amber-600 dark:text-amber-400" />}
            iconBg="bg-amber-100 dark:bg-amber-900/30"
            title="Sınav Hazırlığı"
            desc="Goethe A1 sınav simülasyonu — 4 beceri alanı"
            linkText="Sınava Git"
            linkColor="text-amber-600 dark:text-amber-400"
          />
          <QuickLink
            to="/flashcards"
            icon={<GraduationCap className="w-4 h-4 text-violet-600 dark:text-violet-400" />}
            iconBg="bg-violet-100 dark:bg-violet-900/30"
            title="Kelime Kartları"
            desc={`${learnedWords.length} öğrenildi · ${totalWords - learnedWords.length} kelime kaldı`}
            linkText="Kelime Çalış"
            linkColor="text-violet-600 dark:text-violet-400"
          />
          <QuickLink
            to="/progress"
            icon={<BarChart2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
            iconBg="bg-emerald-100 dark:bg-emerald-900/30"
            title="İlerleme & Grafikler"
            desc="Hata defteri, rozetler ve istatistikler"
            linkText="İlerlemeyi Gör"
            linkColor="text-emerald-600 dark:text-emerald-400"
          />
          <QuickLink
            to="/conversations"
            icon={<MessageCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />}
            iconBg="bg-teal-100 dark:bg-teal-900/30"
            title="Konuşma Pratiği"
            desc="8 senaryo · AI karakterlerle Almanca konuş"
            linkText="Konuşmaya Başla"
            linkColor="text-teal-600 dark:text-teal-400"
          />
        </div>
      </div>

      {/* ── Bottom: Daily Quests + Continue ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

        {/* Daily Quests */}
        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-black text-slate-800 dark:text-white">Günlük Görevler</h2>
            <span className="text-xs font-black px-2 py-1 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400">
              {completedQuests}/{totalQuests}
            </span>
          </div>
          <div className="space-y-2.5">
            {(dailyQuests || []).map(quest => {
              const pct = quest.goal > 0 ? Math.min(100, Math.round((quest.progress / quest.goal) * 100)) : 0;
              return (
                <div
                  key={quest.id}
                  className={`flex items-center gap-3 p-3.5 rounded-xl border transition-all ${
                    quest.completed
                      ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200/60 dark:border-emerald-900/30"
                      : "bg-slate-50 dark:bg-slate-800/50 border-slate-200/60 dark:border-slate-700/40"
                  }`}
                >
                  <span className="text-lg flex-shrink-0">{quest.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-black truncate ${quest.completed ? "text-emerald-700 dark:text-emerald-400" : "text-slate-700 dark:text-slate-200"}`}>
                        {quest.label}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 ml-2 flex-shrink-0">+{quest.xp} XP</span>
                    </div>
                    <div className="w-full h-1 bg-slate-200 dark:bg-slate-700 rounded-full mt-1.5 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${quest.completed ? "bg-emerald-500" : "bg-amber-500"}`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="text-[10px] text-slate-400 mt-1">{quest.progress}/{quest.goal} {quest.description}</p>
                  </div>
                  {quest.completed && <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
                </div>
              );
            })}
          </div>
        </div>

        {/* Continue + vocabulary */}
        <div className="space-y-4">
          {nextModule && (
            <div className="bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl p-5 border border-indigo-500/30">
              <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest mb-3">Kaldığın Yerden Devam Et</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
                  {nextModule.icon}
                </div>
                <div>
                  <p className="text-[10px] font-semibold text-indigo-200">Modül {nextModule.id}</p>
                  <h3 className="text-sm font-black text-white">{nextModule.titleDE}</h3>
                  <p className="text-xs text-indigo-200">{nextModule.titleTR}</p>
                </div>
              </div>
              <Link
                to={`/modules/${nextModule.id}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-sm border border-white/20 transition-all active:scale-[0.98]"
              >
                Devam Et <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          <Link
            to="/vocabulary"
            className="flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-4 h-4 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-black text-slate-800 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Tüm Kelime Hazinesi</p>
              <p className="text-xs text-slate-400">{learnedWords.length} öğrenildi · {totalWords - learnedWords.length} kaldı</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, sub, pct, barColor }) {
  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 space-y-2">
      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{label}</p>
      <p className="text-lg font-black text-slate-800 dark:text-white">{value}</p>
      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className={`h-full ${barColor} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
      </div>
      <p className="text-[10px] font-semibold text-slate-400">{sub}</p>
    </div>
  );
}

function BarLine({ pct, color }) {
  return (
    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
      <div className={`h-full ${color} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
    </div>
  );
}

function QuickLink({ to, icon, iconBg, title, desc, linkText, linkColor }) {
  return (
    <Link
      to={to}
      className="group flex items-start gap-3.5 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <div className={`w-9 h-9 rounded-xl ${iconBg} flex items-center justify-center flex-shrink-0`}>{icon}</div>
      <div className="min-w-0">
        <p className="text-sm font-black text-slate-800 dark:text-white">{title}</p>
        <p className="text-xs text-slate-400 mt-0.5 leading-snug">{desc}</p>
        <p className={`text-xs font-bold mt-1.5 flex items-center gap-1 ${linkColor} group-hover:gap-2 transition-all`}>
          {linkText} <ChevronRight className="w-3.5 h-3.5" />
        </p>
      </div>
    </Link>
  );
}
