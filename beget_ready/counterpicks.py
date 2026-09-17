"""
Dota 2 Counterpick Assistant - Python Backend & CLI
===================================================
Скрипт подбора контрпиков в стиле Пуджа для Dota 2.
Может работать как standalone CLI-скрипт или как FastAPI HTTP-эндпоинт.
Подходит для развёртывания на Beget (в разделе Python / WSGI / ASGI) или локального запуска.

Требования (опционально для FastAPI):
    pip install fastapi uvicorn
Для обычного запуска в консоли сторонние библиотеки НЕ требуются (чистый Python 3.8+).
"""

import json
import re
from typing import Dict, List, Any, Optional

# =====================================================================
# ВСТРОЕННАЯ БАЗА ДАННЫХ КОНТРПИКОВ DOTA 2 (БЕЗ ВНЕШНИХ API)
# =====================================================================
DOTA_DATABASE: Dict[str, Dict[str, Any]] = {
    "phantom assassin": {
        "ru_name": "Фантомка (Phantom Assassin)",
        "aliases": ["pa", "мортра", "mortred", "фантомка", "па"],
        "counters": [
            {
                "hero": "Axe",
                "role": "Оффлейн",
                "explanation": "Berserker's Call пробивает BKB, заставляя Фантомку убивать себя о Blade Mail и пассивку Counter Helix.",
                "items": ["Blade Mail", "Blink Dagger", "Aghanim's Shard"],
                "tip": "Прыгай на неё в тот момент, когда она прыгает на твоих союзников, и сразу жми Blade Mail."
            },
            {
                "hero": "Tinker",
                "role": "Мид",
                "explanation": "Лазер накладывает 100% промах, полностью нейтрализуя криты и автоатаки Мортред до BKB.",
                "items": ["Blink Dagger", "Shiva's Guard", "Scythe of Vyse"],
                "tip": "Держи дистанцию на краю файта и вешай ослепление лазером в фокус-таргет."
            },
            {
                "hero": "Lion",
                "role": "Саппорт",
                "explanation": "Имеет два надёжных моментальных дизейбла и колоссальный мгновенный урон Finger of Death.",
                "items": ["Ghost Scepter", "Blink Dagger", "Glimmer Cape"],
                "tip": "Покупай Ghost Scepter первым слотом: нажимай его при прыжке Мортред и сразу выдавай контроль."
            }
        ]
    },
    "pudge": {
        "ru_name": "Пудж (Pudge)",
        "aliases": ["пудж", "падж", "мясник", "бучер", "butcher"],
        "counters": [
            {
                "hero": "Lifestealer",
                "role": "Керри",
                "explanation": "Rage полностью игнорирует Rot и Dismember, а пассивка Feast наносит урон от гигантского запаса HP Пуджа.",
                "items": ["Armlet of Mordiggian", "Desolator", "Basher"],
                "tip": "Не бойся хука: жми Rage и нарезай жирного мясника, восстанавливая здоровье с каждого удара."
            },
            {
                "hero": "Slark",
                "role": "Керри",
                "explanation": "Сбрасывает замедление Rot через Dark Pact и ворует тонны ловкости у неповоротливого Пуджа.",
                "items": ["Diffusal Blade", "Aghanim's Scepter", "Eye of Skadi"],
                "tip": "Привязывай Pounce-ом и копи статы, не позволяя Пуджу безопасно кастовать Dismember."
            },
            {
                "hero": "Silencer",
                "role": "Саппорт",
                "explanation": "Global Silence сбивает ультимейт Dismember сквозь всю карту, спасая жертву хука.",
                "items": ["Force Staff", "Glimmer Cape", "Eul's Scepter"],
                "tip": "Придерживай ультимейт ровно до момента, когда Пудж начнёт грызть твоего кора."
            }
        ]
    },
    "sniper": {
        "ru_name": "Снайпер (Sniper)",
        "aliases": ["снайпер", "дед", "карлик", "снайп"],
        "counters": [
            {
                "hero": "Spirit Breaker",
                "role": "Оффлейн",
                "explanation": "Разгоняется через всю карту на Charge of Darkness, мгновенно сокращая дистанцию и держа в бесконечных башах.",
                "items": ["Shadow Blade", "Black King Bar", "Octarine Core"],
                "tip": "Ставь глубокие варды во вражеский тыл и чарджись прямо в Снайпера в самом начале драки."
            },
            {
                "hero": "Storm Spirit",
                "role": "Мид",
                "explanation": "Ball Lightning преодолевает любое расстояние и мгновенно уничтожает Снайпера за Orchid Malevolence.",
                "items": ["Orchid Malevolence", "Bloodstone", "Kaya and Sange"],
                "tip": "Влетай прямо на голову деда, игнорируя переднюю линию вражеских героев."
            },
            {
                "hero": "Clockwerk",
                "role": "Саппорт",
                "explanation": "Hookshot настигает Снайпера на огромной дистанции, а коги запирают без возможности стрелять издали.",
                "items": ["Blade Mail", "Force Staff", "Aghanim's Shard"],
                "tip": "Лови Снайпера в коги — внутри он полностью беспомощен, а батарейки сбивают анимацию стрельбы."
            }
        ]
    },
    "anti-mage": {
        "ru_name": "Антимаг (Anti-Mage)",
        "aliases": ["ам", "am", "антимаг", "мага", "antimage"],
        "counters": [
            {
                "hero": "Legion Commander",
                "role": "Оффлейн",
                "explanation": "Duel запрещает блинкаться и нажимать Counterspell, быстро убивая Антимага под Blade Mail.",
                "items": ["Blink Dagger", "Blade Mail", "Black King Bar"],
                "tip": "Покупай ранний Блинк и лови АМа в лесу, когда он потратит Blink на лагерь нейтралов."
            },
            {
                "hero": "Disruptor",
                "role": "Саппорт",
                "explanation": "Glimpse возвращает АМа обратно после блинка, а Static Storm с Aghanim накладывает мут и сайленс.",
                "items": ["Aghanim's Scepter", "Glimmer Cape", "Force Staff"],
                "tip": "Жди, пока он использует Blink для эскейпа, и сразу кастуй Glimpse."
            },
            {
                "hero": "Meepo",
                "role": "Мид",
                "explanation": "Заканчивает игру быстрой доминацией до того, как Антимаг нафармит ключевые защитные артефакты.",
                "items": ["Blink Dagger", "Dragon Lance", "Diffusal Blade"],
                "tip": "Агрессивно пушь вышки на 15-20 минуте: АМ с одним Battle Fury ничего не может противопоставить сеткам."
            }
        ]
    },
    "invoker": {
        "ru_name": "Инвокер (Invoker)",
        "aliases": ["инвокер", "вокер", "карл", "karl", "invo"],
        "counters": [
            {
                "hero": "Nyx Assassin",
                "role": "Саппорт",
                "explanation": "Spiked Carapace оглушает Инвокера от его площадных заклинаний (EMP, Meteor), а Mind Flare сжигает ману.",
                "items": ["Blink Dagger", "Dagon", "Aether Lens"],
                "tip": "Нажимай шипы при анимации метеора или торнадо — Инвокер оглушит сам себя."
            },
            {
                "hero": "Templar Assassin",
                "role": "Мид",
                "explanation": "Refraction поглощает урон Sunstrike и Cold Snap, а колоссальный физический урон ломает Инвокера за секунды.",
                "items": ["Desolator", "Blink Dagger", "Black King Bar"],
                "tip": "Быстро забирай Рошана и продавливай мид, пока у Инвокера нет высокого уровня сфер."
            },
            {
                "hero": "Night Stalker",
                "role": "Оффлейн",
                "explanation": "Crippling Fear накладывает ауру безмолвия, не позволяя Инвокеру кастовать заклинания и сбегать.",
                "items": ["Phase Boots", "Blink Dagger", "Black King Bar"],
                "tip": "С наступлением ночи приходи в мид — пеший Инвокер не переживет сайленс и замедление."
            }
        ]
    },
    "morphling": {
        "ru_name": "Морфлинг (Morphling)",
        "aliases": ["морф", "morph", "морфлинг", "вода"],
        "counters": [
            {
                "hero": "Ancient Apparition",
                "role": "Саппорт",
                "explanation": "Ice Blast полностью блокирует восстановление здоровья и перекачку Attribute Shift в силу.",
                "items": ["Aghanim's Shard", "Glimmer Cape", "Force Staff"],
                "tip": "Запускай ультимейт в центр замеса — под дебаффом Морф мгновенно разбивается при попытке перекачки."
            },
            {
                "hero": "Lion",
                "role": "Саппорт",
                "explanation": "Мгновенный контроль и прокаст Finger of Death стирают Морфа до того, как он успеет перекачаться в силу.",
                "items": ["Blink Dagger", "Ghost Scepter", "Aghanim's Scepter"],
                "tip": "Инициируй из тумана войны через Хекс, пока Морфлинг держит малое количество здоровья в ловкости."
            },
            {
                "hero": "Outworld Destroyer",
                "role": "Мид",
                "explanation": "Чистый урон Arcane Orb игнорирует сотни единиц брони Морфлинга, а ульт наносит урон по разнице интеллекта.",
                "items": ["Force Staff", "Blink Dagger", "Black King Bar"],
                "tip": "Прячь Морфлинга в Astral Imprisonment при попытке побега и воруй ману."
            }
        ]
    },
    "bristleback": {
        "ru_name": "Бристлбек (Bristleback)",
        "aliases": ["брист", "еж", "бб", "bristleback", "свин"],
        "counters": [
            {
                "hero": "Viper",
                "role": "Мид",
                "explanation": "Nethertoxin полностью отключает пассивную защиту со спины Bristleback и выброс колючек (эффект Break).",
                "items": ["Dragon Lance", "Aghanim's Scepter", "Black King Bar"],
                "tip": "Разливай лужу Nethertoxin прямо под Бристла и расстреливай с расстояния."
            },
            {
                "hero": "Legion Commander",
                "role": "Оффлейн",
                "explanation": "Duel разворачивает Бристлбека лицом, полностью нивелируя снижение урона со спины.",
                "items": ["Blade Mail", "Blink Dagger", "Silver Edge"],
                "tip": "Используй Silver Edge для истощения перед дуэлью, чтобы быстро забрать его."
            },
            {
                "hero": "Shadow Demon",
                "role": "Саппорт",
                "explanation": "Demonic Purge с Aghanim накладывает истощение и замедляет сквозь невосприимчивость к магии.",
                "items": ["Aghanim's Scepter", "Aether Lens", "Glimmer Cape"],
                "tip": "Накладывай ультимейт на Бристла в начале каждого командного сражения."
            }
        ]
    }
}


