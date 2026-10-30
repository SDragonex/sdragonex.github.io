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
    <div>Stack: <strong>Vanilla JavaScript (ES6+), IndexedDB, Service Worker, CSS Glassmorphism</strong></div>
    <div>Version: <strong>v4.0 / v4.1 Production</strong></div>
  </div>
</div>

## Purpose & Problem Statement

Nutritional supplementation, nootropics, and human biohacking represent a multi-billion-dollar global commercial machine. A typical individual seeking to optimize sleep architecture, mental focus, athletic endurance, or metabolic health is met with **three fundamental challenges:**

1. **Information Pollution & Commercial Bias:** The vast majority of online resources are commercial supplement storefronts or sponsored influencer endorsements engineered to peddle high-margin proprietary blends with sub-therapeutic doses.
2. **Dangerous Interactions & Absorption Collisions:** Users frequently stack multiple bioactive compounds without understanding molecular receptor mechanics, biological half-lives, or gastrointestinal transport competition (e.g., co-administering zinc and iron which compete for the same DMT1 transporter, or stacking 5-HTP with stimulants/SSRIs risking serotonin syndrome).
3. **Privacy Exploitation:** Health tracking platforms routinely demand account creation, harvest biomarker telemetry, and monetize sensitive health profiles across data brokers.

**SuppleZ** was designed as an uncompromising antidote: a **transparent, evidence-based compendium, interaction analyzer, and personal protocol journal**. It sells no physical products, runs zero advertisements, contains no telemetry beacons, and uses zero third-party tracking cookies.

All personal logging, dosing stacks, and self-reported efficacy metrics remain **100% private and sandboxed strictly inside your local browser** via client-side IndexedDB persistence.

---

## Architecture & Technology Stack

The application adheres strictly to a **Zero-Framework Architecture** philosophy — eschewing megabytes of npm package dependencies in favor of native web platform capabilities:

| Layer | Chosen Technology | Architectural Rationale & Trade-offs |
| :--- | :--- | :--- |
| **Client Engine** | [Vanilla JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) | Zero third-party runtime frameworks (no React, Vue, or Angular overhead). Instant launch latency (< 30 ms), zero vulnerability footprint across dependencies |
| **Async Storage Engine** | IndexedDB & LocalStorage (`db.js`) | Robust asynchronous local database with automated schema migrations for personal stack entries and dosage history |
| **Offline Architecture** | [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API) (`sw.js`) | True Progressive Web App (PWA) installable on desktop and mobile home screens. Cache-First for static assets, Network-First for database bundles; 100% offline capable |
| **Visual Design** | CSS3 Custom Properties & Glassmorphism | Hardware-accelerated UI with seamless light/dark mode transitions, fluid CSS Grid layouts, and tactile micro-interactions |
| **Data Normalization** | Normalized JSON (`supplements.bundle.json`) | Pharmacological schema with granular scientific evidence ratings and clinical risk triage indicators across 9 categories |

---

## Core Engineering Modules

### 1. Real-time Interaction Checker
An intelligent client-side validation engine auditing substance combinations in user stacks:
* **Synergistic Stacks:** Identifies proven biohacking pairings (e.g., *Caffeine + L-Theanine* for smooth jitters-free focus, *Vitamin D3 + K2 + Magnesium* for optimal calcium metabolism).
* **Timing Competitions:** Alerts users to receptor and absorption bottlenecks in the digestive tract (e.g., *Zinc vs. Iron*, *Calcium vs. Magnesium*).
* **Critical Contraindications:** Immediate red alert warnings for dangerous drug-drug interactions (e.g., *5-HTP + SSRIs*, *Yohimbine + potent sympathomimetics*).

### 2. Circadian Phase Scheduling (4 Daily Blocks)
Automatically computes pharmacokinetics and stratifies substances into four biological intake windows:
1. **Fasted Morning:** High-bioavailability amino acids and peptides (e.g., *L-Tyrosine, B-Complex, BPC-157*).
2. **Mid-Morning Meal:** Fat-soluble compounds requiring dietary lipids for lymphatic transport (e.g., *Vitamin D3 + K2, Omega 3 EPA/DHA*).
3. **Pre-Workout / Afternoon Focus:** Hemodynamic vasodilators and cholinergic cognitive enhancers (e.g., *L-Citrulline, Caffeine, Alpha-GPC*).
4. **Pre-Sleep Downtime:** GABAergic modulators supporting slow-wave deep sleep (e.g., *Magnesium Bisglycinate, Apigenin, Glycine*).

### 3. Visual Peptide Reconstitution Calculator
* Mathematical precision engine calculating compound concentrations, unit volume, and dosage yield per vial for research peptides (*BPC-157, TB-500, GHK-Cu, GLP-1*).
* **Interactive Visual Syringe Canvas (U-100 & U-40):** Dynamically renders plunger travel and fluid displacement in real time, clearly highlighting measurement marks (IU/ticks) to eliminate dosing inaccuracies.

### 4. Pharmacological Classification & Scientific Evidence Grading
* **9 Specialized Categories:** Fundamental Health (100–199), Athletic Performance (200–299), Sleep & Recovery (300–399), Fat Loss & Thermogenesis (400–499), Hormonal Optimization (500–599), Cognitive Nootropics (600–699), Experimental Research Peptides (700–799), Anabolic Agents (800–899), Organ Protection & PCT (900–999).
* **Evidence Quality Grading:** Grade A (double-blind, placebo-controlled human randomized trials and systematic reviews), Grade B (smaller human clinical cohorts), Grade C (in-vitro and animal models).
* **Safety Triage:** Green (benign compounds with wide therapeutic windows), Yellow (compounds demanding cycling and prudence), Red (high-risk agents requiring clinical supervision).
* **Personal Protocol Journal:** Cycle tracking, timestamped logs, and zero-compromise JSON backup import/export.
