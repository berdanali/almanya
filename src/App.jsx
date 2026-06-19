// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";
import Vocabulary from "./pages/Vocabulary";
import Flashcards from "./pages/Flashcards";
import Goethe from "./pages/Goethe";
import GoetheDetail from "./pages/GoetheDetail";
import DailyLife from "./pages/DailyLife";
import Exercises from "./pages/Exercises";
import Progress from "./pages/Progress";
import ArtikelQuiz from "./pages/ArtikelQuiz";

// Components
import Navbar from "./components/Navbar";

// Hooks
import { useStreak } from "./hooks/useStreak";
import { useProgress } from "./hooks/useProgress";

export default function App() {
  const { name, streak, setUsername, updateStreak } = useStreak();
  const {
    learnedWords,
    progress,
    goetheProgress,
    wrongAnswers,
    points,
    xp,
    dailyQuests,
    toggleWordLearned,
    saveModuleProgress,
    saveGoetheProgress,
    addWrongAnswer,
    removeWrongAnswer,
    clearWrongAnswers,
    wordStats,
    studyDays,
    recordWordResult,
    resetAllProgress
  } = useProgress();

  const handleReset = () => {
    resetAllProgress();
    window.location.reload();
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300">

        <Navbar
          username={name}
          streak={streak}
          points={points}
          xp={xp}
          onReset={handleReset}
        />

        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <Dashboard
                  username={name}
                  streak={streak}
                  points={points}
                  xp={xp}
                  progress={progress}
                  learnedWords={learnedWords}
                  dailyQuests={dailyQuests}
                  setUsername={setUsername}
                  updateStreak={updateStreak}
                />
              }
            />
            <Route
              path="/modules"
              element={<Modules progress={progress} />}
            />
            <Route
              path="/modules/:id"
              element={
                <ModuleDetail
                  progress={progress}
                  learnedWords={learnedWords}
                  toggleWordLearned={toggleWordLearned}
                  saveModuleProgress={saveModuleProgress}
                />
              }
            />
            <Route
              path="/vocabulary"
              element={
                <Vocabulary
                  learnedWords={learnedWords}
                  toggleWordLearned={toggleWordLearned}
                />
              }
            />
            <Route
              path="/flashcards"
              element={
                <Flashcards
                  addWrongAnswer={addWrongAnswer}
                  recordWordResult={recordWordResult}
                />
              }
            />
            <Route
              path="/artikel-quiz"
              element={<ArtikelQuiz recordWordResult={recordWordResult} />}
            />
            <Route
              path="/exercises"
              element={
                <Exercises
                  progress={progress}
                  saveModuleProgress={saveModuleProgress}
                />
              }
            />
            <Route
              path="/goethe"
              element={
                <Goethe
                  goetheProgress={goetheProgress}
                />
              }
            />
            <Route
              path="/goethe/:id"
              element={
                <GoetheDetail
                  saveGoetheProgress={saveGoetheProgress}
                />
              }
            />
            <Route
              path="/dailylife"
              element={<DailyLife />}
            />
            <Route
              path="/progress"
              element={
                <Progress
                  progress={progress}
                  learnedWords={learnedWords}
                  wrongAnswers={wrongAnswers}
                  points={points}
                  streak={streak}
                  removeWrongAnswer={removeWrongAnswer}
                  clearWrongAnswers={clearWrongAnswers}
                  wordStats={wordStats}
                  studyDays={studyDays}
                />
              }
            />
          </Routes>
        </main>

        <footer className="w-full py-5 mt-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center text-xs text-slate-400 dark:text-slate-500">
          <div className="max-w-6xl mx-auto px-4">
            <p className="font-semibold">AlmancaKursu — Goethe A1 Hazırlık Platformu © {new Date().getFullYear()}</p>
            <p className="mt-0.5">Çevrimdışı çalışır • Tüm veriler cihazınızda saklanır</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}
