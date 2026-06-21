// src/pages/ConversationChat.jsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Volume2, Eye, EyeOff, RotateCcw, Send, Trophy, ChevronRight } from "lucide-react";
import { conversations } from "../data/conversations";
import { speakGerman, speakGermanQueued } from "../utils/speech";

const STORAGE_KEY = "almanca_conv_completed";

function getCompleted() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); }
  catch { return {}; }
}

function markCompleted(id) {
  const prev = getCompleted();
  if (!prev[id]) {
    prev[id] = { completedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(prev));
  }
}

const levelGradient = { A1: "from-sky-500 to-blue-600", A2: "from-violet-500 to-purple-600" };

export default function ConversationChat({ addXP, addPoints }) {
  const { id } = useParams();
  const scenario = conversations.find(c => c.id === id);

  const [history, setHistory] = useState([]);
  const [currentNodeId, setCurrentNodeId] = useState(null);
  const [showTr, setShowTr] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [isDone, setIsDone] = useState(false);
  const [xpAwarded, setXpAwarded] = useState(false);
  const [matchError, setMatchError] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  const startConversation = useCallback(() => {
    if (!scenario) return;
    const startId = scenario.startNode || "start";
    const node = scenario.nodes[startId];
    setHistory([{ role: "ai", text: node.ai, tr: node.tr }]);
    setCurrentNodeId(startId);
    setIsDone(false);
    setXpAwarded(false);
    setUserInput("");
    setMatchError(false);
    speakGerman(node.ai);
  }, [scenario]);

  useEffect(() => { startConversation(); }, [startConversation]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isDone]);

  if (!scenario) {
    return (
      <div className="text-center py-20 space-y-3">
        <p className="text-slate-500">Senaryo bulunamadı.</p>
        <Link to="/conversations" className="text-indigo-500 font-bold text-sm hover:underline">
          ← Senaryolara Dön
        </Link>
      </div>
    );
  }

  const currentNode = currentNodeId ? scenario.nodes[currentNodeId] : null;
  const gradient = levelGradient[scenario.level] || levelGradient.A1;

  const handleOption = (option) => {
    if (isDone || !option) return;
    setMatchError(false);

    const nextId = option.next;
    const nextNode = scenario.nodes[nextId];

    const newHistory = [...history, { role: "user", text: option.text, tr: option.tr }];

    // Önce kullanıcı cümlesini, arkasından AI yanıtını sırayla seslendir
    speakGerman(option.text);

    if (nextNode) {
      newHistory.push({ role: "ai", text: nextNode.ai, tr: nextNode.tr });
      speakGermanQueued(nextNode.ai);

      if (nextNode.isEnd) {
        setIsDone(true);
        markCompleted(scenario.id);
        if (!xpAwarded) {
          addXP?.(scenario.xp);
          addPoints?.(scenario.xp * 2);
          setXpAwarded(true);
        }
      }
    }

    setHistory(newHistory);
    setCurrentNodeId(nextId);
    setUserInput("");
  };

  const handleTextSubmit = (e) => {
    e.preventDefault();
    const raw = userInput.trim();
    if (!raw || !currentNode || isDone) return;

    const lc = raw.toLowerCase();
    const options = currentNode.options || [];

    const match = options.find(opt => {
      const t = opt.text.toLowerCase();
      return t === lc || t.includes(lc) || lc.includes(t.slice(0, Math.min(t.length, 6)));
    });

    if (match) {
      handleOption(match);
    } else {
      setMatchError(true);
      setTimeout(() => setMatchError(false), 3000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto flex flex-col rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg bg-white dark:bg-slate-900"
      style={{ height: "calc(100dvh - 130px)", minHeight: "500px" }}
    >
      {/* ── Header ── */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-slate-200 dark:border-slate-800 flex-shrink-0 bg-white dark:bg-slate-900">
        <Link
          to="/conversations"
          className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors flex-shrink-0"
        >
          <ArrowLeft className="w-4 h-4 text-slate-500 dark:text-slate-400" />
        </Link>

        <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-lg flex-shrink-0`}>
          {scenario.emoji}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-black text-slate-800 dark:text-white truncate leading-tight">
            {scenario.character.name}
          </p>
          <p className="text-[11px] text-slate-400 truncate">{scenario.titleTR}</p>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <span className={`text-[10px] font-black px-1.5 py-0.5 rounded-md ${
            scenario.level === "A2"
              ? "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400"
              : "bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400"
          }`}>
            {scenario.level}
          </span>
          <button
            onClick={() => setShowTr(v => !v)}
            title={showTr ? "Çeviriyi gizle" : "Çeviriyi göster"}
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            {showTr ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
          <button
            onClick={startConversation}
            title="Yeniden başla"
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ── Mesajlar ── */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-slate-50 dark:bg-slate-950">
        {history.map((msg, idx) => (
          <div
            key={idx}
            className={`flex items-end gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
          >
            {msg.role === "ai" && (
              <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center text-sm flex-shrink-0 mb-0.5`}>
                {scenario.character.emoji}
              </div>
            )}

            <div className={`max-w-[80%] flex flex-col gap-1 ${msg.role === "user" ? "items-end" : "items-start"}`}>
              <div className={`px-4 py-3 rounded-2xl ${
                msg.role === "user"
                  ? "bg-indigo-600 text-white rounded-br-sm"
                  : "bg-white dark:bg-slate-800 text-slate-800 dark:text-white border border-slate-200 dark:border-slate-700 rounded-bl-sm shadow-sm"
              }`}>
                <p className="text-sm font-semibold leading-snug">{msg.text}</p>
                {showTr && msg.tr && (
                  <p className={`text-xs mt-1 leading-relaxed ${
                    msg.role === "user" ? "text-indigo-200" : "text-slate-400"
                  }`}>
                    {msg.tr}
                  </p>
                )}
              </div>

              {msg.role === "ai" && (
                <button
                  onClick={() => speakGerman(msg.text)}
                  className="ml-1 text-slate-300 dark:text-slate-600 hover:text-indigo-500 transition-colors"
                  title="Tekrar dinle"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        ))}

        {/* ── Tamamlandı ── */}
        {isDone && (
          <div className="flex flex-col items-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-lg">
              <Trophy className="w-8 h-8 text-white" />
            </div>
            <div className="text-center">
              <p className="font-black text-slate-800 dark:text-white text-lg">Harika! Konuşma tamamlandı!</p>
              <p className="text-slate-400 text-sm mt-1">
                <span className="font-bold text-amber-500">+{scenario.xp} XP</span> kazandınız!
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={startConversation}
                className="px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Tekrar Dene
              </button>
              <Link
                to="/conversations"
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-700 transition-colors"
              >
                Diğer Senaryolar <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* ── Seçenekler + Yazma ── */}
      {!isDone && currentNode && (
        <div className="flex-shrink-0 px-4 py-3 border-t border-slate-200 dark:border-slate-800 space-y-2.5 bg-white dark:bg-slate-900">

          {matchError && (
            <p className="text-xs text-center text-rose-500 font-semibold py-1">
              Bu cümle tanınmadı — aşağıdaki seçeneklerden birini seçin
            </p>
          )}

          {/* Seçenek butonları */}
          <div className="space-y-1.5">
            {(currentNode.options || []).map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOption(option)}
                className="w-full text-left px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-950/20 transition-all group active:scale-[0.99]"
              >
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-200 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 leading-snug">
                  {option.text}
                </p>
                {showTr && (
                  <p className="text-xs text-slate-400 mt-0.5">{option.tr}</p>
                )}
              </button>
            ))}
          </div>

          {/* Serbest yazma */}
          <form onSubmit={handleTextSubmit} className="flex gap-2 pt-0.5">
            <input
              ref={inputRef}
              value={userInput}
              onChange={e => setUserInput(e.target.value)}
              placeholder="Veya kendiniz yazın..."
              className="flex-1 px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
            <button
              type="submit"
              disabled={!userInput.trim()}
              className="p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
