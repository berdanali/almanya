// src/components/exercises/GoetheExerciseRunner.jsx
import React, { useState, useEffect } from "react";
import { CheckCircle2, XCircle, ChevronRight, Eye, Mic, Timer } from "lucide-react";
import FillInBlank from "./FillInBlank";

export default function GoetheExerciseRunner({ exercises, onComplete }) {
  const { type } = exercises;
  if (type === "fill") return <FillInBlank questions={exercises.questions} onComplete={onComplete} />;
  if (type === "richtigfalsch") return <RichtigFalschExercise exercises={exercises} onComplete={onComplete} />;
  if (type === "choice") return <ChoiceExercise exercises={exercises} onComplete={onComplete} />;
  if (type === "writing") return <WritingExercise exercises={exercises} onComplete={onComplete} />;
  if (type === "speaking") return <SpeakingExercise exercises={exercises} onComplete={onComplete} />;
  return <div className="p-8 text-center text-slate-500">Bilinmeyen egzersiz türü.</div>;
}

// ─── Richtig / Falsch ────────────────────────────────────────────────────────
function RichtigFalschExercise({ exercises, onComplete }) {
  const { intro, passage, passageTitle, questions } = exercises;
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? answers.filter((a, i) => a === questions[i].answer).length : 0;
  const allAnswered = answers.every((a) => a !== null);

  const pick = (idx, val) => {
    if (submitted) return;
    setAnswers((prev) => { const n = [...prev]; n[idx] = val; return n; });
  };

  return (
    <div className="space-y-5 p-4">
      {intro && (
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-indigo-950/20 p-3 rounded-xl border border-slate-200/50 dark:border-indigo-900/10 leading-relaxed">
          ℹ️ {intro}
        </p>
      )}
      {passage && (
        <div className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/30 rounded-2xl p-5">
          {passageTitle && <h4 className="text-xs font-black text-sky-700 dark:text-sky-400 mb-2 uppercase tracking-wide">{passageTitle}</h4>}
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{passage}</p>
        </div>
      )}

      <div className="space-y-3">
        {questions.map((q, idx) => {
          const ua = answers[idx];
          const correct = submitted && ua === q.answer;
          const wrong = submitted && ua !== q.answer;
          return (
            <div
              key={idx}
              className={`p-4 rounded-2xl border transition-all ${
                correct ? "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800" :
                wrong   ? "bg-rose-50 dark:bg-rose-950/20 border-rose-300 dark:border-rose-800" :
                "bg-white dark:bg-darkNavy-900 border-slate-200 dark:border-indigo-950/60"
              }`}
            >
              {q.context && (
                <div className="mb-3 p-3 bg-slate-50 dark:bg-indigo-950/30 rounded-xl border border-slate-200 dark:border-indigo-900/20">
                  <p className="text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">{q.context}</p>
                </div>
              )}
              <p className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">
                <span className="text-slate-400 mr-2 font-medium">{idx + 1}.</span>
                {q.statement}
              </p>
              <div className="flex gap-2">
                {[true, false].map((val) => {
                  const label = val ? "✓ Richtig" : "✗ Falsch";
                  const selected = ua === val;
                  const showCorrect = submitted && q.answer === val;
                  const showWrong = submitted && selected && q.answer !== val;
                  return (
                    <button
                      key={String(val)}
                      onClick={() => pick(idx, val)}
                      disabled={submitted}
                      className={`flex-1 py-2.5 rounded-xl text-sm font-bold border transition-all ${
                        showWrong   ? "bg-rose-500 text-white border-rose-500" :
                        showCorrect ? "bg-emerald-500 text-white border-emerald-500" :
                        selected    ? "bg-sky-500 text-white border-sky-500" :
                        "border-slate-200 dark:border-indigo-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-indigo-950/20"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
              {submitted && wrong && q.explanation && (
                <p className="text-xs text-rose-600 dark:text-rose-400 mt-2 font-semibold">
                  💡 {q.explanation}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 disabled:text-slate-400 text-white font-extrabold rounded-xl text-sm transition-all shadow-md"
        >
          {allAnswered ? "Kontrol Et" : `Tüm soruları cevaplayın (${answers.filter((a) => a !== null).length}/${questions.length})`}
        </button>
      ) : (
        <button
          onClick={() => onComplete(score, 0, questions.length)}
          className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-sm transition-all shadow-md"
        >
          Sonuçları Gör — {score}/{questions.length} Doğru
        </button>
      )}
    </div>
  );
}

// ─── Multiple Choice ─────────────────────────────────────────────────────────
function ChoiceExercise({ exercises, onComplete }) {
  const { intro, passage, passageTitle, questions } = exercises;
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const score = submitted ? answers.filter((a, i) => a === questions[i].answer).length : 0;
  const allAnswered = answers.every((a) => a !== null);

  const pick = (qIdx, optIdx) => {
    if (submitted) return;
    setAnswers((prev) => { const n = [...prev]; n[qIdx] = optIdx; return n; });
  };

  return (
    <div className="space-y-5 p-4">
      {intro && (
        <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-indigo-950/20 p-3 rounded-xl border border-slate-200/50 dark:border-indigo-900/10 leading-relaxed">
          ℹ️ {intro}
        </p>
      )}
      {passage && (
        <div className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/30 rounded-2xl p-5">
          {passageTitle && <h4 className="text-xs font-black text-sky-700 dark:text-sky-400 mb-2 uppercase tracking-wide">{passageTitle}</h4>}
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{passage}</p>
        </div>
      )}

      <div className="space-y-5">
        {questions.map((q, qIdx) => (
          <div key={qIdx} className="bg-white dark:bg-darkNavy-900 rounded-2xl border border-slate-200 dark:border-indigo-950/60 p-4">
            {q.context && (
              <div className="mb-3 p-3 bg-slate-50 dark:bg-indigo-950/30 rounded-xl border border-slate-200 dark:border-indigo-900/20">
                <p className="text-xs font-medium text-slate-600 dark:text-slate-400 whitespace-pre-line leading-relaxed">{q.context}</p>
              </div>
            )}
            <p className="text-sm font-bold text-slate-800 dark:text-slate-100 mb-3">
              <span className="text-slate-400 font-medium mr-2">{qIdx + 1}.</span>
              {q.question}
            </p>
            <div className="space-y-2">
              {q.options.map((opt, optIdx) => {
                const selected = answers[qIdx] === optIdx;
                const isCorrect = submitted && optIdx === q.answer;
                const isWrong = submitted && selected && optIdx !== q.answer;
                return (
                  <button
                    key={optIdx}
                    onClick={() => pick(qIdx, optIdx)}
                    disabled={submitted}
                    className={`w-full text-left p-3 rounded-xl text-sm font-semibold border transition-all ${
                      isWrong   ? "bg-rose-100 dark:bg-rose-950/30 border-rose-400 text-rose-800 dark:text-rose-300" :
                      isCorrect ? "bg-emerald-100 dark:bg-emerald-950/30 border-emerald-400 text-emerald-800 dark:text-emerald-300" :
                      selected  ? "bg-sky-100 dark:bg-sky-950/30 border-sky-400 text-sky-800 dark:text-sky-300" :
                      "border-slate-200 dark:border-indigo-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-indigo-950/20"
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
            {submitted && answers[qIdx] !== q.answer && q.explanation && (
              <p className="text-xs text-rose-600 dark:text-rose-400 mt-2 font-semibold">💡 {q.explanation}</p>
            )}
          </div>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 disabled:text-slate-400 text-white font-extrabold rounded-xl text-sm transition-all shadow-md"
        >
          {allAnswered ? "Kontrol Et" : `Tüm soruları cevaplayın (${answers.filter((a) => a !== null).length}/${questions.length})`}
        </button>
      ) : (
        <button
          onClick={() => onComplete(score, 0, questions.length)}
          className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-sm transition-all shadow-md"
        >
          Sonuçları Gör — {score}/{questions.length} Doğru
        </button>
      )}
    </div>
  );
}

// ─── Writing ─────────────────────────────────────────────────────────────────
function WritingExercise({ exercises, onComplete }) {
  const { scenario, receivedMessage, task, points, wordCount, modelAnswer } = exercises;
  const [text, setText] = useState("");
  const [showModel, setShowModel] = useState(false);
  const [rated, setRated] = useState(false);

  const wc = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const pct = wordCount ? Math.min(100, Math.round((wc / wordCount) * 100)) : null;

  const rate = (score) => { setRated(true); onComplete(score, 0, 3); };

  return (
    <div className="space-y-5 p-4">
      {scenario && (
        <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/20 rounded-2xl p-5">
          <h4 className="text-xs font-black text-amber-700 dark:text-amber-400 mb-1 uppercase tracking-wide">📋 Durum (Situation)</h4>
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{scenario}</p>
        </div>
      )}
      {receivedMessage && (
        <div className="bg-slate-50 dark:bg-indigo-950/20 border border-slate-200 dark:border-indigo-900/20 rounded-2xl p-4">
          <h4 className="text-xs font-black text-slate-500 dark:text-slate-400 mb-2 uppercase tracking-wide">📩 Aldığınız Mesaj</h4>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed italic">{receivedMessage}</p>
        </div>
      )}
      {task && (
        <div className="bg-sky-50 dark:bg-sky-950/20 border border-sky-200 dark:border-sky-900/30 rounded-2xl p-4">
          <p className="text-sm font-bold text-sky-700 dark:text-sky-400 mb-2">{task}</p>
          {points && (
            <ul className="space-y-1">
              {points.map((p, i) => (
                <li key={i} className="text-xs font-semibold text-slate-600 dark:text-slate-400 flex gap-2">
                  <span className="text-sky-500 flex-shrink-0">→</span>{p}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <div className="space-y-1.5">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Cevabınızı buraya Almanca olarak yazın..."
          rows={7}
          className="w-full p-4 rounded-2xl border border-slate-200 dark:border-indigo-900 bg-white dark:bg-darkNavy-900 text-sm font-medium text-slate-800 dark:text-slate-200 placeholder-slate-400 resize-none focus:outline-none focus:border-amber-400 transition-all"
        />
        <div className="flex justify-between items-center px-1">
          <span className={`text-xs font-bold ${wc >= (wordCount || 60) ? "text-emerald-600 dark:text-emerald-400" : "text-slate-400"}`}>
            {wc} kelime{wordCount ? ` (hedef: ~${wordCount})` : ""}
          </span>
          {pct !== null && <span className="text-xs text-slate-400">{pct}% tamamlandı</span>}
        </div>
      </div>

      {!showModel && (
        <button
          onClick={() => setShowModel(true)}
          className="w-full py-3 rounded-xl text-sm font-bold border border-sky-300 dark:border-sky-900 text-sky-600 dark:text-sky-400 bg-white dark:bg-darkNavy-900 hover:bg-sky-50 dark:hover:bg-sky-950/20 transition-all flex items-center justify-center gap-2"
        >
          <Eye className="w-4 h-4" /> Model Cevabı Göster (Musterlösung)
        </button>
      )}

      {showModel && (
        <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 rounded-2xl p-5">
          <h4 className="text-xs font-black text-emerald-700 dark:text-emerald-400 mb-3 uppercase tracking-wide">✅ Model Cevap (Musterlösung)</h4>
          <p className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{modelAnswer}</p>
        </div>
      )}

      {showModel && !rated && (
        <div className="space-y-2">
          <p className="text-xs font-bold text-center text-slate-500 dark:text-slate-400 uppercase tracking-wide">Kendinizi nasıl değerlendiriyorsunuz?</p>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => rate(3)} className="py-2.5 rounded-xl text-xs font-bold border bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30 hover:bg-emerald-100 transition-all">Güzel 👍</button>
            <button onClick={() => rate(2)} className="py-2.5 rounded-xl text-xs font-bold border bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/30 hover:bg-amber-100 transition-all">Orta 🤔</button>
            <button onClick={() => rate(1)} className="py-2.5 rounded-xl text-xs font-bold border bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-900/30 hover:bg-rose-100 transition-all">Tekrar 📚</button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Speaking ─────────────────────────────────────────────────────────────────
function SpeakingExercise({ exercises, onComplete }) {
  const { parts } = exercises;
  const [partIdx, setPartIdx] = useState(0);
  const [phase, setPhase] = useState("read"); // "read" | "timer" | "done"
  const [timeLeft, setTimeLeft] = useState(null);
  const [showSample, setShowSample] = useState(false);
  const [rated, setRated] = useState(false);

  const part = parts[partIdx];

  useEffect(() => {
    if (phase !== "timer" || timeLeft === null) return;
    if (timeLeft <= 0) { setPhase("done"); return; }
    const t = setTimeout(() => setTimeLeft((n) => n - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft]);

  const startTimer = () => { setTimeLeft(part.timeSeconds); setPhase("timer"); };

  const finishPart = () => {
    if (partIdx < parts.length - 1) {
      setPartIdx((i) => i + 1);
      setPhase("read");
      setShowSample(false);
      setTimeLeft(null);
    } else {
      setPhase("allDone");
    }
  };

  const rate = (score) => { setRated(true); onComplete(score, 0, 3); };

  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

  if (phase === "allDone" && !rated) {
    return (
      <div className="space-y-5 p-4">
        <div className="text-center p-6 bg-emerald-50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200 dark:border-emerald-900/30">
          <div className="text-4xl mb-3">🎤</div>
          <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 mb-1">Konuşma Bölümü Tamamlandı!</h3>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">Tüm parçaları bitirdiniz. Kendinizi değerlendirin:</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <button onClick={() => rate(3)} className="py-3 rounded-xl text-sm font-bold border bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/30 hover:bg-emerald-100 transition-all">Güzel 👍</button>
          <button onClick={() => rate(2)} className="py-3 rounded-xl text-sm font-bold border bg-amber-50 dark:bg-amber-950/20 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-900/30 hover:bg-amber-100 transition-all">Orta 🤔</button>
          <button onClick={() => rate(1)} className="py-3 rounded-xl text-sm font-bold border bg-rose-50 dark:bg-rose-950/20 text-rose-700 dark:text-rose-400 border-rose-200 dark:border-rose-900/30 hover:bg-rose-100 transition-all">Tekrar 📚</button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5 p-4">
      {/* Part indicator */}
      <div className="flex gap-2 items-center">
        {parts.map((_, i) => (
          <div key={i} className={`h-2 flex-1 rounded-full transition-all ${i <= partIdx ? "bg-amber-500" : "bg-slate-200 dark:bg-indigo-950/40"}`} />
        ))}
        <span className="text-xs font-bold text-slate-400 flex-shrink-0">{partIdx + 1}/{parts.length}</span>
      </div>

      {/* Part title */}
      <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200/40 dark:border-amber-900/20 rounded-2xl p-5">
        <h4 className="text-xs font-black text-amber-700 dark:text-amber-400 uppercase tracking-wide mb-1">{part.title}</h4>
        <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">{part.description}</p>
      </div>

      {/* Task card */}
      <div className="bg-white dark:bg-darkNavy-900 border-2 border-amber-300 dark:border-amber-800 rounded-2xl p-5">
        <h4 className="text-xs font-black text-amber-600 dark:text-amber-500 uppercase tracking-wide mb-3">📋 Görev Kartı</h4>
        <p className="text-sm font-bold text-slate-800 dark:text-slate-100 whitespace-pre-line leading-relaxed">{part.card}</p>
        {part.keyPhrases && (
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-indigo-950/40">
            <p className="text-xs font-black text-slate-500 dark:text-slate-400 mb-2">Faydalı İfadeler:</p>
            <div className="flex flex-wrap gap-2">
              {part.keyPhrases.map((kp, i) => (
                <span key={i} className="text-xs px-2 py-1 bg-sky-50 dark:bg-sky-950/20 text-sky-700 dark:text-sky-400 border border-sky-200 dark:border-sky-900/30 rounded-lg font-semibold">{kp}</span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Timer / controls */}
      {phase === "read" && (
        <button onClick={startTimer} className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
          <Mic className="w-4 h-4" /> Konuşmaya Başla ({fmt(part.timeSeconds)})
        </button>
      )}
      {phase === "timer" && (
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-3 p-4 bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30 rounded-2xl">
            <Timer className="w-5 h-5 text-rose-500 animate-pulse" />
            <span className="text-2xl font-black text-rose-600 dark:text-rose-400 tabular-nums">{fmt(timeLeft)}</span>
            <span className="text-sm font-bold text-rose-500">konuşun...</span>
          </div>
          <button onClick={() => setPhase("done")} className="w-full py-2.5 border border-slate-200 dark:border-indigo-900 text-slate-500 font-bold rounded-xl text-sm transition-all hover:bg-slate-50">
            Bitir
          </button>
        </div>
      )}
      {(phase === "done") && (
        <div className="space-y-3">
          {!showSample ? (
            <button onClick={() => setShowSample(true)} className="w-full py-3 rounded-xl text-sm font-bold border border-sky-300 dark:border-sky-900 text-sky-600 dark:text-sky-400 bg-white dark:bg-darkNavy-900 hover:bg-sky-50 transition-all flex items-center justify-center gap-2">
              <Eye className="w-4 h-4" /> Örnek Cevabı Gör
            </button>
          ) : (
            <div className="bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30 rounded-2xl p-4">
              <h4 className="text-xs font-black text-emerald-700 dark:text-emerald-400 mb-2 uppercase tracking-wide">✅ Örnek Cevap</h4>
              <p className="text-sm font-medium text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{part.sampleAnswer}</p>
            </div>
          )}
          <button onClick={finishPart} className="w-full py-3.5 bg-amber-500 hover:bg-amber-600 text-white font-extrabold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2">
            {partIdx < parts.length - 1 ? "Sonraki Parça" : "Tamamla"} <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
