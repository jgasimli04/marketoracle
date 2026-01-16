---
title: InventoryTransferRemoveItemsInput - GraphQL Admin
description: The input fields to remove inventory items from a transfer.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput.md
---

# Inventory​Transfer​Remove​Items​Input

input\_object

The input fields to remove inventory items from a transfer.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the inventory transfer where the items will be removed.

* transfer​Line​Item​Ids

  [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The IDs of the transfer line items to be removed from the transfer.

***

## Map

No referencing types
