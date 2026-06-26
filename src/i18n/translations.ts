export type Language = 'en' | 'bg'
export type LocalizedText = string | { en: string; bg: string }

export const LANGUAGE_STORAGE_KEY = 'sunny-beach-language'

export const bgTranslations: Record<string, string> = {
  'Sunny Beach & Beyond': 'Слънчев бряг и отвъд',
  'Sunny Beach & Beyond.': 'Слънчев бряг и отвъд.',
  '& Beyond.': 'и отвъд.',
  'Coastal Bulgaria field guide': 'Крайбрежен гид на България',
  'A cinematic local guide to beaches, nightlife, old-town walks, marina evenings and the small coastal decisions that shape a better summer.':
    'Кинематографичен местен гид за плажове, нощен живот, разходки в стария град, вечери около марината и малките крайбрежни решения за по-добро лято.',
  '4 zones': '4 зони',
  'one coast': 'едно крайбрежие',
  '20 years': '20 години',
  'local rhythm': 'локален ритъм',
  'map + routes': 'карта + маршрути',
  'built in': 'вградени',
  'Choose Your Vibe': 'Избери настроение',
  'Open Interactive Map': 'Отвори интерактивната карта',
  'Continue the guide': 'Продължи към гида',
  Guide: 'Гид',
  Vibes: 'Настроения',
  Areas: 'Зони',
  Beaches: 'Плажове',
  Nightlife: 'Нощен живот',
  Notes: 'Бележки',
  Map: 'Карта',
  Places: 'Места',
  Routes: 'Маршрути',
  Archive: 'Архив',
  Language: 'Език',
  'Primary navigation': 'Основна навигация',
  'Open navigation menu': 'Отвори навигационното меню',
  'Close navigation menu': 'Затвори навигационното меню',

  'Beach Day': 'Плажен ден',
  'Party Night': 'Парти вечер',
  'Family Trip': 'Семейна разходка',
  'History Walk': 'Историческа разходка',
  'Romantic Sunset': 'Романтичен залез',
  'Luxury Marina': 'Премиум марина',
  'Chill Coffee': 'Спокойно кафе',
  'Photo Spots': 'Фото точки',
  'Easy sand, warm water, rented loungers, and a plan that can stay loose until sunset.':
    'Лесен плаж, топла вода, шезлонги под наем и план, който може да остане свободен до залез.',
  'Bright streets, loud beach venues, late food, and a night that works best with a simple route home.':
    'Светли улици, шумни плажни места, късна храна и вечер, която работи най-добре с ясен маршрут обратно.',
  'Short walks, calmer beach zones, snack stops, and enough shade to make the day easier.':
    'Кратки разходки, по-спокойни плажни зони, места за хапване и достатъчно сянка за по-лек ден.',
  'Stone lanes, churches, sea walls, and small pauses around Old Nessebar.':
    'Каменни улички, църкви, морски стени и малки паузи около Стария Несебър.',
  'A slower evening with bay views, a waterfront walk, and dinner after the light softens.':
    'По-бавна вечер с гледки към залива, разходка край водата и вечеря след омекването на светлината.',
  'Sveti Vlas at its polished end: boats, sea-facing terraces, and a quieter dress-up mood.':
    'Свети Влас в най-полираната си част: лодки, тераси към морето и по-спокойно елегантно настроение.',
  'A morning or late afternoon pause away from the loudest strips and busiest beach paths.':
    'Сутрешна или късноследобедна пауза далеч от най-шумните улици и най-натоварените плажни пътеки.',
  'Old-town corners, marina views, beach light, and viewpoints that are worth timing carefully.':
    'Кътчета в стария град, гледки към марината, плажна светлина и панорамни места, които си струва да улучиш навреме.',

  sand: 'пясък',
  swimming: 'плуване',
  daytime: 'през деня',
  clubs: 'клубове',
  bars: 'барове',
  'late night': 'късна вечер',
  kids: 'деца',
  'easy access': 'лесен достъп',
  'quiet zones': 'спокойни зони',
  walking: 'разходка',
  'old town': 'стар град',
  sunset: 'залез',
  dinner: 'вечеря',
  views: 'гледки',
  marina: 'марина',
  dining: 'вечеря',
  cafes: 'кафенета',
  'slow travel': 'бавно пътуване',
  breaks: 'паузи',
  photos: 'снимки',
  viewpoints: 'панорамни места',
  'golden hour': 'златен час',
  drinks: 'напитки',
  music: 'музика',
  dancing: 'танци',
  groups: 'групи',
  summer: 'лято',
  restaurants: 'ресторанти',
  snacks: 'лека храна',
  takeaway: 'храна за вкъщи',
  cocktails: 'коктейли',
  quieter: 'по-спокойно',
  central: 'централно',
  loungers: 'шезлонги',
  busy: 'оживено',
  'north end': 'северен край',
  hotels: 'хотели',
  'south end': 'южен край',
  'Cacao area': 'зоната около Какао',
  'old town nearby': 'старият град е наблизо',
  'seasonal crowds': 'сезонни тълпи',
  calmer: 'по-спокойно',
  quiet: 'спокойно',
  bay: 'залив',
  'planned transport': 'планиран транспорт',
  'resort strip': 'курортна ивица',
  'nightlife access': 'достъп до нощен живот',
  'easy logistics': 'лесна логистика',
  'sea walls': 'морски стени',
  'bay views': 'гледки към залива',
  'evening walks': 'вечерни разходки',
  'quiet edge': 'тих край',
  'planned day': 'планиран ден',

  'Selected mood': 'Избрано настроение',
  'Mood indicators': 'Индикатори за настроение',
  'Fit read': 'Подходящ избор',
  'Recommendation flow': 'Препоръчителен план',
  'Why this works': 'Защо работи',
  'Avoid if': 'Избягвай, ако',
  'Field note': 'Локална бележка',
  'Day timing': 'Подходящ момент',
  Energy: 'Енергия',
  Calm: 'Спокойствие',
  Walking: 'Разходки',
  Planning: 'Планиране',
  'Easy daytime pace': 'Лесно дневно темпо',
  'Better away from the center': 'По-добре далеч от центъра',
  'Short walks are enough': 'Кратките разходки стигат',
  'Not the focus': 'Не е основният фокус',
  'Simple and forgiving': 'Лесно и прощаващо',
  'Beach memories, not viewpoints': 'Плажни спомени, не панорами',
  'Pick one zone early': 'Избери една зона отрано',
  'Low if you stay nearby': 'Ниско, ако си наблизо',
  'The loudest mood': 'Най-шумното настроение',
  'Quiet is not the goal': 'Тишината не е целта',
  'Works if you stay central/south': 'Работи, ако си в центъра или на юг',
  'Strongest match': 'Най-силно съвпадение',
  'Adult/group route': 'Маршрут за възрастни или група',
  'Atmosphere over views': 'Атмосфера пред гледки',
  'Return plan matters': 'Планът за връщане е важен',
  'Late travel friction': 'Късното придвижване е по-трудно',
  'Low-stress day': 'Ден с ниско напрежение',
  'North is kinder': 'Северът е по-мек',
  'Keep distances short': 'Дръж разстоянията кратки',
  'Not a late plan': 'Не е късен план',
  'Best family mood': 'Най-добро семейно настроение',
  'Casual memories': 'Неформални спомени',
  'Shade and food matter': 'Сянката и храната са важни',
  'Avoid cross-resort hops': 'Избягвай прескачане през целия курорт',
  'Slow but active': 'Бавно, но активно',
  'Depends on timing': 'Зависи от времето',
  'Core of the mood': 'Същината на настроението',
  'Not the point': 'Не е целта',
  'Works if not rushed': 'Работи, ако не се бърза',
  'Best old-town light': 'Най-добрата светлина в стария град',
  'Crowd timing matters': 'Времето спрямо тълпите е важно',
  'Roads can slow the day': 'Пътищата могат да забавят деня',
  'Central orientation': 'Ориентация в центъра',
  'North beach base': 'База на северния плаж',
  'Shade or lunch pause': 'Пауза за сянка или обяд',
  'Late promenade': 'Късна разходка по алеята',
  'Dinner near center': 'Вечеря близо до центъра',
  'Beach bar warmup': 'Загрявка в плажен бар',
  'Cacao or club zone': 'Какао или клубна зона',
  'Food and return': 'Храна и връщане',
  'Easy start': 'Лесен старт',
  'North beach time': 'Време на северния плаж',
  'Shaded lunch': 'Обяд на сянка',
  'Short evening walk': 'Кратка вечерна разходка',
  'Arrive with buffer': 'Пристигни с резерв',
  'Pier or old lanes': 'Кей или стари улички',
  'Churches and sea walls': 'Църкви и морски стени',
  'Golden-hour pause': 'Пауза в златния час',
  'Morning start, late promenade': 'Сутрешен старт, късна алея',
  'Dinner first, late peak': 'Първо вечеря, после късен пик',
  'you try to cross too many beach zones in one hot day': 'се опитваш да минеш през твърде много плажни зони в един горещ ден',
  'you have not decided how everyone gets back': 'не сте решили как всички ще се приберат',
  'you build a day with too many transfers and no shade plan': 'правиш ден с твърде много прехвърляния и без план за сянка',
  'you arrive at peak afternoon expecting empty streets': 'пристигаш в пиковия следобед и очакваш празни улици',
  'Start earlier, pick one beach zone, and save the promenade for late afternoon.':
    'Започни по-рано, избери една плажна зона и остави алеята за късния следобед.',
  'Beach Day works best when the plan is simple: one beach zone, shade, and low-friction movement.':
    'Плажният ден работи най-добре с прост план: една плажна зона, сянка и лесно движение.',
  'It gives you the resort without turning the day into a transfer puzzle.':
    'Дава ти курорта, без да превръща деня в пъзел от прехвърляния.',
  'Best when the day stays simple: morning beach, light walk, late promenade.':
    'Най-добре е, когато денят остане прост: сутрешен плаж, лека разходка, късна алея.',
  'Plan the return before the night starts; short summer distances can still feel long at 3am.':
    'Планирай връщането преди да започне вечерта; кратките летни разстояния пак могат да се усещат дълги в 3 сутринта.',
  'Party Night needs a return plan before the evening starts.':
    'Парти вечерта има нужда от план за връщане още преди началото.',
  'It keeps the night pointed toward the loud zones while protecting the end of the route.':
    'Държи вечерта насочена към шумните зони, като пази края на маршрута.',
  'Best when dinner, loud stops, late food and the return plan are decided in that order.':
    'Най-добре е, когато вечерята, шумните спирки, късната храна и връщането са решени точно в този ред.',
  'Keep food, shade, and walking distance simple instead of crossing the resort repeatedly.':
    'Дръж храната, сянката и разстоянията пеша лесни, вместо да пресичаш курорта многократно.',
  'Family Trip should prioritize shade, easy food, and fewer transfers.':
    'Семейната разходка трябва да дава приоритет на сянка, лесна храна и по-малко прехвърляния.',
  'It reduces decision fatigue and keeps the day close to practical food, sand, and rest points.':
    'Намалява умората от решения и държи деня близо до практична храна, пясък и места за почивка.',
  'Best when shade, food and short walking distances come before variety.':
    'Най-добре е, когато сянката, храната и кратките разстояния са преди разнообразието.',
  'Go morning or golden hour if you want the old town to feel like a place, not a queue.':
    'Отиди сутрин или в златния час, ако искаш старият град да се усеща като място, не като опашка.',
  'History Walk works best when Nessebar is timed, not rushed.':
    'Историческата разходка работи най-добре, когато Несебър е уцелен като време, не претупан.',
  'It treats Nessebar as a slow walk with light and pauses, not a quick checkbox stop.':
    'Третира Несебър като бавна разходка със светлина и паузи, не като бърза отметка.',
  'Best when you protect the old-town walk from peak crowds and harsh midday light.':
    'Най-добре е, когато пазиш разходката в стария град от пикови тълпи и сурова обедна светлина.',
  'Best area': 'Най-подходяща зона',
  'First stop': 'Първа спирка',
  Beach: 'Плаж',
  Route: 'Маршрут',
  Transport: 'Транспорт',
  Photo: 'Снимки',
  'Mood /': 'Настроение /',
  'Mood / 01': 'Настроение / 01',
  'Mood / 02': 'Настроение / 02',
  'Mood / 03': 'Настроение / 03',
  'Mood / 04': 'Настроение / 04',
  'Mood / 05': 'Настроение / 05',
  'Mood / 06': 'Настроение / 06',
  'Mood / 07': 'Настроение / 07',
  'Mood / 08': 'Настроение / 08',
  'Step 1': 'Стъпка 1',
  'Step 2': 'Стъпка 2',
  'Step 3': 'Стъпка 3',
  'Step 4': 'Стъпка 4',
  'Best for': 'Най-добро за',
  'Best use': 'Най-добра употреба',
  'First move': 'Първа стъпка',
  'Local takeaway': 'Локален извод',
  'Decision guide': 'Гид за избор',
  'Decision indicators': 'Индикатори за избор',
  'Decision rule': 'Правило за избор',
  'What this area is good at': 'В какво тази зона е най-силна',
  Active: 'Активно',
  'Selected zone': 'Избрана зона',
  'Coastal decision map': 'Карта за крайбрежен избор',
  'Area 01': 'Зона 01',
  'Area 02': 'Зона 02',
  'Area 03': 'Зона 03',
  'Area 04': 'Зона 04',

  'Sunny Beach': 'Слънчев бряг',
  Nessebar: 'Несебър',
  'Sveti Vlas': 'Свети Влас',
  Elenite: 'Елените',
  'North Sunny Beach': 'Северен Слънчев бряг',
  'Central Sunny Beach': 'Централен Слънчев бряг',
  'South Sunny Beach': 'Южен Слънчев бряг',
  'Nessebar Beach': 'Плаж Несебър',
  'Sveti Vlas Beach': 'Плаж Свети Влас',
  'Elenite Beach': 'Плаж Елените',
  'Old Nessebar': 'Старият Несебър',
  'Sveti Vlas Marina': 'Марината в Свети Влас',
  'Marina Dinevi': 'Марина Диневи',
  'Cacao Beach Area': 'Зоната около Какао Бийч',
  'Late Night Food': 'Късна храна',
  'Beach Bars': 'Плажни барове',
  'Night Clubs': 'Нощни клубове',
  'Pool Parties': 'Пул партита',
  'Live Music': 'Музика на живо',
  'Chill Cocktail Bars': 'Спокойни коктейл барове',

  'The main resort strip': 'Основната курортна ивица',
  'Old streets and sea edges': 'Стари улици и морски ръбове',
  'Marina views and calmer evenings': 'Гледки към марината и по-спокойни вечери',
  'The quieter northern edge': 'По-тихият северен край',
  'Sunny Beach is the practical resort strip: broad sand, quick food, beach logistics, loud nights, and very different moods from north to south.':
    'Слънчев бряг е практичната курортна ивица: широк пясък, бърза храна, лесна плажна логистика, шумни нощи и много различни настроения от север на юг.',
  'Nessebar brings stone lanes, sea walls, church ruins, harbor views, and some of the heaviest foot traffic once the season peaks.':
    'Несебър носи каменни улички, морски стени, църковни руини, гледки към пристанището и едни от най-плътните тълпи в пика на сезона.',
  'Sveti Vlas feels cleaner and more sea-facing, with Marina Dinevi, calmer evenings, polished terraces, and open bay views.':
    'Свети Влас стои по-чисто и обърнато към морето, с Марина Диневи, по-спокойни вечери, подредени тераси и открити гледки към залива.',
  'Elenite sits at the northern edge, better for slower resort rhythm, tucked-away beach time, and days planned around staying put.':
    'Елените е в северния край и е по-подходящо за бавен курортен ритъм, скрито плажно време и дни, планирани около оставане на място.',
  'Check the exact hotel zone before judging walk times, beach access, or nightlife noise.':
    'Провери точната хотелска зона, преди да преценяваш разстоянията пеша, достъпа до плажа или шума вечер.',
  'Go early or near golden hour if you want texture, photos, and breathing room in the old town.':
    'Отиди рано или около златния час, ако искаш атмосфера, снимки и повече пространство в стария град.',
  'It looks close on the map, but return timing still matters if dinner turns into a longer evening.':
    'На картата изглежда близо, но времето за връщане пак е важно, ако вечерята стане по-дълга вечер.',
  'Plan transport before you go; it is quieter partly because movement is less flexible.':
    'Планирай транспорта предварително; по-тихо е отчасти защото движението е по-малко гъвкаво.',
  'Busy, flexible, seasonal': 'Оживено, гъвкаво, сезонно',
  'Textured, scenic, crowded in season': 'Атмосферно, красиво, пренаселено в сезона',
  'Polished, quieter, sea-facing': 'Подредено, по-тихо, обърнато към морето',
  'Quiet, tucked-away, planned': 'Тихо, скрито, планирано',

  'First Time in Sunny Beach': 'Първи път в Слънчев бряг',
  'Party Night Route': 'Маршрут за парти вечер',
  'Chill Day in Sveti Vlas': 'Спокоен ден в Свети Влас',
  'History Walk in Nessebar': 'Историческа разходка в Несебър',
  'Family Beach Day': 'Семеен плажен ден',
  'Sunset & Dinner Route': 'Маршрут за залез и вечеря',
  'Half day': 'Половин ден',
  'Full day': 'Цял ден',
  Evening: 'Вечер',
  'Late morning to sunset': 'Късна сутрин до залез',
  'Evening to late night': 'Вечер до късно',
  'After 21:00': 'След 21:00',
  'Half day to full day': 'Половин до цял ден',
  'Afternoon to evening': 'Следобед до вечер',
  '3 to 4 hours': '3 до 4 часа',
  'Morning or golden hour': 'Сутрин или златен час',
  'Morning start': 'Сутрешен старт',
  'Golden hour': 'Златен час',
  'Multiple areas': 'Няколко зони',
  'First-time visitors who want the basic layout fast': 'Посетители за първи път, които искат бързо да се ориентират',
  'Groups planning a loud night without complicated transfers': 'Групи, които планират шумна вечер без сложни прехвърляния',
  'A quieter day with views, food, and less resort noise': 'По-тих ден с гледки, храна и по-малко курортен шум',
  'History, photos, and a slower walk away from the resort strip': 'История, снимки и по-бавна разходка далеч от курортната ивица',
  'Families who want easy access and fewer moving parts': 'Семейства, които искат лесен достъп и по-малко движение',
  'Couples or friends who want views before dinner': 'Двойки или приятели, които искат гледки преди вечеря',
  'Central promenade': 'Централна алея',
  'Promenade walk': 'Разходка по алеята',
  'South Beach': 'Южен плаж',
  'Sunset drink near the sand': 'Напитка по залез близо до пясъка',
  'Dinner near the center': 'Вечеря близо до центъра',
  'Sveti Vlas Viewpoint': 'Панорамна точка в Свети Влас',
  'Dinner by the marina': 'Вечеря до марината',
  'Road to Nessebar Parking': 'Паркинг по пътя към Несебър',
  'Nessebar Old Town Pier': 'Кей при Стария Несебър',
  'Old Nessebar lanes': 'Уличките на Стария Несебър',
  'Sea wall viewpoint': 'Панорамна точка при морската стена',
  'North Beach': 'Северен плаж',
  'Shaded lunch stop': 'Обяд на сянка',
  'Early evening promenade': 'Ранна вечерна алея',
  'Waterfront dinner': 'Вечеря край водата',
  'Quiet cocktail bar': 'Тих коктейл бар',

  'First-timers, groups, and easy access': 'За първо посещение, групи и лесен достъп',
  'The most obvious beach zone, with quick access to hotels, food, loungers, and the busier promenade rhythm.':
    'Най-очевидната плажна зона, с бърз достъп до хотели, храна, шезлонги и по-оживения ритъм на алеята.',
  'A slightly calmer Sunny Beach day': 'Малко по-спокоен ден в Слънчев бряг',
  'Still part of the main resort, but often a better fit if you want space and a softer edge than the central strip.':
    'Все още е част от основния курорт, но често е по-добър избор, ако искаш повече пространство и по-мек ръб от централната ивица.',
  'Beach bars and Nessebar-side walks': 'Плажни барове и разходки към Несебър',
  'A busier southern zone that connects well with beach venues and the route toward Nessebar.':
    'По-оживена южна зона, която се свързва добре с плажни заведения и маршрута към Несебър.',
  'Combining beach time with an old-town visit': 'Комбиниране на плаж с посещение в стария град',
  'A practical beach option when the day includes Nessebar, with views and walks nearby but crowds in high season.':
    'Практичен плажен избор, когато денят включва Несебър, с гледки и разходки наблизо, но и тълпи в силния сезон.',
  'Quieter swims and marina evenings': 'По-тихо плуване и вечери около марината',
  'Smaller beach sections with a more relaxed feel and an easy link to Marina Dinevi for a later walk.':
    'По-малки плажни участъци с по-спокойно усещане и лесна връзка с Марина Диневи за по-късна разходка.',
  'Slow resort-style beach time': 'Бавно плажно време в курортен стил',
  'A quieter bay-side choice best treated as a planned beach day rather than a quick hop from the main strip.':
    'По-тих избор до залива, най-добре като планиран плажен ден, а не като бърз скок от основната ивица.',

  'Casual drinks near the sand, usually easier early in the evening before the loudest part of the night starts.':
    'Неформални напитки близо до пясъка, обикновено по-лесни рано вечер преди най-шумната част от нощта.',
  'The high-volume side of Sunny Beach, mostly clustered around the busier resort and beach-party zones.':
    'Най-шумната страна на Слънчев бряг, концентрирана около по-оживените курортни и плажни парти зони.',
  'Day-to-evening party events that suit groups who want the resort atmosphere without waiting for club hours.':
    'Дневни към вечерни партита за групи, които искат курортна атмосфера без чакане до клубните часове.',
  'More relaxed evenings around bars, restaurants, and hotel zones, with less pressure than the main clubs.':
    'По-лежерни вечери около барове, ресторанти и хотелски зони, с по-малко напрежение от основните клубове.',
  'Useful after the beach bars or clubs, especially around the main pedestrian routes and resort center.':
    'Полезно след плажните барове или клубовете, особено около основните пешеходни маршрути и центъра.',
  'Better for slower evenings, conversation, and views, especially around Sveti Vlas or quieter hotel areas.':
    'По-добро за бавни вечери, разговори и гледки, особено около Свети Влас или по-тихите хотелски зони.',
  'Sunset to late evening': 'От залез до късна вечер',
  'After midnight': 'След полунощ',
  'Afternoon to early evening': 'Следобед до ранна вечер',
  'Late night': 'Късна вечер',
  'Sunset to evening': 'От залез до вечер',

  'Sunny Beach is not one place': 'Слънчев бряг не е едно място',
  'Party zone vs quiet zone': 'Парти зона срещу тиха зона',
  'Nessebar is beautiful but crowded': 'Несебър е красив, но претъпкан',
  'Sveti Vlas feels different': 'Свети Влас се усеща различно',
  'Elenite is quieter': 'Елените е по-тихо',
  'The road to Nessebar gets busy': 'Пътят към Несебър се натоварва',
  'The north, center, and south can feel like different trips. A hotel name alone does not tell you the mood around it.':
    'Северът, центърът и югът могат да се усещат като различни пътувания. Самото име на хотела не казва какво е настроението около него.',
  'A few streets can change the night noise completely. If sleep matters, check the exact location, not just the star rating.':
    'Няколко улици могат напълно да променят нощния шум. Ако сънят е важен, провери точната локация, не само звездите.',
  'Old Nessebar is worth visiting, but in peak season it can feel more like a slow queue than a quiet walk.':
    'Старият Несебър си струва, но в пика на сезона може да се усеща повече като бавна опашка, отколкото като тиха разходка.',
  'It is close to Sunny Beach, but the marina, slopes, and hotel mix give it a calmer and more polished feel.':
    'Близо е до Слънчев бряг, но марината, склоновете и хотелският микс му дават по-спокойно и по-полирано усещане.',
  'Elenite can be a good reset, but it is less flexible for spontaneous hopping around the coast.':
    'Елените може да е добър рестарт, но е по-малко гъвкаво за спонтанно обикаляне по крайбрежието.',
  'In summer, the short route from Sunny Beach to Nessebar can take longer than expected, especially around evening.':
    'През лятото краткият маршрут от Слънчев бряг до Несебър може да отнеме повече от очакваното, особено вечер.',
  Orientation: 'Ориентация',
  Sleep: 'Сън',
  Timing: 'Тайминг',
  Mood: 'Настроение',
  Pace: 'Темпо',

  'Places & Experiences': 'Места и преживявания',
  'Scenario shortcuts': 'Бързи сценарии',
  'Quick decision rules': 'Бързи правила за избор',
  'Open guide detail': 'Отвори детайли',
  Family: 'Семейно',
  Budget: 'Бюджетно',
  Quiet: 'Спокойно',
  Day: 'Дневно',
  'Family Evening': 'Семейна вечер',
  'Romantic Dinner With View': 'Романтична вечеря с гледка',
  'Budget Beach Day': 'Бюджетен плажен ден',
  'Premium Marina Evening': 'Премиум вечер около марината',
  'Old Nessebar Golden Hour': 'Златен час в Стария Несебър',
  'Current guide focus': 'Текущ фокус на гида',
  'Featured guide previews': 'Избрани предложения от гида',
  'Recommendation active': 'Препоръката е активна',
  'Guide detail': 'Детайли от гида',
  'Close place detail': 'Затвори детайла за мястото',
  'Close guide detail': 'Затвори детайлите',
  'Close guide search': 'Затвори търсенето в гида',
  'Guide search': 'Търсене в гида',
  'Ask the guide': 'Попитай гида',
  'Find a useful coast move.': 'Намери полезен ход по крайбрежието.',
  'Search Sunny Beach guide': 'Търси в гида за Слънчев бряг',
  'Try cheap food, quiet family, party night...': 'Пробвай евтина храна, спокойно семейно, парти вечер...',
  'Try cheap food, calm family evening, party night...': 'Пробвай: евтина храна, спокойна семейна вечер, парти вечер...',
  'Quick guide intents': 'Бързи намерения в гида',
  'Best match': 'Най-добро съвпадение',
  'Guide result': 'Резултат от гида',
  'Loading guide section...': 'Зареждане на секция от гида...',
  'Open detail': 'Отвори детайли',
  'Open details': 'Отвори детайли',
  'Add to route': 'Добави към маршрута',
  'In route': 'В маршрута',
  Remove: 'Премахни',
  'Route list': 'Списък на маршрута',
  Status: 'Статус',
  Ready: 'Готово',
  Added: 'Добавено',
  'Day route': 'Дневен маршрут',
  'View on Map': 'Виж на картата',
  'Pair with Routes': 'Комбинирай с маршрути',
  'Compare area': 'Сравни зона',
  'Check nightlife style': 'Провери стила на нощния живот',
  'Use this as a beach day': 'Използвай като плажен ден',
  'Coastal planner': 'Крайбрежен планер',
  'Local tip': 'Локален съвет',
  'Route pairing': 'Комбинация с маршрут',
  'Seasonal source note': 'Сезонна бележка за източника',
  'Route plan /': 'План на маршрута /',
  compass: 'компас',
  Compass: 'Компас',
  'Mood compass': 'Компас на настроенията',
  'Mood Compass': 'Компас на настроенията',
  'Day compass': 'Дневен компас',
  friction: 'трудност',
  value: 'стойност',
  'out of 100': 'от 100',
  into: 'към',
  'Choose a coastal mood, get a day compass.': 'Избери крайбрежно настроение и получи дневен компас.',
  'Pick the kind of day you want. The guide turns it into an area, first stop, beach match, route, timing and local note.':
    'Избери какъв ден искаш. Гидът го превръща в зона, първа спирка, подходящ плаж, маршрут, време и локална бележка.',
  'Late afternoon to evening': 'Късен следобед до вечер',
  'Morning or late afternoon': 'Сутрин или късен следобед',
  'Morning edge or golden hour': 'Сутрешен ръб или златен час',
  'Golden hour into dinner': 'Златен час към вечеря',

  'Choose the right coast, not just the nearest hotel.': 'Избери правилното крайбрежие, не просто най-близкия хотел.',
  'Sunny Beach, Nessebar, Sveti Vlas, and Elenite may sit close together, but each one changes the whole rhythm of a trip. Use this area guide to compare beach access, nightlife, transport, quietness, and first-day fit before choosing where to stay.':
    'Слънчев бряг, Несебър, Свети Влас и Елените са близо едно до друго, но всяко променя целия ритъм на пътуването. Използвай този гид, за да сравниш достъп до плаж, нощен живот, транспорт, спокойствие и първи ден, преди да избереш къде да отседнеш.',
  'Resort strip: high-energy resort base': 'Курортна ивица: енергична курортна база',
  'high-energy resort base': 'енергична курортна база',
  'Use it as the practical base when convenience matters more than atmosphere.':
    'Използвай го като практична база, когато удобството е по-важно от атмосферата.',
  'you need quiet evenings, old-town texture, or a slow local pace':
    'имаш нужда от тихи вечери, стар град или бавно локално темпо',
  'Check the hotel zone first, then choose beach time or night plans around that location.':
    'Първо провери хотелската зона, после избери плажното време или вечерните планове около тази локация.',
  'Beach base -> promenade dinner -> central nightlife, or keep north/south edges for a quieter loop.':
    'Плажна база -> вечеря на алеята -> централен нощен живот, или остани по северния/южния край за по-спокоен кръг.',
  'Pick Sunny Beach when you want frictionless logistics and do not mind seasonal volume.':
    'Избери Слънчев бряг, когато искаш лесна логистика и не те притеснява сезонната интензивност.',
  'Treat north, center, and south Sunny Beach as different stays. The exact zone changes noise, walking time, and beach rhythm.':
    'Приемай северен, централен и южен Слънчев бряг като различни престои. Точната зона променя шума, ходенето и плажния ритъм.',
  'Beach access': 'Достъп до плаж',
  'easy sand reach': 'лесен достъп до пясъка',
  'main late zone': 'основна късна зона',
  quietness: 'спокойствие',
  'edge dependent': 'зависи от края',
  'Transport friction': 'Транспортна трудност',
  'traffic peaks': 'пиков трафик',
  'First-timer fit': 'Подходящо за първо посещение',
  'simple base': 'лесна база',
  'Very easy: broad sand and paid zones are close to most hotels.':
    'Много лесно: широкият пясък и платените зони са близо до повечето хотели.',
  'Highest concentration of late bars, clubs, and loud promenade energy.':
    'Най-висока концентрация на късни барове, клубове и шумна енергия по алеята.',
  'Simple inside the resort, but summer traffic can slow short hops.':
    'Лесно вътре в курорта, но летният трафик може да забави кратките придвижвания.',
  'Works best in quieter hotel pockets away from the loudest center streets.':
    'Работи най-добре в по-тихи хотелски джобове далеч от най-шумните централни улици.',
  'Lowest in the center, better toward the edges.': 'Най-ниско е в центъра, по-добро към краищата.',
  'Choose by day rhythm first: beach access, evening plans, and return transport matter more here than pure map distance.':
    'Избирай първо по дневен ритъм: достъпът до плаж, вечерните планове и транспортът обратно са по-важни от чистото разстояние на картата.',
  'Historic sea-wall wander': 'Историческа разходка край морската стена',
  'old streets, sea views, photos, golden-hour walks, one compact culture hit':
    'стари улици, морски гледки, снимки, разходки в златния час и компактна културна спирка',
  'you dislike crowds, stairs, uneven stone lanes, or slow peak-season foot traffic':
    'не обичаш тълпи, стълби, неравни каменни улички или бавно движение в пика на сезона',
  'Polished marina coast': 'Полиран крайбрежен ритъм около марината',
  'bay views, quieter evenings, marina dinners, couples, calmer hotel rhythm':
    'гледки към залива, по-тихи вечери, вечери около марината, двойки и по-спокоен хотелски ритъм',
  'you want the loudest nightlife on foot or a fully spontaneous late return':
    'искаш най-шумния нощен живот пеша или напълно спонтанно късно връщане',
  'Quiet northern retreat': 'Тихо северно отдръпване',
  'slower resort days, low-noise beach time, families who plan to stay put':
    'по-бавни курортни дни, тихо плажно време и семейства, които планират да останат на място',
  'you need frequent taxis, late-night choice, or flexible hopping between areas':
    'имаш нужда от чести таксита, късен избор или гъвкаво прескачане между зони',

  'A beach atlas for choosing the right day.': 'Плажен атлас за избор на правилния ден.',
  'Beach atlas': 'Плажен атлас',
  'Compare the coast by mood, access, crowd, calm and what each shoreline is actually good for.':
    'Сравни крайбрежието по настроение, достъп, тълпи, спокойствие и реалната сила на всеки плаж.',
  'Selected shoreline': 'Избран бряг',
  'Most practical': 'Най-практично',
  Recommendation: 'Препоръка',
  'Choose Central Sunny Beach when convenience matters more than silence.':
    'Избери Централен Слънчев бряг, когато удобството е по-важно от тишината.',
  'Use it as the easy first-day base: food, loungers, promenade, and quick exits are all close.':
    'Използвай го като лесна база за първи ден: храна, шезлонги, алея и бързи изходи са близо.',
  'you want quiet sand or a low-stimulation day': 'искаш тих пясък или ден с малко стимули',
  'How to use it': 'Как да го използваш',
  'Arrive before the loudest hours, swim early, then save the promenade for a late-afternoon walk.':
    'Пристигни преди най-шумните часове, плувай рано и остави алеята за късноследобедна разходка.',
  'Good next move': 'Добър следващ ход',
  'Keep the day simple: one central beach zone first, then use the promenade only after the heat softens.':
    'Дръж деня прост: първо една централна плажна зона, после алеята чак след като жегата омекне.',
  'Best time': 'Най-добро време',
  'Morning for space, late afternoon for atmosphere': 'Сутрин за пространство, късен следобед за атмосфера',
  'High resort energy': 'Висока курортна енергия',
  Crowd: 'Тълпи',
  Access: 'Достъп',
  'Busy in peak season': 'Оживено в пика на сезона',
  'Easy on foot from central hotels': 'Лесно пеша от централни хотели',
  'Decision metrics': 'Индикатори за избор',
  'Beach fit': 'Плажно съвпадение',
  'Bright, busy and social': 'Светло, оживено и социално',
  'Not the quiet choice': 'Не е тихият избор',
  'Very easy from central hotels': 'Много лесно от централни хотели',
  'Convenient, but not calm': 'Удобно, но не спокойно',
  'Practical read': 'Практичен прочит',
  'Walkability: Promenade-friendly': 'Пешеходност: удобно за алеята',
  'Calm factor: Not the quiet choice': 'Фактор спокойствие: не е тихият избор',
  'After-beach plan: Close to the louder resort rhythm': 'План след плажа: близо до по-шумния курортен ритъм',

  'A cinematic evening guide for the coast after dark.': 'Кинематографичен вечерен гид за крайбрежието след залез.',
  'Evening guide': 'Вечерен гид',
  'Choose the night by mood, noise, transport and how you want the evening to end, from sunset cocktails to south-side club energy.':
    'Избери вечерта по настроение, шум, транспорт и желания финал: от коктейли по залез до клубна енергия на юг.',
  'Evening plan': 'Вечерен план',
  'Beach-bar warmup': 'Загрявка в плажен бар',
  'South and central Sunny Beach': 'Южен и централен Слънчев бряг',
  'It gives the night a coastal start: sunset, music, sand, and a simple exit before the club rhythm takes over.':
    'Дава на вечерта крайбрежен старт: залез, музика, пясък и лесен изход преди клубният ритъм да поеме.',
  'Night flow': 'Нощен поток',
  'A compact rhythm for how the evening usually moves.': 'Компактен ритъм за това как обикновено се движи вечерта.',
  'Medium-high': 'Средно високо',
  'Very high': 'Много високо',
  'Sunset drink': 'Напитка по залез',
  'Start while the light is still soft.': 'Започни, докато светлината още е мека.',
  'Beach bar cluster': 'Група плажни барове',
  Middle: 'Среда',
  Late: 'Късно',
  'Let the first venue set the volume.': 'Остави първото място да зададе силата.',
  'Choose louder or quieter': 'Избери по-шумно или по-спокойно',
  'Do not drift south by accident if you want a quiet night.':
    'Не се плъзгай случайно на юг, ако искаш спокойна вечер.',
  'Direct walk or taxi back': 'Директна разходка или такси обратно',
  'Keep the return route simple.': 'Дръж маршрута обратно прост.',
  'Walkable if you stay central or south; taxi back if your hotel sits outside the strip.':
    'Пешеходно е, ако си в центъра или на юг; вземи такси обратно, ако хотелът е извън ивицата.',
  'Beach bars work best before the loudest part of the night starts.':
    'Плажните барове работят най-добре преди най-шумната част на нощта.',
  'Night indicators': 'Нощни индикатори',
  'Decision layer': 'Слой за избор',
  'Social without starting at club level': 'Социално, без да започва директно на клубно ниво',
  'Busy when sunset turns into evening': 'Оживено, когато залезът стане вечер',
  'Easy if you plan the way back': 'Лесно, ако планираш връщането',
  'Casual rather than refined': 'Неформално, не изискано',
  'After-hours read': 'Прочит след часовете',
  'Late snacks are easiest around the main pedestrian areas.':
    'Късната лека храна е най-лесна около основните пешеходни зони.',
  'Return plan': 'План за връщане',
  'Decide whether this stays a beach-bar night before the group drifts toward louder south-side routes.':
    'Реши дали това остава вечер с плажни барове, преди групата да се насочи към по-шумните южни маршрути.',
  Noise: 'Шум',
  'Full-volume club night': 'Клубна вечер на пълна сила',
  'Day-party bridge': 'Мост към дневно парти',
  'Relaxed atmosphere': 'Спокойна атмосфера',
  'Practical reset': 'Практичен рестарт',
  'Polished slow evening': 'Подредена бавна вечер',

  'Local notes': 'Локални бележки',
  'Insider field notes for small decisions that matter.': 'Вътрешни бележки за малките решения, които имат значение.',
  'Insider field notes': 'Вътрешни локални бележки',
  'Practical local rules for choosing where to stay, when to move, how to read crowds, and which coastal tradeoffs to solve before they become annoying.':
    'Практични локални правила за избор на място, време за движение, прочит на тълпите и крайбрежните компромиси, преди да станат досадни.',
  'First decision layer': 'Първи слой на избор',
  'Choose by zone, not just by resort name.': 'Избирай по зона, не само по име на курорт.',
  'North, center and south can feel like different trips. Beach calm, walk times and night noise all shift by zone.':
    'Северът, центърът и югът могат да се усещат като различни пътувания. Плажното спокойствие, разстоянията пеша и нощният шум се променят по зона.',
  'What it means': 'Какво означава',
  'Avoid this mistake': 'Избягвай тази грешка',
  'Booking from a hotel name alone without checking its exact part of the resort.':
    'Резервация само по име на хотел, без проверка на точната му част от курорта.',
  'Best used when': 'Най-добре използвай, когато',
  'Related area or route': 'Свързана зона или маршрут',
  'Local usefulness': 'Локална полезност',
  'Planning importance': 'Важност на планирането',
  'Crowd impact': 'Ефект от тълпите',
  'Night risk': 'Нощен риск',
  'Practical use': 'Практична употреба',
  'Field read': 'Локален прочит',
  Area: 'Зона',
  'Resort strip': 'Курортна ивица',
  'first timers, easy beach days, nightlife access, groups who want everything nearby':
    'за първо посещение, лесни плажни дни, достъп до нощен живот и групи, които искат всичко наблизо',
  'First-time resort day': 'Първи курортен ден',
  'Promenade-friendly': 'Удобно за алеята',
  'Calm factor': 'Фактор спокойствие',
  'After-beach plan': 'План след плажа',
  'Close to the louder resort rhythm': 'Близо до по-шумния курортен ритъм',
  'Softer resort': 'По-мек курорт',
  'Medium resort energy': 'Средна курортна енергия',
  'you need to stay close to south-side bars': 'трябва да останеш близо до баровете на юг',
  'Best for momentum': 'Най-добро за инерция',
  'High beach-bar energy': 'Висока енергия на плажни барове',
  'you want a purely calm family beach day': 'искаш изцяло спокоен семеен плажен ден',
  'Best paired plan': 'Най-добър комбиниран план',
  'Medium visitor energy': 'Средна посетителска енергия',
  'you are trying to avoid transport friction': 'опитваш се да избегнеш транспортна трудност',
  'Most polished': 'Най-полирано',
  'Calm marina energy': 'Спокойна енергия около марината',
  'you want the loudest resort energy nearby': 'искаш най-шумната курортна енергия наблизо',
  'Quietest edge': 'Най-тихият край',
  'Calm resort energy': 'Спокойна курортна енергия',
  'you want flexible hopping between areas': 'искаш гъвкаво прескачане между зони',
  Polish: 'Полираност',
  'Busy near the sand': 'Оживено близо до пясъка',
  'Best for casual drinks that can stay easy or become louder.':
    'Най-добро за неформални напитки, които могат да останат спокойни или да станат по-шумни.',
  'For groups who want the loudest Sunny Beach rhythm.':
    'За групи, които искат най-шумния ритъм на Слънчев бряг.',
  'Peak crowd risk': 'Риск от пикови тълпи',
  High: 'Високо',
  'Good for groups who want resort energy before club hours.':
    'Добро за групи, които искат курортна енергия преди клубните часове.',
  'Event-dependent': 'Зависи от събитието',
  Moderate: 'Умерено',
  'For atmosphere without the commitment of a club night.':
    'За атмосфера без ангажимента на клубна вечер.',
  'Low-medium': 'Ниско-средно',
  'The useful late-night move, not the glamorous one.':
    'Полезният късен ход, не бляскавият.',
  'Busy after venues close': 'Оживено след затваряне на заведенията',
  'For a polished evening with views and lower noise.':
    'За подредена вечер с гледки и по-нисък шум.',
  'Lower, reservation-dependent': 'По-ниско, зависи от резервации',
  'Treat Sunny Beach like several small coastal moods, not one single resort.':
    'Приемай Слънчев бряг като няколко малки крайбрежни настроения, не като един курорт.',
  'Before choosing a hotel, beach base or first evening plan.':
    'Преди избор на хотел, плажна база или първи вечерен план.',
  'Sunny Beach north, center and south': 'Север, център и юг на Слънчев бряг',
  'Matters, but location matters more': 'Важно е, но локацията е по-важна',
  'Zone choice changes transfers': 'Изборът на зона променя придвижването',
  'Pressure varies north to south': 'Натискът варира от север към юг',
  'Noise risk': 'Риск от шум',
  'A few blocks can change the night': 'Няколко пресечки могат да променят вечерта',
  'Strong if the zone matches your plans': 'Силна, ако зоната пасва на плановете',
  'The highest-impact early choice': 'Най-важният ранен избор',
  Rule: 'Правило',
  'Noise filter': 'Филтър за шум',
  'A few streets decide the night soundtrack.': 'Няколко улици решават нощния саундтрак.',
  'Crowd timing': 'Тайминг спрямо тълпите',
  'Treat Nessebar as a timed visit.': 'Приемай Несебър като посещение с правилен час.',
  'Marina rhythm': 'Ритъм на марината',
  'Use Sveti Vlas for a mood shift.': 'Използвай Свети Влас за смяна на настроението.',
  'Slow edge': 'Бавен край',
  'Plan the return before you go quiet.': 'Планирай връщането преди да тръгнеш към тишината.',
  'Add buffer time to short coastal hops.': 'Добави резервно време към кратките крайбрежни придвижвания.',
  'Interactive coast preview.': 'Интерактивен преглед на крайбрежието.',
  'Planning tool': 'Инструмент за планиране',
  'Filter the coastal map by area or category, save up to four stops, and open Google Maps when you want real-world directions.':
    'Филтрирай крайбрежната карта по зона или категория, запази до четири спирки и отвори Google Maps за реални упътвания.',
  '10 places': '10 места',
  'Current view': 'Текущ изглед',
  'All areas / all categories': 'Всички зони / всички категории',
  '10 places visible on the coast.': '10 места са видими по крайбрежието.',
  'whole coast': 'цялото крайбрежие',
  All: 'Всички',
  Category: 'Категория',
  'all types': 'всички типове',
  Restaurants: 'Ресторанти',
  Cafes: 'Кафенета',
  Bars: 'Барове',
  Clubs: 'Клубове',
  Hotels: 'Хотели',
  Parking: 'Паркинг',
  Viewpoints: 'Панорами',
  Club: 'Клуб',
  View: 'Гледка',
  Dine: 'Вечеря',
  Park: 'Паркиране',
  'Map legend': 'Легенда на картата',
  'Selected pin': 'Избран пин',
  'Route stop': 'Спирка от маршрута',
  'Available place': 'Достъпно място',
  'Filter tip': 'Съвет за филтриране',
  'Use area first, then category. Distance alone does not tell the full summer rhythm.':
    'Използвай първо зона, после категория. Самото разстояние не казва целия летен ритъм.',
  'Coastal explorer': 'Крайбрежен изследовател',
  'Burgas Bay': 'Бургаски залив',
  'Sunny Beach strip': 'Ивицата на Слънчев бряг',
  'South beach': 'Южен плаж',
  'Start with one place.': 'Започни с едно място.',
  'Add one more place to shape the route.': 'Добави още едно място, за да оформиш маршрута.',
  'Good simple day route.': 'Добър семпъл дневен маршрут.',
  'Too many stops for a relaxed coastal plan.': 'Твърде много спирки за спокоен крайбрежен план.',
  'Route cleared. Start again with one strong place.': 'Маршрутът е изчистен. Започни отново с едно силно място.',
  'Best match selected:': 'Избрано най-добро съвпадение:',
  'is already in the route.': 'вече е в маршрута.',
  'added. Add one more stop to shape the route.': 'е добавено. Добави още една спирка, за да оформиш маршрута.',
  'added. This is becoming a useful coast route.': 'е добавено. Това вече става полезен крайбрежен маршрут.',
  'added. Route keeps the latest four stops.': 'е добавено. Маршрутът пази последните четири спирки.',
  'removed from the route.': 'е премахнато от маршрута.',
  Clear: 'Изчисти',
  'No exact match yet. Try family, dinner, quiet, budget or party.':
    'Още няма точно съвпадение. Пробвай семейно, вечеря, спокойно, бюджетно или парти.',
  'Showing': 'Показани',
  'local matches.': 'местни съвпадения.',
  'options for': 'опции за',
  'Next move:': 'Следващ ход:',
  'Cheap food': 'Евтина храна',
  'Calm family evening': 'Спокойна семейна вечер',
  'Quiet family evening': 'Спокойна семейна вечер',
  'Party night': 'Парти вечер',
  'Dinner with view': 'Вечеря с гледка',
  'Old Nessebar walk': 'Старият Несебър',
  'Sveti Vlas calm': 'Спокоен Свети Влас',
  'Kids attractions': 'Атракции за деца',
  'Older visitors easy plan': 'Лесен план за по-възрастни посетители',
  'Rainy / low-energy plan': 'План за дъжд или ниска енергия',
  'Lower-cost food anchors and simple route fuel.': 'По-достъпни места за храна и лесно зареждане по маршрута.',
  'Lower-friction family plans with less noise.': 'По-лесни семейни планове с по-малко шум.',
  'Loud evening routes with a return plan.': 'Шумни вечерни маршрути с план за връщане.',
  'Dinner, views and slower evening pairings.': 'Вечеря, гледки и по-бавни вечерни комбинации.',
  'Daytime sea activity and weather-aware choices.': 'Дневни морски активности с внимание към времето.',
  'Old-town lanes, sea walls and golden-hour texture.': 'Староградски улички, морски стени и атмосфера в златния час.',
  'Marina, bay views and quieter polished stops.': 'Марина, гледки към залива и по-тихи изискани спирки.',
  'Simple amusement and family promenade ideas.': 'Лесни забавления и семейни идеи по алеята.',
  'Shorter walks, calmer stops and transport-aware plans.': 'По-кратки разходки, по-спокойни спирки и планове с мисъл за транспорта.',
  'Soft backup plans when the big day is too much.': 'Меки резервни планове, когато големият ден идва в повече.',
  'Pair with Old Nessebar sea-wall walk and leave room for a slow return.':
    'Комбинирай с разходка край морската стена в Стария Несебър и остави време за спокойно връщане.',
  'Good before a promenade walk, late food stop, or central nightlife route.':
    'Подходящо преди разходка по алеята, късна храна или централен маршрут за нощен живот.',
  'Pair with North Sunny Beach, then keep the evening short and simple.':
    'Комбинирай със Северен Слънчев бряг, после запази вечерта кратка и лесна.',
  'Good before beach bars, attractions or a southward evening walk.':
    'Подходящо преди плажни барове, атракция или вечерна разходка на юг.',
  'Pair with Elenite Bay and an early return rather than another cross-coast stop.':
    'Комбинирай със залива на Елените и ранно връщане, вместо още една спирка през крайбрежието.',
  'Pair with Marina Dinevi walk or Sveti Vlas Beach.':
    'Комбинирай с разходка около Марина Диневи или плажа на Свети Влас.',
  'Pair with the sea-wall loop and leave before peak afternoon heat.':
    'Комбинирай с обиколка край морската стена и тръгни преди пиковата следобедна жега.',
  'Pair with North Sunny Beach and a low-transfer family day.':
    'Комбинирай със Северен Слънчев бряг и семеен ден с малко прехвърляния.',
  'Pair with late food and a direct return, not a random extra transfer.':
    'Комбинирай с късна храна и директно връщане, не със случаен допълнителен трансфер.',
  'Pair with central promenade food before late-night decisions.':
    'Комбинирай с храна около централната алея преди късните вечерни решения.',
  'Pair with Marina Dinevi dinner terraces or a bay-view walk.':
    'Комбинирай с вечерните тераси в Марина Диневи или разходка с гледка към залива.',
  'Pair with Cacao or central bars only if the return plan is already clear.':
    'Комбинирай с Какао или централни барове само ако планът за връщане вече е ясен.',
  'Pair with simple family food and a short promenade walk.':
    'Комбинирай с лесна семейна храна и кратка разходка по алеята.',
  'Pair with Luna Park or a calmer early promenade before late noise builds.':
    'Комбинирай с Луна парк или по-спокойна ранна алея, преди шумът да се засили.',
  'Pair with central attractions first, then choose food or drinks.':
    'Комбинирай първо с централни атракции, после избери храна или напитки.',
  'Pair with family beach day or central attractions.':
    'Комбинирай със семеен плажен ден или централни атракции.',
  'Keep dinner simple after; energy usually drops after a full waterpark day.':
    'Запази вечерята лесна след това; енергията обикновено пада след цял ден в аквапарка.',
  'Pair with a simple beach lunch and avoid stacking a heavy nightlife plan afterward.':
    'Комбинирай с лесен плажен обяд и не натрупвай тежък нощен план след това.',
  'Pair with Central Sunny Beach or South Beach, then recover with food and shade.':
    'Комбинирай с Централен Слънчев бряг или Южен плаж, после възстанови с храна и сянка.',
  'Pair with old-town dinner lanes or morning coffee if avoiding crowds.':
    'Комбинирай с вечерните улички в стария град или сутрешно кафе, ако избягваш тълпите.',
  'Pair with marina dinner terraces or Planet Yacht cocktails.':
    'Комбинирай с вечерните тераси около марината или коктейли в Planet Yacht.',
  'Pair with Marina Dinevi dinner terraces.': 'Комбинирай с вечерните тераси в Марина Диневи.',
  'Pair with Elenite slow resort dinner or an early return.':
    'Комбинирай с бавна курортна вечеря в Елените или ранно връщане.',
  'Pair with Luna Park, a simple coffee stop or a direct return before the loudest hours.':
    'Комбинирай с Луна парк, лесна кафе спирка или директно връщане преди най-шумните часове.',
  'Pair with Central Sunny Beach or a budget food window later in the day.':
    'Комбинирай с Централен Слънчев бряг или бюджетна храна по-късно през деня.',
  'Pair with the marina walk, cocktails or a terrace dinner if the group wants to extend.':
    'Комбинирай с разходка около марината, коктейли или вечеря на тераса, ако групата иска да удължи плана.',
  'Pair with the sea-wall walk or viewpoint before dinner.':
    'Комбинирай с разходка край морската стена или панорама преди вечеря.',
  'Pair with Old Nessebar dinner lanes or a quiet return toward Sunny Beach.':
    'Комбинирай с вечерните улички в Стария Несебър или спокойно връщане към Слънчев бряг.',
  'Pair with shade, water and a simple beach lunch instead of stacking too many activities.':
    'Комбинирай със сянка, вода и лесен плажен обяд, вместо да натрупваш твърде много активности.',
  'Recover with shade, water and a low-friction food stop.':
    'Възстанови със сянка, вода и лесна спирка за храна.',
  'Pair with a simple beach lunch and skip heavy transfers afterward.':
    'Комбинирай с лесен плажен обяд и пропусни тежките трансфери след това.',
  'Pair with early dinner, Luna Park or the mini train.':
    'Комбинирай с ранна вечеря, Луна парк или мини влакчето.',
  'Pair with a short promenade check or a return to the hotel before evening.':
    'Комбинирай с кратка проверка по алеята или връщане в хотела преди вечерта.',

  'Local Routes': 'Локални маршрути',
  'Route fit': 'Подходящ маршрут',
  Step: 'Стъпка',
  Start: 'Начало',
  Stop: 'Спирка',
  Return: 'Връщане',
  'Use this route': 'Използвай този маршрут',
  'Jump to routes': 'Към маршрутите',
  'Walkability': 'Пешеходност',
  'Night link': 'Връзка с вечерта',
  'Photo value': 'Фото стойност',
  'Family fit': 'Подходящо за семейства',
  Style: 'Стил',
  'Route story': 'История на маршрута',
  'Local warning': 'Локално предупреждение',

  'Then & Now': 'Тогава и сега',
  'Coastal archive': 'Крайбрежен архив',
  'Archive / Then & Now': 'Архив / тогава и сега',
  'Modern coast': 'Модерно крайбрежие',
  'Postcard memory': 'Спомен като пощенска картичка',
  'Made as a personal digital travel guide and archive project.': 'Създаден като личен дигитален пътеводител и архивен проект.',
  'Coastal guide / archive': 'Крайбрежен гид / архив',
  'Footer explore navigation': 'Навигация за разглеждане във футъра',
  'Footer tools navigation': 'Навигация с инструменти във футъра',
  'Bulgarian Black Sea coast': 'Българско Черноморие',
  'Sunny Beach to Elenite': 'От Слънчев бряг до Елените',
  '42.7 N, 27.7 E': '42.7 с.ш., 27.7 и.д.',

  'Selected guide': 'Избран гид',
  'Selected pick': 'Избран избор',
  'Current focus': 'Текущ фокус',
  'Experience finder': 'Търсач на преживявания',
  'Gallery-ready focus': 'Подходящо за галерия',
  'Active route mood': 'Активен маршрутен режим',
  'Local read': 'Локален прочит',
  'Next move': 'Следващ ход',
  'Why go': 'Защо да отидеш',
  'Route checklist': 'Проверка на маршрута',
  'Stop context': 'Контекст на спирката',
  'Map readout': 'Обобщение на картата',
  'Visible guide cards': 'Видими гид карти',
  'Guide chapter': 'Гид глава',
  'Planner note': 'Бележка за планиране',
  'Warning': 'Предупреждение',
  'Open in Google Maps': 'Отвори в Google Maps',
  'Added to route': 'Добавено към маршрута',
  'Already in route': 'Вече е в маршрута',
  'Replace oldest stop': 'Замени най-старата спирка',
  'Use plan': 'Използвай плана',

  Premium: 'Премиум',
  Sunset: 'Залез',
  Morning: 'Сутрин',
  Daytime: 'През деня',
  Low: 'Ниско',
  Medium: 'Средно',
  Loud: 'Шумно',
  Young: 'Млади',
  Families: 'Семейства',
  Couples: 'Двойки',
  Party: 'Парти',
  Restaurant: 'Ресторант',
  Cafe: 'Кафене',
  Coffee: 'Кафе',
  Walk: 'Разходка',
  Viewpoint: 'Гледка',
  Selected: 'Избрано',
  'Low family': 'Ниско за семейства',
  'Medium noise': 'Среден шум',
  'Mid-range': 'Среден клас',
  'Older visitors': 'По-възрастни посетители',
  'Water sport': 'Водни спортове',
  'Water activity': 'Водна активност',
  'Smart pick': 'Умен избор',
  'Photo-ready': 'Подходящо за снимки',
  'Gallery-ready': 'Подходящо за галерия',
  'Flexible pace': 'Гъвкав ритъм',
  'High energy': 'Висока енергия',
  'Soft start': 'Спокоен старт',

  'Cacao Beach': 'Какао Бийч',
  'Elenite Bay': 'Заливът на Елените',

  'Party routes and late beach-bar plans': 'Парти маршрути и късни планове около плажните барове',
  'Use it when the day rhythm matches the plan, not just because the pin looks close.':
    'Използвай го, когато ритъмът на деня пасва на плана, не само защото пинът изглежда близо.',
  'Same-day fit': 'Подходящо за същия ден',
  'Add one stop to start shaping the day.': 'Добави една спирка, за да започнеш да оформяш маршрута.',
  'Route line': 'Линия на маршрута',
  'Transport check': 'Проверка на транспорта',
  'Pair this with late food or a direct return plan. Do not leave transport vague after the loud stops.':
    'Комбинирай това с късна храна или директен план за връщане. Не оставяй транспорта неясен след шумните спирки.',
  'Pair this with late food or a direct return plan.': 'Комбинирай това с късна храна или директен план за връщане.',
  'Do not leave transport vague after the loud stops.': 'Не оставяй транспорта неясен след шумните спирки.',
  'Route has a starting rhythm.': 'Маршрутът вече има начален ритъм.',
  'Two or more stops are connected on the map.': 'Две или повече спирки са свързани на картата.',
  'Add 2+ stops to draw a route line.': 'Добави 2+ спирки, за да се начертае маршрутна линия.',
  'Cross-area route: allow transfer time.': 'Маршрут между зони: предвиди време за придвижване.',
  'Close on the map can still be slow in summer.': 'Близо на картата пак може да е бавно през лятото.',

  'Premium marina-style dinner, bay views and a polished slower evening.':
    'Премиум вечер около марината, гледки към залива и по-бавен, подреден вечерен ритъм.',
  'A refined Sveti Vlas dining zone built around boats, terraces and evening light rather than club momentum.':
    'Изискана вечерна зона в Свети Влас около лодки, тераси и вечерна светлина, а не около клубна енергия.',
  'Pair with the Sveti Vlas Viewpoint first, then stay around the marina for dinner.':
    'Комбинирай първо с панорамната точка в Свети Влас, после остани около марината за вечеря.',
  'Central budget food window': 'Бюджетна храна в централната зона',
  'North strip quiet coffee': 'Спокойно кафе в северната зона',
  'Water Sports Daytime': 'Дневни водни спортове',

  'Cinematic routes for the kind of day you want.': 'Кинематични маршрути според деня, който искаш.',
  'Pick a local itinerary by pace, transport, timing and the mistake you want to avoid before the coast gets busy.':
    'Избери локален маршрут според ритъм, транспорт, време и грешката, която искаш да избегнеш, преди крайбрежието да стане оживено.',
  'Do this before choosing where to spend the evening; the resort changes quickly from center to south.':
    'Направи това преди да решиш къде да прекараш вечерта; курортът бързо сменя ритъма си от центъра към юга.',
  'Easy resort read': 'Лесен прочит на курорта',
  'Sunset value': 'Стойност при залез',
  'Transfer difficulty': 'Трудност с трансфера',
  'Mostly on foot if staying central': 'Предимно пеша, ако си в централната зона',
  'Good if you pace the walk': 'Добре е, ако дозираш разходката',
  'Not the point of this route': 'Не е основната цел на този маршрут',
  'One of the stronger sunset reads': 'Един от по-силните залезни маршрути',
  'Golden hour is the prize': 'Златният час е наградата',
  'Nice, but not essential': 'Приятно, но не е задължително',
  'The strongest sunset route': 'Най-силният маршрут за залез',
  'Move into the beach-bar rhythm while the group is still together.':
    'Влез в ритъма на плажните барове, докато групата още е заедно.',

  'A digital postcard museum for a changing coast.': 'Дигитален музей от пощенски картички за променящото се крайбрежие.',
  "Trace Sunny Beach from planned resort and postcard memory to today's layered map of party zones, old streets, marina evenings and quieter edges.":
    'Проследи Слънчев бряг от планиран курорт и спомен от пощенски картички до днешната многослойна карта от парти зони, стари улици, вечери около марината и по-спокойни краища.',
  'The resort begins': 'Началото на курорта',
  'From empty sand to planned summer system.': 'От празен пясък към планирана лятна система.',
  'Faded postcards, broad sand, slower summers.': 'Избледнели картички, широк пясък и по-бавни лета.',

  'A personal digital travel guide for Sunny Beach, Nessebar, Sveti Vlas and Elenite, built around local notes, routes, maps and archive-style memories.':
    'Личен дигитален пътеводител за Слънчев бряг, Несебър, Свети Влас и Елените, изграден около локални бележки, маршрути, карти и архивни летни спомени.',
  'Built as a calm, practical coastal companion: part local guide, part route planner, part postcard archive.':
    'Създаден като спокоен и практичен крайбрежен спътник: част локален гид, част планер за маршрути, част архив от летни картички.',
}

