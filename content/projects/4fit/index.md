---
title: "4Fit: Mobile Fitness Ecosystem"
description: "Commercial cross-platform fitness application connecting athletes, gyms, and coaches with a geofenced FitCheck retention engine and Supabase architecture."
date: 2024-06-15
weight: 10
---

<div class="project-meta-box">
  <div class="project-meta-links">
    <a href="https://samcejko.eu/4fit/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
      <svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      <span>Live Web</span>
    </a>
  </div>
  <div class="project-meta-specs">
    <div>Platform: <strong>iOS, Android & Web Admin</strong></div>
    <div>Stack: <strong>Flutter, Dart, Supabase, PostgreSQL</strong></div>
    <div>Status: <strong>Closed Beta</strong></div>
  </div>
</div>

## Purpose & Problem Statement

Conventional fitness applications frequently fall into one of two traps: either acting as sterile digital spreadsheets for manual set logging or as passive video libraries. In real life, the gym industry faces a major systemic bottleneck: **severe user drop-off (churn rate)** and disconnected workflows across three key stakeholders:

1. **Fitness Enthusiasts (Athletes):** Following the initial January surge, over 60% of gym-goers abandon their routines within 6 weeks due to lack of accountability, isolation, and friction when attempting to find vetted personal trainers.
2. **Personal Trainers:** Spend disproportionate unbillable hours chasing clients in WhatsApp or Instagram direct messages, resolving last-minute cancellations, and managing calendars manually.
3. **Gym Facility Operators:** Struggle with member retention and lack a digital channel to integrate local gym members with resident accredited coaching staff.

**4Fit** bridges this gap through a unified digital ecosystem built upon **four foundational pillars:**

* **FitCheck (Geofenced Retention Engine):** Drives adherence through fair-play gamification validated by physical gym visits.
* **Trainer Swipe Discovery:** Streamlined matchmaking linking athletes with certified trainers by location, specialty, and verified reviews.
* **Integrated Scheduling & Direct Messaging:** Eliminates fragmented chat channels by combining scheduling and real-time messaging into a single hub.
* **Interactive Gym Directory:** Comprehensive geographical map featuring membership pricing, amenities, and resident coaching rosters.

---

## Architecture & Technology Stack

The project employs a modern cross-platform architecture prioritizing native interface fluidity, high framerates, and enterprise-grade cloud security:

| Layer | Chosen Technology | Architectural Rationale & Trade-offs |
| :--- | :--- | :--- |
| **Mobile Client** | [Flutter](https://flutter.dev/) (Dart) | Single shared codebase across iOS and Android. Guaranteed 60/120 fps rendering via the Impeller engine, ensuring pixel-perfect visual parity |
| **Backend & Auth** | [Supabase](https://supabase.com/) | Relational PostgreSQL over NoSQL. Security enforced at the database layer via Row Level Security (RLS) policies; native WebSockets for instant messaging |
| **Geolocation Subsystem** | `geolocator` + Anti-Mocking | Precise Haversine distance computations within a 100-meter radius, coupled with OS-level mock location detection |
| **Local Offline Storage** | SQLite & Encrypted SharedPrefs | Ensures frictionless check-in logging in subterranean basement gyms lacking cellular coverage, with an automatic background sync queue |
| **Administration Portal** | Flutter Web | Dedicated desktop web portal for reviewing trainer credentials, managing gym profiles, and monitoring platform metrics |

---

## Engineering Module Highlights

### 1. FitCheck Geofencing Engine & Cheat Mitigation
The habit gamification system relies on visit veracity. If check-ins could be spoofed, streaks would lose all competitive and psychological weight.
* **100-Meter Geofencing:** Device GPS coordinates are evaluated in real time against the partner gym's geographic boundaries.
* **Anti-Mock Detection:** The client inspects platform-specific flags (Android `Location.isFromMockProvider()` and iOS core location telemetry) to reject emulated GPS inputs.
* **Fair-Play Habit Algoritm:** Restricts rewards to one streak point per calendar week upon reaching pre-set weekly targets, preventing artificial visit spamming.

### 2. Data Security Architecture (PostgreSQL Row Level Security)
Because personal health metrics and private trainer-client consultations are sensitive, security cannot rely on client-side rules alone:
* Access control is enforced directly by PostgreSQL **RLS policies**.
* Athletes hold cryptographically restricted access to their individual workout logs and messages.
* Trainers can access client data exclusively when granted explicit authorization through mutual matchmaking.

### 3. Trainer Matchmaking (Swipe Discovery)
* The client UI leverages hardware-accelerated gestural cards.
* Trainer profiles feature accredited certifications, focus areas (e.g., powerlifting, orthopedic rehabilitation, calisthenics), and verified client reviews.
* Mutual matches automatically initialize an encrypted direct chat channel and shared scheduling calendar.

---

## Design System & UX
* **AMOLED Dark Mode:** Pitch-black background (`#000000`) engineered for OLED power efficiency during workouts, complemented by a signature high-energy turquoise accent (`#2596be`).
* **One-Handed Ergonomic Navigation:** A 5-slot bottom dock optimized for thumb accessibility while holding workout equipment (Feed, Map, Trainers, Chat, Profile).
