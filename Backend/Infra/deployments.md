---
type: infra
domain: backend
status: active
---
## Purpose
How backend ships.

## Pipeline (starter)
1. CI: lint/typecheck/tests
2. Build artifact
3. Deploy to staging
4. Smoke tests
5. Promote to production
6. Post-deploy verification (dashboards/alerts)

## Rollback
- Must support rollback within minutes
- DB migrations must be backward compatible for at least one deploy window

## Release rules
- Every deploy emits a version tag
- Version visible in health endpoint

## Links
- Environments: [[Backend/Infra/environments]]
- Observability: [[Backend/Infra/observability]]
- Incidents: [[Backend/Runbooks/incidents]]