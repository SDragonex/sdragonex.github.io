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
    <div>Architecture: <strong>Offline-First PWA (Zero-Framework)</strong></div>
    <div>Stack: <strong>Vanilla JavaScript (ES6+), Service Worker, CSS Glassmorphism</strong></div>
    <div>Version: <strong>v4.0 Production</strong></div>
  </div>
</div>

## Purpose & Problem Statement

Nutritional supplementation, nootropics, and human biohacking represent a multi-billion-dollar global commercial machine. A typical individual seeking to optimize sleep architecture, mental focus, athletic endurance, or metabolic health is met with **three fundamental challenges:**

1. **Information Pollution & Commercial Bias:** The vast majority of online resources are commercial supplement storefronts or sponsored influencer endorsements engineered to peddle high-margin proprietary blends with sub-therapeutic doses.
2. **Pharmacological Blind Spots & Drug Interactions:** Users frequently stack multiple bioactive compounds without understanding molecular receptor mechanics, biological elimination half-lives, or dangerous drug-drug interactions (e.g. co-administering serotonergic compounds with SSRIs risking serotonin syndrome).
3. **Privacy Exploitation:** Health tracking platforms routinely demand account creation, harvest biomarker telemetry, and monetize sensitive health profiles across data brokers.

**SuppleZ** was designed as an uncompromising antidote: a **transparent, evidence-based compendium and personal protocol journal**. It sells no physical products, runs zero advertisements, contains no telemetry beacons, and uses zero third-party tracking scripts.

All personal logging, dosing stacks, and self-reported efficacy metrics remain **100% private and sandboxed strictly inside your local browser**.

---

## Architecture & Technology Stack

The application adheres strictly to a **Zero-Framework Architecture** philosophy — eschewing megabytes of npm package dependencies in favor of native web platform capabilities:

| Layer | Chosen Technology | Architectural Rationale & Trade-offs |
| :--- | :--- | :--- |
| **Client Engine** | [Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Zero third-party runtime frameworks (no React, Vue, or Angular overhead). Instant launch latency (< 30 ms), zero vulnerability footprint across dependencies |
| **Offline Architecture** | [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (`sw.js`) | True Progressive Web App (PWA) installable on desktop and mobile home screens. Operates completely offline during transatlantic flights or underground gyms |
| **Visual Design** | CSS3 Custom Properties & Glassmorphism | Hardware-accelerated UI with seamless light/dark mode transitions, fluid CSS Grid layouts, and tactile micro-interactions |
| **Data Normalization** | Normalized JSON (`database.json`) | Pharmacological schema with granular scientific evidence ratings and clinical risk triage indicators |
| **Data Persistence** | Web Storage API (LocalStorage) | Fully isolated client storage for personal stack logs with instant JSON export and backup restoration |

---

## Pharmacological Schema & Scientific Evidence Grading

Every compound in the database undergoes rigorous classification:

* **9 Specialized Categories:** Fundamental Health (100–199), Athletic Performance (200–299), Sleep & Recovery (300–399), Fat Loss & Thermogenesis (400–499), Hormonal Optimization (500–599), Cognitive Nootropics (600–699), Experimental Research Peptides (700–799), Anabolic Agents (800–899), Organ Protection & PCT (900–999).
* **Evidence Quality Grading (Evidence Grade):**
  * **Grade A:** Robust empirical evidence validated by multiple double-blind, randomized, placebo-controlled human trials and systematic meta-analyses.
  * **Grade B:** Promising data supported by smaller human clinical cohorts or epidemiological research.
  * **Grade C:** Preliminary findings from animal models, in-vitro assays, or empirical biohacker documentation requiring clinical validation.
* **Safety & Risk Triage:**
  * <span style="color: #2ecc71; font-weight: bold;">Green:</span> Benign compounds with extensive safety records at suggested clinical doses.
  * <span style="color: #f1c40f; font-weight: bold;">Yellow:</span> Compounds demanding strict cycling, dosage vigilance, or routine bloodwork monitoring.
  * <span style="color: #e74c3c; font-weight: bold;">Red:</span> High-risk compounds carrying narrow therapeutic margins, pronounced endocrine disruption, or significant cardiovascular strain.

---

## Personal Logging & Protocol Management
* Construct custom personalized stacks (e.g., *Caffeine-Free Deep Focus*, *Circadian Phase Alignment*, *Pre-Workout Neural Primer*).
* Monitor subjective bioavailability and time dosing around biological elimination half-lives.
* Uncompromised digital sovereignty: export complete personal records to an open JSON archive with a single click.
