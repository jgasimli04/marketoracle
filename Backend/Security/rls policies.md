---
type: security
domain: backend
status: active
---
## Purpose
Row-level security rules (if using DB-enforced isolation).

## Principles
- Deny by default
- Scope by org/tenant id
- No cross-tenant reads/writes
- Prefer DB policies + app-layer checks for defense-in-depth

## Policy mapping (starter)
- org-owned tables scoped by `org_id`
- user-owned resources scoped by `user_id`
- checkout/order scoped by creator + org permissions

## Operational requirements
- Every new table must define:
  - RLS strategy
  - indexes for policy predicates
  - tests for cross-tenant access attempts

## Links
- Auth model: [[Backend/Security/authN Authz]]
- Tables: [[Backend/Data/tables]]