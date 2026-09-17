import React from 'react';
import { Search, Crosshair } from 'lucide-react';
import { HeroRole } from '../types';

interface HeroInputBarProps {
  query: string;
  setQuery: (val: string) => void;
  onSearch: () => void;
  selectedRole: HeroRole | 'Все роли';
  setSelectedRole: (role: HeroRole | 'Все роли') => void;
  onSelectQuickHero: (heroName: string) => void;
  isHooking: boolean;
}

const QUICK_HEROES = [
  'Phantom Assassin',
  'Sniper',
  'Pudge',
  'Anti-Mage',
  'Invoker',
  'Morphling',
  'Bristleback',
  'Medusa',
  'Slark',
  'Faceless Void'
];

const ROLES: (HeroRole | 'Все роли')[] = [
  'Все роли',
  'Керри',
  'Мид',
  'Оффлейн',
  'Саппорт'
];

export const HeroInputBar: React.FC<HeroInputBarProps> = ({
  query,
  setQuery,
  onSearch,
  selectedRole,
  setSelectedRole,
  onSelectQuickHero,
  isHooking
}) => {
  return (
    <div className="relative bg-zinc-900/90 border border-zinc-800 rounded-lg p-5 shadow-2xl backdrop-blur-md mb-8">
      {/* Decorative Dota 2 HUD corner accents */}
      <div className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-amber-500 pointer-events-none" />
      <div className="absolute -bottom-[1px] -right-[1px] w-4 h-4 border-b-2 border-r-2 border-amber-500 pointer-events-none" />

      <label
        htmlFor="enemy-hero-input"
        className="block text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2"
      >
        Введи героев противника (от 1 до 5 через запятую):
      </label>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
          <input
            id="enemy-hero-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && onSearch()}
            placeholder="Например: Phantom Assassin, Sniper, Pudge"
            className="w-full bg-zinc-950/90 border border-zinc-700/80 focus:border-emerald-500 rounded pl-10 pr-4 py-3 text-white placeholder-zinc-500 font-medium text-base outline-none transition shadow-inner focus:ring-2 focus:ring-emerald-500/20"
          />
        </div>

        <button
          id="pick-counter-btn"
          onClick={onSearch}
          disabled={isHooking}
          className="relative group overflow-hidden px-7 py-3 rounded bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-600 hover:from-emerald-700 hover:to-green-500 text-white font-bold text-base uppercase tracking-wider shadow-[0_0_20px_rgba(16,185,129,0.35)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)] active:scale-98 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
        >
          <Crosshair className={`w-5 h-5 text-emerald-300 ${isHooking ? 'animate-spin' : 'group-hover:rotate-45 transition-transform'}`} />
          <span>{isHooking ? 'Тянем крюк...' : 'Подобрать контр'}</span>
        </button>
      </div>

      {/* Quick hero selector chips */}
      <div className="mt-4 flex flex-wrap items-center gap-1.5">
        <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mr-1">
          Быстрый выбор:
        </span>
        {QUICK_HEROES.map((hero) => (
          <button
            key={hero}
            type="button"
            onClick={() => onSelectQuickHero(hero)}
            className="text-xs font-medium px-2.5 py-1 rounded-full bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-700/60 hover:border-amber-500/80 text-zinc-300 hover:text-white transition cursor-pointer"
          >
            {hero}
          </button>
        ))}
      </div>

      {/* Role filter tab selector */}
      <div className="mt-4 pt-3 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide">
          Фильтр по роли контрпика:
        </span>
        <div className="flex flex-wrap gap-1.5">
          {ROLES.map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setSelectedRole(role)}
              className={`text-xs font-bold px-3 py-1 rounded transition cursor-pointer ${
                selectedRole === role
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'bg-zinc-800/80 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700/80 border border-zinc-700/40'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
