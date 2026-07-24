export const INSTAGRAM_URL = 'https://www.instagram.com/zendokai_karate_club_jaguar?igsh=azNkNzljNjRiYnc1';
export const FACEBOOK_URL = 'https://www.facebook.com/zendokaijaguarteam?mibextid=wwXIfr&rdid=y3APT6TwOEbw29iw&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17y1GSUHy3%2F%3Fmibextid%3DwwXIfr#';
export const MAPS_URL = 'https://maps.app.goo.gl/26yRkf7mwQKMD6rx7';
export const PHONE_DISPLAY = '000-111-00-94';
export const PHONE_LINK = 'tel:0001110094';
export const ADDRESS = 'Obolonska embankment 3, Kyiv, Ukraine 04211';
const BASE_URL = import.meta.env.BASE_URL;

export const assets = {
  logo: `${BASE_URL}assets/logo_jaguar.png`,
  hero: `${BASE_URL}assets/hero_image.png`,
  heroBottom: `${BASE_URL}assets/hero_image_bottom.png`,
  military: `${BASE_URL}assets/military_image.png`,
  sensei: `${BASE_URL}assets/sensei.WEBP`,
  schedule: `${BASE_URL}assets/karate_schedule.jpg`,
  rules: `${BASE_URL}assets/karate_rules.jpg`,
  gallery: [
    `${BASE_URL}assets/karate_dojo.jpg`,
    `${BASE_URL}assets/karate_dojo-1.jpg`,
    `${BASE_URL}assets/karate_dojo-2.jpg`,
    `${BASE_URL}assets/karate_dojo-3.jpg`,
    `${BASE_URL}assets/karate_dojo-4.jpg`,
    `${BASE_URL}assets/karate_dojo-5.jpg`,
    `${BASE_URL}assets/karate_dojo-6.jpg`,
    `${BASE_URL}assets/karate_dojo-7.jpg`,
  ],
};

