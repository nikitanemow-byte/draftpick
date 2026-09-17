import React, { useState, useMemo } from 'react';
import { HeroData, HeroAttribute, HeroRole } from '../types';
import { DOTA_HEROES } from '../data/dotaHeroes';
import { Search, Plus, Check, X, Shield, Swords, Zap, Sparkles, Filter } from 'lucide-react';

interface HeroRosterGridProps {
  selectedHeroes: HeroData[];
  onToggleHero: (hero: HeroData) => void;
  onClearHeroes: () => void;
  onCalculateCounters: () => void;
}

const ALL_HEROES = Object.values(DOTA_HEROES);

export const HeroRosterGrid: React.FC<HeroRosterGridProps> = ({
  selectedHeroes,
  onToggleHero,
  onClearHeroes,
  onCalculateCounters
}) => {
  const [attrFilter, setAttrFilter] = useState<HeroAttribute | 'all_attrs'>('all_attrs');
  const [roleFilter, setRoleFilter] = useState<HeroRole | 'all_roles'>('all_roles');
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Selected hero IDs for instant lookup
  const selectedIds = useMemo(() => new Set(selectedHeroes.map(h => h.id)), [selectedHeroes]);

  // Counts by attribute
  const attrCounts = useMemo(() => {
    return {
      total: ALL_HEROES.length,
      str: ALL_HEROES.filter(h => h.primaryAttr === 'str').length,
      agi: ALL_HEROES.filter(h => h.primaryAttr === 'agi').length,
      int: ALL_HEROES.filter(h => h.primaryAttr === 'int').length,
      all: ALL_HEROES.filter(h => h.primaryAttr === 'all').length,
    };
  }, []);

  // Filtered heroes
  const filteredHeroes = useMemo(() => {
    const cleanSearch = searchTerm.trim().toLowerCase();

    return ALL_HEROES.filter(hero => {
      // Attribute filter
      if (attrFilter !== 'all_attrs' && hero.primaryAttr !== attrFilter) {
        return false;
      }

      // Role filter
      if (roleFilter !== 'all_roles' && !hero.typicalRoles.includes(roleFilter)) {
        return false;
      }

      // Search term
      if (cleanSearch) {
        const matchesName = hero.nameRu.toLowerCase().includes(cleanSearch) ||
          hero.nameEn.toLowerCase().includes(cleanSearch);
        const matchesAlias = hero.aliases.some(a => a.toLowerCase().includes(cleanSearch));
        if (!matchesName && !matchesAlias) return false;
      }

      return true;
    });
  }, [attrFilter, roleFilter, searchTerm]);

  const getAttrMeta = (attr: HeroAttribute) => {
    switch (attr) {
      case 'str':
        return {
          label: 'Сила',
          color: 'text-red-400',
          border: 'border-red-600/60',
          bg: 'bg-red-950/40',
          badge: 'bg-red-900/60 text-red-300 border-red-700/60',
          icon: Shield,
        };
      case 'agi':
        return {
          label: 'Ловкость',
          color: 'text-emerald-400',
          border: 'border-emerald-600/60',
          bg: 'bg-emerald-950/40',
          badge: 'bg-emerald-900/60 text-emerald-300 border-emerald-700/60',
          icon: Swords,
        };
      case 'int':
        return {
          label: 'Интеллект',
          color: 'text-sky-400',
          border: 'border-sky-600/60',
          bg: 'bg-sky-950/40',
          badge: 'bg-sky-900/60 text-sky-300 border-sky-700/60',
          icon: Zap,
        };
      case 'all':
        return {
          label: 'Универсал',
          color: 'text-amber-400',
          border: 'border-amber-600/60',
          bg: 'bg-amber-950/40',
          badge: 'bg-amber-900/60 text-amber-300 border-amber-700/60',
          icon: Sparkles,
        };
    }
  };

  return (
    <section id="full-hero-roster" className="mt-12 mb-10">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-6 border-b border-zinc-800">
        <div>
          <div className="flex items-center gap-2">
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
              Все герои Dota 2
            </h2>
            <span className="px-2.5 py-0.5 rounded bg-amber-500/20 text-amber-400 text-xs font-bold border border-amber-500/40">
              {ALL_HEROES.length} героев
            </span>
          </div>
          <p className="text-xs sm:text-sm text-zinc-400 mt-1">
            Кликни на героя, чтобы добавить его во вражеский пик (до 5 героев), или найди любого героя по поиску.
          </p>
        </div>

        {/* Selected team action bar */}
        {selectedHeroes.length > 0 && (
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button
              onClick={onCalculateCounters}
              className="px-4 py-2 rounded bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-600 hover:to-green-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition cursor-pointer flex items-center gap-1.5"
            >
              <span>Контрпикнуть врагов</span>
              <span className="w-5 h-5 rounded-full bg-black/40 text-emerald-300 text-xs flex items-center justify-center font-black">
                {selectedHeroes.length}
              </span>
            </button>
            <button
              onClick={onClearHeroes}
              className="px-3 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white text-xs font-semibold transition cursor-pointer"
              title="Очистить выбранных героев"
            >
              Сброс
            </button>
          </div>
        )}
      </div>

      {/* Selected Enemy Squad Slots (up to 5) */}
      <div className="mb-6 p-4 rounded-lg bg-zinc-900/80 border border-zinc-800/80 shadow-inner">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Выбранный вражеский состав ({selectedHeroes.length}/5):
          </span>
          {selectedHeroes.length === 5 && (
            <span className="text-xs text-amber-400 font-semibold">
              Полный состав (5/5)
            </span>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
          {[0, 1, 2, 3, 4].map((slotIdx) => {
            const hero = selectedHeroes[slotIdx];
            if (hero) {
              const meta = getAttrMeta(hero.primaryAttr);
              return (
                <div
                  key={hero.id}
                  className={`relative p-2.5 rounded border ${meta.border} ${meta.bg} flex items-center justify-between gap-2 group transition`}
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-7 h-7 rounded bg-zinc-900 border border-zinc-700 flex items-center justify-center text-xs font-black text-amber-400 flex-shrink-0">
                      {hero.nameEn.slice(0, 2).toUpperCase()}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white truncate">
                        {hero.nameEn}
                      </p>
                      <p className="text-[10px] text-zinc-400 truncate">
                        {meta.label}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => onToggleHero(hero)}
                    className="p-1 rounded hover:bg-red-900/80 text-zinc-400 hover:text-red-200 transition cursor-pointer flex-shrink-0"
                    title="Удалить из пика"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            }
            return (
              <div
                key={`empty-slot-${slotIdx}`}
                className="p-2.5 rounded border border-dashed border-zinc-800 bg-zinc-950/40 text-center flex flex-col items-center justify-center min-h-[52px]"
              >
                <span className="text-[11px] font-medium text-zinc-600 uppercase tracking-wide">
                  Слот #{slotIdx + 1}
                </span>
                <span className="text-[10px] text-zinc-700">
                  Кликни героя ниже
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Filter and Search Controls */}
      <div className="bg-zinc-900/90 border border-zinc-800 rounded-lg p-4 mb-6 space-y-4">
        {/* Search input */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Быстрый поиск героя (например: Pudge, Мортра, AM, Invoker, Снайпер, Тракса)..."
            className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/80 rounded pl-10 pr-4 py-2.5 text-sm text-white placeholder-zinc-500 outline-none transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-2 border-t border-zinc-800/80">
          {/* Attribute filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mr-1 flex items-center gap-1">
              <Filter className="w-3 h-3 text-amber-400" />
              Атрибут:
            </span>
            <button
              onClick={() => setAttrFilter('all_attrs')}
              className={`px-3 py-1 rounded text-xs font-bold transition cursor-pointer ${
                attrFilter === 'all_attrs'
                  ? 'bg-amber-500 text-black shadow-md'
                  : 'bg-zinc-800/80 text-zinc-400 hover:text-white'
              }`}
            >
              Все ({attrCounts.total})
            </button>
            <button
              onClick={() => setAttrFilter('str')}
              className={`px-3 py-1 rounded text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                attrFilter === 'str'
                  ? 'bg-red-700 text-white shadow-md'
                  : 'bg-red-950/30 text-red-300 hover:bg-red-900/40 border border-red-800/40'
              }`}
            >
              <Shield className="w-3 h-3 text-red-400" />
              Сила ({attrCounts.str})
            </button>
            <button
              onClick={() => setAttrFilter('agi')}
              className={`px-3 py-1 rounded text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                attrFilter === 'agi'
                  ? 'bg-emerald-700 text-white shadow-md'
                  : 'bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40 border border-emerald-800/40'
              }`}
            >
              <Swords className="w-3 h-3 text-emerald-400" />
              Ловкость ({attrCounts.agi})
            </button>
            <button
              onClick={() => setAttrFilter('int')}
              className={`px-3 py-1 rounded text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                attrFilter === 'int'
                  ? 'bg-sky-700 text-white shadow-md'
                  : 'bg-sky-950/30 text-sky-300 hover:bg-sky-900/40 border border-sky-800/40'
              }`}
            >
              <Zap className="w-3 h-3 text-sky-400" />
              Интеллект ({attrCounts.int})
            </button>
            <button
              onClick={() => setAttrFilter('all')}
              className={`px-3 py-1 rounded text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                attrFilter === 'all'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-amber-950/30 text-amber-300 hover:bg-amber-900/40 border border-amber-800/40'
              }`}
            >
              <Sparkles className="w-3 h-3 text-amber-400" />
              Универсал ({attrCounts.all})
            </button>
          </div>

          {/* Role filter tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wide mr-1">
              Роль:
            </span>
            {(['all_roles', 'Керри', 'Мид', 'Оффлейн', 'Саппорт'] as const).map(role => (
              <button
                key={role}
                onClick={() => setRoleFilter(role)}
                className={`px-2.5 py-1 rounded text-xs font-medium transition cursor-pointer ${
                  roleFilter === role
                    ? 'bg-zinc-200 text-black font-bold'
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {role === 'all_roles' ? 'Все роли' : role}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Grid Display */}
      {filteredHeroes.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
          {filteredHeroes.map(hero => {
            const isSelected = selectedIds.has(hero.id);
            const meta = getAttrMeta(hero.primaryAttr);
            const selectionIndex = selectedHeroes.findIndex(h => h.id === hero.id);

            return (
              <button
                key={hero.id}
                onClick={() => onToggleHero(hero)}
                className={`group relative text-left p-3 rounded-lg border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-950/40 border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.25)] ring-1 ring-amber-500/50'
                    : 'bg-zinc-900/80 border-zinc-800 hover:border-zinc-600 hover:bg-zinc-850'
                }`}
              >
                {/* Selection badge */}
                {isSelected && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-amber-500 text-black font-black text-xs flex items-center justify-center shadow-md">
                    {selectionIndex + 1}
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className={`inline-block w-2 h-2 rounded-full ${
                      hero.primaryAttr === 'str' ? 'bg-red-500' :
                      hero.primaryAttr === 'agi' ? 'bg-emerald-500' :
                      hero.primaryAttr === 'int' ? 'bg-sky-500' : 'bg-amber-400'
                    }`} />
                    <span className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider truncate">
                      {meta.label}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                    {hero.nameEn}
                  </h4>
                  <p className="text-xs text-zinc-400 truncate mt-0.5">
                    {hero.nameRu.replace(/\s*\([^)]*\)/, '')}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-zinc-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-zinc-500 truncate max-w-[90px]">
                    {hero.typicalRoles[0]}
                  </span>
                  <span className={`font-semibold flex items-center gap-0.5 ${
                    isSelected ? 'text-amber-400' : 'text-zinc-500 group-hover:text-zinc-300'
                  }`}>
                    {isSelected ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>В пике</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3 h-3" />
                        <span>Выбрать</span>
                      </>
                    )}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 px-4 rounded-lg bg-zinc-900/40 border border-zinc-800 text-zinc-400">
          <p className="text-sm font-medium">
            По запросу «{searchTerm}» героев не найдено.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setAttrFilter('all_attrs');
              setRoleFilter('all_roles');
            }}
            className="mt-3 text-xs font-bold uppercase tracking-wider text-amber-400 hover:underline cursor-pointer"
          >
            Сбросить фильтры
          </button>
        </div>
      )}
    </section>
  );
};
