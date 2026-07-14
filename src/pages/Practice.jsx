// src/pages/Practice.jsx
import React, { useState } from "react";
import {
  PenLine, ListOrdered, Languages, Volume2, Brain,
  Layers, ArrowLeft, Trophy, Zap, Star
} from "lucide-react";
import { practiceData } from "../data/practiceData";
import { words } from "../data/words";
import FillInBlank from "../components/exercises/FillInBlank";
import SentenceBuilder from "../components/practice/SentenceBuilder";
import TranslationQuiz from "../components/practice/TranslationQuiz";
import ListeningQuiz from "../components/practice/ListeningQuiz";
import WordGuess from "../components/practice/WordGuess";
import DragMatch from "../components/exercises/DragMatch";
import { shuffleArray } from "../utils/helpers";

const SESSION_SIZE = 50;

const TYPES = [
  {
    id: "fill-blank",
    title: "Boşluk Doldurma",
    desc: "Cümledeki eksik kelimeyi yaz",
    icon: PenLine,
    color: "indigo",
    emoji: "✍️",
  },
  {
    id: "sentence",
    title: "Cümle Kurma",
    desc: "Karışık kelimeleri sıraya diz",
    icon: ListOrdered,
    color: "violet",
    emoji: "🔤",
  },
  {
    id: "translation",
    title: "TR → DE Çeviri",
    desc: "Türkçeyi Almancaya çevir",
    icon: Languages,
    color: "sky",
    emoji: "🌍",
  },
  {
    id: "listening",
    title: "Dinleme",
    desc: "Almancayı dinle ve seç",
    icon: Volume2,
    color: "amber",
    emoji: "🎧",
  },
  {
    id: "word-guess",
    title: "Kelime Tahmini",
    desc: "İpucundan Almanca kelimeyi bul",
    icon: Brain,
    color: "emerald",
    emoji: "🧠",
  },
  {
    id: "matching",
    title: "Eşleştirme",
    desc: "Almancayı Türkçesiyle eşleştir",
    icon: Layers,
    color: "rose",
    emoji: "🔗",
  },
];

const C = {
  indigo: {
    icon: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400",
    border: "border-indigo-200/70 dark:border-indigo-800/50",
    a1: "bg-indigo-600 hover:bg-indigo-700",
    a2: "bg-indigo-500 hover:bg-indigo-600",
    all: "bg-indigo-900 hover:bg-indigo-950",
    badge: "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300",
  },
  violet: {
    icon: "bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400",
    border: "border-violet-200/70 dark:border-violet-800/50",
    a1: "bg-violet-600 hover:bg-violet-700",
    a2: "bg-violet-500 hover:bg-violet-600",
    all: "bg-violet-900 hover:bg-violet-950",
    badge: "bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300",
  },
  sky: {
    icon: "bg-sky-100 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400",
    border: "border-sky-200/70 dark:border-sky-800/50",
    a1: "bg-sky-600 hover:bg-sky-700",
    a2: "bg-sky-500 hover:bg-sky-600",
    all: "bg-sky-900 hover:bg-sky-950",
    badge: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300",
  },
  amber: {
    icon: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    border: "border-amber-200/70 dark:border-amber-800/50",
    a1: "bg-amber-500 hover:bg-amber-600",
    a2: "bg-amber-400 hover:bg-amber-500",
    all: "bg-amber-700 hover:bg-amber-800",
    badge: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300",
  },
  emerald: {
    icon: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200/70 dark:border-emerald-800/50",
    a1: "bg-emerald-600 hover:bg-emerald-700",
    a2: "bg-emerald-500 hover:bg-emerald-600",
    all: "bg-emerald-900 hover:bg-emerald-950",
    badge: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300",
  },
  rose: {
    icon: "bg-rose-100 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400",
    border: "border-rose-200/70 dark:border-rose-800/50",
    a1: "bg-rose-600 hover:bg-rose-700",
    a2: "bg-rose-500 hover:bg-rose-600",
    all: "bg-rose-900 hover:bg-rose-950",
    badge: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-300",
  },
};

