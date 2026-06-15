// src/components/Flashcard.jsx
import React, { useState } from "react";
import { Check, X, RotateCw, BookOpen } from "lucide-react";

export default function Flashcard({ word, onResult }) {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleResponse = (isCorrect, e) => {
    e.stopPropagation(); // Prevent card from flipping back when clicking button
    setFlipped(false);
    // Add brief timeout for flip animation to finish before going to next card
    setTimeout(() => {
      onResult(isCorrect);
    }, 150);
  };

  return (
    <div className="flex flex-col items-center max-w-md w-full mx-auto space-y-6">
      {/* 3D Card Container */}
      <div
        onClick={handleFlip}
        className={`flip-card w-full aspect-[4/3] cursor-pointer ${
          flipped ? "flipped" : ""
        }`}
      >
        <div className="flip-card-inner w-full h-full relative duration-500 shadow-md hover:shadow-xl rounded-3xl border border-slate-200/50 dark:border-indigo-900/30">
          
          {/* Card Front (German) */}
          <div className="flip-card-front absolute inset-0 w-full h-full p-8 rounded-3xl bg-gradient-to-tr from-white to-slate-50 dark:from-darkNavy-900 dark:to-indigo-950 flex flex-col justify-between items-center text-center">
            <div className="flex items-center gap-1 bg-indigo-500/10 text-accentViolet-500 px-3 py-1 rounded-full text-xs font-bold border border-indigo-500/15">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Modül {word.module}</span>
            </div>

            <div className="space-y-3">
              {word.artikel && (
                <span className={`text-sm px-2.5 py-0.5 rounded-full font-extrabold uppercase ${
                  word.artikel === "der" ? "bg-blue-500/10 text-blue-500 border border-blue-500/20" :
                  word.artikel === "die" ? "bg-rose-500/10 text-rose-500 border border-rose-500/20" :
                  "bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/20"
                }`}>
                  {word.artikel}
                </span>
              )}
              <h2 className="text-3xl font-extrabold text-slate-800 dark:text-slate-100 tracking-tight">
                {word.german}
              </h2>
              {word.plural && (
                <p className="text-sm text-slate-400 font-semibold">
                  çoğul: {word.plural}
                </p>
              )}
            </div>

            <div className="flex items-center gap-1 text-slate-400 text-xs font-semibold">
              <RotateCw className="w-3.5 h-3.5" />
              <span>Çevirmek için tıkla</span>
            </div>
          </div>

          {/* Card Back (Turkish) */}
          <div className="flip-card-back absolute inset-0 w-full h-full p-8 rounded-3xl bg-gradient-to-tr from-slate-900 to-indigo-950 text-white flex flex-col justify-between items-center text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400/80">
              Türkçe Anlami
            </span>

            <div className="space-y-5">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {word.turkish}
              </h3>
              
              <div className="space-y-1 bg-white/5 p-4 rounded-xl border border-white/10 max-w-sm">
                <p className="text-sm font-extrabold text-indigo-200">
                  {word.example}
                </p>
                <p className="text-xs font-semibold text-slate-300">
                  {word.exampleTR}
                </p>
              </div>
            </div>

            {/* Quick action helper inside back face */}
            <div className="flex gap-4 w-full justify-center">
              <button
                onClick={(e) => handleResponse(false, e)}
                className="flex items-center gap-1 px-4 py-2 bg-rose-500 hover:bg-rose-600 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all border border-rose-500/30"
              >
                <X className="w-3.5 h-3.5" />
                Bilmedim
              </button>
              <button
                onClick={(e) => handleResponse(true, e)}
                className="flex items-center gap-1 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white text-xs font-bold rounded-xl shadow-md transition-all border border-emerald-500/30"
              >
                <Check className="w-3.5 h-3.5" />
                Bildim
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
