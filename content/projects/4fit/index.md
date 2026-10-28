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

## Project Overview

**4Fit** is a commercial mobile platform designed to bridge the gap between fitness enthusiasts, certified personal trainers, and gym facilities. Traditional fitness trackers struggle with user retention and lack real-world integration with gym venues. 4Fit solves this by fusing discovery matchmaking, real-time messaging, and a geofenced retention engine.

The platform is anchored on four fundamental pillars: **simplicity, clarity, retention, and synergy** between athlete and trainer.

---

## Architecture & Technology Stack

The project leverages a cross-platform architecture built on Flutter for client apps and Supabase as an enterprise-grade backend infrastructure.

| Component | Technology | Purpose & Implementation |
| :--- | :--- | :--- |
| **Mobile Frontend** | Flutter (Dart) | Native 60fps rendering across iOS and Android from a single unified codebase |
| **Backend & DB** | Supabase (PostgreSQL) | Auth management, Row Level Security (RLS) policies, and real-time event streams |
| **Geolocation Engine** | `geolocator` + Anti-Mocking | Physical gym presence verification within a 100-meter radius |
| **Admin Web Portal** | Flutter Web / HTML5 | Trainer certification verification, gym inventory management, and telemetry |
| **Persistence & Cache** | Local Cache & SQLite | Zero-data-loss offline caching for check-ins in subterranean facilities |

---

## Core System Modules

### 1. Trainer Matchmaking (Swipe Discovery)
* Fast, card-based trainer discovery inspired by modern swipe mechanics.
* Users browse detailed coach portfolios, specialties (strength training, mobility, body recomposition), verified certifications, and verified client testimonials.
* Mutual matchmaking initiates direct communication and workout onboarding.

### 2. Interactive Gym Directory & Geo-Map
* Real-time map displaying partnered gym facilities in the user's vicinity.
* Detailed gym cards provide facility photography, admission pricing, equipment lists, and certified resident trainers.

### 3. FitCheck: Geofenced Gamification & Retention
Sustained workout adherence is the primary challenge in fitness software. 4Fit implements **FitCheck**:
* **100m Geofencing Radius:** Check-ins are strictly permitted only when the device is physically detected within partner facility premises.
* **Anti-Mock Location Protection:** Kernel-level validation blocks mock GPS providers on both Android and iOS devices.
* **Habit Streaks:** Users set weekly workout targets. The retention algorithm increments streak counters once per period to ensure fair play.
* **Offline Caching:** For basement gym locations lacking cellular connectivity, check-in payloads are encrypted locally and dispatched asynchronously once connection is restored.

### 4. Direct Messaging & Scheduling
* Real-time in-app chat for workout routines and nutritional adjustments.
* Integrated booking calendar for scheduling sessions directly into the coach's timetable.

---

## UI/UX Engineering

* **AMOLED Dark Mode:** Deep black backgrounds designed for OLED efficiency with vibrant cyan accents (`#2596be`).
* **Adaptive Theming:** Ready for Android 13+ Material You themed icons and iOS 18+ dynamic tinting.
* **5-Slot Dock Navigation:** Balanced bottom dock featuring Feed, Map, Trainers (focal elevated element), Chat, and Profile.
