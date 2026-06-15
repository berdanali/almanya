// src/components/WordTable.jsx
import React, { useState } from "react";
import { Search, Check, BookOpen, EyeOff } from "lucide-react";
import { formatDifficulty } from "../utils/helpers";
import { modules } from "../data/modules";

export default function WordTable({ words, learnedWords, toggleWordLearned }) {
  const [search, setSearch] = useState("");
  const [modFilter, setModFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [artikelFilter, setArtikelFilter] = useState("all");
  const [showOnlyUnlearned, setShowOnlyUnlearned] = useState(false);
  const [expandedWord, setExpandedWord] = useState(null);

  // Filter logic
  const filteredWords = words.filter((word) => {
    const matchesSearch =
      word.german.toLowerCase().includes(search.toLowerCase()) ||
      word.turkish.toLowerCase().includes(search.toLowerCase());

    const matchesMod = modFilter === "all" || word.module === parseInt(modFilter, 10);
    const matchesType = typeFilter === "all" || word.type === typeFilter;

    let matchesArtikel = true;
    if (artikelFilter !== "all") {
      if (artikelFilter === "none") {
        matchesArtikel = word.artikel === null;
      } else {
        matchesArtikel = word.artikel === artikelFilter;
      }
    }

    const matchesLearned = !showOnlyUnlearned || !learnedWords.includes(word.id);

    return matchesSearch && matchesMod && matchesType && matchesArtikel && matchesLearned;
  });

  const getTypeNameTR = (type) => {
    switch (type) {
      case "verb": return "Fiil";
      case "noun": return "İsim";
      case "adjective": return "Sıfat";
      case "adverb": return "Zarf";
      case "phrase": return "Kalıp Cümle";
      default: return type;
    }
  };

  const getModuleName = (id) => {
    const mod = modules.find((m) => m.id === id);
    return mod ? `${mod.id}. ${mod.titleTR}` : `Modül ${id}`;
  };

  return (
    <div className="w-full space-y-6">
      {/* Search and Filters Bar */}
      <div className="p-5 rounded-2xl glass shadow-sm border border-slate-200/50 dark:border-indigo-950/40 space-y-4">
        <div className="relative">
          <Search className="absolute left-3.5 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Kelime ara (Almanca veya Türkçe)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-white dark:bg-darkNavy-950/40 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Module Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Modül</label>
            <select
              value={modFilter}
              onChange={(e) => setModFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-white dark:bg-darkNavy-900/50 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm text-slate-700 dark:text-slate-200"
            >
              <option value="all">Tüm Modüller</option>
              {modules.map((m) => (
                <option key={m.id} value={m.id}>
                  Modül {m.id}: {m.titleDE}
                </option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Tür</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-white dark:bg-darkNavy-900/50 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm text-slate-700 dark:text-slate-200"
            >
              <option value="all">Tüm Türler</option>
              <option value="noun">İsimler (Nomen)</option>
              <option value="verb">Fiiller (Verben)</option>
              <option value="adjective">Sıfatlar (Adjektive)</option>
              <option value="phrase">Hazır Kalıplar (Phrasen)</option>
            </select>
          </div>

          {/* Artikel Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Artikel</label>
            <select
              value={artikelFilter}
              onChange={(e) => setArtikelFilter(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-slate-200 dark:border-indigo-900/30 bg-white dark:bg-darkNavy-900/50 focus:outline-none focus:ring-2 focus:ring-accentViolet-500 text-sm text-slate-700 dark:text-slate-200"
            >
              <option value="all">Tüm Artikeller</option>
              <option value="der">der (Maskulin)</option>
              <option value="die">die (Feminin)</option>
              <option value="das">das (Neutral)</option>
              <option value="none">Artikel Yok (Fiil/Sıfat/Kalıp)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Words Count + Unlearned Toggle */}
      <div className="flex justify-between items-center text-sm font-bold text-slate-500 dark:text-slate-400 px-1">
        <span>{filteredWords.length} kelime listeleniyor</span>
        <div className="flex items-center gap-3">
          <span className="text-emerald-500">{learnedWords.length} öğrenildi</span>
          <button
            onClick={() => setShowOnlyUnlearned(v => !v)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-all ${
              showOnlyUnlearned
                ? "bg-amber-500 text-white border-amber-500 shadow-sm"
                : "bg-white dark:bg-darkNavy-850 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-indigo-900/20 hover:border-amber-400"
            }`}
          >
            <EyeOff className="w-3.5 h-3.5" />
            {showOnlyUnlearned ? "Öğrenilmemişler" : "Tümü Göster"}
          </button>
        </div>
      </div>

      {/* Vocabulary Desktop Table & Mobile Grid */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-indigo-950/60 bg-white dark:bg-darkNavy-900 shadow-sm">
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm text-slate-600 dark:text-slate-300">
            <thead className="bg-slate-50 dark:bg-indigo-950/50 text-xs font-bold text-slate-400 dark:text-slate-400 uppercase tracking-wider border-b border-slate-200 dark:border-indigo-900/30">
              <tr>
                <th className="px-6 py-4">Kelime (Almanca)</th>
                <th className="px-6 py-4">Anlamı (Türkçe)</th>
                <th className="px-6 py-4">Tür</th>
                <th className="px-6 py-4 text-center">Durum</th>
                <th className="px-6 py-4 text-right">Eylemler</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-indigo-950/40">
              {filteredWords.length > 0 ? (
                filteredWords.map((word) => {
                  const isExpanded = expandedWord === word.id;
                  const isLearned = learnedWords.includes(word.id);
                  const diff = formatDifficulty(word.difficulty);

                  return (
                    <React.Fragment key={word.id}>
                      <tr
                        onClick={() => setExpandedWord(isExpanded ? null : word.id)}
                        className={`hover:bg-slate-50/50 dark:hover:bg-indigo-950/20 cursor-pointer transition-colors ${
                          isExpanded ? "bg-slate-50/60 dark:bg-indigo-950/30" : ""
                        }`}
                      >
                        <td className="px-6 py-4.5 font-bold text-slate-800 dark:text-slate-100 text-base">
                          {word.artikel && (
                            <span className={`text-xs mr-1 px-1.5 py-0.5 rounded font-extrabold tracking-wide uppercase ${
                              word.artikel === "der" ? "bg-blue-500/10 text-blue-500" :
                              word.artikel === "die" ? "bg-rose-500/10 text-rose-500" :
                              "bg-amber-500/10 text-amber-600 dark:text-amber-500"
                            }`}>
                              {word.artikel}
                            </span>
                          )}
                          <span>{word.german}</span>
                          {word.plural && (
                            <span className="text-xs font-medium text-slate-400 ml-1.5">
                              (Pl: {word.plural})
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4.5 font-semibold text-slate-700 dark:text-slate-300">
                          {word.turkish}
                        </td>
                        <td className="px-6 py-4.5">
                          <span className="text-xs px-2 py-0.8 rounded-lg bg-slate-100 dark:bg-indigo-950/60 border border-slate-200/40 dark:border-indigo-900/10 text-slate-500 dark:text-slate-400 font-semibold">
                            {getTypeNameTR(word.type)}
                          </span>
                        </td>
                        <td className="px-6 py-4.5 text-center">
                          {isLearned ? (
                            <span className="inline-flex items-center gap-1 text-xs font-semibold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/20 shadow-sm">
                              <Check className="w-3 h-3" />
                              Öğrendim
                            </span>
                          ) : (
                            <span className="text-xs font-semibold text-slate-400">Öğrenilmedi</span>
                          )}
                        </td>
                        <td className="px-6 py-4.5 text-right" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => toggleWordLearned(word.id)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm ${
                              isLearned
                                ? "bg-emerald-500 text-white hover:bg-emerald-600"
                                : "bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-800 dark:hover:bg-indigo-950 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-indigo-900/15"
                            }`}
                          >
                            {isLearned ? "Unut" : "Öğrendim"}
                          </button>
                        </td>
                      </tr>

                      {/* Expandable row detail */}
                      {isExpanded && (
                        <tr>
                          <td colSpan="5" className="px-8 py-5 bg-slate-50/40 dark:bg-indigo-950/10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <h4 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                                  Örnek Cümle (Beispielsatz)
                                </h4>
                                <p className="text-base font-extrabold text-slate-800 dark:text-slate-200">
                                  {word.example}
                                </p>
                                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                                  {word.exampleTR}
                                </p>
                              </div>
                              <div className="flex flex-wrap items-center gap-3 md:justify-end">
                                <div className="flex flex-col gap-1 items-start md:items-end">
                                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Zorluk</span>
                                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${diff.color}`}>
                                    {diff.label}
                                  </span>
                                </div>
                                <div className="flex flex-col gap-1 items-start md:items-end">
                                  <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Modül</span>
                                  <span className="flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-semibold bg-violet-500/10 text-accentIndigo-500 border border-violet-500/20">
                                    <BookOpen className="w-3.5 h-3.5" />
                                    {getModuleName(word.module)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-12 text-slate-400">
                    Arama kriterlerine uygun kelime bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile View Card Grid */}
        <div className="md:hidden divide-y divide-slate-100 dark:divide-indigo-950/40">
          {filteredWords.length > 0 ? (
            filteredWords.map((word) => {
              const isExpanded = expandedWord === word.id;
              const isLearned = learnedWords.includes(word.id);
              const diff = formatDifficulty(word.difficulty);

              return (
                <div key={word.id} className="p-4 space-y-3">
                  <div
                    onClick={() => setExpandedWord(isExpanded ? null : word.id)}
                    className="flex justify-between items-start gap-2 cursor-pointer"
                  >
                    <div>
                      <div className="font-bold text-slate-800 dark:text-slate-100 text-lg flex flex-wrap items-center gap-1">
                        {word.artikel && (
                          <span className={`text-xs px-1.5 py-0.5 rounded font-extrabold tracking-wide uppercase ${
                            word.artikel === "der" ? "bg-blue-500/10 text-blue-500" :
                            word.artikel === "die" ? "bg-rose-500/10 text-rose-500" :
                            "bg-amber-500/10 text-amber-500"
                          }`}>
                            {word.artikel}
                          </span>
                        )}
                        <span>{word.german}</span>
                        {word.plural && (
                          <span className="text-xs font-semibold text-slate-400">
                            (Pl: {word.plural})
                          </span>
                        )}
                      </div>
                      <p className="text-sm font-semibold text-slate-500 dark:text-slate-300 mt-0.5">
                        {word.turkish}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                      <button
                        onClick={() => toggleWordLearned(word.id)}
                        className={`w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                          isLearned
                            ? "bg-emerald-500 border-emerald-500 text-white"
                            : "bg-slate-50 border-slate-200 dark:bg-darkNavy-800 dark:border-indigo-900/20 text-slate-400"
                        }`}
                      >
                        <Check className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="p-3 bg-slate-50 dark:bg-indigo-950/20 rounded-xl space-y-3 text-xs border border-slate-200/20 dark:border-indigo-950/50">
                      <div>
                        <h4 className="font-bold text-slate-400 uppercase tracking-wider mb-1">
                          Örnek Cümle
                        </h4>
                        <p className="font-extrabold text-sm text-slate-800 dark:text-slate-200">
                          {word.example}
                        </p>
                        <p className="font-semibold text-slate-500 mt-0.5">
                          {word.exampleTR}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/40 dark:border-indigo-900/10">
                        <span className={`px-2 py-0.5 rounded-full font-bold ${diff.color}`}>
                          {diff.label}
                        </span>
                        <span className="px-2 py-0.5 rounded-full font-semibold bg-indigo-500/10 text-accentViolet-500 border border-indigo-500/20">
                          {getTypeNameTR(word.type)}
                        </span>
                        <span className="px-2 py-0.5 rounded-full font-semibold bg-violet-500/10 text-accentIndigo-500 border border-violet-500/20">
                          {getModuleName(word.module)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-400">
              Arama kriterlerine uygun kelime bulunamadı.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
