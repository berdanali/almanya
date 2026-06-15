// src/utils/helpers.js

export function capitalize(str) {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function formatDifficulty(diff) {
  switch (diff) {
    case 1:
      return { label: "Kolay", color: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" };
    case 2:
      return { label: "Orta", color: "bg-amber-500/10 text-amber-500 border border-amber-500/20" };
    case 3:
      return { label: "Zor", color: "bg-rose-500/10 text-rose-500 border border-rose-500/20" };
    default:
      return { label: "Kolay", color: "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" };
  }
}

export const motivationalQuotes = [
  { de: "Aller Anfang ist schwer.", tr: "Her başlangıç zordur." },
  { de: "Übung macht den Meister.", tr: "Pratik yapmak mükemmelleştirir." },
  { de: "Wer rastet, der rostet.", tr: "İşleyen demir ışıldar." },
  { de: "Lernen ist wie Rudern gegen den Strom.", tr: "Öğrenmek akıntıya karşı kürek çekmek gibidir." },
  { de: "Schritt für Schritt ans Ziel.", tr: "Adım adım hedefe." },
  { de: "Deutsch lernen ist ein Marathon, kein Sprint.", tr: "Almanca öğrenmek bir maratondur, depar değil." },
  { de: "Ohne Fleiß kein Preis.", tr: "Emek olmadan yemek olmaz." }
];

export function getRandomQuote() {
  const index = Math.floor(Math.random() * motivationalQuotes.length);
  return motivationalQuotes[index];
}
