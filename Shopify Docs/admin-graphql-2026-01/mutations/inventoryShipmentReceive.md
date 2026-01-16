---
title: inventoryShipmentReceive - GraphQL Admin
description: >-
  Receive an inventory shipment.


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
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentReceive.md
---

# inventory​Shipment​Receive

mutation

Requires `write_inventory_shipments_received_items` access scope. Also: The user must have permission to manage inventory.

Receive an inventory shipment.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* bulk​Receive​Action

  [Inventory​Shipment​Receive​Line​Item​Reason](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveLineItemReason)

  The bulk receive action for the inventory shipment.

* date​Received

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date the inventory shipment was initially received.

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory shipment to receive.

* line​Items

  [\[Inventory​Shipment​Receive​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentReceiveItemInput)

  The list of receive line items for the inventory shipment.

***

## Inventory​Shipment​Receive​Payload returns

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with received items.

* user​Errors

  [\[Inventory​Shipment​Receive​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentReceiveUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryShipmentReceive reference

## Mutation Reference

```graphql
mutation inventoryShipmentReceive($id: ID!, $lineItems: [InventoryShipmentReceiveItemInput!], $dateReceived: DateTime, $bulkReceiveAction: InventoryShipmentReceiveLineItemReason) {
  inventoryShipmentReceive(id: $id, lineItems: $lineItems, dateReceived: $dateReceived, bulkReceiveAction: $bulkReceiveAction) {
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
      "shipmentLineItemId": "gid://shopify/<objectName>/10079785100",
      "quantity": 1,
      "reason": "ACCEPTED"
    }
  ],
  "dateReceived": "2019-09-07T15:50:00Z",
  "bulkReceiveAction": "ACCEPTED"
}
```

##### Schema

```graphql
input InventoryShipmentReceiveItemInput {
  shipmentLineItemId: ID!
  quantity: Int!
  reason: InventoryShipmentReceiveLineItemReason!
}
```
