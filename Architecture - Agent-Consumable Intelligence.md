---
type: architecture
topic: agent-consumable-intelligence
---

# Architecture - Agent-Consumable Intelligence

## Design goal
Expose intelligence as machine-first outputs that agents can consume, explain, and act on.

## Foundations
- Schema.org Product (JSON-LD) as baseline structure
- MCP for tool integration
- A2A for agent-to-agent workflows
- OAuth 2.1 patterns for delegated access

## API patterns to implement (from your doc)
- llms.txt documentation
- HATEOAS links
- meaningful error messages for self-correction
- batch operations
- timestamps/versioning
- structured JSON outputs

## Sync patterns
- event-driven updates (pub/sub)
- webhooks with retry/backoff
- SSE streaming where needed
- incremental sync with cursor pagination

## Rate limiting
- token bucket for bursty agent traffic
- tier by org/model/request type
- token-based limiting for LLM workloads

## Links
- [[Shopify - Catalog API + MCP]]
- [[Competitive Gaps]]