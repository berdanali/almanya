// src/data/conversations.js — Dallanan konuşma senaryoları

export const conversations = [
  // ──────────── A1 ────────────
  {
    id: "c1",
    titleDE: "Im Café bestellen",
    titleTR: "Kafede Sipariş Vermek",
    emoji: "☕",
    character: { name: "Barista Lisa", emoji: "☕" },
    level: "A1",
    xp: 60,
    tag: "Günlük Hayat",
    startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Was darf ich Ihnen bringen?",
        tr: "İyi günler! Size ne getirebilirim?",
        options: [
          { text: "Einen Kaffee, bitte.", tr: "Bir kahve, lütfen.", next: "coffee_how" },
          { text: "Ich hätte gern einen Tee.", tr: "Bir çay istiyorum.", next: "tea_which" },
          { text: "Was empfehlen Sie heute?", tr: "Bugün ne tavsiye edersiniz?", next: "recommendation" },
        ],
      },
      coffee_how: {
        ai: "Möchten Sie den Kaffee mit Milch oder lieber schwarz?",
        tr: "Kahveyi sütlü mü yoksa sade mi istersiniz?",
        options: [
          { text: "Schwarz, ohne Zucker.", tr: "Sade, şekersiz.", next: "coffee_size" },
          { text: "Mit Milch, bitte.", tr: "Sütlü, lütfen.", next: "coffee_size" },
          { text: "Mit Hafermilch, wenn möglich.", tr: "Mümkünse yulaf sütüyle.", next: "coffee_size" },
        ],
      },
      tea_which: {
        ai: "Natürlich! Schwarztee, grüner Tee oder Kamillentee?",
        tr: "Tabii! Siyah çay, yeşil çay mı yoksa papatya çayı mı?",
        options: [
          { text: "Schwarztee mit Zitrone, bitte.", tr: "Limonlu siyah çay, lütfen.", next: "snack_offer" },
          { text: "Grünen Tee, ohne alles.", tr: "Yeşil çay, sade.", next: "snack_offer" },
          { text: "Kamillentee — ich bin erkältet.", tr: "Papatya çayı — nezleyim.", next: "tea_sick" },
        ],
      },
      tea_sick: {
        ai: "Oh, gute Besserung! Kamillentee ist perfekt. Möchten Sie Honig dazu?",
        tr: "Oh, geçmiş olsun! Papatya çayı mükemmel. Yanına bal ister misiniz?",
        options: [
          { text: "Ja, gerne! Danke.", tr: "Evet, memnuniyetle! Teşekkürler.", next: "snack_offer" },
          { text: "Nein danke, ohne Honig.", tr: "Hayır teşekkürler, balsız.", next: "snack_offer" },
        ],
      },
      recommendation: {
        ai: "Unser Cappuccino ist heute sehr beliebt! Und wir haben frischen Zitronenkuchen.",
        tr: "Kapuçinomuz bugün çok popüler! Ve taze limon kekimiz var.",
        options: [
          { text: "Dann nehme ich den Cappuccino.", tr: "O zaman kapuçino alıyorum.", next: "snack_offer" },
          { text: "Cappuccino und Kuchen bitte!", tr: "Kapuçino ve kek lütfen!", next: "payment" },
          { text: "Nur ein Glas Wasser, danke.", tr: "Sadece bir bardak su, teşekkürler.", next: "water_free" },
        ],
      },
      water_free: {
        ai: "Natürlich! Wasser ist bei uns kostenlos. Ich bringe es sofort!",
        tr: "Tabii! Su bizde ücretsiz. Hemen getiriyorum!",
        options: [],
        isEnd: true,
        result: "success",
      },
      coffee_size: {
        ai: "Super! Klein, mittel oder groß?",
        tr: "Harika! Küçük, orta mı yoksa büyük mü?",
        options: [
          { text: "Klein, bitte.", tr: "Küçük, lütfen.", next: "snack_offer" },
          { text: "Mittel, danke.", tr: "Orta, teşekkürler.", next: "snack_offer" },
          { text: "Groß, bitte.", tr: "Büyük, lütfen.", next: "snack_offer" },
        ],
      },
      snack_offer: {
        ai: "Sehr gut! Möchten Sie dazu etwas essen? Wir haben Kuchen und Croissants.",
        tr: "Çok güzel! Yanında bir şeyler yemek ister misiniz? Kek ve kruasanımız var.",
        options: [
          { text: "Ja, ein Stück Kuchen bitte.", tr: "Evet, bir dilim kek lütfen.", next: "payment" },
          { text: "Ein Croissant, danke.", tr: "Bir kruasan, teşekkürler.", next: "payment" },
          { text: "Nein danke, nur das Getränk.", tr: "Hayır teşekkürler, sadece içecek.", next: "payment" },
        ],
      },
      payment: {
        ai: "Das macht 4 Euro 50. Bar oder mit Karte?",
        tr: "4 Euro 50 yapıyor. Nakit mi yoksa kartla mı?",
        options: [
          { text: "Mit Karte, bitte.", tr: "Kartla, lütfen.", next: "end_card" },
          { text: "Bar. Hier sind fünf Euro.", tr: "Nakit. İşte beş euro.", next: "end_cash" },
        ],
      },
      end_card: {
        ai: "Danke schön! Schönen Tag noch und genießen Sie Ihren Aufenthalt!",
        tr: "Çok teşekkürler! İyi günler ve keyifli vakit geçirin!",
        options: [],
        isEnd: true,
        result: "success",
      },
      end_cash: {
        ai: "Danke! Hier sind 50 Cent zurück. Genießen Sie es!",
        tr: "Teşekkürler! İşte 50 cent üstünüz. Afiyet olsun!",
        options: [],
        isEnd: true,
        result: "success",
      },
    },
  },

  {
    id: "c2",
    titleDE: "Im Supermarkt einkaufen",
    titleTR: "Süpermarkette Alışveriş",
    emoji: "🛒",
    character: { name: "Kassiererin Mia", emoji: "🛒" },
    level: "A1",
    xp: 60,
    tag: "Alışveriş",
    startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Kann ich Ihnen helfen?",
        tr: "Merhaba! Size yardımcı olabilir miyim?",
        options: [
          { text: "Ja, wo finde ich die Milch?", tr: "Evet, sütü nerede bulabilirim?", next: "milk_direction" },
          { text: "Entschuldigung, haben Sie frisches Brot?", tr: "Afedersiniz, taze ekmeğiniz var mı?", next: "bread" },
          { text: "Ich suche den Käse.", tr: "Peyniri arıyorum.", next: "cheese" },
        ],
      },
      milk_direction: {
        ai: "Die Milch finden Sie im hinteren Teil des Ladens, neben den Eiern im Kühlregal.",
        tr: "Sütü mağazanın arka kısmında, soğutma rafındaki yumurtaların yanında bulursunuz.",
        options: [
          { text: "Danke! Und wo sind die Eier?", tr: "Teşekkürler! Yumurtalar nerede?", next: "eggs" },
          { text: "Vielen Dank, ich schaue mal.", tr: "Çok teşekkürler, bir bakayım.", next: "price_check" },
        ],
      },
      eggs: {
        ai: "Die Eier sind direkt dabei — Kühlregal Nummer drei.",
        tr: "Yumurtalar hemen yanında — soğutma rafı numara üç.",
        options: [
          { text: "Was kosten die Eier?", tr: "Yumurtalar ne kadar?", next: "price_eggs" },
          { text: "Danke sehr, ich finde es!", tr: "Çok teşekkürler, bulabilirim!", next: "price_check" },
        ],
      },
      price_eggs: {
        ai: "Ein Sechserpack kostet 1,99 Euro. Bio-Eier sind 2,49 Euro.",
        tr: "Altılı paket 1,99 Euro. Organik yumurtalar 2,49 Euro.",
        options: [
          { text: "Ich nehme die normalen Eier.", tr: "Normal yumurtaları alıyorum.", next: "price_check" },
          { text: "Bio ist besser! Ich nehme Bio.", tr: "Organik daha iyi! Organik alıyorum.", next: "price_check" },
        ],
      },
      bread: {
        ai: "Ja! Frisch gebacken. Wir haben Weißbrot, Vollkornbrot und Brezeln.",
        tr: "Evet! Taze pişmiş. Beyaz ekmek, tam buğday ekmeği ve simit vardır.",
        options: [
          { text: "Ein Vollkornbrot, bitte.", tr: "Bir tam buğday ekmeği, lütfen.", next: "price_check" },
          { text: "Zwei Brezeln, bitte.", tr: "İki simit, lütfen.", next: "price_check" },
          { text: "Was kostet das Weißbrot?", tr: "Beyaz ekmek ne kadar?", next: "bread_price" },
        ],
      },
      bread_price: {
        ai: "Das Weißbrot kostet 1,20 Euro. Möchten Sie eines?",
        tr: "Beyaz ekmek 1,20 Euro. Bir tane ister misiniz?",
        options: [
          { text: "Ja, ein Brot bitte.", tr: "Evet, bir ekmek lütfen.", next: "price_check" },
          { text: "Nein danke, zu teuer.", tr: "Hayır teşekkürler, biraz pahalı.", next: "price_check" },
        ],
      },
      cheese: {
        ai: "Welchen Käse suchen Sie? Wir haben Gouda, Emmentaler und Feta.",
        tr: "Hangi peyniri arıyorsunuz? Gouda, Emmental ve Feta peynirlerimiz var.",
        options: [
          { text: "Gouda bitte, 200 Gramm.", tr: "Gouda lütfen, 200 gram.", next: "price_check" },
          { text: "Feta für meinen Salat.", tr: "Salatam için feta peyniri.", next: "price_check" },
        ],
      },
      price_check: {
        ai: "Haben Sie alles gefunden? Kommen Sie zur Kasse, wenn Sie fertig sind!",
        tr: "Her şeyi buldunuz mu? Hazır olunca kasaya gelin!",
        options: [
          { text: "Ja, ich bin fertig. Danke!", tr: "Evet, hazırım. Teşekkürler!", next: "checkout" },
          { text: "Noch nicht — ich brauche auch Tomaten.", tr: "Henüz değil — domates de lazım.", next: "tomatoes" },
        ],
      },
      tomatoes: {
        ai: "Tomaten finden Sie im Obst- und Gemüsebereich, ganz vorne links.",
        tr: "Domatesleri meyve ve sebze bölümünde, en önde solda bulursunuz.",
        options: [
          { text: "Super, danke! Dann bin ich fertig.", tr: "Harika, teşekkürler! O zaman bittim.", next: "checkout" },
        ],
      },
      checkout: {
        ai: "Das macht insgesamt 8 Euro 70. Haben Sie eine Kundenkarte?",
        tr: "Toplam 8 Euro 70 yapıyor. Müşteri kartınız var mı?",
        options: [
          { text: "Ja, hier ist meine Karte.", tr: "Evet, işte kartım.", next: "end_loyalty" },
          { text: "Nein, ich habe keine.", tr: "Hayır, yok.", next: "end_pay" },
        ],
      },
      end_loyalty: {
        ai: "Super! Sie sparen 50 Cent. Danke und auf Wiedersehen!",
        tr: "Süper! 50 cent tasarruf ediyorsunuz. Teşekkürler ve güle güle!",
        options: [],
        isEnd: true,
        result: "success",
      },
      end_pay: {
        ai: "Kein Problem! Das macht 8 Euro 70. Danke und auf Wiedersehen!",
        tr: "Sorun değil! 8 Euro 70 yapıyor. Teşekkürler ve güle güle!",
        options: [],
        isEnd: true,
        result: "success",
      },
    },
  },

  {
    id: "c3",
    titleDE: "Am Bahnhof — Ticket kaufen",
    titleTR: "Tren İstasyonunda — Bilet Almak",
    emoji: "🚂",
    character: { name: "Schalterbeamtin Petra", emoji: "🎫" },
    level: "A1",
    xp: 70,
    tag: "Ulaşım",
    startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Wohin möchten Sie fahren?",
        tr: "İyi günler! Nereye gitmek istiyorsunuz?",
        options: [
          { text: "Einen Fahrschein nach München, bitte.", tr: "Münih'e bir bilet, lütfen.", next: "munich_when" },
          { text: "Gibt es einen Zug nach Berlin?", tr: "Berlin'e tren var mı?", next: "berlin_info" },
          { text: "Nach Hamburg — wie viel kostet das?", tr: "Hamburg'a — bu ne kadar?", next: "hamburg_price" },
        ],
      },
      munich_when: {
        ai: "Wann möchten Sie fahren — heute oder morgen?",
        tr: "Ne zaman gitmek istiyorsunuz — bugün mü yarın mı?",
        options: [
          { text: "Heute, so bald wie möglich.", tr: "Bugün, mümkün olduğunca erken.", next: "munich_class" },
          { text: "Morgen früh um 8 Uhr.", tr: "Yarın sabah saat 8'de.", next: "munich_class" },
        ],
      },
      munich_class: {
        ai: "Erste oder zweite Klasse?",
        tr: "Birinci mi yoksa ikinci sınıf mı?",
        options: [
          { text: "Zweite Klasse, bitte.", tr: "İkinci sınıf, lütfen.", next: "munich_return" },
          { text: "Was kostet erste Klasse?", tr: "Birinci sınıf ne kadar?", next: "munich_price_first" },
        ],
      },
      munich_price_first: {
        ai: "Erste Klasse kostet 89 Euro, zweite Klasse 52 Euro.",
        tr: "Birinci sınıf 89 Euro, ikinci sınıf 52 Euro.",
        options: [
          { text: "Dann zweite Klasse, danke.", tr: "O zaman ikinci sınıf, teşekkürler.", next: "munich_return" },
          { text: "Erste Klasse, bitte — kein Problem!", tr: "Birinci sınıf, lütfen — sorun değil!", next: "munich_return" },
        ],
      },
      munich_return: {
        ai: "Einfache Fahrt oder Hin- und Rückfahrt?",
        tr: "Tek yön mü yoksa gidiş-dönüş mü?",
        options: [
          { text: "Einfache Fahrt, bitte.", tr: "Tek yön, lütfen.", next: "seat_res" },
          { text: "Hin- und Rückfahrt.", tr: "Gidiş-dönüş.", next: "seat_res" },
        ],
      },
      berlin_info: {
        ai: "Ja! Nächster Zug nach Berlin fährt um 14:30 Uhr. Einfache Fahrt?",
        tr: "Evet! Berlin'e sonraki tren 14:30'da kalkıyor. Tek yön mü?",
        options: [
          { text: "Ja, einfache Fahrt bitte.", tr: "Evet, tek yön lütfen.", next: "seat_res" },
          { text: "Gibt es etwas früher?", tr: "Daha erken bir şey var mı?", next: "berlin_earlier" },
        ],
      },
      berlin_earlier: {
        ai: "Um 12:15 Uhr gibt es auch einen Zug.",
        tr: "12:15'te de bir tren var.",
        options: [
          { text: "12:15 ist besser, bitte.", tr: "12:15 daha iyi, lütfen.", next: "seat_res" },
          { text: "Ich nehme doch 14:30 Uhr.", tr: "Yine de 14:30'u alıyorum.", next: "seat_res" },
        ],
      },
      hamburg_price: {
        ai: "Hamburg einfach kostet 38 Euro, Hin- und Rückfahrt 65 Euro.",
        tr: "Hamburg tek yön 38 Euro, gidiş-dönüş 65 Euro.",
        options: [
          { text: "Einfache Fahrt, bitte.", tr: "Tek yön, lütfen.", next: "seat_res" },
          { text: "Hin- und Rückfahrt, bitte.", tr: "Gidiş-dönüş, lütfen.", next: "seat_res" },
        ],
      },
      seat_res: {
        ai: "Möchten Sie auch eine Sitzplatzreservierung? Kostet 3 Euro 50 extra.",
        tr: "Ayrıca koltuk rezervasyonu da ister misiniz? 3 Euro 50 ek ücret.",
        options: [
          { text: "Ja, am Fenster bitte.", tr: "Evet, pencere kenarı lütfen.", next: "payment" },
          { text: "Nein danke, nicht nötig.", tr: "Hayır teşekkürler, gerekmez.", next: "payment" },
        ],
      },
      payment: {
        ai: "Das macht 52 Euro. Wie möchten Sie bezahlen?",
        tr: "52 Euro yapıyor. Nasıl ödemek istersiniz?",
        options: [
          { text: "Mit EC-Karte.", tr: "EC kart ile.", next: "end_good" },
          { text: "Bar, hier sind 60 Euro.", tr: "Nakit, işte 60 euro.", next: "end_cash" },
        ],
      },
      end_good: {
        ai: "Bitte sehr! Hier ist Ihr Ticket. Gute Reise!",
        tr: "Buyurun! İşte biletiniz. İyi yolculuklar!",
        options: [],
        isEnd: true,
        result: "success",
      },
      end_cash: {
        ai: "Danke! Hier sind 8 Euro zurück und Ihr Ticket. Gute Reise!",
        tr: "Teşekkürler! İşte 8 Euro üstünüz ve biletiniz. İyi yolculuklar!",
        options: [],
        isEnd: true,
        result: "success",
      },
    },
  },

  {
    id: "c4",
    titleDE: "Im Hotel einchecken",
    titleTR: "Otelde Giriş Yapmak",
    emoji: "🏨",
    character: { name: "Rezeptionist Thomas", emoji: "🔑" },
    level: "A1",
    xp: 65,
    tag: "Seyahat",
    startNode: "start",
    nodes: {
      start: {
        ai: "Willkommen im Hotel Sonnenschein! Haben Sie eine Reservierung?",
        tr: "Hotel Sonnenschein'a hoş geldiniz! Rezervasyonunuz var mı?",
        options: [
          { text: "Ja, auf den Namen Berdan.", tr: "Evet, Berdan adına.", next: "find_res" },
          { text: "Nein, ich habe kein Zimmer reserviert.", tr: "Hayır, oda rezervasyonum yok.", next: "no_res" },
        ],
      },
      find_res: {
        ai: "Einen Moment... Ja! Ein Einzelzimmer für zwei Nächte. Stimmt das?",
        tr: "Bir dakika... Evet! İki gecelik tek kişilik oda. Doğru mu?",
        options: [
          { text: "Ja, genau.", tr: "Evet, aynen.", next: "check_id" },
          { text: "Nein, ich habe ein Doppelzimmer gebucht.", tr: "Hayır, çift kişilik oda ayırtmıştım.", next: "fix_room" },
        ],
      },
      fix_room: {
        ai: "Oh, Entschuldigung! Ja, hier — ein Doppelzimmer. Alles klar!",
        tr: "Oh, özür dilerim! Evet, işte — çift kişilik oda. Her şey tamam!",
        options: [
          { text: "Danke!", tr: "Teşekkürler!", next: "check_id" },
        ],
      },
      no_res: {
        ai: "Kein Problem! Wir haben noch Zimmer frei. Wie viele Nächte?",
        tr: "Sorun değil! Hâlâ boş odamız var. Kaç gece?",
        options: [
          { text: "Eine Nacht, bitte.", tr: "Bir gece, lütfen.", next: "room_type" },
          { text: "Drei Nächte.", tr: "Üç gece.", next: "room_type" },
        ],
      },
      room_type: {
        ai: "Einzel- oder Doppelzimmer? Mit Frühstück kostet es 10 Euro mehr.",
        tr: "Tek mi çift kişilik mi? Kahvaltı dahil 10 Euro daha fazla.",
        options: [
          { text: "Einzelzimmer mit Frühstück.", tr: "Kahvaltı dahil tek kişilik.", next: "check_id" },
          { text: "Doppelzimmer, ohne Frühstück.", tr: "Kahvaltısız çift kişilik.", next: "check_id" },
        ],
      },
      check_id: {
        ai: "Darf ich bitte Ihren Ausweis oder Reisepass sehen?",
        tr: "Kimliğinizi veya pasaportunuzu görebilir miyim lütfen?",
        options: [
          { text: "Natürlich, hier ist mein Pass.", tr: "Tabii, işte pasaportum.", next: "extras" },
        ],
      },
      extras: {
        ai: "Danke! Brauchen Sie das WLAN-Passwort oder einen Parkplatz?",
        tr: "Teşekkürler! WiFi şifresi veya otopark gerekli mi?",
        options: [
          { text: "Das WLAN-Passwort, bitte.", tr: "WiFi şifresini lütfen.", next: "wifi" },
          { text: "Einen Parkplatz, bitte.", tr: "Otopark lütfen.", next: "parking" },
          { text: "Nein danke, nichts davon.", tr: "Hayır teşekkürler.", next: "breakfast_ask" },
        ],
      },
      wifi: {
        ai: "Das WLAN-Passwort ist: Sonnenschein2025. Noch etwas?",
        tr: "WiFi şifresi: Sonnenschein2025. Başka bir şey?",
        options: [
          { text: "Wann ist das Frühstück?", tr: "Kahvaltı ne zaman?", next: "breakfast_time" },
          { text: "Nein, danke. Wo ist Zimmer 305?", tr: "Hayır, teşekkürler. 305 nerede?", next: "room_key" },
        ],
      },
      parking: {
        ai: "Der Parkplatz ist hinter dem Hotel — 5 Euro pro Nacht.",
        tr: "Otopark otel arkasında — gecelik 5 Euro.",
        options: [
          { text: "Gut, danke.", tr: "Güzel, teşekkürler.", next: "breakfast_ask" },
        ],
      },
      breakfast_ask: {
        ai: "Das Frühstück ist von 7 bis 10 Uhr im Erdgeschoss.",
        tr: "Kahvaltı sabah 7'den 10'a kadar zemin katta.",
        options: [
          { text: "Super, danke!", tr: "Harika, teşekkürler!", next: "room_key" },
        ],
      },
      breakfast_time: {
        ai: "Von 7 bis 10 Uhr, im Erdgeschoss rechts.",
        tr: "Sabah 7'den 10'a kadar, zemin katta sağ tarafta.",
        options: [
          { text: "Perfekt, danke!", tr: "Mükemmel, teşekkürler!", next: "room_key" },
        ],
      },
      room_key: {
        ai: "Hier ist Ihr Schlüssel — Zimmer 305, dritter Stock. Schönen Aufenthalt!",
        tr: "İşte anahtarınız — 305 numaralı oda, üçüncü kat. İyi konaklamalar!",
        options: [],
        isEnd: true,
        result: "success",
      },
    },
  },

  {
    id: "c5",
    titleDE: "Beim Arzt — Krankmeldung",
    titleTR: "Doktorda — Hasta Şikayeti",
    emoji: "🩺",
    character: { name: "Dr. Müller", emoji: "🩺" },
    level: "A1",
    xp: 75,
    tag: "Sağlık",
    startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Was fehlt Ihnen? Wo haben Sie Beschwerden?",
        tr: "İyi günler! Şikayetiniz nedir? Nereniz ağrıyor?",
        options: [
          { text: "Ich habe starke Kopfschmerzen.", tr: "Şiddetli baş ağrım var.", next: "head_pain" },
          { text: "Mein Hals tut sehr weh.", tr: "Boğazım çok ağrıyor.", next: "throat" },
          { text: "Ich habe Fieber und bin sehr müde.", tr: "Ateşim var ve çok yorgunum.", next: "fever" },
        ],
      },
      head_pain: {
        ai: "Tut mir leid. Seit wann haben Sie die Kopfschmerzen?",
        tr: "Üzgünüm. Baş ağrısı ne zamandan beri var?",
        options: [
          { text: "Seit gestern Abend.", tr: "Dün akşamdan beri.", next: "more_symptoms" },
          { text: "Seit drei Tagen schon.", tr: "Üç gündür.", next: "more_symptoms" },
        ],
      },
      throat: {
        ai: "Öffnen Sie bitte den Mund... Ja, der Hals ist gerötet. Haben Sie Fieber?",
        tr: "Lütfen ağzınızı açın... Evet, boğaz kızarmış. Ateşiniz var mı?",
        options: [
          { text: "Ja, 38 Grad.", tr: "Evet, 38 derece.", next: "prescription" },
          { text: "Nein, kein Fieber.", tr: "Hayır, ateş yok.", next: "prescription" },
        ],
      },
      fever: {
        ai: "Wie hoch ist Ihr Fieber?",
        tr: "Ateşiniz kaç derece?",
        options: [
          { text: "38 Grad fünf.", tr: "38,5 derece.", next: "more_symptoms" },
          { text: "Ich weiß es nicht, kein Thermometer.", tr: "Bilmiyorum, termometrem yok.", next: "more_symptoms" },
        ],
      },
      more_symptoms: {
        ai: "Haben Sie auch Husten oder Halsschmerzen?",
        tr: "Öksürüğünüz veya boğaz ağrınız da var mı?",
        options: [
          { text: "Ja, ich huste seit zwei Tagen.", tr: "Evet, iki gündür öksürüyorum.", next: "prescription" },
          { text: "Nein, nur die Kopfschmerzen.", tr: "Hayır, sadece baş ağrısı.", next: "prescription" },
        ],
      },
      prescription: {
        ai: "Ich verschreibe Ihnen ein Medikament. Haben Sie Allergien gegen Medikamente?",
        tr: "Size ilaç yazıyorum. İlaçlara karşı alerjiniz var mı?",
        options: [
          { text: "Nein, keine Allergien.", tr: "Hayır, alerji yok.", next: "rest_advice" },
          { text: "Ja, ich bin allergisch gegen Penicillin.", tr: "Evet, penisiline karşı alerjim var.", next: "allergy_note" },
        ],
      },
      allergy_note: {
        ai: "Wichtig! Ich schreibe dann ein anderes, verträglicheres Medikament auf.",
        tr: "Önemli! O zaman farklı, daha uyumlu bir ilaç yazıyorum.",
        options: [
          { text: "Danke, Herr Doktor.", tr: "Teşekkürler, doktor bey.", next: "rest_advice" },
        ],
      },
      rest_advice: {
        ai: "Nehmen Sie die Tabletten dreimal täglich nach dem Essen. Bitte viel ruhen und Wasser trinken!",
        tr: "Tabletleri günde üç kez yemekten sonra alın. Lütfen çok dinlenin ve su için!",
        options: [
          { text: "Wie lange muss ich zu Hause bleiben?", tr: "Ne kadar süre evde kalmalıyım?", next: "days_off" },
          { text: "Vielen Dank, Herr Doktor!", tr: "Çok teşekkürler, doktor bey!", next: "end_good" },
        ],
      },
      days_off: {
        ai: "Ich schreibe Ihnen eine Krankschreibung für drei Tage. Gute Besserung!",
        tr: "Size üç günlük hastalık raporu yazıyorum. Geçmiş olsun!",
        options: [],
        isEnd: true,
        result: "success",
      },
      end_good: {
        ai: "Bitte kommen Sie nächste Woche zur Kontrolle. Gute Besserung!",
        tr: "Lütfen kontrol için gelecek hafta gelin. Geçmiş olsun!",
        options: [],
        isEnd: true,
        result: "success",
      },
    },
  },

  // ──────────── A2 ────────────
  {
    id: "c6",
    titleDE: "Vorstellungsgespräch",
    titleTR: "İş Görüşmesi",
    emoji: "💼",
    character: { name: "Frau Wagner (HR)", emoji: "👔" },
    level: "A2",
    xp: 100,
    tag: "İş Hayatı",
    startNode: "start",
    nodes: {
      start: {
        ai: "Guten Morgen! Herzlich willkommen. Ich bin Frau Wagner. Wie haben Sie von unserer Stelle erfahren?",
        tr: "Günaydın! Hoş geldiniz. Ben Bayan Wagner. İş ilanımızı nasıl öğrendiniz?",
        options: [
          { text: "Ich habe die Anzeige auf LinkedIn gefunden.", tr: "İlanı LinkedIn'de buldum.", next: "motivation" },
          { text: "Ein Freund hat mir von der Stelle erzählt.", tr: "Bir arkadaşım bu iş hakkında bahsetti.", next: "motivation" },
          { text: "Ich habe Ihre Firma online recherchiert.", tr: "Firmanızı çevrimiçi araştırdım.", next: "motivation" },
        ],
      },
      motivation: {
        ai: "Interessant! Warum möchten Sie bei uns arbeiten?",
        tr: "İlginç! Neden bizde çalışmak istiyorsunuz?",
        options: [
          { text: "Ihre Firma ist sehr bekannt und ich möchte wachsen.", tr: "Firmanız çok tanınmış ve kariyer yapmak istiyorum.", next: "experience" },
          { text: "Ich interessiere mich sehr für diese Branche.", tr: "Bu sektörle gerçekten çok ilgileniyorum.", next: "experience" },
          { text: "Die Arbeitskultur hier scheint sehr gut zu sein.", tr: "Buradaki çalışma kültürü çok iyi görünüyor.", next: "experience" },
        ],
      },
      experience: {
        ai: "Gut. Erzählen Sie mir etwas über Ihre Berufserfahrung.",
        tr: "Güzel. Bana iş deneyiminizden bahsedin.",
        options: [
          { text: "Ich habe drei Jahre als Bürokaufmann gearbeitet.", tr: "Üç yıl büro elemanı olarak çalıştım.", next: "skills" },
          { text: "Ich bin Berufseinsteiger, aber sehr motiviert.", tr: "Yeni başlıyorum ama çok motive olmuş durumdayım.", next: "skills_fresh" },
          { text: "Ich habe in der Türkei als Ingenieur gearbeitet.", tr: "Türkiye'de mühendis olarak çalıştım.", next: "skills" },
        ],
      },
      skills_fresh: {
        ai: "Das ist kein Problem! Welche Stärken bringen Sie mit?",
        tr: "Sorun değil! Hangi güçlü yönlerinizi getiriyorsunuz?",
        options: [
          { text: "Ich bin sehr teamfähig und lerne schnell.", tr: "Çok iyi bir takım oyuncusuyum ve hızlı öğreniyorum.", next: "language_skills" },
          { text: "Ich bin zuverlässig, pünktlich und fleißig.", tr: "Güvenilir, dakik ve çalışkanım.", next: "language_skills" },
        ],
      },
      skills: {
        ai: "Welche Software und Computerprogramme kennen Sie?",
        tr: "Hangi yazılım ve bilgisayar programlarını biliyorsunuz?",
        options: [
          { text: "Excel, Word und SAP.", tr: "Excel, Word ve SAP.", next: "language_skills" },
          { text: "Office-Paket und etwas Programmierung.", tr: "Office paketi ve biraz programlama.", next: "language_skills" },
        ],
      },
      language_skills: {
        ai: "Gut. Wie sind Ihre Deutschkenntnisse?",
        tr: "Güzel. Almanca seviyeniz nasıl?",
        options: [
          { text: "Ich lerne seit einem Jahr Deutsch. Niveau A2.", tr: "Bir yıldır Almanca öğreniyorum. A2 seviyesi.", next: "salary" },
          { text: "Mein Deutsch ist auf B1-Niveau.", tr: "Almancam B1 seviyesinde.", next: "salary" },
          { text: "Ich spreche gut Englisch — Deutsch lerne ich noch.", tr: "İyi İngilizce konuşuyorum — Almancayı hâlâ öğreniyorum.", next: "salary" },
        ],
      },
      salary: {
        ai: "Was sind Ihre Gehaltsvorstellungen?",
        tr: "Maaş beklentiniz nedir?",
        options: [
          { text: "2.500 Euro netto wäre ideal.", tr: "Net 2.500 Euro ideal olur.", next: "question" },
          { text: "Das ist verhandelbar — was bieten Sie an?", tr: "Bu müzakere edilebilir — ne teklif ediyorsunuz?", next: "salary_offer" },
        ],
      },
      salary_offer: {
        ai: "Wir bieten 2.200 bis 2.600 Euro netto, je nach Erfahrung.",
        tr: "Deneyime göre net 2.200 ile 2.600 Euro arasında sunuyoruz.",
        options: [
          { text: "Das klingt sehr gut!", tr: "Bu çok iyi kulağa geliyor!", next: "question" },
          { text: "Ist 2.500 Euro möglich?", tr: "2.500 Euro mümkün mü?", next: "question" },
        ],
      },
      question: {
        ai: "Haben Sie noch Fragen an uns?",
        tr: "Bize başka sorunuz var mı?",
        options: [
          { text: "Wann könnte ich anfangen?", tr: "Ne zaman başlayabilirim?", next: "start_date" },
          { text: "Wie sind die Arbeitszeiten?", tr: "Çalışma saatleri nasıl?", next: "work_hours" },
          { text: "Nein, danke. Ich freue mich sehr auf die Stelle!", tr: "Hayır, teşekkürler. Pozisyon için çok heyecanlıyım!", next: "end_positive" },
        ],
      },
      start_date: {
        ai: "Am ersten des nächsten Monats wäre optimal. Passt Ihnen das?",
        tr: "Gelecek ayın birinde başlamak optimal olur. Size uyar mı?",
        options: [
          { text: "Ja, das passt perfekt!", tr: "Evet, mükemmel uyuyor!", next: "end_positive" },
        ],
      },
      work_hours: {
        ai: "Von 9 bis 17 Uhr, Montag bis Freitag. Homeoffice ist auch möglich.",
        tr: "Pazartesiden Cumaya 9'dan 17'ye. Evden çalışma da mümkün.",
        options: [
          { text: "Das klingt sehr gut!", tr: "Bu çok iyi geliyor!", next: "end_positive" },
        ],
      },
      end_positive: {
        ai: "Vielen Dank für das Gespräch! Wir melden uns innerhalb einer Woche. Alles Gute!",
        tr: "Görüşme için çok teşekkürler! Bir hafta içinde haberleşiriz. İyi şanslar!",
        options: [],
        isEnd: true,
        result: "success",
      },
    },
  },

  {
    id: "c7",
    titleDE: "Wohnung besichtigen",
    titleTR: "Daire Gezmek",
    emoji: "🏠",
    character: { name: "Vermieter Herr Klein", emoji: "🔑" },
    level: "A2",
    xp: 90,
    tag: "Yaşam",
    startNode: "start",
    nodes: {
      start: {
        ai: "Willkommen! Ich bin Herr Klein. Sie interessieren sich für die Wohnung?",
        tr: "Hoş geldiniz! Ben Bay Klein. Daireyle ilgileniyorsunuz?",
        options: [
          { text: "Ja, genau. Sie sieht schön aus!", tr: "Evet, aynen. Çok güzel görünüyor!", next: "rooms" },
          { text: "Ja. Wie groß ist die Wohnung genau?", tr: "Evet. Daire tam olarak ne kadar büyük?", next: "size" },
        ],
      },
      size: {
        ai: "65 Quadratmeter — Wohnzimmer, Schlafzimmer, moderne Küche und Bad.",
        tr: "65 metrekare — oturma odası, yatak odası, modern mutfak ve banyo.",
        options: [
          { text: "Und die Miete?", tr: "Peki kira?", next: "rent" },
          { text: "Kann ich die Küche sehen?", tr: "Mutfağı görebilir miyim?", next: "kitchen" },
        ],
      },
      rooms: {
        ai: "Danke! Wohnzimmer, Schlafzimmer, moderne Küche und ein helles Badezimmer.",
        tr: "Teşekkürler! Oturma odası, yatak odası, modern mutfak ve aydınlık banyo.",
        options: [
          { text: "Wie hoch ist die Miete?", tr: "Kira ne kadar?", next: "rent" },
          { text: "Ist die Küche eingerichtet?", tr: "Mutfak mobilyalı mı?", next: "kitchen" },
        ],
      },
      rent: {
        ai: "850 Euro Kaltmiete plus 150 Euro Nebenkosten. Also 1.000 Euro warm.",
        tr: "850 Euro net kira artı 150 Euro yan giderler. Yani toplam 1.000 Euro.",
        options: [
          { text: "Ist Strom inklusive?", tr: "Elektrik dahil mi?", next: "utilities" },
          { text: "Das ist akzeptabel. Wann kann ich einziehen?", tr: "Bu kabul edilebilir. Ne zaman taşınabilirim?", next: "move_in" },
          { text: "Das ist mir leider zu teuer.", tr: "Bu benim için maalesef çok pahalı.", next: "negotiate" },
        ],
      },
      negotiate: {
        ai: "Ich verstehe. Vielleicht 950 Euro alles inklusive? Das ist mein letztes Angebot.",
        tr: "Anlıyorum. Belki her şey dahil 950 Euro? Bu benim son teklifim.",
        options: [
          { text: "Okay, das nehme ich!", tr: "Tamam, onu alıyorum!", next: "move_in" },
          { text: "Ich muss darüber nachdenken.", tr: "Üzerinde düşünmem gerekiyor.", next: "think" },
        ],
      },
      think: {
        ai: "Natürlich! Bitte melden Sie sich bis Freitag. Die Wohnung ist sehr gefragt.",
        tr: "Tabii! Lütfen Cuma gününe kadar haber verin. Daire çok rağbet görüyor.",
        options: [
          { text: "Gut, ich melde mich.", tr: "Peki, haber vereceğim.", next: "end_maybe" },
        ],
      },
      end_maybe: {
        ai: "Schön! Hier ist meine Visitenkarte. Auf Wiedersehen!",
        tr: "Güzel! İşte kartvizitim. Güle güle!",
        options: [],
        isEnd: true,
        result: "success",
      },
      utilities: {
        ai: "Strom und Internet müssen Sie selbst anmelden. Gas und Wasser sind inklusive.",
        tr: "Elektrik ve interneti kendiniz bağlatmanız gerekiyor. Gaz ve su dahil.",
        options: [
          { text: "Verstanden. Wann kann ich einziehen?", tr: "Anladım. Ne zaman taşınabilirim?", next: "move_in" },
        ],
      },
      kitchen: {
        ai: "Die Küche hat neuen Herd, Kühlschrank und Geschirrspüler — vollständig eingerichtet!",
        tr: "Mutfakta yeni ocak, buzdolabı ve bulaşık makinesi var — tamamen mobilyalı!",
        options: [
          { text: "Super! Und die Miete?", tr: "Harika! Peki kira?", next: "rent" },
          { text: "Perfekt! Wann kann ich einziehen?", tr: "Mükemmel! Ne zaman taşınabilirim?", next: "move_in" },
        ],
      },
      move_in: {
        ai: "Am ersten des nächsten Monats. Ich brauche 3 Monatsmieten als Kaution.",
        tr: "Gelecek ayın birinde. 3 aylık kira tutarında depozito istiyorum.",
        options: [
          { text: "Okay. Welche Unterlagen brauchen Sie?", tr: "Tamam. Hangi belgeleri istiyorsunuz?", next: "documents" },
          { text: "3 Monatsmieten? Das ist sehr viel!", tr: "3 aylık kira? Bu çok fazla!", next: "deposit_explain" },
        ],
      },
      deposit_explain: {
        ai: "Das ist in Deutschland normal. Sie bekommen das Geld zurück, wenn Sie ausziehen.",
        tr: "Almanya'da bu normaldir. Çıktığınızda parayı geri alırsınız.",
        options: [
          { text: "Verstanden. Was brauche ich als Unterlagen?", tr: "Anladım. Belge olarak ne lazım?", next: "documents" },
        ],
      },
      documents: {
        ai: "Reisepass, die letzten drei Gehaltszettel und eine Schufa-Auskunft. Ich schicke Ihnen alles per E-Mail!",
        tr: "Pasaport, son üç ayın maaş bordrosu ve Schufa raporu. Her şeyi e-posta ile göndereceğim!",
        options: [],
        isEnd: true,
        result: "success",
      },
    },
  },

  {
    id: "c8",
    titleDE: "Auf dem Amt — Ummelden",
    titleTR: "Nüfus Müdürlüğünde — Adres Değişikliği",
    emoji: "🏛️",
    character: { name: "Sachbearbeiterin Frau Bauer", emoji: "📋" },
    level: "A2",
    xp: 85,
    tag: "Resmi İşler",
    startNode: "start",
    nodes: {
      start: {
        ai: "Guten Morgen! Was kann ich für Sie tun?",
        tr: "Günaydın! Size nasıl yardımcı olabilirim?",
        options: [
          { text: "Ich möchte mich ummelden. Ich bin umgezogen.", tr: "Adresimi güncellemek istiyorum. Taşındım.", next: "new_address" },
          { text: "Ich brauche eine Anmeldebescheinigung.", tr: "İkametgah belgesi lazım.", next: "certificate" },
          { text: "Ich möchte mich anmelden — ich bin neu in Deutschland.", tr: "Kayıt olmak istiyorum — Almanya'da yeniyim.", next: "first_reg" },
        ],
      },
      new_address: {
        ai: "Gut. Bitte nennen Sie mir Ihre neue Adresse.",
        tr: "Peki. Lütfen yeni adresinizi söyleyin.",
        options: [
          { text: "Hauptstraße 12, 10115 Berlin.", tr: "Hauptstraße 12, 10115 Berlin.", next: "documents_check" },
          { text: "Schillerweg 7, 20095 Hamburg.", tr: "Schillerweg 7, 20095 Hamburg.", next: "documents_check" },
        ],
      },
      certificate: {
        ai: "Natürlich. Haben Sie Ihren Personalausweis oder Reisepass dabei?",
        tr: "Tabii. Kimliğiniz veya pasaportunuz yanınızda mı?",
        options: [
          { text: "Ja, hier ist mein Ausweis.", tr: "Evet, işte kimliğim.", next: "cert_purpose" },
          { text: "Ich habe nur meinen Reisepass.", tr: "Sadece pasaportum var.", next: "cert_purpose" },
        ],
      },
      cert_purpose: {
        ai: "Wofür brauchen Sie die Bescheinigung?",
        tr: "Belgeyi ne için istiyorsunuz?",
        options: [
          { text: "Für eine Bankkontoeröffnung.", tr: "Banka hesabı açmak için.", next: "cert_issue" },
          { text: "Für meinen Arbeitgeber.", tr: "İşverenime göstermek için.", next: "cert_issue" },
          { text: "Für die Schulanmeldung meines Kindes.", tr: "Çocuğumu okula kaydettirmek için.", next: "cert_issue" },
        ],
      },
      cert_issue: {
        ai: "Kein Problem. Die Bescheinigung kostet 5 Euro. Ich stelle sie sofort aus.",
        tr: "Sorun değil. Belge 5 Euro tutar. Hemen düzenliyorum.",
        options: [
          { text: "Danke! Wie lange dauert es?", tr: "Teşekkürler! Ne kadar sürer?", next: "cert_time" },
          { text: "Gut, ich bezahle sofort.", tr: "Güzel, hemen ödüyorum.", next: "end_good" },
        ],
      },
      cert_time: {
        ai: "Nur fünf Minuten. Bitte warten Sie einen Moment.",
        tr: "Sadece beş dakika. Lütfen bir dakika bekleyin.",
        options: [
          { text: "Kein Problem, ich warte gerne.", tr: "Sorun değil, memnuniyetle bekliyorum.", next: "end_good" },
        ],
      },
      first_reg: {
        ai: "Willkommen! Haben Sie eine Wohnungsgeberbestätigung von Ihrem Vermieter?",
        tr: "Hoş geldiniz! Kiraya verenden bir konut sahibi teyidi var mı?",
        options: [
          { text: "Ja, hier ist das ausgefüllte Formular.", tr: "Evet, işte doldurulmuş form.", next: "documents_check" },
          { text: "Was ist das genau? Ich kenne das nicht.", tr: "Bu tam olarak nedir? Bilmiyorum.", next: "explain_doc" },
        ],
      },
      explain_doc: {
        ai: "Das ist eine Bestätigung vom Vermieter, dass Sie in seiner Wohnung wohnen. Bitte holen Sie das nach.",
        tr: "Bu, kiraya verenin sizin o dairede oturduğunuzu teyit ettiği bir belgedir. Lütfen bunu edinin.",
        options: [
          { text: "Verstanden. Ich komme nächste Woche wieder.", tr: "Anladım. Gelecek hafta tekrar geliyorum.", next: "appointment" },
        ],
      },
      appointment: {
        ai: "Kein Problem. Machen Sie bitte online einen neuen Termin. Auf Wiedersehen!",
        tr: "Sorun değil. Lütfen çevrimiçi yeni randevu alın. Güle güle!",
        options: [],
        isEnd: true,
        result: "success",
      },
      documents_check: {
        ai: "Danke. Haben Sie Ihren Reisepass oder Personalausweis dabei?",
        tr: "Teşekkürler. Pasaportunuz veya kimliğiniz yanınızda mı?",
        options: [
          { text: "Ja, hier ist mein Reisepass.", tr: "Evet, işte pasaportum.", next: "process" },
          { text: "Ich habe meinen türkischen Personalausweis.", tr: "Türk kimlik kartım var.", next: "process" },
        ],
      },
      process: {
        ai: "Sehr gut. Ich verarbeite jetzt alles — das dauert einen Moment.",
        tr: "Çok güzel. Her şeyi şimdi işliyorum — bir dakika sürer.",
        options: [
          { text: "Kein Problem, ich warte.", tr: "Sorun değil, bekliyorum.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Fertig! Hier ist Ihre Bestätigung. Alles erledigt. Auf Wiedersehen!",
        tr: "Hazır! İşte teyidiniz. Her şey tamamlandı. Güle güle!",
        options: [],
        isEnd: true,
        result: "success",
      },
    },
  },
];
