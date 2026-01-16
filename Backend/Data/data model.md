---
type: data
domain: backend
status: active
---
## Purpose
Canonical business entities and relationships.

## Core entities (starter)
- User
- Merchant/Org
- Product
- Inventory
- PriceRule/Promo
- Checkout
- Order
- Payment

## Ownership by service
- auth: user/session/permissions ([[Backend/Services/svc auth]])
- catalog: product/inventory ([[Backend/Services/svc catalog]])
- pricing: price rules/promos ([[Backend/Services/svc pricing]])
- checkout: checkout/order/payment state ([[Backend/Services/svc checkout]])

## Relationship sketch
```mermaid
erDiagram
  USER ||--o{ ORG : belongs_to
  ORG ||--o{ PRODUCT : owns
  PRODUCT ||--o{ INVENTORY : has
  ORG ||--o{ PRICERULE : defines
  USER ||--o{ CHECKOUT : creates
  CHECKOUT ||--|| ORDER : finalizes_to
  ORDER ||--o{ PAYMENT : has