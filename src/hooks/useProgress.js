// src/hooks/useProgress.js
import { useState, useEffect, useCallback } from "react";

// --- Daily Quests ---
const DAILY_QUESTS_TEMPLATE = [
  { id: "learn_words", label: "3 Kelime Öğren", description: "Kelimeler sekmesinde 3 kelimeyi öğrendim işaretle", goal: 3, xp: 50, icon: "📖" },
  { id: "complete_exercise", label: "1 Test Tamamla", description: "Herhangi bir alıştırmayı bitir", goal: 1, xp: 80, icon: "🎯" },
  { id: "flip_flashcards", label: "5 Flashcard Çevir", description: "Flashcard sayfasında kart çevir", goal: 5, xp: 60, icon: "🃏" },
];

function getTodayKey() {
  return new Date().toISOString().split("T")[0];
}

function initDailyQuests() {
  const saved = localStorage.getItem("almanca_daily_quests");
  if (saved) {
    const parsed = JSON.parse(saved);
    if (parsed.date === getTodayKey()) return parsed;
  }
  return {
    date: getTodayKey(),
    quests: DAILY_QUESTS_TEMPLATE.map(q => ({ ...q, progress: 0, completed: false })),
  };
}

export function useProgress() {
  const [learnedWords, setLearnedWords] = useState(() => {
    const saved = localStorage.getItem("almanca_learned_words");
    return saved ? JSON.parse(saved) : [];
  });

  const [progress, setProgress] = useState(() => {
    const saved = localStorage.getItem("a1_progress");
    return saved ? JSON.parse(saved) : {};
  });

  const [goetheProgress, setGoetheProgress] = useState(() => {
    const saved = localStorage.getItem("a1_goethe_progress");
    return saved ? JSON.parse(saved) : {};
  });

  const [wrongAnswers, setWrongAnswers] = useState(() => {
    const saved = localStorage.getItem("almanca_wrong_answers");
    return saved ? JSON.parse(saved) : [];
  });

  const [points, setPoints] = useState(() => {
    const saved = localStorage.getItem("almanca_points");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [xp, setXp] = useState(() => {
    const saved = localStorage.getItem("almanca_xp");
    return saved ? parseInt(saved, 10) : 0;
  });

  const [dailyQuests, setDailyQuests] = useState(() => initDailyQuests());

  const [flashcardFlips, setFlashcardFlips] = useState(() => {
    const saved = localStorage.getItem("almanca_flashcard_flips_today");
    const parsed = saved ? JSON.parse(saved) : { date: getTodayKey(), count: 0 };
    if (parsed.date !== getTodayKey()) return { date: getTodayKey(), count: 0 };
    return parsed;
  });

  // Persist to localStorage
  useEffect(() => {
    localStorage.setItem("almanca_learned_words", JSON.stringify(learnedWords));
  }, [learnedWords]);

  useEffect(() => {
    localStorage.setItem("a1_progress", JSON.stringify(progress));
  }, [progress]);

  useEffect(() => {
    localStorage.setItem("a1_goethe_progress", JSON.stringify(goetheProgress));
  }, [goetheProgress]);

  useEffect(() => {
    localStorage.setItem("almanca_wrong_answers", JSON.stringify(wrongAnswers));
  }, [wrongAnswers]);

  useEffect(() => {
    localStorage.setItem("almanca_points", points.toString());
  }, [points]);

  useEffect(() => {
    localStorage.setItem("almanca_xp", xp.toString());
  }, [xp]);

  useEffect(() => {
    localStorage.setItem("almanca_daily_quests", JSON.stringify(dailyQuests));
  }, [dailyQuests]);

  useEffect(() => {
    localStorage.setItem("almanca_flashcard_flips_today", JSON.stringify(flashcardFlips));
  }, [flashcardFlips]);

  // Helper: update a quest's progress
  const updateQuestProgress = useCallback((questId, amount = 1) => {
    setDailyQuests(prev => {
      const quests = prev.quests.map(q => {
        if (q.id !== questId || q.completed) return q;
        const newProgress = Math.min(q.goal, q.progress + amount);
        const completed = newProgress >= q.goal;
        return { ...q, progress: newProgress, completed };
      });
      return { ...prev, quests };
    });
  }, []);

  const toggleWordLearned = useCallback((wordId) => {
    setLearnedWords(prev => {
      if (prev.includes(wordId)) {
        return prev.filter(id => id !== wordId);
      } else {
        // Quest: learn 3 words
        updateQuestProgress("learn_words");
        addXP(5);
        return [...prev, wordId];
      }
    });
  }, [updateQuestProgress]);

  const isWordLearned = (wordId) => learnedWords.includes(wordId);

  const saveModuleProgress = useCallback((moduleId, score, totalQuestions) => {
    const percentage = Math.round((score / totalQuestions) * 100);
    const completed = percentage >= 70;
    const date = new Date().toISOString().split("T")[0];

    setProgress(prev => {
      const existing = prev[moduleId] || { score: 0, percentage: 0, completed: false, date: "" };
      const existingPct = existing.percentage || 0;
      const isNewBest = percentage > existingPct;

      return {
        ...prev,
        [moduleId]: {
          score: isNewBest ? score : existing.score,
          percentage: Math.max(existingPct, percentage),
          completed: existing.completed || completed,
          date: date,
        },
      };
    });

    // Points and XP
    const earnedPoints = score * 10;
    addPoints(earnedPoints);
    addXP(score * 10 + (completed ? 50 : 0) + (percentage === 100 ? 30 : 0));

    // Quest: complete exercise
    updateQuestProgress("complete_exercise");
  }, [updateQuestProgress]);

  const saveGoetheProgress = (fascicleId, score, total) => {
    setGoetheProgress((prev) => {
      const current = prev[fascicleId] || { score: 0, percentage: 0, completed: false };
      const newScore = Math.max(current.score, score);
      const percentage = Math.round((newScore / total) * 100);
      const completed = current.completed || percentage >= 70;

      return {
        ...prev,
        [fascicleId]: {
          score: newScore,
          percentage,
          completed,
        },
      };
    });
  };

  const addPoints = useCallback((amount) => {
    setPoints(prev => prev + amount);
  }, []);

  const addXP = useCallback((amount) => {
    setXp(prev => prev + amount);
  }, []);

  const recordFlashcardFlip = useCallback(() => {
    setFlashcardFlips(prev => {
      const newCount = prev.count + 1;
      // Update quest
      updateQuestProgress("flip_flashcards");
      return { ...prev, count: newCount };
    });
  }, [updateQuestProgress]);

  const addWrongAnswer = (wordId, question, userAnswer, correctAnswer) => {
    setWrongAnswers(prev => {
      const exists = prev.some(item => item.wordId === wordId && item.question === question);
      if (exists) return prev;
      return [...prev, { wordId, question, userAnswer, correctAnswer }];
    });
  };

  const removeWrongAnswer = (wordId, question) => {
    setWrongAnswers(prev =>
      prev.filter(item => !(item.wordId === wordId && item.question === question))
    );
  };

  const clearWrongAnswers = () => {
    setWrongAnswers([]);
  };

  const resetAllProgress = () => {
    setLearnedWords([]);
    setProgress({});
    setWrongAnswers([]);
    setPoints(0);
    setXp(0);
    localStorage.clear();
  };

  return {
    learnedWords,
    progress,
    goetheProgress,
    wrongAnswers,
    points,
    xp,
    dailyQuests: dailyQuests.quests,
    flashcardFlips: flashcardFlips.count,
    toggleWordLearned,
    isWordLearned,
    saveModuleProgress,
    saveGoetheProgress,
    addPoints,
    addXP,
    recordFlashcardFlip,
    addWrongAnswer,
    removeWrongAnswer,
    clearWrongAnswers,
    resetAllProgress,
  };
}
