// src/components/practice/ErrorCorrection.jsx
import React, { useState, useMemo } from "react";
import { CheckCircle2, XCircle, ArrowRight, AlertTriangle } from "lucide-react";
import { playCorrect, playWrong } from "../../utils/sounds";

export default function ErrorCorrection({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const q = questions[currentIndex];

  // Randomise option order per question
  const optionOrder = useMemo(
    () => (Math.random() < 0.5 ? ["correct", "wrong"] : ["wrong", "correct"]),
    [currentIndex]
  );

  if (!q) return null;

  const pct = Math.round((currentIndex / questions.length) * 100);

  const handleSelect = (choice) => {
    if (hasSubmitted) return;
    const correct = choice === "correct";
    setSelected(choice);
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
    } else {
      onComplete(score, questions.length);
    }
  };

  const options = optionOrder.map((key, i) => ({
    key,
    label: key === "correct" ? q.correct : q.wrong,
    letter: String.fromCharCode(65 + i),
  }));

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-5">

      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{currentIndex + 1} / {questions.length}</span>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-600 dark:text-orange-400">
          {score} doğru
        </span>
      </div>

      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-orange-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hatalı Cümle</p>
        <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800">
          <p className="text-base font-bold text-orange-700 dark:text-orange-300 flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            {q.wrong}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 ml-6">{q.translation}</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Doğrusu hangisi?</p>
        <div className="space-y-2.5">
          {options.map(({ key, label, letter }) => {
            const isSelected = selected === key;
            const isCorrectOpt = key === "correct";
            let cls = "w-full p-4 rounded-xl border text-left text-sm font-semibold transition-all ";
            if (!hasSubmitted) {
              cls += "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-orange-50 dark:hover:bg-orange-950/20 hover:border-orange-300 dark:hover:border-orange-700 active:scale-[0.99] cursor-pointer";
            } else if (isCorrectOpt) {
              cls += "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300";
            } else if (isSelected) {
              cls += "bg-rose-50 dark:bg-rose-950/30 border-rose-400 dark:border-rose-600 text-rose-700 dark:text-rose-300";
            } else {
              cls += "bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 text-slate-400 opacity-50";
            }
            return (
              <button key={key} onClick={() => handleSelect(key)} disabled={hasSubmitted} className={cls}>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-black flex items-center justify-center flex-shrink-0">
                    {letter}
                  </span>
                  <span className="flex-1 text-left">{label}</span>
                  {hasSubmitted && isCorrectOpt && <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />}
                  {hasSubmitted && isSelected && !isCorrectOpt && <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {hasSubmitted && (
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
          <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1">Kural</p>
          <p className="text-sm text-slate-700 dark:text-slate-300">{q.explanation}</p>
        </div>
      )}

      {hasSubmitted && (
        <button
          onClick={handleNext}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 dark:bg-orange-600 hover:bg-slate-900 dark:hover:bg-orange-700 text-white font-bold text-sm transition-all active:scale-[0.98]"
        >
          {currentIndex === questions.length - 1 ? "Tamamla" : "Sonraki"}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
