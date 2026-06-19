// src/data/exercises.js

export const exercisesData = {
  // ─── Modül 1: Selamlaşma ve Tanıtma (Begrüßung) ────────────────────────────
  1: {
    fillInBlank: [
      { sentence: "Ich ___ Berdan.", blank: "bin", translation: "Ben Berdan'ım.", hint: "sein → ich" },
      { sentence: "Wie ___ du?", blank: "heißt", translation: "Adın ne?", hint: "heißen → du" },
      { sentence: "Ich ___ aus der Türkei.", blank: "komme", translation: "Türkiye'den geliyorum.", hint: "kommen → ich" },
      { sentence: "Wo ___ du?", blank: "wohnst", translation: "Nerede yaşıyorsun?", hint: "wohnen → du" },
      { sentence: "Er ___ mein Freund.", blank: "ist", translation: "O benim arkadaşım.", hint: "sein → er/sie/es" },
      { sentence: "Wir ___ aus Deutschland.", blank: "kommen", translation: "Almanya'dan geliyoruz.", hint: "kommen → wir" },
      { sentence: "Wie ___ Sie? — Gut, danke!", blank: "geht", translation: "Nasılsınız? — İyiyim, teşekkürler!", hint: "Sağlık sorma kalıbı: Wie geht es Ihnen → Wie ___ es?" },
      { sentence: "Das ___ Anna. Sie kommt aus Berlin.", blank: "ist", translation: "Bu Anna. Berlin'den geliyor.", hint: "sein → das (tanıtma)" },
    ],
    grammar: {
      conjugations: [
        { verb: "sein", pronoun: "ich", answer: "bin" },
        { verb: "sein", pronoun: "du", answer: "bist" },
        { verb: "sein", pronoun: "er/sie/es", answer: "ist" },
        { verb: "sein", pronoun: "wir", answer: "sind" },
        { verb: "sein", pronoun: "ihr", answer: "seid" },
        { verb: "sein", pronoun: "sie/Sie", answer: "sind" },
      ],
      articles: [
        { word: "Name", correct: "der" },
        { word: "Frau", correct: "die" },
        { word: "Mann", correct: "der" },
        { word: "Kind", correct: "das" },
        { word: "Sprache", correct: "die" },
        { word: "Land", correct: "das" },
      ],
      wordOrder: [
        { scrambled: ["aus", "der", "Ich", "Türkei", "komme"], correct: ["Ich", "komme", "aus", "der", "Türkei"], translation: "Türkiye'den geliyorum." },
        { scrambled: ["heißt", "Wie", "du"], correct: ["Wie", "heißt", "du"], translation: "Adın ne?" },
        { scrambled: ["Berlin", "aus", "Sie", "kommt"], correct: ["Sie", "kommt", "aus", "Berlin"], translation: "O Berlin'den geliyor." },
        { scrambled: ["wohnst", "Wo", "du"], correct: ["Wo", "wohnst", "du"], translation: "Nerede yaşıyorsun?" },
      ],
    },
  },

  // ─── Modül 2: Sayılar, Saat ve Tarih (Zahlen & Zeit) ───────────────────────
  2: {
    fillInBlank: [
      { sentence: "Es ist ___ drei (02:30).", blank: "halb", translation: "Saat iki buçuk.", hint: "Buçuk ifadesi için — sonraki saati söylüyoruz" },
      { sentence: "Wie ___ ist es?", blank: "spät", translation: "Saat kaç?", hint: "Saat sorma kalıbı: Wie ___ ist es?" },
      { sentence: "Ich ___ 25 Jahre alt.", blank: "bin", translation: "25 yaşındayım.", hint: "sein → ich (yaş ifadesi)" },
      { sentence: "Ein Jahr hat zwölf ___.", blank: "Monate", translation: "Bir yılın on iki ayı var.", hint: "Monat kelimesinin çoğulu" },
      { sentence: "Der Termin ist ___ Montag.", blank: "am", translation: "Randevu Pazartesi günü.", hint: "Gün belirtirken: an + dem = am" },
      { sentence: "Ich stehe um sieben ___ auf.", blank: "Uhr", translation: "Saat yedide kalkıyorum.", hint: "Saat kelimesi" },
      { sentence: "Heute ___ Montag.", blank: "ist", translation: "Bugün Pazartesi.", hint: "sein → es/heute" },
      { sentence: "___ ist es halb acht.", blank: "Es", translation: "Saat yedi buçuk.", hint: "Es ist ... saat başlangıcı" },
    ],
    grammar: {
      conjugations: [
        { verb: "haben", pronoun: "ich", answer: "habe" },
        { verb: "haben", pronoun: "du", answer: "hast" },
        { verb: "haben", pronoun: "er/sie/es", answer: "hat" },
        { verb: "haben", pronoun: "wir", answer: "haben" },
        { verb: "haben", pronoun: "ihr", answer: "habt" },
        { verb: "haben", pronoun: "sie/Sie", answer: "haben" },
      ],
      articles: [
        { word: "Uhr", correct: "die" },
        { word: "Tag", correct: "der" },
        { word: "Jahr", correct: "das" },
        { word: "Geburtstag", correct: "der" },
        { word: "Monat", correct: "der" },
        { word: "Woche", correct: "die" },
      ],
      wordOrder: [
        { scrambled: ["Uhr", "Es", "drei", "ist"], correct: ["Es", "ist", "drei", "Uhr"], translation: "Saat üç." },
        { scrambled: ["du", "alt", "Wie", "bist"], correct: ["Wie", "alt", "bist", "du"], translation: "Kaç yaşındasın?" },
        { scrambled: ["Termin", "Montag", "Der", "ist", "am"], correct: ["Der", "Termin", "ist", "am", "Montag"], translation: "Randevu Pazartesi günü." },
        { scrambled: ["Uhr", "acht", "um", "Ich", "auf", "stehe"], correct: ["Ich", "stehe", "um", "acht", "Uhr", "auf"], translation: "Saat sekizde kalkıyorum." },
      ],
    },
  },

  // ─── Modül 3: Markette Alışveriş (Im Supermarkt) ───────────────────────────
  3: {
    fillInBlank: [
      { sentence: "Was ___ das Brot?", blank: "kostet", translation: "Ekmek ne kadar?", hint: "kosten → er/sie/es" },
      { sentence: "Ich möchte ___ Apfel.", blank: "einen", translation: "Bir elma istiyorum.", hint: "Akkusativ — eril belirsiz artikel" },
      { sentence: "Kann ich mit Karte ___?", blank: "bezahlen", translation: "Kartla ödeyebilir miyim?", hint: "Ödemek fiili — mastar" },
      { sentence: "Ich trinke Kaffee ohne ___.", blank: "Zucker", translation: "Şekersiz kahve içerim.", hint: "Şeker kelimesi (der Zucker)" },
      { sentence: "Wo finde ich die ___?", blank: "Kasse", translation: "Kasa nerede?", hint: "Kasa kelimesi (die Kasse)" },
      { sentence: "Das kostet drei Euro fünfzig ___.", blank: "Cent", translation: "Bu üç Euro elli Cent.", hint: "Cent kelimesi" },
      { sentence: "Haben Sie eine ___?", blank: "Tüte", translation: "Poşetiniz var mı?", hint: "Poşet/torba (die Tüte)" },
      { sentence: "Ich ___ gern frisches Obst.", blank: "kaufe", translation: "Taze meyve almayı severim.", hint: "kaufen → ich" },
    ],
    grammar: {
      conjugations: [
        { verb: "kaufen", pronoun: "ich", answer: "kaufe" },
        { verb: "kaufen", pronoun: "du", answer: "kaufst" },
        { verb: "kaufen", pronoun: "er/sie/es", answer: "kauft" },
        { verb: "kaufen", pronoun: "wir", answer: "kaufen" },
        { verb: "kaufen", pronoun: "ihr", answer: "kauft" },
        { verb: "kaufen", pronoun: "sie/Sie", answer: "kaufen" },
      ],
      articles: [
        { word: "Supermarkt", correct: "der" },
        { word: "Brot", correct: "das" },
        { word: "Milch", correct: "die" },
        { word: "Obst", correct: "das" },
        { word: "Kasse", correct: "die" },
        { word: "Preis", correct: "der" },
      ],
      wordOrder: [
        { scrambled: ["einen", "Ich", "Apfel", "kaufe"], correct: ["Ich", "kaufe", "einen", "Apfel"], translation: "Bir elma satın alıyorum." },
        { scrambled: ["mit", "ich", "Karte", "bezahlen", "Kann"], correct: ["Kann", "ich", "mit", "Karte", "bezahlen"], translation: "Kartla ödeyebilir miyim?" },
        { scrambled: ["kostet", "das", "Brot", "Was"], correct: ["Was", "kostet", "das", "Brot"], translation: "Ekmek ne kadar?" },
        { scrambled: ["eine", "Haben", "Sie", "Tüte"], correct: ["Haben", "Sie", "eine", "Tüte"], translation: "Poşetiniz var mı?" },
      ],
    },
  },

  // ─── Modül 4: Ulaşım (Verkehrsmittel) ──────────────────────────────────────
  4: {
    fillInBlank: [
      { sentence: "Ich fahre mit ___ Zug.", blank: "dem", translation: "Trenle gidiyorum.", hint: "mit + der Zug → Dativ eril: dem" },
      { sentence: "Ich gehe zu ___.", blank: "Fuß", translation: "Yürüyerek gidiyorum.", hint: "Kalıp: zu Fuß gehen" },
      { sentence: "Der Zug fährt von ___ 4 ab.", blank: "Gleis", translation: "Tren 4. perona kalkıyor.", hint: "Peron kelimesi (das Gleis)" },
      { sentence: "Sie müssen in Köln ___.", blank: "umsteigen", translation: "Köln'de aktarma yapmalısınız.", hint: "Aktarma yapmak (ayrılan fiil)" },
      { sentence: "Wo ist die nächste ___?", blank: "Haltestelle", translation: "En yakın durak nerede?", hint: "Durak kelimesi (die Haltestelle)" },
      { sentence: "Biegen Sie an der Ampel ___ ab.", blank: "links", translation: "Trafik ışığında sola dönün.", hint: "Sol kelimesi" },
      { sentence: "Der Bus ___ in zehn Minuten.", blank: "kommt", translation: "Otobüs on dakikaya geliyor.", hint: "kommen → er/sie/es" },
      { sentence: "Eine ___ nach München, bitte.", blank: "Fahrkarte", translation: "Münih'e bir bilet lütfen.", hint: "Bilet kelimesi (die Fahrkarte)" },
    ],
    grammar: {
      conjugations: [
        { verb: "fahren", pronoun: "ich", answer: "fahre" },
        { verb: "fahren", pronoun: "du", answer: "fährst" },
        { verb: "fahren", pronoun: "er/sie/es", answer: "fährt" },
        { verb: "fahren", pronoun: "wir", answer: "fahren" },
        { verb: "fahren", pronoun: "ihr", answer: "fahrt" },
        { verb: "fahren", pronoun: "sie/Sie", answer: "fahren" },
      ],
      articles: [
        { word: "Bahnhof", correct: "der" },
        { word: "Haltestelle", correct: "die" },
        { word: "Auto", correct: "das" },
        { word: "Ticket", correct: "das" },
        { word: "Straße", correct: "die" },
        { word: "Weg", correct: "der" },
      ],
      wordOrder: [
        { scrambled: ["der", "ist", "Bahnhof", "Wo"], correct: ["Wo", "ist", "der", "Bahnhof"], translation: "Tren istasyonu nerede?" },
        { scrambled: ["nach", "Wir", "Berlin", "fahren"], correct: ["Wir", "fahren", "nach", "Berlin"], translation: "Berlin'e gidiyoruz." },
        { scrambled: ["Haltestelle", "ist", "nächste", "Wo", "die"], correct: ["Wo", "ist", "die", "nächste", "Haltestelle"], translation: "En yakın durak nerede?" },
        { scrambled: ["Fahrkarte", "Eine", "bitte", "München", "nach"], correct: ["Eine", "Fahrkarte", "nach", "München", "bitte"], translation: "Münih'e bir bilet lütfen." },
      ],
    },
  },

  // ─── Modül 5: Restoran ve Kafede Sipariş (Im Restaurant) ───────────────────
  5: {
    fillInBlank: [
      { sentence: "Ich ___ bitte ein Glas Wasser.", blank: "möchte", translation: "Lütfen bir bardak su istiyorum.", hint: "möchten → ich" },
      { sentence: "Die ___, bitte!", blank: "Rechnung", translation: "Hesap, lütfen!", hint: "Hesap kelimesi (die Rechnung)" },
      { sentence: "Das Essen ___ lecker.", blank: "schmeckt", translation: "Yemek lezzetli.", hint: "schmecken → er/sie/es" },
      { sentence: "Haben Sie einen Tisch ___?", blank: "frei", translation: "Boş masanız var mı?", hint: "Boş/serbest sıfatı" },
      { sentence: "Ich ___ kein Schweinefleisch.", blank: "esse", translation: "Domuz eti yemiyorum.", hint: "essen → ich" },
      { sentence: "Was ___ Sie empfehlen?", blank: "können", translation: "Ne tavsiye edebilirsiniz?", hint: "können → Sie" },
      { sentence: "Wir möchten ___ bezahlen.", blank: "getrennt", translation: "Ayrı ayrı ödemek istiyoruz.", hint: "Ayrı kelimesi (getrennt)" },
      { sentence: "Einen Tisch für ___ Personen, bitte.", blank: "zwei", translation: "İki kişilik masa lütfen.", hint: "İki sayısı" },
    ],
    grammar: {
      conjugations: [
        { verb: "essen", pronoun: "ich", answer: "esse" },
        { verb: "essen", pronoun: "du", answer: "isst" },
        { verb: "essen", pronoun: "er/sie/es", answer: "isst" },
        { verb: "essen", pronoun: "wir", answer: "essen" },
        { verb: "essen", pronoun: "ihr", answer: "esst" },
        { verb: "essen", pronoun: "sie/Sie", answer: "essen" },
      ],
      articles: [
        { word: "Restaurant", correct: "das" },
        { word: "Kellner", correct: "der" },
        { word: "Speisekarte", correct: "die" },
        { word: "Glas", correct: "das" },
        { word: "Tisch", correct: "der" },
        { word: "Rechnung", correct: "die" },
      ],
      wordOrder: [
        { scrambled: ["einen", "möchte", "Kaffee", "Ich"], correct: ["Ich", "möchte", "einen", "Kaffee"], translation: "Bir kahve istiyorum." },
        { scrambled: ["bitte", "Rechnung", "Die"], correct: ["Die", "Rechnung", "bitte"], translation: "Hesap, lütfen." },
        { scrambled: ["Tisch", "Haben", "frei", "Sie", "einen"], correct: ["Haben", "Sie", "einen", "Tisch", "frei"], translation: "Boş masanız var mı?" },
        { scrambled: ["schmeckt", "Das", "sehr", "Essen", "lecker"], correct: ["Das", "Essen", "schmeckt", "sehr", "lecker"], translation: "Yemek çok lezzetli." },
      ],
    },
  },

  // ─── Modül 6: Doktor ve Eczane (Arzt & Apotheke) ───────────────────────────
  6: {
    fillInBlank: [
      { sentence: "Mein Kopf ___ weh.", blank: "tut", translation: "Başım ağrıyor.", hint: "weh tun → er/sie/es" },
      { sentence: "Ich ___ krank.", blank: "bin", translation: "Hastayım.", hint: "sein → ich" },
      { sentence: "___ Sie im Bett!", blank: "Bleiben", translation: "Yatakta kalın! (resmi)", hint: "bleiben → emir kipi (Sie)" },
      { sentence: "Ich brauche ein ___ für die Tabletten.", blank: "Rezept", translation: "Tabletler için reçeteye ihtiyacım var.", hint: "Reçete (das Rezept)" },
      { sentence: "Ich fühle mich nicht ___.", blank: "wohl", translation: "Kendimi iyi hissetmiyorum.", hint: "Kalıp: sich nicht ___ fühlen" },
      { sentence: "Ich habe ___ seit zwei Tagen.", blank: "Fieber", translation: "İki günden beri ateşim var.", hint: "Ateş kelimesi (das Fieber)" },
      { sentence: "Nehmen Sie die Tabletten dreimal ___.", blank: "täglich", translation: "Tabletleri günde üç kez alın.", hint: "Günlük/her gün sıfatı" },
      { sentence: "Ich bin ___ gegen Penicillin.", blank: "allergisch", translation: "Penisiline alerjim var.", hint: "Alerjik sıfatı" },
    ],
    grammar: {
      conjugations: [
        { verb: "helfen", pronoun: "ich", answer: "helfe" },
        { verb: "helfen", pronoun: "du", answer: "hilfst" },
        { verb: "helfen", pronoun: "er/sie/es", answer: "hilft" },
        { verb: "helfen", pronoun: "wir", answer: "helfen" },
        { verb: "helfen", pronoun: "ihr", answer: "helft" },
        { verb: "helfen", pronoun: "sie/Sie", answer: "helfen" },
      ],
      articles: [
        { word: "Arzt", correct: "der" },
        { word: "Apotheke", correct: "die" },
        { word: "Krankenhaus", correct: "das" },
        { word: "Schmerz", correct: "der" },
        { word: "Tablette", correct: "die" },
        { word: "Rezept", correct: "das" },
      ],
      wordOrder: [
        { scrambled: ["Kopfschmerzen", "habe", "Ich"], correct: ["Ich", "habe", "Kopfschmerzen"], translation: "Baş ağrım var." },
        { scrambled: ["Arzt", "einen", "Rufen", "Sie"], correct: ["Rufen", "Sie", "einen", "Arzt"], translation: "Bir doktor çağırın!" },
        { scrambled: ["nicht", "Ich", "wohl", "mich", "fühle"], correct: ["Ich", "fühle", "mich", "nicht", "wohl"], translation: "Kendimi iyi hissetmiyorum." },
        { scrambled: ["dreimal", "täglich", "Tabletten", "nehmen", "Sie", "die"], correct: ["Nehmen", "Sie", "die", "Tabletten", "dreimal", "täglich"], translation: "Tabletleri günde üç kez alın." },
      ],
    },
  },

  // ─── Modül 7: Daire Kiralama (Wohnung) ─────────────────────────────────────
  7: {
    fillInBlank: [
      { sentence: "Das ist ___ Wohnung.", blank: "meine", translation: "Bu benim dairem.", hint: "Dişil iyelik: meine (die Wohnung)" },
      { sentence: "Die Miete ist sehr ___.", blank: "hoch", translation: "Kira çok yüksek.", hint: "Yüksek sıfatı" },
      { sentence: "Ich möchte eine Wohnung ___.", blank: "mieten", translation: "Bir daire kiralamak istiyorum.", hint: "Kiralamak fiili — mastar" },
      { sentence: "Bitte öffnen Sie das ___.", blank: "Fenster", translation: "Lütfen pencereyi açın.", hint: "Pencere kelimesi (das Fenster)" },
      { sentence: "Die Wohnung hat drei ___ und eine Küche.", blank: "Zimmer", translation: "Dairenin üç odası ve bir mutfağı var.", hint: "Oda kelimesi (das Zimmer)" },
      { sentence: "Die ___ beträgt 800 Euro im Monat.", blank: "Miete", translation: "Kira ayda 800 Euro.", hint: "Kira kelimesi (die Miete)" },
      { sentence: "Ich ___ in der zweiten Etage.", blank: "wohne", translation: "İkinci katta yaşıyorum.", hint: "wohnen → ich" },
      { sentence: "Gibt es auch einen ___?", blank: "Keller", translation: "Bodrum katı da var mı?", hint: "Bodrum kelimesi (der Keller)" },
    ],
    grammar: {
      conjugations: [
        { verb: "wohnen", pronoun: "ich", answer: "wohne" },
        { verb: "wohnen", pronoun: "du", answer: "wohnst" },
        { verb: "wohnen", pronoun: "er/sie/es", answer: "wohnt" },
        { verb: "wohnen", pronoun: "wir", answer: "wohnen" },
        { verb: "wohnen", pronoun: "ihr", answer: "wohnt" },
        { verb: "wohnen", pronoun: "sie/Sie", answer: "wohnen" },
      ],
      articles: [
        { word: "Wohnung", correct: "die" },
        { word: "Haus", correct: "das" },
        { word: "Zimmer", correct: "das" },
        { word: "Schrank", correct: "der" },
        { word: "Küche", correct: "die" },
        { word: "Balkon", correct: "der" },
      ],
      wordOrder: [
        { scrambled: ["drei", "Zimmer", "Die", "Wohnung", "hat"], correct: ["Die", "Wohnung", "hat", "drei", "Zimmer"], translation: "Dairenin üç odası var." },
        { scrambled: ["das", "Fenster", "Öffnen", "Sie", "bitte"], correct: ["Öffnen", "Sie", "bitte", "das", "Fenster"], translation: "Lütfen pencereyi açın." },
        { scrambled: ["wohne", "zweiten", "Ich", "Etage", "im", "der"], correct: ["Ich", "wohne", "im", "der", "zweiten", "Etage"], translation: "İkinci katta yaşıyorum." },
        { scrambled: ["beträgt", "Euro", "Die", "800", "Miete"], correct: ["Die", "Miete", "beträgt", "800", "Euro"], translation: "Kira 800 Euro." },
      ],
    },
  },

  // ─── Modül 8: Banka ve Resmi İşlemler (Bank & Behörden) ────────────────────
  8: {
    fillInBlank: [
      { sentence: "Ich ___ ein Konto eröffnen.", blank: "muss", translation: "Bir hesap açmam gerekiyor.", hint: "müssen → ich" },
      { sentence: "Bitte ___ Sie hier.", blank: "unterschreiben", translation: "Lütfen burayı imzalayın.", hint: "İmzalamak fiili — mastar" },
      { sentence: "Füllen Sie bitte das ___ aus.", blank: "Formular", translation: "Lütfen formu doldurun.", hint: "Form kelimesi (das Formular)" },
      { sentence: "Ich will Geld ___.", blank: "abheben", translation: "Para çekmek istiyorum.", hint: "Para çekmek (ayrılan fiil)" },
      { sentence: "Haben Sie Ihren ___ dabei?", blank: "Ausweis", translation: "Kimliğinizi yanınızda taşıyor musunuz?", hint: "Kimlik (der Ausweis)" },
      { sentence: "Die Bearbeitung dauert etwa zwei ___.", blank: "Wochen", translation: "İşlem yaklaşık iki hafta sürer.", hint: "Hafta kelimesinin çoğulu" },
      { sentence: "Ich möchte eine ___ machen.", blank: "Überweisung", translation: "Bir havale yapmak istiyorum.", hint: "Havale/transfer kelimesi" },
      { sentence: "Bitte nehmen Sie im ___ Platz.", blank: "Wartezimmer", translation: "Lütfen bekleme odasında oturun.", hint: "Bekleme odası (das Wartezimmer)" },
    ],
    grammar: {
      conjugations: [
        { verb: "müssen", pronoun: "ich", answer: "muss" },
        { verb: "müssen", pronoun: "du", answer: "musst" },
        { verb: "müssen", pronoun: "er/sie/es", answer: "muss" },
        { verb: "müssen", pronoun: "wir", answer: "müssen" },
        { verb: "müssen", pronoun: "ihr", answer: "müsst" },
        { verb: "müssen", pronoun: "sie/Sie", answer: "müssen" },
      ],
      articles: [
        { word: "Konto", correct: "das" },
        { word: "Bankkarte", correct: "die" },
        { word: "Ausweis", correct: "der" },
        { word: "Visum", correct: "das" },
        { word: "Formular", correct: "das" },
        { word: "Behörde", correct: "die" },
      ],
      wordOrder: [
        { scrambled: ["muss", "Ich", "Geld", "abheben"], correct: ["Ich", "muss", "Geld", "abheben"], translation: "Para çekmem gerekiyor." },
        { scrambled: ["Formular", "das", "Sie", "Füllen", "aus"], correct: ["Füllen", "Sie", "das", "Formular", "aus"], translation: "Formu doldurun." },
        { scrambled: ["Ausweis", "Sie", "Ihren", "Haben", "dabei"], correct: ["Haben", "Sie", "Ihren", "Ausweis", "dabei"], translation: "Kimliğiniz yanınızda mı?" },
        { scrambled: ["unterschreiben", "bitte", "Sie", "Hier"], correct: ["Bitte", "unterschreiben", "Sie", "hier"], translation: "Lütfen burayı imzalayın." },
      ],
    },
  },

  // ─── Modül 9: Telefon Görüşmesi ve İnternet (Telefon) ──────────────────────
  9: {
    fillInBlank: [
      { sentence: "Ich ___ dich morgen an.", blank: "rufe", translation: "Seni yarın ararım.", hint: "anrufen → ich (ayrılan fiil, 'an' sona gider)" },
      { sentence: "Wie ist deine ___?", blank: "Telefonnummer", translation: "Telefon numaran nedir?", hint: "Telefon numarası (die Telefonnummer)" },
      { sentence: "Ich habe kein ___.", blank: "Internet", translation: "İnternetim yok.", hint: "İnternet kelimesi (das Internet)" },
      { sentence: "Schreiben Sie mir eine ___.", blank: "E-Mail", translation: "Bana bir e-posta yazın.", hint: "E-posta kelimesi (die E-Mail)" },
      { sentence: "Mein Handy ist ___.", blank: "leer", translation: "Telefonum boşaldı.", hint: "Boş/bitik sıfatı" },
      { sentence: "Können Sie das bitte ___?", blank: "wiederholen", translation: "Bunu tekrar edebilir misiniz?", hint: "Tekrarlamak fiili — mastar" },
      { sentence: "Die ___ ist sehr schlecht hier.", blank: "Verbindung", translation: "Burada bağlantı çok kötü.", hint: "Bağlantı kelimesi (die Verbindung)" },
      { sentence: "Ich spreche ___ gerade.", blank: "nicht", translation: "Şu an konuşamıyorum.", hint: "Olumsuzluk" },
    ],
    grammar: {
      conjugations: [
        { verb: "anrufen", pronoun: "ich", answer: "rufe" },
        { verb: "anrufen", pronoun: "du", answer: "rufst" },
        { verb: "anrufen", pronoun: "er/sie/es", answer: "ruft" },
        { verb: "anrufen", pronoun: "wir", answer: "rufen" },
        { verb: "anrufen", pronoun: "ihr", answer: "ruft" },
        { verb: "anrufen", pronoun: "sie/Sie", answer: "rufen" },
      ],
      articles: [
        { word: "Telefon", correct: "das" },
        { word: "Handy", correct: "das" },
        { word: "E-Mail", correct: "die" },
        { word: "Computer", correct: "der" },
        { word: "Verbindung", correct: "die" },
        { word: "Passwort", correct: "das" },
      ],
      wordOrder: [
        { scrambled: ["dich", "rufe", "Ich", "an"], correct: ["Ich", "rufe", "dich", "an"], translation: "Seni arıyorum." },
        { scrambled: ["eine", "Schreiben", "Sie", "E-Mail", "mir"], correct: ["Schreiben", "Sie", "mir", "eine", "E-Mail"], translation: "Bana bir e-posta yazın." },
        { scrambled: ["leer", "Handy", "Mein", "ist"], correct: ["Mein", "Handy", "ist", "leer"], translation: "Telefonum boşaldı." },
        { scrambled: ["das", "bitte", "Können", "Sie", "wiederholen"], correct: ["Können", "Sie", "das", "bitte", "wiederholen"], translation: "Bunu tekrar edebilir misiniz?" },
      ],
    },
  },

  // ─── Modül 10: Günlük Hayat (Alltag) ───────────────────────────────────────
  10: {
    fillInBlank: [
      { sentence: "Ich ___ um 7 Uhr auf.", blank: "stehe", translation: "Saat 7'de kalkıyorum.", hint: "aufstehen → ich (ayrılan fiil)" },
      { sentence: "Ich habe ___ Bock zu lernen.", blank: "kein", translation: "Ders çalışmak istemiyorum.", hint: "kein Bock = argo 'istek yok'" },
      { sentence: "Du ___ sehr viel.", blank: "schläfst", translation: "Çok fazla uyuyorsun.", hint: "schlafen → du (düzensiz: ä)" },
      { sentence: "Das Konzert gestern war ___.", blank: "geil", translation: "Dünkü konser müthişti.", hint: "Argo: harika/mükemmel" },
      { sentence: "Ich ___ mir die Zähne.", blank: "putze", translation: "Dişlerimi fırçalıyorum.", hint: "putzen → ich (dönüşlü kullanım)" },
      { sentence: "Wir ___ jeden Tag zusammen.", blank: "essen", translation: "Her gün birlikte yiyoruz.", hint: "essen → wir" },
      { sentence: "Er ___ immer zu spät.", blank: "kommt", translation: "O her zaman geç gelir.", hint: "kommen → er/sie/es" },
      { sentence: "Ich ___ gern spazieren.", blank: "gehe", translation: "Gezmeyi severim.", hint: "gehen → ich" },
    ],
    grammar: {
      conjugations: [
        { verb: "schlafen", pronoun: "ich", answer: "schlafe" },
        { verb: "schlafen", pronoun: "du", answer: "schläfst" },
        { verb: "schlafen", pronoun: "er/sie/es", answer: "schläft" },
        { verb: "schlafen", pronoun: "wir", answer: "schlafen" },
        { verb: "schlafen", pronoun: "ihr", answer: "schlaft" },
        { verb: "schlafen", pronoun: "sie/Sie", answer: "schlafen" },
      ],
      articles: [
        { word: "Kumpel", correct: "der" },
        { word: "Arbeit", correct: "die" },
        { word: "Schule", correct: "die" },
        { word: "Büro", correct: "das" },
        { word: "Frühstück", correct: "das" },
        { word: "Abend", correct: "der" },
      ],
      wordOrder: [
        { scrambled: ["sechs", "Ich", "um", "auf", "stehe", "Uhr"], correct: ["Ich", "stehe", "um", "sechs", "Uhr", "auf"], translation: "Saat altıda kalkıyorum." },
        { scrambled: ["Bock", "heute", "Ich", "kein", "habe"], correct: ["Ich", "habe", "heute", "kein", "Bock"], translation: "Bugün hiç isteğim yok." },
        { scrambled: ["Zähne", "Ich", "mir", "die", "putze"], correct: ["Ich", "putze", "mir", "die", "Zähne"], translation: "Dişlerimi fırçalıyorum." },
        { scrambled: ["spazieren", "gern", "Ich", "gehe"], correct: ["Ich", "gehe", "gern", "spazieren"], translation: "Gezmeyi severim." },
      ],
    },
  },

  // ─── Modül 11: A1 Gramer Özeti (Grammatik) ─────────────────────────────────
  11: {
    fillInBlank: [
      { sentence: "Ich ___ Deutsch sprechen.", blank: "kann", translation: "Almanca konuşabilirim.", hint: "können → ich" },
      { sentence: "Wir ___ heute arbeiten.", blank: "müssen", translation: "Bugün çalışmak zorundayız.", hint: "müssen → wir" },
      { sentence: "Er ___ ein Eis.", blank: "will", translation: "O bir dondurma istiyor.", hint: "wollen → er/sie/es" },
      { sentence: "Hier ___ man nicht parken.", blank: "darf", translation: "Buraya park edilemez.", hint: "dürfen → man/er/sie/es" },
      { sentence: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.", blank: "weil", translation: "Almanya'da çalışmak istediğim için Almanca öğreniyorum.", hint: "Neden bağlacı (Almanca'da fiil sona gider)" },
      { sentence: "___ er krank ist, geht er zur Arbeit.", blank: "Obwohl", translation: "Hasta olmasına rağmen işe gidiyor.", hint: "Rağmen bağlacı — 'obwohl' cümle başında" },
      { sentence: "Sie ___ morgen kommen.", blank: "soll", translation: "Yarın gelmesi gerekiyor (dışarıdan beklenti).", hint: "sollen → er/sie/es" },
      { sentence: "Du ___ lauter sprechen.", blank: "sollst", translation: "Daha yüksek sesle konuşmalısın.", hint: "sollen → du" },
    ],
    grammar: {
      conjugations: [
        { verb: "können", pronoun: "ich", answer: "kann" },
        { verb: "können", pronoun: "du", answer: "kannst" },
        { verb: "können", pronoun: "er/sie/es", answer: "kann" },
        { verb: "können", pronoun: "wir", answer: "können" },
        { verb: "können", pronoun: "ihr", answer: "könnt" },
        { verb: "können", pronoun: "sie/Sie", answer: "können" },
      ],
      articles: [
        { word: "Lehrer", correct: "der" },
        { word: "Lehrerin", correct: "die" },
        { word: "Buch", correct: "das" },
        { word: "Stift", correct: "der" },
        { word: "Klasse", correct: "die" },
        { word: "Wörterbuch", correct: "das" },
      ],
      wordOrder: [
        { scrambled: ["kann", "Ich", "Deutsch", "sprechen"], correct: ["Ich", "kann", "Deutsch", "sprechen"], translation: "Almanca konuşabiliyorum." },
        { scrambled: ["nicht", "Hier", "darf", "parken", "man"], correct: ["Hier", "darf", "man", "nicht", "parken"], translation: "Buraya park etmeye izin yok." },
        { scrambled: ["Deutsch", "weil", "ich", "lerne", "möchte", "arbeiten", "ich"], correct: ["Ich", "lerne", "Deutsch", "weil", "ich", "arbeiten", "möchte"], translation: "Çalışmak istediğim için Almanca öğreniyorum." },
        { scrambled: ["krank", "er", "ist", "Obwohl", "Arbeit", "geht", "er", "zur"], correct: ["Obwohl", "er", "krank", "ist", "geht", "er", "zur", "Arbeit"], translation: "Hasta olmasına rağmen işe gidiyor." },
      ],
    },
  },

  // ─── Modül 12: Hızlı Başvuru ve Acil Durum (Notfall) ───────────────────────
  12: {
    fillInBlank: [
      { sentence: "Rufen Sie die ___ (110)!", blank: "Polizei", translation: "Polisi arayın!", hint: "Polis kelimesi (die Polizei)" },
      { sentence: "Ich habe meine Tasche ___.", blank: "verloren", translation: "Çantamı kaybettim.", hint: "verlieren → Partizip II (geçmiş zaman)" },
      { sentence: "Können Sie mir ___?", blank: "helfen", translation: "Bana yardım edebilir misiniz?", hint: "Yardım etmek — mastar" },
      { sentence: "Es ist sehr ___!", blank: "dringend", translation: "Çok acil!", hint: "Acil sıfatı" },
      { sentence: "Wo ist das nächste ___?", blank: "Krankenhaus", translation: "En yakın hastane nerede?", hint: "Hastane kelimesi (das Krankenhaus)" },
      { sentence: "Ich habe einen ___ gehabt.", blank: "Unfall", translation: "Bir kaza geçirdim.", hint: "Kaza kelimesi (der Unfall)" },
      { sentence: "Bleiben Sie ___!", blank: "ruhig", translation: "Sakin olun!", hint: "Sakin sıfatı" },
      { sentence: "Der ___ kommt in zehn Minuten.", blank: "Krankenwagen", translation: "Ambulans on dakikaya geliyor.", hint: "Ambulans kelimesi (der Krankenwagen)" },
    ],
    grammar: {
      conjugations: [
        { verb: "verlieren", pronoun: "ich", answer: "verliere" },
        { verb: "verlieren", pronoun: "du", answer: "verlierst" },
        { verb: "verlieren", pronoun: "er/sie/es", answer: "verliert" },
        { verb: "verlieren", pronoun: "wir", answer: "verlieren" },
        { verb: "verlieren", pronoun: "ihr", answer: "verliert" },
        { verb: "verlieren", pronoun: "sie/Sie", answer: "verlieren" },
      ],
      articles: [
        { word: "Hilfe", correct: "die" },
        { word: "Polizei", correct: "die" },
        { word: "Notaufnahme", correct: "die" },
        { word: "Unfall", correct: "der" },
        { word: "Krankenhaus", correct: "das" },
        { word: "Krankenwagen", correct: "der" },
      ],
      wordOrder: [
        { scrambled: ["die", "Rufen", "Sie", "Polizei"], correct: ["Rufen", "Sie", "die", "Polizei"], translation: "Polisi arayın!" },
        { scrambled: ["Tasche", "Ich", "meine", "verloren", "habe"], correct: ["Ich", "habe", "meine", "Tasche", "verloren"], translation: "Çantamı kaybettim." },
        { scrambled: ["nächste", "ist", "Krankenhaus", "Wo", "das"], correct: ["Wo", "ist", "das", "nächste", "Krankenhaus"], translation: "En yakın hastane nerede?" },
        { scrambled: ["ruhig", "Sie", "Bleiben"], correct: ["Bleiben", "Sie", "ruhig"], translation: "Sakin olun!" },
      ],
    },
  },

  // ─── Modül 13: Perfekt (A2) ─────────────────────────────────────────────────
  13: {
    fillInBlank: [
      { sentence: "Ich ___ gestern Brot gegessen.", blank: "habe", translation: "Dün ekmek yedim.", hint: "essen → haben + gegessen" },
      { sentence: "Wir ___ nach Berlin gefahren.", blank: "sind", translation: "Berlin'e gittik.", hint: "fahren → sein + gefahren (hareket fiili!)" },
      { sentence: "Er ___ eine Stunde telefoniert.", blank: "hat", translation: "Bir saat telefon etti.", hint: "telefonieren → haben (ge- almaz!)" },
      { sentence: "Sie ___ früh aufgewacht.", blank: "ist", translation: "Erken uyandı.", hint: "aufwachen → sein (durum değişimi)" },
      { sentence: "Hast du das Buch ___?", blank: "gelesen", translation: "Kitabı okudun mu?", hint: "lesen → Partizip II: gelesen" },
      { sentence: "Ich ___ meinen Schlüssel verloren.", blank: "habe", translation: "Anahtarımı kaybettim.", hint: "verlieren → haben + verloren" },
      { sentence: "Wir haben lange ___.", blank: "gesprochen", translation: "Uzun süre konuştuk.", hint: "sprechen → gesprochen" },
      { sentence: "Er ist nach Hause ___.", blank: "gegangen", translation: "Eve gitti.", hint: "gehen → sein + gegangen" },
    ],
    grammar: {
      conjugations: [
        { verb: "haben (Perfekt)", pronoun: "ich", answer: "habe ... gemacht" },
        { verb: "haben (Perfekt)", pronoun: "du", answer: "hast ... gemacht" },
        { verb: "sein (Perfekt)", pronoun: "er/sie/es", answer: "ist ... gegangen" },
        { verb: "sein (Perfekt)", pronoun: "wir", answer: "sind ... gegangen" },
        { verb: "sein (Perfekt)", pronoun: "ihr", answer: "seid ... gegangen" },
        { verb: "haben (Perfekt)", pronoun: "sie/Sie", answer: "haben ... gemacht" },
      ],
      articles: [
        { word: "Partizip II (machen)", correct: "gemacht" },
        { word: "Partizip II (essen)", correct: "gegessen" },
        { word: "Partizip II (gehen)", correct: "gegangen" },
        { word: "Partizip II (kommen)", correct: "gekommen" },
        { word: "Partizip II (trinken)", correct: "getrunken" },
        { word: "Partizip II (schreiben)", correct: "geschrieben" },
      ],
      wordOrder: [
        { scrambled: ["gegessen", "habe", "Brot", "Ich"], correct: ["Ich", "habe", "Brot", "gegessen"], translation: "Ekmek yedim." },
        { scrambled: ["gefahren", "sind", "Berlin", "Wir", "nach"], correct: ["Wir", "sind", "nach", "Berlin", "gefahren"], translation: "Berlin'e gittik." },
        { scrambled: ["telefoniert", "hat", "lange", "Er"], correct: ["Er", "hat", "lange", "telefoniert"], translation: "Uzun süre telefon etti." },
        { scrambled: ["du", "Hast", "Buch", "gelesen", "das"], correct: ["Hast", "du", "das", "Buch", "gelesen"], translation: "Kitabı okudun mu?" },
      ],
    },
  },

  // ─── Modül 14: Präteritum (A2) ──────────────────────────────────────────────
  14: {
    fillInBlank: [
      { sentence: "Als Kind ___ ich sehr schüchtern.", blank: "war", translation: "Çocukken çok utangaçtım.", hint: "sein → Präteritum: war" },
      { sentence: "Früher ___ wir kein Auto.", blank: "hatten", translation: "Eskiden arabamız yoktu.", hint: "haben → Präteritum: hatte (wir → hatten)" },
      { sentence: "Er ___ nicht kommen, weil er krank war.", blank: "konnte", translation: "Hasta olduğu için gelemedi.", hint: "können → Präteritum: konnte" },
      { sentence: "Ich ___ gestern lange arbeiten.", blank: "musste", translation: "Dün uzun süre çalışmak zorunda kaldım.", hint: "müssen → Präteritum: musste" },
      { sentence: "Sie ___ einen neuen Job finden.", blank: "wollte", translation: "Yeni bir iş bulmak istedi.", hint: "wollen → Präteritum: wollte" },
      { sentence: "Damals ___ alles teurer.", blank: "war", translation: "O zamanlar her şey daha pahalıydı.", hint: "sein → war" },
      { sentence: "Als ich jung ___, lebte ich in Istanbul.", blank: "war", translation: "Gençken İstanbul'da yaşıyordum.", hint: "sein → war (als + Präteritum)" },
      { sentence: "___ er gestern hier?", blank: "War", translation: "Dün burada mıydı?", hint: "Soru cümlesi: War er...?" },
    ],
    grammar: {
      conjugations: [
        { verb: "sein (Präteritum)", pronoun: "ich", answer: "war" },
        { verb: "sein (Präteritum)", pronoun: "du", answer: "warst" },
        { verb: "sein (Präteritum)", pronoun: "er/sie/es", answer: "war" },
        { verb: "haben (Präteritum)", pronoun: "ich", answer: "hatte" },
        { verb: "können (Präteritum)", pronoun: "ich", answer: "konnte" },
        { verb: "müssen (Präteritum)", pronoun: "ich", answer: "musste" },
      ],
      articles: [
        { word: "gehen (Präteritum ich)", correct: "ging" },
        { word: "kommen (Präteritum er)", correct: "kam" },
        { word: "sehen (Präteritum sie)", correct: "sah" },
        { word: "fahren (Präteritum er)", correct: "fuhr" },
        { word: "schreiben (Präteritum ich)", correct: "schrieb" },
        { word: "sprechen (Präteritum er)", correct: "sprach" },
      ],
      wordOrder: [
        { scrambled: ["schüchtern", "war", "Kind", "Als", "sehr", "ich"], correct: ["Als", "ich", "Kind", "war", "war", "ich", "sehr", "schüchtern"], translation: "Çocukken çok utangaçtım." },
        { scrambled: ["krank", "er", "war", "weil", "konnte", "kommen", "er", "nicht"], correct: ["Er", "konnte", "nicht", "kommen", "weil", "er", "krank", "war"], translation: "Hasta olduğu için gelemedi." },
        { scrambled: ["Früher", "kein", "hatten", "Auto", "wir"], correct: ["Früher", "hatten", "wir", "kein", "Auto"], translation: "Eskiden arabamız yoktu." },
        { scrambled: ["musste", "lange", "arbeiten", "Ich", "gestern"], correct: ["Ich", "musste", "gestern", "lange", "arbeiten"], translation: "Dün uzun süre çalışmak zorundaydım." },
      ],
    },
  },

  // ─── Modül 15: Adjektiv-Deklination (A2) ────────────────────────────────────
  15: {
    fillInBlank: [
      { sentence: "Das ist ein interessant___ Buch.", blank: "es", translation: "Bu ilginç bir kitap.", hint: "belirsiz artikel + nötr → Nominativ: -es" },
      { sentence: "Er ist ein nett___ Mensch.", blank: "er", translation: "Sempatik bir insan.", hint: "belirsiz artikel + maskulin → Nominativ: -er" },
      { sentence: "Ich suche eine günstig___ Wohnung.", blank: "e", translation: "Ucuz bir daire arıyorum.", hint: "belirsiz artikel + feminin → Akkusativ: -e" },
      { sentence: "Mit dem nächst___ Bus kommen wir pünktlich.", blank: "en", translation: "Bir sonraki otobüsle tam zamanında varırız.", hint: "belirli artikel + Dativ → -en" },
      { sentence: "Das alt___ Haus ist sehr schön.", blank: "e", translation: "Eski ev çok güzel.", hint: "belirli artikel + nötr → Nominativ: -e" },
      { sentence: "Er hat einen neu___ Job.", blank: "en", translation: "Yeni bir işi var.", hint: "belirsiz artikel + maskulin → Akkusativ: -en" },
      { sentence: "Die freundlich___ Verkäuferin hilft mir.", blank: "e", translation: "Nazik satış görevlisi bana yardım ediyor.", hint: "belirli artikel + feminin → Nominativ: -e" },
      { sentence: "Wir wohnen in einer klein___ Wohnung.", blank: "en", translation: "Küçük bir dairede yaşıyoruz.", hint: "belirsiz artikel + feminin → Dativ: -en" },
    ],
    grammar: {
      conjugations: [
        { verb: "Adjektiv (belirli, Nom., mask.)", pronoun: "der alte Mann", answer: "-e" },
        { verb: "Adjektiv (belirli, Nom., fem.)", pronoun: "die alte Frau", answer: "-e" },
        { verb: "Adjektiv (belirli, Nom., nötr)", pronoun: "das alte Kind", answer: "-e" },
        { verb: "Adjektiv (belirsiz, Nom., mask.)", pronoun: "ein alter Mann", answer: "-er" },
        { verb: "Adjektiv (belirsiz, Nom., nötr)", pronoun: "ein altes Kind", answer: "-es" },
        { verb: "Adjektiv (Dativ, hepsi)", pronoun: "dem/der/einem/einer", answer: "-en" },
      ],
      articles: [
        { word: "interessant (das Buch — belirsiz Nom.)", correct: "interessantes" },
        { word: "schön (die Stadt — belirli Nom.)", correct: "schöne" },
        { word: "gut (der Mann — belirsiz Nom.)", correct: "guter" },
        { word: "alt (das Haus — belirli Nom.)", correct: "alte" },
        { word: "neu (den Tisch — belirli Akk.)", correct: "neuen" },
        { word: "klein (dem Kind — belirsiz Dat.)", correct: "kleinen" },
      ],
      wordOrder: [
        { scrambled: ["interessantes", "ist", "Das", "Buch", "ein"], correct: ["Das", "ist", "ein", "interessantes", "Buch"], translation: "Bu ilginç bir kitap." },
        { scrambled: ["suche", "eine", "Ich", "günstige", "Wohnung"], correct: ["Ich", "suche", "eine", "günstige", "Wohnung"], translation: "Ucuz bir daire arıyorum." },
        { scrambled: ["Verkäuferin", "Die", "hilft", "mir", "freundliche"], correct: ["Die", "freundliche", "Verkäuferin", "hilft", "mir"], translation: "Nazik satış görevlisi bana yardım ediyor." },
        { scrambled: ["Wohnung", "kleinen", "wohnen", "einer", "Wir", "in"], correct: ["Wir", "wohnen", "in", "einer", "kleinen", "Wohnung"], translation: "Küçük bir dairede yaşıyoruz." },
      ],
    },
  },

  // ─── Modül 16: Komparativ & Superlativ (A2) ─────────────────────────────────
  16: {
    fillInBlank: [
      { sentence: "München ist ___ als Hamburg.", blank: "teurer", translation: "Münih, Hamburg'dan daha pahalı.", hint: "teuer → Komparativ: teuer + er" },
      { sentence: "Er ist ___ als ich.", blank: "größer", translation: "O benden daha uzun.", hint: "groß → Komparativ: größer (Umlaut!)" },
      { sentence: "Sie tanzt am ___.", blank: "besten", translation: "En iyi o dans ediyor.", hint: "gut → Superlativ: am besten (düzensiz!)" },
      { sentence: "Ich trinke ___ Tee als Kaffee.", blank: "lieber", translation: "Kahveden çok çay içmeyi tercih ederim.", hint: "gern → Komparativ: lieber" },
      { sentence: "Am ___ esse ich Pizza.", blank: "liebsten", translation: "En çok pizza yemeyi severim.", hint: "gern → Superlativ: am liebsten" },
      { sentence: "Das neue Modell ist ___ und günstiger.", blank: "besser", translation: "Yeni model daha iyi ve daha ucuz.", hint: "gut → Komparativ: besser (düzensiz!)" },
      { sentence: "Er ist ___ als sein Bruder.", blank: "älter", translation: "Kardeşinden daha büyük.", hint: "alt → Komparativ: älter (Umlaut)" },
      { sentence: "Sie ist genauso groß ___ ich.", blank: "wie", translation: "Benimle aynı boyda.", hint: "Eşitlik: genauso...wie" },
    ],
    grammar: {
      conjugations: [
        { verb: "gut → Komparativ", pronoun: "gut", answer: "besser" },
        { verb: "gut → Superlativ", pronoun: "gut", answer: "am besten" },
        { verb: "viel → Komparativ", pronoun: "viel", answer: "mehr" },
        { verb: "gern → Komparativ", pronoun: "gern", answer: "lieber" },
        { verb: "groß → Komparativ", pronoun: "groß", answer: "größer" },
        { verb: "alt → Komparativ", pronoun: "alt", answer: "älter" },
      ],
      articles: [
        { word: "schnell → Komparativ", correct: "schneller" },
        { word: "klein → Komparativ", correct: "kleiner" },
        { word: "lang → Komparativ", correct: "länger" },
        { word: "kalt → Komparativ", correct: "kälter" },
        { word: "jung → Komparativ", correct: "jünger" },
        { word: "warm → Komparativ", correct: "wärmer" },
      ],
      wordOrder: [
        { scrambled: ["als", "München", "teurer", "ist", "Hamburg"], correct: ["München", "ist", "teurer", "als", "Hamburg"], translation: "Münih, Hamburg'dan daha pahalı." },
        { scrambled: ["besten", "am", "tanzt", "Sie"], correct: ["Sie", "tanzt", "am", "besten"], translation: "En iyi o dans ediyor." },
        { scrambled: ["Tee", "lieber", "trinke", "als", "Kaffee", "Ich"], correct: ["Ich", "trinke", "lieber", "Tee", "als", "Kaffee"], translation: "Kahveden çok çay içmeyi tercih ederim." },
        { scrambled: ["wie", "genauso", "ich", "groß", "Sie", "ist"], correct: ["Sie", "ist", "genauso", "groß", "wie", "ich"], translation: "Benimle aynı boyda." },
      ],
    },
  },

  // ─── Modül 17: Reflexive Verben (A2) ────────────────────────────────────────
  17: {
    fillInBlank: [
      { sentence: "Ich freue ___ auf den Urlaub!", blank: "mich", translation: "Tatili dört gözle bekliyorum!", hint: "sich freuen → ich → mich" },
      { sentence: "Wir müssen ___ beeilen!", blank: "uns", translation: "Acele etmeliyiz!", hint: "sich beeilen → wir → uns" },
      { sentence: "Bitte setzen Sie ___!", blank: "sich", translation: "Lütfen oturun!", hint: "sich setzen → Sie (resmi) → sich" },
      { sentence: "Ich interessiere ___ für Musik.", blank: "mich", translation: "Müzikle ilgileniyorum.", hint: "sich interessieren → ich → mich" },
      { sentence: "Er ärgert ___ über den Lärm.", blank: "sich", translation: "Gürültüye sinirleniyor.", hint: "sich ärgern → er → sich" },
      { sentence: "Ich erinnere ___ an die Schule.", blank: "mich", translation: "Okulu hatırlıyorum.", hint: "sich erinnern → ich → mich" },
      { sentence: "Wie fühlst du ___ heute?", blank: "dich", translation: "Bugün kendini nasıl hissediyorsun?", hint: "sich fühlen → du → dich" },
      { sentence: "Ich wasche ___ die Hände.", blank: "mir", translation: "Ellerimi yıkıyorum.", hint: "Ayrı nesne var → Dativ: mir" },
    ],
    grammar: {
      conjugations: [
        { verb: "sich freuen (Akk.)", pronoun: "ich", answer: "mich" },
        { verb: "sich freuen (Akk.)", pronoun: "du", answer: "dich" },
        { verb: "sich freuen (Akk.)", pronoun: "er/sie/es", answer: "sich" },
        { verb: "sich freuen (Akk.)", pronoun: "wir", answer: "uns" },
        { verb: "sich freuen (Akk.)", pronoun: "ihr", answer: "euch" },
        { verb: "sich freuen (Akk.)", pronoun: "sie/Sie", answer: "sich" },
      ],
      articles: [
        { word: "sich beeilen (wir)", correct: "uns beeilen" },
        { word: "sich ärgern (er)", correct: "sich ärgern" },
        { word: "sich setzen (du)", correct: "dich setzen" },
        { word: "sich treffen (ihr)", correct: "euch treffen" },
        { word: "sich erinnern (ich)", correct: "mich erinnern" },
        { word: "sich kümmern (sie/pl.)", correct: "sich kümmern" },
      ],
      wordOrder: [
        { scrambled: ["mich", "freue", "Urlaub", "Ich", "auf", "den"], correct: ["Ich", "freue", "mich", "auf", "den", "Urlaub"], translation: "Tatili dört gözle bekliyorum." },
        { scrambled: ["uns", "Wir", "beeilen", "müssen"], correct: ["Wir", "müssen", "uns", "beeilen"], translation: "Acele etmeliyiz." },
        { scrambled: ["Sie", "setzen", "sich", "Bitte"], correct: ["Bitte", "setzen", "Sie", "sich"], translation: "Lütfen oturun." },
        { scrambled: ["Hände", "mir", "wasche", "Ich", "die"], correct: ["Ich", "wasche", "mir", "die", "Hände"], translation: "Ellerimi yıkıyorum." },
      ],
    },
  },

  // ─── Modül 18: Nebensätze (A2) ──────────────────────────────────────────────
  18: {
    fillInBlank: [
      { sentence: "Ich lerne Deutsch, ___ ich in Deutschland arbeiten möchte.", blank: "weil", translation: "Almanya'da çalışmak istediğim için Almanca öğreniyorum.", hint: "'Çünkü' anlamındaki yan cümle bağlacı (fiil sona gider!)" },
      { sentence: "Ich hoffe, ___ du bald kommst.", blank: "dass", translation: "Yakında geleceğini umuyorum.", hint: "'Ki / diye' anlamındaki bağlaç" },
      { sentence: "___ ich Zeit habe, lese ich ein Buch.", blank: "Wenn", translation: "Zamanım olunca kitap okurum.", hint: "Koşul bağlacı (başa gelince virgül + ana cümle)" },
      { sentence: "___ ich jung war, wohnte ich in Ankara.", blank: "Als", translation: "Gençken Ankara'da yaşıyordum.", hint: "Geçmişteki tek seferlik durum için: als" },
      { sentence: "Ich weiß nicht, ___ er kommt.", blank: "ob", translation: "Gelip gelmeyeceğini bilmiyorum.", hint: "Dolaylı soru: mı/mi" },
      { sentence: "Ich gehe spazieren, ___ es regnet.", blank: "obwohl", translation: "Yağmur yağmasına rağmen yürüyüşe çıkıyorum.", hint: "Zıtlık bağlacı: ...rağmen" },
      { sentence: "Er kommt nicht, ___ er krank ist.", blank: "weil", translation: "Hasta olduğu için gelmiyor.", hint: "Sebep bağlacı" },
      { sentence: "Ruf mich an, ___ du ankommst.", blank: "wenn", translation: "Varınca beni ara.", hint: "Tek seferlik gelecek koşul: wenn" },
    ],
    grammar: {
      conjugations: [
        { verb: "weil + Nebensatz", pronoun: "Fiil sona gider", answer: "...weil ich krank BIN." },
        { verb: "dass + Nebensatz", pronoun: "Fiil sona gider", answer: "...dass er KOMMT." },
        { verb: "wenn + Nebensatz", pronoun: "Fiil sona gider", answer: "...wenn ich Zeit HABE." },
        { verb: "ob + Nebensatz", pronoun: "Fiil sona gider", answer: "...ob er KOMMT." },
        { verb: "obwohl + Nebensatz", pronoun: "Fiil sona gider", answer: "...obwohl es REGNET." },
        { verb: "als + Nebensatz (geçmiş)", pronoun: "Fiil sona gider", answer: "...als ich jung WAR." },
      ],
      articles: [
        { word: "çünkü (yan cümle bağlacı)", correct: "weil" },
        { word: "ki / diye", correct: "dass" },
        { word: "eğer / her ne zaman", correct: "wenn" },
        { word: "...iken (geçmiş, tek)", correct: "als" },
        { word: "olup olmadığı", correct: "ob" },
        { word: "...rağmen", correct: "obwohl" },
      ],
      wordOrder: [
        { scrambled: ["Deutsch", "lerne", "Ich", "weil", "möchte", "ich", "arbeiten", "in", "Deutschland"], correct: ["Ich", "lerne", "Deutsch", "weil", "ich", "in", "Deutschland", "arbeiten", "möchte"], translation: "Almanya'da çalışmak istediğim için Almanca öğreniyorum." },
        { scrambled: ["dass", "hoffe", "kommst", "du", "Ich", "bald"], correct: ["Ich", "hoffe", "dass", "du", "bald", "kommst"], translation: "Yakında geleceğini umuyorum." },
        { scrambled: ["ob", "weiß", "kommt", "Ich", "nicht", "er"], correct: ["Ich", "weiß", "nicht", "ob", "er", "kommt"], translation: "Gelip gelmeyeceğini bilmiyorum." },
        { scrambled: ["an", "wenn", "Ruf", "mich", "ankommst", "du"], correct: ["Ruf", "mich", "an", "wenn", "du", "ankommst"], translation: "Varınca beni ara." },
      ],
    },
  },

  // ─── Modül 19: Wechselpräpositionen (A2) ────────────────────────────────────
  19: {
    fillInBlank: [
      { sentence: "Das Buch liegt ___ dem Tisch.", blank: "auf", translation: "Kitap masada duruyor.", hint: "Üstünde (konum) → auf + Dativ" },
      { sentence: "Ich gehe ___ den Supermarkt.", blank: "in", translation: "Süpermarkete gidiyorum.", hint: "İçine hareket → in + Akkusativ" },
      { sentence: "Die Katze sitzt ___ dem Stuhl.", blank: "unter", translation: "Kedi sandalyenin altında oturuyor.", hint: "Altında (konum) → unter + Dativ" },
      { sentence: "Stell die Flasche ___ den Tisch.", blank: "auf", translation: "Şişeyi masanın üstüne koy.", hint: "Üstüne koyma (hareket) → auf + Akkusativ" },
      { sentence: "Er wartet ___ dem Kino.", blank: "vor", translation: "Sinema önünde bekliyor.", hint: "Önünde (konum) → vor + Dativ" },
      { sentence: "Das Café ist ___ der Bank.", blank: "neben", translation: "Kafe bankanın yanında.", hint: "Yanında (konum) → neben + Dativ" },
      { sentence: "Ich hänge das Bild ___ die Wand.", blank: "an", translation: "Tabloyu duvara asıyorum.", hint: "Duvara asmak (hareket) → an + Akkusativ" },
      { sentence: "Wir sind ___ Kino gegangen.", blank: "ins", translation: "Sinemaya gittik.", hint: "in + das = ins (Akkusativ — hareket)" },
    ],
    grammar: {
      conjugations: [
        { verb: "Wo? (konum)", pronoun: "→ Dativ", answer: "Das Buch liegt AUF DEM Tisch." },
        { verb: "Wohin? (hareket)", pronoun: "→ Akkusativ", answer: "Ich lege das Buch AUF DEN Tisch." },
        { verb: "stehen (konum fiili)", pronoun: "Dativ", answer: "Die Vase steht auf dem Regal." },
        { verb: "stellen (hareket fiili)", pronoun: "Akkusativ", answer: "Ich stelle die Vase auf das Regal." },
        { verb: "liegen (konum fiili)", pronoun: "Dativ", answer: "Das Buch liegt auf dem Tisch." },
        { verb: "legen (hareket fiili)", pronoun: "Akkusativ", answer: "Ich lege das Buch auf den Tisch." },
      ],
      articles: [
        { word: "in + dem (kontrakt.)", correct: "im" },
        { word: "in + das (kontrakt.)", correct: "ins" },
        { word: "an + dem (kontrakt.)", correct: "am" },
        { word: "an + das (kontrakt.)", correct: "ans" },
        { word: "vor + dem (Dativ)", correct: "vor dem" },
        { word: "neben + der (Dativ, fem.)", correct: "neben der" },
      ],
      wordOrder: [
        { scrambled: ["Tisch", "liegt", "dem", "Das", "Buch", "auf"], correct: ["Das", "Buch", "liegt", "auf", "dem", "Tisch"], translation: "Kitap masada duruyor." },
        { scrambled: ["Supermarkt", "in", "den", "Ich", "gehe"], correct: ["Ich", "gehe", "in", "den", "Supermarkt"], translation: "Süpermarkete gidiyorum." },
        { scrambled: ["Bild", "die", "Ich", "an", "Wand", "hänge", "das"], correct: ["Ich", "hänge", "das", "Bild", "an", "die", "Wand"], translation: "Tabloyu duvara asıyorum." },
        { scrambled: ["Kino", "vor", "dem", "wartet", "Er"], correct: ["Er", "wartet", "vor", "dem", "Kino"], translation: "Sinema önünde bekliyor." },
      ],
    },
  },

  // ─── Modül 20: Konjunktiv II (A2) ───────────────────────────────────────────
  20: {
    fillInBlank: [
      { sentence: "Ich ___ gerne reisen.", blank: "würde", translation: "Seyahat etmeyi çok isterdim.", hint: "würde + Infinitiv (Konjunktiv II kalıbı)" },
      { sentence: "Das ___ wirklich toll!", blank: "wäre", translation: "Bu gerçekten harika olurdu!", hint: "sein → Konjunktiv II: wäre" },
      { sentence: "Ich ___ gerne mehr Zeit.", blank: "hätte", translation: "Daha fazla zamanım olmasını isterdim.", hint: "haben → Konjunktiv II: hätte" },
      { sentence: "___ Sie mir bitte helfen?", blank: "Könnten", translation: "Bana yardım edebilir misiniz lütfen?", hint: "können → Konjunktiv II: könnte (Sie → Könnten)" },
      { sentence: "Wenn ich Geld ___, würde ich reisen.", blank: "hätte", translation: "Param olsaydı seyahat ederdim.", hint: "haben → Konjunktiv II: hätte (wenn-Satz)" },
      { sentence: "Ich ___ lieber zu Hause bleiben.", blank: "würde", translation: "Evde kalmayı tercih ederim.", hint: "würde + gerne/lieber + Infinitiv" },
      { sentence: "___ ich kurz fragen?", blank: "Dürfte", translation: "Kısaca sorsam olur mu?", hint: "dürfen → Konjunktiv II: dürfte" },
      { sentence: "Ich ___ eigentlich arbeiten, aber ich bin müde.", blank: "müsste", translation: "Aslında çalışmam gerekirdi ama yorgunum.", hint: "müssen → Konjunktiv II: müsste" },
    ],
    grammar: {
      conjugations: [
        { verb: "würde (ich)", pronoun: "ich", answer: "würde" },
        { verb: "würde (du)", pronoun: "du", answer: "würdest" },
        { verb: "würde (er/sie)", pronoun: "er/sie/es", answer: "würde" },
        { verb: "sein → Konj. II (ich)", pronoun: "ich", answer: "wäre" },
        { verb: "haben → Konj. II (ich)", pronoun: "ich", answer: "hätte" },
        { verb: "können → Konj. II (Sie)", pronoun: "Sie", answer: "könnten" },
      ],
      articles: [
        { word: "sein → Konjunktiv II (ich)", correct: "wäre" },
        { word: "haben → Konjunktiv II (wir)", correct: "hätten" },
        { word: "können → Konjunktiv II (ich)", correct: "könnte" },
        { word: "müssen → Konjunktiv II (ich)", correct: "müsste" },
        { word: "dürfen → Konjunktiv II (ich)", correct: "dürfte" },
        { word: "wollen → Konjunktiv II (ich)", correct: "wollte" },
      ],
      wordOrder: [
        { scrambled: ["reisen", "würde", "gerne", "Ich"], correct: ["Ich", "würde", "gerne", "reisen"], translation: "Seyahat etmeyi çok isterdim." },
        { scrambled: ["helfen", "Sie", "bitte", "Könnten", "mir"], correct: ["Könnten", "Sie", "mir", "bitte", "helfen"], translation: "Bana yardım edebilir misiniz lütfen?" },
        { scrambled: ["hätte", "reisen", "Geld", "würde", "Wenn", "ich", "ich"], correct: ["Wenn", "ich", "Geld", "hätte", "würde", "ich", "reisen"], translation: "Param olsaydı seyahat ederdim." },
        { scrambled: ["wäre", "toll", "Das", "wirklich"], correct: ["Das", "wäre", "wirklich", "toll"], translation: "Bu gerçekten harika olurdu." },
      ],
    },
  },

  // ─── Modül 21: Berufe & Arbeitswelt (A2) ────────────────────────────────────
  21: {
    fillInBlank: [
      { sentence: "Ich ___ Arzt.", blank: "bin", translation: "Doktorum.", hint: "Meslek ifadesinde artikel yok! sein → ich bin" },
      { sentence: "Er arbeitet ___ Ingenieur.", blank: "als", translation: "Mühendis olarak çalışıyor.", hint: "Meslek + als: arbeiten als ..." },
      { sentence: "Ich habe eine ___ geschrieben.", blank: "Bewerbung", translation: "İş başvurusu yazdım.", hint: "İş başvurusu" },
      { sentence: "Morgen habe ich ein ___.", blank: "Vorstellungsgespräch", translation: "Yarın iş görüşmem var.", hint: "İş görüşmesi" },
      { sentence: "Das ___ ist leider nicht sehr hoch.", blank: "Gehalt", translation: "Maaş ne yazık ki çok yüksek değil.", hint: "Maaş" },
      { sentence: "Ich ___ mich um die Stelle beworben.", blank: "habe", translation: "Pozisyon için başvurdum.", hint: "sich bewerben → Perfekt: habe...beworben" },
      { sentence: "Meine ___ sind sehr nett.", blank: "Kollegen", translation: "Meslektaşlarım çok nazik.", hint: "Meslektaş çoğulu" },
      { sentence: "Heute mache ich ___.", blank: "Überstunden", translation: "Bugün fazla mesai yapıyorum.", hint: "Fazla mesai" },
    ],
    grammar: {
      conjugations: [
        { verb: "werden (Futur I — ich)", pronoun: "ich", answer: "werde" },
        { verb: "werden (Futur I — du)", pronoun: "du", answer: "wirst" },
        { verb: "werden (Futur I — er/sie)", pronoun: "er/sie/es", answer: "wird" },
        { verb: "werden (Futur I — wir)", pronoun: "wir", answer: "werden" },
        { verb: "werden (Futur I — ihr)", pronoun: "ihr", answer: "werdet" },
        { verb: "werden (Futur I — sie/Sie)", pronoun: "sie/Sie", answer: "werden" },
      ],
      articles: [
        { word: "Arzt", correct: "der" },
        { word: "Ärztin", correct: "die" },
        { word: "Lehrer", correct: "der" },
        { word: "Bewerbung", correct: "die" },
        { word: "Gehalt", correct: "das" },
        { word: "Vorstellungsgespräch", correct: "das" },
      ],
      wordOrder: [
        { scrambled: ["bin", "Ich", "Arzt"], correct: ["Ich", "bin", "Arzt"], translation: "Doktorum." },
        { scrambled: ["als", "Er", "arbeitet", "Ingenieur"], correct: ["Er", "arbeitet", "als", "Ingenieur"], translation: "Mühendis olarak çalışıyor." },
        { scrambled: ["Vorstellungsgespräch", "habe", "ein", "Morgen", "ich"], correct: ["Morgen", "habe", "ich", "ein", "Vorstellungsgespräch"], translation: "Yarın iş görüşmem var." },
        { scrambled: ["Stelle", "um", "beworben", "die", "mich", "Ich", "habe"], correct: ["Ich", "habe", "mich", "um", "die", "Stelle", "beworben"], translation: "Pozisyon için başvurdum." },
      ],
    },
  },

  // ─── Modül 22: Urlaub & Freizeit (A2) ───────────────────────────────────────
  22: {
    fillInBlank: [
      { sentence: "Letzten Sommer ___ ich nach Portugal geflogen.", blank: "bin", translation: "Geçen yaz Portekiz'e uçtum.", hint: "fliegen → sein (hareket!)" },
      { sentence: "Ich möchte ein Zimmer ___.", blank: "reservieren", translation: "Oda rezervasyonu yapmak istiyorum.", hint: "Rezervasyon yapmak: rezervieren" },
      { sentence: "Der Zug hat 20 Minuten ___.", blank: "Verspätung", translation: "Trenin 20 dakika gecikmesi var.", hint: "Gecikme" },
      { sentence: "Wir ___ das Schloss besichtigt.", blank: "haben", translation: "Şatoyu gezdik.", hint: "besichtigen → haben (Perfekt)" },
      { sentence: "Was kann man hier ___?", blank: "besichtigen", translation: "Burada ne gibi yerler gezebiliriz?", hint: "Turistik gezme fiili" },
      { sentence: "Ich packe meinen ___.", blank: "Koffer", translation: "Bavulumu topluyorum.", hint: "Bavul" },
      { sentence: "Vergiss nicht deinen ___!", blank: "Reisepass", translation: "Pasaportunu unutma!", hint: "Pasaport" },
      { sentence: "Am Wochenende gehe ich gerne ___.", blank: "wandern", translation: "Hafta sonları yürüyüşe çıkmayı severim.", hint: "gehen + wandern (Infinitiv)" },
    ],
    grammar: {
      conjugations: [
        { verb: "fliegen (Perfekt — ich)", pronoun: "ich", answer: "bin geflogen" },
        { verb: "fahren (Perfekt — wir)", pronoun: "wir", answer: "sind gefahren" },
        { verb: "besichtigen (Perfekt — wir)", pronoun: "wir", answer: "haben besichtigt" },
        { verb: "reservieren (Perfekt — ich)", pronoun: "ich", answer: "habe reserviert" },
        { verb: "machen Urlaub (Futur — wir)", pronoun: "wir", answer: "werden Urlaub machen" },
        { verb: "wandern (Präsens — ich)", pronoun: "ich", answer: "gehe wandern" },
      ],
      articles: [
        { word: "Flughafen", correct: "der" },
        { word: "Koffer", correct: "der" },
        { word: "Reisepass", correct: "der" },
        { word: "Unterkunft", correct: "die" },
        { word: "Museum", correct: "das" },
        { word: "Sehenswürdigkeit", correct: "die" },
      ],
      wordOrder: [
        { scrambled: ["Portugal", "geflogen", "ich", "nach", "Sommer", "Letzten", "bin"], correct: ["Letzten", "Sommer", "bin", "ich", "nach", "Portugal", "geflogen"], translation: "Geçen yaz Portekiz'e uçtum." },
        { scrambled: ["Zimmer", "möchte", "Ich", "reservieren", "ein"], correct: ["Ich", "möchte", "ein", "Zimmer", "reservieren"], translation: "Oda rezervasyonu yapmak istiyorum." },
        { scrambled: ["Reisepass", "nicht", "Vergiss", "deinen"], correct: ["Vergiss", "nicht", "deinen", "Reisepass"], translation: "Pasaportunu unutma!" },
        { scrambled: ["Wochenende", "gerne", "Am", "wandern", "ich", "gehe"], correct: ["Am", "Wochenende", "gehe", "ich", "gerne", "wandern"], translation: "Hafta sonları yürüyüşe çıkmayı severim." },
      ],
    },
  },
};
