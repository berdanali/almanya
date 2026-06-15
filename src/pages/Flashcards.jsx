// src/pages/Flashcards.jsx
import React, { useState, useEffect } from "react";
import { Award, BookOpen, Layers, CheckCircle2, XCircle, ArrowRight, Play, RefreshCw, AlertCircle } from "lucide-react";
import { words } from "../data/words";
import { modules } from "../data/modules";
import Flashcard from "../components/Flashcard";
import { shuffleArray } from "../utils/helpers";

export default function Flashcards({ addWrongAnswer }) {
  const [sessionActive, setSessionActive] = useState(false);
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Selection filters
  const [selectedMod, setSelectedMod] = useState("all");
  const [wordFilter, setWordFilter] = useState("all"); // all, not_learned
  
  // Session stats
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [wrongWords, setWrongWords] = useState([]);
  const [sessionEnded, setSessionEnded] = useState(false);

  const startSession = (customWords = null) => {
    let sessionWords = [];

    if (customWords) {
      sessionWords = customWords;
    } else {
      // Filter from base words
      sessionWords = words;
      
      if (selectedMod !== "all") {
        sessionWords = sessionWords.filter((w) => w.module === parseInt(selectedMod, 10));
      }
      
      if (wordFilter === "not_learned") {
        const learned = JSON.parse(localStorage.getItem("almanca_learned_words") || "[]");
        sessionWords = sessionWords.filter((w) => !learned.includes(w.id));
      }
    }

    if (sessionWords.length === 0) {
      alert("Seçilen kriterlere uygun kelime bulunamadı. Lütfen filtreleri değiştirin.");
      return;
    }

    setDeck(shuffleArray(sessionWords));
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setWrongWords([]);
    setSessionActive(true);
    setSessionEnded(false);
  };

  const handleCardResult = (isCorrect) => {
    const currentWord = deck[currentIndex];
    
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
    } else {
      setWrongCount((prev) => prev + 1);
      setWrongWords((prev) => [...prev, currentWord]);
      // Record globally in wrong answers for review on the progress page
      if (addWrongAnswer) {
        addWrongAnswer(
          currentWord.id,
          `Kelime Kartı: "${currentWord.german}" ne demek?`,
          "Bilmedim",
          currentWord.turkish
        );
      }
    }

    if (currentIndex < deck.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setSessionEnded(true);
    }
  };

  const retryWrongOnly = () => {
    startSession(wrongWords);
  };

  const endSession = () => {
    setSessionActive(false);
    setSessionEnded(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Page Header */}
      {!sessionActive && (
        <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-indigo-950/40">
          <div className="w-10 h-10 rounded-xl bg-accentViolet-500/10 text-accentViolet-500 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">
              Flashcard Modu (Kartlar)
            </h1>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Almanca kelimeleri 3 boyutlu hafıza kartlarıyla hızlıca ezberleyin.
            </p>
          </div>
        </div>
      )}

      {/* 1. Setup Panel */}
      {!sessionActive && (
        <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm max-w-xl mx-auto space-y-6">
          <div className="text-center">
            <span className="text-[40px]">🗂️</span>
            <h3 className="text-lg font-extrabold text-slate-800 dark:text-slate-100 mt-2">
              Çalışma Kartlarını Ayarlayın
            </h3>
            <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 mt-0.5">
              Kelime sınırlarını seçip çalışmayı başlatın.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Modül Seçin</label>
              <select
                value={selectedMod}
                onChange={(e) => setSelectedMod(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-slate-50 dark:bg-darkNavy-950/40 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm font-bold text-slate-700 dark:text-slate-200"
              >
                <option value="all">Tüm Kelimeler ({words.length} kelime)</option>
                {modules.map((m) => {
                  const count = words.filter((w) => w.module === m.id).length;
                  return (
                    <option key={m.id} value={m.id}>
                      Modül {m.id}: {m.titleDE} ({count} kelime)
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Durum Filtresi</label>
              <select
                value={wordFilter}
                onChange={(e) => setWordFilter(e.target.value)}
                className="px-4 py-3 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-slate-50 dark:bg-darkNavy-950/40 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm font-bold text-slate-700 dark:text-slate-200"
              >
                <option value="all">Filtreleme Yok (Tüm Kelimeler)</option>
                <option value="not_learned">Sadece Öğrenilmemiş Kelimeler</option>
              </select>
            </div>

            <button
              onClick={() => startSession()}
              className="w-full flex items-center justify-center gap-1.5 py-4 bg-accentViolet-500 hover:bg-accentViolet-600 text-white font-extrabold rounded-xl text-sm shadow-md active:scale-95 transition-all shadow-accentViolet-500/10"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Kartları Çalıştır</span>
            </button>
          </div>
        </div>
      )}

      {/* 2. Active Session Card */}
      {sessionActive && !sessionEnded && deck[currentIndex] && (
        <div className="space-y-6">
          {/* Progress Header */}
          <div className="max-w-md mx-auto flex items-center justify-between text-xs font-bold text-slate-400 dark:text-slate-500 px-1">
            <span className="uppercase tracking-wider">
              Kart {currentIndex + 1} / {deck.length}
            </span>
            <div className="flex gap-4">
              <span className="text-emerald-500">Bildim: {correctCount}</span>
              <span className="text-rose-500">Bilmedim: {wrongCount}</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="max-w-md mx-auto bg-slate-100 dark:bg-indigo-950/60 h-1.5 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full bg-accentViolet-500 transition-all duration-300"
              style={{ width: `${((currentIndex) / deck.length) * 100}%` }}
            />
          </div>

          <Flashcard word={deck[currentIndex]} onResult={handleCardResult} />

          <div className="text-center">
            <button
              onClick={endSession}
              className="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-rose-500 dark:hover:text-rose-500 transition-colors uppercase tracking-wider"
            >
              Çalışmayı Durdur
            </button>
          </div>
        </div>
      )}

      {/* 3. Session End Summary */}
      {sessionActive && sessionEnded && (
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md text-center space-y-6 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center text-white text-3xl font-black shadow-md">
            🏁
          </div>
          
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">
              Oturum Tamamlandı!
            </h3>
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
              Öğrendiğiniz kelimeleri kelime tablosunda "Öğrendim" olarak kaydedebilirsiniz.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 grid grid-cols-2 gap-4">
            <div className="text-center border-r border-slate-200/50 dark:border-indigo-900/10">
              <span className="text-[10px] font-bold text-emerald-500 uppercase block mb-1">Doğru (Bildim)</span>
              <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                {correctCount}
              </span>
            </div>
            <div className="text-center">
              <span className="text-[10px] font-bold text-rose-500 uppercase block mb-1">Yanlış (Bilmedim)</span>
              <span className="text-xl font-black text-rose-600 dark:text-rose-400 flex items-center justify-center gap-1">
                <XCircle className="w-4 h-4" />
                {wrongCount}
              </span>
            </div>
          </div>

          {wrongCount > 0 && (
            <div className="flex items-center gap-2 p-3 bg-amber-500/10 rounded-xl text-xs font-semibold text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>Yanlış yaptığınız kelimeler hata defterinize kaydedildi.</span>
            </div>
          )}

          <div className="flex flex-col gap-2 pt-2">
            {wrongCount > 0 && (
              <button
                onClick={retryWrongOnly}
                className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-accentViolet-500 hover:bg-accentViolet-600 text-white font-extrabold rounded-xl text-sm shadow-md transition-all active:scale-[0.98]"
              >
                <RefreshCw className="w-4 h-4" />
                <span>Sadece Yanlışları Tekrar Et ({wrongCount})</span>
              </button>
            )}
            <button
              onClick={() => startSession()}
              className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-darkNavy-850 dark:hover:bg-indigo-950 text-white dark:text-slate-200 border border-slate-200/40 dark:border-indigo-900/20 font-extrabold rounded-xl text-sm transition-all active:scale-[0.98]"
            >
              Tüm Desteyi Yeniden Oyna
            </button>
            <button
              onClick={endSession}
              className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-950/20 text-slate-600 dark:text-slate-400 font-extrabold rounded-xl text-sm transition-all active:scale-[0.98]"
            >
              Çalışmayı Bitir
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
