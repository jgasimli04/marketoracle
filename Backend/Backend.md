---
type: controller
domain: backend
status: active
---
---
type: architecture
domain: backend
status: active
---

# system overview

## Goal
Describe the backend system at a high level: boundaries, actors, core flows, and the primary runtime assumptions.

## Actors
- Client apps (web/mobile)
- Merchants/admins
- External providers (payments, auth provider, Shopify, etc.)

## System boundaries
**Backend includes**
- Auth, catalog, pricing, checkout services
- Contract surface: REST/GraphQL/Webhooks
- Data store(s), cache, queue/event bus
- Observability and runbooks

**Backend excludes**
- UI/UX, frontend state management
- marketing site and content

## Core flows
1. Authentication/session: [[Backend/Services/svc auth]]
2. Catalog read/write: [[Backend/Services/svc catalog]]
3. Pricing evaluation: [[Backend/Services/svc pricing]]
4. Checkout lifecycle: [[Backend/Services/svc checkout]]
5. External event ingress/egress: [[Backend/APIs/webhooks]]

## Contract surfaces
- REST: [[Backend/APIs/rest]]
- GraphQL: [[Backend/APIs/graphQL]]
- Webhooks: [[Backend/APIs/webhooks]]
- Contract governance: [[Backend/APIs/api index]]

## Data model
- Canonical: [[Backend/Data/data model]]
- Tables: [[Backend/Data/tables]]
- Events: [[Backend/Data/events]]

## Security & compliance
- AuthN/Authz: [[Backend/Security/authN Authz]]
- RLS rules: [[Backend/Security/rls policies]]
- Threat model: [[Backend/Security/threat model]]

## Infra
- Envs: [[Backend/Infra/environments]]
- Deployments: [[Backend/Infra/deployments]]
- Secrets: [[secrets rules]]
- Observability: [[Backend/Infra/observability]]

[[Product]] , [[Execution]], [[Simulator]]