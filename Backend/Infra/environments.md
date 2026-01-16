---
type: infra
domain: backend
status: active
---
## Purpose
Environment definitions and rules.

## Environments
- local
- staging
- production

## Rules
- Parity: staging mirrors prod as closely as possible
- No shared secrets between envs
- Feature flags over long-lived branches
- Migrations run in controlled pipeline stage

## Required variables
- See [[secrets rules]]

## Deployment links
- [[Backend/Infra/deployments]]