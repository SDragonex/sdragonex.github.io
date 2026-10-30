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
    <div>Stack: <strong>Vanilla JavaScript (ES6+), Service Worker, CSS Glassmorphism</strong></div>
    <div>Verze: <strong>v4.0 Produkční</strong></div>
  </div>
</div>

## K čemu projekt slouží a jaký problém řeší

Segment sportovní výživy, nootropik a biohackingu představuje mnohamiliardový globální průmysl. Běžný uživatel, který se snaží zlepšit svou koncentraci, spánek, sportovní výkon nebo dlouhověkost, však čelí **třem zásadním problémům:**

1. **Informační šum a komerční bias:** Většina dostupných online zdrojů jsou e-shopy nebo sponzorované recenze influencerů, jejichž primárním cílem je prodat předražené směsi látek s mikroskopickými (neúčinnými) dávkami.
2. **Ignorování farmakologie a rizik:** Uživatelé často kombinují desítky látek bez porozumění mechanismu účinku na receptorové úrovni, biologickému poločasu rozpadu v krvi či nebezpečným kontraindikacím (např. kombinace serotonergních nootropik s běžnými antidepresivy vedoucí k serotoninovému syndromu).
3. **Narušení soukromí a datová těžba:** Většina zdravotních a doplňkových aplikací vyžaduje registraci, propojení s cloudem a ukládá citlivá osobní data na externí servery za účelem cílené reklamy.

**SuppleZ** byl navržen jako radikální protipól: **čistá, vědecky podložená encyklopedie a osobní deník**, který neprodává žádné zboží, nemá affiliate odkazy, nezobrazuje bannery a neobsahuje žádné sledovací skripty.

Veškerá data o osobním užívání, cyklování a subjektivním hodnocení zůstávají **100% soukromá a uložená výhradně v paměti vašeho prohlížeče**.

---

## Architektura a technologický stack

Projekt je postaven na filozofii **Zero-Framework Architecture** — namísto stovek megabajtů závislostí v `node_modules` využívá plný potenciál moderních webových standardů:

| Vrstva | Zvolená technologie | Architektonické odůvodnění & Výhody |
| :--- | :--- | :--- |
| **Klientská logika** | [Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Nulové runtime frameworky (žádný React, Vue ani Angular). Okamžitý start aplikace (< 30 ms), nulové riziko zranitelností v dodavatelském řetězci (supply chain) |
| **Offline subsystém** | [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (`sw.js`) | Plnohodnotná Progressive Web App (PWA) instalovatelná na plochu mobilu i PC. Funguje 100% offline v letadle i tělocvičně |
| **Vizuál & Styling** | CSS3 Custom Properties & Glassmorphism | Hardwarově akcelerované rozhraní s plynulým přechodem mezi světlým a tmavým cyberpunkovým režimem, responsivní CSS Grid |
| **Struktura databáze** | Normalizovaný JSON (`database.json`) | Precizní farmakologické schéma látek se stupněm vědeckých důkazů a bezpečnostním semaforem |
| **Perzistence dat** | Web Storage API (LocalStorage) | Lokální izolované úložiště pro záznamy stacků a dávek s okamžitým obousměrným exportem/importem do otevřeného JSON |

---

## Farmakologický systém & Úrovně vědecké evidence

Každá z látek v databázi prochází přísnou klasifikací:

* **9 specializovaných kategorií:** Zdraví & vitamíny (100–199), Výkon & sport (200–299), Spánek & regenerace (300–399), Redukce tuku (400–499), Hormonální optimalizace (500–599), Nootropika & kognice (600–699), Experimentální peptidy (700–799), Anabolické látky (800–899), Ochrana zdraví & PCT (900–999).
* **Klasifikace vědecké evidence (Evidence Grade):**
  * **Stupeň A:** Robustní data podložená vícero dvojitě zaslepenými, placebem kontrolovanými humánními studiemi a systematickými metaanalýzami.
  * **Stupeň B:** Slibné klinické studie na menším vzorku lidí nebo rozsáhlé epidemiologické kohorty.
  * **Stupeň C:** Předběžná data ze zvířecích modelů, in-vitro testů nebo empirická praxe vyžadující další klinické ověření.
* **Bezpečnostní semafor (Risk Triage):**
  * <span style="color: #2ecc71; font-weight: bold;">Zelená:</span> Bezpečné látky s minimálními vedlejšími účinky při doporučeném dávkování.
  * <span style="color: #f1c40f; font-weight: bold;">Žlutá:</span> Látky vyžadující cyklování, opatrnost při dávkování nebo sledování krevních hodnot.
  * <span style="color: #e74c3c; font-weight: bold;">Červená:</span> Vysoké riziko, přísné kontraindikace, silné hormonální či kardiovaskulární dopady vyžadující odborný dohled.

---

## Osobní deník a správa stacků
* Možnost skládat látky do tematických stacků (např. *Ranní fokus bez kofeinu*, *Hluboký REM spánek*, *Předtréninkový booster*).
* Sledování subjektivní odezvy organismu a časování dávek podle poločasu rozpadu.
* Plná suverenita uživatele: jedním kliknutím lze celou databázi osobních záznamů stáhnout do JSON souboru nebo obnovit na jiném zařízení bez prostředníka.
