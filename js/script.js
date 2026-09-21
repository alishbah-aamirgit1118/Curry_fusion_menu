// Current language
let currentLang = "it";

// Translation data
const translations = {
  it: {
    hero: {
      script: "Curry Fusion",
      h1: "& Grill",
      subtitle: "Ristorante Asiatico · Sapori Autentici del Pakistan",
      tag: "Un viaggio tra spezie, tandoor e tradizione. Ogni piatto racconta una storia, ogni boccone un ricordo.",
      cta: "Esplora il Menù →",
    },
    nav: {
      recentlyAdded: "Recently Added",
      specialita: "Specialità",
      antipasti: "Antipasti",
      streetfood: "Street Food",
      riso: "Riso & Biryani",
      curry: "Il Curry",
      veggies: "Veggies",
      bbq: "BBQ & Tandoor",
      accompagnamento: "Accompagnamento",
      bevande: "Bevande",
      dolci: "Dolci",
      allergeni: "Allergeni",
    },
    halal: "100% Halal",
    features: {
      1: "Ingredienti freschi",
      2: "100% Halal",
      3: "Per tutta la famiglia",
      4: "Ricette tradizionali",
    },
    sec: {
      recentlyAdded: {
        eyebrow: "Recently Added",
        title: "Le nuove aggiunte più amate",
      },
      specialita: {
        eyebrow: "Specialità",
        title: "Le dichiarazioni d'amore speziate",
      },
      antipasti: {
        eyebrow: "Antipasti",
        title: "Fritture",
        sub: "Il trailer perfetto per il film che sta per iniziare",
      },
      streetfood: {
        eyebrow: "Street Food",
        title: "Lasciatevi viziare dai sapori della strada",
      },
      riso: {
        eyebrow: "Il Riso Basmati",
        title: 'Biryani — la "regina di fragranza"',
        note: "Il Biryani è il piatto di riso più amato dell'Asia. Un capolavoro di stratificazione dove riso aromatico, carne marinata e spezie si fondono in una sinfonia di sapori.",
        variants: "Varianti Strong & Delicate",
      },
      curry: {
        eyebrow: "Il Curry",
        title: "Crea il tuo curry perfetto",
        note: "Scegli prima la salsa che preferisci, poi aggiungi la proteina che desideri. Un'esperienza personalizzata per ogni palato.",
        sauce: "Scegli la Salsa",
        kadhai: "salsa pomodoro e spezie",
        korma: "salsa pomodoro, panna e cocco",
        whiteKorma: "salsa alla panna, pepe e cocco",
        jalfarezi: "salsa pomodoro e verdure",
        protein: "Scegli la Proteina",
        pollo: "Pollo",
        polloBocconcini: "Pollo Bocconcini",
        agnello: "Agnello",
        verdure: "Verdure",
        gamberetti: "Gamberetti",
        paneer: "Paneer",
        couplet:
          "Se ogni goccia di sapore vuoi catturare, il Naan come cucchiaio d'autore devi usare!<br>Se il gusto vuoi acchiappare, il curry con il riso devi accompagnare!",
      },
      veggies: {
        eyebrow: "Veggies",
        title: "Vietato l'ingresso alla carne!",
        note: "Solo magia vegetariana. Ogni piatto è una celebrazione delle verdure, delle spezie e dei sapori autentici del Pakistan.",
        notebox: "Spoiler: finirai per fare la scarpetta con il Naan! ✨",
      },
      bbq: {
        eyebrow: "BBQ & Tandoor",
        title:
          "Così buoni che il barbecue della domenica sembra un lontano ricordo",
        note: "Il Tandoor è un forno tradizionale in argilla che dona un sapore affumicato e una consistenza inconfondibile, croccante fuori e succosa dentro.",
      },
      accompagnamento: {
        eyebrow: "Accompagnamento",
        title: '"Ogni re ha bisogno della sua corte"',
        note: "I nostri Naan sono cotti nel tandoor, soffici e profumati, perfetti per raccogliere ogni ingrediente segreto del curry.",
      },
      bevande: {
        eyebrow: "Sorseggi Freddi e Caldi",
        title: "I vigili del fuoco del tuo palato",
      },
      dolci: {
        eyebrow: "Sweet Endings",
        title: "Ogni grande storia merita un lieto fine",
        note: "Dolci delicatamente profumati con cardamomo, zafferano e acqua di rose, rappresentano la conclusione perfetta di un viaggio indimenticabile.",
      },
      allergeni: {
        eyebrow: "Allergeni",
        title: "Informazioni sugli Allergeni Alimentari",
        note: "In conformità con il Regolamento UE 1169/2011, di seguito è riportata la lista dei 14 allergeni principali che potrebbero essere presenti nei nostri piatti. Per qualsiasi dubbio o esigenza specifica, si prega di informare il nostro personale.",
        cereals: "Cereali contenenti glutine",
        cerealsList:
          "grano, segale, orzo, avena, farro, kamut o i loro ceppi ibridati",
        crustaceans: "Crostacei",
        eggs: "Uova",
        fish: "Pesce",
        peanuts: "Arachidi",
        soy: "Soia",
        milk: "Latte",
        milkInc: "incluso lattosio",
        nuts: "Frutta a guscio",
        nutsList: "mandorle, nocciole, noci, anacardi, pistacchi e altre",
        celery: "Sedano",
        mustard: "Senape",
        sesame: "Semi di sesamo",
        sulphites: "Anidride solforosa e solfiti",
        lupin: "Lupini",
        molluscs: "Molluschi",
        notebox:
          "La vostra sicurezza e soddisfazione sono la nostra priorità. Non esitate a chiedere chiarimenti!",
      },
    },
    footer: {
      title: "Grazie per aver scelto Curry Fusion & Grill",
      text: "Ci auguriamo che questo viaggio attraverso i sapori autentici del Pakistan vi abbia conquistato!",
    },
  },
  en: {
    hero: {
      script: "Curry Fusion",
      h1: "& Grill",
      subtitle: "Asian Restaurant · Authentic Pakistani Flavors",
      tag: "A journey through spices, tandoor and tradition. Every dish tells a story, every bite a memory.",
      cta: "Explore the Menu →",
    },
    nav: {
      recentlyAdded: "Recently Added",
      specialita: "Specialties",
      antipasti: "Appetizers",
      streetfood: "Street Food",
      riso: "Rice & Biryani",
      curry: "Curry",
      veggies: "Veggies",
      bbq: "BBQ & Tandoor",
      accompagnamento: "Side Dishes",
      bevande: "Drinks",
      dolci: "Desserts",
      allergeni: "Allergens",
    },
    halal: "100% Halal",
    features: {
      1: "Fresh Ingredients",
      2: "100% Halal",
      3: "For the whole family",
      4: "Traditional Recipes",
    },
    sec: {
      recentlyAdded: {
        eyebrow: "Recently Added",
        title: "The most loved new additions",
      },
      specialita: {
        eyebrow: "Specialties",
        title: "The spicy declarations of love",
      },
      antipasti: {
        eyebrow: "Appetizers",
        title: "Fritters",
        sub: "The perfect trailer for the movie that's about to start",
      },
      streetfood: {
        eyebrow: "Street Food",
        title: "Let yourself be spoiled by street flavors",
      },
      riso: {
        eyebrow: "Basmati Rice",
        title: 'Biryani — the "queen of fragrance"',
        note: "Biryani is the most loved rice dish in Asia. A masterpiece of layering where aromatic rice, marinated meat and spices blend into a symphony of flavors.",
        variants: "Strong & Delicate Variants",
      },
      curry: {
        eyebrow: "Curry",
        title: "Create your perfect curry",
        note: "Choose your favorite sauce first, then add the protein you want. A personalized experience for every palate.",
        sauce: "Choose the Sauce",
        kadhai: "tomato and spice sauce",
        korma: "tomato, cream and coconut sauce",
        whiteKorma: "cream, pepper and coconut sauce",
        jalfarezi: "tomato and vegetable sauce",
        protein: "Choose the Protein",
        pollo: "Chicken",
        polloBocconcini: "Chicken Bites",
        agnello: "Lamb",
        verdure: "Vegetables",
        gamberetti: "Shrimp",
        paneer: "Paneer",
        couplet:
          "If you want to capture every drop of flavor, you must use Naan as your author's spoon!<br>If you want to catch the taste, you must pair the curry with rice!",
      },
      veggies: {
        eyebrow: "Veggies",
        title: "No meat allowed!",
        note: "Only vegetarian magic. Every dish is a celebration of vegetables, spices and authentic Pakistani flavors.",
        notebox: "Spoiler: you'll end up doing the scarpetta with Naan! ✨",
      },
      bbq: {
        eyebrow: "BBQ & Tandoor",
        title: "So good that Sunday barbecue feels like a distant memory",
        note: "The Tandoor is a traditional clay oven that gives a smoky flavor and an unmistakable texture, crispy on the outside and juicy on the inside.",
      },
      accompagnamento: {
        eyebrow: "Side Dishes",
        title: '"Every king needs his court"',
        note: "Our Naan are cooked in the tandoor, soft and fragrant, perfect for picking up every secret ingredient of the curry.",
      },
      bevande: {
        eyebrow: "Cold and Hot Sips",
        title: "The firefighters of your palate",
      },
      dolci: {
        eyebrow: "Sweet Endings",
        title: "Every great story deserves a happy ending",
        note: "Delicately scented desserts with cardamom, saffron and rose water, represent the perfect conclusion to an unforgettable journey.",
      },
      allergeni: {
        eyebrow: "Allergens",
        title: "Food Allergen Information",
        note: "In accordance with EU Regulation 1169/2011, below is the list of the 14 main allergens that may be present in our dishes. For any doubts or specific needs, please inform our staff.",
        cereals: "Cereals containing gluten",
        cerealsList:
          "wheat, rye, barley, oats, spelt, kamut or their hybrid strains",
        crustaceans: "Crustaceans",
        eggs: "Eggs",
        fish: "Fish",
        peanuts: "Peanuts",
        soy: "Soy",
        milk: "Milk",
        milkInc: "including lactose",
        nuts: "Nuts",
        nutsList: "almonds, hazelnuts, walnuts, cashews, pistachios and others",
        celery: "Celery",
        mustard: "Mustard",
        sesame: "Sesame seeds",
        sulphites: "Sulphur dioxide and sulphites",
        lupin: "Lupin",
        molluscs: "Molluscs",
        notebox:
          "Your safety and satisfaction are our priority. Don't hesitate to ask for clarifications!",
      },
    },
    footer: {
      title: "Thank you for choosing Curry Fusion & Grill",
      text: "We hope this journey through authentic Pakistani flavors has won you over!",
    },
  },
};

