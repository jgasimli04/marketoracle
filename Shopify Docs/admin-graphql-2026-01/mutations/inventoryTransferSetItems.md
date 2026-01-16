---
title: inventoryTransferSetItems - GraphQL Admin
description: >-
  This mutation allows for the setting of line items on a Transfer. Will replace
  the items already set, if any.


  > Caution:

  > As of 2026-01, this mutation supports an optional idempotency key using the
  `@idempotent` directive.

  > As of 2026-04, the idempotency key is required and must be provided using
  the `@idempotent` directive.

  > For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferSetItems.md
---

# inventory​Transfer​Set​Items

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

This mutation allows for the setting of line items on a Transfer. Will replace the items already set, if any.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* input

  [Inventory​Transfer​Set​Items​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferSetItemsInput)

  required

  The input fields for the InventoryTransferSetItems mutation.

***

## Inventory​Transfer​Set​Items​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The Transfer with its line items updated.

* updated​Line​Items

  [\[Inventory​Transfer​Line​Item​Update!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferLineItemUpdate)

  The updated line items.

* user​Errors

  [\[Inventory​Transfer​Set​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryTransferSetItems reference

## Mutation Reference

```graphql
mutation inventoryTransferSetItems($input: InventoryTransferSetItemsInput!) {
  inventoryTransferSetItems(input: $input) {
    inventoryTransfer {
      # InventoryTransfer fields
    }
    updatedLineItems {
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
    "lineItems": [
      {
        "inventoryItemId": "gid://shopify/<objectName>/10079785100",
        "quantity": 1
      }
    ]
  }
}
```

##### Schema

```graphql
input InventoryTransferSetItemsInput {
  id: ID!
  lineItems: [InventoryTransferLineItemInput!]!
}

input InventoryTransferLineItemInput {
  inventoryItemId: ID!
  quantity: Int!
}
```
