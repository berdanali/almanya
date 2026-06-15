// src/components/exercises/GrammarExercise.jsx
import React, { useState, useEffect } from "react";
import { CheckCircle2, XCircle, ArrowRight, BookOpen, Layers } from "lucide-react";

export default function GrammarExercise({ grammarData, onComplete }) {
  const [currentStep, setCurrentStep] = useState(0); // 0: Conjugation, 1: Articles, 2: Word Order
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  // Sub-step indexes
  const [subIndex, setSubIndex] = useState(0);

  // User input states
  const [conjugationInput, setConjugationInput] = useState("");
  const [selectedArtikel, setSelectedArtikel] = useState(null);
  const [reorderedSentence, setReorderedSentence] = useState([]);
  const [scrambledPool, setScrambledPool] = useState([]);

  // Submission status
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const conjugations = grammarData?.conjugations || [];
  const articles = grammarData?.articles || [];
  const wordOrders = grammarData?.wordOrder || [];

  // Total steps computation
  const totalConjugations = conjugations.length;
  const totalArticles = articles.length;
  const totalWordOrders = wordOrders.length;
  const grandTotal = totalConjugations + totalArticles + totalWordOrders;

  // Initialize/Reset for each type of exercise
  useEffect(() => {
    resetStates();
  }, [currentStep, subIndex]);

  const resetStates = () => {
    setConjugationInput("");
    setSelectedArtikel(null);
    setHasSubmitted(false);
    setIsCorrect(false);

    if (currentStep === 2 && wordOrders[subIndex]) {
      setReorderedSentence([]);
      setScrambledPool([...wordOrders[subIndex].scrambled]);
    }
  };

  const handleConjugationSubmit = (e) => {
    if (e) e.preventDefault();
    if (hasSubmitted || !conjugationInput.trim()) return;

    const correctAns = conjugations[subIndex].answer.trim().toLowerCase();
    const userAns = conjugationInput.trim().toLowerCase();
    const correct = correctAns === userAns;

    setIsCorrect(correct);
    setHasSubmitted(true);
    if (correct) setScore((prev) => prev + 1);
  };

  const handleArtikelSubmit = (artikel) => {
    if (hasSubmitted) return;

    setSelectedArtikel(artikel);
    const correct = articles[subIndex].correct === artikel;

    setIsCorrect(correct);
    setHasSubmitted(true);
    if (correct) setScore((prev) => prev + 1);
  };

  const handleWordBlockClick = (word) => {
    if (hasSubmitted) return;
    setReorderedSentence((prev) => [...prev, word]);
    setScrambledPool((prev) => {
      const idx = prev.indexOf(word);
      const copy = [...prev];
      copy.splice(idx, 1);
      return copy;
    });
  };

  const handlePlacedWordClick = (word) => {
    if (hasSubmitted) return;
    setScrambledPool((prev) => [...prev, word]);
    setReorderedSentence((prev) => {
      const idx = prev.indexOf(word);
      const copy = [...prev];
      copy.splice(idx, 1);
      return copy;
    });
  };

  const handleWordOrderSubmit = () => {
    if (hasSubmitted) return;

    const correctSeq = wordOrders[subIndex].correct;
    const isMatched =
      reorderedSentence.length === correctSeq.length &&
      reorderedSentence.every((w, i) => w.toLowerCase() === correctSeq[i].toLowerCase());

    setIsCorrect(isMatched);
    setHasSubmitted(true);
    if (isMatched) setScore((prev) => prev + 1);
  };

  const handleNext = () => {
    setTotalQuestions((prev) => prev + 1);
    
    if (currentStep === 0) {
      if (subIndex < conjugations.length - 1) {
        setSubIndex((prev) => prev + 1);
      } else {
        // Go to article test
        setCurrentStep(1);
        setSubIndex(0);
      }
    } else if (currentStep === 1) {
      if (subIndex < articles.length - 1) {
        setSubIndex((prev) => prev + 1);
      } else {
        // Go to word order test
        setCurrentStep(2);
        setSubIndex(0);
      }
    } else if (currentStep === 2) {
      if (subIndex < wordOrders.length - 1) {
        setSubIndex((prev) => prev + 1);
      } else {
        // Completed everything!
        onComplete(score + (isCorrect ? 0 : 0), grandTotal); // score is already updated
      }
    }
  };

  const getPercentage = () => {
    const totalDone = (currentStep === 0 ? subIndex : currentStep === 1 ? totalConjugations + subIndex : totalConjugations + totalArticles + subIndex);
    return Math.round((totalDone / grandTotal) * 100);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md">
      {/* ProgressBar */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
          <span>Gramer Testi</span>
          <span>{getPercentage()}%</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-indigo-950/60 h-2 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-accentViolet-500 to-accentIndigo-500 transition-all duration-300"
            style={{ width: `${getPercentage()}%` }}
          />
        </div>
      </div>

      {/* Step 1: Conjugation Exercise */}
      {currentStep === 0 && conjugations[subIndex] && (
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Adım 1: Fiil Çekimi (Konjugation)
            </span>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">
              "{conjugations[subIndex].verb}" fiilini çekimleyin:
            </h3>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 flex items-center justify-center gap-3">
            <span className="text-2xl font-black text-slate-800 dark:text-slate-200 uppercase">
              {conjugations[subIndex].pronoun}
            </span>
            <span className="text-2xl text-slate-400">→</span>
            {hasSubmitted ? (
              <span className="text-2xl font-extrabold text-accentViolet-500 border-b-2 border-accentViolet-500 px-3">
                {conjugations[subIndex].answer}
              </span>
            ) : (
              <form onSubmit={handleConjugationSubmit}>
                <input
                  type="text"
                  value={conjugationInput}
                  onChange={(e) => setConjugationInput(e.target.value)}
                  placeholder="form..."
                  className="w-28 text-center text-2xl font-extrabold text-slate-800 dark:text-slate-100 bg-white dark:bg-darkNavy-950/40 border-b-2 border-slate-200 dark:border-indigo-900/30 focus:outline-none focus:border-accentViolet-500"
                  autoFocus
                />
              </form>
            )}
          </div>

          {!hasSubmitted ? (
            <button
              onClick={handleConjugationSubmit}
              disabled={!conjugationInput.trim()}
              className="w-full py-3 bg-accentViolet-500 hover:bg-accentViolet-600 disabled:bg-slate-200 dark:disabled:bg-indigo-950 text-white font-extrabold rounded-xl text-sm transition-all active:scale-[0.98]"
            >
              Cevabı Kontrol Et
            </button>
          ) : (
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  isCorrect
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                }`}
              >
                {isCorrect ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <XCircle className="w-5 h-5 flex-shrink-0" />}
                <div>
                  <h4 className="font-extrabold text-sm">
                    {isCorrect ? "Harika, doğru çekim!" : `Hatalı çekim! Doğru form: ${conjugations[subIndex].answer}`}
                  </h4>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-accentViolet-500 dark:hover:bg-accentViolet-600 text-white font-bold rounded-xl text-sm transition-all"
              >
                <span>Devam Et</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Step 2: Artikel Exercise */}
      {currentStep === 1 && articles[subIndex] && (
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Adım 2: Artikel Testi (der/die/das)
            </span>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">
              Bu kelimenin artikeli hangisidir?
            </h3>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 text-center">
            <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 uppercase tracking-tight">
              {articles[subIndex].word}
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {["der", "die", "das"].map((artikel) => {
              const isCorrectArtikel = articles[subIndex].correct === artikel;
              const isSelected = selectedArtikel === artikel;

              let btnClass = "bg-slate-50 dark:bg-indigo-950/30 border-slate-200/60 dark:border-indigo-900/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100";
              if (hasSubmitted) {
                if (isCorrectArtikel) {
                  btnClass = "bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 font-extrabold shadow-sm";
                } else if (isSelected) {
                  btnClass = "bg-rose-500/15 border-rose-500 text-rose-500 font-extrabold";
                } else {
                  btnClass = "bg-slate-100/50 dark:bg-darkNavy-950/20 text-slate-400 border-slate-200/20 opacity-55";
                }
              }

              return (
                <button
                  key={artikel}
                  disabled={hasSubmitted}
                  onClick={() => handleArtikelSubmit(artikel)}
                  className={`py-4 rounded-xl border text-center font-bold text-base md:text-lg uppercase transition-all duration-150 active:scale-95 ${btnClass}`}
                >
                  {artikel}
                </button>
              );
            })}
          </div>

          {hasSubmitted && (
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  isCorrect
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                }`}
              >
                {isCorrect ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <XCircle className="w-5 h-5 flex-shrink-0" />}
                <div>
                  <h4 className="font-extrabold text-sm">
                    {isCorrect ? "Harika, doğru artikel!" : `Hatalı! Doğru artikel: ${articles[subIndex].correct}`}
                  </h4>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-accentViolet-500 dark:hover:bg-accentViolet-600 text-white font-bold rounded-xl text-sm transition-all"
              >
                <span>Devam Et</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}

      {/* Step 3: Word Order Exercise */}
      {currentStep === 2 && wordOrders[subIndex] && (
        <div className="space-y-6">
          <div className="text-center">
            <span className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
              Adım 3: Cümle Sıralama (Satzbau)
            </span>
            <h3 className="text-xl font-bold text-slate-700 dark:text-slate-300">
              Kelimeleri doğru sıraya dizin:
            </h3>
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 mt-1 italic">
              ({wordOrders[subIndex].translation})
            </p>
          </div>

          {/* Target Sentence Area */}
          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-dashed border-slate-200 dark:border-indigo-900/30 min-h-[70px] flex flex-wrap gap-2 items-center justify-center">
            {reorderedSentence.map((word, idx) => (
              <button
                key={idx}
                disabled={hasSubmitted}
                onClick={() => handlePlacedWordClick(word)}
                className="px-3 py-2 bg-accentViolet-500 text-white rounded-xl text-sm font-bold shadow-sm hover:bg-rose-500 hover:scale-95 transition-all duration-150"
              >
                {word}
              </button>
            ))}
            {reorderedSentence.length === 0 && (
              <span className="text-slate-400 text-xs font-semibold">
                Kelimeleri yerleştirmek için aşağıya tıklayın
              </span>
            )}
          </div>

          {/* Scrambled Pool */}
          <div className="flex flex-wrap gap-2 justify-center py-2">
            {scrambledPool.map((word, idx) => (
              <button
                key={idx}
                disabled={hasSubmitted}
                onClick={() => handleWordBlockClick(word)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-800 dark:hover:bg-indigo-950/80 text-slate-800 dark:text-slate-200 rounded-xl text-sm font-bold shadow-sm border border-slate-200/50 dark:border-indigo-900/10 active:scale-95 transition-all duration-150"
              >
                {word}
              </button>
            ))}
          </div>

          {!hasSubmitted ? (
            <button
              onClick={handleWordOrderSubmit}
              disabled={reorderedSentence.length === 0}
              className="w-full py-3 bg-accentViolet-500 hover:bg-accentViolet-600 disabled:bg-slate-200 dark:disabled:bg-indigo-950 text-white font-extrabold rounded-xl text-sm transition-all active:scale-[0.98]"
            >
              Cevabı Kontrol Et
            </button>
          ) : (
            <div className="space-y-4">
              <div
                className={`p-4 rounded-xl border flex items-center gap-3 ${
                  isCorrect
                    ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                    : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
                }`}
              >
                {isCorrect ? <CheckCircle2 className="w-5 h-5 flex-shrink-0" /> : <XCircle className="w-5 h-5 flex-shrink-0" />}
                <div>
                  <h4 className="font-extrabold text-sm">
                    {isCorrect ? "Harika, doğru cümle sırası!" : "Cümle sırası yanlış!"}
                  </h4>
                  {!isCorrect && (
                    <p className="text-xs font-semibold mt-1">
                      Doğru sıralama: <span className="underline font-bold">{wordOrders[subIndex].correct.join(" ")}</span>
                    </p>
                  )}
                </div>
              </div>
              <button
                onClick={handleNext}
                className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-accentViolet-500 dark:hover:bg-accentViolet-600 text-white font-bold rounded-xl text-sm transition-all"
              >
                <span>{subIndex === wordOrders.length - 1 ? "Gramer Testini Tamamla" : "Sonraki Cümle"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
