---
title: InventoryScheduledChangeItemInput - GraphQL Admin
description: >-
  The input fields for the inventory item associated with the scheduled changes
  that need to be applied.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeItemInput.md
---

# Inventory​Scheduled​Change​Item​Input

input\_object

The input fields for the inventory item associated with the scheduled changes that need to be applied.

## Fields

* inventory​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the inventory item.

* ledger​Document​Uri

  [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  non-null

  A non-Shopify URI that identifies what specific inventory transaction or ledger entry was changed. Represents the exact inventory movement being referenced, distinct from the business reason for the change.

  Preferred format - Global ID (GID): gid://\[your-app-name]/\[transaction-type]/\[id]

  Examples:

  * gid://warehouse-app/InventoryTransaction/TXN-2024-001 (specific transaction)
  * gid://3pl-system/StockMovement/SM-2024-0125 (stock movement record)
  * gid://pos-app/InventoryUpdate/UPD-98765 (POS inventory update)
  * gid://erp-connector/LedgerEntry/LE-2024-11-21-001 (ledger entry)

  Requirements: Valid non-Shopify URI with scheme and content. Cannot use gid://shopify/\* format.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the location.

* scheduled​Changes

  [\[Inventory​Scheduled​Change​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryScheduledChangeInput)

  required

  An array of all the scheduled changes for the item.

***

## Input objects using this input

* [Inventory​Set​Scheduled​Changes​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput#fields-items)

  INPUT OBJECT

  The input fields for setting up scheduled changes of inventory items.

***

## Map

### Input objects using this input

* [Inventory​Set​Scheduled​Changes​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventorySetScheduledChangesInput#fields-items)
