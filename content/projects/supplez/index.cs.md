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
    <div>Architektura: <strong>Offline-First PWA (Zero-Framework)</strong></div>
    <div>Stack: <strong>Vanilla JavaScript (ES6+), IndexedDB, Service Worker, CSS Glassmorphism</strong></div>
    <div>Verze: <strong>v4.0 / v4.1 Produkční</strong></div>
  </div>
</div>

## K čemu projekt slouží a jaký problém řeší

Segment sportovní výživy, nootropik a biohackingu představuje mnohamiliardový globální průmysl. Běžný uživatel, který se snaží optimalizovat svůj spánek, kognitivní fokus, regeneraci nebo dlouhověkost, však naráží na **tři zásadní problémy:**

1. **Informační šum a komerční bias:** Většina online zdrojů jsou e-shopy či sponzorované recenze, jejichž cílem je prodat proprietární směsi látek s neúčinnými (podprahovými) dávkami.
2. **Nebezpečné interakce a absorpční kolize:** Lidé běžně kombinují desítky látek bez porozumění mechanismu účinku na receptorové úrovni, poločasu rozpadu či absorpčním kolizím (např. užívání zinku současně se železem, které se v těle vzájemně blokují, nebo nebezpečné kombinace 5-HTP se stimulanty či SSRI).
3. **Narušení soukromí:** Zdravotní aplikace často vyžadují registraci a ukládají citlivá osobní data na cloudové servery za účelem monetizace a cílené reklamy.

**SuppleZ** byl navržen jako nezávislý protipól: **vědecky podložená encyklopedie, interakční analyzátor a osobní protokol**, který neobsahuje reklamy, sponzorované produkty, sledovací pixely ani cookies. 

Veškerá data zůstávají **100% soukromá a uložena výhradně v zařízení uživatele** prostřednictvím asynchronní databáze IndexedDB.

---

## Architektura a technologický stack

Projekt striktně dodržuje filozofii **Zero-Framework Architecture** s nulovými runtime závislostmi:

| Vrstva | Zvolená technologie | Architektonické odůvodnění & Výhody |
| :--- | :--- | :--- |
| **Klientská logika** | [Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Nulové frameworky (žádný React, Vue ani Angular). Okamžitý start (< 30 ms), nulové riziko zranitelností v dodavatelském řetězci |
| **Asynchronní úložiště** | IndexedDB & LocalStorage (`db.js`) | Robustní lokální databáze s automatickou migrací schémat pro ukládání deníků, dávkování a uživatelských stacků |
| **Offline subsystém** | [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (`sw.js`) | Cache-First pro statická aktiva, Network-First pro databázový bundle; 100% offline provoz v letadle i tělocvičně |
| **Styling & UI** | CSS3 Custom Properties & Glassmorphism | Cyberpunková estetika s plynulým střídáním světlého a tmavého režimu, responsivní CSS Grid a hardwarová akcelerace |
| **Strukturovaná data** | Normalizovaný JSON (`supplements.bundle.json`) | Precizní farmakologické schéma s ID rozsahy pro 9 specializovaných kategorií |

---

## Klíčové inženýrské moduly aplikace

### 1. Real-time Analýza interakcí (Interaction Checker)
Aplikace obsahuje algoritmus pro křížovou kontrolu látek v uživatelském stacku:
* **Synergie:** Detekuje ověřené kombinace násobící biologický účinek (např. *Kofein + L-Theanin* pro čistý fokus bez třesu, *Vitamín D3 + K2 + Hořčík* pro optimální vstřebávání vápníku).
* **Časové kompetice:** Upozorňuje na absorpční kolize na stejných transportních receptorech v trávicím traktu (např. *Zinek vs. Železo*, *Vápník vs. Hořčík*).
* **Kritická varování:** Okamžitě červeně signalizuje nebezpečné lékové kontraindikace (např. *5-HTP + SSRI* s rizikem serotoninového syndromu, *Yohimbin + silná sympatomimetika*).

### 2. Cirkadiánní rozvrh (Denní protokol ve 4 blocích)
Aplikace automaticky analyzuje farmakokinetiku vybraných látek a rozvrhne je do optimálních denních bloků:
1. **Ráno nalačno:** Rychle vstřebatelné aminokyseliny a peptidy (např. *L-Tyrosin, B-komplex, BPC-157*).
2. **Dopoledne se snídaní s tuky:** Látky rozpustné v tucích vyžadující lipidy pro absorpci (např. *Vitamín D3 + K2, Omega 3 EPA/DHA*).
3. **Předtréninkový blok / Odpolední fokus:** Vazodilatátory a cholinergika (např. *L-Citrulin, Kofein, Alpha-GPC*).
4. **Večer před spaním:** Modulátory GABA receptorů a podpora hlubokého spánku (např. *Magnesium bisglycinát, Apigenin, Glycin*).

### 3. Vizuální kalkulačka ředění peptidů (Reconstitution Calculator)
* Matematický modul pro přesný výpočet koncentrace, objemu dávky a počtu dávek ve vialce pro výzkumné peptidy (*BPC-157, TB-500, GHK-Cu, GLP-1*).
* **Interaktivní vizuální inzulínová stříkačka (U-100 i U-40):** V reálném čase graficky vykresluje píst a hladinu tekutiny s přesným vyznačením dílků (IU/tiky), což eliminuje chyby při dávkování.

### 4. Farmakologická klasifikace & Vědecká evidence
* **9 kategorií:** Zdraví & vitamíny (100–199), Výkon & sport (200–299), Spánek & regenerace (300–399), Redukce tuku (400–499), Hormonální optimalizace (500–599), Nootropika & kognice (600–699), Experimentální peptidy (700–799), Anabolické látky (800–899), Ochrana zdraví & PCT (900–999).
* **Úrovně evidence:** Stupeň A (metaanalýzy a randomizované placebem kontrolované humánní studie), Stupeň B (menší klinické kohorty), Stupeň C (in-vitro a zvířecí modely).
* **Bezpečnostní semafor:** Barevná klasifikace rizikovosti (Zelená pro bezpečné běžné látky, Žlutá pro opatrnost a cyklování, Červená pro vysoké riziko vyžadující lékařský dohled).
* **Osobní deník:** Cyklování protokolů, záznamy dávek s časovou značkou a 1-klikový export/import JSON záloh.
