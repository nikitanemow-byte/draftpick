import React, { useState, useEffect, useMemo } from 'react';
import { PudgeHeader } from './components/PudgeHeader';
import { HeroInputBar } from './components/HeroInputBar';
import { CounterpickCard } from './components/CounterpickCard';
import { ConceptModal } from './components/ConceptModal';
import { HeroRosterGrid } from './components/HeroRosterGrid';
import { findHeroByQuery, calculateCounterpicks } from './data/dotaHeroes';
import { PUDGE_QUOTES, playHookSound } from './data/pudgeVoice';
import { CounterpickItem, HeroRole, HeroData } from './types';
import { ShieldAlert, Trophy, Flame } from 'lucide-react';

export default function App() {
  const [query, setQuery] = useState<string>('Phantom Assassin, Sniper');
  const [selectedRole, setSelectedRole] = useState<HeroRole | 'Все роли'>('Все роли');
  const [pudgeQuote, setPudgeQuote] = useState<string>(
    '«Хе-хе, здорово, мясо! Выкладывай, кого там пикнули супостаты, сейчас я их разделаю на порции!»'
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [identifiedHeroes, setIdentifiedHeroes] = useState<HeroData[]>([]);
  const [isHooking, setIsHooking] = useState<boolean>(false);
  const [conceptModalOpen, setConceptModalOpen] = useState<boolean>(false);

  // Compute counterpicks using the intelligent Dota 2 counterpick aggregator
  const counterpickResults: CounterpickItem[] = useMemo(() => {
    return calculateCounterpicks(identifiedHeroes, selectedRole);
  }, [identifiedHeroes, selectedRole]);

  const executeCounterSearch = (searchQuery: string) => {
    const raw = searchQuery.trim();
    setErrorMessage(null);

    if (!raw) {
      setErrorMessage('Эй, салага! Введи хотя бы одного вражеского героя (от 1 до 5), Пудж не может хукать пустоту!');
      setPudgeQuote(PUDGE_QUOTES.empty[0]);
      setIdentifiedHeroes([]);
      return;
    }

    const tokens = raw.split(',').map(s => s.trim()).filter(Boolean);

    if (tokens.length > 5) {
      setErrorMessage(`Врагов максимум 5, а ты навалил ${tokens.length}! Сократи список до 5 героев.`);
      setPudgeQuote(PUDGE_QUOTES.too_many[0]);
      setIdentifiedHeroes([]);
      return;
    }

    const matched: HeroData[] = [];
    const unknown: string[] = [];

    tokens.forEach(token => {
      const hero = findHeroByQuery(token);
      if (hero) {
        if (!matched.some(m => m.id === hero.id)) {
          matched.push(hero);
        }
      } else {
        unknown.push(token);
      }
    });

    if (unknown.length > 0) {
      setErrorMessage(`Не удалось опознать героя: «${unknown[0]}». Проверь правописание (например: Sniper, PA, Pudge, Morphling) или кликни героя в каталоге ниже.`);
      setPudgeQuote(PUDGE_QUOTES.unknown(unknown[0]));
      setIdentifiedHeroes([]);
      return;
    }

    // Trigger hooking animation and audio
    setIsHooking(true);
    playHookSound();

    setTimeout(() => {
      setIsHooking(false);
      setIdentifiedHeroes(matched);
      setPudgeQuote(
        '«Крюком тебя! Этот пик — мой ужин! Вот тебе лучшие контрпики со всеми механиками под мету, забирай и побеждай!»'
      );
    }, 400);
  };

  const handleQuickSelectHero = (heroName: string) => {
    setQuery(heroName);
    executeCounterSearch(heroName);
  };

  const handleToggleRosterHero = (hero: HeroData) => {
    setErrorMessage(null);
    const alreadySelected = identifiedHeroes.some(h => h.id === hero.id);

    if (alreadySelected) {
      const next = identifiedHeroes.filter(h => h.id !== hero.id);
      setIdentifiedHeroes(next);
      setQuery(next.map(h => h.nameEn).join(', '));
      if (next.length === 0) {
        setPudgeQuote('«Пусто на разделочном столе! Выбирай супостатов из списка ниже или вводи имена!»');
      } else {
        setPudgeQuote(`«Убрали ${hero.nameRu}. Осталось целей: ${next.length}!»`);
      }
    } else {
      if (identifiedHeroes.length >= 5) {
        setErrorMessage('В пике максимум 5 героев! Удали кого-нибудь из слотов выше перед добавлением нового.');
        return;
      }
      const next = [...identifiedHeroes, hero];
      setIdentifiedHeroes(next);
      setQuery(next.map(h => h.nameEn).join(', '));
      playHookSound();
      setPudgeQuote(`«Ага, ${hero.nameRu}! Иди сюда, сладенький! Готовлю контрпики...»`);
    }
  };

  const handleClearHeroes = () => {
    setIdentifiedHeroes([]);
    setQuery('');
    setErrorMessage(null);
    setPudgeQuote('«Очистили мясницкий стол! Выбирай кого угодно из всех 125 героев Dota 2 ниже!»');
  };

  const handleCalculateFromRoster = () => {
    if (identifiedHeroes.length === 0) {
      setErrorMessage('Выбери хотя бы одного героя из каталога ниже!');
      return;
    }
    executeCounterSearch(identifiedHeroes.map(h => h.nameEn).join(', '));
    // Scroll smoothly to results
    const el = document.getElementById('counterpick-results-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    executeCounterSearch(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#080a0c] text-zinc-100 relative overflow-x-hidden flex flex-col justify-between selection:bg-red-900 selection:text-white">
      {/* Ambient background glows: Radiant Crimson (top-left) and Dire Emerald (bottom-right) */}
      <div className="fixed top-0 left-0 w-[550px] h-[550px] bg-red-600/10 rounded-full blur-[140px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="fixed top-1/3 right-0 w-[550px] h-[550px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none translate-x-1/3" />
      <div className="fixed bottom-0 left-1/4 w-[600px] h-[400px] bg-amber-600/5 rounded-full blur-[130px] pointer-events-none" />

      {/* Subtle backdrop overlay with the generated concept art */}
      <div
        className="fixed inset-0 pointer-events-none opacity-15 bg-cover bg-center mix-blend-luminosity"
        style={{ backgroundImage: `url('/pudge_concept.jpg')` }}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 py-8 sm:py-12">
        {/* Pudge Header & Persona Speech */}
        <PudgeHeader
          currentQuote={pudgeQuote}
          onOpenConcept={() => setConceptModalOpen(true)}
        />

        {/* Hero Input Search Panel */}
        <HeroInputBar
          query={query}
          setQuery={setQuery}
          onSearch={() => executeCounterSearch(query)}
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          onSelectQuickHero={handleQuickSelectHero}
          isHooking={isHooking}
        />

        {/* Error message notification if input is empty or invalid */}
        {errorMessage && (
          <div className="mb-8 p-4 rounded-lg bg-red-950/80 border border-red-600/80 text-red-200 flex items-start gap-3 shadow-lg animate-shake">
            <ShieldAlert className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-300 mb-0.5 uppercase tracking-wide text-xs">
                Ошибка мясника
              </h4>
              <p className="text-sm font-medium">{errorMessage}</p>
            </div>
          </div>
        )}

        {/* Identified Enemy Team preview */}
        {identifiedHeroes.length > 0 && (
          <div className="mb-6 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-1.5">
              <Flame className="w-4 h-4 text-red-500" />
              Цели для хука ({identifiedHeroes.length}/5):
            </span>
            {identifiedHeroes.map(h => (
              <span
                key={h.id}
                className="px-3 py-1 rounded bg-red-950/40 border border-red-700/60 text-red-300 font-semibold text-xs uppercase tracking-wide flex items-center gap-1.5"
              >
                <span>{h.nameRu}</span>
                <button
                  onClick={() => handleToggleRosterHero(h)}
                  className="hover:text-white transition cursor-pointer"
                  title="Удалить из списка"
                >
                  ×
                </button>
              </span>
            ))}
          </div>
        )}

        {/* Top-3 Counterpick Results Block */}
        <section id="counterpick-results-section" className="mb-12">
          <div className="flex items-center justify-between gap-4 mb-6 border-b border-zinc-800 pb-3">
            <div className="flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-400" />
              <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-white">
                Топ-3 контрпика для текущей меты
              </h2>
            </div>
            <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider hidden sm:inline-block">
              {selectedRole === 'Все роли' ? 'Разнообразие ролей' : `Только ${selectedRole}`}
            </span>
          </div>

          {counterpickResults.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {counterpickResults.map((counter, idx) => (
                <CounterpickCard
                  key={`${counter.heroId}-${idx}`}
                  counter={counter}
                  rank={idx + 1}
                />
              ))}
            </div>
          ) : (
            !errorMessage && (
              <div className="text-center py-12 px-4 rounded-lg bg-zinc-900/60 border border-zinc-800 text-zinc-400">
                <p className="text-base font-medium">
                  Под выбранную роль «{selectedRole}» не найдено прямых контрпиков против указанных героев.
                </p>
                <button
                  onClick={() => setSelectedRole('Все роли')}
                  className="mt-3 text-xs font-bold uppercase tracking-wider text-amber-400 hover:underline cursor-pointer"
                >
                  Сбросить фильтр на «Все роли»
                </button>
              </div>
            )
          )}
        </section>

        {/* Full Dota 2 Hero Roster (All 125 heroes) - Replaces the Beget tutorial */}
        <HeroRosterGrid
          selectedHeroes={identifiedHeroes}
          onToggleHero={handleToggleRosterHero}
          onClearHeroes={handleClearHeroes}
          onCalculateCounters={handleCalculateFromRoster}
        />
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/80 bg-black/40 py-6 text-center text-xs text-zinc-500">
        <p>
          Dota 2 Counterpick Assistant • Каталог всех 125 героев • Экспертная тактика и механики Пуджа
        </p>
      </footer>

      {/* Modals */}
      <ConceptModal
        isOpen={conceptModalOpen}
        onClose={() => setConceptModalOpen(false)}
      />
    </div>
  );
}