export const text = {
  uk: {
    topAddress: ADDRESS,
    fb: 'Facebook сторінка',
    nav: ['Про клуб', 'Напрямки', 'Розклад', 'Ціни', 'Тренери', 'Контакти'],
    heroKicker: 'Zendokai Karate Club Jaguar · Київ · Оболонь',
    heroTitle: 'Клуб карате для сили, дисципліни та характеру.',
    heroLead:
      'Тренування для дітей, підлітків і дорослих. Поєднуємо традиції карате, сучасну ударну підготовку, фізичний розвиток і практичний самозахист.',
    trial: 'Записатись на пробне',
    call: 'Подзвонити',
    trialNote: 'Пробне тренування безкоштовне',
    heroCards: [
      ['Діти та підлітки', 'Дисципліна, координація, впевненість.'],
      ['Дорослі групи', 'Форма, самозахист, витривалість.'],
      ['Спортсмени', 'Техніка, спаринги, характер переможця.'],
    ],
    stats: [
      ['12', 'занять у груповому абонементі'],
      ['-50%', 'для військовослужбовців'],
      ['0 грн', 'перше пробне тренування'],
    ],
    aboutEyebrow: 'Про клуб',
    aboutTitle: 'Зендокай Карате — це бойове мистецтво для реального характеру.',
    aboutText:
      'Наш зал — це місце, де поважають працю, дисципліну та прагнення ставати кращим щодня. Тут ти не просто тренуєшся: ти вчишся діяти під тиском, контролювати дистанцію, швидко приймати рішення та не здаватися після першої невдачі.',
    values: [
      ['Сила духу', 'Тренування виховують витримку, волю та готовність працювати навіть тоді, коли складно.'],
      ['Техніка бою', 'Робота руками й ногами, дистанція, координація, швидкість і точність рухів.'],
      ['Самозахист', 'Практичні навички, холодний розум і впевненість у складних ситуаціях.'],
    ],
    programsEyebrow: 'Напрямки',
    programsTitle: 'Тренування для різного віку та рівня підготовки.',
    programsText: 'Не має значення, з чого ти починаєш. Має значення, ким ти станеш на цьому шляху.',
    programs: [
      ['Зендокай Карате', 'Базова та поглиблена техніка, ударна підготовка, дистанція, витривалість.'],
      ['Дитячі тренування', 'Групи 4–6, 7–9, 10–14 років. Дисципліна, характер, координація.'],
      ['Дорослі групи', 'Фізична форма, самозахист, витримка, впевненість і регулярність.'],
      ['Індивідуальні заняття', 'Персональна робота з тренером над технікою, фізикою та цілями.'],
      ['Літній табір', 'Активний формат розвитку, командної атмосфери й дисципліни влітку.'],
    ],
    scheduleEyebrow: 'Розклад',
    scheduleTitle: 'Зручні групи протягом тижня.',
    scheduleText: 'HTML-версія адаптована для телефону, а оригінальне фото розкладу залишене поруч для звірки.',
    pricesEyebrow: 'Ціни',
    pricesTitle: 'Прозорі умови без зайвого шуму.',
    prices: [
      ['Групові тренування', '12 занять', '2000 грн'],
      ['Разове тренування', '1 заняття', '400 грн'],
      ['Індивідуальне заняття', 'персонально з тренером', '700 грн'],
    ],
    rulesTitle: 'Правила клубу',
    rules: [
      'Оплата абонемента проводиться до 10 числа поточного місяця.',
      'Пропущені заняття можна відпрацювати згідно з правилами клубу.',
      'Приходь вчасно, у чистій формі та з повагою до залу, тренера й команди.',
    ],
    militaryTitle: 'Знижка -50% для військовослужбовців',
    militaryText: 'Zendokai Karate Club Jaguar дякує тим, хто захищає Україну. Для військовослужбовців діє спеціальна знижка на тренування.',
    coachesEyebrow: 'Команда',
    coachesTitle: 'Тренери клубу',
    coachesText: 'Тимчасові описи можна легко замінити на реальні досягнення, звання та досвід тренерів.',
    coaches: [
      ['Тренер Андрій', 'Інструктор Zendokai Karate Club Jaguar. Проводить тренування для дітей, підлітків і дорослих, допомагає новачкам поступово адаптуватися до навантажень та розвивати техніку, дисципліну й характер.'],
      ['Тренер Валентин', 'Інструктор Zendokai Karate Club Jaguar. Працює з групами різного рівня підготовки, приділяє увагу техніці, фізичній формі, самозахисту та впевненості спортсменів.'],
    ],
    galleryEyebrow: 'Атмосфера',
    galleryTitle: 'Зал, команда й тренувальний процес.',
    contactsEyebrow: 'Контакти',
    contactsTitle: 'Запишись на безкоштовне пробне тренування.',
    contactsText: 'Напиши в Instagram або подзвони, щоб уточнити групу, час і перше тренування.',
    map: 'Відкрити Google Maps',
    footer: 'Zendokai Karate Club Jaguar · сила, характер, дисципліна.',
  },
  en: {
    topAddress: ADDRESS,
    fb: 'Facebook page',
    nav: ['Club', 'Programs', 'Schedule', 'Prices', 'Coaches', 'Contacts'],
    heroKicker: 'Zendokai Karate Club Jaguar · Kyiv · Obolon',
    heroTitle: 'A karate club for strength, discipline, and character.',
    heroLead:
      'Training for kids, teens, and adults. We combine karate tradition, modern striking, physical conditioning, and practical self-defense.',
    trial: 'Book a free trial',
    call: 'Call now',
    trialNote: 'Free trial training',
    heroCards: [
      ['Kids & teens', 'Discipline, coordination, confidence.'],
      ['Adult groups', 'Fitness, self-defense, endurance.'],
      ['Athletes', 'Technique, sparring, winning character.'],
    ],
    stats: [
      ['12', 'sessions in group membership'],
      ['-50%', 'for military personnel'],
      ['0 UAH', 'first trial training'],
    ],
    aboutEyebrow: 'About the club',
    aboutTitle: 'Zendokai Karate is a martial art for real character.',
    aboutText:
      'Our dojo is a place where hard work, discipline, and daily improvement are respected. Here you do not just train: you learn to act under pressure, control distance, make decisions quickly, and keep moving after setbacks.',
    values: [
      ['Spirit', 'Training develops endurance, willpower, and readiness to work when it gets hard.'],
      ['Fighting technique', 'Hands, legs, distance, coordination, speed, and precise movement.'],
      ['Self-defense', 'Practical skills, calm thinking, and confidence in difficult situations.'],
    ],
    programsEyebrow: 'Programs',
    programsTitle: 'Training for different ages and levels.',
    programsText: 'It does not matter where you start. What matters is who you become on the way.',
    programs: [
      ['Zendokai Karate', 'Basic and advanced technique, striking, distance control, endurance.'],
      ['Kids training', 'Groups for ages 4–6, 7–9, and 10–14. Discipline, character, coordination.'],
      ['Adult groups', 'Fitness, self-defense, endurance, confidence, and consistency.'],
      ['Personal training', 'One-to-one work with a coach on technique, conditioning, and goals.'],
      ['Summer camp', 'Active summer format for development, discipline, and team atmosphere.'],
    ],
    scheduleEyebrow: 'Schedule',
    scheduleTitle: 'Convenient groups throughout the week.',
    scheduleText: 'The HTML version is mobile-friendly, while the original schedule image is kept for reference.',
    pricesEyebrow: 'Prices',
    pricesTitle: 'Clear terms, no extra noise.',
    prices: [
      ['Group training', '12 sessions', '2000 UAH'],
      ['Single training', '1 session', '400 UAH'],
      ['Personal training', 'one-to-one with coach', '700 UAH'],
    ],
    rulesTitle: 'Club rules',
    rules: [
      'Membership payment is made by the 10th day of the current month.',
      'Missed sessions may be made up according to the club rules.',
      'Arrive on time, in clean training clothes, with respect for the dojo, coach, and team.',
    ],
    militaryTitle: '50% discount for military personnel',
    militaryText: 'Zendokai Karate Club Jaguar thanks those who defend Ukraine. Military personnel receive a special training discount.',
    coachesEyebrow: 'Team',
    coachesTitle: 'Club coaches',
    coachesText: 'Temporary descriptions can be replaced with real achievements, ranks, and experience later.',
    coaches: [
      ['Coach Andrii', 'Zendokai Karate Club Jaguar instructor. Works with children, teens, and adults, helping beginners adapt gradually while building technique, discipline, and character.'],
      ['Coach Valentyn', 'Zendokai Karate Club Jaguar instructor. Works with groups of different levels, focusing on technique, fitness, self-defense, and athlete confidence.'],
    ],
    galleryEyebrow: 'Atmosphere',
    galleryTitle: 'Dojo, team, and training process.',
    contactsEyebrow: 'Contacts',
    contactsTitle: 'Book a free trial training.',
    contactsText: 'Message us on Instagram or call to choose a group, time, and first training session.',
    map: 'Open Google Maps',
    footer: 'Zendokai Karate Club Jaguar · strength, character, discipline.',
  },
};

