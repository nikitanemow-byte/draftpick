export type HeroRole = 'Керри' | 'Мид' | 'Оффлейн' | 'Саппорт';
export type HeroAttribute = 'str' | 'agi' | 'int' | 'all';

export interface CounterpickItem {
  heroId: string;
  heroName: string;
  role: HeroRole;
  explanation: string;
  keyItems: string[];
  gameplayTip: string;
  weight: number;
}

export interface HeroData {
  id: string;
  nameEn: string;
  nameRu: string;
  aliases: string[];
  primaryAttr: HeroAttribute;
  typicalRoles: HeroRole[];
  counters: CounterpickItem[];
}

export interface HeroMatchResult {
  heroNameRu: string;
  heroNameEn: string;
  counters: CounterpickItem[];
}

