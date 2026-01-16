---
title: InventorySetOnHandQuantitiesInput - GraphQL Admin
description: The input fields required to set inventory on hand quantities.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetOnHandQuantitiesInput.md
---

# Inventory​Set​On​Hand​Quantities​Input

input\_object

The input fields required to set inventory on hand quantities.

## Fields

* reason

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The reason for the quantity changes. The value must be one of the [possible reasons](https://shopify.dev/docs/apps/fulfillment/inventory-management-apps/quantities-states#set-inventory-quantities-on-hand).

* reference​Document​Uri

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A URI that represents why the inventory change happened, identifying the source system and document that caused this adjustment. Enables complete audit trails and brand visibility in Shopify admin inventory history.

  Preferred format - Global ID (GID): gid://\[your-app-name]/\[entity-type]/\[id]

  Examples:

  * gid://warehouse-app/PurchaseOrder/PO-2024-001 (stock received)
  * gid://3pl-system/CycleCount/CC-2024-0125 (cycle count adjustment)
  * gid://pos-app/Transaction/TXN-98765 (in-store sale)
  * gid://erp-connector/SyncJob/SYNC-2024-11-21-001 (ERP sync)
  * gid://shopify/Order/1234567890 (Shopify order reference)

  Benefits: Your app name appears directly in merchant inventory history, reducing support tickets and providing clear audit trails for compliance.

  Alternative formats (also supported): <https://myapp.com/documents/12345>, custom-scheme://identifier

  Requirements: Valid URI with scheme and content. For GID format, all components (app, entity, id) must be present.

* set​Quantities

  [\[Inventory​Set​Quantity​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetQuantityInput)

  required

  The value to which the on hand quantity will be set.

***

## Map

No referencing types
