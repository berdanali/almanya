// src/components/exercises/MultipleChoice.jsx
import React, { useState, useRef, useEffect } from "react";
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { playCorrect, playWrong } from "../../utils/sounds";

export default function MultipleChoice({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [floatingXP, setFloatingXP] = useState(null);
  const floatRef = useRef(null);

  const currentQuestion = questions[currentIndex];

  const showFloatingXP = (text, isCorrect) => {
    setFloatingXP({ text, isCorrect });
    if (floatRef.current) clearTimeout(floatRef.current);
    floatRef.current = setTimeout(() => setFloatingXP(null), 1200);
  };

  const handleOptionClick = (option) => {
    if (hasAnswered) return;
    setSelectedOption(option);
    setHasAnswered(true);
    if (option === currentQuestion.correctAnswer) {
      setScore(prev => prev + 1);
      playCorrect();
      showFloatingXP("+10 XP", true);
    } else {
      playWrong();
      showFloatingXP("Yanlış", false);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setHasAnswered(false);
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      onComplete(score, questions.length);
    }
  };

  const progressPct = Math.round((currentIndex / questions.length) * 100);

  if (!currentQuestion) {
    return (
      <div className="text-center py-8">
        <p className="text-slate-400">Soru yüklenemedi.</p>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md relative overflow-hidden">
      {/* Floating XP Feedback */}
      {floatingXP && (
        <div className={`absolute top-4 right-6 z-50 font-black text-sm px-3 py-1 rounded-full shadow-lg pointer-events-none animate-bounce ${
          floatingXP.isCorrect
            ? "bg-emerald-500 text-white"
            : "bg-rose-500 text-white"
        }`}>
          {floatingXP.text}
        </div>
      )}

      {/* Progress bar */}
      <div className="w-full h-1.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden mb-5">
        <div
          className="h-full bg-accentViolet-500 rounded-full transition-all duration-500"
          style={{ width: `${progressPct}%` }}
        />
      </div>

      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Soru {currentIndex + 1} / {questions.length}
        </span>
        <span className="text-xs font-bold bg-emerald-500/10 text-emerald-500 px-2.5 py-1 rounded-full border border-emerald-500/10">
          ✓ {score} Doğru
        </span>
      </div>

      {/* Question */}
      <div className="mb-6 text-center">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
          {currentQuestion.questionType === "german" ? "Türkçe Karşılığını Seçin" : "Almanca Karşılığını Seçin"}
        </span>
        <h3 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight py-4">
          {currentQuestion.question}
        </h3>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 gap-3 mb-6">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = selectedOption === option;
          const isCorrectAnswer = option === currentQuestion.correctAnswer;
          
          let btnClass = "bg-slate-50 dark:bg-indigo-950/30 hover:bg-slate-100 dark:hover:bg-indigo-950/50 border-slate-200/60 dark:border-indigo-900/10 text-slate-700 dark:text-slate-200";
          
          if (hasAnswered) {
            if (isCorrectAnswer) {
              btnClass = "bg-emerald-500/10 border-emerald-500 text-emerald-600 dark:text-emerald-400 ring-2 ring-emerald-500/20";
            } else if (isSelected) {
              btnClass = "bg-rose-500/10 border-rose-500 text-rose-600 dark:text-rose-400 ring-2 ring-rose-500/20";
            } else {
              btnClass = "bg-slate-100/50 dark:bg-darkNavy-950/20 border-slate-200/30 dark:border-indigo-950/20 text-slate-400 opacity-60";
            }
          }

          return (
            <button
              key={idx}
              disabled={hasAnswered}
              onClick={() => handleOptionClick(option)}
              className={`w-full p-4 rounded-2xl border text-left font-bold text-sm transition-all duration-150 active:scale-[0.99] ${btnClass}`}
            >
              <div className="flex justify-between items-center">
                <span>{option}</span>
                {hasAnswered && isCorrectAnswer && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                )}
                {hasAnswered && isSelected && !isCorrectAnswer && (
                  <XCircle className="w-5 h-5 text-rose-500" />
                )}
              </div>
            </button>
          );
        })}
      </div>

      {/* Explanation / Example Sentence */}
      {hasAnswered && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-indigo-950/30 border border-slate-200/50 dark:border-indigo-900/15">
            <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Örnek Cümle ve Açıklama
            </span>
            <p className="text-base font-extrabold text-slate-800 dark:text-slate-100">
              {currentQuestion.word.example}
            </p>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              {currentQuestion.word.exampleTR}
            </p>
            {currentQuestion.word.plural && (
              <p className="text-xs text-slate-400 mt-2 font-medium">
                Çoğul formu: <span className="font-bold">{currentQuestion.word.plural}</span>
              </p>
            )}
          </div>

          <button
            onClick={handleNext}
            className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-accentViolet-500 dark:hover:bg-accentViolet-600 text-white font-bold rounded-xl text-sm transition-all shadow-md active:scale-95"
          >
            <span>{currentIndex === questions.length - 1 ? "Sonuçları Göster" : "Sonraki Soru"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
