// src/data/conversations_a2.js — Ek A2 senaryolar (c29-c40)

export const conversationsA2Extra = [
  {
    id: "c29", titleDE: "Notaufnahme im Krankenhaus", titleTR: "Hastane Acil Servisi",
    emoji: "🚨", character: { name: "Aufnahme-Schwester Monika", emoji: "🏥" },
    level: "A2", xp: 90, tag: "Sağlık", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Was ist passiert? Haben Sie starke Schmerzen?",
        tr: "İyi günler! Ne oldu? Şiddetli ağrınız var mı?",
        options: [
          { text: "Ja! Ich habe starke Brustschmerzen seit einer Stunde.", tr: "Evet! Bir saattir şiddetli göğüs ağrım var.", next: "chest_pain" },
          { text: "Mein Kind hat etwas Chemisches getrunken.", tr: "Çocuğum kimyasal bir şey içti.", next: "poison" },
          { text: "Ich habe mir das Bein gebrochen — ich bin gestürzt.", tr: "Bacağımı kırdım — düştüm.", next: "broken_leg" },
        ],
      },
      chest_pain: {
        ai: "Das ist ernst! Kommen Sie sofort mit. Seit wann genau?",
        tr: "Bu ciddi! Hemen gelin. Tam olarak ne zamandan beri?",
        options: [
          { text: "Seit etwa einer Stunde, nach dem Sport.", tr: "Sporten sonra yaklaşık bir saattir.", next: "ecg" },
          { text: "Plötzlich beim Sitzen, kein Sport.", tr: "Otururken aniden, spor yapmıyordum.", next: "ecg" },
        ],
      },
      ecg: {
        ai: "Ich mache sofort ein EKG. Nehmen Sie bitte Platz. Haben Sie Vorerkrankungen?",
        tr: "Hemen EKG çekiyorum. Lütfen oturun. Kronik hastalığınız var mı?",
        options: [
          { text: "Ich habe Bluthochdruck.", tr: "Yüksek tansiyonum var.", next: "triage" },
          { text: "Nein, ich bin grundsätzlich gesund.", tr: "Hayır, temelde sağlıklıyım.", next: "triage" },
        ],
      },
      triage: {
        ai: "Das EKG sieht gut aus — kein Herzinfarkt. Aber wir behalten Sie zur Beobachtung.",
        tr: "EKG iyi görünüyor — kalp krizi değil. Ama gözlem altında tutuyoruz.",
        options: [],
        isEnd: true, result: "success",
      },
      poison: {
        ai: "Sofort zum Arzt! Was hat das Kind getrunken und wie alt ist es?",
        tr: "Hemen doktora! Çocuk ne içti ve kaç yaşında?",
        options: [
          { text: "3 Jahre alt, Reinigungsmittel — vor 10 Minuten.", tr: "3 yaşında, temizlik ürünü — 10 dakika önce.", next: "poison_action" },
        ],
      },
      poison_action: {
        ai: "Nichts trinken geben! Der Arzt kommt sofort. Haben Sie die Flasche dabei?",
        tr: "Hiçbir şey içirmeyin! Doktor hemen geliyor. Şişe yanınızda mı?",
        options: [
          { text: "Ja, hier ist die Flasche.", tr: "Evet, işte şişe.", next: "end_good" },
        ],
      },
      broken_leg: {
        ai: "Können Sie auftreten? Ich rufe einen Rollstuhl.",
        tr: "Ayağınıza basabiliyor musunuz? Tekerlekli sandalye çağırıyorum.",
        options: [
          { text: "Nein, es ist unmöglich aufzutreten.", tr: "Hayır, basmak imkânsız.", next: "xray" },
          { text: "Nur ein bisschen, aber es tut sehr weh.", tr: "Biraz, ama çok acıyor.", next: "xray" },
        ],
      },
      xray: {
        ai: "Wir machen ein Röntgenbild. Ich gebe Ihnen auch etwas gegen die Schmerzen.",
        tr: "Röntgen çekeceğiz. Ağrı için de bir şey veriyorum.",
        options: [],
        isEnd: true, result: "success",
      },
      end_good: {
        ai: "Gut! Bitte warten Sie hier — der Arzt kommt sofort zu Ihnen.",
        tr: "Güzel! Lütfen burada bekleyin — doktor hemen geliyor.",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c30", titleDE: "Im Reisebüro — Urlaub buchen", titleTR: "Seyahat Acentesinde — Tatil Rezervasyonu",
    emoji: "🌴", character: { name: "Reiseberaterin Frau Sommer", emoji: "🏝️" },
    level: "A2", xp: 90, tag: "Seyahat", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo! Wohin soll die nächste Reise gehen?",
        tr: "Merhaba! Bir sonraki yolculuk nereye olacak?",
        options: [
          { text: "Ich möchte zwei Wochen ans Meer — Türkei oder Griechenland.", tr: "Denize iki hafta gitmek istiyorum — Türkiye veya Yunanistan.", next: "budget" },
          { text: "Wir planen eine Städtereise nach Wien oder Prag.", tr: "Viyana veya Prag'a şehir turu planlıyoruz.", next: "city_trip" },
          { text: "Ich interessiere mich für eine Kreuzfahrt.", tr: "Gemi turu ilgimi çekiyor.", next: "cruise" },
        ],
      },
      budget: {
        ai: "Wie ist Ihr Budget pro Person und wann möchten Sie reisen?",
        tr: "Kişi başı bütçeniz ne ve ne zaman seyahat etmek istiyorsunuz?",
        options: [
          { text: "800 bis 1200 Euro, im August.", tr: "800 ile 1200 Euro arası, Ağustos'ta.", next: "recommendation" },
          { text: "Flexible — was empfehlen Sie?", tr: "Esnek — ne önerirsiniz?", next: "recommendation" },
        ],
      },
      recommendation: {
        ai: "Im August empfehle ich Antalya — Flug und Hotel 2 Wochen All-Inclusive für 950 Euro.",
        tr: "Ağustos'ta Antalya'yı öneriyorum — uçak ve otel 2 hafta her şey dahil 950 Euro.",
        options: [
          { text: "Das klingt perfekt! Für zwei Personen?", tr: "Bu mükemmel geliyor! İki kişi için?", next: "hotel_type" },
          { text: "Gibt es etwas Günstigeres für September?", tr: "Eylül için daha ucuz bir şey var mı?", next: "september" },
        ],
      },
      september: {
        ai: "Im September dasselbe Hotel für 750 Euro! Das Wetter ist noch wunderbar.",
        tr: "Eylül'de aynı otel 750 Euro! Hava hâlâ harika.",
        options: [
          { text: "September ist besser! Buchen wir.", tr: "Eylül daha iyi! Rezervasyon yapalım.", next: "hotel_type" },
        ],
      },
      hotel_type: {
        ai: "5-Sterne oder 4-Sterne Hotel? Und Zimmer — Meerblick oder Standard?",
        tr: "5 yıldızlı mı 4 yıldızlı mı otel? Ve oda — deniz manzarası mı standart mı?",
        options: [
          { text: "4 Sterne mit Meerblick klingt gut.", tr: "Deniz manzaralı 4 yıldız kulağa güzel geliyor.", next: "transfer" },
          { text: "5 Sterne — wir gönnen uns etwas.", tr: "5 yıldız — kendimizi şımartıyoruz.", next: "transfer" },
        ],
      },
      transfer: {
        ai: "Möchten Sie auch einen Flughafentransfer dazubuchen? 30 Euro extra pro Person.",
        tr: "Havalimanı transferi de eklemek ister misiniz? Kişi başı 30 Euro fazla.",
        options: [
          { text: "Ja, bitte.", tr: "Evet, lütfen.", next: "end_good" },
          { text: "Nein, wir kommen selbst.", tr: "Hayır, kendimiz geliriz.", next: "end_good" },
        ],
      },
      city_trip: {
        ai: "Wien oder Prag — beide wunderschön! Wien ist teurer, Prag günstiger. Wie lange?",
        tr: "Viyana veya Prag — ikisi de çok güzel! Viyana daha pahalı, Prag daha ucuz. Ne kadar süre?",
        options: [
          { text: "4 Tage Prag — klingt ideal.", tr: "4 gün Prag — ideal geliyor.", next: "end_good" },
          { text: "Wien für 5 Tage — Kultur und Kaffeehäuser.", tr: "Viyana 5 gün — kültür ve kahvehaneler.", next: "end_good" },
        ],
      },
      cruise: {
        ai: "Kreuzfahrten sind beliebt! Mittelmeer 10 Tage ab 1.200 Euro pro Person.",
        tr: "Gemi turları popüler! Akdeniz 10 gün kişi başı 1.200 Euro'dan.",
        options: [
          { text: "Welche Häfen werden angelaufen?", tr: "Hangi limanlar ziyaret ediliyor?", next: "ports" },
        ],
      },
      ports: {
        ai: "Barcelona, Marseille, Genua, Neapel, Malta. Klingt das gut?",
        tr: "Barselona, Marsilya, Cenova, Napoli, Malta. Güzel geliyor mu?",
        options: [
          { text: "Fantastisch! Bitte buchen Sie für zwei Personen.", tr: "Harika! İki kişi için lütfen rezervasyon yapın.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Wunderbar! Ich stelle Ihnen das komplette Angebot zusammen. Schönen Urlaub!",
        tr: "Harika! Sizin için tam teklifi hazırlıyorum. Güzel tatiller!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c31", titleDE: "Vermieter — Problem in der Wohnung", titleTR: "Ev Sahibi — Daire Sorunu",
    emoji: "🔨", character: { name: "Vermieter Herr Brandt", emoji: "🏠" },
    level: "A2", xp: 85, tag: "Yaşam", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo Herr Berdan, was ist das Problem?",
        tr: "Merhaba Bay Berdan, sorun ne?",
        options: [
          { text: "Die Heizung funktioniert nicht mehr. Es ist sehr kalt.", tr: "Isıtma artık çalışmıyor. Çok soğuk.", next: "heating" },
          { text: "Der Wasserhahn tropft seit einer Woche.", tr: "Musluk bir haftadır damlatıyor.", next: "tap" },
          { text: "Die Nachbarn machen nachts sehr laut Musik.", tr: "Komşular geceleri çok yüksek sesle müzik yapıyor.", next: "noise" },
        ],
      },
      heating: {
        ai: "Das darf nicht sein! Ist es die ganze Wohnung oder nur ein Zimmer?",
        tr: "Bu olmaz! Tüm daire mi yoksa sadece bir oda mı?",
        options: [
          { text: "Die ganze Wohnung — alle Heizkörper sind kalt.", tr: "Tüm daire — tüm radyatörler soğuk.", next: "heating_urgent" },
          { text: "Nur das Schlafzimmer.", tr: "Sadece yatak odası.", next: "heating_partial" },
        ],
      },
      heating_urgent: {
        ai: "Das ist dringend! Ich schicke einen Techniker noch heute. Können Sie von 14 bis 18 Uhr zu Hause sein?",
        tr: "Bu acil! Bugün bir teknisyen gönderiyorum. Saat 14-18 arası evde olabilir misiniz?",
        options: [
          { text: "Ja, ich bin zu Hause.", tr: "Evet, evde olacağım.", next: "end_good" },
          { text: "Ich arbeite bis 17 Uhr. Ab 17 Uhr bin ich da.", tr: "17'ye kadar çalışıyorum. 17'den itibaren orada olacağım.", next: "end_adjusted" },
        ],
      },
      end_adjusted: {
        ai: "Kein Problem, ich sage dem Techniker 17 bis 19 Uhr. Entschuldigung für das Problem.",
        tr: "Sorun değil, teknisyene 17-19 arası diyorum. Sorun için özür dilerim.",
        options: [], isEnd: true, result: "success",
      },
      heating_partial: {
        ai: "Wahrscheinlich das Thermostatventil. Kein großes Problem — Techniker kommt morgen.",
        tr: "Büyük ihtimalle termostat vanası. Büyük sorun değil — teknisyen yarın gelir.",
        options: [
          { text: "Kann ich morgen Vormittag?", tr: "Yarın öğleden önce olur mu?", next: "end_good" },
        ],
      },
      tap: {
        ai: "Seit einer Woche schon? Das hätten Sie früher melden sollen! Ich schicke morgen einen Klempner.",
        tr: "Bir haftadır mı? Daha önce bildirmeniz gerekiyordu! Yarın tesisatçı gönderiyorum.",
        options: [
          { text: "Entschuldigung, ich dachte es wird besser.", tr: "Özür dilerim, düzeleceğini düşündüm.", next: "tap_cost" },
        ],
      },
      tap_cost: {
        ai: "Kein Problem. Die Reparaturkosten übernehme ich, solange kein Schaden durch Ihre Schuld entstand.",
        tr: "Sorun değil. Sizin kusurunuzdan kaynaklanmadığı sürece tamir masraflarını ben karşılıyorum.",
        options: [],
        isEnd: true, result: "success",
      },
      noise: {
        ai: "Das ist nicht akzeptabel! Welche Wohnung ist das?",
        tr: "Bu kabul edilemez! Hangi daire?",
        options: [
          { text: "Wohnung 12, zweiter Stock.", tr: "12 numaralı daire, ikinci kat.", next: "noise_action" },
        ],
      },
      noise_action: {
        ai: "Ich spreche morgen früh mit ihnen und schicke eine schriftliche Abmahnung wenn nötig.",
        tr: "Yarın sabah onlarla konuşacağım ve gerekirse yazılı uyarı göndereceğim.",
        options: [
          { text: "Danke! Und heute Nacht?", tr: "Teşekkürler! Peki bu gece?", next: "tonight" },
        ],
      },
      tonight: {
        ai: "Rufen Sie die Polizei an — sie können bei Ruhestörung einschreiten. Das ist legal.",
        tr: "Polisi arayın — gürültü şikâyetinde müdahale edebilirler. Bu yasal.",
        options: [],
        isEnd: true, result: "success",
      },
      end_good: {
        ai: "Gut! Der Techniker kommt. Bitte halten Sie mich auf dem Laufenden.",
        tr: "Güzel! Teknisyen geliyor. Lütfen beni güncel tutun.",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c32", titleDE: "Elternsprechtag in der Schule", titleTR: "Okul Veli Toplantısı",
    emoji: "🏫", character: { name: "Lehrerin Frau Gruber", emoji: "👩‍🏫" },
    level: "A2", xp: 85, tag: "Eğitim", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Sie sind Berdans Elternteil? Bitte setzen Sie sich. Wie geht es Ihnen?",
        tr: "İyi günler! Berdan'ın velisi misiniz? Lütfen oturun. Nasılsınız?",
        options: [
          { text: "Gut, danke. Was kann ich für mein Kind verbessern?", tr: "İyi, teşekkürler. Çocuğum için ne geliştirebilirim?", next: "strengths" },
          { text: "Ich mache mir Sorgen um seine Noten.", tr: "Notları konusunda endişeleniyorum.", next: "grades" },
        ],
      },
      strengths: {
        ai: "Berdan ist sehr kreativ und engagiert! In Mathe ist er sehr stark.",
        tr: "Berdan çok yaratıcı ve azimli! Matematikde çok güçlü.",
        options: [
          { text: "Das freut mich! Und schwächere Bereiche?", tr: "Sevindim! Peki zayıf alanlar?", next: "weaknesses" },
        ],
      },
      weaknesses: {
        ai: "Deutsch und Lesen könnten besser sein. Lesen Sie zu Hause regelmäßig zusammen?",
        tr: "Almanca ve okuma daha iyi olabilir. Evde düzenli birlikte okuyuyor musunuz?",
        options: [
          { text: "Ehrlich gesagt nicht so oft.", tr: "Dürüst olmak gerekirse çok sık değil.", next: "reading_tip" },
          { text: "Ja, täglich 20 Minuten.", tr: "Evet, günlük 20 dakika.", next: "reading_tip" },
        ],
      },
      reading_tip: {
        ai: "Ich empfehle täglich 15-20 Minuten lesen. Kinderbücher auf dem Niveau A1-A2 sind ideal.",
        tr: "Günlük 15-20 dakika okuma öneriyorum. A1-A2 seviyesinde çocuk kitapları idealdir.",
        options: [
          { text: "Gibt es spezielle Bücher, die Sie empfehlen?", tr: "Önerdiğiniz özel kitaplar var mı?", next: "book_rec" },
          { text: "Wir werden das sofort anfangen!", tr: "Buna hemen başlayacağız!", next: "end_good" },
        ],
      },
      book_rec: {
        ai: "Die 'Erstleser'-Reihe vom Ravensburger Verlag ist perfekt. Auch in der Bibliothek erhältlich.",
        tr: "Ravensburger Yayınevi'nin 'Erstleser' serisi mükemmel. Kütüphanede de bulunuyor.",
        options: [],
        isEnd: true, result: "success",
      },
      grades: {
        ai: "Ich verstehe die Sorge. In welchem Fach genau?",
        tr: "Endişeyi anlıyorum. Hangi derste tam olarak?",
        options: [
          { text: "In Deutsch bekommt er immer 4en.", tr: "Almancada sürekli 4 alıyor.", next: "grade_reason" },
          { text: "Insgesamt — alle Fächer außer Sport.", tr: "Genelde — spor dışında tüm dersler.", next: "overall" },
        ],
      },
      grade_reason: {
        ai: "Das liegt hauptsächlich an der Rechtschreibung. Ich empfehle eine Nachhilfe.",
        tr: "Bu esas olarak yazım kurallarından kaynaklanıyor. Özel ders öneriyorum.",
        options: [
          { text: "Wo finde ich eine Nachhilfe?", tr: "Özel ders nerede bulabilirim?", next: "tutor_info" },
        ],
      },
      tutor_info: {
        ai: "Die Schule bietet kostenlose Förderunterricht dienstags von 14 bis 15 Uhr an.",
        tr: "Okul Salı günleri 14-15 arasında ücretsiz destek dersi sunuyor.",
        options: [],
        isEnd: true, result: "success",
      },
      overall: {
        ai: "Vielleicht gibt es zu Hause Ablenkungen? Computer oder Handy vor den Hausaufgaben?",
        tr: "Belki evde dikkat dağıtıcı şeyler var? Ödev öncesi bilgisayar veya telefon?",
        options: [
          { text: "Ehrlich gesagt ja.", tr: "Dürüst olmak gerekirse evet.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Feste Lernzeiten ohne Ablenkung helfen sehr! Danke für das Gespräch.",
        tr: "Dikkat dağıtıcı olmadan düzenli çalışma saatleri çok yardımcı olur! Görüşme için teşekkürler.",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c33", titleDE: "Gehaltsverhandlung", titleTR: "Maaş Müzakeresi",
    emoji: "💰", character: { name: "Chef Herr Köhler", emoji: "👔" },
    level: "A2", xp: 100, tag: "İş Hayatı", startNode: "start",
    nodes: {
      start: {
        ai: "Hallo Berdan! Sie wollten über Ihr Gehalt sprechen?",
        tr: "Merhaba Berdan! Maaşınız hakkında konuşmak istediniz?",
        options: [
          { text: "Ja. Ich arbeite seit zwei Jahren hier und möchte eine Gehaltserhöhung beantragen.", tr: "Evet. İki yıldır burada çalışıyorum ve maaş zammı talep etmek istiyorum.", next: "current_salary" },
        ],
      },
      current_salary: {
        ai: "Sie verdienen momentan 2.400 Euro netto. Wie viel wünschen Sie sich?",
        tr: "Şu an net 2.400 Euro kazanıyorsunuz. Ne kadar istiyorsunuz?",
        options: [
          { text: "Ich möchte 2.700 Euro — eine Erhöhung um 12,5%.", tr: "2.700 Euro istiyorum — %12,5 zam.", next: "justify" },
          { text: "300 Euro mehr wäre fair — 2.700 Euro.", tr: "300 Euro daha adil olur — 2.700 Euro.", next: "justify" },
        ],
      },
      justify: {
        ai: "Das ist eine substanzielle Erhöhung. Was sind Ihre Leistungen, die das rechtfertigen?",
        tr: "Bu kayda değer bir artış. Bunu haklı kılan performansınız nedir?",
        options: [
          { text: "Ich habe das Umsatz meiner Abteilung um 20% gesteigert.", tr: "Departmanımın cirosunu %20 artırdım.", next: "counter" },
          { text: "Ich habe drei wichtige Projekte geleitet und neue Kunden gewonnen.", tr: "Üç önemli projeyi yönettim ve yeni müşteriler kazandım.", next: "counter" },
        ],
      },
      counter: {
        ai: "Das stimmt, Ihre Arbeit ist sehr wertvoll. Aber 12,5% ist viel — wie wäre es mit 8%?",
        tr: "Doğru, çalışmanız çok değerli. Ama %12,5 fazla — %8 nasıl olur?",
        options: [
          { text: "10% wäre mein Minimum — können wir uns auf 2.640 Euro einigen?", tr: "Minimum %10 — 2.640 Euro'da anlaşabilir miyiz?", next: "agreement" },
          { text: "Ich akzeptiere 8% — wenn es zusätzliche Urlaubstage gibt.", tr: "%8 kabul ediyorum — eğer ek tatil günleri gelirse.", next: "vacation_deal" },
        ],
      },
      agreement: {
        ai: "2.640 Euro klingt fair. Ich muss es noch mit der Geschäftsführung besprechen.",
        tr: "2.640 Euro adil geliyor. Bunu yönetimle görüşmem gerekiyor.",
        options: [
          { text: "Klar. Wann kann ich mit einer Antwort rechnen?", tr: "Tabii. Ne zaman cevap bekleyebilirim?", next: "timeline" },
        ],
      },
      vacation_deal: {
        ai: "8% plus zwei extra Urlaubstage — das kann ich genehmigen!",
        tr: "%8 artı iki ekstra tatil günü — bunu onaylayabilirim!",
        options: [],
        isEnd: true, result: "success",
      },
      timeline: {
        ai: "Ende der Woche — Freitag. Ich informiere Sie per E-Mail. Danke für das offene Gespräch!",
        tr: "Hafta sonu — Cuma. E-posta ile haberdar ederim. Açık görüşme için teşekkürler!",
        options: [],
        isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c34", titleDE: "Autovermietung", titleTR: "Araç Kiralama",
    emoji: "🚗", character: { name: "Mitarbeiterin Frau Kaiser", emoji: "🔑" },
    level: "A2", xp: 80, tag: "Ulaşım", startNode: "start",
    nodes: {
      start: {
        ai: "Willkommen bei AutoRent! Haben Sie eine Reservierung?",
        tr: "AutoRent'e hoş geldiniz! Rezervasyonunuz var mı?",
        options: [
          { text: "Ja, auf den Namen Berdan für drei Tage.", tr: "Evet, Berdan adına üç günlük.", next: "find_res" },
          { text: "Nein, ich möchte spontan ein Auto mieten.", tr: "Hayır, spontane araba kiralamak istiyorum.", next: "available_cars" },
        ],
      },
      find_res: {
        ai: "Einen Moment... Gefunden! Ein Kompaktwagen, VW Golf. Passt das?",
        tr: "Bir dakika... Buldum! Kompakt bir araç, VW Golf. Uygun mu?",
        options: [
          { text: "Ja, perfekt.", tr: "Evet, mükemmel.", next: "license_check" },
          { text: "Kann ich etwas Größeres haben? Wir sind zu viert.", tr: "Daha büyük bir şey olabilir mi? Dört kişiyiz.", next: "upgrade" },
        ],
      },
      upgrade: {
        ai: "Ein Kombi kostet 20 Euro mehr pro Tag. Also 60 Euro extra für drei Tage.",
        tr: "Steyşon günde 20 Euro daha pahalı. Yani üç gün için 60 Euro fazla.",
        options: [
          { text: "Okay, den Kombi bitte.", tr: "Tamam, steyşonu lütfen.", next: "license_check" },
          { text: "Dann doch der Golf.", tr: "O zaman yine Golf.", next: "license_check" },
        ],
      },
      available_cars: {
        ai: "Wir haben heute einen Kleinwagen (45 €/Tag) oder einen Kombi (65 €/Tag) verfügbar.",
        tr: "Bugün küçük araba (45 €/gün) veya steyşon (65 €/gün) müsait.",
        options: [
          { text: "Kleinwagen reicht mir.", tr: "Küçük araba yeter.", next: "license_check" },
          { text: "Kombi bitte für mehr Platz.", tr: "Daha fazla alan için steyşon lütfen.", next: "license_check" },
        ],
      },
      license_check: {
        ai: "Darf ich Ihren Führerschein und Personalausweis sehen?",
        tr: "Ehliyetinizi ve kimliğinizi görebilir miyim?",
        options: [
          { text: "Hier — Führerschein und Reisepass.", tr: "İşte — ehliyet ve pasaport.", next: "insurance" },
        ],
      },
      insurance: {
        ai: "Möchten Sie Vollkaskoversicherung? 15 Euro extra pro Tag, kein Selbstbehalt.",
        tr: "Tam kasko ister misiniz? Günde 15 Euro fazla, ödeme payı yok.",
        options: [
          { text: "Ja bitte — Sicherheit ist wichtig.", tr: "Evet lütfen — güvenlik önemli.", next: "fuel_policy" },
          { text: "Nein, die Grundversicherung reicht.", tr: "Hayır, temel sigorta yeter.", next: "fuel_policy" },
        ],
      },
      fuel_policy: {
        ai: "Das Fahrzeug ist voll getankt — bitte voll zurückbringen. Sonst 2,50 Euro pro Liter.",
        tr: "Araç dolu tankla — lütfen dolu getirin. Yoksa litre başı 2,50 Euro.",
        options: [
          { text: "Verstanden. Kann ich auch tanklos zurückgeben?", tr: "Anladım. Tankı ödemeden de getirebilir miyim?", next: "tankless" },
          { text: "Kein Problem, ich tanke vor der Rückgabe.", tr: "Sorun değil, iade öncesi doldururum.", next: "end_good" },
        ],
      },
      tankless: {
        ai: "Ja, gegen 40 Euro Pauschale — dann kümmern wir uns ums Tanken.",
        tr: "Evet, 40 Euro götürü bedel karşılığında — biz yakıtla ilgilenirz.",
        options: [
          { text: "Nein danke, ich tanke selbst.", tr: "Hayır teşekkürler, kendim doldururum.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Alles klar! Hier sind die Schlüssel. Gute Fahrt!",
        tr: "Tamam! İşte anahtarlar. İyi yolculuklar!",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c35", titleDE: "Beim Jobcenter", titleTR: "İş ve İşçi Bulma Kurumunda",
    emoji: "🏢", character: { name: "Sachbearbeiterin Frau Holz", emoji: "📋" },
    level: "A2", xp: 90, tag: "Resmi İşler", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Morgen! Haben Sie einen Termin?",
        tr: "Günaydın! Randevunuz var mı?",
        options: [
          { text: "Ja, um 9 Uhr — Berdan Yılmaz.", tr: "Evet, saat 9'da — Berdan Yılmaz.", next: "registered" },
          { text: "Nein, ich möchte mich arbeitslos melden.", tr: "Hayır, işsizlik kaydı yaptırmak istiyorum.", next: "walk_in" },
        ],
      },
      walk_in: {
        ai: "Haben Sie Ihren Ausweis, Arbeitsbescheinigung und Kündigungsschreiben dabei?",
        tr: "Kimliğiniz, çalışma belgesi ve işten çıkarma yazınız yanınızda mı?",
        options: [
          { text: "Ja, ich habe alles.", tr: "Evet, her şeyim var.", next: "registered" },
          { text: "Die Kündigung vergessen. Kann ich sie nachreichen?", tr: "Fesih yazısını unuttum. Sonradan getirebilir miyim?", next: "later_docs" },
        ],
      },
      later_docs: {
        ai: "Ja, innerhalb von 7 Tagen. Heute machen wir Ihre Voranmeldung.",
        tr: "Evet, 7 gün içinde. Bugün ön kaydınızı yapıyoruz.",
        options: [
          { text: "Gut, danke.", tr: "Güzel, teşekkürler.", next: "registered" },
        ],
      },
      registered: {
        ai: "Seit wann sind Sie ohne Arbeit und warum haben Sie die Stelle verloren?",
        tr: "Ne zamandan beri işsizsiniz ve işi neden kaybettiniz?",
        options: [
          { text: "Seit dem 1. Juni — Firma hat geschlossen.", tr: "1 Haziran'dan beri — firma kapandı.", next: "benefit_calc" },
          { text: "Seit zwei Wochen — ich wurde gekündigt.", tr: "İki haftadır — işten çıkarıldım.", next: "benefit_calc" },
        ],
      },
      benefit_calc: {
        ai: "Arbeitslosengeld I: 60% Ihres letzten Nettogehalts. Wie viel haben Sie verdient?",
        tr: "İşsizlik parası I: Son net maaşınızın %60'ı. Ne kadar kazanıyordunuz?",
        options: [
          { text: "2.000 Euro netto.", tr: "Net 2.000 Euro.", next: "benefit_amount" },
          { text: "2.500 Euro netto.", tr: "Net 2.500 Euro.", next: "benefit_amount" },
        ],
      },
      benefit_amount: {
        ai: "Dann erhalten Sie ungefähr 1.200 Euro monatlich — für maximal 12 Monate.",
        tr: "O zaman aylık yaklaşık 1.200 Euro alırsınız — en fazla 12 ay.",
        options: [
          { text: "Wann kommt das erste Geld?", tr: "İlk para ne zaman gelir?", next: "first_payment" },
          { text: "Was muss ich tun, um den Anspruch zu erhalten?", tr: "Haktan yararlanmak için ne yapmalıyım?", next: "obligations" },
        ],
      },
      first_payment: {
        ai: "Nach etwa 3-4 Wochen auf Ihr Konto. Es gibt eine einwöchige Sperrfrist.",
        tr: "Yaklaşık 3-4 hafta sonra hesabınıza. Bir haftalık engelleme süresi var.",
        options: [
          { text: "Verstanden. Und was muss ich tun?", tr: "Anladım. Peki ne yapmalıyım?", next: "obligations" },
        ],
      },
      obligations: {
        ai: "Sie müssen aktiv Stellen suchen, jeden Monat nachweisen und Termine hier wahrnehmen.",
        tr: "Aktif iş aramanız, her ay kanıtlamanız ve buraya gelmeniz gerekiyor.",
        options: [],
        isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c36", titleDE: "Telefonische Reklamation", titleTR: "Telefonda Şikâyet",
    emoji: "📱", character: { name: "Kundenservice-Mitarbeiterin Frau Engel", emoji: "📞" },
    level: "A2", xp: 80, tag: "Telefon", startNode: "start",
    nodes: {
      start: {
        ai: "TelekomShop Kundenservice, guten Tag! Was kann ich für Sie tun?",
        tr: "TelekomShop Müşteri Hizmetleri, iyi günler! Size nasıl yardımcı olabilirim?",
        options: [
          { text: "Ich habe ein Problem mit meiner Rechnung — sie ist zu hoch.", tr: "Faturamda sorun var — çok yüksek.", next: "bill_high" },
          { text: "Das Gerät, das ich bestellt habe, ist nicht angekommen.", tr: "Sipariş ettiğim cihaz gelmedi.", next: "not_arrived" },
          { text: "Das gelieferte Produkt ist defekt.", tr: "Teslim edilen ürün arızalı.", next: "defective" },
        ],
      },
      bill_high: {
        ai: "Darf ich Ihre Kundennummer haben, damit ich die Rechnung anschauen kann?",
        tr: "Faturaya bakabilmem için müşteri numaranızı alabilir miyim?",
        options: [
          { text: "Ja, 458-221-009.", tr: "Evet, 458-221-009.", next: "bill_check" },
        ],
      },
      bill_check: {
        ai: "Ich sehe das Problem — es wurden internationale Gespräche berechnet. Haben Sie im Ausland telefoniert?",
        tr: "Sorunu görüyorum — uluslararası görüşmeler tahsil edilmiş. Yurt dışından mı aradınız?",
        options: [
          { text: "Nein! Ich war nicht im Ausland.", tr: "Hayır! Yurt dışında değildim.", next: "bill_error" },
          { text: "Ja, einmal aus der Türkei.", tr: "Evet, bir kez Türkiye'den.", next: "roaming_explain" },
        ],
      },
      bill_error: {
        ai: "Das ist dann ein Fehler. Ich leite das an unsere Abteilung weiter — innerhalb 5 Tagen wird es korrigiert.",
        tr: "O zaman bu bir hata. Departmanımıza iletiyorum — 5 gün içinde düzeltilecek.",
        options: [],
        isEnd: true, result: "success",
      },
      roaming_explain: {
        ai: "Roaming ist teuer ohne Paket — 0,50 Euro/Minute. Sie könnten ein Reisepaket für 9,99 Euro dazubuchen.",
        tr: "Paket olmadan roaming pahalı — dakika başı 0,50 Euro. 9,99 Euro'ya seyahat paketi ekleyebilirsiniz.",
        options: [
          { text: "Ja bitte, fügen Sie das Paket hinzu.", tr: "Evet lütfen, paketi ekleyin.", next: "end_good" },
        ],
      },
      not_arrived: {
        ai: "Wann haben Sie bestellt und was ist die Bestellnummer?",
        tr: "Ne zaman sipariş ettiniz ve sipariş numarası ne?",
        options: [
          { text: "Vor 10 Tagen, Nummer: B-78921.", tr: "10 gün önce, numara: B-78921.", next: "track_order" },
        ],
      },
      track_order: {
        ai: "Das Paket liegt seit 3 Tagen im Paketshop — bitte holen Sie es heute ab!",
        tr: "Paket 3 gündür paket dükkanında — lütfen bugün alın!",
        options: [
          { text: "Welcher Paketshop? Adresse?", tr: "Hangi paket dükkanı? Adres?", next: "shop_address" },
        ],
      },
      shop_address: {
        ai: "Rewe-Markt, Hauptstraße 45. Öffnungszeiten: Mo-Sa 8-20 Uhr.",
        tr: "Rewe-Markt, Hauptstraße 45. Çalışma saatleri: Pzt-Cmt 8-20.",
        options: [],
        isEnd: true, result: "success",
      },
      defective: {
        ai: "Das tut mir leid! Senden Sie das Gerät zurück — kostenfrei. Wir schicken ein neues.",
        tr: "Çok üzgünüm! Cihazı iade edin — ücretsiz. Yenisini gönderiyoruz.",
        options: [
          { text: "Wie schicke ich es zurück?", tr: "Nasıl iade ederim?", next: "return_info" },
        ],
      },
      return_info: {
        ai: "Ich schicke Ihnen per E-Mail ein Rücksendeetikett. Einfach drucken und aufkleben.",
        tr: "E-posta ile iade etiketi gönderiyorum. Sadece yazdırın ve yapıştırın.",
        options: [],
        isEnd: true, result: "success",
      },
      end_good: {
        ai: "Alles erledigt! Gibt es noch etwas?",
        tr: "Her şey halloldu! Başka bir şey var mı?",
        options: [], isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c37", titleDE: "Beim Facharzt — Internist", titleTR: "Uzman Doktorda — Dahiliyeci",
    emoji: "🔬", character: { name: "Dr. Lange (Internistin)", emoji: "🩺" },
    level: "A2", xp: 90, tag: "Sağlık", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag Herr Berdan! Ihr Hausarzt hat Sie überwiesen. Was sind Ihre Beschwerden?",
        tr: "İyi günler Bay Berdan! Doktorunuz sizi yönlendirdi. Şikâyetleriniz neler?",
        options: [
          { text: "Ich habe seit Monaten Magenprobleme — Sodbrennen und Schmerzen.", tr: "Aylardır mide sorunem var — yanma ve ağrı.", next: "stomach_history" },
          { text: "Mein Blutzucker ist laut meinem Arzt zu hoch.", tr: "Doktoruma göre kan şekerim çok yüksek.", next: "diabetes" },
        ],
      },
      stomach_history: {
        ai: "Seit wann genau und passiert es nach dem Essen oder auch davor?",
        tr: "Tam olarak ne zamandır ve yemekten sonra mı yemekten önce de mi?",
        options: [
          { text: "Seit 3 Monaten, hauptsächlich nach dem Essen.", tr: "3 aydır, esas olarak yemekten sonra.", next: "stomach_meds" },
          { text: "Immer — besonders morgens auf nüchternen Magen.", tr: "Sürekli — özellikle sabah aç karnına.", next: "stomach_meds" },
        ],
      },
      stomach_meds: {
        ai: "Nehmen Sie schon etwas dagegen ein? Antazida oder Protonenpumpenhemmer?",
        tr: "Bunun için bir şey kullanıyor musunuz? Antasitler veya proton pompası inhibitörleri?",
        options: [
          { text: "Nur manchmal Antazida aus der Apotheke.", tr: "Sadece bazen eczaneden antasit.", next: "gastroscopy" },
          { text: "Nein, bisher nichts.", tr: "Hayır, şimdiye kadar hiçbir şey.", next: "gastroscopy" },
        ],
      },
      gastroscopy: {
        ai: "Ich empfehle eine Magenspiegelung. Haben Sie eine Angst vor dem Eingriff?",
        tr: "Gastroskopi öneriyorum. İşlemden korkunuz var mı?",
        options: [
          { text: "Ein bisschen. Ist es schmerzhaft?", tr: "Biraz. Acıtıyor mu?", next: "procedure_explain" },
          { text: "Nein, machen wir es.", tr: "Hayır, yapalım.", next: "schedule_scope" },
        ],
      },
      procedure_explain: {
        ai: "Mit Betäubungsmittel ist es kaum spürbar. Dauert nur 15 Minuten.",
        tr: "Anestezi ile neredeyse hissedilmiyor. Sadece 15 dakika sürüyor.",
        options: [
          { text: "Okay, dann mache ich es.", tr: "Tamam, yapıyorum.", next: "schedule_scope" },
        ],
      },
      schedule_scope: {
        ai: "Nächsten Donnerstag um 8 Uhr nüchtern kommen. Kein Essen 8 Stunden vorher.",
        tr: "Gelecek Perşembe sabah 8'de aç gelin. 8 saat öncesinden yemek yok.",
        options: [],
        isEnd: true, result: "success",
      },
      diabetes: {
        ai: "Wie hoch war der Nüchternblutzucker?",
        tr: "Açlık kan şekeri kaç çıktı?",
        options: [
          { text: "126 mg/dl laut dem Test.", tr: "Teste göre 126 mg/dl.", next: "diabetes_action" },
          { text: "145 mg/dl — mein Arzt war besorgt.", tr: "145 mg/dl — doktorum endişelendi.", next: "diabetes_action" },
        ],
      },
      diabetes_action: {
        ai: "Das deutet auf Prä-Diabetes hin. Kein Grund zur Panik — mit Diät und Bewegung oft reversibel.",
        tr: "Bu pre-diyabete işaret ediyor. Panik nedeni yok — diyet ve egzersizle çoğu zaman geri dönüşümlü.",
        options: [
          { text: "Was soll ich essen und was vermeiden?", tr: "Ne yemeliyim ve nelerden kaçınmalıyım?", next: "diet_advice" },
        ],
      },
      diet_advice: {
        ai: "Weniger Zucker, Weißbrot, Pasta. Mehr Gemüse, Vollkorn und Sport — 30 Min täglich.",
        tr: "Daha az şeker, beyaz ekmek, makarna. Daha fazla sebze, tam tahıl ve spor — günlük 30 dakika.",
        options: [],
        isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c38", titleDE: "Bei der Ausländerbehörde", titleTR: "Yabancılar Dairesinde",
    emoji: "🛂", character: { name: "Sachbearbeiter Herr Siebert", emoji: "📄" },
    level: "A2", xp: 95, tag: "Resmi İşler", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Was ist Ihr Anliegen heute?",
        tr: "İyi günler! Bugünkü talebiniz nedir?",
        options: [
          { text: "Ich möchte meine Aufenthaltserlaubnis verlängern.", tr: "Oturma iznimi uzatmak istiyorum.", next: "permit_expiry" },
          { text: "Ich möchte eine Niederlassungserlaubnis beantragen.", tr: "Daimi oturma izni başvurusu yapmak istiyorum.", next: "permanent_req" },
          { text: "Ich brauche eine Arbeitsgenehmigung.", tr: "Çalışma iznine ihtiyacım var.", next: "work_permit" },
        ],
      },
      permit_expiry: {
        ai: "Wann läuft Ihre aktuelle Erlaubnis ab?",
        tr: "Mevcut izniniz ne zaman bitiyor?",
        options: [
          { text: "In drei Wochen.", tr: "Üç hafta sonra.", next: "permit_docs" },
          { text: "Sie ist schon abgelaufen — vor einem Monat.", tr: "Çoktan doldu — bir ay önce.", next: "expired_warning" },
        ],
      },
      expired_warning: {
        ai: "Das ist ein Problem! Sie leben seit einem Monat ohne gültigen Aufenthaltstitel. Wir müssen das sofort regeln.",
        tr: "Bu sorun! Bir aydır geçerli oturma izni olmadan yaşıyorsunuz. Bunu derhal çözmemiz gerekiyor.",
        options: [
          { text: "Ich wusste nicht — was passiert jetzt?", tr: "Bilmiyordum — şimdi ne olacak?", next: "permit_docs" },
        ],
      },
      permit_docs: {
        ai: "Sie brauchen: Reisepass, biometrisches Foto, Mietvertrag, Einkommensnachweise und Anmeldebestätigung.",
        tr: "İhtiyacınız olan: Pasaport, biyometrik fotoğraf, kira sözleşmesi, gelir belgesi ve ikametgah onayı.",
        options: [
          { text: "Ich habe alles dabei.", tr: "Hepsini getirdim.", next: "processing" },
          { text: "Ich habe die Einkommensnachweise vergessen.", tr: "Gelir belgelerini unutdum.", next: "missing_doc" },
        ],
      },
      missing_doc: {
        ai: "Dann können wir heute nur einen Vorantrag stellen. Bringen Sie die Nachweise in 14 Tagen.",
        tr: "O zaman bugün sadece ön başvuru yapabiliriz. Belgeleri 14 gün içinde getirin.",
        options: [],
        isEnd: true, result: "success",
      },
      processing: {
        ai: "Sehr gut. Die Verlängerung dauert 4-6 Wochen. Sie bekommen eine Fiktionsbescheinigung.",
        tr: "Çok güzel. Uzatma 4-6 hafta sürer. Bir ikamet belgesi alacaksınız.",
        options: [
          { text: "Was ist eine Fiktionsbescheinigung?", tr: "İkamet belgesi nedir?", next: "fiction_explain" },
          { text: "Was kostet die Verlängerung?", tr: "Uzatma ne kadar tutuyor?", next: "fee" },
        ],
      },
      fiction_explain: {
        ai: "Das ist ein Dokument, das bestätigt, dass Ihr Antrag läuft — Sie dürfen legal bleiben.",
        tr: "Başvurunuzun devam ettiğini onaylayan belge — yasal olarak kalabilirsiniz.",
        options: [
          { text: "Und was kostet es?", tr: "Ve ne kadar tutuyor?", next: "fee" },
        ],
      },
      fee: {
        ai: "Die Verlängerungsgebühr ist 100 Euro. Bar oder Überweisung?",
        tr: "Uzatma ücreti 100 Euro. Nakit mi havale mi?",
        options: [],
        isEnd: true, result: "success",
      },
      permanent_req: {
        ai: "Wie lange leben Sie schon in Deutschland?",
        tr: "Almanya'da ne kadar zamandır yaşıyorsunuz?",
        options: [
          { text: "Seit fünf Jahren.", tr: "Beş yıldır.", next: "permanent_check" },
        ],
      },
      permanent_check: {
        ai: "Gut, 5 Jahre reichen. Sie brauchen auch B1-Deutschkenntnisse. Haben Sie ein Zertifikat?",
        tr: "Güzel, 5 yıl yeterli. B1 Almanca seviyesi de gerekiyor. Sertifikanız var mı?",
        options: [
          { text: "Ja, ich habe das Goethe B1 Zertifikat.", tr: "Evet, Goethe B1 sertifikam var.", next: "permanent_docs" },
          { text: "Nein, noch nicht.", tr: "Hayır, henüz değil.", next: "need_certificate" },
        ],
      },
      need_certificate: {
        ai: "Dann machen Sie zuerst das B1 Zertifikat und kommen Sie wieder. Das ist Pflicht.",
        tr: "O zaman önce B1 sertifikasını alın ve tekrar gelin. Bu zorunlu.",
        options: [],
        isEnd: true, result: "success",
      },
      permanent_docs: {
        ai: "Gut! Bringen Sie noch Steuerbescheide der letzten 3 Jahre und Rentenversicherungsnachweis.",
        tr: "Güzel! Son 3 yılın vergi beyannameleri ve emeklilik sigortası belgesi de getirin.",
        options: [],
        isEnd: true, result: "success",
      },
      work_permit: {
        ai: "Haben Sie schon ein konkretes Jobangebot oder suchen Sie noch?",
        tr: "Somut bir iş teklifiniz var mı yoksa hâlâ mı arıyorsunuz?",
        options: [
          { text: "Ja, ich habe einen Arbeitsvertrag.", tr: "Evet, iş sözleşmem var.", next: "work_docs" },
        ],
      },
      work_docs: {
        ai: "Super! Bringen Sie den Vertrag, Ihren Pass und Qualifikationsnachweise.",
        tr: "Harika! Sözleşmeyi, pasaportunuzu ve nitelik belgelerinizi getirin.",
        options: [],
        isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c39", titleDE: "Versicherung abschließen", titleTR: "Sigorta Yaptırmak",
    emoji: "📋", character: { name: "Versicherungsberater Herr Noll", emoji: "🛡️" },
    level: "A2", xp: 85, tag: "Finans", startNode: "start",
    nodes: {
      start: {
        ai: "Guten Tag! Für welche Versicherung interessieren Sie sich?",
        tr: "İyi günler! Hangi sigorta ilginizi çekiyor?",
        options: [
          { text: "Ich brauche eine Haftpflichtversicherung.", tr: "Sorumluluk sigortasına ihtiyacım var.", next: "liability" },
          { text: "Ich möchte eine Hausratversicherung.", tr: "Ev eşyası sigortası istiyorum.", next: "home_contents" },
          { text: "Ich suche eine Krankenversicherung.", tr: "Sağlık sigortası arıyorum.", next: "health" },
        ],
      },
      liability: {
        ai: "Haftpflicht ist sehr wichtig! Sie schützt Sie wenn Sie jemandem versehentlich schaden.",
        tr: "Sorumluluk sigortası çok önemli! Yanlışlıkla birine zarar verdiğinizde sizi korur.",
        options: [
          { text: "Was kostet das im Monat?", tr: "Aylık ne kadar tutuyor?", next: "liability_price" },
        ],
      },
      liability_price: {
        ai: "Ab 5 Euro im Monat — deckt Schäden bis 10 Millionen Euro ab.",
        tr: "Aylık 5 Euro'dan — 10 milyon Euro'ya kadar hasarı karşılar.",
        options: [
          { text: "Das ist sehr günstig! Ich nehme es.", tr: "Bu çok ucuz! Bunu alıyorum.", next: "sign_up" },
          { text: "Gibt es Unterschiede bei den Tarifen?", tr: "Tarifler arasında fark var mı?", next: "liability_tiers" },
        ],
      },
      liability_tiers: {
        ai: "Basic 5 €, Komfort 8 € (plus Auslandsschutz), Premium 12 € (plus Rechtsschutz).",
        tr: "Temel 5 €, Konfor 8 € (artı yurt dışı koruma), Premium 12 € (artı hukuki koruma).",
        options: [
          { text: "Komfort reicht mir.", tr: "Konfor yeter.", next: "sign_up" },
          { text: "Premium — ich will volle Deckung.", tr: "Premium — tam kapsam istiyorum.", next: "sign_up" },
        ],
      },
      home_contents: {
        ai: "Hausrat versichert Ihre Möbel, Elektronik und Kleidung gegen Einbruch, Feuer und Wasser.",
        tr: "Ev eşyası sigortası mobilyalarınızı, elektroniği ve kıyafetleri hırsızlık, yangın ve suya karşı güvence altına alır.",
        options: [
          { text: "Wie viel kostet es ungefähr?", tr: "Yaklaşık ne kadar tutuyor?", next: "home_price" },
        ],
      },
      home_price: {
        ai: "Richtwert: 1,50 Euro pro m². Bei 65m² wären das ca. 100 Euro/Jahr.",
        tr: "Oran: m² başı 1,50 Euro. 65m² için yılda yaklaşık 100 Euro.",
        options: [
          { text: "Das klingt fair. Bitte abschließen.", tr: "Bu adil geliyor. Lütfen yaptıralım.", next: "sign_up" },
        ],
      },
      health: {
        ai: "Sind Sie gesetzlich versichert oder privat? Oder sind Sie neu in Deutschland?",
        tr: "Yasal sigortalı mısınız yoksa özel mi? Yoksa Almanya'da yeni misiniz?",
        options: [
          { text: "Ich bin neu in Deutschland.", tr: "Almanya'da yeniyim.", next: "health_new" },
          { text: "Ich möchte privat wechseln.", tr: "Özele geçmek istiyorum.", next: "health_private" },
        ],
      },
      health_new: {
        ai: "Als Arbeitnehmer sind Sie automatisch gesetzlich pflichtversichert. Ihr Arbeitgeber meldet Sie an.",
        tr: "Çalışan olarak otomatik olarak zorunlu sağlık sigortasına dahilsiniz. İşvereniniz sizi kaydettiriyor.",
        options: [],
        isEnd: true, result: "success",
      },
      health_private: {
        ai: "Private Krankenversicherung lohnt sich ab 5.500 Euro Bruttoeinkommen. Verdienen Sie mehr?",
        tr: "Özel sağlık sigortası 5.500 Euro brüt gelirden itibaren avantajlı. Daha fazla mı kazanıyorsunuz?",
        options: [
          { text: "Ja, mehr als 6.000 Euro brutto.", tr: "Evet, 6.000 Euro brütten fazla.", next: "sign_up" },
        ],
      },
      sign_up: {
        ai: "Perfekt! Ich benötige Ihre persönlichen Daten und IBAN für den Lastschrifteinzug.",
        tr: "Mükemmel! Kişisel bilgilerinize ve otomatik ödeme için IBAN'ınıza ihtiyacım var.",
        options: [],
        isEnd: true, result: "success",
      },
    },
  },

  {
    id: "c40", titleDE: "Kulturveranstaltung — Karten buchen", titleTR: "Kültür Etkinliği — Bilet Almak",
    emoji: "🎭", character: { name: "Theaterkasse Frau Zorn", emoji: "🎪" },
    level: "A2", xp: 75, tag: "Kültür", startNode: "start",
    nodes: {
      start: {
        ai: "Staatstheater Berlin, guten Tag! Was darf ich für Sie tun?",
        tr: "Berlin Devlet Tiyatrosu, iyi günler! Ne yapabilirim sizin için?",
        options: [
          { text: "Ich möchte Karten für die Oper 'Die Zauberflöte' buchen.", tr: "'Sihirli Flüt' operası için bilet almak istiyorum.", next: "which_date" },
          { text: "Was haben Sie diese Woche im Programm?", tr: "Bu hafta programınızda ne var?", next: "program" },
        ],
      },
      program: {
        ai: "Diese Woche: Montag Beethoven-Konzert, Mittwoch 'Die Fledermaus', Freitag Ballett 'Schwanensee'.",
        tr: "Bu hafta: Pazartesi Beethoven Konseri, Çarşamba 'Yarasa', Cuma Bale 'Kuğu Gölü'.",
        options: [
          { text: "Schwanensee am Freitag klingt wunderbar!", tr: "Cuma günü Kuğu Gölü harika geliyor!", next: "which_date" },
          { text: "Beethoven-Konzert am Montag bitte.", tr: "Pazartesi Beethoven Konseri lütfen.", next: "which_date" },
        ],
      },
      which_date: {
        ai: "Für welches Datum? Wir haben noch Karten für Freitag, Samstag und Sonntag.",
        tr: "Hangi tarih için? Cuma, Cumartesi ve Pazar için hâlâ biletimiz var.",
        options: [
          { text: "Freitag, den 26. bitte.", tr: "Cuma, 26'sında lütfen.", next: "how_many_tickets" },
          { text: "Samstag wäre besser.", tr: "Cumartesi daha iyi olur.", next: "how_many_tickets" },
        ],
      },
      how_many_tickets: {
        ai: "Wie viele Karten und welche Kategorie — Parkett, Rang 1 oder Rang 2?",
        tr: "Kaç bilet ve hangi kategori — parket, 1. balkon veya 2. balkon?",
        options: [
          { text: "Zwei Karten Parkett, bitte.", tr: "İki tane parket bileti, lütfen.", next: "parkett_price" },
          { text: "Zwei Karten Rang 1.", tr: "1. balkonda iki kart.", next: "rang_price" },
        ],
      },
      parkett_price: {
        ai: "Parkett kostet 85 Euro pro Karte — also 170 Euro zusammen. Haben Sie eine Theaterkarte?",
        tr: "Parket kart başına 85 Euro — yani toplam 170 Euro. Tiyatro kartınız var mı?",
        options: [
          { text: "Ja, hier — 15% Rabatt?", tr: "Evet, işte — %15 indirim?", next: "discount_theater" },
          { text: "Nein, aber ich bin Student.", tr: "Hayır, ama öğrenciyim.", next: "student_discount" },
        ],
      },
      rang_price: {
        ai: "Rang 1 kostet 60 Euro pro Karte — 120 Euro für zwei. Ermäßigung?",
        tr: "1. balkon kart başına 60 Euro — iki kişi 120 Euro. İndiriminiz var mı?",
        options: [
          { text: "Nein, ich zahle voll.", tr: "Hayır, tam fiyat ödüyorum.", next: "payment_method" },
          { text: "Ich bin Rentner — gibt es Ermäßigung?", tr: "Emekliyim — indirim var mı?", next: "senior_discount" },
        ],
      },
      discount_theater: {
        ai: "Ja, mit Theaterkarte: 15% Rabatt. Macht dann 144 Euro 50.",
        tr: "Evet, tiyatro kartıyla %15 indirim. O zaman 144 Euro 50.",
        options: [
          { text: "Sehr gut! Ich nehme sie.", tr: "Çok iyi! Alıyorum.", next: "payment_method" },
        ],
      },
      student_discount: {
        ai: "Ja! Studenten zahlen 50% — also 85 Euro für zwei Karten. Bitte Studienausweis zeigen.",
        tr: "Evet! Öğrenciler %50 öder — yani iki bilet 85 Euro. Lütfen öğrenci kimliğini gösterin.",
        options: [
          { text: "Hier ist mein Studienausweis.", tr: "İşte öğrenci kimliğim.", next: "payment_method" },
        ],
      },
      senior_discount: {
        ai: "Ja, Senioren 30% Rabatt. Also 84 Euro für zwei.",
        tr: "Evet, yaşlılara %30 indirim. Yani iki bilet 84 Euro.",
        options: [
          { text: "Wunderbar! Ich nehme es.", tr: "Harika! Bunu alıyorum.", next: "payment_method" },
        ],
      },
      payment_method: {
        ai: "Wie möchten Sie bezahlen? Karte, Überweisung oder bar?",
        tr: "Nasıl ödemek istersiniz? Kart, havale veya nakit?",
        options: [
          { text: "Kreditkarte bitte.", tr: "Kredi kartı lütfen.", next: "end_good" },
          { text: "Bar, hier ist das Geld.", tr: "Nakit, işte para.", next: "end_good" },
        ],
      },
      end_good: {
        ai: "Perfekt! Hier sind Ihre Karten. Genießen Sie die Vorstellung!",
        tr: "Mükemmel! İşte biletleriniz. Gösteriyi keyfini çıkarın!",
        options: [], isEnd: true, result: "success",
      },
    },
  },
];
