---
type: epic
project: Market Oracle / Agentic Commerce
epic: "Epic 1 - Shopify Valid MVP"
status: active
owner: Javad
style: black-label
links:
  hub: [[Agentic Commerce Intelligence Hub (START HERE)]]
  product: [[Market Oracle]]
  features: [[Feature list]]
  backlog: [[Backlog]]
tags: [epic, shopify, mvp, testflight, qa]
---
ignore: ---
type: epic
product: market-oracle
epic: 1
status: active
owner: QA
depends_on:
  - "[[Feature list]]"
  - "[[Backlog]]"
  - "[[Regression Checklist]]"
parent: "[[Market Oracle]]"
canvas:
  - "[[20 - Market Oracle Product.canvas]]"
tags:
  - epic
  - mvp
  - shopify
  - market-oracle
  - qa
  - release
  - testflight
---

# Epic 1 — Shopify Valid MVP

## Links (graph spine)
- **Parent (Product):** [[Market Oracle]]
- **Specs:** [[Feature list]]
- **Execution queue:** [[Backlog]]
- **Quality gate:** [[Regression Checklist]]
- **Canvas:** [[20 - Market Oracle Product.canvas]]

## Tags
#epic #mvp #shopify #market-oracle #qa #release #testflight
# Epic 1 — Shopify Valid MVP
A clean, complete, shippable MVP with zero “why?” gaps and zero mystery outputs.

---

## What
Deliver a **Shopify-connected MVP** where every module explains itself in-product and every feature in [[Feature list]] executes reliably—ending in **TestFlight readiness**.

---

## Why
Because an agentic commerce product either feels **inevitable** or it feels **unfinished**.
This epic removes the two killers:
1) unclear value (“why am I seeing this?”)  
2) brittle execution (“it errors, it’s confusing, I don’t trust it”)

---

## Inputs
- Connected **Shopify test store** (stable credentials + permissions)
- Completed modules from [[Feature list]]
- Regression checklist (QA-owned, versioned)
- Release candidate build pipeline for TestFlight

---

## Outputs
- Every screen/module contains: **What / Why / Inputs / Output / Example**
- Every item in [[Feature list]] runs end-to-end:
  - no runtime errors
  - understandable output
  - test coverage evidence
- TestFlight-ready build with onboarding working end-to-end

---

## Definition of Done (DoD)
### A) “Why-proof” UI/UX
- Every module and dashboard section answers “why?” **in the product**.
- No external docs required to interpret a screen.

### B) Feature execution reliability
- All items in [[Feature list]] complete successfully under test conditions.
- Output is **human-readable**, not raw payloads.

### C) Release readiness
- RC build passes regression with:
  - **0 P0 / 0 P1**
  - onboarding completes end-to-end
  - TestFlight submission packaging complete

---

## Given / When / Then (Fuad format)

### GWT-1 — Self-explaining product (information architecture)
- **Given** a new user enters the product  
  **When** they view the dashboard and any module  
  **Then** they see **What / Why / Inputs / Output / Example** without needing external sources.

**Example (pattern template to paste into every module card):**
- **What:** “This module surfaces X.”
- **Why:** “Because Y reduces risk / saves time / increases confidence.”
- **Inputs:** “Shopify store, date range, category keyword.”
- **Output:** “Ranked list + explanation.”
- **Example:** “If you choose ‘wireless chargers’ → you’ll see demand, saturation, ad intensity.”

---

### GWT-2 — Feature list execution (functional completion)
- **Given** a connected Shopify test store  
  **When** the user runs each item in [[Feature list]]  
  **Then** it completes without error and produces understandable output.

**Testing proof required per feature:**
- ✅ happy path
- ✅ empty / edge case
- ✅ permission / auth failure shows graceful message
- ✅ output includes “so what” explanation (1–2 lines)

---

### GWT-3 — Release candidate quality gate (ship gate)
- **Given** a release candidate build  
  **When** QA runs the regression checklist  
  **Then** there are no P0/P1 issues and onboarding completes end-to-end.

---

## Scope boundaries (keep it sharp)
In-scope:
- “Why-proof” microcopy + module framing
- Execution stability + understandable outputs
- Regression checklist + RC build hygiene

Out-of-scope (explicitly):
- advanced agent automation
- speculative features not in [[Feature list]]
- performance optimization beyond “no blocking UX”

---

## Work breakdown aligned to your current structure

### 1) Product framing layer (ties to [[Market Oracle]])
- Add **What/Why/Inputs/Output/Example** blocks to:
  - Dashboard
  - Each module entry
  - Each result state (success / empty / error)

### 2) Feature completion layer (ties to [[Feature list]])
For each feature:
- implement
- validate
- document output meaning (inside UI, not docs)
- record test evidence

### 3) Release layer (ties to [[Backlog]])
- Create/maintain “Regression Checklist” note
- RC build pipeline + versioning
- TestFlight readiness checklist

---

## Canvas placement (so it stays visually clean)
In your overview canvas:
- Group: **Product** → card: [[Market Oracle]]
- Under it: card: **Epic 1 — Shopify Valid MVP** (this note)
- Arrows:
  - Epic 1 → [[Feature list]]
  - [[Feature list]] → [[Backlog]]
  - Epic 1 → “Regression Checklist” note

Deep-dive canvas `20 - Market Oracle Product.canvas`:
- Columns: **Inputs → Execution → Output → QA Gate → TestFlight**
- Place this epic at the top as the “spine” card

---

## Non-negotiable quality tone (the “Ombre Leather / Oud Wood” rule)
- dark, minimal UI copy
- no apologies, no filler
- every screen answers: “what is this, why do I care, what do I do next”