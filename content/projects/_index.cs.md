---
title: Projekty
description: Přehled vybraných projektů, mobilních aplikací a softwarových systémů Danyho Chakera.
---

<div class="projects-hero">
  <p>
    Zde najdete výběr mých klíčových projektů, mobilních platforem a open-source nástrojů. 
    Zaměřuji se na <strong>čistou architekturu</strong>, <strong>vysoký výkon</strong>, 
    nulové zbytečné závislosti a promyšlený uživatelský prožitek (UI/UX) – od komerčních mobilních systémů po offline-first PWA a herní enginy.
  </p>
</div>

<div class="projects-category-title">
  <span>⭐ Hlavní projekty</span>
</div>

<div class="projects-grid">

  <!-- 4Fit -->
  <div class="project-card featured">
    <div class="project-header">
      <h3 class="project-title">🔥 4Fit</h3>
      <div class="badge-group">
        <span class="badge badge-beta">Closed Beta</span>
      </div>
    </div>
    <div class="project-tagline">Komerční fitness platforma propojující klienty, gymy a trenéry</div>
    <div class="project-desc">
      Komplexní mobilní ekosystém pro iOS a Android s webovým administračním panelem. Aplikace řeší párování trenérů se cvičenci na bázi preferencí a lokace, správu klientských tréninků a dlouhodobou retenci sportovců.
    </div>
    <ul class="project-highlights">
      <li><strong>Tinder-style swipe párování:</strong> Intuitivní procházení profilů trenérů a jejich odborných certifikací.</li>
      <li><strong>Interaktivní mapa posiloven:</strong> Zobrazení gymů, ceníků, vybavení a trenérů působících v daném místě.</li>
      <li><strong>Gamifikovaný FitCheck:</strong> Geolokační ověřování reálných návštěv gymu s ochranou proti Fake GPS a offline synchronizací.</li>
      <li><strong>Moderní design:</strong> AMOLED Dark mode s neonovými akcenty a adaptivními ikonami pro Android 13+ a iOS 18+.</li>
    </ul>
    <div class="tech-stack">
      <span class="tech-tag">Flutter</span>
      <span class="tech-tag">Dart</span>
      <span class="tech-tag">Supabase</span>
      <span class="tech-tag">PostgreSQL</span>
      <span class="tech-tag">Geolocator</span>
      <span class="tech-tag">REST API</span>
    </div>
    <div class="project-footer">
      <span class="badge badge-beta">Mobilní aplikace & Admin</span>
    </div>
  </div>

  <!-- Maturita 2027 -->
  <div class="project-card featured">
    <div class="project-header">
      <h3 class="project-title">🎓 Maturita 2027</h3>
      <div class="badge-group">
        <span class="badge badge-live">Live Web</span>
      </div>
    </div>
    <div class="project-tagline">Studijní portál a znalostní báze pro IT obor SŠTE Brno</div>
    <div class="project-desc">
      Rozsáhlý vzdělávací portál a statický web pro studenty informačních technologií. Obsahuje kompletně zpracované okruhy z počítačových sítí, programování, aplikačního softwaru, literatury i cizích jazyků.
    </div>
    <ul class="project-highlights">
      <li><strong>169+ studijních stránek:</strong> Strukturované osnovy, terminologie, kódy a metodika maturitních prací.</li>
      <li><strong>Automatizovaný build pipeline:</strong> Vlastní Python validační skripty (<code>build.py</code>) ověřující integritu odkazů a souborů.</li>
      <li><strong>Bleskurychlé vyhledávání:</strong> Integrovaný vyhledávač Pagefind s okamžitou odezvou přímo v prohlížeči.</li>
      <li><strong>CI/CD automatizace:</strong> Kontrola a automatický deployment na GitHub Pages přes GitHub Actions.</li>
    </ul>
    <div class="tech-stack">
      <span class="tech-tag">Zola</span>
      <span class="tech-tag">Pagefind</span>
      <span class="tech-tag">Python 3.12</span>
      <span class="tech-tag">SCSS</span>
      <span class="tech-tag">GitHub Actions</span>
    </div>
    <div class="project-footer">
      <a href="https://sdragonex.github.io/Maturita/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
        <span>Otevřít web ↗</span>
      </a>
      <a href="https://github.com/SDragonex/Maturita" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
        <span>GitHub ↗</span>
      </a>
    </div>
  </div>

  <!-- SuppleZ -->
  <div class="project-card featured">
    <div class="project-header">
      <h3 class="project-title">🧠 SuppleZ</h3>
      <div class="badge-group">
        <span class="badge badge-stable">v4.0 Production</span>
      </div>
    </div>
    <div class="project-tagline">Offline-first PWA encyklopedie suplementace, nootropik a biohackingu</div>
    <div class="project-desc">
      Rychlá a minimalistická progresivní webová aplikace navržená pro čistý přístup k informacím o suplementech bez reklam, sledování a zbytečných datových přenosů. Funguje plně offline a ukládá data výhradně v zařízení uživatele.
    </div>
    <ul class="project-highlights">
      <li><strong>9 odborných kategorií:</strong> Zdraví, výkon, nootropika, spánek, hormony, peptidy a redukce tuku.</li>
      <li><strong>Vědecká data:</strong> Mechanismy účinku, biologické poločasy, lékové interakce a stupně vědeckých důkazů (A/B/C).</li>
      <li><strong>Osobní deník & cykly:</strong> Sledování suplementačních stacků s barevným hodnocením a exportem/importem JSON.</li>
      <li><strong>Cyberpunk Glassmorphism:</strong> Vyladěný tmavý design a možnost instalace jako nativní PWA appka.</li>
    </ul>
    <div class="tech-stack">
      <span class="tech-tag">Vanilla JS (ES6+)</span>
      <span class="tech-tag">PWA</span>
      <span class="tech-tag">Service Worker</span>
      <span class="tech-tag">CSS3 Glassmorphism</span>
      <span class="tech-tag">LocalStorage</span>
    </div>
    <div class="project-footer">
      <a href="https://github.com/SDragonex/SuppleZ" target="_blank" rel="noopener noreferrer" class="btn-action primary">
        <span>GitHub Repozitář ↗</span>
      </a>
    </div>
  </div>

  <!-- Impostor -->
  <div class="project-card featured">
    <div class="project-header">
      <h3 class="project-title">🕵️ Impostor</h3>
      <div class="badge-group">
        <span class="badge badge-live">Ready to Play</span>
      </div>
    </div>
    <div class="project-tagline">Atmosférická dedukční párty hra s retro estetikou a Web Audio enginem</div>
    <div class="project-desc">
      Originální párty dedukční hra typu Pass & Play. Přináší neotřelou vizuální atmosféru tajných spisů tajných služeb z 90. let, interaktivní voskovou pečeť a plně procedurálně syntetizovaný zvukový doprovod.
    </div>
    <ul class="project-highlights">
      <li><strong>90s Dossier estetika:</strong> Textura manilového papíru, úřední razítka a noční režim <em>Midnight Archival Carbon</em>.</li>
      <li><strong>Syntetizovaný zvuk (Web Audio API):</strong> 100% procedurální zvuky přímo v prohlížeči (rozlomení pečeti, šustění, tikot) bez externích zvukových souborů.</li>
      <li><strong>Slovník s 917+ hesly:</strong> 16 tematických okruhů a unikátní mód <em>Undercover</em> s 83 dvojicemi příbuzných slov.</li>
      <li><strong>PWA & Offline:</strong> Funguje kdekoliv bez nutnosti internetového připojení (na chatě, v letadle, na cestách).</li>
    </ul>
    <div class="tech-stack">
      <span class="tech-tag">JavaScript ES6+</span>
      <span class="tech-tag">Web Audio API</span>
      <span class="tech-tag">Tailwind CSS</span>
      <span class="tech-tag">Service Worker</span>
      <span class="tech-tag">Pass & Play</span>
    </div>
    <div class="project-footer">
      <a href="https://github.com/SDragonex/Impostor" target="_blank" rel="noopener noreferrer" class="btn-action primary">
        <span>GitHub Repozitář ↗</span>
      </a>
    </div>
  </div>

