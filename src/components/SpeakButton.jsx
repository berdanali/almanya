import React from "react";
import { Volume2 } from "lucide-react";
import { speakGerman } from "../utils/speech";

export default function SpeakButton({ text, className = "" }) {
  const handleClick = (e) => {
    e.stopPropagation();
    speakGerman(text);
  };

  return (
    <button
      onClick={handleClick}
      title="Almanca sesini dinle"
      className={`p-1.5 rounded-lg text-slate-400 hover:text-sky-500 hover:bg-sky-500/10 transition-all ${className}`}
    >
      <Volume2 className="w-4 h-4" />
    </button>
  );
}
