// src/pages/ModuleDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  BookOpen, Table, MessageSquare, HelpCircle, ArrowLeft, Check,
  Award, Flame, Lightbulb, Globe, AlertTriangle, ChevronDown, ChevronUp, ChevronRight
} from "lucide-react";

import { modules } from "../data/modules";
import { words } from "../data/words";
import { dialogs } from "../data/dialogs";
import { exercisesData } from "../data/exercises";

import FillInBlank from "../components/exercises/FillInBlank";
import MultipleChoice from "../components/exercises/MultipleChoice";
import DragMatch from "../components/exercises/DragMatch";
import GrammarExercise from "../components/exercises/GrammarExercise";
import { shuffleArray } from "../utils/helpers";

// --- Grammar Table Component ---
function GrammarTable({ table }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-indigo-900/30 shadow-sm">
      {table.title && (
        <div className="px-4 py-2 bg-slate-50 dark:bg-indigo-950/30 border-b border-slate-200 dark:border-indigo-900/30">
          <h4 className="text-xs font-black text-slate-600 dark:text-slate-300 uppercase tracking-wide">{table.title}</h4>
        </div>
      )}
      <table className="w-full text-xs">
        <thead>
          <tr className="bg-accentViolet-500/10 dark:bg-accentViolet-500/5">
            {table.headers.map((h, i) => (
              <th key={i} className="px-3 py-2 text-left font-extrabold text-accentViolet-600 dark:text-accentViolet-400 whitespace-nowrap">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100 dark:divide-indigo-950/40">
          {table.rows.map((row, ri) => (
            <tr key={ri} className="hover:bg-slate-50 dark:hover:bg-indigo-950/20 transition-colors">
              {row.map((cell, ci) => (
                <td key={ci} className={`px-3 py-2 font-semibold text-slate-700 dark:text-slate-300 ${ci === 0 ? "font-extrabold text-slate-800 dark:text-slate-100" : ""}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- Collapsible Section Component ---
function CollapsibleSection({ icon: Icon, title, color, children, defaultOpen = true }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-indigo-950/40 overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-3.5 bg-slate-50 dark:bg-indigo-950/20 hover:bg-slate-100 dark:hover:bg-indigo-950/30 transition-colors"
        onClick={() => setOpen(o => !o)}
      >
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4" style={{ color }} />
          <span className="text-sm font-black text-slate-800 dark:text-slate-100">{title}</span>
        </div>
        {open ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {open && <div className="p-5 space-y-3 bg-white dark:bg-darkNavy-900">{children}</div>}
    </div>
  );
}

export default function ModuleDetail({ progress, learnedWords, toggleWordLearned, saveModuleProgress }) {
  const { id } = useParams();
  const moduleId = parseInt(id, 10);

  const module = modules.find(m => m.id === moduleId);
  const moduleWords = words.filter(w => w.module === moduleId);
  const dialog = dialogs["m" + moduleId];
  const grammarExerciseData = exercisesData[moduleId]?.grammar;

  const [activeTab, setActiveTab] = useState("notes");
  const [activeExercise, setActiveExercise] = useState(null);
  const [quizQuestions, setQuizQuestions] = useState([]);
  const [dialogSpeaker, setDialogSpeaker] = useState("all");
  const [exerciseResult, setExerciseResult] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveExercise(null);
    setExerciseResult(null);
  }, [moduleId, activeTab]);

  if (!module) {
    return (
      <div className="text-center py-16">
        <h2 className="text-2xl font-bold text-rose-500">Modül bulunamadı!</h2>
        <Link to="/" className="text-accentViolet-500 hover:underline mt-4 inline-block font-semibold">
          Panele dön
        </Link>
      </div>
    );
  }

  const startMultipleChoice = () => {
    const selectedWords = shuffleArray(moduleWords).slice(0, 10);
    const questions = selectedWords.map(word => {
      const isGermanQuestion = Math.random() > 0.5;
      const questionText = isGermanQuestion ? word.german : word.turkish;
      const correctAns = isGermanQuestion ? word.turkish : word.german;
      const otherWords = words.filter(w => w.id !== word.id);
      const shuffledOthers = shuffleArray(otherWords);
      const distractors = [];
      for (let i = 0; i < shuffledOthers.length && distractors.length < 3; i++) {
        const val = isGermanQuestion ? shuffledOthers[i].turkish : shuffledOthers[i].german;
        if (!distractors.includes(val) && val !== correctAns) distractors.push(val);
      }
      return {
        question: questionText,
        questionType: isGermanQuestion ? "german" : "turkish",
        correctAnswer: correctAns,
        options: shuffleArray([correctAns, ...distractors]),
        word,
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
      bonusPointsEarned = totalOrBonus;
    } else if (activeExercise === "match") {
      finalScore = score / 10;
      finalTotal = score / 10;
    } else if (activeExercise === "grammar") {
      finalTotal = totalOrBonus;
    }

    saveModuleProgress(moduleId, finalScore, finalTotal);
    setExerciseResult({
      score: finalScore,
      total: finalTotal,
      bonus: bonusPointsEarned,
      pointsEarned: finalScore * 10 + bonusPointsEarned,
    });
  };

  const tabs = [
    { id: "notes", label: "Ders Notları", icon: BookOpen },
    { id: "words", label: "Kelimeler", icon: Table },
    { id: "dialog", label: "Diyalog", icon: MessageSquare },
    { id: "exercises", label: "Alıştırmalar", icon: HelpCircle },
  ];

  const artikelColor = { der: "text-blue-500 bg-blue-500/10", die: "text-rose-500 bg-rose-500/10", das: "text-amber-500 bg-amber-500/10" };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 pb-4 border-b border-slate-200 dark:border-indigo-950/40">
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-indigo-950/60 border border-slate-200/50 dark:border-indigo-900/10 text-slate-500 dark:text-slate-400 flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-md"
            style={{ backgroundColor: module.color + "20" }}
          >
            {module.icon}
          </div>
          <div>
            <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-widest block">Modül {module.id}</span>
            <h1 className="text-xl font-black text-slate-800 dark:text-slate-100">
              {module.titleDE}
              <span className="text-slate-400 dark:text-slate-500 font-medium text-base ml-2">| {module.titleTR}</span>
            </h1>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex bg-slate-100 dark:bg-indigo-950/60 p-1 rounded-2xl border border-slate-200/40 dark:border-indigo-900/10 overflow-x-auto gap-1">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => { setActiveTab(tab.id); setActiveExercise(null); setExerciseResult(null); }}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-white dark:bg-darkNavy-900 text-accentViolet-500 shadow-sm border border-slate-200/20 dark:border-indigo-900/10"
                    : "text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== TAB: NOTES ===== */}
      {activeTab === "notes" && (
        <div className="max-w-3xl mx-auto space-y-5">
          {/* Anna's Notebook */}
          <CollapsibleSection icon={BookOpen} title="Anna'nın Not Defteri — Gramer Notları" color="#6366f1">
            <h3 className="text-sm font-extrabold text-accentViolet-500 mb-3">{module.grammar.title}</h3>
            <div className="space-y-3">
              {module.grammar.notes.map((note, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/40 dark:border-indigo-900/10 text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line"
                >
                  {note}
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* Grammar Tables */}
          {module.grammarTables && module.grammarTables.length > 0 && (
            <CollapsibleSection icon={Table} title="Gramer Tabloları" color="#8b5cf6">
              <div className="space-y-4">
                {module.grammarTables.map((table, idx) => (
                  <GrammarTable key={idx} table={table} />
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Example Sentences */}
          {module.examples && module.examples.length > 0 && (
            <CollapsibleSection icon={MessageSquare} title="Örnek Cümleler" color="#10b981">
              <div className="space-y-2">
                {module.examples.map((ex, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/15 border border-emerald-200/40 dark:border-emerald-900/20">
                    <p className="text-sm font-extrabold text-slate-800 dark:text-slate-100">🇩🇪 {ex.de}</p>
                    <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">🇹🇷 {ex.tr}</p>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}

          {/* Cultural Note */}
          {module.culturalNote && (
            <CollapsibleSection icon={Globe} title="Kültürel Not" color="#f59e0b">
              <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/15 border border-amber-200/40 dark:border-amber-900/20">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  {module.culturalNote}
                </p>
              </div>
            </CollapsibleSection>
          )}

          {/* Anna's Tip */}
          {module.annaTip && (
            <CollapsibleSection icon={Lightbulb} title="Anna'nın İpucu" color="#6366f1">
              <div className="p-4 rounded-xl bg-indigo-50/60 dark:bg-indigo-950/20 border border-indigo-200/40 dark:border-indigo-900/20">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                  {module.annaTip}
                </p>
              </div>
            </CollapsibleSection>
          )}

          {/* Common Mistakes */}
          {module.commonMistakes && module.commonMistakes.length > 0 && (
            <CollapsibleSection icon={AlertTriangle} title="Sık Yapılan Hatalar" color="#ef4444">
              <div className="space-y-2">
                {module.commonMistakes.map((mistake, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-xl text-xs font-semibold leading-relaxed ${
                      mistake.startsWith("✅")
                        ? "bg-emerald-50 dark:bg-emerald-950/15 border border-emerald-200/40 dark:border-emerald-900/20 text-emerald-800 dark:text-emerald-300"
                        : "bg-rose-50 dark:bg-rose-950/15 border border-rose-200/40 dark:border-rose-900/20 text-rose-800 dark:text-rose-300"
                    }`}
                  >
                    {mistake}
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          )}
        </div>
      )}

      {/* ===== TAB: WORDS ===== */}
      {activeTab === "words" && (
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex justify-between items-center px-1">
            <h2 className="text-lg font-black text-slate-800 dark:text-slate-100">
              Konunun Kelimeleri ({moduleWords.length} Adet)
            </h2>
            <div className="flex gap-2 text-[10px] font-bold">
              <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-500">der=Eril</span>
              <span className="px-2 py-1 rounded-full bg-rose-500/10 text-rose-500">die=Dişil</span>
              <span className="px-2 py-1 rounded-full bg-amber-500/10 text-amber-500">das=Nötr</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {moduleWords.map(word => {
              const isLearned = learnedWords.includes(word.id);
              const ac = word.artikel ? (artikelColor[word.artikel] || "text-slate-500 bg-slate-500/10") : null;
              return (
                <div
                  key={word.id}
                  className={`p-4 rounded-2xl border flex items-start gap-3 transition-all shadow-sm ${
                    isLearned
                      ? "bg-emerald-50/60 dark:bg-emerald-900/10 border-emerald-200/60 dark:border-emerald-800/30"
                      : "bg-white dark:bg-darkNavy-900 border-slate-200 dark:border-indigo-950/60"
                  }`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap mb-1">
                      {word.artikel && (
                        <span className={`text-[10px] px-2 py-0.5 rounded font-extrabold tracking-wide uppercase ${ac}`}>
                          {word.artikel}
                        </span>
                      )}
                      <span className="font-extrabold text-slate-800 dark:text-slate-100 text-base">{word.german}</span>
                      {word.plural && (
                        <span className="text-xs font-medium text-slate-400">(Pl: {word.plural})</span>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">{word.turkish}</p>
                    {word.example && (
                      <div className="mt-2 p-2.5 rounded-lg bg-slate-50 dark:bg-indigo-950/30 border border-slate-200/20 dark:border-indigo-900/10">
                        <p className="text-xs font-extrabold text-slate-700 dark:text-slate-200">{word.example}</p>
                        <p className="text-[10px] font-medium text-slate-400 mt-0.5">{word.exampleTR}</p>
                      </div>
                    )}
                  </div>
                  <button
                    onClick={() => toggleWordLearned(word.id)}
                    className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all flex-shrink-0 ${
                      isLearned
                        ? "bg-emerald-500 border-emerald-500 text-white shadow-sm"
                        : "bg-slate-50 border-slate-200 dark:bg-darkNavy-800 dark:border-indigo-900/20 text-slate-400 hover:border-emerald-400"
                    }`}
                    title={isLearned ? "Öğrenilmedi İşaretle" : "Öğrendim İşaretle"}
                  >
                    <Check className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ===== TAB: DIALOGUE ===== */}
      {activeTab === "dialog" && (
        <div className="max-w-2xl mx-auto">
          {!dialog ? (
            <div className="text-center py-16 text-slate-400 font-semibold">
              <span className="text-4xl block mb-3">💬</span>
              Bu modülde diyalog bulunmamaktadır.
            </div>
          ) : (
            <div className="p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-sm space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-4 border-slate-100 dark:border-indigo-950/40">
                <div>
                  <h2 className="text-base font-black text-slate-800 dark:text-slate-100">{dialog.titleDE}</h2>
                  <p className="text-xs font-semibold text-slate-400 mt-0.5">({dialog.titleTR})</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400 uppercase">Rol:</span>
                  <select
                    value={dialogSpeaker}
                    onChange={e => setDialogSpeaker(e.target.value)}
                    className="px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-indigo-900/30 bg-white dark:bg-darkNavy-800 text-xs font-bold text-slate-700 dark:text-slate-200"
                  >
                    <option value="all">Her İkisi</option>
                    {dialog.speakers.map(sp => <option key={sp} value={sp}>{sp}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-4">
                {dialog.lines.map((line, idx) => {
                  const isSpeaker1 = line.speaker === dialog.speakers[0];
                  const isMatch = dialogSpeaker === "all" || line.speaker === dialogSpeaker;
                  return (
                    <div
                      key={idx}
                      className={`flex gap-2.5 max-w-[88%] transition-all ${isSpeaker1 ? "mr-auto" : "ml-auto flex-row-reverse"} ${!isMatch ? "opacity-25 scale-95" : ""}`}
                    >
                      <div className={`w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-xs flex-shrink-0 shadow-sm ${isSpeaker1 ? "bg-accentViolet-500" : "bg-accentIndigo-500"}`}>
                        {line.speaker[0]}
                      </div>
                      <div className={`p-3.5 rounded-2xl text-sm border ${isSpeaker1 ? "bg-indigo-50/50 dark:bg-indigo-950/20 border-indigo-100/50 dark:border-indigo-900/10 rounded-tl-none" : "bg-purple-50/50 dark:bg-purple-950/20 border-purple-100/50 dark:border-purple-900/10 rounded-tr-none"}`}>
                        <span className="text-[9px] font-bold text-slate-400 uppercase block mb-1">{line.speaker}</span>
                        <p className="font-extrabold text-slate-800 dark:text-slate-100">{line.german}</p>
                        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">{line.turkish}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ===== TAB: EXERCISES ===== */}
      {activeTab === "exercises" && (
        <div className="max-w-4xl mx-auto space-y-6">
          {!activeExercise && !exerciseResult && (
            <div className="space-y-4">
              <div>
                <h2 className="text-lg font-black text-slate-800 dark:text-slate-100">Alıştırma Seç</h2>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                  Modülü tamamlamak için en az %70 başarı oranı gereklidir.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    emoji: "✏️",
                    title: "Boşluk Doldurma",
                    desc: "Cümlelerdeki boşlukları doğru kelimelerle tamamlayın. Hızlı cevaplara +5 XP bonus!",
                    onClick: () => { setActiveExercise("fill"); setQuizQuestions(exercisesData[moduleId]?.fillInBlank || []); setExerciseResult(null); },
                    badge: "+XP Bonus",
                    badgeColor: "amber",
                    disabled: false,
                  },
                  {
                    emoji: "🎯",
                    title: "Çoktan Seçmeli",
                    desc: "10 soruluk Almanca↔Türkçe kelime testi. Her doğru cevap +10 XP!",
                    onClick: startMultipleChoice,
                    badge: "10 Soru",
                    badgeColor: "violet",
                    disabled: false,
                  },
                  {
                    emoji: "🔗",
                    title: "Eşleştirme Kartları",
                    desc: "Sol ve sağ sütundaki kelimeleri eşleştirin. 100% doğrulukta konfeti!",
                    onClick: () => { setActiveExercise("match"); setExerciseResult(null); },
                    badge: "Eğlenceli",
                    badgeColor: "emerald",
                    disabled: false,
                  },
                  {
                    emoji: "📖",
                    title: "Gramer Alıştırmaları",
                    desc: grammarExerciseData ? "Fiil çekimleri ve gramer testleri." : "Bu modül için gramer alıştırması bulunmamaktadır.",
                    onClick: () => { setActiveExercise("grammar"); setExerciseResult(null); },
                    badge: grammarExerciseData ? "Özel Test" : "Yakında",
                    badgeColor: "sky",
                    disabled: !grammarExerciseData,
                  },
                ].map(ex => (
                  <button
                    key={ex.title}
                    onClick={ex.disabled ? undefined : ex.onClick}
                    disabled={ex.disabled}
                    className={`p-5 text-left rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm transition-all group ${
                      ex.disabled ? "opacity-40 cursor-not-allowed" : "hover:shadow-md hover:-translate-y-0.5 active:scale-[0.99] cursor-pointer"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-2xl">{ex.emoji}</span>
                      <span className={`text-[10px] font-black px-2 py-0.5 rounded-full bg-${ex.badgeColor}-500/10 text-${ex.badgeColor}-600 dark:text-${ex.badgeColor}-400 border border-${ex.badgeColor}-500/20`}>
                        {ex.badge}
                      </span>
                    </div>
                    <h3 className="font-extrabold text-slate-800 dark:text-slate-100 group-hover:text-accentViolet-500 transition-colors text-sm">
                      {ex.title}
                    </h3>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-semibold mt-1 leading-relaxed">{ex.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Active Exercise */}
          {activeExercise === "fill" && <FillInBlank questions={quizQuestions} onComplete={handleExerciseComplete} />}
          {activeExercise === "choice" && <MultipleChoice questions={quizQuestions} onComplete={handleExerciseComplete} />}
          {activeExercise === "match" && <DragMatch words={moduleWords} onComplete={pts => handleExerciseComplete(pts)} />}
          {activeExercise === "grammar" && <GrammarExercise grammarData={grammarExerciseData} onComplete={(score, total) => handleExerciseComplete(score, total)} />}

          {/* Result Card */}
          {exerciseResult && (() => {
            const passed = exerciseResult.score >= Math.round(exerciseResult.total * 0.7);
            const pct = Math.round((exerciseResult.score / exerciseResult.total) * 100);
            const nextMod = modules.find(m => m.id === moduleId + 1);
            return (
              <div className="max-w-md mx-auto p-6 bg-white dark:bg-darkNavy-900 rounded-3xl border border-slate-200 dark:border-indigo-950/60 shadow-md text-center space-y-5">
                <div className="text-5xl">{passed ? "🏆" : "💪"}</div>
                <div className="space-y-1">
                  <h3 className="text-xl font-black text-slate-800 dark:text-slate-100">Alıştırma Tamamlandı!</h3>
                  <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                    {passed ? "Harika! Bu alıştırmayı başarıyla geçtiniz. 🎉" : "Biraz daha pratik gerekiyor. Tekrar deneyin!"}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/50 dark:border-indigo-900/10 grid grid-cols-3 gap-3">
                  <div className="text-center border-r border-slate-200/50 dark:border-indigo-900/10">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Skor</span>
                    <span className="text-lg font-black text-slate-800 dark:text-slate-100">
                      {Math.round(exerciseResult.score)} / {Math.round(exerciseResult.total)}
                    </span>
                  </div>
                  <div className="text-center border-r border-slate-200/50 dark:border-indigo-900/10">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">Başarı</span>
                    <span className={`text-lg font-black ${passed ? "text-emerald-500" : "text-rose-500"}`}>{pct}%</span>
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">XP</span>
                    <span className="text-lg font-black text-amber-500 flex items-center justify-center gap-0.5">
                      <Award className="w-3.5 h-3.5" />
                      +{exerciseResult.pointsEarned}
                    </span>
                  </div>
                </div>

                {exerciseResult.bonus > 0 && (
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-amber-500 bg-amber-500/10 py-1.5 px-3 rounded-full border border-amber-500/25">
                    <Flame className="w-4 h-4 fill-amber-500" />
                    Hız Bonusu: +{exerciseResult.bonus} Ek Puan!
                  </div>
                )}

                <div className="flex flex-col gap-2.5">
                  {passed && nextMod && (
                    <Link
                      to={`/modules/${nextMod.id}`}
                      className="flex items-center justify-center gap-2 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold rounded-xl text-sm shadow-md transition-all active:scale-[0.98]"
                    >
                      Sonraki Modül: {nextMod.titleDE}
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  )}
                  <div className="flex gap-2.5">
                    <button
                      onClick={() => { setActiveExercise(null); setExerciseResult(null); }}
                      className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-850 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-200 font-extrabold rounded-xl text-sm border border-slate-200/50 dark:border-indigo-900/15 transition-all"
                    >
                      Alıştırmalara Dön
                    </button>
                    <button
                      onClick={() => { if (activeExercise === "choice") startMultipleChoice(); else setExerciseResult(null); }}
                      className="flex-1 py-3 bg-accentViolet-500 hover:bg-accentViolet-600 text-white font-extrabold rounded-xl text-sm shadow-md transition-all"
                    >
                      Yeniden Dene
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
