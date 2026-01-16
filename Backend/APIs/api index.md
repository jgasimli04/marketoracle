---
type: api
domain: backend
status: active
---
## Purpose
Canonical index for all API surfaces and contract rules.

## Surfaces
- REST: [[Backend/APIs/rest]]
- GraphQL: [[Backend/APIs/graphQL]]
- Webhooks: [[Backend/APIs/webhooks]]

## Contract governance
### Versioning
- REST: `/api/v1/...` and additive evolution
- GraphQL: additive schema changes, deprecate fields before removal
- Webhooks: event version in payload (e.g., `event_version`)

### Idempotency
- Required for checkout and payment mutation endpoints
- Use idempotency keys and store request hashes where needed

### Error schema (single standard)
- `code`, `message`, `request_id`, `details`
- Never leak internal stack traces to clients

### Pagination
- Cursor-based for large collections
- Stable ordering required

### Auth
- All calls require auth except explicitly public endpoints
- See [[Backend/Security/authN Authz]]

## Endpoint index (fill as you implement)
### svc auth
- login
- logout
- refresh
- permissions

### svc catalog
- list products
- get product
- create/update product

### svc pricing
- evaluate pricing
- list promos

### svc checkout
- create checkout
- update payment intent
- finalize order

## Linked data
- [[Backend/Data/tables]]
- [[Backend/Data/events]]