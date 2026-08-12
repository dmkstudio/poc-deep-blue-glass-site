export type Locale = "en" | "fr" | "ru";
export type DirectionKey =
  | "business"
  | "property"
  | "relocation"
  | "mobility"
  | "brand";

export type LocalizedPillar = {
  title: string;
  tagline: string;
  summary: string;
  groups: { title: string; items: string[] }[];
};

export const concepts = [
  {
    slug: "continuous-passage",
    name: "Continuous Passage",
    number: "01",
    description: "One continuous route through five fields.",
    className: "passage",
    image: "/assets/01_continuous_passage.png",
    palette: {
      bg: "#f3efe6",
      ink: "#082d4c",
      accent: "#167ba5",
      signal: "#b48a57",
      surface: "#fcfaf5",
    },
  },
  {
    slug: "discreet-layers",
    name: "Discreet Layers",
    number: "02",
    description: "Confidentiality through controlled disclosure.",
    className: "layers",
    image: "/assets/02_discreet_layers.png",
    palette: {
      bg: "#050b11",
      ink: "#f1ece2",
      accent: "#b99a6b",
      signal: "#87afc2",
      surface: "#0d1821",
    },
  },
  {
    slug: "five-orbits",
    name: "Five Orbits",
    number: "03",
    description: "Five fields coordinated around one stable center.",
    className: "orbits",
    image: "/assets/03_five_orbits.png",
    palette: {
      bg: "#f3eee4",
      ink: "#173e47",
      accent: "#1b7894",
      signal: "#c77547",
      surface: "#fffdf8",
    },
  },
  {
    slug: "riviera-frames",
    name: "Riviera Frames",
    number: "04",
    description: "A cinematic Riviera story in five chapters.",
    className: "frames",
    image: "/assets/04_riviera_frames.png",
    palette: {
      bg: "#ede7da",
      ink: "#162431",
      accent: "#a26f40",
      signal: "#5c8292",
      surface: "#f8f5ed",
    },
  },
  {
    slug: "convergent-grid",
    name: "Convergent Grid",
    number: "05",
    description: "Many moving parts, one aligned operating system.",
    className: "grid",
    image: "/assets/05_convergent_grid.png",
    palette: {
      bg: "#f4f3ee",
      ink: "#14243b",
      accent: "#075fcc",
      signal: "#58a8c8",
      surface: "#ffffff",
    },
  },
] as const;

export type Concept = (typeof concepts)[number];

