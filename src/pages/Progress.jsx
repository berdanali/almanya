// src/pages/Progress.jsx
import React, { useState, useMemo } from "react";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Star, Award, Trash2, CheckCircle2, ArrowRight, Play, RefreshCw, X, CalendarDays, TrendingDown } from "lucide-react";
import { modules } from "../data/modules";
import { words } from "../data/words";
import BadgeCard from "../components/BadgeCard";
import { capitalize } from "../utils/helpers";

export default function Progress({ progress, learnedWords, wrongAnswers, points, streak, removeWrongAnswer, clearWrongAnswers, wordStats, studyDays }) {
  const [activeWrongWord, setActiveWrongWord] = useState(null);
  const [retryInput, setRetryInput] = useState("");
  const [retryChecked, setRetryChecked] = useState(false);
  const [retrySuccess, setRetrySuccess] = useState(false);

  // Compute completed count
  const completedModulesCount = Object.values(progress).filter((m) => m.completed).length;

  // Prepare chart data
  const chartData = modules.map((m) => {
    const p = progress[m.id] || { score: 0, completed: false };
    // Score is stored as correct questions. Let's convert it to a percentage (e.g. out of 10 questions, or custom total)
    // For visual consistency, let's plot the percentage score (0 to 100%)
    // If completed is true, score is at least 70%
    const scoreVal = p.percentage !== undefined ? p.percentage : (p.score ? Math.round(p.score * 10) : 0);
    return {
      name: m.titleDE,
      Skor: scoreVal > 100 ? 100 : scoreVal, // cap at 100
      Renk: m.color
    };
  });

  // Badge list definitions
  const badges = [
    {
      id: "b1",
      title: "İlk Adım 🥇",
      description: "İlk modülü başarıyla tamamladın.",
      icon: "🥇",
      unlocked: completedModulesCount >= 1,
      color: "#6366f1"
    },
    {
      id: "b2",
      title: "Almanca Yolcusu 🚗",
      description: "5 modülü başarıyla tamamladın.",
      icon: "🚗",
      unlocked: completedModulesCount >= 5,
      color: "#8b5cf6"
    },
    {
      id: "b3",
      title: "A1 Ustası 👑",
      description: "Tüm 12 modülü tamamladın!",
      icon: "👑",
      unlocked: completedModulesCount === 12,
      color: "#f59e0b"
    },
    {
      id: "b4",
      title: "İlk Kelimeler 🌟",
      description: "50 kelimeyi learned olarak işaretledin.",
      icon: "🌟",
      unlocked: learnedWords.length >= 50,
      color: "#10b981"
    },
    {
      id: "b5",
      title: "Kelime Avcısı 📖",
      description: "100 kelimeyi learned olarak işaretledin.",
      icon: "📖",
      unlocked: learnedWords.length >= 100,
      color: "#06b6d4"
    },
    {
      id: "b6",
      title: "Sözlük Canavarı 🧙‍♂️",
      description: "200 kelimeyi learned olarak işaretledin.",
      icon: "🧙‍♂️",
      unlocked: learnedWords.length >= 200,
      color: "#ec4899"
    },
    {
      id: "b7",
      title: "Bilgi Küpü 🧠",
      description: "1000'den fazla toplam puan kazandın.",
      icon: "🧠",
      unlocked: points >= 1000,
      color: "#f43f5e"
    },
    {
      id: "b8",
      title: "İstikrarlı Öğrenci 🔥",
      description: "3 günlük çalışma serisi yakaladın.",
      icon: "🔥",
      unlocked: streak >= 3,
      color: "#f59e0b"
    }
  ];

  // Vocabulary stats
  const totalWords = words.length;
  const learnedPercentage = Math.round((learnedWords.length / totalWords) * 100) || 0;

  // Study calendar — last 35 days (5 weeks)
  const calendarDays = useMemo(() => {
    const days = [];
    for (let i = 34; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split("T")[0];
      days.push({ date: dateStr, studied: (studyDays || []).includes(dateStr) });
    }
    return days;
  }, [studyDays]);

  const calendarWeeks = useMemo(() => {
    const weeks = [];
    for (let i = 0; i < calendarDays.length; i += 7) {
      weeks.push(calendarDays.slice(i, i + 7));
    }
    return weeks;
  }, [calendarDays]);

  const studiedThisMonth = calendarDays.filter((d) => d.studied).length;

  // Word stats — top 8 most wrong
  const hardestWords = useMemo(() => {
    if (!wordStats) return [];
    return Object.entries(wordStats)
      .filter(([, s]) => s.incorrect > 0)
      .sort(([, a], [, b]) => b.incorrect - a.incorrect)
      .slice(0, 8)
      .map(([wordId, stat]) => {
        const word = words.find((w) => w.id === wordId);
        return word ? { word, stat } : null;
      })
      .filter(Boolean);
  }, [wordStats]);

  // Custom tool-tip color
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-900/40 rounded-xl shadow-md text-xs font-bold text-slate-700 dark:text-slate-200">
          <p className="font-extrabold text-slate-800 dark:text-slate-100">{payload[0].payload.name}</p>
          <p className="text-accentViolet-500 mt-0.5">Başarı: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  // Hata Defteri retry handler
  const handleRetrySubmit = (e) => {
    e.preventDefault();
    if (!activeWrongWord) return;

    const mainWord = words.find((w) => w.id === activeWrongWord.wordId);
    if (!mainWord) return;

    const isMatch = mainWord.german.trim().toLowerCase() === retryInput.trim().toLowerCase() ||
                    mainWord.turkish.trim().toLowerCase() === retryInput.trim().toLowerCase();

    setRetryChecked(true);
    setRetrySuccess(isMatch);

    if (isMatch) {
      // Remove it from the list
      setTimeout(() => {
        removeWrongAnswer(activeWrongWord.wordId, activeWrongWord.question);
        setActiveWrongWord(null);
        setRetryInput("");
        setRetryChecked(false);
      }, 1500);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-indigo-950/40">
        <div className="w-10 h-10 rounded-xl bg-accentViolet-500/10 text-accentViolet-500 flex items-center justify-center">
          <Star className="w-5 h-5 fill-accentViolet-500" />
        </div>
        <div>
          <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">
            Kişisel İlerleme (Fortschritt)
          </h1>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
            Grafikler, rozetler ve hata defterinizle gelişiminizi izleyin.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Module Chart */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-4">
          <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
            Modül Başarı Grafik Çizelgesi (%)
          </h3>
          <div className="h-64 w-full text-xs">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" className="dark:hidden" />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e1b4b" className="hidden dark:block" />
                <XAxis dataKey="name" tickLine={false} axisLine={false} tickFormatter={(val) => val.split(" ")[0]} />
                <YAxis domain={[0, 100]} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(99,102,241,0.05)" }} />
                <Bar dataKey="Skor" fill="#6366f1" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Word Circle Tracker */}
        <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm flex flex-col justify-between items-center text-center">
          <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100 w-full text-left">
            Kelime Öğrenme Oranı
          </h3>
          
          <div className="relative w-40 h-40 my-6 flex items-center justify-center">
            {/* SVG Progress Ring */}
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="80"
                cy="80"
                r="64"
                strokeWidth="12"
                stroke="currentColor"
                fill="transparent"
                className="text-slate-100 dark:text-indigo-950/50"
              />
              <circle
                cx="80"
                cy="80"
                r="64"
                strokeWidth="12"
                strokeDasharray={402}
                strokeDashoffset={402 - (402 * learnedPercentage) / 100}
                strokeLinecap="round"
                stroke="url(#gradientColor)"
                fill="transparent"
                className="transition-all duration-1000 ease-out"
              />
              <defs>
                <linearGradient id="gradientColor" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
            
            <div className="absolute flex flex-col items-center">
              <span className="text-3xl font-black bg-gradient-to-r from-accentViolet-500 to-emerald-500 bg-clip-text text-transparent">
                {learnedPercentage}%
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-0.5">
                {learnedWords.length} / {totalWords} Kelime
              </span>
            </div>
          </div>

          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
            Tüm modüllerdeki kelimelerin {learnedWords.length} tanesini ezberlediniz.
          </p>
        </div>
      </div>

      {/* Badges Shelf */}
      <div className="space-y-4">
        <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 px-1">
          Rozet Koleksiyonu (Medaillen)
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      </div>

      {/* Wrong Answers List (Hata Defteri) */}
      <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-4">
        <div className="flex justify-between items-center border-b pb-3 border-slate-100 dark:border-indigo-950/40">
          <div>
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">
              Hata Defteri (Fehlerbuch)
            </h3>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
              Alıştırmalarda ve kartlarda yanlış yaptığınız kelimeleri tekrar edin.
            </p>
          </div>
          {wrongAnswers.length > 0 && (
            <button
              onClick={() => {
                if (window.confirm("Tüm hata listesini temizlemek istediğinize emin misiniz?")) {
                  clearWrongAnswers();
                }
              }}
              className="text-xs font-bold text-rose-500 hover:text-rose-600 flex items-center gap-1"
            >
              <Trash2 className="w-3.5 h-3.5" />
              Temizle
            </button>
          )}
        </div>

        {wrongAnswers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wrongAnswers.map((item, index) => {
              const mainWord = words.find((w) => w.id === item.wordId);
              if (!mainWord) return null;
              
              return (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 flex items-center justify-between gap-4 hover:border-slate-300 dark:hover:border-indigo-900/30 transition-all"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-extrabold text-rose-500 uppercase tracking-wider block">
                      Yanilgi
                    </span>
                    <h4 className="font-extrabold text-slate-800 dark:text-slate-100 text-base">
                      {mainWord.artikel && <span className="text-xs text-slate-400 uppercase font-black mr-1">{mainWord.artikel}</span>}
                      {mainWord.german}
                    </h4>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      Doğru anlam: <span className="text-emerald-500 font-extrabold">{mainWord.turkish}</span>
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActiveWrongWord(item);
                      setRetryInput("");
                      setRetryChecked(false);
                      setRetrySuccess(false);
                    }}
                    className="flex items-center gap-1 px-3 py-2 bg-slate-100 hover:bg-accentViolet-500 dark:bg-darkNavy-850 dark:hover:bg-accentViolet-500 text-slate-700 dark:text-slate-200 hover:text-white dark:hover:text-white text-xs font-bold rounded-xl border border-slate-200/50 dark:border-indigo-900/15 shadow-sm"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Çalış
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-10 text-slate-400 font-medium">
            Tebrikler! Hata defteriniz boş. Hiç yanlış cevabınız bulunmuyor. 🎉
          </div>
        )}
      </div>

      {/* Study Calendar */}
      <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-accentViolet-500" />
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">Çalışma Takvimi</h3>
          </div>
          <span className="text-xs font-black px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
            Bu ay: {studiedThisMonth} gün
          </span>
        </div>
        <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">Son 5 hafta</p>

        {/* Day labels */}
        <div className="space-y-1.5">
          <div className="grid grid-cols-7 gap-1.5 text-center">
            {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map((d) => (
              <div key={d} className="text-[9px] font-bold text-slate-400 uppercase">{d}</div>
            ))}
          </div>
          {calendarWeeks.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 gap-1.5">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={day.date}
                  className={`aspect-square rounded-md transition-all ${
                    day.studied
                      ? "bg-emerald-500 shadow-sm"
                      : "bg-slate-100 dark:bg-indigo-950/40"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-1">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-slate-100 dark:bg-indigo-950/40" />
            <span className="text-[10px] font-semibold text-slate-400">Çalışılmadı</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-sm bg-emerald-500" />
            <span className="text-[10px] font-semibold text-slate-400">Çalışıldı</span>
          </div>
        </div>
      </div>

      {/* Hardest Words */}
      {hardestWords.length > 0 && (
        <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-5 h-5 text-rose-500" />
            <h3 className="text-base font-extrabold text-slate-800 dark:text-slate-100">En Çok Zorlanan Kelimeler</h3>
          </div>
          <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
            Alıştırma ve kartlarda en çok yanlış yaptığınız kelimeler.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {hardestWords.map(({ word, stat }) => {
              const accuracy = stat.seen > 0 ? Math.round((stat.correct / stat.seen) * 100) : 0;
              return (
                <div
                  key={word.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 flex items-center gap-4"
                >
                  <div className="flex-1 min-w-0 space-y-0.5">
                    <div className="font-extrabold text-slate-800 dark:text-slate-100 text-sm">
                      {word.artikel && (
                        <span className={`text-xs mr-1 font-black uppercase ${
                          word.artikel === "der" ? "text-blue-500" :
                          word.artikel === "die" ? "text-rose-500" : "text-amber-500"
                        }`}>{word.artikel}</span>
                      )}
                      {word.german}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{word.turkish}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex-1 h-1 bg-slate-200 dark:bg-indigo-950/60 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-500 rounded-full transition-all"
                          style={{ width: `${accuracy}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">{accuracy}%</span>
                    </div>
                  </div>
                  <div className="text-center flex-shrink-0">
                    <div className="text-lg font-black text-rose-500">{stat.incorrect}</div>
                    <div className="text-[9px] font-bold text-slate-400 uppercase">yanlış</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Retry Modal */}
      {activeWrongWord && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative max-w-sm w-full p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-xl space-y-6 text-center animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveWrongWord(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-4xl">🎓</span>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">
                Kelimeyi Hatırlayın
              </h3>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                Bu kelimenin Almanca veya Türkçe karşılığını yazın.
              </p>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-indigo-950/20 rounded-2xl border border-slate-200/50 dark:border-indigo-900/10">
              <h2 className="text-2xl font-black text-slate-800 dark:text-slate-100">
                {words.find((w) => w.id === activeWrongWord.wordId)?.german}
              </h2>
            </div>

            <form onSubmit={handleRetrySubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Karşılığını yazın..."
                value={retryInput}
                onChange={(e) => setRetryInput(e.target.value)}
                disabled={retryChecked && retrySuccess}
                autoFocus
                className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-white dark:bg-darkNavy-950/40 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm font-bold"
              />

              {retryChecked && (
                <div
                  className={`p-3 rounded-xl border flex items-center justify-center gap-2 text-xs font-bold ${
                    retrySuccess
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500"
                      : "bg-rose-500/10 border-rose-500/30 text-rose-500"
                  }`}
                >
                  {retrySuccess ? "Doğru! Listeden kaldırılıyor..." : "Yanlış! Tekrar deneyin."}
                </div>
              )}

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setActiveWrongWord(null)}
                  className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-850 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-200 font-extrabold rounded-xl text-sm border border-slate-200/50 dark:border-indigo-900/15"
                >
                  Kapat
                </button>
                <button
                  type="submit"
                  disabled={!retryInput.trim() || (retryChecked && retrySuccess)}
                  className="flex-1 py-3 bg-accentViolet-500 hover:bg-accentViolet-600 text-white font-extrabold rounded-xl text-sm shadow-md"
                >
                  Kontrol Et
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
