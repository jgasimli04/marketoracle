---
type: architecture
domain: backend
status: active
---
## Service inventory
- [[Backend/Services/svc auth]]
- [[Backend/Services/svc catalog]]
- [[Backend/Services/svc pricing]]
- [[Backend/Services/svc checkout]]

## Interaction diagram
```mermaid
flowchart LR
  client[Clients] --> api[API surface]
  api --> auth[svc auth]
  api --> catalog[svc catalog]
  api --> pricing[svc pricing]
  api --> checkout[svc checkout]

  checkout --> pay[Payments Provider]
  auth --> idp[Identity Provider]
  catalog --> db[(DB)]
  pricing --> cache[(Cache)]
  checkout --> events[(Event Bus)]