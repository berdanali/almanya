// src/pages/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  BookOpen, ShieldCheck, MessageCircle, Layers, ChevronRight,
  User, Award, Flame, BarChart2, CheckCircle2, Circle
} from "lucide-react";
import { modules } from "../data/modules";
import { words } from "../data/words";
import { getRandomQuote } from "../utils/helpers";

function XPLevel(xp) {
  const level = Math.floor(xp / 200) + 1;
  const currentLevelXP = (level - 1) * 200;
  const nextLevelXP = level * 200;
  const pct = Math.round(((xp - currentLevelXP) / 200) * 100);
  return { level, pct, current: xp - currentLevelXP, needed: 200 };
}

export default function Dashboard({ username, streak, points, xp, progress, learnedWords, dailyQuests, setUsername }) {
  const [nameInput, setNameInput] = useState("");
  const [quote, setQuote] = useState({ de: "", tr: "" });

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    if (nameInput.trim()) setUsername(nameInput.trim());
  };

  const totalWords = words.length;
  const completedModules = Object.values(progress).filter(m => m.completed).length;
  const courseProgressPct = Math.round((completedModules / modules.length) * 100) || 0;
  const learnedPct = Math.round((learnedWords.length / totalWords) * 100) || 0;
  const xpInfo = XPLevel(xp || 0);

  // Find first incomplete module for "Continue Learning"
  const nextModule = modules.find(m => {
    const p = progress[m.id];
    return !p || !p.completed;
  });

  const completedQuests = (dailyQuests || []).filter(q => q.completed).length;
  const totalQuests = (dailyQuests || []).length;

  if (!username) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full p-8 rounded-3xl bg-white dark:bg-darkNavy-900 shadow-xl border border-slate-200 dark:border-indigo-950/60 text-center space-y-8">
          <div className="space-y-3">
            <div className="w-16 h-16 rounded-2xl bg-sky-600 flex items-center justify-center mx-auto shadow-lg">
              <span className="text-white font-black text-2xl">A1</span>
            </div>
            <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
              Almanca<span className="text-sky-600">Kursu</span>
            </h2>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Profesyonel dil eğitim platformuna hoş geldiniz. Lütfen devam etmek için adınızı girin.
            </p>
          </div>
          <form onSubmit={handleRegister} className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Adınız Soyadınız"
                value={nameInput}
                onChange={e => setNameInput(e.target.value)}
                maxLength={30}
                required
                className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-slate-300 dark:border-indigo-900/40 bg-slate-50 dark:bg-darkNavy-950/40 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm font-bold text-slate-800 dark:text-slate-100 transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 dark:bg-sky-600 dark:hover:bg-sky-500 text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-[0.98]"
            >
              Eğitime Başla
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">

      {/* ── Welcome Header ── */}
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between bg-white dark:bg-darkNavy-900 p-6 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-sm">
        <div className="space-y-1.5">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100">
            Willkommen, {username}!
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 italic">"{quote.de}" — {quote.tr}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-900/30 flex items-center gap-2.5">
            <Flame className="w-5 h-5 text-amber-500 fill-amber-500" />
            <div>
              <div className="text-[10px] font-bold text-amber-600/70 dark:text-amber-400/70 uppercase tracking-wider">Seri</div>
              <div className="text-sm font-black text-amber-700 dark:text-amber-300">{streak} Gün</div>
            </div>
          </div>
          <div className="px-4 py-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/20 border border-sky-200/60 dark:border-sky-900/30 flex items-center gap-2.5">
            <Award className="w-5 h-5 text-sky-500" />
            <div>
              <div className="text-[10px] font-bold text-sky-600/70 dark:text-sky-400/70 uppercase tracking-wider">Puan</div>
              <div className="text-sm font-black text-sky-700 dark:text-sky-300">{points.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Row ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* XP Level */}
        <div className="p-4 rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Seviye</span>
            <span className="text-xs font-black text-indigo-500">Sev. {xpInfo.level}</span>
          </div>
          <div className="text-xl font-black text-slate-800 dark:text-slate-100">{xp || 0} XP</div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden">
            <div className="h-full bg-indigo-500 rounded-full transition-all duration-700" style={{ width: `${xpInfo.pct}%` }} />
          </div>
          <div className="text-[10px] font-semibold text-slate-400">{xpInfo.current} / {xpInfo.needed} XP</div>
        </div>

        {/* Words Learned */}
        <div className="p-4 rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kelimeler</span>
            <span className="text-xs font-black text-emerald-500">{learnedPct}%</span>
          </div>
          <div className="text-xl font-black text-slate-800 dark:text-slate-100">{learnedWords.length} <span className="text-sm font-semibold text-slate-400">/ {totalWords}</span></div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full transition-all duration-700" style={{ width: `${learnedPct}%` }} />
          </div>
          <div className="text-[10px] font-semibold text-slate-400">öğrenilen kelime</div>
        </div>

        {/* Modules Completed */}
        <div className="p-4 rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Modüller</span>
            <span className="text-xs font-black text-violet-500">{courseProgressPct}%</span>
          </div>
          <div className="text-xl font-black text-slate-800 dark:text-slate-100">{completedModules} <span className="text-sm font-semibold text-slate-400">/ {modules.length}</span></div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden">
            <div className="h-full bg-violet-500 rounded-full transition-all duration-700" style={{ width: `${courseProgressPct}%` }} />
          </div>
          <div className="text-[10px] font-semibold text-slate-400">tamamlanan modül</div>
        </div>

        {/* Daily Quests Summary */}
        <div className="p-4 rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Günlük Görev</span>
            <span className="text-xs font-black text-amber-500">{completedQuests}/{totalQuests}</span>
          </div>
          <div className="text-xl font-black text-slate-800 dark:text-slate-100">{completedQuests} <span className="text-sm font-semibold text-slate-400">tamamlandı</span></div>
          <div className="w-full h-1.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden">
            <div className="h-full bg-amber-500 rounded-full transition-all duration-700" style={{ width: totalQuests > 0 ? `${Math.round((completedQuests / totalQuests) * 100)}%` : "0%" }} />
          </div>
          <div className="text-[10px] font-semibold text-slate-400">bugünkü hedefler</div>
        </div>
      </div>

      {/* ── Main Navigation Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Core Course */}
        <Link to="/modules" className="group block relative overflow-hidden bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
          <div className="absolute right-0 top-0 opacity-10 transform translate-x-4 -translate-y-4 group-hover:scale-110 transition-transform duration-500">
            <BookOpen className="w-48 h-48 text-white" />
          </div>
          <div className="relative z-10 flex flex-col h-full justify-between space-y-10">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 flex items-center justify-center border border-sky-500/30">
                <BookOpen className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Mein Kurs (A1)</h2>
                <p className="text-slate-300 text-sm leading-relaxed max-w-sm">
                  Almanca A1 seviyesinin temel gramer kuralları, konuya özel kelimeler ve alıştırmalar. Sıfırdan başlayanlar için ana eğitim rotası.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs font-bold text-slate-300">
                <span>İlerleme: %{courseProgressPct}</span>
                <span>{completedModules} / {modules.length} Modül</span>
              </div>
              <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-sky-500 rounded-full transition-all duration-1000" style={{ width: `${courseProgressPct}%` }} />
              </div>
              <div className="pt-2 flex items-center gap-1.5 text-sky-400 font-bold text-sm group-hover:gap-2 transition-all">
                Kursa Devam Et <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </Link>

        <div className="grid grid-cols-1 gap-4">
          <Link to="/goethe" className="group block relative overflow-hidden bg-white dark:bg-darkNavy-900 rounded-3xl p-5 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5 text-amber-600 dark:text-amber-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-amber-600 dark:group-hover:text-amber-500 transition-colors">Prüfungsvorbereitung</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Goethe-Zertifikat A1 sınavı formatında özel fasiküller ve simülasyon testleri.
                </p>
                <div className="pt-2 flex items-center gap-1 text-sm font-bold text-amber-600 dark:text-amber-500 group-hover:gap-2 transition-all">
                  Sınav Merkezine Git <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/dailylife" className="group block relative overflow-hidden bg-white dark:bg-darkNavy-900 rounded-3xl p-5 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-500" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-500 transition-colors">Alltagssprache</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Kafede, alışverişte, doktorda. Almanya'da günlük konuşma diyalogları ve kalıplar.
                </p>
                <div className="pt-2 flex items-center gap-1 text-sm font-bold text-emerald-600 dark:text-emerald-500 group-hover:gap-2 transition-all">
                  Günlük Hayata Göz At <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>

          <Link to="/flashcards" className="group block relative overflow-hidden bg-white dark:bg-darkNavy-900 rounded-3xl p-5 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                <Layers className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">Wortschatz (Flashcards)</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  Öğrendiğiniz tüm kelimeleri akıllı tekrar sistemiyle kalıcı hafızaya alın.
                </p>
                <div className="pt-2 flex items-center gap-1 text-sm font-bold text-purple-600 dark:text-purple-400 group-hover:gap-2 transition-all">
                  Kelimeleri Tekrar Et <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* ── Bottom Row: Daily Quests + Continue Learning ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Daily Quests */}
        <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-base font-black text-slate-800 dark:text-slate-100">Günlük Görevler</h2>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">Her gün yenilenir</p>
            </div>
            <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              {completedQuests}/{totalQuests} Tamamlandı
            </span>
          </div>

          <div className="space-y-3">
            {(dailyQuests || []).map(quest => {
              const pct = quest.goal > 0 ? Math.min(100, Math.round((quest.progress / quest.goal) * 100)) : 0;
              return (
                <div key={quest.id} className={`p-3.5 rounded-2xl border transition-all ${
                  quest.completed
                    ? "bg-emerald-50/70 dark:bg-emerald-950/15 border-emerald-200/60 dark:border-emerald-900/30"
                    : "bg-slate-50 dark:bg-indigo-950/20 border-slate-200/50 dark:border-indigo-900/10"
                }`}>
                  <div className="flex items-center gap-3">
                    <span className="text-xl flex-shrink-0">{quest.icon}</span>
                    <div className="flex-1 min-w-0 space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-sm font-extrabold truncate ${quest.completed ? "text-emerald-700 dark:text-emerald-400" : "text-slate-800 dark:text-slate-100"}`}>
                          {quest.label}
                        </span>
                        <span className={`text-xs font-black flex-shrink-0 ${quest.completed ? "text-emerald-600 dark:text-emerald-400" : "text-slate-500 dark:text-slate-400"}`}>
                          {quest.progress}/{quest.goal}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-200/80 dark:bg-indigo-950/60 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all duration-500 ${quest.completed ? "bg-emerald-500" : "bg-amber-500"}`}
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <p className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">{quest.description} • +{quest.xp} XP</p>
                    </div>
                    {quest.completed && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Continue Learning / Progress Links */}
        <div className="space-y-4">
          {/* Continue Learning */}
          {nextModule && (
            <div className="p-5 rounded-3xl bg-gradient-to-br from-indigo-600 to-violet-600 border border-indigo-500/30 shadow-lg">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black text-indigo-200 uppercase tracking-widest">Kaldığın Yerden Devam Et</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-white/10 flex-shrink-0">
                    {nextModule.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-indigo-200">Modül {nextModule.id}</div>
                    <h3 className="text-base font-black text-white">{nextModule.titleDE}</h3>
                    <p className="text-xs text-indigo-200">{nextModule.titleTR}</p>
                  </div>
                </div>
                <Link
                  to={`/modules/${nextModule.id}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-extrabold text-sm transition-all border border-white/20 active:scale-[0.98]"
                >
                  Modüle Git <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Progress Link */}
          <Link
            to="/progress"
            className="flex items-center gap-4 p-5 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center flex-shrink-0">
              <BarChart2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">İlerleme & Rozetler</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500">Grafikler, hata defteri ve kazandığın rozetler</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-violet-500 group-hover:translate-x-0.5 transition-all" />
          </Link>

          {/* Vocabulary quick-start */}
          <Link
            to="/vocabulary"
            className="flex items-center gap-4 p-5 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 group"
          >
            <div className="w-11 h-11 rounded-xl bg-sky-100 dark:bg-sky-900/30 flex items-center justify-center flex-shrink-0">
              <BookOpen className="w-5 h-5 text-sky-600 dark:text-sky-400" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">Tüm Kelime Hazinesi</h3>
              <p className="text-xs text-slate-400 dark:text-slate-500">{learnedWords.length} öğrenildi · {totalWords - learnedWords.length} kaldı</p>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>

      </div>
    </div>
  );
}