// Menu data with both languages
const menuData = {
  it: {
    recentlyAdded: [
      {
        n: "Keema Aalo",
        d: "Agnello macinato con patate e spezie.",
        p: "12,90",
      },
      {
        n: "Matar Qeema",
        d: "Agnello macinato con piselli e spezie.",
        p: "12,90",
      },
      {
        n: "Palak Kofty",
        d: "Polpette di agnello con spinaci freschi.",
        p: "12,90",
      },
      {
        n: "Kofta Curry",
        d: "Polpette di agnello in curry aromatico.",
        p: "11,90",
      },
      {
        n: "Beef Haleem",
        d: "Miscela di carne, lenticchie e grano, cotta lentamente e completata con spezie aromatiche.",
        p: "9,90",
      },
    ],
    specialita: [
      {
        n: "Palak Gosht",
        d: "Carne tenera e spinaci cremosi",
        p: "12,90",
        i: "leaf",
        img: "papa.png",
      },
      {
        n: "Sajji Chicken",
        d: "Riso con verdure e pollo intero",
        p: "14,90",
        i: "drumstick",
        img: "ChatGPT Image Jul 21, 2026, 08_07_41 PM.png",
      },
      {
        n: "Daal Gosht",
        d: "Carne con lenticchie cremosi",
        p: "12,90",
        i: "nomeat",
        img: "ChatGPT Image Jul 21, 2026, 08_07_49 PM.png",
      },
      {
        n: "Butter Chicken",
        d: "Bocconcini grigliati con crema di pomodoro e panna",
        p: "12,90",
        i: "cube",
        img: "b33.png",
      },
      {
        n: "Tikka Masala",
        d: "Bocconcini pollo in salsa di pomodoro speziata",
        p: "13,90",
        i: "muscle",
        img: "tikka.png",
      },
      {
        n: "Kabuli Pulao",
        d: "Riso speziato e agnello con carote caramellate e uvetta",
        p: "14,90",
        i: "ricebowl",
        img: "Gemini_Generated_Image_672ljy672ljy672l.png",
      },
      {
        n: "Chicken Chili",
        d: "Bocconcini saltati nel wok con peperoni e cipolle",
        p: "12,90",
        i: "flame",
        img: "ch.png",
      },
      {
        n: "Grill Platter",
        d: "Carne alla griglia con riso (x2)",
        p: "24,90",
        i: "skewer",
        img: "grilll.jpg",
      },
    ],
    antipasti: [
      {
        n: "Mix Veg Pakora",
        d: "Frittelle di verdure miste in farina di ceci",
        p: "5,90",
        i: "fritter",
        img: "mix.png",
      },
      {
        n: "Bhaji Cipolla",
        d: "Frittelle croccanti di cipolle",
        p: "5,90",
        i: "fritter",
        img: "baji.png",
      },
      {
        n: "Chicken Pakora",
        d: "Bocconcini di pollo marinati",
        p: "6,90",
        i: "drumstick",
        img: "chicken pak.png",
      },
      {
        n: "Gamberi Pakora",
        d: "Gamberi in pastella speziata",
        p: "6,90",
        i: "shrimp",
        spice: "🌶",
        img: "gam.png",
      },
      {
        n: "Paneer Pakora",
        d: "Formaggio paneer non fondente",
        p: "6,90",
        i: "cube",
        img: "paneer.png",
      },
      {
        n: "Samosa Veg",
        d: "Triangolo ripieno di patate e spezie",
        p: "5,00",
        i: "samosa",
        img: "veg.png",
      },
      {
        n: "Samosa Carne",
        d: "Triangolo ripieno di carne e spezie",
        p: "6,00",
        i: "samosa",
        img: "crane.png",
      },
      {
        n: "Mix Antipasto",
        d: "Selezione mista delle nostre fritture",
        p: "10,90",
        i: "fritter",
        img: "mixxx.png",
      },
      {
        n: "Aloo Pakora",
        d: "Frittelle di patate speziate",
        p: "5,90",
        i: "potato",
        img: "alopakora.png",
      },
      {
        n: "Baingan Pakora",
        d: "Frittelle di melanzane speziate",
        p: "5,90",
        i: "leaf",
        img: "bann.png",
      },
      {
        n: "Fish Pakora",
        d: "Bocconcini di pesce fritti in pastella speziata",
        p: "7,90",
        i: "fish",
        img: "fiish.png",
      },
    ],
    streetfood: [
      {
        n: "Dahi Bhalle",
        d: "Soffici frittelle di lenticchie immerse in yogurt e salse",
        p: "6,50",
        i: "yogurt",
        img: "dahi.png",
      },
      {
        n: "Chana Chat",
        d: "Ceci con diversi sapori contrastanti",
        p: "6,50",
        i: "chickpea",
        img: "chana.png",
      },
      {
        n: "Samosa Chat",
        d: "Samosa di patate con curry di ceci, yogurt e chutney",
        p: "6,50",
        i: "samosa",
        img: "chat .png",
      },
      {
        n: "Pani Puri",
        d: "Sfere croccanti con patate, ceci e salse",
        p: "5,50",
        i: "chickpea",
        img: "pani.jpg",
      },
    ],
    biryani: [
      {
        n: "Biryani Pollo",
        d: "Riso basmati stratificato con pollo marinato",
        p: "9,90",
        i: "ricebowl",
        img: "chicken.png",
      },
      {
        n: "Biryani Agnello",
        d: "Riso basmati stratificato con agnello marinato",
        p: "12,90",
        i: "ricebowl",
        img: "lamb.png",
      },
      {
        n: "Biryani Gamberetti",
        d: "Riso basmati stratificato con gamberetti",
        p: "11,90",
        i: "shrimp",
        spice: "🌶",
        img: "gamm.png",
      },
      {
        n: "Biryani Verdure",
        d: "Riso basmati stratificato con verdure di stagione",
        p: "8,90",
        i: "leaf",
        img: "veggb.png",
      },
    ],
    "riso-varianti": [
      {
        n: "Biryani Fish",
        d: "Con pesce",
        p: "12,90",
        i: "fish",
        img: "fishh.png",
      },
      {
        n: "Biryani Manzo",
        d: "Con patate",
        p: "12,90",
        i: "ricebowl",
        img: "man.png",
      },
      {
        n: "Biryani Tikka",
        d: "Bocconcini di petto di pollo",
        p: "12,90",
        i: "muscle",
        img: "birr.png",
      },
      {
        n: "Biryani Tandoori",
        d: "Coscia di pollo",
        p: "11,90",
        i: "drumstick",
        img: "tandori.png",
      },
      {
        n: "Chana Pulao",
        d: "Riso su base ceci",
        p: "6,90",
        i: "chickpea",
        img: "chaana.png",
      },
      {
        n: "Chinese Rice",
        d: "Riso saltato in stile cinese",
        p: "8,90",
        i: "ricebowl",
        img: "chi.png",
      },
      {
        n: "Zeera Rice",
        d: "Riso al cumino",
        p: "5,90",
        i: "ricebowl",
        img: "jee.png",
      },
      {
        n: "Pilaf Rice",
        d: "Riso pilaf speziato",
        p: "5,90",
        i: "ricebowl",
        img: "pl.png",
      },
      {
        n: "Riso Bianco",
        d: "Riso basmati al naturale",
        p: "3,90",
        i: "ricebowl",
        img: "white.png",
      },
    ],
    veggies: [
      {
        n: "Palak Paneer",
        d: "Spinaci cremosi con cubetti di paneer",
        p: "8,50",
        i: "leaf",
        img: "palak.png",
      },
      {
        n: "Palak Aloo",
        d: "Spinaci cremosi con cubetti di patate",
        p: "8,90",
        i: "leaf",
        img: "alopalak.png",
      },
      {
        n: "Baingan Bharta",
        d: "Saporita purea di melanzane affumicate e burro",
        p: "8,90",
        i: "eggplant",
        img: "bharta.png",
      },
      {
        n: "Chana",
        d: "Ceci in sugo speziato",
        p: "8,00",
        i: "chickpea",
        img: "chana.png",
      },
      {
        n: "Chana Dhal",
        d: "Lenticchie con soffritto di spezie e tadka croccante all'aglio",
        p: "8,00",
        i: "lentil",
        img: "chanadaal.png",
      },
      {
        n: "Maash Daal",
        d: "Vellutata di lenticchie",
        p: "8,00",
        i: "lentil",
        img: "mash.png",
      },
      {
        n: "Chili Paneer",
        d: "Cubetti di paneer fritto con salsa speziata",
        p: "8,50",
        i: "cube",
        img: "paaa.png",
      },
      {
        n: "Shahi Paneer",
        d: "Cubetti di paneer cotto con salsa alla panna",
        p: "8,50",
        i: "cube",
        img: "shahi.png",
      },
    ],
    veggiesText: [
      {
        n: "Gobi Aalo",
        d: "Cavolfiore e patate con spezie aromatiche.",
        p: "8,90",
      },
      {
        n: "Laal Lobiya",
        d: "Fagioli neri in sugo speziato con cipolle e pomodori.",
        p: "8,90",
      },
    ],
    bbq: [
      {
        n: "Paneer Tikka",
        d: "Cubetti di paneer marinati",
        p: "9,90",
        i: "cube",
        img: "paneertikka.png",
      },
      {
        n: "Tikka",
        d: "Bocconcini di carne marinati",
        p: "10,90",
        i: "muscle",
        img: "tikkka.png",
      },
      {
        n: "Tandoori",
        d: "Coscia di pollo marinato",
        p: "8,90",
        i: "drumstick",
        img: "tandoori.png",
      },
      {
        n: "Achari Boti",
        d: "Bocconcini pollo marinati con achar",
        p: "10,90",
        i: "flame",
        img: "aachari.png",
      },
      {
        n: "Malai Boti",
        d: "Bocconcini pollo con crema di panna e anacardi",
        p: "10,90",
        i: "flame",
        img: "malai.png",
      },
      {
        n: "Lamb Chopstick",
        d: "Costolette di agnello marinate",
        p: "13,90",
        i: "skewer",
        img: "lambb.png",
      },
      {
        n: "Haryali Boti",
        d: "Bocconcini di pollo conditi con una salsa di erbe",
        p: "10,90",
        i: "leaf",
        img: "Haryali.png",
      },
      {
        n: "Seekh Kebab",
        d: "Spiedini di pollo",
        p: "9,90",
        i: "skewer",
        img: "sheekhkabab.png",
      },
      {
        n: "Cheese Kebab",
        d: "Spiedini di pollo con formaggio",
        p: "10,90",
        i: "skewer",
        img: "cheeze.png",
      },
      {
        n: "Chicken Wings",
        d: "Ali di pollo marinate e grigliate",
        p: "6,90",
        i: "drumstick",
        img: "wi.png",
      },
      {
        n: "Nuggets",
        d: "Croccanti nuggets dorati",
        p: "5,90",
        i: "cube",
        img: "nug.png",
      },
    ],
    bbqText: [
      {
        n: "Fries",
        d: "Patatine fritte croccanti.",
        p: "5,90",
      },
    ],
    pane: [
      {
        n: "Naan Liscio",
        d: "Pane tandoor classico",
        p: "2,00",
        i: "naan",
        img: "naaaaan.png",
      },
      {
        n: "Naan Burro",
        d: "Pane tandoor spennellato al burro",
        p: "2,50",
        i: "naan",
        img: "butter.png",
      },
      {
        n: "Naan Afghano",
        d: "Pane tandoor farcito, ricetta afgana",
        p: "4,00",
        i: "naan",
        img: "afg.png",
      },
      {
        n: "Naan Aglio",
        d: "Pane tandoor profumato all'aglio",
        p: "2,50",
        i: "naan",
        img: "garlic.png",
      },
      {
        n: "Naan Formaggio",
        d: "Ripieno di formaggio filante",
        p: "3,50",
        i: "naan",
        img: "cheese.png",
      },
      {
        n: "Roti",
        d: "Pane non lievitato",
        p: "1,50",
        i: "roti",
        img: "roti.png",
      },
    ],
    contorni: [
      {
        n: "Russian Salad",
        d: "Insalata mista in stile russo",
        p: "7,90",
        i: "salad",
        img: "russian.png",
      },
      {
        n: "Mexican Salad",
        d: "Insalata mista in stile messicano",
        p: "7,90",
        i: "salad",
        img: "Gemini_Generated_Image_7tdpvj7tdpvj7tdp.png",
      },
      {
        n: "Salad",
        d: "Insalata verde di stagione",
        p: "5,90",
        i: "salad",
        img: "salad.png",
      },
      {
        n: "Raita",
        d: "Yogurt fresco con cetrioli e spezie, perfetto per bilanciare i piatti piccanti",
        p: "5,50",
        i: "yogurt",
        img: "rai.png",
      },
    ],
    accompagnamento: [],
    bevande: [
      {
        n: "Bottiglie in Vetro",
        d: "Bibite classiche",
        p: "3,00",
        i: "bottle",
        img: "drinks.png",
      },
      {
        n: "Acqua",
        d: "Naturale o frizzante",
        p: "2,50",
        i: "bottle",
        img: "water.png",
      },
      {
        n: "Caffè",
        d: "Espresso italiano",
        p: "2,00",
        i: "coffee",
        img: "coffee.png",
      },
      {
        n: "Lassi",
        d: "Dolce o salato — bevanda a base di latte e yogurt",
        p: "3,50",
        i: "lassi",
        img: "lasi.png",
      },
      {
        n: "Mango Lassi",
        d: "Yogurt, latte e polpa di mango",
        p: "4,90",
        i: "mango",
        img: "dr.png",
      },
      {
        n: "Mango Shake",
        d: "Latte e polpa di mango",
        p: "3,90",
        i: "mango",
        img: "mangosh.png",
      },
      {
        n: "Mint Lassi",
        d: "Yogurt, latte e menta",
        p: "3,90",
        i: "lassi",
        img: "mint.png",
      },
      {
        n: "Rooh Afza",
        d: "Bevanda dolce all'acqua di rose",
        p: "3,90",
        i: "rosewater",
        img: "rooh.png",
      },
      {
        n: "Kehwa",
        d: "Infuso di erbe aromatiche del Kashmir",
        p: "2,50",
        i: "tea",
        img: "kahwaa.png",
      },
      {
        n: "Kashmiri Chai",
        d: "Tè rosa con frutta secca",
        p: "3,90",
        i: "tea",
        img: "kashi.png",
      },
      {
        n: "Chai",
        d: "Tè nero e latte",
        p: "2,00",
        i: "tea",
        img: "chaip.png",
      },
    ],
    dolci: [
      {
        n: "Gajar Halwa",
        d: "Carote con burro ghee, latte e frutta secca",
        p: "5,50",
        i: "halwa",
        img: "gaa.png",
      },
      {
        n: "Kheer",
        d: "Budino di riso e latte con frutta secca",
        p: "5,50",
        i: "kheer",
        img: "kheeer.png",
      },
      {
        n: "Gulab Jamun",
        d: "Soffici frittelle immerse in sciroppo all'acqua di rose",
        p: "5,50",
        i: "gulab",
        img: "ghhh.png",
      },
    ],
  },
  en: {
    recentlyAdded: [
      {
        n: "Keema Aalo",
        d: "Ground lamb with potatoes and spices.",
        p: "12.90",
      },
      {
        n: "Matar Qeema",
        d: "Ground lamb with peas and spices.",
        p: "12.90",
      },
      {
        n: "Palak Kofty",
        d: "Lamb meatballs with fresh spinach.",
        p: "12.90",
      },
      {
        n: "Kofta Curry",
        d: "Lamb meatballs in aromatic curry.",
        p: "11.90",
      },
      {
        n: "Beef Haleem",
        d: "Mixture of meat, lentils and wheat, slow-cooked and finished with aromatic spices.",
        p: "9.90",
      },
    ],
    specialita: [
      {
        n: "Palak Gosht",
        d: "Tender meat and creamy spinach",
        p: "12.90",
        i: "leaf",
        img: "papa.png",
      },
      {
        n: "Sajji Chicken",
        d: "Rice with vegetables and whole chicken",
        p: "14.90",
        i: "drumstick",
        img: "ChatGPT Image Jul 21, 2026, 08_07_41 PM.png",
      },
      {
        n: "Daal Gosht",
        d: "Meat with creamy lentils",
        p: "12.90",
        i: "nomeat",
        img: "ChatGPT Image Jul 21, 2026, 08_07_49 PM.png",
      },
      {
        n: "Butter Chicken",
        d: "Grilled bites with tomato cream sauce",
        p: "12.90",
        i: "cube",
        img: "b33.png",
      },
      {
        n: "Tikka Masala",
        d: "Chicken bites in spiced tomato sauce",
        p: "13.90",
        i: "muscle",
        img: "tikka.png",
      },
      {
        n: "Kabuli Pulao",
        d: "Spiced rice and lamb with caramelized carrots and raisins",
        p: "14.90",
        i: "ricebowl",
        img: "Gemini_Generated_Image_672ljy672ljy672l.png",
      },
      {
        n: "Chicken Chili",
        d: "Wok-fried bites with peppers and onions",
        p: "12.90",
        i: "flame",
        img: "ch.png",
      },
      {
        n: "Grill Platter",
        d: "Grilled meat with rice (x2)",
        p: "24.90",
        i: "skewer",
        img: "grilll.jpg",
      },
    ],
    antipasti: [
      {
        n: "Mix Veg Pakora",
        d: "Mixed vegetable fritters in chickpea flour",
        p: "5.90",
        i: "fritter",
        img: "mix.png",
      },
      {
        n: "Onion Bhaji",
        d: "Crispy onion fritters",
        p: "5.90",
        i: "fritter",
        img: "baji.png",
      },
      {
        n: "Chicken Pakora",
        d: "Marinated chicken bites",
        p: "6.90",
        i: "drumstick",
        img: "chicken pak.png",
      },
      {
        n: "Shrimp Pakora",
        d: "Shrimp in spiced batter",
        p: "6.90",
        i: "shrimp",
        spice: "🌶",
        img: "gam.png",
      },
      {
        n: "Paneer Pakora",
        d: "Non-melting paneer cheese",
        p: "6.90",
        i: "cube",
        img: "paneer.png",
      },
      {
        n: "Veg Samosa",
        d: "Triangle filled with potatoes and spices",
        p: "5.00",
        i: "samosa",
        img: "veg.png",
      },
      {
        n: "Meat Samosa",
        d: "Triangle filled with meat and spices",
        p: "6.00",
        i: "samosa",
        img: "crane.png",
      },
      {
        n: "Mixed Appetizer",
        d: "Mixed selection of our fritters",
        p: "10.90",
        i: "fritter",
        img: "mixxx.png",
      },
      {
        n: "Aloo Pakora",
        d: "Spiced potato fritters",
        p: "5.90",
        i: "potato",
        img: "alopakora.png",
      },
      {
        n: "Baingan Pakora",
        d: "Spiced eggplant fritters",
        p: "5.90",
        i: "leaf",
        img: "bann.png",
      },
      {
        n: "Fish Pakora",
        d: "Fish bites fried in spiced batter",
        p: "7.90",
        i: "fish",
        img: "fiish.png",
      },
    ],
    streetfood: [
      {
        n: "Dahi Bhalle",
        d: "Soft lentil fritters dipped in yogurt and sauces",
        p: "6.50",
        i: "yogurt",
        img: "dahi.png",
      },
      {
        n: "Chana Chat",
        d: "Chickpeas with various contrasting flavors",
        p: "6.50",
        i: "chickpea",
        img: "chana.png",
      },
      {
        n: "Samosa Chat",
        d: "Potato samosa with chickpea curry, yogurt and chutney",
        p: "6.50",
        i: "samosa",
        img: "chat .png",
      },
      {
        n: "Pani Puri",
        d: "Crispy spheres with potatoes, chickpeas and sauces",
        p: "5.50",
        i: "chickpea",
        img: "pani.jpg",
      },
    ],
    biryani: [
      {
        n: "Chicken Biryani",
        d: "Layered basmati rice with marinated chicken",
        p: "9.90",
        i: "ricebowl",
        img: "chicken.png",
      },
      {
        n: "Lamb Biryani",
        d: "Layered basmati rice with marinated lamb",
        p: "12.90",
        i: "ricebowl",
        img: "lamb.png",
      },
      {
        n: "Shrimp Biryani",
        d: "Layered basmati rice with shrimp",
        p: "11.90",
        i: "shrimp",
        img: "gamm.png",
      },
      {
        n: "Vegetable Biryani",
        d: "Layered basmati rice with seasonal vegetables",
        p: "8.90",
        i: "leaf",
        img: "veggb.png",
      },
    ],
    "riso-varianti": [
      {
        n: "Fish Biryani",
        d: "With fish",
        p: "12.90",
        i: "fish",
        img: "fishh.png",
      },
      {
        n: "Beef Biryani",
        d: "With potatoes",
        p: "12.90",
        i: "ricebowl",
        img: "man.png",
      },
      {
        n: "Tikka Biryani",
        d: "Chicken breast bites",
        p: "12.90",
        i: "muscle",
        img: "birr.png",
      },
      {
        n: "Tandoori Biryani",
        d: "Chicken thigh",
        p: "11.90",
        i: "drumstick",
        img: "tandori.png",
      },
      {
        n: "Chana Pulao",
        d: "Chickpea-based rice",
        p: "6.90",
        i: "chickpea",
        img: "chaana.png",
      },
      {
        n: "Chinese Rice",
        d: "Chinese-style fried rice",
        p: "8.90",
        i: "ricebowl",
        img: "chi.png",
      },
      {
        n: "Zeera Rice",
        d: "Cumin rice",
        p: "5.90",
        i: "ricebowl",
        img: "jee.png",
      },
      {
        n: "Pilaf Rice",
        d: "Spiced pilaf rice",
        p: "5.90",
        i: "ricebowl",
        img: "pl.png",
      },
      {
        n: "White Rice",
        d: "Plain basmati rice",
        p: "3.90",
        i: "ricebowl",
        img: "white.png",
      },
    ],
    veggies: [
      {
        n: "Palak Paneer",
        d: "Creamy spinach with paneer cubes",
        p: "8.50",
        i: "leaf",
        img: "palak.png",
      },
      {
        n: "Palak Aloo",
        d: "Creamy spinach with potato cubes",
        p: "8.90",
        i: "leaf",
        img: "alopalak.png",
      },
      {
        n: "Baingan Bharta",
        d: "Flavorful smoked eggplant and butter puree",
        p: "8.90",
        i: "eggplant",
        img: "bharta.png",
      },
      {
        n: "Chana",
        d: "Chickpeas in spiced sauce",
        p: "8.00",
        i: "chickpea",
        img: "chana.png",
      },
      {
        n: "Chana Dal",
        d: "Lentils with spiced sofrito and crispy garlic tadka",
        p: "8.00",
        i: "lentil",
        img: "chanadaal.png",
      },
      {
        n: "Maash Dal",
        d: "Velvety lentil puree",
        p: "8.00",
        i: "lentil",
        img: "mash.png",
      },
      {
        n: "Chili Paneer",
        d: "Fried paneer cubes with spiced sauce",
        p: "8.50",
        i: "cube",
        img: "paaa.png",
      },
      {
        n: "Shahi Paneer",
        d: "Paneer cubes cooked in cream sauce",
        p: "8.50",
        i: "cube",
        img: "shahi.png",
      },
    ],
    veggiesText: [
      {
        n: "Gobi Aalo",
        d: "Cauliflower and potatoes with aromatic spices.",
        p: "8.90",
      },
      {
        n: "Laal Lobiya",
        d: "Black-eyed peas in spiced gravy with onions and tomatoes.",
        p: "8.90",
      },
    ],
    bbq: [
      {
        n: "Paneer Tikka",
        d: "Marinated paneer cubes",
        p: "9.90",
        i: "cube",
        img: "paneertikka.png",
      },
      {
        n: "Tikka",
        d: "Marinated meat bites",
        p: "10.90",
        i: "muscle",
        img: "tikkka.png",
      },
      {
        n: "Tandoori",
        d: "Marinated chicken thigh",
        p: "8.90",
        i: "drumstick",
        img: "tandoori.png",
      },
      {
        n: "Achari Boti",
        d: "Chicken bites marinated in achar",
        p: "10.90",
        i: "flame",
        img: "aachari.png",
      },
      {
        n: "Malai Boti",
        d: "Chicken bites with cream sauce and cashews",
        p: "10.90",
        i: "flame",
        img: "malai.png",
      },
      {
        n: "Lamb Chopstick",
        d: "Marinated lamb chops",
        p: "13.90",
        i: "skewer",
        img: "lambb.png",
      },
      {
        n: "Haryali Boti",
        d: "Chicken bites seasoned with a herb sauce",
        p: "12.00",
        i: "leaf",
        img: "Haryali.png",
      },
      {
        n: "Seekh Kebab",
        d: "Chicken skewers",
        p: "9.90",
        i: "skewer",
        img: "sheekhkabab.png",
      },
      {
        n: "Cheese Kebab",
        d: "Chicken skewers with cheese",
        p: "10.90",
        i: "skewer",
        img: "cheeze.png",
      },
      {
        n: "Chicken Wings",
        d: "Marinated grilled chicken wings",
        p: "7.90",
        i: "drumstick",
        img: "wi.png",
      },
      {
        n: "Nuggets",
        d: "Crispy golden nuggets",
        p: "6.90",
        i: "cube",
        img: "nug.png",
      },
    ],
    bbqText: [
      {
        n: "Fries",
        d: "Crispy fried potatoes.",
        p: "5.90",
      },
    ],
    pane: [
      {
        n: "Plain Naan",
        d: "Classic tandoor bread",
        p: "2.00",
        i: "naan",
        img: "naaaaan.png",
      },
      {
        n: "Butter Naan",
        d: "Tandoor bread brushed with butter",
        p: "2.50",
        i: "naan",
        img: "butter.png",
      },
      {
        n: "Afghan Naan",
        d: "Stuffed tandoor bread, Afghan recipe",
        p: "4.00",
        i: "naan",
        img: "afg.png",
      },
      {
        n: "Garlic Naan",
        d: "Garlic-scented tandoor bread",
        p: "2.50",
        i: "naan",
        img: "garlic.png",
      },
      {
        n: "Cheese Naan",
        d: "Stuffed with stringy cheese",
        p: "3.50",
        i: "naan",
        img: "cheese.png",
      },
      {
        n: "Roti",
        d: "Unleavened bread",
        p: "1.50",
        i: "roti",
        img: "roti.png",
      },
    ],
    contorni: [
      {
        n: "Russian Salad",
        d: "Russian-style mixed salad",
        p: "7.90",
        i: "salad",
        img: "russian.png",
      },
      {
        n: "Mexican Salad",
        d: "Mexican-style mixed salad",
        p: "7.90",
        i: "salad",
        img: "Gemini_Generated_Image_7tdpvj7tdpvj7tdp.png",
      },
      {
        n: "Salad",
        d: "Seasonal green salad",
        p: "5.50",
        i: "salad",
        img: "salad.png",
      },
      {
        n: "Raita",
        d: "Fresh yogurt with cucumbers and spices, perfect for balancing spicy dishes",
        p: "5.50",
        i: "yogurt",
        img: "rai.png",
      },
    ],
    accompagnamento: [],
    bevande: [
      {
        n: "Glass Bottles",
        d: "Classic drinks",
        p: "3.00",
        i: "bottle",
        img: "drinks.png",
      },
      {
        n: "Water",
        d: "Still or sparkling",
        p: "2.50",
        i: "bottle",
        img: "water.png",
      },
      {
        n: "Coffee",
        d: "Italian espresso",
        p: "2.00",
        i: "coffee",
        img: "coffee.png",
      },
      {
        n: "Lassi",
        d: "Sweet or salty — milk and yogurt drink",
        p: "3.50",
        i: "lassi",
        img: "lasi.png",
      },
      {
        n: "Mango Lassi",
        d: "Yogurt, milk and mango pulp",
        p: "4.90",
        i: "mango",
        img: "dr.png",
      },
      {
        n: "Mango Shake",
        d: "Milk and mango pulp",
        p: "3.90",
        i: "mango",
        img: "mangosh.png",
      },
      {
        n: "Mint Lassi",
        d: "Yogurt, milk and mint",
        p: "3.90",
        i: "lassi",
        img: "mint.png",
      },
      {
        n: "Rooh Afza",
        d: "Sweet rose water drink",
        p: "3.90",
        i: "rosewater",
        img: "rooh.png",
      },
      {
        n: "Kehwa",
        d: "Kashmiri aromatic herbal infusion",
        p: "2.50",
        i: "tea",
        img: "kahwaa.png",
      },
      {
        n: "Kashmiri Chai",
        d: "Pink tea with dried fruit",
        p: "3.90",
        i: "tea",
        img: "kashi.png",
      },
      {
        n: "Chai",
        d: "Black tea and milk",
        p: "2.00",
        i: "tea",
        img: "chaip.png",
      },
    ],
    dolci: [
      {
        n: "Gajar Halwa",
        d: "Carrots with ghee butter, milk and dried fruit",
        p: "5.50",
        i: "halwa",
        img: "gaa.png",
      },
      {
        n: "Kheer",
        d: "Rice and milk pudding with dried fruit",
        p: "5.50",
        i: "kheer",
        img: "kheeer.png",
      },
      {
        n: "Gulab Jamun",
        d: "Soft fritters dipped in rose water syrup",
        p: "5.50",
        i: "gulab",
        img: "ghhh.png",
      },
    ],
  },
};

