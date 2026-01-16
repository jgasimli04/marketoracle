---
type: data
domain: backend
status: active
---
## Purpose
Event catalog and rules for async processing.

## Rules
- Events are immutable
- Consumers must be idempotent
- Use dedupe keys (`event_id`)
- Prefer outbox pattern when emitting from DB transactions

## Event catalog (starter)
- `catalog.product.created`
- `catalog.product.updated`
- `pricing.promo.created`
- `checkout.created`
- `checkout.payment.succeeded`
- `order.finalized`

## Producers / consumers
- Producers: service that owns the entity
- Consumers: other services, analytics, notification jobs

## Operational links
- Webhooks: [[Backend/APIs/webhooks]]
- Playbooks: [[Backend/Runbooks/playbooks]]
- Observability: [[Backend/Infra/observability]]