</div>

<div class="projects-category-title">
  <span>📦 Další projekty & Open Source</span>
</div>

<div class="projects-grid">

  <!-- Sigma Útulek -->
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">🐾 Sigma Útulek</h3>
      <span class="badge badge-stable">Open Source</span>
    </div>
    <div class="project-tagline">Webová aplikace a adopční portál pro zvířecí útulek</div>
    <div class="project-desc">
      Informační a adopční systém prezentující opuštěná zvířátka s důrazem na čisté rozhraní, jednoduché filtrování a snadný kontakt se zájemci o adopci.
    </div>
    <div class="tech-stack">
      <span class="tech-tag">HTML5</span>
      <span class="tech-tag">CSS3</span>
      <span class="tech-tag">JavaScript</span>
      <span class="tech-tag">GPL-3.0</span>
    </div>
    <div class="project-footer">
      <a href="https://github.com/SDragonex/sigma-utulek" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
        <span>GitHub ↗</span>
      </a>
    </div>
  </div>

  <!-- IMG-Scraper -->
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">🖼️ IMG-Scraper</h3>
      <span class="badge badge-stable">Tool</span>
    </div>
    <div class="project-tagline">Automatizovaný nástroj pro extrakci obrazových dat</div>
    <div class="project-desc">
      Efektivní konzolový scraper pro dávkové stahování, indexování a organizaci obrázků a grafických podkladů z webových stránek.
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Scraping</span>
      <span class="tech-tag">Automation</span>
    </div>
    <div class="project-footer">
      <a href="https://github.com/SDragonex/IMG-Scraper" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
        <span>GitHub ↗</span>
      </a>
    </div>
  </div>

  <!-- VAPO Zahrady -->
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">🌿 VAPO Zahrady</h3>
      <span class="badge badge-live">Web</span>
    </div>
    <div class="project-tagline">Webové portfolio pro zahradní architekturu a realizace</div>
    <div class="project-desc">
      Prezentační web a online portfolio zahradnických služeb, realizací zeleně a údržby zahrad s důrazem na vizuální prezentaci prací.
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Web Design</span>
      <span class="tech-tag">HTML/CSS</span>
      <span class="tech-tag">Responsive UI</span>
    </div>
    <div class="project-footer">
      <a href="https://github.com/SDragonex/vapo" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
        <span>GitHub ↗</span>
      </a>
    </div>
  </div>

  <!-- Tour de App Piškvorky -->
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">🎮 Piškvorky (Tour de App)</h3>
      <span class="badge badge-stable">Competition</span>
    </div>
    <div class="project-tagline">Síťový herní systém s Dockerem a REST API</div>
    <div class="project-desc">
      Soutěžní projekt vytvořený pro prestižní IT soutěž Tour de App. Zahrnuje herní logiku, REST API gateway a kontejnerizované nasazení přes Docker.
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Flask</span>
      <span class="tech-tag">Docker</span>
      <span class="tech-tag">REST API</span>
    </div>
    <div class="project-footer">
      <a href="https://github.com/SDragonex/TdA25-HVD-Design" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
        <span>GitHub ↗</span>
      </a>
    </div>
  </div>

</div>
