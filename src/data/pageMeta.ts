export type PageMeta = {
  path: string
  number: string
  label: {
    en: string
    bg: string
  }
  title: {
    en: string
    bg: string
  }
  intro: {
    en: string
    bg: string
  }
}

export const pageMeta = {
  home: {
    path: '/',
    number: '00',
    label: { en: 'Home', bg: 'Начало' },
    title: { en: 'Sunny Beach & Beyond', bg: 'Слънчев бряг и отвъд' },
    intro: {
      en: 'A coastal field guide for beaches, routes, nightlife, places and archive stories.',
      bg: 'Крайбрежен гид за плажове, маршрути, нощен живот, места и архивни истории.',
    },
  },
  vibes: {
    path: '/vibes',
    number: '01',
    label: { en: 'Vibes', bg: 'Настроения' },
    title: { en: 'Choose Your Vibe', bg: 'Избери настроение' },
    intro: {
      en: 'Match the day to a coastal mood before choosing zones, beaches and timing.',
      bg: 'Свържи деня с крайбрежно настроение, преди да избереш зони, плажове и време.',
    },
  },
  areas: {
    path: '/areas',
    number: '02',
    label: { en: 'Areas', bg: 'Зони' },
    title: { en: 'Areas', bg: 'Зони' },
    intro: {
      en: 'Compare Sunny Beach, Nessebar, Sveti Vlas and Elenite as practical bases.',
      bg: 'Сравни Слънчев бряг, Несебър, Свети Влас и Елените като практични бази.',
    },
  },
  beaches: {
    path: '/beaches',
    number: '03',
    label: { en: 'Beaches', bg: 'Плажове' },
    title: { en: 'Beaches', bg: 'Плажове' },
    intro: {
      en: 'Read the shoreline by access, crowd level, calm, family fit and after-beach plans.',
      bg: 'Прочети брега според достъп, тълпи, спокойствие, семейна пригодност и план след плаж.',
    },
  },
  nightlife: {
    path: '/nightlife',
    number: '04',
    label: { en: 'Nightlife', bg: 'Нощен живот' },
    title: { en: 'Nightlife', bg: 'Нощен живот' },
    intro: {
      en: 'Plan evenings around mood, noise, transport and the shape of the night.',
      bg: 'Планирай вечерите според настроение, шум, транспорт и ритъм на нощта.',
    },
  },
  notes: {
    path: '/notes',
    number: '05',
    label: { en: 'Notes', bg: 'Бележки' },
    title: { en: 'Local Notes', bg: 'Локални бележки' },
    intro: {
      en: 'Keep the small rules for timing, crowds, transport and quieter decisions close at hand.',
      bg: 'Дръж под ръка малките правила за време, тълпи, транспорт и по-спокойни решения.',
    },
  },
  map: {
    path: '/map',
    number: '06',
    label: { en: 'Map', bg: 'Карта' },
    title: { en: 'Interactive Map', bg: 'Интерактивна карта' },
    intro: {
      en: 'Filter coastal places, save stops and sketch a simple route.',
      bg: 'Филтрирай крайбрежни места, запази спирки и очертай прост маршрут.',
    },
  },
  places: {
    path: '/places',
    number: '07',
    label: { en: 'Places', bg: 'Места' },
    title: { en: 'Places & Experiences', bg: 'Места и преживявания' },
    intro: {
      en: 'Browse restaurants, bars, walks, viewpoints, attractions and useful coastal stops.',
      bg: 'Разгледай ресторанти, барове, разходки, гледки, атракции и полезни крайбрежни спирки.',
    },
  },
  routes: {
    path: '/routes',
    number: '08',
    label: { en: 'Routes', bg: 'Маршрути' },
    title: { en: 'Local Routes', bg: 'Локални маршрути' },
    intro: {
      en: 'Shape beach days, party nights, family plans and sunset dinners into simple routes.',
      bg: 'Оформи плажни дни, парти вечери, семейни планове и залезни вечери в прости маршрути.',
    },
  },
  archive: {
    path: '/archive',
    number: '09',
    label: { en: 'Archive', bg: 'Архив' },
    title: { en: 'Archive', bg: 'Архив' },
    intro: {
      en: 'Trace the resort coast from older postcards and plans to the layered summer map today.',
      bg: 'Проследи курортния бряг от стари картички и планове до днешната многослойна лятна карта.',
    },
  },
} satisfies Record<string, PageMeta>
