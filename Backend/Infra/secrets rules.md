---
type: infra
domain: backend
status: active
---
## Purpose
How secrets are stored, rotated, and accessed.

## Rules
- Never commit secrets to git
- Use env-specific secret stores
- Rotate on schedule + after suspected compromise
- Least privilege access

## Categories
- DB credentials
- Auth provider keys
- Payment provider keys
- Webhook signing secrets
- Internal service tokens

## Operational links
- Deployments: [[Backend/Infra/deployments]]
- Threat model: [[Backend/Security/threat model]]