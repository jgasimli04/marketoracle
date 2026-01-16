---
title: InventoryTransferLineItemInput - GraphQL Admin
description: The input fields for a line item on an inventory transfer.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferLineItemInput.md
---

# Inventory​Transfer​Line​Item​Input

input\_object

The input fields for a line item on an inventory transfer.

## Fields

* inventory​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The inventory item ID for the transfer line item.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity for the transfer line item.

***

## Input objects using this input

* [Inventory​Transfer​Create​As​Ready​To​Ship​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput#fields-lineItems)

  INPUT OBJECT

  The input fields to create an inventory transfer.

* [Inventory​Transfer​Create​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateInput#fields-lineItems)

  INPUT OBJECT

  The input fields to create an inventory transfer.

* [Inventory​Transfer​Set​Items​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput#fields-lineItems)

  INPUT OBJECT

  The input fields to the InventoryTransferSetItems mutation.

***

## Map

### Input objects using this input

* [Inventory​Transfer​Create​As​Ready​To​Ship​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput#fields-lineItems)
* [Inventory​Transfer​Create​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateInput#fields-lineItems)
* [Inventory​Transfer​Set​Items​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput#fields-lineItems)