// Function to render menu
function renderMenu() {
  const data = menuData[currentLang];
  data.accompagnamento = data.pane.concat(data.contorni);
  document.querySelectorAll("[data-section]").forEach((el) => {
    const key = el.getAttribute("data-section");
    el.innerHTML = data[key].map(card).join("");
  });

  // ---------- Text-menu sections (reference-style text rows) ----------
  // 1) RECENTLY ADDED — 4 items in 2-column grid, 5th (Beef Haleem) full-width below
  const recentlyAddedEl = document.querySelector(
    ".text-menu-recently-added"
  );
  if (recentlyAddedEl && data.recentlyAdded) {
    const firstFour = data.recentlyAdded.slice(0, 4).map(textRow).join("");
    const fifth = data.recentlyAdded[4]
      ? textRowFull(data.recentlyAdded[4])
      : "";
    recentlyAddedEl.innerHTML =
      `<div class="text-row-grid">${firstFour}</div>` + fifth;
  }

  // 2) VEGGIES — simple text rows (Gobi Aalo + Laal Lobiya)
  const veggiesTextEl = document.querySelector(".text-menu-veggies");
  if (veggiesTextEl && data.veggiesText) {
    const rows = data.veggiesText.map(textRow).join("");
    veggiesTextEl.innerHTML = `<div class="text-row-grid">${rows}</div>`;
  }

  // 3) BBQ — simple text rows (Fries)
  const bbqTextEl = document.querySelector(".text-menu-bbq");
  if (bbqTextEl && data.bbqText) {
    const rows = data.bbqText.map(textRow).join("");
    bbqTextEl.innerHTML = `<div class="text-row-grid">${rows}</div>`;
  }
}

