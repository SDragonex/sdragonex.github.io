---
title: "Impostor: Deduction Party Game"
description: "A Pass & Play social deduction web game with a 1990s tactile dossier aesthetic, wax seal mechanics, and a 100% procedurally synthesized Web Audio engine."
date: 2024-03-05
weight: 40
---

<div class="project-meta-box">
  <div class="project-meta-links">
    <a href="https://sdragonex.github.io/Impostor/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
      <svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      <span>Live Web</span>
    </a>
    <a href="https://github.com/SDragonex/Impostor" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
      <svg class="svg-icon fill" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      <span>GitHub Repository</span>
    </a>
  </div>
  <div class="project-meta-specs">
    <div>Type: <strong>Pass & Play Web Game</strong></div>
    <div>Stack: <strong>JavaScript (ES6+), Web Audio API, Tailwind CSS, Service Worker</strong></div>
    <div>Status: <strong>Production Ready</strong></div>
  </div>
</div>

## Project Overview

**Impostor** is a Pass & Play social deduction web game designed for single-device group play. Players take on the roles of special investigation agents who share a classified keyword. Hidden among them, one or more Impostors know nothing about the word and must deduce the context from fellow players' hints while blending in seamlessly.

Unlike generic party apps, Impostor focuses heavily on **tactile atmosphere**: manila classified envelope textures, realistic wax seals, typewriter stamps, and a procedurally synthesized audio architecture.

---

## Technical Architecture

| Component | Technology | Role & Solution |
| :--- | :--- | :--- |
| **Game State Machine** | Vanilla JS (`js/app.js`) | Deterministic state loop (Squad Configuration -> Pass & Reveal -> Discussion -> Interrogation Arena) |
| **Audio Engine** | Web Audio API (`js/audio.js`) | 100% zero-asset sound synthesis directly in the browser runtime |
| **Visual Design** | Tailwind CSS + Custom CSS Variables | Tactile manila paper styling, monospace dossier fonts, and *Midnight Archival Carbon* dark mode |
| **Dictionary Schema** | Normalised JS Array (`js/data.js`) | 917+ vetted terms, 16 party topics, and 83 paired Undercover keyword tuples |
| **Offline Runtime** | Service Worker (`sw.js`) | Offline-first PWA caching; fully playable in flights or off-grid cabins |

---

## Procedural Web Audio Synthesis (`js/audio.js`)

By avoiding external audio media (MP3/WAV files), Impostor eliminates latency, network overhead, and missing asset errors:

* **Wax Seal Fracture:** Low-frequency bandpass noise bursts simulating physical wax snapping under mechanical pressure.
* **Manila Envelope Rustle:** Modulated white-noise oscillators with randomized envelope decays mimicking cardstock friction.
* **Stopwatch Ticking & Bells:** Pure sine waves paired with fast attack-decay envelopes for analog acoustic realism.
* **Zero Latency:** Immediate touch responsiveness with zero runtime sound buffer preloading.

---

## Game Modes & Mechanics

1. **Classic Impostor:** Standard deduction where impostors possess zero foreknowledge and rely purely on social bluffing.
2. **Undercover Mode (Subtle Dissonance):** The infiltrator receives a slightly diverging keyword within the same taxonomic cluster (*Coffee vs. Tea*, *Batman vs. Superman*). The infiltrator is unaware of their rogue role until contradictory discussions unfold.
3. **Interrogation Arena & Last Stand:** The accused agent is subjected to voting and retains one final counter-guess opportunity to guess the classified term and snatch victory.
4. **Chaos Modifiers:** Optional round constraints (e.g. single-word clues, rhyming constraints, question-only interrogations).
