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
    <div>Architecture: <strong>Pass & Play PWA Game</strong></div>
    <div>Stack: <strong>JavaScript (ES6+), Web Audio API, Tailwind CSS, Service Worker</strong></div>
    <div>Status: <strong>Production Ready</strong></div>
  </div>
</div>

## Purpose & Problem Statement

Social deduction games (such as *Mafia*, *Secret Hitler*, *Spyfall*, and *Among Us*) are renowned for sparking lively social dynamics. However, in real-world party scenarios, pubs, or off-grid cabin retreats, they regularly stumble upon **three frustrating bottlenecks:**

1. **App Store Friction & Onboarding Fatigue:** Forcing 6 to 10 players to each download a 150MB native app, recover forgotten passwords, and connect to a room code kills party momentum before the first round even begins.
2. **Network Dependency:** Basement bars, transit flights, and remote wilderness cabins often lack cellular data or dependable Wi-Fi connections.
3. **Screen Isolation vs. Human Connection:** Instead of looking each other in the eye to analyze micro-expressions, speech hesitation, and body language, everyone is locked into their personal screens.

**Impostor** sidesteps these problems using an elegant **single-device Pass & Play** architecture:

* **Single Shared Device:** A single browser window on any smartphone is all that's required. Zero downloads, zero accounts.
* **Tactile Classified Dossier Ritual:** The phone circulates in a circle. Each player taps to break an interactive wax seal, secretly inspects their secret dossier, and passes the handset to the next player.
* **Psychological Focus:** Once everyone has seen their role, the phone is set down in the center of the table. The game transitions entirely into verbal sparring, bluffing, and interpersonal deduction.

---

## Architecture & Technology Stack

The application is engineered without bulky third-party game engines (no Unity or Phaser overhead), relying exclusively on native web standards:

| Layer | Chosen Technology | Architectural Rationale & Trade-offs |
| :--- | :--- | :--- |
| **Core State Engine** | Vanilla JavaScript (`js/app.js`) | Deterministic finite state machine (FSM) enforcing transitions without memory leaks or race conditions |
| **Audio Synthesizer** | [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) (`js/audio.js`) | 100% procedural sound synthesis in real time; zero downloaded audio files (0 KB network transfer) and zero touch latency |
| **Visual Styling** | Tailwind CSS + Custom Tokens | Manila folder paper textures, typewriter typography, classified dossier stamps, and *Midnight Archival* dark mode |
| **Keyword Lexicon** | Normalized Data Array (`js/data.js`) | 917+ curated terms, 16 party categories, and 83 paired Undercover keyword tuples with tuned semantic proximity |
| **Offline Runtime** | Service Worker (`sw.js`) | Full PWA offline caching ensuring uninterrupted gameplay in off-grid settings |

---

## Technical Innovation: Procedural Web Audio Engine (`js/audio.js`)

Typical web games download dozens of megabytes of MP3/WAV audio assets. This traditional approach introduces audio latency (often 100–300 ms delays on mobile devices) and fails under poor network conditions.

Impostor generates all acoustic feedback **mathematically in real time** via the browser's native `AudioContext`:

* **Wax Seal Crack:** Low-frequency noise bursts modulated through a resonant bandpass filter, simulating physical wax snapping under mechanical shear.
* **Manila Envelope Rustle:** White noise generators shaped by an exponential decay envelope mimicking heavy cardstock friction.
* **Stamp Impact Thud:** Low-frequency bass transient simulating a physical wooden bureaucratic ink stamp hitting a wooden desk.
* **Stopwatch Ticks & Chimes:** High-precision sine wave oscillators with sub-millisecond attack times and calibrated harmonic decays.
* **Zero Latency:** Instantaneous acoustic feedback (< 5 ms) triggered directly on touch events with zero data consumption.

---

## Game Modes & Psychological Dynamics

1. **Classic Impostor:** One or more infiltrators know nothing about the classified keyword. Loyal agents drop subtle clues. The Impostor must bluff conviction while deducing the context from peer statements.
2. **Undercover Mode (Semantic Dissonance):** The infiltrator is given a related keyword from the same taxonomic cluster (*Coffee vs. Tea*, *Minecraft vs. Roblox*, *Batman vs. Superman*). The infiltrator initially believes they are an ordinary agent until subtle contradictions emerge during table discussions.
3. **Interrogation Arena & Final Stand:** When voted out, an accused agent gets one last chance: if they accurately guess the agents' original keyword, they reverse the verdict and claim victory.
4. **Squad Manager:** Persistent device storage for recurring player names with an automated callsign generator.
5. **Chaos Cards (Party Modifiers):** Optional round constraints (e.g. single-word clues only, rhyming constraints, question-only interrogations).
6. **Custom Deck Builder & Evening Scoreboard:** In-app creation and storage of custom secret word packs with cumulative team vs. impostor scoring.
