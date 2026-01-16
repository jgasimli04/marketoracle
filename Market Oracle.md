

> [!info] Purpose
> MarketOracle is the intelligence layer for Shopify merchants as commerce shifts toward agentic surfaces. The MVP must be Shopify-valid, testable, and dead-simple to understand.

## Research anchor
- [[Agentic Commerce]]
  MAIN:[[Research]]
## Execution chain (always true)
- [[Epic 1 - Shopify Valid MVP]] → [[US1]] → [[Feature list]] → [[Acceptance criteria]] → Testing

## Current focus
- [[Backlog refinement for Market Oracle]]
- [[2026-01-12]]
- [[Backend]]

## Dynamic wiki (Dataview)
GOAL: As a minimum, Market Oracle has to be the engine that turns today's age direct-to-consumer (DTC) interfaces to agent-to-consumer (A2C) interactions. " The "Market Oracle" is conceived as the critical intelligence layer designed to facilitate this shift, serving as the central nervous system that translates static, siloed product data into dynamic, agent-ready knowledge graphs."([[Research]])
		Static data                                         Dynamic
		Siloed product data              --->     Agent ready
						**Static data**
- **Product record fields:** title, description, SKU, barcode/GTIN, vendor, tags, collections
    
- **Variants:** size/color, option names, variant SKUs, pricing fields, compare-at price
    
- **Media & assets:** image URLs, alt text, videos
    
- **Inventory & logistics fields (as stored):** stock count, warehouse location, weight, dimensions
    
- **Merchant/store metadata:** store name, niche label, shipping policy text, returns policy text
    
- **Source-of-truth IDs:** Shopify product IDs, vendor IDs, category IDs
    
- **Compliance text blobs:** ingredients, safety notes, warnings (as plain text)
    
- **Reviews as raw artifacts:** star ratings, review text, timestamps (uninterpreted) 
			
	It's flat and local. Useful to humans as in UI, but not directly actionable for agents.
Market Oracle converts records into knowledge via 
[[Normalization]]
[[Enrichment]]
[[Linking]]
[[Aggregation]]
[[Versioning]]


### Epics
```dataview
list from ""
where type = "epic" and product = "market-oracle"
sort file.name asc