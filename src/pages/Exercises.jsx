// src/pages/Exercises.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { HelpCircle, BookOpen, Layers, Award, Flame, RefreshCw } from "lucide-react";
import { modules } from "../data/modules";
import { words } from "../data/words";
import { exercisesData } from "../data/exercises";

import FillInBlank from "../components/exercises/FillInBlank";
import MultipleChoice from "../components/exercises/MultipleChoice";
import DragMatch from "../components/exercises/DragMatch";
import GrammarExercise from "../components/exercises/GrammarExercise";
import { shuffleArray } from "../utils/helpers";

export default function Exercises({ progress, saveModuleProgress }) {
  const [selectedModId, setSelectedModId] = useState(null);
  const [activeExercise, setActiveExercise] = useState(null); // fill, choice, match, grammar
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [exerciseResult, setExerciseResult] = useState(null);

  const selectedModule = modules.find((m) => m.id === selectedModId);
  const moduleWords = selectedModId ? words.filter((w) => w.module === selectedModId) : [];
  const grammarExerciseData = selectedModId ? exercisesData[selectedModId]?.grammar : null;

  useEffect(() => {
    // Reset exercise state on module change
    setActiveExercise(null);
    setExerciseResult(null);
  }, [selectedModId]);

  const startMultipleChoice = () => {
    const selectedWords = shuffleArray(moduleWords).slice(0, 10);
    const questions = selectedWords.map(word => {
      const isGermanQuestion = Math.random() > 0.5;
      const questionText = isGermanQuestion ? word.german : word.turkish;
      const correctAns = isGermanQuestion ? word.turkish : word.german;
      
      const otherWords = words.filter(w => w.id !== word.id);
      const shuffledOthers = shuffleArray(otherWords);
      const distractorMeanings = [];
      
      for (let i = 0; i < shuffledOthers.length && distractorMeanings.length < 3; i++) {
        const val = isGermanQuestion ? shuffledOthers[i].turkish : shuffledOthers[i].german;
        if (!distractorMeanings.includes(val) && val !== correctAns) {
          distractorMeanings.push(val);
        }
      }
      
      const options = shuffleArray([correctAns, ...distractorMeanings]);
      
      return {
        question: questionText,
        questionType: isGermanQuestion ? "german" : "turkish",
        correctAnswer: correctAns,
        options,
        word
      };
    });

    setQuizQuestions(questions);
    setActiveExercise("choice");
    setExerciseResult(null);
  };

  const handleExerciseComplete = (score, totalOrBonus, customTotal) => {
    let finalScore = score;
    let finalTotal = customTotal || 10;
    let bonusPointsEarned = 0;

    if (activeExercise === "fill") {
      finalTotal = customTotal;
      bonusPointsEarned = totalOrBonus; // totalOrBonus represents bonus points here
    } else if (activeExercise === "match") {
      finalScore = score / 10;
      finalTotal = score / 10;
    } else if (activeExercise === "grammar") {
      finalTotal = totalOrBonus; // totalOrBonus represents grand total here
    }

    saveModuleProgress(selectedModId, finalScore, finalTotal);

    setExerciseResult({
      score: finalScore,
      total: finalTotal,
      bonus: bonusPointsEarned,
      pointsEarned: finalScore * 10 + bonusPointsEarned
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-indigo-950/40">
        <div className="w-10 h-10 rounded-xl bg-accentViolet-500/10 text-accentViolet-500 flex items-center justify-center">
          <HelpCircle className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">
            Alıştırma Merkezi (Übungen)
          </h1>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
            İstediğiniz modülü ve alıştırma şeklini seçip kendinizi test edin.
          </p>
        </div>
      </div>

      {/* 1. Module Selector Panel */}
      {!selectedModId && (
        <div className="space-y-4">
          <h2 className="text-lg font-black text-slate-700 dark:text-slate-300">Öncelikle Bir Modül Seçin:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {modules.map((m) => {
              const count = words.filter((w) => w.module === m.id).length;
              return (
                <button
                  key={m.id}
                  onClick={() => setSelectedModId(m.id)}
                  className="p-5 text-left rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all active:scale-[0.98] group flex items-center gap-3"
                >
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">
                      Modül {m.id}
                    </span>
                    <h3 className="font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-accentViolet-500 transition-colors">
                      {m.titleDE}
                    </h3>
                    <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500 block">
                      {count} Kelime
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Exercise Type Selector Panel */}
      {selectedModId && !activeExercise && !exerciseResult && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-black text-slate-700 dark:text-slate-200">
              {selectedModule.titleDE} ({selectedModule.titleTR}) Alıştırmaları
            </h2>
            <button
              onClick={() => setSelectedModId(null)}
              className="text-xs font-bold text-accentViolet-500 hover:underline"
            >
              Modül Değiştir
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Boşluk Doldurma */}
            <button
              onClick={() => {
                setActiveExercise("fill");
                setQuizQuestions(exercisesData[selectedModId]?.fillInBlank || []);
                setExerciseResult(null);
              }}
              className="p-5 text-left rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all active:scale-[0.99] group"
            >
              <span className="text-2xl block mb-3">✏️</span>
              <h3 className="font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-accentViolet-500 transition-colors">
                Boşluk Doldurma
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-1">
                Cümledeki boşlukları doğru çekimlerle doldurun. Hızlı cevaplara +5 puan bonus!
              </p>
            </button>

            {/* Çoktan Seçmeli */}
            <button
              onClick={startMultipleChoice}
              className="p-5 text-left rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all active:scale-[0.99] group"
            >
              <span className="text-2xl block mb-3">🎯</span>
              <h3 className="font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-accentViolet-500 transition-colors">
                Çoktan Seçmeli
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-1">
                10 soruluk Almanca-Türkçe / Türkçe-Almanca kelime testi.
              </p>
            </button>

            {/* Eşleştirme Kartları */}
            <button
              onClick={() => {
                setActiveExercise("match");
                setExerciseResult(null);
              }}
              className="p-5 text-left rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm hover:shadow-md transition-all active:scale-[0.99] group"
            >
              <span className="text-2xl block mb-3">🔗</span>
              <h3 className="font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-accentViolet-500 transition-colors">
                Eşleştirme Kartları
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-1">
                Sol ve sağ sütundaki kelimeleri eşleştirin. 100% doğrulukta konfeti coşkusu!
              </p>
            </button>

            {/* Gramer Alıştırmaları */}
            <button
              disabled={!grammarExerciseData}
              onClick={() => {
                setActiveExercise("grammar");
                setExerciseResult(null);
              }}
              className={`p-5 text-left rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm transition-all group ${
                grammarExerciseData
                  ? "hover:shadow-md active:scale-[0.99] cursor-pointer"
                  : "opacity-40 cursor-not-allowed"
              }`}
            >
              <span className="text-2xl block mb-3">📖</span>
              <h3 className="font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-accentViolet-500 transition-colors">
                Gramer Alıştırmaları
              </h3>
              <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-1">
                {grammarExerciseData
                  ? "Fiil çekimleri, Artikel testleri ve kelime sıralama oyunları."
                  : "Bu modül için özel gramer alıştırması bulunmamaktadır."}
              </p>
            </button>
          </div>
        </div>
      )}

      {/* 3. Render Active Exercise */}
      {selectedModId && activeExercise && !exerciseResult && (
        <div className="space-y-4">
          <div className="flex justify-between items-center px-1">
            <span className="text-sm font-extrabold text-slate-400">
              Modül {selectedModId}: {selectedModule.titleDE}
            </span>
            <button
              onClick={() => {
                setActiveExercise(null);
                setExerciseResult(null);
              }}
              className="text-xs font-bold text-rose-500 hover:underline"
            >
              Vazgeç
            </button>
          </div>

          {activeExercise === "fill" && (
            <FillInBlank questions={quizQuestions} onComplete={handleExerciseComplete} />
          )}
          {activeExercise === "choice" && (
            <MultipleChoice questions={quizQuestions} onComplete={handleExerciseComplete} />
          )}
          {activeExercise === "match" && (
            <DragMatch words={moduleWords} onComplete={(points) => handleExerciseComplete(points)} />
          )}
          {activeExercise === "grammar" && (
            <GrammarExercise grammarData={grammarExerciseData} onComplete={(score, total) => handleExerciseComplete(score, total)} />
          )}
        </div>
      )}

      {/* 4. Render Result Summary */}
      {selectedModId && exerciseResult && (
        <div className="max-w-md mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md text-center space-y-6">
          <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center text-white text-3xl font-black shadow-md animate-bounce">
            🏆
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">
              Alıştırma Tamamlandı!
            </h3>
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500">
              Skorunuz kaydedildi. Yeni konularla devam edebilirsiniz.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 grid grid-cols-2 gap-4">
            <div className="text-center border-r border-slate-200/50 dark:border-indigo-900/10">
              <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Skor</span>
              <span className="text-lg font-black text-slate-800 dark:text-slate-200">
                {exerciseResult.score} / {exerciseResult.total}
              </span>
            </div>
            <div className="text-center">
              <span className="text-xs font-bold text-slate-400 uppercase block mb-1">Kazanılan</span>
              <span className="text-lg font-black text-amber-500 flex items-center justify-center gap-1">
                <Award className="w-4 h-4 text-amber-500" />
                +{exerciseResult.pointsEarned} Puan
              </span>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              onClick={() => {
                setActiveExercise(null);
                setExerciseResult(null);
              }}
              className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-850 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-200 font-extrabold rounded-xl text-sm border border-slate-200/50 dark:border-indigo-900/15"
            >
              Alıştırmalara Dön
            </button>
            <button
              onClick={() => {
                if (activeExercise === "choice") startMultipleChoice();
                else {
                  setExerciseResult(null);
                }
              }}
              className="flex-1 py-3.5 bg-accentViolet-500 hover:bg-accentViolet-600 text-white font-extrabold rounded-xl text-sm shadow-md"
            >
              Yeniden Dene
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
