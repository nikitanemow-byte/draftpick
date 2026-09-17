import { HeroData, HeroRole, CounterpickItem } from '../types';

export const DOTA_HEROES: Record<string, HeroData> = {
  "alchemist": {
    "id": "alchemist",
    "nameEn": "Alchemist",
    "nameRu": "Алхимик",
    "aliases": [
      "алхимик",
      "alchemist",
      "алхим",
      "alch"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Керри",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "ancient_apparition",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast полностью блокирует химическую регенерацию Chemical Rage.",
        "keyItems": [
          "Spirit Vessel",
          "Blink Dagger"
        ],
        "gameplayTip": "Кидай Ice Blast в момент включения ульты Алхимика — он рассыплется без регена!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "axe": {
    "id": "axe",
    "nameEn": "Axe",
    "nameRu": "Акс",
    "aliases": [
      "акс",
      "axe",
      "могроком"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивку Counter Helix, а Viper Strike замедляет через BKB.",
        "keyItems": [
          "Dragon Lance",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию Акса — без пассивных вертушек он просто кусок мяса.",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "bristleback": {
    "id": "bristleback",
    "nameEn": "Bristleback",
    "nameRu": "Бристлбэк",
    "aliases": [
      "бристлбэк",
      "bristleback",
      "бристл",
      "ёж",
      "еж",
      "bb"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin накладывает эффект Break и выключает снижение урона со спины.",
        "keyItems": [
          "Silver Edge",
          "Dragon Lance"
        ],
        "gameplayTip": "Держи его в луже Nethertoxin и расстреливай прямо в лицо.",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "centaur_warrunner": {
    "id": "centaur_warrunner",
    "nameEn": "Centaur Warrunner",
    "nameRu": "Кентавр",
    "aliases": [
      "кентавр",
      "centaur",
      "кентавр варраннер",
      "cent"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "lifestealer",
        "heroName": "Lifestealer",
        "role": "Керри",
        "explanation": "Feast наносит процентный урон от гигантского запаса здоровья Кентавра.",
        "keyItems": [
          "Armlet",
          "Desolator"
        ],
        "gameplayTip": "Нарезай жирного коня под Rage — лечись от его гигантского пула HP.",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "chaos_knight": {
    "id": "chaos_knight",
    "nameEn": "Chaos Knight",
    "nameRu": "Хаос Найт",
    "aliases": [
      "хаос найт",
      "chaos knight",
      "цк",
      "ck",
      "хаос"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "earthshaker",
        "heroName": "Earthshaker",
        "role": "Саппорт",
        "explanation": "Echo Slam наносит колоссальный урон по толпе плотных иллюзий Phantasm.",
        "keyItems": [
          "Blink Dagger",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Жди ульты ЦК и влетай с Блинка — его же иллюзии уничтожат его команду!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "dawnbreaker": {
    "id": "dawnbreaker",
    "nameEn": "Dawnbreaker",
    "nameRu": "Даунбрейкер",
    "aliases": [
      "даунбрейкер",
      "dawnbreaker",
      "валора",
      "дб"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн",
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence сбивает каст ультимейта Solar Guardian из любой точки карты.",
        "keyItems": [
          "Force Staff",
          "Aghanim's Scepter"
        ],
        "gameplayTip": "Жди когда она начнет взлетать ультой и нажимай Global Silence!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "doom": {
    "id": "doom",
    "nameEn": "Doom",
    "nameRu": "Дум",
    "aliases": [
      "дум",
      "doom",
      "люцифер"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "wraith_king",
        "heroName": "Wraith King",
        "role": "Керри",
        "explanation": "Reincarnation нивелирует одиночный ульт Дума, давая вторую жизнь.",
        "keyItems": [
          "Armlet",
          "Desolator",
          "BKB"
        ],
        "gameplayTip": "Пусть тратит свой Doom в тебя — возродись и заколи черта!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "dragon_knight": {
    "id": "dragon_knight",
    "nameEn": "Dragon Knight",
    "nameRu": "Драгон Найт",
    "aliases": [
      "драгон найт",
      "dragon knight",
      "дк",
      "dk",
      "рыцарь"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Мид",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "timbersaw",
        "heroName": "Timbersaw",
        "role": "Оффлейн",
        "explanation": "Чистый урон пилы игнорирует броню Dragon Blood и быстро срезает силу DK.",
        "keyItems": [
          "Bloodstone",
          "Lotus Orb"
        ],
        "gameplayTip": "Нарезай дракона чистым уроном через Chakram, его броня ему не поможет!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "earth_spirit": {
    "id": "earth_spirit",
    "nameEn": "Earth Spirit",
    "nameRu": "Земляной Дух",
    "aliases": [
      "земляной дух",
      "earth spirit",
      "земеля",
      "эс",
      "es"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Любое безмолвие прерывает комбо камней и оставляет Земелю беспомощным.",
        "keyItems": [
          "Orchid Malevolence",
          "Force Staff"
        ],
        "gameplayTip": "Сайленси Земелю при попытке вкатиться камнем — он не сможет сбежать!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "earthshaker": {
    "id": "earthshaker",
    "nameEn": "Earthshaker",
    "nameRu": "Эртшейкер",
    "aliases": [
      "эртшейкер",
      "earthshaker",
      "шейкер",
      "шaker"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Саппорт",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "clockwerk",
        "heroName": "Clockwerk",
        "role": "Саппорт",
        "explanation": "Battery Assault сбивает долгие анимации каста Echo Slam и Fissure.",
        "keyItems": [
          "Blade Mail",
          "Force Staff"
        ],
        "gameplayTip": "Влетай в Шейкера Hookshot-ом — он не сможет нажать ни одну способность под батарейками!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "elder_titan": {
    "id": "elder_titan",
    "nameEn": "Elder Titan",
    "nameRu": "Элдер Титан",
    "aliases": [
      "элдер титан",
      "elder titan",
      "титан",
      "ет",
      "et"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Саппорт",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "rubick",
        "heroName": "Rubick",
        "role": "Саппорт",
        "explanation": "Echo Stomp и Earth Splitter имеют долгий каст и элементарно воруются Рубиком.",
        "keyItems": [
          "Aether Lens",
          "Blink Dagger"
        ],
        "gameplayTip": "Воруй Earth Splitter с мгновенным кастом и переворачивай файты!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "huskar": {
    "id": "huskar",
    "nameEn": "Huskar",
    "nameRu": "Хускар",
    "aliases": [
      "хускар",
      "huskar",
      "хуск"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "ancient_apparition",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast полностью блокирует лечение от Berserker's Blood и Inner Vitality.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter"
        ],
        "gameplayTip": "Один точный Ice Blast — и Хускар с 10% HP моментально разбивается на куски!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "kunkka": {
    "id": "kunkka",
    "nameEn": "Kunkka",
    "nameRu": "Кунка",
    "aliases": [
      "кунка",
      "kunkka",
      "адмирал",
      "пират"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "outworld_destroyer",
        "heroName": "Outworld Destroyer",
        "role": "Мид",
        "explanation": "Astral Imprisonment спасает от комбо корабля и креста, а ульт сжигает здоровье силовика.",
        "keyItems": [
          "Blink Dagger",
          "Pike"
        ],
        "gameplayTip": "Прячь себя или союзника в Astral в момент удара корабля Кунки!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "legion_commander": {
    "id": "legion_commander",
    "nameEn": "Legion Commander",
    "nameRu": "Легионка",
    "aliases": [
      "легионка",
      "legion commander",
      "лс",
      "lc",
      "легион"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "dazzle",
        "heroName": "Dazzle",
        "role": "Саппорт",
        "explanation": "Shallow Grave спасает союзника в дуэли, не давая Легионке получить урон.",
        "keyItems": [
          "Aether Lens",
          "Glimmer Cape"
        ],
        "gameplayTip": "Стой позади и вешай крест на цель дуэли в последний момент!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "lifestealer": {
    "id": "lifestealer",
    "nameEn": "Lifestealer",
    "nameRu": "Гуля (Lifestealer)",
    "aliases": [
      "гуля",
      "lifestealer",
      "найкс",
      "naix",
      "гуль",
      "лайфстилер"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "ursa",
        "heroName": "Ursa",
        "role": "Керри",
        "explanation": "Fury Swipes и Enrage разрывают Гулю 1 на 1 гораздо быстрее, чем он успеет отхилиться.",
        "keyItems": [
          "Diffusal Blade",
          "Blink Dagger",
          "Basher"
        ],
        "gameplayTip": "Запрыгивай на Гулю с оверпауэром — Урса перебивает его в рукопашной без шансов!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "mars": {
    "id": "mars",
    "nameEn": "Mars",
    "nameRu": "Марс",
    "aliases": [
      "марс",
      "mars"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "timbersaw",
        "heroName": "Timbersaw",
        "role": "Оффлейн",
        "explanation": "Whirling Death срезает силу Марса, а чистый урон пилы игнорирует щит Bulwark.",
        "keyItems": [
          "Bloodstone",
          "Lotus Orb"
        ],
        "gameplayTip": "Марс запирает тебя в Арене? Отлично, крути Chakram прямо внутри арены!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "night_stalker": {
    "id": "night_stalker",
    "nameEn": "Night Stalker",
    "nameRu": "Баланар (Night Stalker)",
    "aliases": [
      "баланар",
      "night stalker",
      "нс",
      "ns",
      "ночной сталкер"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "beastmaster",
        "heroName": "Beastmaster",
        "role": "Оффлейн",
        "explanation": "Hawk дает обзор на Баланара даже сквозь деревья, а Roar пробивает BKB.",
        "keyItems": [
          "Blink Dagger",
          "Helm of the Overlord"
        ],
        "gameplayTip": "Птицы Бистмастера видят ночного охотника из темноты, лишая его эффекта внезапности!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "omniknight": {
    "id": "omniknight",
    "nameEn": "Omniknight",
    "nameRu": "Омник",
    "aliases": [
      "омник",
      "omniknight",
      "омнинайт"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн",
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "shadow_demon",
        "heroName": "Shadow Demon",
        "role": "Саппорт",
        "explanation": "Demonic Purge мгновенно снимает Repel и замедляет Омника сквозь всё.",
        "keyItems": [
          "Aether Lens",
          "Aghanim's Scepter"
        ],
        "gameplayTip": "Очищай его баффы с помощью ультимейта или Nullifier!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "primal_beast": {
    "id": "primal_beast",
    "nameEn": "Primal Beast",
    "nameRu": "Примал Бист",
    "aliases": [
      "примал бист",
      "primal beast",
      "пб",
      "pb",
      "бист"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Break от Nethertoxin полностью отключает накопление зарядов Uproar.",
        "keyItems": [
          "Dragon Lance",
          "BKB"
        ],
        "gameplayTip": "Бросай Nethertoxin под ноги разъяренному зверю — без Uproar он не наносит урона!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "pudge": {
    "id": "pudge",
    "nameEn": "Pudge",
    "nameRu": "Пудж",
    "aliases": [
      "пудж",
      "pudge",
      "бучер",
      "мясник",
      "падж"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн",
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "lifestealer",
        "heroName": "Lifestealer",
        "role": "Керри",
        "explanation": "Rage игнорирует Rot, а Feast наносит гигантский урон от колоссального HP Пуджа.",
        "keyItems": [
          "Armlet",
          "Desolator"
        ],
        "gameplayTip": "Хук Пуджа — это бесплатная доставка свежего мяса для Гули!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "slardar": {
    "id": "slardar",
    "nameEn": "Slardar",
    "nameRu": "Слардар",
    "aliases": [
      "слардар",
      "slardar",
      "селедка",
      "селёдка"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "phantom_lancer",
        "heroName": "Phantom Lancer",
        "role": "Керри",
        "explanation": "Слардар — герой одной цели, он не способен справиться с ордой иллюзий.",
        "keyItems": [
          "Diffusal Blade",
          "Manta Style"
        ],
        "gameplayTip": "Размножайся вокруг рыбы — у него нет AoE чтобы найти настоящего Лансера!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "spirit_breaker": {
    "id": "spirit_breaker",
    "nameEn": "Spirit Breaker",
    "nameRu": "Баратрум",
    "aliases": [
      "баратрум",
      "spirit breaker",
      "бара",
      "сб",
      "sb",
      "корова"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн",
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "clockwerk",
        "heroName": "Clockwerk",
        "role": "Саппорт",
        "explanation": "Cogwheel и Battery Assault останавливают Charge of Darkness на подлёте.",
        "keyItems": [
          "Force Staff",
          "Eul's Scepter"
        ],
        "gameplayTip": "Ставь коги на пути разгона Бары — он врежется в шестеренки и потеряет разбег!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "sven": {
    "id": "sven",
    "nameEn": "Sven",
    "nameRu": "Свен",
    "aliases": [
      "свен",
      "sven",
      "рыцарь"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Свен под God's Strength мгновенно убивает сам себя об Berserker's Call и Blade Mail.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail"
        ],
        "gameplayTip": "Прыгай в Свена, когда он заносит свой гигантский меч под ультой!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "tidehunter": {
    "id": "tidehunter",
    "nameEn": "Tidehunter",
    "nameRu": "Тайдхантер",
    "aliases": [
      "тайдхантер",
      "tidehunter",
      "тайд",
      "арбуз"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "rubick",
        "heroName": "Rubick",
        "role": "Саппорт",
        "explanation": "Ravage украсть легче всего на свете благодаря долгой анимации каста.",
        "keyItems": [
          "Blink Dagger",
          "Aether Lens"
        ],
        "gameplayTip": "Держись на расстоянии от Ravage, воруй щупальца и запускай их обратно в лицо Тайда!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "tiny": {
    "id": "tiny",
    "nameEn": "Tiny",
    "nameRu": "Тини",
    "aliases": [
      "тини",
      "tiny",
      "камень"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Ghost Shroud спасает от физ-прокаста Тини, а Reaper's Scythe ваншотит жирный камень.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya"
        ],
        "gameplayTip": "Жми Ghost Shroud при сближении Тини, чтобы свести на нет удар бревном!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "treant_protector": {
    "id": "treant_protector",
    "nameEn": "Treant Protector",
    "nameRu": "Трент",
    "aliases": [
      "трент",
      "treant protector",
      "дерево",
      "тп"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "timbersaw",
        "heroName": "Timbersaw",
        "role": "Оффлейн",
        "explanation": "Тимбер спиливает весь лес вокруг Трента, лишая его маскировки и позиционки.",
        "keyItems": [
          "Blink Dagger",
          "Bloodstone"
        ],
        "gameplayTip": "Спиливай деревья пачками — Тренту негде будет спрятаться от мясной пилы!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "tusk": {
    "id": "tusk",
    "nameEn": "Tusk",
    "nameRu": "Туск",
    "aliases": [
      "туск",
      "tusk",
      "морж"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "meepo",
        "heroName": "Meepo",
        "role": "Мид",
        "explanation": "Snowball и одиночный Walrus Punch бессильны против сетки и взрывного урона стаи Мипо.",
        "keyItems": [
          "Blink Dagger",
          "Dragon Lance"
        ],
        "gameplayTip": "Лови Туска в сетку до того, как он закатает союзников в шар!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "underlord": {
    "id": "underlord",
    "nameEn": "Underlord",
    "nameRu": "Андерлорд",
    "aliases": [
      "андерлорд",
      "underlord",
      "питлорд",
      "атропетро"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "ursa",
        "heroName": "Ursa",
        "role": "Керри",
        "explanation": "Fury Swipes наносит растущий урон, перебивающий ауру снижения атаки Atrophy Aura.",
        "keyItems": [
          "Diffusal Blade",
          "Basher"
        ],
        "gameplayTip": "Набивай стаки Fury Swipes — даже самый толстый Андерлорд упадет за 5 ударов!",
        "weight": 9
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "undying": {
    "id": "undying",
    "nameEn": "Undying",
    "nameRu": "Андаинг",
    "aliases": [
      "андаинг",
      "undying",
      "зомби",
      "бомж"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "sniper",
        "heroName": "Sniper",
        "role": "Керри",
        "explanation": "Легко расстреливает Tombstone с огромной дистанции за 2 секунды без опасности для себя.",
        "keyItems": [
          "Dragon Lance",
          "Maelstrom"
        ],
        "gameplayTip": "Снайпер — лучший уничтожитель томбы в игре. Ломай надгробие первым делом!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "wraith_king": {
    "id": "wraith_king",
    "nameEn": "Wraith King",
    "nameRu": "ВК (Wraith King)",
    "aliases": [
      "вк",
      "wraith king",
      "леорик",
      "папич",
      "wk"
    ],
    "primaryAttr": "str",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Mana Break выжигает всю ману ВК, не давая ему возродиться с Reincarnation без аганима.",
        "keyItems": [
          "Manta Style",
          "Abyssal Blade"
        ],
        "gameplayTip": "Сжигай ману под Мантой — Леорик ляжет один раз и больше не встанет!",
        "weight": 10
      },
      {
        "heroId": "necrophos",
        "heroName": "Necrophos",
        "role": "Мид",
        "explanation": "Reaper's Scythe и Heartstopper Aura наносят колоссальный процентный урон от огромного запаса здоровья силовика.",
        "keyItems": [
          "Radiance",
          "Sange and Kaya",
          "Shiva's Guard"
        ],
        "gameplayTip": "Жди пока здоровье врага просядет до 40% и срезай косой без шансов на спасение!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "anti_mage": {
    "id": "anti_mage",
    "nameEn": "Anti-Mage",
    "nameRu": "Антимаг",
    "aliases": [
      "антимаг",
      "anti-mage",
      "am",
      "ам",
      "магина"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "legion_commander",
        "heroName": "Legion Commander",
        "role": "Оффлейн",
        "explanation": "Duel накладывает мгновенный безмолвие и не дает Антимагу блинкануться.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail"
        ],
        "gameplayTip": "Прыгай из лотара или блинка с дуэлью — АМ не успеет нажать Counterspell!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "arc_warden": {
    "id": "arc_warden",
    "nameEn": "Arc Warden",
    "nameRu": "Арк Варден",
    "aliases": [
      "арк варден",
      "arc warden",
      "арк",
      "aw"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "phantom_lancer",
        "heroName": "Phantom Lancer",
        "role": "Керри",
        "explanation": "Одиночные скиллы Spark Wraith и Flux абсолютно бесполезны против армии иллюзий.",
        "keyItems": [
          "Diffusal Blade",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Заваливай Арка копиями — его Magnetic Field не спасет от толпы в рукопашной!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "bloodseeker": {
    "id": "bloodseeker",
    "nameEn": "Bloodseeker",
    "nameRu": "Бладсикер",
    "aliases": [
      "бладсикер",
      "bloodseeker",
      "сикер",
      "бс",
      "bs"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "troll_warlord",
        "heroName": "Troll Warlord",
        "role": "Керри",
        "explanation": "Battle Trance и постоянные баши в ближнем бою разрывают Сикера на месте без движения.",
        "keyItems": [
          "BKB",
          "Satanic"
        ],
        "gameplayTip": "Если повесил Rupture — не беги, стой на месте и руби его топорами под башами!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "bounty_hunter": {
    "id": "bounty_hunter",
    "nameEn": "Bounty Hunter",
    "nameRu": "Баунти Хантер",
    "aliases": [
      "баунти хантер",
      "bounty hunter",
      "бх",
      "bh",
      "гондор"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "slardar",
        "heroName": "Slardar",
        "role": "Оффлейн",
        "explanation": "Corrosive Haze дает True Sight и срезает броню, лишая БХ шансов выжить в инвизе.",
        "keyItems": [
          "Blink Dagger",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Вешай ульт на БХ как только он выйдет из инвиза — он больше не скроется!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "clinkz": {
    "id": "clinkz",
    "nameEn": "Clinkz",
    "nameRu": "Клинкз",
    "aliases": [
      "клинкз",
      "clinkz",
      "боник"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "bounty_hunter",
        "heroName": "Bounty Hunter",
        "role": "Саппорт",
        "explanation": "Track подсвечивает Клинкза сквозь Skeleton Walk и дает золото всей команде.",
        "keyItems": [
          "Dust of Appearance",
          "Solar Crest"
        ],
        "gameplayTip": "Вешай Track заранее, чтобы Клинкз не мог безнаказанно выходить из засады!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "drow_ranger": {
    "id": "drow_ranger",
    "nameEn": "Drow Ranger",
    "nameRu": "Тракса (Drow Ranger)",
    "aliases": [
      "тракса",
      "drow ranger",
      "дроу",
      "dr"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "phantom_assassin",
        "heroName": "Phantom Assassin",
        "role": "Керри",
        "explanation": "Phantom Strike мгновенно сокращает дистанцию, полностью отключая Marksmanship.",
        "keyItems": [
          "Blink Dagger",
          "BKB",
          "Desolator"
        ],
        "gameplayTip": "Прыгай на Траксу вплотную — вблизи она теряет всю свою бонусную ловкость и урон!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "ember_spirit": {
    "id": "ember_spirit",
    "nameEn": "Ember Spirit",
    "nameRu": "Эмбер Спирит",
    "aliases": [
      "эмбер спирит",
      "ember spirit",
      "эмбер",
      "ember"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Любой сайленс не дает Эмберу улететь на ремнант из драки.",
        "keyItems": [
          "Orchid Malevolence",
          "Scythe of Vyse"
        ],
        "gameplayTip": "Кидай Global Silence или Orchid прямо в момент каста Sleight of Fist!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "faceless_void": {
    "id": "faceless_void",
    "nameEn": "Faceless Void",
    "nameRu": "Войд (Faceless Void)",
    "aliases": [
      "войд",
      "faceless void",
      "fv",
      "купол"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "shadow_demon",
        "heroName": "Shadow Demon",
        "role": "Саппорт",
        "explanation": "Disruption спасает жертву внутри Chronosphere с безопасного расстояния.",
        "keyItems": [
          "Aether Lens",
          "Glimmer Cape"
        ],
        "gameplayTip": "Стой далеко сзади: когда Войд поставит купол, прячь тиммейта в астрал!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "gyrocopter": {
    "id": "gyrocopter",
    "nameEn": "Gyrocopter",
    "nameRu": "Гирокоптер",
    "aliases": [
      "гирокоптер",
      "gyrocopter",
      "гиро",
      "вертолет"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "juggernaut",
        "heroName": "Juggernaut",
        "role": "Керри",
        "explanation": "Blade Fury дает полную неуязвимость к магическому прокасту ракет и Call Down.",
        "keyItems": [
          "Manta Style",
          "Diffusal Blade"
        ],
        "gameplayTip": "Крутись в Blade Fury — весь залп ракет и ульт Гиро пройдут мимо!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "hoodwink": {
    "id": "hoodwink",
    "nameEn": "Hoodwink",
    "nameRu": "Худвинк",
    "aliases": [
      "худвинк",
      "hoodwink",
      "белка"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "spirit_breaker",
        "heroName": "Spirit Breaker",
        "role": "Оффлейн",
        "explanation": "Charge of Darkness выслеживает белку сквозь деревья и сбивает каст ульты.",
        "keyItems": [
          "Shadow Blade",
          "BKB"
        ],
        "gameplayTip": "Бара летит прямо сквозь заросли и втаптывает хрупкую белку в землю!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "juggernaut": {
    "id": "juggernaut",
    "nameEn": "Juggernaut",
    "nameRu": "Джаггернаут",
    "aliases": [
      "джаггернаут",
      "juggernaut",
      "джаггер",
      "юрнеро"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call останавливает крутилку и Blade Fury сквозь иммунитет к магии.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail"
        ],
        "gameplayTip": "Агри Джаггера прямо во время вертушки — контроль сквозь BKB решает!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "kez": {
    "id": "kez",
    "nameEn": "Kez",
    "nameRu": "Кез",
    "aliases": [
      "кез",
      "kez",
      "птица",
      "самурай"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "disruptor",
        "heroName": "Disruptor",
        "role": "Саппорт",
        "explanation": "Static Storm и Kinetic Field закрывают мобильного самурая и не дают переключать стойки.",
        "keyItems": [
          "Aghanim's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Лови Кеза в поле и вешай ульт с аганимом — без способностей он моментально погибнет!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "luna": {
    "id": "luna",
    "nameEn": "Luna",
    "nameRu": "Луна",
    "aliases": [
      "луна",
      "luna"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "blade_mail_carriers",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Ульт Eclipse и рикошеты Moon Glaives мгновенно уничтожают Луну об Blade Mail.",
        "keyItems": [
          "Blade Mail",
          "Blink Dagger"
        ],
        "gameplayTip": "Влетай в Луну под включенным Blade Mail — её же лучи убьют её за доли секунды!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "medusa": {
    "id": "medusa",
    "nameEn": "Medusa",
    "nameRu": "Медуза",
    "aliases": [
      "медуза",
      "medusa",
      "дуза"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Mana Break моментально сжигает щит Mana Shield, а ульт взрывает всю команду.",
        "keyItems": [
          "Manta Style",
          "Abyssal Blade"
        ],
        "gameplayTip": "Сжигай ману копиями под Мантой — пустая Медуза умирает за пару тычек!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "meepo": {
    "id": "meepo",
    "nameEn": "Meepo",
    "nameRu": "Мипо",
    "aliases": [
      "мипо",
      "meepo",
      "геомансер"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "earthshaker",
        "heroName": "Earthshaker",
        "role": "Саппорт",
        "explanation": "Echo Slam от 4-5 клонов Мипо наносит смертельный урон и ваншотит клонов.",
        "keyItems": [
          "Blink Dagger",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Прыгай прямо в толпу клонов с Блинка — эхо-слэм разнесет Мипо на молекулы!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "monkey_king": {
    "id": "monkey_king",
    "nameEn": "Monkey King",
    "nameRu": "Манки Кинг",
    "aliases": [
      "манки кинг",
      "monkey king",
      "мк",
      "mk",
      "обезьяна"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "timbersaw",
        "heroName": "Timbersaw",
        "role": "Оффлейн",
        "explanation": "Спиливает дерево под Манки Кингом, оглушая его на целых 4 секунды.",
        "keyItems": [
          "Bloodstone",
          "Blink Dagger"
        ],
        "gameplayTip": "Руби деревья, на которых сидит обезьяна — 4 секунды стана гарантируют его смерть!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "morphling": {
    "id": "morphling",
    "nameEn": "Morphling",
    "nameRu": "Морфлинг",
    "aliases": [
      "морфлинг",
      "morphling",
      "морф"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "ancient_apparition",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast полностью блокирует перекачку в силу, обрекая Морфа на смерть.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter"
        ],
        "gameplayTip": "Попади Ice Blast-ом — Морф не сможет перекачаться в силу и мгновенно расколется!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "naga_siren": {
    "id": "naga_siren",
    "nameEn": "Naga Siren",
    "nameRu": "Нага Сирена",
    "aliases": [
      "нага сирена",
      "naga siren",
      "нага",
      "русалка"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "leshrac",
        "heroName": "Leshrac",
        "role": "Мид",
        "explanation": "Pulse Nova и Diabolic Edict быстро сжигают все иллюзии Наги за пару секунд.",
        "keyItems": [
          "Bloodstone",
          "Shiva's Guard"
        ],
        "gameplayTip": "Включай ульт и стой посреди иллюзий — вампиризм от Бладстоуна сделает тебя бессмертным!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "phantom_assassin": {
    "id": "phantom_assassin",
    "nameEn": "Phantom Assassin",
    "nameRu": "Фантомка",
    "aliases": [
      "фантомка",
      "phantom assassin",
      "па",
      "pa",
      "мортра"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB, а криты Мортры убивают её же об Blade Mail.",
        "keyItems": [
          "Blade Mail",
          "Blink Dagger"
        ],
        "gameplayTip": "Прыгай на Мортру, когда она заходит в бой — она убьет себя об твою броню!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "phantom_lancer": {
    "id": "phantom_lancer",
    "nameEn": "Phantom Lancer",
    "nameRu": "Фантом Лансер",
    "aliases": [
      "фантом лансер",
      "phantom lancer",
      "пл",
      "pl",
      "лансер"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "earthshaker",
        "heroName": "Earthshaker",
        "role": "Саппорт",
        "explanation": "Echo Slam мгновенно превращает сотни иллюзий Лансера в колоссальный взрыв.",
        "keyItems": [
          "Blink Dagger",
          "Shiva's Guard"
        ],
        "gameplayTip": "Один правильный Blink + Echo Slam в скопление копий — и Лансера нет в живых!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "razor": {
    "id": "razor",
    "nameEn": "Razor",
    "nameRu": "Разор",
    "aliases": [
      "разор",
      "razor"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "weaver",
        "heroName": "Weaver",
        "role": "Керри",
        "explanation": "Time Lapse сбрасывает Static Link, а Shukuchi позволяет мгновенно разорвать связь.",
        "keyItems": [
          "Linken's Sphere",
          "Desolator"
        ],
        "gameplayTip": "Когда Разор привязался к тебе лучом — жми Shukuchi или сбрасывай ультимейтом!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "riki": {
    "id": "riki",
    "nameEn": "Riki",
    "nameRu": "Рики",
    "aliases": [
      "рики",
      "riki",
      "крыса"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри",
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "slardar",
        "heroName": "Slardar",
        "role": "Оффлейн",
        "explanation": "Corrosive Haze дает невидимому Рики вечный True Sight и уничтожает его низкую броню.",
        "keyItems": [
          "Blink Dagger",
          "Force Staff"
        ],
        "gameplayTip": "Не жалей дастов и вешай ульт Слардара — без инвиза Рики легкий фраг!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "shadow_fiend": {
    "id": "shadow_fiend",
    "nameEn": "Shadow Fiend",
    "nameRu": "Шадоу Финд",
    "aliases": [
      "шадоу финд",
      "shadow fiend",
      "сф",
      "sf",
      "невермор"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "tinker",
        "heroName": "Tinker",
        "role": "Мид",
        "explanation": "Лазер накладывает 100% промах физ-атакам, а взрывной урон сжигает тонкого СФа.",
        "keyItems": [
          "Blink Dagger",
          "Scythe of Vyse"
        ],
        "gameplayTip": "Ослепляй СФа лазером, чтобы он не мог восстанавливать урон атаками!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "slark": {
    "id": "slark",
    "nameEn": "Slark",
    "nameRu": "Сларк",
    "aliases": [
      "сларк",
      "slark",
      "рыба"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "bloodseeker",
        "heroName": "Bloodseeker",
        "role": "Керри",
        "explanation": "Thirst видит Сларка на низком HP, полностью отключая его пассивный реген Shadow Dance.",
        "keyItems": [
          "Radiance",
          "BKB"
        ],
        "gameplayTip": "Сикер — главный кошмар Сларка. Твой пассивный вижен не дает рыбе отхилиться в темноте!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "sniper": {
    "id": "sniper",
    "nameEn": "Sniper",
    "nameRu": "Снайпер",
    "aliases": [
      "снайпер",
      "sniper",
      "дед",
      "кардел"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "spectre",
        "heroName": "Spectre",
        "role": "Керри",
        "explanation": "Haunt мгновенно призывает иллюзию прямо за спину Снайпера из любой точки карты.",
        "keyItems": [
          "Blade Mail",
          "Manta Style",
          "Abyssal Blade"
        ],
        "gameplayTip": "Снайпер прячется сзади? Жми Haunt, влетай к нему за спину и нарезай в ближнем бою!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "spectre": {
    "id": "spectre",
    "nameEn": "Spectre",
    "nameRu": "Спектра",
    "aliases": [
      "спектра",
      "spectre",
      "меркуриал"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивку Dispersion, лишая Спектру выживаемости и отражения урона.",
        "keyItems": [
          "Silver Edge",
          "Dragon Lance"
        ],
        "gameplayTip": "Кидай Nethertoxin под ноги Спектре — без Dispersion она рассыпается моментально!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "templar_assassin": {
    "id": "templar_assassin",
    "nameEn": "Templar Assassin",
    "nameRu": "Темпларка",
    "aliases": [
      "темпларка",
      "templar assassin",
      "та",
      "ta",
      "ланая"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "venomancer",
        "heroName": "Venomancer",
        "role": "Саппорт",
        "explanation": "Яд от пассивки и ульты мгновенно сбивает все слои Refraction за доли секунды.",
        "keyItems": [
          "Spirit Vessel",
          "Force Staff"
        ],
        "gameplayTip": "Плюй ядом в Ланаю — её щиты Refraction спадут еще до начала основной драки!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "terrorblade": {
    "id": "terrorblade",
    "nameEn": "Terrorblade",
    "nameRu": "Террорблейд",
    "aliases": [
      "террорблейд",
      "terrorblade",
      "тб",
      "tb"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "tinker",
        "heroName": "Tinker",
        "role": "Мид",
        "explanation": "Чистый урон Laser игнорирует гигантскую броню ТБ и ослепляет его иллюзии промахом.",
        "keyItems": [
          "Blink Dagger",
          "Shiva's Guard"
        ],
        "gameplayTip": "Террорблейд страдает от чистого и магического урона — не давай ему подойти для Sunder!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "troll_warlord": {
    "id": "troll_warlord",
    "nameEn": "Troll Warlord",
    "nameRu": "Тролль",
    "aliases": [
      "тролль",
      "troll warlord",
      "тролль варлорд"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Во время Battle Trance Тролль бьет с бешеной скоростью и мгновенно умирает об Blade Mail.",
        "keyItems": [
          "Blade Mail",
          "Blink Dagger"
        ],
        "gameplayTip": "Агри Тролля когда он включает ульт — он не сможет сменить цель и убьет сам себя!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "ursa": {
    "id": "ursa",
    "nameEn": "Ursa",
    "nameRu": "Урса",
    "aliases": [
      "урса",
      "ursa",
      "мишка",
      "ульфсаар"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "razor",
        "heroName": "Razor",
        "role": "Керри",
        "explanation": "Static Link выкачивает весь огромный урон Урсы сквозь Overpower и Enrage.",
        "keyItems": [
          "Eul's Scepter",
          "Halberd"
        ],
        "gameplayTip": "Привязывай Static Link к медведю — когда у него будет 0 урона, он станет плюшевым!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "viper": {
    "id": "viper",
    "nameEn": "Viper",
    "nameRu": "Вайпер",
    "aliases": [
      "вайпер",
      "viper"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Мид",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "juggernaut",
        "heroName": "Juggernaut",
        "role": "Керри",
        "explanation": "Blade Fury полностью снимает яды и дает иммунитет ко всем замедлениям Вайпера.",
        "keyItems": [
          "Diffusal Blade",
          "Manta Style"
        ],
        "gameplayTip": "Крутись в Blade Fury и срезай Вайпера — его ядовитая кожа не работает против магии!",
        "weight": 9
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "weaver": {
    "id": "weaver",
    "nameEn": "Weaver",
    "nameRu": "Вивер",
    "aliases": [
      "вивер",
      "weaver",
      "жук"
    ],
    "primaryAttr": "agi",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "bloodseeker",
        "heroName": "Bloodseeker",
        "role": "Керри",
        "explanation": "Rupture не дает Виверу бегать в Shukuchi, нанося смертельный урон за каждый шаг.",
        "keyItems": [
          "Blade Mail",
          "BKB"
        ],
        "gameplayTip": "Вешай Rupture на жука — один рывок в инвизе, и он сам себя разорвет на части!",
        "weight": 10
      },
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает BKB и заставляет ловкача бить в Blade Mail, убивая себя своим же уроном.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail",
          "Heart of Tarrasque"
        ],
        "gameplayTip": "Прыгай в момент максимальной агрессии ловкача — его собственный урон станет его концом!",
        "weight": 9
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "ancient_apparition": {
    "id": "ancient_apparition",
    "nameEn": "Ancient Apparition",
    "nameRu": "Аппарат (Ancient Apparition)",
    "aliases": [
      "аппарат",
      "ancient apparition",
      "аа",
      "aa"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Mana Void взрывает хрупкого Аппарата с огромным запасом маны с одного удара.",
        "keyItems": [
          "Blink Dagger",
          "Manta Style"
        ],
        "gameplayTip": "Прыгай на Аппарата в начале файта — без позиционки он легкий корм для хука и блинка!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "crystal_maiden": {
    "id": "crystal_maiden",
    "nameEn": "Crystal Maiden",
    "nameRu": "Кристалка (Crystal Maiden)",
    "aliases": [
      "кристалка",
      "crystal maiden",
      "цм",
      "cm",
      "рилай"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence сбивает каст Freezing Field из любой точки карты без задержки.",
        "keyItems": [
          "Force Staff",
          "Blink Dagger"
        ],
        "gameplayTip": "Как только ЦМка начинает крутить ледяной ульт — нажимай Global Silence!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "death_prophet": {
    "id": "death_prophet",
    "nameEn": "Death Prophet",
    "nameRu": "Кробелус (Death Prophet)",
    "aliases": [
      "кробелус",
      "death prophet",
      "дп",
      "dp",
      "банша"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "ancient_apparition",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast блокирует лечение от Spirit Siphon и возвращающихся духов Exorcism.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter"
        ],
        "gameplayTip": "Под Ice Blast Кробелус не получит ни капли исцеления от своих духов!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "disruptor": {
    "id": "disruptor",
    "nameEn": "Disruptor",
    "nameRu": "Дисраптор",
    "aliases": [
      "дисраптор",
      "disruptor"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "juggernaut",
        "heroName": "Juggernaut",
        "role": "Керри",
        "explanation": "Blade Fury спасает от возврата Glimpse и позволяет безнаказанно уйти от ульта.",
        "keyItems": [
          "Manta Style",
          "BKB"
        ],
        "gameplayTip": "Нажимай крутилку в момент, когда Дисраптор возвращает тебя с помощью Glimpse!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "enchantress": {
    "id": "enchantress",
    "nameEn": "Enchantress",
    "nameRu": "Коза (Enchantress)",
    "aliases": [
      "коза",
      "enchantress",
      "энча"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Оффлейн",
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "ursa",
        "heroName": "Ursa",
        "role": "Керри",
        "explanation": "Overpower игнорирует замедление атаки от Untouchable благодаря максимальной скорости.",
        "keyItems": [
          "Blink Dagger",
          "Basher"
        ],
        "gameplayTip": "Запрыгивай на Козу под оверпауэром — её пассивка на замедление атак бессильна!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "grimstroke": {
    "id": "grimstroke",
    "nameEn": "Grimstroke",
    "nameRu": "Гримстрок",
    "aliases": [
      "гримстрок",
      "grimstroke",
      "грим"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "phantom_lancer",
        "heroName": "Phantom Lancer",
        "role": "Керри",
        "explanation": "Soulbind и одиночные чернила бесполезны против постоянного потока иллюзий.",
        "keyItems": [
          "Diffusal Blade",
          "Manta Style"
        ],
        "gameplayTip": "Сбрасывай фантомчика мантой или диффузами и забивай Грима толпой!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "jakiro": {
    "id": "jakiro",
    "nameEn": "Jakiro",
    "nameRu": "Джакиро",
    "aliases": [
      "джакиро",
      "jakiro",
      "дракон"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "rubick",
        "heroName": "Rubick",
        "role": "Саппорт",
        "explanation": "Ice Path и Macropyre воруются моментально и кастуются Рубиком без задержки.",
        "keyItems": [
          "Aether Lens",
          "Blink Dagger"
        ],
        "gameplayTip": "Воруй Ice Path и выдавай мгновенные длинные станы по вражеской тиме!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "keeper_of_the_light": {
    "id": "keeper_of_the_light",
    "nameEn": "Keeper of the Light",
    "nameRu": "Котл (Keeper of the Light)",
    "aliases": [
      "котл",
      "keeper of the light",
      "kotl",
      "старик"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "storm_spirit",
        "heroName": "Storm Spirit",
        "role": "Мид",
        "explanation": "Легко долетает на Ball Lightning до стоящего в кустах Котла и убивает за секунду.",
        "keyItems": [
          "Orchid Malevolence",
          "BKB"
        ],
        "gameplayTip": "Влетай в деда на шаре — тонкий Котл не успеет даже нажать Blinding Light!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "leshrac": {
    "id": "leshrac",
    "nameEn": "Leshrac",
    "nameRu": "Лешрак",
    "aliases": [
      "лешрак",
      "leshrac",
      "пони"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Встроенное сопротивление магии и выжигание маны превращают Лешрака в живую бомбу.",
        "keyItems": [
          "Manta Style",
          "Abyssal Blade"
        ],
        "gameplayTip": "Сжигай ману Лешраку — без маны его ульт выключается, а Mana Void взрывает половину карты!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "lich": {
    "id": "lich",
    "nameEn": "Lich",
    "nameRu": "Лич",
    "aliases": [
      "лич",
      "lich"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Counterspell отражает Chain Frost и Sinister Gaze прямо обратно в Лича.",
        "keyItems": [
          "Manta Style",
          "Blink Dagger"
        ],
        "gameplayTip": "Жми Counterspell когда летит шар Chain Frost — пусть чайник скачет по врагам!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "lina": {
    "id": "lina",
    "nameEn": "Lina",
    "nameRu": "Лина",
    "aliases": [
      "лина",
      "lina"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "spectre",
        "heroName": "Spectre",
        "role": "Керри",
        "explanation": "Blade Mail и Dispersion отражают огромный прокаст Laguna Blade обратно в тонкую Лину.",
        "keyItems": [
          "Blade Mail",
          "Manta Style"
        ],
        "gameplayTip": "Haunt прямо в Лину с включенным Blade Mail заставляет её бояться жать ульт!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "lion": {
    "id": "lion",
    "nameEn": "Lion",
    "nameRu": "Лион",
    "aliases": [
      "лион",
      "lion"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "rubick",
        "heroName": "Rubick",
        "role": "Саппорт",
        "explanation": "Ворует Hex, Earth Spike или Finger of Death и применяет их быстрее самого Лиона.",
        "keyItems": [
          "Aether Lens",
          "Blink Dagger"
        ],
        "gameplayTip": "Воруй Finger of Death и набивай стаки ультимейта сам!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "muerta": {
    "id": "muerta",
    "nameEn": "Muerta",
    "nameRu": "Муэрта",
    "aliases": [
      "муэрта",
      "muerta"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Керри"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Pierce the Veil наносит магический урон, который полностью режется резистом Антимага.",
        "keyItems": [
          "Manta Style",
          "Abyssal Blade"
        ],
        "gameplayTip": "Иммунитет к физ-урону Муэрты бесполезен против выжигания маны и мана-войда!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "natures_prophet": {
    "id": "natures_prophet",
    "nameEn": "Nature's Prophet",
    "nameRu": "Фурион (Nature's Prophet)",
    "aliases": [
      "фурион",
      "nature's prophet",
      "нп",
      "np"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Керри",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "spirit_breaker",
        "heroName": "Spirit Breaker",
        "role": "Оффлейн",
        "explanation": "Charge of Darkness накажет Фуриона за каждый наглый сплитпуш на линии.",
        "keyItems": [
          "Shadow Blade",
          "BKB"
        ],
        "gameplayTip": "Бара видит сплитпуш Фуры и летит через всю карту, чтобы сбить ему телепорт!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "necrophos": {
    "id": "necrophos",
    "nameEn": "Necrophos",
    "nameRu": "Некрофос",
    "aliases": [
      "некрофос",
      "necrophos",
      "некр",
      "дед"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "ancient_apparition",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast блокирует лечение от Death Pulse и Ghost Shroud, убивая Деда.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter"
        ],
        "gameplayTip": "Вешай Ice Blast в Некрофоса — в астрале без хила он получает увеличенный урон!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "oracle": {
    "id": "oracle",
    "nameEn": "Oracle",
    "nameRu": "Оракул",
    "aliases": [
      "оракул",
      "oracle"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence не дает Оракулу нажать False Promise для спасения своего керри.",
        "keyItems": [
          "Orchid Malevolence",
          "Aghanim's Scepter"
        ],
        "gameplayTip": "Жми Global Silence в начале драки — вражеский керри погибнет без опеки Оракула!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "outworld_destroyer": {
    "id": "outworld_destroyer",
    "nameEn": "Outworld Destroyer",
    "nameRu": "ОД (Outworld Destroyer)",
    "aliases": [
      "од",
      "outworld destroyer",
      "дестроер",
      "od"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "nyx_assassin",
        "heroName": "Nyx Assassin",
        "role": "Саппорт",
        "explanation": "Mind Flare наносит колоссальный урон от гигантского запаса маны и интеллекта ОД.",
        "keyItems": [
          "Blink Dagger",
          "Dagon"
        ],
        "gameplayTip": "Кастуй Spiked Carapace под Arcane Orb и взрывай ОД его же интеллектом!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "puck": {
    "id": "puck",
    "nameEn": "Puck",
    "nameRu": "Пак",
    "aliases": [
      "пак",
      "puck"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "disruptor",
        "heroName": "Disruptor",
        "role": "Саппорт",
        "explanation": "Static Storm с аганимом и Kinetic Field не позволяют Паку нажать Phase Shift или Orb.",
        "keyItems": [
          "Aghanim's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Сайленс Дисраптора лишает прыгучего дракончика всех эскейпов!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "pugna": {
    "id": "pugna",
    "nameEn": "Pugna",
    "nameRu": "Пугна",
    "aliases": [
      "пугна",
      "pugna"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид",
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "clockwerk",
        "heroName": "Clockwerk",
        "role": "Саппорт",
        "explanation": "Battery Assault мгновенно прерывает Life Drain, а коги запирают хрупкую Пугну.",
        "keyItems": [
          "Blade Mail",
          "Force Staff"
        ],
        "gameplayTip": "Влетай в Пугну — под батарейками она не может сосать здоровье ультимейтом!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "queen_of_pain": {
    "id": "queen_of_pain",
    "nameEn": "Queen of Pain",
    "nameRu": "Квопа (Queen of Pain)",
    "aliases": [
      "квопа",
      "queen of pain",
      "qop",
      "королева боли"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "disruptor",
        "heroName": "Disruptor",
        "role": "Саппорт",
        "explanation": "Glimpse возвращает Квопу назад после любого блинка прямо под Static Storm.",
        "keyItems": [
          "Aghanim's Scepter",
          "Eul's Scepter"
        ],
        "gameplayTip": "Квопа блинканулась вперед? Возвращай её назад Глимпсом и ставь сайленс!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "ringmaster": {
    "id": "ringmaster",
    "nameEn": "Ringmaster",
    "nameRu": "Рингмастер",
    "aliases": [
      "рингмастер",
      "ringmaster",
      "клоун"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Любое безмолвие срывает Wheel of Wonder и длинные касты фокусов Рингмастера.",
        "keyItems": [
          "Orchid Malevolence",
          "BKB"
        ],
        "gameplayTip": "Не давай клоуну раскручивать свое колесо чудес — глуши его сайленсом!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "rubick": {
    "id": "rubick",
    "nameEn": "Rubick",
    "nameRu": "Рубик",
    "aliases": [
      "рубик",
      "rubick",
      "грандмагус"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence не дает Рубику украсть и использовать заклинания во время тимфайта.",
        "keyItems": [
          "Aghanim's Shard",
          "Force Staff"
        ],
        "gameplayTip": "Сайленс блокирует Spell Steal — без чужих скиллов Рубик беспомощен!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "shadow_demon": {
    "id": "shadow_demon",
    "nameEn": "Shadow Demon",
    "nameRu": "Шадоу Демон",
    "aliases": [
      "шадоу демон",
      "shadow demon",
      "шд",
      "sd"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "storm_spirit",
        "heroName": "Storm Spirit",
        "role": "Мид",
        "explanation": "Мгновенно добирается до ШД за спинами команды и стирает его до применения сейвов.",
        "keyItems": [
          "Orchid Malevolence",
          "BKB"
        ],
        "gameplayTip": "Вырезай Шадоу Демона первым, пока он не спрятал керри в Disruption!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "shadow_shaman": {
    "id": "shadow_shaman",
    "nameEn": "Shadow Shaman",
    "nameRu": "Шаман (Shadow Shaman)",
    "aliases": [
      "шаман",
      "shadow shaman",
      "раста",
      "рашта"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "sniper",
        "heroName": "Sniper",
        "role": "Керри",
        "explanation": "Расстреливает змеек Mass Serpent Ward с безопасного расстояния вне радиуса хекса.",
        "keyItems": [
          "Dragon Lance",
          "Maelstrom"
        ],
        "gameplayTip": "Снайпер ломает змеек Шамана издалека, не подставляясь под Shackles!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "silencer": {
    "id": "silencer",
    "nameEn": "Silencer",
    "nameRu": "Сайленсер",
    "aliases": [
      "сайленсер",
      "silencer",
      "сало",
      "нортон"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "phantom_assassin",
        "heroName": "Phantom Assassin",
        "role": "Керри",
        "explanation": "Легко добирается с блинка и ваншотит Сайленсера критами, игнорируя сайленс с BKB.",
        "keyItems": [
          "BKB",
          "Desolator"
        ],
        "gameplayTip": "Нажимай BKB и вырезай Сайленсера за один крит с прыжка!",
        "weight": 9
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "skywrath_mage": {
    "id": "skywrath_mage",
    "nameEn": "Skywrath Mage",
    "nameRu": "Скаймаг (Skywrath Mage)",
    "aliases": [
      "скаймаг",
      "skywrath mage",
      "скай",
      "петух"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Встроенное сопротивление магии сводит на нет Mystic Flare, а Mana Void взрывает Ская.",
        "keyItems": [
          "Manta Style",
          "Abyssal Blade"
        ],
        "gameplayTip": "Скай тратит тонны маны на спам — прыгай и взрывай его ультимейтом!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "storm_spirit": {
    "id": "storm_spirit",
    "nameEn": "Storm Spirit",
    "nameRu": "Шторм Спирит",
    "aliases": [
      "шторм спирит",
      "storm spirit",
      "шторм",
      "панда"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Mana Break и Mana Void моментально уничтожают Шторма, зависящего от маны.",
        "keyItems": [
          "Manta Style",
          "Abyssal Blade"
        ],
        "gameplayTip": "Шторм прилетел без маны? Нажимай Mana Void и оформляй Rampage!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "tinker": {
    "id": "tinker",
    "nameEn": "Tinker",
    "nameRu": "Тинкер",
    "aliases": [
      "тинкер",
      "tinker",
      "бош"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "spectre",
        "heroName": "Spectre",
        "role": "Керри",
        "explanation": "Haunt находит Тинкера в любых кустах и сбивает ему телепорты и Blink Dagger.",
        "keyItems": [
          "Blade Mail",
          "Radiance"
        ],
        "gameplayTip": "Спектра мгновенно прыгает к Тинкеру за деревья — он нигде не сможет спрятаться!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "warlock": {
    "id": "warlock",
    "nameEn": "Warlock",
    "nameRu": "Варлок",
    "aliases": [
      "варлок",
      "warlock",
      "дед"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "rubick",
        "heroName": "Rubick",
        "role": "Саппорт",
        "explanation": "Chaotic Offering имеет долгую задержку и легко воруется, переворачивая бой.",
        "keyItems": [
          "Aether Lens",
          "Blink Dagger"
        ],
        "gameplayTip": "Воруй голема у Варлока и призывай своего каменного гиганта прямо им на головы!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "witch_doctor": {
    "id": "witch_doctor",
    "nameEn": "Witch Doctor",
    "nameRu": "Витч Доктор",
    "aliases": [
      "витч доктор",
      "witch doctor",
      "вд",
      "wd"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence прерывает ченнелинг Death Ward сквозь любую дистанцию.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape"
        ],
        "gameplayTip": "Жми ульт сразу, как только Доктор воткнет свою пляшущую палку Death Ward!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "zeus": {
    "id": "zeus",
    "nameEn": "Zeus",
    "nameRu": "Зевс",
    "aliases": [
      "зевс",
      "zeus"
    ],
    "primaryAttr": "int",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "anti_mage",
        "heroName": "Anti-Mage",
        "role": "Керри",
        "explanation": "Spell Shield нивелирует молнии Зевса, а Mana Void взрывает бога грома за секунду.",
        "keyItems": [
          "Manta Style",
          "Abyssal Blade"
        ],
        "gameplayTip": "Зевс спамит молниями и сушит ману — прыгай и нажимай Mana Void!",
        "weight": 10
      },
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence глушит все заклинания и сбивает ключевые позиционные тайминги в бою.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Держи ульт до начала ключевой фазы тимфайта, чтобы вражеские маги не успели нажать прокаст!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "abaddon": {
    "id": "abaddon",
    "nameEn": "Abaddon",
    "nameRu": "Абаддон",
    "aliases": [
      "абаддон",
      "abaddon",
      "абадон"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Оффлейн",
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "ancient_apparition",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast не дает Абаддону лечиться от ультимейта Borrowed Time.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter"
        ],
        "gameplayTip": "Бросай Ice Blast в Абаддона — его ульт сработает, но здоровья он не восстановит!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "bane": {
    "id": "bane",
    "nameEn": "Bane",
    "nameRu": "Бейн",
    "aliases": [
      "бейн",
      "bane",
      "баланар"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "rubick",
        "heroName": "Rubick",
        "role": "Саппорт",
        "explanation": "Fiend's Grip ченнелится на месте, что позволяет легко сбить или украсть его с дистанции.",
        "keyItems": [
          "Aether Lens",
          "Blink Dagger"
        ],
        "gameplayTip": "Воруй Fiend's Grip и держи вражеского мидера в вечном сне!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "batrider": {
    "id": "batrider",
    "nameEn": "Batrider",
    "nameRu": "Бэтрайдер",
    "aliases": [
      "бэтрайдер",
      "batrider",
      "мышь"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Мид",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "abaddon",
        "heroName": "Abaddon",
        "role": "Оффлейн",
        "explanation": "Aphotic Shield мгновенно снимает стаки Sticky Napalm и спасает союзника из Flaming Lasso.",
        "keyItems": [
          "Lotus Orb",
          "Holy Locket"
        ],
        "gameplayTip": "Снимай лассо щитом Абаддона — Бэт потеряет свою главную фишку!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "beastmaster": {
    "id": "beastmaster",
    "nameEn": "Beastmaster",
    "nameRu": "Бистмастер",
    "aliases": [
      "бистмастер",
      "beastmaster",
      "бист"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "winter_wyvern",
        "heroName": "Winter Wyvern",
        "role": "Саппорт",
        "explanation": "Winter's Curse заставляет зоопарк Бистмастера разорвать своего же хозяина.",
        "keyItems": [
          "Aether Lens",
          "Glimmer Cape"
        ],
        "gameplayTip": "Ультуй в Биста когда он натравит своих кабанов и некров — они сами его забьют!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "brewmaster": {
    "id": "brewmaster",
    "nameEn": "Brewmaster",
    "nameRu": "Брюмастер",
    "aliases": [
      "брюмастер",
      "brewmaster",
      "панда"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "outworld_destroyer",
        "heroName": "Outworld Destroyer",
        "role": "Мид",
        "explanation": "Astral прячет главную панду или урон Sanity's Eclipse мгновенно стирает духов.",
        "keyItems": [
          "Blink Dagger",
          "Pike"
        ],
        "gameplayTip": "Ультуй по пандам — чистый ульт ОД быстро расправляется с разделенными духами!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "broodmother": {
    "id": "broodmother",
    "nameEn": "Broodmother",
    "nameRu": "Бруда (Broodmother)",
    "aliases": [
      "бруда",
      "broodmother",
      "паучиха",
      "брудмазер"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Мид",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "earthshaker",
        "heroName": "Earthshaker",
        "role": "Саппорт",
        "explanation": "Echo Slam по сотне паучат Бруды создает самый мощный взрыв в игре.",
        "keyItems": [
          "Blink Dagger",
          "Aghanim's Shard"
        ],
        "gameplayTip": "Шейкер против Бруды — это законный ваншот. Прыгай в паутину с Echo Slam!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "chen": {
    "id": "chen",
    "nameEn": "Chen",
    "nameRu": "Чен",
    "aliases": [
      "чен",
      "chen"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "clinkz",
        "heroName": "Clinkz",
        "role": "Керри",
        "explanation": "Death Pact пожирает самого сильного крипа Чена, лишая его армии и баффов.",
        "keyItems": [
          "Desolator",
          "Blink Dagger"
        ],
        "gameplayTip": "Съедай лучшего кентавра Чена и получай тонну бонусного урона!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "clockwerk": {
    "id": "clockwerk",
    "nameEn": "Clockwerk",
    "nameRu": "Клокверк",
    "aliases": [
      "клокверк",
      "clockwerk",
      "клок"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "lifestealer",
        "heroName": "Lifestealer",
        "role": "Керри",
        "explanation": "Rage позволяет выйти из шестеренок Cogwheels и нарезать Клока прямо в его ловушке.",
        "keyItems": [
          "Armlet",
          "Desolator"
        ],
        "gameplayTip": "Клок закрыл тебя в когах? Включай Rage и ломай робота на запчасти!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "dark_seer": {
    "id": "dark_seer",
    "nameEn": "Dark Seer",
    "nameRu": "Дарк Сир",
    "aliases": [
      "дарк сир",
      "dark seer",
      "дс",
      "ds"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "oracle",
        "heroName": "Oracle",
        "role": "Саппорт",
        "explanation": "Fortune's End легко развеивает ускорение Surge и щиты Ion Shell на линии.",
        "keyItems": [
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Снимай Ion Shell первым скиллом Оракула — ДС останется без фарма на лайне!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "dark_willow": {
    "id": "dark_willow",
    "nameEn": "Dark Willow",
    "nameRu": "Вилка (Dark Willow)",
    "aliases": [
      "вилка",
      "dark willow",
      "фея",
      "миреска"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call вытаскивает Вилку даже из невидимости Shadow Realm.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail"
        ],
        "gameplayTip": "Агри Вилку в Шедоу Реалме — она вынуждена атаковать сквозь неуязвимость!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "dazzle": {
    "id": "dazzle",
    "nameEn": "Dazzle",
    "nameRu": "Даззл",
    "aliases": [
      "даззл",
      "dazzle",
      "крест"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Culling Blade рубит цель под действием Shallow Grave, полностью игнорируя крест Даззла.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail"
        ],
        "gameplayTip": "Даззл повесил крест на 1 HP? Руби топором Culling Blade — крест не спасет!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "enigma": {
    "id": "enigma",
    "nameEn": "Enigma",
    "nameRu": "Энигма",
    "aliases": [
      "энигма",
      "enigma"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "silencer",
        "heroName": "Silencer",
        "role": "Саппорт",
        "explanation": "Global Silence прерывает Black Hole из абсолютно любой точки карты через всю карту.",
        "keyItems": [
          "Force Staff",
          "Glimmer Cape"
        ],
        "gameplayTip": "Держи палец на Global Silence: когда Энигма кастует Black Hole, сбивай ульт моментально!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "invoker": {
    "id": "invoker",
    "nameEn": "Invoker",
    "nameRu": "Инвокер",
    "aliases": [
      "инвокер",
      "invoker",
      "вокер",
      "карл"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "nyx_assassin",
        "heroName": "Nyx Assassin",
        "role": "Саппорт",
        "explanation": "Mind Flare сжигает Инвокера от его гигантского интеллекта, а Spiked Carapace ловит прокасты.",
        "keyItems": [
          "Blink Dagger",
          "Dagon"
        ],
        "gameplayTip": "Жми карапасы в Meatball или Sunstrike — Инвокер оглушит сам себя!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "io": {
    "id": "io",
    "nameEn": "Io",
    "nameRu": "Висп (Io)",
    "aliases": [
      "висп",
      "io",
      "ио",
      "шарик"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "ancient_apparition",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast полностью блокирует всю передачу исцеления через Tether.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter"
        ],
        "gameplayTip": "Кидай Ice Blast в связку Виспа — ни он, ни его керри не получат ни грамма регена!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "lycan": {
    "id": "lycan",
    "nameEn": "Lycan",
    "nameRu": "Ликан",
    "aliases": [
      "ликан",
      "lycan",
      "волк"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Керри",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "bloodseeker",
        "heroName": "Bloodseeker",
        "role": "Керри",
        "explanation": "Rupture наносит максимальный урон быстро бегущему волку под Shapeshift.",
        "keyItems": [
          "Blade Mail",
          "BKB"
        ],
        "gameplayTip": "Ликан разогнался на ульте? Вешай Rupture — он убьет сам себя за пару прыжков!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "magnus": {
    "id": "magnus",
    "nameEn": "Magnus",
    "nameRu": "Магнус",
    "aliases": [
      "магнус",
      "magnus"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "rubick",
        "heroName": "Rubick",
        "role": "Саппорт",
        "explanation": "Reverse Polarity — один из лучших спеллов для кражи, кастуется Рубиком моментально.",
        "keyItems": [
          "Blink Dagger",
          "Aether Lens"
        ],
        "gameplayTip": "Стой позади команды, жди RP и стягивай врагов в ответное RP!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "marci": {
    "id": "marci",
    "nameEn": "Marci",
    "nameRu": "Марси",
    "aliases": [
      "марси",
      "marci"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "razor",
        "heroName": "Razor",
        "role": "Керри",
        "explanation": "Static Link выкачивает урон во время серии ударов Unleash, делая её удары безвредными.",
        "keyItems": [
          "Eul's Scepter",
          "Halberd"
        ],
        "gameplayTip": "Привязывай луч Static Link — Марси будет колотить со скоростью пулемета с 0 урона!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "mirana": {
    "id": "mirana",
    "nameEn": "Mirana",
    "nameRu": "Мирана",
    "aliases": [
      "мирана",
      "mirana",
      "потма"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "slardar",
        "heroName": "Slardar",
        "role": "Оффлейн",
        "explanation": "Corrosive Haze дает True Sight и снимает эффект ультимейта Moonlight Shadow со всей команды.",
        "keyItems": [
          "Blink Dagger",
          "Force Staff"
        ],
        "gameplayTip": "Мирана нажала инвиз? Просвечивай и вешай ульт Слардара — засада сорвана!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "nyx_assassin": {
    "id": "nyx_assassin",
    "nameEn": "Nyx Assassin",
    "nameRu": "Никс (Nyx Assassin)",
    "aliases": [
      "никс",
      "nyx assassin",
      "жук"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "slardar",
        "heroName": "Slardar",
        "role": "Оффлейн",
        "explanation": "Corrosive Haze не дает Никсу уйти в Vendetta и срезает его защиту в ноль.",
        "keyItems": [
          "Blink Dagger",
          "BKB"
        ],
        "gameplayTip": "Никс полагается на внезапность из инвиза — лиши его этого с помощью True Sight!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "ogre_magi": {
    "id": "ogre_magi",
    "nameEn": "Ogre Magi",
    "nameRu": "Огр Маг (Ogre Magi)",
    "aliases": [
      "огр маг",
      "ogre magi",
      "огр"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "lifestealer",
        "heroName": "Lifestealer",
        "role": "Керри",
        "explanation": "Feast наносит колоссальный урон от гигантского запаса здоровья и силы толстого Огра.",
        "keyItems": [
          "Armlet",
          "Desolator"
        ],
        "gameplayTip": "Огр невероятно жирный — Гуля лечится от него как на курорте!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "pangolier": {
    "id": "pangolier",
    "nameEn": "Pangolier",
    "nameRu": "Пангольер",
    "aliases": [
      "пангольер",
      "pangolier",
      "панго"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Мид",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "bloodseeker",
        "heroName": "Bloodseeker",
        "role": "Керри",
        "explanation": "Rupture наносит колоссальный чистый урон во время катания в Rolling Thunder и Swashbuckle.",
        "keyItems": [
          "Blade Mail",
          "BKB"
        ],
        "gameplayTip": "Панго покатился в шаре под Rupture? Он моментально расшибется насмерть!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "phoenix": {
    "id": "phoenix",
    "nameEn": "Phoenix",
    "nameRu": "Феникс",
    "aliases": [
      "феникс",
      "phoenix",
      "птица"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "ursa",
        "heroName": "Ursa",
        "role": "Керри",
        "explanation": "Overpower позволяет разбить яйцо Supernova за 1.5 секунды благодаря максимальной скорости атаки.",
        "keyItems": [
          "Blink Dagger",
          "BKB"
        ],
        "gameplayTip": "Феникс поставил яйцо? Нажимай Overpower и разбивай солнце за мгновение!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "sand_king": {
    "id": "sand_king",
    "nameEn": "Sand King",
    "nameRu": "Сэнд Кинг",
    "aliases": [
      "сэнд кинг",
      "sand king",
      "ск",
      "sk",
      "скорпион"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "rubick",
        "heroName": "Rubick",
        "role": "Саппорт",
        "explanation": "Epicenter и Burrowstrike легко воруются, а Sand Storm не спасает от дастов.",
        "keyItems": [
          "Blink Dagger",
          "Aether Lens"
        ],
        "gameplayTip": "Воруй Burrowstrike и станни скорпиона прямо в его песочной буре!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "snapfire": {
    "id": "snapfire",
    "nameEn": "Snapfire",
    "nameRu": "Снэпфайр (Snapfire)",
    "aliases": [
      "снэпфайр",
      "snapfire",
      "бабка",
      "ящерица"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "clockwerk",
        "heroName": "Clockwerk",
        "role": "Саппорт",
        "explanation": "Hookshot и Battery Assault сбивают стрельбу Mortimer Kisses и запирают бабку.",
        "keyItems": [
          "Blade Mail",
          "Force Staff"
        ],
        "gameplayTip": "Влетай в Бабку в момент каста ульты — батарейки прервут обстрел поцелуями!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "techies": {
    "id": "techies",
    "nameEn": "Techies",
    "nameRu": "Течис",
    "aliases": [
      "течис",
      "techies",
      "минер",
      "минёр"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "juggernaut",
        "heroName": "Juggernaut",
        "role": "Керри",
        "explanation": "Blade Fury дает полную неуязвимость ко всем минам и взрывам Течиса.",
        "keyItems": [
          "Manta Style",
          "BKB"
        ],
        "gameplayTip": "Крутись в Blade Fury и взрывай мины своим телом без всякого урона!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "timbersaw": {
    "id": "timbersaw",
    "nameEn": "Timbersaw",
    "nameRu": "Тимбер (Timbersaw)",
    "aliases": [
      "тимбер",
      "timbersaw",
      "лесоруб"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Оффлейн",
      "Мид"
    ],
    "counters": [
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает Reactive Armor, делая Тимбера уязвимым к физическому и маг-урону.",
        "keyItems": [
          "Silver Edge",
          "Spirit Vessel"
        ],
        "gameplayTip": "Заливай Тимбера ядом Nethertoxin — без брони и регена он распилится сам!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "vengeful_spirit": {
    "id": "vengeful_spirit",
    "nameEn": "Vengeful Spirit",
    "nameRu": "Венга (Vengeful Spirit)",
    "aliases": [
      "венга",
      "vengeful spirit",
      "вендета"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "phantom_lancer",
        "heroName": "Phantom Lancer",
        "role": "Керри",
        "explanation": "Свап одной цели и одиночный стан бессильны против орды иллюзий Лансера.",
        "keyItems": [
          "Diffusal Blade",
          "Manta Style"
        ],
        "gameplayTip": "Запутывай Венгу толпой иллюзий — она не поймет, кого свапать!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "venomancer": {
    "id": "venomancer",
    "nameEn": "Venomancer",
    "nameRu": "Веномансер",
    "aliases": [
      "веномансер",
      "venomancer",
      "веник"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "abaddon",
        "heroName": "Abaddon",
        "role": "Оффлейн",
        "explanation": "Aphotic Shield и Borrowed Time полностью рассеивают все яды Веника с себя и союзников.",
        "keyItems": [
          "Lotus Orb",
          "Holy Locket"
        ],
        "gameplayTip": "Снимай ядовитые дебаффы щитом — Веник не сможет замедлить команду!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "visage": {
    "id": "visage",
    "nameEn": "Visage",
    "nameRu": "Визаж",
    "aliases": [
      "визаж",
      "visage"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Мид",
      "Оффлейн"
    ],
    "counters": [
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Counter Helix быстро убивает горгулий Familiars и сбивает слои Gravekeeper's Cloak.",
        "keyItems": [
          "Blink Dagger",
          "Blade Mail"
        ],
        "gameplayTip": "Агри Визажа вместе с птицами — они мгновенно разобьются о твои вертушки!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "void_spirit": {
    "id": "void_spirit",
    "nameEn": "Void Spirit",
    "nameRu": "Войд Спирит",
    "aliases": [
      "войд спирит",
      "void spirit",
      "инай"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Мид"
    ],
    "counters": [
      {
        "heroId": "disruptor",
        "heroName": "Disruptor",
        "role": "Саппорт",
        "explanation": "Static Storm блокирует все 4 эскейпа Войд Спирита, а Glimpse возвращает после астрала.",
        "keyItems": [
          "Aghanim's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Сайленс Дисраптора превращает мобильного духа в неподвижную мишень!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "windranger": {
    "id": "windranger",
    "nameEn": "Windranger",
    "nameRu": "Виндрейнджер",
    "aliases": [
      "виндрейнджер",
      "windranger",
      "вр",
      "wr",
      "рыжая"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Мид",
      "Керри"
    ],
    "counters": [
      {
        "heroId": "axe",
        "heroName": "Axe",
        "role": "Оффлейн",
        "explanation": "Berserker's Call пробивает Windrun, а Focus Fire заставляет её убить себя об Blade Mail.",
        "keyItems": [
          "Blade Mail",
          "Blink Dagger"
        ],
        "gameplayTip": "Прыгай в ВРку под ультой — с бешеной скоростью атаки она мгновенно убьет себя об Blade Mail!",
        "weight": 10
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  },
  "winter_wyvern": {
    "id": "winter_wyvern",
    "nameEn": "Winter Wyvern",
    "nameRu": "Вайверн (Winter Wyvern)",
    "aliases": [
      "вайверн",
      "winter wyvern",
      "вв",
      "ww",
      "виверна"
    ],
    "primaryAttr": "all",
    "typicalRoles": [
      "Саппорт"
    ],
    "counters": [
      {
        "heroId": "pudge",
        "heroName": "Pudge",
        "role": "Саппорт",
        "explanation": "Мясницкий крюк легко достает неподвижную Виверну во время каста или союзника из льда.",
        "keyItems": [
          "Aether Lens",
          "Blink Dagger"
        ],
        "gameplayTip": "Когда Виверна прячет цель в Cold Embrace — хукай её прямо оттуда и съедай!",
        "weight": 9
      },
      {
        "heroId": "viper",
        "heroName": "Viper",
        "role": "Мид",
        "explanation": "Nethertoxin отключает пассивные эффекты универсалов, а Viper Strike срезает мобильность.",
        "keyItems": [
          "Dragon Lance",
          "Silver Edge",
          "BKB"
        ],
        "gameplayTip": "Заливай ядом позицию универсального героя — без бонусов от пассивок он легкая добыча!",
        "weight": 8
      },
      {
        "heroId": "spirit_vessel_carrier",
        "heroName": "Ancient Apparition",
        "role": "Саппорт",
        "explanation": "Ice Blast предотвращает исцеление и регенерацию, а Chilling Touch помогает на линии.",
        "keyItems": [
          "Spirit Vessel",
          "Eul's Scepter",
          "Glimmer Cape"
        ],
        "gameplayTip": "Запускай ульт сквозь всю карту туда, где разворачивается драка — это решает исход!",
        "weight": 7
      }
    ]
  }
};

/**
 * Match a raw hero query string against known hero dictionary
 */
export function findHeroByQuery(query: string): HeroData | null {
  const clean = query.trim().toLowerCase();
  if (!clean) return null;

  // 1. Exact ID or English match
  for (const hero of Object.values(DOTA_HEROES)) {
    if (hero.id.toLowerCase() === clean || hero.nameEn.toLowerCase() === clean) {
      return hero;
    }
  }

  // 2. Exact alias match
  for (const hero of Object.values(DOTA_HEROES)) {
    if (hero.aliases.some(alias => alias.toLowerCase() === clean)) {
      return hero;
    }
  }

  // 3. NameRu contains query or alias contains query
  for (const hero of Object.values(DOTA_HEROES)) {
    if (hero.nameRu.toLowerCase().includes(clean)) {
      return hero;
    }
    if (hero.aliases.some(alias => clean.includes(alias.toLowerCase()) || alias.toLowerCase().includes(clean))) {
      return hero;
    }
  }

  // 4. Partial substring fallback
  for (const hero of Object.values(DOTA_HEROES)) {
    if (hero.nameEn.toLowerCase().includes(clean)) {
      return hero;
    }
  }

  return null;
}

/**
 * Intelligent aggregator to find the strongest counterpicks against an enemy squad
 */
export function calculateCounterpicks(
  enemyHeroes: HeroData[],
  roleFilter: HeroRole | 'Все роли'
): CounterpickItem[] {
  if (enemyHeroes.length === 0) return [];

  const candidateScores: Record<string, {
    item: CounterpickItem;
    totalWeight: number;
    reasons: string[];
  }> = {};

  const enemyHeroIds = new Set(enemyHeroes.map(e => e.id));

  enemyHeroes.forEach(enemy => {
    enemy.counters.forEach(counter => {
      // Avoid suggesting an enemy hero as counter to themselves
      if (enemyHeroIds.has(counter.heroId)) return;

      if (!candidateScores[counter.heroId]) {
        candidateScores[counter.heroId] = {
          item: { ...counter },
          totalWeight: counter.weight,
          reasons: [counter.explanation]
        };
      } else {
        // Bonus for countering multiple enemy heroes
        candidateScores[counter.heroId].totalWeight += counter.weight * 1.35;
        candidateScores[counter.heroId].reasons.push(counter.explanation);
      }
    });
  });

  // Prepare list sorted by total weighted score
  const sortedCandidates = Object.values(candidateScores)
    .sort((a, b) => b.totalWeight - a.totalWeight)
    .map(c => {
      const mergedItem = { ...c.item };
      // If counters multiple heroes, enrich the explanation
      if (c.reasons.length > 1) {
        mergedItem.explanation = `Универсальный контрпик сразу против нескольких врагов: ${c.reasons.slice(0, 2).join(' А также: ')}`;
      }
      return mergedItem;
    });

  // Apply role filter if requested
  if (roleFilter !== 'Все роли') {
    return sortedCandidates.filter(c => c.role === roleFilter).slice(0, 3);
  }

  // Diversified top-3 for 'Все роли' (Core + Mid/Offlane + Support)
  const diversified: CounterpickItem[] = [];
  const usedRoles = new Set<string>();

  for (const c of sortedCandidates) {
    if (!usedRoles.has(c.role)) {
      diversified.push(c);
      usedRoles.add(c.role);
    }
    if (diversified.length === 3) break;
  }

  // Fill up to 3 if roles couldn't all be distinct
  if (diversified.length < 3) {
    for (const c of sortedCandidates) {
      if (!diversified.some(d => d.heroId === c.heroId)) {
        diversified.push(c);
      }
      if (diversified.length === 3) break;
    }
  }

  return diversified;
}