Object.assign(bgTranslations, {
  place: 'място',
  places: 'места',
  pins: 'пина',
  matches: 'съвпадения',
  'planner modes': 'режима за планиране',
  'place is': 'място е',
  'places are': 'места са',
  'visible on the coast.': 'видими по крайбрежието.',
  'useful matches for all.': 'полезни съвпадения за всички.',
  'Skip if': 'Пропусни, ако',
  'Use this plan': 'Използвай този план',
  'Use with': 'Използвай с',
  'Start with': 'Започни с',
  'dinner first': 'вечеря',
  first: 'първо',
  route: 'маршрут',
  'stop. Use it when the day rhythm matches the plan, not just because the pin looks close.':
    'спирка. Използвай я, когато ритъмът на деня пасва на плана, не само защото пинът изглежда близо.',
  'marina route': 'маршрут около марината',
  'beach route': 'плажен маршрут',
  'nightlife route': 'маршрут за нощен живот',
  'family route': 'семеен маршрут',
  'old-town route': 'маршрут в стария град',
  'quiet bay route': 'маршрут към спокойния залив',
  'central club zone': 'централна клубна зона',
  'Then check transport:': 'После провери транспорта:',
  'Map variation ready:': 'Вариантът по картата е готов:',
  'custom stop': 'лична спирка',
  'custom stops': 'лични спирки',
  'from Map Preview can shape this into a lighter personal route.':
    'от прегледа на картата могат да го превърнат в по-лек личен маршрут.',
  'Start with one coast stop.': 'Започни с една крайбрежна спирка.',
  ', then keep the route close enough to finish without a rushed transfer.':
    ', после дръж маршрута достатъчно близък, за да завърши без прибързан трансфер.',
  'Build routes by day rhythm, transport friction, and timing. Distance alone is the least useful signal in peak summer.':
    'Изграждай маршрути според ритъма на деня, транспортната трудност и времето. Самото разстояние е най-слабият ориентир в пиковото лято.',
  'Pick the group energy first, then trade off noise, budget and return difficulty.':
    'Първо избери енергията на групата, после балансирай шум, бюджет и трудност на връщането.',
  'Pick the group energy first, then trade off noise, budget and return friction.':
    'Първо избери енергията на групата, после балансирай шум, бюджет и трудност на връщането.',
  'Pick by noise first: quiet, medium or loud changes the whole evening.':
    'Избирай първо по шум: спокойно, средно или шумно променя цялата вечер.',
  'Pick by noise first:': 'Избирай първо по шум:',
  'quiet, medium or loud changes the whole evening.': 'спокойно, средно или шумно променя цялата вечер.',
  medium: 'средно',
  loud: 'шумно',
  'short map distances can still be slow in season.': 'късите разстояния по картата пак могат да са бавни в сезона.',
  'Build a route: combine one food stop, one walk or activity, and one return plan.':
    'Изгради маршрут: комбинирай една спирка за храна, една разходка или активност и един план за връщане.',
  'Build a route:': 'Изгради маршрут:',
  'combine one food stop, one walk or activity, and one return plan.':
    'комбинирай една спирка за храна, една разходка или активност и един план за връщане.',
  'Open route pairings': 'Отвори маршрутни комбинации',
  'Use this with': 'Използвай това с',
  'Pair with the premium marina or calm evening route.':
    'Комбинирай с премиум маршрута около марината или със спокойния вечерен маршрут.',
  'Active mini-plan': 'Активен мини план',
  'friends who want a loud night and can agree the way home before midnight':
    'приятели, които искат шумна вечер и могат да се разберат за връщането преди полунощ',
  'Late food and direct return': 'Късна храна и директно връщане',
  'Medium, can climb fast': 'Средно, може бързо да се качи',
  'Low to medium': 'Ниско до средно',
  'Medium to high': 'Средно до високо',
  'Quiet to medium': 'Спокойно до средно',
  'you have not agreed on the route home.': 'не сте се разбрали за маршрута обратно.',
  'the plan starts too late or crosses too many zones.': 'планът започва твърде късно или минава през твърде много зони.',
  'sunset happens while you are still in transit.': 'залезът ще те завари още в придвижване.',
  'you chase every attraction in one day.': 'гониш всяка атракция в един ден.',
  'the group wants cheap, loud, spontaneous club energy.': 'групата иска евтина, шумна и спонтанна клубна енергия.',
  'weather, safety or availability feels uncertain.': 'времето, безопасността или наличността изглеждат несигурни.',
  'the day needs high-energy attractions or nightlife.': 'денят има нужда от силни атракции или нощен живот.',
  'the route requires rushing over uneven lanes or late transport decisions.':
    'маршрутът изисква бързане по неравни улички или късни транспортни решения.',
  'the group is still trying to force a full beach-and-nightlife itinerary.':
    'групата още се опитва да насили пълен плажен и нощен маршрут.',
  'you want the loudest Sunny Beach party route or very cheap food nearby.':
    'искаш най-шумния парти маршрут в Слънчев бряг или много евтина храна наблизо.',
  'you want the loudest': 'искаш най-шумния',
  'party route or very cheap food nearby.': 'парти маршрут или много евтина храна наблизо.',
  couples: 'двойки',
  premium: 'премиум',
  calm: 'спокойно',
  'older visitors': 'по-възрастни посетители',
  families: 'семейства',
  budget: 'бюджетно',
  young: 'млади',
  party: 'парти',
  'Seasonal note': 'Сезонна бележка',
  'Useful as a planning layer; exact opening, menu and table details can shift through the season.':
    'Полезно като слой за планиране; точните часове, менюта и детайли за маси могат да се променят през сезона.',
  'Editorial starter guidance based on stable local place concepts. Seasonal details, pricing and availability can change; verify locally before committing a plan.':
    'Редакторски стартови насоки, базирани на стабилни локални понятия за места. Сезонни детайли, цени и наличност могат да се променят; проверявай на място преди да заключиш план.',
  'Itinerary lens': 'Маршрутен прочит',
  'Orientation walk': 'Ориентационна разходка',
  'Why this route works': 'Защо този маршрут работи',
  'Route storyboard': 'Сториборд на маршрута',
  'Keep it loose and let the walk decide whether the evening should stay central or move south.':
    'Остави го свободен и нека разходката реши дали вечерта да остане централна или да тръгне на юг.',
  stops: 'спирки',
  Move: 'Движение',
  Finish: 'Финал',
  Duration: 'Продължителност',
  'Start with the easiest landmark and get the beach logistics clear.':
    'Започни с най-лесния ориентир и изясни плажната логистика.',
  'Use the promenade to read food, shops, crowds and walking distances.':
    'Използвай алеята, за да разчетеш храна, магазини, тълпи и пешеходни разстояния.',
  'Move south only after you understand the central rhythm.':
    'Тръгни на юг едва след като разбереш централния ритъм.',
  'Finish with a low-commitment sunset drink near the sand.':
    'Завърши с ненатоварваща залезна напитка близо до пясъка.',
  'Route indicators': 'Маршрутни индикатори',
  'Crowd risk': 'Риск от тълпи',
  'Low unless staying far north/south': 'Ниско, освен ако си далеч на север или юг',
  'Central areas get busy': 'Централните зони се оживяват',
  'Helps choose an evening zone': 'Помага да избереш вечерна зона',
  'More context than drama': 'Повече контекст, отколкото драматизъм',
  'Simple and flexible': 'Лесно и гъвкаво',
  Preview: 'Преглед',
  'Best when you want the coastline to make sense fast.':
    'Най-добре, когато искаш бързо да разбереш крайбрежието.',
  'For groups who want a direct night with fewer transfers.':
    'За групи, които искат директна вечер с по-малко прехвърляния.',
  'Best when you want softer water, views and marina food.':
    'Най-добре, когато искаш по-спокойна вода, гледки и храна около марината.',
  'For photos, stone streets and a slower day off the strip.':
    'За снимки, каменни улици и по-бавен ден извън курортната ивица.',
  'For shade, simple logistics and fewer moving parts.':
    'За сянка, лесна логистика и по-малко движещи се части.',
  'For couples or friends who want views before dinner.':
    'За двойки или приятели, които искат гледки преди вечеря.',
  'Easy resort read / start at Central Sunny Beach': 'Лесен прочит на курорта / старт от Централен Слънчев бряг',
  'start at': 'старт от',
  'It gives first-time visitors the basic mental map: central beach, promenade rhythm, the southward pull, then an easy sunset finish.':
    'Дава на посетителите за първи път базовата ментална карта: централен плаж, ритъм на алеята, южното привличане и лесен залезен финал.',
  'Transfer friction': 'Транспортна трудност',
  'Loud night': 'Шумна вечер',
  'Marina calm': 'Спокойствие около марината',
  'Old-town walk': 'Разходка в стария град',
  'Low-friction family day': 'Семеен ден с малко триене',
  'Golden-hour dinner': 'Вечеря в златния час',
  'night / Sunny Beach': 'вечер / Слънчев бряг',
  'calm / Sveti Vlas': 'спокойствие / Свети Влас',
  'walk / Nessebar': 'разходка / Несебър',
  'family day / Sunny Beach': 'семеен ден / Слънчев бряг',
  'dinner / Multiple zones': 'вечеря / няколко зони',
  'historic sea-wall wander': 'историческа разходка край морската стена',
  'polished marina coast': 'изискано крайбрежие около марината',
  'quiet northern retreat': 'спокойно северно оттегляне',
  'High resort energy': 'Висока курортна енергия',
  'Medium resort energy': 'Средна курортна енергия',
  'Quiet resort energy': 'Спокойна курортна енергия',
  'Local Notes': 'Локални бележки',
  'Interactive Map': 'Интерактивна карта',
  Explore: 'Разгледай',
  Tools: 'Инструменти',
  Coordinates: 'Координати',

  Then: 'Тогава',
  Now: 'Сега',
  'Archive lens': 'Архивен прочит',
  '1970s / Then': '1970-те / тогава',
  'Today / Now': 'Днес / сега',
  'Postcard lens': 'Прочит като пощенска картичка',
  'Living map': 'Жива карта',
  'Read the coast as a planned holiday resort, where hotels, beaches and postcard memories gave Sunny Beach one clear image.':
    'Прочети крайбрежието като планиран ваканционен курорт, където хотели, плажове и пощенски спомени са дали на Слънчев бряг ясен образ.',
  'Neon nights, marina light, old streets and full beaches.':
    'Неонови нощи, светлина около марината, стари улици и пълни плажове.',
  'Read the coast as a layered summer map, where nightlife, old Nessebar, marina evenings and quieter edges overlap.':
    'Прочети крайбрежието като многослойна лятна карта, където нощният живот, старият Несебър, вечерите около марината и по-тихите краища се застъпват.',
  Foundation: 'Основа',
  'Then lens': 'Прочит тогава',
  'Now lens': 'Прочит сега',
  'Sunny Beach starts as a planned seaside resort, shaped around broad sand, hotels, and organized summer holidays.':
    'Слънчев бряг започва като планиран морски курорт, оформен около широк пясък, хотели и организирани летни почивки.',
  'The resort begins as a planned seaside system, shaped by broad sand, state hotels, and organized summer holidays.':
    'Курортът започва като планирана морска система, оформена от широк пясък, държавни хотели и организирани летни почивки.',
  'What changed': 'Какво се промени',
  'Empty coastal space becomes a designed holiday machine: beach, hotel, promenade and summer routine.':
    'Празното крайбрежно пространство се превръща в проектирана ваканционна машина: плаж, хотел, алея и летен ритъм.',
  'Museum note': 'Музейна бележка',
  'This is the foundation layer. Later Sunny Beach may look chaotic, but it starts with a clear plan.':
    'Това е основният слой. По-късно Слънчев бряг може да изглежда хаотичен, но започва с ясен план.',
  'Planned resort': 'Планиран курорт',
  'Postcard era': 'Ера на пощенските картички',
  'Postcards & state holidays': 'Пощенски картички и държавни почивки',
  'Sunny Beach becomes a familiar holiday image.': 'Слънчев бряг става познат ваканционен образ.',
  'The resort becomes a recognizable summer scene, remembered through postcards, family trips, and state-era holiday routines.':
    'Курортът става разпознаваема лятна сцена, запомнена чрез картички, семейни пътувания и ваканционни ритуали от държавната епоха.',
  'The resort becomes recognizable through repeated summer rituals, family photos and printed coastal scenes.':
    'Курортът става разпознаваем чрез повтарящи се летни ритуали, семейни снимки и печатни крайбрежни сцени.',
  'After 2000': 'След 2000',
  Expansion: 'Разрастване',
  'Construction boom & nightlife': 'Строителен бум и нощен живот',
  'Private hotels and venues reshape the coast.': 'Частни хотели и заведения променят крайбрежието.',
  'Rapid building, private hotels, and a larger nightlife economy change the scale, density, and rhythm of the resort.':
    'Бързото строителство, частните хотели и по-голямата икономика на нощния живот променят мащаба, гъстотата и ритъма на курорта.',
  'The resort grows denser, louder and more fragmented, with new zones competing for the same summer night.':
    'Курортът става по-гъст, по-шумен и по-фрагментиран, с нови зони, които се конкурират за една и съща лятна вечер.',
  Today: 'Днес',
  'Layered coast': 'Многослойно крайбрежие',
  'Sunny Beach & beyond': 'Слънчев бряг и отвъд',
  'One coastline, several different summer maps.': 'Едно крайбрежие, няколко различни летни карти.',
  'The area now reads as several coastal stories at once: party zones, family hotels, old Nessebar, marina evenings, and quieter edges.':
    'Зоната вече се чете като няколко крайбрежни истории едновременно: парти зони, семейни хотели, стар Несебър, вечери около марината и по-тихи краища.',
  'Sunny Beach becomes one part of a wider coastal system, not the whole story.':
    'Слънчев бряг става една част от по-широка крайбрежна система, не цялата история.',

  'A compact walk through one of the coast\'s strongest memory-making areas: stone, sea, churches and light.':
    'Компактна разходка през една от най-силните зони за спомени по крайбрежието: камък, море, църкви и светлина.',
  'Sveti Vlas marina walk': 'Разходка около марината в Свети Влас',
  'A polished low-pressure walk before dinner or cocktails.':
    'Изискана и ненатоварваща разходка преди вечеря или коктейли.',
  'A calmer visual rhythm: boats, terraces, bay light and less pressure than central Sunny Beach.':
    'По-спокоен визуален ритъм: лодки, тераси, светлина от залива и по-малко напрежение от централния Слънчев бряг.',
  'Sveti Vlas viewpoint': 'Панорамна точка в Свети Влас',
  'Reading the whole bay before a slower Sveti Vlas evening.':
    'Да разчетеш целия залив преди по-бавна вечер в Свети Влас.',
  'A compact view-led stop that makes the coast feel connected before dinner.':
    'Компактна панорамна спирка, която свързва крайбрежието като усещане преди вечеря.',
  'Elenite bay quiet walk': 'Спокойна разходка край залива на Елените',
  'A quiet resort-edge pause when the goal is fewer decisions.':
    'Тиха пауза в края на курорта, когато целта е по-малко решения.',
  'A northern-edge walk that works best as part of a planned calm day rather than a spontaneous add-on.':
    'Разходка в северния край, която работи най-добре като част от планиран спокоен ден, не като спонтанна добавка.',
  'Central promenade evening walk': 'Вечерна разходка по централната алея',
  'A flexible resort walk when the group wants lights, snacks and easy exits.':
    'Гъвкава курортна разходка, когато групата иска светлини, лека храна и лесни изходи.',
  'A practical central walk that links beach frontage, simple food, amusement lights and people-watching without committing to a late night.':
    'Практична централна разходка, която свързва плажната линия, лесна храна, увеселителни светлини и наблюдаване на хора без ангажимент към късна вечер.',
  'Old Nessebar sunset viewpoint': 'Залезна панорама в Стария Несебър',
  'A low-cost visual anchor before dinner or a slower old-town loop.':
    'Достъпен визуален ориентир преди вечеря или по-бавна староградска обиколка.',
  'A compact old-town viewpoint stop that gives the evening a sense of place before food or the return route.':
    'Компактна староградска панорамна спирка, която дава на вечерта усещане за място преди храна или връщане.',
  'High view': 'Висока гледка',
  'Arrive before the light drops so the marina walk becomes part of dinner, not just transport.':
    'Пристигни преди светлината да падне, за да стане разходката около марината част от вечерята, не просто транспорт.',
  'Plan the return if staying in Sunny Beach or Nessebar; summer traffic can make short hops feel longer.':
    'Планирай връщането, ако си в Слънчев бряг или Несебър; летният трафик може да направи кратките премествания по-дълги.',
  'Marina Dinevi walk': 'Разходка около Марина Диневи',
  'Premium evening route': 'Премиум вечерен маршрут',
  'Project note': 'Бележка за проекта',

  'Beach base -> promenade dinner -> central nightlife, or keep north/south edges for a calmer loop.':
    'Плажна база -> вечеря по алеята -> централен нощен живот, или северен/южен край за по-спокоен маршрут.',
  Quietness: 'Спокойствие',
  'Quietness: 34 out of 100, edge dependent': 'Спокойствие: 34 от 100, зависи от края',
  'Historic sea-wall wander': 'Историческа разходка край морската стена',
  'Polished marina coast': 'Изискано крайбрежие около марината',
  'bay views, calmer evenings, marina dinners, couples, quieter hotel rhythm':
    'гледки към залива, по-спокойни вечери, вечери около марината, двойки, по-тих хотелски ритъм',
  'Calm northern retreat': 'Спокойно северно оттегляне',
  'Calm resort energy': 'Спокойна курортна енергия',
  'day party': 'дневно парти',
  'after clubs': 'след клубовете',
  Crowds: 'Тълпи',
  'Add two or more stops to draw a route line.': 'Добави две или повече спирки, за да начертаеш маршрут.',
  'A well-known southern Sunny Beach zone associated with beach clubs and louder summer nights.':
    'Известна южна зона на Слънчев бряг, свързана с плажни клубове и по-шумни летни вечери.',
  'Add this stop when it belongs in the same day, not just because it looks close on the map.':
    'Добави тази спирка, когато наистина пасва на същия ден, не само защото изглежда близо на картата.',
  'Route sketch': 'Скица на маршрута',
  'Choose a marker or place card, then add it here to build a simple day route.':
    'Избери маркер или карта на място, после го добави тук, за да изградиш прост дневен маршрут.',
  'Sunny Beach stop. Use it when the day rhythm matches the plan, not just because the pin looks close.':
    'Спирка в Слънчев бряг. Използвай я, когато ритъмът на деня пасва на плана, не само защото пинът изглежда близо.',
  'Build routes by day rhythm, transport difficulty, and timing. Distance alone is the least useful signal in peak summer.':
    'Изграждай маршрути според ритъма на деня, трудността на транспорта и времето. Самото разстояние е най-слабият ориентир в пиковото лято.',
  'Find the right place for the day you actually want.': 'Намери правилното място за деня, който наистина искаш.',
  'Browse real guide-style places and coastal experiences by audience, budget, noise, time of day and activity type, then open a practical detail panel before shaping a route.':
    'Преглеждай реални места и крайбрежни преживявания по аудитория, бюджет, шум, време от деня и тип активност, после отвори практичния детайлен панел преди да оформиш маршрут.',
  'Premium route': 'Премиум маршрут',
  'Marina Dinevi dinner terraces': 'Вечерни тераси в Марина Диневи',
  'Nightlife / south-side party route': 'Нощен живот / южен парти маршрут',
  'Dinner first': 'Първо вечеря',
  'Cacao or central club zone': 'Какао или централна клубна зона',
  'Cacao Beach party zone': 'Парти зона Какао Бийч',
  'Old Nessebar dinner lanes': 'Вечерни улички в Стария Несебър',
  'Restaurant Djanny area': 'Зоната около ресторант Djanny',
  'Current finder': 'Текущ филтър',
  'Everything in the guide layer': 'Всичко в слоя на гида',
  'Starter content uses stable local anchors and editorial guidance. Verify live details locally in season.':
    'Стартовото съдържание използва стабилни локални ориентири и редакторски насоки. Проверявай актуалните детайли на място в сезона.',
  'Water sports': 'Водни спортове',
  Attractions: 'Атракции',
  'Food & drinks': 'Храна и напитки',
  'Pick a plan shape, then refine the place.': 'Избери форма на плана, после уточни мястото.',
  '10 planner modes': '10 режима за планиране',
  Scenario: 'Сценарий',
  Bar: 'Бар',
  'Dinner first / Beach-bar warmup': 'Първо вечеря / загрявка в плажен бар',
  'Skip if you have not agreed on the route home.': 'Пропусни, ако не сте се разбрали за маршрута обратно.',
  'Early evening': 'Ранна вечер',
  'Family promenade / early Local Routes loop': 'Семейна алея / ранен локален маршрут',
  'Early dinner / Luna Park or mini train': 'Ранна вечеря / Луна парк или мини влакче',
  'Skip if the plan starts too late or crosses too many zones.': 'Пропусни, ако планът започва твърде късно или минава през твърде много зони.',
  'Calm to medium': 'Спокойно до средно',
  'Sveti Vlas marina evening route': 'Вечерен маршрут около марината в Свети Влас',
  'Viewpoint first / Marina walk': 'Първо панорама / разходка около марината',
  'Skip if sunset happens while you are still in transit.': 'Пропусни, ако залезът ще те завари още в придвижване.',
  'Beach atlas / central resort day': 'Плажен атлас / централен курортен ден',
  'Choose one beach zone / Simple food': 'Избери една плажна зона / лесна храна',
  'Skip if you chase every attraction in one day.': 'Пропусни, ако гониш всяка атракция в един ден.',
  'Premium marina route': 'Премиум маршрут около марината',
  'Marina walk / Terrace dinner': 'Разходка около марината / вечеря на тераса',
  'Skip if the group wants cheap, loud, spontaneous club energy.':
    'Пропусни, ако групата иска евтина, шумна и спонтанна клубна енергия.',
  'Archive / Old Nessebar route': 'Архив / маршрут в Стария Несебър',
  'Arrive with buffer / Coffee or sea-wall walk': 'Пристигни с резерв / кафе или разходка край морската стена',
  'Skip if you arrive at peak afternoon expecting empty streets.':
    'Пропусни, ако пристигаш в пиковия следобед и очакваш празни улици.',
  'Water Sports Day': 'Ден за водни спортове',
  'Medium to loud': 'Средно до шумно',
  'Beaches / water-sports day': 'Плажове / ден за водни спортове',
  'Pick nearest beach activity desk / Check weather locally':
    'Избери най-близкия пункт за плажни активности / провери времето на място',
  'Skip if weather, safety or availability feels uncertain.':
    'Пропусни, ако времето, безопасността или наличността изглеждат несигурни.',
  'Calm Coffee & Walk': 'Спокойно кафе и разходка',
  'Calm Vlas morning route': 'Спокоен сутрешен маршрут във Влас',
  'Coffee / Short walk': 'Кафе / кратка разходка',
  'Skip if the day needs high-energy attractions or nightlife.':
    'Пропусни, ако денят има нужда от силни атракции или нощен живот.',
  'Older Visitors Easy Evening': 'Лесна вечер за по-възрастни посетители',
  'Late afternoon to early evening': 'Късен следобед до ранна вечер',
  'Archive / easy Nessebar loop': 'Архив / лесен маршрут в Несебър',
  'Arrive with buffer / Coffee or viewpoint': 'Пристигни с резерв / кафе или панорама',
  'Skip if the route requires rushing over uneven lanes or late transport decisions.':
    'Пропусни, ако маршрутът изисква бързане по неравни улички или късни транспортни решения.',
  'Rainy / Low-Energy Plan': 'План за дъжд или ниска енергия',
  'Any slow day': 'Всеки бавен ден',
  'Low-transfer reset route': 'Възстановяващ маршрут с малко прехвърляния',
  'Stay close to base / Coffee checkpoint': 'Остани близо до базата / кафе пауза',
  'Skip if the group is still trying to force a full beach-and-nightlife itinerary.':
    'Пропусни, ако групата още се опитва да насили пълен плажен и нощен маршрут.',
  'Selected plan': 'Избран план',
  'Start with dinner first, then keep the route close enough to finish without a rushed transfer.':
    'Започни с вечеря, после дръж маршрута достатъчно близък, за да завърши без прибързан трансфер.',
  'Guide rule': 'Правило на гида',
  'Noise first': 'Първо шумът',
  'Route second': 'После маршрутът',
  'Local check': 'Локална проверка',
  'Tip: avoid stacking far stops just because they look close.':
    'Съвет: не натрупвай далечни спирки само защото изглеждат близо.',
  'Show all places': 'Покажи всички места',
  'Food, dinner & coffee': 'Храна, вечеря и кафе',
  'Choose by noise first, then view, then return transport.':
    'Избирай първо по шум, после по гледка, после по транспорт обратно.',
  'Restaurants, cafes, calm food stops and practical meal decisions.':
    'Ресторанти, кафенета, спокойни спирки за храна и практични решения за хранене.',
  'Food stop': 'Спирка за храна',
  'Old-town dining atmosphere after a walk through stone lanes and sea-wall viewpoints.':
    'Атмосфера за вечеря в стария град след разходка по каменни улички и гледки край морската стена.',
  'A historic dinner mood: compact lanes, sea air, church ruins and restaurants that work best when you are not rushing.':
    'Историческо вечерно настроение: компактни улички, морски въздух, църковни руини и ресторанти, които работят най-добре без бързане.',
  'Use with old-town route': 'Използвай със староградски маршрут',
  'Reliable resort-style dinner when convenience matters more than a sea view.':
    'Надеждна курортна вечеря, когато удобството е по-важно от морската гледка.',
  'A practical central Sunny Beach food choice for mixed groups who need simple logistics and familiar resort energy.':
    'Практичен централен избор за храна в Слънчев бряг за смесени групи, които търсят лесна логистика и познат курортен ритъм.',
  'Use with Local Routes': 'Използвай с локалните маршрути',
  'North Sunny Beach family food strip': 'Семейна зона за храна в Северен Слънчев бряг',
  'Family lunch or early dinner near calmer hotel-side beach zones.':
    'Семеен обяд или ранна вечеря близо до по-спокойни плажни зони до хотелите.',
  'A useful food zone when the day is built around shade, beach access and not crossing the resort repeatedly.':
    'Полезна зона за храна, когато денят е изграден около сянка, достъп до плажа и без постоянно пресичане на курорта.',
  'Simple food between beach time, promenade errands and an evening plan.':
    'Лесна храна между плажа, задачите по алеята и вечерния план.',
  'A low-friction central food move for groups who need practical fuel rather than a special-occasion meal.':
    'Лесен централен ход за храна за групи, които имат нужда от практично зареждане, не от специална вечеря.',
  'Elenite slow resort dinner': 'Бавна курортна вечеря в Елените',
  'A quieter stay-put meal after a planned beach day at the northern edge.':
    'По-тиха вечеря на място след планиран плажен ден в северния край.',
  'A calm resort-edge dinner pattern that works when the whole day is intentionally less mobile.':
    'Спокоен вечерен модел в края на курорта, който работи, когато целият ден умишлено е по-малко мобилен.',
  'Use with quiet bay route': 'Използвай със спокоен маршрут към залива',
  'Sveti Vlas morning coffee pause': 'Сутрешна кафе пауза в Свети Влас',
  'A calm reset with sea-facing streets before the day gets hot.':
    'Спокоен рестарт с улици към морето, преди денят да стане горещ.',
  'A softer morning option for coffee, a short walk and a quieter view of the bay.':
    'По-мека сутрешна опция за кафе, кратка разходка и по-спокойна гледка към залива.',
  'Coffee pause': 'Кафе пауза',
  'Old Nessebar morning coffee lanes': 'Сутрешни кафе улички в Стария Несебър',
  'Coffee before the old town fills up and the walking lanes become slower.':
    'Кафе преди старият град да се напълни и пешеходните улички да се забавят.',
  'A calmer way to experience Old Nessebar before the busiest visitor flow arrives.':
    'По-спокоен начин да усетиш Стария Несебър преди най-силния поток от посетители.',
  'A gentle start away from the loudest central blocks.':
    'Мек старт далеч от най-шумните централни карета.',
  'A practical, quieter coffee stop near the softer northern hotel and beach rhythm.':
    'Практична и по-тиха кафе спирка близо до по-мекия северен хотелски и плажен ритъм.',
  'Central simple coffee stop': 'Лесна централна кафе спирка',
  'A quick meeting point before beach time, errands or a promenade plan.':
    'Бърза среща преди плажа, задачите или плана по алеята.',
  'A functional central coffee move for groups who need orientation, caffeine and a simple start before the resort gets busier.':
    'Функционален централен кафе ход за групи, които имат нужда от ориентация, кофеин и лесен старт преди курортът да се оживи.',
  'Marina slow evening coffee': 'Бавно вечерно кафе около марината',
  'A slower marina pause for people who want the evening without a full dinner commitment.':
    'По-бавна пауза около марината за хора, които искат вечерна атмосфера без пълна вечеря.',
  'A low-pressure Sveti Vlas stop: coffee, marina light, boats and an easy decision about whether to stay for dinner.':
    'Ненапрегната спирка в Свети Влас: кафе, светлина около марината, лодки и лесно решение дали да останеш за вечеря.',
  'Nessebar calm dinner with view': 'Спокойна вечеря с гледка в Несебър',
  'Dinner atmosphere with sea-view value while staying away from club routes.':
    'Вечерна атмосфера с морска гледка, далеч от клубните маршрути.',
  'A calmer dinner pattern around Nessebar: walk first, settle near the view, and let the meal become the destination.':
    'По-спокоен вечерен модел около Несебър: първо разходка, после място с гледка, за да стане храната самата цел.',
  'Rainy or low-energy coffee and food plan': 'План за кафе и храна при дъжд или ниска енергия',
  'A backup plan when heat, rain or tired legs make big movement unwise.':
    'Резервен план, когато жега, дъжд или умора правят голямото движение неразумно.',
  'A practical travel guide still needs a soft day: coffee, simple food, short movement and an early reset when the coast is not cooperating.':
    'Практичният пътеводител има нужда и от мек ден: кафе, лесна храна, кратко движение и ранен рестарт, когато крайбрежието не съдейства.',
  'Bars & nightlife': 'Барове и нощен живот',
  'Decide the end of the night before choosing the first drink.':
    'Реши края на вечерта преди първата напитка.',
  'Beach-bar warmups, south-side party logic and calmer drink choices.':
    'Загрявки в плажни барове, южна парти логика и по-спокойни избори за напитки.',
  'Night route': 'Нощен маршрут',
  'A loud south-side party route with beach-club energy.':
    'Шумен южен парти маршрут с енергия на плажен клуб.',
  'A high-energy southern Sunny Beach nightlife zone for groups who already know they want a late night.':
    'Високоенергийна южна зона за нощен живот в Слънчев бряг за групи, които вече знаят, че искат късна вечер.',
  'Use with nightlife route': 'Използвай с маршрут за нощен живот',
  'Evening mood': 'Вечерно настроение',
  'Guava Beach Club sunset drinks': 'Залезни напитки в Guava Beach Club',
  'Beach drinks that can stay relaxed or turn into a louder evening.':
    'Плажни напитки, които могат да останат спокойни или да преминат в по-шумна вечер.',
  'A social beach-bar style stop for warmup drinks near the sand before the night splits.':
    'Социална спирка в стил плажен бар за загряващи напитки близо до пясъка преди вечерта да се раздели на посоки.',
  'Planet Yacht marina cocktails': 'Коктейли около марината в Planet Yacht',
  Polished: 'Изискано',
  'Polished drinks around the marina without fully switching into club mode.':
    'Изискани напитки около марината без пълно преминаване към клубен режим.',
  'A more refined cocktail mood tied to the marina, boats and slower Sveti Vlas evening rhythm.':
    'По-изискано коктейлно настроение, свързано с марината, лодките и по-бавния вечерен ритъм на Свети Влас.',
  'Attractions & family moves': 'Атракции и семейни ходове',
  'Keep movement simple: one anchor, one food stop, one return plan.':
    'Дръж движението просто: една основна спирка, една спирка за храна, един план за връщане.',
  'Amusement lights, family anchors and easy resort movement.':
    'Увеселителни светлини, семейни ориентири и лесно движение в курорта.',
  'Central late-food route': 'Централен маршрут за късна храна',
  'A practical regroup stop after bars before people scatter.':
    'Практична спирка за събиране след баровете, преди хората да се разпръснат.',
  'A useful end-of-night move: quick food, water, orientation and a simpler way back.':
    'Полезен ход в края на вечерта: бърза храна, вода, ориентация и по-лесен път обратно.',
  'Use with family route': 'Използвай със семеен маршрут',
  Attraction: 'Атракция',
  'Local attraction': 'Локална атракция',
  'Sunny Beach Luna Park': 'Луна парк Слънчев бряг',
  'Evening family energy, central amusement lights and a break from pure beach time.':
    'Вечерна семейна енергия, централни увеселителни светлини и пауза от чисто плажния ден.',
  'A central amusement-zone experience that makes Sunny Beach feel more like a summer resort product.':
    'Централно увеселително преживяване, което кара Слънчев бряг да се усеща като завършен летен курорт.',
  'Central Ferris wheel lights': 'Светлините на централното виенско колело',
  'A quick visual landmark and classic summer-evening photo moment.':
    'Бърз визуален ориентир и класически летен вечерен момент за снимка.',
  'A compact entertainment stop that works as part of a promenade evening rather than a full plan by itself.':
    'Компактна развлекателна спирка, която работи като част от вечер по алеята, не като самостоятелен план.',
  'SlingShot Sunny Beach': 'SlingShot Слънчев бряг',
  'A high-adrenaline central attraction for thrill-seeking friends.':
    'Високоадреналинова централна атракция за приятели, които търсят силно усещане.',
  'A landmark thrill ride near the heart of Sunny Beach, better treated as a short adrenaline stop.':
    'Емблематична екстремна атракция близо до сърцето на Слънчев бряг, по-добре като кратка адреналинова спирка.',
  'Mini Train Sunny Beach': 'Мини влакче Слънчев бряг',
  'A light resort transport helper and simple scenic movement for families.':
    'Лек курортен транспортен помощник и приятен начин за движение за семейства.',
  'A small-resort mobility option that turns movement into part of the experience for kids or tired walkers.':
    'Малка курортна транспортна опция, която превръща придвижването в част от преживяването за деца или уморени пешеходци.',
  'Family stop': 'Семейна спирка',
  'Action Aquapark day': 'Ден в Action Aquapark',
  'A full daytime alternative when the group wants slides instead of only sand.':
    'Пълна дневна алтернатива, когато групата иска пързалки вместо само пясък.',
  'A larger daytime activity anchor that can replace a normal beach day for families or groups.':
    'По-голяма дневна активност, която може да замени нормален плажен ден за семейства или групи.',
  'Family promenade attractions evening': 'Семейна вечер с атракции по алеята',
  'A kid-friendly evening built around lights, snacks and one or two simple attractions.':
    'Подходяща за деца вечер около светлини, лека храна и една-две лесни атракции.',
  'A compact family route that uses the promenade as a controlled evening plan rather than an endless walk.':
    'Компактен семеен маршрут, който използва алеята като контролиран вечерен план, не като безкрайна разходка.',
  'Daytime only: check conditions locally before committing.':
    'Само през деня: провери условията на място преди да се ангажираш.',
  'Daytime sea activity and beach action.': 'Дневни морски активности и плажно действие.',
  'Surf Academy water sports': 'Водни спортове Surf Academy',
  'Parasailing, board sports or guided beach activity when conditions and season allow.':
    'Парасейлинг, борд спортове или водена плажна активност, когато условията и сезонът позволяват.',
  'A daytime activity layer for people who want the sea to be more than swimming and loungers.':
    'Дневен слой активности за хора, които искат морето да е повече от плуване и шезлонги.',
  'Use with beach route': 'Използвай с плажен маршрут',
  'Jet ski and banana boat zone': 'Зона за джет и банан',
  'Short, high-energy water activity near the main beach.':
    'Кратка, високоенергийна водна активност близо до основния плаж.',
  'A classic resort activity choice for groups who want a quick burst of motion without changing areas.':
    'Класически курортен избор за групи, които искат бърз прилив на движение без смяна на зона.',
  'Main beach parasailing window': 'Парасейлинг прозорец на основния плаж',
  'A big-view daytime sea activity when weather, season and safety checks line up.':
    'Дневна морска активност с голяма гледка, когато времето, сезонът и безопасността съвпадат.',
  'A photo-worthy water-sport idea for the main beach zone, best treated as weather-dependent and locally verified.':
    'Фотогенична идея за воден спорт в основната плажна зона, най-добре като зависима от времето и проверена на място.',
  'Banana boat and inflatable rides': 'Банан и надуваеми водни атракции',
  'Short, social water activity for families or friends who want quick fun near the sand.':
    'Кратка социална водна активност за семейства или приятели, които искат бързо забавление близо до пясъка.',
  'A classic Sunny Beach activity layer: quick, loud, wet and easiest when it stays close to your beach base.':
    'Класически слой активност в Слънчев бряг: бързо, шумно, мокро и най-лесно близо до плажната база.',
  'Main beach activity desk': 'Пункт за активности на основния плаж',
  'Comparing daytime water activities without committing before checking conditions.':
    'Сравняване на дневни водни активности без ангажимент преди проверка на условията.',
  'A practical decision point for parasailing, jet skis or inflatables, useful when the day is still flexible.':
    'Практична точка за решение за парасейлинг, джетове или надуваеми атракции, полезна когато денят още е гъвкав.',
  'Walks & views': 'Разходки и гледки',
  'Use walks and viewpoints before dinner, when transfers can stay simple.':
    'Използвай разходки и панорами преди вечеря, когато трансферите още могат да са лесни.',
  'Golden-hour routes, marina walks and calmer scenic choices.':
    'Маршрути в златния час, разходки около марината и по-спокойни панорамни избори.',
  'Old Nessebar sea-wall walk': 'Разходка край морската стена в Стария Несебър',
  'Golden-hour views, history texture and a slower alternative to the resort strip.':
    'Гледки в златния час, историческа текстура и по-бавна алтернатива на курортната ивица.',
})

