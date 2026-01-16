---
type: infra
domain: backend
status: active
---
## Purpose
Logging, metrics, tracing, alerting, and dashboards.

## Required instrumentation
- Structured logs with `request_id`
- Metrics: latency, error rate, saturation
- Tracing across service boundaries

## Golden signals (baseline)
- Latency: p50/p95/p99
- Traffic: RPS by endpoint
- Errors: 4xx/5xx breakdown
- Saturation: CPU/mem/queue depth

## Alerts (baseline)
- Checkout error spike
- Payment provider failures
- Elevated 5xx across API
- Queue backlog growth

## Runbook linkage
- Oncall: [[Backend/Runbooks/oncall]]
- Incidents: [[Backend/Runbooks/incidents]]
- Playbooks: [[Backend/Runbooks/playbooks]]