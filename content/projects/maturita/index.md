---
title: "Maturita: IT Knowledge Base & Study Portal"
description: "An open, continuously maintained study portal and IT knowledge base for SŠTE Brno featuring a custom Python validation pipeline and instant Pagefind full-text search."
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
    <div>Status: <strong>Continuously Maintained Knowledge Base</strong></div>
  </div>
</div>

## Purpose & Problem Statement

Preparation for secondary school technical graduation examinations (*Maturita*) frequently suffers from chronic fragmentation and obsolescence. Students are traditionally forced to navigate an unorganized patchwork of scanned notebooks, outdated PowerPoint presentations from 2012–2018, questionable files on shared drives, and unstructured Word documents passed down through student generations. These resources frequently contain factual inaccuracies, outdated network protocols, and deprecated language versions.

**Project Maturita** was engineered as a robust solution to this educational disorder. It represents a centralized, open-source, version-controlled knowledge ecosystem covering the full curriculum of the 18-20-M/01 Information Technology specialization at SŠTE Brno.

Rather than being a static artifact for a single graduation year, Maturita is conceived as an **evergreen, living repository**. It is continuously audited, updated, and extended with modern technological industry standards (IPv6, modern Docker workflows, REST vs. GraphQL, and modern C#/Python paradigms).

### Target Audience & Impact
* **IT Students:** A single, verified source of truth featuring structured topic breakdowns, production-grade code snippets, and network topologies.
* **Future School Years:** Zero knowledge loss between student cohorts. The Git-based contribution model allows anyone to submit pull requests, fix typos, or append new technological modules.
* **Faculty & Instructors:** A transparent benchmark harmonizing knowledge expectations for graduating technical specialists.

---

## Architecture & Technology Stack

The portal implements modern Jamstack architectural principles with zero server runtime overhead and lightning-fast content delivery:

| Layer | Chosen Technology | Architectural Rationale & Trade-offs |
| :--- | :--- | :--- |
| **Static Site Generator** | [Zola](https://www.getzola.org/) (Rust) | Blazing compilation speed (< 1s for hundreds of Markdown pages), native SCSS pipeline, zero npm dependencies |
| **Search Engine** | [Pagefind](https://pagefind.app/) (v1.5.2) | Client-side WebAssembly search engine; downloads lightweight static index chunks on demand without any server backend |
| **Validation Orchestrator** | Python 3.12 (`scripts/build.py`) | Custom CI test harness verifying cross-link integrity, Markdown formatting, and frontmatter consistency |
| **CI/CD Pipeline** | GitHub Actions | Automated regression testing, compilation, and zero-downtime deployment to GitHub Pages on every push |
| **Design System** | Clean Vanilla SCSS | High-contrast typography, syntax-highlighted code blocks, and responsive tables tailored for deep study sessions |

---

## Curriculum Coverage

The knowledge base encompasses **169 comprehensive study guides** divided into focused academic sections:

| Domain | Topic Count | Technical Scope |
| :--- | :--- | :--- |
| **Computer Networks & Programming** | 26 topics | OSI/ISO stack, TCP/IP, dynamic routing (OSPF, BGP), switching (VLAN, STP), OOP paradigms, data structures and algorithms |
| **Application Software** | 26 topics | Linux & Windows administration, virtualization (KVM, Proxmox), Docker containers, SQL transaction management |
| **Literature & Cultural Context** | 97 works | In-depth contextual analyses of Czech and world literary milestones aligned with the national examination canon |
| **Technical English** | 20 modules | IT vocabulary, hardware/software specifications, and realistic conversational exam scenarios |
| **Graduation Thesis** | 7 domains | System architecture design, implementation guidelines, technical documentation, and defense strategies |

---

## Custom Build & Validation Pipeline (`scripts/build.py`)

A cornerstone of the repository's engineering rigor is the custom Python validation pipeline. Prior to deployment, it enforces strict quality gates:

1. **Zero Broken Links Guarantee:** Iterates through thousands of Markdown links and anchor identifiers (`#`) to prevent 404 dead ends.
2. **Schema & Frontmatter Validation:** Validates required metadata fields across all content files.
3. **Automated Pagefind WASM Indexing:** Runs the Pagefind indexer post-build to build static search shards for offline browser execution.
4. **Artifact Integrity Audit:** Verifies generated HTML bundles and static assets before deployment to production.
