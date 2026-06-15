// src/data/dialogs.js

export const dialogs = {
  // Modül 1: Berdan - Anna komşu tanışma diyaloğu
  m1: {
    id: "d1",
    titleDE: "Ein Kennenlernen unter Nachbarn",
    titleTR: "Komşular Arasında Tanışma",
    speakers: ["Berdan", "Anna"],
    lines: [
      { speaker: "Berdan", german: "Hallo! Guten Tag! Ich bin Berdan.", turkish: "Merhaba! İyi günler! Ben Berdan." },
      { speaker: "Anna", german: "Guten Tag! Ich heiße Anna. Freut mich, Sie kennenzulernen.", turkish: "İyi günler! Benim adım Anna. Tanıştığımıza memnun oldum." },
      { speaker: "Berdan", german: "Ganz meinerseits. Wohnen Sie hier im Haus?", turkish: "Ben de memnun oldum. Bu apartmanda mı oturuyorsunuz?" },
      { speaker: "Anna", german: "Ja, ich wohne im dritten Stock. Und Sie?", turkish: "Evet, ben üçüncü katta oturuyorum. Ya siz?" },
      { speaker: "Berdan", german: "Ich wohne im Erdgeschoss. Ich komme aus der Türkei. Woher kommen Sie?", turkish: "Ben giriş katta oturuyorum. Ben Türkiye'den geliyorum. Siz nereden geliyorsunuz?" },
      { speaker: "Anna", german: "Ich komme aus Deutschland, aus Berlin. Willkommen in der Nachbarschaft!", turkish: "Ben Almanya'dan, Berlin'den geliyorum. Mahalleye hoş geldiniz!" },
      { speaker: "Berdan", german: "Vielen Dank, Anna! Bis bald!", turkish: "Çok teşekkürler, Anna! Yakında görüşmek üzere!" },
      { speaker: "Anna", german: "Tschüss, Berdan! Schönen Tag noch!", turkish: "Görüşürüz, Berdan! İyi günler!" }
    ]
  },

  // Modül 2: Doktor randevu diyaloğu
  m2: {
    id: "d2",
    titleDE: "Einen Termin beim Arzt vereinbaren",
    titleTR: "Doktordan Randevu Almak",
    speakers: ["Arzthelferin", "Berdan"],
    lines: [
      { speaker: "Arzthelferin", german: "Praxis Dr. Schmidt, guten Tag! Wie kann ich Ihnen helfen?", turkish: "Dr. Schmidt'in Muayenehanesi, iyi günler! Size nasıl yardımcı olabilirim?" },
      { speaker: "Berdan", german: "Guten Tag! Ich heiße Berdan. Ich brauche einen Termin beim Arzt.", turkish: "İyi günler! Benim adım Berdan. Doktordan bir randevuya ihtiyacım var." },
      { speaker: "Arzthelferin", german: "Sind Sie schon Patient bei uns?", turkish: "Bizde daha önce kaydınız var mıydı (Bizim hastamız mısınız)?" },
      { speaker: "Berdan", german: "Nein, ich bin neu hier.", turkish: "Hayır, buralarda yeniyim." },
      { speaker: "Arzthelferin", german: "Verstehe. Passt es Ihnen am Dienstag um zehn Uhr?", turkish: "Anlıyorum. Salı günü saat 10 uygun mudur?" },
      { speaker: "Berdan", german: "Dienstag um zehn Uhr geht leider nicht, da muss ich arbeiten. Haben Sie am Donnerstag Zeit?", turkish: "Salı günü saat 10 maalesef olmaz, o zaman çalışmam gerekiyor. Perşembe günü vaktiniz var mı?" },
      { speaker: "Arzthelferin", german: "Ja, am Donnerstag um fünfzehn Uhr ist noch ein Termin frei.", turkish: "Evet, Perşembe günü saat 15:00'te boş bir randevu var." },
      { speaker: "Berdan", german: "Das passt perfekt! Donnerstag um fünfzehn Uhr. Vielen Dank!", turkish: "Bu mükemmel uyuyor! Perşembe saat 15:00. Çok teşekkürler!" },
      { speaker: "Arzthelferin", german: "Gerne. Auf Wiederhören!", turkish: "Rica ederim. Telefonda görüşmek üzere!" }
    ]
  },

  // Modül 3: Market alışveriş diyaloğu
  m3: {
    id: "d3",
    titleDE: "Einkaufen im Supermarkt",
    titleTR: "Markette Alışveriş",
    speakers: ["Kassierer", "Berdan"],
    lines: [
      { speaker: "Berdan", german: "Guten Tag! Entschuldigung, wo finde ich Milch und Brot?", turkish: "İyi günler! Afedersiniz, süt ve ekmeği nerede bulabilirim?" },
      { speaker: "Kassierer", german: "Guten Tag! Das Brot steht dort hinten im Regal, und die Milch ist im Kühlschrank rechts.", turkish: "İyi günler! Ekmek arka taraftaki rafta duruyor, süt ise sağdaki buzdolabında." },
      { speaker: "Berdan", german: "Super, danke. Und was kostet ein Kilo Äpfel?", turkish: "Harika, teşekkürler. Peki bir kilo elma ne kadar?" },
      { speaker: "Kassierer", german: "Die Äpfel kosten heute nur zwei Euro das Kilo.", turkish: "Elmalar bugün kilosu sadece iki Euro." },
      { speaker: "Berdan", german: "Das ist billig. Ich nehme ein Kilo Äpfel. Das ist alles.", turkish: "Bu ucuz. Bir kilo elma alıyorum. Hepsi bu." },
      { speaker: "Kassierer", german: "Gut. Kommen Sie zur Kasse, bitte. Das macht fünf Euro fünfzig insgesamt.", turkish: "Güzel. Kasaya gelin lütfen. Toplam beş Euro elli sent yapıyor." },
      { speaker: "Berdan", german: "Kann ich mit Karte bezahlen?", turkish: "Kartla ödeyebilir miyim?" },
      { speaker: "Kassierer", german: "Ja, natürlich. Bitte stecken Sie Ihre Bankkarte hier hinein. Vielen Dank!", turkish: "Evet, tabii ki. Lütfen banka kartınızı buraya yerleştirin. Çok teşekkürler!" }
    ]
  },

  // Modül 4: Ulaşım - yol sorma diyaloğu
  m4: {
    id: "d4",
    titleDE: "Wegbeschreibung zum Bahnhof",
    titleTR: "Tren İstasyonuna Yol Tarifi",
    speakers: ["Berdan", "Passantin"],
    lines: [
      { speaker: "Berdan", german: "Entschuldigung, können Sie mir helfen? Ich suche den Bahnhof.", turkish: "Afedersiniz, bana yardım edebilir misiniz? Tren istasyonunu arıyorum." },
      { speaker: "Passantin", german: "Ja, gerne! Der Bahnhof ist nicht weit von hier.", turkish: "Evet, memnuniyetle! Tren istasyonu buradan uzak değil." },
      { speaker: "Berdan", german: "Muss ich zu Fuß gehen oder den Bus nehmen?", turkish: "Yürüyerek mi gitmeliyim yoksa otobüse mi binmeliyim?" },
      { speaker: "Passantin", german: "Sie können zu Fuß gehen. Es dauert nur fünf Minuten.", turkish: "Yürüyerek gidebilirsiniz. Sadece beş dakika sürer." },
      { speaker: "Berdan", german: "Wie ist der Weg?", turkish: "Yol nasıldır?" },
      { speaker: "Passantin", german: "Gehen Sie hier geradeaus bis zur Kreuzung. Dann gehen Sie nach links.", turkish: "Kavşağa kadar buradan düz gidin. Sonra sola dönün." },
      { speaker: "Berdan", german: "Geradeaus und dann links. Ist es auf der rechten Seite?", turkish: "Düz ve sonra sol. Sağ tarafta mı kalıyor?" },
      { speaker: "Passantin", german: "Ja, genau. Der Bahnhof liegt dann direkt vor Ihnen auf der rechten Seite.", turkish: "Evet, tam olarak öyle. İstasyon doğrudan karşınızda sağ tarafta kalıyor." },
      { speaker: "Berdan", german: "Vielen Dank für Ihre Hilfe!", turkish: "Yardımınız için çok teşekkür ederim!" },
      { speaker: "Passantin", german: "Gern geschehen! Schönen Tag noch!", turkish: "Bir şey değil! İyi günler dilerim!" }
    ]
  },

  // Modül 5: Restoran sipariş diyaloğu
  m5: {
    id: "d5",
    titleDE: "Im Restaurant bestellen",
    titleTR: "Restoranda Sipariş Vermek",
    speakers: ["Kellner", "Berdan"],
    lines: [
      { speaker: "Kellner", german: "Guten Abend! Haben Sie einen Tisch frei?", turkish: "İyi akşamlar! Boş masanız var mı?" },
      { speaker: "Berdan", german: "Ja, für zwei Personen? Kommen Sie bitte mit. Hier ist die Speisekarte.", turkish: "Evet, iki kişilik mi? Benimle gelin lütfen. İşte menü." },
      { speaker: "Berdan", german: "Vielen Dank. Ich möchte bestellen. Was können Sie empfehlen?", turkish: "Çok teşekkürler. Sipariş vermek istiyorum. Ne tavsiye edersiniz?" },
      { speaker: "Kellner", german: "Unser Fisch mit Gemüse schmeckt heute hervorragend.", turkish: "Sebzeli balığımız bugün harika lezzettedir." },
      { speaker: "Berdan", german: "Gut, ich nehme den Fisch. Und zum Trinken möchte ich bitte eine Flasche Wasser.", turkish: "Güzel, balık alıyorum. İçecek olarak da lütfen bir şişe su istiyorum." },
      { speaker: "Kellner", german: "Sehr gerne. Kommt sofort.", turkish: "Memnuniyetle. Hemen geliyor." },
      { speaker: "Berdan", german: "Entschuldigung, der Fisch schmeckt wirklich lecker! ... Kellner, die Rechnung bitte!", turkish: "Afedersiniz, balık gerçekten lezzetliymiş! ... Garson, hesap lütfen!" },
      { speaker: "Kellner", german: "Das macht zwanzig Euro. Möchten Sie bar oder mit Karte bezahlen?", turkish: "Yirmi Euro yapıyor. Nakit mi yoksa kartla mı ödemek istersiniz?" },
      { speaker: "Berdan", german: "Ich bezahle bar. Hier sind fünfundzwanzig Euro. Stimmt so!", turkish: "Nakit ödüyorum. İşte yirmi beş Euro. Üstü kalsın!" },
      { speaker: "Kellner", german: "Vielen Dank! Schönen Abend noch!", turkish: "Çok teşekkürler! İyi akşamlar dilerim!" }
    ]
  },

  // Modül 6: Doktor muayene diyaloğu
  m6: {
    id: "d6",
    titleDE: "Die Untersuchung beim Arzt",
    titleTR: "Doktor Muayenesi",
    speakers: ["Doktor", "Berdan"],
    lines: [
      { speaker: "Doktor", german: "Guten Tag, Herr Berdan! Was fehlt Ihnen? Wo haben Sie Schmerzen?", turkish: "İyi günler, Bay Berdan! Şikayetiniz nedir? Nereniz ağrıyor?" },
      { speaker: "Berdan", german: "Guten Tag, Herr Doktor! Ich bin krank. Mein Kopf tut weh und ich habe Fieber.", turkish: "İyi günler, Doktor Bey! Hastayım. Başım ağrıyor ve ateşim var." },
      { speaker: "Doktor", german: "Haben Sie auch Halsschmerzen oder Husten?", turkish: "Aynı zamanda boğaz ağrınız veya öksürüğünüz de var mı?" },
      { speaker: "Berdan", german: "Ja, ich huste seit gestern Abend.", turkish: "Evet, dün akşamdan beri öksürüyorum." },
      { speaker: "Doktor", german: "Gut, ich muss Sie untersuchen. Bitte atmen Sie tief ein... Okay, Ihr Hals ist rot.", turkish: "Pekala, sizi muayene etmem gerekiyor. Lütfen derin nefes alın... Tamam, boğazınız kırmızı." },
      { speaker: "Berdan", german: "Ist es eine Grippe?", turkish: "Grip mi?" },
      { speaker: "Doktor", german: "Ja, es ist eine leichte Grippe. Ich schreibe Ihnen ein Rezept für ein Medikament.", turkish: "Evet, hafif bir grip. Size bir ilaç için reçete yazıyorum." },
      { speaker: "Berdan", german: "Wie muss ich das Medikament nehmen?", turkish: "İlacı nasıl almam gerekiyor?" },
      { speaker: "Doktor", german: "Nehmen Sie die Tabletten dreimal täglich nach dem Essen. Bleiben Sie im Bett.", turkish: "Tabletleri günde üç kez yemekten sonra alın. Yatakta kalın." },
      { speaker: "Berdan", german: "Vielen Dank, Herr Doktor!", turkish: "Çok teşekkürler, Doktor Bey!" },
      { speaker: "Doktor", german: "Gute Besserung! Ruhen Sie sich aus.", turkish: "Geçmiş olsun! Dinlenin." }
    ]
  },

  // Modül 7: Wohnung — Ev sahibiyle diyalog
  m7: {
    id: "d7",
    titleDE: "Gespräch mit dem Vermieter",
    titleTR: "Ev Sahibiyle Konuşma",
    speakers: ["Berdan", "Vermieterin"],
    lines: [
      { speaker: "Berdan", german: "Guten Tag, Frau Lange! Ich interessiere mich für die Wohnung.", turkish: "İyi günler, Bayan Lange! Dairenizle ilgileniyorum." },
      { speaker: "Vermieterin", german: "Herzlich willkommen! Die Wohnung hat zwei Zimmer, eine Küche und ein Bad.", turkish: "Hoş geldiniz! Dairede iki oda, bir mutfak ve bir banyo var." },
      { speaker: "Berdan", german: "Sehr schön. Wie hoch ist die Miete?", turkish: "Çok güzel. Kira ne kadar?" },
      { speaker: "Vermieterin", german: "Die Kaltmiete ist 750 Euro plus 150 Euro Nebenkosten.", turkish: "Net kira 750 Euro artı 150 Euro yan giderler." },
      { speaker: "Berdan", german: "Ist das Internet inklusive?", turkish: "İnternet dahil mi?" },
      { speaker: "Vermieterin", german: "Nein, das müssen Sie selbst anmelden.", turkish: "Hayır, onu kendiniz bağlatmanız gerekiyor." },
      { speaker: "Berdan", german: "Wann kann ich einziehen?", turkish: "Ne zaman taşınabilirim?" },
      { speaker: "Vermieterin", german: "Am ersten des nächsten Monats. Haben Sie eine Schufa-Auskunft?", turkish: "Gelecek ayın birinde. Schufa belgeniz var mı?" },
      { speaker: "Berdan", german: "Ja, ich bringe alles mit. Die Wohnung gefällt mir sehr gut!", turkish: "Evet, her şeyi getireceğim. Daireyi çok beğendim!" },
      { speaker: "Vermieterin", german: "Prima! Dann schicken Sie mir bitte Ihre Unterlagen per E-Mail.", turkish: "Harika! O zaman lütfen belgelerinizi e-posta ile gönderin." }
    ]
  },

  // Modül 8: Bank & Behörden — Bankada hesap açma
  m8: {
    id: "d8",
    titleDE: "Ein Konto bei der Bank eröffnen",
    titleTR: "Bankada Hesap Açmak",
    speakers: ["Berdan", "Bankberater"],
    lines: [
      { speaker: "Berdan", german: "Guten Morgen! Ich möchte gerne ein Girokonto eröffnen.", turkish: "Günaydın! Bir vadesiz hesap açmak istiyorum." },
      { speaker: "Bankberater", german: "Guten Morgen! Haben Sie schon ein Konto bei uns?", turkish: "Günaydın! Bizde zaten bir hesabınız var mı?" },
      { speaker: "Berdan", german: "Nein, ich bin neu in Deutschland.", turkish: "Hayır, Almanya'da yeniyim." },
      { speaker: "Bankberater", german: "Kein Problem. Bitte zeigen Sie mir Ihren Ausweis und die Anmeldebestätigung.", turkish: "Sorun değil. Lütfen kimliğinizi ve adres teyit belgenizi gösterin." },
      { speaker: "Berdan", german: "Hier ist mein Reisepass und die Bestätigung vom Einwohnermeldeamt.", turkish: "İşte pasaportum ve Nüfus Müdürlüğü'nden teyit belgem." },
      { speaker: "Bankberater", german: "Danke. Haben Sie auch einen Nachweis über Ihr Einkommen?", turkish: "Teşekkürler. Gelir belgeniz de var mı?" },
      { speaker: "Berdan", german: "Ja, hier ist mein Arbeitsvertrag.", turkish: "Evet, işte iş sözleşmem." },
      { speaker: "Bankberater", german: "Perfekt. Das Konto ist kostenlos. Die EC-Karte kommt in fünf Tagen.", turkish: "Mükemmel. Hesap ücretsizdir. Banka kartı beş günde gelir." },
      { speaker: "Berdan", german: "Kann ich auch Online-Banking nutzen?", turkish: "Online bankacılığı da kullanabilir miyim?" },
      { speaker: "Bankberater", german: "Ja, natürlich. Wir richten es gleich für Sie ein.", turkish: "Evet, tabii ki. Hemen sizin için ayarlıyoruz." }
    ]
  },

  // Modül 9: Telefon & Internet — Teknik destek hattı
  m9: {
    id: "d9",
    titleDE: "Technischer Support am Telefon",
    titleTR: "Telefonda Teknik Destek",
    speakers: ["Berdan", "Support"],
    lines: [
      { speaker: "Berdan", german: "Guten Tag! Mein Internet funktioniert nicht mehr.", turkish: "İyi günler! İnternetim artık çalışmıyor." },
      { speaker: "Support", german: "Guten Tag! Mein Name ist Müller, Technischer Support. Darf ich Ihre Kundennummer?", turkish: "İyi günler! Benim adım Müller, Teknik Destek. Müşteri numaranızı alabilir miyim?" },
      { speaker: "Berdan", german: "Ja, meine Kundennummer ist 7-8-4-5-1-2.", turkish: "Evet, müşteri numaram 7-8-4-5-1-2." },
      { speaker: "Support", german: "Danke. Haben Sie den Router schon neu gestartet?", turkish: "Teşekkürler. Router'ı yeniden başlattınız mı?" },
      { speaker: "Berdan", german: "Ja, dreimal schon. Das Problem bleibt.", turkish: "Evet, üç kez zaten. Sorun devam ediyor." },
      { speaker: "Support", german: "Ist die Anzeige am Router rot oder orange?", turkish: "Router'daki ışık kırmızı mı yoksa turuncu mu?" },
      { speaker: "Berdan", german: "Die Lampe blinkt rot.", turkish: "Işık kırmızı yanıp sönüyor." },
      { speaker: "Support", german: "Das deutet auf eine Leitungsstörung hin. Wir senden einen Techniker. Morgen zwischen 10 und 14 Uhr — passt das?", turkish: "Bu bir hat arızasına işaret ediyor. Bir teknisyen gönderiyoruz. Yarın 10 ile 14 arasında — uyar mı?" },
      { speaker: "Berdan", german: "Ja, ich bin zu Hause. Danke für Ihre Hilfe!", turkish: "Evet, evde olacağım. Yardımınız için teşekkürler!" },
      { speaker: "Support", german: "Bitte. Einen schönen Tag noch!", turkish: "Rica ederim. İyi günler!" }
    ]
  },

  // Modül 10: Günlük Hayat — İş yerinde günlük konuşma
  m10: {
    id: "d10",
    titleDE: "Ein Gespräch unter Kollegen",
    titleTR: "Meslektaşlar Arasında Konuşma",
    speakers: ["Berdan", "Julia"],
    lines: [
      { speaker: "Julia", german: "Hallo Berdan! Wie war dein Wochenende?", turkish: "Merhaba Berdan! Hafta sonun nasıldı?" },
      { speaker: "Berdan", german: "Super! Ich war im Park und habe Fahrrad gefahren. Und du?", turkish: "Harika! Parkta idim ve bisiklet sürdüm. Ya sen?" },
      { speaker: "Julia", german: "Ich habe zu Hause entspannt und einen Film geschaut.", turkish: "Evde dinlendim ve film izledim." },
      { speaker: "Berdan", german: "Was für einen Film? Etwas auf Deutsch?", turkish: "Ne tür bir film? Almanca bir şey mi?" },
      { speaker: "Julia", german: "Ja! Eine Komödie — sehr lustig. Ich lerne viel Deutsch beim Fernsehen.", turkish: "Evet! Bir komedi — çok komikti. Televizyon izlerken çok Almanca öğreniyorum." },
      { speaker: "Berdan", german: "Das ist eine gute Idee. Ich höre auch viel deutsche Musik.", turkish: "Bu güzel bir fikir. Ben de çok Almanca müzik dinliyorum." },
      { speaker: "Julia", german: "Hast du schon Mittagessen gegessen? Die Kantine hat heute Schnitzel.", turkish: "Öğle yemeği yedin mi? Yemekhanede bugün şnitzel var." },
      { speaker: "Berdan", german: "Nein, noch nicht. Gehen wir zusammen essen?", turkish: "Hayır, henüz değil. Birlikte yemeğe gidelim mi?" },
      { speaker: "Julia", german: "Gerne! In zehn Minuten?", turkish: "Memnuniyetle! On dakika sonra?" },
      { speaker: "Berdan", german: "Perfekt! Ich muss noch kurz eine E-Mail schreiben.", turkish: "Mükemmel! Kısaca bir e-posta yazmam gerekiyor." }
    ]
  },

  // Modül 11: Gramer — Bağlaçları kullanarak konuşma
  m11: {
    id: "d11",
    titleDE: "Eine Meinung ausdrücken",
    titleTR: "Görüş Bildirme — Bağlaçlı Cümleler",
    speakers: ["Berdan", "Lehrer"],
    lines: [
      { speaker: "Lehrer", german: "Berdan, warum lernen Sie Deutsch?", turkish: "Berdan, neden Almanca öğreniyorsunuz?" },
      { speaker: "Berdan", german: "Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.", turkish: "Almanya'da çalışmak istediğim için Almanca öğreniyorum." },
      { speaker: "Lehrer", german: "Und ist die Sprache schwierig für Sie?", turkish: "Ve dil sizin için zor mu?" },
      { speaker: "Berdan", german: "Obwohl die Grammatik schwierig ist, macht mir das Lernen Spaß.", turkish: "Gramer zor olsa da, öğrenmek bana eğlenceli geliyor." },
      { speaker: "Lehrer", german: "Was machen Sie, damit Sie schneller lernen?", turkish: "Daha hızlı öğrenmek için ne yapıyorsunuz?" },
      { speaker: "Berdan", german: "Ich höre Podcasts, sodass ich das Hörverständnis übe.", turkish: "Dinleme becerimi geliştirsin diye podcast dinliyorum." },
      { speaker: "Lehrer", german: "Sehr gut! Und treffen Sie sich mit Deutschen?", turkish: "Çok güzel! Almanlarla buluşuyor musunuz?" },
      { speaker: "Berdan", german: "Ja, ich spreche mit meinen Kollegen Deutsch, obwohl es manchmal schwer ist.", turkish: "Evet, bazen zor olsa da meslektaşlarımla Almanca konuşuyorum." },
      { speaker: "Lehrer", german: "Das ist die beste Methode! Weiter so!", turkish: "Bu en iyi yöntem! Devam edin!" },
      { speaker: "Berdan", german: "Danke! Ich übe täglich, damit mein Deutsch immer besser wird.", turkish: "Teşekkürler! Almancam hep daha iyi olsun diye her gün pratik yapıyorum." }
    ]
  },

  // Modül 12: Notfall — Acil durum diyaloğu
  m12: {
    id: "d12",
    titleDE: "Ein Notfall auf der Straße",
    titleTR: "Sokakta Acil Durum",
    speakers: ["Berdan", "Polizist"],
    lines: [
      { speaker: "Berdan", german: "Hilfe! Bitte helfen Sie mir! Meine Tasche wurde gestohlen!", turkish: "İmdat! Lütfen bana yardım edin! Çantam çalındı!" },
      { speaker: "Polizist", german: "Bleiben Sie ruhig! Was ist passiert?", turkish: "Sakin olun! Ne oldu?" },
      { speaker: "Berdan", german: "Ein Mann hat meine Tasche gerissen und ist weggelaufen.", turkish: "Bir adam çantamı kapıp kaçtı." },
      { speaker: "Polizist", german: "Wann und wo genau ist das passiert?", turkish: "Bu tam olarak ne zaman ve nerede oldu?" },
      { speaker: "Berdan", german: "Vor fünf Minuten, hier an der Ecke neben dem Supermarkt.", turkish: "Beş dakika önce, burada süpermarketin yanındaki köşede." },
      { speaker: "Polizist", german: "Können Sie den Täter beschreiben?", turkish: "Faili tarif edebilir misiniz?" },
      { speaker: "Berdan", german: "Er war groß, hatte kurze dunkle Haare und trug eine rote Jacke.", turkish: "Uzundu, kısa siyah saçları vardı ve kırmızı bir ceket giyiyordu." },
      { speaker: "Polizist", german: "Ich gebe das sofort durch. Was war in der Tasche?", turkish: "Hemen bildiriyorum. Çantada ne vardı?" },
      { speaker: "Berdan", german: "Mein Portemonnaie, mein Handy und mein Ausweis.", turkish: "Cüzdanım, telefonum ve kimlik kartım." },
      { speaker: "Polizist", german: "Kommen Sie mit zur Wache. Wir nehmen alles zu Protokoll.", turkish: "Karakola gelin. Her şeyi tutanağa döküyoruz." },
      { speaker: "Berdan", german: "Ja, danke. Brauche ich eine Anzeige für die Versicherung?", turkish: "Evet, teşekkürler. Sigorta için suç duyurusuna ihtiyacım var mı?" },
      { speaker: "Polizist", german: "Ja, unbedingt. Das erledigen wir gleich auf der Wache.", turkish: "Evet, kesinlikle. Bunu hemen karakolda hallederiz." }
    ]
  }
};