export const schedule = [
  { day: 'Пн', coach: 'Андрій', groups: [['16:00–17:00', 'Підготовча група 4–6 років'], ['17:00–18:00', 'Молодша група 7–9 років'], ['18:00–19:30', 'Середня група 10–14 років']] },
  { day: 'Вт', coach: 'Валентин', groups: [['16:00–17:00', 'Підготовча група, початківці 4–6 років'], ['17:00–18:00', 'Молодша група, початківці 7–9 років'], ['18:00–19:30', 'Середня група, початківці 10–14 років']] },
  { day: 'Ср', coach: 'Андрій', groups: [['16:00–17:00', 'Підготовча група 4–6 років'], ['17:00–18:00', 'Молодша група 7–9 років'], ['18:00–19:30', 'Середня група 10–14 років']] },
  { day: 'Чт', coach: 'Валентин', groups: [['16:00–17:00', 'Підготовча група, початківці 4–6 років'], ['17:00–18:00', 'Молодша група, початківці 7–9 років'], ['18:00–19:30', 'Середня група, початківці 10–14 років']] },
  { day: 'Пт', coach: 'Андрій', groups: [['16:00–17:00', 'Підготовча група 4–6 років'], ['17:00–18:00', 'Молодша група 7–9 років'], ['18:00–19:30', 'Середня група 10–14 років']] },
  { day: 'Сб', coach: 'Валентин', groups: [['16:00–17:00', 'Підготовча група, початківці 4–6 років'], ['17:00–18:00', 'Молодша група, початківці 7–9 років'], ['18:00–19:30', 'Середня група, початківці 10–14 років']] },
];
