// src/components/practice/SentenceBuilder.jsx
import React, { useState, useEffect } from "react";
import { CheckCircle2, XCircle, ArrowRight, RotateCcw } from "lucide-react";
import { playCorrect, playWrong } from "../../utils/sounds";
import { shuffleArray } from "../../utils/helpers";

export default function SentenceBuilder({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [availableWords, setAvailableWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    if (currentQuestion) {
      setAvailableWords(shuffleArray([...currentQuestion.words]));
      setSelectedWords([]);
      setHasSubmitted(false);
    }
  }, [currentIndex]);

  const pickWord = (word, idx) => {
    if (hasSubmitted) return;
    setSelectedWords(prev => [...prev, word]);
    setAvailableWords(prev => prev.filter((_, i) => i !== idx));
  };

  const removeWord = (word, idx) => {
    if (hasSubmitted) return;
    setAvailableWords(prev => [...prev, word]);
    setSelectedWords(prev => prev.filter((_, i) => i !== idx));
  };

  const handleReset = () => {
    if (hasSubmitted) return;
    setAvailableWords(shuffleArray([...currentQuestion.words]));
    setSelectedWords([]);
  };

  const handleSubmit = () => {
    if (selectedWords.length === 0 || hasSubmitted) return;
    const correct = selectedWords.join(" ") === currentQuestion.correct.join(" ");
    setIsCorrect(correct);
    setHasSubmitted(true);
    if (correct) { setScore(s => s + 1); playCorrect(); }
    else playWrong();
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) setCurrentIndex(i => i + 1);
    else onComplete(score, questions.length);
  };

  if (!currentQuestion) return null;

  const pct = Math.round((currentIndex / questions.length) * 100);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-md space-y-5">

      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          {currentIndex + 1} / {questions.length}
        </span>
        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400">
          {score} doğru
        </span>
      </div>

      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <div className="h-full bg-violet-500 rounded-full transition-all duration-500" style={{ width: `${pct}%` }} />
      </div>

      {/* Prompt */}
      <div className="space-y-1">
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Cümleyi Kurun</p>
        <p className="text-sm font-semibold text-slate-600 dark:text-slate-300 italic">
          {currentQuestion.translation}
        </p>
      </div>

      {/* Answer area */}
      <div className="min-h-[64px] p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border-2 border-dashed border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 items-center">
        {selectedWords.length === 0
          ? <span className="text-sm text-slate-400 italic select-none">Aşağıdaki kelimelerden tıklayın...</span>
          : selectedWords.map((word, i) => {
              let cls = "px-3 py-1.5 rounded-xl text-sm font-bold border transition-all select-none ";
              if (hasSubmitted) {
                cls += isCorrect
                  ? "bg-emerald-100 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300 cursor-default"
                  : "bg-rose-100 dark:bg-rose-950/30 border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300 cursor-default";
              } else {
                cls += "bg-white dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:border-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/20 cursor-pointer active:scale-95";
              }
              return (
                <button key={i} onClick={() => removeWord(word, i)} className={cls} disabled={hasSubmitted}>
                  {word}
                </button>
              );
            })
        }
      </div>

      {/* Available words */}
      {!hasSubmitted && (
        <div className="flex flex-wrap gap-2">
          {availableWords.map((word, i) => (
            <button
              key={i}
              onClick={() => pickWord(word, i)}
              className="px-3 py-1.5 rounded-xl text-sm font-bold border bg-violet-50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-800 text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-violet-950/40 hover:border-violet-400 active:scale-95 transition-all"
            >
              {word}
            </button>
          ))}
        </div>
      )}

      {/* Feedback */}
      {hasSubmitted && (
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
              {isCorrect ? "Harika, doğru cümle!" : "Yanlış sıralama."}
            </p>
            {!isCorrect && (
              <p className="text-xs mt-1 text-rose-600 dark:text-rose-300">
                Doğru: <span className="font-extrabold">{currentQuestion.correct.join(" ")}</span>
              </p>
            )}
          </div>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        {!hasSubmitted ? (
          <>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 text-sm font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              <RotateCcw className="w-4 h-4" /> Sıfırla
            </button>
            <button
              onClick={handleSubmit}
              disabled={selectedWords.length === 0}
              className="flex-1 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-700 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-white disabled:text-slate-400 font-bold text-sm transition-all active:scale-[0.98]"
            >
              Kontrol Et
            </button>
          </>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 dark:bg-violet-600 hover:bg-slate-900 dark:hover:bg-violet-700 text-white font-bold text-sm transition-all"
          >
            {currentIndex === questions.length - 1 ? "Tamamla" : "Sonraki"}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
