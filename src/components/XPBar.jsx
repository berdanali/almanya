// src/components/XPBar.jsx
import React, { useEffect, useState } from "react";
import { getLevelInfo } from "../utils/xp";
import { playLevelUp } from "../utils/sounds";

export default function XPBar({ xp, compact = false }) {
  const levelInfo = getLevelInfo(xp);
  const [prevLevel, setPrevLevel] = useState(levelInfo.level);
  const [showLevelUp, setShowLevelUp] = useState(false);

  useEffect(() => {
    if (levelInfo.level > prevLevel) {
      setShowLevelUp(true);
      playLevelUp();
      setTimeout(() => setShowLevelUp(false), 3000);
      setPrevLevel(levelInfo.level);
    }
  }, [levelInfo.level, prevLevel]);

  if (compact) {
    return (
      <div className="flex items-center gap-2 min-w-0">
        <span
          className="text-xs font-black px-2 py-0.5 rounded-full flex-shrink-0"
          style={{ backgroundColor: levelInfo.color + "20", color: levelInfo.color }}
        >
          {levelInfo.emoji} Lv.{levelInfo.level}
        </span>
        <div className="flex-1 min-w-[60px] h-1.5 bg-slate-200 dark:bg-indigo-950/60 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700 ease-out"
            style={{
              width: `${levelInfo.progressPct}%`,
              background: `linear-gradient(90deg, ${levelInfo.color}, ${levelInfo.color}cc)`,
            }}
          />
        </div>
        <span className="text-[10px] font-bold text-slate-400 flex-shrink-0">{xp} XP</span>
      </div>
    );
  }

  return (
    <div className="relative">
      {showLevelUp && (
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-50 animate-bounce">
          <span className="bg-amber-500 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
            🎉 SEVİYE ATLADI! Lv.{levelInfo.level} {levelInfo.emoji}
          </span>
        </div>
      )}

      <div className="flex items-center gap-3">
        {/* Level Badge */}
        <div
          className="w-11 h-11 rounded-xl flex flex-col items-center justify-center flex-shrink-0 shadow-md text-white font-black text-[10px] leading-none"
          style={{ background: `linear-gradient(135deg, ${levelInfo.color}, ${levelInfo.color}99)` }}
        >
          <span className="text-lg leading-none">{levelInfo.emoji}</span>
          <span className="mt-0.5">Lv.{levelInfo.level}</span>
        </div>

        {/* XP Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-black text-slate-700 dark:text-slate-200 truncate">
              {levelInfo.name}
            </span>
            <span className="text-[10px] font-bold text-slate-400 ml-2 flex-shrink-0">
              {levelInfo.isMaxLevel ? "MAX" : `${levelInfo.xpToNext} XP kaldı`}
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-100 dark:bg-indigo-950/60 rounded-full overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full transition-all duration-700 ease-out relative overflow-hidden"
              style={{
                width: `${levelInfo.progressPct}%`,
                background: `linear-gradient(90deg, ${levelInfo.color}dd, ${levelInfo.color})`,
              }}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
            </div>
          </div>
          <div className="flex items-center justify-between mt-0.5">
            <span className="text-[10px] font-semibold text-slate-400">{xp} XP</span>
            <span className="text-[10px] font-semibold text-slate-400">{levelInfo.progressPct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
