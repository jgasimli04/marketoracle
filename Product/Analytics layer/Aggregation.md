---
type: method
product: market-oracle
stage: transform
name: Aggregation
owner: market-oracle
status: draft
---

> [!info] Purpose
> **Aggregation** computes **store-level and category-level metrics** from the linked graph, producing the “decision panels” agents and merchants can act on (coverage, price bands, concentration, inventory posture).

## Research anchor
- [[Agentic Commerce]]
  MAIN: [[Research]]

## Execution chain (always true)
- [[Epic 1 - Shopify Valid MVP]] → [[US1]] → [[Feature list]] →[[Backend]] -> [[Acceptance criteria]] → Testing

## Role in the pipeline
[[Normalization]] → [[Enrichment]] → [[Linking]] → **Aggregation** → [[Versioning]]

Aggregation is where the system becomes an “oracle” rather than a parser.

---

# What “Aggregation” means in MarketOracle

## Definition (practical)
Aggregation transforms entity-level facts into **summaries** at useful scopes:

- Store-level: catalog health, price distribution, vendor concentration
- Collection-level: assortment characteristics
- Vendor-level: footprint across catalog
- Product family-level: variant spread, pricing ladder

All aggregations must specify:
- scope (store/collection/vendor)
- window (point-in-time or time range)
- inputs (what entities/edges/signals used)

---

# MVP aggregation set (dead-simple & testable)

## Store metrics
- `product_count`
- `variant_count`
- `vendor_count`
- `collection_count` (optional MVP)
- `avg_image_count_per_product`
- `catalog_completeness_avg`
- `discounted_product_ratio`
- `price_distribution` (min/median/max; optionally buckets)

## Vendor concentration
- Top vendors by product count
- `vendor_concentration_index` (simple: top1 share, top3 share)

## Collection metrics (optional MVP)
- product_count in collection
- average price band

---

# Outputs
- `StoreSnapshotMetrics`
- `VendorSnapshotMetrics`
- `CollectionSnapshotMetrics` (optional MVP)

These outputs should be designed to be **versioned** (see [[Versioning]]).

---

# What NOT to do (MVP)
- Do not build complex forecasting.
- Do not compute metrics that depend on external market data unless explicitly in scope.
- Do not hide calculation definitions; metrics must be auditable.

---

# Acceptance criteria (MVP)
- Aggregations are reproducible given the same linked inputs.
- Metrics include scope + timestamp + definition version.
- Aggregations can be recomputed without data drift (deterministic).

# Testing
- Golden store fixtures → expected metrics
- Edge-case fixtures (empty catalog, single vendor, no images)
- Determinism tests (stable outputs across runs)