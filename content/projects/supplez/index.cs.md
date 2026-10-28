---
title: "SuppleZ: PWA Encyklopedie biohackingu"
description: "Minimalistická offline-first progresivní webová aplikace zaměřená na vědecky podloženou suplementaci, nootropika, peptidy a osobní deník cyklování."
date: 2024-04-12
weight: 30
---

<div class="project-meta-box">
  <div class="project-meta-links">
    <a href="https://sdragonex.github.io/SuppleZ/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
      <svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      <span>Živý web</span>
    </a>
    <a href="https://github.com/SDragonex/SuppleZ" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
      <svg class="svg-icon fill" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      <span>GitHub repozitář</span>
    </a>
  </div>
  <div class="project-meta-specs">
    <div>Architektura: <strong>Offline PWA</strong></div>
    <div>Stack: <strong>Vanilla JavaScript (ES6+), Service Worker, CSS Glassmorphism</strong></div>
    <div>Verze: <strong>v4.0 Produkční</strong></div>
  </div>
</div>

## Přehled projektu

**SuppleZ** je progresivní webová aplikace (PWA) navržená jako nezávislá, přehledná a vědecky podložená encyklopedie suplementace, nootropik, peptidů a biohackingu. Cílem projektu je poskytnout rychlé a čisté rozhraní bez reklamních bannerů, placených propagací produktů a sledovacích skriptů.

Aplikace funguje **100% offline**, nevyžaduje uživatelskou registraci a veškerá osobní data (deníky, dávkování, poznámky) ukládá výhradně lokálně v prohlížeči uživatele.

---

## Architektura a technologické principy

Projekt byl vyvinut s důrazem na nulovou závislost na externích frameworcích (Zero-framework architecture) pro maximální rychlost a minimální paměťovou stopu.

| Komponenta | Použitá technologie | Architektonický princip |
| :--- | :--- | :--- |
| **Jádro logiky** | Vanilla JS (ES6+) | Čistý JavaScript bez objemných runtime knihoven, klientský routing a rendering |
| **Styling & UI** | CSS3 Grid, Flexbox, Custom Properties | Cyberpunk Glassmorphism s podporou plynulých animací a hardwarové akcelerace |
| **Offline Engine** | Service Worker (`sw.js`) | Cache-first strategie pro statické soubory, Network-first pro databázi |
| **Strukturovaná data** | Normalizovaný JSON (`database.json`) | Kompletní farmakologické profily látek |
| **Perzistence dat** | Web Storage API (LocalStorage) | Bezpečné ukládání osobního protokolu uživatele s exportem do JSON |

---

## Databázová struktura látek

Každá položka v databázi obsahuje detailně ověřená data:

* **9 specializovaných kategorií:** Zdraví & vitamíny (100–199), Výkon & sport (200–299), Spánek & regenerace (300–399), Redukce tuku (400–499), Hormonální optimalizace (500–599), Nootropika & kognice (600–699), Experimentální peptidy & výzkum (700–799), Anabolické látky (800–899), Ochrana zdraví & PCT (900–999).
* **Farmakologické ukazatele:** Přesný mechanismus účinku na buněčné úrovni, biologický poločas rozpadu látky v těle, kontraindikace a interakce s běžnými léčivy.
* **Úroveň vědeckých důkazů (Evidence Level):**
  * **Stupeň A:** Robustní evidence z vícero dvojitě zaslepených, placebem kontrolovaných humánních studií a metaanalýz.
  * **Stupeň B:** Slibné výsledky z menších klinických studií nebo rozsáhlých pozorování.
  * **Stupeň C:** Předběžná data, zvířecí modely nebo empirická praxe vyžadující další výzkum.
* **Bezpečnostní semafor:** Barevná klasifikace rizikovosti (Zelená pro bezpečné běžné látky, Žlutá pro opatrnost a interakce, Červená pro vysoké riziko a přísné režimy).

---

## Osobní deník a cyklování suplementace

Aplikace integruje pokročilý protokol pro sledování suplementačních cyklů:

* Záznamy jednotlivých užití s časem, přesnou dávkou a subjektivním hodnocením efektivity.
* Možnost organizovat suplementy do tematických stacků (např. ranní fokus, podpora hlubokého spánku, tréninkový stack).
* Obousměrný export a import dat v otevřeném formátu JSON pro zálohování a přenositelnost mezi zařízeními.