// Reference-style text-only menu row — two sides:
//   LEFT  : dish name (bold large) + short description below
//   RIGHT : price aligned right
function textRow(item) {
  return `
<div class="text-row">
    <div class="text-row-left">
        <h3 class="text-row-name">${item.n}</h3>
        <div class="text-row-desc">${item.d}</div>
    </div>
    <div class="text-row-price">€${item.p}</div>
</div>
`;
}

// Full-width variant used for the single Beef Haleem row under the 2×2 grid
function textRowFull(item) {
  return `
<div class="text-row text-row-full">
    <div class="text-row-left">
        <h3 class="text-row-name">${item.n}</h3>
        <div class="text-row-desc">${item.d}</div>
    </div>
    <div class="text-row-price">€${item.p}</div>
</div>
`;
}

// Function to update all translatable text
function updateLanguage() {
  const t = translations[currentLang];

  // Update hero content
  document.querySelector(".hero-copy .script").textContent = t.hero.script;
  document.querySelector(".hero-copy h1").textContent = t.hero.h1;
  document.querySelector(".hero-copy .subtitle").textContent = t.hero.subtitle;
  document.querySelector(".hero-copy .tag").textContent = t.hero.tag;
  document.querySelector(".hero-copy .cta-btn").textContent = t.hero.cta;

  // Update navbar links
  document.querySelectorAll(".navbar-links a").forEach((link, index) => {
    const keys = Object.keys(t.nav);
    link.textContent = t.nav[keys[index]];
  });

  // Update hero features
  const features = document.querySelectorAll(".hero-features span b");
  const featureKeys = Object.keys(t.features);
  features.forEach((feature, index) => {
    feature.textContent = t.features[featureKeys[index]];
  });

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const keys = key.split(".");
    let value = t;
    for (const k of keys) {
      value = value[k];
      if (!value) break;
    }
    if (value) {
      el.innerHTML = value;
    }
  });

  // Re-render menu
  renderMenu();
}