function getPool(typeId, level) {
  const lvl = level === "all" ? null : level;
  switch (typeId) {
    case "fill-blank":
      return lvl
        ? practiceData.fillInBlank[lvl]
        : [...practiceData.fillInBlank.a1, ...practiceData.fillInBlank.a2];
    case "sentence":
      return lvl
        ? practiceData.sentenceBuilder[lvl]
        : [...practiceData.sentenceBuilder.a1, ...practiceData.sentenceBuilder.a2];
    case "translation":
      return lvl
        ? practiceData.translationQuiz[lvl]
        : [...practiceData.translationQuiz.a1, ...practiceData.translationQuiz.a2];
    case "listening":
      return lvl
        ? practiceData.listening[lvl]
        : [...practiceData.listening.a1, ...practiceData.listening.a2];
    case "word-guess":
      return lvl
        ? practiceData.wordGuess[lvl]
        : [...practiceData.wordGuess.a1, ...practiceData.wordGuess.a2];
    case "matching": {
      const range = level === "a1" ? [1, 12] : level === "a2" ? [13, 22] : [1, 22];
      return words.filter(w => w.module >= range[0] && w.module <= range[1]);
    }
    default:
      return [];
  }
}

const SCORE_LABELS = {
  perfect: "Mükemmel!",
  great: "Çok İyi!",
  good: "İyi İş!",
  keep: "Devam Et!",
};

function scoreLabel(score, total) {
  const pct = score / total;
  if (pct >= 0.9) return SCORE_LABELS.perfect;
  if (pct >= 0.7) return SCORE_LABELS.great;
  if (pct >= 0.5) return SCORE_LABELS.good;
  return SCORE_LABELS.keep;
}

