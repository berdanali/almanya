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
    resetAllProgress
  } = useProgress();

  const handleReset = () => {
    resetAllProgress();
    window.location.reload();
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 dark:bg-darkNavy-950 dark:text-slate-100 transition-colors duration-300">
        
        {/* Navigation Bar */}
        <Navbar
          username={name}
          streak={streak}
          points={points}
          xp={xp}
          onReset={handleReset}
        />

        {/* Main Workspace Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
              element={<Flashcards addWrongAnswer={addWrongAnswer} />}
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
                />
              }
            />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="w-full py-6 mt-12 border-t border-slate-200/50 dark:border-indigo-950/40 bg-white dark:bg-darkNavy-900/60 text-center text-xs font-semibold text-slate-400 dark:text-slate-500">
          <div className="max-w-7xl mx-auto px-4 space-y-1">
            <p>Hallo A1 - Almanca A1 Seviye Öğrenme Platformu © {new Date().getFullYear()}</p>
            <p className="font-normal text-slate-300 dark:text-slate-600">
              Çevrimdışı ve Yerel olarak çalışır • Tasarım: Antigravity AI
            </p>
          </div>
        </footer>

      </div>
    </Router>
  );
}