function card(item, idx) {
  const tone = idx % 2 === 0 ? "light" : "dark";
  const isKehwa =
    item.n === "Kehwa" ||
    item.n === "Kashmiri Chai" ||
    item.n === "Chai" ||
    item.n === "Caffè";
  const imageClass =
    {
      "Palak Gosht": "palak-gosht-image",
      "Sajji Chicken": "sajji-chicken-image",
      "Daal Gosht": "daal-gosht-image",
      "Tikka Masala": "tikka-masala-image",
      "Gajar Halwa": "gajar-halwa-image",
      Kheer: "kheer-image",
      "Kabuli Pulao": "kabuli-pulao-image",
      "Chicken Chili": "chicken-chili-image",
      "Mix Veg Pakora": "mix-veg-pakora-image",
      "Bhaji Cipolla": "bhaji-cipolla-image",
      "Onion Bhaji": "bhaji-cipolla-image",
      "Chicken Pakora": "chicken-pakora-image",
      "Gamberi Pakora": "gamberi-pakora-image",
      "Shrimp Pakora": "gamberi-pakora-image",
      "Paneer Pakora": "paneer-pakora-image",
      "Samosa Veg": "samosa-veg-image",
      "Veg Samosa": "samosa-veg-image",
      "Samosa Carne": "samosa-carne-image",
      "Meat Samosa": "samosa-carne-image",
      "Mix Antipasto": "mix-antipasto-image",
      "Mixed Appetizer": "mix-antipasto-image",
      "Samosa Chat": "samosa-chat-image",
      "Bottiglie in Vetro": "bottiglie-vetro-image",
      "Glass Bottles": "bottiglie-vetro-image",
      Acqua: "acqua-image",
      Water: "acqua-image",
      Caffè: "caffe-image",
      Coffee: "caffe-image",
      Lassi: "lassi-image",
      "Mango Lassi": "mango-lassi-image",
      "Mango Shake": "mango-shake-image",
      "Mint Lassi": "mint-lassi-image",
      "Rooh Afza": "rooh-afza-image",
      "Kashmiri Chai": "kashmiri-chai-image",
      Chai: "chai-image",
      "Chicken Wings": "chicken-wings-image",
      Nuggets: "nuggets-image",
      "Biryani Tandoori": "tandoori-biryani-image",
      "Pilaf Rice": "pilaf-rice-image",
      "Baingan Bharta": "baingan-bharta-image",
      Chana: "chana-image",
      "Chili Paneer": "chili-paneer-image",
    }[item.n] || "";
  const scaleClass = isKehwa ? "kehwa-image" : imageClass;
  const compactClass = item.compact ? " compact" : "";

  if (item.compact) {
    return `

<div class="dish${compactClass} ${tone}">

    <div class="panel compact-panel">

        <h3 class="compact-name">

            ${item.n}

            ${item.spice ? `<span class="spice">${item.spice}</span>` : ""}

        </h3>

        <div class="compact-desc">

            ${item.d}

        </div>

        <div class="compact-price">€${item.p}</div>

    </div>

</div>

`;
  }

  return `

<div class="dish${compactClass} ${tone}">

    <div class="price">€${item.p}</div>

    <div class="thumb">

        ${
          item.img
            ? `<img
                src="images/${item.img}"
                alt="${item.n}"
                class="food-image${scaleClass ? " " + scaleClass : ""}">`
            : `<svg>
                <use href="#ic-${item.i}"></use>
              </svg>`
        }

    </div>

    <div class="panel">

        <h3>

            ${item.n}

            ${item.spice ? `<span class="spice">${item.spice}</span>` : ""}

        </h3>

        <div class="desc">

            ${item.d}

        </div>

    </div>

</div>

`;
}

