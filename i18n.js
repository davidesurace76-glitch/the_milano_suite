/* The Milano Suite — i18n
   Dictionary + DOM translator + language picker glue.
   The main inline script reads strings via window.CD_I18N.t() and
   re-renders on the 'i18nchange' event.
*/

const DICT = {
  en: {
    _name: "English",
    nav_suite: "The Suite", nav_loc: "Location", nav_book: "Book", nav_cta: "Check Availability",
    hero_pill: "Available this season",
    hero_h1: 'A quiet, light-filled suite<br/><em>steps from Fondazione Prada.</em>',
    stat_1: "Private Suite", stat_2: "Guests", stat_3: "To Metro M3", stat_4: "To Duomo",
    hero_cta: "Check the calendar",
    intro_eyebrow: "A few words",
    intro_lede: 'A spacious bedroom with a private bathroom, set inside a design villa in <em>Porta Romana</em>. Pure whites, soft oak, indoor plants &mdash; and a garden you can actually use.',
    intro_body: "We built The Milano Suite for the kind of guest who wants Milano without the crowds: someone who needs reliable WiFi at 7am and a quiet terrace at 9pm. The Suite is yours alone; the kitchen, living room and garden are shared with the hosts — treated like home, not a hotel.",
    intro_sig: "— D. & family, your hosts",
    amen_eyebrow: "In your suite",
    amen_h2: 'Everything for a <em>long, easy stay.</em>',
    amen_sub: 'High-speed fibre, climate control and a 55" Smart TV come standard. Self check-in via lockbox — we agree the arrival time together.',
    amen_1_name: 'High-speed<br/>WiFi',  amen_1_sub: "Fibre · 300 Mbps",
    amen_2_name: 'Smart TV<br/>55"',     amen_2_sub: "Netflix · Prime · YouTube",
    amen_3_name: 'A/C &<br/>Heating',    amen_3_sub: "Year-round comfort",
    amen_4_name: 'Self<br/>check-in',    amen_4_sub: "Lockbox · time agreed",
    amen_5_name: 'Smart-working<br/>corner', amen_5_sub: "Desk · chair · light",
    amen_6_name: 'Garage<br/>on request',    amen_6_sub: "Subject to availability",
    space_eyebrow: "The Space",
    space_h2: 'A private suite,<br/><em>inside a shared villa.</em>',
    space_lede: "Two distinct worlds. Your suite — bedroom and bathroom, fully yours. And the common areas: a designer kitchen, a sunlit living room, and a garden with pergola and hot tub.",
    private_tag: "Yours alone", private_eyebrow: "The Suite · private", private_title: "Bedroom & private bath",
    private_li_1: "King bed, premium linens", private_li_2: "En-suite bathroom with bathtub",
    private_li_3: "Smart TV & A/C in the room", private_li_4: "Blackout blinds, garden view",
    shared_tag: "Shared with hosts", shared_eyebrow: "Common Areas · shared", shared_title: "Living, kitchen & garden",
    shared_li_1: 'Living room with sofa and 65" TV', shared_li_2: "Designer kitchen, dining for six",
    shared_li_3: "Garden, pergola, sun loungers, hot tub", shared_li_4: "BBQ & outdoor dining",
    shared_note: "A note on the kitchen: it’s open for light meals — breakfast, coffee, a quick pasta. Heavy cooking we ask you to enjoy at one of the trattorias around the corner.",
    map_eyebrow: "Where you'll be",
    map_h2: 'Porta Romana.<br/><em>Real Milan, on the M3 line.</em>',
    map_lede: "Five minutes to the metro, fifteen to the Duomo, twenty to Centrale. Click any destination to trace the route.",
    map_streets: "Streets",
    poi_1_meta: "Yellow line · M3 · direct to centre",
    poi_2_meta: "Contemporary art · Largo Isarco",
    poi_3_meta: "Walk to Lodi + M3 direct · 4 stops",
    poi_4_meta: "M3 direct · trains to Malpensa, Como, Venice",
    unit_foot: "on foot", unit_door: "door to door",
    book_eyebrow: "Reserve",
    book_h2: 'Choose your dates,<br/><em>send us a hello.</em>',
    book_copy: "We answer every request personally on WhatsApp — usually within the hour. No accounts, no fees, no surprises.",
    book_li_1: "Direct booking · no platform fees",
    book_li_2: "Self check-in · simple, coordinated arrival",
    book_li_3: "Free cancellation up to 7 days before",
    book_li_4: "We answer in IT · EN · ES · PT on WhatsApp",
    per_night: "/ night", price_max: "2 guests max", price_min: "Min. 2 nights · taxes incl.",
    check_in: "Check-in", check_out: "Check-out", select_date: "Select a date",
    guests_label: "Guests", adults: "adults",
    pick_dates: "Pick your dates", choose_co: "Choose your check-out", request_wa: "Request via WhatsApp",
    estimated_total: "Estimated total", night_one: "night", night_many: "nights",
    disclaimer: "We’ll confirm exact rate, cleaning fee and availability on WhatsApp. Payment via bank transfer or in cash at check-in.",
    foot_desc: "A private suite in a design villa, in the heart of Porta Romana. Run by a family of three. We answer in IT · EN · ES · PT.",
    foot_findus: "Find us", foot_contact: "Contact", foot_avail: "Availability",
    foot_links: "Privacy · Terms · House rules",
    sticky_from: "From · 2 guests", sticky_cta: "Reserve",
    months: ["January","February","March","April","May","June","July","August","September","October","November","December"],
    dow: ["Mo","Tu","We","Th","Fr","Sa","Su"],
    wa_hi: "Hi The Milano Suite! 👋", wa_line: "I'd like to enquire about the suite in Porta Romana:",
    wa_ci: "Check-in", wa_co: "Check-out", wa_n: "Nights", wa_g: "Guests", wa_est: "Estimate",
    wa_ask: "Is it available? Thanks!"
  },

  fr: {
    _name: "Français",
    nav_suite: "La Suite", nav_loc: "Emplacement", nav_book: "Réserver", nav_cta: "Voir les disponibilités",
    hero_pill: "Disponible cette saison",
    hero_h1: 'Une suite calme et lumineuse,<br/><em>à deux pas de la Fondation Prada.</em>',
    stat_1: "Suite privée", stat_2: "Voyageurs", stat_3: "Au métro M3", stat_4: "Au Duomo",
    hero_cta: "Voir le calendrier",
    intro_eyebrow: "Quelques mots",
    intro_lede: 'Une chambre spacieuse avec salle de bain privative, dans une villa design à <em>Porta Romana</em>. Des blancs purs, du chêne clair, des plantes &mdash; et un jardin où l\'on vit vraiment.',
    intro_body: "Nous avons imaginé The Milano Suite pour ceux qui veulent Milan sans la foule : ceux qui ont besoin d'un WiFi rapide à 7h et d'une terrasse calme à 21h. La Suite est rien qu'à vous ; la cuisine, le salon et le jardin se partagent avec les hôtes — vécus comme une maison, pas un hôtel.",
    intro_sig: "— D. et famille, vos hôtes",
    amen_eyebrow: "Dans votre suite",
    amen_h2: 'Tout pour <em>un séjour long et serein.</em>',
    amen_sub: 'Fibre haut débit, climatisation et Smart TV 55" de série. Auto check-in par boîte à clés — on convient ensemble de l’heure d’arrivée.',
    amen_1_name: 'WiFi<br/>haut débit',  amen_1_sub: "Fibre · 300 Mbps",
    amen_2_name: 'Smart TV<br/>55"',     amen_2_sub: "Netflix · Prime · YouTube",
    amen_3_name: 'Clim &<br/>Chauffage', amen_3_sub: "Confort toute l'année",
    amen_4_name: 'Auto<br/>check-in',    amen_4_sub: "Boîte à clés · horaire convenu",
    amen_5_name: 'Coin<br/>télétravail', amen_5_sub: "Bureau · chaise · lampe",
    amen_6_name: 'Garage<br/>sur demande', amen_6_sub: "Sous réserve de disponibilité",
    space_eyebrow: "L'espace",
    space_h2: 'Une suite privée,<br/><em>dans une villa partagée.</em>',
    space_lede: "Deux univers distincts. Votre suite — chambre et salle de bain, rien qu'à vous. Et les espaces communs : une cuisine design, un salon lumineux, et un jardin avec pergola et jacuzzi.",
    private_tag: "Rien qu'à vous", private_eyebrow: "La Suite · privée", private_title: "Chambre & salle de bain privée",
    private_li_1: "Lit king size, linge premium", private_li_2: "Salle de bain attenante avec baignoire",
    private_li_3: "Smart TV & clim dans la chambre", private_li_4: "Rideaux occultants, vue jardin",
    shared_tag: "Partagé avec les hôtes", shared_eyebrow: "Espaces communs · partagés", shared_title: "Salon, cuisine & jardin",
    shared_li_1: 'Salon avec canapé et TV 65"', shared_li_2: "Cuisine design, table pour six",
    shared_li_3: "Jardin, pergola, transats, jacuzzi", shared_li_4: "Barbecue & repas en extérieur",
    shared_note: "Un mot sur la cuisine : elle est ouverte pour les repas légers — petit-déjeuner, café, une pasta rapide. Pour les vrais repas, on vous recommande une trattoria du quartier.",
    map_eyebrow: "Où vous serez",
    map_h2: 'Porta Romana.<br/><em>Le vrai Milan, sur la ligne M3.</em>',
    map_lede: "Cinq minutes du métro, quinze du Duomo, vingt de Centrale. Cliquez sur une destination pour tracer l'itinéraire.",
    map_streets: "Rues",
    poi_1_meta: "Ligne jaune · M3 · direct au centre",
    poi_2_meta: "Art contemporain · Largo Isarco",
    poi_3_meta: "À pied jusqu'à Lodi + M3 direct · 4 arrêts",
    poi_4_meta: "M3 direct · trains pour Malpensa, Côme, Venise",
    unit_foot: "à pied", unit_door: "porte à porte",
    book_eyebrow: "Réserver",
    book_h2: 'Choisissez vos dates,<br/><em>dites-nous bonjour.</em>',
    book_copy: "Nous répondons personnellement à chaque demande sur WhatsApp — généralement dans l'heure. Pas de compte, pas de frais, pas de surprises.",
    book_li_1: "Réservation directe · sans frais",
    book_li_2: "Auto check-in · arrivée simple et coordonnée",
    book_li_3: "Annulation gratuite jusqu'à 7 jours avant",
    book_li_4: "Nous répondons en IT · EN · ES · PT sur WhatsApp",
    per_night: "/ nuit", price_max: "2 voyageurs max", price_min: "Min. 2 nuits · taxes incl.",
    check_in: "Arrivée", check_out: "Départ", select_date: "Choisir une date",
    guests_label: "Voyageurs", adults: "adultes",
    pick_dates: "Choisissez vos dates", choose_co: "Choisissez le départ", request_wa: "Demander via WhatsApp",
    estimated_total: "Total estimé", night_one: "nuit", night_many: "nuits",
    disclaimer: "Nous confirmerons le tarif, le ménage et la disponibilité sur WhatsApp. Paiement par virement ou en espèces à l'arrivée.",
    foot_desc: "Une suite privée dans une villa design, au cœur de Porta Romana. Tenue par une famille de trois. Nous répondons en IT · EN · ES · PT.",
    foot_findus: "Trouvez-nous", foot_contact: "Contact", foot_avail: "Disponibilités",
    foot_links: "Confidentialité · Conditions · Règlement",
    sticky_from: "À partir · 2 voyageurs", sticky_cta: "Réserver",
    months: ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"],
    dow: ["Lu","Ma","Me","Je","Ve","Sa","Di"],
    wa_hi: "Bonjour The Milano Suite ! 👋", wa_line: "Je souhaite me renseigner sur la suite à Porta Romana :",
    wa_ci: "Arrivée", wa_co: "Départ", wa_n: "Nuits", wa_g: "Voyageurs", wa_est: "Estimation",
    wa_ask: "Est-elle disponible ? Merci !"
  },

  es: {
    _name: "Español",
    nav_suite: "La Suite", nav_loc: "Ubicación", nav_book: "Reservar", nav_cta: "Ver disponibilidad",
    hero_pill: "Disponible esta temporada",
    hero_h1: 'Una suite tranquila y luminosa,<br/><em>a un paso de Fondazione Prada.</em>',
    stat_1: "Suite privada", stat_2: "Huéspedes", stat_3: "Al Metro M3", stat_4: "Al Duomo",
    hero_cta: "Ver el calendario",
    intro_eyebrow: "Unas palabras",
    intro_lede: 'Un dormitorio amplio con baño privado, dentro de una villa de diseño en <em>Porta Romana</em>. Blancos puros, roble suave, plantas &mdash; y un jardín que puedes disfrutar de verdad.',
    intro_body: "Pensamos The Milano Suite para quien busca Milán sin las multitudes: quien necesita WiFi rápido a las 7 de la mañana y una terraza tranquila a las 9 de la noche. La Suite es solo tuya; la cocina, el salón y el jardín se comparten con los anfitriones — como en casa, no como en un hotel.",
    intro_sig: "— D. y familia, tus anfitriones",
    amen_eyebrow: "En tu suite",
    amen_h2: 'Todo para <em>una estancia larga y tranquila.</em>',
    amen_sub: 'Fibra de alta velocidad, climatización y Smart TV 55" de serie. Auto check-in con caja fuerte — acordamos juntos la hora de llegada.',
    amen_1_name: 'WiFi<br/>de alta velocidad', amen_1_sub: "Fibra · 300 Mbps",
    amen_2_name: 'Smart TV<br/>55"',           amen_2_sub: "Netflix · Prime · YouTube",
    amen_3_name: 'A/C y<br/>Calefacción',      amen_3_sub: "Confort todo el año",
    amen_4_name: 'Auto<br/>check-in',          amen_4_sub: "Caja fuerte · horario acordado",
    amen_5_name: 'Rincón<br/>smart working',   amen_5_sub: "Escritorio · silla · luz",
    amen_6_name: 'Garaje<br/>a petición',      amen_6_sub: "Sujeto a disponibilidad",
    space_eyebrow: "El espacio",
    space_h2: 'Una suite privada,<br/><em>en una villa compartida.</em>',
    space_lede: "Dos mundos distintos. Tu suite — dormitorio y baño, solo para ti. Y las zonas comunes: cocina de diseño, salón soleado y un jardín con pérgola y jacuzzi.",
    private_tag: "Solo para ti", private_eyebrow: "La Suite · privada", private_title: "Dormitorio y baño privado",
    private_li_1: "Cama king size, ropa de cama premium", private_li_2: "Baño en suite con bañera",
    private_li_3: "Smart TV y A/C en la habitación", private_li_4: "Persianas blackout, vista al jardín",
    shared_tag: "Compartido con anfitriones", shared_eyebrow: "Zonas comunes · compartidas", shared_title: "Salón, cocina y jardín",
    shared_li_1: 'Salón con sofá y TV 65"', shared_li_2: "Cocina de diseño, mesa para seis",
    shared_li_3: "Jardín, pérgola, tumbonas, jacuzzi", shared_li_4: "BBQ y comedor exterior",
    shared_note: "Una nota sobre la cocina: está disponible para comidas ligeras — desayuno, café, una pasta rápida. Para platos elaborados te invitamos a una de las trattorias del barrio.",
    map_eyebrow: "Dónde estarás",
    map_h2: 'Porta Romana.<br/><em>El Milán real, en la línea M3.</em>',
    map_lede: "Cinco minutos al metro, quince al Duomo, veinte a Centrale. Haz clic en cualquier destino para trazar la ruta.",
    map_streets: "Calles",
    poi_1_meta: "Línea amarilla · M3 · directa al centro",
    poi_2_meta: "Arte contemporáneo · Largo Isarco",
    poi_3_meta: "A pie hasta Lodi + M3 directo · 4 paradas",
    poi_4_meta: "M3 directa · trenes a Malpensa, Como, Venecia",
    unit_foot: "a pie", unit_door: "puerta a puerta",
    book_eyebrow: "Reservar",
    book_h2: 'Elige tus fechas,<br/><em>mándanos un hola.</em>',
    book_copy: "Respondemos personalmente cada solicitud por WhatsApp — normalmente en menos de una hora. Sin cuentas, sin comisiones, sin sorpresas.",
    book_li_1: "Reserva directa · sin comisiones",
    book_li_2: "Auto check-in · llegada simple y coordinada",
    book_li_3: "Cancelación gratis hasta 7 días antes",
    book_li_4: "Respondemos en IT · EN · ES · PT por WhatsApp",
    per_night: "/ noche", price_max: "Máx. 2 huéspedes", price_min: "Mín. 2 noches · tasas incl.",
    check_in: "Check-in", check_out: "Check-out", select_date: "Elige una fecha",
    guests_label: "Huéspedes", adults: "adultos",
    pick_dates: "Elige tus fechas", choose_co: "Elige el check-out", request_wa: "Solicitar por WhatsApp",
    estimated_total: "Total estimado", night_one: "noche", night_many: "noches",
    disclaimer: "Confirmaremos tarifa, limpieza y disponibilidad por WhatsApp. Pago por transferencia o en efectivo al llegar.",
    foot_desc: "Una suite privada en una villa de diseño, en el corazón de Porta Romana. Llevada por una familia de tres. Respondemos en IT · EN · ES · PT.",
    foot_findus: "Encuéntranos", foot_contact: "Contacto", foot_avail: "Disponibilidad",
    foot_links: "Privacidad · Términos · Reglas de la casa",
    sticky_from: "Desde · 2 huéspedes", sticky_cta: "Reservar",
    months: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],
    dow: ["Lu","Ma","Mi","Ju","Vi","Sá","Do"],
    wa_hi: "¡Hola The Milano Suite! 👋", wa_line: "Quisiera información sobre la suite en Porta Romana:",
    wa_ci: "Check-in", wa_co: "Check-out", wa_n: "Noches", wa_g: "Huéspedes", wa_est: "Estimado",
    wa_ask: "¿Está disponible? ¡Gracias!"
  },

  it: {
    _name: "Italiano",
    nav_suite: "La Suite", nav_loc: "Posizione", nav_book: "Prenota", nav_cta: "Verifica disponibilità",
    hero_pill: "Disponibile in questa stagione",
    hero_h1: 'Una suite tranquilla, luminosa,<br/><em>a due passi da Fondazione Prada.</em>',
    stat_1: "Suite privata", stat_2: "Ospiti", stat_3: "Alla M3", stat_4: "Al Duomo",
    hero_cta: "Vedi il calendario",
    intro_eyebrow: "Due parole",
    intro_lede: 'Una camera spaziosa con bagno privato, all\'interno di una villa di design in <em>Porta Romana</em>. Bianchi puri, rovere chiaro, piante &mdash; e un giardino che puoi davvero vivere.',
    intro_body: "Abbiamo pensato The Milano Suite per chi cerca Milano senza la folla: chi ha bisogno di WiFi veloce alle 7 del mattino e di una terrazza tranquilla alle 9 di sera. La Suite è solo tua; la cucina, il soggiorno e il giardino li condividi con noi — vissuti come casa, non come hotel.",
    intro_sig: "— D. e famiglia, i tuoi host",
    amen_eyebrow: "Nella tua suite",
    amen_h2: 'Tutto per <em>un soggiorno lungo e sereno.</em>',
    amen_sub: 'Fibra ottica, climatizzazione e Smart TV 55" di serie. Self check-in con cassetta di sicurezza — concordiamo insieme l’orario di arrivo.',
    amen_1_name: 'WiFi<br/>ad alta velocità', amen_1_sub: "Fibra · 300 Mbps",
    amen_2_name: 'Smart TV<br/>55"',          amen_2_sub: "Netflix · Prime · YouTube",
    amen_3_name: 'A/C e<br/>Riscaldamento',   amen_3_sub: "Comfort tutto l'anno",
    amen_4_name: 'Self<br/>check-in',         amen_4_sub: "Cassetta · orario concordato",
    amen_5_name: 'Angolo<br/>smart working',  amen_5_sub: "Scrivania · sedia · luce",
    amen_6_name: 'Garage<br/>su richiesta',   amen_6_sub: "Soggetto a disponibilità",
    space_eyebrow: "Lo spazio",
    space_h2: 'Una suite privata,<br/><em>in una villa condivisa.</em>',
    space_lede: "Due mondi distinti. La tua suite — camera e bagno, solo tuoi. E le aree comuni: cucina di design, soggiorno luminoso e un giardino con pergola e idromassaggio.",
    private_tag: "Solo per te", private_eyebrow: "La Suite · privata", private_title: "Camera e bagno privato",
    private_li_1: "Letto king size, biancheria premium", private_li_2: "Bagno en-suite con vasca",
    private_li_3: "Smart TV e A/C in camera", private_li_4: "Tende oscuranti, vista giardino",
    shared_tag: "Condiviso con gli host", shared_eyebrow: "Aree comuni · condivise", shared_title: "Soggiorno, cucina e giardino",
    shared_li_1: 'Soggiorno con divano e TV 65"', shared_li_2: "Cucina di design, tavolo per sei",
    shared_li_3: "Giardino, pergola, lettini, idromassaggio", shared_li_4: "Barbecue e pranzo all'aperto",
    shared_note: "Una nota sulla cucina: è disponibile per pasti leggeri — colazione, caffè, una pasta veloce. Per piatti più elaborati vi invitiamo a una delle trattorie qui vicino.",
    map_eyebrow: "Dove sarai",
    map_h2: 'Porta Romana.<br/><em>Milano vera, sulla linea M3.</em>',
    map_lede: "Cinque minuti dalla metro, quindici dal Duomo, venti dalla Centrale. Clicca qualsiasi destinazione per tracciare il percorso.",
    map_streets: "Strade",
    poi_1_meta: "Linea gialla · M3 · diretta al centro",
    poi_2_meta: "Arte contemporanea · Largo Isarco",
    poi_3_meta: "A piedi fino a Lodi + M3 diretto · 4 fermate",
    poi_4_meta: "M3 diretta · treni per Malpensa, Como, Venezia",
    unit_foot: "a piedi", unit_door: "porta a porta",
    book_eyebrow: "Prenota",
    book_h2: 'Scegli le date,<br/><em>mandaci un ciao.</em>',
    book_copy: "Rispondiamo personalmente a ogni richiesta su WhatsApp — di solito entro un'ora. Niente account, niente commissioni, niente sorprese.",
    book_li_1: "Prenotazione diretta · senza commissioni",
    book_li_2: "Self check-in · arrivo semplice e concordato",
    book_li_3: "Cancellazione gratuita fino a 7 giorni prima",
    book_li_4: "Rispondiamo in IT · EN · ES · PT su WhatsApp",
    per_night: "/ notte", price_max: "Max 2 ospiti", price_min: "Min. 2 notti · tasse incl.",
    check_in: "Check-in", check_out: "Check-out", select_date: "Seleziona una data",
    guests_label: "Ospiti", adults: "adulti",
    pick_dates: "Scegli le date", choose_co: "Scegli il check-out", request_wa: "Richiedi via WhatsApp",
    estimated_total: "Totale stimato", night_one: "notte", night_many: "notti",
    disclaimer: "Confermeremo tariffa esatta, pulizie e disponibilità su WhatsApp. Pagamento con bonifico o contanti al check-in.",
    foot_desc: "Una suite privata in una villa di design, nel cuore di Porta Romana. Gestita da una famiglia di tre. Rispondiamo in IT · EN · ES · PT.",
    foot_findus: "Vai a", foot_contact: "Contatti", foot_avail: "Disponibilità",
    foot_links: "Privacy · Termini · Regole della casa",
    sticky_from: "Da · 2 ospiti", sticky_cta: "Prenota",
    months: ["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"],
    dow: ["Lu","Ma","Me","Gi","Ve","Sa","Do"],
    wa_hi: "Ciao The Milano Suite! 👋", wa_line: "Vorrei informazioni sulla suite a Porta Romana:",
    wa_ci: "Check-in", wa_co: "Check-out", wa_n: "Notti", wa_g: "Ospiti", wa_est: "Stimato",
    wa_ask: "È disponibile? Grazie!"
  },

  pt: {
    _name: "Português",
    nav_suite: "A Suíte", nav_loc: "Localização", nav_book: "Reservar", nav_cta: "Ver disponibilidade",
    hero_pill: "Disponível nesta temporada",
    hero_h1: 'Uma suíte tranquila e luminosa,<br/><em>a passos da Fondazione Prada.</em>',
    stat_1: "Suíte privada", stat_2: "Hóspedes", stat_3: "Ao Metro M3", stat_4: "Ao Duomo",
    hero_cta: "Ver o calendário",
    intro_eyebrow: "Algumas palavras",
    intro_lede: 'Um quarto espaçoso com banheiro privativo, dentro de uma vila de design em <em>Porta Romana</em>. Brancos puros, carvalho claro, plantas &mdash; e um jardim que dá para realmente usar.',
    intro_body: "Pensamos The Milano Suite para quem quer Milão sem multidões: quem precisa de WiFi rápido às 7 da manhã e de um terraço tranquilo às 9 da noite. A Suíte é só sua; a cozinha, a sala e o jardim são compartilhados com os anfitriões — vividos como casa, não como hotel.",
    intro_sig: "— D. e família, seus anfitriões",
    amen_eyebrow: "Na sua suíte",
    amen_h2: 'Tudo para <em>uma estadia longa e tranquila.</em>',
    amen_sub: 'Fibra de alta velocidade, climatização e Smart TV 55" de série. Auto check-in com cofre — combinamos juntos o horário de chegada.',
    amen_1_name: 'WiFi<br/>alta velocidade', amen_1_sub: "Fibra · 300 Mbps",
    amen_2_name: 'Smart TV<br/>55"',         amen_2_sub: "Netflix · Prime · YouTube",
    amen_3_name: 'A/C e<br/>Aquecimento',    amen_3_sub: "Conforto o ano todo",
    amen_4_name: 'Auto<br/>check-in',        amen_4_sub: "Cofre · horário combinado",
    amen_5_name: 'Cantinho de<br/>smart working', amen_5_sub: "Mesa · cadeira · luz",
    amen_6_name: 'Garagem<br/>sob demanda',  amen_6_sub: "Sujeito a disponibilidade",
    space_eyebrow: "O espaço",
    space_h2: 'Uma suíte privativa,<br/><em>dentro de uma vila compartilhada.</em>',
    space_lede: "Dois mundos distintos. A sua suíte — quarto e banheiro, só seus. E as áreas comuns: cozinha de design, sala iluminada e um jardim com pérgula e hidromassagem.",
    private_tag: "Só para você", private_eyebrow: "A Suíte · privativa", private_title: "Quarto e banheiro privativo",
    private_li_1: "Cama king size, roupa de cama premium", private_li_2: "Banheiro en-suite com banheira",
    private_li_3: "Smart TV e A/C no quarto", private_li_4: "Persianas blackout, vista para o jardim",
    shared_tag: "Compartilhado com anfitriões", shared_eyebrow: "Áreas comuns · compartilhadas", shared_title: "Sala, cozinha e jardim",
    shared_li_1: 'Sala com sofá e TV 65"', shared_li_2: "Cozinha de design, mesa para seis",
    shared_li_3: "Jardim, pérgula, espreguiçadeiras, hidromassagem", shared_li_4: "Churrasqueira e jantar ao ar livre",
    shared_note: "Uma nota sobre a cozinha: está disponível para refeições leves — café da manhã, café, uma massa rápida. Para pratos mais elaborados, sugerimos uma das trattorias do bairro.",
    map_eyebrow: "Onde você estará",
    map_h2: 'Porta Romana.<br/><em>A Milão real, na linha M3.</em>',
    map_lede: "Cinco minutos até o metrô, quinze até o Duomo, vinte até a Centrale. Clique em qualquer destino para traçar a rota.",
    map_streets: "Ruas",
    poi_1_meta: "Linha amarela · M3 · direto ao centro",
    poi_2_meta: "Arte contemporânea · Largo Isarco",
    poi_3_meta: "A pé até Lodi + M3 direto · 4 paradas",
    poi_4_meta: "M3 direta · trens para Malpensa, Como, Veneza",
    unit_foot: "a pé", unit_door: "porta a porta",
    book_eyebrow: "Reservar",
    book_h2: 'Escolha as datas,<br/><em>nos diga olá.</em>',
    book_copy: "Respondemos pessoalmente cada pedido pelo WhatsApp — normalmente em até uma hora. Sem contas, sem taxas, sem surpresas.",
    book_li_1: "Reserva direta · sem taxas",
    book_li_2: "Auto check-in · chegada simples e combinada",
    book_li_3: "Cancelamento grátis até 7 dias antes",
    book_li_4: "Atendimento em IT · EN · ES · PT pelo WhatsApp",
    per_night: "/ noite", price_max: "Máx. 2 hóspedes", price_min: "Mín. 2 noites · taxas incl.",
    check_in: "Check-in", check_out: "Check-out", select_date: "Escolha uma data",
    guests_label: "Hóspedes", adults: "adultos",
    pick_dates: "Escolha as datas", choose_co: "Escolha o check-out", request_wa: "Solicitar por WhatsApp",
    estimated_total: "Total estimado", night_one: "noite", night_many: "noites",
    disclaimer: "Confirmaremos tarifa, limpeza e disponibilidade pelo WhatsApp. Pagamento por transferência ou em dinheiro no check-in.",
    foot_desc: "Uma suíte privativa em uma vila de design, no coração de Porta Romana. Gerida por uma família de três. Atendemos em IT · EN · ES · PT.",
    foot_findus: "Encontre-nos", foot_contact: "Contato", foot_avail: "Disponibilidade",
    foot_links: "Privacidade · Termos · Regras da casa",
    sticky_from: "A partir · 2 hóspedes", sticky_cta: "Reservar",
    months: ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"],
    dow: ["Se","Te","Qa","Qi","Sx","Sá","Do"],
    wa_hi: "Olá The Milano Suite! 👋", wa_line: "Gostaria de saber sobre a suíte em Porta Romana:",
    wa_ci: "Check-in", wa_co: "Check-out", wa_n: "Noites", wa_g: "Hóspedes", wa_est: "Estimado",
    wa_ask: "Está disponível? Obrigado!"
  },

  de: {
    _name: "Deutsch",
    nav_suite: "Die Suite", nav_loc: "Lage", nav_book: "Buchen", nav_cta: "Verfügbarkeit prüfen",
    hero_pill: "Diese Saison verfügbar",
    hero_h1: 'Eine ruhige, lichtdurchflutete Suite,<br/><em>nur Schritte von Fondazione Prada.</em>',
    stat_1: "Private Suite", stat_2: "Gäste", stat_3: "Zur M3", stat_4: "Zum Dom",
    hero_cta: "Kalender ansehen",
    intro_eyebrow: "Ein paar Worte",
    intro_lede: 'Ein geräumiges Schlafzimmer mit eigenem Bad, in einer Design-Villa in <em>Porta Romana</em>. Reines Weiß, helle Eiche, Pflanzen &mdash; und ein Garten, den man wirklich nutzen kann.',
    intro_body: "Wir haben The Milano Suite für Gäste gemacht, die Mailand ohne Trubel suchen: jemand, der morgens um 7 schnelles WLAN braucht und abends um 9 eine ruhige Terrasse. Die Suite gehört nur Ihnen; Küche, Wohnzimmer und Garten teilen Sie mit den Gastgebern — wie zu Hause, nicht wie im Hotel.",
    intro_sig: "— D. & Familie, Ihre Gastgeber",
    amen_eyebrow: "In Ihrer Suite",
    amen_h2: 'Alles für <em>einen langen, entspannten Aufenthalt.</em>',
    amen_sub: 'Glasfaser, Klimaanlage und 55"-Smart-TV serienmäßig. Self-Check-in per Schlüsselbox — wir stimmen die Ankunftszeit gemeinsam ab.',
    amen_1_name: 'High-Speed<br/>WLAN',  amen_1_sub: "Glasfaser · 300 Mbps",
    amen_2_name: 'Smart TV<br/>55"',     amen_2_sub: "Netflix · Prime · YouTube",
    amen_3_name: 'Klima &<br/>Heizung',  amen_3_sub: "Komfort ganzjährig",
    amen_4_name: 'Self<br/>Check-in',    amen_4_sub: "Schlüsselbox · Zeit vereinbart",
    amen_5_name: 'Smart-Working-<br/>Ecke', amen_5_sub: "Schreibtisch · Stuhl · Licht",
    amen_6_name: 'Garage<br/>auf Anfrage',  amen_6_sub: "Nach Verfügbarkeit",
    space_eyebrow: "Der Raum",
    space_h2: 'Eine private Suite,<br/><em>in einer geteilten Villa.</em>',
    space_lede: "Zwei getrennte Welten. Ihre Suite — Schlafzimmer und Bad, ganz für Sie. Und die Gemeinschaftsbereiche: Designerküche, sonniges Wohnzimmer und ein Garten mit Pergola und Whirlpool.",
    private_tag: "Nur für Sie", private_eyebrow: "Die Suite · privat", private_title: "Schlafzimmer & eigenes Bad",
    private_li_1: "Kingsize-Bett, Premium-Bettwäsche", private_li_2: "Eigenes Bad mit Badewanne",
    private_li_3: "Smart TV & Klima im Zimmer", private_li_4: "Verdunkelung, Gartenblick",
    shared_tag: "Mit Gastgebern geteilt", shared_eyebrow: "Gemeinschaft · geteilt", shared_title: "Wohnzimmer, Küche & Garten",
    shared_li_1: 'Wohnzimmer mit Sofa und 65"-TV', shared_li_2: "Designerküche, Esstisch für sechs",
    shared_li_3: "Garten, Pergola, Sonnenliegen, Whirlpool", shared_li_4: "Grill & Essen im Freien",
    shared_note: "Ein Hinweis zur Küche: Sie ist für leichte Mahlzeiten gedacht — Frühstück, Kaffee, eine schnelle Pasta. Für richtige Gerichte empfehlen wir eine der Trattorien um die Ecke.",
    map_eyebrow: "Wo Sie wohnen",
    map_h2: 'Porta Romana.<br/><em>Echtes Mailand, an der M3.</em>',
    map_lede: "Fünf Minuten zur Metro, fünfzehn zum Dom, zwanzig zum Hauptbahnhof. Klicken Sie auf ein Ziel, um die Route zu sehen.",
    map_streets: "Straßen",
    poi_1_meta: "Gelbe Linie · M3 · direkt ins Zentrum",
    poi_2_meta: "Zeitgenössische Kunst · Largo Isarco",
    poi_3_meta: "Zu Fuß zur Lodi + M3 direkt · 4 Stationen",
    poi_4_meta: "M3 direkt · Züge nach Malpensa, Como, Venedig",
    unit_foot: "zu Fuß", unit_door: "Tür zu Tür",
    book_eyebrow: "Buchen",
    book_h2: 'Wählen Sie Ihre Daten,<br/><em>sagen Sie uns hallo.</em>',
    book_copy: "Wir beantworten jede Anfrage persönlich auf WhatsApp — meist innerhalb einer Stunde. Keine Konten, keine Gebühren, keine Überraschungen.",
    book_li_1: "Direktbuchung · ohne Gebühren",
    book_li_2: "Self-Check-in · einfache, abgestimmte Ankunft",
    book_li_3: "Kostenlose Stornierung bis 7 Tage vorher",
    book_li_4: "Wir antworten in IT · EN · ES · PT auf WhatsApp",
    per_night: "/ Nacht", price_max: "Max. 2 Gäste", price_min: "Mind. 2 Nächte · inkl. Steuern",
    check_in: "Check-in", check_out: "Check-out", select_date: "Datum wählen",
    guests_label: "Gäste", adults: "Erwachsene",
    pick_dates: "Daten wählen", choose_co: "Check-out wählen", request_wa: "Anfrage via WhatsApp",
    estimated_total: "Geschätzte Summe", night_one: "Nacht", night_many: "Nächte",
    disclaimer: "Den genauen Preis, die Reinigungsgebühr und Verfügbarkeit bestätigen wir auf WhatsApp. Zahlung per Überweisung oder bar beim Check-in.",
    foot_desc: "Eine private Suite in einer Design-Villa, im Herzen von Porta Romana. Geführt von einer dreiköpfigen Familie. Wir antworten auf IT · EN · ES · PT.",
    foot_findus: "Finden Sie uns", foot_contact: "Kontakt", foot_avail: "Verfügbarkeit",
    foot_links: "Datenschutz · AGB · Hausordnung",
    sticky_from: "Ab · 2 Gäste", sticky_cta: "Buchen",
    months: ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"],
    dow: ["Mo","Di","Mi","Do","Fr","Sa","So"],
    wa_hi: "Hallo The Milano Suite! 👋", wa_line: "Ich interessiere mich für die Suite in Porta Romana:",
    wa_ci: "Check-in", wa_co: "Check-out", wa_n: "Nächte", wa_g: "Gäste", wa_est: "Schätzung",
    wa_ask: "Ist sie verfügbar? Danke!"
  }
};

