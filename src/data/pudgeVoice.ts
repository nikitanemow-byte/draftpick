/**
 * Pudge Voice & Personality module
 * Authentic, gritty butcher persona offering strategic Dota 2 counter advice.
 */

export interface PudgeQuote {
  text: string;
  category: 'welcome' | 'hook_thrown' | 'success' | 'empty' | 'unknown' | 'too_many';
}

export const PUDGE_QUOTES = {
  welcome: [
    "Хе-хе, здорово, мясо! Выкладывай, кого там пикнули супостаты, сейчас я их разделаю на порции!",
    "Крюк наточен, фартук завязан. Кого из вражеской пятёрки отправить на сковородку?",
    "А-а, свежее мяско! Называй вражин — от одного до пяти, и дядя Пудж покажет, кем их контрить в щепки!"
  ],
  hook_thrown: [
    "Крюком тебя! Сейчас вытащим самые жирные контрпики из колодца!",
    "Тяну-потяну! Посмотрим, кто тут у нас на ужин!",
    "Лови цепь! Сейчас я тебе разложу по косточкам, кто их сожрёт!"
  ],
  success: [
    "Этот герой — мой ужин! Вот тебе тройка отборных мясников под разные роли, чтобы разнести вражеский трон!",
    "Ха-ха! Разложил супостатов по суставам. Забирай эту тройку контрпиков и не забывай прожимать кнопки!",
    "О-о-о да! С этой тройкой у врагов только лапки кверху полетят. Читай внимательно механики и закупай правильные шмотки!"
  ],
  empty: [
    "Эй, салага! Ты куда крюк в пустоту кидаешь? Введи хотя бы одного вражеского героя, я ж не телепат, а мясник!",
    "Пусто в котле! Напиши имена героев противника через запятую, например: Снайпер, Фантомка, Пудж!"
  ],
  unknown: (name: string) => 
    `Э-э, кого ты там назвал? «${name}»? Такого зверя в лесу Доты даже я на зуб не пробовал! Проверь правописание, мясо (например: PA, Снайпер, Морф, Инвокер).`,
  too_many: [
    "Воу-воу, притормози коней! В Доте на карте только 5 врагов, а ты мне целую армию навалил! Оставь от 1 до 5 героев, и я сделаю идеальный расклад."
  ]
};

export function playHookSound() {
  try {
    const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(150, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.35);

    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.35);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.35);
  } catch {
    // Silent audio fallback if blocked by browser autoplay policy
  }
}
