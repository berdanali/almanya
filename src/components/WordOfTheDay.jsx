// src/components/WordOfTheDay.jsx
import React, { useState, useEffect } from "react";
import { RefreshCw, Volume2 } from "lucide-react";
import { words } from "../data/words";
import { playFlip } from "../utils/sounds";

function getDailyWord() {
  const today = new Date().toISOString().split("T")[0];
  const seed = today.split("-").reduce((a, b) => parseInt(a) + parseInt(b), 0);
  return words[seed % words.length];
}

export default function WordOfTheDay() {
  const [flipped, setFlipped] = useState(false);
  const [word, setWord] = useState(getDailyWord());

  const handleFlip = () => {
    playFlip();
    setFlipped(f => !f);
  };

  const artikelColor = {
    der: "text-blue-500 bg-blue-500/10",
    die: "text-rose-500 bg-rose-500/10",
    das: "text-amber-500 bg-amber-500/10",
  };

  const colorClass = word.artikel ? (artikelColor[word.artikel] || "") : "text-indigo-500 bg-indigo-500/10";

  return (
    <div className="rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100 dark:border-indigo-950/40">
        <span className="text-xl">📅</span>
        <div>
          <h3 className="text-sm font-black text-slate-800 dark:text-slate-100">Günün Kelimesi</h3>
          <p className="text-[10px] font-semibold text-slate-400">Her gün yeni bir kelime öğren</p>
        </div>
      </div>

      {/* Card */}
      <div className="p-5">
        <div
          onClick={handleFlip}
          className="cursor-pointer select-none"
          style={{ perspective: "1000px" }}
        >
          <div
            className="relative w-full transition-all duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              minHeight: "120px",
            }}
          >
            {/* Front */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/20 border border-indigo-100/50 dark:border-indigo-900/20 p-4"
              style={{ backfaceVisibility: "hidden" }}
            >
              {word.artikel && (
                <span className={`text-xs font-extrabold px-2 py-0.5 rounded uppercase tracking-wider mb-2 ${colorClass}`}>
                  {word.artikel}
                </span>
              )}
              <span className="text-2xl font-black text-slate-800 dark:text-slate-100 text-center">
                {word.german}
              </span>
              <p className="text-[10px] font-semibold text-slate-400 mt-3 flex items-center gap-1">
                <RefreshCw className="w-3 h-3" /> Çeviriyi görmek için tıkla
              </p>
            </div>

            {/* Back */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/20 border border-emerald-100/50 dark:border-emerald-900/20 p-4"
              style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
            >
              <span className="text-2xl font-black text-emerald-700 dark:text-emerald-300 text-center">
                {word.turkish}
              </span>
              {word.example && (
                <div className="mt-3 text-center">
                  <p className="text-xs font-extrabold text-slate-700 dark:text-slate-200">{word.example}</p>
                  <p className="text-[10px] font-semibold text-slate-500 mt-0.5">{word.exampleTR}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
