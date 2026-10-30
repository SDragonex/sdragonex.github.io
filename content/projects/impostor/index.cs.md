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
    <div>Architektura: <strong>Pass & Play PWA Game</strong></div>
    <div>Stack: <strong>JavaScript (ES6+), Web Audio API, Tailwind CSS, Service Worker</strong></div>
    <div>Stav: <strong>Plně hratelné v produkci</strong></div>
  </div>
</div>

## K čemu projekt slouží a jaký problém řeší

Moderní společenské dedukční hry (např. *Městečko Palermo*, *Secret Hitler*, *Spyfall* nebo *Among Us*) patří k nejlepším formám sociální zábavy. V reálném životě na oslavách, v hospodě nebo na horské chatě však narážejí na **akutní technologické překážky:**

1. **Bariéra vstupu (App Store tření):** Přimět 6 až 10 lidí, aby si každý stáhl 150MB aplikaci z Google Play / App Store, řešil zapomenutá hesla k účtům, pároval se přes QR kódy a zadával PIN místnosti, spolehlivě zabije zábavu dřív, než začne.
2. **Závislost na internetu a baterii:** V horských srubech, letadlech nebo v podzemních podnicích často není mobilní signál ani stabilní Wi-Fi.
3. **Ztráta očního kontaktu:** Místo aby se hráči dívali jeden druhému do očí, sledovali mikrovýrazy, nervózní gesta a neverbální signály, civí každý do svého vlastního telefonu.

**Impostor** tento problém eliminuje principem **Pass & Play na jediném zařízení**:

* **Jeden telefon stačí:** Stačí otevřít webový odkaz v prohlížeči libovolného zařízení. Žádná instalace, žádná registrace.
* **Taktilní rituál tajného spisu:** Telefon koluje v kruhu. Každý hráč se dotkne obrazovky, prolomí voskovou pečeť, tajně si přečte svou roli v obálce a předá zařízení dál.
* **Návrat k lidské psychologii:** Jakmile všichni znají svou roli, telefon se odloží na stůl a začíná čistá sociální dedukce, blafování a psychologický souboj.

---

## Architektura a technologický stack

Hra byla vyvinuta bez objemných herních enginů typu Unity či Phaser — celá logika i audiovizuální prožitek běží přímo na nativních webových standardech:

| Vrstva | Zvolená technologie | Architektonické odůvodnění & Výhody |
| :--- | :--- | :--- |
| **Herní jádro & FSM** | Vanilla JavaScript (`js/app.js`) | Deterministický stavový automat řídící životní cyklus hry bez rizika nesourodého stavu paměti |
| **Zvukový syntetizér** | [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) (`js/audio.js`) | 100% procedurální syntéza zvuku přímo v prohlížeči; nulový přenos dat (0 KB stažených zvukových souborů) a nulová latence při dotyku |
| **Vizuál & Taktilní UI** | Tailwind CSS + CSS Proměnné | Estetika manilových složek vyšetřovacích spisů, razítková typografie, textury papíru a temný režim *Midnight Archival* |
| **Slovníková databáze** | Strukturované pole (`js/data.js`) | 917+ ověřených hesel, 16 tématických okruhů a 83 párových Undercover dvojic s vybalancovanou sémantickou vzdáleností |
| **Offline subsystém** | Service Worker (`sw.js`) | Plná PWA podpora umožňující hrát hru kdekoli v offline režimu |

---

## Unikátní prvek: Procedurální Web Audio Engine (`js/audio.js`)

Běžné webové hry stahují desítky megabajtů zvukových souborů MP3 nebo WAV. Tento přístup trpí latencí (zvuk se často přehraje se zpožděním 100–300 ms po dotyku) a selhává v offline režimu.

Impostor generuje veškeré zvuky **matematicky v reálném čase** pomocí vestavěného `AudioContext`:

* **Křupnutí voskové pečeti:** Nízkofrekvenční šumový impulz modulovaný rezonančním pásmovým filtrem (Bandpass) simulující fyzické prasknutí vosku pod tlakem pečeti.
* **Šustění manilového papíru:** Generátor bílého šumu s exponenciálním útlumem a dynamickou změnou amplitudy simulující tření tvrdého papíru obálky.
* **Tikot stopek a gong:** Sinusové oscilátory s velmi rychlým náběhem (attack) a přesně kalibrovaným harmonickým dozvukem (decay).
* **Výsledek:** Okamžitá reakce na dotek prstu (< 5 ms) s nulovou spotřebou mobilních dat.

---

## Herní módy a psychologické mechaniky

1. **Klasický Impostor:** Jeden či více agentů nezná tajné heslo. Ostatní hráči dávají jemné nápovědy. Vetřelec musí předstírat znalost tématu a splynout s davem, nebo z indicií heslo bleskově odvodit.
2. **Režim Undercover (Sémantická disonance):** Vetřelec neobdrží prázdné pole, ale příbuzné slovo ze stejného taxonomického okruhu (např. *Káva vs. Čaj*, *Bitcoin vs. Zlato*, *Batman vs. Zorro*). Vetřelec zpočátku netuší, že má jinou roli, a teprve v průběhu diskuse dochází k dramatickému zjištění, že jeho nápovědy ostatním „nesedí“.
3. **Výslechový protokol & Poslední šance:** Hlasováním odhalený hráč dostává finální šanci — pokud správně uhodne původní tajné slovo vyšetřovatelů, okamžitě obrací hru a vítězí.