export function translatePhrase(value: string, language: Language): string {
  if (language === 'en') return value

  const leading = value.match(/^\s*/)?.[0] ?? ''
  const trailing = value.match(/\s*$/)?.[0] ?? ''
  const trimmed = value.trim()

  if (!trimmed) return value
  if (bgTranslations[trimmed]) return `${leading}${bgTranslations[trimmed]}${trailing}`

  const placeCountMatch = trimmed.match(/^(\d+) places?$/)
  if (placeCountMatch) {
    const count = Number(placeCountMatch[1])
    return `${leading}${count} ${count === 1 ? 'място' : 'места'}${trailing}`
  }

  const visiblePlacesMatch = trimmed.match(/^(\d+) places? visible on the coast\.$/)
  if (visiblePlacesMatch) {
    const count = Number(visiblePlacesMatch[1])
    return `${leading}${count} ${count === 1 ? 'място е видимо' : 'места са видими'} по крайбрежието.${trailing}`
  }

  const pinsMatch = trimmed.match(/^(\d+) pins?$/)
  if (pinsMatch) return `${leading}${pinsMatch[1]} пина${trailing}`

  const selectedMatch = trimmed.match(/^(.+) is selected\.$/)
  if (selectedMatch) return `${leading}Избрано е: ${translatePhrase(selectedMatch[1], language)}.${trailing}`

  const routeStopsMatch = trimmed.match(/^(\d+) route stops? are connected on the map\.$/)
  if (routeStopsMatch) return `${leading}${routeStopsMatch[1]} спирки от маршрута са свързани на картата.${trailing}`

  let translated = trimmed
  const keys = Object.keys(bgTranslations).sort((a, b) => b.length - a.length)

  for (const key of keys) {
    if (key.length < 3 || !translated.includes(key)) continue
    if (/^[A-Za-z0-9 -]+$/.test(key) && key.length < 12) {
      const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
      translated = translated.replace(new RegExp(`\\b${escaped}\\b`, 'g'), bgTranslations[key])
    } else {
      translated = translated.split(key).join(bgTranslations[key])
    }
  }

  return `${leading}${translated}${trailing}`
}

export function getLocalizedText(value: LocalizedText, language: Language): string {
  if (typeof value === 'string') return translatePhrase(value, language)
  return value[language] ?? value.en
}
