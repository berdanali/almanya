// src/pages/DailyLife.jsx
import React, { useState } from "react";
import { Eye, EyeOff, MessageCircle, BookOpen, Lightbulb } from "lucide-react";
import { dailyLifeScenarios } from "../data/dailylife";

const SPEAKER_COLORS = {
  A: {
    avatar: "bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400",
    row: "",
    align: "items-start",
    textAlign: "",
    reverse: false,
  },
  B: {
    avatar: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400",
    row: "flex-row-reverse",
    align: "items-end",
    textAlign: "text-right",
    reverse: true,
  },
};

function DialogueLine({ line, showTranslations, labelMap }) {
  const side = SPEAKER_COLORS[line.speaker] || SPEAKER_COLORS.A;
  const displayLabel = labelMap[line.speaker] || line.speaker;

  return (
    <div className={`flex gap-3 ${side.row}`}>
      <div
        className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 ${side.avatar}`}
        title={displayLabel}
      >
        {line.speaker}
      </div>
      <div className={`max-w-[85%] ${side.textAlign}`}>
        <div className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 mb-0.5">
          {displayLabel}
        </div>
        <p className="font-semibold text-slate-800 dark:text-slate-100 leading-snug">{line.text}</p>
        {showTranslations && (
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">{line.translation}</p>
        )}
      </div>
    </div>
  );
}

function DialogueCard({ dialogue, showTranslations }) {
  const labelMap = {};
  if (dialogue.lines) {
    dialogue.lines.forEach(l => {
      if (l.label && !labelMap[l.speaker]) {
        labelMap[l.speaker] = l.label;
      }
    });
  }

  return (
    <div className="rounded-2xl bg-slate-50 dark:bg-indigo-950/20 border border-slate-200/60 dark:border-indigo-900/20 overflow-hidden">
      {(dialogue.title || dialogue.context) && (
        <div className="px-5 py-3 border-b border-slate-200/60 dark:border-indigo-900/20 bg-white dark:bg-darkNavy-800/60">
          {dialogue.title && (
            <h4 className="font-bold text-sm text-slate-700 dark:text-slate-200">{dialogue.title}</h4>
          )}
          {dialogue.context && (
            <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 italic">{dialogue.context}</p>
          )}
          {dialogue.lines && (
            <div className="flex gap-4 mt-2">
              {[...new Set(dialogue.lines.map(l => l.speaker))].map(sp => {
                const lbl = labelMap[sp];
                const col = SPEAKER_COLORS[sp] || SPEAKER_COLORS.A;
                return (
                  <span key={sp} className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${col.avatar}`}>
                    <span>{sp}:</span> {lbl}
                  </span>
                );
              })}
            </div>
          )}
        </div>
      )}
      <div className="p-5 space-y-4">
        {dialogue.lines
          ? dialogue.lines.map((line, i) => (
              <DialogueLine key={i} line={line} showTranslations={showTranslations} labelMap={labelMap} />
            ))
          : null}
      </div>
    </div>
  );
}

