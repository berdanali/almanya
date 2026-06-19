// src/pages/Goethe.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Play, ArrowRight, Clock, BookOpen, ChevronRight, Trophy, Target, Info } from "lucide-react";
import { goetheFascicles } from "../data/goethe";

const SKILLS_A1 = [
  {
    id: "hoeren",
    name: "Hören",
    nameTR: "Dinleme",
    icon: "🎧",
    accentCls: "text-sky-700 dark:text-sky-400",
    badgeCls: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400",
    borderCls: "border-sky-200 dark:border-sky-900/40",
    bgCls: "bg-sky-50 dark:bg-sky-950/20",
    barCls: "bg-sky-500",
    fascicleIds: [7, 8],
    points: 25,
    duration: "~20 dk",
    teile: [
      { label: "Teil 1", desc: "5 kısa ses kaydı — Richtig/Falsch", fascicleId: 7 },
      { label: "Teil 2 & 3", desc: "Diyaloglar & İlan eşleştirme", fascicleId: 8 },
    ],
  },
  {
    id: "lesen",
    name: "Lesen",
    nameTR: "Okuma",
    icon: "📖",
    accentCls: "text-emerald-700 dark:text-emerald-400",
    badgeCls: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400",
    borderCls: "border-emerald-200 dark:border-emerald-900/40",
    bgCls: "bg-emerald-50 dark:bg-emerald-950/20",
    barCls: "bg-emerald-500",
    fascicleIds: [6, 9],
    points: 25,
    duration: "~25 dk",
    teile: [
      { label: "Teil 1 & 2", desc: "Kısa metinler & ilanlar — Richtig/Falsch", fascicleId: 6 },
      { label: "Teil 3", desc: "Duruma uygun ilanı seçme", fascicleId: 9 },
    ],
  },
  {
    id: "schreiben",
    name: "Schreiben",
    nameTR: "Yazma",
    icon: "✍️",
    accentCls: "text-amber-700 dark:text-amber-400",
    badgeCls: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400",
    borderCls: "border-amber-200 dark:border-amber-900/40",
    bgCls: "bg-amber-50 dark:bg-amber-950/20",
    barCls: "bg-amber-500",
    fascicleIds: [2, 3],
    points: 25,
    duration: "~20 dk",
    teile: [
      { label: "Teil 1", desc: "Kişisel bilgilerle form doldurma", fascicleId: 2 },
      { label: "Teil 2", desc: "Kısa e-posta / mesaj yazma (~30 kelime)", fascicleId: 3 },
    ],
  },
  {
    id: "sprechen",
    name: "Sprechen",
    nameTR: "Konuşma",
    icon: "🎤",
    accentCls: "text-rose-700 dark:text-rose-400",
    badgeCls: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400",
    borderCls: "border-rose-200 dark:border-rose-900/40",
    bgCls: "bg-rose-50 dark:bg-rose-950/20",
    barCls: "bg-rose-500",
    fascicleIds: [1, 4, 5],
    points: 25,
    duration: "~15 dk",
    teile: [
      { label: "Teil 1", desc: "Kendinizi tanıtın", fascicleId: 1 },
      { label: "Teil 2", desc: "W-soruları sorma ve cevaplama", fascicleId: 4 },
      { label: "Teil 3", desc: "Rica ve emir cümleleri (Imperativ)", fascicleId: 5 },
    ],
  },
];