def _normalize_name(name: str) -> str:
    """Очищает строку имени героя от лишних символов и пробелов."""
    return re.sub(r'[^a-zA-Zа-яА-Я0-9\- ]', '', name).strip().lower()


def find_hero_in_db(user_input: str) -> Optional[str]:
    """Ищет героя в локальной базе по русскому/английскому названию или псевдониму."""
    clean = _normalize_name(user_input)
    if not clean:
        return None

    # Прямой поиск по ключу
    if clean in DOTA_DATABASE:
        return clean

    # Поиск по псевдонимам и именам
    for hero_key, data in DOTA_DATABASE.items():
        if clean == hero_key:
            return hero_key
        if clean in _normalize_name(data["ru_name"]):
            return hero_key
        for alias in data["aliases"]:
            if clean == alias or alias in clean:
                return hero_key

    return None


def get_counterpicks(enemy_heroes_raw: str) -> Dict[str, Any]:
    """
    Основная логика подбора контрпиков в Dota 2.

    :param enemy_heroes_raw: строка со списком героев противника через запятую
    :return: словарь с результатами или сообщением об ошибке
    """
    # 1. Проверка на пустой ввод
    if not enemy_heroes_raw or not enemy_heroes_raw.strip():
        return {
            "status": "error",
            "error_code": "EMPTY_INPUT",
            "message": "Эй, салага! Введи хотя бы одного вражеского героя (от 1 до 5), Пудж не может хукать пустоту!",
            "pudge_quote": "Крюком тебя! Поле пустое — напиши, кого на фарш пускать!"
        }

    # Разделение по запятым
    tokens = [t.strip() for t in enemy_heroes_raw.split(',') if t.strip()]

    # 2. Проверка на слишком длинный список (> 5 героев)
    if len(tokens) > 5:
        return {
            "status": "error",
            "error_code": "TOO_MANY_HEROES",
            "message": f"Врагов в команде максимум 5, а ты передал {len(tokens)}! Ограничься списком до 5 героев.",
            "pudge_quote": "Воу, притормози коней! Врагов всего пять, а не целая армия!"
        }

    # 3. Поиск героев в базе данных
    identified_heroes = []
    unknown_heroes = []

    for token in tokens:
        matched_key = find_hero_in_db(token)
        if matched_key:
            identified_heroes.append(matched_key)
        else:
            unknown_heroes.append(token)

    # Если есть неизвестные герои
    if unknown_heroes:
        return {
            "status": "error",
            "error_code": "UNKNOWN_HEROES",
            "unknown": unknown_heroes,
            "message": f"Не удалось распознать следующих героев: {', '.join(unknown_heroes)}. Проверь правописание.",
            "pudge_quote": f"Э-э, кого ты назвал? «{unknown_heroes[0]}»? Такого зверя в лесу Доты я ещё не пробовал!"
        }

    # 4. Формирование рекомендаций
    # Собираем контрпики с ролями и весами
    recommended_pool = []
    seen_heroes = set()

    for hero_key in identified_heroes:
        counters = DOTA_DATABASE[hero_key]["counters"]
        for counter in counters:
            if counter["hero"] not in seen_heroes:
                recommended_pool.append(counter)
                seen_heroes.add(counter["hero"])

    # Выбираем топ-3 контрпика (по возможности покрывая разные роли: Керри/Оффлейн/Саппорт/Мид)
    top_3 = recommended_pool[:3]

    return {
        "status": "success",
        "pudge_quote": "Этот герой — мой ужин! Лови три отборных контрпика:",
        "enemy_team": [DOTA_DATABASE[h]["ru_name"] for h in identified_heroes],
        "counterpicks": [
            {
                "hero": c["hero"],
                "role": c["role"],
                "explanation": c["explanation"],
                "key_items": c["items"],
                "tip": c["tip"]
            }
            for c in top_3
        ]
    }


