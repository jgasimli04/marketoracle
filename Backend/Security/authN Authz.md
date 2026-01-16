
---
type: security
domain: backend
status: active
---
## Purpose
Authentication and authorization model.

## Authentication
- Primary mechanism: bearer token (JWT or provider token)
- Session lifecycle: login → refresh → revoke
- Service-to-service: scoped service tokens

## Authorization
- Role-based baseline:
  - admin
  - merchant_owner
  - merchant_member
  - end_user
- Object-level checks required on:
  - org-scoped resources
  - checkout/order/payment objects

## API enforcement
- REST: middleware guard
- GraphQL: resolver-level guards
- Webhooks: signature verification + allowlist

## Links
- RLS: [[Backend/Security/rls policies]]
- Threat model: [[Backend/Security/threat model]]