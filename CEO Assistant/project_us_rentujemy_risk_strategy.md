---
name: Ryzyko i strategia — czynności sprawdzające US dla RENTUJEMY
description: Ocena ryzyka, typowy przebieg czynności sprawdzających US i strategia odpowiedzi dla RENTUJEMY sp. z o.o.
type: project
---

## Kontekst

Dokument dotyczy sprawy 1449-SKA-8.4033.22.2026 (Trzeci US Warszawa-Śródmieście) oraz ogólnego podejścia RENTUJEMY sp. z o.o. do czynności sprawdzających urzędu skarbowego w zakresie VAT i transakcji wewnątrzwspólnotowych.

## Co Urząd Skarbowy typowo sprawdza i o co pyta

Czynności sprawdzające (art. 272 Ordynacji podatkowej) to etap przed kontrolą podatkową. US korzysta z danych VIES (VAT Information Exchange System) — systemu UE, który zestawia co polska spółka deklaruje jako import usług z tym, co kontrahenci z innych krajów UE deklarują jako WSU (wewnątrzwspólnotowe świadczenie usług) na rzecz tej spółki. Rozbieżności są wykrywane automatycznie.

Typowe żądania urzędu:
- Wyjaśnienie charakteru transakcji (kto, co, dlaczego)
- Korekty JPK_V7M i/lub VAT-UE / VAT-UEK jeśli dane są błędne
- Kopie faktur i potwierdzenia zapłaty (przy dużej liczbie dokumentów: kilka przykładowych kompletów z najwyższymi kwotami + oświadczenie o prawidłowości pozostałych)
- Oświadczenie podpisane przez osobę upoważnioną do reprezentowania spółki

Typowy termin: 7 dni od otrzymania wezwania.

## Ocena ryzyka — sprawa z kwietnia 2026

### Ryzyko ogólne: NISKIE-ŚREDNIE

| Obszar | Ryzyko | Uzasadnienie |
|---|---|---|
| Finansowe (zaległość VAT) | **NISKIE** | Import usług (Airbnb, Booking, Alphateam) rozliczany jako odwrotne obciążenie — VAT należny = VAT naliczony w tym samym okresie. Korekty JPK_V7M neutralne podatkowo. |
| Odsetki za zwłokę | **NISKIE-ŚREDNIE** | Możliwe jeśli korekty dotyczyłyby VAT należnego bez równoczesnego VAT naliczonego. W tym przypadku przy prawidłowej korekcie obu stron — ryzyko minimalne. |
| Sankcja VAT (15-20%) | **NISKIE** | Przy dobrowolnej korekcie złożonej przed wszczęciem kontroli podatkowej sankcja zazwyczaj nie jest stosowana lub jest znacznie niższa. |
| WDT (2.164 zł) | **NISKIE** | Kwota symboliczna. Wymaga wyjaśnienia z Chandon Waller, prawdopodobnie korekta VAT-UEK — bez konsekwencji finansowych. |
| Wykreślenie z rejestru VAT | **WYSOKIE jeśli brak odpowiedzi** | Brak odpowiedzi w terminie 7 dni może skutkować wykreśleniem z VAT i VAT-UE bez ostrzeżenia. Dla RENTUJEMY byłoby to katastrofalne operacyjnie. |
| Grzywna za niestawiennictwo | **DO 3.700 zł** | Przy braku odpowiedzi. Przy terminowej odpowiedzi — nie grozi. |

### Kluczowy wniosek
Sprawa jest rutynowa i finansowo niska, pod warunkiem że odpowiedź zostanie wysłana w terminie. Główne ryzyko to proceduralne — ignorowanie wezwania.

## Struktura księgowości i odpowiedzialności

- **Za rok 2025:** Chandon Waller & Partners Sp. z o.o. prowadziło rozliczenia VAT, składało JPK_V7M i informacje VAT-UE. Posiadają UPL-1 (pełnomocnictwo podatkowe) uprawniające ich do działania przed US. Odpowiadają za złożenie ewentualnych korekt za 2025 r.
- **Od 2026:** Księgowość prowadzona wewnętrznie przez RENTUJEMY. Odpowiedzialność za JPK_V7M, VAT-UE i terminowość rozliczeń przechodzi na spółkę.

