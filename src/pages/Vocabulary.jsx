// src/pages/Vocabulary.jsx
import React from "react";
import WordTable from "../components/WordTable";
import { words } from "../data/words";
import { Table } from "lucide-react";

export default function Vocabulary({ learnedWords, toggleWordLearned }) {
  return (
    <div className="space-y-6 animate-in fade-in duration-300">
      <div className="flex items-center gap-3 border-b pb-4 border-slate-200 dark:border-indigo-950/40">
        <div className="w-10 h-10 rounded-xl bg-accentViolet-500/10 text-accentViolet-500 flex items-center justify-center">
          <Table className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-2xl font-black text-slate-800 dark:text-slate-100">
            Kelime Haznesi (Wortschatz)
          </h1>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
            Tüm kelimeleri filtreleyin, Almanca/Türkçe arayın ve öğrendiklerinizi işaretleyin.
          </p>
        </div>
      </div>

      <WordTable
        words={words}
        learnedWords={learnedWords}
        toggleWordLearned={toggleWordLearned}
      />
    </div>
  );
}
