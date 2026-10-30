---
title: "4Fit: Mobilní fitness ekosystém"
description: "Komerční multiplatformní fitness aplikace propojující cvičence, posilovny a trenéry s geolokačním modulem FitCheck a Supabase architekturou."
date: 2024-06-15
weight: 10
---

<div class="project-meta-box">
  <div class="project-meta-links">
    <a href="https://samcejko.eu/4fit/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
      <svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      <span>Živý web</span>
    </a>
  </div>
  <div class="project-meta-specs">
    <div>Platforma: <strong>iOS, Android & Web Admin</strong></div>
    <div>Stack: <strong>Flutter, Dart, Supabase, PostgreSQL</strong></div>
    <div>Stav: <strong>Closed Beta</strong></div>
  </div>
</div>

## K čemu projekt slouží a jaký problém řeší

Klasické fitness aplikace se obvykle omezují na pasivní digitální záznamníky vah nebo generátory předtočených cvičebních videí. V reálném světě však fitness průmysl naráží na zásadní systémový problém: **vysokou míru předčasného ukončení cvičení (churn rate)** a naprostou roztříštěnost komunikace mezi třemi klíčovými aktéry:

1. **Běžný návštěvník posilovny (Cvičenec):** Po počátečním lednovém nadšení ztrácí do 3 až 6 týdnů motivaci. Chybí mu vnější disciplína, závazek (accountability) a najít spolehlivého trenéra je složitý proces plný nejistoty ohledně kvalifikace, cen a přístupu.
2. **Osobní trenér:** Tráví neúměrné množství času neplacenou administrativou — naháněním klientů ve zprávách na Instagramu či WhatsAppu, řešením omluv na poslední chvíli a chaotickým plánováním volných slotů.
3. **Provozovatel fitness centra (Posilovna):** Bojuje s odlivem nových členů a nemá efektivní nástroj, jak návštěvníky dlouhodobě udržet a propojit je s kvalitními trenéry, kteří v jejich prostorách působí.

**4Fit** překlenuje tuto propast jednotným digitálním ekosystémem postaveným na **čtyřech pilířích:**

* **FitCheck (Geolokační retence):** Motivuje cvičence k pravidelnosti gamifikací podloženou fyzickou návštěvou posilovny.
* **Trenérský Swipe Discovery:** Intuitivní matchmaking propojující klienty s ověřenými trenéry podle lokality, specializace a recenzí.
* **Centralizovaný in-app kalendář & chat:** Konec nepřehledných soukromých zpráv — veškeré rezervace a tréninkové konzultace probíhají na jednom místě.
* **Partnerský katalog gymů:** Přehledná mapa sportovišť s aktuálními ceníky, vybavením a seznamem akreditovaných trenérů.

---

## Architektura a technologický stack

Projekt staví na moderní multiplatformní architektuře s důrazem na nativní plynulost uživatelského rozhraní a robustní cloudové zabezpečení:

| Vrstva | Zvolená technologie | Architektonické odůvodnění & Výhody |
| :--- | :--- | :--- |
| **Mobilní frontend** | [Flutter](https://flutter.dev/) (Dart) | Jediná kódová báze pro iOS i Android. Nativní výkon 60/120 fps díky enginu Impeller, deterministické vykreslování identického UI bez kompromisů |
| **Backend & Autentizace** | [Supabase](https://supabase.com/) | Plnohodnotná PostgreSQL databáze namísto NoSQL. Bezpečnost garantovaná na úrovni řádků (Row Level Security), real-time WebSocket subscriptions pro instantní chat |
| **Geolokační subsystém** | `geolocator` + Anti-Mocking | Precizní výpočet vzdálenosti Haversine algoritmem v perimetru 100 m s aktivní detekcí emulované polohy na systémové úrovni |
| **Lokální mezipaměť (Offline)** | SQLite & Encrypted SharedPrefs | Zajišťuje uložení check-inů v suterénních posilovnách bez mobilního signálu s automatickou synchronizační frontou po obnovení spojení |
| **Administrační rozhraní** | Flutter Web | Dedikovaný administrační portál pro schvalování trenérských licencí, správu profilů posiloven a analytiku |

---

## Detailní inženýrská řešení modulů

### 1. Geolokační motor FitCheck & Prevence podvádění
Gamifikační systém stojí na důvěryhodnosti návštěv. Pokud by bylo možné návštěvy falšovat, ztrácí streak svou motivační i soutěžní hodnotu.
* **Geofencing na 100 metrů:** Algoritmus v reálném čase porovnává GPS souřadnice zařízení s polygonem nebo poloměrem partnerského fitness centra.
* **Detekce Mock Locations:** Klient na úrovni operačního systému (Android `Location.isFromMockProvider()` a iOS core location flags) kontroluje, zda souřadnice nepocházejí z virtuálního GPS joysticku.
* **Algoritmus férového streaku:** Zamezuje zneužití pravidlem, že v rámci jednoho kalendářního týdne lze získat maximálně 1 streak bod po dosažení předem definovaného týdenního cíle (např. 3 návštěvy týdně).

### 2. Architektura zabezpečení dat (PostgreSQL Row Level Security)
Vzhledem k přítomnosti osobních zdravotních dat a soukromé konverzace mezi klientem a trenérem je bezpečnost prioritou číslo jedna:
* Data nejsou chráněna pouhou logikou v aplikaci, ale přímo na úrovni PostgreSQL databáze pomocí **RLS politik**.
* Klient má kryptograficky garantovaný přístup pouze ke svým vlastním záznamům a zprávám v aktivních konverzacích.
* Trenér vidí výhradně profily a tréninkové metriky těch uživatelů, kteří mu k tomu udělili výslovný souhlas přes oboustranný match.

### 3. Trenérský Matchmaking (Swipe Discovery)
* Klientská komponenta využívá hardwarově akcelerované gesturální karty.
* Profil trenéra obsahuje ověřené certifikace, specializace (např. silový trojboj, náprava pohybového aparátu, kalisthenika), galerii a recenze ověřených klientů.
* Propojení obou stran otevírá šifrovaný chat a sdílený rezervační kalendář.

---

## Designový systém a UX
* **AMOLED Dark Mode:** Hluboká černá (`#000000`) optimalizovaná pro minimalizaci spotřeby baterie OLED displejů v posilovně, doplněná o neonový tyrkysový akcent (`#2596be`).
* **Ergonomická navigace na jednu ruku:** Pětiprvkový plovoucí dock přizpůsobený pro snadné ovládání palcem během tréninku (Feed, Mapa, Trenéři, Chat, Profil).
