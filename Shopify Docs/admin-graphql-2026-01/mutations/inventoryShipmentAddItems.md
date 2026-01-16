---
title: inventoryShipmentAddItems - GraphQL Admin
description: >-
  Adds items to an inventory shipment.


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
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentAddItems.md
---

# inventory​Shipment​Add​Items

mutation

Requires `write_inventory_shipments` access scope. Also: The user must have permission to manage inventory.

Adds items to an inventory shipment.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory shipment to modify.

* line​Items

  [\[Inventory​Shipment​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput)

  required

  The list of line items to add to the inventory shipment.

***

## Inventory​Shipment​Add​Items​Payload returns

* added​Items

  [\[Inventory​Shipment​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  The list of added line items.

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with the added items.

* user​Errors

  [\[Inventory​Shipment​Add​Items​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentAddItemsUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryShipmentAddItems reference

## Mutation Reference

```graphql
mutation inventoryShipmentAddItems($id: ID!, $lineItems: [InventoryShipmentLineItemInput!]!) {
  inventoryShipmentAddItems(id: $id, lineItems: $lineItems) {
    addedItems {
      # InventoryShipmentLineItem fields
    }
    inventoryShipment {
      # InventoryShipment fields
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
  "id": "gid://shopify/<objectName>/10079785100",
  "lineItems": [
    {
      "inventoryItemId": "gid://shopify/<objectName>/10079785100",
      "quantity": 1
    }
  ]
}
```

##### Schema

```graphql
input InventoryShipmentLineItemInput {
  inventoryItemId: ID!
  quantity: Int!
}
```
