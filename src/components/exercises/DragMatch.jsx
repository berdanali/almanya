// src/components/exercises/DragMatch.jsx
import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { CheckCircle2, RefreshCw } from "lucide-react";
import { shuffleArray } from "../../utils/helpers";

export default function DragMatch({ words, onComplete }) {
  const [germanList, setGermanList] = useState([]);
  const [turkishList, setTurkishList] = useState([]);
  
  const [selectedGerman, setSelectedGerman] = useState(null);
  const [selectedTurkish, setSelectedTurkish] = useState(null);
  
  const [matches, setMatches] = useState({}); // Stores word.id -> true
  const [wrongPairs, setWrongPairs] = useState({ de: null, tr: null }); // Temp red styling
  const [finished, setFinished] = useState(false);

  // Initialize pairs
  useEffect(() => {
    // Select up to 6 random words from the array
    const sampleSize = Math.min(words.length, 6);
    const selected = shuffleArray(words).slice(0, sampleSize);

    const deSide = selected.map(w => ({ id: w.id, text: w.german, artikel: w.artikel }));
    const trSide = selected.map(w => ({ id: w.id, text: w.turkish }));

    setGermanList(shuffleArray(deSide));
    setTurkishList(shuffleArray(trSide));
    setMatches({});
    setSelectedGerman(null);
    setSelectedTurkish(null);
    setFinished(false);
  }, [words]);

  // Matching check logic
  useEffect(() => {
    if (selectedGerman && selectedTurkish) {
      if (selectedGerman.id === selectedTurkish.id) {
        // Correct match!
        setMatches((prev) => {
          const next = { ...prev, [selectedGerman.id]: true };
          // Check if all are matched
          if (Object.keys(next).length === germanList.length) {
            triggerConfetti();
            setFinished(true);
          }
          return next;
        });
        setSelectedGerman(null);
        setSelectedTurkish(null);
      } else {
        // Wrong match! Flashing red feedback
        setWrongPairs({ de: selectedGerman.id, tr: selectedTurkish.id });
        const deId = selectedGerman.id;
        const trId = selectedTurkish.id;

        setSelectedGerman(null);
        setSelectedTurkish(null);

        setTimeout(() => {
          setWrongPairs((prev) => {
            // Only clear if another error hasn't overwritten it
            if (prev.de === deId && prev.tr === trId) {
              return { de: null, tr: null };
            }
            return prev;
          });
        }, 800);
      }
    }
  }, [selectedGerman, selectedTurkish]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  const handleGermanClick = (item) => {
    if (matches[item.id] || wrongPairs.de === item.id) return;
    setSelectedGerman(item);
  };

  const handleTurkishClick = (item) => {
    if (matches[item.id] || wrongPairs.tr === item.id) return;
    setSelectedTurkish(item);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md">
      <div className="text-center mb-6">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block mb-1">
          Eşleştirme Oyunu (Kombinationen)
        </span>
        <h3 className="text-lg font-bold text-slate-700 dark:text-slate-200">
          Almanca kelimeleri doğru Türkçe anlamlarıyla eşleştirin.
        </h3>
      </div>

      {!finished ? (
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {/* German Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center border-b pb-2">
              Almanca
            </h4>
            {germanList.map((item) => {
              const isMatched = matches[item.id];
              const isSelected = selectedGerman && selectedGerman.id === item.id;
              const isWrong = wrongPairs.de === item.id;

              let cardClass = "bg-slate-50 dark:bg-indigo-950/30 border-slate-200/60 dark:border-indigo-900/10 hover:bg-slate-100 text-slate-800 dark:text-slate-200";
              if (isSelected) {
                cardClass = "bg-accentViolet-500 text-white border-accentViolet-500 shadow-md ring-2 ring-accentViolet-500/20";
              } else if (isMatched) {
                cardClass = "bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 opacity-60 cursor-not-allowed";
              } else if (isWrong) {
                cardClass = "bg-rose-500/10 border-rose-500 text-rose-500 ring-2 ring-rose-500/20";
              }

              return (
                <button
                  key={item.id}
                  disabled={isMatched}
                  onClick={() => handleGermanClick(item)}
                  className={`w-full p-4 rounded-xl border text-center font-bold text-sm md:text-base transition-all duration-200 ${cardClass}`}
                >
                  {item.artikel && (
                    <span className="text-[10px] mr-1 uppercase font-extrabold text-slate-400">
                      {item.artikel}
                    </span>
                  )}
                  {item.text}
                </button>
              );
            })}
          </div>

          {/* Turkish Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider text-center border-b pb-2">
              Türkçe
            </h4>
            {turkishList.map((item) => {
              const isMatched = matches[item.id];
              const isSelected = selectedTurkish && selectedTurkish.id === item.id;
              const isWrong = wrongPairs.tr === item.id;

              let cardClass = "bg-slate-50 dark:bg-indigo-950/30 border-slate-200/60 dark:border-indigo-900/10 hover:bg-slate-100 text-slate-800 dark:text-slate-200";
              if (isSelected) {
                cardClass = "bg-accentViolet-500 text-white border-accentViolet-500 shadow-md ring-2 ring-accentViolet-500/20";
              } else if (isMatched) {
                cardClass = "bg-emerald-500/15 border-emerald-500 text-emerald-600 dark:text-emerald-400 opacity-60 cursor-not-allowed";
              } else if (isWrong) {
                cardClass = "bg-rose-500/10 border-rose-500 text-rose-500 ring-2 ring-rose-500/20";
              }

              return (
                <button
                  key={item.id}
                  disabled={isMatched}
                  onClick={() => handleTurkishClick(item)}
                  className={`w-full p-4 rounded-xl border text-center font-bold text-sm md:text-base transition-all duration-200 ${cardClass}`}
                >
                  {item.text}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="text-center py-8 space-y-6">
          <div className="w-16 h-16 bg-emerald-500/15 text-emerald-500 border border-emerald-500/25 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h4 className="text-2xl font-black text-slate-800 dark:text-slate-100">Tebrikler!</h4>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
              Tüm kelimeleri hatasız bir şekilde eşleştirdiniz.
            </p>
          </div>
          <button
            onClick={() => onComplete(germanList.length * 10)} // 10 points per matched pair
            className="px-8 py-3 bg-accentViolet-500 hover:bg-accentViolet-600 text-white text-sm font-extrabold rounded-xl shadow-md transition-all active:scale-95"
          >
            Alıştırmayı Bitir (+{germanList.length * 10} Puan)
          </button>
        </div>
      )}
    </div>
  );
}
