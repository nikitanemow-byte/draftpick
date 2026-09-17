import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface ConceptModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConceptModal: React.FC<ConceptModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-700/80 rounded-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-900/60">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg font-bold text-white uppercase tracking-wider">
              Концепт главной страницы Dota 2 (16:9)
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="relative rounded-lg overflow-hidden border border-zinc-700/60 shadow-2xl bg-black">
            <img
              src="/pudge_concept.jpg"
              alt="Dota 2 Counterpick Assistant Concept Art"
              className="w-full h-auto aspect-video object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="bg-zinc-900/70 border border-zinc-800 rounded-lg p-4 text-sm text-zinc-300 leading-relaxed">
            <p className="font-bold text-amber-400 uppercase tracking-wide mb-1">
              О концепте визуального оформления:
            </p>
            <p>
              Официальный мрачно-эпичный стиль Dota 2: глубокий темный фон, светящиеся акценты Radiant (багрово-красный) и Dire (ядовито-зеленый), Пудж с крюком и полупрозрачные карточки контрпиков с золотистым HUD-обрамлением.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-zinc-800 bg-zinc-900/40 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-semibold transition cursor-pointer"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
