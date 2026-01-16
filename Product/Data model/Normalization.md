---
type: capability
product: market-oracle
layer: pipeline
status: draft
---
---
type: method
product: market-oracle
stage: transform
name: Normalization
owner: market-oracle
status: draft
---

> [!info] Purpose
> **Normalization** converts Shopify-native, flat, UI-oriented records into a **canonical, typed, de-duplicated, relationship-safe** dataset that can be reliably **linked, aggregated, versioned, and served to agents**.

## Research anchor
- [[Agentic Commerce]]
  MAIN: [[Research]]

## Execution chain (always true)
- [[Epic 1 - Shopify Valid MVP]] → [[US1]] → [[Feature list]] →[[Backend]] -> [[Acceptance criteria]] → Testing

## Role in the pipeline
**Static data (Shopify-shaped)** → **Normalized (canonical)** → [[Enrichment]] → [[Linking]] → [[Aggregation]] → [[Versioning]]

Normalization is where Shopify JSON stops being “the truth” and becomes **input**.

---

# What “Normalization” means in MarketOracle

## Definition (practical)
Normalization is the set of rules + transforms that ensures:

1) **Atomic fields** (no mixed units, no list-as-text, no overloaded strings)  
2) **Stable identifiers** per entity (product, variant, vendor, collection, inventory item, policy, review)  
3) **Correct ownership of facts** (vendor facts live in Vendor; product facts live in Product)  
4) **No transitive leakage** (derived labels aren’t stored as canonical facts without provenance)  
5) **Idempotent transforms** (running normalization twice yields identical canonical output)

> Dependent facts live with their determinant.

---

# Inputs → Outputs

## Inputs (MVP)
- Shopify: Products, Variants, Images
- Shopify: Collections (optional MVP)
- Shopify: Inventory/Locations (optional MVP)
- Policy text blobs: shipping/returns (store-level)

## Outputs (Canonical entities)
- `Store`
- `Vendor`
- `Product`
- `Variant`
- `MediaAsset`
- `Collection`
- `InventorySnapshot` (optional MVP)
- `PolicyDocument` (shipping, returns)
- `ReviewArtifact` (raw; enrichment comes later)

---

# Canonical ID rules (MVP)
## Principles
- Canonical IDs must be **stable**, **deterministic**, and **merge-safe**.
- Prefer Shopify IDs where available; otherwise, derive IDs via normalized keys + hashing.

## Recommended IDs
- Store: `store:{shop_domain}`
- Product: `product:{shopify_product_id}`
- Variant: `variant:{shopify_variant_id}`
- MediaAsset: `asset:{shopify_image_id}` or `asset:{hash(url)}`
- Collection: `collection:{shopify_collection_id}`
- Vendor: `vendor:{store}:{normalized_vendor_name}`

---

# Normalization rules (MVP)

## 1NF: Atomic fields
- Split any list-like strings into arrays (tags, collections) with stable ordering.
- Normalize whitespace, casing, and punctuation for join keys.
- Convert units to a single standard (weight, dimensions).

## 2NF: No partial dependency in bridge tables
If using bridge keys like `(product_id, variant_id)`:
- Keep only attributes that truly depend on that composite key.
- Move variant descriptors to `Variant`, not the bridge.

## 3NF: No transitive dependency
Examples:
- Category label derived from tags → store as **derived** with provenance, not canonical.
- Vendor address inside Product payload (if ever) → belongs in Vendor.

---

# Data quality & safety checks (MVP)
- Required fields present: product_id, title, variant_ids
- Variant pricing fields are numeric and currency-tagged
- No duplicate variant_ids per product
- Deterministic slug generation for titles (if used)
- “Unknown” bucket rules are explicit (never silent)

---

# What NOT to do (MVP)
- Do not infer “category” as canonical truth from tags.
- Do not collapse variants into products (agents need variant-level truth).
- Do not overwrite Shopify facts without recording provenance.

---

# Acceptance criteria (MVP)
- Given the same Shopify payload, normalization produces the same canonical records (idempotent).
- Product/Variant/Vendor are split into separate entities with stable IDs.
- No duplicated vendor facts inside Product entities.
- Normalized output supports deterministic linking keys (for [[Linking]]).

# Testing
- Golden payload snapshots (fixed inputs → fixed outputs)
- Property-based tests for idempotency
- Constraint tests (no duplicate IDs, required fields enforced)`