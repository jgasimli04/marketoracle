---
type: method
product: market-oracle
stage: transform
name: Enrichment
owner: market-oracle
status: draft
---

> [!info] Purpose
> **Enrichment** adds **structured meaning** to normalized Shopify entities by deriving **features, signals, and classifications** with explicit provenance—without mutating the underlying source truth.

## Research anchor
- [[Agentic Commerce]]
  MAIN: [[Research]]

## Execution chain (always true)
- [[Epic 1 - Shopify Valid MVP]] → [[US1]] → [[Feature list]] → [[Backend]] ->[[Acceptance criteria]] → Testing

## Role in the pipeline
[[Normalization]] → **Enrichment** → [[Linking]] → [[Aggregation]] → [[Versioning]]

Enrichment is where raw records become **agent-readable signals**.

---

# What “Enrichment” means in MarketOracle

## Definition (practical)
Enrichment attaches **derived attributes** and **computed signals** to canonical entities:

- Derived labels (category, material, use-case)  
- Parsed structured fields (dimensions from description, GTIN cleanup)  
- Quality scores (listing completeness, image coverage)  
- Commercial signals (price positioning, discount flags)  
- Compliance parsing (ingredients/warnings structured from text)

All enrichment outputs must include:
- **provenance** (how it was derived)
- **confidence** (how reliable)
- **inputs used** (what fields were referenced)

---

# Inputs → Outputs

## Inputs
- Canonical entities from [[Normalization]]
- Optional external sources (MVP should keep minimal)

## Outputs
- `EnrichedProduct`
- `EnrichedVariant`
- `QualitySignals`
- `ComplianceSignals`
- `CommercialSignals`

> Enrichment does not replace canonical values. It *annotates* them.

---

# MVP enrichment set (dead-simple)
## Listing quality
- `has_gtin` (true/false)
- `image_count`
- `has_description`
- `variant_count`
- `title_length_bucket` (short/ok/long)
- `completeness_score` (0–100, rules-based)

## Commercial signals
- `is_discounted` (compare_at_price > price)
- `price_band` (low/mid/high within store or category)
- `variant_price_spread` (min/max)

## Compliance parsing (lightweight)
- Extract common warning keywords (e.g., “choking hazard”, “flammable”)
- Ingredients split by separators if present

---

# Provenance model (required)
Each enriched attribute should carry:
- `source_fields`: list of canonical fields used
- `method`: rules | model | heuristic
- `confidence`: 0–1
- `generated_at`: timestamp

---

# What NOT to do (MVP)
- Do not hard-assert categories as truth.
- Do not “correct” merchant data; only annotate.
- Do not depend on fragile external APIs for core MVP.

---

# Acceptance criteria (MVP)
- Enrichment outputs are reproducible given the same normalized inputs.
- Every enriched attribute includes provenance + confidence.
- Enrichment can be disabled without breaking downstream stages.

# Testing
- Rule-unit tests for each signal
- Snapshot tests for enriched outputs
- Coverage tests for edge cases (empty description, single-variant products)