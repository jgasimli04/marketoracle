---
title: InventorySetScheduledChangesInput - GraphQL Admin
description: The input fields for setting up scheduled changes of inventory items.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput.md
---

# Inventory​Set​Scheduled​Changes​Input

input\_object

The input fields for setting up scheduled changes of inventory items.

## Fields

* items

  [\[Inventory​Scheduled​Change​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeItemInput)

  required

  The list of all the items on which the scheduled changes need to be applied.

* reason

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The reason for setting up the scheduled changes.

* reference​Document​Uri

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

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

***

## Map

No referencing types
