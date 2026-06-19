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
    ],
    level: "A1"
  },

  // ═══════════════════════════════════════════════════════════
  //                        A2 KURS
  // ═══════════════════════════════════════════════════════════

  {
    id: 13,
    level: "A2",
    titleDE: "Perfekt",
    titleTR: "Geçmiş Zaman (Perfekt)",
    icon: "⏮️",
    color: "#7c3aed",
    description: "Almanca'da geçmişte yaşanan olayları anlatmak için kullanılan en yaygın zaman: haben/sein + Partizip II.",
    grammar: {
      title: "Perfekt Kuruluşu: haben / sein + Partizip II",
      notes: [
        "Perfekt, Almanca'da konuşma dilindeki geçmiş zamandır. İki bileşenden oluşur:\n1) haben veya sein fiilinin çekimi (2. sıraya gider)\n2) Ana fiilin Partizip II hali (cümlenin SONUNA gider)\n\nÖrnek: 'Ich habe Deutsch gelernt.' / 'Ich bin nach Berlin gefahren.'",
        "Zayıf (düzenli) fiillerde Partizip II: ge- + fiil kökü + -(e)t\n- lernen → gelernt\n- machen → gemacht\n- kaufen → gekauft\n- arbeiten → gearbeitet (ekstra -e- gelir)\n- spielen → gespielt",
        "Güçlü (düzensiz) fiillerde Partizip II: ge- + (değişmiş kök) + -en → Ezber gerekir!\n- gehen → gegangen\n- essen → gegessen\n- trinken → getrunken\n- fahren → gefahren\n- schreiben → geschrieben\n- sprechen → gesprochen",
        "HABEN mi, SEIN mi?\n✅ SEIN: Hareket/yer değiştirme fiilleri (gehen, fahren, fliegen, kommen, laufen) ve durum değişimi fiilleri (aufwachen, einschlafen, sterben, werden).\n✅ HABEN: Geri kalan tüm fiiller (transitif fiiller, reflexive, çoğu intransitif fiil).\n- 'Ich bin gegangen.' (yürüyerek gittim — hareket)\n- 'Ich habe gegessen.' (yedim — nesne alabilen fiil)",
        "Ayrılabilen fiillerde Partizip II: ge- ön eke eklenir!\n- aufmachen → aufgemacht\n- anrufen → angerufen\n- einladen → eingeladen",
        "ge- ÖN EKİ GELMEZ: Yabancı kökenli fiiller (-ieren) ve ayrılmayan ön ekli fiiller:\n- telefonieren → telefoniert (ge- yok!)\n- fotografieren → fotografiert\n- besuchen → besucht (be- ayrılmaz)"
      ]
    },
    grammarTables: [
      {
        title: "haben / sein Yardımcı Fiili Seçimi",
        headers: ["Kural", "Fiil Örneği", "Partizip II", "Perfekt Cümlesi"],
        rows: [
          ["SEIN: Hareket", "gehen", "gegangen", "Ich bin gegangen."],
          ["SEIN: Hareket", "fahren", "gefahren", "Er ist gefahren."],
          ["SEIN: Durum değişimi", "aufwachen", "aufgewacht", "Sie ist aufgewacht."],
          ["HABEN: Geçişli", "essen", "gegessen", "Ich habe gegessen."],
          ["HABEN: Çoğu fiil", "lernen", "gelernt", "Wir haben gelernt."],
          ["HABEN: -ieren", "telefonieren", "telefoniert", "Er hat telefoniert."],
        ]
      },
      {
        title: "En Sık Kullanılan Güçlü Fiiller - Partizip II",
        headers: ["Infinitiv", "Partizip II", "Türkçe", "Yardımcı"],
        rows: [
          ["gehen", "gegangen", "gitmek", "sein"],
          ["kommen", "gekommen", "gelmek", "sein"],
          ["fahren", "gefahren", "gitmek (araçla)", "sein"],
          ["fliegen", "geflogen", "uçmak", "sein"],
          ["laufen", "gelaufen", "koşmak/yürümek", "sein"],
          ["essen", "gegessen", "yemek", "haben"],
          ["trinken", "getrunken", "içmek", "haben"],
          ["schreiben", "geschrieben", "yazmak", "haben"],
          ["lesen", "gelesen", "okumak", "haben"],
          ["sehen", "gesehen", "görmek", "haben"],
          ["schlafen", "geschlafen", "uyumak", "haben"],
          ["sprechen", "gesprochen", "konuşmak", "haben"],
          ["nehmen", "genommen", "almak", "haben"],
          ["geben", "gegeben", "vermek", "haben"],
          ["finden", "gefunden", "bulmak", "haben"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanca'da konuşma dilinde geçmiş olaylar neredeyse yalnızca Perfekt ile anlatılır. 'Gestern habe ich Fußball gespielt.' (Dün futbol oynadım.) Präteritum ise ağırlıklı olarak yazılı dilde ve edebiyatta kullanılır. Günlük hayatta birisine 'Was hast du gestern gemacht?' diye sorabilirsiniz.",
    annaTip: "💡 Anna'nın İpucu: 'sein' mi 'haben' mı sorusunda en iyi kural: Konuyla birlikte 'nereye?' veya 'nereye gitti?' sorusunu sorabiliyorsanız → sein kullanın! 'Ich bin ins Kino gegangen.' (Sinemaya gittim — hareket). 'Ich habe einen Film gesehen.' (Film izledim — hareket yok).",
    commonMistakes: [
      "❌ 'Ich habe gegangen.' → gehen hareketi gösterir, sein alır!",
      "✅ 'Ich bin gegangen.' deyin.",
      "❌ 'Ich habe gegessen das Brot.' → Partizip II SONA gider!",
      "✅ 'Ich habe das Brot gegessen.' deyin.",
      "❌ telefonieren → 'getelefoniert' → -ieren fiilleri ge- almaz!",
      "✅ 'Ich habe telefoniert.' deyin.",
    ],
    examples: [
      { de: "Gestern habe ich viel Deutsch gelernt.", tr: "Dün çok Almanca öğrendim." },
      { de: "Wir sind mit dem Zug nach München gefahren.", tr: "Münih'e trenle gittik." },
      { de: "Hast du schon gefrühstückt?", tr: "Kahvaltı yaptın mı?" },
      { de: "Sie hat ihre Freundin angerufen.", tr: "Arkadaşını aradı." },
      { de: "Ich bin heute früh aufgewacht.", tr: "Bugün erken uyandım." },
    ]
  },

  {
    id: 14,
    level: "A2",
    titleDE: "Präteritum",
    titleTR: "Yazılı Geçmiş Zaman",
    icon: "📜",
    color: "#0284c7",
    description: "Yazılı dil, gazete, edebiyat ve resmi anlatımda kullanılan geçmiş zaman: war, hatte ve modal fiillerin Präteritum çekimi.",
    grammar: {
      title: "Präteritum: sein → war | haben → hatte | Modal Fiiller",
      notes: [
        "Präteritum ağırlıklı olarak yazılı dilde kullanılır: gazeteler, kitaplar, makaleler ve resmi belgeler.\nKonuşma dilinde Perfekt tercih edilir, ancak 'sein' ve 'haben' ile modal fiiller her iki dilde de Präteritum ile kullanılabilir:\n- 'Ich war gestern krank.' (Dün hastaydım.) — doğal, Perfekt kullanılmaz!",
        "sein → war çekimi:\n- ich war / du warst / er-sie-es war\n- wir waren / ihr wart / sie-Sie waren",
        "haben → hatte çekimi:\n- ich hatte / du hattest / er-sie-es hatte\n- wir hatten / ihr hattet / sie-Sie hatten",
        "Modal fiillerin Präteritum çekimi (konuşma dilinde de yaygın!):\n- können → konnte (yapabiliyordu)\n- müssen → musste (zorunda idi)\n- wollen → wollte (istedi)\n- dürfen → durfte (izni vardı)\n- sollen → sollte (yapması gerekirdi)\n- mögen → mochte (seviyordu)",
        "Zayıf fiillerde Präteritum: fiil kökü + -te/-test/-te/-ten/-tet/-ten\n- lernen → lernte, lerntest, lernte, lernten...\n- arbeiten → arbeitete (ekstra -e-)\nGüçlü fiiller Präteritum için kök değiştirir — bunlar ayrıca ezberlenmeli:\n- gehen → ging, kommen → kam, sehen → sah, fahren → fuhr"
      ]
    },
    grammarTables: [
      {
        title: "sein ve haben — Präteritum Çekimi",
        headers: ["Kişi", "sein (Präteritum)", "haben (Präteritum)"],
        rows: [
          ["ich", "war", "hatte"],
          ["du", "warst", "hattest"],
          ["er / sie / es", "war", "hatte"],
          ["wir", "waren", "hatten"],
          ["ihr", "wart", "hattet"],
          ["sie / Sie", "waren", "hatten"],
        ]
      },
      {
        title: "Modal Fiiller — Präteritum Çekimi",
        headers: ["Modal Fiil", "ich/er/sie", "du", "Türkçe"],
        rows: [
          ["können", "konnte", "konntest", "yapabilmek"],
          ["müssen", "musste", "musstest", "zorunda olmak"],
          ["wollen", "wollte", "wolltest", "istemek"],
          ["dürfen", "durfte", "durftest", "izinli olmak"],
          ["sollen", "sollte", "solltest", "yapması söylenmek"],
          ["mögen", "mochte", "mochtest", "sevmek / istemek"],
        ]
      },
      {
        title: "Sık Kullanılan Güçlü Fiiller — Präteritum",
        headers: ["Infinitiv", "Präteritum (ich/er)", "Türkçe"],
        rows: [
          ["gehen", "ging", "gitmek"],
          ["kommen", "kam", "gelmek"],
          ["fahren", "fuhr", "gitmek (araçla)"],
          ["sehen", "sah", "görmek"],
          ["schreiben", "schrieb", "yazmak"],
          ["sprechen", "sprach", "konuşmak"],
          ["essen", "aß", "yemek"],
          ["nehmen", "nahm", "almak"],
          ["stehen", "stand", "durmak"],
          ["wissen", "wusste", "bilmek"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Alman gazetelerini ve edebiyatını okurken Präteritum ile sürekli karşılaşırsınız. 'Der Kanzler sagte...' (Başbakan dedi ki...), 'Es war einmal...' (Bir zamanlar...) gibi ifadeler Präteritum'dur. Grimm masallarını Almanca okuyorsanız — hepsi Präteritum'dadır!",
    annaTip: "💡 Anna'nın İpucu: Modal fiillerin Präteritum'u konuşmada da çok kullanılır! 'Ich musste arbeiten.' (Çalışmak zorundaydım.) ve 'Ich konnte nicht kommen.' (Gelemedim.) — bunları doğal şekilde kullanabilmek A2'nin kilit noktalarındandır.",
    commonMistakes: [
      "❌ 'Ich war gegangen.' → war + Partizip II olmaz! Präteritum tek başına yeterli.",
      "✅ 'Ich ging.' veya 'Ich bin gegangen.' deyin.",
      "❌ Modal Präteritum'a Umlaut eklemek: 'ich müsste' (var ama Konjunktiv II, farklı anlam!)",
      "✅ Präteritum: 'ich musste' (zorunda idim), Konjunktiv II: 'ich müsste' (zorunda olurdum).",
    ],
    examples: [
      { de: "Als Kind war ich sehr schüchtern.", tr: "Çocukken çok utangaçtım." },
      { de: "Wir hatten früher kein Auto.", tr: "Eskiden arabamız yoktu." },
      { de: "Er konnte nicht kommen, weil er krank war.", tr: "Hasta olduğu için gelemedi." },
      { de: "Gestern musste ich lange arbeiten.", tr: "Dün uzun süre çalışmak zorunda kaldım." },
      { de: "Es war einmal ein König...", tr: "Bir zamanlar bir kral vardı..." },
    ]
  },

  {
    id: 15,
    level: "A2",
    titleDE: "Adjektiv-Deklination",
    titleTR: "Sıfat Çekimi",
    icon: "✏️",
    color: "#059669",
    description: "Almanca sıfatları isimden önce kullanıldığında belirli, belirsiz veya artikelsiz çekime göre son ek alır.",
    grammar: {
      title: "Sıfat Son Ekleri: Belirli / Belirsiz / Artikelsiz",
      notes: [
        "Almanca'da sıfat ismin önüne geldiğinde son ek (Endung) alır. Hangi eki alacağı 3 faktöre bağlıdır:\n1) Hangi artikel var? (der/die/das, ein/eine, veya artikelsiz)\n2) Hangi hal? (Nominativ, Akkusativ, Dativ)\n3) Cinsiyeti? (maskulin, feminin, neutral, plural)",
        "Belirli Artikel (der/die/das) sonrası 'zayıf çekim':\n- Nominativ: -e (der alte Mann, die alte Frau, das alte Kind)\n- Akkusativ: Maskulin -en; diğerleri -e\n- Dativ: Hepsi -en",
        "Belirsiz Artikel (ein/eine/kein) sonrası 'karışık çekim':\n- Nominativ: Maskulin -er, Feminin -e, Nötr -es\n- Akkusativ: Maskulin -en, Feminin -e, Nötr -es\n- Dativ: Hepsi -en",
        "Artikelsiz (güçlü çekim) — çoğunlukla çoğulda:\n- Sıfat artikelin rolünü üstlenir ve güçlü ek alır:\n- kalter Kaffee, frisches Brot, gute Wünsche"
      ]
    },
    grammarTables: [
      {
        title: "Belirli Artikel Sonrası Sıfat Çekimi (Zayıf)",
        headers: ["Hal", "Maskulin (m)", "Feminin (f)", "Nötr (n)", "Çoğul (pl)"],
        rows: [
          ["Nominativ", "der alt-e Mann", "die alt-e Frau", "das alt-e Kind", "die alt-en Kinder"],
          ["Akkusativ", "den alt-en Mann", "die alt-e Frau", "das alt-e Kind", "die alt-en Kinder"],
          ["Dativ", "dem alt-en Mann", "der alt-en Frau", "dem alt-en Kind", "den alt-en Kindern"],
        ]
      },
      {
        title: "Belirsiz Artikel (ein/eine) Sonrası Sıfat Çekimi (Karışık)",
        headers: ["Hal", "Maskulin (m)", "Feminin (f)", "Nötr (n)"],
        rows: [
          ["Nominativ", "ein alt-er Mann", "eine alt-e Frau", "ein alt-es Kind"],
          ["Akkusativ", "einen alt-en Mann", "eine alt-e Frau", "ein alt-es Kind"],
          ["Dativ", "einem alt-en Mann", "einer alt-en Frau", "einem alt-en Kind"],
        ]
      },
      {
        title: "Sık Kullanılan Sıfatlar",
        headers: ["Almanca", "Türkçe", "Zıttı"],
        rows: [
          ["groß", "büyük", "klein"],
          ["alt", "eski/yaşlı", "neu/jung"],
          ["teuer", "pahalı", "günstig/billig"],
          ["schön", "güzel", "hässlich"],
          ["schnell", "hızlı", "langsam"],
          ["warm", "sıcak", "kalt"],
          ["hell", "aydınlık", "dunkel"],
          ["laut", "gürültülü", "leise"],
          ["schwer", "ağır/zor", "leicht"],
          ["sauber", "temiz", "schmutzig"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanca sıfat çekimi yabancılar için en zorlu konulardan biridir. Almanlar da bu kuralları otomatik olarak konuşurken uygular — onlar için 'doğal hissettiren' şey. Siz önce en çok kullanılan kombinasyonlara odaklanın: 'ein gutes Buch', 'ein schöner Tag', 'das neue Haus'. Bunları tekrarlayarak başlayın.",
    annaTip: "💡 Anna'nın İpucu: Sıfat çekimini ezberlemek yerine sık geçen kalıpları bütün olarak öğrenin: 'guten Morgen!', 'ein schönes Wochenende!', 'mit dem nächsten Zug'. Kalıplar zamanla otomatikleşir!",
    commonMistakes: [
      "❌ 'ein alt Mann' → belirsiz artikel sonrası maskulin nominativ -er alır!",
      "✅ 'ein alter Mann' deyin.",
      "❌ 'der neues Auto' → nötr 'das' sonrası nominativ sıfat -e alır.",
      "✅ 'das neue Auto' deyin.",
    ],
    examples: [
      { de: "Ich suche eine günstige Wohnung.", tr: "Ucuz bir daire arıyorum." },
      { de: "Er hat ein neues Auto gekauft.", tr: "Yeni bir araba satın aldı." },
      { de: "Mit dem nächsten Bus kommen wir pünktlich an.", tr: "Bir sonraki otobüsle tam zamanında varırız." },
      { de: "Das ist ein interessantes Buch über deutsche Geschichte.", tr: "Bu, Alman tarihi hakkında ilginç bir kitap." },
      { de: "Ich trinke lieber heißen Tee als kalten Kaffee.", tr: "Soğuk kahveden çok sıcak çay içmeyi tercih ederim." },
    ]
  },

  {
    id: 16,
    level: "A2",
    titleDE: "Komparativ & Superlativ",
    titleTR: "Karşılaştırma ve Üstünlük",
    icon: "📊",
    color: "#d97706",
    description: "Sıfat ve zarfları karşılaştırmak için kullanılan Komparativ (-er) ve en üstünü ifade eden Superlativ (am ...-sten) yapıları.",
    grammar: {
      title: "Karşılaştırma: schnell → schneller → am schnellsten",
      notes: [
        "Komparativ: Sıfat + -er (İngilizce'deki -er gibi)\n- schnell → schneller (daha hızlı)\n- klein → kleiner (daha küçük)\n- billig → billiger (daha ucuz)\nKarşılaştırırken 'als' (den/dan, -den daha) kullanılır:\n- 'Er ist größer als ich.' (O benden daha uzun.)",
        "Umlaut alan düzensiz Komparatifler (ezber gerekli!):\n- alt → älter, jung → jünger, groß → größer, warm → wärmer, kalt → kälter, lang → länger, kurz → kürzer, dumm → dümmer",
        "Superlativ: am + Sıfat + -(e)sten\n- schnell → am schnellsten (en hızlı)\n- groß → am größten\n- alt → am ältesten (-est: fiil kökü t/d/s/z ile biterse)\nYükleme takısız süperlativ: das schnellste Auto, der älteste Mensch",
        "Tamamen Düzensiz Karşılaştırmalar (zorunlu ezber!):\n- gut → besser → am besten\n- viel → mehr → am meisten\n- gern → lieber → am liebsten\n- hoch → höher → am höchsten",
        "'Genauso...wie' (aynı kadar...): 'Er ist genauso groß wie ich.' (O benimle aynı boyda.)\n'Nicht so...wie' (o kadar...değil): 'Das ist nicht so teuer wie das andere.' (Bu, diğeri kadar pahalı değil.)"
      ]
    },
    grammarTables: [
      {
        title: "Düzenli Karşılaştırmalar",
        headers: ["Grundform", "Komparativ", "Superlativ", "Türkçe"],
        rows: [
          ["schnell", "schneller", "am schnellsten", "hızlı → daha hızlı → en hızlı"],
          ["klein", "kleiner", "am kleinsten", "küçük"],
          ["billig", "billiger", "am billigsten", "ucuz"],
          ["lang", "länger", "am längsten", "uzun (boylu değil)"],
          ["kurz", "kürzer", "am kürzesten", "kısa"],
          ["warm", "wärmer", "am wärmsten", "sıcak"],
          ["kalt", "kälter", "am kältesten", "soğuk"],
          ["jung", "jünger", "am jüngsten", "genç"],
          ["alt", "älter", "am ältesten", "yaşlı/eski"],
          ["groß", "größer", "am größten", "büyük/uzun"],
        ]
      },
      {
        title: "Tamamen Düzensiz Karşılaştırmalar",
        headers: ["Grundform", "Komparativ", "Superlativ", "Türkçe"],
        rows: [
          ["gut", "besser", "am besten", "iyi → daha iyi → en iyi"],
          ["viel", "mehr", "am meisten", "çok → daha çok → en çok"],
          ["gern", "lieber", "am liebsten", "seve seve → tercihan → en çok"],
          ["hoch", "höher", "am höchsten", "yüksek"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da 'besser' kelimesi çok sık duyulur: 'Das geht besser!' (Bu daha iyi olur!), 'Besser spät als nie!' (Geç kalmak hiç gelmemekten iyidir!). Karşılaştırma yapıları günlük hayatta, reklamlarda ve haberlerde çok yaygındır. 'Das beste Auto', 'die günstigste Option' gibi süperlativler her yerde karşınıza çıkar.",
    annaTip: "💡 Anna'nın İpucu: 'gut-besser-am besten' üçlüsünü mutlaka ezberleyin — bu kelimelerin benzer kökleri yoktur (suppletif). Aynı şey 'viel-mehr-am meisten' ve 'gern-lieber-am liebsten' için de geçerlidir. Bu üç çifti öğrenin ve A2 sınavında şaşırtmayacaksınız!",
    commonMistakes: [
      "❌ 'mehr gut' → Almanca'da 'more' + sıfat yapısı yoktur!",
      "✅ 'besser' (gut'un komparatividir). 'Mein Deutsch wird besser.' deyin.",
      "❌ 'als' yerine 'wie' kullanmak: 'Er ist größer wie ich.'",
      "✅ Komparativde 'als': 'Er ist größer als ich.' Eşitlikte 'wie': 'Er ist so groß wie ich.'",
    ],
    examples: [
      { de: "München ist teurer als Berlin.", tr: "Münih, Berlin'den daha pahalı." },
      { de: "Ich spreche lieber Deutsch als Englisch.", tr: "İngilizce'den çok Almanca konuşmayı tercih ederim." },
      { de: "Welche Route ist am schnellsten?", tr: "Hangi güzergah en hızlıdır?" },
      { de: "Das neue Modell ist besser und günstiger.", tr: "Yeni model daha iyi ve daha ucuz." },
      { de: "Sie singt am besten in der ganzen Klasse.", tr: "Sınıfın en iyi şarkı söyleyeni o." },
    ]
  },

  {
    id: 17,
    level: "A2",
    titleDE: "Reflexive Verben",
    titleTR: "Dönüşlü Fiiller",
    icon: "🪞",
    color: "#be185d",
    description: "Öznenin hem yapan hem de etkilenen olduğu dönüşlü fiiller: sich waschen, sich freuen, sich bewerben.",
    grammar: {
      title: "Dönüşlü Zamirler (Reflexivpronomen) ve sich Fiilleri",
      notes: [
        "Dönüşlü fiiller 'sich' ön eki ile sözlükte gösterilir. 'Sich' (kendini, kendine) zamiri özneye göre değişir:\n- ich wasche mich (kendimi yıkıyorum)\n- du wäschst dich\n- er/sie/es wäscht sich\n- wir waschen uns\n- ihr wascht euch\n- sie/Sie waschen sich",
        "Gerçek dönüşlü fiiller: Fiil hem özne hem nesne aynı kişi:\n- sich waschen (kendini yıkamak)\n- sich kämmen (saçını taramak)\n- sich anziehen (giyinmek)\n- sich hinsetzen (oturmak)\n- sich hinlegen (yatmak)",
        "Sözde dönüşlü fiiller: 'sich' olmadan farklı anlam veya anlamsız:\n- sich freuen (sevincini duymak → 'Ich freue mich!' = Çok sevindim!)\n- sich ärgern (sinirlenmek)\n- sich beeilen (acele etmek)\n- sich erinnern an + Akkusativ (hatırlamak)\n- sich interessieren für (ilgi duymak)\n- sich bewerben um (başvurmak)",
        "Dativli sich: Nesne ayrı varsa, sich Dativ alır:\n- Ich wasche mir die Hände. (Ellerimi yıkıyorum — mir = kendime)\n- Er putzt sich die Zähne. (Dişlerini fırçalıyor)"
      ]
    },
    grammarTables: [
      {
        title: "Dönüşlü Zamirler Tablosu",
        headers: ["Kişi", "Akkusativ (direkt)", "Dativ (dolaylı)"],
        rows: [
          ["ich", "mich", "mir"],
          ["du", "dich", "dir"],
          ["er / sie / es", "sich", "sich"],
          ["wir", "uns", "uns"],
          ["ihr", "euch", "euch"],
          ["sie / Sie", "sich", "sich"],
        ]
      },
      {
        title: "Temel Dönüşlü Fiiller",
        headers: ["Fiil", "Türkçe", "Örnek Cümle"],
        rows: [
          ["sich waschen", "yıkanmak", "Ich wasche mich jeden Morgen."],
          ["sich anziehen", "giyinmek", "Er zieht sich schnell an."],
          ["sich setzen", "oturmak", "Bitte setzen Sie sich!"],
          ["sich freuen", "sevinmek", "Ich freue mich sehr!"],
          ["sich ärgern", "sinirlenMek", "Sie ärgert sich über den Stau."],
          ["sich beeilen", "acele etmek", "Beeil dich, wir sind spät!"],
          ["sich erholen", "dinlenmek", "Ich erhole mich im Urlaub."],
          ["sich vorstellen", "kendini tanıtmak / hayal etmek", "Ich stelle mich vor."],
          ["sich interessieren für", "ilgilenmek", "Ich interessiere mich für Musik."],
          ["sich erinnern an", "hatırlamak", "Ich erinnere mich an die Schule."],
        ]
      }
    ],
    culturalNote: "🇩🇪 'Sich vorstellen' fiilinin iki anlamı var: kendini tanıtmak VE hayal etmek. 'Ich stelle mich vor.' (Kendimi tanıtıyorum) — iş görüşmelerinde çok kullanılır. 'Ich kann mir nicht vorstellen...' (Hayal edemiyorum...) — tamamen farklı anlam! Almanca'da bağlamın ne kadar önemli olduğuna güzel bir örnek.",
    annaTip: "💡 Anna'nın İpucu: 'sich beeilen' (acele etmek) günlük hayatta çok sık duyulur: 'Beeil dich!' (Acele et!), 'Wir müssen uns beeilen!' (Acele etmeliyiz!). Saatin sıkıştığı her durumda işe yarar!",
    commonMistakes: [
      "❌ 'Ich freue.' → sich fiilleri sich olmadan kullanılamaz!",
      "✅ 'Ich freue mich.' deyin.",
      "❌ 'Ich wasche mich die Hände.' → Ayrı nesne varsa Dativ kullanılır!",
      "✅ 'Ich wasche mir die Hände.' deyin.",
    ],
    examples: [
      { de: "Ich freue mich auf den Urlaub!", tr: "Tatili dört gözle bekliyorum!" },
      { de: "Sie interessiert sich sehr für Kunst.", tr: "Sanatla çok ilgileniyor." },
      { de: "Bitte setzen Sie sich, der Arzt kommt gleich.", tr: "Lütfen oturun, doktor hemen geliyor." },
      { de: "Er ärgert sich über den Lärm der Nachbarn.", tr: "Komşuların gürültüsüne sinirleniyor." },
      { de: "Wir müssen uns beeilen, der Zug fährt in 5 Minuten ab!", tr: "Acele etmeliyiz, tren 5 dakikaya kalkıyor!" },
    ]
  },

  {
    id: 18,
    level: "A2",
    titleDE: "Nebensätze",
    titleTR: "Yan Cümleler ve Bağlaçlar",
    icon: "🔗",
    color: "#0891b2",
    description: "weil, dass, wenn, ob, als, obwohl ve diğer bağlaçlarla kurulan yan cümleler — Almancada fiil sona gider!",
    grammar: {
      title: "Yan Cümlelerde Fiil Sona Gider! (Verbendstellung)",
      notes: [
        "Yan cümlelerde (Nebensatz) fiil HER ZAMAN SONA gider. Bu Almanca'nın en kritik kurallarından biridir:\n- 'Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.'\n(Almanya'da çalışmak istediğim için Almanca öğreniyorum.)\n- Ana cümle: 'Ich lerne Deutsch' + bağlaç 'weil' + yan cümle: 'ich in Deutschland arbeiten möchte' (fiil sona!)",
        "WEIL (çünkü) — Neden/sebep bildiren bağlaç:\n- 'Er kommt nicht, weil er krank ist.' (Hasta olduğu için gelmiyor.)\nNot: 'weil' ve 'denn' ikisi de 'çünkü' anlamına gelir, ancak 'denn' ana cümle bağlacıdır ve fiili sona göndermez!\n- 'Er kommt nicht, denn er ist krank.' (Fiil normal yerinde kalır!)",
        "DASS (ki/diye) — Dolaylı anlatım ve düşünceler:\n- 'Ich denke, dass Deutsch schwer ist.' (Almanca'nın zor olduğunu düşünüyorum.)\n- 'Ich hoffe, dass du kommst.' (Geleceğini umuyorum.)",
        "WENN (eğer / her ne zaman) — Koşul veya tekrarlayan durum:\n- 'Wenn ich Zeit habe, lese ich ein Buch.' (Zamanım olunca/olursa kitap okurum.)\n- 'Wenn ich groß bin, werde ich Arzt.' (Büyüyünce doktor olacağım.)\nALS (tek seferlik geçmiş olay için):\n- 'Als ich jung war, lebte ich in Istanbul.' (Gençken İstanbul'da yaşıyordum.)",
        "OB (olup olmadığı / mı, mi) — Dolaylı soru:\n- 'Ich weiß nicht, ob er kommt.' (Gelip gelmeyeceğini bilmiyorum.)\n- 'Kannst du mir sagen, ob der Bus pünktlich ist?' (Otobüsün dakik olup olmadığını söyler misin?)\nOBWOHL (rağmen/karşın) — Zıtlık:\n- 'Ich gehe spazieren, obwohl es regnet.' (Yağmur yağmasına rağmen yürüyüşe çıkıyorum.)"
      ]
    },
    grammarTables: [
      {
        title: "Yaygın Bağlaçlar ve Anlamları",
        headers: ["Bağlaç", "Türkçe", "Cümle Yapısı", "Örnek"],
        rows: [
          ["weil", "çünkü", "... weil + Özne + ... + FİİL", "..., weil ich müde bin."],
          ["dass", "ki / diye", "... dass + Özne + ... + FİİL", "..., dass du kommst."],
          ["wenn", "eğer / her ne zaman", "... wenn + Özne + ... + FİİL", "..., wenn ich Zeit habe."],
          ["als", "... iken (geçmiş, tek seferlik)", "... als + Özne + ... + FİİL", "..., als ich jung war."],
          ["ob", "-ip olmadığı / mı", "... ob + Özne + ... + FİİL", "..., ob er kommt."],
          ["obwohl", "rağmen", "... obwohl + Özne + ... + FİİL", "..., obwohl es schwer ist."],
          ["bevor", "önce / yapmadan", "... bevor + Özne + ... + FİİL", "..., bevor ich schlafe."],
          ["nachdem", "sonra / -dikten sonra", "... nachdem + Özne + ... + FİİL", "..., nachdem wir gegessen haben."],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanca'nın 'fiil sona gider' kuralı başlangıçta çok garip gelir. Ancak bu kural Almanca'ya özgü değil — Japonca, Korece ve Türkçe de (!) fiilin sona gittiği dillerdir. Almancayı öğrenen Türklerin bu konuda aslında avantajı var: cümlenin anlamı bitmeden anlamı beklemeye alışkınız!",
    annaTip: "💡 Anna'nın İpucu: Yan cümlede modal fiil varsa, yardımcı fiil değil asıl fiil sona gider, modal onu takip eder: 'Ich gehe nicht, weil ich arbeiten muss.' (Son iki kelime: arbeiten muss — asıl fiil önde, modal arkada!) Bu sıra çok sık hata kaynağıdır.",
    commonMistakes: [
      "❌ 'Ich komme nicht, weil ich bin krank.' → weil sonrası fiil SONA gider!",
      "✅ 'Ich komme nicht, weil ich krank bin.' deyin.",
      "❌ 'Ich weiß nicht, ob kommt er.' → ob'dan sonra da fiil sona gider!",
      "✅ 'Ich weiß nicht, ob er kommt.' deyin.",
      "❌ wenn vs. als karıştırmak: 'Als ich jung bin...' → als = geçmiş tek seferlik!",
      "✅ Şimdiki/gelecekteki koşul: 'wenn'. Geçmişteki tek olay: 'als'.",
    ],
    examples: [
      { de: "Ich lerne Deutsch, weil ich in Deutschland leben möchte.", tr: "Almanya'da yaşamak istediğim için Almanca öğreniyorum." },
      { de: "Ich hoffe, dass du bald kommst.", tr: "Yakında geleceğini umuyorum." },
      { de: "Ruf mich an, wenn du ankommst.", tr: "Varınca beni ara." },
      { de: "Als ich ein Kind war, hatte ich einen Hund.", tr: "Çocukken bir köpeğim vardı." },
      { de: "Weißt du, ob das Museum heute geöffnet ist?", tr: "Müzenin bugün açık olup olmadığını biliyor musun?" },
    ]
  },

  {
    id: 19,
    level: "A2",
    titleDE: "Wechselpräpositionen",
    titleTR: "İki Yönlü Edatlar",
    icon: "📍",
    color: "#7c3aed",
    description: "an, auf, in, hinter, vor, neben, über, unter, zwischen — Hareket (Akkusativ) veya Konum (Dativ) almalarıyla iki yönlü edatlar.",
    grammar: {
      title: "Wohin? → Akkusativ | Wo? → Dativ",
      notes: [
        "İki yönlü edatlar (Wechselpräpositionen) 9 tanedir:\nan, auf, hinter, in, neben, über, unter, vor, zwischen\n\nBu edatlar iki farklı soru sorusuna iki farklı yanıt verir:\n✅ 'Wohin?' (Nereye?) → Hareket/Yön → AKKUSATİV\n✅ 'Wo?' (Nerede?) → Konum/Durum → DATİV",
        "Akku vs. Dativ farkı eylemle anlaşılır:\n- 'Ich stelle das Buch INS Regal.' (Kitabı rafa koyuyorum → hareket → in + Akkusativ → ins = in das)\n- 'Das Buch steht IM Regal.' (Kitap rafın içinde duruyor → konum → in + Dativ → im = in dem)",
        "Lokasyon fiilleri (Konum → Dativ):\n- sein, stehen, liegen, sitzen, hängen\n- 'Die Katze liegt auf dem Sofa.' (Kedi kanepede uzanıyor.)\nHareket/Yerleştirme fiilleri (Yön → Akkusativ):\n- stellen, legen, setzen, hängen (koymak), gehen, fahren\n- 'Ich lege das Buch auf den Tisch.' (Kitabı masaya bırakıyorum.)",
        "Birleşimler (kontraksiyon):\n- in + das = ins | in + dem = im\n- an + das = ans | an + dem = am\n- auf + das (birleşmez, 'auf das' kalır genellikle)"
      ]
    },
    grammarTables: [
      {
        title: "9 İki Yönlü Edat ve Anlamları",
        headers: ["Edat", "Wo? (Dativ)", "Wohin? (Akkusativ)", "Türkçe"],
        rows: [
          ["an", "an der Wand (duvarda)", "an die Wand (duvara)", "yanında / kenarında"],
          ["auf", "auf dem Tisch (masada)", "auf den Tisch (masaya)", "üstünde"],
          ["hinter", "hinter dem Haus (evin arkasında)", "hinter das Haus (evin arkasına)", "arkasında"],
          ["in", "in der Schule (okulda)", "in die Schule (okula)", "içinde"],
          ["neben", "neben dem Bett (yatağın yanında)", "neben das Bett (yatağın yanına)", "yanında (bitişik)"],
          ["über", "über dem Tisch (masanın üzerinde)", "über den Tisch (masanın üzerine)", "üzerinde/üstünden"],
          ["unter", "unter dem Bett (yatağın altında)", "unter das Bett (yatağın altına)", "altında"],
          ["vor", "vor dem Kino (sinema önünde)", "vor das Kino (sinema önüne)", "önünde"],
          ["zwischen", "zwischen den Stühlen (sandalyeler arasında)", "zwischen die Stühle (sandalyeler arasına)", "arasında"],
        ]
      },
      {
        title: "Konum vs. Hareket Fiilleri",
        headers: ["Eylem", "Fiil", "Soru", "Hal", "Örnek"],
        rows: [
          ["Durmak", "stehen / liegen / sitzen / sein", "Wo?", "Dativ", "Das Buch liegt auf dem Tisch."],
          ["Koymak / Yerleştirmek", "stellen / legen / setzen / hängen", "Wohin?", "Akkusativ", "Ich stelle das Buch auf den Tisch."],
          ["Gitmek", "gehen / fahren / laufen", "Wohin?", "Akkusativ", "Ich gehe in die Küche."],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da sokak tabelaları ve yol tarifleri Wechselpräpositionen ile doludur: 'Am Marktplatz links abbiegen' (Pazar meydanında sola dönün), 'Hinter dem Bahnhof parken' (İstasyonun arkasında park edin). Bu yapıları anlamak, Almanya'da günlük hayatı çok kolaylaştırır.",
    annaTip: "💡 Anna'nın İpucu: 'stellen vs. stehen' ve 'legen vs. liegen' çiftlerini hatırlamanın kolay yolu:\n- STELLEN / LEGEN = Yaptıran eylemler (bir şeyi koyuyorum) → Akkusativ\n- STEHEN / LIEGEN = Kendi başına durum (bir şey orada duruyor) → Dativ\nTürkçede 'koymak' vs. 'durmak/yatmak' farkı gibi düşünün!",
    commonMistakes: [
      "❌ 'Ich gehe in dem Supermarkt.' → Gitmek harekettir → Akkusativ!",
      "✅ 'Ich gehe in den Supermarkt.' deyin.",
      "❌ 'Das Buch liegt auf den Tisch.' → Yatmak konumdur → Dativ!",
      "✅ 'Das Buch liegt auf dem Tisch.' deyin.",
    ],
    examples: [
      { de: "Das Café ist neben der Bäckerei.", tr: "Kafe, fırının yanında." },
      { de: "Ich hänge das Bild an die Wand.", tr: "Tabloyu duvara asıyorum." },
      { de: "Die Katze sitzt unter dem Stuhl.", tr: "Kedi sandalyenin altında oturuyor." },
      { de: "Stell bitte deine Schuhe vor die Tür.", tr: "Lütfen ayakkabılarını kapının önüne koy." },
      { de: "Zwischen dem Bahnhof und dem Hotel gibt es ein Restaurant.", tr: "İstasyon ile otel arasında bir restoran var." },
    ]
  },

  {
    id: 20,
    level: "A2",
    titleDE: "Konjunktiv II",
    titleTR: "Koşullu Kip: würde, könnte, hätte",
    icon: "💭",
    color: "#9333ea",
    description: "Dilek, varsayım ve kibarca rica cümlelerinde kullanılan Konjunktiv II: würde + Infinitiv, könnte, hätte, wäre.",
    grammar: {
      title: "Würde + İnfinitiv | Könnte / Hätte / Wäre",
      notes: [
        "Konjunktiv II başlıca 3 amaçla kullanılır:\n1) Gerçek olmayan koşullar: 'Wenn ich reich wäre, würde ich reisen.' (Zengin olsaydım, seyahat ederdim.)\n2) Kibarca rica: 'Könnten Sie mir helfen?' (Yardım edebilir misiniz?)\n3) Öneri/dilek: 'Ich würde lieber Tee trinken.' (Çay içmeyi tercih ederdim.)",
        "'würde + Infinitiv' yapısı — çoğu fiilin Konjunktiv II'si bu şekilde yapılır:\n- ich würde / du würdest / er-sie würde\n- wir würden / ihr würdet / sie-Sie würden\nÖrnek: 'Ich würde gerne reisen.' (Seyahat etmek isterdim.)",
        "Sık kullanılan özel Konjunktiv II formları (ayrıca ezberlenmeli!):\n- sein → wäre (ich wäre, du wärst, er wäre)\n- haben → hätte (ich hätte, du hättest, er hätte)\n- können → könnte (ich könnte, du könntest)\n- müssen → müsste (ich müsste, du müsstest)\n- dürfen → dürfte (ich dürfte)\nBunlar 'würde + fiil' olmadan doğrudan kullanılır!",
        "Kibarca ricalar için Konjunktiv II:\n- 'Könnten Sie bitte langsamer sprechen?' (Daha yavaş konuşabilir misiniz lütfen?)\n- 'Dürfte ich das Fenster öffnen?' (Pencereyi açabilir miyim?)\n- 'Hätten Sie einen Moment Zeit?' (Bir dakikanız var mı?)"
      ]
    },
    grammarTables: [
      {
        title: "würde — Konjunktiv II Yardımcı Fiili",
        headers: ["Kişi", "würde + Inf.", "Türkçe"],
        rows: [
          ["ich", "ich würde kommen", "gelirdim"],
          ["du", "du würdest kommen", "gelirdin"],
          ["er / sie / es", "er würde kommen", "gelirdi"],
          ["wir", "wir würden kommen", "gelirdik"],
          ["ihr", "ihr würdet kommen", "gelirdiniz"],
          ["sie / Sie", "sie würden kommen", "gelirlerdi / gelirdiniz"],
        ]
      },
      {
        title: "Özel Konjunktiv II Formları",
        headers: ["Fiil", "Konjunktiv II (ich)", "Türkçe Anlamı"],
        rows: [
          ["sein → wäre", "Ich wäre glücklich.", "Mutlu olurdum."],
          ["haben → hätte", "Ich hätte Zeit.", "Zamanım olurdu."],
          ["können → könnte", "Könnten Sie helfen?", "Yardım edebilir misiniz?"],
          ["müssen → müsste", "Ich müsste arbeiten.", "Çalışmam gerekirdi."],
          ["dürfen → dürfte", "Dürfte ich fragen?", "Sorsam olur mu?"],
          ["mögen → möchte", "Ich möchte Kaffee.", "Kahve istiyorum. (kibar)"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da Konjunktiv II kibarlığın simgesidir. 'Ich will...' (İstiyorum) yerine 'Ich würde gerne...' veya 'Ich hätte gerne...' demek çok daha kibar algılanır. Restorantta sipariş verirken, otelde check-in yaparken veya yardım isterken bu formları kullanmak sosyal açıdan büyük avantaj sağlar.",
    annaTip: "💡 Anna'nın İpucu: Konjunktiv II'yi A2'de sadece kibarca rica ve 'würde + Fiil' kalıplarıyla başlayın. Karmaşık koşul cümlelerine (Wenn-Sätze) A2 sonunda veya B1'de odaklanırsınız. Öncelik: 'Könnten Sie...' ve 'Ich würde gerne...' kalıplarını akıcı kullanabilmek!",
    commonMistakes: [
      "❌ 'Ich würde sein glücklich.' → sein/haben/können için würde kullanılmaz!",
      "✅ 'Ich wäre glücklich.' (sein → wäre) deyin.",
      "❌ 'Könntest Sie bitte helfen?' → Sie ile konuşunca -en/-en takısı!",
      "✅ 'Könnten Sie bitte helfen?' deyin.",
    ],
    examples: [
      { de: "Könnten Sie mir bitte helfen?", tr: "Bana yardım edebilir misiniz lütfen?" },
      { de: "Ich würde gerne mehr reisen.", tr: "Daha çok seyahat etmek isterdim." },
      { de: "Wenn ich mehr Zeit hätte, würde ich Sport treiben.", tr: "Daha fazla zamanım olsaydı spor yapardım." },
      { de: "Das wäre wirklich toll!", tr: "Bu gerçekten harika olurdu!" },
      { de: "Hätten Sie einen Tisch für zwei Personen frei?", tr: "İki kişilik boş masanız var mı?" },
    ]
  },

  {
    id: 21,
    level: "A2",
    titleDE: "Berufe & Arbeitswelt",
    titleTR: "Meslekler ve İş Hayatı",
    icon: "💼",
    color: "#0369a1",
    description: "Meslek isimleri, iş görüşmesi kalıpları, CV hazırlama ve Almanya'da iş hayatı kültürü.",
    grammar: {
      title: "Meslekler ve werden (Geleceği Bildirme)",
      notes: [
        "Almanca'da meslek belirtirken artikel kullanılmaz!\n- ✅ 'Ich bin Arzt.' (Doktorum.) — ARTIKEL YOK\n- ❌ 'Ich bin ein Arzt.' — Yanlış!\nBir mesleğe sahip olmak için 'als + meslek' kalıbı da kullanılır:\n- 'Ich arbeite als Ingenieur.' (Mühendis olarak çalışıyorum.)",
        "Cinsiyete göre meslek isimleri:\nAlmanca'da meslekler erkek ve kadın formunda değişir:\n- Lehrer (erkek öğretmen) → Lehrerin (kadın öğretmen)\n- Arzt (erkek doktor) → Ärztin\n- Ingenieur → Ingenieurin\n- Koch (aşçı erkek) → Köchin\n- Verkäufer (satıcı erkek) → Verkäuferin\nÇoğulda genellikle -innen eki gelir: Lehrerinnen, Ärztinnen",
        "werden + Infinitiv → Gelecek Zaman (Futur I):\n- 'Ich werde Arzt werden.' (Doktor olacağım.)\n- 'Er wird bald anfangen.' (Yakında başlayacak.)\n- Çekimi: ich werde / du wirst / er wird / wir werden / ihr werdet / sie werden",
        "İş görüşmesinde kritik fiiller:\n- sich bewerben um (başvurmak için)\n- eingestellt werden (işe alınmak)\n- kündigen (istifa etmek / işten çıkarmak)\n- ein Vorstellungsgespräch haben (iş görüşmesi yapmak)"
      ]
    },
    grammarTables: [
      {
        title: "Yaygın Meslekler (Kadın ve Erkek Formu)",
        headers: ["Erkek Formu", "Kadın Formu", "Türkçe"],
        rows: [
          ["der Arzt", "die Ärztin", "Doktor"],
          ["der Lehrer", "die Lehrerin", "Öğretmen"],
          ["der Ingenieur", "die Ingenieurin", "Mühendis"],
          ["der Anwalt", "die Anwältin", "Avukat"],
          ["der Koch", "die Köchin", "Aşçı"],
          ["der Kellner", "die Kellnerin", "Garson"],
          ["der Verkäufer", "die Verkäuferin", "Satış Elemanı"],
          ["der Polizist", "die Polizistin", "Polis Memuru"],
          ["der Architekt", "die Architektin", "Mimar"],
          ["der Pfleger", "die Pflegerin", "Hemşire/Bakıcı"],
          ["der Fahrer", "die Fahrerin", "Sürücü"],
          ["der Programmierer", "die Programmiererin", "Programcı"],
        ]
      },
      {
        title: "İş Hayatı Kelimeleri",
        headers: ["Almanca", "Türkçe"],
        rows: [
          ["die Bewerbung (-en)", "iş başvurusu"],
          ["der Lebenslauf (-̈e)", "özgeçmiş (CV)"],
          ["das Vorstellungsgespräch (-e)", "iş görüşmesi"],
          ["das Gehalt (-̈er)", "maaş"],
          ["die Stelle (-n)", "pozisyon / iş yeri"],
          ["der Kollege / die Kollegin", "meslektaş"],
          ["der Chef / die Chefin", "patron / müdür"],
          ["die Kündigung (-en)", "işten ayrılma / ihraç"],
          ["die Überstunden (çoğul)", "fazla mesai"],
          ["der Urlaub", "izin / tatil"],
          ["das Büro (-s)", "ofis"],
          ["die Besprechung (-en)", "toplantı"],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanya'da çalışma kültürü Türkiye'den oldukça farklıdır. 'Work-Life-Balance' (iş-yaşam dengesi) son derece önemlidir. Mesai saatlerinin dışında iş konuşmak pek hoş karşılanmaz. Çalışan hakları çok güçlüdür: yıllık ortalama 24-30 gün ücretli izin zorunludur. 'Betriebsrat' (işyeri konseyi) çalışanların haklarını korur.",
    annaTip: "💡 Anna'nın İpucu: Almanya'da bir işe başvururken 'Lebenslauf' (CV) Alman formatında olmalıdır: fotoğraflı, kronolojik sıralı ve kısa (maks. 2 sayfa). 'Bewerbungsschreiben' (ön yazı) da gereklidir. İngilizce'den farklı olarak kişisel bilgiler (doğum tarihi, uyruk) Alman CV'lerinde genellikle yer alır.",
    commonMistakes: [
      "❌ 'Ich bin ein Arzt.' → Meslek ifadelerinde artikel kullanılmaz!",
      "✅ 'Ich bin Arzt.' deyin.",
      "❌ 'Ich arbeite als Ingenieur.' ile 'Ich bin Ingenieur.' arasındaki nüansı atlamak.",
      "✅ İkisi de doğru ama 'als' kullanımı genellikle mevcut iş durumunu vurgular.",
    ],
    examples: [
      { de: "Ich bin seit fünf Jahren als Krankenschwester tätig.", tr: "Beş yıldır hemşire olarak çalışıyorum." },
      { de: "Haben Sie Erfahrung in diesem Bereich?", tr: "Bu alanda deneyiminiz var mı?" },
      { de: "Ich habe mich für die Stelle als Programmierer beworben.", tr: "Programcı pozisyonu için başvurdum." },
      { de: "Mein Gehalt ist leider nicht sehr hoch.", tr: "Maaşım ne yazık ki çok yüksek değil." },
      { de: "Nächste Woche haben wir eine wichtige Besprechung.", tr: "Gelecek hafta önemli bir toplantımız var." },
    ]
  },

  {
    id: 22,
    level: "A2",
    titleDE: "Urlaub & Freizeit",
    titleTR: "Seyahat ve Boş Zaman",
    icon: "✈️",
    color: "#0d9488",
    description: "Tatil planlama, uçuş rezervasyonu, otel konuşmaları, seyahat anıları ve boş zaman aktiviteleri.",
    grammar: {
      title: "Seyahat Anlatımı: Perfekt + Präteritum + Konjunktiv II",
      notes: [
        "Tatil anılarını anlatmak için Perfekt kullanılır:\n- 'Letzten Sommer bin ich nach Spanien gefahren.' (Geçen yaz İspanya'ya gittim.)\n- 'Wir haben viel besichtigt und schöne Fotos gemacht.' (Çok şey gezdik ve güzel fotoğraflar çektik.)",
        "Tatil planları için Futur (werden) veya Präsens:\n- 'Nächstes Jahr werde ich nach Japan reisen.' (Gelecek yıl Japonya'ya seyahat edeceğim.)\n- 'Im Sommer fahren wir ans Meer.' (Yaz aylarında denize gidiyoruz.) — Präsens ile gelecek!",
        "Tatil dileği için Konjunktiv II:\n- 'Ich würde gerne die Alpen besuchen.' (Alpler'i ziyaret etmek isterdim.)\n- 'Am liebsten würde ich am Strand liegen.' (En çok sahilde uzanmak isterdim.)",
        "Otel ve uçuş rezervasyon kalıpları:\n- 'Ich möchte ein Zimmer für zwei Nächte reservieren.' (İki gecelik oda rezervasyonu yapmak istiyorum.)\n- 'Haben Sie noch freie Zimmer?' (Boş odanız var mı?)\n- 'Wann ist der Check-in / Check-out?' (Giriş / çıkış saati ne zaman?)"
      ]
    },
    grammarTables: [
      {
        title: "Seyahat Kelimeleri",
        headers: ["Almanca", "Türkçe", "Almanca", "Türkçe"],
        rows: [
          ["der Flughafen", "havalimanı", "die Abfahrt", "kalkış"],
          ["das Flugzeug", "uçak", "die Ankunft", "varış"],
          ["der Koffer", "bavul", "die Verspätung", "gecikme"],
          ["der Reisepass", "pasaport", "das Visum", "vize"],
          ["die Unterkunft", "konaklama", "das Hotel", "otel"],
          ["die Sehenswürdigkeit", "turistik yer", "der Strand", "sahil/plaj"],
          ["das Gebirge", "dağlık alan", "der See", "göl"],
          ["der Ausflug", "günübirlik gezi", "die Reise", "seyahat/yolculuk"],
        ]
      },
      {
        title: "Boş Zaman Aktiviteleri",
        headers: ["Aktivite", "Türkçe", "Nasıl Kullanılır?"],
        rows: [
          ["wandern gehen", "yürüyüşe çıkmak", "Ich gehe gern wandern."],
          ["schwimmen gehen", "yüzmeye gitmek", "Wir gehen am Wochenende schwimmen."],
          ["ins Kino gehen", "sinemaya gitmek", "Willst du ins Kino gehen?"],
          ["ins Theater gehen", "tiyatroya gitmek", "Wir gehen ins Theater."],
          ["Sport treiben", "spor yapmak", "Ich treibe jeden Tag Sport."],
          ["Musik hören", "müzik dinlemek", "Sie hört gern klassische Musik."],
          ["lesen", "okumak", "Er liest täglich eine Stunde."],
          ["reisen", "seyahat etmek", "Ich reise sehr gern."],
          ["kochen", "yemek yapmak", "Sie kocht am Wochenende gern."],
          ["fotografieren", "fotoğraf çekmek", "Er fotografiert die Natur."],
        ]
      }
    ],
    culturalNote: "🇩🇪 Almanlar seyahati çok sever! Almanya'da kişi başına düşen seyahat harcaması Avrupa'nın en yükseklerindendir. Popüler tatil destinasyonları arasında Mallorca (İspanya), Türkiye, Balkanlar ve İtalya yer alır. 'Mallorca ist das 17. Bundesland' (Mallorca 17. eyalet) şakası yaygındır — o kadar çok Alman tatilci gider! Boş zamanlarında ise Verein'ler (kulüpler) çok popülerdir: futbol, Karneval, koro, satranç...",
    annaTip: "💡 Anna'nın İpucu: 'Sport treiben' kalıbı 'spor yapmak' için standart ifadedir. 'Sport machen' de kullanılır ama 'Sport treiben' daha resmidir. Belirli bir sporu yaparken ise farklı fiiller gelir: 'Fußball spielen' (futbol oynamak), 'schwimmen gehen' (yüzmeye gitmek), 'laufen' (koşmak).",
    commonMistakes: [
      "❌ 'Ich mache Sport Fußball.' → Belirli spor + spielen/gehen!",
      "✅ 'Ich spiele Fußball.' veya 'Ich treibe Sport.' deyin.",
      "❌ Seyahat anlatımında 'ich habe gefahren' → fahren sein alır!",
      "✅ 'Ich bin nach Italien gefahren.' deyin.",
    ],
    examples: [
      { de: "Letzten Sommer sind wir nach Portugal geflogen.", tr: "Geçen yaz Portekiz'e uçtuk." },
      { de: "Ich möchte ein ruhiges Doppelzimmer mit Meerblick.", tr: "Deniz manzaralı sessiz bir çift kişilik oda istiyorum." },
      { de: "Haben Sie noch Zimmer für nächste Woche frei?", tr: "Gelecek hafta için boş odanız var mı?" },
      { de: "Was kann man hier in der Gegend besichtigen?", tr: "Bu çevrede ne gibi yerler gezebiliriz?" },
      { de: "Am Wochenende gehe ich gern wandern oder ins Kino.", tr: "Hafta sonları yürüyüşe çıkmayı veya sinemaya gitmeyi severim." },
    ]
  }
];
