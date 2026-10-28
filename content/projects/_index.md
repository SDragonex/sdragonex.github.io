---
title: Projects
description: Showcase of featured software projects, mobile applications, and open-source systems by Dany Chaker.
---

<div class="projects-hero">
  <p>
    A curated collection of my key software engineering projects, mobile platforms, and open-source systems.
    I focus on <strong>clean architecture</strong>, <strong>high performance</strong>, zero unnecessary dependencies, 
    and thoughtful UI/UX design — ranging from commercial mobile applications to offline-first PWAs and custom interactive game engines.
  </p>
</div>

<div class="projects-category-title">
  <span>⭐ Featured Projects</span>
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
    <div class="project-tagline">Commercial fitness ecosystem connecting clients, gyms, and personal trainers</div>
    <div class="project-desc">
      A comprehensive mobile platform for iOS & Android with a dedicated web administration panel. Designed to streamline client-trainer discovery, workout scheduling, and long-term athletic retention.
    </div>
    <ul class="project-highlights">
      <li><strong>Tinder-style Trainer Matching:</strong> Intuitive swipe discovery based on fitness goals, location, and verified coach certifications.</li>
      <li><strong>Interactive Gym Directory:</strong> Geolocation map featuring local gyms, pricing, facilities, and certified active trainers.</li>
      <li><strong>Gamified FitCheck System:</strong> Geofenced verification within 100m of partner gyms with anti-mock location security and offline sync.</li>
      <li><strong>Modern UI/UX:</strong> AMOLED Dark mode with glowing cyan accents (`#2596be`) and adaptive tinted icons for Android 13+ and iOS 18+.</li>
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
      <span class="badge badge-beta">Mobile App & Admin</span>
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
    <div class="project-tagline">Automated study portal & knowledge base for Information Technology</div>
    <div class="project-desc">
      An extensive educational portal and static knowledge base created for IT students at SŠTE Brno. Covers computer networks, programming, software engineering, literature, and languages.
    </div>
    <ul class="project-highlights">
      <li><strong>169+ Study Pages:</strong> Structured curriculum notes, sample code, and graduation project guidelines.</li>
      <li><strong>Automated Build Pipeline:</strong> Custom Python test & validation suite (<code>build.py</code>) ensuring link integrity and source validity.</li>
      <li><strong>Instant Client-Side Search:</strong> Zero-latency search powered by Pagefind indexing directly in the browser.</li>
      <li><strong>CI/CD Automation:</strong> Automated testing and deployment to GitHub Pages via GitHub Actions.</li>
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
        <span>Live Site ↗</span>
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
    <div class="project-tagline">Offline-first PWA encyclopedia for supplementation, nootropics & biohacking</div>
    <div class="project-desc">
      A lightning-fast, minimalist Progressive Web App built for transparent access to supplement pharmacology without tracking, ads, or data bloat. Operates fully offline and stores all personal data locally in the browser.
    </div>
    <ul class="project-highlights">
      <li><strong>9 Evidence-Based Categories:</strong> Health, Performance, Nootropics, Sleep, Hormones, Peptides, and Fat Loss.</li>
      <li><strong>Pharmacological Profiles:</strong> Mechanisms of action, half-life, drug interactions, and scientific evidence grading (A/B/C).</li>
      <li><strong>Personal Supplement Log:</strong> Custom cycling tracker with color-coded outcome ratings and JSON data export/import.</li>
      <li><strong>Cyberpunk Glassmorphism:</strong> Dark aesthetic with zero external runtime dependencies, installable as a native PWA.</li>
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
        <span>GitHub Repository ↗</span>
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
    <div class="project-tagline">Atmospheric party deduction game with retro dossier aesthetic & Web Audio engine</div>
    <div class="project-desc">
      A Pass & Play social deduction web game with a tactile 1990s classified dossier aesthetic, interactive wax seal opening mechanics, and a 100% procedurally synthesized Web Audio sound engine.
    </div>
    <ul class="project-highlights">
      <li><strong>1990s Dossier Aesthetic:</strong> Manila paper textures, typewriter stamps, and a high-contrast <em>Midnight Archival Carbon</em> night mode.</li>
      <li><strong>Zero-Latency Audio Synthesis:</strong> All mechanical and tactile sounds (wax cracking, paper rustle, stopwatch tick) synthesized in-browser with Web Audio API.</li>
      <li><strong>917+ Curated Words:</strong> 16 diverse party categories plus a dedicated <em>Undercover</em> mode with 83 paired semantic terms.</li>
      <li><strong>PWA & Full Offline Support:</strong> Playable anywhere without an active network connection (flights, road trips, cabins).</li>
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
        <span>GitHub Repository ↗</span>
      </a>
    </div>
  </div>

</div>

<div class="projects-category-title">
  <span>📦 Other Projects & Open Source</span>
</div>

<div class="projects-grid">

  <!-- Sigma Útulek -->
  <div class="project-card">
    <div class="project-header">
      <h3 class="project-title">🐾 Sigma Útulek</h3>
      <span class="badge badge-stable">Open Source</span>
    </div>
    <div class="project-tagline">Modern web portal & adoption directory for animal shelters</div>
    <div class="project-desc">
      A welcoming web portal presenting rescue animals with clean visual galleries, intuitive filtering, and streamlined adoption contact workflows.
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
    <div class="project-tagline">Automated multimedia extraction and batch downloader</div>
    <div class="project-desc">
      A lightweight Python CLI tool for batch downloading, organizing, and indexing image assets and media files from remote web targets.
    </div>
    <div class="tech-stack">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Web Scraping</span>
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
    <div class="project-tagline">Commercial web portfolio for landscape architecture & design</div>
    <div class="project-desc">
      A polished showcase website for garden architecture, maintenance services, and landscaping projects designed with modern mobile-responsive principles.
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
    <div class="project-tagline">Containerized network gaming system with REST API gateway</div>
    <div class="project-desc">
      A competitive multiplayer logic game developed for the Tour de App competition, featuring a Dockerized micro-architecture, Flask backend, and clean API design.
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