const data = {
  en: {
    nav: {
      approach: "Approach",
      expertise: "Expertise",
      how: "How we work",
      confidentiality: "Confidentiality",
      contact: "Contact",
      request: "Make a private request",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      skip: "Skip to content",
    },
    hero: {
      eyebrow: "Private Office Consulting · French Riviera",
      title: "One call. Everything else is our concern.",
      body: "Consulting, concierge service and coordination through one discreet point of contact — for private and professional matters on the French Riviera and beyond.",
      primary: "Make a private request",
      secondary: "Explore our expertise",
      scroll: "Discover POC",
    },
    positioning: {
      label: "The purpose of our work",
      title: "One point of contact. A clear route forward.",
      paragraphs: [
        "Private Office Consulting brings consulting, concierge service and coordination together in one team — with a single point of contact who stays with your matter through to completion.",
        "We step in where speed, sound judgment and complete confidentiality matter. No impersonal service packages.",
        "Every engagement begins with one question — what truly matters here? Only then do we build the shortest, most reliable solution.",
      ],
      assurances: [
        "One accountable contact",
        "A clear first response",
        "End-to-end coordination",
        "Strict confidentiality",
      ],
    },
    expertise: {
      label: "Five fields",
      title: "Broad expertise. One standard of execution.",
      body: "Choose the closest direction or tell us the outcome you need. Complex requests often cross several fields; POC keeps them under one coordinated plan.",
      services: "Services",
      close: "Close",
      discuss: "Discuss this direction",
      select: "Select direction",
    },
    custom: {
      label: "Custom request",
      title: "Not everything important fits a category.",
      body: "Does your request fit none of these directions? That is precisely where we can help. Tell us the outcome you need; we will clarify the essentials and return with the shortest reliable route.",
      cta: "Describe your request",
    },
    method: {
      label: "Our method",
      title: "A calm process from question to completion.",
      steps: [
        "Tell us what needs to be resolved.",
        "We clarify what truly matters.",
        "You receive a clear first response and proposed route.",
        "One contact coordinates execution through to completion.",
      ],
    },
    confidentiality: {
      label: "Confidentiality",
      title: "Discretion is part of the work.",
      body: "Your matter is handled through the smallest practical circle of people. We ask only for what is necessary, coordinate qualified specialists where required and keep communication clear.",
      points: [
        "Need-to-know coordination",
        "No public case studies without explicit consent",
        "Qualified specialists for regulated matters",
      ],
    },
    form: {
      label: "Confidential conversation",
      title: "Tell us what needs to be resolved.",
      body: "We will return with a clear first response — confidentially and to the point.",
      name: "Name",
      email: "Email",
      phone: "Phone (optional)",
      direction: "Direction",
      task: "What needs to be resolved?",
      select: "Choose a direction",
      unsure: "Not sure",
      custom: "Custom request",
      submit: "Send request",
      sending: "Sending securely…",
      successTitle: "Your request is with POC.",
      successBody: "Thank you. Your message has been accepted and this form has been cleared.",
      another: "Send another request",
      privacy: "Your request is treated with strict confidentiality. Please do not include highly sensitive personal data at this stage.",
      required: "This field is required.",
      invalidEmail: "Enter a valid email address.",
      shortTask: "Please add a little more detail.",
      sendError: "We could not accept the request just now. Please try again or use a direct channel.",
      channelTitle: "Prefer a direct channel?",
      unavailable: "Official details will be added before launch.",
    },
    footer: {
      line: "Discretion · Clarity · Follow-through",
      region: "French Riviera and beyond",
      privacy: "Privacy",
      legal: "Legal notice",
      rights: "Private Office Consulting. All rights reserved.",
      concepts: "View all five directions",
    },
    card: {
      view: "View site",
      preferred: "Recommended",
      title: "Five working POC experiences.",
      body: "Choose a direction. Every version contains the same complete service offer, trilingual content and confidential request path, expressed through a different motion system.",
    },
  },
  fr: {
    nav: {
      approach: "Notre approche",
      expertise: "Expertises",
      how: "Notre méthode",
      confidentiality: "Confidentialité",
      contact: "Contact",
      request: "Faire une demande privée",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      skip: "Aller au contenu",
    },
    hero: {
      eyebrow: "Private Office Consulting · Côte d’Azur",
      title: "Un appel. Nous nous occupons de tout le reste.",
      body: "Conseil, conciergerie et coordination réunis autour d’un interlocuteur unique et discret — pour vos enjeux privés et professionnels sur la Côte d’Azur et au-delà.",
      primary: "Faire une demande privée",
      secondary: "Découvrir nos expertises",
      scroll: "Découvrir POC",
    },
    positioning: {
      label: "Le sens de notre engagement",
      title: "Un interlocuteur unique. Une voie claire.",
      paragraphs: [
        "Private Office Consulting réunit conseil, conciergerie et coordination au sein d’une même équipe — avec un interlocuteur unique qui accompagne votre demande jusqu’à sa résolution.",
        "Nous intervenons là où la rapidité, le discernement et une confidentialité absolue sont essentiels. Aucune formule impersonnelle.",
        "Chaque mission commence par une seule question : qu’est-ce qui compte vraiment ici ? C’est ensuite que nous construisons la solution la plus directe et la plus fiable.",
      ],
      assurances: [
        "Un interlocuteur responsable",
        "Une première réponse claire",
        "Une coordination de bout en bout",
        "Une confidentialité absolue",
      ],
    },
    expertise: {
      label: "Cinq expertises",
      title: "Une expertise étendue. Un même niveau d’exécution.",
      body: "Choisissez l’expertise la plus proche de votre besoin ou indiquez-nous le résultat recherché. POC réunit les demandes complexes dans un plan coordonné.",
      services: "Services",
      close: "Fermer",
      discuss: "Échanger sur cette expertise",
      select: "Choisir cette expertise",
    },
    custom: {
      label: "Demande sur mesure",
      title: "L’essentiel ne rentre pas toujours dans une catégorie.",
      body: "Votre demande ne correspond à aucune de ces expertises ? C’est précisément là que nous pouvons être utiles. Indiquez-nous le résultat recherché ; nous reviendrons avec la voie la plus directe et la plus fiable.",
      cta: "Décrire votre demande",
    },
    method: {
      label: "Notre méthode",
      title: "Un processus serein, de la question à sa résolution.",
      steps: [
        "Dites-nous ce qu’il faut résoudre.",
        "Nous clarifions ce qui compte vraiment.",
        "Vous recevez une première réponse claire et un plan d’action.",
        "Un interlocuteur coordonne l’exécution jusqu’à son terme.",
      ],
    },
    confidentiality: {
      label: "Confidentialité",
      title: "La discrétion fait partie de notre travail.",
      body: "Votre demande est traitée par le cercle de personnes le plus restreint possible. Nous ne demandons que l’essentiel et coordonnons des spécialistes qualifiés lorsque nécessaire.",
      points: [
        "Coordination selon le besoin d’en connaître",
        "Aucune étude de cas publique sans consentement explicite",
        "Spécialistes qualifiés pour les matières réglementées",
      ],
    },
    form: {
      label: "Échange confidentiel",
      title: "Dites-nous ce qu’il faut résoudre.",
      body: "Nous reviendrons avec une première réponse claire — en toute confidentialité et sans détour.",
      name: "Nom",
      email: "E-mail",
      phone: "Téléphone (facultatif)",
      direction: "Expertise",
      task: "Que faut-il résoudre ?",
      select: "Choisir une expertise",
      unsure: "Je ne sais pas encore",
      custom: "Demande sur mesure",
      submit: "Envoyer la demande",
      sending: "Envoi sécurisé…",
      successTitle: "Votre demande a bien été transmise à POC.",
      successBody: "Merci. Votre message a été accepté et ce formulaire a été effacé.",
      another: "Envoyer une autre demande",
      privacy: "Votre demande est traitée en toute confidentialité. Merci de ne pas transmettre de données personnelles très sensibles à ce stade.",
      required: "Ce champ est obligatoire.",
      invalidEmail: "Saisissez une adresse e-mail valide.",
      shortTask: "Merci d’ajouter quelques précisions.",
      sendError: "La demande n’a pas pu être transmise. Réessayez ou utilisez un contact direct.",
      channelTitle: "Vous préférez un contact direct ?",
      unavailable: "Les coordonnées officielles seront ajoutées avant le lancement.",
    },
    footer: {
      line: "Discrétion · Clarté · Suivi",
      region: "Côte d’Azur et au-delà",
      privacy: "Confidentialité",
      legal: "Mentions légales",
      rights: "Private Office Consulting. Tous droits réservés.",
      concepts: "Voir les cinq directions",
    },
    card: {
      view: "Voir le site",
      preferred: "Recommandé",
      title: "Cinq expériences POC fonctionnelles.",
      body: "Choisissez une direction. Chaque version propose la même offre complète, le contenu trilingue et une demande confidentielle, avec un système de mouvement distinct.",
    },
  },
  ru: {
    nav: {
      approach: "Подход",
      expertise: "Направления",
      how: "Как мы работаем",
      confidentiality: "Конфиденциальность",
      contact: "Контакты",
      request: "Оставить частный запрос",
      menuOpen: "Открыть меню",
      menuClose: "Закрыть меню",
      skip: "Перейти к содержанию",
    },
    hero: {
      eyebrow: "Private Office Consulting · Лазурный берег",
      title: "Один звонок. Всё остальное — наша забота.",
      body: "Консалтинг, консьерж-сервис и координация через одну конфиденциальную точку контакта — для личных и профессиональных задач на Лазурном берегу и за его пределами.",
      primary: "Оставить частный запрос",
      secondary: "Изучить направления",
      scroll: "Узнать о POC",
    },
    positioning: {
      label: "Смысл нашей работы",
      title: "Одна точка контакта. Понятный путь к решению.",
      paragraphs: [
        "Private Office Consulting объединяет консалтинг, консьерж-сервис и координацию в единой команде — с одной точкой контакта, которая ведёт ваше дело до конца.",
        "Мы подключаемся там, где нужны скорость, здравый смысл и полная конфиденциальность. Никаких безликих пакетов услуг.",
        "Каждая работа начинается с одного вопроса — что здесь по-настоящему важно, — и только потом мы строим самое короткое и надёжное решение.",
      ],
      assurances: [
        "Одна ответственная точка контакта",
        "Первый чёткий ответ",
        "Координация от начала до конца",
        "Строгая конфиденциальность",
      ],
    },
    expertise: {
      label: "Пять направлений",
      title: "Широкая экспертиза. Единый уровень исполнения.",
      body: "Выберите ближайшее направление или просто опишите желаемый результат. Сложные запросы часто охватывают несколько сфер — POC объединяет их в единый план действий.",
      services: "Услуги",
      close: "Закрыть",
      discuss: "Обсудить направление",
      select: "Выбрать направление",
    },
    custom: {
      label: "Индивидуальный запрос",
      title: "Не всё важное вписывается в категории.",
      body: "Ваш запрос не вписывается ни в одно направление? Именно здесь мы полезны. Опишите желаемый результат — мы уточним главное и предложим самый короткий и надёжный путь.",
      cta: "Описать запрос",
    },
    method: {
      label: "Как мы работаем",
      title: "Спокойный процесс — от вопроса до результата.",
      steps: [
        "Расскажите, что нужно решить.",
        "Мы уточняем, что действительно важно.",
        "Вы получаете первый чёткий ответ и предложенный план.",
        "Одна точка контакта ведёт исполнение до результата.",
      ],
    },
    confidentiality: {
      label: "Конфиденциальность",
      title: "Деликатность — часть нашей работы.",
      body: "Вашей задачей занимается минимально необходимый круг людей. Мы запрашиваем только нужную информацию, подключаем профильных специалистов и сохраняем ясность коммуникации.",
      points: [
        "Координация по принципу необходимого знания",
        "Никаких публичных кейсов без прямого согласия",
        "Профильные специалисты для регулируемых вопросов",
      ],
    },
    form: {
      label: "Конфиденциальный разговор",
      title: "Расскажите, что нужно решить.",
      body: "Мы вернёмся с первым чётким ответом — конфиденциально и по существу.",
      name: "Имя",
      email: "Email",
      phone: "Телефон (необязательно)",
      direction: "Направление",
      task: "Что нужно решить?",
      select: "Выберите направление",
      unsure: "Пока не уверен",
      custom: "Индивидуальный запрос",
      submit: "Отправить заявку",
      sending: "Защищённая отправка…",
      successTitle: "Ваш запрос передан POC.",
      successBody: "Спасибо. Сообщение принято, а форма очищена.",
      another: "Отправить новый запрос",
      privacy: "Ваш запрос обрабатывается строго конфиденциально. Пожалуйста, не указывайте особо чувствительные персональные данные на этом этапе.",
      required: "Заполните это поле.",
      invalidEmail: "Укажите корректный email.",
      shortTask: "Добавьте немного больше информации.",
      sendError: "Сейчас не удалось принять запрос. Попробуйте ещё раз или свяжитесь напрямую.",
      channelTitle: "Удобнее связаться напрямую?",
      unavailable: "Официальные контакты будут добавлены перед запуском.",
    },
    footer: {
      line: "Конфиденциальность · Ясность · Результат",
      region: "Лазурный берег и за его пределами",
      privacy: "Конфиденциальность",
      legal: "Правовая информация",
      rights: "Private Office Consulting. Все права защищены.",
      concepts: "Посмотреть пять направлений",
    },
    card: {
      view: "Открыть сайт",
      preferred: "Рекомендуем",
      title: "Пять рабочих версий POC.",
      body: "Выберите направление. Во всех версиях представлены полный набор услуг, три языка и конфиденциальная форма — в разных motion-системах.",
    },
  },
} as const;

