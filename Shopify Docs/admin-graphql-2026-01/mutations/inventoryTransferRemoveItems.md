---
title: inventoryTransferRemoveItems - GraphQL Admin
description: >-
  This mutation allows removing the shippable quantities of line items on a
  Transfer.

  It removes all quantities of the item from the transfer that are not
  associated with shipments.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferRemoveItems.md
---

# inventory​Transfer​Remove​Items

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

This mutation allows removing the shippable quantities of line items on a Transfer. It removes all quantities of the item from the transfer that are not associated with shipments.

## Arguments

* input

  [Inventory​Transfer​Remove​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferRemoveItemsInput)

  required

  The input fields for the InventoryTransferRemoveItems mutation.

***

## Inventory​Transfer​Remove​Items​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The transfer with line items removed.

* removed​Quantities

  [\[Inventory​Transfer​Line​Item​Update!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate)

  The line items that have had their shippable quantity removed.

* user​Errors

  [\[Inventory​Transfer​Remove​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferRemoveItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryTransferRemoveItems reference

## Mutation Reference

```graphql
mutation inventoryTransferRemoveItems($input: InventoryTransferRemoveItemsInput!) {
  inventoryTransferRemoveItems(input: $input) {
    inventoryTransfer {
      # InventoryTransfer fields
    }
    removedQuantities {
      # InventoryTransferLineItemUpdate fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "input": {
    "id": "gid://shopify/<objectName>/10079785100",
    "transferLineItemIds": [
      "gid://shopify/<objectName>/10079785100"
    ]
  }
}
```

##### Schema

```graphql
input InventoryTransferRemoveItemsInput {
  id: ID!
  transferLineItemIds: [ID!]
}
```
