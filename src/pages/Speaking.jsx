// src/pages/Speaking.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Mic, Volume2, MessageCircle, ChevronRight, Construction } from "lucide-react";

export default function Speaking({ addXP, addPoints }) {
  const modes = [
    {
      icon: Volume2,
      title: "Shadowing",
      subtitle: "Dinle ve Tekrar Et",
      desc: "Almanca cümleleri önce dinle, sonra yüksek sesle tekrar et. Telaffuzunu Türkçe fonetikle karşılaştır.",
      color: "indigo",
      available: false,
    },
    {
      icon: Mic,
      title: "Mikrofon Modu",
      subtitle: "Konuşma Tanıma",
      desc: "Mikrofona konuş, söylediğin cümleyi hedefe karşılaştır. Chrome/Edge'de çalışır.",
      color: "rose",
      available: false,
    },
    {
      icon: MessageCircle,
      title: "Diyalog Pratiği",
      subtitle: "Günlük Senaryolar",
      desc: "Gerçekçi senaryo diyaloglarında Almanca konuş. TTS ile doğru telaffuzu dinle.",
      color: "teal",
      available: true,
      to: "/konusma/diyalog",
    },
  ];

  const colorMap = {
    indigo: { bg: "bg-indigo-500/10", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-500/20", btn: "bg-indigo-600 hover:bg-indigo-700 text-white" },
    rose:   { bg: "bg-rose-500/10",   text: "text-rose-600 dark:text-rose-400",   border: "border-rose-500/20",   btn: "bg-rose-600 hover:bg-rose-700 text-white" },
    teal:   { bg: "bg-teal-500/10",   text: "text-teal-600 dark:text-teal-400",   border: "border-teal-500/20",   btn: "bg-teal-600 hover:bg-teal-700 text-white" },
  };

  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">Konuşma Pratiği</h1>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
          Almancayı ses çıkararak öğren — shadowing, mikrofon ve diyalog modları.
        </p>
      </div>

      {/* Coming soon banner */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/30 text-amber-700 dark:text-amber-400">
        <Construction className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm font-semibold">
          <strong>Shadowing ve Mikrofon modları</strong> hazırlanıyor. Şimdilik Diyalog Pratiği kullanılabilir.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {modes.map(mode => {
          const Icon = mode.icon;
          const c = colorMap[mode.color];
          return (
            <div
              key={mode.title}
              className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm ${mode.available ? "" : "opacity-60"}`}
            >
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-xl ${c.bg} border ${c.border} flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${c.text}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-extrabold text-slate-800 dark:text-slate-100">{mode.title}</h3>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${c.bg} ${c.text} ${c.border}`}>
                      {mode.subtitle}
                    </span>
                    {!mode.available && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                        Yakında
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{mode.desc}</p>
                </div>
              </div>
              {mode.available && mode.to && (
                <div className="mt-4">
                  <Link
                    to={mode.to}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all ${c.btn}`}
                  >
                    Başla <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Tips */}
      <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
        <h3 className="text-sm font-black text-slate-700 dark:text-slate-200">Konuşma Pratiği İpuçları</h3>
        <ul className="space-y-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400 list-none">
          <li>🎯 Almanca öğrenmede en büyük engel "konuşmaktan korkmak"tır — hatalar yapmak normaldir.</li>
          <li>🔊 Her yeni kelimeyi yüksek sesle söyle — sadece okumak yetmez.</li>
          <li>📱 Telefonunun sesli asistanına Almanca konuşarak pratik yapabilirsin.</li>
          <li>🎧 Diyalog seslerini dinle, duraklat ve aynı tonla tekrar et (shadowing tekniği).</li>
        </ul>
      </div>
    </div>
  );
}
