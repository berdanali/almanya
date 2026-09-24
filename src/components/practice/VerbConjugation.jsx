// src/components/practice/VerbConjugation.jsx
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, XCircle, ArrowRight, HelpCircle } from "lucide-react";
import { playCorrect, playWrong } from "../../utils/sounds";

export default function VerbConjugation({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [score, setScore] = useState(0);
  const inputRef = useRef(null);

  const q = questions[currentIndex];
  if (!q) return null;

  const pct = Math.round((currentIndex / questions.length) * 100);

  useEffect(() => {
    if (!hasSubmitted) inputRef.current?.focus();
  }, [currentIndex, hasSubmitted]);

  const handleSubmit = () => {
    if (!input.trim()) return;
    const correct = input.trim().toLowerCase() === q.answer.toLowerCase();
    setIsCorrect(correct);
    setHasSubmitted(true);
    if (correct) { setScore(s => s + 1); playCorrect(); }
    else playWrong();
  };

  const handleNext = () => {
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
      setInput("");
      setHasSubmitted(false);
      setIsCorrect(false);
      setShowHint(false);
    } else {
      onComplete(score, questions.length);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (!hasSubmitted) handleSubmit();
      else handleNext();
    }
  };

  const specialChars = ["ä", "ö", "ü", "Ä", "Ö", "Ü", "ß"];

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-5">

      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{currentIndex + 1} / {questions.length}</span>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400">
          {score} doğru
        </span>
      </div>

      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-violet-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      <div className="text-center space-y-2 py-4">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Fiili Çekimle</p>
        <div className="inline-block px-6 py-3 rounded-2xl bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-800">
          <p className="text-2xl font-black text-violet-700 dark:text-violet-300">{q.prompt}</p>
        </div>
        <p className="text-sm text-slate-400 dark:text-slate-500">{q.translation}</p>
      </div>

      <div className="space-y-3">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={hasSubmitted}
            placeholder="Cevabınızı yazın..."
            className={`w-full px-4 py-3.5 rounded-xl border text-sm font-semibold transition-all outline-none ${
              hasSubmitted
                ? isCorrect
                  ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300"
                  : "border-rose-400 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-300"
                : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 text-slate-800 dark:text-slate-200 focus:border-violet-400 dark:focus:border-violet-600 focus:ring-2 focus:ring-violet-200 dark:focus:ring-violet-900/30"
            }`}
          />
          {hasSubmitted && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {isCorrect
                ? <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                : <XCircle className="w-5 h-5 text-rose-500" />
              }
            </div>
          )}
        </div>

        {/* Special character buttons */}
        <div className="flex flex-wrap gap-1.5">
          {specialChars.map(ch => (
            <button
              key={ch}
              onClick={() => setInput(prev => prev + ch)}
              disabled={hasSubmitted}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold hover:bg-violet-100 dark:hover:bg-violet-900/30 transition-colors disabled:opacity-40"
            >
              {ch}
            </button>
          ))}
        </div>
      </div>

      {hasSubmitted && !isCorrect && (
        <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-800">
          <p className="text-xs font-bold text-rose-500 uppercase tracking-wider mb-1">Doğru Cevap</p>
          <p className="text-base font-black text-rose-700 dark:text-rose-300">{q.answer}</p>
        </div>
      )}

      {showHint && !hasSubmitted && (
        <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
          <p className="text-xs font-bold text-amber-500 uppercase tracking-wider mb-1">İpucu</p>
          <p className="text-sm text-amber-700 dark:text-amber-300">{q.hint}</p>
        </div>
      )}

      {hasSubmitted && (
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Açıklama</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">{q.hint}</p>
        </div>
      )}

      <div className="flex gap-3">
        {!hasSubmitted && (
          <>
            <button
              onClick={() => setShowHint(v => !v)}
              className="flex items-center gap-1.5 px-4 py-3 rounded-xl border border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-400 text-sm font-bold hover:bg-amber-50 dark:hover:bg-amber-950/20 transition-all"
            >
              <HelpCircle className="w-4 h-4" />
              {showHint ? "İpucunu Gizle" : "İpucu"}
            </button>
            <button
              onClick={handleSubmit}
              disabled={!input.trim()}
              className="flex-1 py-3 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:opacity-40 text-white font-bold text-sm transition-all active:scale-[0.98]"
            >
              Kontrol Et
            </button>
          </>
        )}
        {hasSubmitted && (
          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 dark:bg-violet-600 hover:bg-slate-900 dark:hover:bg-violet-700 text-white font-bold text-sm transition-all active:scale-[0.98]"
          >
            {currentIndex === questions.length - 1 ? "Tamamla" : "Sonraki"}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
