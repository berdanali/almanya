// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import Modules from "./pages/Modules";
import ModuleDetail from "./pages/ModuleDetail";
import Flashcards from "./pages/Flashcards";
import Practice from "./pages/Practice";
import Speaking from "./pages/Speaking";
import Conversations from "./pages/Conversations";
import ConversationChat from "./pages/ConversationChat";

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
    wrongAnswers,
    points,
    xp,
    dailyQuests,
    toggleWordLearned,
    saveModuleProgress,
    addWrongAnswer,
    removeWrongAnswer,
    clearWrongAnswers,
    wordStats,
    studyDays,
    recordWordResult,
    addXP,
    addPoints,
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

        {/* pb-16 on mobile reserves space for bottom tab bar */}
        <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24 md:pb-8">
          <Routes>
            {/* ── Dashboard ── */}
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

            {/* ── Kurslar ── */}
            <Route path="/kurslar" element={<Modules progress={progress} />} />
            <Route
              path="/kurslar/:id"
              element={
                <ModuleDetail
                  progress={progress}
                  learnedWords={learnedWords}
                  toggleWordLearned={toggleWordLearned}
                  saveModuleProgress={saveModuleProgress}
                />
              }
            />

            {/* ── Pratik ── */}
            <Route
              path="/pratik"
              element={<Practice addXP={addXP} addPoints={addPoints} />}
            />

            {/* ── Kelime ── */}
            <Route
              path="/kelime"
              element={
                <Flashcards
                  addWrongAnswer={addWrongAnswer}
                  recordWordResult={recordWordResult}
                />
              }
            />

            {/* ── Konuşma ── */}
            <Route path="/konusma" element={<Speaking addXP={addXP} addPoints={addPoints} />} />
            <Route path="/konusma/diyalog" element={<Conversations />} />
            <Route
              path="/konusma/diyalog/:id"
              element={<ConversationChat addXP={addXP} addPoints={addPoints} />}
            />

            {/* ── Legacy redirects (old bookmarks) ── */}
            <Route path="/modules" element={<Navigate to="/kurslar" replace />} />
            <Route path="/modules/:id" element={<LegacyModuleRedirect />} />
            <Route path="/practice" element={<Navigate to="/pratik" replace />} />
            <Route path="/flashcards" element={<Navigate to="/kelime" replace />} />
            <Route path="/vocabulary" element={<Navigate to="/kelime" replace />} />
            <Route path="/conversations" element={<Navigate to="/konusma/diyalog" replace />} />
            <Route path="/conversations/:id" element={<LegacyConvRedirect />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="hidden md:block w-full py-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-center text-xs text-slate-400 dark:text-slate-500">
          <p className="font-semibold">AlmancaKursu — A1 → A2 Tam Müfredat © {new Date().getFullYear()}</p>
          <p className="mt-0.5">Çevrimdışı çalışır • Tüm veriler cihazınızda saklanır</p>
        </footer>

      </div>
    </Router>
  );
}

// Legacy redirect helpers
function LegacyModuleRedirect() {
  const { id } = useParams();
  return <Navigate to={`/kurslar/${id}`} replace />;
}

function LegacyConvRedirect() {
  const { id } = useParams();
  return <Navigate to={`/konusma/diyalog/${id}`} replace />;
}
