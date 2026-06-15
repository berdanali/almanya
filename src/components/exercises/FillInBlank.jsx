// src/components/exercises/FillInBlank.jsx
import React, { useState, useEffect, useRef } from "react";
import { CheckCircle2, XCircle, ArrowRight, Zap } from "lucide-react";
import { playCorrect, playWrong } from "../../utils/sounds";

export default function FillInBlank({ questions, onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [bonusPoints, setBonusPoints] = useState(0);
  const [seconds, setSeconds] = useState(10); // 10s countdown for visual feedback
  const [earnedBonusThisTurn, setEarnedBonusThisTurn] = useState(false);

  const startTimeRef = useRef(Date.now());
  const timerRef = useRef(null);

  const currentQuestion = questions[currentIndex];

  useEffect(() => {
    // Reset timer and inputs on question change
    setUserInput("");
    setHasSubmitted(false);
    setEarnedBonusThisTurn(false);
    setSeconds(10);
    startTimeRef.current = Date.now();

    // Start timer countdown for UX
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (hasSubmitted || !userInput.trim()) return;

    if (timerRef.current) clearInterval(timerRef.current);
    const timeTaken = (Date.now() - startTimeRef.current) / 1000;
    const cleanAnswer = currentQuestion.blank.trim().toLowerCase();
    const cleanUserVal = userInput.trim().toLowerCase();

    const correct = cleanAnswer === cleanUserVal;
    setIsCorrect(correct);
    setHasSubmitted(true);

    if (correct) {
      setScore(prev => prev + 1);
      playCorrect();
      if (timeTaken <= 3) {
        setBonusPoints(prev => prev + 5);
        setEarnedBonusThisTurn(true);
      }
    } else {
      playWrong();
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onComplete(score, bonusPoints, questions.length);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="text-center py-8">
        <p className="text-slate-400">Soru yüklenemedi.</p>
      </div>
    );
  }

  // Split sentence to display input field in-place if possible
  const parts = currentQuestion.sentence.split("___");

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md">
      {/* Quiz Progress header */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Soru {currentIndex + 1} / {questions.length}
        </span>
        <div className="flex items-center gap-1.5 text-amber-500 font-bold text-sm bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
          <Zap className="w-4 h-4 fill-amber-500" />
          <span>Hiz Bonusu: {seconds}s</span>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400 mb-2">
          Boşluğu Doldurun:
        </h3>
        
        {/* Scrambled Sentence Text */}
        <div className="p-6 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 text-center my-4">
          <p className="text-2xl font-extrabold text-slate-800 dark:text-slate-100 leading-relaxed">
            {parts[0]}
            <span className="inline-block border-b-2 border-accentViolet-500 text-accentViolet-500 px-3 min-w-[80px]">
              {hasSubmitted ? currentQuestion.blank : userInput || "____"}
            </span>
            {parts[1]}
          </p>
        </div>
        
        <p className="text-sm font-medium text-slate-400 dark:text-slate-500 text-center italic">
          İpucu: {currentQuestion.hint}
        </p>
      </div>

      {/* Answer Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {!hasSubmitted ? (
          <div className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Cevabınızı buraya yazın..."
              autoFocus
              className="flex-1 px-4 py-3 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-white dark:bg-darkNavy-950/40 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm font-bold"
            />
            <button
              type="submit"
              disabled={!userInput.trim()}
              className="px-6 py-3 bg-accentViolet-500 hover:bg-accentViolet-600 disabled:bg-slate-200 dark:disabled:bg-indigo-950 text-white font-bold rounded-xl text-sm transition-all active:scale-95 disabled:scale-100"
            >
              Kontrol Et
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Feedback Banner */}
            <div
              className={`p-4 rounded-xl border flex items-start gap-3 ${
                isCorrect
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
              }`}
            >
              {isCorrect ? (
                <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
              )}
              <div>
                <h4 className="font-extrabold text-sm mb-0.5">
                  {isCorrect ? "Harika, Doğru Cevap!" : "Maalesef Yanlış Cevap"}
                </h4>
                {!isCorrect && (
                  <p className="text-xs font-semibold">
                    Doğru cevap: <span className="underline font-extrabold">{currentQuestion.blank}</span>
                  </p>
                )}
                {isCorrect && earnedBonusThisTurn && (
                  <p className="text-xs font-bold text-amber-500 flex items-center gap-1 mt-1">
                    <Zap className="w-3.5 h-3.5 fill-amber-500" />
                    Harika! Hız bonusu (+5 puan) kazandınız!
                  </p>
                )}
              </div>
            </div>

            {/* Translation Box */}
            <div className="p-4 rounded-xl bg-slate-50 dark:bg-indigo-950/30 border border-slate-200/50 dark:border-indigo-900/15">
              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">Türkçe Çeviri</span>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
                {currentQuestion.translation}
              </p>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={handleNext}
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-accentViolet-500 dark:hover:bg-accentViolet-600 text-white font-bold rounded-xl text-sm transition-all"
            >
              <span>{currentIndex === questions.length - 1 ? "Alıştırmayı Tamamla" : "Sonraki Soru"}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