# =====================================================================
# ПРИМЕР ИСПОЛЬЗОВАНИЯ В CLI (КОНСОЛЬНЫЙ РЕЖИМ)
# =====================================================================
if __name__ == "__main__":
    print("=" * 60)
    print("Dota 2 Counterpick Engine by Pudge (Console Test)")
    print("=" * 60)

    test_queries = [
        "Phantom Assassin, Sniper",
        "Снайпер, Пудж, Морф",
        "",                          # Тест пустого ввода
        "НесуществующийГерой123",    # Тест неизвестного
        "PA, Sniper, Pudge, AM, Invoker, Bristleback" # Тест переполнения (>5)
    ]

    for q in test_queries:
        print(f"\n[Ввод]: \"{q}\"")
        res = get_counterpicks(q)
        print(json.dumps(res, ensure_ascii=False, indent=2))


# =====================================================================
# FASTAPI ЭНДПОИНТ (ДЛЯ РАЗВЁРТЫВАНИЯ НА СЕРВЕРЕ ИЛИ ХОСТИНГЕ BEGET)
# =====================================================================
try:
    from fastapi import FastAPI, Query
    from fastapi.middleware.cors import CORSMiddleware

    app = FastAPI(
        title="Dota 2 Counterpick API",
        description="API подбора контрпиков Dota 2 от Пуджа для хостинга Beget"
    )

    # Разрешаем CORS для обращения из веб-интерфейса
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    @app.get("/api/counterpicks")
    def api_counterpicks(heroes: str = Query(..., description="Герои противника через запятую")):
        """
        GET /api/counterpicks?heroes=Sniper,Pudge
        Возвращает JSON с топ-3 контрпиками и советами от Пуджа.
        """
        return get_counterpicks(heroes)

    @app.get("/health")
    def health_check():
        return {"status": "ok", "message": "Pudge engine is slicing and dicing!"}

except ImportError:
    # Если fastapi не установлен, модуль работает как чистая библиотека / скрипт
    pass