/* ─────────── Public surface ─────────── */
window.CD_I18N = {
  dict: DICT,
  lang: 'en',
  t() { return DICT[this.lang] || DICT.en; },
  set(lang) {
    if (!DICT[lang]) return;
    this.lang = lang;
    try { localStorage.setItem('milanosuite_lang', lang); } catch (_) {}
    applyDOM();
    document.dispatchEvent(new CustomEvent('i18nchange', { detail: { lang } }));
  }
};

/* Pick initial language: storage → browser → en */
(function initLang() {
  let saved = null;
  try { saved = localStorage.getItem('milanosuite_lang'); } catch (_) {}
  if (saved && DICT[saved]) { window.CD_I18N.lang = saved; return; }
  const nv = (navigator.language || 'en').slice(0,2).toLowerCase();
  if (DICT[nv]) window.CD_I18N.lang = nv;
})();

function applyDOM() {
  const T = window.CD_I18N.t();
  document.documentElement.lang = window.CD_I18N.lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    if (T[k] != null) el.textContent = T[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const k = el.getAttribute('data-i18n-html');
    if (T[k] != null) el.innerHTML = T[k];
  });
  // Day-of-week headers
  const dow = document.getElementById('calDow');
  if (dow) dow.innerHTML = T.dow.map(d => `<div>${d}</div>`).join('');
  // Update language code label + active state in menu
  const code = document.getElementById('langCode');
  if (code) code.textContent = window.CD_I18N.lang.toUpperCase();
  document.querySelectorAll('#langMenu button').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === window.CD_I18N.lang);
  });
}

/* Picker UI wiring */
function wirePicker() {
  const wrap = document.getElementById('langPicker');
  const btn  = document.getElementById('langBtn');
  const menu = document.getElementById('langMenu');
  if (!wrap || !btn || !menu) return;

  btn.addEventListener('click', e => {
    e.stopPropagation();
    const open = wrap.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.addEventListener('click', e => {
    if (!wrap.contains(e.target)) {
      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') wrap.classList.remove('open');
  });
  menu.querySelectorAll('button').forEach(b => {
    b.addEventListener('click', () => {
      window.CD_I18N.set(b.dataset.lang);
      wrap.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  wirePicker();
  applyDOM();
  // Notify main script that initial language is set
  document.dispatchEvent(new CustomEvent('i18nchange', { detail: { lang: window.CD_I18N.lang, initial: true } }));
});
