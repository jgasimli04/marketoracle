---
title: inventoryShipmentUpdateItemQuantities - GraphQL Admin
description: Updates items on an inventory shipment.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentUpdateItemQuantities.md
---

# inventory​Shipment​Update​Item​Quantities

mutation

Requires `write_inventory_shipments` access scope. Also: The user must have permission to manage inventory.

Updates items on an inventory shipment.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory shipment to update item quantities.

* items

  [\[Inventory​Shipment​Update​Item​Quantities​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentUpdateItemQuantitiesInput)

  Default:\[]

  The list of line items to be updated to the shipment.

***

## Inventory​Shipment​Update​Item​Quantities​Payload returns

* shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with updated item quantities.

* updated​Line​Items

  [\[Inventory​Shipment​Line​Item!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentLineItem)

  The updated item quantities.

* user​Errors

  [\[Inventory​Shipment​Update​Item​Quantities​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryShipmentUpdateItemQuantities reference

## Mutation Reference

```graphql
mutation inventoryShipmentUpdateItemQuantities($id: ID!, $items: [InventoryShipmentUpdateItemQuantitiesInput!]) {
  inventoryShipmentUpdateItemQuantities(id: $id, items: $items) {
    shipment {
      # InventoryShipment fields
    }
    updatedLineItems {
      # InventoryShipmentLineItem fields
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
  "items": [
    {
      "shipmentLineItemId": "gid://shopify/<objectName>/10079785100",
      "quantity": 1
    }
  ]
}
```

##### Schema

```graphql
input InventoryShipmentUpdateItemQuantitiesInput {
  shipmentLineItemId: ID!
  quantity: Int!
}
```
