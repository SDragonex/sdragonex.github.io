---
title: "Maturita 2027: Educational Knowledge Base"
description: "An automated study portal and knowledge base for Information Technology students featuring a custom Python validation pipeline and instant Pagefind full-text search."
date: 2024-05-10
weight: 20
---

<div class="project-meta-box">
  <div class="project-meta-links">
    <a href="https://sdragonex.github.io/Maturita/" target="_blank" rel="noopener noreferrer" class="btn-action primary">
      <svg class="svg-icon" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      <span>Live Site</span>
    </a>
    <a href="https://github.com/SDragonex/Maturita" target="_blank" rel="noopener noreferrer" class="btn-action secondary">
      <svg class="svg-icon fill" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
      <span>GitHub Repository</span>
    </a>
  </div>
  <div class="project-meta-specs">
    <div>Type: <strong>Static Jamstack Portal</strong></div>
    <div>Stack: <strong>Zola, Pagefind, Python 3.12, SCSS</strong></div>
    <div>Status: <strong>Production Live</strong></div>
  </div>
</div>

## Project Overview

**Maturita 2027** is a structured educational knowledge base engineered for final-year students of the Information Technology curriculum at SŠTE Brno. It replaces fragmented PDF notes, disparate docs, and legacy slides with a unified, version-controlled static documentation ecosystem.

The portal encompasses **169 detailed study pages**, code examples, and technical graduation project guides.

---

## Architecture & Engineering

The site implements modern Jamstack architectural principles: zero servers to maintain, static HTML pre-rendering, and pre-deployment continuous validation.

| Layer | Technology | Role & Architecture |
| :--- | :--- | :--- |
| **Static Site Generator** | Zola (Rust) | High-speed compilation of Markdown sources and SCSS stylesheets |
| **Client Search Engine** | Pagefind (v1.5.2) | Sub-millisecond full-text indexation performed directly in the client browser |
| **Build Pipeline & Linter** | Python 3.12 (`scripts/build.py`) | Automated cross-link verification, frontmatter linting, and asset integrity |
| **CI/CD Automation** | GitHub Actions | Automated regression tests, compilation, and zero-downtime deployment to GitHub Pages |
| **Design System** | Custom SCSS | Tailored for extensive technical reading, responsive tables, and syntax code blocks |

---

## Curriculum Coverage

| Domain | Topic Count | Technical Scope |
| :--- | :--- | :--- |
| **Computer Networks & Programming** | 26 topics | TCP/IP model, routing protocols, switching, OOP paradigms, algorithms, and data structures |
| **Application Software** | 26 topics | Linux/Windows administration, virtualization, containerization, and relational databases |
| **Literature & Cultural Context** | 97 works | Deep contextual analysis of literary works aligned with the official examination list |
| **Technical English** | 20 modules | IT terminology, grammatical frameworks, and professional conversation drills |
| **Graduation Thesis** | 7 domains | Methodology for system design, hardware/software implementation, documentation, and defense |

---

## Custom Build & Validation Pipeline (`scripts/build.py`)

A notable feature of the repository is the custom Python test harness. Prior to deployment, it enforces strict quality gates:

1. **Dead Link Detection:** Validates every internal relative link and section anchor across thousands of references.
2. **Markdown Schema Validation:** Asserts frontmatter correctness, syntax highlight tags, and table formatting.
3. **Automated Search Indexing:** Executes Pagefind to build static shard indexes for immediate client querying.
4. **Build Artifact Auditing:** Verifies generated HTML bundles prior to publishing to production.
