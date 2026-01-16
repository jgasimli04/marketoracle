---
type: method
product: market-oracle
stage: transform
name: Linking
owner: market-oracle
status: draft
---

> [!info] Purpose
> **Linking** creates the **relationship graph** that turns enriched entities into agent-ready knowledge: equivalence, containment, similarity, and provenance-safe joins across Store → Product → Variant → Vendor → Collection.

## Research anchor
- [[Agentic Commerce]]
  MAIN: [[Research]]

## Execution chain (always true)
- [[Epic 1 - Shopify Valid MVP]] → [[US1]] → [[Feature list]] →[[Backend]] -> [[Acceptance criteria]] → Testing

## Role in the pipeline
[[Normalization]] → [[Enrichment]] → **Linking** → [[Aggregation]] → [[Versioning]]

Linking is where MarketOracle stops being “tables” and becomes a **graph**.

---

# What “Linking” means in MarketOracle

## Definition (practical)
Linking assigns **edges** between canonical nodes, using deterministic keys first, then similarity where appropriate.

Types of links:
- **Containment:** store HAS product; product HAS variant
- **Attribution:** product BELONGS_TO vendor; product IN collection
- **Equivalence:** two vendor names refer to same vendor
- **Similarity:** products/variants are comparable (optional MVP)
- **Provenance:** enriched signals DERIVED_FROM canonical fields

---

# Inputs → Outputs

## Inputs
- Canonical entities (normalized)
- Enriched attributes (optional but recommended)

## Outputs
- `GraphEdges` table/collection
- Relationship indexes for fast lookup

Example edge schema:
- `edge_id`
- `from_id`
- `to_id`
- `edge_type`
- `strength` (0–1)
- `method` (deterministic | heuristic | model)
- `evidence` (fields used)
- `created_at`

---

# Deterministic linking (MVP)
## Required edges
- `Store HAS Product`
- `Product HAS Variant`
- `Product BELONGS_TO Vendor`
- `Product HAS MediaAsset`
- `Product IN Collection` (optional MVP)

## Keys
- Shopify IDs for containment edges
- Normalized vendor name for vendor edges (with alias handling)

---

# Alias & equivalence (MVP-lite)
Vendor normalization often yields variants:
- “Nike”, “NIKE”, “Nike Inc.”, “Nike®”

Rules:
- Normalize casing/punctuation
- Maintain `VendorAlias` records:
  - alias → vendor_id
- Store evidence (original string + normalized key)

---

# What NOT to do (MVP)
- Do not create similarity edges without a clear testable method.
- Do not merge entities permanently; create equivalence links first.
- Do not create edges without evidence/provenance.

---

# Acceptance criteria (MVP)
- For every Product and Variant, required containment edges exist.
- Vendor linking is deterministic and stable across re-imports.
- Edge creation is idempotent (no duplicates for same (from,to,type)).

# Testing
- Graph integrity tests (no orphan variants)
- Idempotency tests (repeat linking yields same edge set)
- Vendor alias regression tests (edge stability)