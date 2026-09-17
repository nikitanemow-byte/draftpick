import React from 'react';
import { Sparkles, Image as ImageIcon, Volume2 } from 'lucide-react';
import { playHookSound } from '../data/pudgeVoice';

interface PudgeHeaderProps {
  currentQuote: string;
  onOpenConcept: () => void;
}

export const PudgeHeader: React.FC<PudgeHeaderProps> = ({
  currentQuote,
  onOpenConcept
}) => {
  return (
    <header className="text-center mb-8 relative">
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 max-w-4xl mx-auto px-2">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded bg-amber-950/40 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          Dota 2 Counterpick Assistant • Все 125 героев
        </div>

        <div className="flex items-center gap-2">
          <button
            id="sound-test-btn"
            onClick={playHookSound}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700/60 text-zinc-300 text-xs font-medium transition cursor-pointer"
            title="Воспроизвести звук хука"
          >
            <Volume2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Звук хука</span>
          </button>

          <button
            id="open-concept-btn"
            onClick={onOpenConcept}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-950/40 hover:bg-red-900/60 border border-red-700/60 text-red-300 text-xs font-semibold transition cursor-pointer shadow-sm"
          >
            <ImageIcon className="w-3.5 h-3.5 text-red-400" />
            <span>Концепт 16:9</span>
          </button>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider text-white drop-shadow-md">
        Эксперт по контрпикам: <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-emerald-400">Пудж</span>
      </h1>

      <div className="mt-4 max-w-3xl mx-auto p-4 rounded-lg bg-zinc-900/90 border-l-4 border-l-red-600 border-r-4 border-r-emerald-500 border-y border-zinc-800 shadow-xl backdrop-blur-sm text-left sm:text-center transition-all">
        <p className="text-sm sm:text-base text-zinc-200 font-medium leading-relaxed italic">
          {currentQuote}
        </p>
      </div>
    </header>
  );
};

