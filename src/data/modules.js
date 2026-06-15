// src/data/modules.js

export const modules = [
  {
    id: 1,
    titleDE: "Begrüßung",
    titleTR: "Selamlaşma ve Tanıtma",
    icon: "👋",
    color: "#6366f1",
    description: "Almanca tanışma, temel selamlaşma kalıpları ve kendini tanıtma cümleleri.",
    grammar: {
      title: "Kişi Zamirleri & 'Sein' ve 'Heißen' Fiilleri",
      notes: [
        "Almanca'da iki türlü hitap şekli vardır: Resmi (Sie - Siz) ve Samimi (du - sen). Yeni tanıştığınız kişilere mutlaka 'Sie' diye hitap etmelisiniz.",
        "Kişi Zamirleri (Personalpronomen):\n- ich (ben), du (sen), er/sie/es (o - eril/dişil/nötr)\n- wir (biz), ihr (sizler), sie (onlar), Sie (Siz - saygı)",
        "Olmak (sein) fiili Almanca'nın en önemli düzensiz fiilidir:\n- ich bin\n- du bist\n- er/sie/es ist\n- wir sind\n- ihr seid\n- sie/Sie sind",
        "Adı olmak (heißen) fiili çekimi:\n- ich heiße\n- du heißt\n- er/sie/es heißt\n- wir heißen\n- ihr heißt\n- sie/Sie heißen",
        "Nereli olduğunuzu belirtmek için 'kommen aus' kalıbı kullanılır: 'Ich komme aus der Türkei.' (Türkiye'den geliyorum.)",
        "Nerede yaşadığınızı söylemek için 'wohnen in' kullanılır: 'Ich wohne in İzmir.' (İzmir'de ikamet ediyorum.)"
      ]
    },
    grammarTables: [
      {
        title: "sein (olmak) Fiili Çekimi",
        headers: ["Kişi Zamiri", "sein", "Türkçe"],
        rows: [
          ["ich", "bin", "ben-im"],
          ["du", "bist", "sen-sin"],
          ["er / sie / es", "ist", "o-dur"],
          ["wir", "sind", "biz-iz"],
          ["ihr", "seid", "siz-siniz"],
          ["sie / Sie", "sind", "onlar / Siz"],
        ]
      },
      {
        title: "Selamlama Kalıpları (Zamanına Göre)",
        headers: ["Durum", "Almanca", "Türkçe"],
        rows: [
          ["Sabah", "Guten Morgen!", "Günaydın!"],
          ["Öğlen", "Guten Tag!", "İyi günler!"],
          ["Akşam", "Guten Abend!", "İyi akşamlar!"],
          ["Gece (veda)", "Gute Nacht!", "İyi geceler!"],
          ["Samimi (her zaman)", "Hallo!", "Merhaba!"],
          ["Ayrılırken", "Auf Wiedersehen!", "Görüşürüz!"],
          ["Samimi veda", "Tschüss!", "Hoşça kal!"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanlar 'du' ve 'Sie' ayrımına çok önem verir. İş hayatında ve yaşlılara karşı daima 'Sie' (büyük harf) kullanılır. Birisi size 'duzen' (du deme izni) teklif edene kadar bekleyin. Bu ülkelerde bu adım, gerçek bir güven ve yakınlık göstergesidir.",
    annaTip: "💡 Anna'nın İpucu: Almanya'da tanışırken el sıkışmak standarttır. Sarılmak ya da yanaktan öpmek yabancılarla pek yapılmaz. 'Wie geht es Ihnen?' (formal) veya 'Wie geht es dir?' (samimi) diye sormayı da unutmayın!",
    commonMistakes: [
      "❌ 'Ben Ahmet ismindeyim' → 'Ich bin der Name Ahmet' DEĞİL!",
      "✅ 'Ich heiße Ahmet.' veya 'Ich bin Ahmet.' deyin.",
      "❌ 'Ich bin aus Türkei' → 'der' artikeli zorunludur!",
      "✅ 'Ich komme aus der Türkei.' (Türkiye için mutlaka 'der' kullanılır)",
    ],
    examples: [
      { de: "Guten Morgen! Ich heiße Anna.", tr: "Günaydın! Benim adım Anna." },
      { de: "Woher kommen Sie?", tr: "Siz nerelisiniz? (Resmi)" },
      { de: "Ich komme aus der Türkei und wohne in Berlin.", tr: "Türkiye'den geliyorum ve Berlin'de yaşıyorum." },
      { de: "Das ist mein Kollege, Herr Müller.", tr: "Bu benim meslektaşım, Bay Müller." },
      { de: "Sehr angenehm!", tr: "Memnun oldum!" },
    ]
  },
  {
    id: 2,
    titleDE: "Zahlen & Zeit",
    titleTR: "Sayılar, Saat ve Tarih",
    icon: "⏰",
    color: "#8b5cf6",
    description: "Sayılar (0-100), saat sorma, söyleme ve tarih/yaş belirtme kalıpları.",
    grammar: {
      title: "Saatler (Uhrzeit) ve Sayı Kuralları",
      notes: [
        "Sayılar 21'den itibaren birler basamağı + 'und' (ve) + onlar basamağı şeklinde okunur: einundzwanzig (21), fünfunddreißig (35).",
        "Saat sormanın iki yolu vardır:\n- Wie spät ist es? (Saat kaç?)\n- Wie viel Uhr ist es? (Saat kaç?)",
        "Günlük (Gayriresmi) Saat Söyleme Kuralları:\n- 'Halb' (buçuk) söylenirken bir sonraki saat söylenir! Örneğin; 02:30 -> 'Es ist halb drei' (Üçe yarım var / İki buçuk).\n- 'Viertel vor' (çeyrek kala) ve 'Viertel nach' (çeyrek geçe) kullanılır: 03:45 -> 'Viertel vor vier', 03:15 -> 'Viertel nach drei'.",
        "Yaş belirtirken 'sein' fiili kullanılır: 'Ich bin 25 Jahre alt.' (25 yaşındayım)."
      ]
    },
    grammarTables: [
      {
        title: "Temel Sayılar (1-20)",
        headers: ["Rakam", "Almanca", "Rakam", "Almanca"],
        rows: [
          ["1", "eins", "11", "elf"],
          ["2", "zwei", "12", "zwölf"],
          ["3", "drei", "13", "dreizehn"],
          ["4", "vier", "14", "vierzehn"],
          ["5", "fünf", "15", "fünfzehn"],
          ["6", "sechs", "16", "sechzehn"],
          ["7", "sieben", "17", "siebzehn"],
          ["8", "acht", "18", "achtzehn"],
          ["9", "neun", "19", "neunzehn"],
          ["10", "zehn", "20", "zwanzig"],
        ]
      },
      {
        title: "Onluklar ve Yüzlükler",
        headers: ["Rakam", "Almanca", "Rakam", "Almanca"],
        rows: [
          ["30", "dreißig", "70", "siebzig"],
          ["40", "vierzig", "80", "achtzig"],
          ["50", "fünfzig", "90", "neunzig"],
          ["60", "sechzig", "100", "hundert"],
        ]
      },
      {
        title: "Saat Söyleme (Gayriresmi)",
        headers: ["Dijital", "Almanca", "Türkçe"],
        rows: [
          ["08:00", "Es ist acht Uhr.", "Saat sekiz."],
          ["08:15", "Es ist Viertel nach acht.", "Sekizi çeyrek geçiyor."],
          ["08:30", "Es ist halb neun.", "Dokuza yarım var. (Sekiz buçuk)"],
          ["08:45", "Es ist Viertel vor neun.", "Dokuza çeyrek kala."],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanlar dakikliğe büyük önem verir! 'Pünktlichkeit ist eine Tugend' (Dakiklik bir erdemdir) denir. Bir davet veya iş toplantısına 5 dakika geç kalmak bile rahatsızlık yaratabilir. Almanya'da 'akademik çeyrek' diye bir kavram yoktur — verilen saat, tam o saattir!",
    annaTip: "💡 Anna'nın İpucu: 'halb' kelimesi İngilizce 'half past' gibi çalışmaz! 'halb drei' = 02:30'dur, 03:30 değil. Bunu asla unutmayın — sınavlarda ve günlük hayatta çok önemli!",
    commonMistakes: [
      "❌ 'halb drei' = 3:30 sanmak → Hayır! 'halb drei' = 2:30'dur.",
      "✅ 'halb' her zaman BİR SONRAKİ saate atıfta bulunur.",
      "❌ 'Ich habe 25 Jahre' → Almanca'da 'haben' kullanılmaz!",
      "✅ 'Ich bin 25 Jahre alt.' deyin.",
    ],
    examples: [
      { de: "Wie spät ist es? — Es ist halb sieben.", tr: "Saat kaç? — Saat altı buçuk." },
      { de: "Der Zug fährt um Viertel nach drei ab.", tr: "Tren üçü çeyrek geçe kalkıyor." },
      { de: "Mein Bruder ist zwölf Jahre alt.", tr: "Kardeşim on iki yaşında." },
      { de: "Ich habe am fünfzehnten Juli Geburtstag.", tr: "Doğum günüm 15 Temmuz'da." },
    ]
  },
  {
    id: 3,
    titleDE: "Im Supermarkt",
    titleTR: "Markette Alışveriş",
    icon: "🛒",
    color: "#ec4899",
    description: "Süpermarkette yiyecek ve içecekler, fiyat sorma ve ödeme yapma konuşmaları.",
    grammar: {
      title: "Tanımlıklar (Artikel) ve İsmin Belirtme Hali (Akkusativ)",
      notes: [
        "Almanca'da her ismin bir artikeli (cinsiyeti) vardır: der (eril), die (dişil), das (nötr). Çoğul isimlerin artikeli her zaman 'die' olur.",
        "Belirsiz artikeller: ein (der/das için), eine (die için). Olumsuz belirsiz artikeller: kein (der/das için), keine (die için).",
        "Akkusativ (İsmin -i Hali):\n- Sadece ERİL (der) artikel değişir! 'der' artikeli 'den' olur.\n- Belirsiz artikel 'einen' olur, olumsuz ise 'keinen' olur.\n- Dişil (die) ve nötr (das) artikeller tamamen aynı kalır.",
        "Örnek: 'Ich kaufe einen Apfel.' (der Apfel -> einen Apfel) ama 'Ich kaufe ein Brot.' (das Brot -> ein Brot).",
        "Fiyat sorarken 'Was kostet...' (tekil için) veya 'Was kosten...' (çoğul için) kullanılır: 'Was kostet das Brot?'"
      ]
    },
    grammarTables: [
      {
        title: "Artikel Tablosu (Nominativ → Akkusativ)",
        headers: ["Cinsiyet", "Nominativ (özne)", "Akkusativ (nesne)"],
        rows: [
          ["Eril (m)", "der / ein / kein", "den / einen / keinen ⚠️"],
          ["Dişil (f)", "die / eine / keine", "die / eine / keine"],
          ["Nötr (n)", "das / ein / kein", "das / ein / kein"],
          ["Çoğul", "die / – / keine", "die / – / keine"],
        ]
      },
      {
        title: "Yaygın Gıda Kelimeleri ve Artikelleri",
        headers: ["Artikel", "Almanca", "Türkçe"],
        rows: [
          ["der", "Apfel", "Elma"],
          ["die", "Milch", "Süt"],
          ["das", "Brot", "Ekmek"],
          ["der", "Käse", "Peynir"],
          ["die", "Banane", "Muz"],
          ["das", "Ei", "Yumurta"],
          ["der", "Saft", "Meyve Suyu"],
          ["die", "Butter", "Tereyağı"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da süpermarketlerde alışveriş yaparken kendi poşetinizi getirmeniz beklenir. Kassa'da (kasa) çok hızlı çalışırlar — ürünleri sepete hızlıca atmaya hazır olun! Ayrıca Pfand (depozito) sistemi var: plastik şişe ve kutular için ödenen para, markete iade edince geri alınır.",
    annaTip: "💡 Anna'nın İpucu: Almanya'da pazarlık yapılmaz. Fiyat etiket fiyatıdır. Ama 'Angebot' (indirim) veya 'Sonderangebot' (özel indirim) kelimelerini görünce fırsatı kaçırmayın!",
    commonMistakes: [
      "❌ 'Ich kaufe der Apfel' → Akkusativ'de eril artikel 'den' olur!",
      "✅ 'Ich kaufe den Apfel.' deyin.",
      "❌ 'Was kostet die Äpfel?' → Çoğulda 'kosten' kullanılır.",
      "✅ 'Was kosten die Äpfel?' deyin.",
    ],
    examples: [
      { de: "Haben Sie frische Tomaten?", tr: "Taze domatesleriniz var mı?" },
      { de: "Was kostet ein Kilo Äpfel?", tr: "Bir kilo elma ne kadar?" },
      { de: "Ich nehme einen Liter Milch, bitte.", tr: "Bir litre süt alacağım, lütfen." },
      { de: "Haben Sie eine Tüte für mich?", tr: "Benim için bir torba var mı?" },
      { de: "Ich zahle mit Karte.", tr: "Kartla ödeyeceğim." },
    ]
  },
  {
    id: 4,
    titleDE: "Verkehrsmittel",
    titleTR: "Ulaşım - Tren, Metro, Otobüs",
    icon: "🚌",
    color: "#10b981",
    description: "Ulaşım araçları, istasyon, bilet alma ve yön/adres sorma diyalogları.",
    grammar: {
      title: "Ulaşım Edatları & Dativ ve Hareket Fiilleri",
      notes: [
        "Bir araç vasıtasıyla gitmeyi belirtmek için 'mit' edatı + Dativ ismi kullanılır.\n- mit + dem Zug (der Zug -> dem)\n- mit + dem Auto (das Auto -> dem)\n- mit + der U-Bahn (die U-Bahn -> der)",
        "Fiiller:\n- fahren: Tekerlekli araçlarla veya trenle gitmek.\n- gehen: Yürüyerek gitmek.\n- fliegen: Uçakla uçarak gitmek.",
        "Edatlar:\n- zu + Dativ: Bir yere doğru gitmek (yönelme). 'Ich gehe zum Bahnhof' (zu + dem = zum).\n- nach + Dativ: Ülke ve şehirlere giderken kullanılır. 'Ich fahre nach Berlin.'",
        "Yol tarifinde yönler: links (sol), rechts (sağ), geradeaus (düz)."
      ]
    },
    grammarTables: [
      {
        title: "Ulaşım Araçları + mit + Dativ",
        headers: ["Araç (Nominativ)", "Cinsiyeti", "mit + Dativ"],
        rows: [
          ["der Zug", "Eril", "mit dem Zug"],
          ["der Bus", "Eril", "mit dem Bus"],
          ["das Auto", "Nötr", "mit dem Auto"],
          ["das Fahrrad", "Nötr", "mit dem Fahrrad"],
          ["die U-Bahn", "Dişil", "mit der U-Bahn"],
          ["die Straßenbahn", "Dişil", "mit der Straßenbahn"],
        ]
      },
      {
        title: "Yön ve Konum Edatları",
        headers: ["Edat", "Kullanım", "Örnek"],
        rows: [
          ["nach", "Şehir/ülkeye gidiş", "Ich fahre nach München."],
          ["zu + Dativ", "Belirli yere gidiş", "Ich gehe zum Bahnhof."],
          ["in + Akkusativ", "İçine giriş", "Ich gehe in das Hotel."],
          ["an + Akkusativ", "Kenara gidiş", "Ich gehe an den Strand."],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da toplu taşıma sistemi (ÖPNV) dünya standartlarındadır. S-Bahn (hızlı şehir treni), U-Bahn (metro), Bus ve Straßenbahn (tramvay) birbirine entegre çalışır. Bilet almadan binmek 'Schwarzfahren' (kaçak yolculuk) sayılır ve çok yüksek ceza gerektirir. Peron kontrolcülerine dikkat!",
    annaTip: "💡 Anna'nın İpucu: Almanya'da Deutsche Bahn (DB) trenleri sık sık 'Verspätung' (gecikme) yaşar. Uygulama ve panolarda 'pünktlich' (dakik) veya 'Verspätung: X Minuten' yazdığını kontrol etmeyi alışkanlık edin!",
    commonMistakes: [
      "❌ 'Ich fahre mit die U-Bahn' → 'mit' daima Dativ alır!",
      "✅ 'Ich fahre mit der U-Bahn.' (die → der Dativ'de)",
      "❌ 'Ich gehe zu Berlin' → Şehirler için 'nach' kullanılır.",
      "✅ 'Ich fahre nach Berlin.' deyin.",
    ],
    examples: [
      { de: "Entschuldigung, wie komme ich zum Hauptbahnhof?", tr: "Affedersiniz, ana istasyona nasıl gidebilirim?" },
      { de: "Nehmen Sie die U-Bahn Linie 3 bis Marienplatz.", tr: "Marienplatz'a kadar 3 numaralı metroyu alın." },
      { de: "Wo kann ich ein Ticket kaufen?", tr: "Bilet nereden satın alabilirim?" },
      { de: "Einmal nach Hamburg, hin und zurück, bitte.", tr: "Hamburg'a bir kez gidiş-dönüş lütfen." },
      { de: "Der nächste Zug fährt um 14:30 Uhr ab.", tr: "Bir sonraki tren saat 14:30'da kalkıyor." },
    ]
  },
  {
    id: 5,
    titleDE: "Im Restaurant",
    titleTR: "Restoran ve Kafede Sipariş",
    icon: "🍽️",
    color: "#f59e0b",
    description: "Restoranda masa ayırtma, yemek ve içecek sipariş etme ve hesap isteme.",
    grammar: {
      title: "Möchten Fiili ve Kibar Rica Cümleleri",
      notes: [
        "İstek belirtirken 'wollen' (istemek) yerine kibar olan 'möchten' (istemek / arzu etmek) tercih edilir:\n- ich möchte, du möchtest, er/sie/es möchte, wir möchten, ihr möchtet, sie/Sie möchten.",
        "Sipariş verirken: 'Ich möchte bitte einen Kaffee.' (Kaffee eril olduğundan Akkusativ: einen Kaffee).",
        "Hesap isterken: 'Die Rechnung, bitte!' (Hesap, lütfen!) veya 'Zahlen, bitte!' (Ödeme lütfen!).",
        "Almanca'da bahşiş verirken parayı uzatıp 'Stimmt so!' (Üstü kalsın / Tamamdır) denir."
      ]
    },
    grammarTables: [
      {
        title: "möchten Fiil Çekimi",
        headers: ["Kişi", "möchten", "Örnek"],
        rows: [
          ["ich", "möchte", "Ich möchte einen Tee."],
          ["du", "möchtest", "Du möchtest ein Wasser."],
          ["er/sie/es", "möchte", "Er möchte die Speisekarte."],
          ["wir", "möchten", "Wir möchten bestellen."],
          ["ihr", "möchtet", "Ihr möchtet zahlen."],
          ["sie/Sie", "möchten", "Sie möchten einen Tisch."],
        ]
      },
      {
        title: "Restoran Kalıpları",
        headers: ["Durum", "Almanca", "Türkçe"],
        rows: [
          ["Rezervasyon", "Ich möchte einen Tisch reservieren.", "Masa ayırtmak istiyorum."],
          ["Sipariş", "Ich nehme das Schnitzel, bitte.", "Schnitzel alacağım lütfen."],
          ["Sorun", "Das Essen ist kalt.", "Yemek soğuk."],
          ["Hesap", "Die Rechnung, bitte!", "Hesap lütfen!"],
          ["Bahşiş", "Stimmt so!", "Üstü kalsın!"],
          ["Beğeni", "Es hat sehr gut geschmeckt!", "Çok lezzetliydi!"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da servis ücreti genellikle faturaya dahildir ama garsonlara %5-10 oranında bahşiş vermek yaygın bir gelenektir. Hesabı ayrı ayrı ödemek ('getrennt zahlen') çok normaldir — grupla yemeğe gidildiğinde, her kişi kendi payını öder. Bu Türk kültüründe tuhaf görünebilir ama Almanya'da tamamen kabul görmektedir.",
    annaTip: "💡 Anna'nın İpucu: Almanya'da su genellikle otomatik gelmez ve ücretsiz değildir. 'Leitungswasser' (musluk suyu) isteyebilirsiniz — yasal olarak ücretsiz verilmesi gerekir, ama bazı restoranlar bunu reddedebilir. Maden suyu için 'Mineralwasser' veya 'ein Wasser mit/ohne Kohlensäure' deyin.",
    commonMistakes: [
      "❌ 'Ich will einen Kaffee' → 'wollen' çok doğrudan ve kaba hissettirilebilir.",
      "✅ 'Ich möchte bitte einen Kaffee.' (kibar form) deyin.",
      "❌ Hesap isterken sadece 'Check please' gibi İngilizce + Almanca karışımı.",
      "✅ 'Die Rechnung, bitte!' veya 'Zahlen, bitte!' deyin.",
    ],
    examples: [
      { de: "Haben Sie einen Tisch für zwei Personen?", tr: "İki kişilik masanız var mı?" },
      { de: "Was empfehlen Sie heute?", tr: "Bugün ne tavsiye edersiniz?" },
      { de: "Ich bin Vegetarier. Gibt es Gerichte ohne Fleisch?", tr: "Vejetaryenim. Etsiz yemek var mı?" },
      { de: "Das Schnitzel war ausgezeichnet!", tr: "Schnitzel harikaydı!" },
      { de: "Wir möchten getrennt zahlen, bitte.", tr: "Ayrı ayrı ödemek istiyoruz lütfen." },
    ]
  },
  {
    id: 6,
    titleDE: "Arzt & Apotheke",
    titleTR: "Doktor ve Eczane",
    icon: "⚕️",
    color: "#3b82f6",
    description: "Hastalıklar, şikayetler, doktor muayenesi ve eczaneden ilaç alma.",
    grammar: {
      title: "Vücut Parçaları & Acı/Ağrı Belirtme ve Emir Kipi",
      notes: [
        "Ağrıyı ifade etmek için 'weh tun' (acı vermek/ağrımak) fiili veya 'Schmerzen haben' (ağrılara sahip olmak) kalıbı kullanılır:\n- 'Mein Kopf tut weh.' (Başım ağrıyor - tekil)\n- 'Meine Ohren tun weh.' (Kulaklarım ağrıyor - çoğul)\n- 'Ich habe Kopfschmerzen.' (Baş ağrım var).",
        "Doktor tavsiyelerinde Emir Kipi (Imperativ) kullanılır (Resmi): Fiil cümlenin başına gelir ve sonuna 'Sie' eklenir:\n- 'Trinken Sie viel Wasser!' (Çok su içiniz!)\n- 'Bleiben Sie im Bett!' (Yatakta kalınız!)",
        "Eczanede reçeteli ilaç alırken: 'Ich habe ein Rezept für dieses Medikament.'"
      ]
    },
    grammarTables: [
      {
        title: "Vücut Bölümleri (der Körper)",
        headers: ["Artikel", "Almanca", "Türkçe"],
        rows: [
          ["der", "Kopf", "Baş"],
          ["das", "Auge (-n)", "Göz"],
          ["das", "Ohr (-en)", "Kulak"],
          ["die", "Nase", "Burun"],
          ["der", "Mund", "Ağız"],
          ["der", "Hals", "Boyun / Boğaz"],
          ["die", "Brust", "Göğüs"],
          ["der", "Bauch", "Karın"],
          ["der", "Rücken", "Sırt"],
          ["der", "Arm (-e)", "Kol"],
          ["die", "Hand (-̈e)", "El"],
          ["das", "Bein (-e)", "Bacak"],
        ]
      },
      {
        title: "Hastalık İfadeleri",
        headers: ["Şikayet", "Almanca", "Türkçe"],
        rows: [
          ["Ateş", "Ich habe Fieber.", "Ateşim var."],
          ["Öksürük", "Ich habe Husten.", "Öksürüğüm var."],
          ["Nezle", "Ich habe Schnupfen.", "Nezlem var."],
          ["Baş ağrısı", "Ich habe Kopfschmerzen.", "Baş ağrım var."],
          ["Mide ağrısı", "Ich habe Bauchschmerzen.", "Mide ağrım var."],
          ["Halsschmerzen", "Ich habe Halsschmerzen.", "Boğaz ağrım var."],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da doktora gitmek için önce 'Hausarzt' (aile doktoru) veya 'Kassenarzt' (sigorta doktoru) randevusu almanız gerekir. Acil durum dışında direkt uzman doktora gidemezsiniz. Almanya'da Krankenkasse (sağlık sigortası) zorunludur ve çok kapsamlıdır. Eczaneler yeşil 'A' (Apotheke) logosuyla tanınır.",
    annaTip: "💡 Anna'nın İpucu: Almanya'da eczaneden sadece reçetesiz ilaç almanız gerekmiyorsa, eczacıdan tavsiye isteyin — 'Was können Sie mir empfehlen?' (Ne tavsiye edebilirsiniz?) Almanya'da eczacılar çok bilgilidir ve ilk yardım konusunda çok yardımcıdır.",
    commonMistakes: [
      "❌ 'Mein Kopf macht weh' → 'macht weh' değil, 'tut weh'!",
      "✅ 'Mein Kopf tut weh.' deyin.",
      "❌ 'Ich habe Fieber hoch' → doğrudan bu yapı yok.",
      "✅ 'Ich habe hohes Fieber.' (yüksek ateş) deyin.",
    ],
    examples: [
      { de: "Ich fühle mich nicht wohl.", tr: "Kendimi iyi hissetmiyorum." },
      { de: "Seit wann haben Sie diese Beschwerden?", tr: "Bu şikayetleriniz ne zamandır var?" },
      { de: "Bitte öffnen Sie Ihren Mund und sagen Sie 'Ah'.", tr: "Lütfen ağzınızı açın ve 'Ah' deyin." },
      { de: "Ich brauche ein Rezept für dieses Medikament.", tr: "Bu ilaç için reçete lazım." },
      { de: "Wie oft soll ich die Tabletten nehmen?", tr: "Tabletleri ne sıklıkta almalıyım?" },
    ]
  },
  {
    id: 7,
    titleDE: "Wohnung",
    titleTR: "Daire Kiralama ve Komşuluk",
    icon: "🏠",
    color: "#06b6d4",
    description: "Ev bölümleri, eşyalar, ev kiralama terimleri ve komşuluk ilişkileri.",
    grammar: {
      title: "İyelik Zamirleri (Possessivpronomen) ve Ev Tanımları",
      notes: [
        "İyelik zamirleri aitlik bildirir (Benim/Senin):\n- ich -> mein (eril/nötr), meine (dişil/çoğul)\n- du -> dein (eril/nötr), deine (dişil/çoğul)",
        "Örnek: 'Das ist mein Bett.' (das Bett), 'Das ist meine Wohnung.' (die Wohnung).",
        "Kira terimleri: die Miete (kira), die Kaltmiete (yakıtsız net kira), die Warmmiete (yakıt dahil toplam kira), die Nebenkosten (aidat/ek giderler).",
        "Evi tasvir ederken sıfatlar kullanılır: groß (büyük), klein (küçük), hell (aydınlık), dunkel (karanlık)."
      ]
    },
    grammarTables: [
      {
        title: "Ev Bölümleri",
        headers: ["Artikel", "Almanca", "Türkçe"],
        rows: [
          ["das", "Wohnzimmer", "Oturma Odası"],
          ["das", "Schlafzimmer", "Yatak Odası"],
          ["die", "Küche", "Mutfak"],
          ["das", "Bad / Badezimmer", "Banyo"],
          ["die", "Toilette / WC", "Tuvalet"],
          ["der", "Flur", "Hol / Koridor"],
          ["der", "Balkon", "Balkon"],
          ["der", "Keller", "Bodrum / Depo"],
        ]
      },
      {
        title: "İyelik Zamirleri (Nominativ)",
        headers: ["Kişi", "Eril/Nötr", "Dişil/Çoğul"],
        rows: [
          ["ich (ben)", "mein", "meine"],
          ["du (sen)", "dein", "deine"],
          ["er (o-eril)", "sein", "seine"],
          ["sie (o-dişil)", "ihr", "ihre"],
          ["wir (biz)", "unser", "unsere"],
          ["ihr (sizler)", "euer", "eure"],
          ["sie/Sie", "ihr/Ihr", "ihre/Ihre"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da ev kiralamak oldukça rekabetçidir, özellikle büyük şehirlerde. SCHUFA (kredi puanı) sorgulanır, gelir belgesi istenir ve genellikle 2-3 aylık kira depozito (Kaution) ödenir. Almanlar sessizliğe ve düzene çok önem verir: gece 22:00'dan sonra gürültü yapmak yasaktır!",
    annaTip: "💡 Anna'nın İpucu: Almanya'da 'Wohnung' ve 'Haus' farkına dikkat edin. 'Wohnung' daire (apartment), 'Haus' ise müstakil ev anlamına gelir. Kira ilanlarında 'WG' (Wohngemeinschaft - paylaşımlı ev) de sıkça görülür.",
    commonMistakes: [
      "❌ 'Das ist meine Zimmer' → 'Zimmer' nötr, 'mein' kullanılır!",
      "✅ 'Das ist mein Zimmer.' deyin.",
      "❌ 'Ich wohne in eine Wohnung' → 'in' burada Dativ alır!",
      "✅ 'Ich wohne in einer Wohnung.' deyin.",
    ],
    examples: [
      { de: "Die Wohnung hat drei Zimmer, eine Küche und ein Bad.", tr: "Dairenin üç odası, bir mutfağı ve bir banyosu var." },
      { de: "Wie hoch ist die Kaltmiete?", tr: "Yakıtsız kira ne kadar?" },
      { de: "Ich suche eine Wohnung in der Stadtmitte.", tr: "Şehir merkezinde daire arıyorum." },
      { de: "Ist Haustiere erlaubt?", tr: "Evcil hayvan serbest mi?" },
    ]
  },
  {
    id: 8,
    titleDE: "Bank & Behörden",
    titleTR: "Banka ve Resmi İşlemler",
    icon: "🏢",
    color: "#475569",
    description: "Banka hesabı açma, para çekme/havale ve resmi kurumlarda form doldurma.",
    grammar: {
      title: "Zorunluluk Bildiren Modal Fiil: 'Müssen'",
      notes: [
        "Official kurumlarda en sık karşılaşılan fiil 'müssen' (zorunda olmak) tarzı modal fiildir. Çekimi:\n- ich muss, du musst, er/sie/es muss\n- wir müssen, ihr müsst, sie/Sie müssen",
        "Cümle yapısı: Modal fiil özneye göre çekimlenip 2. sırada yer alırken, asıl fiil cümlenin en sonunda mastar (yalın) halde bulunur:\n- 'Ich muss ein Formular ausfüllen.' (Bir form doldurmak zorundayım.)",
        "Banka işlemleri: Geld abheben (para çekmek), Geld überweisen (para havale etmek), ein Konto eröffnen (hesap açmak)."
      ]
    },
    grammarTables: [
      {
        title: "Modal Fiil: müssen (zorunda olmak)",
        headers: ["Kişi", "müssen", "Örnek Cümle"],
        rows: [
          ["ich", "muss", "Ich muss ein Formular ausfüllen."],
          ["du", "musst", "Du musst einen Termin machen."],
          ["er/sie/es", "muss", "Er muss warten."],
          ["wir", "müssen", "Wir müssen unterschreiben."],
          ["ihr", "müsst", "Ihr müsst Ausweise mitbringen."],
          ["sie/Sie", "müssen", "Sie müssen ein Konto eröffnen."],
        ]
      },
      {
        title: "Banka ve Kurum Kelimeleri",
        headers: ["Almanca", "Türkçe"],
        rows: [
          ["das Konto eröffnen", "Hesap açmak"],
          ["Geld abheben", "Para çekmek"],
          ["Geld überweisen", "Para havale etmek"],
          ["das Formular ausfüllen", "Formu doldurmak"],
          ["der Ausweis", "Kimlik belgesi"],
          ["die Unterschrift", "İmza"],
          ["der Termin", "Randevu"],
          ["die IBAN", "IBAN numarası"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da 'Ämter' (resmi kurumlar) için çoğunlukla önceden randevu (Termin) almanız gerekir. Online randevu sistemi yaygındır. Almanya'da kırmızı bant geleneği var ama son yıllarda dijitalleşme hız kazanmıştır. Ausländerbehörde (yabancılar dairesi) Türk göçmenler için özellikle önemli bir kurumdur.",
    annaTip: "💡 Anna'nın İpucu: Almanya'da banka hesabı açmak için çoğunlukla Anmeldung (ikametgah kaydı) zorunludur. Önce muhtarlıktan ikamet adresi tescil ettirin, sonra bankaya gidin. N26, DKB gibi online bankalar genellikle daha az evrak ister.",
    commonMistakes: [
      "❌ Modal fiille asıl fiili yan yana yazmak: 'Ich muss ausfüllen das Formular.'",
      "✅ Asıl fiil EN SONA gider: 'Ich muss das Formular ausfüllen.'",
    ],
    examples: [
      { de: "Ich möchte ein Girokonto eröffnen.", tr: "Çek/vadesiz hesap açmak istiyorum." },
      { de: "Welche Unterlagen brauche ich dafür?", tr: "Bunun için hangi belgelere ihtiyacım var?" },
      { de: "Ich muss 500 Euro abheben.", tr: "500 Euro çekmem lazım." },
      { de: "Bitte füllen Sie dieses Formular aus.", tr: "Lütfen bu formu doldurun." },
    ]
  },
  {
    id: 9,
    titleDE: "Telefon",
    titleTR: "Telefon Görüşmesi ve İnternet",
    icon: "📞",
    color: "#14b8a6",
    description: "Telefon açma kalıpları, randevu teyidi ve internet/iletişim sorunları.",
    grammar: {
      title: "Ayrılabilen Fiiller (Trennbare Verben) ve Telefon Kalıpları",
      notes: [
        "Almanca'da bazı fiillerin ön ekleri cümle kurulurken ayrılır ve cümlenin en sonuna gider. En bariz örneği 'anrufen' (telefonla aramak) fiilidir:\n- 'Ich rufe dich morgen an.' (Seni yarın arayacağım. Ön ek 'an' sona gitti).",
        "Çekimi: anrufen -> ich rufe ... an, du rufst ... an, er ruft ... an.",
        "Telefona başlarken: 'Hier ist Berdan.' (Ben Berdan / Arayan Berdan) veya 'Hallo, wer spricht?' (Merhaba, kiminle görüşüyorum?).",
        "E-posta adresi belirtirken: '@' işareti 'at', '.' işareti 'Punkt' diye okunur: info@test.de -> 'info at test Punkt de'."
      ]
    },
    grammarTables: [
      {
        title: "Yaygın Ayrılabilen Fiiller",
        headers: ["Fiil", "Anlam", "Örnek Cümle"],
        rows: [
          ["anrufen", "Telefonla aramak", "Ich rufe dich an."],
          ["aufhören", "Durdurmak / Bırakmak", "Hör bitte auf!"],
          ["aufmachen", "Açmak", "Mach die Tür auf."],
          ["zumachen", "Kapatmak", "Mach das Fenster zu."],
          ["ankommen", "Varmak / Ulaşmak", "Der Zug kommt an."],
          ["einladen", "Davet etmek", "Ich lade dich ein."],
          ["zurückrufen", "Geri aramak", "Ich rufe zurück."],
        ]
      },
      {
        title: "Telefon Konuşma Kalıpları",
        headers: ["Durum", "Almanca", "Türkçe"],
        rows: [
          ["Karşılama", "Hier ist Müller.", "Ben Müller."],
          ["Yanlış numara", "Sie haben sich verwählt.", "Yanlış numara çevirmişsiniz."],
          ["Bağlama", "Einen Moment bitte.", "Bir dakika lütfen."],
          ["Mesaj bırakma", "Kann ich eine Nachricht hinterlassen?", "Mesaj bırakabilir miyim?"],
          ["Anlamamak", "Können Sie das wiederholen?", "Tekrar edebilir misiniz?"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da telefon konuşmalarında ad soyad ile açılış yapılır: 'Müller, guten Tag.' Bu çok yaygın ve standarttır. Yabancılar için tuhaf gelse de bu biçimsel bir kısaltmadır. SMS yerine WhatsApp veya Signal mesajlaşma uygulamaları çok yaygındır. İş e-postalarında ise resmi dil zorunludur.",
    annaTip: "💡 Anna'nın İpucu: Ayrılabilen fiillerde ön ek (Präfix) her zaman cümle sonuna gider — ama YARDIMCI veya MODAL fiille birlikte kullanıldığında bu kural değişir! Modal fiille kullanımda ön ek ayrılmaz: 'Ich muss dich anrufen.' (Seni aramam lazım.)",
    commonMistakes: [
      "❌ 'Ich anrufe dich morgen.' → Ön ek ayrılmalı!",
      "✅ 'Ich rufe dich morgen an.' deyin.",
      "❌ 'Hier spricht ich.' → Yanlış sözdizimi.",
      "✅ 'Hier spricht Müller.' veya 'Hier ist Müller.' deyin.",
    ],
    examples: [
      { de: "Guten Tag, hier ist Anna Schmidt. Ich rufe wegen meines Termins an.", tr: "İyi günler, ben Anna Schmidt. Randevum için arıyorum." },
      { de: "Könnten Sie bitte langsamer sprechen?", tr: "Lütfen daha yavaş konuşabilir misiniz?" },
      { de: "Ich rufe Sie morgen zurück.", tr: "Sizi yarın geri ararım." },
      { de: "Wie ist Ihre E-Mail-Adresse?", tr: "E-posta adresiniz nedir?" },
    ]
  },
  {
    id: 10,
    titleDE: "Alltag",
    titleTR: "Günlük Hayat ve Argo İfadeler",
    icon: "😎",
    color: "#f43f5e",
    description: "Günlük rutinler, hobiler, arkadaş buluşmaları ve sık kullanılan sokak dili.",
    grammar: {
      title: "Düzensiz Rutin Fiilleri & Sokak Almancası",
      notes: [
        "Günlük rutin fiillerinin bazıları düzensizdir (özellikle du ve er/sie/es çekimlerinde ses değişimi olur):\n- schlafen (uyumak): ich schlafe, du schläfst, er schläft\n- aufstehen (kalkmak - ayrılabilen): ich stehe um 7 Uhr auf.",
        "Sıkça duyabileceğiniz pratik sokak kalıpları:\n- 'Na?' : Naber? (En kısa selamlaşma)\n- 'Kein Bock.' : Canım istemiyor / Havamda değilim.\n- 'Kumpel' : Kanka / Yakın dost.\n- 'Cool' veya 'Geil' : Harika, süper, çok havalı."
      ]
    },
    grammarTables: [
      {
        title: "Günlük Rutin Fiilleri (Düzensiz Örnekler)",
        headers: ["Fiil", "Anlam", "ich", "du", "er/sie"],
        rows: [
          ["schlafen", "uyumak", "schlafe", "schläfst", "schläft"],
          ["aufstehen", "kalkmak", "stehe auf", "stehst auf", "steht auf"],
          ["essen", "yemek", "esse", "isst", "isst"],
          ["fahren", "gitmek (araçla)", "fahre", "fährst", "fährt"],
          ["lesen", "okumak", "lese", "liest", "liest"],
          ["treffen", "buluşmak", "treffe", "triffst", "trifft"],
        ]
      },
      {
        title: "Günlük & Argo İfadeler",
        headers: ["Almanca (Argo)", "Resmi Karşılığı", "Türkçe Anlamı"],
        rows: [
          ["Na?", "Wie geht es dir?", "Naber?"],
          ["Kein Bock.", "Ich habe keine Lust.", "Canım istemiyor."],
          ["Geil!", "Toll! / Super!", "Harika! / Süper!"],
          ["Krass!", "Unglaublich!", "İnanılmaz! / Vay be!"],
          ["Alter!", "Mensch! / Freund!", "Kanka! / Yahu!"],
          ["Alles klar?", "Alles in Ordnung?", "Herşey yolunda mı?"],
          ["Passt.", "Das ist in Ordnung.", "Olur. / Tamam."],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da 'Feierabend' (iş bitimi / mesai sonu) kavramı çok kutsaldır. Mesai saati bittikten sonra iş konuşmak hoş karşılanmaz. Almanlar hobiyi ve serbest zamanı ciddiye alır: spor kulüpleri (Verein), bahçecilik (Kleingarten) ve müzik koroları yaygındır.",
    annaTip: "💡 Anna'nın İpucu: Sokak Almancası ve resmi Almanca arasındaki fark büyüktür. Arkadaşlarınızla 'Krass, voll geil!' diyebilirsiniz ama iş görüşmesinde resmi dil zorunludur. Hangi ortamda hangi dili kullanacağınızı öğrenmek çok önemli!",
    commonMistakes: [
      "❌ Düzensiz fiillerde du çekimini atlamak: 'du schlafen' → Yanlış!",
      "✅ 'du schläfst', 'du fährst', 'du isst' — ses değişimini ezberleyin.",
    ],
    examples: [
      { de: "Ich stehe jeden Tag um sieben Uhr auf.", tr: "Her gün saat yedide kalkıyorum." },
      { de: "Am Wochenende treffe ich meine Freunde.", tr: "Hafta sonu arkadaşlarımla buluşuyorum." },
      { de: "Mein Hobby ist Kochen und Wandern.", tr: "Hobim yemek yapmak ve yürüyüş yapmak." },
      { de: "Na, alles gut bei dir?", tr: "Naber, iyimisin?" },
    ]
  },
  {
    id: 11,
    titleDE: "Grammatik",
    titleTR: "A1 Gramer Özeti",
    icon: "📚",
    color: "#6d28d9",
    description: "A1 seviyesinin can damarı olan tüm modal fiiller ve cümle yapısı şablonları.",
    grammar: {
      title: "Modal Fiiller (Kip Belirteçleri) & Cümle Düzeni",
      notes: [
        "A1 Seviyesindeki Tüm Modal Fiiller:\n- können (yapabilmek - yetenek/ihtimal)\n- müssen (zorunda olmak - mecburiyet)\n- wollen (istemek - kararlılık/niyet)\n- dürfen (izinli olmak - yasak/izin)\n- sollen (tavsiye/ödev - yapması söylenmek)\n- möchten (istemek - kibar istek)",
        "Modal fiillerin çekiminde 1. tekil (ich) ve 3. tekil (er/sie/es) çekimleri HER ZAMAN aynıdır ve takı almazlar!\n- ich kann, er kann / ich muss, er muss / ich will, er will / ich darf, er darf.",
        "Düz Cümle Kurma Kuralı (SVO):\n1. Özne | 2. Çekimli Fiil | 3. Nesne/Zaman | 4. (Varsa) Diğer Yalın Fiil.",
        "Soru Cümlesi Kurma:\n- W-Frage (Soru kelimeli): W-kelimesi + Çekimli Fiil + Özne... ? ('Wie heißt du?')\n- Ja/Nein Soru (Evet/Hayır): Çekimli Fiil + Özne + Nesne... ? ('Lernst du Deutsch?')"
      ]
    },
    grammarTables: [
      {
        title: "Tüm Modal Fiiller Karşılaştırma Tablosu",
        headers: ["Fiil", "ich", "du", "er/sie", "Anlam"],
        rows: [
          ["können", "kann", "kannst", "kann", "yapabilmek"],
          ["müssen", "muss", "musst", "muss", "zorunda olmak"],
          ["wollen", "will", "willst", "will", "istemek (kararlı)"],
          ["dürfen", "darf", "darfst", "darf", "izinli olmak"],
          ["sollen", "soll", "sollst", "soll", "yapması söylenmek"],
          ["möchten", "möchte", "möchtest", "möchte", "istemek (kibar)"],
        ]
      },
      {
        title: "W-Soru Kelimeleri (W-Fragen)",
        headers: ["Almanca", "Türkçe", "Örnek"],
        rows: [
          ["Wer?", "Kim?", "Wer ist das?"],
          ["Was?", "Ne?", "Was machst du?"],
          ["Wo?", "Nerede?", "Wo wohnst du?"],
          ["Woher?", "Nereden?", "Woher kommen Sie?"],
          ["Wohin?", "Nereye?", "Wohin gehst du?"],
          ["Wann?", "Ne zaman?", "Wann kommst du?"],
          ["Wie?", "Nasıl?", "Wie heißen Sie?"],
          ["Wie viel?", "Ne kadar?", "Wie viel kostet das?"],
          ["Warum?", "Neden?", "Warum lernst du Deutsch?"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanca gramer, Türkçe gramerden yapısal olarak çok farklıdır. Türkçe SOV (Özne-Nesne-Fiil) diliyken Almanca temel olarak SVO (Özne-Fiil-Nesne) dilidir. Ancak Almancada 'V2 kuralı' vardır: Fiil HER ZAMAN ikinci sırada yer alır. Bu kural Türk öğrenciler için zorlanma noktasıdır.",
    annaTip: "💡 Anna'nın İpucu: Gramer tablolarını ezberlemek yerine, her kuralı bir örnek cümleyle öğrenin. 'Ich kann Deutsch sprechen.' diyebildiğinizde 'können' fiilini doğal olarak kullanıyorsunuz demektir. Bağlam her zaman ezberi yener!",
    commonMistakes: [
      "❌ Modal fiille asıl fiil bitişik ve sonuna ek eklenerek: 'Ich kannst sprechen.'",
      "✅ Modal çekimlenir, asıl fiil SONDA MASTAR kalır: 'Ich kann sprechen.'",
      "❌ 'ich' ve 'er' çekimlerine takı eklemek: 'ich musse' veya 'er könnt'",
      "✅ 'ich muss / er muss' — takısız! Bu kural istisnasızdır.",
    ],
    examples: [
      { de: "Ich kann gut Deutsch sprechen.", tr: "İyi Almanca konuşabiliyorum." },
      { de: "Du musst das Formular ausfüllen.", tr: "Formu doldurman lazım." },
      { de: "Darf ich hier rauchen?", tr: "Burada sigara içebilir miyim?" },
      { de: "Sie soll um 10 Uhr hier sein.", tr: "Saat 10'da burada olması gerekiyor." },
      { de: "Warum willst du Deutsch lernen?", tr: "Neden Almanca öğrenmek istiyorsun?" },
    ]
  },
  {
    id: 12,
    titleDE: "Notfall",
    titleTR: "Hızlı Başvuru ve Acil Durum",
    icon: "🚨",
    color: "#dc2626",
    description: "Acil sağlık problemleri, kayıp durumları, kaza ve güvenlik çağrıları.",
    grammar: {
      title: "Acil Çağrı Kalıpları & Yakın Geçmiş Zaman (Perfekt) Giriş",
      notes: [
        "Acil durumlarda emir kipi veya direkt ünlemler hayat kurtarır:\n- 'Hilfe!' (İmdat!)\n- 'Rufen Sie die Polizei!' (Polisi arayın!)\n- 'Rufen Sie einen Krankenwagen!' (Ambulans çağırın!)",
        "Bir şeyin çalındığını veya kaybolduğunu geçmiş zaman (Perfekt) kullanarak söyleriz. A1 seviyesinde en yaygın Perfekt yapısı 'haben + fiilin 3. hali (Partizip II)' şeklindedir:\n- 'Ich habe meine Tasche verloren.' (Çantamı kaybettim. 'haben' 2. sırada çekimlenir, 'verloren' sona gider).",
        "Önemli Numaralar (Almanya):\n- 112 : İtfaiye & Ambulans (Feuerwehr & Rettungsdienst)\n- 110 : Polis (Polizei)"
      ]
    },
    grammarTables: [
      {
        title: "Acil Durum İfadeleri",
        headers: ["Almanca", "Türkçe", "⚠️ Seviye"],
        rows: [
          ["Hilfe!", "İmdat!", "Kritik"],
          ["Feuer!", "Yangın!", "Kritik"],
          ["Rufen Sie die Polizei!", "Polisi arayın!", "Acil"],
          ["Rufen Sie einen Krankenwagen!", "Ambulans çağırın!", "Acil"],
          ["Ich brauche einen Arzt!", "Doktora ihtiyacım var!", "Acil"],
          ["Wo ist die nächste Apotheke?", "En yakın eczane nerede?", "Önemli"],
          ["Ich habe mein Portemonnaie verloren.", "Cüzdanımı kaybettim.", "Önemli"],
          ["Jemand hat meine Tasche gestohlen!", "Birisi çantamı çaldı!", "Acil"],
        ]
      },
      {
        title: "Perfekt (Yakın Geçmiş) - Giriş",
        headers: ["Fiil (Infinitiv)", "Partizip II", "Perfekt Cümlesi"],
        rows: [
          ["verlieren (kaybetmek)", "verloren", "Ich habe meine Tasche verloren."],
          ["stehlen (çalmak)", "gestohlen", "Man hat mein Handy gestohlen."],
          ["vergessen (unutmak)", "vergessen", "Ich habe meinen Pass vergessen."],
          ["finden (bulmak)", "gefunden", "Ich habe meinen Schlüssel gefunden."],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da 112 ve 110 numaraları 7/24 aktiftir ve Türkçe tercüman hattı da mevcuttur (tercüman ister misiniz? diye sorarlar). Karakola giderken 'Ich möchte eine Anzeige erstatten.' (Şikayetçi olmak istiyorum) demeyi bilin. Pasaportunuzu kaybettiyseniz, önce karakol, sonra konsolosluk!",
    annaTip: "💡 Anna'nın İpucu: Almanya'da ambulans ve itfaiye için TEK numara 112'dir (tüm Avrupa). 110 ise sadece Almanya'da polis için kullanılır. Bunu mutlaka ezberleyin — stres altında doğru numarayı aramak hayat kurtarır!",
    commonMistakes: [
      "❌ 'Ich habe verloren meine Tasche.' → Partizip II her zaman sona gider!",
      "✅ 'Ich habe meine Tasche verloren.' deyin.",
      "❌ Acil durumda çok karmaşık cümle kurmaya çalışmak.",
      "✅ Tek kelime bile yeterlidir: 'Hilfe!', 'Feuer!', 'Polizei!'",
    ],
    examples: [
      { de: "Bitte helfen Sie mir! Ich brauche sofort Hilfe!", tr: "Lütfen bana yardım edin! Hemen yardıma ihtiyacım var!" },
      { de: "Es gibt einen Unfall auf der Straße.", tr: "Yolda bir kaza var." },
      { de: "Ich habe meinen Reisepass verloren.", tr: "Pasaportumu kaybettim." },
      { de: "Wo ist die nächste Polizeiwache?", tr: "En yakın karakol nerede?" },
      { de: "Ich brauche einen Dolmetscher.", tr: "Tercümana ihtiyacım var." },
    ]
  }
];
