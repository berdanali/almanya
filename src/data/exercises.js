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
};
