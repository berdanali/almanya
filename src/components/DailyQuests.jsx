// src/components/DailyQuests.jsx
import React from "react";
import { CheckCircle2, Circle, Zap } from "lucide-react";
import { playQuestComplete } from "../utils/sounds";

function getTimeUntilMidnight() {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  const diff = midnight - now;
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  return `${h}s ${m}dk`;
}

export default function DailyQuests({ quests }) {
  const completedCount = quests.filter(q => q.completed).length;
  const allDone = completedCount === quests.length;

  return (
    <div className="rounded-2xl bg-white dark:bg-darkNavy-900 border border-slate-200 dark:border-indigo-950/60 shadow-sm overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100 dark:border-indigo-950/40">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          </div>
          <div>
            <h3 className="text-sm font-black text-slate-800 dark:text-slate-100">Günlük Görevler</h3>
            <p className="text-[10px] font-semibold text-slate-400">{getTimeUntilMidnight()} içinde sıfırlanır</p>
          </div>
        </div>
        <span className="text-xs font-black px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-500 border border-amber-500/20">
          {completedCount}/{quests.length}
        </span>
      </div>

      {/* Quests */}
      <div className="divide-y divide-slate-100 dark:divide-indigo-950/30">
        {quests.map((quest) => {
          const pct = Math.min(100, Math.round((quest.progress / quest.goal) * 100));
          return (
            <div
              key={quest.id}
              className={`px-5 py-3.5 flex items-center gap-3 transition-all ${
                quest.completed ? "bg-emerald-50/50 dark:bg-emerald-900/10" : ""
              }`}
            >
              {/* Icon */}
              <span className="text-xl flex-shrink-0">{quest.icon}</span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-xs font-bold ${quest.completed ? "text-emerald-600 dark:text-emerald-400 line-through opacity-70" : "text-slate-700 dark:text-slate-200"}`}>
                    {quest.label}
                  </span>
                  <span className="text-[10px] font-black text-amber-500 ml-2 flex-shrink-0">+{quest.xp} XP</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${quest.completed ? "bg-emerald-500" : "bg-amber-400"}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
                <span className="text-[10px] font-semibold text-slate-400 mt-0.5 block">
                  {quest.progress}/{quest.goal}
                </span>
              </div>

              {/* Status icon */}
              <div className="flex-shrink-0">
                {quest.completed
                  ? <CheckCircle2 className="w-5 h-5 text-emerald-500 fill-emerald-500" />
                  : <Circle className="w-5 h-5 text-slate-200 dark:text-slate-600" />
                }
              </div>
            </div>
          );
        })}
      </div>

      {/* All done banner */}
      {allDone && (
        <div className="px-5 py-3 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border-t border-emerald-200/50 dark:border-emerald-900/30 text-center">
          <span className="text-xs font-black text-emerald-600 dark:text-emerald-400">🎉 Tüm günlük görevleri tamamladınız!</span>
        </div>
      )}
    </div>
  );
}
