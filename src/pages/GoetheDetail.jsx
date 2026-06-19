// src/pages/GoetheDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ShieldAlert, Award, ChevronRight } from "lucide-react";
import { goetheFascicles } from "../data/goethe";
import GoetheExerciseRunner from "../components/exercises/GoetheExerciseRunner";

export default function GoetheDetail({ saveGoetheProgress }) {
  const { id } = useParams();
  const fascicleId = parseInt(id, 10);
  const fascicle = goetheFascicles.find(f => f.id === fascicleId);

  const [activeTab, setActiveTab] = useState("theory");
  const [exerciseResult, setExerciseResult] = useState(null);
  const [exerciseKey, setExerciseKey] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setExerciseResult(null);
    setActiveTab("theory");
    setExerciseKey(k => k + 1);
  }, [fascicleId]);

  if (!fascicle) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-rose-500">Fasikül bulunamadı!</h2>
        <Link to="/goethe" className="text-amber-500 hover:underline mt-4 inline-block font-semibold">
          Sınav Paneline Dön
        </Link>
      </div>
    );
  }

  const handleExerciseComplete = (score, bonusPoints, totalQuestions) => {
    saveGoetheProgress(fascicleId, score, totalQuestions);
    setExerciseResult({
      score,
      total: totalQuestions,
      pointsEarned: (score * 10) + (bonusPoints || 0),
      bonus: bonusPoints || 0
    });
  };

  const isA2 = fascicle.level === "A2";

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 pb-4 border-b border-slate-200 dark:border-indigo-950/40">
        <div className="flex items-center gap-3">
          <Link
            to="/goethe"
            className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-indigo-950/60 border border-slate-200/50 dark:border-indigo-900/10 text-slate-500 dark:text-slate-400 flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md"
            style={{ backgroundColor: fascicle.color + "20" }}
          >
            {fascicle.icon}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-0.5">
              <span className="text-[10px] font-extrabold text-amber-500 uppercase tracking-widest">Fasikül {fascicle.id}</span>
              <span className={`text-[10px] font-extrabold uppercase px-1.5 py-0.5 rounded-md tracking-widest ${
                isA2
                  ? "bg-violet-100 dark:bg-violet-950/40 text-violet-600 dark:text-violet-400"
                  : "bg-sky-100 dark:bg-sky-950/40 text-sky-600 dark:text-sky-400"
              }`}>
                {fascicle.level || "A1"}
              </span>
            </div>
            <h1 className="text-xl font-black text-slate-800 dark:text-slate-100 truncate">
              {fascicle.title}
              <span className="text-slate-400 dark:text-slate-500 font-medium text-base ml-2 hidden sm:inline">| {fascicle.subtitle}</span>
            </h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-slate-100 dark:bg-indigo-950/60 p-1.5 rounded-2xl">
          <button
            onClick={() => setActiveTab("theory")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === "theory"
                ? "bg-white dark:bg-darkNavy-900 text-slate-800 dark:text-white shadow-sm"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            Sınav Taktikleri
          </button>
          <button
            onClick={() => setActiveTab("exercise")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${
              activeTab === "exercise"
                ? "bg-white dark:bg-darkNavy-900 text-amber-600 dark:text-amber-400 shadow-sm"
                : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            Sınav Simülasyonu
          </button>
        </div>
      </div>

      {/* --- THEORY TAB --- */}
      {activeTab === "theory" && (
        <div className="space-y-6 animate-in fade-in duration-300">
          <p className="text-base font-semibold text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-indigo-950/20 p-5 rounded-2xl border border-slate-200/50 dark:border-indigo-900/10">
            {fascicle.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-rose-500" />
                Prüfungstipp (Sınav İpuçları)
              </h3>
              <ul className="space-y-3">
                {fascicle.tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 bg-white dark:bg-darkNavy-900 p-4 rounded-xl border border-slate-200 dark:border-indigo-950/60 shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                Örnek Cümleler
              </h3>
              <div className="space-y-3">
                {fascicle.examples.map((ex, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/15 border border-amber-200/40 dark:border-amber-900/20">
                    <p className="text-sm font-extrabold text-slate-800 dark:text-slate-100">🇩🇪 {ex.de}</p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">🇹🇷 {ex.tr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4">
            <button
              onClick={() => setActiveTab("exercise")}
              className="flex items-center gap-2 px-6 py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-sm transition-all shadow-md active:scale-95"
            >
              Simülasyona Başla <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* --- EXERCISE TAB --- */}
      {activeTab === "exercise" && (
        <div className="animate-in fade-in duration-300">
          {!exerciseResult ? (
            <div className="bg-slate-50 dark:bg-indigo-950/10 p-1 rounded-3xl border border-slate-200/50 dark:border-indigo-900/10">
              <GoetheExerciseRunner
                key={exerciseKey}
                exercises={fascicle.exercises}
                onComplete={handleExerciseComplete}
              />
            </div>
          ) : (
            <div className="max-w-md mx-auto p-8 bg-white dark:bg-darkNavy-900 rounded-3xl border border-amber-200 dark:border-amber-900/40 shadow-lg text-center space-y-6">
              <div className="text-6xl">
                {exerciseResult.score >= Math.round(exerciseResult.total * 0.7) ? "🎓" : "📚"}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100">Sınav Tamamlandı!</h3>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {exerciseResult.score >= Math.round(exerciseResult.total * 0.7)
                    ? "Harika! Bu bölümdeki sınav stratejilerini kavramışsınız."
                    : "Sınava girmeden önce bu bölümü biraz daha tekrar etmelisiniz."}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/30 grid grid-cols-2 gap-4">
                <div className="text-center border-r border-amber-200/50 dark:border-amber-900/30">
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-500 uppercase block mb-1">Skor</span>
                  <span className="text-2xl font-black text-amber-700 dark:text-amber-400">
                    {exerciseResult.score} / {exerciseResult.total}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-[10px] font-bold text-amber-600 dark:text-amber-500 uppercase block mb-1">Kazanılan XP</span>
                  <span className="text-2xl font-black text-amber-700 dark:text-amber-400">
                    +{exerciseResult.pointsEarned}
                  </span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => { setExerciseResult(null); setExerciseKey(k => k + 1); }}
                  className="flex-1 py-3.5 bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-800 dark:hover:bg-darkNavy-700 text-slate-700 dark:text-slate-200 font-extrabold rounded-xl text-sm transition-all"
                >
                  Tekrar Dene
                </button>
                <Link
                  to="/goethe"
                  className="flex-1 py-3.5 flex items-center justify-center bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-sm shadow-md transition-all"
                >
                  Fasiküllere Dön
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
