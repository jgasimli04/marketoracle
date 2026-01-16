---
title: inventoryTransferCreateAsReadyToShip - GraphQL Admin
description: >-
  Creates an inventory transfer in ready to ship.


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
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreateAsReadyToShip.md
---

# inventory​Transfer​Create​As​Ready​To​Ship

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

Creates an inventory transfer in ready to ship.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* input

  [Inventory​Transfer​Create​As​Ready​To​Ship​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateAsReadyToShipInput)

  required

  The input fields for the inventory transfer.

***

## Inventory​Transfer​Create​As​Ready​To​Ship​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The created inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Create​As​Ready​To​Ship​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryTransferCreateAsReadyToShip reference

## Mutation Reference

```graphql
mutation inventoryTransferCreateAsReadyToShip($input: InventoryTransferCreateAsReadyToShipInput!) {
  inventoryTransferCreateAsReadyToShip(input: $input) {
    inventoryTransfer {
      # InventoryTransfer fields
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
    "originLocationId": "gid://shopify/<objectName>/10079785100",
    "destinationLocationId": "gid://shopify/<objectName>/10079785100",
    "lineItems": [
      {
        "inventoryItemId": "gid://shopify/<objectName>/10079785100",
        "quantity": 1
      }
    ],
    "dateCreated": "2019-09-07T15:50:00Z",
    "note": "<your-note>",
    "tags": [
      "<your-tags>"
    ],
    "referenceName": "<your-referenceName>"
  }
}
```

##### Schema

```graphql
input InventoryTransferCreateAsReadyToShipInput {
  originLocationId: ID
  destinationLocationId: ID
  lineItems: [InventoryTransferLineItemInput!]!
  dateCreated: DateTime
  note: String
  tags: [String!]
  referenceName: String
}

input InventoryTransferLineItemInput {
  inventoryItemId: ID!
  quantity: Int!
}
```
