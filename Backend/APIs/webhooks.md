---
type: api
domain: backend
status: active
---
## Purpose
Inbound/outbound webhook contract rules.

## Inbound
- Verify signature (HMAC / provider signature)
- Always return 2xx fast; enqueue work for async handling
- Idempotency required: dedupe on provider event id

## Outbound
- Sign payloads
- Retry policy: exponential backoff
- Dead-letter after N retries

## Event format (standard)
- `event_id`
- `event_type`
- `event_version`
- `created_at`
- `payload`
- `request_id`

## Linked notes
- [[Backend/Data/events]]
- [[Backend/Runbooks/playbooks]]
- [[Backend/Security/threat model]]