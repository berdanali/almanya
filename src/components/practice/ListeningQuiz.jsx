// src/components/practice/ListeningQuiz.jsx
import React, { useState, useCallback } from "react";
import { Volume2, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { playCorrect, playWrong } from "../../utils/sounds";
import { speakGerman } from "../../utils/speech";
import { shuffleArray } from "../../utils/helpers";

export default function ListeningQuiz({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [hasPlayed, setHasPlayed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shuffledOpts, setShuffledOpts] = useState(() => shuffleArray([...questions[0].options]));

  const q = questions[currentIndex];
  const optText = (opt) => (typeof opt === "string" ? opt : opt.text);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    speakGerman(q.text);
    setHasPlayed(true);
    setTimeout(() => setIsPlaying(false), q.text.length * 60 + 800);
  }, [q]);

  const handleSelect = (opt) => {
    if (hasSubmitted || !hasPlayed) return;
    const correct = optText(opt) === q.text;
    setSelected(opt);
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
      setHasPlayed(false);
      setIsPlaying(false);
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
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-600 dark:text-amber-400">
          {score} doğru
        </span>
      </div>

      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-amber-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      {/* Listen button */}
      <div className="flex flex-col items-center gap-3 py-4">
        <p className="text-sm font-bold text-slate-500 dark:text-slate-400">Almanca cümleyi dinleyin, sonra seçin</p>
        <button
          onClick={handlePlay}
          className={`w-24 h-24 rounded-full flex flex-col items-center justify-center gap-2 shadow-lg transition-all active:scale-95 ${
            isPlaying
              ? "bg-amber-400 dark:bg-amber-500 scale-105 shadow-amber-300 dark:shadow-amber-700"
              : "bg-amber-500 hover:bg-amber-600 dark:bg-amber-500 dark:hover:bg-amber-600"
          }`}
        >
          <Volume2 className={`w-8 h-8 text-white ${isPlaying ? "animate-pulse" : ""}`} />
          <span className="text-xs font-bold text-white">{hasPlayed ? "Tekrar" : "Dinle"}</span>
        </button>
        {!hasPlayed && (
          <p className="text-xs text-slate-400 italic">Önce sesi dinleyin</p>
        )}
      </div>

      {/* Options */}
      <div className="space-y-2.5">
        {shuffledOpts.map((opt, i) => {
          const isSelected = selected === opt;
          const isCorrect = optText(opt) === q.text;
          let cls = "w-full p-4 rounded-xl border text-left text-sm font-semibold transition-all ";
          if (!hasSubmitted) {
            cls += hasPlayed
              ? "bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-amber-950/20 hover:border-amber-300 dark:hover:border-amber-700 active:scale-[0.99] cursor-pointer"
              : "bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 opacity-40 cursor-not-allowed";
          } else if (isCorrect) {
            cls += "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-400 dark:border-emerald-600 text-emerald-700 dark:text-emerald-300";
          } else if (isSelected) {
            cls += "bg-rose-50 dark:bg-rose-950/30 border-rose-400 dark:border-rose-600 text-rose-700 dark:text-rose-300";
          } else {
            cls += "bg-slate-50 dark:bg-slate-800/30 border-slate-200 dark:border-slate-700 text-slate-400 opacity-50";
          }

          return (
            <button key={i} onClick={() => handleSelect(opt)} disabled={hasSubmitted || !hasPlayed} className={cls}>
              <div className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-black flex items-center justify-center flex-shrink-0">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1 text-left">
                  <span className="block font-semibold">{opt.text ?? opt}</span>
                  {opt.translation && (
                    <span className="block text-xs text-slate-400 dark:text-slate-500 mt-0.5 font-normal">{opt.translation}</span>
                  )}
                </span>
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
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 dark:bg-amber-600 hover:bg-slate-900 dark:hover:bg-amber-700 text-white font-bold text-sm transition-all active:scale-[0.98]"
        >
          {currentIndex === questions.length - 1 ? "Tamamla" : "Sonraki"}
          <ArrowRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
