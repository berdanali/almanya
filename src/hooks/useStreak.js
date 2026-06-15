// src/hooks/useStreak.js
import { useState, useEffect } from "react";

export function useStreak() {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("almanca_user");
    return saved ? JSON.parse(saved) : { name: "", streak: 0, lastLogin: "" };
  });

  useEffect(() => {
    if (user.name) {
      localStorage.setItem("almanca_user", JSON.stringify(user));
    }
  }, [user]);

  const setUsername = (name) => {
    const today = new Date().toISOString().split("T")[0];
    setUser(prev => ({
      ...prev,
      name,
      streak: prev.streak === 0 ? 1 : prev.streak, // Initial streak on registration
      lastLogin: prev.lastLogin || today
    }));
  };

  const updateLoginAndStreak = () => {
    setUser(prev => {
      const today = new Date().toISOString().split("T")[0];
      if (!prev.name) return prev; // Do nothing if no user

      let currentStreak = prev.streak;
      let lastLogin = prev.lastLogin;

      if (!lastLogin) {
        currentStreak = 1;
      } else {
        const lastDate = new Date(lastLogin);
        const todayDate = new Date(today);
        const diffTime = Math.abs(todayDate - lastDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          currentStreak += 1;
        } else if (diffDays > 1) {
          currentStreak = 1;
        }
      }

      return {
        ...prev,
        streak: currentStreak,
        lastLogin: today
      };
    });
  };

  // Run automatically when component mounts/re-renders if user exists and it's a new day
  useEffect(() => {
    if (user.name && user.lastLogin !== new Date().toISOString().split("T")[0]) {
      updateLoginAndStreak();
    }
  }, [user.name, user.lastLogin]);

  return {
    name: user.name,
    streak: user.streak,
    lastLogin: user.lastLogin,
    setUsername,
    updateStreak: updateLoginAndStreak
  };
}