const SKILLS_A2 = [
  {
    id: "hoeren_a2", name: "Hören", nameTR: "Dinleme", icon: "🎧",
    accentCls: "text-sky-700 dark:text-sky-400",
    badgeCls: "bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-400",
    borderCls: "border-sky-200 dark:border-sky-900/40",
    bgCls: "bg-sky-50 dark:bg-sky-950/20",
    barCls: "bg-sky-500",
    fascicleIds: [13, 14], points: 25, duration: "~30 dk",
    teile: [
      { label: "Teil 1", desc: "Radyo duyuruları — Richtig/Falsch", fascicleId: 13 },
      { label: "Teil 2 & 3", desc: "Uzun diyaloglar & Form doldurma", fascicleId: 14 },
    ],
  },
  {
    id: "lesen_a2", name: "Lesen", nameTR: "Okuma", icon: "📖",
    accentCls: "text-emerald-700 dark:text-emerald-400",
    badgeCls: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400",
    borderCls: "border-emerald-200 dark:border-emerald-900/40",
    bgCls: "bg-emerald-50 dark:bg-emerald-950/20",
    barCls: "bg-emerald-500",
    fascicleIds: [10, 11, 12], points: 25, duration: "~30 dk",
    teile: [
      { label: "Teil 1", desc: "Uzun metin — Richtig/Falsch", fascicleId: 10 },
      { label: "Teil 2", desc: "İlanları kişilerle eşleştirme", fascicleId: 11 },
      { label: "Teil 3", desc: "Gazete makalesi — Çoktan seçmeli", fascicleId: 12 },
    ],
  },
  {
    id: "schreiben_a2", name: "Schreiben", nameTR: "Yazma", icon: "✍️",
    accentCls: "text-amber-700 dark:text-amber-400",
    badgeCls: "bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400",
    borderCls: "border-amber-200 dark:border-amber-900/40",
    bgCls: "bg-amber-50 dark:bg-amber-950/20",
    barCls: "bg-amber-500",
    fascicleIds: [15, 16], points: 25, duration: "~30 dk",
    teile: [
      { label: "Teil 1", desc: "Metinden bilgi çıkararak form doldurma", fascicleId: 15 },
      { label: "Teil 2", desc: "Yarı resmi mesaj yazma (~80 kelime)", fascicleId: 16 },
    ],
  },
  {
    id: "sprechen_a2", name: "Sprechen", nameTR: "Konuşma", icon: "🎤",
    accentCls: "text-rose-700 dark:text-rose-400",
    badgeCls: "bg-rose-100 dark:bg-rose-900/40 text-rose-700 dark:text-rose-400",
    borderCls: "border-rose-200 dark:border-rose-900/40",
    bgCls: "bg-rose-50 dark:bg-rose-950/20",
    barCls: "bg-rose-500",
    fascicleIds: [17, 18], points: 25, duration: "~15 dk",
    teile: [
      { label: "Teil 1", desc: "Konu kartıyla sunum yapma", fascicleId: 17 },
      { label: "Teil 2", desc: "Ortak plan yapma ve müzakere", fascicleId: 18 },
    ],
  },
];

