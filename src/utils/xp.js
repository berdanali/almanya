// src/utils/xp.js
// XP ve seviye sistemi

export const LEVEL_THRESHOLDS = [
  { level: 1, name: "Anfänger",        nameEN: "Beginner",    minXP: 0,    maxXP: 100,  color: "#94a3b8", emoji: "🌱" },
  { level: 2, name: "Lernender",       nameEN: "Learner",     minXP: 100,  maxXP: 300,  color: "#22c55e", emoji: "📗" },
  { level: 3, name: "Fleißiger",       nameEN: "Diligent",    minXP: 300,  maxXP: 600,  color: "#3b82f6", emoji: "⭐" },
  { level: 4, name: "Fortgeschrittener",nameEN: "Advanced",   minXP: 600,  maxXP: 1000, color: "#8b5cf6", emoji: "🔥" },
  { level: 5, name: "Meister",         nameEN: "Master",      minXP: 1000, maxXP: 9999, color: "#f59e0b", emoji: "👑" },
];

export function getLevelInfo(xp) {
  let levelData = LEVEL_THRESHOLDS[0];
  for (const lvl of LEVEL_THRESHOLDS) {
    if (xp >= lvl.minXP) {
      levelData = lvl;
    }
  }
  const nextLevel = LEVEL_THRESHOLDS.find(l => l.level === levelData.level + 1);
  const xpInLevel = xp - levelData.minXP;
  const xpNeeded = (nextLevel ? nextLevel.minXP : levelData.maxXP) - levelData.minXP;
  const progressPct = Math.min(100, Math.round((xpInLevel / xpNeeded) * 100));
  const xpToNext = nextLevel ? nextLevel.minXP - xp : 0;

  return {
    ...levelData,
    xp,
    progressPct,
    xpToNext,
    isMaxLevel: !nextLevel,
  };
}

// XP rewards
export const XP_REWARDS = {
  CORRECT_ANSWER: 10,
  EXERCISE_COMPLETE: 50,
  MODULE_COMPLETE: 100,
  WORD_LEARNED: 5,
  STREAK_BONUS: 20,
  QUEST_COMPLETE: 80,
  PERFECT_SCORE: 30,
};
