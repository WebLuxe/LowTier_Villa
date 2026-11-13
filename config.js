/* ==========================================================================
   config.js: EVERYTHING ABOUT THE CLIENT LIVES IN THIS FILE.
   WebLuxe Villa template, Low tier: one page for one holiday villa.
   To set up a new client, change the values below and save (or use /admin/).

   - Text is written { en: "...", fr: "..." }. "languages" decides what visitors see.
   - Leave a value empty ("") or remove a list item to hide it.
     A whole section disappears with  enabled: false .
   - Prices are in rupees (currency.base) per night for the whole villa.
   - Photos: img("unsplash-id", alt) for Unsplash, or img("assets/photos/x.jpg", alt).
   ========================================================================== */
/* Demo only: booked nights counted from today, so the calendar always shows some. For a client write the dates: ["2026-12-20", "2027-01-03"] */
function soon(inDays, nights) { const d = (n) => new Date(Date.now() + n * 864e5).toISOString().slice(0, 10); return [d(inDays), d(inDays + nights)]; }
function img(id, alt) { return { src: id.includes('/') ? id : `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70`, alt: alt || '' }; }

window.SITE = {

  /* ---------- 1. The business ---------- */
  name: "WebLuxe Villa",
  legalName: "WebLuxe Villa Ltd",
  tagline: { en: "A private three-bedroom pool villa, three minutes from the beach at Pereybère.", fr: "Une villa privée de trois chambres avec piscine, à trois minutes de la plage de Pereybère." },
  logo: { image: "", mark: "W", text: "WebLuxe Villa" },

  /* ---------- 2. Brand colours and fonts ---------- */
  colors: {
    primary: "#24452F",  // palm green: logo, buttons, the rates card
    accent:  "#D9A441",  // warm gold: "Check availability", lines, icons
    dark:    "#11231A",
    light:   "#F5F1E8",
  },
  fonts: { heading: "Lora", headingWeights: "500;600;700", headingFallback: "Georgia, serif", body: "Nunito Sans", bodyWeights: "400;600;700" },
  darkMode: false,           // add-on: true shows a light/dark switch
  languages: ["en", "fr"],   // English first (the default). ["en"] shows English only
  defaultLanguage: "en",
  timeZone: "Indian/Mauritius",

  currency: {
    base: "MUR",                          // prices below are in rupees
    rates: { EUR: 0.0196, USD: 0.0217 },  // 1 rupee in euros and dollars. Update now and then
    secondary: "EUR",                     // shown small next to prices ("≈ €225"). Empty to hide
  },

  /* ---------- 3. Contact details ---------- */
  contact: {
    phone: "+230 5123 4567",
    whatsapp: "23051234567",            // country code + number, digits only
    whatsappMessage: { en: "Hello WebLuxe Villa, I would like to ask about a stay.", fr: "Bonjour WebLuxe Villa, je voudrais des informations pour un séjour." },
    email: "stay@webluxevilla.mu",
    responseTime: { en: "We usually reply within a few hours, 8 am to 8 pm Mauritius time.", fr: "Nous répondons en général en quelques heures, de 8 h à 20 h heure de Maurice." },
    street: "Coastal Road, Pereybère",
    city: "Grand Baie",
    region: "",
    postalCode: "",
    country: { en: "Mauritius", fr: "Maurice" },
    countryCode: "MU",
    lat: -19.9953, lng: 57.5878,
    mapEmbed: "https://www.google.com/maps?q=Pereybere+Mauritius&z=14&output=embed",
    mapsLink: "",
    googleBusiness: "",   // the villa's Google Maps / Business profile link
  },
  hours: null,
  social: { instagram: "https://instagram.com", facebook: "https://facebook.com", tripadvisor: "", google: "", tiktok: "", youtube: "" },

  /* ---------- 4. Google and link previews ---------- */
  seo: {
    title: { en: "WebLuxe Villa | Private pool villa in Pereybère, Mauritius", fr: "WebLuxe Villa | Villa avec piscine privée à Pereybère, Maurice" },
    description: { en: "Three bedrooms, a private pool and a tropical garden, three minutes from Pereybère beach. Check the calendar and book direct with the owners.", fr: "Trois chambres, une piscine privée et un jardin tropical, à trois minutes de la plage de Pereybère. Consultez le calendrier et réservez en direct." },
    image: "https://images.unsplash.com/photo-1596178067639-5c6e68aea6dc?auto=format&fit=crop&q=70",
    favicon: "assets/favicon.svg",
    schemaType: "LodgingBusiness",
    priceRange: "Rs 9,500 – Rs 16,500 per night",
    siteUrl: "",   // the final address, e.g. "https://www.yourvilla.mu/". Also in sitemap.xml and robots.txt
  },

  /* ---------- 5. Availability requests ---------- */
  form: { endpoint: "" },  // e.g. "https://formspree.io/f/abcdwxyz". Empty = the request opens the visitor's email app
  booking: { sendVia: "both", defaultNights: 5 },

  /* ---------- 6. The villa at a glance ---------- */
  villa: {
    price: 11500, minNights: 3, guests: 6, bedrooms: 3,
    checkIn: "14:00", checkOut: "11:00",
    // Nights already booked, crossed out in the calendar: [first night, day they leave]. Update it when a booking comes in (or in /admin/)
    booked: [soon(4, 6), soon(17, 5), soon(31, 9), soon(52, 4), soon(70, 12)],
    facts: [
      { icon: "bed", label: { en: "3 bedrooms", fr: "3 chambres" } },
      { icon: "users", label: { en: "Sleeps 6", fr: "6 personnes" } },
      { icon: "pool", label: { en: "Private pool", fr: "Piscine privée" } },
      { icon: "wave", label: { en: "3 min to the beach", fr: "Plage à 3 min" } },
    ],
    stats: [
      { icon: "bed", value: "3", label: { en: "Bedrooms", fr: "Chambres" } },
      { icon: "home", value: "3", label: { en: "Bathrooms", fr: "Salles de bain" } },
      { icon: "users", value: "6", label: { en: "Guests", fr: "Personnes" } },
      { icon: "ruler", value: "210 m²", label: { en: "Living space", fr: "Surface" } },
    ],
  },

  /* ---------- 7. The page, section by section ---------- */
  sections: {
    hero: {
      image: img("1596178067639-5c6e68aea6dc", "The villa's private pool among the palms"),
      eyebrow: { en: "Pereybère · North coast of Mauritius", fr: "Pereybère · Côte nord de Maurice" },
      title: { en: "Your own villa by the lagoon", fr: "Votre villa à vous, au bord du lagon" },
      text: { en: "Three bedrooms, a private pool and a garden full of frangipani, three minutes' walk from one of the island's calmest beaches.", fr: "Trois chambres, une piscine privée et un jardin plein de frangipaniers, à trois minutes à pied de l'une des plages les plus calmes de l'île." },
    },
    direct: {
      title: { en: "Why book direct", fr: "Pourquoi réserver en direct" },
      items: [
        { icon: "tag", title: { en: "Best price", fr: "Meilleur prix" }, text: { en: "Lower than any booking site", fr: "Moins cher qu'en ligne" } },
        { icon: "check", title: { en: "No booking fees", fr: "Sans frais" }, text: { en: "The price you see is the price", fr: "Le prix affiché, c'est tout" } },
        { icon: "calendar", title: { en: "Free cancellation", fr: "Annulation gratuite" }, text: { en: "Up to 30 days before", fr: "Jusqu'à 30 jours avant" } },
        { icon: "wa", title: { en: "Talk to the owners", fr: "Parlez aux propriétaires" }, text: { en: "On WhatsApp, any time", fr: "Sur WhatsApp, à tout moment" } },
      ],
    },
    about: {
      eyebrow: { en: "The villa", fr: "La villa" },
      title: { en: "A family house, kept just for you", fr: "Une maison de famille, rien que pour vous" },
      text: [
        { en: "The villa is rented as a whole, so you never share the pool, the garden or the terrace. The living room opens wide onto the pool deck, and every bedroom has its own bathroom.", fr: "La villa se loue en entier : vous ne partagez ni la piscine, ni le jardin, ni la terrasse. Le salon s'ouvre largement sur la piscine et chaque chambre a sa salle de bain." },
        { en: "Our housekeeper comes in every morning, and we are a WhatsApp away for restaurant tips, a driver or a catamaran day.", fr: "Notre gouvernante passe chaque matin, et nous sommes à un message WhatsApp pour vos restaurants, un chauffeur ou une journée en catamaran." },
      ],
      host: { en: "Anaïs & Kevin, your hosts", fr: "Anaïs et Kevin, vos hôtes" },
      image: img("1793891546320-b031d3d7a040", "View from the living room to the pool, the palms and the sea"),
    },
    amenities: {
      eyebrow: { en: "Everything you need", fr: "Tout ce qu'il faut" },
      title: { en: "In the villa", fr: "Dans la villa" },
      lead: "",
      items: [
        { icon: "pool", label: { en: "Private 10 m pool", fr: "Piscine privée de 10 m" } },
        { icon: "snow", label: { en: "Air-con in every bedroom", fr: "Climatisation dans chaque chambre" } },
        { icon: "wifi", label: { en: "Fast fibre Wi-Fi", fr: "Wi-Fi fibre rapide" } },
        { icon: "coffee", label: { en: "Fully equipped kitchen", fr: "Cuisine tout équipée" } },
        { icon: "sparkle", label: { en: "Daily housekeeping", fr: "Ménage quotidien" } },
        { icon: "leaf", label: { en: "Tropical garden", fr: "Jardin tropical" } },
        { icon: "sun", label: { en: "Barbecue terrace", fr: "Terrasse barbecue" } },
        { icon: "car", label: { en: "Private parking", fr: "Parking privé" } },
        { icon: "shield", label: { en: "Gated, with a safe", fr: "Portail et coffre-fort" } },
        { icon: "heart", label: { en: "Cot and high chair", fr: "Lit bébé et chaise haute" } },
        { icon: "bag", label: { en: "Washing machine", fr: "Lave-linge" } },
        { icon: "wave", label: { en: "Beach towels and kayaks", fr: "Serviettes de plage et kayaks" } },
      ],
    },
    gallery: {
      eyebrow: { en: "Photos", fr: "Photos" },
      title: { en: "Take a look around", fr: "Faites le tour" },
      lead: "",
      images: [
        img("1582719508461-905c673771fd", "The pool at sunset, looking out to sea"),
        img("1611892440504-42a792e24d32", "The main bedroom with a wooden bed"),
        img("1675657144361-98ae33e6b6f9", "Sun lounger beside the private pool"),
        img("1646974400439-8472d58bb19e", "En-suite bathroom with a large bathtub"),
        img("1634972312739-d7237018e06a", "A beach in Mauritius with the mountains behind"),
        img("1759372945658-1e9f56e751bd", "The villa lit up in the evening"),
        img("1731336478850-6bce7235e320", "Second bedroom with a white bed"),
        img("1756115374220-c43b04be3a53", "Breakfast tray floating in the pool"),
        img("1580629844914-374f3b707fe5", "Palm trees against the sunset"),
      ],
    },
    rates: {
      eyebrow: { en: "Rates", fr: "Tarifs" },
      title: { en: "One price for the whole villa", fr: "Un prix pour toute la villa" },
      lead: { en: "Per night, for up to 6 guests. No booking fees, no hidden extras.", fr: "Par nuit, jusqu'à 6 personnes. Sans frais de réservation ni suppléments cachés." },
      // from / to are "MM-DD" and may cross New Year. Any date not listed uses villa.price
      seasons: [
        { name: { en: "Festive season", fr: "Fêtes de fin d'année" }, from: "12-15", to: "01-08", price: 16500, minNights: 7 },
        { name: { en: "High season", fr: "Haute saison" }, from: "10-01", to: "12-14", price: 13500, minNights: 4 },
        { name: { en: "Winter offer", fr: "Offre d'hiver" }, from: "05-15", to: "08-31", price: 9500, minNights: 3 },
      ],
      included: { en: "Included: daily housekeeping, Wi-Fi, pool care, bed linen and beach towels.", fr: "Inclus : ménage quotidien, Wi-Fi, entretien de la piscine, linge de lit et serviettes de plage." },
      notes: [
        { icon: "clock", title: { en: "Check-in 2 pm, check-out 11 am", fr: "Arrivée 14 h, départ 11 h" }, text: { en: "Landing early? Leave your bags and use the pool while we finish getting ready.", fr: "Vous atterrissez tôt ? Déposez vos bagages et profitez de la piscine pendant que nous terminons." } },
        { icon: "lock", title: { en: "30% deposit to confirm", fr: "30 % d'acompte pour confirmer" }, text: { en: "By bank transfer or card link. The rest is paid on arrival.", fr: "Par virement ou lien de paiement par carte. Le solde est réglé à l'arrivée." } },
        { icon: "calendar", title: { en: "Free cancellation", fr: "Annulation gratuite" }, text: { en: "Up to 30 days before arrival. Cyclone warning? Move your dates for free.", fr: "Jusqu'à 30 jours avant l'arrivée. Alerte cyclonique ? Changez vos dates sans frais." } },
      ],
    },
    reviews: {
      eyebrow: { en: "Guest book", fr: "Livre d'or" },
      title: { en: "What our guests say", fr: "Ce que disent nos hôtes" },
      summary: { rating: 4.9, best: 5, count: 64, source: "Google" },
      items: [
        { name: "Laura & Tom", from: { en: "United Kingdom", fr: "Royaume-Uni" }, date: { en: "September 2026", fr: "septembre 2026" }, rating: 5, text: { en: "Even nicer than the photos. The pool was ours all day and the beach is a short barefoot walk away.", fr: "Encore plus belle qu'en photo. La piscine rien que pour nous et la plage à quelques pas pieds nus." } },
        { name: "Famille Dubois", from: { en: "France", fr: "France" }, date: { en: "August 2026", fr: "août 2026" }, rating: 5, text: { en: "Perfect with three children: safe garden, shallow lagoon and a kitchen with everything. We booked direct and saved a lot.", fr: "Parfaite avec trois enfants : jardin sécurisé, lagon peu profond et cuisine complète. Réservé en direct, nous avons beaucoup économisé." } },
        { name: "Anika S.", from: { en: "Germany", fr: "Allemagne" }, date: { en: "June 2026", fr: "juin 2026" }, rating: 5, text: { en: "Quiet, spotless and so peaceful in the evenings. The hosts sent us a list of restaurants before we even landed.", fr: "Calme, impeccable et si paisible le soir. Les hôtes nous ont envoyé une liste de restaurants avant même notre arrivée." } },
      ],
    },
    book: {
      eyebrow: { en: "Availability", fr: "Disponibilités" },
      title: { en: "Ask for your dates", fr: "Demandez vos dates" },
      lead: { en: "Tap your arrival day, then your departure day. Crossed-out nights are already booked. We confirm within a few hours.", fr: "Touchez votre jour d'arrivée, puis votre jour de départ. Les nuits barrées sont déjà réservées. Nous confirmons en quelques heures." },
      formTitle: { en: "Availability request", fr: "Demande de disponibilité" },
    },
    faq: {
      eyebrow: { en: "Good to know", fr: "Bon à savoir" },
      title: { en: "Questions, answered", fr: "Vos questions" },
      lead: { en: "Anything else? Ask us on WhatsApp.", fr: "Autre chose ? Demandez-nous sur WhatsApp." },
      items: [
        { q: { en: "Is the whole villa just for us?", fr: "La villa est-elle entièrement à nous ?" }, a: { en: "Yes. You rent the whole house, the pool and the garden. Nobody else stays on the property.", fr: "Oui. Vous louez toute la maison, la piscine et le jardin. Personne d'autre ne séjourne sur place." } },
        { q: { en: "How do we pay?", fr: "Comment payer ?" }, a: { en: "A 30% deposit by bank transfer or card link confirms your dates. The rest is paid on arrival.", fr: "Un acompte de 30 % par virement ou lien de paiement confirme vos dates. Le solde se règle à l'arrivée." } },
        { q: { en: "Can you arrange an airport transfer?", fr: "Pouvez-vous organiser le transfert aéroport ?" }, a: { en: "Yes, Rs 2,800 each way for up to 6 people. Our driver waits at arrivals with a sign.", fr: "Oui, Rs 2 800 par trajet jusqu'à 6 personnes. Notre chauffeur vous attend aux arrivées avec une pancarte." } },
        { q: { en: "Is it good for children?", fr: "Est-ce adapté aux enfants ?" }, a: { en: "Very. The garden is gated, there is a cot and high chair, and the lagoon is calm and shallow.", fr: "Tout à fait. Le jardin est clos, il y a un lit bébé et une chaise haute, et le lagon est calme et peu profond." } },
        { q: { en: "What about cyclone season?", fr: "Et la saison des cyclones ?" }, a: { en: "It runs January to March. If a cyclone warning stops you travelling, you can move your dates for free.", fr: "De janvier à mars. Si une alerte cyclonique vous empêche de voyager, vous pouvez déplacer vos dates sans frais." } },
      ],
    },
    location: {
      eyebrow: { en: "Location", fr: "Emplacement" },
      title: { en: "On the sunny north coast", fr: "Sur la côte nord ensoleillée" },
      text: { en: "Pereybère has a calm, sheltered beach, with the restaurants and shops of Grand Baie five minutes away.", fr: "Pereybère offre une plage calme et abritée, avec les restaurants et boutiques de Grand Baie à cinq minutes." },
      facts: [
        { icon: "plane", value: { en: "1 h", fr: "1 h" }, label: { en: "from the airport", fr: "de l'aéroport" } },
        { icon: "wave", value: { en: "3 min", fr: "3 min" }, label: { en: "walk to the beach", fr: "à pied de la plage" } },
        { icon: "bag", value: { en: "5 min", fr: "5 min" }, label: { en: "to Grand Baie", fr: "de Grand Baie" } },
        { icon: "car", value: { en: "Free", fr: "Gratuit" }, label: { en: "parking at the villa", fr: "parking à la villa" } },
      ],
    },
  },

  credit: { name: "WebLuxe", url: "https://webluxe.github.io/WebLuxe/" },

  /* ---------- Admin panel (/admin/). Changes are saved to data/site.js in this GitHub repository ---------- */
  admin: { repo: "WebLuxe/LowTier_Villa", branch: "main" },   // for a client: their own copy of the repository

  /* ---------- 8. Demo mode (WebLuxe sales demos). Set enabled: false for a real client ---------- */
  demo: {
    enabled: true,
    note: { en: "Example website by WebLuxe. WebLuxe Villa is not a real business: the names, prices, photos, reviews and availability are all examples.", fr: "Site d'exemple par WebLuxe. WebLuxe Villa n'est pas une vraie entreprise : noms, prix, photos, avis et disponibilités sont des exemples." },
    studioWhatsapp: "",
    tiers: [
      { label: { en: "Essentials", fr: "Essentiel" }, url: "https://webluxe.github.io/LowTier_Villa/", current: true },
      { label: { en: "Stays", fr: "Séjours" }, url: "https://webluxe.github.io/MidTier_Villa/" },
      { label: { en: "Bookings", fr: "Réservations" }, url: "https://webluxe.github.io/HighTier_Villa/" },
    ],
  },

  /* ---------- 9. All the small words on buttons and labels ---------- */
  text: {
    en: {
      // ----- words used on every WebLuxe template (menus, buttons, messages) -----
      home: "Home", skip: "Skip to content", menu: "Menu", switchLang: "Voir le site en français", toggleTheme: "Switch light or dark mode",
      explore: "Explore", footerNav: "Footer links", contactTitle: "Contact", hoursTitle: "Opening hours", rights: "All rights reserved.", websiteBy: "Website by",
      whatsappUs: "Chat on WhatsApp", phone: "Phone", email: "Email", address: "Address", chatNow: "Chat with us now",
      closed: "Closed", today: "today", tomorrow: "tomorrow", openUntil: "Open now, until {time}", closedOpens: "Closed now. Opens {day} at {time}",
      days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      introSkip: "Skip", close: "Close", ok: "OK", prev: "Previous", next: "Next", slide: "Go to slide {n}", showMap: "Show the map", mapTitle: "Map showing our location",
      formSending: "Sending…", formSent: "Thank you. Your message has been sent and we will reply soon.", formError: "Sorry, the message could not be sent. Please call us on {phone}.",
      formMailto: "Your email app has opened with your message. Press send there to finish.", formDemoDone: "Demo: nothing was sent.",
      demoLabel: "About this demo", demoBadge: "Demo", demoNote: "Example website by WebLuxe. The business, prices and reviews are samples.",
      demoTitle: "This is a demo", demoWa: "On the real website, this opens WhatsApp with this message ready to send:", demoTel: "On the real website, this calls the business:",
      demoMail: "On the real website, this opens an email to the business.", demoForm: "On the real website, the business receives this:",
      demoStudio: "Get a site like this", demoStudioMsg: "Hello WebLuxe, I saw the {site} demo and would like a website like it.",
      reviewOnGoogle: "Review us on Google", seeOnGoogle: "See us on Google Maps", nfTitle: "This page has gone for a swim", nfText: "The address may have a typo, or the page has moved. Everything is still here on the home page.", nfHome: "Go to the home page",
      // ----- this template -----
      hoursTitle: "Reply hours",
      navVilla: "The villa", navGallery: "Photos", navRates: "Rates", navReviews: "Reviews", navLocation: "Location",
      checkAvailability: "Check availability", seePhotos: "See the photos", from: "From", perNight: "per night", viewPhoto: "View photo", allPhotos: "All {n} photos",
      period: "Period", minStay: "Min. stay", standardRate: "Standard rate", allOtherDates: "All other dates", nNights: "{n} nights",
      ratingOf: "{n} out of 5 stars", basedOn: "{n} reviews",
      bookEyebrow: "Availability", bookTitle: "Ask for your dates", formTitle: "Availability request",
      step1: "Choose your dates", step2: "We confirm the price", step3: "A 30% deposit secures the villa",
      checkIn: "Check-in", checkOut: "Check-out", guests: "Guests", guest: "guest", guestsLower: "guests", dates: "Dates",
      pickDates: "Choose your dates", outAfterIn: "Check-out must be after check-in.", minNights: "The minimum stay is {n} nights.",
      fName: "Full name", fEmail: "Email", fPhone: "Phone / WhatsApp", fMessage: "Anything we should know?", optional: "(optional)", messageHint: "Arrival time, children's ages, celebrations…",
      checkDates: "Check dates", pickDatesFirst: "Please choose your dates in the calendar first.", estTotal: "Estimated price",
      calTitle: "Choose your dates", calPickIn: "Tap your check-in day", calPickOut: "Now tap your check-out day (min. {n} nights)", calFree: "Available", calBooked: "Booked",
      calClear: "Clear dates", calDone: "Done", calMin: "From this day the minimum stay is {n} nights.", calClash: "Some of those nights are already booked.",
      continue: "Continue", changeDates: "Change dates", sendRequest: "Send request", askWa: "Ask on WhatsApp", noPayNow: "No payment now. We confirm availability first.",
      waIntro: "Hello {name}, is the villa free for these dates?", bookSubject: "Availability request from the {name} website",
    },
    fr: {
      // ----- mots utilisés sur tous les modèles WebLuxe (menus, boutons, messages) -----
      home: "Accueil", skip: "Aller au contenu", menu: "Menu", switchLang: "View the site in English", toggleTheme: "Passer en mode clair ou sombre",
      explore: "Explorer", footerNav: "Liens du pied de page", contactTitle: "Contact", hoursTitle: "Horaires", rights: "Tous droits réservés.", websiteBy: "Site web par",
      whatsappUs: "Écrire sur WhatsApp", phone: "Téléphone", email: "E-mail", address: "Adresse", chatNow: "Écrivez-nous maintenant",
      closed: "Fermé", today: "aujourd'hui", tomorrow: "demain", openUntil: "Ouvert, jusqu'à {time}", closedOpens: "Fermé. Ouvre {day} à {time}",
      days: ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"], daysShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      introSkip: "Passer", close: "Fermer", ok: "OK", prev: "Précédent", next: "Suivant", slide: "Aller à la diapositive {n}", showMap: "Afficher la carte", mapTitle: "Carte de notre adresse",
      formSending: "Envoi…", formSent: "Merci. Votre message a été envoyé et nous vous répondrons très vite.", formError: "Désolé, le message n'a pas pu être envoyé. Appelez-nous au {phone}.",
      formMailto: "Votre messagerie s'est ouverte avec votre message. Appuyez sur envoyer pour terminer.", formDemoDone: "Démo : rien n'a été envoyé.",
      demoLabel: "À propos de cette démo", demoBadge: "Démo", demoNote: "Exemple de site par WebLuxe. L'entreprise, les prix et les avis sont fictifs.",
      demoTitle: "Ceci est une démo", demoWa: "Sur le vrai site, ceci ouvre WhatsApp avec ce message prêt à envoyer :", demoTel: "Sur le vrai site, ceci appelle l'entreprise :",
      demoMail: "Sur le vrai site, ceci ouvre un e-mail vers l'entreprise.", demoForm: "Sur le vrai site, l'entreprise reçoit ceci :",
      demoStudio: "Je veux un site comme celui-ci", demoStudioMsg: "Bonjour WebLuxe, j'ai vu la démo {site} et je voudrais un site comme celui-ci.",
      reviewOnGoogle: "Laissez un avis Google", seeOnGoogle: "Voir sur Google Maps", nfTitle: "Cette page est partie se baigner", nfText: "L'adresse contient peut-être une faute, ou la page a changé de place. Tout est toujours sur la page d'accueil.", nfHome: "Aller à l'accueil",
      // ----- ce modèle -----
      hoursTitle: "Heures de réponse",
      navVilla: "La villa", navGallery: "Photos", navRates: "Tarifs", navReviews: "Avis", navLocation: "Accès",
      checkAvailability: "Voir les disponibilités", seePhotos: "Voir les photos", from: "Dès", perNight: "par nuit", viewPhoto: "Voir la photo", allPhotos: "Les {n} photos",
      period: "Période", minStay: "Séjour min.", standardRate: "Tarif normal", allOtherDates: "Toutes les autres dates", nNights: "{n} nuits",
      ratingOf: "{n} étoiles sur 5", basedOn: "{n} avis",
      bookEyebrow: "Disponibilités", bookTitle: "Demandez vos dates", formTitle: "Demande de disponibilité",
      step1: "Choisissez vos dates", step2: "Nous confirmons le prix", step3: "Un acompte de 30 % réserve la villa",
      checkIn: "Arrivée", checkOut: "Départ", guests: "Personnes", guest: "personne", guestsLower: "personnes", dates: "Dates",
      pickDates: "Choisissez vos dates", outAfterIn: "Le départ doit suivre l'arrivée.", minNights: "Le séjour minimum est de {n} nuits.",
      fName: "Nom complet", fEmail: "E-mail", fPhone: "Téléphone / WhatsApp", fMessage: "Quelque chose à nous dire ?", optional: "(facultatif)", messageHint: "Heure d'arrivée, âge des enfants, anniversaire…",
      checkDates: "Voir les dates", pickDatesFirst: "Choisissez d'abord vos dates dans le calendrier.", estTotal: "Prix estimé",
      calTitle: "Choisissez vos dates", calPickIn: "Touchez votre jour d'arrivée", calPickOut: "Touchez maintenant votre jour de départ (min. {n} nuits)", calFree: "Libre", calBooked: "Réservé",
      calClear: "Effacer", calDone: "Valider", calMin: "À partir de ce jour, le séjour minimum est de {n} nuits.", calClash: "Certaines de ces nuits sont déjà réservées.",
      continue: "Continuer", changeDates: "Changer les dates", sendRequest: "Envoyer la demande", askWa: "Demander sur WhatsApp", noPayNow: "Aucun paiement maintenant. Nous confirmons d'abord la disponibilité.",
      waIntro: "Bonjour {name}, la villa est-elle libre à ces dates ?", bookSubject: "Demande de disponibilité depuis le site {name}",
    },
  },
};
