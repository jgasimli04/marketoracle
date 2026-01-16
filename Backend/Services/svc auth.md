---
type: service
domain: backend
status: active
---
## Responsibility
Owns authentication, session lifecycle, and authorization primitives.

## Owns
- users, sessions, org membership, permissions
- token issuance/verification
- service-to-service token policy

## Does not own
- catalog/pricing/checkout business rules

## Interfaces
- REST rules: [[Backend/APIs/rest]]
- GraphQL rules: [[Backend/APIs/graphQL]]
- Contract index: [[Backend/APIs/api index]]

## Data
- Canonical: [[Backend/Data/data model]]
- Tables: [[Backend/Data/tables]]

## Security
- Auth model: [[Backend/Security/authN Authz]]
- RLS: [[Backend/Security/rls policies]]

## Dependencies
- Identity provider (if external)
- DB

## Non-functional requirements
- p95 login < target
- brute force protection
- token revocation strategy

## Operational links
- Observability: [[Backend/Infra/observability]]
- Incidents: [[Backend/Runbooks/incidents]]