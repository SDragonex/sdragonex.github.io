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

## Přehled projektu

**4Fit** je komerční mobilní platforma navržená pro transformaci vztahu mezi návštěvníky posiloven, certifikovanými trenéry a provozovateli fitness center. Tradiční fitness aplikace často selhávají v retenci uživatelů a postrádají přímé propojení s reálným prostředím posiloven. 4Fit tento problém řeší spojením discovery rozhraní, bezpečného in-app chatu a geolokačního gamifikačního systému.

Aplikace stojí na čtyřech hlavních pilířích: **jednoduchost, přehlednost, retence a synergie** mezi cvičencem a trenérem.

---

## Architektura a technologický stack

Projekt využívá moderní multiplatformní architekturu postavenou na frameworku Flutter pro mobilního klienta a cloudové platformě Supabase jako škálovatelném backendu.

| Komponenta | Použitá technologie | Účel a funkce |
| :--- | :--- | :--- |
| **Mobilní frontend** | Flutter (Dart) | Natívní výkon pro iOS i Android z jedné kódové báze |
| **Backend & Databáze** | Supabase (PostgreSQL) | Správa uživatelů, autentizace, Row Level Security (RLS) a real-time data |
| **Geolokace & Validace** | `geolocator` + Anti-Mocking | Detekce reálné přítomnosti uživatele v gymu do 100 metrů |
| **Web Admin Panel** | Flutter Web / HTML5 | Schvalování certifikátů trenérů, správa gymů a analytika |
| **Úložiště & Offline** | Local Cache & SQLite | Offline ukládání check-inů a synchronizace po obnovení připojení |

---

## Klíčové moduly platformy

### 1. Trenérský Matchmaking (Swipe Discovery)
* Intuitivní vyhledávání trenérů inspirované swipe mechanikou.
* Uživatel si prohlíží profily trenérů, jejich specializace (silový trénink, rehabilitace, redukce tuku), dosažená osvědčení a hodnocení od reálných klientů.
* Oboustranná shoda umožňuje přímé navázání kontaktu a plánování tréninků.

### 2. Interaktivní mapa a katalog fitness center
* Geografická mapa zobrazuje partnerské posilovny v okolí.
* Každý záznam posilovny obsahuje fotografie, aktuální ceník vstupů i permanentek, vybavení a seznam trenérů, kteří v daném gymu oficiálně působí.

### 3. Modul FitCheck: Geolokační gamifikace a retence
Problém většiny cvičenců spočívá v nepravidelnosti a ztrátě motivace. 4Fit integruje systém **FitCheck**:
* **Geofencing do 100 metrů:** Uživatel může provést check-in pouze v případě, že se fyzicky nachází v perimetru partnerské posilovny.
* **Ochrana proti Fake GPS:** Aktivní validace systémových příznaků zamezuje emulaci polohy (Mock Locations) v systému Android i iOS.
* **Týdenní cíle a streaky:** Uživatel sbírá série úspěšných týdnů. Algoritmus zabraňuje zneužití striktním započítáváním maximálně jednoho streak bodu za splněný týdenní cíl.
* **Offline Caching:** Pokud je uživatel v suterénní posilovně bez mobilního signálu, check-in se bezpečně zašifruje lokálně a automaticky odešle na server okamžitě po zachycení sítě.

### 4. Komunikace a rezervační kalendář
* Integrovaný real-time chat pro ladění tréninkových plánů a konzultace stravy.
* Rezervační systém pro plánování konkrétních časových slotů v kalendáři trenéra přímo z mobilní aplikace.

---

## Design a UI/UX

* **AMOLED Dark Mode:** Hluboké tmavé pozadí optimalizované pro OLED displeje v kombinaci s neonově tyrkysovým akcentem (`#2596be`).
* **Adaptivní ikony:** Připraveno pro Material You (Android 13+) a dynamické tónování ikon (iOS 18+).
* **Dock navigace:** Pětisložková spodní lišta: Feed, Mapa, Trenéři (ústřední zvýrazněný prvek), Chat, Profil.
