// src/pages/ArtikelQuiz.jsx
import React, { useState, useCallback } from "react";
import { ShieldCheck, Play, RefreshCw, CheckCircle2, XCircle, ChevronRight } from "lucide-react";
import { words } from "../data/words";
import SpeakButton from "../components/SpeakButton";
import { shuffleArray } from "../utils/helpers";
import { playCorrect, playWrong } from "../utils/sounds";

const ARTIKELS = ["der", "die", "das"];

const ARTIKEL_STYLE = {
  der: { bg: "bg-blue-500",   border: "border-blue-500",   text: "text-blue-600 dark:text-blue-400",   light: "bg-blue-500/10 border-blue-500/30"  },
  die: { bg: "bg-rose-500",   border: "border-rose-500",   text: "text-rose-600 dark:text-rose-400",   light: "bg-rose-500/10 border-rose-500/30"  },
  das: { bg: "bg-amber-500",  border: "border-amber-500",  text: "text-amber-600 dark:text-amber-500", light: "bg-amber-500/10 border-amber-500/30" },
};

const artikelWords = words.filter((w) => w.artikel && ARTIKELS.includes(w.artikel));

export default function ArtikelQuiz({ recordWordResult }) {
  const [quizState, setQuizState] = useState("setup"); // setup | playing | ended
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null); // chosen artikel
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [wrongItems, setWrongItems] = useState([]);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);

  const startQuiz = useCallback((customDeck = null) => {
    setDeck(shuffleArray(customDeck ?? artikelWords));
    setCurrentIndex(0);
    setSelected(null);
    setCorrect(0);
    setWrong(0);
    setWrongItems([]);
    setStreak(0);
    setBestStreak(0);
    setQuizState("playing");
  }, []);

  const handleArtikel = (choice) => {
    if (selected !== null) return; // already answered
    setSelected(choice);
    const word = deck[currentIndex];
    const isCorrect = choice === word.artikel;

    if (isCorrect) {
      playCorrect();
      setCorrect((p) => p + 1);
      setStreak((p) => {
        const next = p + 1;
        setBestStreak((b) => Math.max(b, next));
        return next;
      });
    } else {
      playWrong();
      setWrong((p) => p + 1);
      setStreak(0);
      setWrongItems((p) => [...p, word]);
    }
    recordWordResult?.(word.id, isCorrect);
  };

  const next = () => {
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((p) => p + 1);
      setSelected(null);
    } else {
      setQuizState("ended");
    }
  };

  // ---------- SETUP ----------
  if (quizState === "setup") {
    return (
      <div className="max-w-xl mx-auto space-y-6 animate-in fade-in duration-300">
        <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-indigo-950/40">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">Artikel Quiz</h1>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Der, die veya das? Almanca article bilginizi test edin.
            </p>
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm text-center space-y-6">
          <span className="text-5xl">🎓</span>
          <div className="space-y-2">
            <h2 className="text-lg font-extrabold text-slate-800 dark:text-slate-100">
              {artikelWords.length} İsim, 3 Artikel
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Her kelime için doğru artikeli seçin. Seri yaparak bonus puan kazanın!
            </p>
          </div>

          {/* Artikel legend */}
          <div className="grid grid-cols-3 gap-3">
            {ARTIKELS.map((a) => (
              <div key={a} className={`p-3 rounded-xl border ${ARTIKEL_STYLE[a].light}`}>
                <p className={`text-lg font-black ${ARTIKEL_STYLE[a].text}`}>{a}</p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {a === "der" ? "Maskulin" : a === "die" ? "Feminin" : "Nötr"}
                </p>
              </div>
            ))}
          </div>

          <button
            onClick={() => startQuiz()}
            className="w-full flex items-center justify-center gap-2 py-4 bg-blue-500 hover:bg-blue-600 text-white font-extrabold rounded-xl text-sm shadow-md active:scale-95 transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            Quiz Başlat ({artikelWords.length} kelime)
          </button>
        </div>
      </div>
    );
  }

  // ---------- ENDED ----------
  if (quizState === "ended") {
    const total = correct + wrong;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    return (
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md text-center space-y-6 animate-in zoom-in-95 duration-200">
        <div className="text-5xl">{pct >= 80 ? "🏆" : pct >= 60 ? "🎯" : "📚"}</div>
        <div className="space-y-1">
          <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">Quiz Bitti!</h3>
          <p className="text-sm text-slate-400 font-semibold">
            Başarı: <span className={`font-black ${pct >= 70 ? "text-emerald-500" : "text-rose-500"}`}>{pct}%</span>
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
            <p className="text-xs font-bold text-emerald-500 uppercase mb-1">Doğru</p>
            <p className="text-xl font-black text-emerald-600 dark:text-emerald-400">{correct}</p>
          </div>
          <div className="p-3 rounded-2xl bg-rose-500/10 border border-rose-500/20">
            <p className="text-xs font-bold text-rose-500 uppercase mb-1">Yanlış</p>
            <p className="text-xl font-black text-rose-600 dark:text-rose-400">{wrong}</p>
          </div>
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <p className="text-xs font-bold text-amber-500 uppercase mb-1">En İyi Seri</p>
            <p className="text-xl font-black text-amber-600 dark:text-amber-400">{bestStreak}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          {wrongItems.length > 0 && (
            <button
              onClick={() => startQuiz(wrongItems)}
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-blue-500 hover:bg-blue-600 text-white font-extrabold rounded-xl text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <RefreshCw className="w-4 h-4" />
              Yanlışları Tekrar Et ({wrongItems.length})
            </button>
          )}
          <button
            onClick={() => startQuiz()}
            className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-darkNavy-850 text-white font-extrabold rounded-xl text-sm transition-all active:scale-[0.98]"
          >
            Yeniden Başlat
          </button>
          <button
            onClick={() => setQuizState("setup")}
            className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-950/20 text-slate-600 dark:text-slate-400 font-extrabold rounded-xl text-sm transition-all active:scale-[0.98]"
          >
            Ana Menüye Dön
          </button>
        </div>
      </div>
    );
  }

  // ---------- PLAYING ----------
  const word = deck[currentIndex];
  const answered = selected !== null;
  const isCorrect = answered && selected === word.artikel;

  return (
    <div className="max-w-md mx-auto space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-400 px-1">
        <span className="uppercase tracking-wider">{currentIndex + 1} / {deck.length}</span>
        <div className="flex gap-4">
          <span className="text-emerald-500">✓ {correct}</span>
          <span className="text-rose-500">✗ {wrong}</span>
          {streak > 1 && (
            <span className="text-amber-500">🔥 {streak} seri</span>
          )}
        </div>
      </div>

      <div className="h-1.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-blue-500 transition-all duration-300"
          style={{ width: `${(currentIndex / deck.length) * 100}%` }}
        />
      </div>

      {/* Word Card */}
      <div className={`p-8 rounded-3xl border text-center space-y-4 transition-all duration-300 ${
        answered
          ? isCorrect
            ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/40"
            : "bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800/40"
          : "bg-white dark:bg-darkNavy-900 border-slate-200 dark:border-indigo-950/60"
      } shadow-sm`}>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Bu kelimenin artikeli nedir?</p>

        <div className="space-y-2">
          {answered && (
            <span className={`text-sm px-3 py-1 rounded-full font-extrabold uppercase border ${
              ARTIKEL_STYLE[word.artikel].light
            } ${ARTIKEL_STYLE[word.artikel].text}`}>
              {word.artikel}
            </span>
          )}
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-4xl font-black text-slate-800 dark:text-slate-100">{word.german}</h2>
            <SpeakButton text={`${word.artikel} ${word.german}`} />
          </div>
          {word.plural && (
            <p className="text-sm text-slate-400">(Çoğul: {word.plural})</p>
          )}
        </div>

        {answered && (
          <div className="space-y-1.5">
            <p className="text-sm font-bold text-slate-500 dark:text-slate-400">{word.turkish}</p>
            <div className={`flex items-center justify-center gap-2 text-xs font-extrabold ${isCorrect ? "text-emerald-600 dark:text-emerald-400" : "text-rose-600 dark:text-rose-400"}`}>
              {isCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
              {isCorrect
                ? "Doğru!"
                : `Yanlış! Doğru cevap: ${word.artikel}`}
            </div>
          </div>
        )}
      </div>

      {/* Artikel buttons */}
      <div className="grid grid-cols-3 gap-3">
        {ARTIKELS.map((a) => {
          const style = ARTIKEL_STYLE[a];
          let btnClass = `py-4 rounded-2xl border-2 font-extrabold text-lg transition-all active:scale-95 `;
          if (!answered) {
            btnClass += `bg-white dark:bg-darkNavy-900 ${style.border} ${style.text} hover:${style.bg} hover:text-white`;
          } else if (a === word.artikel) {
            btnClass += `${style.bg} border-transparent text-white shadow-md`;
          } else if (a === selected && selected !== word.artikel) {
            btnClass += `bg-rose-500 border-transparent text-white opacity-80`;
          } else {
            btnClass += `bg-slate-100 dark:bg-darkNavy-950/30 border-slate-200 dark:border-indigo-900/20 text-slate-400 opacity-50`;
          }

          return (
            <button key={a} onClick={() => handleArtikel(a)} disabled={answered} className={btnClass}>
              {a}
            </button>
          );
        })}
      </div>

      {answered && (
        <button
          onClick={next}
          className="w-full flex items-center justify-center gap-2 py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-accentViolet-500 dark:hover:bg-accentViolet-600 text-white font-extrabold rounded-xl text-sm transition-all active:scale-[0.98] shadow-md"
        >
          {currentIndex < deck.length - 1 ? (
            <><ChevronRight className="w-4 h-4" /> Sonraki Kelime</>
          ) : (
            <><CheckCircle2 className="w-4 h-4" /> Sonuçları Gör</>
          )}
        </button>
      )}
    </div>
  );
}
