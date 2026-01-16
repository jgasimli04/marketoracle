---
type: protocol
topic: ucp
---
## What it is
A common language for AI agents to discover, transact, and fulfill orders with any merchant.

## Core architecture
- Profile location: `/.well-known/ucp`
- Capability advertising: `UCP-Agent` header (HTTP) or `_meta.ucp` (MCP)
- Transports: REST (primary), MCP, A2A

## REST endpoints (as described)
- `POST /checkout-sessions`
- `POST /checkout-sessions/{id}/complete`
- `GET /checkout-sessions/{id}`

## Auth model
- OAuth 2.0 identity linking
- Mandate-style authorization for autonomous agents (non-repudiation)

## Why it matters
> [!info] Why
> UCP commoditizes checkout plumbing. The winner is whoever owns the **intelligence layer** on top.

## Links
- [[Architecture - Agent-Consumable Intelligence]]
- [[First-Mover Strategy + Timing]]