// Initial render
renderMenu();

// active nav highlight
const allLinks = document.querySelectorAll(".navbar-links a");
const secs = [...allLinks].map((l) =>
  document.querySelector(l.getAttribute("href")),
);
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = "#" + e.target.id;
        allLinks.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === id),
        );
      }
    });
  },
  { rootMargin: "-40% 0px -50% 0px" },
);
secs.forEach((s) => s && io.observe(s));

// Hamburger menu toggle
const hamburger = document.getElementById("hamburger");
const navbarLinks = document.getElementById("navbar-links");
const navbarRight = document.querySelector(".navbar-right");
const menuClose = document.getElementById("menu-close");
const navbarOverlay = document.getElementById("navbar-overlay");

// Variables for focus trapping
let lastFocusedElement;
let focusableElements;

/**
 * Open the mobile menu
 */
function openMenu() {
  // Save current focused element to restore later
  lastFocusedElement = document.activeElement;

  // Add active classes
  hamburger.classList.add("open");
  navbarLinks.classList.add("open");
  navbarRight.classList.add("open");
  navbarOverlay.classList.add("open");
  document.body.classList.add("menu-open");

  // Update ARIA attributes
  hamburger.setAttribute("aria-expanded", "true");
  hamburger.setAttribute("aria-label", "Close menu");

  // Find focusable elements inside menu
  focusableElements = navbarLinks.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
  );

  // Focus first focusable element (menu close button)
  if (focusableElements.length > 0) {
    focusableElements[0].focus();
  }
}

