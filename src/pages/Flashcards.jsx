// src/pages/Flashcards.jsx
import React, { useState, useEffect, useRef } from "react";
import {
  Award, BookOpen, Layers, CheckCircle2, XCircle, ArrowRight,
  Play, RefreshCw, AlertCircle, Brain, PenLine, Timer, Volume2
} from "lucide-react";
import { words } from "../data/words";
import { modules } from "../data/modules";
import Flashcard from "../components/Flashcard";
import SpeakButton from "../components/SpeakButton";
import { shuffleArray } from "../utils/helpers";
import { useSRS } from "../hooks/useSRS";
import { speakGerman } from "../utils/speech";
import { playCorrect, playWrong } from "../utils/sounds";

const MODES = [
  { id: "flip",  label: "Standart",          icon: Layers,  desc: "Kartı çevir, bildim/bilmedim seç" },
  { id: "srs",   label: "Aralıklı Tekrar",   icon: Brain,   desc: "SM-2 algoritması ile akıllı tekrar" },
  { id: "write", label: "Yazma Pratiği",     icon: PenLine, desc: "Türkçeden Almancaya yaz" },
];

function checkWrite(input, word) {
  const n = input.trim().toLowerCase();
  const base = word.german.toLowerCase();
  const full = word.artikel ? `${word.artikel} ${base}` : base;
  return n === base || n === full;
}