export function copy(locale: Locale) {
  return data[locale];
}

export const pillars: Record<Locale, Record<DirectionKey, LocalizedPillar>> = {
  en: {
    business: {
      title: "Business & Administration",
      tagline: "Your project. Our expertise.",
      summary: "We turn professional and administrative complexity into a clear, coordinated route — from the first brief to local execution.",
      groups: [
        { title: "Strategy & setup", items: ["Project framing and action roadmaps", "Business setup coordination", "Market and local-operating research", "Specialist introductions"] },
        { title: "Administration & operations", items: ["Document and application coordination", "Appointments and deadlines", "Translation and multilingual correspondence", "Supplier sourcing and quote comparison"] },
        { title: "Representation", items: ["Local liaison while you are abroad", "Meeting and visit coordination", "Sensitive special projects", "Progress reporting through one contact"] },
      ],
    },
    property: {
      title: "Property & Management",
      tagline: "Your home. Under control.",
      summary: "From search and acquisition to setup and daily stewardship, one contact keeps your property ready, protected and properly managed.",
      groups: [
        { title: "Search & transaction", items: ["Search and viewing coordination", "Agent, notary and specialist liaison", "Due-diligence workflow coordination", "Acquisition, sale and rental support"] },
        { title: "Setup & improvement", items: ["Move-in and utilities", "Renovation and furnishing coordination", "Contractor and delivery follow-through", "Insurance and household providers"] },
        { title: "Ongoing stewardship", items: ["Home checks and key holding", "Seasonal opening and closing", "Maintenance and emergency intervention", "Staff, invoices and owner reporting"] },
      ],
    },
    relocation: {
      title: "Relocation & Integration",
      tagline: "A new life. From day one.",
      summary: "We coordinate the practical, administrative and human details of arrival so that a new place begins to feel workable from the first day.",
      groups: [
        { title: "Before arrival", items: ["Relocation roadmap", "Residency workflow with qualified counsel", "Area, home and school research", "Documents, translations and appointments"] },
        { title: "Arrival & setup", items: ["Arrival and temporary stays", "Banking, insurance and utilities", "Healthcare introductions", "Vehicle and transport coordination"] },
        { title: "Integration", items: ["Administrative follow-through", "Language and network introductions", "Family routines and activities", "Ongoing transition support"] },
      ],
    },
    mobility: {
      title: "Mobility & Comfort",
      tagline: "Every day. Effortlessly.",
      summary: "Thoughtful travel, transport and everyday coordination keep your time protected and plans moving smoothly.",
      groups: [
        { title: "Mobility", items: ["Chauffeur and private transfers", "Vehicle rental, purchase and servicing", "Aviation, rail and multimodal itineraries", "Meet-and-assist arrangements"] },
        { title: "Travel & stays", items: ["Complex itinerary coordination", "Hotels, villas and residences", "Restaurant, event and cultural access", "Guest and family logistics"] },
        { title: "Everyday comfort", items: ["Reservations and appointments", "Lifestyle procurement", "Wellness and specialist introductions", "Practical on-call requests"] },
      ],
    },
    brand: {
      title: "Personal Brand",
      tagline: "Your image. Wherever it matters.",
      summary: "We coordinate strategy, content and trusted specialists to build a coherent presence across the moments and channels that matter.",
      groups: [
        { title: "Positioning", items: ["Personal-brand audit", "Narrative, biography and key messages", "Visual identity and style", "Multilingual profile adaptation"] },
        { title: "Content & presence", items: ["Website and profile coordination", "Editorial calendar", "Photography and video teams", "Speech and interview preparation"] },
        { title: "Visibility", items: ["Media and speaking opportunities", "Partnership research", "Appearance and production logistics", "Reputation workflow coordination"] },
      ],
    },
  },
  fr: {
    business: {
      title: "Entreprise & administration",
      tagline: "Votre projet. Notre expertise.",
      summary: "Nous transformons la complexité professionnelle et administrative en un parcours clair et coordonné — du premier brief à l’exécution locale.",
      groups: [
        { title: "Stratégie & création", items: ["Cadrage et feuille de route", "Coordination de création d’entreprise", "Étude du contexte local", "Mise en relation avec des spécialistes"] },
        { title: "Administration & opérations", items: ["Documents et démarches", "Rendez-vous et échéances", "Traduction et correspondance", "Recherche de prestataires et devis"] },
        { title: "Représentation", items: ["Liaison locale en votre absence", "Réunions et visites", "Missions sensibles", "Reporting par un interlocuteur unique"] },
      ],
    },
    property: {
      title: "Immobilier & gestion",
      tagline: "Votre maison. Sous contrôle.",
      summary: "De la recherche et l’acquisition à l’installation puis à la gestion quotidienne, un interlocuteur unique veille sur votre propriété.",
      groups: [
        { title: "Recherche & transaction", items: ["Recherche et visites", "Liaison avec agents et notaires", "Coordination de la vérification", "Achat, vente et location"] },
        { title: "Installation & amélioration", items: ["Emménagement et services", "Travaux et ameublement", "Prestataires et livraisons", "Assurance et fournisseurs"] },
        { title: "Gestion continue", items: ["Contrôles et garde de clés", "Préparation saisonnière", "Maintenance et urgences", "Personnel, factures et reporting"] },
      ],
    },
    relocation: {
      title: "Relocation & intégration",
      tagline: "Une nouvelle vie. Dès le premier jour.",
      summary: "Nous coordonnons les aspects pratiques, administratifs et humains de votre arrivée afin que votre nouvelle vie soit opérationnelle dès le premier jour.",
      groups: [
        { title: "Avant l’arrivée", items: ["Feuille de route", "Résidence avec des conseils qualifiés", "Quartier, logement et école", "Documents et rendez-vous"] },
        { title: "Arrivée & installation", items: ["Accueil et hébergement temporaire", "Banque, assurance et services", "Mise en relation santé", "Véhicule et transport"] },
        { title: "Intégration", items: ["Suivi administratif", "Langue et réseau local", "Routines et activités familiales", "Accompagnement de transition"] },
      ],
    },
    mobility: {
      title: "Mobilité & confort",
      tagline: "Chaque jour. Sans effort.",
      summary: "Une coordination attentive de vos déplacements, voyages et demandes quotidiennes protège votre temps et fluidifie chaque projet.",
      groups: [
        { title: "Mobilité", items: ["Chauffeurs et transferts", "Location, achat et entretien de véhicules", "Avion, train et itinéraires combinés", "Accueil et assistance"] },
        { title: "Voyages & séjours", items: ["Itinéraires complexes", "Hôtels, villas et résidences", "Restaurants, événements et culture", "Logistique famille et invités"] },
        { title: "Confort quotidien", items: ["Réservations et rendez-vous", "Achats et approvisionnement", "Bien-être et spécialistes", "Demandes pratiques"] },
      ],
    },
    brand: {
      title: "Marque personnelle",
      tagline: "Votre image. Là où elle compte.",
      summary: "Nous coordonnons stratégie, contenu et spécialistes de confiance pour construire une présence cohérente à chaque moment et sur chaque canal pertinent.",
      groups: [
        { title: "Positionnement", items: ["Audit de marque personnelle", "Récit, biographie et messages", "Identité visuelle et style", "Adaptation multilingue"] },
        { title: "Contenu & présence", items: ["Site et profils", "Calendrier éditorial", "Photo, vidéo et équipes créatives", "Discours et interviews"] },
        { title: "Visibilité", items: ["Médias et conférences", "Recherche de partenariats", "Logistique d’apparition", "Suivi de réputation"] },
      ],
    },
  },
  ru: {
    business: {
      title: "Бизнес и администрирование",
      tagline: "Ваш проект. Наши знания.",
      summary: "Превращаем профессиональные и административные задачи в понятный, скоординированный процесс — от первого брифа до реализации на месте.",
      groups: [
        { title: "Стратегия и запуск", items: ["Формирование задачи и дорожной карты", "Координация создания бизнеса", "Исследование местной среды", "Подбор профильных специалистов"] },
        { title: "Администрирование", items: ["Документы и заявления", "Встречи и сроки", "Переводы и переписка", "Подрядчики и сравнение предложений"] },
        { title: "Представительство", items: ["Взаимодействие на месте", "Координация встреч и визитов", "Деликатные специальные проекты", "Отчётность через один контакт"] },
      ],
    },
    property: {
      title: "Недвижимость и управление",
      tagline: "Ваш дом. Под контролем.",
      summary: "От поиска и приобретения до обустройства и ежедневного управления — одна точка контакта следит, чтобы недвижимость была готова, защищена и под контролем.",
      groups: [
        { title: "Поиск и сделка", items: ["Поиск и просмотры", "Работа с агентами и нотариусами", "Координация проверки", "Покупка, продажа и аренда"] },
        { title: "Обустройство", items: ["Переезд и подключение услуг", "Ремонт и меблировка", "Подрядчики и поставки", "Страхование и поставщики"] },
        { title: "Постоянное управление", items: ["Проверки и хранение ключей", "Сезонная подготовка", "Обслуживание и экстренные работы", "Персонал, счета и отчётность"] },
      ],
    },
    relocation: {
      title: "Релокация и интеграция",
      tagline: "Новая жизнь. С первого дня.",
      summary: "Координируем практические, административные и бытовые детали переезда, чтобы новая жизнь стала понятной и организованной с первого дня.",
      groups: [
        { title: "До приезда", items: ["План релокации", "Резидентство с профильными специалистами", "Район, жильё и школа", "Документы и встречи"] },
        { title: "Приезд и обустройство", items: ["Встреча и временное проживание", "Банки, страхование и услуги", "Медицинские контакты", "Автомобиль и транспорт"] },
        { title: "Интеграция", items: ["Административное сопровождение", "Язык и местное окружение", "Семейные занятия и ритм", "Поддержка в переходный период"] },
      ],
    },
    mobility: {
      title: "Мобильность и комфорт",
      tagline: "Каждый день. Без усилий.",
      summary: "Продуманная координация поездок, транспорта и ежедневных задач сохраняет ваше время и помогает планам двигаться без лишних усилий.",
      groups: [
        { title: "Перемещения", items: ["Водители и трансферы", "Аренда, покупка и обслуживание авто", "Авиационные и комбинированные маршруты", "Встреча и сопровождение"] },
        { title: "Поездки и проживание", items: ["Сложные маршруты", "Отели, виллы и резиденции", "Рестораны, события и культура", "Логистика семьи и гостей"] },
        { title: "Ежедневный комфорт", items: ["Бронирования и встречи", "Закупки", "Wellness и специалисты", "Практические повседневные запросы"] },
      ],
    },
    brand: {
      title: "Личный бренд",
      tagline: "Ваш образ. Везде, где нужно.",
      summary: "Координируем стратегию, контент и работу проверенных специалистов, чтобы сформировать цельный образ во всех значимых каналах и ситуациях.",
      groups: [
        { title: "Позиционирование", items: ["Аудит личного бренда", "История, биография и сообщения", "Визуальный образ и стиль", "Многоязычная адаптация"] },
        { title: "Контент и присутствие", items: ["Сайт и профили", "Редакционный план", "Фото, видео и команды", "Выступления и интервью"] },
        { title: "Возможности", items: ["Медиа и выступления", "Партнёрства", "Логистика публичных появлений", "Работа с репутацией"] },
      ],
    },
  },
};

export const directionKeys = Object.keys(pillars.en) as DirectionKey[];