export default function Practice({ addXP, addPoints }) {
  const [mode, setMode] = useState("hub");
  const [activeTypeId, setActiveTypeId] = useState(null);
  const [activeLevel, setActiveLevel] = useState("a1");
  const [sessionQuestions, setSessionQuestions] = useState([]);
  const [result, setResult] = useState(null);

  const startSession = (typeId, level) => {
    const pool = getPool(typeId, level);
    const size = typeId === "matching" ? 6 : Math.min(SESSION_SIZE, pool.length);
    const questions = shuffleArray(pool).slice(0, size);
    setActiveTypeId(typeId);
    setActiveLevel(level);
    setSessionQuestions(questions);
    setResult(null);
    setMode("session");
  };

  const finishSession = (score, total, xp, pts) => {
    if (addXP) addXP(xp);
    if (addPoints) addPoints(pts);
    setResult({ score, total, xp, points: pts });
    setMode("result");
  };

  // Each exercise component calls onComplete differently — wrap them:
  const onFillBlankDone = (score, bonus, total) => {
    finishSession(score, total, score * 15 + (bonus || 0), score * 10);
  };
  const onSessionDone = (score, total) => {
    finishSession(score, total, score * 15, score * 10);
  };
  const onMatchDone = (pts) => {
    finishSession(sessionQuestions.length, sessionQuestions.length, 80, pts);
  };

  const activeMeta = TYPES.find(t => t.id === activeTypeId);

  return (
    <div className="max-w-4xl mx-auto space-y-6">

      {/* ── HUB ── */}
      {mode === "hub" && (
        <>
          <div>
            <h1 className="text-2xl font-black text-slate-900 dark:text-white">Pratik Merkezi</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              6 farklı alıştırma türü · A1 ve A2 seviyeleri · Her oturum 10 soru
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TYPES.map((type) => {
              const Icon = type.icon;
              const c = C[type.color];
              return (
                <div
                  key={type.id}
                  className={`bg-white dark:bg-slate-900 border ${c.border} rounded-2xl p-5 space-y-4 hover:shadow-md transition-all hover:-translate-y-0.5`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center flex-shrink-0 text-lg`}>
                      {type.emoji}
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-black text-slate-800 dark:text-white text-sm leading-tight">{type.title}</h3>
                      <p className="text-xs text-slate-400 mt-0.5 leading-snug">{type.desc}</p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => startSession(type.id, "a1")}
                      className={`flex-1 py-2 rounded-xl text-xs font-black text-white ${c.a1} transition-all active:scale-95`}
                    >
                      A1
                    </button>
                    <button
                      onClick={() => startSession(type.id, "a2")}
                      className={`flex-1 py-2 rounded-xl text-xs font-black text-white ${c.a2} transition-all active:scale-95`}
                    >
                      A2
                    </button>
                    <button
                      onClick={() => startSession(type.id, "all")}
                      className="px-3 py-2 rounded-xl text-xs font-black bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all active:scale-95"
                    >
                      Tümü
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tips row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { icon: "⏱️", text: "Hız bonusu: 3 saniye içinde doğru cevap +5 puan" },
              { icon: "🏆", text: "Her doğru cevap +15 XP ve +10 puan kazandırır" },
              { icon: "🔁", text: "Aynı oturumu tekrar oynayarak farklı sorular çekebilirsin" },
            ].map((tip, i) => (
              <div key={i} className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                <span className="text-lg leading-none mt-0.5">{tip.icon}</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-snug">{tip.text}</p>
              </div>
            ))}
          </div>
        </>
      )}

      {/* ── SESSION ── */}
      {mode === "session" && (
        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            <button
              onClick={() => setMode("hub")}
              className="flex items-center gap-1.5 text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Merkeze Dön
            </button>
            {activeMeta && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {activeMeta.emoji} {activeMeta.title} · {activeLevel.toUpperCase()}
              </span>
            )}
          </div>

          {activeTypeId === "fill-blank" && sessionQuestions.length > 0 && (
            <FillInBlank questions={sessionQuestions} onComplete={onFillBlankDone} />
          )}
          {activeTypeId === "sentence" && sessionQuestions.length > 0 && (
            <SentenceBuilder questions={sessionQuestions} onComplete={onSessionDone} />
          )}
          {activeTypeId === "translation" && sessionQuestions.length > 0 && (
            <TranslationQuiz questions={sessionQuestions} onComplete={onSessionDone} />
          )}
          {activeTypeId === "listening" && sessionQuestions.length > 0 && (
            <ListeningQuiz questions={sessionQuestions} onComplete={onSessionDone} />
          )}
          {activeTypeId === "word-guess" && sessionQuestions.length > 0 && (
            <WordGuess questions={sessionQuestions} onComplete={onSessionDone} />
          )}
          {activeTypeId === "matching" && sessionQuestions.length > 0 && (
            <DragMatch words={sessionQuestions} onComplete={onMatchDone} />
          )}
        </div>
      )}

      {/* ── RESULT ── */}
      {mode === "result" && result && (
        <div className="max-w-sm mx-auto">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 text-center space-y-6 shadow-lg">

            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center mx-auto shadow-lg text-4xl">
              {result.score / result.total >= 0.9 ? "🏆" : result.score / result.total >= 0.7 ? "⭐" : result.score / result.total >= 0.5 ? "👍" : "💪"}
            </div>

            <div>
              <h2 className="text-2xl font-black text-slate-800 dark:text-white">
                {scoreLabel(result.score, result.total)}
              </h2>
              {activeMeta && (
                <p className="text-slate-400 text-sm mt-1">
                  {activeMeta.title} · {activeLevel.toUpperCase()}
                </p>
              )}
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-1">
                <p className="text-xl font-black text-slate-800 dark:text-white">{result.score}/{result.total}</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Doğru</p>
              </div>
              <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30 space-y-1">
                <p className="text-xl font-black text-indigo-600 dark:text-indigo-400">+{result.xp}</p>
                <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">XP</p>
              </div>
              <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 space-y-1">
                <p className="text-xl font-black text-amber-600 dark:text-amber-400">+{result.points}</p>
                <p className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Puan</p>
              </div>
            </div>

            {/* Accuracy bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-bold text-slate-400">
                <span>Doğruluk</span>
                <span>{Math.round((result.score / result.total) * 100)}%</span>
              </div>
              <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-700 ${
                    result.score / result.total >= 0.8 ? "bg-emerald-500" : result.score / result.total >= 0.5 ? "bg-amber-500" : "bg-rose-500"
                  }`}
                  style={{ width: `${Math.round((result.score / result.total) * 100)}%` }}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => startSession(activeTypeId, activeLevel)}
                className="flex-1 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm transition-all active:scale-[0.98]"
              >
                Tekrar Oyna
              </button>
              <button
                onClick={() => setMode("hub")}
                className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-bold text-sm transition-all"
              >
                Merkeze Dön
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