function SkillCard({ skill, goetheProgress }) {
  const fascicles = skill.fascicleIds.map(id => goetheFascicles.find(f => f.id === id)).filter(Boolean);
  const completed = fascicles.filter(f => (goetheProgress[f.id] || {}).completed).length;
  const total = fascicles.length;
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  const allDone = completed === total;

  return (
    <div className={`rounded-2xl border ${skill.borderCls} ${skill.bgCls} overflow-hidden`}>
      {/* Skill Header */}
      <div className="p-5 pb-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2.5">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <h3 className={`text-base font-black ${skill.accentCls}`}>{skill.name}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{skill.nameTR}</p>
            </div>
          </div>
          <div className="text-right">
            <div className={`text-xs font-black ${skill.accentCls}`}>{skill.points} Puan</div>
            <div className="text-[10px] text-slate-400 font-medium">{skill.duration}</div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="space-y-1 mb-1">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">İlerleme</span>
            <span className={`text-[10px] font-black ${skill.accentCls}`}>{completed}/{total} bölüm</span>
          </div>
          <div className="w-full h-1.5 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
            <div className={`h-full ${skill.barCls} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
          </div>
        </div>
      </div>

      {/* Teile */}
      <div className="divide-y divide-black/5 dark:divide-white/5">
        {skill.teile.map((teil, i) => {
          const f = goetheFascicles.find(x => x.id === teil.fascicleId);
          const fp = f ? (goetheProgress[f.id] || {}) : {};
          const done = fp.completed;
          return (
            <div key={i} className="px-5 py-3 flex items-center gap-3 bg-white/50 dark:bg-black/10">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                done ? "bg-emerald-500" : "bg-white dark:bg-darkNavy-900 border-2 border-slate-200 dark:border-slate-700"
              }`}>
                {done
                  ? <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  : <span className="text-[10px] font-black text-slate-400">{i + 1}</span>
                }
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-black text-slate-700 dark:text-slate-200">{teil.label}</div>
                <div className="text-[10px] text-slate-400 font-medium leading-tight">{teil.desc}</div>
              </div>
              {f && (
                <Link
                  to={`/goethe/${f.id}`}
                  className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex-shrink-0 ${
                    done
                      ? "bg-slate-100 dark:bg-darkNavy-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-darkNavy-700"
                      : `${skill.badgeCls} hover:opacity-80`
                  }`}
                >
                  {done ? <><Play className="w-3 h-3" /> Tekrar</> : <>Başla <ArrowRight className="w-3 h-3" /></>}
                </Link>
              )}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      {allDone && (
        <div className="px-5 py-2.5 bg-emerald-50 dark:bg-emerald-950/20 border-t border-emerald-200/40 dark:border-emerald-900/20 flex items-center gap-1.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
          <span className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">Tamamlandı</span>
        </div>
      )}
    </div>
  );
}

export default function Goethe({ goetheProgress }) {
  const [activeLevel, setActiveLevel] = useState("A1");
  const skills = activeLevel === "A1" ? SKILLS_A1 : SKILLS_A2;

  const allFascicles = goetheFascicles.filter(f => (f.level || "A1") === activeLevel);
  const completedCount = allFascicles.filter(f => (goetheProgress[f.id] || {}).completed).length;
  const totalCount = allFascicles.length;
  const overallPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const a1Total = goetheFascicles.filter(f => (f.level || "A1") === "A1").length;
  const a2Total = goetheFascicles.filter(f => f.level === "A2").length;
  const a1Done = goetheFascicles.filter(f => (f.level || "A1") === "A1" && (goetheProgress[f.id] || {}).completed).length;
  const a2Done = goetheFascicles.filter(f => f.level === "A2" && (goetheProgress[f.id] || {}).completed).length;

  return (
    <div className="max-w-5xl mx-auto space-y-8">

      {/* ── Header ── */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 md:p-8 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none select-none flex items-end justify-end pr-4 pb-2">
          <span className="text-[120px] font-black leading-none tracking-tighter">GOETHE</span>
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
              <Trophy className="w-4 h-4 text-amber-400" />
            </div>
            <span className="text-xs font-black text-white/60 uppercase tracking-widest">Resmi Sınav Hazırlığı</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tight mb-1">Goethe-Zertifikat</h1>
          <p className="text-white/70 text-sm font-medium mb-5">
            4 beceri alanı • 100 puan • Geçme notu: 60 • Gerçek sınav formatı
          </p>

          {/* Level Tabs */}
          <div className="flex bg-white/10 p-1 rounded-xl w-fit gap-1">
            {["A1", "A2"].map(lvl => (
              <button
                key={lvl}
                onClick={() => setActiveLevel(lvl)}
                className={`px-5 py-2 rounded-lg text-sm font-black transition-all ${
                  activeLevel === lvl
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {lvl}
                <span className={`ml-2 text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                  activeLevel === lvl
                    ? "bg-slate-200 text-slate-600"
                    : "bg-white/10 text-white/50"
                }`}>
                  {lvl === "A1" ? `${a1Done}/${a1Total}` : `${a2Done}/${a2Total}`}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── Overall Progress ── */}
      <div className="bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-indigo-500" />
            <span className="text-sm font-black text-slate-800 dark:text-slate-100">{activeLevel} Genel İlerleme</span>
          </div>
          <span className="text-sm font-black text-indigo-500">{overallPct}%</span>
        </div>
        <div className="w-full h-3 bg-slate-100 dark:bg-indigo-950/40 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-700"
            style={{ width: `${overallPct}%` }}
          />
        </div>
        <div className="flex justify-between mt-2 text-[10px] font-semibold text-slate-400">
          <span>{completedCount} bölüm tamamlandı</span>
          <span>{totalCount - completedCount} bölüm kaldı</span>
        </div>
      </div>

      {/* ── Skill Grid ── */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="w-4 h-4 text-slate-400" />
          <h2 className="text-sm font-black text-slate-600 dark:text-slate-300 uppercase tracking-wider">
            {activeLevel} Sınav Bölümleri
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {skills.map(skill => (
            <SkillCard key={skill.id} skill={skill} goetheProgress={goetheProgress} />
          ))}
        </div>
      </div>

      {/* ── Exam Info ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Exam structure */}
        <div className="bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-slate-400" />
            <h3 className="text-sm font-black text-slate-800 dark:text-slate-100">{activeLevel} Sınav Yapısı</h3>
          </div>
          <div className="space-y-3">
            {[
              { skill: "Hören", icon: "🎧", pts: 25, time: activeLevel === "A1" ? "~20 dk" : "~30 dk" },
              { skill: "Lesen", icon: "📖", pts: 25, time: activeLevel === "A1" ? "~25 dk" : "~30 dk" },
              { skill: "Schreiben", icon: "✍️", pts: 25, time: activeLevel === "A1" ? "~20 dk" : "~30 dk" },
              { skill: "Sprechen", icon: "🎤", pts: 25, time: activeLevel === "A1" ? "~15 dk" : "~15 dk" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 dark:border-indigo-950/30 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="text-base">{row.icon}</span>
                  <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{row.skill}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>{row.time}</span>
                  <span className="bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded font-black">{row.pts} puan</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/20 rounded-xl">
            <p className="text-xs font-bold text-amber-700 dark:text-amber-400">
              Geçme notu: <span className="font-black">60/100 puan</span> · Her beceri alanı için minimum puan gerekmez, toplam hesaplanır.
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 rounded-2xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <Info className="w-4 h-4 text-slate-400" />
            <h3 className="text-sm font-black text-slate-800 dark:text-slate-100">Sınav İpuçları</h3>
          </div>
          <ul className="space-y-3">
            {(activeLevel === "A1" ? [
              "Hören bölümünde her ses kaydı iki kez çalınır — ilkinde genel anlamı, ikincisinde detayları yakalayın.",
              "Lesen'de önce soruları okuyun, sonra metni — ne arayacağınızı bilmek avantaj sağlar.",
              "Schreiben Teil 2'de 3 maddenin tamamına değinin; atlamak puan kesmez ancak eksik kalır.",
              "Sprechen'de anlamazsanız 'Wie bitte?' demekten çekinmeyin — sınavdan puan düşmez.",
              "Sınav öncesi Goethe Institut'un resmi örnek sınavlarını mutlaka çözün.",
            ] : [
              "A2 Hören'de konuşma hızı A1'e göre yüksektir — not almaya alışın.",
              "Lesen Teil 3'te cevaplar metindeki ifadelerle birebir aynı olmayabilir; paraphrase arayın.",
              "Schreiben Teil 2'de ~80 kelime hedefleyin; 'weil', 'dass', 'wenn' bağlaçlarını kullanın.",
              "Sprechen Teil 2'de sessizlik olumsuz değerlendirilebilir — her zaman bir şeyler söyleyin.",
              "Her bölüm için ayrı zaman yönetimi yapın; bir bölüme çok takılmayın.",
            ]).map((tip, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs font-medium text-slate-600 dark:text-slate-300 leading-relaxed">
                <span className="w-5 h-5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-black text-[10px] flex-shrink-0 mt-0.5">{i + 1}</span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
}
