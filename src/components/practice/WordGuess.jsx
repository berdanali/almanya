// src/components/practice/WordGuess.jsx
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, XCircle, ArrowRight, Lightbulb } from "lucide-react";
import { playCorrect, playWrong } from "../../utils/sounds";

export default function WordGuess({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const inputRef = useRef(null);

  const q = questions[currentIndex];

  useEffect(() => {
    setUserInput("");
    setHasSubmitted(false);
    setShowHint(false);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, [currentIndex]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (hasSubmitted || !userInput.trim()) return;
    const clean = (s) => s.trim().toLowerCase();
    const correct = clean(userInput) === clean(q.answer);
    setIsCorrect(correct);
    setHasSubmitted(true);
    if (correct) { setScore(s => s + 1); playCorrect(); }
    else playWrong();
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(i => i + 1);
    else onComplete(score, questions.length);
  };

  if (!q) return null;

  const pct = Math.round((currentIndex / questions.length) * 100);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-5">

      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{currentIndex + 1} / {questions.length}</span>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400">
          {score} doğru
        </span>
      </div>

      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      {/* Hint card */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 space-y-3 text-center border border-slate-100 dark:border-slate-800">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">{q.category}</span>
        <p className="text-base font-bold text-slate-700 dark:text-slate-200 leading-relaxed">{q.hint}</p>
        <button
          onClick={() => setShowHint(true)}
          disabled={showHint}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline disabled:opacity-50 disabled:no-underline transition-opacity"
        >
          <Lightbulb className="w-3.5 h-3.5" />
          {showHint ? `İlk harf: "${q.firstLetter}"` : "İpucu göster (−5 puan)"}
        </button>
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="space-y-3">
        {!hasSubmitted ? (
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="Almanca kelimeyi yazın..."
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm font-bold placeholder:text-slate-400 placeholder:font-normal"
            />
            <button
              type="submit"
              disabled={!userInput.trim()}
              className="px-5 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white disabled:text-slate-400 font-bold rounded-xl text-sm transition-all active:scale-95"
            >
              Kontrol
            </button>
          </div>
        ) : (
          <div className={`p-4 rounded-xl border flex items-start gap-3 ${
            isCorrect
              ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800"
              : "bg-rose-50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-800"
          }`}>
            {isCorrect
              ? <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-500" />
              : <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0 text-rose-500" />
            }
            <div>
              <p className={`font-bold text-sm ${isCorrect ? "text-emerald-700 dark:text-emerald-400" : "text-rose-700 dark:text-rose-400"}`}>
                {isCorrect ? "Harika, doğru!" : "Yanlış cevap."}
              </p>
              {!isCorrect && (
                <p className="text-xs mt-1 text-rose-600 dark:text-rose-300">
                  Doğru: <span className="font-extrabold">{q.answer}</span>
                </p>
              )}
              {isCorrect && (
                <p className="text-xs mt-0.5 text-emerald-600 dark:text-emerald-400 font-semibold">
                  {q.category}
                </p>
              )}
            </div>
          </div>
        )}
      </form>

      {hasSubmitted && (
        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 dark:bg-emerald-600 hover:bg-slate-900 dark:hover:bg-emerald-700 text-white font-bold text-sm transition-all active:scale-[0.98]"
        >
          {currentIndex === questions.length - 1 ? "Tamamla" : "Sonraki"}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
