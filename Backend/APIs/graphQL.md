---
type: api
domain: backend
status: active
---
## Purpose
GraphQL schema rules and conventions.

## Conventions
- Single endpoint: `/graphql`
- Auth required by default (see [[Backend/Security/authN Authz]])
- Use field-level authorization checks for sensitive nodes
- Use DataLoader or batching to avoid N+1

## Schema evolution
- Additive changes preferred
- Deprecate fields before removal
- Never change meaning of an existing field

## Error handling
- Use standard `extensions.code`
- Never expose internal stack traces

## Mapping
- Queries: catalog reads, pricing previews
- Mutations: checkout + order state transitions
- Subscriptions: optional; otherwise use webhooks/events

## Linked notes
- [[Backend/APIs/api index]]
- [[Backend/Data/data model]]