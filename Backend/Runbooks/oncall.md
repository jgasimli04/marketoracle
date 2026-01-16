---
type: runbook
domain: backend
status: active
---
## Purpose
Oncall expectations and escalation.

## What oncall owns
- Production reliability
- Incident triage and mitigation
- Post-incident writeups

## First checks
- Dashboard health (latency/errors/traffic)
- Recent deploys
- Payment provider status
- Queue backlog

## Escalation
- If payments impacted → escalate immediately
- If tenant isolation risk → treat as security incident

## Links
- Observability: [[Backend/Infra/observability]]
- Incidents: [[Backend/Runbooks/incidents]]
- Playbooks: [[Backend/Runbooks/playbooks]]