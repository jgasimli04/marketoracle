---
type: service
domain: backend
status: active
---
## Responsibility
Owns pricing evaluation, promo logic, and price rules.

## Interfaces
- REST: [[Backend/APIs/rest]]
- GraphQL: [[Backend/APIs/graphQL]]
- Contract governance: [[Backend/APIs/api index]]

## Data
- Model: [[Backend/Data/data model]]
- Tables: [[Backend/Data/tables]]
- Events: [[Backend/Data/events]]

## Dependencies
- DB
- Cache (recommended for hot rules)

## Security
- Org-scoped controls: [[Backend/Security/rls policies]]
- Auth rules: [[Backend/Security/authN Authz]]

## Non-functional requirements
- deterministic pricing evaluation
- idempotent promo redemption
- low latency for checkout path

## Operational links
- Observability: [[Backend/Infra/observability]]
- Playbooks: [[Backend/Runbooks/playbooks]]