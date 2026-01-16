---
title: inventoryTransferCreate - GraphQL Admin
description: >-
  Creates a draft inventory transfer to move inventory items between
  [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location)
  objects in your store. The transfer tracks which items to move, their
  quantities, and the origin and destination locations.


  Use
  [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip)
  to mark the transfer as ready to ship.


  > Caution:

  > As of version `2026-01`, this mutation supports an optional idempotency key
  using the `@idempotent` directive.

  > As of version `2026-04`, the idempotency key is required and must be
  provided using the `@idempotent` directive.

  > For more information, see the [idempotency
  documentation](https://shopify.dev/docs/api/usage/idempotent-requests).
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferCreate.md
---

# inventory​Transfer​Create

mutation

Requires `write_inventory_transfers` access scope. Also: The user must have permission to manage inventory.

Creates a draft inventory transfer to move inventory items between [`Location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Location) objects in your store. The transfer tracks which items to move, their quantities, and the origin and destination locations.

Use [`inventoryTransferMarkAsReadyToShip`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryTransferMarkAsReadyToShip) to mark the transfer as ready to ship.

***

Caution

As of version `2026-01`, this mutation supports an optional idempotency key using the `@idempotent` directive. As of version `2026-04`, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* input

  [Inventory​Transfer​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryTransferCreateInput)

  required

  The input fields for the inventory transfer.

***

## Inventory​Transfer​Create​Payload returns

* inventory​Transfer

  [Inventory​Transfer](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransfer)

  The created inventory transfer.

* user​Errors

  [\[Inventory​Transfer​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryTransferCreate reference

## Mutation Reference

```graphql
mutation inventoryTransferCreate($input: InventoryTransferCreateInput!) {
  inventoryTransferCreate(input: $input) {
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
input InventoryTransferCreateInput {
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
