---
title: "Impostor: Atmosférická dedukční párty hra"
description: "Dedukční společenská Pass & Play webová hra s retro estetikou tajných spisů 90. let, interaktivní voskovou pečetí a 100% syntetizovaným Web Audio enginem."
date: 2024-03-05
weight: 40
---

<div class="project-meta-box">
  <div class="project-meta-links">
    <a href="https://sdragonex.github.io/Impostor/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
      <svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      <span>Živý web</span>
    </a>
    <a href="https://github.com/SDragonex/Impostor" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
      <svg class="svg-icon fill" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      <span>GitHub repozitář</span>
    </a>
  </div>
  <div class="project-meta-specs">
    <div>Typ: <strong>PWA Party Game</strong></div>
    <div>Stack: <strong>JavaScript (ES6+), Web Audio API, Tailwind CSS, Service Worker</strong></div>
    <div>Stav: <strong>Plně hratelné</strong></div>
  </div>
</div>

## Přehled projektu

**Impostor** je webová dedukční společenská hra typu Pass & Play (jedno zařízení kolující mezi hráči). Hráči představují agenty vyšetřovacího týmu, kteří obdrží tajné slovo, zatímco mezi nimi skrytý vetřelec (Impostor) slovo nezná a musí blafovat, dedukovat téma z nápověd ostatních a splynout s davem.

Projekt se odlišuje od běžných párty her silným důrazem na **taktilní atmosféru**: vizuální styl manilových složek vyšetřovacích spisů, fyzická vosková pečeť a plně syntetizovaný zvukový engine bez externích nahrávek.

---

## Technická architektura

| Komponenta | Použitá technologie | Technické řešení |
| :--- | :--- | :--- |
| **Herní stavový automat** | Vanilla JS (`js/app.js`) | Deterministický stavový automat (Příprava týmu -> Předávání obálky -> Diskuse -> Hlasování -> Výslech) |
| **Zvukový syntetizér** | Web Audio API (`js/audio.js`) | 100% procedurální syntéza zvuků v prohlížeči v reálném čase |
| **Vizuál & Layout** | Tailwind CSS + Custom Tokens | Papírová textura, razítková typografie a noční režim *Midnight Archival Carbon* |
| **Slovníková databáze** | Strukturovaný JS (`js/data.js`) | 917+ unikátních hesel, 16 tematických okruhů a 83 párových Undercover dvojic |
| **Offline certifikace** | Service Worker (`sw.js`) | Plnohodnotná PWA instalovatelná na plochu, funkční bez internetu |

---

## Procedurální Web Audio Engine (`js/audio.js`)

Místo stahování statických audio souborů (MP3/WAV), které způsobují síťová zpoždění a zvyšují datový objem, využívá Impostor vestavěný `AudioContext`:

* **Prasknutí voskové pečeti:** Nízkofrekvenční šumový impulz modulovaný pásmovou propustí simulující křupnutí vosku.
* **Šustění papíru:** Generátor bílého šumu s modulovanou amplitudou a exponenciálním dozvukem.
* **Tikot stopek a gong:** Sinusové oscilátory s rychlým náběhem a přesným harmonickým dozníváním.
* **Nulová latence:** Okamžitá reakce na dotyk bez nutnosti přednačítání zvukových bufferů.

---

## Herní módy a mechaniky

1. **Klasický Impostor:** Jeden či více hráčů nezná tajné slovo. Cílem týmu je odhalit vetřelce; cílem vetřelce je uhodnout tajné slovo nebo přesvědčit tým o své nevině.
2. **Režim Undercover (Falešné slovo):** Vetřelec obdrží velmi podobné slovo ze stejného ranku (např. *Káva vs. Čaj*, *Batman vs. Superman*). Sám vetřelec netuší, že má jinou roli, dokud nezačne konfrontace nápověd.
3. **Výslechový modal & Poslední šance:** Podezřelý hráč čelí přímému výslechu a má právo na tipnutí tajného slova, čímž může zvrátit porážku ve vítězství.
4. **Chaos karty:** Párty modifikátory omezující nápovědy (pouze jednoslovné nápovědy, rýmy, nápověda formou otázky).