/**
 * Close the mobile menu
 */
function closeMenu() {
  // Remove active classes
  hamburger.classList.remove("open");
  navbarLinks.classList.remove("open");
  navbarRight.classList.remove("open");
  navbarOverlay.classList.remove("open");
  document.body.classList.remove("menu-open");

  // Update ARIA attributes
  hamburger.setAttribute("aria-expanded", "false");
  hamburger.setAttribute("aria-label", "Open menu");

  // Restore focus to previously focused element
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

/**
 * Trap focus inside the open menu
 */
function trapFocus(e) {
  // Check if menu is open
  if (!navbarLinks.classList.contains("open")) return;

  // If ESC key, close menu
  if (e.key === "Escape") {
    closeMenu();
    return;
  }

  // If not TAB key, do nothing
  if (e.key !== "Tab") return;

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  // Shift + TAB
  if (e.shiftKey) {
    if (document.activeElement === firstElement) {
      e.preventDefault();
      lastElement.focus();
    }
  }
  // TAB
  else {
    if (document.activeElement === lastElement) {
      e.preventDefault();
      firstElement.focus();
    }
  }
}

if (hamburger) {
  // Open menu on hamburger click
  hamburger.addEventListener("click", () => {
    if (navbarLinks.classList.contains("open")) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Close menu on close button click
  if (menuClose) {
    menuClose.addEventListener("click", closeMenu);
  }

  // Close menu on overlay click
  if (navbarOverlay) {
    navbarOverlay.addEventListener("click", closeMenu);
  }

  // Close menu when a link is clicked
  const mobileLinks = document.querySelectorAll(".navbar-links a");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Add ESC key and focus trap listener
  document.addEventListener("keydown", trapFocus);
}

// Language toggle for hero top bar
const heroLangBtns = document.querySelectorAll(".hero-top-bar-lang .lang-btn");
heroLangBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    heroLangBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentLang = btn.getAttribute("data-lang");
    updateLanguage();
  });
});

