import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Flame, BookOpen, LayoutDashboard, Dumbbell, GraduationCap, Mic, X, RotateCcw } from "lucide-react";

const NAV = [
  { to: "/kurslar",  label: "Kurslar",  icon: BookOpen },
  { to: "/pratik",   label: "Pratik",   icon: Dumbbell },
  { to: "/kelime",   label: "Kelime",   icon: GraduationCap },
  { to: "/konusma",  label: "Konuşma",  icon: Mic },
];

export default function Navbar({ username, streak, points, xp, onReset }) {
  const [theme, setTheme]     = useState(() => localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isActive = (to) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <>
      {/* ── Top Bar ── */}
      <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-xs tracking-tight">DE</span>
              </div>
              <span className="text-base font-black text-slate-900 dark:text-slate-100 tracking-tight hidden sm:block">
                Almanca<span className="text-indigo-600">Kursu</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV.map(({ to, label, icon: Icon }) => {
                const active = isActive(to);
                return (
                  <Link
                    key={to}
                    to={to}
                    className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                      active
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-2">
              {username && (
                <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 px-2.5 py-1.5 rounded-lg text-xs font-bold text-amber-600 dark:text-amber-400">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{streak}</span>
                </div>
              )}
              <button
                onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Tema"
              >
                {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Mobile: user menu button */}
              {username && (
                <button
                  onClick={() => setMenuOpen(v => !v)}
                  className="md:hidden w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center font-black text-xs"
                >
                  {menuOpen ? <X className="w-4 h-4" /> : username[0]?.toUpperCase()}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile: user dropdown (reset + username) */}
        {menuOpen && username && (
          <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white flex items-center justify-center font-black text-xs">
                {username[0]?.toUpperCase()}
              </div>
              <span className="text-sm font-bold text-slate-700 dark:text-slate-200">{username}</span>
            </div>
            <button
              onClick={() => {
                if (window.confirm("Tüm ilerlemenizi sıfırlamak istediğinize emin misiniz?")) {
                  onReset();
                  setMenuOpen(false);
                }
              }}
              className="flex items-center gap-1.5 text-xs text-rose-500 hover:text-rose-600 font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Sıfırla
            </button>
          </div>
        )}
      </nav>

      {/* ── Mobile Bottom Tab Bar ── */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-stretch h-16">
          {/* Home tab */}
          <Link
            to="/"
            className={`flex flex-col items-center justify-center gap-0.5 flex-1 transition-colors ${
              location.pathname === "/"
                ? "text-indigo-600 dark:text-indigo-400"
                : "text-slate-400 dark:text-slate-500"
            }`}
          >
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-[10px] font-bold">Ana</span>
          </Link>

          {NAV.map(({ to, label, icon: Icon }) => {
            const active = isActive(to);
            return (
              <Link
                key={to}
                to={to}
                className={`flex flex-col items-center justify-center gap-0.5 flex-1 transition-colors ${
                  active
                    ? "text-indigo-600 dark:text-indigo-400"
                    : "text-slate-400 dark:text-slate-500"
                }`}
              >
                {active && (
                  <span className="absolute top-0 w-8 h-0.5 bg-indigo-500 rounded-b" />
                )}
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-bold">{label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
