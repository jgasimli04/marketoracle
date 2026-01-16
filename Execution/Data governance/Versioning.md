+[[Freshness]] 
---
type: method
product: market-oracle
stage: transform
name: Versioning
owner: market-oracle
status: draft
---

> [!info] Purpose
> **Versioning** preserves a **time-aware, auditable history** of canonical entities, edges, and metrics so MarketOracle can answer: “What changed?”, “When?”, “Why?”, and “Based on which logic?”

## Research anchor
- [[Agentic Commerce]]
  MAIN: [[Research]]

## Execution chain (always true)
- [[Epic 1 - Shopify Valid MVP]] → [[US1]] → [[Feature list]] → [[Backend]] ->[[Acceptance criteria]] → Testing

## Role in the pipeline
[[Normalization]] → [[Enrichment]] → [[Linking]] → [[Aggregation]] → [[Versioning]]

Versioning is the credibility layer for agentic commerce.

---

# What “Versioning” means in MarketOracle

## Definition (practical)
Versioning ensures:
- Every entity/edge/metric is tied to **a snapshot time**
- Changes are captured as **diffs** or **new versions**
- Logic used to compute outputs is recorded as a **definition version**
- You can reconstruct the system state at time T (within retention)

---

# MVP versioning strategy (simple and Shopify-valid)

## Snapshot model
- `snapshot_id` (e.g., `snap:{store}:{YYYYMMDDHH}`)
- `captured_at`
- `source`: shopify
- `pipeline_version` (semantic version of your transforms)

Store entities and outputs keyed by `(id, snapshot_id)`.

## Change detection
- Compute hash of canonical record payload
- If hash changes between snapshots → new version
- Store `previous_hash`, `previous_snapshot_id`

## Metric definition versioning
- Maintain `metric_def_version`
- Every aggregate record references:
  - metric name
  - definition version
  - inputs included

---

# What NOT to do (MVP)
- Do not attempt full event-sourcing from day 1.
- Do not version without a way to query “current” cleanly.
- Do not allow silent recompute that changes historical metrics without bumping definition version.

---

# Acceptance criteria (MVP)
- Each snapshot can be re-derived (same input → same output) for that pipeline version.
- “Current state” is queryable as latest snapshot.
- Changes can be explained (record hash differs; fields diff captured or computable).

# Testing
- Snapshot progression tests (A → B changes produce new versions)
- Definition bump tests (metric_def_version changes tracked)
- Regression tests for “latest snapshot” selection