export default function DailyLife() {
  const [activeCategory, setActiveCategory] = useState(dailyLifeScenarios[0].id);
  const [showTranslations, setShowTranslations] = useState(true);

  const currentScenario = dailyLifeScenarios.find(s => s.id === activeCategory);

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* Header */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 shadow-lg border border-slate-800">
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none select-none">
          <MessageCircle className="w-64 h-64 -mb-10 -mr-10" />
        </div>
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
              <MessageCircle className="w-6 h-6 text-sky-400" />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Alltagssprache</h1>
              <p className="text-sm text-slate-400 mt-0.5">Günlük Hayatta Almanca — 15 Kapsamlı Senaryo</p>
            </div>
          </div>
          <p className="text-base text-slate-300 leading-relaxed">
            Almanya'da günlük hayatta karşılaşacağınız gerçek senaryolar: doktordan otele, bankadan işe.
            Çevirileri gizleyerek okuma pratiği yapabilirsiniz.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className="lg:w-72 flex-shrink-0 space-y-1">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3 px-1">
            Kategoriler ({dailyLifeScenarios.length})
          </h2>
          {dailyLifeScenarios.map(scenario => (
            <button
              key={scenario.id}
              onClick={() => setActiveCategory(scenario.id)}
              className={`w-full text-left p-3 rounded-xl border transition-all flex items-center gap-3 ${
                activeCategory === scenario.id
                  ? "bg-white dark:bg-darkNavy-800 border-sky-500 shadow-md text-slate-900 dark:text-white"
                  : "bg-slate-50 dark:bg-darkNavy-900/40 border-slate-200/60 dark:border-indigo-900/20 text-slate-500 hover:bg-slate-100 dark:hover:bg-darkNavy-800"
              }`}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                style={{ backgroundColor: scenario.color + "22" }}
              >
                {scenario.icon}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-sm truncate">{scenario.title}</div>
                <div className="text-xs text-slate-400 truncate">{scenario.subtitle}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0 space-y-6">
          {currentScenario && (
            <>
              {/* Scenario Header Card */}
              <div
                className="rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                style={{ backgroundColor: currentScenario.color + "18", border: `1.5px solid ${currentScenario.color}40` }}
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ backgroundColor: currentScenario.color + "33" }}
                  >
                    {currentScenario.icon}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{currentScenario.title}</h2>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">{currentScenario.subtitle}</p>
                    <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-snug">{currentScenario.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowTranslations(!showTranslations)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/70 dark:bg-darkNavy-800 text-slate-700 dark:text-slate-200 font-semibold text-sm hover:bg-white dark:hover:bg-darkNavy-700 transition-colors border border-slate-200 dark:border-indigo-900/30 flex-shrink-0 self-start sm:self-auto"
                >
                  {showTranslations ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  {showTranslations ? "Çevirileri Gizle" : "Çevirileri Göster"}
                </button>
              </div>

              {/* Cultural Tip */}
              {currentScenario.tip && (
                <div className="flex gap-3 p-4 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800/30">
                  <Lightbulb className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 dark:text-amber-200 leading-relaxed">{currentScenario.tip}</p>
                </div>
              )}

              {/* Dialogues */}
              {currentScenario.dialogues && currentScenario.dialogues.length > 0 && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <MessageCircle className="w-4 h-4 text-slate-400" />
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Örnek Diyaloglar ({currentScenario.dialogues.length})
                    </h3>
                  </div>
                  <div className="space-y-5">
                    {currentScenario.dialogues.map((dialogue, idx) => (
                      <DialogueCard
                        key={idx}
                        dialogue={dialogue}
                        showTranslations={showTranslations}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Key Phrases */}
              {currentScenario.phrases && currentScenario.phrases.length > 0 && (
                <div className="bg-white dark:bg-darkNavy-900 rounded-2xl border border-slate-200 dark:border-indigo-950/60 shadow-sm overflow-hidden">
                  <div className="flex items-center gap-2 px-5 py-4 border-b border-slate-100 dark:border-indigo-950/40">
                    <BookOpen className="w-4 h-4 text-slate-400" />
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Anahtar Kalıplar ({currentScenario.phrases.length})
                    </h3>
                  </div>
                  <ul className="divide-y divide-slate-100 dark:divide-indigo-950/30">
                    {currentScenario.phrases.map((phrase, idx) => (
                      <li
                        key={idx}
                        className="px-5 py-3.5 hover:bg-slate-50 dark:hover:bg-darkNavy-800/40 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                          <span className="font-bold text-slate-800 dark:text-slate-100 text-sm leading-snug">
                            {phrase.de}
                          </span>
                          {showTranslations ? (
                            <span className="text-sm text-slate-500 dark:text-slate-400 sm:text-right sm:ml-4 flex-shrink-0">
                              {phrase.tr}
                            </span>
                          ) : (
                            <span
                              className="text-sm text-slate-300 dark:text-slate-600 italic sm:text-right blur-sm hover:blur-none transition-all cursor-help"
                              title="Görmek için üzerine gelin"
                            >
                              ···
                            </span>
                          )}
                        </div>
                        {phrase.context && (
                          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 italic">{phrase.context}</p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