export default function Flashcards({ addWrongAnswer, recordWordResult }) {
  const { getWordsForReview, recordReview, pendingCount } = useSRS(words);

  // Setup state
  const [mode, setMode] = useState("flip");
  const [timed, setTimed] = useState(false);
  const [selectedMod, setSelectedMod] = useState("all");
  const [wordFilter, setWordFilter] = useState("all");

  // Session state
  const [sessionActive, setSessionActive] = useState(false);
  const [deck, setDeck] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [wrongWords, setWrongWords] = useState([]);
  const [sessionEnded, setSessionEnded] = useState(false);

  // Writing mode
  const [writeInput, setWriteInput] = useState("");
  const [writeChecked, setWriteChecked] = useState(false);
  const [writeCorrect, setWriteCorrect] = useState(false);
  const writeRef = useRef(null);

  // SRS mode — show answer overlay after flip
  const [srsRevealed, setSrsRevealed] = useState(false);

  // Timer
  const [timeLeft, setTimeLeft] = useState(60);
  const timerRef = useRef(null);

  // ---------- timer ----------
  useEffect(() => {
    if (!sessionActive || !timed || sessionEnded) return;
    if (timeLeft <= 0) { setSessionEnded(true); return; }
    timerRef.current = setTimeout(() => setTimeLeft((p) => p - 1), 1000);
    return () => clearTimeout(timerRef.current);
  }, [sessionActive, timed, sessionEnded, timeLeft]);

  // ---------- start ----------
  const startSession = (customWords = null) => {
    let sessionWords = customWords;
    if (!sessionWords) {
      if (mode === "srs") {
        sessionWords = getWordsForReview();
        if (sessionWords.length === 0) {
          alert("Tebrikler! Bugün tekrar edilecek kelime yok. Yarın tekrar gelin.");
          return;
        }
      } else {
        sessionWords = words;
        if (selectedMod !== "all")
          sessionWords = sessionWords.filter((w) => w.module === parseInt(selectedMod, 10));
        if (wordFilter === "not_learned") {
          const learned = JSON.parse(localStorage.getItem("almanca_learned_words") || "[]");
          sessionWords = sessionWords.filter((w) => !learned.includes(w.id));
        }
      }
    }
    if (sessionWords.length === 0) {
      alert("Seçilen kriterlere uygun kelime bulunamadı. Lütfen filtreleri değiştirin.");
      return;
    }
    setDeck(shuffleArray(sessionWords));
    setCurrentIndex(0);
    setCorrectCount(0);
    setWrongCount(0);
    setWrongWords([]);
    setSessionActive(true);
    setSessionEnded(false);
    setSrsRevealed(false);
    setWriteInput("");
    setWriteChecked(false);
    if (timed) setTimeLeft(60);
  };

  // ---------- helpers ----------
  const advanceCard = () => {
    setSrsRevealed(false);
    setWriteInput("");
    setWriteChecked(false);
    if (currentIndex < deck.length - 1) {
      setCurrentIndex((p) => p + 1);
      setTimeout(() => writeRef.current?.focus(), 100);
    } else {
      setSessionEnded(true);
    }
  };

  // ---------- flip / SRS result ----------
  const handleFlipResult = (isCorrect) => {
    const word = deck[currentIndex];
    if (isCorrect) {
      setCorrectCount((p) => p + 1);
    } else {
      setWrongCount((p) => p + 1);
      setWrongWords((p) => [...p, word]);
      addWrongAnswer?.(word.id, `Kelime Kartı: "${word.german}" ne demek?`, "Bilmedim", word.turkish);
    }
    recordWordResult?.(word.id, isCorrect);

    if (mode === "srs") recordReview(word.id, isCorrect ? 4 : 1);

    advanceCard();
  };

  // SRS quality buttons (shown after reveal)
  const handleSRSQuality = (quality) => {
    const word = deck[currentIndex];
    const isCorrect = quality >= 3;
    if (isCorrect) {
      setCorrectCount((p) => p + 1);
    } else {
      setWrongCount((p) => p + 1);
      setWrongWords((p) => [...p, word]);
      addWrongAnswer?.(word.id, `SRS: "${word.german}" ne demek?`, "Bilmedim", word.turkish);
    }
    recordWordResult?.(word.id, isCorrect);
    recordReview(word.id, quality);
    advanceCard();
  };

  // ---------- write result ----------
  const handleWriteSubmit = (e) => {
    e?.preventDefault();
    if (writeChecked) { advanceCard(); return; }
    const word = deck[currentIndex];
    const correct = checkWrite(writeInput, word);
    setWriteCorrect(correct);
    setWriteChecked(true);
    if (correct) {
      playCorrect();
      setCorrectCount((p) => p + 1);
    } else {
      playWrong();
      setWrongCount((p) => p + 1);
      setWrongWords((p) => [...p, word]);
      addWrongAnswer?.(word.id, `Yazma: "${word.turkish}" Almancası nedir?`, writeInput, word.german);
      speakGerman(word.artikel ? `${word.artikel} ${word.german}` : word.german);
    }
    recordWordResult?.(word.id, correct);
  };

  const endSession = () => { setSessionActive(false); setSessionEnded(false); };
  const retryWrongOnly = () => startSession(wrongWords);
  const timerPct = (timeLeft / 60) * 100;

  // ---------- setup panel ----------
  if (!sessionActive) {
    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-in fade-in duration-300">
        <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-indigo-950/40">
          <div className="w-10 h-10 rounded-xl bg-accentViolet-500/10 text-accentViolet-500 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">Kelime Kartları</h1>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
              Almanca kelimeleri farklı modlarla çalışın.
            </p>
          </div>
        </div>

        <div className="max-w-xl mx-auto space-y-6">
          {/* Mode tabs */}
          <div className="grid grid-cols-3 gap-3">
            {MODES.map((m) => {
              const Icon = m.icon;
              const active = mode === m.id;
              return (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`p-3 rounded-2xl border text-left transition-all space-y-1.5 ${
                    active
                      ? "bg-accentViolet-500 border-accentViolet-500 text-white shadow-md"
                      : "bg-white dark:bg-darkNavy-900 border-slate-200 dark:border-indigo-950/60 text-slate-700 dark:text-slate-200 hover:border-accentViolet-400"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-white" : "text-accentViolet-500"}`} />
                  <p className="text-xs font-extrabold">{m.label}</p>
                  <p className={`text-[10px] font-semibold leading-tight ${active ? "text-white/80" : "text-slate-400"}`}>
                    {m.desc}
                  </p>
                  {m.id === "srs" && (
                    <span className={`inline-block text-[9px] font-black px-1.5 py-0.5 rounded-full ${
                      active ? "bg-white/20 text-white" : "bg-accentViolet-500/10 text-accentViolet-500"
                    }`}>
                      {pendingCount} kelime bekliyor
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Filters (not for SRS) */}
          {mode !== "srs" && (
            <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Modül Seçin</label>
                <select
                  value={selectedMod}
                  onChange={(e) => setSelectedMod(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-slate-50 dark:bg-darkNavy-950/40 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm font-bold text-slate-700 dark:text-slate-200"
                >
                  <option value="all">Tüm Kelimeler ({words.length} kelime)</option>
                  {modules.map((m) => {
                    const count = words.filter((w) => w.module === m.id).length;
                    return (
                      <option key={m.id} value={m.id}>
                        Modül {m.id}: {m.titleDE} ({count} kelime)
                      </option>
                    );
                  })}
                </select>
              </div>
              {mode === "flip" && (
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Durum Filtresi</label>
                  <select
                    value={wordFilter}
                    onChange={(e) => setWordFilter(e.target.value)}
                    className="px-4 py-3 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-slate-50 dark:bg-darkNavy-950/40 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm font-bold text-slate-700 dark:text-slate-200"
                  >
                    <option value="all">Tüm Kelimeler</option>
                    <option value="not_learned">Sadece Öğrenilmemiş</option>
                  </select>
                </div>
              )}
            </div>
          )}

          {mode === "srs" && pendingCount === 0 && (
            <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
              <p className="text-2xl">🎉</p>
              <p className="text-sm font-extrabold text-emerald-600 dark:text-emerald-400">Bugünkü tekrarlar tamamlandı!</p>
              <p className="text-xs text-slate-500">Tüm kelimeler zamanında tekrar edildi. Yarın kontrol edin.</p>
            </div>
          )}

          {/* Timer toggle */}
          <div
            onClick={() => setTimed((v) => !v)}
            className={`flex items-center justify-between p-4 rounded-2xl border cursor-pointer transition-all ${
              timed
                ? "bg-amber-500/10 border-amber-500/30"
                : "bg-white dark:bg-darkNavy-900 border-slate-200 dark:border-indigo-950/60 hover:border-amber-400/60"
            }`}
          >
            <div className="flex items-center gap-3">
              <Timer className={`w-5 h-5 ${timed ? "text-amber-500" : "text-slate-400"}`} />
              <div>
                <p className="text-sm font-extrabold text-slate-800 dark:text-slate-100">Zamanlı Meydan Okuma</p>
                <p className="text-xs font-semibold text-slate-400">60 saniyede kaç kelime yapabilirsin?</p>
              </div>
            </div>
            <div className={`w-11 h-6 rounded-full transition-all relative ${timed ? "bg-amber-500" : "bg-slate-200 dark:bg-indigo-950/50"}`}>
              <div className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-all ${timed ? "left-5.5 translate-x-0.5" : "left-0.5"}`} />
            </div>
          </div>

          <button
            onClick={() => startSession()}
            disabled={mode === "srs" && pendingCount === 0}
            className="w-full flex items-center justify-center gap-2 py-4 bg-accentViolet-500 hover:bg-accentViolet-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-extrabold rounded-xl text-sm shadow-md active:scale-95 transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            Çalışmayı Başlat
          </button>
        </div>
      </div>
    );
  }

  // ---------- session ended ----------
  if (sessionActive && sessionEnded) {
    const totalDone = correctCount + wrongCount;
    const pct = totalDone > 0 ? Math.round((correctCount / totalDone) * 100) : 0;
    return (
      <div className="max-w-md mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md text-center space-y-6 animate-in zoom-in-95 duration-200">
        <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-md">
          {pct >= 80 ? "🏆" : pct >= 50 ? "🎯" : "📚"}
        </div>
        <div className="space-y-1.5">
          <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">Oturum Tamamlandı!</h3>
          {timed && <p className="text-xs font-bold text-amber-500">⏱ Süre doldu</p>}
          <p className="text-sm font-semibold text-slate-400">
            Başarı oranı: <span className={`font-black ${pct >= 70 ? "text-emerald-500" : "text-rose-500"}`}>{pct}%</span>
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 grid grid-cols-2 gap-4">
          <div className="text-center border-r border-slate-200/50 dark:border-indigo-900/10">
            <span className="text-[10px] font-bold text-emerald-500 uppercase block mb-1">Doğru</span>
            <span className="text-xl font-black text-emerald-600 dark:text-emerald-400 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> {correctCount}
            </span>
          </div>
          <div className="text-center">
            <span className="text-[10px] font-bold text-rose-500 uppercase block mb-1">Yanlış</span>
            <span className="text-xl font-black text-rose-600 dark:text-rose-400 flex items-center justify-center gap-1">
              <XCircle className="w-4 h-4" /> {wrongCount}
            </span>
          </div>
        </div>

        {wrongCount > 0 && (
          <div className="flex items-center gap-2 p-3 bg-amber-500/10 rounded-xl text-xs font-semibold text-amber-600 dark:text-amber-400 border border-amber-500/20">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            <span>Yanlış kelimeler hata defterine kaydedildi.</span>
          </div>
        )}

        <div className="flex flex-col gap-2 pt-2">
          {wrongCount > 0 && (
            <button
              onClick={retryWrongOnly}
              className="w-full flex items-center justify-center gap-1.5 py-3.5 bg-accentViolet-500 hover:bg-accentViolet-600 text-white font-extrabold rounded-xl text-sm shadow-md transition-all active:scale-[0.98]"
            >
              <RefreshCw className="w-4 h-4" />
              Sadece Yanlışları Tekrar Et ({wrongCount})
            </button>
          )}
          <button
            onClick={() => startSession()}
            className="w-full py-3.5 bg-slate-800 hover:bg-slate-900 dark:bg-darkNavy-850 text-white font-extrabold rounded-xl text-sm transition-all active:scale-[0.98]"
          >
            Yeniden Başlat
          </button>
          <button
            onClick={endSession}
            className="w-full py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-950/20 text-slate-600 dark:text-slate-400 font-extrabold rounded-xl text-sm transition-all active:scale-[0.98]"
          >
            Çalışmayı Bitir
          </button>
        </div>
      </div>
    );
  }

  // ---------- active session ----------
  const currentWord = deck[currentIndex];
  return (
    <div className="space-y-5 max-w-md mx-auto">
      {/* Timer bar */}
      {timed && (
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-bold">
            <span className={timeLeft <= 10 ? "text-rose-500 animate-pulse" : "text-slate-400"}>
              ⏱ {timeLeft}s
            </span>
            <span className="text-slate-400">{Math.round(timerPct)}%</span>
          </div>
          <div className="h-2 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-1000 ${timeLeft <= 10 ? "bg-rose-500" : "bg-amber-500"}`}
              style={{ width: `${timerPct}%` }}
            />
          </div>
        </div>
      )}

      {/* Progress header */}
      <div className="flex items-center justify-between text-xs font-bold text-slate-400 dark:text-slate-500 px-1">
        <span className="uppercase tracking-wider">
          {mode === "srs" ? "Aralıklı Tekrar" : mode === "write" ? "Yazma Pratiği" : "Standart"} •{" "}
          {currentIndex + 1} / {deck.length}
        </span>
        <div className="flex gap-4">
          <span className="text-emerald-500">✓ {correctCount}</span>
          <span className="text-rose-500">✗ {wrongCount}</span>
        </div>
      </div>

      <div className="h-1.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full bg-accentViolet-500 transition-all duration-300"
          style={{ width: `${(currentIndex / deck.length) * 100}%` }}
        />
      </div>

      {/* ---- FLIP MODE ---- */}
      {mode === "flip" && (
        <Flashcard word={currentWord} onResult={handleFlipResult} />
      )}

      {/* ---- SRS MODE — front ---- */}
      {mode === "srs" && !srsRevealed && (
        <div className="p-8 rounded-3xl bg-gradient-to-tr from-white to-slate-50 dark:from-darkNavy-900 dark:to-indigo-950 border border-slate-200/50 dark:border-indigo-900/30 shadow-md text-center space-y-6">
          <div className="flex items-center justify-center gap-1 bg-indigo-500/10 text-accentViolet-500 px-3 py-1 rounded-full text-xs font-bold border border-indigo-500/15 w-fit mx-auto">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Modül {currentWord.module}</span>
          </div>
          <div className="space-y-3">
            {currentWord.artikel && (
              <span className={`text-sm px-2.5 py-0.5 rounded-full font-extrabold uppercase ${
                currentWord.artikel === "der" ? "bg-blue-500/10 text-blue-500 border border-blue-500/20" :
                currentWord.artikel === "die" ? "bg-rose-500/10 text-rose-500 border border-rose-500/20" :
                "bg-amber-500/10 text-amber-600 dark:text-amber-500 border border-amber-500/20"
              }`}>{currentWord.artikel}</span>
            )}
            <h2 className="text-4xl font-extrabold text-slate-800 dark:text-slate-100">{currentWord.german}</h2>
            {currentWord.plural && <p className="text-sm text-slate-400">çoğul: {currentWord.plural}</p>}
          </div>
          <div className="flex items-center justify-center gap-3">
            <SpeakButton text={currentWord.artikel ? `${currentWord.artikel} ${currentWord.german}` : currentWord.german} className="!text-slate-400" />
            <button
              onClick={() => setSrsRevealed(true)}
              className="flex items-center gap-2 px-6 py-3 bg-accentViolet-500 hover:bg-accentViolet-600 text-white font-extrabold rounded-xl text-sm shadow-md transition-all active:scale-95"
            >
              Cevabı Göster
            </button>
          </div>
        </div>
      )}

      {/* SRS quality overlay */}
      {mode === "srs" && srsRevealed && (
        <div className="space-y-4 animate-in fade-in duration-200">
          <div className="p-6 rounded-3xl bg-gradient-to-tr from-slate-900 to-indigo-950 text-white text-center space-y-4">
            <p className="text-xs font-bold text-indigo-300 uppercase tracking-widest">Türkçe Anlam</p>
            <h3 className="text-2xl font-black">{currentWord.turkish}</h3>
            <div className="p-3 bg-white/5 rounded-xl border border-white/10 space-y-1">
              <p className="text-sm font-extrabold text-indigo-200">{currentWord.example}</p>
              <p className="text-xs font-semibold text-slate-300">{currentWord.exampleTR}</p>
            </div>
            <div className="flex justify-center">
              <SpeakButton
                text={currentWord.artikel ? `${currentWord.artikel} ${currentWord.german}` : currentWord.german}
                className="!text-indigo-300 hover:!text-white hover:!bg-white/10"
              />
            </div>
          </div>
          <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider">Bu kelimeyi ne kadar iyi biliyordun?</p>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleSRSQuality(1)}
              className="py-3 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 font-extrabold text-sm hover:bg-rose-500/20 transition-all active:scale-95"
            >
              😰<br /><span className="text-xs">Bilmedim</span>
            </button>
            <button
              onClick={() => handleSRSQuality(3)}
              className="py-3 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-500 font-extrabold text-sm hover:bg-amber-500/20 transition-all active:scale-95"
            >
              🤔<br /><span className="text-xs">Güçlükle</span>
            </button>
            <button
              onClick={() => handleSRSQuality(5)}
              className="py-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-extrabold text-sm hover:bg-emerald-500/20 transition-all active:scale-95"
            >
              😊<br /><span className="text-xs">Kolaylıkla</span>
            </button>
          </div>
        </div>
      )}

      {/* ---- WRITING MODE ---- */}
      {mode === "write" && (
        <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-5">
          <div className="text-center space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Türkçe Anlam</p>
            <h2 className="text-3xl font-black text-slate-800 dark:text-slate-100">{currentWord.turkish}</h2>
            {writeChecked && (
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm font-bold text-slate-500">Doğru cevap:</p>
                <p className="text-sm font-black text-slate-800 dark:text-slate-200">
                  {currentWord.artikel && (
                    <span className={`text-xs mr-1 px-1.5 py-0.5 rounded font-extrabold uppercase ${
                      currentWord.artikel === "der" ? "text-blue-500" :
                      currentWord.artikel === "die" ? "text-rose-500" : "text-amber-500"
                    }`}>{currentWord.artikel}</span>
                  )}
                  {currentWord.german}
                </p>
                <SpeakButton text={currentWord.artikel ? `${currentWord.artikel} ${currentWord.german}` : currentWord.german} />
              </div>
            )}
          </div>

          <form onSubmit={handleWriteSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                Almancasını yazın:
              </label>
              <input
                ref={writeRef}
                type="text"
                value={writeInput}
                onChange={(e) => setWriteInput(e.target.value)}
                disabled={writeChecked}
                autoFocus
                placeholder="z.B. die Tür oder Tür..."
                className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 text-sm font-bold transition-all ${
                  writeChecked
                    ? writeCorrect
                      ? "border-emerald-400 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-300 focus:ring-emerald-500"
                      : "border-rose-400 bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-300 focus:ring-rose-500"
                    : "border-slate-200 dark:border-indigo-900/30 bg-slate-50 dark:bg-darkNavy-950/40 text-slate-800 dark:text-slate-100 focus:ring-accentViolet-500"
                }`}
              />
            </div>

            {writeChecked && (
              <div className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-bold ${
                writeCorrect
                  ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400"
                  : "bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400"
              }`}>
                {writeCorrect ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                {writeCorrect ? "Doğru! Harika!" : "Yanlış! Doğru cevabı inceleyin."}
              </div>
            )}

            <button
              type="submit"
              disabled={!writeInput.trim() && !writeChecked}
              className="w-full py-3.5 bg-accentViolet-500 hover:bg-accentViolet-600 disabled:opacity-40 text-white font-extrabold rounded-xl text-sm shadow-md transition-all active:scale-[0.98]"
            >
              {writeChecked ? "Sonraki Kelime →" : "Kontrol Et"}
            </button>
          </form>
        </div>
      )}

      <div className="text-center pt-1">
        <button
          onClick={endSession}
          className="text-xs font-bold text-slate-400 dark:text-slate-500 hover:text-rose-500 transition-colors uppercase tracking-wider"
        >
          Çalışmayı Durdur
        </button>
      </div>
    </div>
  );
}
