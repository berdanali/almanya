// src/data/goethe.js

export const goetheFascicles = [
  // ════════════════════════════════════════════════════════
  //  A1 BÖLÜMÜ  (Fasikül 1-9)
  // ════════════════════════════════════════════════════════
  {
    id: 1,
    level: "A1",
    title: "Sprechen Teil 1: Sich vorstellen",
    subtitle: "Kendini Tanıtma, Harf Kodlama ve Sayılar",
    description: "Goethe A1 sınavının konuşma bölümünün ilk aşamasında gözetmenler sizden kendinizi tanıtmanızı ister. Size üzerinde Name, Alter, Land, Wohnort, Sprachen ve Beruf yazan bir kağıt verirler. Ayrıca adınızı kodlamanız (buchstabieren) ve bir telefon numarası veya posta kodu okumanız istenir.",
    color: "#f59e0b",
    icon: "🗣️",
    tips: [
      "Sınavda ezbere konuşmak yerine doğal olmaya çalışın, ancak bu temel cümleleri su gibi bilmelisiniz.",
      "Adınızı kodlarken Alman alfabesindeki özel harflere dikkat edin: Ä (A-Umlaut), Ö (O-Umlaut), Ü (U-Umlaut), ß (Eszett).",
      "Sayıları okurken 21, 35 gibi sayıların 'einundzwanzig' şeklinde tersten okunduğunu unutmayın.",
      "Mesleğinizi söylerken 'Ich bin Arzt von Beruf' veya 'Ich arbeite als Arzt' kalıplarını kullanın.",
      "Dil seviyenizi söylerken 'Ich spreche Türkisch als Muttersprache und ein bisschen Deutsch' demek gözetmenlerin hoşuna gider.",
      "Anlamazsanız 'Wie bitte?' veya 'Können Sie das bitte wiederholen?' demekten çekinmeyin, eksi puan getirmez.",
      "Hobilerinizi de sorabilirler: 'Meine Hobbys sind Lesen und Schwimmen' diyerek hazırlıklı olun."
    ],
    examples: [
      { de: "Ich heiße Ali Yılmaz. / Mein Name ist Ali Yılmaz.", tr: "Benim adım Ali Yılmaz." },
      { de: "Können Sie das bitte buchstabieren? – A-L-I, Y-I-L-M-A-Z.", tr: "Bunu heceleyebilir misiniz lütfen?" },
      { de: "Ich bin 28 Jahre alt.", tr: "Ben 28 yaşındayım." },
      { de: "Ich komme aus der Türkei.", tr: "Türkiye'den geliyorum." },
      { de: "Ich lebe/wohne in Istanbul.", tr: "İstanbul'da yaşıyorum." },
      { de: "Ich spreche Türkisch, Englisch und ein bisschen Deutsch.", tr: "Türkçe, İngilizce ve biraz Almanca konuşuyorum." },
      { de: "Ich bin Ingenieur von Beruf. / Ich bin Lehrerin.", tr: "Meslek olarak mühendisim. / Ben öğretmenim (kadın)." },
      { de: "Meine Handynummer ist: null - eins - sieben - sechs...", tr: "Cep telefonu numaram: 0 - 1 - 7 - 6..." },
      { de: "Wie ist Ihre Postleitzahl? – Das ist 34000.", tr: "Posta kodunuz nedir? – 34000." },
      { de: "Was sind Ihre Hobbys? – Ich spiele gern Fußball.", tr: "Hobileriniz nelerdir? – Futbol oynamayı severim." }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Ich komme ___ der Türkei.", blank: "aus", hint: "Den/Dan eki (Ülke için aus kullanılır)", translation: "Türkiye'den geliyorum." },
        { sentence: "Ich ___ in Berlin.", blank: "wohne", hint: "ikamet etmek (Ich çekimi)", translation: "Berlin'de ikamet ediyorum." },
        { sentence: "Mein ___ ist Kaya.", blank: "Familienname", hint: "Soyadı (veya Nachname)", translation: "Soyadım Kaya." },
        { sentence: "Ich ___ 30 Jahre alt.", blank: "bin", hint: "olmak fiili sein (Ich çekimi)", translation: "Ben 30 yaşındayım." },
        { sentence: "Ich spreche Englisch und ein ___ Deutsch.", blank: "bisschen", hint: "Biraz", translation: "İngilizce ve biraz Almanca konuşuyorum." },
        { sentence: "Ich bin Arzt ___ Beruf.", blank: "von", hint: "meslek olarak (edat)", translation: "Meslek olarak doktorum." },
        { sentence: "Können Sie Ihren Namen bitte ___?", blank: "buchstabieren", hint: "Hecelemek / kodlamak", translation: "Adınızı heceleyebilir misiniz lütfen?" },
        { sentence: "Meine Hobbys ___ Lesen und Musik hören.", blank: "sind", hint: "olmak fiili çoğul (sein)", translation: "Hobilerim okumak ve müzik dinlemektir." },
        { sentence: "Wie ist Ihre ___? – Null eins fünf zwei...", blank: "Telefonnummer", hint: "Telefon numarası", translation: "Telefon numaranız nedir?" },
        { sentence: "Ich bin ledig und habe ___ Kinder.", blank: "keine", hint: "Hiç (çoğul isimden önce)", translation: "Bekarım ve hiç çocuğum yok." }
      ]
    }
  },
  {
    id: 2,
    level: "A1",
    title: "Schreiben Teil 1: Formular ausfüllen",
    subtitle: "Kişisel Bilgilerle Form Doldurma",
    description: "Schreiben bölümünün ilk kısmında, size kısa bir okuma metni (genellikle bir tatil rezervasyonu, kurs kaydı veya banka işlemi yapan bir kişi hakkında) verilir. Metnin altında 5 boşluktan oluşan bir form bulunur. Metindeki bilgileri bularak forma doğru şekilde yazmanız gerekir.",
    color: "#3b82f6",
    icon: "📝",
    tips: [
      "Formda istenen bilgilerin Almanca karşılıklarını ezberleyin: Vorname (Ad), Familienname/Nachname (Soyadı), Geburtsort (Doğum yeri), Geburtsdatum (Doğum tarihi), Wohnort (Yaşadığı yer).",
      "Medeni hal (Familienstand) çok sık sorulur: ledig (bekar), verheiratet (evli), geschieden (boşanmış), verwitwet (dul).",
      "Ödeme yöntemleri (Zahlungsart) çıkabilir: bar (nakit), mit Kreditkarte (kredi kartıyla), Überweisung (havale).",
      "Cinsiyet (Geschlecht): männlich (erkek), weiblich (kadın).",
      "Yazım hatalarına çok dikkat edin. Forma geçirirken kelimeleri büyük/küçük harf kurallarına uygun kopyalayın.",
      "Kişinin kaç çocuğu olduğunu (Anzahl der Kinder) metinden dikkatlice okuyun."
    ],
    examples: [
      { de: "Familienstand: verheiratet", tr: "Medeni hal: evli" },
      { de: "Anzahl der Kinder: 2", tr: "Çocuk sayısı: 2" },
      { de: "Beruf: Informatiker", tr: "Meslek: Bilgisayarcı/Yazılımcı" },
      { de: "Zahlungsweise: bar", tr: "Ödeme şekli: nakit" },
      { de: "Reiseziel: München", tr: "Seyahat hedefi: Münih" },
      { de: "Anreisedatum: 15.08.2023", tr: "Varış tarihi: 15.08.2023" },
      { de: "Staatsangehörigkeit: türkisch", tr: "Uyruk/Vatandaşlık: Türk" }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Metin: Herr Müller möchte bar bezahlen.\n\nZahlungsart: ___", blank: "bar", hint: "Nakit", translation: "Ödeme türü: Nakit" },
        { sentence: "Metin: Anna kommt aus Spanien, aber wohnt in Berlin.\n\nWohnort: ___", blank: "Berlin", hint: "Yaşadığı yer", translation: "İkamet yeri: Berlin" },
        { sentence: "Metin: Maria ist ledig und hat keine Kinder.\n\nFamilienstand: ___", blank: "ledig", hint: "Medeni hal", translation: "Medeni hal: bekar" },
        { sentence: "Metin: Er ist am 12.05.1990 in Frankfurt geboren.\n\nGeburtsort: ___", blank: "Frankfurt", hint: "Doğum yeri", translation: "Doğum yeri: Frankfurt" },
        { sentence: "Metin: Er ist am 12.05.1990 in Frankfurt geboren.\n\nGeburtsdatum: ___", blank: "12.05.1990", hint: "Doğum tarihi", translation: "Doğum tarihi: 12.05.1990" },
        { sentence: "Metin: Herr Yılmaz hat zwei Töchter und einen Sohn.\n\nAnzahl der Kinder: ___", blank: "3", hint: "Toplam çocuk sayısı (2 kız + 1 erkek)", translation: "Çocuk sayısı: 3" },
        { sentence: "Metin: Sie arbeitet als Krankenschwester.\n\nBeruf: ___", blank: "Krankenschwester", hint: "Kadın hemşire", translation: "Meslek: Hemşire" },
        { sentence: "Metin: Seine Postleitzahl ist 34000.\n\nPLZ: ___", blank: "34000", hint: "Sayısal posta kodu", translation: "Posta kodu: 34000" },
        { sentence: "Metin: Frau Müller bucht ein Einzelzimmer.\n\nZimmertyp: ___", blank: "Einzelzimmer", hint: "Tek kişilik oda", translation: "Oda tipi: Tek kişilik oda" },
        { sentence: "Metin: Sie reist am Freitag ab.\n\nAbreise: ___", blank: "Freitag", hint: "Haftanın günü", translation: "Ayrılış: Cuma" }
      ]
    }
  },
  {
    id: 3,
    level: "A1",
    title: "Schreiben Teil 2: Kurze E-Mail schreiben",
    subtitle: "Mektup / E-Posta Yazma",
    description: "Sınavda sizden kısa bir mesaj, e-posta veya mektup yazmanız istenir (yaklaşık 30 kelime). Size 3 farklı nokta (Punkte) verilir. E-postanızda mutlaka bu 3 noktaya da değinmek zorundasınuz. Resmi (Sie) veya gayriresmi (du) durumlara dikkat edilmelidir.",
    color: "#10b981",
    icon: "✉️",
    tips: [
      "E-postanın kime yazıldığına çok dikkat edin. Arkadaşınıza yazıyorsanız 'Lieber Tom / Liebe Maria' diye başlayın.",
      "Kurum, otel veya tanımadığınız birine yazıyorsanız 'Sehr geehrte Damen und Herren' diye başlayın.",
      "Kurum mektuplarında kapanış daima 'Mit freundlichen Grüßen' olmalıdır. Kesinlikle virgül koymayın!",
      "Arkadaşlara yazarken kapanış 'Viele Grüße' veya 'Herzliche Grüße' olmalıdır.",
      "İstenilen 3 maddenin her biri için en az 1 veya 2 basit cümle kurun. Karmaşık cümlelerden kaçının.",
      "Özür dilerken 'Es tut mir leid, aber...' kalıbı hayat kurtarır.",
      "Soru sormanız istenirse 'Können Sie mir bitte helfen?' gibi hazır kalıpları kullanın."
    ],
    examples: [
      { de: "Sehr geehrte Damen und Herren,", tr: "Sayın yetkili, (kişinin adı bilinmiyorsa)" },
      { de: "Liebe Sarah, / Lieber Thomas,", tr: "Sevgili Sarah (kadın) / Sevgili Thomas (erkek)," },
      { de: "Ich habe ein Problem. Mein Computer ist kaputt.", tr: "Bir problemim var. Bilgisayarım bozuk." },
      { de: "Es tut mir leid, aber ich bin krank.", tr: "Üzgünüm ama hastayım. (Randevu iptali için ideal)" },
      { de: "Ich kann leider nicht kommen.", tr: "Maalesef gelemem." },
      { de: "Haben Sie am Freitag um 15 Uhr Zeit?", tr: "Cuma günü saat 15:00'te zamanınız var mı?" },
      { de: "Mit freundlichen Grüßen (İmza)", tr: "Saygılarımla (Resmi kapanış)" },
      { de: "Viele Grüße (İmza)", tr: "Selamlar (Arkadaş kapanışı)" }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Arkadaşına e-posta başlangıcı: ___ Maria,", blank: "Liebe", hint: "Dişil isim için sevgili", translation: "Sevgili Maria," },
        { sentence: "Erkek arkadaşına: ___ Tom,", blank: "Lieber", hint: "Eril isim için sevgili", translation: "Sevgili Tom," },
        { sentence: "Resmi başlangıç (Erkek): Sehr ___ Herr Müller,", blank: "geehrter", hint: "Sayın (Eril)", translation: "Sayın Bay Müller," },
        { sentence: "Özür dileme: Es tut mir ___, aber ich komme später.", blank: "leid", hint: "üzgünüm", translation: "Üzgünüm ama daha geç geleceğim." },
        { sentence: "Gelemeyeceğini bildirme: Ich ___ leider nicht kommen.", blank: "kann", hint: "können fiilinin Ich çekimi", translation: "Maalesef gelemem." },
        { sentence: "Randevu sorma: ___ wir uns am Wochenende treffen?", blank: "Können", hint: "Mümkün olmak fiili (Biz çekimi)", translation: "Hafta sonu buluşabilir miyiz?" },
        { sentence: "Bilgi verme: Der Zug kommt um 10 Uhr ___.", blank: "an", hint: "ankommen (varmak) ayrılabilen fiilin eki", translation: "Tren saat 10'da varıyor." },
        { sentence: "Soru sorma: ___ hast du Zeit?", blank: "Wann", hint: "Ne zaman", translation: "Ne zaman zamanın var?" },
        { sentence: "Resmi kapanış: Mit freundlichen ___", blank: "Grüßen", hint: "Selamlar", translation: "Saygılarımla" },
        { sentence: "Arkadaşa kapanış: ___ Grüße", blank: "Viele", hint: "Çok (Selamlar)", translation: "Çok selamlar" }
      ]
    }
  },
  {
    id: 4,
    level: "A1",
    title: "Sprechen Teil 2: Fragen und Antworten",
    subtitle: "W-Soruları Sorma ve Cevaplama",
    description: "Bu bölümde gözetmen masaya ters çevrilmiş kartlar koyar. Konu (Thema) bellidir, örneğin: Essen und Trinken, Einkaufen, Wochenende. Çektiğiniz karttaki kelimeyi kullanarak partnerinize bir W-sorusu sormalısınız.",
    color: "#8b5cf6",
    icon: "❓",
    tips: [
      "W-Fragen yapısı basittir: Soru kelimesi + Fiil + Özne + Karttaki Kelime? Örn: Wann isst du einen Apfel?",
      "Kelimelerin makalelerine (der, die, das) çok takılmayın, pratik ve anlaşılır olmak daha önemlidir.",
      "Cevap verirken sadece 'Ja' veya 'Nein' demek yerine tam cümle kurmaya çalışın.",
      "Partneriniz soruyu sorduğunda basit cevaplar verin: 'Ich kaufe im Supermarkt ein.' gibi.",
      "Soruları 'du' (sen) formunda sorabilirsiniz. Genelde diğer aday öğrenci olduğu için 'du' kullanılır."
    ],
    examples: [
      { de: "Thema: Essen. Karte: Apfel -> Wann isst du einen Apfel?", tr: "Konu: Yemek. Kart: Elma -> Ne zaman elma yersin?" },
      { de: "Antwort: Ich esse morgens einen Apfel.", tr: "Cevap: Sabahları bir elma yerim." },
      { de: "Thema: Einkaufen. Karte: Kasse -> Wo ist die Kasse?", tr: "Konu: Alışveriş. Kart: Kasa -> Kasa nerede?" },
      { de: "Thema: Urlaub. Karte: Hotel -> Wie teuer ist das Hotel?", tr: "Konu: Tatil. Kart: Otel -> Otel ne kadar pahalı?" },
      { de: "Thema: Verkehr. Karte: Zug -> Fährst du oft mit dem Zug?", tr: "Konu: Ulaşım. Kart: Tren -> Sık sık trenle seyahat eder misin?" }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Thema: Essen. (Kart: Brot) -> ___ isst du gern Brot?", blank: "Wann", hint: "Ne zaman", translation: "Ne zaman ekmek yemeyi seversin?" },
        { sentence: "Thema: Einkaufen. (Kart: Zeitung) -> ___ kaufst du die Zeitung?", blank: "Wo", hint: "Nerede", translation: "Gazeteyi nereden satın alıyorsun?" },
        { sentence: "Thema: Wochenende. (Kart: Familie) -> Besuchst ___ am Wochenende deine Familie?", blank: "du", hint: "Sen", translation: "Hafta sonu aileni ziyaret ediyor musun?" },
        { sentence: "Thema: Wohnen. (Kart: Balkon) -> ___ Ihre Wohnung einen Balkon?", blank: "Hat", hint: "Sahip olmak fiili (Sizin daireniz)", translation: "Dairenizin balkonu var mı?" },
        { sentence: "Thema: Arbeit. (Kart: Computer) -> Arbeitest du mit dem ___?", blank: "Computer", hint: "Bilgisayar", translation: "Bilgisayarla mı çalışıyorsun?" },
        { sentence: "___ kostet das Buch? – 10 Euro.", blank: "Was", hint: "Ne (kadar)", translation: "Kitap ne kadar? – 10 Euro." },
        { sentence: "Cevap: Die Kasse ist dort ___.", blank: "rechts", hint: "Sağda", translation: "Kasa şurada sağda." },
        { sentence: "Thema: Urlaub. (Kart: Meer) -> Fährst du ans ___?", blank: "Meer", hint: "Deniz", translation: "Denize gidiyor musun?" },
        { sentence: "Cevap: Ich trinke ___ einen Kaffee.", blank: "gern", hint: "Severek", translation: "Severek kahve içerim." },
        { sentence: "Thema: Sport. (Kart: Fußball) -> ___ spielst du Fußball?", blank: "Wo", hint: "Nerede", translation: "Futbolu nerede oynarsın?" }
      ]
    }
  },
  {
    id: 5,
    level: "A1",
    title: "Sprechen Teil 3: Bitten formulieren",
    subtitle: "Rica ve Emir Cümleleri (Imperativ)",
    description: "Sınavın konuşma bölümünün son aşamasında, üzerinde sadece resim olan kartlar çekersiniz. Resme bakarak partnerinizden bir şey rica etmelisiniz veya ona bir emir cümlesi (Imperativ) kurmalısınız.",
    color: "#eab308",
    icon: "🙏",
    tips: [
      "Rica cümleleri kurmanın iki yolu: 'Können Sie bitte...' ile başlamak veya Emir Kipi (Imperativ) kullanmak.",
      "Du (sen) formunda Emir: 'Mach bitte die Tür zu!' (st takısı düşer).",
      "Sie (Siz) formunda Emir: 'Machen Sie bitte die Tür zu!' (Fiil tam haldedir).",
      "Partneriniz rica ettiğinde 'Ja, gern' veya 'Hier, bitte' deyin.",
      "Olumsuz cevap: 'Tut mir leid, ich brauche das selbst' diyebilirsiniz."
    ],
    examples: [
      { de: "Resim: Açık kapı -> Machen Sie bitte die Tür zu!", tr: "Lütfen kapıyı kapatın!" },
      { de: "Resim: Su bardağı -> Geben Sie mir bitte ein Glas Wasser.", tr: "Bana lütfen bir bardak su verin." },
      { de: "Resim: Kalem -> Hast du einen Stift für mich, bitte?", tr: "Benim için bir kalemin var mı lütfen?" },
      { de: "Antwort: Ja, natürlich. Hier, bitte.", tr: "Cevap: Evet, tabii ki. Buyurun." },
      { de: "Resim: Saat -> Wie spät ist es, bitte?", tr: "Saat kaç, lütfen?" }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Resim: Açık pencere -> ___ du bitte das Fenster zu?", blank: "Machst", hint: "Kapatır mısın (soru şeklinde rica)", translation: "Lütfen pencereyi kapatır mısın?" },
        { sentence: "Emir kipi (Sie): ___ Sie mir bitte das Buch!", blank: "Geben", hint: "Vermek", translation: "Lütfen bana kitabı verin!" },
        { sentence: "Emir kipi (du): ___ mir bitte das Buch!", blank: "Gib", hint: "Vermek (du için düzensiz emir kipi)", translation: "Bana kitabı ver lütfen!" },
        { sentence: "Resim: Telefon -> Kann ich bitte dein Telefon ___?", blank: "benutzen", hint: "Kullanmak", translation: "Telefonunu kullanabilir miyim lütfen?" },
        { sentence: "Olumlu cevap: Ja, ___. Hier bitte.", blank: "natürlich", hint: "Tabii ki (veya gern)", translation: "Evet, tabii ki. Buyurun." },
        { sentence: "Olumsuz cevap: Tut mir ___, ich brauche das Handy jetzt.", blank: "leid", hint: "Üzgünüm", translation: "Üzgünüm, cep telefonuna şu an ihtiyacım var." },
        { sentence: "Resim: Sessiz ol işareti -> Seien Sie bitte ___!", blank: "leise", hint: "Sessiz", translation: "Sessiz olun lütfen!" },
        { sentence: "Resim: Sözlük -> Ich brauche ein Wörterbuch. ___ Sie eins?", blank: "Haben", hint: "Sahip misiniz", translation: "Bir sözlüğe ihtiyacım var. Sizde var mı?" },
        { sentence: "Emir kipi (Sie): ___ Sie bitte hier nicht!", blank: "Rauchen", hint: "Sigara içmek", translation: "Burada sigara içmeyin lütfen!" },
        { sentence: "Resim: Elma -> Ich habe Hunger. Hast du ___ Apfel?", blank: "einen", hint: "Bir (Akkusativ eril)", translation: "Açım. Bir elman var mı?" }
      ]
    }
  },
  {
    id: 6,
    level: "A1",
    title: "Lesen Teil 1 & 2: Leseverstehen",
    subtitle: "Okuma Anlama ve İlanlar",
    description: "Sınavın Lesen bölümünde kısa e-postalar, notlar, ilanlar ve bilgi panoları okursunuz. Okuduklarınıza göre Richtig/Falsch sorularını cevaplamalı veya verilen duruma uygun ilanı seçmelisiniz.",
    color: "#06b6d4",
    icon: "📖",
    tips: [
      "Metinlerde zamanlara (tarih, saat) ve yerlere çok dikkat edin. Sorular genelde buradan gelir.",
      "Kelimelerin eş anlamlılarını arayın: 'geöffnet von 8 bis 18 Uhr' varken soru 'am Abend zu' diyebilir.",
      "İlan seçme sorularında anahtar kelimelere odaklanın: ucuz mobilya için 'Luxus Möbel' yanlış, 'Gebrauchte Möbel' doğrudur.",
      "Bilmediğiniz kelimelere takılmayın, cümlenin genel anlamına odaklanın.",
      "Richtig ve Falsch kelimelerinin baş harflerine (R ve F) dikkatle işaretleme yapın."
    ],
    examples: [
      { de: "Metin: Die Praxis ist von Montag bis Freitag von 8 bis 12 Uhr geöffnet.", tr: "Metin: Muayenehane Pazartesi–Cuma 08:00–12:00 arası açıktır." },
      { de: "Behauptung: Am Nachmittag ist die Praxis zu. -> RICHTIG", tr: "İddia: Öğleden sonra muayenehane kapalıdır. -> DOĞRU" },
      { de: "Metin: Wir treffen uns am Samstagabend im Restaurant Roma.", tr: "Metin: Cumartesi akşamı Roma restoranında buluşuyoruz." },
      { de: "Behauptung: Das Treffen ist am Sonntagmorgen. -> FALSCH", tr: "İddia: Buluşma Pazar sabahı. -> YANLIŞ" },
      { de: "Situation: Sie suchen ein billiges Fahrrad. A: Neu ab 500€. B: Gebraucht, günstig. -> B", tr: "Durum: Ucuz bisiklet arıyorsunuz. Cevap: B" }
    ],
    exercises: {
      type: "richtigfalsch",
      intro: "Aşağıdaki kısa metinleri okuyun. Her metin sınavdaki bir ilan, not veya kısa yazışmayı temsil eder. İfadenin Richtig (Doğru) mu yoksa Falsch (Yanlış) mı olduğuna karar verin.",
      questions: [
        {
          context: "📌 Aushang im Supermarkt:\n\"Liebe Kunden, heute ist unser Sonderverkauf! Alle Produkte im Angebot sind mit einem roten Preisschild markiert. Der Sonderverkauf gilt nur heute, Samstag, von 9 bis 18 Uhr.\"",
          statement: "Am Sonntag gibt es auch Sonderangebote.",
          answer: false,
          explanation: "Der Aushang sagt: 'gilt nur heute, Samstag' — also nicht am Sonntag."
        },
        {
          context: "📧 E-Mail von Klaus:\n\"Hallo Mia, der Deutschkurs beginnt nächste Woche, nicht diese Woche. Die erste Stunde ist am Montag um 18 Uhr im Raum 14. Bis dann, Klaus\"",
          statement: "Der Kurs findet um 18 Uhr statt.",
          answer: true,
          explanation: "Klaus schreibt: 'am Montag um 18 Uhr' — das ist richtig."
        },
        {
          context: "🏥 Schild an der Arztpraxis:\n\"Praxis Dr. Braun\nSprechstunden: Mo, Di, Do: 8:00–12:00 Uhr und 15:00–18:00 Uhr\nMi + Fr: nur 8:00–12:00 Uhr\nSamstag: geschlossen\"",
          statement: "Am Samstag kann man zum Arzt gehen.",
          answer: false,
          explanation: "Das Schild sagt: 'Samstag: geschlossen' — also kein Arztbesuch möglich."
        },
        {
          context: "📱 SMS von Freundin:\n\"Hi Sara, ich komme heute leider etwas später. Der Bus hat Verspätung. Ich bin ca. um 19:30 Uhr bei dir, nicht um 19:00 Uhr wie geplant. Tut mir leid!\"",
          statement: "Die Freundin kommt um 19:00 Uhr an.",
          answer: false,
          explanation: "Sie schreibt: 'um 19:30 Uhr ... nicht um 19:00 Uhr' — sie kommt zu spät."
        },
        {
          context: "📌 Zettel an der Tür:\n\"Lieber Briefträger, bitte klingeln Sie bei Wohnung 3 (Familie Wagner). Ich nehme die Post für meinen Nachbarn (Wohnung 5) an. Danke! M. Schulz, Wohnung 3\"",
          statement: "Frau Schulz nimmt die Post für ihren Nachbarn an.",
          answer: true,
          explanation: "Der Zettel sagt: 'Ich nehme die Post für meinen Nachbarn an.' — das stimmt."
        },
        {
          context: "🏊 Aushang im Schwimmbad:\n\"Achtung! Das Schwimmbad ist wegen Renovierungsarbeiten vom 3. bis 10. August geschlossen. Ab dem 11. August sind wir wieder für Sie da. Die Preise bleiben gleich.\"",
          statement: "Am 12. August ist das Schwimmbad wieder geöffnet.",
          answer: true,
          explanation: "'Ab dem 11. August sind wir wieder da' — der 12. August ist nach dem 11., also ist das Schwimmbad offen."
        },
        {
          context: "📧 E-Mail vom Kursleiter:\n\"Sehr geehrte Teilnehmer, der Kurs am Freitag, 15. März, muss leider ausfallen. Herr Wagner ist krank. Der Kurs wird am Montag, 18. März, nachgeholt. Die Uhrzeit bleibt gleich: 10:00 Uhr.\"",
          statement: "Der Kurs findet am Freitag statt.",
          answer: false,
          explanation: "Der Kursleiter schreibt: 'muss leider ausfallen' — der Kurs wird am Montag nachgeholt."
        },
        {
          context: "🏪 Schaufenster-Schild:\n\"Neu in unserem Sortiment: Bio-Obst und Bio-Gemüse aus der Region!\nGeöffnet: Mo–Sa 7:00–20:00 Uhr\nSonntag: 10:00–14:00 Uhr\"",
          statement: "Der Laden ist sonntags geschlossen.",
          answer: false,
          explanation: "Das Schild sagt: 'Sonntag: 10:00–14:00 Uhr' — der Laden ist auch sonntags offen."
        }
      ]
    }
  },

  // ── Fasikül 7: A1 Hören Teil 1 ───────────────────────────────────────────
  {
    id: 7,
    level: "A1",
    title: "Hören Teil 1: Kurze Ansagen",
    subtitle: "Telefon Mesajları ve Duyurularda Richtig/Falsch",
    description: "A1 Hören sınavının ilk bölümünde 5 kısa kayıt dinlersiniz: telefon mesajları, mağaza duyuruları, tren garı anonsları gibi kısa metinler. Her kayıt için bir doğru/yanlış ifadesi cevaplanır. Gerçek sınavda ses kaydını iki kez duyarsınız. Bu çalışmada transkriptlerle pratik yapıyorsunuz.",
    color: "#f97316",
    icon: "🎧",
    tips: [
      "Gerçek sınavda her kaydı iki kez duyarsınız — ilkinde genel anlamı yakalayın, ikincisinde ayrıntılara odaklanın.",
      "Soru kağıdındaki ifadeyi önceden okuyun; neyi dinleyeceğinizi bilmek çok yardımcı olur.",
      "Sayılara, tarihlere ve saatlere özellikle dikkat edin — sınavda sık test edilen noktalardır.",
      "Metni %100 anlamamanız gerekmiyor, sadece doğru/yanlış ifadesiyle ilgili kısmı yakalamak yeterli.",
      "Negatif ifadelere dikkat edin: 'nicht', 'kein', 'leider' gibi kelimeler anlamı tamamen değiştirir.",
      "Gerçek dinleme pratiği için Goethe Institut'un web sitesindeki örnek ses kayıtlarını dinleyin."
    ],
    examples: [
      { de: "Metin: Das Zimmer kostet 89 Euro pro Nacht.", tr: "Metin: Oda geceliği 89 Euro'ya mal oluyor." },
      { de: "İddia: Das Zimmer kostet 98 Euro. → FALSCH", tr: "İddia: Oda 98 Euro. → YANLIŞ (89 Euro)" },
      { de: "Metin: Der Zug fährt mit 15 Minuten Verspätung ab.", tr: "Metin: Tren 15 dakika rötarlı kalkıyor." },
      { de: "İddia: Der Zug ist pünktlich. → FALSCH", tr: "İddia: Tren zamanında. → YANLIŞ" },
      { de: "Metin: Die Praxis ist am Mittwoch geöffnet.", tr: "Metin: Muayenehane Çarşamba açık." }
    ],
    exercises: {
      type: "richtigfalsch",
      intro: "Her metin, sınavda duyacağınız kısa bir ses kaydını temsil eder. Metni okuyun ve verilen ifadenin Richtig mi (Doğru) yoksa Falsch mı (Yanlış) olduğuna karar verin.",
      questions: [
        {
          context: "📞 Hotel Sonnenschein'dan telefon mesajı:\n\"Guten Tag. Hier ist das Hotel Sonnenschein. Ihre Reservierung für den 15. März ist bestätigt. Das Zimmer kostet 89 Euro pro Nacht. Frühstück ist inklusive. Wir freuen uns auf Ihren Besuch!\"",
          statement: "Das Zimmer kostet 98 Euro pro Nacht.",
          answer: false,
          explanation: "Das Hotel sagt: Das Zimmer kostet 89 Euro — nicht 98 Euro."
        },
        {
          context: "🚉 Bahnhof-Durchsage:\n\"Achtung auf Gleis 5! Der ICE nach Hamburg hat heute 15 Minuten Verspätung. Der Zug fährt jetzt um 14:45 Uhr ab, nicht wie geplant um 14:30 Uhr.\"",
          statement: "Der Zug nach Hamburg fährt pünktlich um 14:30 Uhr ab.",
          answer: false,
          explanation: "Der Zug hat 15 Minuten Verspätung und fährt um 14:45 Uhr (nicht 14:30 Uhr)."
        },
        {
          context: "📞 Freund hinterlässt Voicemail:\n\"Hallo Lisa, hier ist Markus. Wegen unseres Geburtstagsfestes: Das Fest ist leider nicht am Samstag, sondern am Sonntag, den 20. Juli, um 18 Uhr bei mir zu Hause. Bis dann!\"",
          statement: "Das Geburtstagsfest ist am Sonntag um 18 Uhr.",
          answer: true,
          explanation: "Markus sagt ausdrücklich: 'am Sonntag, den 20. Juli, um 18 Uhr' — das stimmt."
        },
        {
          context: "🏪 Supermarkt-Durchsage:\n\"Liebe Kunden, heute ist unser Sommerschlussverkauf! Von 9 bis 18 Uhr sparen Sie bis zu 50% auf alle Sommerkleidung. Die Sonderangebote gelten nur heute. Wir freuen uns auf Sie!\"",
          statement: "Die Sonderangebote gelten auch morgen.",
          answer: false,
          explanation: "Der Supermarkt sagt: 'Die Sonderangebote gelten nur heute.' — also nicht morgen."
        },
        {
          context: "📞 Arzt-Praxis hinterlässt Nachricht:\n\"Guten Tag. Hier ist die Praxis Dr. Müller. Ihr Termin am Dienstag um 10 Uhr ist leider verschoben. Neuer Termin: Mittwoch um 11 Uhr. Bitte rufen Sie zurück, wenn Sie nicht können. Auf Wiederhören.\"",
          statement: "Der Arzttermin ist jetzt am Mittwoch.",
          answer: true,
          explanation: "Die Praxis sagt: 'Neuer Termin: Mittwoch um 11 Uhr.' — das ist richtig."
        },
        {
          context: "🏊 Schwimmbad-Ansage:\n\"Guten Tag, liebe Besucher. Das Schwimmbad ist heute von 14 bis 17 Uhr wegen einer Schulveranstaltung geschlossen. Ab 17 Uhr ist das Schwimmbad für alle wieder geöffnet.\"",
          statement: "Das Schwimmbad ist heute den ganzen Tag geschlossen.",
          answer: false,
          explanation: "Das Schwimmbad ist nur von 14–17 Uhr geschlossen. Ab 17 Uhr ist es wieder geöffnet."
        },
        {
          context: "📞 Nachricht auf dem Anrufbeantworter:\n\"Guten Tag, hier ist die Bibliothek Stadtmitte. Ihre bestellten Bücher sind angekommen. Sie können diese ab morgen, Dienstag, abholen. Wir haben von 9 bis 20 Uhr geöffnet. Bitte bringen Sie Ihren Bibliotheksausweis mit.\"",
          statement: "Die Bücher können heute noch abgeholt werden.",
          answer: false,
          explanation: "Die Bibliothek sagt: 'ab morgen, Dienstag' — also nicht heute."
        },
        {
          context: "🛍️ Durchsage im Kaufhaus:\n\"Werte Kunden, wir machen Sie darauf aufmerksam: In 15 Minuten schließen wir. Bitte bringen Sie Ihre Waren zur Kasse. Wir bedanken uns für Ihren Besuch und wünschen Ihnen einen schönen Abend.\"",
          statement: "Das Kaufhaus schließt in einer halben Stunde.",
          answer: false,
          explanation: "Die Durchsage sagt: 'in 15 Minuten' — nicht in 30 Minuten (einer halben Stunde)."
        },
        {
          context: "📞 Anruf vom Fitnessstudio:\n\"Hallo, hier ist das Fitnessstudio FitCity. Ihr Mitgliedsbeitrag für Januar wurde noch nicht bezahlt. Bitte überweisen Sie 39 Euro bis zum 15. Januar. Für Fragen rufen Sie uns an: 0221-445566.\"",
          statement: "Der monatliche Beitrag beträgt 39 Euro.",
          answer: true,
          explanation: "Das Studio sagt: 'überweisen Sie 39 Euro' — das ist der Monatsbeitrag."
        },
        {
          context: "🚌 Busansage:\n\"Achtung, Achtung! Wegen einer Straßensperrung in der Innenstadt fährt die Linie 42 heute eine Umleitung. Die Haltestellen Marktplatz und Rathaus werden nicht bedient. Bitte nutzen Sie die Haltestellen Am Dom oder Hauptbahnhof.\"",
          statement: "Die Haltestelle Rathaus wird heute normal bedient.",
          answer: false,
          explanation: "Die Ansage sagt: 'Haltestellen Marktplatz und Rathaus werden nicht bedient' — also kein Halt am Rathaus."
        }
      ]
    }
  },

  // ── Fasikül 8: A1 Hören Teil 2 & 3 ──────────────────────────────────────
  {
    id: 8,
    level: "A1",
    title: "Hören Teil 2 & 3: Dialoge & Eşleştirme",
    subtitle: "Konuşma Anlama ve İlan Eşleştirme",
    description: "A1 Hören Teil 2'de daha uzun diyaloglar dinler ve belirli bilgileri not edersiniz (kişi, saat, fiyat). Teil 3'te ise kısa mesajları ya da duyuruları kişilerin ihtiyaçlarıyla eşleştirirsiniz. Bu bölümde iki farklı beceri test edilir.",
    color: "#ec4899",
    icon: "🎙️",
    tips: [
      "Teil 2'de konuşmayı dinlerken önemli bilgilere hızlıca not alın: kim, ne zaman, nerede, kaç para.",
      "Teil 3'te önce kişilerin ihtiyaçlarını okuyun, sonra ilanları/mesajları eşleştirin.",
      "Diyaloglarda 'aber' (ama), 'leider' (maalesef), 'doch' (aslında) gibi bağlaçlara dikkat edin; yanıltıcı olabilirler.",
      "Sayılara (fiyat, saat, tarih) her zaman özellikle odaklanın.",
      "Cevap seçeneklerini ilk önce okuyun — ne arayacağınızı bilmek büyük avantaj sağlar."
    ],
    examples: [
      { de: "Dialog: A: Was kostet das? B: Das kostet 15 Euro. Frage: Wie viel kostet es? Cevap: 15 Euro", tr: "Bu ne kadar? — 15 Euro. Soru: Ne kadar? Cevap: 15 Euro" },
      { de: "Dialog: A: Wann ist der Termin? B: Am Donnerstag um 9 Uhr.", tr: "Randevu ne zaman? — Perşembe saat 9'da." },
      { de: "Situation: Person sucht Arbeit. Anzeige: Kellner gesucht. -> Passt!", tr: "Kişi iş arıyor. İlan: Garson aranıyor. -> Uygun!" }
    ],
    exercises: {
      type: "choice",
      intro: "Her diyalog veya metni dikkatlice okuyun ve doğru cevabı seçin. Gerçek sınavda bu bölümde ses kayıtları kullanılır.",
      questions: [
        {
          context: "🛒 Dialog im Supermarkt:\nAnna: Entschuldigung, wo finde ich die Milch?\nVerkäufer: Die Milch ist im zweiten Gang, links neben den Eiern.\nAnna: Und haben Sie auch fettarme Milch?\nVerkäufer: Ja, natürlich, im dritten Regal von oben.",
          question: "Wo ist die Milch?",
          options: ["A) Im ersten Gang", "B) Im zweiten Gang, neben den Eiern", "C) Neben der Kasse"],
          answer: 1,
          explanation: "Der Verkäufer sagt: 'Die Milch ist im zweiten Gang, links neben den Eiern.'"
        },
        {
          context: "📅 Dialog an der Volkshochschule:\nMaria: Guten Tag, ich möchte mich für einen Deutschkurs anmelden.\nSekretärin: Haben Sie schon Deutschkenntnisse?\nMaria: Ja, ein bisschen. Ich bin Anfängerin.\nSekretärin: Dann empfehle ich den A1-Kurs. Er beginnt montags um 9 Uhr und kostet 120 Euro pro Monat.",
          question: "Wann beginnt der Kurs?",
          options: ["A) Dienstags um 9 Uhr", "B) Montags um 9 Uhr", "C) Freitags um 10 Uhr"],
          answer: 1,
          explanation: "Die Sekretärin sagt: 'Er beginnt montags um 9 Uhr.'"
        },
        {
          context: "📅 Dialog an der Volkshochschule (Fortsetzung):\n(gleicher Dialog wie oben)",
          question: "Was kostet der Kurs pro Monat?",
          options: ["A) 150 Euro", "B) 12 Euro", "C) 120 Euro"],
          answer: 2,
          explanation: "Die Sekretärin sagt: 'kostet 120 Euro pro Monat.'"
        },
        {
          context: "📞 Telefondialog:\nKunde: Guten Tag, ich möchte einen Tisch für heute Abend reservieren.\nRestaurant: Für wie viele Personen?\nKunde: Für vier Personen.\nRestaurant: Und um wie viel Uhr?\nKunde: Um 19:30 Uhr bitte.\nRestaurant: Alles klar. Auf welchen Namen?\nKunde: Auf den Namen Yılmaz.",
          question: "Für wie viele Personen ist die Reservierung?",
          options: ["A) Für 3 Personen", "B) Für 5 Personen", "C) Für 4 Personen"],
          answer: 2,
          explanation: "Der Kunde sagt: 'Für vier Personen.'"
        },
        {
          context: "🏥 Teil 3 — Eşleştirme:\nKişi: Sofía hat Zahnschmerzen und braucht sofort Hilfe.\n\nAnzeige A: Dr. Peters — Allgemeinmedizin. Mo–Fr 8–18 Uhr.\nAnzeige B: Zahnarzt Dr. König — Notfalltermine möglich. Tel: 0221-77889.",
          question: "Welche Anzeige passt zu Sofía?",
          options: ["A) Anzeige A — Allgemeinmedizin", "B) Anzeige B — Zahnarzt", "C) Keine der Anzeigen passt"],
          answer: 1,
          explanation: "Sofía hat Zahnschmerzen → sie braucht einen Zahnarzt. Anzeige B ist der Zahnarzt mit Notfallterminen."
        },
        {
          context: "🏠 Dialog beim Vermieter:\nVermieter: Guten Tag! Die Wohnung hat 60 Quadratmeter und zwei Zimmer.\nSuchender: Wie hoch ist die Miete?\nVermieter: 850 Euro kalt, mit Nebenkosten sind es ungefähr 1.050 Euro.\nSuchender: Gibt es einen Balkon?\nVermieter: Ja, einen kleinen Balkon nach Süden. Und der Keller ist inklusive.",
          question: "Wie groß ist die Wohnung?",
          options: ["A) 50 Quadratmeter", "B) 60 Quadratmeter", "C) 70 Quadratmeter"],
          answer: 1,
          explanation: "Der Vermieter sagt: 'Die Wohnung hat 60 Quadratmeter.'"
        },
        {
          context: "🛒 Dialog an der Bäckerei:\nKunde: Guten Morgen! Ich hätte gerne vier Brötchen und ein Vollkornbrot.\nVerkäuferin: Das macht 3,20 Euro für die Brötchen und 4,50 Euro für das Brot. Zusammen 7,70 Euro.\nKunde: Haben Sie auch Laugenbrezel?\nVerkäuferin: Ja, die kosten 1,20 Euro das Stück.",
          question: "Was kostet das Vollkornbrot?",
          options: ["A) 3,20 Euro", "B) 1,20 Euro", "C) 4,50 Euro"],
          answer: 2,
          explanation: "Die Verkäuferin sagt: '4,50 Euro für das Brot.'"
        },
        {
          context: "📻 Teil 3 — Eşleştirme:\nKişi: Marco möchte am Wochenende ins Kino gehen. Er sucht einen Familienfilm.\n\nAnzeige A: Actionfilm 'Speed Demon' — nur für Erwachsene (ab 18 Jahren). Fr+Sa 20:30 Uhr.\nAnzeige B: Animationsfilm 'Kleine Drachen' — für Kinder und Familien geeignet. Sa+So 14:00 + 17:00 Uhr.",
          question: "Welche Anzeige passt zu Marco?",
          options: ["A) Anzeige A — Actionfilm", "B) Anzeige B — Animationsfilm", "C) Keine der Anzeigen passt"],
          answer: 1,
          explanation: "Marco sucht einen Familienfilm am Wochenende. Anzeige B ist ein Familienfilm am Samstag/Sonntag."
        }
      ]
    }
  },

  // ── Fasikül 9: A1 Lesen Teil 3 ───────────────────────────────────────────
  {
    id: 9,
    level: "A1",
    title: "Lesen Teil 3: Anzeigen lesen",
    subtitle: "İlanları Okuma ve Durumla Eşleştirme",
    description: "A1 Lesen Teil 3'te bir durumunuz olur ve iki ilan (A veya B) arasından durumunuza uygun olanı seçersiniz. Bazen iki ilanın hiçbiri uygun olmaz — o zaman 'C: Keines' seçersiniz. Anahtar kelimeler çok önemlidir.",
    color: "#14b8a6",
    icon: "📰",
    tips: [
      "Her ilanda anahtar kelimelere odaklanın: fiyat, meslek, yer, zaman, kişi sayısı.",
      "Durumun ihtiyaçlarını listeleyin (ucuz mu? kadın mı? yakın mı?) ve ilanla tek tek karşılaştırın.",
      "Bir ilan fazla bilgi verse bile, durumu tam karşılamıyorsa o ilan yanlıştır.",
      "'Keines' (hiçbiri) seçeneğini de göz önünde bulundurun — bazen her iki ilan da uymaz.",
      "Bildmediğiniz kelimeler varsa cümlenin geri kalanından anlam çıkarmaya çalışın."
    ],
    examples: [
      { de: "Situation: Sie suchen ein billiges Fahrrad. A: Neue Fahrräder ab 400€. B: Gebrauchtes Fahrrad, 80€, guter Zustand. → B", tr: "Durum: Ucuz bisiklet arıyorsunuz. A yeni ve pahalı, B ikinci el ve ucuz. → B" },
      { de: "Situation: Sie möchten schwimmen gehen. A: Fitnessstudio. B: Freibad, geöffnet täglich. → B", tr: "Durum: Yüzmek istiyorsunuz. B açık yüzme havuzu. → B" },
      { de: "Situation: Sie suchen eine Wohnung mit Garten. A: Wohnung im 5. OG. B: Erdgeschoss mit Garten. → B", tr: "Durum: Bahçeli daire arıyorsunuz. B zemin kat ve bahçeli. → B" }
    ],
    exercises: {
      type: "choice",
      intro: "Her durumu dikkatlice okuyun, ardından A veya B ilanlarından hangisinin uygun olduğunu seçin.",
      questions: [
        {
          context: "Situation 1:\nSie suchen einen Job als Kellner.\n\nAnzeige A: Bäckerei Schmidt sucht Verkäuferin. Erfahrung nötig.\nAnzeige B: Restaurant Milano sucht Kellner/Servicekraft (m/w/d). Vollzeit. Bewerbung: info@milano.de",
          question: "Welche Anzeige passt?",
          options: ["A) Anzeige A — Bäckerei", "B) Anzeige B — Restaurant", "C) Keine passt"],
          answer: 1,
          explanation: "Sie suchen einen Job als Kellner → Anzeige B sucht genau Kellner/Servicekraft."
        },
        {
          context: "Situation 2:\nSie möchten Gitarre lernen. Sie haben am Abend Zeit.\n\nAnzeige A: Gitarrenkurs für Anfänger, samstags 10–12 Uhr, VHS Berlin, 90€/Semester.\nAnzeige B: Gitarrenunterricht — Einzelstunden, abends möglich. Tel: 0152-334455.",
          question: "Welche Anzeige passt?",
          options: ["A) Anzeige A — VHS Kurs", "B) Anzeige B — Einzelstunden abends", "C) Keine passt"],
          answer: 1,
          explanation: "Sie haben nur abends Zeit → Anzeige B bietet abendliche Einzelstunden."
        },
        {
          context: "Situation 3:\nSie brauchen eine günstige Waschmaschine.\n\nAnzeige A: Neue Waschmaschinen ab 599€ — Elektro-Markt City.\nAnzeige B: Gut erhaltene Waschmaschine zu verkaufen. 3 Jahre alt. 120€. Selbstabholung. Tel: 0175-222333.",
          question: "Welche Anzeige passt?",
          options: ["A) Anzeige A — Neue Waschmaschine", "B) Anzeige B — Gebrauchte Waschmaschine", "C) Keine passt"],
          answer: 1,
          explanation: "Sie suchen eine günstige Waschmaschine → Anzeige B ist gebraucht und kostet nur 120€."
        },
        {
          context: "Situation 4:\nSie möchten einen Deutschkurs an einem Wochenende besuchen. Sie sprechen schon etwas Deutsch (A2-Niveau).\n\nAnzeige A: Intensiv-Deutschkurs A1 für absolute Anfänger. Mo–Fr ganztags.\nAnzeige B: Deutsch-Wochenendkurs A2-B1. Sa+So 9–13 Uhr. Sprachschule Lingua. 180€.",
          question: "Welche Anzeige passt?",
          options: ["A) Anzeige A — Anfängerkurs unter der Woche", "B) Anzeige B — Wochenendkurs A2–B1", "C) Keine passt"],
          answer: 1,
          explanation: "Wochenendkurs + A2-Niveau passt zu Anzeige B. Anzeige A ist für absolute Anfänger und unter der Woche."
        },
        {
          context: "Situation 5:\nSie suchen eine 2-Zimmer-Wohnung in München für maximal 800€ Warmmiete.\n\nAnzeige A: 3-Zimmer-Wohnung, 95m², 1.200€ Kaltmiete + NK. Schwabing.\nAnzeige B: Modernes Studio (1 Zimmer), 30m², 750€ warm. Innenstadt.",
          question: "Welche Anzeige passt?",
          options: ["A) Anzeige A — 3-Zimmer-Wohnung", "B) Anzeige B — Studio", "C) Keine passt — keine 2-Zimmer-Wohnung im Budget"],
          answer: 2,
          explanation: "Sie suchen 2 Zimmer für max. 800€. Anzeige A hat 3 Zimmer und ist zu teuer. Anzeige B hat nur 1 Zimmer. Keine passt."
        },
        {
          context: "Situation 6:\nSie möchten am Samstagnachmittag Sport machen. Sie suchen einen Schwimmkurs für Erwachsene.\n\nAnzeige A: Aqua-Fitness für Erwachsene. Sa 14:00–15:00 Uhr. Stadtbad Mitte. 8€ pro Stunde.\nAnzeige B: Kinderschwimmkurs. Sa 10:00–11:00 Uhr. Für Kinder ab 5 Jahren.",
          question: "Welche Anzeige passt?",
          options: ["A) Anzeige A — Aqua-Fitness Erwachsene", "B) Anzeige B — Kinderschwimmkurs", "C) Keine passt"],
          answer: 0,
          explanation: "Sie suchen einen Schwimmkurs für Erwachsene am Samstagnachmittag. Anzeige A ist genau das: Erwachsene, Samstag 14 Uhr."
        },
        {
          context: "Situation 7:\nSie suchen eine Babysitterin für Ihr 2-jähriges Kind. Sie brauchen jemanden für unter der Woche.\n\nAnzeige A: Babysitter gesucht: Ich (Studentin, 22) passe gern auf Kinder auf. Mo–Fr möglich. Tel: 0152-...\nAnzeige B: Nachhilfe in Mathe und Deutsch für Schüler ab 10 Jahren. Mi + Do 15:00–17:00 Uhr.",
          question: "Welche Anzeige passt?",
          options: ["A) Anzeige A — Studentin, Mo–Fr", "B) Anzeige B — Nachhilfe", "C) Keine passt"],
          answer: 0,
          explanation: "Sie brauchen eine Babysitterin unter der Woche. Anzeige A bietet genau das: Mo–Fr, für Kinder."
        },
        {
          context: "Situation 8:\nSie haben ein altes Fahrrad und möchten es reparieren lassen. Sie brauchen einen günstigen Service in Ihrer Nähe.\n\nAnzeige A: Fahrrad-Outlet: Neue Fahrräder ab 199€. Großes Sortiment. Mo–Sa geöffnet.\nAnzeige B: Fahrrad-Werkstatt Kettler: Reparaturen aller Art. Schnell und günstig. Kostenvoranschlag gratis.",
          question: "Welche Anzeige passt?",
          options: ["A) Anzeige A — Neue Fahrräder", "B) Anzeige B — Werkstatt / Reparatur", "C) Keine passt"],
          answer: 1,
          explanation: "Sie möchten ein Fahrrad reparieren lassen. Anzeige B ist eine Fahrrad-Werkstatt für Reparaturen."
        }
      ]
    }
  },

  // ════════════════════════════════════════════════════════
  //  A2 BÖLÜMÜ  (Fasikül 10-18)
  // ════════════════════════════════════════════════════════

  // ── Fasikül 10: A2 Lesen Teil 1 ──────────────────────────────────────────
  {
    id: 10,
    level: "A2",
    title: "A2 Lesen Teil 1: Texte verstehen",
    subtitle: "Uzun Metin Okuma ve Richtig/Falsch",
    description: "Goethe A2 Lesen Teil 1'de yaklaşık 150-200 kelimelik bir e-posta, mektup veya makale okursunuz ve 6 Richtig/Falsch sorusunu cevaplamanız beklenir. A1'e kıyasla metinler daha uzun ve karmaşıktır. Her doğru cevap 1 puan değerindedir (toplam 6 puan).",
    color: "#6366f1",
    icon: "📚",
    tips: [
      "Önce tüm soruları okuyun, sonra metni okuyun — ne arayacağınızı bilmek büyük avantaj sağlar.",
      "Metni kelime kelime çevirmeye çalışmayın; ana fikri ve önemli detayları yakalamak yeterlidir.",
      "Yanıltıcı 'neredeyse doğru' ifadelerine dikkat edin: 'Wasser und Heizung inklusive' varken 'Strom inklusive' yanlıştır.",
      "Comparative yapıları (mehr, weniger, länger, kürzer) sıklıkla test edilir.",
      "Metnin başına, sonuna ve her paragrafın ilk cümlesine özellikle odaklanın.",
      "Soru ifadeleriyle metindeki ifade birebir aynı olmayabilir — paraphrase (yeniden ifade) arayın."
    ],
    examples: [
      { de: "Metin: Wir sind letzte Woche umgezogen.", tr: "Geçen hafta taşındık." },
      { de: "Soru: Sie haben letzte Woche eine neue Wohnung bezogen. → RICHTIG", tr: "Soru: Geçen hafta yeni daireye taşındılar. → DOĞRU" },
      { de: "Metin: Wasser und Heizung sind inklusive, Strom nicht.", tr: "Su ve ısıtma dahil, elektrik değil." },
      { de: "Soru: Strom ist in der Miete inklusive. → FALSCH", tr: "Soru: Elektrik kira bedeline dahil. → YANLIŞ" }
    ],
    exercises: {
      type: "richtigfalsch",
      passageTitle: "E-Mail von Anna an ihre Freundin Susi",
      passage: "Betreff: Unsere neue Wohnung!\n\nLiebe Susi,\n\nich hoffe, es geht dir gut! Ich muss dir unbedingt von unserer neuen Wohnung erzählen. Wir sind letzte Woche in die Neue Straße 15 in München umgezogen. Die Wohnung ist wirklich schön: Sie hat drei Zimmer, eine große Küche und zwei Badezimmer. Die Miete kostet 1.200 Euro im Monat — und Wasser und Heizung sind inklusive. Das finden wir sehr fair.\n\nDas Beste ist: Wir haben einen kleinen Garten! Im Sommer können wir dort frühstücken und grillen. Die Nachbarn sind auch sehr freundlich — Frau Meyer aus der Wohnung nebenan hat uns sogar einen Kuchen gebracht.\n\nLeider ist die Entfernung zur Arbeit jetzt größer. Ich muss 45 Minuten mit der U-Bahn fahren. Früher waren es nur 20 Minuten zu Fuß. Aber das nehme ich gern in Kauf!\n\nKommst du mich bald besuchen? Ich würde mich sehr freuen!\n\nHerzliche Grüße,\nAnna",
      questions: [
        {
          statement: "Anna ist letzte Woche in eine neue Wohnung umgezogen.",
          answer: true,
          explanation: "Anna schreibt: 'Wir sind letzte Woche... umgezogen.' — das ist richtig."
        },
        {
          statement: "Die neue Wohnung hat vier Zimmer.",
          answer: false,
          explanation: "Anna schreibt: 'Sie hat drei Zimmer' — nicht vier."
        },
        {
          statement: "Strom ist in der Miete inklusive.",
          answer: false,
          explanation: "Anna schreibt: 'Wasser und Heizung sind inklusive' — Strom wird nicht erwähnt, also ist er nicht inklusive."
        },
        {
          statement: "Die Nachbarin Frau Meyer hat Anna und ihre Familie willkommen geheißen.",
          answer: true,
          explanation: "Anna schreibt: 'Frau Meyer... hat uns sogar einen Kuchen gebracht.' — sehr freundlich."
        },
        {
          statement: "Anna fährt jetzt länger zur Arbeit als früher.",
          answer: true,
          explanation: "Früher: 20 Minuten zu Fuß. Jetzt: 45 Minuten mit U-Bahn. Das ist länger."
        },
        {
          statement: "Anna möchte, dass Susi sie besucht.",
          answer: true,
          explanation: "Anna schreibt: 'Kommst du mich bald besuchen? Ich würde mich sehr freuen!'"
        }
      ]
    }
  },

  // ── Fasikül 11: A2 Lesen Teil 2 ──────────────────────────────────────────
  {
    id: 11,
    level: "A2",
    title: "A2 Lesen Teil 2: Anzeigen zuordnen",
    subtitle: "İlanları Kişilerle Eşleştirme",
    description: "A2 Lesen Teil 2'de 5 kişinin ihtiyaçları verilir ve 8 ilan arasından her kişiye uygun ilanı seçersiniz. Her kişi için yalnızca bir doğru ilan vardır. Gerçek sınavda A'dan H'ye kadar 8 ilan verilir. Bu çalışmada her soru için 3 seçenek sunulmaktadır.",
    color: "#8b5cf6",
    icon: "🔍",
    tips: [
      "Önce kişinin ihtiyaçlarını belirleyin: ne arıyor, hangi koşullar önemli (fiyat, zaman, yer)?",
      "İlanlardaki anahtar kelimeleri alt çizin: fiyat, tarih, konu, hedef kitle.",
      "Bir ilanda istenen özelliğin sadece bir kısmı varsa dikkatli olun — tüm koşulların karşılanması gerekir.",
      "Cinsiyete dikkat edin: 'für Frauen ab 40' erkeğe uymaz.",
      "Fiyat sınırlarını her zaman kontrol edin — 'günstig' veya 'kostenlos' arayanlar için belirleyici."
    ],
    examples: [
      { de: "Person: Tim sucht einen Kochkurs am Wochenende. Anzeige: Kochkurs Sa+So 10-13 Uhr. → Passt!", tr: "Kişi: Tim hafta sonu yemek kursu arıyor. İlan: Cmt+Paz kurs var. → Uygun!" },
      { de: "Person: Lena sucht kostenlose Nachhilfe. Anzeige: Nachhilfe 15€/Std. → Passt nicht!", tr: "Kişi: Lena ücretsiz özel ders arıyor. İlan: 15€/saat. → Uygun değil!" }
    ],
    exercises: {
      type: "choice",
      intro: "Her kişinin ihtiyacını okuyun ve ardından en uygun ilanı (A, B veya C) seçin.",
      questions: [
        {
          context: "Kişi 1 — Tobias:\nTobias ist 22 Jahre alt und sucht einen Nebenjob. Er kann nur abends und am Wochenende arbeiten. Er hat Erfahrung im Service.\n\nA) Bürojob, Mo–Fr 9–17 Uhr, Deutschkenntnisse erforderlich.\nB) Restaurant Bella Italia sucht Kellner für Abende und Wochenenden. Erfahrung erwünscht. info@bella.de\nC) Werkstatt sucht KFZ-Mechaniker, Vollzeit.",
          question: "Welche Anzeige passt zu Tobias?",
          options: ["A) Bürojob Mo–Fr", "B) Kellner Abende+Wochenende", "C) KFZ-Mechaniker Vollzeit"],
          answer: 1,
          explanation: "Tobias kann abends/Wochenende arbeiten und hat Service-Erfahrung → Anzeige B passt perfekt."
        },
        {
          context: "Kişi 2 — Sandra:\nSandra möchte ihre alte Waschmaschine (5 Jahre, funktioniert gut) für ca. 100 Euro verkaufen.\n\nA) Kleinanzeigen.de — Kaufen und Verkaufen privater Gebrauchtwaren\nB) Elektro-Markt Müller — Neue Waschmaschinen ab 399€ kaufen\nC) Reparatur-Service Technik — Wir reparieren alle Haushaltsgeräte",
          question: "Welche Anzeige passt zu Sandra?",
          options: ["A) Kleinanzeigen — privat verkaufen", "B) Elektro-Markt — kaufen", "C) Reparatur-Service"],
          answer: 0,
          explanation: "Sandra möchte verkaufen, nicht kaufen oder reparieren. Kleinanzeigen ist ideal dafür."
        },
        {
          context: "Kişi 3 — Felix:\nFelix ist Anfänger und möchte Gitarre lernen. Er sucht Einzelunterricht, maximal 30€ pro Stunde.\n\nA) Musikschule HarmoNie: Gitarren-Gruppenunterricht (8 Personen), 15€/Stunde.\nB) Gitarrenlehrer Max (professionell): Einzelunterricht, 25€/Stunde, alle Levels. Termine flexibel.\nC) Online-Gitarrenkurs (Video), 199€ Einmalzahlung, kein persönlicher Kontakt.",
          question: "Welche Anzeige passt zu Felix?",
          options: ["A) Gruppenunterricht 15€/Std", "B) Einzelunterricht 25€/Std", "C) Online-Kurs 199€"],
          answer: 1,
          explanation: "Felix sucht Einzelunterricht für max. 30€/Stunde. Anzeige B: 25€ Einzelunterricht für alle Levels."
        },
        {
          context: "Kişi 4 — Maria:\nMaria fährt für 2 Wochen in Urlaub und braucht jemanden, der auf ihre Katze aufpasst. Sie sucht eine Privatperson, keine Pension.\n\nA) Tierpension Pfötchen: Katzenbetreuung 20€/Tag. Professionell.\nB) Ich (Studentin, tierlieb) passe auf Ihr Tier auf — bei mir zu Hause oder bei Ihnen. Preis nach Absprache. Tel: 0176-...\nC) Tierarzt Dr. Sommer — Impfungen und Gesundheitscheck.",
          question: "Welche Anzeige passt zu Maria?",
          options: ["A) Tierpension — professionell", "B) Studentin — Privatbetreuung", "C) Tierarzt"],
          answer: 1,
          explanation: "Maria sucht eine Privatperson (keine Pension) → Anzeige B, die Studentin, ist ideal."
        },
        {
          context: "Kişi 5 — Lars:\nLars möchte ein Fahrrad kaufen. Es soll gebraucht und günstig sein, maximal 150€.\n\nA) Fahrrad-Shop CycleCity: Neue Fahrräder ab 350€. Top-Qualität!\nB) Mountainbike, 2 Jahre alt, guter Zustand. Nur 120€. Abholung in Berlin-Mitte. Tel: 0152-...\nC) E-Bike zu verkaufen, neuwertig, 900€ VB.",
          question: "Welche Anzeige passt zu Lars?",
          options: ["A) Neues Fahrrad ab 350€", "B) Gebrauchtes Fahrrad 120€", "C) E-Bike 900€"],
          answer: 1,
          explanation: "Lars möchte gebraucht und max. 150€. Anzeige B: gebrauchtes Mountainbike für 120€."
        }
      ]
    }
  },

  // ── Fasikül 12: A2 Lesen Teil 3 ──────────────────────────────────────────
  {
    id: 12,
    level: "A2",
    title: "A2 Lesen Teil 3: Zeitungsartikel",
    subtitle: "Gazete Makalesi ve Çoktan Seçmeli Sorular",
    description: "A2 Lesen Teil 3'te yaklaşık 200-250 kelimelik bir gazete veya dergi makalesi okursunuz. Makalenin ardından 5 çoktan seçmeli soru (A, B veya C) gelir. Cevap seçenekleri metinde birebir geçmeyebilir; paraphrase (yeniden ifade) kullanılır.",
    color: "#0ea5e9",
    icon: "🗞️",
    tips: [
      "Makaleyi okumadan önce soruları okuyun — ne arayacağınızı bilmek zamandan tasarruf sağlar.",
      "Cevap seçenekleri metindeki ifadelerin birebir kopyası değildir; eş anlamlı kelimeler ve yeniden ifadeler kullanılır.",
      "Çelişkili bilgi içeren yanıltıcı seçeneklere dikkat edin.",
      "Cevap her zaman metinden doğrulanabilir olmalıdır — kendi yorumunuzu katmayın.",
      "A2 makale konuları genellikle: iş dünyası, teknoloji, çevre, toplum, sağlık veya kültürdür."
    ],
    examples: [
      { de: "Artikel: Immer mehr Menschen arbeiten im Homeoffice.", tr: "Makale: Giderek daha fazla insan evden çalışıyor." },
      { de: "Frage: Was machen immer mehr Arbeitnehmer? A) Sie arbeiten im Büro. B) Sie arbeiten von zu Hause. → B", tr: "Soru: Çalışanlar ne yapıyor? → Evden çalışıyorlar. → B" }
    ],
    exercises: {
      type: "choice",
      passageTitle: "Artikel aus 'Deutsch aktuell': Homeoffice — Fluch oder Segen?",
      passage: "Seit der Corona-Pandemie hat sich die Arbeitswelt in Deutschland stark verändert. Immer mehr Unternehmen erlauben ihren Mitarbeitern, von zu Hause aus zu arbeiten — das sogenannte Homeoffice. Eine neue Studie zeigt: 42% der deutschen Arbeitnehmer arbeiten mindestens einmal pro Woche im Homeoffice.\n\nDie Vorteile sind klar: Man spart Zeit und Geld für den Weg zur Arbeit, kann flexibler arbeiten und verbringt mehr Zeit mit der Familie. Besonders junge Eltern schätzen diese Möglichkeit sehr.\n\nAber Homeoffice hat auch Nachteile. Viele Mitarbeiter fühlen sich zu Hause isoliert und vermissen den Kontakt zu Kollegen. Außerdem ist es für manche Menschen schwierig, Privatleben und Arbeit zu trennen. Manche arbeiten abends und am Wochenende weiter, was zu Stress führen kann.\n\nExperten empfehlen deshalb ein hybrides Modell: zwei oder drei Tage im Büro, der Rest zu Hause. So hat man die Vorteile beider Welten. Viele große Firmen wie BMW und SAP haben dieses Modell bereits eingeführt.",
      questions: [
        {
          question: "Was zeigt die neue Studie über Homeoffice in Deutschland?",
          options: [
            "A) Fast alle deutschen Arbeitnehmer arbeiten im Homeoffice.",
            "B) 42% der Arbeitnehmer nutzen Homeoffice mindestens einmal pro Woche.",
            "C) Homeoffice ist in Deutschland noch sehr selten."
          ],
          answer: 1,
          explanation: "Im Artikel steht: '42% der deutschen Arbeitnehmer arbeiten mindestens einmal pro Woche im Homeoffice.'"
        },
        {
          question: "Welche Personengruppe schätzt Homeoffice laut dem Artikel besonders?",
          options: [
            "A) Ältere Mitarbeiter über 60",
            "B) Chefs und Manager",
            "C) Junge Eltern"
          ],
          answer: 2,
          explanation: "Im Artikel steht: 'Besonders junge Eltern schätzen diese Möglichkeit sehr.'"
        },
        {
          question: "Was ist ein Nachteil des Homeoffice laut dem Artikel?",
          options: [
            "A) Man muss weniger arbeiten.",
            "B) Viele Mitarbeiter fühlen sich isoliert und vermissen Kollegen.",
            "C) Die Miete für das Büro zu Hause ist sehr teuer."
          ],
          answer: 1,
          explanation: "Im Artikel steht: 'Viele Mitarbeiter fühlen sich zu Hause isoliert und vermissen den Kontakt zu Kollegen.'"
        },
        {
          question: "Was empfehlen Experten?",
          options: [
            "A) Immer im Büro arbeiten.",
            "B) Ausschließlich von zu Hause arbeiten.",
            "C) Ein hybrides Modell mit Büro- und Heimarbeit."
          ],
          answer: 2,
          explanation: "Im Artikel steht: 'Experten empfehlen deshalb ein hybrides Modell: zwei oder drei Tage im Büro, der Rest zu Hause.'"
        },
        {
          question: "Welche Firmen haben das hybride Modell bereits eingeführt?",
          options: [
            "A) Apple und Google",
            "B) BMW und SAP",
            "C) Mercedes und Siemens"
          ],
          answer: 1,
          explanation: "Im Artikel steht: 'Viele große Firmen wie BMW und SAP haben dieses Modell bereits eingeführt.'"
        }
      ]
    }
  },

  // ── Fasikül 13: A2 Hören Teil 1 ──────────────────────────────────────────
  {
    id: 13,
    level: "A2",
    title: "A2 Hören Teil 1: Radiosendungen",
    subtitle: "Radyo Duyuruları — Richtig/Falsch",
    description: "A2 Hören Teil 1'de kısa radyo veya haber duyuruları dinlersiniz (yaklaşık 4 kayıt). Her kayıt için bir Richtig/Falsch sorusu cevaplanır. A2 duyuruları A1'e göre daha uzun ve daha karmaşık kelimeler içerir. Gerçek sınavda her kayıt iki kez çalınır.",
    color: "#f59e0b",
    icon: "📻",
    tips: [
      "Radyo metinlerinde konuşma hızı daha yüksektir — panik yapmayın, ne anlamadığınızı boş bırakın.",
      "Sayılar, tarihler, fiyatlar ve yüzdeler özellikle test edilen noktalardır.",
      "Mesajın tamamını anlamak gerekmez — sadece soruyla ilgili bilgiyi yakalayın.",
      "Negatif ifadelere (nicht, kein, nie, selten) çok dikkat edin.",
      "A2 Hören için gerçek ses pratiğine de ihtiyacınız var — Goethe Institut örnek sınavlarını dinleyin.",
      "Soru ifadesiyle metindeki bilgi birebir aynı olmayabilir; anlam eşdeğerliğine bakın."
    ],
    examples: [
      { de: "Radyo: 'Der neue Stadtpark kostet 2,5 Millionen Euro.'", tr: "Radyo: 'Yeni şehir parkı 2,5 milyon Euro'ya mal oluyor.'" },
      { de: "İddia: Der Stadtpark kostet mehr als 3 Millionen Euro. → FALSCH", tr: "İddia: Park 3 milyondan fazla. → YANLIŞ (2,5 milyon)" },
      { de: "Radyo: 'Ab Montag gilt die neue Busverbindung.'", tr: "Radyo: 'Pazartesiden itibaren yeni otobüs hattı geçerli.'" }
    ],
    exercises: {
      type: "richtigfalsch",
      intro: "Her metin, sınavda duyacağınız kısa bir radyo haberini veya duyurusunu temsil eder. Metni okuyun ve verilen ifadenin doğru (Richtig) mu yoksa yanlış (Falsch) mı olduğunu belirleyin.",
      questions: [
        {
          context: "📻 Lokalnachrichten Berlin:\n\"Die Stadt Berlin plant den Bau eines neuen Fahrradwegs entlang des Spreeufers. Der 12 Kilometer lange Weg soll bis Ende 2025 fertig sein und kostet insgesamt 3,8 Millionen Euro. Der Stadtrat hat das Projekt gestern mit 35 von 40 Stimmen genehmigt.\"",
          statement: "Das Fahrradweg-Projekt wurde vom Stadtrat abgelehnt.",
          answer: false,
          explanation: "Der Stadtrat hat das Projekt genehmigt (35 von 40 Stimmen) — nicht abgelehnt."
        },
        {
          context: "📻 Wetternachrichten:\n\"Für das Wochenende erwartet der Deutsche Wetterdienst in Bayern starke Regenfälle und Gewitter. Die Temperaturen fallen auf 12 bis 15 Grad. Autofahrer sollten besonders vorsichtig sein, da Überflutungen auf einigen Straßen möglich sind. Ab Montag wird es wieder sonnig und warm.\"",
          statement: "Am Wochenende wird es in Bayern sonnig und warm.",
          answer: false,
          explanation: "Am Wochenende: Regen und Gewitter. Sonnig wird es erst ab Montag."
        },
        {
          context: "📻 Wirtschaftsnachrichten:\n\"Laut einer neuen Studie des Wirtschaftsforschungsinstituts kaufen 68% der Deutschen regelmäßig online ein. Besonders beliebt sind Elektronik, Kleidung und Bücher. Im Vergleich zum Vorjahr ist die Zahl der Online-Käufer um 8 Prozent gestiegen.\"",
          statement: "Mehr als die Hälfte der Deutschen kauft regelmäßig online ein.",
          answer: true,
          explanation: "68% sind mehr als 50% (mehr als die Hälfte). Das ist korrekt."
        },
        {
          context: "📻 Kulturnachrichten:\n\"Das Stadtmuseum Frankfurt eröffnet morgen eine neue Ausstellung über die Geschichte der Stadt im 20. Jahrhundert. Die Ausstellung läuft bis zum 30. April und ist dienstags bis sonntags von 10 bis 18 Uhr geöffnet. Der Eintritt kostet 8 Euro, für Kinder unter 14 Jahren ist er kostenlos.\"",
          statement: "Kinder unter 14 Jahren müssen keinen Eintritt bezahlen.",
          answer: true,
          explanation: "Im Text steht: 'für Kinder unter 14 Jahren ist er kostenlos' — das stimmt."
        },
        {
          context: "📻 Verkehrsnachrichten:\n\"Wegen Bauarbeiten ist die Autobahn A9 zwischen München und Nürnberg ab morgen früh gesperrt. Die Sperrung dauert voraussichtlich drei Wochen. Autofahrer werden gebeten, die Umleitungsstrecke über die B9 zu nutzen. Mit Staus und Verzögerungen ist zu rechnen.\"",
          statement: "Die Autobahn A9 ist für einen Monat gesperrt.",
          answer: false,
          explanation: "Die Sperrung dauert 'voraussichtlich drei Wochen' — nicht einen Monat."
        }
      ]
    }
  },

  // ── Fasikül 14: A2 Hören Teil 2 & 3 ─────────────────────────────────────
  {
    id: 14,
    level: "A2",
    title: "A2 Hören Teil 2 & 3: Gespräche & Durchsagen",
    subtitle: "Uzun Diyaloglar ve Form Doldurma",
    description: "A2 Hören Teil 2'de 3 uzun diyalog dinler ve her biri için çoktan seçmeli sorular cevaplanır. Teil 3'te ise bir radyo yayını veya duyuru dinler ve form ya da notlar doldurursunuz. Bu bölüm en zor Hören görevidir — dikkatli not alma becerisi şarttır.",
    color: "#d946ef",
    icon: "🗣️",
    tips: [
      "Teil 2'de diyalog başlamadan önce soruları okuyun — ne arayacağınızı önceden bilin.",
      "Teil 3'te form doldururken sayısal bilgileri (saat, tarih, fiyat, telefon numarası) doğru yazmaya özen gösterin.",
      "Konuşmacıların anlaşmazlıklarına ve fikir değişikliklerine özellikle dikkat edin.",
      "Kaydı ilk kez duyduğunuzda genel anlamı yakalayın, ikinci kez dinlerken detayları kontrol edin.",
      "Dikkat dağıtıcı yanlış bilgiler sıkça kullanılır — 'Ich dachte, es ist um 3 Uhr, aber nein, um 4 Uhr' gibi."
    ],
    examples: [
      { de: "Dialog: A: Treffen wir uns um 3? B: Nein, ich kann erst um 5.", tr: "A: Saat 3'te buluşalım mı? B: Hayır, saat 5'ten önce gelemedim." },
      { de: "Frage: Wann treffen sie sich? A) 3 Uhr B) 5 Uhr → B", tr: "Soru: Ne zaman buluşuyorlar? → Saat 5. → B" },
      { de: "Durchsage: Kurs 'Deutsch für Anfänger', Beginn: 5. Oktober, Uhrzeit: 18:30 Uhr.", tr: "Duyuru: 'Yeni Başlayanlar İçin Almanca' kursu, Başlangıç: 5 Ekim, Saat: 18:30." }
    ],
    exercises: {
      type: "choice",
      intro: "Her diyalog veya duyuruyu dikkatlice okuyun. Gerçek sınavda bunlar ses kaydı olarak dinlenir.",
      questions: [
        {
          context: "Dialog 1 — Am Telefon:\nKlaus: Hallo Sarah, ich rufe wegen des Geburtstags von Mama an. Wollen wir am Samstag oder am Sonntag feiern?\nSarah: Samstag wäre besser für mich. Sonntag habe ich schon etwas vor.\nKlaus: Okay, Samstag dann. Soll ich ein Restaurant reservieren oder kochst du?\nSarah: Ich koche lieber. Das wird persönlicher. Aber du könntest den Kuchen kaufen!\nKlaus: Sehr gerne! Um wie viel Uhr denn?\nSarah: So um 18 Uhr wäre gut.",
          question: "Wann feiern sie den Geburtstag?",
          options: ["A) Freitag", "B) Samstag um 18 Uhr", "C) Sonntag"],
          answer: 1,
          explanation: "Sarah sagt: 'Samstag wäre besser' und Klaus bestätigt. Uhrzeit: 'Um 18 Uhr wäre gut.'"
        },
        {
          context: "Dialog 1 (Fortsetzung):\n(gleiche Konversation wie oben)",
          question: "Wer kauft den Kuchen?",
          options: ["A) Sarah kauft den Kuchen.", "B) Klaus kauft den Kuchen.", "C) Sie bestellen eine Torte beim Bäcker."],
          answer: 1,
          explanation: "Sarah sagt zu Klaus: 'du könntest den Kuchen kaufen!' Klaus antwortet: 'Sehr gerne!'"
        },
        {
          context: "Dialog 2 — Im Reisebüro:\nBerater: Guten Tag! Wie kann ich Ihnen helfen?\nKundin: Ich suche einen Urlaub für zwei Personen im Juli.\nBerater: Wohin möchten Sie reisen? Strand oder Städtereise?\nKundin: Lieber Strand. Wir suchen etwas Ruhiges, nicht zu teuer. Maximal 1.500 Euro für beide.\nBerater: Ich hätte ein Angebot auf Kreta: 14 Tage Halbpension für zwei Personen, 1.280 Euro.\nKundin: Oh, das klingt interessant! Hat das Hotel einen Pool?\nBerater: Ja, einen großen Außenpool direkt am Meer.",
          question: "Was ist das maximale Budget der Kundin?",
          options: ["A) 1.200 Euro", "B) 1.500 Euro", "C) 2.000 Euro"],
          answer: 1,
          explanation: "Die Kundin sagt: 'Maximal 1.500 Euro für beide.'"
        },
        {
          context: "Dialog 3 — Am Bahnhof:\nReisender: Entschuldigung, wann fährt der nächste Zug nach Hamburg?\nBeamter: Der nächste fährt um 14:22 Uhr von Gleis 7. Aber es gibt auch einen um 15:10 Uhr, der ist direkter.\nReisender: Gibt es einen Unterschied bei der Reisezeit?\nBeamter: Der 14:22-Zug hat einen Umstieg in Hannover und braucht 2 Stunden 40 Minuten. Der 15:10 Uhr Zug ist direkt und nur 1 Stunde 55 Minuten.\nReisender: Dann nehme ich den um 15:10 Uhr.",
          question: "Welchen Zug nimmt der Reisende?",
          options: ["A) Den Zug um 14:22 Uhr mit Umstieg", "B) Den Direktzug um 15:10 Uhr", "C) Er nimmt den Bus."],
          answer: 1,
          explanation: "Der Reisende sagt: 'Dann nehme ich den um 15:10 Uhr.' (der Direktzug)."
        },
        {
          context: "📻 Teil 3 — Radiosendung (Kursanmeldung):\n\"Und jetzt ein Hinweis für alle Interessierten: Die Volkshochschule München startet am 7. September einen neuen Kurs 'Kochen für Anfänger'. Der Kurs findet jeden Dienstagabend von 18 bis 20 Uhr statt und dauert 10 Wochen. Die Teilnahmegebühr beträgt 95 Euro inklusive Zutaten. Anmeldungen sind online unter vhs-muenchen.de oder telefonisch unter 089-4800 möglich. Anmeldeschluss ist der 1. September.\"",
          question: "Wann beginnt der Kochkurs?",
          options: ["A) Am 1. September", "B) Am 7. September", "C) Jeden Dienstag im Oktober"],
          answer: 1,
          explanation: "Im Radio: 'startet am 7. September'. Der 1. September ist der Anmeldeschluss."
        }
      ]
    }
  },

  // ── Fasikül 15: A2 Schreiben Teil 1 ──────────────────────────────────────
  {
    id: 15,
    level: "A2",
    title: "A2 Schreiben Teil 1: Formular aus Text",
    subtitle: "Metinden Bilgi Çıkararak Form Doldurma",
    description: "A2 Schreiben Teil 1'de yaklaşık 80-100 kelimelik bir metin (e-posta veya mektup) okursunuz. Metinden 5 temel bilgiyi çıkararak bir forma yazmanız gerekir. Bilgiyi tam ve doğru bir şekilde aktarmak önemlidir.",
    color: "#10b981",
    icon: "📋",
    tips: [
      "Önce formda istenen bilgileri okuyun, sonra metinde bu bilgileri arayın.",
      "Tarihleri doğru formatta yazın: '15.08.2024' veya '15. August 2024' gibi.",
      "İsimleri, yerleri ve kurumları büyük harfle yazmayı unutmayın.",
      "Formda belirli bir format isteniyorsa (örneğin sadece rakam) o formata uyun.",
      "Metindeki bilgiyi sadece ilgili kısım için kopyalayın — fazla bilgi yazmak puan kesmez ama zaman kaybettirir.",
      "Eğer metinde bir bilgi açıkça belirtilmemişse, boş bırakın veya 'nicht angegeben' yazın."
    ],
    examples: [
      { de: "Metin: 'Ich, Klaus Berger, möchte am Kurs teilnehmen.' Form: Nachname: ___", tr: "Metin: 'Ben Klaus Berger, kursa katılmak istiyorum.' Form: Soyadı: Berger" },
      { de: "Metin: 'Der Kurs beginnt am 15. Oktober.' Form: Kursbeginn: ___", tr: "Kurs başlangıcı: 15. Oktober / 15.10." },
      { de: "Metin: 'Ich zahle mit Kreditkarte.' Form: Zahlungsart: ___", tr: "Ödeme şekli: Kreditkarte" }
    ],
    exercises: {
      type: "fill",
      questions: [
        {
          sentence: "Metin: 'Ich heiße Ayşe Kaya und bin 31 Jahre alt. Ich komme aus Istanbul.'\n\nForm — Vorname: ___",
          blank: "Ayşe",
          hint: "Metin'deki ilk isim",
          translation: "Ad: Ayşe"
        },
        {
          sentence: "Metin: (aynı metin)\n\nForm — Nachname: ___",
          blank: "Kaya",
          hint: "Metin'deki soyad",
          translation: "Soyad: Kaya"
        },
        {
          sentence: "Metin: 'Der Intensivkurs Deutsch A2 beginnt am 3. März und endet am 28. März.'\n\nForm — Kursbeginn: ___",
          blank: "3. März",
          hint: "Kursun başlangıç tarihi",
          translation: "Kurs başlangıcı: 3. März"
        },
        {
          sentence: "Metin: 'Ich möchte die Kursgebühr von 250 Euro per Überweisung bezahlen.'\n\nForm — Zahlungsart: ___",
          blank: "Überweisung",
          hint: "Ödeme yöntemi",
          translation: "Ödeme şekli: Banka havalesi"
        },
        {
          sentence: "Metin: 'Meine E-Mail-Adresse ist ayse.kaya@gmail.com und meine Handynummer ist 0176-445566.'\n\nForm — E-Mail: ___",
          blank: "ayse.kaya@gmail.com",
          hint: "E-posta adresi",
          translation: "E-posta: ayse.kaya@gmail.com"
        },
        {
          sentence: "Metin: 'Ich habe bereits einen A1-Kurs bei der VHS Hamburg abgeschlossen.'\n\nForm — Vorkenntnisse (Önceki Bilgi): ___",
          blank: "A1",
          hint: "Daha önce hangi seviyeyi tamamladı?",
          translation: "Önceki bilgi: A1 (VHS Hamburg)"
        },
        {
          sentence: "Metin: 'Ich bin verheiratet und habe zwei Kinder.'\n\nForm — Familienstand: ___",
          blank: "verheiratet",
          hint: "Medeni hal",
          translation: "Medeni hal: evli"
        },
        {
          sentence: "Metin: 'Ich arbeite als Krankenpfleger im Krankenhaus St. Maria in Köln.'\n\nForm — Beruf: ___",
          blank: "Krankenpfleger",
          hint: "Meslek (Erkek hemşire)",
          translation: "Meslek: Krankenpfleger (Erkek hemşire)"
        }
      ]
    }
  },

  // ── Fasikül 16: A2 Schreiben Teil 2 ──────────────────────────────────────
  {
    id: 16,
    level: "A2",
    title: "A2 Schreiben Teil 2: Halbformelle Nachricht",
    subtitle: "Yarı Resmi Mesaj Yazma (~80 Kelime)",
    description: "A2 Schreiben Teil 2'de bir e-posta veya mesaja yanıt yazmanız istenir (yaklaşık 80 kelime). Size 3 nokta (Punkte) verilir ve her birine değinmeniz gerekir. A1'den farklı olarak dil daha karmaşık, kelime beklentisi daha yüksek ve mesaj daha uzundur.",
    color: "#3b82f6",
    icon: "✉️",
    tips: [
      "Her 3 noktaya mutlaka değinin — bir puan bile atlamak önemli puan kaybına yol açar.",
      "Selamlama ve vedayı unutmayın: 'Liebe/r...,' ile başlayın, 'Viele Grüße,' ile bitirin.",
      "A2'de daha zengin kelime ve yapılar kullanın: 'weil' (çünkü), 'dass' (ki), 'wenn' (eğer) bağlaçlarını kullanın.",
      "Yaklaşık 80 kelime hedefleyin — 60'ın altı puan kesmez ama 100'ün üstü zaman kaybıdır.",
      "Yazım ve gramer hatalarını kontrol etmek için en az 2 dakika ayırın.",
      "Tarihleri, saatleri ve isimleri doğru yazmaya özen gösterin."
    ],
    examples: [
      { de: "Ich komme gerne zu deiner Party, weil ich Samstag frei habe.", tr: "Partine memnuniyetle gelirim, çünkü Cumartesi günüm boş." },
      { de: "Leider kann ich nicht kommen, weil ich krank bin.", tr: "Maalesef gelemem, çünkü hastayım." },
      { de: "Ich bringe gerne etwas zu essen mit. Was soll ich mitbringen?", tr: "Memnuniyetle bir şeyler getiririm. Ne getireyim?" }
    ],
    exercises: {
      type: "writing",
      scenario: "Ihr Freund / Ihre Freundin Mert hat Ihnen eine E-Mail geschickt. Er/Sie feiert am Samstag, den 14. Juni, seinen/ihren Geburtstag und lädt Sie ein.",
      receivedMessage: "Liebe/r ___,\n\nwie geht es dir? Ich möchte dich zu meiner Geburtstagsparty einladen! Die Party ist am Samstag, den 14. Juni, ab 19 Uhr bei mir zu Hause (Hauptstraße 7, 50667 Köln). Es gibt Essen und Musik!\n\nKannst du kommen? Und kannst du vielleicht etwas mitbringen?\n\nFreue mich auf dich!\nMert",
      task: "Schreiben Sie Mert eine Antwort (ca. 80 Wörter). Schreiben Sie zu diesen drei Punkten:",
      points: [
        "1. Freude über die Einladung ausdrücken und zusagen ODER absagen + Grund nennen",
        "2. Eine Frage zur Party stellen (z.B. Kleiderordnung, andere Gäste, Geschenk)",
        "3. Etwas anbieten, das Sie mitbringen möchten"
      ],
      wordCount: 80,
      modelAnswer: "Lieber Mert,\n\nvielen Dank für deine Einladung! Ich freue mich sehr und komme gerne am 14. Juni zu deiner Party.\n\nIch habe eine Frage: Soll ich etwas Bestimmtes anziehen? Gibt es ein Motto für die Party?\n\nIch bringe gerne einen selbstgemachten Kuchen mit — Schokolade oder Erdbeere, was magst du lieber?\n\nBis Samstag!\nViele Grüße,\n[Dein Name]"
    }
  },

  // ── Fasikül 17: A2 Sprechen Teil 1 ───────────────────────────────────────
  {
    id: 17,
    level: "A2",
    title: "A2 Sprechen Teil 1: Thema vorstellen",
    subtitle: "Konu Kartıyla Sunum Yapma",
    description: "A2 Sprechen Teil 1'de size bir konu kartı verilir. Kartın üzerinde bir konu ve birkaç yardımcı soru bulunur. 1 dakika hazırlanmanız, ardından yaklaşık 2 dakika konuşmanız beklenir. Sınav ortağınız (veya gözetmen) dinler ve soru sorabilir.",
    color: "#ef4444",
    icon: "🎤",
    tips: [
      "Hazırlık dakikasında anahtar kelimeleri not edin — tam cümleler değil, sadece anahtar noktalar.",
      "Konuşmaya güçlü bir başlangıç yapın: 'Mein Thema heute ist...' veya 'Ich möchte über... sprechen.'",
      "Kişisel deneyimlerinizi ve görüşlerinizi paylaşın: 'Ich persönlich finde...', 'In meiner Erfahrung...'",
      "Tempo'nuzu yavaş tutun — hızlı ve hatalı konuşmak yerine yavaş ve doğru konuşun.",
      "Soru gelirse panik yapmayın: 'Das ist eine gute Frage...' diyerek zaman kazanabilirsiniz.",
      "Yaklaşık 2 dakika konuşun — çok kısa veya çok uzun konuşmaktan kaçının."
    ],
    examples: [
      { de: "Mein Thema heute ist Sport und Gesundheit.", tr: "Bugünkü konum spor ve sağlık." },
      { de: "Ich finde Sport sehr wichtig, weil er gut für die Gesundheit ist.", tr: "Sporun çok önemli olduğunu düşünüyorum çünkü sağlık için iyidir." },
      { de: "In meiner Freizeit gehe ich dreimal pro Woche ins Fitnessstudio.", tr: "Boş zamanlarımda haftada üç kez spor salonuna gidiyorum." }
    ],
    exercises: {
      type: "speaking",
      parts: [
        {
          title: "Teil 1a: Konu Kartı — Sport und Gesundheit",
          description: "Aşağıdaki konu kartını inceleyin. 1 dakika hazırlanın, ardından yaklaşık 2 dakika konuşun. Gözetmen dinleyecek ve ek sorular sorabilir.",
          card: "Thema: Sport und Gesundheit\n\n→ Was ist Ihr Lieblingssport / Ihre Lieblingsaktivität?\n→ Wie oft treiben Sie Sport?\n→ Warum ist Sport wichtig (oder nicht wichtig) für Sie?\n→ Was machen Sie, wenn Sie krank sind?\n→ Haben Sie einen gesunden Lebensstil?",
          timeSeconds: 120,
          keyPhrases: [
            "Mein Thema ist...",
            "Ich finde ... wichtig/interessant, weil...",
            "In meiner Freizeit...",
            "Ich treibe ... mal pro Woche Sport.",
            "Meiner Meinung nach..."
          ],
          sampleAnswer: "Mein Thema heute ist Sport und Gesundheit.\n\nIch mache sehr gerne Sport. Mein Lieblingssport ist Schwimmen. Ich schwimme zweimal pro Woche, meistens am Dienstagabend und am Samstag. Das hilft mir, Stress abzubauen und fit zu bleiben.\n\nIch finde Sport sehr wichtig, weil er nicht nur körperlich, sondern auch mental gut für uns ist. Wenn ich Sport mache, fühle ich mich glücklicher und energiereicher.\n\nWenn ich krank bin, bleibe ich zu Hause und ruhe mich aus. Ich trinke viel Tee und schlafe viel. Sport mache ich dann natürlich nicht.\n\nInsgesamt versuche ich, einen gesunden Lebensstil zu führen: Sport, gesundes Essen und genug Schlaf sind für mich sehr wichtig."
        },
        {
          title: "Teil 1b: Prüfer-Fragen — Gesprächsteil",
          description: "Nach Ihrer Präsentation stellt der Prüfer Folgefragen. Üben Sie Antworten auf typische Fragen. Lesen Sie die Frage, denken Sie 15 Sekunden nach, dann antworten Sie (ca. 30-60 Sekunden).",
          card: "Prüfer-Frage:\n'Sie haben über Sport gesprochen. Was denken Sie: Ist es besser, Sport im Verein oder alleine zu machen? Warum?'\n\n(Weitere mögliche Fragen:)\n→ Haben Sie schon mal eine Sportverletzung gehabt?\n→ Welchen Sport würden Sie gerne noch lernen?\n→ Ist Sport in Ihrem Land sehr populär?",
          timeSeconds: 60,
          keyPhrases: [
            "Ich denke, dass...",
            "Einerseits... Andererseits...",
            "Das hängt davon ab...",
            "Meiner Meinung nach ist es besser, wenn...",
            "Im Vergleich zu..."
          ],
          sampleAnswer: "Das ist eine interessante Frage!\n\nIch persönlich finde es besser, Sport im Verein zu machen. Erstens hat man dort Motivation durch andere Menschen. Man trainiert regelmäßiger, weil man Termine hat. Außerdem ist Sport mit anderen Menschen mehr Spaß.\n\nAndererseits ist Sport alleine flexibler. Man kann jederzeit trainieren, ohne auf andere warten zu müssen. Ich gehe zum Beispiel manchmal alleine joggen, wenn ich spontan Sport machen möchte.\n\nAlso: beides hat Vorteile. Am besten ist eine Kombination!"
        }
      ]
    }
  },

  // ── Fasikül 18: A2 Sprechen Teil 2 ───────────────────────────────────────
  {
    id: 18,
    level: "A2",
    title: "A2 Sprechen Teil 2: Gemeinsam planen",
    subtitle: "Ortak Plan Yapma ve Müzakere",
    description: "A2 Sprechen Teil 2'de sınav partneriyle (veya gözetmenle) birlikte bir etkinlik planlamanız gerekir. Her ikinize de farklı fikirler veya kısıtlamalar içeren kartlar verilir. Bir konuya karar vermeniz, öneride bulunmanız ve uzlaşmanız beklenir. Bu bölüm yaklaşık 2-3 dakika sürer.",
    color: "#7c3aed",
    icon: "🤝",
    tips: [
      "Önce kendi önerinizi yapın: 'Wie wäre es mit...?' veya 'Ich schlage vor, dass wir...'",
      "Partnerinizin önerisine her zaman tepki verin: 'Das ist eine gute Idee!' veya 'Hmm, aber...'",
      "Uzlaşmak için 'Einverstanden!' veya 'Abgemacht!' kullanın.",
      "Alternatif önermek için 'Wie wäre es stattdessen mit...?' veya 'Was denkst du über...?' deyin.",
      "Saat, yer ve ulaşım gibi pratik detayları konuşmayı unutmayın.",
      "Sessizlik sınavda olumsuz değerlendirilebilir — her zaman bir şeyler söylemeye çalışın."
    ],
    examples: [
      { de: "Wie wäre es, wenn wir uns am Samstag um 14 Uhr im Park treffen?", tr: "Cumartesi saat 14'te parkta buluşsak nasıl olur?" },
      { de: "Das klingt gut! Aber ich kann erst um 15 Uhr.", tr: "Kulağa güzel geliyor! Ama ben ancak saat 15'te gelebilirim." },
      { de: "Einverstanden! Dann treffen wir uns um 15 Uhr vor dem Haupteingang.", tr: "Tamam! O zaman saat 15'te ana girişin önünde buluşalım." }
    ],
    exercises: {
      type: "speaking",
      parts: [
        {
          title: "Teil 2a: Gemeinsam planen — Geburtstagsgeschenk",
          description: "Sie und Ihr Partner/Ihre Partnerin möchten gemeinsam ein Geburtstagsgeschenk für Ihren Kollegen Tom kaufen. Besprechen Sie, was Sie kaufen möchten und wie Sie das organisieren.",
          card: "Aufgabe: Planen Sie zusammen ein Geburtstagsgeschenk für Ihren Kollegen Tom.\n\nIhre Situation:\n→ Budget: maximal 50 Euro (zusammen)\n→ Tom interessiert sich für: Kochen, Musik und Sport\n→ Sie haben Zeit am Samstag zum Einkaufen\n→ Tom hat am nächsten Freitag Geburtstag\n\nDiskutieren Sie:\n1. Was kaufen wir? (Ideen sammeln)\n2. Wo kaufen wir es?\n3. Wann gehen wir einkaufen?",
          timeSeconds: 180,
          keyPhrases: [
            "Wie wäre es mit...?",
            "Was denkst du über...?",
            "Das ist eine gute Idee!",
            "Ich schlage vor, dass...",
            "Einverstanden!",
            "Abgemacht!",
            "Das gefällt mir (nicht), weil...",
            "Wann hast du Zeit?"
          ],
          sampleAnswer: "Person A: Also, was schenken wir Tom? Er mag ja Kochen, Musik und Sport.\n\nPerson B: Wie wäre es mit einem Kochbuch? Das würde sicher passen.\n\nPerson A: Gute Idee! Oder was denkst du über ein Konzertticket? Er hört ja gerne Musik.\n\nPerson B: Hmm, Tickets können teuer sein. Wir haben nur 50 Euro zusammen.\n\nPerson A: Stimmt. Dann vielleicht ein Kochbuch plus eine kleine Flasche gutem Olivenöl? Das wäre zusammen ungefähr 40 Euro.\n\nPerson B: Das klingt perfekt! Wo kaufen wir es — im Buchhandel oder online?\n\nPerson A: Ich schlage vor, am Samstag zusammen in die Stadt zu fahren. So können wir es selbst aussuchen.\n\nPerson B: Einverstanden! Um wie viel Uhr?\n\nPerson A: Um 11 Uhr, vor dem Kaufhaus?\n\nPerson B: Abgemacht!"
        },
        {
          title: "Teil 2b: Ausflug planen",
          description: "Sie möchten mit Ihrem Partner / Ihrer Partnerin einen Tagesausflug am Wochenende machen. Einigen Sie sich auf ein Ziel, eine Uhrzeit und das Transportmittel.",
          card: "Aufgabe: Planen Sie einen Tagesausflug am Wochenende.\n\nMögliche Ziele:\n→ A) Stadtmuseum (Eintritt: 8€, mit Führung 12€)\n→ B) Schloss Neuschwanstein (2 Stunden mit Zug, 30€ Eintritt)\n→ C) Wanderung im Wald (kostenlos, braucht gutes Wetter)\n\nWichtige Punkte:\n• Wann treffen wir uns und wo?\n• Wie fahren wir?\n• Was machen wir dort?\n• Was nehmen wir mit?",
          timeSeconds: 180,
          keyPhrases: [
            "Ich würde lieber... weil...",
            "Wie wäre es, wenn wir... nehmen?",
            "Das ist mir zu teuer / zu weit.",
            "Einverstanden! Dann...",
            "Sollen wir... mitnehmen?",
            "Treffen wir uns um ... Uhr vor ..."
          ],
          sampleAnswer: "Person A: Also, wohin fahren wir am Wochenende? Ich habe drei Ideen: Museum, Schloss oder Wanderung.\n\nPerson B: Das Schloss klingt schön, aber es ist weit und teuer. 30 Euro Eintritt plus Zug...\n\nPerson A: Stimmt. Wie wäre es mit dem Museum? 8 Euro Eintritt ist günstig.\n\nPerson B: Gute Idee! Und das Wetter am Wochenende ist nicht so gut — Museum ist also besser als Wanderung.\n\nPerson A: Einverstanden! Um wie viel Uhr treffen wir uns?\n\nPerson B: Um 10 Uhr vor dem Museum? Dann haben wir viel Zeit.\n\nPerson A: Super! Und wir fahren mit der U-Bahn, oder?\n\nPerson B: Ja, das ist am einfachsten. Abgemacht! Ich freue mich schon!"
        }
      ]
    }
  }
];
