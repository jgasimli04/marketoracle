---
type: runbook
domain: backend
status: active
---
## Purpose
Step-by-step response for common failure modes.

## Playbooks
### Checkout failures
- Check checkout error rate
- Inspect recent deploys
- Validate payment provider
- Roll back if correlated to deploy
Links: [[Backend/Services/svc checkout]], [[Backend/Infra/deployments]]

### Webhook storms / spoofing
- Validate signatures
- Rate limit / temporarily disable
- Drain queue safely
Links: [[Backend/APIs/webhooks]], [[Backend/Security/threat model]]

### DB performance regression
- Identify slow queries
- Check indexes
- Check RLS predicate costs
Links: [[Backend/Data/tables]], [[Backend/Security/rls policies]]