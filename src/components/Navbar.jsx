import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Flame, BookOpen, Layers, Award, Menu, X, ShieldCheck, MessageCircle, BarChart2 } from "lucide-react";
import XPBar from "./XPBar";

export default function Navbar({ username, streak, points, xp, onReset }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.body.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navLinks = [
    { to: "/", label: "Panel", icon: Layers },
    { to: "/modules", label: "Kurslar", icon: BookOpen },
    { to: "/dailylife", label: "Günlük Hayat", icon: MessageCircle },
    { to: "/flashcards", label: "Kelime Kartları", icon: Award },
    { to: "/progress", label: "İlerleme", icon: BarChart2 },
    { to: "/goethe", label: "Goethe A1", icon: ShieldCheck, special: true },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-darkNavy-950/90 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-indigo-950/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center shadow-md">
                <span className="text-white font-black text-xs">A1</span>
              </div>
              <span className="text-lg font-extrabold text-slate-800 dark:text-slate-100 hidden sm:block tracking-tight">
                Almanca<span className="text-sky-600">Kursu</span>
              </span>
            </Link>

            {/* XP Bar (compact, desktop only) */}
            {username && (
              <div className="hidden lg:block w-48">
                <XPBar xp={xp || 0} compact />
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              const baseClass = "flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-bold transition-all duration-200";
              const activeClass = link.special 
                ? "bg-amber-500 text-white shadow-md" 
                : "bg-slate-800 dark:bg-white text-white dark:text-slate-900 shadow-sm";
              const inactiveClass = link.special 
                ? "text-amber-600 dark:text-amber-500 hover:bg-amber-50 dark:hover:bg-amber-900/20" 
                : "text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-indigo-950/40 hover:text-slate-900 dark:hover:text-white";

              return (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`${baseClass} ${isActive ? activeClass : inactiveClass}`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>

          {/* User Stats & Utilities */}
          <div className="flex items-center space-x-2">
            {username && (
              <div className="flex items-center gap-2">
                {/* Streak */}
                <div className="flex items-center gap-1 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full text-xs font-bold border border-amber-500/20">
                  <Flame className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{streak}g</span>
                </div>

                {/* Avatar */}
                <div className="hidden sm:flex w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white items-center justify-center font-bold text-sm shadow-sm border-2 border-white/20">
                  {username[0].toUpperCase()}
                </div>
              </div>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-darkNavy-900 dark:hover:bg-indigo-950/60 border border-slate-200/40 dark:border-indigo-800/30 text-slate-600 dark:text-slate-300 transition-colors"
              aria-label="Tema değiştir"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 md:hidden rounded-lg hover:bg-slate-100 dark:hover:bg-indigo-950/40 text-slate-600 dark:text-slate-300"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {menuOpen && (
        <div className="md:hidden glass border-t border-slate-200/50 dark:border-indigo-900/40 animate-in slide-in-from-top duration-200">
          <div className="px-3 pt-3 pb-4 space-y-1">
            {username && (
              <div className="px-3 py-3 mb-2">
                <XPBar xp={xp || 0} />
              </div>
            )}
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-accentViolet-500 text-white"
                      : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-indigo-950/40"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span>{link.label}</span>
                </Link>
              );
            })}
            {username && (
              <div className="pt-3 border-t border-slate-200/30 dark:border-indigo-900/30 px-4 flex items-center justify-between text-xs text-slate-500">
                <span className="font-bold">{username}</span>
                <button
                  onClick={() => {
                    if (window.confirm("Tüm ilerlemenizi sıfırlamak istediğinize emin misiniz?")) {
                      onReset();
                      setMenuOpen(false);
                    }
                  }}
                  className="text-rose-500 hover:underline font-semibold"
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
