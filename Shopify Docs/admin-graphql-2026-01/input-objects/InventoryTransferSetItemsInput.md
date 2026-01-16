---
title: InventoryTransferSetItemsInput - GraphQL Admin
description: The input fields to the InventoryTransferSetItems mutation.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput.md
---

# Inventory​Transfer​Set​Items​Input

input\_object

The input fields to the InventoryTransferSetItems mutation.

## Fields

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the inventory transfer where the items will be set.

* line​Items

  [\[Inventory​Transfer​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferLineItemInput)

  required

  The line items to be set on the Transfer.

***

## Map

No referencing types
