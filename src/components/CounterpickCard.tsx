import React from 'react';
import { CounterpickItem } from '../types';
import { Shield, Sword, Sparkles, Lightbulb } from 'lucide-react';

interface CounterpickCardProps {
  counter: CounterpickItem;
  rank: number;
}

export const CounterpickCard: React.FC<CounterpickCardProps> = ({ counter, rank }) => {
  const getRoleBadgeStyle = (role: string) => {
    switch (role) {
      case 'Керри':
        return 'bg-red-950/60 text-red-400 border-red-700/60';
      case 'Мид':
        return 'bg-amber-950/60 text-amber-300 border-amber-600/60';
      case 'Оффлейн':
        return 'bg-blue-950/60 text-blue-300 border-blue-600/60';
      case 'Саппорт':
        return 'bg-emerald-950/60 text-emerald-400 border-emerald-600/60';
      default:
        return 'bg-zinc-800 text-zinc-300 border-zinc-700';
    }
  };

  // Get initials for hero avatar
  const initials = counter.heroName
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      id={`counter-card-${counter.heroId}`}
      className="group relative flex flex-col bg-zinc-900/90 border border-zinc-800/90 hover:border-amber-500/80 rounded-lg p-5 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
    >
      {/* HUD Corner Accent */}
      <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-amber-500/70 rounded-tr" />
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-amber-500/70 rounded-bl" />

      {/* Header */}
      <div className="flex items-center justify-between gap-3 pb-3 mb-3 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded bg-gradient-to-br from-zinc-800 via-zinc-900 to-black border-2 border-amber-500/80 flex items-center justify-center font-black text-lg text-amber-400 shadow-inner">
            {initials}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/40">
                #{rank}
              </span>
              <h3 className="text-lg font-bold text-white tracking-wide group-hover:text-amber-300 transition">
                {counter.heroName}
              </h3>
            </div>
            <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 mt-1 rounded border ${getRoleBadgeStyle(counter.role)}`}>
              {counter.role}
            </span>
          </div>
        </div>
      </div>

      {/* Mechanics Explanation */}
      <div className="mb-3 flex-grow">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400/90 mb-1">
          <Sword className="w-3.5 h-3.5" />
          <span>Механика контрпика</span>
        </div>
        <p className="text-sm text-zinc-300 leading-relaxed">
          {counter.explanation}
        </p>
      </div>

      {/* Key Items */}
      <div className="mb-3">
        <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-400 mb-1.5">
          <Shield className="w-3.5 h-3.5" />
          <span>Ключевые предметы</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {counter.keyItems.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700/80 text-sky-200"
            >
              <Sparkles className="w-2.5 h-2.5 text-sky-400" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Tactical Tip */}
      <div className="mt-auto p-2.5 rounded bg-emerald-950/20 border-l-2 border-emerald-500 text-xs text-emerald-200/90 leading-normal">
        <div className="flex items-center gap-1 font-bold text-emerald-400 mb-0.5">
          <Lightbulb className="w-3 h-3" />
          <span>Совет от Пуджа:</span>
        </div>
        {counter.gameplayTip}
      </div>
    </div>
  );
};