/* =============================================================
   SMOOTH SCROLL WITH STICKY HEADER OFFSET
   -------------------------------------------------------------
   - Intercepts every click on anchor links (href="#...").
   - Calculates the real on-screen position of the target element.
   - Subtracts the sticky category navbar (#catnav) height so the
     target section is never hidden behind the fixed/sticky header.
   - Uses window.scrollTo({ behavior: 'smooth' }) for a premium,
     buttery-smooth scroll animation instead of the default jump.
   - Falls back gracefully to native scrolling if the target
     element cannot be found.
   ============================================================= */
(function initSmoothScroll() {
  // Measure the sticky category navbar height at runtime — this way
  // if the navbar grows (e.g., multi-row on very small screens) we
  // still offset correctly without hardcoding a pixel value.
  function getNavbarOffset() {
    const nav = document.getElementById("catnav");
    // If the navbar isn't in the DOM yet, fall back to a safe default
    if (!nav) return 60;
    const h = nav.getBoundingClientRect().height;
    // Add a tiny 2px buffer so the heading text never touches
    // the bottom edge of the sticky navbar (looks more polished)
    return Math.round(h) + 2;
  }

  function smoothScrollTo(targetId, event) {
    const target = document.getElementById(targetId);
    if (!target) return; // Unknown anchor — let the browser do its default

    // If the caller passed a click event we prevent the default instant jump
    if (event) event.preventDefault();

    // Where the target element sits in the document right now
    const rect = target.getBoundingClientRect();
    // Compensate for any distance the page has already been scrolled
    const absoluteTop = rect.top + window.pageYOffset;
    // Subtract the sticky navbar height so the section title is visible
    const offset = getNavbarOffset();
    const scrollToY = Math.max(0, absoluteTop - offset);

    // Smooth scroll — modern browsers natively support behavior:'smooth'
    window.scrollTo({
      top: scrollToY,
      left: 0,
      behavior: "smooth",
    });
  }

  // Delegate all internal anchor clicks through the document — this
  // automatically picks up links injected later (dynamic nav etc.)
  document.addEventListener("click", (e) => {
    // Find the closest anchor (<a>) element to the click target
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    // Extract the id from href="#someId"
    const href = anchor.getAttribute("href") || "";
    if (href.length < 2) return; // ignore bare "#" links
    const targetId = href.slice(1);

    // Only hijack links that point to an element in THIS page
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    // Smooth scroll with sticky-navbar offset — prevents the target
    // from being hidden behind the fixed/sticky category navbar.
    smoothScrollTo(targetId, e);
  });

  // Also handle the case where the user lands on the page with
  // #catnav (or any other hash) in the URL. Re-scroll after a short
  // delay so fonts/images load and the final navbar height is stable.
  if (window.location.hash && window.location.hash.length > 1) {
    const targetId = window.location.hash.slice(1);
    if (document.getElementById(targetId)) {
      // Small delay so layout settles before we measure
      window.addEventListener("load", () => {
        setTimeout(() => smoothScrollTo(targetId, null), 120);
      });
    }
  }
})();
