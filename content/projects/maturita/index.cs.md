---
title: "Maturita 2027: Studijní portál a znalostní báze"
description: "Automatizovaný studijní portál a znalostní báze pro IT obor na SŠTE Brno s vlastním Python validačním pipeline a full-text vyhledávačem Pagefind."
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
    <div>Stav: <strong>V produkčním provozu</strong></div>
  </div>
</div>

## Přehled projektu

**Maturita 2027** představuje komplexní, vysoce strukturovaný znalostní portál vyvinutý pro studenty maturitního ročníku oboru 18-20-M/01 Informační technologie na SŠTE Brno, Olomoucká. Projekt nahrazuje roztříštěné studijní materiály a PDF dokumenty moderním, verzovaným a plně prohledávatelným webovým rozhraním.

Portál čítá celkem **169 detailně zpracovaných studijních stránek**, metodických návodů a praktických ukázek kódu.

---

## Architektura a technické řešení

Web je postaven na principech moderního Jamstacku s důrazem na bleskovou rychlost načítání, nulové runtime závislosti a plně automatizovanou kontrolu kvality před každým nasazením.

| Oblast | Použitý nástroj | Význam pro projekt |
| :--- | :--- | :--- |
| **Generátor statického webu** | Zola (Rust) | Bleskurychlá kompilace Markdownu a SCSS stylů |
| **Klientské vyhledávání** | Pagefind (v1.5.2) | Full-textové indexování obsahu s okamžitou odezvou bez nutnosti backendového serveru |
| **Build & Test Pipeline** | Python 3.12 (`scripts/build.py`) | Automatizovaná kontrola odkazů, syntaxe a integrity dat |
| **CI/CD Automatizace** | GitHub Actions | Testování a publikace na GitHub Pages při každém pushi do hlavní větve |
| **Typografie & Styly** | Vlastní SCSS | Optimalizováno pro dlouhé čtení technických textů a ukázek kódu |

---

## Rozsah a struktura obsahu

| Předmět / Oblast | Počet témat | Obsahové zaměření |
| :--- | :--- | :--- |
| **Počítačové sítě a programování** | 26 témat | Protokoly TCP/IP, směrování, spínání, OOP, algoritmy a datové struktury |
| **Aplikační software** | 26 témat | Operační systémy, virtualizace, cloud, databázové systémy a systémová administrace |
| **Český jazyk a literatura** | 97 děl | Kontextové rozbory literárních děl a literární historie dle školního seznamu |
| **Anglický jazyk** | 20 okruhů | Odborná IT terminologie, gramatické struktury a modelové konverzační scénáře |
| **Maturitní práce** | 7 oblastí | Metodika návrhu, implementace, technické dokumentace a úspěšné obhajoby |

---

## Vlastní Build & Validation Pipeline (`scripts/build.py`)

Klíčovým inženýrským prvkem projektu je vlastní validační orchestrátor napsaný v Pythonu. Před každým nasazením spouští sérii přísných kontrol:

1. **Kontrola integrity odkazů:** Ověřuje, zda žádný z tisíců interních křížových odkazů nevede na chybějící stránku nebo neexistující kotvu.
2. **Statická analýza Markdownu:** Kontroluje konzistenci hlaviček (frontmatter), správnost syntaxe kódových bloků a formátování tabulek.
3. **Generování a Pagefind indexace:** Po sestavení Zolou spustí npm Pagefind indexer, který vytvoří statické indexové chunky pro offline full-text.
4. **Validace výstupního adresáře:** Kontrola vygenerovaných HTML souborů a statických aktiv před nahráním na produkční server.
