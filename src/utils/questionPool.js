import { shuffleArray } from "./helpers";

// Picks `count` questions from `pool`, preferring questions not seen this session.
// sessionKey must be unique per module+exerciseType combo (e.g. "m1_fillInBlank").
export function pickQuestions(pool, count, sessionKey) {
  if (!pool || pool.length === 0) return [];
  const cap = Math.min(count, pool.length);

  let shown;
  try {
    shown = new Set(JSON.parse(sessionStorage.getItem(sessionKey) || "[]"));
  } catch {
    shown = new Set();
  }

  const unseen = pool.filter((_, i) => !shown.has(i));
  const seen   = pool.filter((_, i) =>  shown.has(i));
  const ordered = [...shuffleArray(unseen), ...shuffleArray(seen)];
  const picked  = ordered.slice(0, cap);

  const pickedIdx = picked.map(q => pool.indexOf(q)).filter(i => i !== -1);
  const combined  = [...shown, ...pickedIdx];
  // Keep track of at most half the pool so questions cycle back
  const trimmed   = combined.slice(-Math.max(1, Math.floor(pool.length / 2)));
  try {
    sessionStorage.setItem(sessionKey, JSON.stringify(trimmed));
  } catch {
    // sessionStorage unavailable (private mode etc.)
  }
  return picked;
}
