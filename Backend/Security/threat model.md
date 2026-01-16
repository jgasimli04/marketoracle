---
type: security
domain: backend
status: active
---
## Purpose
Identify and mitigate credible threats.

## Primary assets
- Customer PII
- Merchant operational data
- Payment metadata
- Auth tokens and signing secrets

## Threats (starter)
- Credential stuffing / brute force
- Token theft / replay
- Webhook spoofing
- Broken access control (tenant escape)
- Data exfiltration via misconfigured logs
- Supply chain (dependency compromise)

## Controls
- Auth hardening: [[Backend/Security/authN Authz]]
- RLS + access tests: [[Backend/Security/rls policies]]
- Secret management: [[Backend/Infra/secrets]]
- Observability: [[Backend/Infra/observability]]

## Incident linkage
- [[Backend/Runbooks/incidents]]