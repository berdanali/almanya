// src/data/dailylife.js

export const dailyLifeScenarios = [
  // ─── 1. BEGRÜSSUNG ───────────────────────────────────────────────────────────
  {
    id: "begruessung",
    title: "Begrüßung & Verabschiedung",
    subtitle: "Selamlaşma ve Vedalaşma",
    icon: "🤝",
    color: "#3b82f6",
    description: "Almanya'da günlük hayatta en çok duyacağınız ve kullanacağınız temel selamlaşma ve vedalaşma kalıpları.",
    tip: "📌 Almanya'da 'Sie' (resmi siz) ve 'du' (sen) ayrımı çok önemlidir. Yabancılar ve iş hayatında 'Sie' kullanın; arkadaşlar arasında 'du' kullanılır.",
    dialogues: [
      {
        title: "Diyalog 1: Resmi Tanışma (Komşu)",
        context: "Berdan yeni taşındığı apartmanda komşusuyla ilk kez karşılaşıyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Entschuldigung — sind Sie neu hier?", translation: "İyi günler! Afedersiniz — buraya yeni mi taşındınız?" },
          { speaker: "B", label: "Frau Klein", text: "Guten Tag! Nein, ich wohne schon seit drei Jahren hier. Sie sind neu, oder?", translation: "İyi günler! Hayır, ben burada üç yıldır oturuyorum. Siz yenisiniz, değil mi?" },
          { speaker: "A", label: "Berdan", text: "Ja, ich bin letzte Woche eingezogen. Ich heiße Berdan Yılmaz.", translation: "Evet, geçen hafta taşındım. Adım Berdan Yılmaz." },
          { speaker: "B", label: "Frau Klein", text: "Freut mich, Herr Yılmaz! Ich bin Monika Klein. Ich wohne im zweiten Stock.", translation: "Memnun oldum, Bay Yılmaz! Ben Monika Klein. İkinci katta oturuyorum." },
          { speaker: "A", label: "Berdan", text: "Sehr erfreut, Frau Klein! Ich wohne im Erdgeschoss, Wohnung 3.", translation: "Ben de memnun oldum, Bayan Klein! Ben giriş katında, 3 numaralı dairede oturuyorum." },
          { speaker: "B", label: "Frau Klein", text: "Kommen Sie aus der Türkei?", translation: "Türkiye'den mi geliyorsunuz?" },
          { speaker: "A", label: "Berdan", text: "Ja, ich komme aus Istanbul. Ich lerne gerade Deutsch.", translation: "Evet, İstanbul'dan geliyorum. Şu an Almanca öğreniyorum." },
          { speaker: "B", label: "Frau Klein", text: "Oh, Ihr Deutsch ist schon sehr gut! Herzlich willkommen im Haus!", translation: "Oh, Almanceniz zaten çok iyi! Eve hoş geldiniz!" },
          { speaker: "A", label: "Berdan", text: "Vielen Dank, das ist sehr nett von Ihnen!", translation: "Çok teşekkürler, bu çok nazikçe sizin tarafınızdan!" },
          { speaker: "B", label: "Frau Klein", text: "Schönen Tag noch, Herr Yılmaz! Bis bald!", translation: "İyi günler, Bay Yılmaz! Yakında görüşmek üzere!" }
        ]
      },
      {
        title: "Diyalog 2: Arkadaşça Selamlaşma",
        context: "Berdan iş arkadaşı Jonas ile sabah ofis koridorunda karşılaşıyor.",
        lines: [
          { speaker: "A", label: "Jonas", text: "Hey Berdan! Na, wie läuft's?", translation: "Hey Berdan! Nasıl gidiyor?" },
          { speaker: "B", label: "Berdan", text: "Hallo Jonas! Alles super, danke! Und bei dir?", translation: "Merhaba Jonas! Her şey süper, teşekkürler! Sende nasıl?" },
          { speaker: "A", label: "Jonas", text: "Ganz gut. Ich bin ein bisschen müde heute.", translation: "İdare eder. Bugün biraz yorgunum." },
          { speaker: "B", label: "Berdan", text: "Ja? Hast du schlecht geschlafen?", translation: "Öyle mi? Kötü mü uyudun?" },
          { speaker: "A", label: "Jonas", text: "Ja, leider. Das Baby hat die ganze Nacht geweint.", translation: "Evet, maalesef. Bebek bütün gece ağladı." },
          { speaker: "B", label: "Berdan", text: "Oh, das ist hart! Ich hoffe, du erholst dich bald.", translation: "Oh, bu zor! Umarım yakında dinlenirsin." },
          { speaker: "A", label: "Jonas", text: "Danke! Also, bis nachher beim Meeting!", translation: "Teşekkürler! Peki, toplantıda görüşürüz!" },
          { speaker: "B", label: "Berdan", text: "Ja, bis dann! Tschüss!", translation: "Evet, görüşürüz! Hoşça kal!" }
        ]
      }
    ],
    phrases: [
      { de: "Guten Morgen / Guten Tag / Guten Abend", tr: "Günaydın / İyi günler / İyi akşamlar", context: "Günün saatine göre kullanılır" },
      { de: "Hallo! / Hi! / Servus! (Güney Almanya)", tr: "Merhaba! / Selam!", context: "Günlük ve arkadaşça" },
      { de: "Wie geht es Ihnen? (resmi) / Wie geht's? (samimi)", tr: "Nasılsınız? / Naber?", context: "'Ihnen' resmi, 'geht's' günlük" },
      { de: "Danke, gut! / Super! / Es geht.", tr: "Teşekkürler, iyiyim! / Süper! / İdare eder.", context: "Nasılsın sorusuna yanıtlar" },
      { de: "Freut mich! / Sehr erfreut!", tr: "Memnun oldum! / Çok memnun oldum!", context: "Tanışma anında" },
      { de: "Auf Wiedersehen! / Tschüss! / Ciao!", tr: "Görüşmek üzere! / Hoşça kal! / Ciao!", context: "Vedalaşırken — resmi → günlük" },
      { de: "Bis bald! / Bis später! / Bis morgen!", tr: "Yakında görüşürüz! / Sonra görüşürüz! / Yarın görüşürüz!", context: "Zaman belirterek veda" },
      { de: "Schönen Tag noch! / Schönes Wochenende!", tr: "İyi günler! / İyi hafta sonları!", context: "Nazik kapanış ifadesi" },
      { de: "Herzlich willkommen!", tr: "Hoş geldiniz! (içten bir şekilde)", context: "Birisini bir yere kabul ederken" },
      { de: "Gern geschehen! / Nichts zu danken!", tr: "Bir şey değil! / Rica ederim!", context: "Teşekkürü kabul ederken" }
    ]
  },

  // ─── 2. BEIM ARZT & APOTHEKE ────────────────────────────────────────────────
  {
    id: "arzt",
    title: "Beim Arzt & Apotheke",
    subtitle: "Doktorda ve Eczanede",
    icon: "🏥",
    color: "#ef4444",
    description: "Hastaneye gitmek, randevu almak, şikayetleri anlatmak ve eczanede ilaç almak için kritik ifadeler.",
    tip: "📌 Almanya'da doktora gitmeden önce randevu (Termin) almak zorunludur. Sağlık kartınızı (Krankenkassenkarte / Gesundheitskarte) yanınızda bulundurun.",
    dialogues: [
      {
        title: "Diyalog 1: Telefonla Randevu Alma",
        context: "Berdan kendini iyi hissetmiyor ve telefonda randevu almaya çalışıyor.",
        lines: [
          { speaker: "B", label: "Arzthelferin", text: "Praxis Dr. Müller, guten Morgen! Was kann ich für Sie tun?", translation: "Dr. Müller Kliniği, günaydın! Size ne yapabilirim?" },
          { speaker: "A", label: "Berdan", text: "Guten Morgen! Mein Name ist Berdan Yılmaz. Ich fühle mich nicht wohl und brauche einen Termin.", translation: "Günaydın! Benim adım Berdan Yılmaz. Kendimi iyi hissetmiyorum ve bir randevuya ihtiyacım var." },
          { speaker: "B", label: "Arzthelferin", text: "Was sind Ihre Beschwerden, Herr Yılmaz?", translation: "Şikayetleriniz neler, Bay Yılmaz?" },
          { speaker: "A", label: "Berdan", text: "Ich habe starke Kopfschmerzen, Fieber und Halsschmerzen seit zwei Tagen.", translation: "İki günden beri şiddetli baş ağrım, ateşim ve boğaz ağrım var." },
          { speaker: "B", label: "Arzthelferin", text: "Verstehe. Sind Sie Kassenpatient oder Privatpatient?", translation: "Anlıyorum. Zorunlu sağlık sigortanız mı var, özel sigortanız mı?" },
          { speaker: "A", label: "Berdan", text: "Ich bin Kassenpatient. Meine Krankenkasse ist die AOK.", translation: "Zorunlu sağlık sigortam var. Sigortam AOK." },
          { speaker: "B", label: "Arzthelferin", text: "Gut. Können Sie heute Nachmittag um 15:30 Uhr kommen?", translation: "Peki. Bu öğleden sonra saat 15:30'da gelebilir misiniz?" },
          { speaker: "A", label: "Berdan", text: "Ja, das passt mir sehr gut. Vielen Dank!", translation: "Evet, bu bana çok uyuyor. Çok teşekkürler!" },
          { speaker: "B", label: "Arzthelferin", text: "Bitte bringen Sie Ihre Versichertenkarte mit. Bis heute Nachmittag!", translation: "Lütfen sigorta kartınızı getirin. Bu öğleden sonraya kadar!" }
        ]
      },
      {
        title: "Diyalog 2: In der Apotheke",
        context: "Berdan doktordan reçete aldıktan sonra eczaneye gidiyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Ich hätte gern dieses Rezept einlösen.", translation: "İyi günler! Bu reçeteyi yazdırmak istiyorum." },
          { speaker: "B", label: "Apothekerin", text: "Guten Tag! Einen Moment bitte. — Hier sind Ihre Tabletten, Herr Yılmaz.", translation: "İyi günler! Bir dakika lütfen. — İşte tabletleriniz, Bay Yılmaz." },
          { speaker: "A", label: "Berdan", text: "Wie oft muss ich die Tabletten nehmen?", translation: "Tabletleri kaç kez almam gerekiyor?" },
          { speaker: "B", label: "Apothekerin", text: "Dreimal täglich — morgens, mittags und abends — immer nach dem Essen.", translation: "Günde üç kez — sabah, öğlen ve akşam — hep yemekten sonra." },
          { speaker: "A", label: "Berdan", text: "Darf ich dabei Alkohol trinken?", translation: "Bu arada alkol içebilir miyim?" },
          { speaker: "B", label: "Apothekerin", text: "Nein, bitte kein Alkohol während der Einnahme. Das ist sehr wichtig.", translation: "Hayır, lütfen ilaç kullanım süresinde alkol içmeyin. Bu çok önemli." },
          { speaker: "A", label: "Berdan", text: "Verstanden. Haben Sie auch etwas gegen Kopfschmerzen? Ohne Rezept?", translation: "Anladım. Baş ağrısına karşı reçetesiz bir şeyiniz de var mı?" },
          { speaker: "B", label: "Apothekerin", text: "Ja, Ibuprofen 400mg bekommen Sie ohne Rezept. Das macht 6,50 Euro.", translation: "Evet, Ibuprofen 400mg'ı reçetesiz alabilirsiniz. 6,50 Euro tutuyor." },
          { speaker: "A", label: "Berdan", text: "Gut, ich nehme beides. Kann ich mit Karte zahlen?", translation: "Peki, ikisini de alıyorum. Kartla ödeyebilir miyim?" },
          { speaker: "B", label: "Apothekerin", text: "Natürlich. Gute Besserung, Herr Yılmaz!", translation: "Tabii ki. Geçmiş olsun, Bay Yılmaz!" }
        ]
      }
    ],
    phrases: [
      { de: "Ich fühle mich nicht wohl.", tr: "Kendimi iyi hissetmiyorum.", context: "Genel rahatsızlık" },
      { de: "Ich habe Schmerzen in / an + (organ).", tr: "...im ağrıyor / ...de ağrı var.", context: "Örn: Ich habe Schmerzen im Bauch." },
      { de: "Ich habe Fieber / Husten / Schnupfen.", tr: "Ateşim / Öksürüğüm / Nez akıntım var.", context: "Yaygın hastalık belirtileri" },
      { de: "Seit wann haben Sie die Beschwerden?", tr: "Ne zamandan beri şikayetleriniz var?", context: "Doktorun sorusu" },
      { de: "Seit zwei Tagen / einer Woche.", tr: "İki günden beri / Bir haftadan beri.", context: "Zaman belirtme" },
      { de: "Ich bin allergisch gegen Penicillin.", tr: "Penisiline alerjim var.", context: "Alerji bildirimi — çok önemli!" },
      { de: "Schreiben Sie mir bitte ein Rezept.", tr: "Lütfen bana bir reçete yazar mısınız?", context: "Doktordan reçete istemek" },
      { de: "Wo ist die nächste Apotheke?", tr: "En yakın eczane nerede?", context: "Eczane bulmak" },
      { de: "Haben Sie das auch als Spray / Salbe / Tropfen?", tr: "Bunu sprey / krem / damla olarak da var mı?", context: "İlaç formu sormak" },
      { de: "Gute Besserung!", tr: "Geçmiş olsun!", context: "Hasta birine söylenir" },
      { de: "Bitte nehmen Sie Platz im Wartezimmer.", tr: "Lütfen bekleme odasında oturun.", context: "Klinikte sık duyulur" }
    ]
  },

  // ─── 3. EINKAUFEN ────────────────────────────────────────────────────────────
  {
    id: "einkaufen",
    title: "Einkaufen & Supermarkt",
    subtitle: "Alışveriş ve Süpermarket",
    icon: "🛒",
    color: "#10b981",
    description: "Markette, fırında ve mağazada alışveriş yaparken ihtiyacınız olan her şey.",
    tip: "📌 Almanya'da kasada kendi çantanızı getirmek alışkanlıktır. 'Haben Sie eine Tüte?' (Poşetiniz var mı?) diye sorabilirsiniz. Pfand sistemiyle plastik şişeler iade edilir.",
    dialogues: [
      {
        title: "Diyalog 1: Süpermarkette",
        context: "Berdan süpermarkette alışveriş yapıyor, bir market çalışanından yardım istiyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Entschuldigung, wo finde ich Olivenöl?", translation: "Afedersiniz, zeytinyağını nerede bulabilirim?" },
          { speaker: "B", label: "Verkäuferin", text: "Olivenöl finden Sie im Gang 5, zwischen den Nudeln und dem Essig.", translation: "Zeytinyağını 5. koridorda, makarnalar ile sirkenin arasında bulursunuz." },
          { speaker: "A", label: "Berdan", text: "Danke sehr. Und haben Sie auch türkische Produkte?", translation: "Çok teşekkürler. Peki Türk ürünleri de var mı?" },
          { speaker: "B", label: "Verkäuferin", text: "Ja, wir haben eine kleine internationale Ecke in Gang 8.", translation: "Evet, 8. koridorda küçük bir uluslararası köşemiz var." },
          { speaker: "A", label: "Berdan", text: "Super! Noch eine Frage — ist diese Milch laktosefrei?", translation: "Harika! Bir sorum daha — bu süt laktozsuz mu?" },
          { speaker: "B", label: "Verkäuferin", text: "Ja, das Grüne ist laktosefrei. Das Blaue ist die normale Vollmilch.", translation: "Evet, yeşil olan laktozsuz. Mavi olan ise normal tam yağlı süt." },
          { speaker: "A", label: "Berdan", text: "Perfekt, dann nehme ich die grüne. Vielen Dank für Ihre Hilfe!", translation: "Mükemmel, o zaman yeşil olanı alıyorum. Yardımınız için çok teşekkürler!" }
        ]
      },
      {
        title: "Diyalog 2: An der Kasse (Kasada)",
        context: "Berdan kasada ödeme yapıyor.",
        lines: [
          { speaker: "B", label: "Kassiererin", text: "Guten Tag! Haben Sie eine Kundenkarte?", translation: "İyi günler! Müşteri kartınız var mı?" },
          { speaker: "A", label: "Berdan", text: "Nein, leider nicht. Wie bekomme ich eine?", translation: "Hayır, maalesef yok. Nasıl alabilirim?" },
          { speaker: "B", label: "Kassiererin", text: "Am Informationsschalter können Sie sich anmelden. Das ist kostenlos.", translation: "Bilgi tezgahında üye olabilirsiniz. Bu ücretsizdir." },
          { speaker: "A", label: "Berdan", text: "Danke. Das mache ich dann. Was macht das insgesamt?", translation: "Teşekkürler. O zaman yaparım. Toplam ne kadar?" },
          { speaker: "B", label: "Kassiererin", text: "Das macht zusammen 23 Euro 85 Cent. Möchten Sie eine Tüte?", translation: "Toplam 23 Euro 85 Cent tutuyor. Poşet ister misiniz?" },
          { speaker: "A", label: "Berdan", text: "Nein danke, ich habe meinen Rucksack dabei. Zahlen mit EC-Karte.", translation: "Hayır teşekkürler, sırt çantam var yanımda. Banka kartıyla ödeme yapıyorum." },
          { speaker: "B", label: "Kassiererin", text: "Bitte geben Sie Ihre PIN ein. — Danke, quittung benötigen Sie?", translation: "Lütfen PIN numaranızı girin. — Teşekkürler, fiş ister misiniz?" },
          { speaker: "A", label: "Berdan", text: "Ja bitte. Auf Wiedersehen!", translation: "Evet lütfen. Güle güle!" }
        ]
      }
    ],
    phrases: [
      { de: "Wo finde ich...? / In welchem Gang ist...?", tr: "...nerede bulabilirim? / ...kaçıncı koridorda?", context: "Ürün bulmak için" },
      { de: "Was kostet das? / Wie viel kostet ein Kilo?", tr: "Bu ne kadar? / Bir kilo ne kadar?", context: "Fiyat sormak" },
      { de: "Ich hätte gern 200 Gramm Käse, bitte.", tr: "200 gram peynir rica ediyorum lütfen.", context: "Şarküteri tezgahında" },
      { de: "Ist das heute im Angebot?", tr: "Bu bugün indirimde mi?", context: "İndirim sormak" },
      { de: "Das ist zu teuer. Haben Sie etwas Günstigeres?", tr: "Bu çok pahalı. Daha ucuz bir şeyiniz var mı?", context: "Fiyat üzerine yorum" },
      { de: "Kann ich das umtauschen?", tr: "Bunu değiştirebilir miyim?", context: "Ürün iade/değişim" },
      { de: "Ich zahle bar / mit Karte.", tr: "Nakit / Kartla ödeyeceğim.", context: "Ödeme yöntemi" },
      { de: "Stimmt so. (Üstü kalsın.)", tr: "Üstü kalsın. (Bahşiş)", context: "Bozuk para bırakmak istemiyorsanız" },
      { de: "Haben Sie eine Tüte / Tragetasche?", tr: "Poşetiniz / alışveriş torbanız var mı?", context: "Kasada sık sorulan soru" },
      { de: "Das Mindesthaltbarkeitsdatum ist abgelaufen.", tr: "Son kullanma tarihi geçmiş.", context: "Ürün şikayeti için" }
    ]
  },

  // ─── 4. RESTAURANT & CAFÉ ────────────────────────────────────────────────────
  {
    id: "restaurant",
    title: "Im Restaurant & Café",
    subtitle: "Restoran ve Kafede Sipariş",
    icon: "☕",
    color: "#f59e0b",
    description: "Dışarıda yemek yerken veya kafede vakit geçirirken ihtiyacınız olan tüm ifadeler.",
    tip: "📌 Almanya'da garson otomatik olarak gelmeyebilir — el kaldırarak veya göz temasıyla işaret edebilirsiniz. 'Entschuldigung!' diyerek çağırmak da normaldir.",
    dialogues: [
      {
        title: "Diyalog 1: Restoranda Akşam Yemeği",
        context: "Berdan ve arkadaşı bir restorana giriyorlar. Masaya otururlar, sipariş verirler.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Abend! Haben Sie noch einen Tisch für zwei Personen frei?", translation: "İyi akşamlar! İki kişilik boş masanız var mı?" },
          { speaker: "B", label: "Kellner", text: "Ja, gerne! Haben Sie reserviert?", translation: "Evet, tabii! Rezervasyon yaptırdınız mı?" },
          { speaker: "A", label: "Berdan", text: "Nein, leider nicht.", translation: "Hayır, maalesef hayır." },
          { speaker: "B", label: "Kellner", text: "Kein Problem. Bitte folgen Sie mir. Hier ist die Speisekarte.", translation: "Sorun değil. Lütfen beni takip edin. İşte menü." },
          { speaker: "A", label: "Berdan", text: "Danke. Was empfehlen Sie heute?", translation: "Teşekkürler. Bugün ne tavsiye edersiniz?" },
          { speaker: "B", label: "Kellner", text: "Unser Tagesgericht ist Schweinebraten mit Kartoffeln und Rotkohl — sehr lecker!", translation: "Günün yemeğimiz patates ve kırmızı lahanaylı domuz kızartması — çok lezzetli!" },
          { speaker: "A", label: "Berdan", text: "Hmm, ich esse kein Schweinefleisch. Haben Sie etwas mit Hühnchen?", translation: "Hmm, ben domuz eti yemiyorum. Tavuklu bir şeyiniz var mı?" },
          { speaker: "B", label: "Kellner", text: "Natürlich! Gegrilltes Hühnchen mit Salat und Reis ist auch sehr beliebt.", translation: "Tabii ki! Salata ve pilavlı ızgara tavuk da çok popüler." },
          { speaker: "A", label: "Berdan", text: "Prima, das nehme ich. Und eine Flasche stilles Wasser bitte.", translation: "Harika, onu alıyorum. Ve lütfen bir şişe maden susuz su." },
          { speaker: "B", label: "Kellner", text: "Sehr gerne. Kommt sofort!", translation: "Memnuniyetle. Hemen geliyor!" },
          { speaker: "A", label: "Berdan", text: "Entschuldigung! Die Rechnung bitte, wir möchten zahlen.", translation: "Afedersiniz! Lütfen hesap, ödeme yapmak istiyoruz." },
          { speaker: "B", label: "Kellner", text: "Zusammen oder getrennt?", translation: "Beraber mi ayrı ayrı mı?" },
          { speaker: "A", label: "Berdan", text: "Zusammen bitte. Stimmt so!", translation: "Beraber lütfen. Üstü kalsın!" }
        ]
      },
      {
        title: "Diyalog 2: Im Café",
        context: "Berdan bir kafede çalışıyor ve garsonla sipariş veriyor.",
        lines: [
          { speaker: "B", label: "Barista", text: "Hallo, was darf es sein?", translation: "Merhaba, ne alacaksınız?" },
          { speaker: "A", label: "Berdan", text: "Einen großen Cappuccino bitte — und haben Sie Mandelmilch?", translation: "Büyük bir cappuccino lütfen — ve badem sütünüz var mı?" },
          { speaker: "B", label: "Barista", text: "Ja, haben wir! Kommt noch etwas dazu?", translation: "Evet, var! Başka bir şey de ister misiniz?" },
          { speaker: "A", label: "Berdan", text: "Ja, ein Stück Apfelkuchen bitte. Ist er frisch?", translation: "Evet, bir dilim elmalı turta lütfen. Taze mi?" },
          { speaker: "B", label: "Barista", text: "Der Kuchen kommt frisch heute Morgen aus der Bäckerei.", translation: "Turta bu sabah fırından taze geldi." },
          { speaker: "A", label: "Berdan", text: "Perfekt! Haben Sie auch WLAN hier?", translation: "Mükemmel! Burada Wi-Fi de var mı?" },
          { speaker: "B", label: "Barista", text: "Ja, das Passwort ist auf der Karte: 'Kaffeehaus2024'.", translation: "Evet, şifre kartta yazıyor: 'Kaffeehaus2024'." },
          { speaker: "A", label: "Berdan", text: "Super, danke! Das macht dann...?", translation: "Harika, teşekkürler! O zaman ne kadar tutuyor?" },
          { speaker: "B", label: "Barista", text: "7 Euro 80, bitte. Bezahlen Sie hier an der Kasse.", translation: "7 Euro 80 lütfen. Burada kasada ödeyebilirsiniz." }
        ]
      }
    ],
    phrases: [
      { de: "Einen Tisch für zwei / vier Personen, bitte.", tr: "İki / dört kişilik bir masa lütfen.", context: "Restorana girerken" },
      { de: "Ich hätte gern / Ich nehme den / die / das...", tr: "Ben ... alıyorum / istiyorum.", context: "Sipariş verirken — çok kullanışlı!" },
      { de: "Was empfehlen Sie?", tr: "Ne tavsiye edersiniz?", context: "Menüde karar vermek zorsa" },
      { de: "Ich bin Vegetarier / Vegetarierin.", tr: "Ben vejetaryenim. (erkek/kadın)", context: "Diyet bilgisi" },
      { de: "Ich esse kein Schweinefleisch.", tr: "Domuz eti yemiyorum.", context: "Diyet kısıtlaması" },
      { de: "Ist das Gericht scharf?", tr: "Bu yemek acı mı?", context: "Menü hakkında soru" },
      { de: "Das schmeckt ausgezeichnet!", tr: "Bu mükemmel lezzette!", context: "Yemekten memnun olmak" },
      { de: "Die Rechnung bitte. / Wir möchten zahlen.", tr: "Hesap lütfen. / Ödeme yapmak istiyoruz.", context: "Gitmeden önce" },
      { de: "Zusammen oder getrennt?", tr: "Beraber mi ayrı ayrı mı?", context: "Garsonun sorusu" },
      { de: "Stimmt so!", tr: "Üstü kalsın! (Bahşiş bırakmak için)", context: "Almanlar genelde %5-10 bahşiş bırakır" },
      { de: "Ist der Service inbegriffen?", tr: "Servis ücreti dahil mi?", context: "Fatura kontrolü" }
    ]
  },

  // ─── 5. UNTERWEGS & VERKEHR ──────────────────────────────────────────────────
  {
    id: "unterwegs",
    title: "Unterwegs & Verkehr",
    subtitle: "Yolda ve Ulaşımda",
    icon: "🚆",
    color: "#8b5cf6",
    description: "Otobüs, tren, metro veya yürüyerek giderken yolunuzu bulmak ve bilet almak için ihtiyacınız olan ifadeler.",
    tip: "📌 Almanya'da toplu taşımada biletinizi önceden almalısınız. Kontrolör (Kontrolleur) geldiğinde biletinizi göstermezseniz yüksek para cezası ödeyebilirsiniz — 'Schwarzfahren' (kaçak yolculuk) ciddi bir ihlaldir.",
    dialogues: [
      {
        title: "Diyalog 1: Yol Tarifi İstemek",
        context: "Berdan şehir merkezinde kaybolmuş, bir yabancıdan yardım istiyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Entschuldigen Sie! Können Sie mir helfen? Ich suche das Rathaus.", translation: "Affedersiniz! Bana yardım edebilir misiniz? Belediye binasını arıyorum." },
          { speaker: "B", label: "Frau Braun", text: "Ja, natürlich! Das Rathaus ist gar nicht weit von hier.", translation: "Evet, tabii ki! Belediye binası buradan hiç de uzak değil." },
          { speaker: "A", label: "Berdan", text: "Wie komme ich dorthin? Kann ich zu Fuß gehen?", translation: "Oraya nasıl gidebilirim? Yürüyerek gidebilir miyim?" },
          { speaker: "B", label: "Frau Braun", text: "Ja. Gehen Sie diese Straße geradeaus bis zur Ampel.", translation: "Evet. Bu sokakta trafik ışıklarına kadar düz gidin." },
          { speaker: "A", label: "Berdan", text: "Bis zur Ampel — und dann?", translation: "Trafik ışıklarına kadar — ve sonra?" },
          { speaker: "B", label: "Frau Braun", text: "Dann biegen Sie links ab und gehen Sie etwa 200 Meter. Das Rathaus ist das große rote Gebäude auf der rechten Seite.", translation: "Sonra sola dönün ve yaklaşık 200 metre gidin. Belediye binası sağ taraftaki büyük kırmızı binadır." },
          { speaker: "A", label: "Berdan", text: "Gegenüber der Kirche?", translation: "Kilisenin karşısında mı?" },
          { speaker: "B", label: "Frau Braun", text: "Genau! Sie können es nicht übersehen.", translation: "Tam olarak! Gözden kaçıramazsınız." },
          { speaker: "A", label: "Berdan", text: "Wie lange dauert das zu Fuß?", translation: "Yürüyerek ne kadar sürer?" },
          { speaker: "B", label: "Frau Braun", text: "Ungefähr 10 Minuten.", translation: "Yaklaşık 10 dakika." },
          { speaker: "A", label: "Berdan", text: "Herzlichen Dank! Das war sehr hilfreich.", translation: "Çok teşekkürler! Bu çok yardımcı oldu." }
        ]
      },
      {
        title: "Diyalog 2: Am Bahnhof (Tren İstasyonunda)",
        context: "Berdan bir tren bileti satın almaya çalışıyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Ich möchte eine Fahrkarte nach München, bitte.", translation: "İyi günler! Münih'e bir bilet almak istiyorum lütfen." },
          { speaker: "B", label: "Mitarbeiterin", text: "Einfach oder hin und zurück?", translation: "Tek yön mü yoksa gidiş-dönüş mü?" },
          { speaker: "A", label: "Berdan", text: "Einfach, bitte. Für heute Nachmittag.", translation: "Tek yön lütfen. Bu öğleden sonra için." },
          { speaker: "B", label: "Mitarbeiterin", text: "Der nächste Zug fährt um 14:47 Uhr ab, Gleis 7. Möchten Sie erste oder zweite Klasse?", translation: "Bir sonraki tren 14:47'de 7 numaralı peronda kalkıyor. Birinci mi ikinci mi sınıf istersiniz?" },
          { speaker: "A", label: "Berdan", text: "Zweite Klasse, bitte. Und muss ich umsteigen?", translation: "İkinci sınıf lütfen. Ve aktarma yapmam gerekiyor mu?" },
          { speaker: "B", label: "Mitarbeiterin", text: "Nein, dieser Zug fährt direkt nach München. Ankunft um 16:52 Uhr.", translation: "Hayır, bu tren direkt Münih'e gidiyor. Varış saat 16:52'de." },
          { speaker: "A", label: "Berdan", text: "Super! Was kostet die Fahrkarte?", translation: "Harika! Bilet ne kadar?" },
          { speaker: "B", label: "Mitarbeiterin", text: "Mit dem Sparpreis: 29 Euro 90. Haben Sie eine BahnCard?", translation: "Tasarruf tarifesiyle: 29 Euro 90. BahnCard'ınız var mı?" },
          { speaker: "A", label: "Berdan", text: "Nein, noch nicht. Ich zahle mit Karte, bitte.", translation: "Hayır, henüz yok. Kartla ödüyorum lütfen." },
          { speaker: "B", label: "Mitarbeiterin", text: "Bitte. Hier ist Ihre Fahrkarte. Gute Reise!", translation: "Buyurun. İşte biletiniz. İyi yolculuklar!" }
        ]
      }
    ],
    phrases: [
      { de: "Entschuldigung, wie komme ich zum / zur...?", tr: "Afedersiniz, ...ya nasıl gidebilirim?", context: "Yol sormanın en doğal yolu" },
      { de: "Geradeaus / Links abbiegen / Rechts abbiegen", tr: "Düz gidin / Sola dönün / Sağa dönün", context: "Yön talimatları" },
      { de: "Die zweite Straße links / rechts", tr: "İkinci sokaktan sola / sağa", context: "Sokak sırası belirtmek" },
      { de: "Gegenüber / Neben / Hinter / Vor", tr: "Karşısında / Yanında / Arkasında / Önünde", context: "Konum edatları" },
      { de: "Wie weit ist es? / Wie lange dauert es zu Fuß?", tr: "Ne kadar uzak? / Yürüyerek ne kadar sürer?", context: "Mesafe sormak" },
      { de: "Fährt dieser Bus / diese U-Bahn zum Zentrum?", tr: "Bu otobüs / metro merkeze gidiyor mu?", context: "Toplu taşıma" },
      { de: "Wann kommt der nächste Bus nach...?", tr: "Bir sonraki ... otobüsü ne zaman geliyor?", context: "Zaman sormak" },
      { de: "Eine Einzelfahrt / Tageskarte, bitte.", tr: "Tek yön / Günlük bilet lütfen.", context: "Bilet türleri" },
      { de: "Muss ich umsteigen?", tr: "Aktarma yapmam gerekiyor mu?", context: "Rota sorusu" },
      { de: "Der Zug hat Verspätung.", tr: "Tren rötar yapıyor.", context: "Gecikme durumu" },
      { de: "Ist dieser Sitzplatz frei?", tr: "Bu koltuk boş mu?", context: "Trende / otobüste yer sormak" }
    ]
  },

  // ─── 6. IM HOTEL ─────────────────────────────────────────────────────────────
  {
    id: "hotel",
    title: "Im Hotel & Unterkunft",
    subtitle: "Otelde ve Konaklamada",
    icon: "🏨",
    color: "#0ea5e9",
    description: "Otel rezervasyonu, check-in / check-out ve oda sorunlarını çözmek için gerekli diyalog kalıpları.",
    tip: "📌 Almanya'da otellerde genellikle sabah 12:00'da check-out (Abreise) yapılır. Geç çıkış için ek ücret istenebilir. Frühstück (kahvaltı) çoğu zaman ayrıca ücretlendirilir.",
    dialogues: [
      {
        title: "Diyalog 1: Check-in",
        context: "Berdan Berlin'de bir otele geliyor ve odaya giriş yapıyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Abend! Ich habe eine Reservierung auf den Namen Yılmaz.", translation: "İyi akşamlar! Yılmaz adına bir rezervasyonum var." },
          { speaker: "B", label: "Rezeptionist", text: "Guten Abend, Herr Yılmaz! Einen Moment, bitte. — Ja, ein Einzelzimmer für drei Nächte, richtig?", translation: "İyi akşamlar, Bay Yılmaz! Bir saniye lütfen. — Evet, üç gecelik tek kişilik oda, doğru mu?" },
          { speaker: "A", label: "Berdan", text: "Ja, genau. Ist das Frühstück inklusive?", translation: "Evet, aynen. Kahvaltı dahil mi?" },
          { speaker: "B", label: "Rezeptionist", text: "Ja, Frühstück ist von 7 bis 10 Uhr im Erdgeschoss. Darf ich Ihren Ausweis sehen?", translation: "Evet, kahvaltı giriş katta sabah 7'den 10'a kadar. Kimliğinizi görebilir miyim?" },
          { speaker: "A", label: "Berdan", text: "Hier ist mein Reisepass.", translation: "İşte pasaportum." },
          { speaker: "B", label: "Rezeptionist", text: "Danke. Hier ist Ihre Schlüsselkarte, Zimmer 214 im zweiten Stock. Der Aufzug ist rechts.", translation: "Teşekkürler. İşte oda kartınız, ikinci kattaki 214 numaralı oda. Asansör sağda." },
          { speaker: "A", label: "Berdan", text: "Gibt es WLAN im Zimmer?", translation: "Odada Wi-Fi var mı?" },
          { speaker: "B", label: "Rezeptionist", text: "Ja, kostenlos. Das Passwort steht auf der Karte. Haben Sie noch Fragen?", translation: "Evet, ücretsiz. Şifre kartta yazıyor. Başka sorunuz var mı?" },
          { speaker: "A", label: "Berdan", text: "Nein danke. Bis wann muss ich morgen auschecken?", translation: "Hayır teşekkürler. Yarın saat kaça kadar check-out yapmalıyım?" },
          { speaker: "B", label: "Rezeptionist", text: "Check-out ist bis 12 Uhr mittags. Schönen Aufenthalt, Herr Yılmaz!", translation: "Check-out öğlen 12'ye kadar. İyi konaklamalar, Bay Yılmaz!" }
        ]
      },
      {
        title: "Diyalog 2: Problem mit dem Zimmer",
        context: "Berdan odada bir sorun olduğunu fark edip resepsiyonu arıyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Hallo, hier ist Zimmer 214. Ich habe ein kleines Problem.", translation: "Merhaba, burası 214 numaralı oda. Küçük bir sorunum var." },
          { speaker: "B", label: "Rezeptionist", text: "Guten Abend, Herr Yılmaz! Was ist passiert?", translation: "İyi akşamlar, Bay Yılmaz! Ne oldu?" },
          { speaker: "A", label: "Berdan", text: "Die Heizung funktioniert nicht. Es ist sehr kalt im Zimmer.", translation: "Isıtma çalışmıyor. Odada çok soğuk." },
          { speaker: "B", label: "Rezeptionist", text: "Es tut mir leid! Ich schicke sofort den Techniker zu Ihnen.", translation: "Çok üzgünüm! Hemen teknisyeni size gönderiyorum." },
          { speaker: "A", label: "Berdan", text: "Danke. Können Sie mir auch ein paar extra Decken bringen?", translation: "Teşekkürler. Bana birkaç ekstra battaniye de getirebilir misiniz?" },
          { speaker: "B", label: "Rezeptionist", text: "Selbstverständlich! In zehn Minuten ist jemand bei Ihnen.", translation: "Tabii ki! On dakika içinde biri yanınızda olacak." }
        ]
      }
    ],
    phrases: [
      { de: "Ich habe eine Reservierung.", tr: "Bir rezervasyonum var.", context: "Check-in'de ilk cümle" },
      { de: "Haben Sie noch ein Zimmer frei?", tr: "Boş odanız var mı?", context: "Rezervasyonsuz gelince" },
      { de: "Ein Einzelzimmer / Doppelzimmer, bitte.", tr: "Tek / Çift kişilik oda lütfen.", context: "Oda tipi" },
      { de: "Wie viel kostet die Nacht?", tr: "Gecelik ne kadar tutuyor?", context: "Fiyat sormak" },
      { de: "Ist das Frühstück inklusive?", tr: "Kahvaltı dahil mi?", context: "Önemli soru!" },
      { de: "Wo ist der Aufzug / das Restaurant / der Parkplatz?", tr: "Asansör / Restoran / Otopark nerede?", context: "Otel yönlendirmesi" },
      { de: "Die Klimaanlage / Das Licht funktioniert nicht.", tr: "Klima / Işık çalışmıyor.", context: "Oda sorunu bildirmek" },
      { de: "Können Sie mich um 7 Uhr wecken?", tr: "Beni saat 7'de uyandırabilir misiniz?", context: "Uyandırma servisi" },
      { de: "Ich möchte auschecken.", tr: "Check-out yapmak istiyorum.", context: "Ayrılırken" },
      { de: "Kann ich das Gepäck hier lassen?", tr: "Bagajımı burada bırakabilir miyim?", context: "Geç check-out için" }
    ]
  },

  // ─── 7. TELEFONIEREN ─────────────────────────────────────────────────────────
  {
    id: "telefonieren",
    title: "Telefonieren",
    subtitle: "Telefonda Konuşmak",
    icon: "📞",
    color: "#06b6d4",
    description: "Almanya'da telefon görüşmeleri, mesaj bırakmak ve randevu almak için en çok kullanılan kalıplar.",
    tip: "📌 Almanlara telefon ederken kendinizi tam adınızla tanıtmak zorunludur: 'Hier ist Yılmaz / Berdan Yılmaz.' 'Hallo?' ile başlamak kaba sayılır.",
    dialogues: [
      {
        title: "Diyalog 1: Birini Aramak / Mesaj Bırakmak",
        context: "Berdan iş arkadaşı Thomas'ı arıyor, ama telefonuna çıkmıyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Hallo, hier ist Berdan Yılmaz. Ich rufe für Thomas an. Ist er erreichbar?", translation: "Merhaba, ben Berdan Yılmaz. Thomas için arıyorum. Ulaşılabilir mi?" },
          { speaker: "B", label: "Kollegin", text: "Hallo, Herr Yılmaz. Thomas ist gerade in einer Besprechung. Kann ich ihm etwas ausrichten?", translation: "Merhaba, Bay Yılmaz. Thomas şu an toplantıda. Ona bir mesaj ileteyim mi?" },
          { speaker: "A", label: "Berdan", text: "Ja, bitte. Können Sie ihm sagen, dass ich wegen des Projekts angerufen habe?", translation: "Evet lütfen. Ona proje konusunda aradığımı söyleyebilir misiniz?" },
          { speaker: "B", label: "Kollegin", text: "Natürlich. Soll er Sie zurückrufen?", translation: "Tabii ki. Sizi geri aramasını söyleyeyim mi?" },
          { speaker: "A", label: "Berdan", text: "Ja, bitte. Meine Nummer ist 0176 / 45 67 89 12.", translation: "Evet lütfen. Numaram 0176 / 45 67 89 12." },
          { speaker: "B", label: "Kollegin", text: "Ich wiederhole: 0176 / 45 67 89 12. Richtig?", translation: "Tekrar ediyorum: 0176 / 45 67 89 12. Doğru mu?" },
          { speaker: "A", label: "Berdan", text: "Ja, genau. Vielen Dank!", translation: "Evet, aynen. Çok teşekkürler!" },
          { speaker: "B", label: "Kollegin", text: "Gerne. Auf Wiederhören, Herr Yılmaz!", translation: "Bir şey değil. Görüşmek üzere, Bay Yılmaz!" }
        ]
      },
      {
        title: "Diyalog 2: Termin am Telefon vereinbaren",
        context: "Berdan internet sağlayıcısını arayarak bağlantı sorununu bildiriyor.",
        lines: [
          { speaker: "B", label: "Kundenservice", text: "Telekom Kundenservice, guten Tag! Was kann ich für Sie tun?", translation: "Telekom Müşteri Hizmetleri, iyi günler! Size nasıl yardımcı olabilirim?" },
          { speaker: "A", label: "Berdan", text: "Guten Tag! Mein Name ist Berdan Yılmaz, Kundennummer 784512. Mein Internet funktioniert seit gestern nicht.", translation: "İyi günler! Benim adım Berdan Yılmaz, müşteri numarası 784512. Dünden beri internetim çalışmıyor." },
          { speaker: "B", label: "Kundenservice", text: "Das tut mir leid! Haben Sie schon den Router neu gestartet?", translation: "Üzgünüm! Router'ı yeniden başlattınız mı?" },
          { speaker: "A", label: "Berdan", text: "Ja, mehrmals. Das Problem bleibt.", translation: "Evet, birkaç kez. Sorun devam ediyor." },
          { speaker: "B", label: "Kundenservice", text: "Ich sehe hier eine Störung in Ihrer Region. Die Reparatur soll bis heute Abend abgeschlossen sein.", translation: "Sizin bölgenizde bir arıza görüyorum. Onarım bu akşama kadar tamamlanmış olmalı." },
          { speaker: "A", label: "Berdan", text: "Also muss ich nichts machen?", translation: "Yani ben bir şey yapmam gerekmiyor mu?" },
          { speaker: "B", label: "Kundenservice", text: "Genau. Wenn es morgen früh immer noch nicht klappt, rufen Sie uns bitte wieder an.", translation: "Aynen. Yarın sabah hala düzelmezse lütfen tekrar arayın." },
          { speaker: "A", label: "Berdan", text: "Verstanden. Danke für die schnelle Auskunft!", translation: "Anladım. Hızlı bilgi için teşekkürler!" }
        ]
      }
    ],
    phrases: [
      { de: "Hier ist / Hier spricht Berdan Yılmaz.", tr: "Ben Berdan Yılmaz.", context: "Telefonda kendinizi tanıtmak" },
      { de: "Kann ich bitte mit ... sprechen?", tr: "Lütfen ... ile konuşabilir miyim?", context: "Birini sormak" },
      { de: "Er / Sie ist gerade nicht erreichbar.", tr: "O şu an ulaşılamaz durumda.", context: "Aranan kişi müsait değil" },
      { de: "Kann ich eine Nachricht hinterlassen?", tr: "Mesaj bırakabilir miyim?", context: "Mesaj bırakmak" },
      { de: "Bitte rufen Sie mich zurück.", tr: "Lütfen beni geri arayın.", context: "Geri arama talebi" },
      { de: "Auf Wiederhören!", tr: "Güle güle! (Telefonda vedalaşma)", context: "'Auf Wiedersehen' yerine kullanılır" },
      { de: "Ich habe Sie nicht verstanden. Können Sie das wiederholen?", tr: "Sizi anlamadım. Tekrar edebilir misiniz?", context: "Anlama güçlüğü" },
      { de: "Können Sie bitte langsamer sprechen?", tr: "Daha yavaş konuşabilir misiniz lütfen?", context: "Dil öğrenenler için önemli!" },
      { de: "Die Verbindung ist schlecht.", tr: "Bağlantı zayıf / kötü.", context: "Telefon sinyal sorunu" },
      { de: "Ich rufe später noch mal an.", tr: "Daha sonra tekrar ararım.", context: "Görüşmeyi bitirmek" }
    ]
  },

  // ─── 8. AUF DEM AMT ──────────────────────────────────────────────────────────
  {
    id: "amt",
    title: "Auf dem Amt & Behörden",
    subtitle: "Resmi Kurumlarda",
    icon: "🏛️",
    color: "#64748b",
    description: "Almanya'da resmi kurumlarda (Einwohnermeldeamt, Ausländerbehörde) işlem yaparken kullanılan ifadeler.",
    tip: "📌 Almanya'da bir şehre taşındıktan sonra 2 hafta içinde 'Einwohnermeldeamt'ta (nüfus müdürlüğü) adres kaydı yaptırmanız zorunludur. Bunu yapmadan banka hesabı açamaz, işe başlayamazsınız.",
    dialogues: [
      {
        title: "Diyalog 1: Anmeldung (Adres Kaydı)",
        context: "Berdan Einwohnermeldeamt'a giderek adresini kaydettiriyor.",
        lines: [
          { speaker: "B", label: "Beamtin", text: "Ticket Nummer 47. Bitte kommen Sie zum Schalter 3.", translation: "Bilet numarası 47. Lütfen 3 numaralı pencereye gelin." },
          { speaker: "A", label: "Berdan", text: "Guten Tag. Ich möchte mich anmelden. Ich bin neu in die Stadt gezogen.", translation: "İyi günler. Adres kaydı yaptırmak istiyorum. Şehre yeni taşındım." },
          { speaker: "B", label: "Beamtin", text: "Haben Sie die Anmeldebestätigung Ihres Vermieters?", translation: "房東 — yani ev sahibinizin 'Wohnungsgeberbestätigung' (konut belgesi) var mı?" },
          { speaker: "A", label: "Berdan", text: "Ja, hier ist die Wohnungsgeberbestätigung und mein Reisepass.", translation: "Evet, işte konut belgesi ve pasaportum." },
          { speaker: "B", label: "Beamtin", text: "Gut. Und seit wann wohnen Sie an der neuen Adresse?", translation: "Peki. Yeni adreste ne zamandan beri oturuyorsunuz?" },
          { speaker: "A", label: "Berdan", text: "Seit dem ersten Oktober.", translation: "Birinci Ekim'den beri." },
          { speaker: "B", label: "Beamtin", text: "Bitte füllen Sie dieses Formular aus und unterschreiben Sie hier.", translation: "Lütfen bu formu doldurun ve buraya imzalayın." },
          { speaker: "A", label: "Berdan", text: "Entschuldigung, was bedeutet dieses Feld hier?", translation: "Afedersiniz, buradaki bu alan ne anlama geliyor?" },
          { speaker: "B", label: "Beamtin", text: "Das ist für Ihren Beruf — also Ihre Arbeit.", translation: "Bu mesleğiniz için — yani işiniz." },
          { speaker: "A", label: "Berdan", text: "Ich bin Ingenieur.", translation: "Ben mühendisim." },
          { speaker: "B", label: "Beamtin", text: "Perfekt. Alles fertig! Hier ist Ihre Anmeldebestätigung. Herzlich willkommen in Berlin!", translation: "Mükemmel. Her şey tamam! İşte adres teyit belgeniz. Berlin'e hoş geldiniz!" }
        ]
      },
      {
        title: "Diyalog 2: Bei der Ausländerbehörde",
        context: "Berdan oturma iznini uzatmak için randevu almaya çalışıyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Ich brauche einen Termin zur Verlängerung meiner Aufenthaltserlaubnis.", translation: "İyi günler! Oturma iznimin uzatılması için bir randevuya ihtiyacım var." },
          { speaker: "B", label: "Sachbearbeiterin", text: "Wann läuft Ihre aktuelle Erlaubnis ab?", translation: "Mevcut izniniz ne zaman sona eriyor?" },
          { speaker: "A", label: "Berdan", text: "Am 15. März nächsten Jahres.", translation: "Gelecek yılın 15 Mart'ında." },
          { speaker: "B", label: "Sachbearbeiterin", text: "Dann müssen Sie spätestens 6 Wochen vorher einen Antrag stellen.", translation: "O zaman en geç 6 hafta önce başvuru yapmanız gerekiyor." },
          { speaker: "A", label: "Berdan", text: "Welche Unterlagen brauche ich?", translation: "Hangi belgelere ihtiyacım var?" },
          { speaker: "B", label: "Sachbearbeiterin", text: "Reisepass, aktueller Arbeitsvertrag, die letzten drei Gehaltsabrechnungen und ein biometrisches Foto.", translation: "Pasaport, güncel iş sözleşmesi, son üç maaş bordrosu ve bir biyometrik fotoğraf." },
          { speaker: "A", label: "Berdan", text: "Kann ich den Termin online buchen?", translation: "Randevuyu online alabilir miyim?" },
          { speaker: "B", label: "Sachbearbeiterin", text: "Ja, unter berlin.de/auslaenderbehoerde. Haben Sie noch weitere Fragen?", translation: "Evet, berlin.de/auslaenderbehoerde adresinden. Başka sorunuz var mı?" },
          { speaker: "A", label: "Berdan", text: "Nein, danke. Das war sehr hilfreich!", translation: "Hayır, teşekkürler. Bu çok yardımcı oldu!" }
        ]
      }
    ],
    phrases: [
      { de: "Ich möchte mich anmelden / abmelden.", tr: "Adres kaydı yaptırmak / silmek istiyorum.", context: "Taşınırken zorunlu işlem" },
      { de: "Welche Unterlagen brauche ich?", tr: "Hangi belgelere ihtiyacım var?", context: "Evrak sormak" },
      { de: "Bitte füllen Sie das Formular aus.", tr: "Lütfen formu doldurun.", context: "Memurdan gelen talimat" },
      { de: "Wo muss ich unterschreiben?", tr: "Nereye imzalamalıyım?", context: "İmza yeri sormak" },
      { de: "Kann ich das auf Englisch haben?", tr: "Bunu İngilizce olarak alabilir miyim?", context: "Dil desteği talebi" },
      { de: "Ich habe einen Termin um 10 Uhr.", tr: "Saat 10'da bir randevum var.", context: "Randevu bildirimi" },
      { de: "Wie lange dauert die Bearbeitung?", tr: "İşlem ne kadar sürer?", context: "Bekleme süresi" },
      { de: "Wann bekomme ich Bescheid?", tr: "Ne zaman sonuç alırım?", context: "Karar bildirimi" },
      { de: "Das Dokument ist abgelaufen.", tr: "Belge süresi dolmuş.", context: "Geçersiz evrak" },
      { de: "Ich brauche eine Dolmetscherin.", tr: "Bir tercümana ihtiyacım var.", context: "Dil yardımı talebi" }
    ]
  },

  // ─── 9. WOHNUNG SUCHEN ───────────────────────────────────────────────────────
  {
    id: "wohnung",
    title: "Wohnung suchen & mieten",
    subtitle: "Kiralık Ev Arama",
    icon: "🏠",
    color: "#f97316",
    description: "Almanya'da kiralık daire ararken, ev sahibiyle iletişim kurarken ve sözleşme imzalarken kullanılan ifadeler.",
    tip: "📌 Almanya'da kiralık dairelerde genellikle Kaltmiete (net kira) + Nebenkosten (ısıtma, su, çöp — yaklaşık 150-300€/ay) ödenir. Sözleşme imzalamadan önce bu kalemleri iyice anlayın.",
    dialogues: [
      {
        title: "Diyalog 1: Daire Hakkında Telefon Görüşmesi",
        context: "Berdan bir ilan üzerine ev sahibini arıyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Ich rufe wegen der Wohnung an — dem Inserat auf ImmoScout.", translation: "İyi günler! ImmoScout'taki ilan nedeniyle daire için arıyorum." },
          { speaker: "B", label: "Vermieterin", text: "Ah ja! Die Dreizimmerwohnung in der Schillerstraße?", translation: "Ah evet! Schillerstraße'daki üç odalı daire mi?" },
          { speaker: "A", label: "Berdan", text: "Genau. Ist die Wohnung noch verfügbar?", translation: "Evet. Daire hala müsait mi?" },
          { speaker: "B", label: "Vermieterin", text: "Ja, noch. Sie ist ab dem ersten Dezember frei.", translation: "Evet, hala. Birinci Aralık'tan itibaren müsait." },
          { speaker: "A", label: "Berdan", text: "Wie hoch ist die Kaltmiete? Und was sind die Nebenkosten?", translation: "Kira (brüt) ne kadar? Ve yan giderler neler?" },
          { speaker: "B", label: "Vermieterin", text: "Kaltmiete 900 Euro, Nebenkosten circa 180 Euro. Also Warmmiete rund 1080 Euro.", translation: "Kira 900 Euro, yan giderler yaklaşık 180 Euro. Yani toplam (sıcak kira) 1080 Euro civarı." },
          { speaker: "A", label: "Berdan", text: "Und wie viele Monatsmieten Kaution?", translation: "Ve kaç aylık kira depozito?" },
          { speaker: "B", label: "Vermieterin", text: "Drei Monatsmieten Kaution — also 2700 Euro.", translation: "Üç aylık kira depozito — yani 2700 Euro." },
          { speaker: "A", label: "Berdan", text: "Kann ich die Wohnung besichtigen?", translation: "Daireyi görebilir miyim?" },
          { speaker: "B", label: "Vermieterin", text: "Natürlich! Wie wäre es am Samstag um 11 Uhr?", translation: "Tabii ki! Cumartesi saat 11 nasıl olur?" },
          { speaker: "A", label: "Berdan", text: "Das passt mir gut. Danke, ich freue mich darauf!", translation: "Bu bana uyuyor. Teşekkürler, dört gözle bekliyorum!" }
        ]
      },
      {
        title: "Diyalog 2: Bei der Wohnungsbesichtigung",
        context: "Berdan daireyi geziyor ve sorular soruyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Die Wohnung gefällt mir sehr gut! Wie alt ist das Gebäude?", translation: "Daireyi çok beğendim! Bina kaç yılında?" },
          { speaker: "B", label: "Vermieterin", text: "Das Haus wurde 1985 gebaut, aber 2010 komplett renoviert.", translation: "Bina 1985'te inşa edildi ama 2010'da tamamen yenilendi." },
          { speaker: "A", label: "Berdan", text: "Ist eine Einbauküche vorhanden?", translation: "Ankastre mutfak var mı?" },
          { speaker: "B", label: "Vermieterin", text: "Ja, die Küche bleibt. Herd, Kühlschrank und Spülmaschine sind alle inklusive.", translation: "Evet, mutfak kalıyor. Ocak, buzdolabı ve bulaşık makinesi hepsi dahil." },
          { speaker: "A", label: "Berdan", text: "Gibt es einen Keller oder Abstellraum?", translation: "Bodrum katı veya depo var mı?" },
          { speaker: "B", label: "Vermieterin", text: "Ja, jede Wohnung hat einen kleinen Keller im Untergeschoss.", translation: "Evet, her dairenin bodrum katta küçük bir bodrumu var." },
          { speaker: "A", label: "Berdan", text: "Wie sind die Nachbarn? Ruhig?", translation: "Komşular nasıl? Sakin mi?" },
          { speaker: "B", label: "Vermieterin", text: "Ja, hauptsächlich Familien. Es ist ein sehr ruhiges Haus.", translation: "Evet, ağırlıklı olarak aileler. Çok sakin bir bina." },
          { speaker: "A", label: "Berdan", text: "Sehr gut. Ich interessiere mich ernsthaft für die Wohnung.", translation: "Çok güzel. Daire ile ciddi olarak ilgileniyorum." },
          { speaker: "B", label: "Vermieterin", text: "Prima! Schicken Sie mir bitte Ihre Unterlagen — Ausweis, Schufa und Gehaltsnachweis.", translation: "Harika! Lütfen bana belgelerinizi gönderin — kimlik, Schufa ve gelir belgesi." }
        ]
      }
    ],
    phrases: [
      { de: "Ich suche eine 2-Zimmer-Wohnung.", tr: "2 odalı bir daire arıyorum.", context: "Oda sayısı (Almanya'da oda sayısı yatak odası DEĞİL tüm odaları kapsar)" },
      { de: "Wie hoch ist die Kaltmiete / Warmmiete?", tr: "Net kira / Toplam kira ne kadar?", context: "Kira türleri" },
      { de: "Was ist in den Nebenkosten enthalten?", tr: "Yan giderlere neler dahil?", context: "Ekstra giderleri anlamak" },
      { de: "Ist die Wohnung noch frei?", tr: "Daire hala müsait mi?", context: "Oda müsaitliği" },
      { de: "Kann ich die Wohnung besichtigen?", tr: "Daireyi görebilir miyim?", context: "Randevu talebi" },
      { de: "Wie viele Monatsmieten Kaution?", tr: "Kaç aylık kira depozito?", context: "Almanya'da max. 3 aylık kira alınabilir" },
      { de: "Wann kann ich einziehen?", tr: "Ne zaman taşınabilirim?", context: "Giriş tarihi" },
      { de: "Wie lange ist die Kündigungsfrist?", tr: "İptal süresi ne kadar?", context: "Sözleşme feshi için genellikle 3 ay" },
      { de: "Ist Haustiere erlaubt?", tr: "Evcil hayvan serbest mi?", context: "Pet politikası" },
      { de: "Wer zahlt die Nebenkosten?", tr: "Yan giderleri kim öder?", context: "Sorumluluk paylaşımı" }
    ]
  },

  // ─── 10. AM ARBEITSPLATZ ─────────────────────────────────────────────────────
  {
    id: "arbeit",
    title: "Am Arbeitsplatz",
    subtitle: "İşyerinde / Ofiste",
    icon: "💼",
    color: "#6366f1",
    description: "İlk iş günü, toplantılar, iş arkadaşlarıyla iletişim ve ofis rutinleri için kullanılan ifadeler.",
    tip: "📌 Almanya iş kültüründe dakiklik (Pünktlichkeit) çok önemlidir. 5 dakika önce hazır olmak standarttır. E-postalarda 'Mit freundlichen Grüßen' resmi kapanışı kullanılır.",
    dialogues: [
      {
        title: "Diyalog 1: İlk İş Günü",
        context: "Berdan yeni işinde ilk günü yaşıyor ve ekibiyle tanışıyor.",
        lines: [
          { speaker: "B", label: "Chefin", text: "Guten Morgen, Herr Yılmaz! Herzlich willkommen in unserem Team!", translation: "Günaydın, Bay Yılmaz! Ekibimize hoş geldiniz!" },
          { speaker: "A", label: "Berdan", text: "Danke vielmals! Ich freue mich sehr, hier zu arbeiten.", translation: "Çok teşekkürler! Burada çalışmaktan çok mutluluk duyuyorum." },
          { speaker: "B", label: "Chefin", text: "Ich zeige Ihnen Ihren Schreibtisch und stelle Sie dem Team vor.", translation: "Size masanızı göstereyim ve ekiple tanıştırayım." },
          { speaker: "A", label: "Berdan", text: "Sehr gerne. Wie groß ist das Team?", translation: "Çok güzel. Ekip ne kadar büyük?" },
          { speaker: "B", label: "Chefin", text: "Wir sind insgesamt zwölf Personen in der Abteilung.", translation: "Bölümde toplam on iki kişiyiz." },
          { speaker: "A", label: "Berdan", text: "Ich bin gespannt! Und wann ist die Mittagspause?", translation: "Sabırsızlanıyorum! Ve öğle molası ne zaman?" },
          { speaker: "B", label: "Chefin", text: "Von 12:30 bis 13:30 Uhr. Die Kantine ist im Erdgeschoss.", translation: "12:30'dan 13:30'a kadar. Yemekhane giriş katta." },
          { speaker: "A", label: "Berdan", text: "Verstanden. Gibt es auch eine Küche auf der Etage?", translation: "Anladım. Katta da bir mutfak var mı?" },
          { speaker: "B", label: "Chefin", text: "Ja, da finden Sie Kaffeemaschine und Kühlschrank. Duzen wir uns? Ich heiße Sabine.", translation: "Evet, orada kahve makinesi ve buzdolabı bulursunuz. Birbirimize 'sen' diyebilir miyiz? Ben Sabine." },
          { speaker: "A", label: "Berdan", text: "Gerne, Sabine! Ich bin Berdan.", translation: "Memnuniyetle, Sabine! Ben Berdan." }
        ]
      },
      {
        title: "Diyalog 2: In der Besprechung",
        context: "Berdan ekip toplantısında fikrini paylaşıyor.",
        lines: [
          { speaker: "B", label: "Sabine", text: "Berdan, was denken Sie über den neuen Projektplan?", translation: "Berdan, yeni proje planı hakkında ne düşünüyorsunuz?" },
          { speaker: "A", label: "Berdan", text: "Ich finde den Plan gut, aber ich hätte einen Vorschlag.", translation: "Planı iyi buluyorum ama bir önerim var." },
          { speaker: "B", label: "Sabine", text: "Bitte, sagen Sie.", translation: "Lütfen söyleyin." },
          { speaker: "A", label: "Berdan", text: "Könnten wir den Abgabetermin um eine Woche verschieben? Das würde die Qualität verbessern.", translation: "Teslim tarihini bir hafta erteleyebilir miyiz? Bu kaliteyi artıracaktır." },
          { speaker: "B", label: "Sabine", text: "Das ist ein guter Punkt. Was meinen die anderen?", translation: "Bu güzel bir nokta. Diğerleri ne düşünüyor?" },
          { speaker: "A", label: "Berdan", text: "Ich kann dazu auch eine kurze Präsentation vorbereiten.", translation: "Bu konuda kısa bir sunum da hazırlayabilirim." },
          { speaker: "B", label: "Sabine", text: "Ausgezeichnet! Dann beim nächsten Meeting, ja?", translation: "Mükemmel! O zaman bir sonraki toplantıda, tamam mı?" }
        ]
      }
    ],
    phrases: [
      { de: "Guten Morgen allerseits!", tr: "Günaydın herkese!", context: "Ofise ilk girerken" },
      { de: "Darf ich kurz stören?", tr: "Sizi kısa bir süre rahatsız edebilir miyim?", context: "Bir iş arkadaşını durdurmak" },
      { de: "Können Sie mir dabei helfen?", tr: "Bana bu konuda yardımcı olabilir misiniz?", context: "Yardım talebi" },
      { de: "Wann ist die Deadline?", tr: "Son teslim tarihi ne zaman?", context: "Proje zaman çizelgesi" },
      { de: "Ich bin in einer Besprechung.", tr: "Toplantıdayım.", context: "Müsait olmadığınızı belirtmek" },
      { de: "Ich arbeite im Homeoffice heute.", tr: "Bugün evden çalışıyorum.", context: "Uzaktan çalışma" },
      { de: "Können wir das morgen besprechen?", tr: "Bunu yarın konuşabilir miyiz?", context: "Erteleme talebi" },
      { de: "Ich schicke Ihnen die Unterlagen per E-Mail.", tr: "Belgeleri e-posta ile göndereceğim.", context: "Bilgi paylaşımı" },
      { de: "Ich nehme morgen Urlaub.", tr: "Yarın izin alıyorum.", context: "Tatil bildirimi" },
      { de: "Mit freundlichen Grüßen, Berdan Yılmaz", tr: "Saygılarımla, Berdan Yılmaz", context: "Resmi e-posta kapanışı" }
    ]
  },

  // ─── 11. KLEIDUNG KAUFEN ─────────────────────────────────────────────────────
  {
    id: "kleidung",
    title: "Kleidung kaufen",
    subtitle: "Giysi Alışverişi",
    icon: "👕",
    color: "#ec4899",
    description: "Kıyafet mağazalarında beden sormak, prova yapmak ve iade etmek için gerekli ifadeler.",
    tip: "📌 Almanya'da beden numaraları farklıdır. Türkiye'de 38 olan bir elbise Almanya'da da 38'dir, ancak erkek pantolon bedenleri Bund (bel ölçüsü) ve Länge (boy ölçüsü) şeklinde belirtilir (örn. W32/L32).",
    dialogues: [
      {
        title: "Diyalog 1: Im Kleidungsgeschäft",
        context: "Berdan bir mağazada montbakıyor.",
        lines: [
          { speaker: "B", label: "Verkäuferin", text: "Guten Tag! Kann ich Ihnen helfen?", translation: "İyi günler! Size yardımcı olabilir miyim?" },
          { speaker: "A", label: "Berdan", text: "Ja, gerne. Ich suche eine Winterjacke.", translation: "Evet, memnuniyetle. Bir kışlık mont arıyorum." },
          { speaker: "B", label: "Verkäuferin", text: "Haben Sie eine bestimmte Farbe im Sinn?", translation: "Aklınızda belirli bir renk var mı?" },
          { speaker: "A", label: "Berdan", text: "Schwarz oder dunkelblau, bitte. Und wasserabweisend wenn möglich.", translation: "Siyah ya da koyu mavi lütfen. Ve mümkünse su geçirmez." },
          { speaker: "B", label: "Verkäuferin", text: "Diese Jacke hier ist sehr beliebt — winddicht und wasserabweisend. Was ist Ihre Größe?", translation: "Bu ceket burada çok popüler — rüzgar geçirmez ve su geçirmez. Bedeniniz ne?" },
          { speaker: "A", label: "Berdan", text: "Meistens Größe L, manchmal M. Kann ich sie anprobieren?", translation: "Genellikle L beden, bazen M. Deneyebilir miyim?" },
          { speaker: "B", label: "Verkäuferin", text: "Natürlich! Die Umkleidekabinen sind hinten rechts.", translation: "Tabii ki! Soyunma odaları arkada sağda." },
          { speaker: "A", label: "Berdan", text: "Die L passt gut. Wie viel kostet sie?", translation: "L beden iyi uydu. Ne kadar?" },
          { speaker: "B", label: "Verkäuferin", text: "Sie ist im Angebot: nur 79 Euro statt 120 Euro.", translation: "İndirimde: 120 Euro yerine sadece 79 Euro." },
          { speaker: "A", label: "Berdan", text: "Das ist ein gutes Angebot! Ich nehme sie.", translation: "Bu güzel bir teklif! Onu alıyorum." }
        ]
      },
      {
        title: "Diyalog 2: Umtausch / Rückgabe",
        context: "Berdan hatalı bir ürünü iade etmeye geliyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Ich möchte diese Hose umtauschen. Sie hat einen Fehler.", translation: "İyi günler! Bu pantolonu değiştirmek istiyorum. Kusurlu." },
          { speaker: "B", label: "Mitarbeiterin", text: "Was ist das Problem?", translation: "Sorun nedir?" },
          { speaker: "A", label: "Berdan", text: "Der Reißverschluss ist kaputt.", translation: "Fermuar bozuk." },
          { speaker: "B", label: "Mitarbeiterin", text: "Haben Sie den Kassenbon dabei?", translation: "Fiş yanınızda mı?" },
          { speaker: "A", label: "Berdan", text: "Ja, hier bitte.", translation: "Evet, buyurun." },
          { speaker: "B", label: "Mitarbeiterin", text: "Möchten Sie eine andere Hose oder lieber das Geld zurück?", translation: "Başka bir pantolon mu istersiniz yoksa parayı geri mi almak istersiniz?" },
          { speaker: "A", label: "Berdan", text: "Ich nehme lieber das Geld zurück, bitte.", translation: "Parayı geri almayı tercih ederim lütfen." },
          { speaker: "B", label: "Mitarbeiterin", text: "Kein Problem. Hier sind 59 Euro — bar oder auf die Karte?", translation: "Sorun yok. İşte 59 Euro — nakit mi yoksa karta mı?" }
        ]
      }
    ],
    phrases: [
      { de: "Haben Sie das in Größe M / L / XL?", tr: "Bunun M / L / XL bedeni var mı?", context: "Beden sormak" },
      { de: "Kann ich das anprobieren?", tr: "Bunu deneyebilir miyim?", context: "Prova odası talebi" },
      { de: "Wo sind die Umkleidekabinen?", tr: "Soyunma odaları nerede?", context: "Prova odası bulmak" },
      { de: "Es ist zu groß / zu klein / zu eng / zu weit.", tr: "Çok büyük / küçük / dar / bol.", context: "Ölçü uyumsuzluğu" },
      { de: "Es passt perfekt!", tr: "Mükemmel oturdu!", context: "Ürün beğenildi" },
      { de: "Haben Sie es in einer anderen Farbe?", tr: "Bunun başka rengi var mı?", context: "Renk seçeneği" },
      { de: "Kann ich das umtauschen / zurückgeben?", tr: "Bunu değiştirebilir / iade edebilir miyim?", context: "İade politikası" },
      { de: "Haben Sie den Kassenbon?", tr: "Fişiniz var mı?", context: "İade için şart" },
      { de: "Das ist zu teuer. Gibt es einen Rabatt?", tr: "Bu çok pahalı. İndirim var mı?", context: "Fiyat pazarlığı" },
      { de: "Ist das gerade im Sale?", tr: "Bu şu an indirimde mi?", context: "Kampanya sorgusu" }
    ]
  },

  // ─── 12. BEIM FRISEUR ────────────────────────────────────────────────────────
  {
    id: "friseur",
    title: "Beim Friseur",
    subtitle: "Kuaförde / Berberde",
    icon: "✂️",
    color: "#a78bfa",
    description: "Almanya'da kuaförde saç kesimi, sakal tıraşı ve istemediğiniz durumları nazikçe ifade etmek için kullanılan kalıplar.",
    tip: "📌 Almanya'da berber veya kuaföre genellikle %10 bahşiş verilir. Çoğu kuaför Termin (randevu) istemektedir, özellikle büyük şehirlerde.",
    dialogues: [
      {
        title: "Diyalog 1: Beim Friseur",
        context: "Berdan bir erkek kuaförüne gidiyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Haben Sie heute noch einen freien Termin?", translation: "İyi günler! Bugün hala müsait bir randevunuz var mı?" },
          { speaker: "B", label: "Friseur", text: "Ja, in einer halben Stunde. Setzen Sie sich bitte.", translation: "Evet, yarım saat sonra. Lütfen oturun." },
          { speaker: "A", label: "Berdan", text: "Danke. Ich möchte die Haare schneiden lassen.", translation: "Teşekkürler. Saçımı kestirmek istiyorum." },
          { speaker: "B", label: "Friseur", text: "Wie kurz soll ich schneiden? Und oben — wie viel nehmen wir weg?", translation: "Ne kadar kısa keseyim? Yukarıda — ne kadar alalım?" },
          { speaker: "A", label: "Berdan", text: "An den Seiten kurz — Maschine Nummer 3. Oben etwas kürzer, aber nicht zu kurz.", translation: "Yanlarda kısa — 3 numaralı makine. Yukarıda biraz daha kısa ama çok kısa değil." },
          { speaker: "B", label: "Friseur", text: "Sollen wir den Nacken rasieren?", translation: "Enseyi tıraş edelim mi?" },
          { speaker: "A", label: "Berdan", text: "Ja, bitte. Und können Sie auch den Bart trimmen?", translation: "Evet lütfen. Sakalı da düzeltebilir misiniz?" },
          { speaker: "B", label: "Friseur", text: "Natürlich. Soll ich ihn kürzer machen oder nur formen?", translation: "Tabii ki. Kısaltayım mı yoksa sadece şekil mi vereyim?" },
          { speaker: "A", label: "Berdan", text: "Nur formen bitte — ich behalte die Länge.", translation: "Sadece şekil lütfen — uzunluğu koruyorum." },
          { speaker: "B", label: "Friseur", text: "Sehr gut. Das war's — gefällt Ihnen das Ergebnis?", translation: "Çok güzel. Bitti — sonuçtan memnun kaldınız mı?" },
          { speaker: "A", label: "Berdan", text: "Ja, sehr schön! Danke! Was bin ich schuldig?", translation: "Evet, çok güzel! Teşekkürler! Ne kadar borçluyum?" },
          { speaker: "B", label: "Friseur", text: "Haarschnitt plus Bartpflege: 22 Euro.", translation: "Saç kesimi artı sakal bakımı: 22 Euro." }
        ]
      }
    ],
    phrases: [
      { de: "Ich möchte einen Termin vereinbaren.", tr: "Bir randevu almak istiyorum.", context: "Telefonda veya içeri girince" },
      { de: "Bitte schneiden Sie nur die Spitzen.", tr: "Lütfen sadece uçları kesin.", context: "Az kesmek isteyince" },
      { de: "Nicht zu kurz, bitte!", tr: "Çok kısa değil lütfen!", context: "Önemli uyarı!" },
      { de: "An den Seiten kürzer, oben länger.", tr: "Yanlarda daha kısa, yukarıda daha uzun.", context: "Stil talebi" },
      { de: "Können Sie es föhnen?", tr: "Saç kurutma makinesiyle kurutabilir misiniz?", context: "Fön talebi" },
      { de: "Ich möchte auch Farbe.", tr: "Saç boyası da istiyorum.", context: "Boyama talebi" },
      { de: "Das ist mir zu kurz!", tr: "Bu benim için çok kısa!", context: "Sonuçtan memnun değilseniz — nezaket ile" },
      { de: "Können Sie auch den Bart trimmen?", tr: "Sakalı da kısaltabilir misiniz?", context: "Sakal düzeltme" },
      { de: "Was bin ich schuldig?", tr: "Ne kadar borçluyum?", context: "Ödeme sormak" }
    ]
  },

  // ─── 13. BANK & POST ─────────────────────────────────────────────────────────
  {
    id: "bank",
    title: "Bank & Post",
    subtitle: "Bankada ve Postanede",
    icon: "🏦",
    color: "#0d9488",
    description: "Banka hesabı açmak, para göndermek, ATM kullanmak ve postaneye gitmek için pratik ifadeler.",
    tip: "📌 Almanya'da çoğu işyeri hala nakit tercih eder — ATM bulmak önemlidir. Banka hesabı açmak için Anmeldebestätigung (adres tescil belgesi), pasaport ve bazen iş veya gelir belgesi gerekir.",
    dialogues: [
      {
        title: "Diyalog 1: Konto eröffnen (Banka Hesabı Açmak)",
        context: "Berdan yerel bir bankaya gidiyor ve hesap açmak istiyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Ich möchte gern ein Girokonto eröffnen.", translation: "İyi günler! Bir vadesiz hesap açmak istiyorum." },
          { speaker: "B", label: "Bankberater", text: "Guten Tag! Herzlich willkommen. Haben Sie schon ein Konto bei uns?", translation: "İyi günler! Hoş geldiniz. Bizde zaten bir hesabınız var mı?" },
          { speaker: "A", label: "Berdan", text: "Nein, ich bin neu in Deutschland.", translation: "Hayır, Almanya'da yeniyim." },
          { speaker: "B", label: "Bankberater", text: "Welche Unterlagen haben Sie dabei?", translation: "Yanınızda hangi belgeler var?" },
          { speaker: "A", label: "Berdan", text: "Ich habe meinen Reisepass und die Anmeldebestätigung vom Amt.", translation: "Pasaportum ve kurumdan adres teyit belgem var." },
          { speaker: "B", label: "Bankberater", text: "Haben Sie auch einen Einkommensnachweis — zum Beispiel einen Arbeitsvertrag?", translation: "Gelir belgeniz de var mı — örneğin iş sözleşmesi?" },
          { speaker: "A", label: "Berdan", text: "Ja, hier ist mein Arbeitsvertrag.", translation: "Evet, işte iş sözleşmem." },
          { speaker: "B", label: "Bankberater", text: "Perfekt. Die Kontoeröffnung ist kostenlos. Die EC-Karte kommt in etwa 5 Werktagen per Post.", translation: "Mükemmel. Hesap açma ücretsizdir. Banka kartı yaklaşık 5 iş günü içinde posta ile gelir." },
          { speaker: "A", label: "Berdan", text: "Und Online-Banking ist möglich?", translation: "Ve online bankacılık mümkün mü?" },
          { speaker: "B", label: "Bankberater", text: "Ja, natürlich. Sie können die App herunterladen.", translation: "Evet, tabii ki. Uygulamayı indirebilirsiniz." }
        ]
      },
      {
        title: "Diyalog 2: Auf der Post",
        context: "Berdan bir paketi yurtdışına göndermek için postaneye gidiyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag! Ich möchte dieses Paket in die Türkei schicken.", translation: "İyi günler! Bu paketi Türkiye'ye göndermek istiyorum." },
          { speaker: "B", label: "Postmitarbeiter", text: "Wie schwer ist das Paket? Ich wiege es mal kurz.", translation: "Paket ne kadar ağır? Kısaca tartayım." },
          { speaker: "A", label: "Berdan", text: "Ich glaube, etwa 2 Kilogramm.", translation: "Sanırım yaklaşık 2 kilogram." },
          { speaker: "B", label: "Postmitarbeiter", text: "2,3 kg. Wie schnell soll es ankommen?", translation: "2,3 kg. Ne kadar hızlı gitmesini istiyorsunuz?" },
          { speaker: "A", label: "Berdan", text: "Normal ist okay. Wie lange dauert das?", translation: "Normal olur. Ne kadar sürer?" },
          { speaker: "B", label: "Postmitarbeiter", text: "Für die Türkei: 5 bis 10 Werktage. Das kostet 14 Euro 90.", translation: "Türkiye için: 5 ila 10 iş günü. 14 Euro 90 tutuyor." },
          { speaker: "A", label: "Berdan", text: "Gut. Kann ich auch eine Sendungsverfolgung haben?", translation: "Peki. Gönderi takibi de alabilir miyim?" },
          { speaker: "B", label: "Postmitarbeiter", text: "Ja, hier ist Ihre Trackingnummer. Bitte aufheben!", translation: "Evet, işte takip numaranız. Lütfen saklayın!" }
        ]
      }
    ],
    phrases: [
      { de: "Ich möchte ein Konto eröffnen.", tr: "Hesap açmak istiyorum.", context: "Bankaya ilk gidişte" },
      { de: "Wie hoch sind die Kontoführungsgebühren?", tr: "Hesap işletim ücreti ne kadar?", context: "Aylık ücret sormak" },
      { de: "Ich möchte Geld abheben / einzahlen.", tr: "Para çekmek / yatırmak istiyorum.", context: "ATM veya vezne" },
      { de: "Ich möchte eine Überweisung machen.", tr: "Bir havale/EFT yapmak istiyorum.", context: "Para transferi" },
      { de: "Meine Karte wurde gesperrt.", tr: "Kartım bloke edildi.", context: "Acil durum" },
      { de: "Wo ist der nächste Geldautomat?", tr: "En yakın ATM nerede?", context: "Nakit para ihtiyacı" },
      { de: "Ich möchte ein Paket / einen Brief aufgeben.", tr: "Bir paket / mektup göndermek istiyorum.", context: "Postane" },
      { de: "Einschreiben bitte.", tr: "Taahhütlü lütfen.", context: "Güvenli gönderim" },
      { de: "Wie lange dauert die Lieferung?", tr: "Teslimat ne kadar sürer?", context: "Posta süresi" },
      { de: "Kann ich das Paket hier abholen?", tr: "Paketi buradan alabilir miyim?", context: "Paket teslim alma" }
    ]
  },

  // ─── 14. IN DER SCHULE / SPRACHKURS ─────────────────────────────────────────
  {
    id: "schule",
    title: "In der Schule & Sprachkurs",
    subtitle: "Okulda ve Dil Kursunda",
    icon: "📚",
    color: "#84cc16",
    description: "Dil kursuna başlarken, öğretmenden yardım isterken ve sınıf arkadaşlarıyla iletişim kurarken kullanılan ifadeler.",
    tip: "📌 Almanya'da dil kurslarında seviyeler A1'den C2'ye kadardır. Göçmenler için devlet tarafından sübvanse edilen 'Integrationskurse' mevcuttur. BAMF (Federal Göç ve Mülteci Dairesi) bu kursları düzenler.",
    dialogues: [
      {
        title: "Diyalog 1: Erster Tag im Sprachkurs",
        context: "Berdan A1 dil kursunun ilk gününde öğretmeniyle konuşuyor.",
        lines: [
          { speaker: "B", label: "Lehrerin", text: "Herzlich willkommen! Ich bin Frau Weber, Ihre Deutschlehrerin. Bitte stellen Sie sich kurz vor.", translation: "Hoş geldiniz! Ben Bayan Weber, Almanca öğretmeniniz. Lütfen kısaca kendinizi tanıtın." },
          { speaker: "A", label: "Berdan", text: "Hallo! Ich heiße Berdan Yılmaz. Ich komme aus der Türkei, aus Istanbul. Ich wohne seit drei Monaten in Berlin.", translation: "Merhaba! Benim adım Berdan Yılmaz. Türkiye'den, İstanbul'dan geliyorum. Üç aydır Berlin'de oturuyorum." },
          { speaker: "B", label: "Lehrerin", text: "Sehr gut, Berdan! Warum lernen Sie Deutsch?", translation: "Çok güzel, Berdan! Neden Almanca öğreniyorsunuz?" },
          { speaker: "A", label: "Berdan", text: "Ich möchte auf Arbeit gut kommunizieren und mich hier integrieren.", translation: "İşte iyi iletişim kurmak ve burada entegre olmak istiyorum." },
          { speaker: "B", label: "Lehrerin", text: "Ein schönes Ziel! Haben Sie schon Vorkenntnisse?", translation: "Güzel bir hedef! Daha önce Almanca bilginiz var mı?" },
          { speaker: "A", label: "Berdan", text: "Nur ein bisschen. Ich kann einfache Sätze sagen.", translation: "Sadece biraz. Basit cümleler söyleyebiliyorum." },
          { speaker: "B", label: "Lehrerin", text: "Das ist ein guter Anfang. Wenn Sie etwas nicht verstehen, sagen Sie bitte 'Können Sie das bitte wiederholen?'", translation: "Bu iyi bir başlangıç. Bir şeyi anlamadığınızda lütfen 'Bunu tekrar edebilir misiniz?' deyin." },
          { speaker: "A", label: "Berdan", text: "Verstanden! Eine Frage — gibt es Hausaufgaben?", translation: "Anladım! Bir sorum var — ev ödevi oluyor mu?" },
          { speaker: "B", label: "Lehrerin", text: "Ja, kleine Übungen nach jedem Thema. Aber keine Angst!", translation: "Evet, her konudan sonra küçük alıştırmalar. Ama korkmayın!" }
        ]
      },
      {
        title: "Diyalog 2: Mit einem Mitschüler",
        context: "Berdan sınıf arkadaşı Maria ile molada konuşuyor.",
        lines: [
          { speaker: "B", label: "Maria", text: "Hi! Ich bin Maria, aus Spanien. Und du?", translation: "Selam! Ben Maria, İspanya'dan. Ya sen?" },
          { speaker: "A", label: "Berdan", text: "Hallo Maria! Ich bin Berdan, aus der Türkei. Warst du schon mal in Deutschland?", translation: "Merhaba Maria! Ben Berdan, Türkiye'den. Daha önce Almanya'da bulundun mu?" },
          { speaker: "B", label: "Maria", text: "Nein, ich bin erst seit einem Monat hier. Und du?", translation: "Hayır, ben sadece bir aydır buradayım. Ya sen?" },
          { speaker: "A", label: "Berdan", text: "Ich bin seit drei Monaten hier. Die Sprache ist schwierig, oder?", translation: "Ben üç aydır buradayım. Dil zor, değil mi?" },
          { speaker: "B", label: "Maria", text: "Ja, besonders die Grammatik! Was findest du am schwersten?", translation: "Evet, özellikle gramer! Sen neyi en zor buluyorsun?" },
          { speaker: "A", label: "Berdan", text: "Den Artikel! Der, die, das — das ist für mich sehr schwierig.", translation: "Artikeli! Der, die, das — bu benim için çok zor." },
          { speaker: "B", label: "Maria", text: "Für mich auch! Vielleicht können wir zusammen lernen?", translation: "Benim için de! Belki birlikte çalışabiliriz?" },
          { speaker: "A", label: "Berdan", text: "Gerne! Hast du nach dem Kurs Zeit für einen Kaffee?", translation: "Memnuniyetle! Kurstan sonra bir kahve için vaktın var mı?" }
        ]
      }
    ],
    phrases: [
      { de: "Ich verstehe das nicht. Können Sie das erklären?", tr: "Bunu anlamıyorum. Açıklayabilir misiniz?", context: "Öğretmene sormak" },
      { de: "Können Sie das bitte wiederholen / langsamer sagen?", tr: "Lütfen tekrar edebilir misiniz / daha yavaş söyleyebilir misiniz?", context: "Anlamama durumu" },
      { de: "Wie schreibt man das?", tr: "Bu nasıl yazılır?", context: "Yazımı sormak" },
      { de: "Wie sagt man ... auf Deutsch?", tr: "...Almancada nasıl söylenir?", context: "Kelime çevirisi" },
      { de: "Ich habe eine Frage.", tr: "Bir sorum var.", context: "Dikkat çekmek için" },
      { de: "Darf ich zur Toilette?", tr: "Tuvalete gidebilir miyim?", context: "İzin istemek" },
      { de: "Bis wann müssen wir die Hausaufgaben abgeben?", tr: "Ev ödevini ne zamana kadar teslim etmeliyiz?", context: "Ödev teslimi" },
      { de: "Wann beginnt / endet die Stunde?", tr: "Ders ne zaman başlıyor / bitiyor?", context: "Ders programı" },
      { de: "Können wir das noch einmal üben?", tr: "Bunu bir kez daha pratik yapabilir miyiz?", context: "Tekrar talebi" }
    ]
  },

  // ─── 15. NOTFALL & HILFE ─────────────────────────────────────────────────────
  {
    id: "notfall",
    title: "Notfall & Hilfe",
    subtitle: "Acil Durumlar ve Yardım",
    icon: "🆘",
    color: "#dc2626",
    description: "Acil sağlık, hırsızlık, kaybolma ve dil bariyeri durumlarında sizi kurtaracak kritik ifadeler.",
    tip: "📌 Almanya'da acil durum numaraları: 110 (Polizei / Polis), 112 (Feuerwehr & Notarzt / İtfaiye ve Ambulans). Bu numaralar ücretsizdir ve 7/24 hizmet verir.",
    dialogues: [
      {
        title: "Diyalog 1: Notruf (Ambulans Çağırmak)",
        context: "Berdan sokakta biri fenalaşıyor ve ambulans çağırıyor.",
        lines: [
          { speaker: "B", label: "Leitstelle (112)", text: "Rettungsleitstelle, was ist passiert?", translation: "Acil Merkezi, ne oldu?" },
          { speaker: "A", label: "Berdan", text: "Hallo! Ich brauche dringend einen Krankenwagen! Eine Person ist hier bewusstlos.", translation: "Merhaba! Acilen bir ambulansa ihtiyacım var! Burada bir kişi bilinçsiz." },
          { speaker: "B", label: "Leitstelle", text: "Wo sind Sie genau? Adresse bitte!", translation: "Tam olarak neredesiniz? Adres lütfen!" },
          { speaker: "A", label: "Berdan", text: "Friedrichstraße 42, Berlin Mitte. Neben dem Supermarkt.", translation: "Friedrichstraße 42, Berlin Mitte. Süpermarketin yanında." },
          { speaker: "B", label: "Leitstelle", text: "Atmet die Person noch?", translation: "Kişi hala nefes alıyor mu?" },
          { speaker: "A", label: "Berdan", text: "Ja, ich glaube schon. Aber sie reagiert nicht.", translation: "Evet, sanırım. Ama tepki vermiyor." },
          { speaker: "B", label: "Leitstelle", text: "Gut. Bleiben Sie bei der Person. Der Krankenwagen ist in 5 Minuten da.", translation: "Peki. Kişinin yanında kalın. Ambulans 5 dakika içinde orada olacak." },
          { speaker: "A", label: "Berdan", text: "Danke! Ich warte hier.", translation: "Teşekkürler! Burada bekliyorum." }
        ]
      },
      {
        title: "Diyalog 2: Diebstahl melden (Hırsızlık Bildirmek)",
        context: "Berdan çantasının çalındığını fark ediyor ve polise gidiyor.",
        lines: [
          { speaker: "A", label: "Berdan", text: "Guten Tag. Ich möchte einen Diebstahl anzeigen.", translation: "İyi günler. Bir hırsızlığı bildirmek istiyorum." },
          { speaker: "B", label: "Polizist", text: "Was ist passiert und wann?", translation: "Ne oldu ve ne zaman?" },
          { speaker: "A", label: "Berdan", text: "Mein Rucksack wurde vor einer Stunde in der U-Bahn gestohlen.", translation: "Sırt çantam bir saat önce metroda çalındı." },
          { speaker: "B", label: "Polizist", text: "Was war in dem Rucksack?", translation: "Sırt çantasında ne vardı?" },
          { speaker: "A", label: "Berdan", text: "Mein Laptop, mein Portemonnaie mit 80 Euro Bargeld und mein Personalausweis.", translation: "Dizüstü bilgisayarım, 80 Euro nakit içeren cüzdanım ve kimlik kartım." },
          { speaker: "B", label: "Polizist", text: "Haben Sie den Täter gesehen?", translation: "Faili gördünüz mü?" },
          { speaker: "A", label: "Berdan", text: "Nein, ich habe nichts bemerkt. Der Rucksack war plötzlich weg.", translation: "Hayır, hiçbir şey fark etmedim. Sırt çantası aniden yoktu." },
          { speaker: "B", label: "Polizist", text: "Bitte füllen Sie dieses Formular aus. Sie bekommen eine Anzeigenbestätigung — die brauchen Sie für die Versicherung.", translation: "Lütfen bu formu doldurun. Bir suç duyurusu teyidi alacaksınız — bunu sigorta için kullanmanız gerekir." },
          { speaker: "A", label: "Berdan", text: "Danke. Und den Ausweis — was mache ich jetzt?", translation: "Teşekkürler. Kimlik kartı için — şimdi ne yapmalıyım?" },
          { speaker: "B", label: "Polizist", text: "Sperren Sie sofort Ihre Bankkarte und melden Sie sich beim türkischen Konsulat wegen des Ausweises.", translation: "Hemen banka kartınızı bloke ettirin ve kimlik kartı için Türk konsolosluğuna başvurun." }
        ]
      }
    ],
    phrases: [
      { de: "Hilfe! Rufen Sie die Polizei / einen Krankenwagen!", tr: "İmdat! Polisi / Ambulansı arayın!", context: "Acil yardım çağrısı" },
      { de: "Ich fühle mich sehr schlecht. Wo ist ein Arzt?", tr: "Kendimi çok kötü hissediyorum. Doktor nerede?", context: "Sağlık acil durumu" },
      { de: "Meine Tasche / mein Handy wurde gestohlen.", tr: "Çantam / telefonum çalındı.", context: "Hırsızlık bildirimi" },
      { de: "Ich habe meinen Reisepass verloren.", tr: "Pasaportumu kaybettim.", context: "Belge kaybı — konsolosluğu arayın" },
      { de: "Bitte sprechen Sie langsamer. Ich verstehe Sie nicht.", tr: "Lütfen daha yavaş konuşun. Sizi anlamıyorum.", context: "Dil bariyeri" },
      { de: "Wo ist das nächste Krankenhaus?", tr: "En yakın hastane nerede?", context: "Sağlık tesisi bulmak" },
      { de: "Ich möchte einen Diebstahl anzeigen.", tr: "Hırsızlık bildirmek istiyorum.", context: "Polise giderken" },
      { de: "Bitte sperren Sie meine Karte.", tr: "Lütfen kartımı bloke edin.", context: "Bankayı aramak" },
      { de: "Wo ist die nächste Polizeiwache?", tr: "En yakın polis karakolu nerede?", context: "Polis desteği" },
      { de: "Ist hier ein Arzt? / Gibt es einen Arzt hier?", tr: "Burada doktor var mı?", context: "Kalabalık yerde acil durum" }
    ]
  }
];
