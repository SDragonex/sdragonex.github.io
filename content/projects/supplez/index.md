---
title: "SuppleZ: Biohacking PWA Encyclopedia"
description: "A minimalist, offline-first progressive web application for evidence-based supplementation, nootropics, peptides, and personal protocol cycling."
date: 2024-04-12
weight: 30
---

<div class="project-meta-box">
  <div class="project-meta-links">
    <a href="https://sdragonex.github.io/SuppleZ/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
      <svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      <span>Live Web</span>
    </a>
    <a href="https://github.com/SDragonex/SuppleZ" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
      <svg class="svg-icon fill" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      <span>GitHub Repository</span>
    </a>
  </div>
  <div class="project-meta-specs">
    <div>Architecture: <strong>Offline PWA</strong></div>
    <div>Stack: <strong>Vanilla JavaScript (ES6+), Service Worker, CSS Glassmorphism</strong></div>
    <div>Version: <strong>v4.0 Production</strong></div>
  </div>
</div>

## Project Overview

**SuppleZ** is a progressive web application designed as a transparent, evidence-based compendium covering supplementation, nootropics, peptides, and human biohacking. The project was engineered to deliver clean, ad-free pharmacology data without telemetry, sponsored placements, or paywalled paywalls.

The app is **100% offline capable**, requires no user registration, and stores all personal logs exclusively inside the client's local storage sandbox.

---

## Architecture & Zero-Dependency Principles

SuppleZ is built without external frontend frameworks to ensure zero runtime overhead and instant initial load.

| Layer | Technology | Architectural Choice |
| :--- | :--- | :--- |
| **Application Core** | Vanilla JS (ES6+) | Direct DOM manipulation, custom client-side router, and zero npm runtime dependencies |
| **Interface Styling** | CSS3 Grid, Flexbox, Custom Tokens | Cyberpunk glassmorphism aesthetic with native hardware acceleration |
| **Offline Engine** | Service Worker (`sw.js`) | Cache-first caching for static assets, Network-first updates for the database |
| **Data Normalization** | JSON Schema (`database.json`) | Complete pharmacological dossiers for individual substances |
| **Client Storage** | LocalStorage API | Local storage of personalized dosage logs with JSON backup import/export |

---

## Pharmacological Schema & Categorization

The database categorizes substances across clearly delineated ID ranges:

* **9 Curated Categories:** Fundamental Health (100–199), Athletic Performance (200–299), Sleep & Recovery (300–399), Fat Loss & Thermogenesis (400–499), Hormonal Optimization (500–599), Cognitive Nootropics (600–699), Experimental Research & Peptides (700–799), Anabolic Agents (800–899), Organ Protection & PCT (900–999).
* **Clinical Properties:** Cellular mechanism of action, elimination half-life, known pharmacological contraindications, and drug-drug interactions.
* **Evidence Quality Grading:**
  * **Grade A:** Replicated double-blind, placebo-controlled human randomized trials and systematic meta-analyses.
  * **Grade B:** Preliminary human clinical trials or extensive epidemiological cohort studies.
  * **Grade C:** In-vitro findings, animal models, or anecdotal empirical biohacker reports.
* **Safety Triage:** Color-coded risk indicators (Green for benign compounds, Yellow for compounds demanding dosage prudence, Red for high-risk compounds with narrow therapeutic windows).

---

## Personal Logging & Stack Cycling

* Detailed ingestion logs tracking dosage timestamp, quantity, and subjective efficacy ratings.
* Thematic stack creation (e.g. morning focus stack, circadian alignment, athletic performance stack).
* Complete data portability via JSON backup export and restore mechanisms.
