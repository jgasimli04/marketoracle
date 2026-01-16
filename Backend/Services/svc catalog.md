---
type: service
domain: backend
status: active
---
## Responsibility
Owns product/catalog objects and inventory metadata.

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
- Optional cache/search index

## Security
- Enforce org-scoping via [[Backend/Security/rls policies]]
- Auth rules: [[Backend/Security/authN Authz]]

## Non-functional requirements
- Consistent reads for checkout-critical fields
- Backwards compatible schema evolution

## Operational links
- Observability: [[Backend/Infra/observability]]
- Playbooks: [[Backend/Runbooks/playbooks]]