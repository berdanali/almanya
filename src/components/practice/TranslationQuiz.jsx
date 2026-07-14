// src/components/practice/TranslationQuiz.jsx
import React, { useState } from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { playCorrect, playWrong } from "../../utils/sounds";
import { shuffleArray } from "../../utils/helpers";

export default function TranslationQuiz({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [shuffledOpts, setShuffledOpts] = useState(() => shuffleArray([...questions[0].options]));

  const q = questions[currentIndex];

  const handleSelect = (option) => {
    if (hasSubmitted) return;
    const correct = option === q.correct;
    setSelected(option);
    setHasSubmitted(true);
    if (correct) { setScore(s => s + 1); playCorrect(); }
    else playWrong();
  };

  const handleNext = () => {
    const next = currentIndex + 1;
    if (next < questions.length) {
      setCurrentIndex(next);
      setSelected(null);
      setHasSubmitted(false);
      setShuffledOpts(shuffleArray([...questions[next].options]));
    } else {
      onComplete(score, questions.length);
    }
  };

  if (!q) return null;

  const pct = Math.round((currentIndex / questions.length) * 100);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-5">

      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{currentIndex + 1} / {questions.length}</span>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-sky-100 dark:bg-sky-950/30 text-sky-600 dark:text-sky-400">
          {score} doğru
        </span>
      </div>

      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-sky-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      {/* Turkish prompt */}
      <div className="p-6 rounded-2xl bg-slate-900 dark:bg-slate-800 text-center space-y-2">
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Türkçe → Almanca</p>
        <p className="text-xl font-black text-white leading-snug">{q.turkish}</p>
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {shuffledOpts.map((opt, i) => {
          const isSelected = selected === opt;
          const isCorrect = opt === q.correct;
          let cls = "w-full p-4 rounded-xl border text-left text-sm font-semibold transition-all ";
          if (!hasSubmitted) {
            cls += "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-sky-950/20 hover:border-sky-300 dark:hover:border-sky-700 active:scale-[0.99] cursor-pointer";
          } else if (isCorrect) {
            cls += "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300";
          } else if (isSelected) {
            cls += "bg-rose-50 dark:bg-rose-950/30 border-rose-400 dark:border-rose-600 text-rose-700 dark:text-rose-300";
          } else {
            cls += "bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 opacity-50";
          }

          return (
            <button key={i} onClick={() => handleSelect(opt)} disabled={hasSubmitted} className={cls}>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-black flex items-center justify-center flex-shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{opt}</span>
                {hasSubmitted && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
                {hasSubmitted && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />}
              </div>
            </button>
          );
        })}
      </div>

      {hasSubmitted && (
        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 dark:bg-sky-600 hover:bg-slate-900 dark:hover:bg-sky-700 text-white font-bold text-sm transition-all active:scale-[0.98]"
        >
          {currentIndex === questions.length - 1 ? "Tamamla" : "Sonraki"}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
