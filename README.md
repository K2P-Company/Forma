# Forma — strona salonu fryzjerskiego

Projekt demonstracyjny do portfolio. Salon jest fikcyjny. Strona zawiera pierwszy ekran, usługi i cennik, podejście salonu, zespół, galerię inspiracji i kontakt. Przyciski wizyty prowadzą do kontaktu; nie zapisują rezerwacji. Dane kontaktowe, osoby i ceny są przykładowe.

## Jak otworzyć

Możesz otworzyć `index.html` bezpośrednio w przeglądarce. W edytorze możesz również użyć podglądu strony lub lokalnego serwera. Strona nie wymaga instalowania paczek.

## Trzy pliki, trzy zadania

- `index.html` — treść i kolejność elementów. Nagłówek `h1` to główny tytuł, `p` to akapit, `a` to link, a `button` to przycisk.
- `styles.css` — wygląd: kolory, rozmiary, odstępy i układ. Początek pliku zawiera wspólne kolory. `.hero` układa tekst i zdjęcie obok siebie przez `grid-template-columns: 1fr 1fr` — dwie równe kolumny.
- `script.js` — reakcje na kliknięcia. `addEventListener('click', ...)` znaczy „gdy ktoś kliknie, wykonaj tę czynność”. `classList.toggle` dodaje lub usuwa klasę, dzięki której menu staje się widoczne.

## Co możesz zmienić sam

1. Zmień „Twoje włosy” w `index.html`, zapisz i odśwież przeglądarkę.
2. W `styles.css` zmień `--accent`, żeby podmienić kolor przycisków i wyróżnionych słów.
3. Zmień `gap: 7%` w `.hero`, żeby zmienić odstęp między tekstem a zdjęciem.
4. Reguły `@media (max-width: 960px)` działają tylko przy węższym ekranie. Tam `grid-template-columns: 1fr` układa elementy w jednej kolumnie.

## Zdjęcia

Strona ładuje sześć zdjęć z Unsplash i wymaga do tego internetu. Lista adresów oraz stan przygotowania materiałów są opisane w [ZDJECIA.md](ZDJECIA.md). Autorzy i warunki wykorzystania poszczególnych zdjęć wymagają potwierdzenia przed publikacją demo.

## Publiczny kod i prawa do projektu

Repozytorium przygotowano do publicznego pokazania kodu jako projektu portfolio. Nie dodano licencji open source. Sam publiczny dostęp nie oznacza udzielenia licencji na dowolne wykorzystanie projektu. Materiały zewnętrzne podlegają odrębnym prawom ich autorów.

## Publikacja demo

To statyczna strona: hosting powinien publikować katalog z plikiem `index.html`. Nie ma etapu budowania ani zależności npm. Adres działającego demo dodamy po wyborze hostingu i potwierdzeniu materiałów zdjęciowych.

## Następna część

Ocena całej strony na komputerze i telefonie, dobór docelowych zdjęć i przygotowanie do portfolio. Menu mobilne zmienia napis po otwarciu, zamyka się po wybraniu sekcji, kliknięciu poza nim i zmianie rozmiaru ekranu. Escape zamyka menu i przywraca wybór przycisku klawiaturą. Bez JavaScriptu linki menu pozostają widoczne.
