---
type: api
domain: backend
status: active
---
## Purpose
REST API rules and conventions.

## Conventions
- Base: `/api/v1`
- Content-Type: `application/json`
- Auth: bearer token (see [[Backend/Security/authN Authz]])
- Correlation: accept `X-Request-Id`, always return `request_id`

## Standard response envelope
- success responses: raw resource or `{ data, meta }`
- error responses: `{ code, message, request_id, details }`

## Idempotency
- Required for:
  - checkout creation
  - payment mutation
  - order finalize
- Header: `Idempotency-Key`

## Rate limits
- define by consumer class (anon/user/merchant/service)

## Endpoint catalog (link to service notes)
- [[Backend/Services/svc auth]]
- [[Backend/Services/svc catalog]]
- [[Backend/Services/svc pricing]]
- [[Backend/Services/svc checkout]]