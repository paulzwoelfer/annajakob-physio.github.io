# Requirements

## Ziel
- Die bestehende Jekyll-Website soll visuell und strukturell modernisiert werden.
- Als Referenz für Stil und Seitenaufbau dient `/Users/paulzwolfer/Downloads/index.html`.
- Logos, Bilder und bestehende Inhalte aus dem aktuellen Projekt sollen weiterverwendet werden.
- Die Umsetzung soll nicht als statisches Einzel-HTML übernommen werden, sondern in Jekyll-Komponenten und SCSS-Partials aufgeteilt werden.
- Vorhandene Komponenten dürfen und sollen dafür angepasst werden.
- Tests sollen nicht ergänzt oder beschrieben werden.

## Umgesetzte KI-Änderungen
- Die Basislayouts wurden neu aufgebaut: `base`, `home`, `page` und `404` nutzen jetzt eine moderne semantische Struktur statt der bisherigen Bootstrap-orientierten Struktur.
- Die Startseite übernimmt jetzt die Struktur der Referenzvorlage mit Sticky-Navigation, großem Hero, Kartenraster für Behandlungen, modernisiertem Ablauf-Block, Terminbereich, Adressbereich und modernisiertem Footer.
- Die Navigation wurde als eigene Jekyll-Komponente neu strukturiert und auf ein responsives Mobile-Menü mit Toggle umgestellt.
- Die Sektion `services.html` wurde in ein kartenbasiertes Layout mit integrierten SVG-Illustrationen pro Leistungsblock überführt.
- Die Sektion `procedure.html` wurde in ein zweispaltiges Ablaufmodul mit hervorgehobenen Schritten und Intro-Text im Stil der Referenz umgebaut.
- Die Sektion `contact.html` wurde auf eine moderne Terminbuchungsstruktur umgestellt: prominenter Online-Buchungsblock plus separate Kontaktkarten für Telefon, E-Mail und Instagram.
- Die Sektion `adresse.html` wurde auf ein zweispaltiges Layout mit Standorttext, Google-Maps-Einbettung, Routenbutton und Praxisbild umgebaut.
- Die Sektion `opening.html` wurde als eigenständige moderne Info-Karte neu gestaltet, damit die bestehende Öffnungszeiten-/Erreichbarkeitsinformation weiterhin sauber eingebunden bleibt.
- Der Footer wurde vollständig ersetzt und an die neue Designsprache angepasst, inklusive Kontaktlinks und Legal-Navigation.
- Das Verhalten in `assets/js/main.js` wurde neu implementiert: Sticky-Navigation mit Scroll-Zustand, Mobile-Menü-Logik, automatische Footer-Jahreszahl und Reveal-Animationen für `fade-up`-Elemente.
- Das Styling wurde vollständig in SCSS-Partials organisiert und modernisiert. Betroffen sind insbesondere:
  - `_sass/physio/_general.scss`
  - `_sass/physio/_nav.scss`
  - `_sass/physio/_header.scss`
  - `_sass/physio/_services.scss`
  - `_sass/physio/_procedure.scss`
  - `_sass/physio/_contact.scss`
  - `_sass/physio/_adresse.scss`
  - `_sass/physio/_opening.scss`
  - `_sass/physio/_text-page.scss`
  - `_sass/physio/_footer.scss`
  - `_sass/physio/_404.scss`
- Die SCSS-Importstruktur in `_sass/physio/_all.scss` wurde erweitert, damit die neue Partialisierung vollständig eingebunden ist.
- Die Menüstruktur in `_data/menus.yml` wurde angepasst, damit die Startnavigation zur neuen Hero-Sektion passt.
- Die Umsetzung wurde per `bundle exec jekyll build` erfolgreich gebaut.
