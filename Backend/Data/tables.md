---

## `Backend/Data/tables.md`

```md
---
type: data
domain: backend
status: active
---

## Purpose
Canonical table/index list with ownership and access notes.

## Table index (starter)
### auth-owned
- users
- sessions
- org_memberships
- permissions

### catalog-owned
- products
- product_variants
- inventory

### pricing-owned
- price_rules
- promos
- promo_redemptions

### checkout-owned
- checkouts
- orders
- payments
- order_items

## Access rules
- Enforced via [[Backend/Security/rls policies]]
- Service-to-service access: scoped tokens (see [[Backend/Security/authN Authz]])

## Schema change rules
- Every migration must include rollback strategy
- Every schema change must update:
  - this note
  - affected service note(s)
  - relevant API contract note(s)