---
type: platform
platform: shopify
---
# Shopify - Catalog API + MCP

## What it is
Shopify’s agentic infrastructure: Catalog API + MCP servers exposing agent access to product discovery and checkout.

## Catalog API (Early Access) - what you noted
- search endpoint (clustered by UPID)
- lookup endpoint (variants)
- returns checkout URLs

## MCP server map (as described)
- Catalog MCP: `https://{catalog-id}.catalog.shopify.com/mcp` (JWT)
- Storefront MCP: per-store
- Checkout MCP: `https://{shop}.myshopify.com/api/ucp/mcp`
- Dev MCP: `npx @shopify/dev-mcp`

## Why it matters
> [!important] Why
> Shopify becomes the fastest “default enrollment” rail into multiple AI checkout surfaces. Intelligence becomes your differentiator.

## MarketOracle MVP implications
- Shopify-first ingestion: products, orders, inventory, customers
- “Explain once” UX (ties to [[US1]])
- Evidence cards and provenance (ties to trust gap)

## Links
- [[Epic 1 - Shopify Valid MVP]]
- [[US1]]
- [[Architecture - Agent-Consumable Intelligence]]