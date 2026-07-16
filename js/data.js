const vocabDatabase = {
    "ep1": [
        // 1. 机场与交通
        { word: "Flygplats", trans: "Airport" },
        { word: "Tåg", trans: "Train" },
        { word: "Station", trans: "Station" },
        { word: "Centralstationen", trans: "Central station" },
        { word: "Skylt", trans: "Sign" },
        { word: "Skärm", trans: "Screen" },
        { word: "Band", trans: "Belt" },
        { word: "Spår", trans: "Track/Platform" },
        { word: "Väska", trans: "Bag/Suitcase" },
        
        // 2. Resor och biljettförsäljning
        { word: "Biljett", trans: "Ticket" },
        { word: "Enkelbiljett", trans: "One-way ticket" },
        { word: "Dagsbiljett", trans: "Day ticket" },
        { word: "Zon", trans: "Zone" },
        { word: "Rabatt", trans: "Discount" },
        { word: "Pris", trans: "Price" },
        { word: "Prisvärt", trans: "Affordable/Good value" },
        { word: "Direkt", trans: "Direct" },
        { word: "Byte", trans: "Change/Transfer" },
        { word: "Försenat", trans: "Delayed" },
        
        // 3. Riktning och verb
        { word: "Rakt fram", trans: "Straight ahead" },
        { word: "Till vänster", trans: "To the left" },
        { word: "Till höger", trans: "To the right" },
        { word: "Åka", trans: "Go/Ride" },
        { word: "Bo", trans: "Live" },
        { word: "Komma", trans: "Come" },
        { word: "Vänta", trans: "Wait" },
        { word: "Skynda sig", trans: "Hurry up" },
        
        // 4. Social etikett
        { word: "Namn", trans: "Name" },
        { word: "Jag heter...", trans: "My name is..." },
        { word: "Jag kommer från...", trans: "I come from..." },
        { word: "Jag bor i...", trans: "I live in..." },
        { word: "God dag", trans: "Good day" },
        { word: "Hej då", trans: "Goodbye" },
        { word: "Tack", trans: "Thanks" },
        { word: "Trevligt", trans: "Nice/Pleasant" },
        { word: "Välkommen", trans: "Welcome" }
        ],
    
    "ep2": [
       // 1. Boende & Miljö
        { word: "Radhus", trans: "Townhouse", audio: "v_radhus" },
        { word: "Lägenhet", trans: "Apartment", audio: "v_lagenhet" },
        { word: "Villa", trans: "Villa", audio: "v_villa" },
        { word: "Sovrum", trans: "Bedroom", audio: "v_sovrum" },
        { word: "Vardagsrum", trans: "Living room", audio: "v_vardagsrum" },
        { word: "Kök", trans: "Kitchen", audio: "v_kok" },
        { word: "Trädgård", trans: "Garden", audio: "v_tradgard" },
        { word: "Gräsmatta", trans: "Lawn", audio: "v_grasmatta" },
        { word: "Växter", trans: "Plants", audio: "v_vaxter" },

        // 2. Yrken
        { word: "Dataanalytiker", trans: "Data analyst", audio: "v_data" },
        { word: "Banktjänsteman", trans: "Bank clerk", audio: "v_bank" },
        { word: "Hemmafru", trans: "Housewife", audio: "v_hemmafru" },
        { word: "Grundskoleelev", trans: "Elementary school student", audio: "v_elev" },
        { word: "Förskolebarn", trans: "Preschooler", audio: "v_forskola" },

        // 3. Intressen
        { word: "Utomhussporter", trans: "Outdoor sports", audio: "v_sport" },
        { word: "Spela basket", trans: "Play basketball", audio: "v_basket" },
        { word: "Spela fotboll", trans: "Play soccer", audio: "v_fotboll" },
        { word: "Simma", trans: "Swim", audio: "v_simma" },
        { word: "Springa", trans: "Run", audio: "v_springa" },
        { word: "Lyssna på musik", trans: "Listen to music", audio: "v_musik" },
        { word: "Titta på film", trans: "Watch movie", audio: "v_film" },
        { word: "Tecknad film", trans: "Cartoon", audio: "v_tecknad" },
        { word: "Serier", trans: "Comics", audio: "v_serier" },
        { word: "Resa", trans: "Travel", audio: "v_resa" },
        { word: "Vandra", trans: "Hike", audio: "v_vandra" },
        { word: "Måla", trans: "Paint", audio: "v_mala" },
        { word: "Fiska", trans: "Fish", audio: "v_fiska" },
        { word: "Stickning", trans: "Knitting", audio: "v_sticka" },
        { word: "Sjunga", trans: "Sing", audio: "v_sjunga" },
        { word: "Spela piano", trans: "Play piano", audio: "v_piano" },
        { word: "Trädgårdsarbete", trans: "Gardening", audio: "v_tradgardarbete" },
        { word: "Matlagning", trans: "Cooking", audio: "v_matlagning" },
        { word: "Plocka bär", trans: "Pick berries", audio: "v_bara" },

        // 4. Transport
        { word: "Skolbuss", trans: "School bus", audio: "v_buss" },
        { word: "Cykel", trans: "Bicycle", audio: "v_cykel" },
        { word: "Bil", trans: "Car", audio: "v_bil" },
        { word: "Tåg", trans: "Train", audio: "v_tag2" },
        { word: "Tunnelbana", trans: "Subway", audio: "v_t-bana" },
        { word: "Gå", trans: "Walk", audio: "v_ga" },

        // 5. Väder och Årstider
        { word: "Vår", trans: "Spring", audio: "v_var" },
        { word: "Sommar", trans: "Summer", audio: "v_sommar" },
        { word: "Höst", trans: "Autumn", audio: "v_host" },
        { word: "Vinter", trans: "Winter", audio: "v_vinter" },
        { word: "Solig", trans: "Sunny", audio: "v_solig" },
        { word: "Kall", trans: "Cold", audio: "v_kall" },
        { word: "Varm", trans: "Hot", audio: "v_varm" },
        { word: "Sval", trans: "Cool", audio: "v_sval" },
        { word: "Blåsig", trans: "Windy", audio: "v_blasig" },
        { word: "Fuktig", trans: "Humid", audio: "v_fuktig" },
        { word: "Torr", trans: "Dry", audio: "v_torr" },
        { word: "Snöa", trans: "Snow", audio: "v_snoa" },
        { word: "Regna", trans: "Rain", audio: "v_regna" },

        // 6. Geografi och Länder
        { word: "Norra", trans: "North", audio: "v_norra" },
        { word: "Södra", trans: "South", audio: "v_sodra" },
        { word: "Östra", trans: "East", audio: "v_ostra" },
        { word: "Västra", trans: "West", audio: "v_vastra" },
        { word: "Sverige", trans: "Sweden", audio: "v_sverige" },
        { word: "Kina", trans: "China", audio: "v_kina" },
        { word: "Italien", trans: "Italy", audio: "v_italien" },
        { word: "Spanien", trans: "Spain", audio: "v_spanien" },
        { word: "Frankrike", trans: "France", audio: "v_frankrike" },
        { word: "Tyskland", trans: "Germany", audio: "v_tyskland" }
    ]
};
