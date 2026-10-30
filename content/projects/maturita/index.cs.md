---
title: "Maturita: Studijní portál a znalostní báze"
description: "Otevřený, průběžně aktualizovaný studijní portál a znalostní báze pro IT obor na SŠTE Brno s vlastním Python validačním pipeline a bleskovým vyhledávačem Pagefind."
date: 2024-05-10
weight: 20
---

<div class="project-meta-box">
  <div class="project-meta-links">
    <a href="https://sdragonex.github.io/Maturita/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
      <svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      <span>Živý web</span>
    </a>
    <a href="https://github.com/SDragonex/Maturita" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
      <svg class="svg-icon fill" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      <span>GitHub repozitář</span>
    </a>
  </div>
  <div class="project-meta-specs">
    <div>Typ: <strong>Statický Jamstack portál</strong></div>
    <div>Stack: <strong>Zola, Pagefind, Python 3.12, SCSS</strong></div>
    <div>Stav: <strong>Průběžně aktualizovaná báze</strong></div>
  </div>
</div>

## K čemu projekt slouží a jaký problém řeší

Příprava na maturitní zkoušku v technických oborech trpí chronickým neduhem: **roztříštěností a zastaráváním materiálů**. Studenti jsou odkázáni na nesourodou směsici naskenovaných sešitů, starých školních prezentací z let 2012–2018, pochybných souborů na Ulož.to/Disku a chaotických Word dokumentů předávaných mezi ročníky. Tyto materiály často obsahují faktické chyby, zastaralé normy (např. předpotopní síťové topologie, zastaralé verze SQL) a neúplný kontext.

**Projekt Maturita** vznikl jako inženýrská odpověď na tento chaos. Jde o centralizovanou, otevřenou a verzovanou znalostní bázi, která pokrývá kompletní maturitní curriculum oboru 18-20-M/01 Informační technologie na SŠTE Brno, Olomoucká. 

Nejedná se o jednorázový web pro jediný maturitní ročník — projekt je koncipován jako **živý, kontinuální otevřený repozitář**, který je průběžně aktualizován, revidován a doplňován o moderní technologické standardy (IPv6, moderní Docker, REST vs. GraphQL, novinky v C# a Pythonu).

### Pro koho je portál určen
* **Studenti IT oborů:** Získávají jediný ověřený zdroj pravdy s přesným členěním otázek, funkčními ukázkami kódu, síťovými topologiemi a modelovými scénáři.
* **Budoucí ročníky:** Materiály nestárnou v šuplíku. Díky Git verzování může kdokoliv z komunity poslat Pull Request, opravit překlep nebo doplnit nové otázky.
* **Zkoušející a vyučující:** Přehledná referenční osnova pro sjednocení požadavků na odborné znalosti absolventů.

---

## Architektura a technologický stack

Portál je navržen na principech moderního Jamstacku s nulovými nároky na serverový runtime a maximální rychlostí doručení:

| Vrstva | Zvolená technologie | Architektonické odůvodnění & Výhody |
| :--- | :--- | :--- |
| **Generátor webu** | [Zola](https://www.getzola.org/) (Rust) | Bleskurychlá kompilace celého webu (stovky stránek za < 1 s), nativní podpora SCSS, nulové závislosti na npm |
| **Vyhledávací engine** | [Pagefind](https://pagefind.app/) (v1.5.2) | Klientský full-text postavený na WebAssembly; statické indexové chunky se stahují na vyžádání bez backendu |
| **Validační orchestrátor** | Python 3.12 (`scripts/build.py`) | Vlastní testovací pipeline kontrolující integritu odkazů, formát Markdownu a správnost struktury před každým buildem |
| **CI/CD Pipeline** | GitHub Actions | Automatická validace, build a nasazení na GitHub Pages při každém commitu |
| **Typografie & UI** | Čisté SCSS bez frameworků | Vysoký kontrast, přehledné kódové bloky se syntax highlightem, responsivní tabulky optimalizované pro studium |

---

## Rozsah a struktura obsahu

Portál čítá celkem **169 detailně zpracovaných témat**, rozčleněných do logických sekcí:

| Oblast | Rozsah | Obsahové zaměření |
| :--- | :--- | :--- |
| **Počítačové sítě a programování** | 26 témat | Model OSI/ISO, TCP/IP, směrování (OSPF, BGP), spínání (VLAN, STP), OOP paradigmata, datové struktury a algoritmy |
| **Aplikační software** | 26 témat | Správa Linux/Windows serverů, virtualizace (KVM, Proxmox), Docker kontejnery, SQL databáze, transakční zpracování |
| **Český jazyk a literatura** | 97 děl | Komplexní literárně-historické rozbory děl světové i české literatury dle oficiálního školního kánonu |
| **Anglický jazyk** | 20 okruhů | Odborná IT terminologie, hardwarová a softwarová témata, modelové konverzační situace |
| **Maturitní práce** | 7 oblastí | Metodika návrhu architektury, implementace, technická dokumentace a zásady úspěšné obhajoby |

---

## Vlastní Build & Validation Pipeline (`scripts/build.py`)

Klíčovým inženýrským prvkem projektu je vlastní validační orchestrátor v Pythonu. Před každým nasazením na produkci spouští automatizované testy kvality:

1. **Kontrola integrity odkazů (Zero Broken Links):** Prochází všechny Markdown soubory a ověřuje, že žádný z tisíců interních křížových odkazů a kotev `#` nevede do prázdna.
2. **Statická analýza Markdown frontmatter:** Ověřuje přítomnost povinných metadat (titulek, váha řazení, kategorie).
3. **Generování Pagefind WASM indexu:** Po sestavení Zolou spustí Pagefind indexaci, která vygeneruje kompaktní statické vyhledávací indexy pro offline vyhledávání.
4. **Auditing artefaktů:** Kontroluje integritu finálních HTML souborů a statických aktiv v produkčním adresáři.
