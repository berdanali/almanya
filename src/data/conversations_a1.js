// src/data/conversations_a1.js — Ek A1 senaryolar (c9-c28)

export const conversationsA1Extra = [
  {
    id: "c9", titleDE: "In der Apotheke", titleTR: "Eczanede",
    emoji: "💊", character: { name: "Apothekerin Frau Stein", emoji: "💊" },
    level: "A1", xp: 60, tag: "Sağlık", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Was kann ich für Sie tun?",
        tr: "İyi günler! Size nasıl yardımcı olabilirim?",
        options: [
          { text: "Ich brauche etwas gegen Kopfschmerzen.", tr: "Baş ağrısı için bir şey lazım.", next: "headache" },
          { text: "Ich habe ein Rezept vom Arzt.", tr: "Doktordan bir reçetem var.", next: "prescription" },
          { text: "Haben Sie etwas gegen Erkältung?", tr: "Nezle için bir şeyiniz var mı?", next: "cold" },
        ],
      },
      headache: {
        ai: "Ja, natürlich. Haben Sie Allergien gegen Schmerzmittel?",
        tr: "Evet, tabii. Ağrı kesicilere karşı alerjiniz var mı?",
        options: [
          { text: "Nein, keine Allergien.", tr: "Hayır, alerji yok.", next: "headache_rec" },
          { text: "Ich vertrage kein Aspirin.", tr: "Aspirin içemiyorum.", next: "headache_alt" },
        ],
      },
      headache_rec: {
        ai: "Dann empfehle ich Ihnen Ibuprofen 400mg. Eine Tablette alle 8 Stunden.",
        tr: "O zaman İbuprofen 400mg öneriyorum. Her 8 saatte bir tablet.",
        options: [
          { text: "Was kostet das?", tr: "Bu ne kadar?", next: "price" },
          { text: "Danke, ich nehme es.", tr: "Teşekkürler, alıyorum.", next: "end_good" },
        ],
      },
      headache_alt: {
        ai: "Dann nehmen Sie Paracetamol — kein Aspirin, sehr gut verträglich.",
        tr: "O zaman Parasetamol alın — aspirin değil, çok iyi tolere edilir.",
        options: [
          { text: "Gut, das nehme ich.", tr: "Güzel, onu alıyorum.", next: "price" },
        ],
      },
      prescription: {
        ai: "Gerne! Darf ich das Rezept sehen?",
        tr: "Memnuniyetle! Reçeteyi görebilir miyim?",
        options: [
          { text: "Ja, hier bitte.", tr: "Evet, buyurun.", next: "prescription_found" },
        ],
      },
      prescription_found: {
        ai: "Danke. Das Medikament ist vorrätig. Haben Sie eine Krankenkassenkarte?",
        tr: "Teşekkürler. İlaç stokta var. Sağlık sigorta kartınız var mı?",
        options: [
          { text: "Ja, hier ist meine Karte.", tr: "Evet, işte kartım.", next: "end_good" },
          { text: "Nein, ich zahle selbst.", tr: "Hayır, kendim ödüyorum.", next: "price" },
        ],
      },
      cold: {
        ai: "Ja! Haben Sie Husten, Fieber oder nur Schnupfen?",
        tr: "Evet! Öksürüğünüz, ateşiniz mi var yoksa sadece burun akıntısı mı?",
        options: [
          { text: "Nur Schnupfen und Halsweh.", tr: "Sadece burun akıntısı ve boğaz ağrısı.", next: "cold_rec" },
          { text: "Husten und etwas Fieber.", tr: "Öksürük ve biraz ateş.", next: "cold_serious" },
        ],
      },
      cold_rec: {
        ai: "Ich empfehle diesen Erkältungssaft — dreimal täglich ein Löffel.",
        tr: "Bu nezle şurubunu öneriyorum — günde üç kez bir kaşık.",
        options: [
          { text: "Danke! Und was kostet das?", tr: "Teşekkürler! Ne kadar?", next: "price" },
        ],
      },
      cold_serious: {
        ai: "Mit Fieber sollten Sie besser zum Arzt gehen. Ich gebe Ihnen trotzdem etwas für die Symptome.",
        tr: "Ateşle birlikte doktora gitmeniz daha iyi olur. Yine de semptomlar için bir şey vereyim.",
        options: [
          { text: "Danke für den Rat.", tr: "Tavsiye için teşekkürler.", next: "end_good" },
        ],
      },
      price: {
        ai: "Das kostet 6 Euro 80. Bar oder Karte?",
        tr: "6 Euro 80 tutuyor. Nakit mi kart mı?",
        options: [
          { text: "Mit Karte, bitte.", tr: "Kartla, lütfen.", next: "end_good" },
          { text: "Bar, hier sind sieben Euro.", tr: "Nakit, işte yedi euro.", next: "end_change" },
        ],
      },
      end_change: {
        ai: "Danke! 20 Cent zurück. Gute Besserung!",
        tr: "Teşekkürler! 20 cent üstünüz. Geçmiş olsun!",
        options: [], isEnd: true, result: "success",
      },
      end_good: {
        ai: "Bitte sehr! Gute Besserung und kommen Sie bald wieder!",
        tr: "Buyurun! Geçmiş olsun ve yakında tekrar gelin!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c10", titleDE: "Tisch im Restaurant reservieren", titleTR: "Restoranda Masa Ayırtmak",
    emoji: "🍽️", character: { name: "Kellner Marco", emoji: "🍽️" },
    level: "A1", xp: 55, tag: "Yemek", startNode: "start",
    nodes: {
      start: {
        ai: "Restaurant Zum Goldenen Hirsch, guten Abend! Was kann ich für Sie tun?",
        tr: "Zum Goldenen Hirsch Restoranı, iyi akşamlar! Size nasıl yardımcı olabilirim?",
        options: [
          { text: "Ich möchte einen Tisch reservieren.", tr: "Bir masa ayırtmak istiyorum.", next: "how_many" },
          { text: "Haben Sie heute Abend noch Plätze frei?", tr: "Bu akşam için yeriniz var mı?", next: "available" },
        ],
      },
      how_many: {
        ai: "Für wie viele Personen und wann?",
        tr: "Kaç kişi için ve ne zaman?",
        options: [
          { text: "Für zwei Personen, heute um 19 Uhr.", tr: "İki kişi için, bugün saat 19'da.", next: "confirm_2" },
          { text: "Für vier Personen, am Samstag um 20 Uhr.", tr: "Dört kişi için, Cumartesi saat 20'de.", next: "confirm_4" },
        ],
      },
      available: {
        ai: "Ja, wir haben noch Plätze. Für wie viele Personen?",
        tr: "Evet, hâlâ yerimiz var. Kaç kişi için?",
        options: [
          { text: "Für zwei Personen.", tr: "İki kişi için.", next: "confirm_2" },
          { text: "Für drei Personen.", tr: "Üç kişi için.", next: "confirm_2" },
        ],
      },
      confirm_2: {
        ai: "Sehr gut! Auf welchen Namen darf ich reservieren?",
        tr: "Çok güzel! Hangi isim üzerine rezervasyon yapayım?",
        options: [
          { text: "Auf den Namen Berdan, bitte.", tr: "Berdan adına, lütfen.", next: "special_req" },
        ],
      },
      confirm_4: {
        ai: "Perfekt! Auf welchen Namen?",
        tr: "Mükemmel! Hangi isim üzerine?",
        options: [
          { text: "Berdan, bitte.", tr: "Berdan, lütfen.", next: "special_req" },
        ],
      },
      special_req: {
        ai: "Haben Sie besondere Wünsche — Fensterplatz oder vegetarisches Menü?",
        tr: "Özel isteğiniz var mı — pencere kenarı veya vejetaryen menüsü?",
        options: [
          { text: "Einen Tisch am Fenster, wenn möglich.", tr: "Mümkünse pencere kenarında bir masa.", next: "end_good" },
          { text: "Nein, keine besonderen Wünsche.", tr: "Hayır, özel isteğim yok.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Alles klar! Wir freuen uns auf Ihren Besuch. Auf Wiederhören!",
        tr: "Tamam! Sizi bekliyoruz. Görüşmek üzere!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c11", titleDE: "Auf der Post — Paket aufgeben", titleTR: "Postanede — Paket Göndermek",
    emoji: "📦", character: { name: "Postbeamter Herr Hahn", emoji: "📮" },
    level: "A1", xp: 55, tag: "Günlük Hayat", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Was darf es sein?",
        tr: "İyi günler! Ne istiyorsunuz?",
        options: [
          { text: "Ich möchte dieses Paket nach Istanbul schicken.", tr: "Bu paketi İstanbul'a göndermek istiyorum.", next: "weight" },
          { text: "Ich brauche Briefmarken.", tr: "Pul lazım.", next: "stamps" },
          { text: "Ich möchte einen Brief einschreiben schicken.", tr: "Taahhütlü mektup göndermek istiyorum.", next: "registered" },
        ],
      },
      weight: {
        ai: "Legen Sie das Paket bitte auf die Waage... Es wiegt 2,3 Kilo. In die Türkei?",
        tr: "Paketi lütfen teraziye koyun... 2,3 kilo geliyor. Türkiye'ye mi?",
        options: [
          { text: "Ja, nach Istanbul.", tr: "Evet, İstanbul'a.", next: "shipping_options" },
        ],
      },
      shipping_options: {
        ai: "Standard dauert 7-10 Tage, 12 Euro. Express 3-4 Tage, 22 Euro.",
        tr: "Standart 7-10 gün, 12 Euro. Ekspres 3-4 gün, 22 Euro.",
        options: [
          { text: "Standard ist gut.", tr: "Standart yeter.", next: "fragile" },
          { text: "Express bitte — es ist dringend.", tr: "Ekspres lütfen — acil.", next: "fragile" },
        ],
      },
      fragile: {
        ai: "Ist etwas Zerbrechliches drin?",
        tr: "İçinde kırılacak bir şey var mı?",
        options: [
          { text: "Ja, bitte Zerbrechlich-Aufkleber.", tr: "Evet, lütfen kırılır etiketi.", next: "end_pay" },
          { text: "Nein, nur Kleidung.", tr: "Hayır, sadece kıyafet.", next: "end_pay" },
        ],
      },
      stamps: {
        ai: "Wie viele Briefmarken und wohin — Deutschland oder Ausland?",
        tr: "Kaç pul ve nereye — Almanya içi mi yurt dışı mı?",
        options: [
          { text: "Fünf Briefmarken für Deutschland.", tr: "Almanya içi beş pul.", next: "stamps_pay" },
          { text: "Drei für die Türkei.", tr: "Türkiye için üç tane.", next: "stamps_pay" },
        ],
      },
      stamps_pay: {
        ai: "Das macht 4 Euro 50.",
        tr: "4 Euro 50 yapıyor.",
        options: [
          { text: "Hier, bitte.", tr: "Buyurun.", next: "end_good" },
        ],
      },
      registered: {
        ai: "Bitte füllen Sie dieses Formular aus. Name und Adresse des Empfängers.",
        tr: "Lütfen bu formu doldurun. Alıcının adı ve adresi.",
        options: [
          { text: "Okay, ich fülle es aus.", tr: "Tamam, dolduruyorum.", next: "end_pay" },
        ],
      },
      end_pay: {
        ai: "Das macht 12 Euro. Hier ist Ihre Quittung und Trackingnummer. Danke!",
        tr: "12 Euro yapıyor. İşte fişiniz ve takip numaranız. Teşekkürler!",
        options: [], isEnd: true, result: "success",
      },
      end_good: {
        ai: "Bitte sehr! Noch etwas?... Nein? Schönen Tag!",
        tr: "Buyurun! Başka bir şey?... Yok mu? İyi günler!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c12", titleDE: "Beim Friseur", titleTR: "Kuaförde",
    emoji: "✂️", character: { name: "Friseurin Sabine", emoji: "✂️" },
    level: "A1", xp: 55, tag: "Günlük Hayat", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Haben Sie einen Termin?",
        tr: "Merhaba! Randevunuz var mı?",
        options: [
          { text: "Ja, um 14 Uhr auf Berdan.", tr: "Evet, saat 14'te Berdan adına.", next: "what_cut" },
          { text: "Nein, haben Sie noch Zeit heute?", tr: "Hayır, bugün zamanınız var mı?", next: "check_time" },
        ],
      },
      check_time: {
        ai: "Ja, in 20 Minuten bin ich frei. Bitte nehmen Sie Platz.",
        tr: "Evet, 20 dakika sonra müsait olacağım. Lütfen oturun.",
        options: [
          { text: "Danke, ich warte gerne.", tr: "Teşekkürler, memnuniyetle beklerim.", next: "what_cut" },
        ],
      },
      what_cut: {
        ai: "Was möchten Sie heute machen lassen?",
        tr: "Bugün ne yaptırmak istiyorsunuz?",
        options: [
          { text: "Nur die Spitzen schneiden, bitte.", tr: "Sadece uçlarını kesmek lütfen.", next: "how_much" },
          { text: "Einen neuen Schnitt — etwas kürzer.", tr: "Yeni bir kesim — biraz daha kısa.", next: "how_much" },
          { text: "Schneiden und waschen, bitte.", tr: "Kesme ve yıkama lütfen.", next: "how_much" },
        ],
      },
      how_much: {
        ai: "Wie viel soll ich abschneiden? Zwei Zentimeter oder mehr?",
        tr: "Ne kadar keseyim? İki santimetre mi yoksa daha fazla mı?",
        options: [
          { text: "Circa drei Zentimeter.", tr: "Yaklaşık üç santimetre.", next: "style" },
          { text: "Nur die Spitzen — ein Zentimeter reicht.", tr: "Sadece uçlar — bir santimetre yeter.", next: "style" },
        ],
      },
      style: {
        ai: "Möchten Sie es föhnen oder natürlich trocknen lassen?",
        tr: "Föhnle mi kurutayım yoksa doğal mı kurusun?",
        options: [
          { text: "Föhnen bitte.", tr: "Föhnleyin lütfen.", next: "end_good" },
          { text: "Natürlich trocknen ist okay.", tr: "Doğal kuruma olur.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Fertig! Gefällt es Ihnen? Das macht 18 Euro.",
        tr: "Hazır! Beğendiniz mi? 18 Euro yapıyor.",
        options: [
          { text: "Ja, sehr schön! Danke.", tr: "Evet, çok güzel! Teşekkürler.", next: "end_pay" },
        ],
      },
      end_pay: {
        ai: "Danke schön! Auf Wiedersehen!",
        tr: "Çok teşekkürler! Güle güle!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c13", titleDE: "Nachbarn kennenlernen", titleTR: "Komşularla Tanışmak",
    emoji: "🏘️", character: { name: "Nachbarin Frau Fischer", emoji: "👋" },
    level: "A1", xp: 50, tag: "Sosyal", startNode: "start",
    nodes: {
      start: {
        ai: "Oh, hallo! Sind Sie neu hier im Haus? Ich bin Frau Fischer aus dem zweiten Stock.",
        tr: "Oh, merhaba! Binada yeni misiniz? Ben ikinci kattaki Bayan Fischer.",
        options: [
          { text: "Ja, ich bin gestern eingezogen. Ich heiße Berdan.", tr: "Evet, dün taşındım. Adım Berdan.", next: "where_from" },
          { text: "Hallo! Ja, ich wohne jetzt im dritten Stock.", tr: "Merhaba! Evet, artık üçüncü katta yaşıyorum.", next: "where_from" },
        ],
      },
      where_from: {
        ai: "Freut mich! Woher kommen Sie, wenn ich fragen darf?",
        tr: "Memnun oldum! Sorabilir miyim, nereden geliyorsunuz?",
        options: [
          { text: "Aus der Türkei, aus Istanbul.", tr: "Türkiye'den, İstanbul'dan.", next: "in_germany" },
          { text: "Ich komme ursprünglich aus der Türkei.", tr: "Aslen Türkiye'den geliyorum.", next: "in_germany" },
        ],
      },
      in_germany: {
        ai: "Oh, interessant! Wie lange sind Sie schon in Deutschland?",
        tr: "Oh, ilginç! Almanya'da ne zamandır yaşıyorsunuz?",
        options: [
          { text: "Erst seit drei Monaten.", tr: "Sadece üç aydır.", next: "help_offer" },
          { text: "Seit einem Jahr schon.", tr: "Bir yıldır.", next: "help_offer" },
        ],
      },
      help_offer: {
        ai: "Falls Sie mal Hilfe brauchen oder Fragen zur Gegend haben — klingeln Sie einfach!",
        tr: "Yardıma ihtiyacınız olursa veya çevre hakkında sorularınız olursa — zili çalın!",
        options: [
          { text: "Vielen Dank, das ist sehr nett!", tr: "Çok teşekkürler, çok naziksiniz!", next: "trash" },
          { text: "Das ist sehr freundlich von Ihnen.", tr: "Bu çok kibar bir davranış.", next: "trash" },
        ],
      },
      trash: {
        ai: "Übrigens — die Mülltonnen sind im Hof. Restmüll, Papier und Gelbe Tonne. Mittwochs wird abgeholt.",
        tr: "Bu arada — çöp kutuları avluda. Normal çöp, kâğıt ve sarı kutu. Çarşamba toplanıyor.",
        options: [
          { text: "Oh danke, das wusste ich nicht!", tr: "Oh teşekkürler, bunu bilmiyordum!", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Gern! Willkommen in der Nachbarschaft, Berdan! Auf Wiedersehen!",
        tr: "Rica ederim! Mahalleye hoş geldiniz, Berdan! Güle güle!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c14", titleDE: "Im Fitnessstudio anmelden", titleTR: "Spor Salonuna Kayıt",
    emoji: "🏋️", character: { name: "Mitarbeiter Tim", emoji: "💪" },
    level: "A1", xp: 60, tag: "Spor", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Willkommen bei FitCity. Sind Sie schon Mitglied?",
        tr: "Merhaba! FitCity'e hoş geldiniz. Üye misiniz?",
        options: [
          { text: "Nein, ich möchte mich anmelden.", tr: "Hayır, üye olmak istiyorum.", next: "membership" },
          { text: "Ich würde gerne eine Probestunde machen.", tr: "Deneme seansı yapmak istiyorum.", next: "trial" },
        ],
      },
      membership: {
        ai: "Super! Wir haben drei Tarife: Basic 25 Euro, Premium 40 Euro und Flex 55 Euro monatlich.",
        tr: "Harika! Üç tarifemiz var: Basic 25 Euro, Premium 40 Euro ve Flex 55 Euro aylık.",
        options: [
          { text: "Was ist der Unterschied?", tr: "Fark ne?", next: "difference" },
          { text: "Basic reicht mir, bitte.", tr: "Basic yeter bana, lütfen.", next: "registration" },
        ],
      },
      trial: {
        ai: "Natürlich! Eine kostenlose Probestunde ist kein Problem. Haben Sie Sportklamotten dabei?",
        tr: "Tabii! Ücretsiz deneme seansı sorun değil. Spor kıyafetiniz yanınızda mı?",
        options: [
          { text: "Ja, ich bin vorbereitet.", tr: "Evet, hazırlıklıyım.", next: "trial_start" },
          { text: "Nein, kann ich etwas leihen?", tr: "Hayır, bir şeyler ödünç alabilir miyim?", next: "locker" },
        ],
      },
      trial_start: {
        ai: "Perfekt! Bitte unterschreiben Sie kurz hier für die Probestunde.",
        tr: "Mükemmel! Lütfen deneme seansı için buraya imza atın.",
        options: [
          { text: "Okay, hier ist meine Unterschrift.", tr: "Tamam, işte imzam.", next: "end_trial" },
        ],
      },
      locker: {
        ai: "Handtücher können wir verleihen — 2 Euro. Kleidung leider nicht.",
        tr: "Havlu ödünç verebiliriz — 2 Euro. Kıyafet maalesef yok.",
        options: [
          { text: "Ein Handtuch bitte.", tr: "Bir havlu lütfen.", next: "end_trial" },
        ],
      },
      difference: {
        ai: "Basic: Geräte. Premium: Plus Kurse und Sauna. Flex: Alles, auch andere Filialen.",
        tr: "Basic: Aletler. Premium: Artı dersler ve sauna. Flex: Her şey, diğer şubeler de dahil.",
        options: [
          { text: "Dann Premium, bitte.", tr: "O zaman Premium, lütfen.", next: "registration" },
          { text: "Basic ist genug für mich.", tr: "Basic bana yeter.", next: "registration" },
        ],
      },
      registration: {
        ai: "Gut! Ich brauche Ihren Ausweis und eine Bankverbindung für das SEPA-Lastschrift.",
        tr: "Güzel! Kimliğinize ve SEPA otomatik ödeme için banka bilgilerinize ihtiyacım var.",
        options: [
          { text: "Hier ist mein Ausweis.", tr: "İşte kimliğim.", next: "end_good" },
        ],
      },
      end_trial: {
        ai: "Viel Spaß beim Training! Die Umkleiden sind links.",
        tr: "Antrenmanlar hayırlı olsun! Soyunma odaları solda.",
        options: [], isEnd: true, result: "success",
      },
      end_good: {
        ai: "Willkommen bei FitCity! Ihre Mitgliedskarte ist in 3 Tagen fertig. Viel Spaß!",
        tr: "FitCity'e hoş geldiniz! Üyelik kartınız 3 günde hazır. İyi antrenmanlar!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c15", titleDE: "Im Kleidungsgeschäft", titleTR: "Giyim Mağazasında",
    emoji: "👗", character: { name: "Verkäuferin Lena", emoji: "🛍️" },
    level: "A1", xp: 55, tag: "Alışveriş", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Kann ich Ihnen helfen oder schauen Sie sich nur um?",
        tr: "Merhaba! Yardımcı olayım mı yoksa sadece bakıyor musunuz?",
        options: [
          { text: "Ich suche eine Jacke für den Winter.", tr: "Kış için bir ceket arıyorum.", next: "jacket" },
          { text: "Haben Sie Jeans in Größe 32?", tr: "32 beden kot pantolonunuz var mı?", next: "jeans" },
          { text: "Ich schaue mich nur um, danke.", tr: "Sadece bakıyorum, teşekkürler.", next: "browse" },
        ],
      },
      jacket: {
        ai: "Ja, unsere Winterjacken sind hier drüben. Welche Farbe bevorzugen Sie?",
        tr: "Evet, kış ceketlerimiz burada. Hangi rengi tercih edersiniz?",
        options: [
          { text: "Schwarz oder dunkelblau.", tr: "Siyah veya koyu mavi.", next: "jacket_size" },
          { text: "Etwas Buntes — Rot oder Grün.", tr: "Renkli bir şey — kırmızı veya yeşil.", next: "jacket_size" },
        ],
      },
      jacket_size: {
        ai: "Welche Größe tragen Sie?",
        tr: "Hangi beden giyiyorsunuz?",
        options: [
          { text: "Größe L, bitte.", tr: "L beden, lütfen.", next: "try_on" },
          { text: "Ich bin nicht sicher — M oder L.", tr: "Emin değilim — M mi L mi.", next: "measure" },
        ],
      },
      measure: {
        ai: "Kein Problem! Probieren Sie einfach beide an. Die Umkleidekabinen sind dort.",
        tr: "Sorun değil! İkisini de deneyin. Soyunma kabinleri orada.",
        options: [
          { text: "Gut, danke!", tr: "Güzel, teşekkürler!", next: "try_on" },
        ],
      },
      try_on: {
        ai: "Wie passt die Jacke? Zu groß, zu klein oder genau richtig?",
        tr: "Ceket nasıl oluyor? Çok büyük mü, çok küçük mü, yoksa tam mı?",
        options: [
          { text: "Genau richtig! Ich nehme sie.", tr: "Tam oluyor! Bunu alıyorum.", next: "price_jacket" },
          { text: "Ein bisschen zu eng. Haben Sie Größe XL?", tr: "Biraz dar. XL beden var mı?", next: "xl" },
        ],
      },
      xl: {
        ai: "Ja, einen Moment... Hier, XL in Schwarz.",
        tr: "Evet, bir dakika... İşte, siyahta XL.",
        options: [
          { text: "Perfekt! Die nehme ich.", tr: "Mükemmel! Bunu alıyorum.", next: "price_jacket" },
        ],
      },
      price_jacket: {
        ai: "Die Jacke kostet 89 Euro. Gerade 20% Rabatt — also 71 Euro 20.",
        tr: "Ceket 89 Euro. Şu an %20 indirim var — yani 71 Euro 20.",
        options: [
          { text: "Super! Ich nehme sie.", tr: "Harika! Bunu alıyorum.", next: "end_good" },
        ],
      },
      jeans: {
        ai: "Größe 32 haben wir. Welche Länge — 30, 32 oder 34?",
        tr: "32 bedenimiz var. Hangi boy — 30, 32 veya 34?",
        options: [
          { text: "Länge 32, bitte.", tr: "Boy 32, lütfen.", next: "try_on_jeans" },
        ],
      },
      try_on_jeans: {
        ai: "Bitte probieren Sie sie an. Die Kabinen sind hinten rechts.",
        tr: "Lütfen deneyin. Kabinler arkada sağda.",
        options: [
          { text: "Sie passen gut! Was kosten sie?", tr: "Tam oluyor! Ne kadar?", next: "price_jeans" },
        ],
      },
      price_jeans: {
        ai: "49 Euro 99. Möchten Sie zahlen?",
        tr: "49 Euro 99. Ödemek ister misiniz?",
        options: [
          { text: "Ja, mit Karte bitte.", tr: "Evet, kartla lütfen.", next: "end_good" },
        ],
      },
      browse: {
        ai: "Natürlich! Wenn Sie Fragen haben, sprechen Sie mich einfach an.",
        tr: "Tabii! Sorularınız olursa bana sormaktan çekinmeyin.",
        options: [
          { text: "Danke!", tr: "Teşekkürler!", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Danke für Ihren Einkauf! Auf Wiedersehen!",
        tr: "Alışverişiniz için teşekkürler! Güle güle!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c16", titleDE: "In der Bibliothek", titleTR: "Kütüphanede",
    emoji: "📚", character: { name: "Bibliothekarin Frau Wolf", emoji: "📖" },
    level: "A1", xp: 50, tag: "Günlük Hayat", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Wie kann ich Ihnen helfen?",
        tr: "İyi günler! Size nasıl yardımcı olabilirim?",
        options: [
          { text: "Ich möchte einen Bibliotheksausweis beantragen.", tr: "Kütüphane kartı almak istiyorum.", next: "card_req" },
          { text: "Ich suche ein Buch über deutsche Grammatik.", tr: "Almanca gramer kitabı arıyorum.", next: "book_search" },
          { text: "Wo kann ich hier Bücher zurückgeben?", tr: "Kitapları nerede iade edebilirim?", next: "return" },
        ],
      },
      card_req: {
        ai: "Gerne! Haben Sie Ihren Ausweis und eine Adressbestätigung dabei?",
        tr: "Memnuniyetle! Kimliğiniz ve adres onayı yanınızda mı?",
        options: [
          { text: "Ja, hier ist alles.", tr: "Evet, işte her şey.", next: "card_made" },
          { text: "Ich habe nur meinen Reisepass.", tr: "Sadece pasaportum var.", next: "card_made" },
        ],
      },
      card_made: {
        ai: "Perfekt. Der Ausweis ist kostenlos. Sie können bis zu 10 Bücher für 4 Wochen ausleihen.",
        tr: "Mükemmel. Kart ücretsiz. 4 hafta için 10 kitaba kadar ödünç alabilirsiniz.",
        options: [
          { text: "Wunderbar! Kann ich gleich Bücher ausleihen?", tr: "Harika! Hemen kitap alabilir miyim?", next: "end_good" },
        ],
      },
      book_search: {
        ai: "Grammatikbücher sind in Regal B, dritte Etage. Welches Niveau suchen Sie?",
        tr: "Gramer kitapları B rafında, üçüncü katta. Hangi seviyeyi arıyorsunuz?",
        options: [
          { text: "A1 oder A2 Niveau.", tr: "A1 veya A2 seviyesi.", next: "book_found" },
          { text: "Ich brauche etwas für Fortgeschrittene.", tr: "İleri düzey için bir şey lazım.", next: "book_found" },
        ],
      },
      book_found: {
        ai: "Ich zeige Ihnen kurz das Regal. Bitte folgen Sie mir!",
        tr: "Size rafı göstereyim. Lütfen beni takip edin!",
        options: [
          { text: "Danke, sehr freundlich!", tr: "Teşekkürler, çok naziksiniz!", next: "end_good" },
        ],
      },
      return: {
        ai: "Die Rückgabebox ist am Eingang links. Oder Sie geben direkt hier ab.",
        tr: "İade kutusu girişin solunda. Veya burada doğrudan bırakabilirsiniz.",
        options: [
          { text: "Ich gebe sie direkt hier ab. Danke!", tr: "Burada bırakıyorum. Teşekkürler!", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Schön! Viel Spaß beim Lesen!",
        tr: "Güzel! Keyifli okumalar!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c17", titleDE: "Touristeninformation", titleTR: "Turizm Danışma",
    emoji: "🗺️", character: { name: "Touristinfo-Mitarbeiterin Jana", emoji: "🏙️" },
    level: "A1", xp: 55, tag: "Seyahat", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Willkommen in Berlin. Wie kann ich Ihnen helfen?",
        tr: "Merhaba! Berlin'e hoş geldiniz. Size nasıl yardımcı olabilirim?",
        options: [
          { text: "Was sind die wichtigsten Sehenswürdigkeiten?", tr: "En önemli turistik yerler neler?", next: "sights" },
          { text: "Haben Sie einen Stadtplan?", tr: "Şehir haritanız var mı?", next: "map" },
          { text: "Wie komme ich zum Brandenburger Tor?", tr: "Brandenburg Kapısı'na nasıl gidebilirim?", next: "directions" },
        ],
      },
      sights: {
        ai: "Unbedingt! Brandenburger Tor, Reichstag, Museumsinsel und der Alexanderplatz sind ein Muss!",
        tr: "Kesinlikle! Brandenburg Kapısı, Reichstag, Müzeler Adası ve Alexanderplatz mutlaka görülmeli!",
        options: [
          { text: "Wie lange brauche ich dafür?", tr: "Bu kadar zaman alır?", next: "time_needed" },
          { text: "Gibt es Stadtführungen?", tr: "Şehir turları var mı?", next: "tours" },
        ],
      },
      time_needed: {
        ai: "Für die Highlights: mindestens 2-3 Tage. Mit Museen auch eine Woche.",
        tr: "Öne çıkanlar için: en az 2-3 gün. Müzelerle birlikte bir hafta da olur.",
        options: [
          { text: "Gut. Gibt es ein Kombiticket?", tr: "Peki. Kombine bilet var mı?", next: "ticket" },
        ],
      },
      ticket: {
        ai: "Ja! Die Berlin Welcome Card — 3 Tage öffentlicher Verkehr plus Rabatte, 29 Euro.",
        tr: "Evet! Berlin Welcome Card — 3 gün toplu taşıma artı indirimler, 29 Euro.",
        options: [
          { text: "Das klingt gut! Wo kann ich sie kaufen?", tr: "Kulağa güzel geliyor! Nerede satın alabilirim?", next: "where_buy" },
        ],
      },
      where_buy: {
        ai: "Hier bei uns oder an jedem U-Bahn-Automaten.",
        tr: "Burada bizden veya her metro otomatından.",
        options: [
          { text: "Dann kaufe ich sie hier. Eine Karte, bitte.", tr: "O zaman burada alıyorum. Bir kart lütfen.", next: "end_good" },
        ],
      },
      map: {
        ai: "Natürlich, kostenlos! Hier ist auch eine Liste mit Restaurantempfehlungen.",
        tr: "Tabii, ücretsiz! İşte restoran önerileri listesi de var.",
        options: [
          { text: "Sehr nett! Danke.", tr: "Çok naziksiniz! Teşekkürler.", next: "end_good" },
        ],
      },
      tours: {
        ai: "Ja! Täglich um 10 und 14 Uhr auf Deutsch und Englisch. Treffpunkt: Brandenburger Tor.",
        tr: "Evet! Her gün 10 ve 14'te Almanca ve İngilizce olarak. Buluşma noktası: Brandenburg Kapısı.",
        options: [
          { text: "Wie viel kostet das?", tr: "Ne kadar tutuyor?", next: "tour_price" },
        ],
      },
      tour_price: {
        ai: "Die Tour ist kostenlos — Trinkgeld ist aber immer willkommen!",
        tr: "Tur ücretsiz — ama bahşiş her zaman memnuniyetle karşılanır!",
        options: [
          { text: "Wunderbar! Ich komme morgen um 10 Uhr.", tr: "Harika! Yarın saat 10'da geliyorum.", next: "end_good" },
        ],
      },
      directions: {
        ai: "Das Brandenburger Tor ist 10 Minuten zu Fuß — geradeaus Unter den Linden entlang.",
        tr: "Brandenburg Kapısı yürüyerek 10 dakika — Unter den Linden boyunca düz gidin.",
        options: [
          { text: "Danke! Und ist es umsonst?", tr: "Teşekkürler! Girişi ücretsiz mi?", next: "free_sight" },
        ],
      },
      free_sight: {
        ai: "Ja, das Brandenburger Tor ist kostenlos. Der Reichstag braucht eine Reservierung.",
        tr: "Evet, Brandenburg Kapısı ücretsiz. Reichstag için rezervasyon gerekiyor.",
        options: [
          { text: "Gut zu wissen! Danke.", tr: "Bunu bilmek güzel! Teşekkürler.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Viel Spaß in Berlin! Wenn Sie Fragen haben, kommen Sie jederzeit vorbei!",
        tr: "Berlin'de iyi eğlenceler! Sorularınız olursa her zaman gelin!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c18", titleDE: "Am Flughafen — Check-in", titleTR: "Havalimanında — Check-in",
    emoji: "✈️", character: { name: "Check-in-Personal Herr Becker", emoji: "🛫" },
    level: "A1", xp: 65, tag: "Seyahat", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Morgen! Darf ich Ihren Reisepass und das Ticket sehen?",
        tr: "Günaydın! Pasaportunuzu ve biletinizi görebilir miyim?",
        options: [
          { text: "Ja, hier bitte.", tr: "Evet, buyurun.", next: "luggage" },
          { text: "Ich habe nur digitales Ticket — hier auf dem Handy.", tr: "Sadece dijital biletim var — telefonda.", next: "luggage" },
        ],
      },
      luggage: {
        ai: "Danke. Möchten Sie Gepäck aufgeben?",
        tr: "Teşekkürler. Bagaj vermek ister misiniz?",
        options: [
          { text: "Ja, diesen Koffer bitte.", tr: "Evet, bu bavulu lütfen.", next: "weigh" },
          { text: "Nein, nur Handgepäck.", tr: "Hayır, sadece el bagajı.", next: "seat" },
        ],
      },
      weigh: {
        ai: "Der Koffer wiegt 22 Kilo — das ist okay bis 23 Kilo. Legen Sie ihn bitte aufs Band.",
        tr: "Bavul 22 kilo — 23 kiloya kadar tamam. Lütfen banda koyun.",
        options: [
          { text: "Gut, danke!", tr: "Güzel, teşekkürler!", next: "seat" },
        ],
      },
      seat: {
        ai: "Haben Sie einen Sitzplatzwunsch — Fenster oder Gang?",
        tr: "Koltuk tercihiniz var mı — pencere mi koridor mu?",
        options: [
          { text: "Fensterplatz, bitte.", tr: "Pencere kenarı, lütfen.", next: "boarding" },
          { text: "Gang, ich stehe oft auf.", tr: "Koridor, sık kalkıyorum.", next: "boarding" },
        ],
      },
      boarding: {
        ai: "Alles klar! Ihr Gate ist B12. Boarding beginnt um 10:30 Uhr. Schönen Flug!",
        tr: "Tamam! Kapınız B12. Biniş saat 10:30'da başlıyor. İyi uçuşlar!",
        options: [],
        isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c19", titleDE: "Im Imbiss / Fast Food", titleTR: "Fast Food'da Sipariş",
    emoji: "🍔", character: { name: "Verkäufer Ahmed", emoji: "🌭" },
    level: "A1", xp: 45, tag: "Yemek", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Was darf es sein?",
        tr: "Merhaba! Ne alacaksınız?",
        options: [
          { text: "Einmal Döner, bitte.", tr: "Bir döner lütfen.", next: "doner_options" },
          { text: "Ich hätte gern einen Burger und Pommes.", tr: "Bir burger ve patates kızartması istiyorum.", next: "burger_size" },
          { text: "Was empfehlen Sie?", tr: "Ne tavsiye edersiniz?", next: "recommendation" },
        ],
      },
      doner_options: {
        ai: "Mit Scharf oder ohne? Und Joghurtsoße?",
        tr: "Acılı mı acısız mı? Ve yoğurt sos?",
        options: [
          { text: "Mittel scharf und mit Joghurt.", tr: "Orta acı ve yoğurtlu.", next: "doner_drink" },
          { text: "Ohne Scharf, mit allem.", tr: "Acısız, her şeyle.", next: "doner_drink" },
        ],
      },
      doner_drink: {
        ai: "Etwas zu trinken dazu?",
        tr: "Yanında bir şey içecek misiniz?",
        options: [
          { text: "Ja, eine Cola bitte.", tr: "Evet, bir kola lütfen.", next: "pay" },
          { text: "Nein danke, nur der Döner.", tr: "Hayır teşekkürler, sadece döner.", next: "pay" },
        ],
      },
      burger_size: {
        ai: "Groß oder klein? Das große Menü kostet 9 Euro 50.",
        tr: "Büyük mü küçük mü? Büyük menü 9 Euro 50.",
        options: [
          { text: "Groß bitte.", tr: "Büyük lütfen.", next: "pay" },
          { text: "Klein reicht mir.", tr: "Küçük yeter bana.", next: "pay" },
        ],
      },
      recommendation: {
        ai: "Unser Spezial-Döner ist sehr beliebt! Mit Hähnchen, Salat und Knoblauchsoße.",
        tr: "Özel Dönerimiz çok popüler! Tavuklu, salatalı ve sarımsaklı soslu.",
        options: [
          { text: "Das klingt gut! Einmal bitte.", tr: "Kulağa güzel geliyor! Bir tane lütfen.", next: "doner_drink" },
        ],
      },
      pay: {
        ai: "Das macht 5 Euro 50. Zum Mitnehmen oder hier essen?",
        tr: "5 Euro 50 yapıyor. Paket mi yoksa burada mı yiyeceksiniz?",
        options: [
          { text: "Hier essen, bitte.", tr: "Burada yiyeceğim, lütfen.", next: "end_good" },
          { text: "Zum Mitnehmen.", tr: "Paket olarak.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Danke! Einen Moment bitte. Guten Appetit!",
        tr: "Teşekkürler! Bir dakika lütfen. Afiyet olsun!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c20", titleDE: "Termin absagen — am Telefon", titleTR: "Randevu İptal — Telefonda",
    emoji: "📞", character: { name: "Sekretärin Frau Mayer", emoji: "☎️" },
    level: "A1", xp: 55, tag: "Telefon", startNode: "start",
    nodes: {
      start: {
        ai: "Praxis Dr. Schmidt, guten Tag!",
        tr: "Dr. Schmidt Muayenehanesi, iyi günler!",
        options: [
          { text: "Hallo, ich bin Berdan. Ich muss leider meinen Termin absagen.", tr: "Merhaba, ben Berdan. Randevumu iptal etmem gerekiyor.", next: "why" },
          { text: "Guten Tag. Ich möchte meinen Termin verschieben.", tr: "İyi günler. Randevumu ertelemek istiyorum.", next: "when_cancel" },
        ],
      },
      why: {
        ai: "Oh, kein Problem. Was ist der Grund, wenn ich fragen darf?",
        tr: "Oh, sorun değil. Sorabilir miyim, sebebi ne?",
        options: [
          { text: "Ich bin krank und kann nicht kommen.", tr: "Hasta oldum ve gelemiyorum.", next: "reschedule" },
          { text: "Ich habe eine dringende Arbeitssache.", tr: "Acil bir iş durumum var.", next: "reschedule" },
        ],
      },
      when_cancel: {
        ai: "Wann haben Sie den Termin?",
        tr: "Randevunuz ne zaman?",
        options: [
          { text: "Morgen um 10 Uhr.", tr: "Yarın saat 10'da.", next: "reschedule" },
          { text: "Am Donnerstag um 14 Uhr.", tr: "Perşembe günü saat 14'te.", next: "reschedule" },
        ],
      },
      reschedule: {
        ai: "Verstanden. Möchten Sie einen neuen Termin vereinbaren?",
        tr: "Anladım. Yeni bir randevu almak ister misiniz?",
        options: [
          { text: "Ja, bitte. Nächste Woche wenn möglich.", tr: "Evet, lütfen. Mümkünse gelecek hafta.", next: "new_appointment" },
          { text: "Nein, ich melde mich später.", tr: "Hayır, daha sonra ararım.", next: "end_cancel" },
        ],
      },
      new_appointment: {
        ai: "Nächsten Dienstag um 11 Uhr — passt das?",
        tr: "Gelecek Salı saat 11 — uygun mudur?",
        options: [
          { text: "Ja, perfekt! Danke.", tr: "Evet, mükemmel! Teşekkürler.", next: "end_good" },
          { text: "Mittwoch wäre besser.", tr: "Çarşamba daha iyi olur.", next: "wednesday" },
        ],
      },
      wednesday: {
        ai: "Mittwoch um 15 Uhr habe ich noch frei.",
        tr: "Çarşamba saat 15'te müsait yerim var.",
        options: [
          { text: "Das passt gut. Danke!", tr: "Bu uygun. Teşekkürler!", next: "end_good" },
        ],
      },
      end_cancel: {
        ai: "Kein Problem. Auf Wiederhören!",
        tr: "Sorun değil. Görüşmek üzere!",
        options: [], isEnd: true, result: "success",
      },
      end_good: {
        ai: "Gut, wir sehen Sie dann. Gute Besserung und auf Wiederhören!",
        tr: "Güzel, o zaman görüşürüz. Geçmiş olsun ve görüşmek üzere!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c21", titleDE: "An der Bushaltestelle", titleTR: "Otobüs Durağında",
    emoji: "🚌", character: { name: "Passant Herr Jung", emoji: "🗺️" },
    level: "A1", xp: 45, tag: "Ulaşım", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Kann ich Ihnen helfen?",
        tr: "Merhaba! Size yardımcı olabilir miyim?",
        options: [
          { text: "Ja! Fährt hier der Bus zum Hauptbahnhof?", tr: "Evet! Buradan ana trene giden otobüs var mı?", next: "bus_info" },
          { text: "Wann fährt der nächste Bus in die Stadtmitte?", tr: "Şehir merkezine sonraki otobüs ne zaman?", next: "next_bus" },
        ],
      },
      bus_info: {
        ai: "Ja, die Linie 100 fährt direkt zum Hauptbahnhof. Alle 10 Minuten.",
        tr: "Evet, 100 numaralı hat direkt ana istasyona gidiyor. Her 10 dakikada bir.",
        options: [
          { text: "Wie lange dauert die Fahrt?", tr: "Yolculuk ne kadar sürer?", next: "duration" },
          { text: "Brauche ich eine Fahrkarte vorher?", tr: "Önceden bilet almam gerekiyor mu?", next: "ticket" },
        ],
      },
      next_bus: {
        ai: "Der nächste Bus kommt in 8 Minuten — um 14:22 Uhr.",
        tr: "Sonraki otobüs 8 dakika sonra geliyor — saat 14:22'de.",
        options: [
          { text: "Danke! Und wo kaufe ich ein Ticket?", tr: "Teşekkürler! Bilet nerede alırım?", next: "ticket" },
        ],
      },
      duration: {
        ai: "Ungefähr 15 Minuten bis zum Hauptbahnhof.",
        tr: "Ana istasyona yaklaşık 15 dakika.",
        options: [
          { text: "Gut. Wie viel kostet das Ticket?", tr: "Güzel. Bilet ne kadar?", next: "ticket" },
        ],
      },
      ticket: {
        ai: "Das Einzelticket kostet 2 Euro 90. Kaufen Sie es am Automaten hier.",
        tr: "Tekli bilet 2 Euro 90. Buradan otomattan alın.",
        options: [
          { text: "Danke für Ihre Hilfe!", tr: "Yardımınız için teşekkürler!", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Gern! Gute Fahrt!",
        tr: "Rica ederim! İyi yolculuklar!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c22", titleDE: "Im Elektromarkt", titleTR: "Elektronik Mağazasında",
    emoji: "📱", character: { name: "Berater Felix", emoji: "💻" },
    level: "A1", xp: 60, tag: "Alışveriş", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Womit kann ich Ihnen helfen?",
        tr: "Merhaba! Size nasıl yardımcı olabilirim?",
        options: [
          { text: "Ich suche ein neues Smartphone.", tr: "Yeni bir akıllı telefon arıyorum.", next: "phone_budget" },
          { text: "Mein Laptop ist kaputt. Was machen wir?", tr: "Dizüstü bilgisayarım bozuldu. Ne yapabiliriz?", next: "laptop_repair" },
          { text: "Haben Sie Kopfhörer mit Geräuschunterdrückung?", tr: "Gürültü önleyen kulaklıklarınız var mı?", next: "headphones" },
        ],
      },
      phone_budget: {
        ai: "Gerne! Was ist Ihr Budget?",
        tr: "Memnuniyetle! Bütçeniz ne?",
        options: [
          { text: "Bis 300 Euro.", tr: "300 Euro'ya kadar.", next: "phone_rec_mid" },
          { text: "Ich möchte etwas Gutes — bis 600 Euro.", tr: "İyi bir şey istiyorum — 600 Euro'ya kadar.", next: "phone_rec_high" },
        ],
      },
      phone_rec_mid: {
        ai: "Für 280 Euro empfehle ich dieses Samsung — sehr gute Kamera und Akku hält 2 Tage.",
        tr: "280 Euro için bu Samsung'u öneriyorum — çok iyi kamera ve pil 2 gün dayanıyor.",
        options: [
          { text: "Kann ich es mal ansehen?", tr: "Bir bakabilir miyim?", next: "demo" },
        ],
      },
      phone_rec_high: {
        ai: "Das iPhone 15 oder das Galaxy S24 sind top. Beide um 550 Euro.",
        tr: "iPhone 15 veya Galaxy S24 harika. İkisi de 550 Euro civarı.",
        options: [
          { text: "Was ist besser für Fotos?", tr: "Fotoğraf için hangisi daha iyi?", next: "camera_compare" },
        ],
      },
      camera_compare: {
        ai: "Das iPhone hat die beste Videokamera. Samsung hat mehr Zoomfunktionen.",
        tr: "iPhone'un video kamerası en iyi. Samsung'un daha fazla zoom özelliği var.",
        options: [
          { text: "Dann nehme ich das iPhone.", tr: "O zaman iPhone alıyorum.", next: "payment" },
          { text: "Samsung klingt praktischer für mich.", tr: "Samsung benim için daha pratik geliyor.", next: "payment" },
        ],
      },
      demo: {
        ai: "Natürlich! Hier, probieren Sie es aus.",
        tr: "Tabii! Buyurun, deneyin.",
        options: [
          { text: "Sehr gut! Ich nehme es.", tr: "Çok iyi! Bunu alıyorum.", next: "payment" },
        ],
      },
      laptop_repair: {
        ai: "Was ist das Problem? Startet er nicht oder ist der Bildschirm kaputt?",
        tr: "Sorun ne? Başlamıyor mu yoksa ekran mı bozuldu?",
        options: [
          { text: "Er startet nicht mehr.", tr: "Artık başlamıyor.", next: "repair_info" },
          { text: "Der Bildschirm ist kaputt.", tr: "Ekran bozuldu.", next: "repair_info" },
        ],
      },
      repair_info: {
        ai: "Bringen Sie ihn in unsere Reparaturwerkstatt — 3-5 Werktage, kostenloser Kostenvoranschlag.",
        tr: "Tamir atölyemize getirin — 3-5 iş günü, ücretsiz fiyat teklifi.",
        options: [
          { text: "Gut, ich mache das. Danke!", tr: "Güzel, yapacağım. Teşekkürler!", next: "end_good" },
        ],
      },
      headphones: {
        ai: "Ja! Sony und Bose sind unsere besten. Bose: 350 Euro, Sony: 290 Euro.",
        tr: "Evet! Sony ve Bose en iyilerimiz. Bose: 350 Euro, Sony: 290 Euro.",
        options: [
          { text: "Kann ich beide ausprobieren?", tr: "İkisini de deneyebilir miyim?", next: "demo" },
        ],
      },
      payment: {
        ai: "Sehr gut! Kasse ist vorne links. Möchten Sie eine Garantieverlängerung für 29 Euro?",
        tr: "Çok güzel! Kasa önde solda. 29 Euro için garanti uzatması ister misiniz?",
        options: [
          { text: "Ja, gerne.", tr: "Evet, memnuniyetle.", next: "end_good" },
          { text: "Nein danke, reicht so.", tr: "Hayır teşekkürler, yeter.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Danke für Ihren Einkauf! Auf Wiedersehen!",
        tr: "Alışverişiniz için teşekkürler! Güle güle!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c23", titleDE: "In der Autowerkstatt", titleTR: "Oto Tamirhanesinde",
    emoji: "🔧", character: { name: "Mechaniker Herr Vogel", emoji: "🚗" },
    level: "A1", xp: 65, tag: "Araç", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Was ist das Problem mit Ihrem Auto?",
        tr: "İyi günler! Arabanızda ne sorun var?",
        options: [
          { text: "Die Motorkontrollleuchte leuchtet.", tr: "Motor kontrol lambası yanıyor.", next: "check_engine" },
          { text: "Das Auto springt nicht mehr an.", tr: "Araba artık çalışmıyor.", next: "wont_start" },
          { text: "Ich brauche einen Ölwechsel.", tr: "Yağ değişimi lazım.", next: "oil_change" },
        ],
      },
      check_engine: {
        ai: "Okay, ich lese die Fehlercodes aus. Das dauert 20 Minuten. Warten Sie kurz?",
        tr: "Tamam, hata kodlarını okuyorum. 20 dakika sürer. Kısa bekler misiniz?",
        options: [
          { text: "Ja, ich warte hier.", tr: "Evet, burada bekliyorum.", next: "diagnosis" },
          { text: "Kann ich auch später wiederkommen?", tr: "Daha sonra da gelebilir miyim?", next: "appointment_car" },
        ],
      },
      diagnosis: {
        ai: "Der Sensor ist defekt. Reparatur dauert 2 Stunden und kostet ca. 180 Euro.",
        tr: "Sensör arızalı. Onarım 2 saat sürer ve yaklaşık 180 Euro tutar.",
        options: [
          { text: "Bitte reparieren Sie es.", tr: "Lütfen tamir edin.", next: "end_repair" },
          { text: "Kann ich das später machen lassen?", tr: "Bunu sonra yaptırabilir miyim?", next: "urgent" },
        ],
      },
      urgent: {
        ai: "Der Sensor ist wichtig. Ich empfehle, es bald zu reparieren.",
        tr: "Sensör önemli. Yakında tamir ettirmenizi öneririm.",
        options: [
          { text: "Okay, dann bitte jetzt reparieren.", tr: "Tamam, o zaman lütfen şimdi tamir edin.", next: "end_repair" },
        ],
      },
      wont_start: {
        ai: "Wann haben Sie das Auto zuletzt gefahren?",
        tr: "Arabayı en son ne zaman kullandınız?",
        options: [
          { text: "Vor einer Woche.", tr: "Bir hafta önce.", next: "battery" },
          { text: "Gestern noch. Dann plötzlich nichts.", tr: "Dün daha kullandım. Sonra aniden hiçbir şey.", next: "battery" },
        ],
      },
      battery: {
        ai: "Wahrscheinlich die Batterie. Ich teste sie — kostenlos!",
        tr: "Büyük ihtimalle akü. Test ediyorum — ücretsiz!",
        options: [
          { text: "Super, danke!", tr: "Harika, teşekkürler!", next: "end_repair" },
        ],
      },
      oil_change: {
        ai: "Kein Problem. Welches Öl — 5W40 oder 5W30?",
        tr: "Sorun değil. Hangi yağ — 5W40 mı 5W30 mi?",
        options: [
          { text: "Was empfehlen Sie für mein Auto?", tr: "Arabam için ne önerirsiniz?", next: "oil_rec" },
        ],
      },
      oil_rec: {
        ai: "Für Ihren Motor: 5W30. Inklusive Filter kostet es 65 Euro, fertig in 30 Minuten.",
        tr: "Motorunuz için: 5W30. Filtre dahil 65 Euro, 30 dakikada hazır.",
        options: [
          { text: "Gut, bitte machen.", tr: "Güzel, lütfen yapın.", next: "end_repair" },
        ],
      },
      appointment_car: {
        ai: "Ja! Morgen um 9 Uhr hätte ich Zeit für Sie.",
        tr: "Evet! Yarın saat 9'da vaktim olur.",
        options: [
          { text: "Gut, bis morgen! Danke.", tr: "Güzel, yarına kadar! Teşekkürler.", next: "end_good" },
        ],
      },
      end_repair: {
        ai: "Alles klar! Ich rufe Sie an, wenn das Auto fertig ist.",
        tr: "Tamam! Araba hazır olunca sizi arıyorum.",
        options: [], isEnd: true, result: "success",
      },
      end_good: {
        ai: "Auf Wiedersehen!",
        tr: "Güle güle!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c24", titleDE: "Im Schwimmbad", titleTR: "Yüzme Havuzunda",
    emoji: "🏊", character: { name: "Bademeister Stefan", emoji: "🌊" },
    level: "A1", xp: 50, tag: "Spor", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Willkommen im Stadtbad. Einzel oder Zehnerkarte?",
        tr: "Merhaba! Şehir havuzuna hoş geldiniz. Tekli mi yoksa onluk kart mı?",
        options: [
          { text: "Einmal Eintritt, bitte.", tr: "Bir kere giriş lütfen.", next: "single_price" },
          { text: "Ich möchte die Zehnerkarte.", tr: "Onluk kartı istiyorum.", next: "ten_price" },
          { text: "Gibt es eine Monatskarte?", tr: "Aylık kart var mı?", next: "monthly" },
        ],
      },
      single_price: {
        ai: "Der Eintritt kostet 5 Euro 50. Haben Sie einen Ausweis für Ermäßigung?",
        tr: "Giriş 5 Euro 50 tutuyor. İndirim için kimliğiniz var mı?",
        options: [
          { text: "Nein, voll preis ist okay.", tr: "Hayır, tam fiyat tamam.", next: "locker_info" },
          { text: "Ja, ich bin Student.", tr: "Evet, öğrenciyim.", next: "discount" },
        ],
      },
      discount: {
        ai: "Mit Studentenausweis: 4 Euro. Bitte zeigen Sie den Ausweis.",
        tr: "Öğrenci kimliğiyle: 4 Euro. Lütfen kimliği gösterin.",
        options: [
          { text: "Hier ist mein Studentenausweis.", tr: "İşte öğrenci kimliğim.", next: "locker_info" },
        ],
      },
      ten_price: {
        ai: "Die Zehnerkarte kostet 45 Euro — spart 10 Euro gegenüber Einzeleintritten.",
        tr: "Onluk kart 45 Euro — tekli girişlere göre 10 Euro tasarruf.",
        options: [
          { text: "Gut, ich nehme sie.", tr: "Güzel, onu alıyorum.", next: "locker_info" },
        ],
      },
      monthly: {
        ai: "Ja! 45 Euro pro Monat — unbegrenzt schwimmen.",
        tr: "Evet! Aylık 45 Euro — sınırsız yüzme.",
        options: [
          { text: "Das ist günstig! Ich nehme die Monatskarte.", tr: "Bu ucuz! Aylık kartı alıyorum.", next: "locker_info" },
        ],
      },
      locker_info: {
        ai: "Die Umkleidekabinen sind links. Schließfächer kosten 1 Euro Pfand — bekommen Sie zurück.",
        tr: "Soyunma odaları solda. Kilitli dolap için 1 Euro depozito — geri alırsınız.",
        options: [
          { text: "Danke! Wann ist die Sauna offen?", tr: "Teşekkürler! Sauna ne zaman açık?", next: "sauna" },
          { text: "Super, danke!", tr: "Harika, teşekkürler!", next: "end_good" },
        ],
      },
      sauna: {
        ai: "Sauna ist täglich von 14 bis 22 Uhr. Eintritt 8 Euro extra.",
        tr: "Sauna her gün 14'ten 22'ye kadar açık. Giriş 8 Euro ek.",
        options: [
          { text: "Gut zu wissen! Danke.", tr: "Bunu bilmek güzel! Teşekkürler.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Viel Spaß beim Schwimmen!",
        tr: "İyi yüzüşler!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c25", titleDE: "Im Museum", titleTR: "Müzede",
    emoji: "🏛️", character: { name: "Museumsmitarbeiter Herr Richter", emoji: "🎨" },
    level: "A1", xp: 50, tag: "Kültür", startNode: "start",
    nodes: {
      start: {
        ai: "Willkommen im Stadtmuseum! Eine Eintrittskarte?",
        tr: "Şehir Müzesine hoş geldiniz! Bir giriş bileti mi?",
        options: [
          { text: "Ja, eine Karte bitte. Was kostet der Eintritt?", tr: "Evet, bir bilet lütfen. Giriş ne kadar?", next: "prices" },
          { text: "Gibt es eine Führung auf Türkisch?", tr: "Türkçe rehberli tur var mı?", next: "tour_lang" },
          { text: "Haben Sie einen Audioguide?", tr: "Sesli rehber var mı?", next: "audioguide" },
        ],
      },
      prices: {
        ai: "Eintritt: Erwachsene 8 Euro, Kinder bis 12 Jahre frei, Studenten 5 Euro.",
        tr: "Giriş: Yetişkin 8 Euro, 12 yaşına kadar çocuklar ücretsiz, öğrenci 5 Euro.",
        options: [
          { text: "Einmal Erwachsener, bitte.", tr: "Bir yetişkin, lütfen.", next: "audioguide" },
          { text: "Studenten-Ticket — ich bin Student.", tr: "Öğrenci bileti — öğrenciyim.", next: "audioguide" },
        ],
      },
      tour_lang: {
        ai: "Türkisch leider nicht. Wir haben Führungen auf Deutsch und Englisch.",
        tr: "Türkçe maalesef yok. Almanca ve İngilizce rehberli turlarımız var.",
        options: [
          { text: "Wann ist die englische Führung?", tr: "İngilizce tur ne zaman?", next: "tour_time" },
          { text: "Dann nehme ich lieber einen Audioguide.", tr: "O zaman sesli rehber alayım.", next: "audioguide" },
        ],
      },
      tour_time: {
        ai: "Um 11 und 14 Uhr. Die nächste beginnt in 20 Minuten.",
        tr: "11 ve 14'te. Sonraki 20 dakika sonra başlıyor.",
        options: [
          { text: "Super, ich warte!", tr: "Harika, bekliyorum!", next: "end_good" },
        ],
      },
      audioguide: {
        ai: "Ja! Audioguide auf 10 Sprachen — kostenlos inklusive.",
        tr: "Evet! 10 dilde sesli rehber — ücretsiz dahil.",
        options: [
          { text: "Wunderbar! Auf Türkisch?", tr: "Harika! Türkçe var mı?", next: "turkish_audio" },
          { text: "Auf Englisch bitte.", tr: "İngilizce lütfen.", next: "end_good" },
        ],
      },
      turkish_audio: {
        ai: "Ja, auch auf Türkisch! Hier ist das Gerät.",
        tr: "Evet, Türkçe de var! İşte cihaz.",
        options: [],
        isEnd: true, result: "success",
      },
      end_good: {
        ai: "Viel Spaß! Die Ausstellung beginnt rechts.",
        tr: "İyi eğlenceler! Sergi sağdan başlıyor.",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c26", titleDE: "Rückgabe im Geschäft", titleTR: "Mağazada İade",
    emoji: "🔄", character: { name: "Verkäuferin Diana", emoji: "🛍️" },
    level: "A1", xp: 55, tag: "Alışveriş", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Wie kann ich Ihnen helfen?",
        tr: "Merhaba! Size nasıl yardımcı olabilirim?",
        options: [
          { text: "Ich möchte dieses Produkt zurückgeben.", tr: "Bu ürünü iade etmek istiyorum.", next: "reason" },
          { text: "Ich möchte umtauschen — andere Größe.", tr: "Değiştirmek istiyorum — farklı beden.", next: "exchange" },
        ],
      },
      reason: {
        ai: "Was ist der Grund? Defekt oder passt nicht?",
        tr: "Sebebi ne? Arızalı mı yoksa olmadı mı?",
        options: [
          { text: "Es ist defekt — schon beim Kauf.", tr: "Arızalı — satın aldığımda zaten.", next: "receipt" },
          { text: "Es passt leider nicht.", tr: "Maalesef olmadı.", next: "receipt" },
        ],
      },
      exchange: {
        ai: "Natürlich! Welche Größe brauchen Sie?",
        tr: "Tabii! Hangi bedene ihtiyacınız var?",
        options: [
          { text: "Eine Nummer größer — XL.", tr: "Bir beden büyük — XL.", next: "check_stock" },
          { text: "Kleiner — S bitte.", tr: "Küçük — S lütfen.", next: "check_stock" },
        ],
      },
      check_stock: {
        ai: "Ich schaue kurz im Lager... Ja, haben wir! Hier ist die richtige Größe.",
        tr: "Depoya bakıyorum... Evet, var! İşte doğru beden.",
        options: [
          { text: "Super! Vielen Dank.", tr: "Harika! Çok teşekkürler.", next: "end_good" },
        ],
      },
      receipt: {
        ai: "Haben Sie den Kassenbon?",
        tr: "Kasa fişiniz var mı?",
        options: [
          { text: "Ja, hier ist die Quittung.", tr: "Evet, işte fiş.", next: "refund_method" },
          { text: "Nein, leider nicht.", tr: "Hayır, maalesef yok.", next: "no_receipt" },
        ],
      },
      no_receipt: {
        ai: "Ohne Bon kann ich nur einen Gutschein anbieten. Ist das okay?",
        tr: "Fiş olmadan sadece hediye çeki sunabilirim. Tamam mı?",
        options: [
          { text: "Ja, ein Gutschein ist okay.", tr: "Evet, hediye çeki olur.", next: "end_good" },
          { text: "Nein, ich möchte Geld zurück.", tr: "Hayır, para iadesi istiyorum.", next: "manager" },
        ],
      },
      manager: {
        ai: "Ich rufe meinen Vorgesetzten — er kann Ausnahmen genehmigen.",
        tr: "Amirimini çağırıyorum — istisna onaylayabilir.",
        options: [
          { text: "Gut, danke.", tr: "Güzel, teşekkürler.", next: "end_good" },
        ],
      },
      refund_method: {
        ai: "Gut! Rückgabe auf die Karte oder bar?",
        tr: "Güzel! İade karta mı yoksa nakit mi?",
        options: [
          { text: "Auf die Karte, bitte.", tr: "Karta, lütfen.", next: "end_good" },
          { text: "Bar, wenn möglich.", tr: "Nakit, mümkünse.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Erledigt! Tut uns leid für die Unannehmlichkeiten. Auf Wiedersehen!",
        tr: "Hallettik! Yaşadığınız rahatsızlık için üzgünüz. Güle güle!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c27", titleDE: "Beim Kinderarzt", titleTR: "Çocuk Doktorunda",
    emoji: "👶", character: { name: "Dr. Schneider (Kinderarzt)", emoji: "🩺" },
    level: "A1", xp: 65, tag: "Sağlık", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Was ist mit Ihrem Kind passiert?",
        tr: "İyi günler! Çocuğunuzda ne oldu?",
        options: [
          { text: "Es hat hohes Fieber seit gestern.", tr: "Dünden beri yüksek ateşi var.", next: "fever_child" },
          { text: "Es hat Bauchschmerzen und erbricht.", tr: "Karın ağrısı var ve kusuyur.", next: "stomach" },
          { text: "Ich brauche die U7-Untersuchung.", tr: "U7 muayenesi lazım.", next: "checkup" },
        ],
      },
      fever_child: {
        ai: "Wie hoch ist das Fieber?",
        tr: "Ateş kaç derece?",
        options: [
          { text: "39,5 Grad.", tr: "39,5 derece.", next: "fever_examine" },
          { text: "Über 40 Grad.", tr: "40 derecenin üstünde.", next: "high_fever" },
        ],
      },
      high_fever: {
        ai: "Das ist hoch! Ich untersuche es sofort. Bitte legen Sie das Kind auf die Liege.",
        tr: "Bu yüksek! Hemen muayene ediyorum. Lütfen çocuğu yatağa yatırın.",
        options: [
          { text: "Ja, sofort.", tr: "Evet, hemen.", next: "fever_examine" },
        ],
      },
      fever_examine: {
        ai: "Hals ist gerötet — Mandelentzündung. Ich verschreibe Antibiotika.",
        tr: "Boğaz kızarmış — bademcik iltihabı. Antibiyotik yazıyorum.",
        options: [
          { text: "Ist das gefährlich?", tr: "Tehlikeli mi?", next: "danger_info" },
          { text: "Wie oft soll ich es geben?", tr: "Günde kaç kez vermeliyim?", next: "dosage" },
        ],
      },
      danger_info: {
        ai: "Nein, mit Antibiotika wird es in 3-4 Tagen besser. Viel Flüssigkeit geben!",
        tr: "Hayır, antibiyotikle 3-4 günde iyileşir. Çok sıvı verin!",
        options: [
          { text: "Wie oft das Antibiotikum?", tr: "Antibiyotiği kaç kez?", next: "dosage" },
        ],
      },
      dosage: {
        ai: "Zweimal täglich nach dem Essen — morgens und abends.",
        tr: "Günde iki kez yemekten sonra — sabah ve akşam.",
        options: [],
        isEnd: true, result: "success",
      },
      stomach: {
        ai: "Seit wann? Hat es etwas Ungewöhnliches gegessen?",
        tr: "Ne zamandır? Alışılmadık bir şey yedi mi?",
        options: [
          { text: "Seit heute Morgen. Nichts Besonderes.", tr: "Bu sabahtan beri. Özel bir şey yok.", next: "stomach_exam" },
        ],
      },
      stomach_exam: {
        ai: "Ich taste den Bauch ab... Wahrscheinlich Magen-Darm-Infekt. Viel Wasser und BRAT-Diät.",
        tr: "Karnına bakıyorum... Büyük ihtimalle mide-bağırsak enfeksiyonu. Çok su ve hafif diyet.",
        options: [],
        isEnd: true, result: "success",
      },
      checkup: {
        ai: "Wie alt ist das Kind?",
        tr: "Çocuk kaç yaşında?",
        options: [
          { text: "Zwei Jahre alt.", tr: "İki yaşında.", next: "checkup_good" },
        ],
      },
      checkup_good: {
        ai: "Perfekt, genau zum richtigen Zeitpunkt. Bitte legen Sie das Kind auf die Untersuchungsliege.",
        tr: "Mükemmel, tam zamanında. Lütfen çocuğu muayene yatağına yatırın.",
        options: [],
        isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c28", titleDE: "Im Pizzeria — Bestellen und Beschwerde", titleTR: "Pizzacıda — Sipariş ve Şikâyet",
    emoji: "🍕", character: { name: "Kellner Roberto", emoji: "🇮🇹" },
    level: "A1", xp: 60, tag: "Yemek", startNode: "start",
    nodes: {
      start: {
        ai: "Buonasera! Willkommen bei Pizza Roma! Haben Sie schon gewählt?",
        tr: "Buonasera! Pizza Roma'ya hoş geldiniz! Seçtiniz mi?",
        options: [
          { text: "Ja, ich nehme eine Margherita, bitte.", tr: "Evet, bir Margherita alıyorum.", next: "size" },
          { text: "Noch nicht, was empfehlen Sie?", tr: "Henüz değil, ne tavsiye edersiniz?", next: "recommendation" },
        ],
      },
      recommendation: {
        ai: "Unsere Signature-Pizza mit Prosciutto und Rucola ist fantastisch!",
        tr: "Prosciutto ve roka ile imza pizzamız harika!",
        options: [
          { text: "Das klingt gut! Eine Portion bitte.", tr: "Kulağa güzel geliyor! Bir porsiyon lütfen.", next: "size" },
          { text: "Ich bin Vegetarier. Gibt es etwas ohne Fleisch?", tr: "Vejetaryenim. Etsiz bir şey var mı?", next: "veggie" },
        ],
      },
      veggie: {
        ai: "Ja! Funghi (Pilze) oder Quattro Formaggi (vier Käse) sind wunderbar.",
        tr: "Evet! Funghi (mantarlı) veya Quattro Formaggi (dört peynirli) harika.",
        options: [
          { text: "Quattro Formaggi bitte.", tr: "Quattro Formaggi lütfen.", next: "size" },
        ],
      },
      size: {
        ai: "Klein, mittel oder groß?",
        tr: "Küçük, orta mı yoksa büyük mü?",
        options: [
          { text: "Mittel, bitte.", tr: "Orta, lütfen.", next: "drink" },
          { text: "Groß — ich habe Hunger!", tr: "Büyük — açım!", next: "drink" },
        ],
      },
      drink: {
        ai: "Etwas zu trinken?",
        tr: "İçecek bir şey?",
        options: [
          { text: "Ein Mineralwasser, bitte.", tr: "Bir maden suyu, lütfen.", next: "waiting" },
          { text: "Ein Glas Rotwein, bitte.", tr: "Bir bardak kırmızı şarap, lütfen.", next: "waiting" },
        ],
      },
      waiting: {
        ai: "Kommt sofort! ... [20 Minuten später] Hier ist Ihre Pizza!",
        tr: "Hemen geliyor! ... [20 dakika sonra] İşte pizzanız!",
        options: [
          { text: "Danke! Oh, die Pizza ist kalt.", tr: "Teşekkürler! Oh, pizza soğuk.", next: "complaint" },
          { text: "Danke, sieht lecker aus!", tr: "Teşekkürler, lezzetli görünüyor!", next: "end_good" },
        ],
      },
      complaint: {
        ai: "Oh, das tut mir sehr leid! Ich bringe Ihnen sofort eine neue, heiße Pizza.",
        tr: "Oh, çok özür dilerim! Size hemen yeni, sıcak bir pizza getiriyorum.",
        options: [
          { text: "Danke! Und ein kleiner Rabatt?", tr: "Teşekkürler! Ve küçük bir indirim?", next: "discount_offer" },
          { text: "Danke, das ist sehr nett.", tr: "Teşekkürler, bu çok nazik.", next: "end_good" },
        ],
      },
      discount_offer: {
        ai: "Natürlich! 15% Rabatt auf Ihre Rechnung. Entschuldigung nochmals.",
        tr: "Tabii! Hesabınızdan %15 indirim. Bir kez daha özür dilerim.",
        options: [],
        isEnd: true, result: "success",
      },
      end_good: {
        ai: "Danke für Ihren Besuch! Guten Appetit!",
        tr: "Ziyaretiniz için teşekkürler! Afiyet olsun!",
        options: [], isEnd: true, result: "success",
      },
    },
  },
];
