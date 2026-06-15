// src/pages/Goethe.jsx
import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Play, Lock, ArrowRight, ShieldCheck, Clock, BookOpen } from "lucide-react";
import { goetheFascicles } from "../data/goethe";

export default function Goethe({ goetheProgress }) {
  const totalFascicles = goetheFascicles.length;
  const completedCount = Object.values(goetheProgress).filter(p => p.completed).length;
  const progressPct = Math.round((completedCount / totalFascicles) * 100) || 0;

  return (
    <div className="space-y-8">
      {/* Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-amber-500 to-yellow-500 text-white p-6 md:p-8 shadow-lg border border-white/10">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none select-none">
          <span className="text-[120px] font-black leading-none tracking-tighter block">GOETHE</span>
        </div>
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-white/20 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shadow-inner border border-white/30">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">Goethe-Zertifikat A1</h1>
              <p className="text-sm font-medium text-white/80 mt-1">Sınav Formatına Yönelik Özel Fasiküller</p>
            </div>
          </div>
          <p className="text-sm md:text-base font-semibold text-white/90 leading-relaxed">
            Bu bölümdeki fasiküller tamamen gerçek sınav formatına göre hazırlanmıştır. Lesen, Hören, Schreiben ve Sprechen becerilerinizi test edin.
          </p>

          {/* Progress Overview */}
          <div className="pt-2 max-w-sm">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5 text-white/90">
              <span>Sınav Hazırlığı</span>
              <span>{progressPct}% ({completedCount}/{totalFascicles})</span>
            </div>
            <div className="w-full bg-black/20 h-2 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all duration-700"
                style={{ width: `${progressPct}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Fascicles List */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-lg font-black text-slate-800 dark:text-slate-100 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-amber-500" />
            Sınav Fasikülleri
          </h2>
          <div className="grid grid-cols-1 gap-4">
            {goetheFascicles.map((fascicle, index) => {
              const fascicleProgress = goetheProgress[fascicle.id] || { score: 0, completed: false, percentage: 0 };
              const isCompleted = fascicleProgress.completed;

              return (
                <div
                  key={fascicle.id}
                  className={`relative flex items-center p-5 rounded-2xl border shadow-sm transition-all duration-300 group ${
                    isCompleted
                      ? "border-emerald-300/60 bg-emerald-50/30 dark:bg-emerald-900/10 dark:border-emerald-700/40"
                      : "border-slate-200 bg-white dark:bg-darkNavy-900 dark:border-indigo-950/60 hover:shadow-md hover:-translate-y-1"
                  }`}
                  style={!isCompleted ? { borderLeftWidth: "4px", borderLeftColor: fascicle.color } : {}}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl shadow-sm border border-white/50 dark:border-white/5 mr-4 flex-shrink-0"
                    style={{ backgroundColor: `${fascicle.color}18` }}
                  >
                    {fascicle.icon}
                  </div>
                  
                  <div className="flex-1 min-w-0 pr-4">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-0.5">
                      Fasikül {fascicle.id}
                    </span>
                    <h3 className="text-base font-black mb-0.5 truncate text-slate-800 dark:text-slate-100">
                      {fascicle.title}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 dark:text-slate-400 truncate">
                      {fascicle.subtitle}
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-3">
                    {isCompleted && (
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase mb-1 block">Skor: {fascicleProgress.percentage}%</span>
                        <div className="bg-emerald-500 text-white rounded-full p-1.5 shadow-sm">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                      </div>
                    )}
                    
                    <Link
                      to={`/goethe/${fascicle.id}`}
                      className={`flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black transition-all border ${
                        isCompleted
                          ? "bg-slate-50 hover:bg-slate-100 text-slate-600 dark:text-slate-300 dark:bg-darkNavy-800 border-slate-200/50 dark:border-indigo-900/30"
                          : "bg-amber-500/10 hover:bg-amber-500 text-amber-600 dark:text-amber-400 hover:text-white border-amber-500/30"
                      }`}
                    >
                      {isCompleted ? (
                        <>Tekrar Et <Play className="w-3.5 h-3.5" /></>
                      ) : (
                        <>Başla <ArrowRight className="w-3.5 h-3.5" /></>
                      )}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="md:col-span-1 space-y-4">
          <div className="p-6 rounded-3xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm">
            <h3 className="text-sm font-black text-slate-800 dark:text-slate-100 mb-4 flex items-center gap-2">
              <Clock className="w-4 h-4 text-rose-500" /> Sınav Bilgileri
            </h3>
            <ul className="space-y-3 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <li className="flex justify-between border-b border-slate-100 dark:border-indigo-950/40 pb-2">
                <span>Geçme Notu:</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">60 / 100 Puan</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 dark:border-indigo-950/40 pb-2">
                <span>Hören (Dinleme):</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">~20 Dk</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 dark:border-indigo-950/40 pb-2">
                <span>Lesen (Okuma):</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">~25 Dk</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 dark:border-indigo-950/40 pb-2">
                <span>Schreiben (Yazma):</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">~20 Dk</span>
              </li>
              <li className="flex justify-between">
                <span>Sprechen (Konuşma):</span>
                <span className="font-extrabold text-slate-800 dark:text-slate-100">~15 Dk</span>
              </li>
            </ul>
          </div>
          
          <div className="p-6 rounded-3xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10">
            <h3 className="text-sm font-black text-slate-800 dark:text-slate-100 mb-2">Tavsiye</h3>
            <p className="text-xs font-medium text-slate-500 dark:text-slate-400 leading-relaxed">
              Fasikülleri sırayla çözmeniz tavsiye edilir. Her bölüm sınavın farklı bir parçasını simüle eder ve eksiklerinizi görmenizi sağlar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
