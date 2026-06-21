import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Flame, BookOpen, Layers, BarChart2, Menu, X, ShieldCheck, GraduationCap, MessageCircle } from "lucide-react";

export default function Navbar({ username, streak, points, xp, onReset }) {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const navLinks = [
    { to: "/", label: "Ana Sayfa", icon: Layers },
    { to: "/modules", label: "Kurslar", icon: BookOpen },
    { to: "/conversations", label: "Konuşma", icon: MessageCircle },
    { to: "/goethe", label: "Sınav", icon: ShieldCheck, accent: true },
    { to: "/flashcards", label: "Kelimeler", icon: GraduationCap },
    { to: "/progress", label: "İlerleme", icon: BarChart2 },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center shadow-sm">
              <span className="text-white font-black text-xs tracking-tight">A1</span>
            </div>
            <span className="text-base font-black text-slate-900 dark:text-slate-100 tracking-tight hidden sm:block">
              Almanca<span className="text-indigo-600">Kursu</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label, icon: Icon, accent }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-semibold transition-all ${
                    active
                      ? accent
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                      : accent
                        ? "text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/30"
                        : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Right: streak + theme + mobile */}
          <div className="flex items-center gap-2">
            {username && (
              <>
                <div className="flex items-center gap-1 bg-amber-50 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 px-2.5 py-1.5 rounded-lg text-xs font-bold text-amber-600 dark:text-amber-400">
                  <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span>{streak}</span>
                </div>
                <div className="hidden sm:flex w-7 h-7 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white items-center justify-center font-black text-xs">
                  {username[0]?.toUpperCase()}
                </div>
              </>
            )}

            <button
              onClick={() => setTheme(t => t === "light" ? "dark" : "light")}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Tema"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMenuOpen(v => !v)}
              className="p-2 md:hidden rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
          <div className="px-3 py-3 space-y-1">
            {navLinks.map(({ to, label, icon: Icon, accent }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? "bg-indigo-600 text-white"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              );
            })}

            {username && (
              <div className="pt-3 px-4 flex items-center justify-between border-t border-slate-100 dark:border-slate-800 mt-2">
                <span className="text-xs font-bold text-slate-500">{username}</span>
                <button
                  onClick={() => {
                    if (window.confirm("Tüm ilerlemenizi sıfırlamak istediğinize emin misiniz?")) {
                      onReset();
                      setMenuOpen(false);
                    }
                  }}
                  className="text-xs text-rose-500 hover:underline font-semibold"
                >
                  Sıfırla
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
