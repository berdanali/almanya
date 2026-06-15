// src/data/goethe.js

export const goetheFascicles = [
  {
    id: 1,
    title: "Sprechen Teil 1: Sich vorstellen",
    subtitle: "Kendini Tanıtma, Harf Kodlama ve Sayılar",
    description: "Goethe A1 sınavının konuşma bölümünün ilk aşamasında gözetmenler sizden kendinizi tanıtmanızı ister. Size üzerinde Name, Alter, Land, Wohnort, Sprachen ve Beruf yazan bir kağıt verirler. Ayrıca adınızı kodlamanız (buchstabieren) ve bir telefon numarası veya posta kodu okumanız istenir.",
    color: "#f59e0b",
    icon: "🗣️",
    tips: [
      "Sınavda ezbere konuşmak yerine doğal olmaya çalışın, ancak bu temel cümleleri su gibi bilmelisiniz.",
      "Adınızı kodlarken Alman alfabesindeki özel harflere dikkat edin: Ä (A-Umlaut), Ö (O-Umlaut), Ü (U-Umlaut), ß (Eszett).",
      "Sayıları okurken 21, 35 gibi sayıların 'einundzwanzig' (bir ve yirmi) şeklinde tersten okunduğunu unutmayın.",
      "Mesleğinizi söylerken 'Ich bin Arzt von Beruf' veya 'Ich arbeite als Arzt' kalıplarını kullanın.",
      "Dil seviyenizi söylerken 'Ich spreche Türkisch als Muttersprache und ein bisschen Deutsch' demek gözetmenlerin hoşuna gider.",
      "Eğer gözetmenin sorduğu soruyu anlamazsanız 'Wie bitte?' veya 'Können Sie das bitte wiederholen?' demekten çekinmeyin, bu eksi puan getirmez.",
      "Hobilerinizi de sorabilirler, 'Meine Hobbys sind Lesen und Schwimmen' diyerek hazırlıklı olun."
    ],
    examples: [
      { de: "Ich heiße Ali Yılmaz. / Mein Name ist Ali Yılmaz.", tr: "Benim adım Ali Yılmaz." },
      { de: "Können Sie das bitte buchstabieren? - A-L-I, Y-I-L-M-A-Z.", tr: "Bunu heceleyebilir misiniz lütfen? - A-L-I..." },
      { de: "Ich bin 28 Jahre alt.", tr: "Ben 28 yaşındayım." },
      { de: "Ich komme aus der Türkei.", tr: "Türkiye'den geliyorum." },
      { de: "Ich lebe/wohne in Istanbul.", tr: "İstanbul'da yaşıyorum/ikamet ediyorum." },
      { de: "Ich spreche Türkisch, Englisch und ein bisschen Deutsch.", tr: "Türkçe, İngilizce ve biraz Almanca konuşuyorum." },
      { de: "Ich bin Ingenieur von Beruf. / Ich bin Lehrerin.", tr: "Meslek olarak mühendisim. / Ben öğretmenim (kadın)." },
      { de: "Meine Handynummer ist: null - eins - sieben - sechs...", tr: "Cep telefonu numaram: 0 - 1 - 7 - 6..." },
      { de: "Wie ist Ihre Postleitzahl? - Das ist 34000.", tr: "Posta kodunuz nedir? - 34000." },
      { de: "Was sind Ihre Hobbys? - Ich spiele gern Fußball.", tr: "Hobileriniz nelerdir? - Futbol oynamayı severim." }
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
        { sentence: "Wie ist Ihre ___? - Null eins fünf zwei...", blank: "Telefonnummer", hint: "Telefon numarası", translation: "Telefon numaranız nedir?" },
        { sentence: "Ich bin ledig und habe ___ Kinder.", blank: "keine", hint: "Hiç (çoğul isimden önce)", translation: "Bekarım ve hiç çocuğum yok." }
      ]
    }
  },
  {
    id: 2,
    title: "Schreiben Teil 1: Formular ausfüllen",
    subtitle: "Kişisel Bilgilerle Form Doldurma",
    description: "Schreiben bölümünün ilk kısmında, size kısa bir okuma metni (genellikle bir tatil rezervasyonu, kurs kaydı veya banka işlemi yapan bir kişi hakkında) verilir. Metnin altında 5 boşluktan oluşan bir form bulunur. Metindeki bilgileri bularak forma doğru şekilde yazmanız gerekir.",
    color: "#3b82f6",
    icon: "📝",
    tips: [
      "Formda istenen bilgilerin Almanca karşılıklarını ezberleyin: Vorname (Ad), Familienname/Nachname (Soyadı), Geburtsort (Doğum yeri), Geburtsdatum (Doğum tarihi), Wohnort (Yaşadığı yer), PLZ / Postleitzahl (Posta kodu).",
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
      { de: "Reiseziel: München", tr: "Seyahat noktası/hedefi: Münih" },
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
    title: "Schreiben Teil 2: Kurze E-Mail schreiben",
    subtitle: "Mektup / E-Posta Yazma",
    description: "Sınavda sizden kısa bir mesaj, e-posta veya mektup yazmanız istenir (yaklaşık 30 kelime). Size 3 farklı nokta (Punkte) verilir. E-postanızda mutlaka bu 3 noktaya da değinmek zorundasınız. Resmi (Sie) veya gayriresmi (du) durumlara dikkat edilmelidir.",
    color: "#10b981",
    icon: "✉️",
    tips: [
      "E-postanın kime yazıldığına çok dikkat edin. Arkadaşınıza yazıyorsanız 'Lieber Tom / Liebe Maria' diye başlayın.",
      "Kurum, otel veya tanımadığınız birine yazıyorsanız 'Sehr geehrte Damen und Herren' veya 'Sehr geehrter Herr...' / 'Sehr geehrte Frau...' diye başlayın.",
      "Kurum mektuplarında kapanış daima 'Mit freundlichen Grüßen' (Saygılarımla) olmalıdır. Kesinlikle virgül koymayın!",
      "Arkadaşlara yazarken kapanış 'Viele Grüße' veya 'Herzliche Grüße' olmalıdır.",
      "İstenilen 3 maddenin her biri için en az 1 veya 2 basit cümle kurun. Karmaşık cümleler kurup hata yapmaktan kaçının.",
      "Neden gidemediğinizi açıklamak için 'Es tut mir leid, aber...' kalıbı hayat kurtarır.",
      "Soru sormanız istenirse 'Können Sie mir bitte helfen?' veya 'Wann haben Sie Zeit?' gibi hazır soru kalıplarını kullanın."
    ],
    examples: [
      { de: "Sehr geehrte Damen und Herren,", tr: "Sayın yetkili, (Kişinin adı bilinmiyorsa kuruma yazılırken)" },
      { de: "Liebe Sarah, / Lieber Thomas,", tr: "Sevgili Sarah (kadın) / Sevgili Thomas (erkek)," },
      { de: "Ich habe ein Problem. Mein Computer ist kaputt.", tr: "Bir problemim var. Bilgisayarım bozuk." },
      { de: "Es tut mir leid, aber ich bin krank.", tr: "Üzgünüm ama hastayım. (Randevu iptali için ideal)" },
      { de: "Ich kann leider nicht kommen.", tr: "Maalesef gelemem." },
      { de: "Haben Sie am Freitag um 15 Uhr Zeit?", tr: "Cuma günü saat 15:00'te zamanınız var mı?" },
      { de: "Können wir uns am Samstag treffen?", tr: "Cumartesi günü buluşabilir miyiz?" },
      { de: "Ich komme am Bahnhof um 10 Uhr an.", tr: "Tren istasyonuna saat 10'da varıyorum." },
      { de: "Mit freundlichen Grüßen (İmza)", tr: "Saygılarımla (Resmi kapanış)" },
      { de: "Viele Grüße (İmza)", tr: "Selamlar (Arkadaş kapanışı)" }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Arkadaşına e-posta başlangıcı: ___ Maria,", blank: "Liebe", hint: "Dişil isim için sevgili", translation: "Sevgili Maria," },
        { sentence: "Erkek arkadaşına e-posta başlangıcı: ___ Tom,", blank: "Lieber", hint: "Eril isim için sevgili", translation: "Sevgili Tom," },
        { sentence: "Resmi başlangıç (Erkek): Sehr ___ Herr Müller,", blank: "geehrter", hint: "Sayın (Eril)", translation: "Sayın Bay Müller," },
        { sentence: "Özür dileme: Es tut mir ___, aber ich komme später.", blank: "leid", hint: "üzgünüm", translation: "Üzgünüm ama daha geç geleceğim." },
        { sentence: "Gelemeyeceğini bildirme: Ich ___ leider nicht kommen.", blank: "kann", hint: "können fiilinin Ich çekimi", translation: "Maalesef gelemem." },
        { sentence: "Randevu sorma: ___ wir uns am Wochenende treffen?", blank: "Können", hint: "Mümkün olmak fiili (Biz çekimi)", translation: "Hafta sonu buluşabilir miyiz?" },
        { sentence: "Bilgi verme: Der Zug kommt um 10 Uhr ___.", blank: "an", hint: "ankommen (varmak) ayrılabilen fiilinin eki", translation: "Tren saat 10'da varıyor." },
        { sentence: "Soru sorma: ___ hast du Zeit?", blank: "Wann", hint: "Ne zaman", translation: "Ne zaman zamanın var?" },
        { sentence: "Resmi kapanış: Mit freundlichen ___", blank: "Grüßen", hint: "Selamlar", translation: "Saygılarımla" },
        { sentence: "Arkadaşa kapanış: ___ Grüße", blank: "Viele", hint: "Çok (Selamlar)", translation: "Çok selamlar" }
      ]
    }
  },
  {
    id: 4,
    title: "Sprechen Teil 2: Fragen und Antworten",
    subtitle: "W-Soruları Sorma ve Cevaplama",
    description: "Bu bölümde gözetmen masaya ters çevrilmiş kartlar koyar. Konu (Thema) bellidir, örneğin: Essen und Trinken (Yeme İçme), Einkaufen (Alışveriş), Wochenende (Hafta sonu). Çektiğiniz karttaki kelimeyi kullanarak partnerinize bir W-sorusu (Wer, Was, Wann, Wo, Wie, Warum) sormalısınız. O da cevap verir.",
    color: "#8b5cf6",
    icon: "❓",
    tips: [
      "W-Fragen (W-soruları) yapısı çok basittir: Soru kelimesi + Fiil + Özne + Karttaki Kelime? (Örn: Wann isst du einen Apfel?)",
      "Kelimelerin makalelerine (der, die, das) çok takılmayın, pratik ve anlaşılır olmak daha önemlidir.",
      "Cevap verirken de sadece 'Ja' veya 'Nein' demek yerine tam cümle kurmaya çalışın.",
      "Thema (Konu) kelimesini soruya entegre etmenize gerek yoktur, sadece odaklanmanız gereken çerçeveyi belirler.",
      "Partneriniz soruyu sorduğunda basit cevaplar verin: 'Ich kaufe im Supermarkt ein.' gibi.",
      "Soruları 'du' (sen) veya 'Sie' (Siz - resmi) formunda sorabilirsiniz. Genelde diğer aday öğrenci olduğu için 'du' kullanılır."
    ],
    examples: [
      { de: "Thema: Essen. Karte: Apfel -> Wann isst du einen Apfel?", tr: "Konu: Yemek. Kart: Elma -> Ne zaman elma yersin?" },
      { de: "Antwort: Ich esse morgens einen Apfel.", tr: "Cevap: Sabahları bir elma yerim." },
      { de: "Thema: Einkaufen. Karte: Kasse -> Wo ist die Kasse?", tr: "Konu: Alışveriş. Kart: Kasa -> Kasa nerede?" },
      { de: "Antwort: Die Kasse ist dort rechts.", tr: "Cevap: Kasa orada sağda." },
      { de: "Thema: Wochenende. Karte: Sport -> Machst du am Wochenende Sport?", tr: "Konu: Hafta sonu. Kart: Spor -> Hafta sonu spor yapar mısın? (Ja/Nein sorusu da kabul edilebilir)" },
      { de: "Thema: Urlaub. Karte: Hotel -> Wie teuer ist das Hotel?", tr: "Konu: Tatil. Kart: Otel -> Otel ne kadar pahalı?" },
      { de: "Thema: Verkehr. Karte: Zug -> Fährst du oft mit dem Zug?", tr: "Konu: Trafik/Ulaşım. Kart: Tren -> Sık sık trenle seyahat eder misin?" }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Thema: Essen. (Kart: Brot) -> ___ isst du gern Brot?", blank: "Wann", hint: "Ne zaman", translation: "Ne zaman ekmek yemeyi seversin?" },
        { sentence: "Thema: Einkaufen. (Kart: Zeitung) -> ___ kaufst du die Zeitung?", blank: "Wo", hint: "Nerede", translation: "Gazeteyi nereden satın alıyorsun?" },
        { sentence: "Thema: Wochenende. (Kart: Familie) -> Besuchst ___ am Wochenende deine Familie?", blank: "du", hint: "Sen", translation: "Hafta sonu aileni ziyaret ediyor musun?" },
        { sentence: "Thema: Wohnen. (Kart: Balkon) -> ___ Ihre Wohnung einen Balkon?", blank: "Hat", hint: "Sahip olmak fiili (Sizin daireniz)", translation: "Dairenizin balkonu var mı?" },
        { sentence: "Thema: Arbeit. (Kart: Computer) -> Arbeitest du mit dem ___?", blank: "Computer", hint: "Bilgisayar", translation: "Bilgisayarla mı çalışıyorsun?" },
        { sentence: "Thema: Essen. (Kart: Fleisch) -> Essen Sie gern ___?", blank: "Fleisch", hint: "Et", translation: "Et yemeyi sever misiniz?" },
        { sentence: "Cevap: Ich trinke ___ einen Kaffee. (Tercih etme/severek)", blank: "gern", hint: "Severek/Memnuniyetle", translation: "Severek kahve içerim." },
        { sentence: "___ kostet das Buch? - 10 Euro.", blank: "Was", hint: "Ne (kadar) veya Wie viel", translation: "Kitap ne kadar? - 10 Euro." },
        { sentence: "Cevap: Die Kasse ist dort ___. (Yön bildirme)", blank: "rechts", hint: "Sağda", translation: "Kasa şurada sağda." },
        { sentence: "Thema: Urlaub. (Kart: Meer) -> Fährst du ans ___?", blank: "Meer", hint: "Deniz", translation: "Denize/Deniz kenarına gidiyor musun?" }
      ]
    }
  },
  {
    id: 5,
    title: "Sprechen Teil 3: Bitten formulieren",
    subtitle: "Rica ve Emir Cümleleri (Imperativ)",
    description: "Sınavın konuşma bölümünün son aşamasında, üzerinde sadece resim (yazı yok) olan kartlar çekersiniz. Resme bakarak partnerinizden bir şey rica etmelisiniz veya ona bir emir cümlesi (Imperativ) kurmalısınız. Partneriniz de bu ricaya uygun tepki vermelidir.",
    color: "#eab308",
    icon: "🙏",
    tips: [
      "Rica cümleleri kurmanın iki kolay yolu vardır. Birincisi 'Können Sie bitte...' ile başlamak.",
      "İkinci ve en çok tercih edilen yol Emir Kipi (Imperativ) kullanmaktır. Fiili başa alın ve 'bitte' kelimesini mutlaka ekleyin.",
      "Du (sen) formunda Emir: 'Mach bitte die Tür zu!' (Fiil kökü yalın kalır, st takısı düşer).",
      "Sie (Siz) formunda Emir: 'Machen Sie bitte die Tür zu!' (Fiil tam haldedir, yanına Sie gelir).",
      "Partneriniz rica ettiğinde cevap olarak 'Ja, gern' (Evet memnuniyetle) veya 'Hier, bitte' (Buyurun) deyin.",
      "Olumsuz cevap vermek için 'Tut mir leid, ich brauche das selbst' (Üzgünüm, buna kendim ihtiyacım var) diyebilirsiniz."
    ],
    examples: [
      { de: "Resim: Açık kapı -> Machen Sie bitte die Tür zu! / Mach bitte die Tür zu!", tr: "Lütfen kapıyı kapatın! / Lütfen kapıyı kapat!" },
      { de: "Resim: Su bardağı -> Geben Sie mir bitte ein Glas Wasser.", tr: "Bana lütfen bir bardak su verin." },
      { de: "Resim: Sigara içilmez işareti -> Bitte rauchen Sie hier nicht!", tr: "Lütfen burada sigara içmeyin!" },
      { de: "Resim: Kalem -> Hast du einen Stift für mich, bitte?", tr: "Benim için bir kalemin var mı lütfen?" },
      { de: "Antwort: Ja, natürlich. Hier, bitte.", tr: "Cevap: Evet, tabii ki. Buyurun." },
      { de: "Antwort: Tut mir leid, ich habe keinen Stift.", tr: "Cevap: Üzgünüm, hiç kalemim yok." },
      { de: "Resim: Saat -> Wie spät ist es, bitte? / Haben Sie die Uhrzeit?", tr: "Saat kaç, lütfen? / Saatiniz var mı?" }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Resim: Açık pencere -> ___ du bitte das Fenster zu?", blank: "Machst", hint: "Kapatır mısın (Soru şeklinde rica)", translation: "Lütfen pencereyi kapatır mısın?" },
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
    title: "Lesen Teil 1 & 2: Leseverstehen",
    subtitle: "Okuma Anlama ve İlanlar",
    description: "Sınavın Lesen bölümünde kısa e-postalar, notlar, ilanlar ve bilgi panoları okursunuz. Okuduklarınıza göre Richtig/Falsch (Doğru/Yanlış) sorularını cevaplamalı veya verilen duruma uygun ilanı (A veya B) seçmelisiniz.",
    color: "#06b6d4",
    icon: "📖",
    tips: [
      "Metinlerde genellikle zamanlara (Tarih, saat) ve yerlere çok dikkat edin. Sorular genelde buradan gelir.",
      "Kelimelerin eş anlamlılarını veya farklı şekilde ifade edilişlerini arayın. Metin 'geöffnet von 8 bis 18 Uhr' derken, soru 'Der Laden ist am Abend zu' diyebilir.",
      "İlan seçme sorularında anahtar kelimelere odaklanın. Örneğin ucuz mobilya arayan biri için 'Luxus Möbel' ilanı yanlıştır, 'Gebrauchte Möbel' ilanı doğrudur.",
      "Bilmediğiniz kelimelere takılmayın, cümlenin ve metnin genel anlamına odaklanın.",
      "Richtig (Doğru) ve Falsch (Yanlış) kelimelerinin baş harflerine (R ve F) formda dikkatlice işaretleme yapın."
    ],
    examples: [
      { de: "Metin: Die Praxis ist von Montag bis Freitag von 8 bis 12 Uhr geöffnet.", tr: "Metin: Muayenehane Pazartesi'den Cuma'ya saat 8'den 12'ye kadar açıktır." },
      { de: "Behauptung: Am Nachmittag ist die Praxis zu. -> RICHTIG", tr: "İddia: Öğleden sonra muayenehane kapalıdır. -> DOĞRU (Çünkü sadece 12'ye kadar açık)" },
      { de: "Metin: Wir treffen uns am Samstagabend im Restaurant 'Roma'.", tr: "Metin: Cumartesi akşamı 'Roma' restoranında buluşuyoruz." },
      { de: "Behauptung: Das Treffen ist am Sonntagmorgen. -> FALSCH", tr: "İddia: Buluşma Pazar sabahı. -> YANLIŞ" },
      { de: "Situation: Sie suchen ein billiges Fahrrad. (Durum: Ucuz bir bisiklet arıyorsunuz)", tr: "A: Neue Fahrräder ab 500€. B: Gebrauchte Fahrräder, günstig. -> Çözüm: B" }
    ],
    exercises: {
      type: "fill",
      questions: [
        { sentence: "Metin: Der Deutschkurs beginnt am Montag um 9:00 Uhr.\nSoru: Der Kurs startet am ___. (Hangi gün?)", blank: "Montag", hint: "Pazartesi", translation: "Kurs Pazartesi günü başlıyor." },
        { sentence: "Metin: Die Bank ist samstags und sonntags geschlossen.\nSoru: Am Wochenende ist die Bank ___. (Kapalı)", blank: "zu", hint: "Kapalı (geschlossen ile aynı anlama gelen kısa kelime)", translation: "Hafta sonu banka kapalıdır." },
        { sentence: "Metin: Ich kaufe morgen ein neues Auto.\nSoru: Das Auto ist ___. (Eski değil)", blank: "neu", hint: "Yeni", translation: "Araba yenidir." },
        { sentence: "Metin: Fahrkarten bitte am Automaten kaufen.\nSoru: Man muss die Tickets am ___ kaufen.", blank: "Automaten", hint: "Makine/Otomat", translation: "Biletleri otomat makinesinden almak gerekir." },
        { sentence: "Situation: Sie möchten Pizza essen.\nA: Bäckerei (Fırın)  B: Pizzeria\nSoru: Sie gehen zur ___. (Cevap B'dir)", blank: "Pizzeria", hint: "Pizzacı", translation: "Pizzacıya gidiyorsunuz." },
        { sentence: "Metin: Heute regnet es stark. Bleib lieber zu Hause!\nSoru: Das Wetter ist ___. (Kötü)", blank: "schlecht", hint: "Kötü", translation: "Hava kötü." },
        { sentence: "Metin: Der Zug hat 20 Minuten Verspätung.\nSoru: Der Zug kommt ___. (Geç)", blank: "spät", hint: "Geç", translation: "Tren geç geliyor." },
        { sentence: "Metin: Eintritt frei! (Giriş bedava)\nSoru: Man muss nichts ___. (Ödemek)", blank: "bezahlen", hint: "Ödemek", translation: "Hiçbir şey ödemek zorunda değilsiniz." },
        { sentence: "Situation: Sie suchen eine Arbeit.\nA: Stellenangebote (İş ilanları)  B: Immobilien (Emlak)\nSoru: Sie lesen Anzeige ___. (Sadece harfi yazın)", blank: "A", hint: "İş ilanı A'da", translation: "A ilanını okuyorsunuz." },
        { sentence: "Metin: Wir suchen Kellner für unser Café.\nSoru: Das Café braucht neues ___. (Personel)", blank: "Personal", hint: "Çalışan/Personel", translation: "Kafenin yeni personele ihtiyacı var." }
      ]
    }
  }
];
