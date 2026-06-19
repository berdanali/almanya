// SM-2 Spaced Repetition System
import { useState, useCallback } from "react";

const SRS_KEY = "almanca_srs_data";

function getToday() {
  return new Date().toISOString().split("T")[0];
}

// quality: 1 = fail, 3 = hard, 5 = easy
function sm2(card, quality) {
  let { repetitions, easeFactor, interval } = card;

  if (quality >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
    easeFactor = Math.max(
      1.3,
      easeFactor + 0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02)
    );
  } else {
    repetitions = 0;
    interval = 1;
  }

  const nextReview = new Date();
  nextReview.setDate(nextReview.getDate() + interval);

  return {
    repetitions,
    easeFactor: parseFloat(easeFactor.toFixed(2)),
    interval,
    nextReview: nextReview.toISOString().split("T")[0],
    lastReview: getToday(),
  };
}

function loadData() {
  try {
    const saved = localStorage.getItem(SRS_KEY);
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
}

export function useSRS(allWords) {
  const [srsData, setSRSData] = useState(loadData);

  const getWordsForReview = useCallback(() => {
    const today = getToday();
    return allWords.filter((w) => {
      const card = srsData[w.id];
      return !card || card.nextReview <= today;
    });
  }, [srsData, allWords]);

  const recordReview = useCallback((wordId, quality) => {
    setSRSData((prev) => {
      const card = prev[wordId] || { repetitions: 0, easeFactor: 2.5, interval: 0 };
      const updated = sm2(card, quality);
      const next = { ...prev, [wordId]: updated };
      localStorage.setItem(SRS_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  const getCardInfo = useCallback(
    (wordId) => srsData[wordId] || null,
    [srsData]
  );

  const pendingCount = getWordsForReview().length;

  return { getWordsForReview, recordReview, getCardInfo, pendingCount };
}