## Strategia — sprawa kwiecień 2026

### Krok 1 — Natychmiastowy (do ~10 kwietnia 2026)
Wysłanie pisma wyjaśniającego do US (plik: `Odpowiedz_US_1449-SKA-8.4033.22.2026.docx`), podpisanego przez Adriana Barwickiego, Prezesa Zarządu. Pismo:
- Wyjaśnia charakter każdej z trzech transakcji
- Informuje, że sprawa jest weryfikowana przez biuro rachunkowe (Chandon Waller)
- Nie przypisuje winy żadnej ze stron
- Deklaruje gotowość do złożenia korekt jeśli zajdzie taka potrzeba
- Zawiera opis mechanizmu rozliczeń Airbnb/Booking (netting z wypłat gości)

Wysyłka: e-mail na 3us.warszawa.srodmiescie@mf.gov.pl lub ADE lub e-Urząd Skarbowy.

### Krok 2 — Chandon Waller (do 14 kwietnia 2026)
Potwierdzić z Chandon Waller, że:
- Analizują rozbieżność 96.195 zł vs 771.154 zł importu usług za Q4 2025
- Znają termin 7 dni i zdążą z ewentualnymi korektami JPK_V7M (10, 11, 12/2025)
- Mają aktywny UPL-1 dla tego urzędu skarbowego

### Krok 3 — Dokumenty (równolegle)
Zebrać przykładowe faktury za Q4 2025 od:
- Booking.com (NL 805734958B01) — najwyższa kwota (463.560 zł), priorytet
- Airbnb (IE 9827384L) — (187.735 zł)
- Alphateam Hackers (DE 320543677) — (119.859 zł)
Faktury Booking i Airbnb dostępne w panelach online. Dołączyć potwierdzenia wypłat (wyciągi).

### Krok 4 — Monitoring
Śledzić czy US potwierdził zamknięcie sprawy lub wniósł dodatkowe żądania.

## Strategia na przyszłość (od 2026, księgowość wewnętrzna)

### Prewencja — jak unikać takich spraw

1. **Weryfikacja VIES przed deklaracją** — sprawdzać numery VAT kontrahentów EU w systemie VIES przed wykazaniem importu usług
2. **Spójność kwot** — kwoty importu usług w JPK_V7M (pola 29-30) powinny być spójne z kwotami wykazywanymi przez kontrahentów. Booking i Airbnb wysyłają zestawienia miesięczne — używać ich jako bazy
3. **Terminowość** — import usług wykazywać w miesiącu powstania obowiązku podatkowego (co do zasady: miesiąc wystawienia faktury lub miesiąc wykonania usługi, w zależności co wcześniej)
4. **Dokumentacja** — przechowywać faktury i zestawienia od Booking/Airbnb/Alphateam w sposób umożliwiający szybkie wyszukanie na żądanie US

### Jak odpowiadać na wezwania US

- Zawsze odpowiadać w terminie — nawet jeśli nie masz jeszcze pełnych danych, wyślij pismo informujące że sprawa jest w toku
- Ton: rzeczowy, kooperatywny, bez emocji
- Nie przypisywać z góry winy biurom rachunkowym ani innym podmiotom — US może to uznać za próbę przerzucenia odpowiedzialności
- Dołączać faktury z najwyższymi kwotami (nie wszystkie) + oświadczenie o prawidłowości pozostałych
- Wyjaśniać mechanizm biznesowy prostym językiem (np. netting Airbnb/Booking)
- Pismo podpisuje osoba uprawniona do reprezentacji spółki (Prezes Zarządu) lub pełnomocnik z UPL-1

## Historia spraw

| Data | Sprawa | Status |
|---|---|---|
| 07.04.2026 | Wezwanie 1449-SKA-8.4033.22.2026, Trzeci US Warszawa-Śródmieście — WDT 10/2025 + import usług Q4 2025 | W toku — odpowiedź przygotowana |
| wcześniej | Prośby o wyjaśnienia (bliżej nieokreślone) | Zamknięte |
