---
title: inventoryShipmentCreateInTransit - GraphQL Admin
description: >-
  Adds an in-transit shipment to an inventory transfer.


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
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentCreateInTransit.md
---

# inventory​Shipment​Create​In​Transit

mutation

Requires `write_inventory_shipments` access scope. Also: The user must have permission to manage inventory.

Adds an in-transit shipment to an inventory transfer.

***

Caution

As of 2026-01, this mutation supports an optional idempotency key using the `@idempotent` directive. As of 2026-04, the idempotency key is required and must be provided using the `@idempotent` directive. For more information, see the [idempotency documentation](https://shopify.dev/docs/api/usage/idempotent-requests).

***

## Arguments

* input

  [Inventory​Shipment​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput)

  required

  The input fields for the inventory shipment.

***

## Inventory​Shipment​Create​In​Transit​Payload returns

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The created inventory shipment.

* user​Errors

  [\[Inventory​Shipment​Create​In​Transit​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateInTransitUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryShipmentCreateInTransit reference

## Mutation Reference

```graphql
mutation inventoryShipmentCreateInTransit($input: InventoryShipmentCreateInput!) {
  inventoryShipmentCreateInTransit(input: $input) {
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
  "input": {
    "movementId": "gid://shopify/<objectName>/10079785100",
    "trackingInput": {
      "trackingNumber": "<your-trackingNumber>",
      "company": "<your-company>",
      "trackingUrl": "https://example.myshopify.com",
      "arrivesAt": "2019-09-07T15:50:00Z"
    },
    "lineItems": [
      {
        "inventoryItemId": "gid://shopify/<objectName>/10079785100",
        "quantity": 1
      }
    ],
    "dateCreated": "2019-09-07T15:50:00Z"
  }
}
```

##### Schema

```graphql
input InventoryShipmentCreateInput {
  movementId: ID!
  trackingInput: InventoryShipmentTrackingInput
  lineItems: [InventoryShipmentLineItemInput!]!
  dateCreated: DateTime
}

input InventoryShipmentTrackingInput {
  trackingNumber: String
  company: String
  trackingUrl: URL
  arrivesAt: DateTime
}

input InventoryShipmentLineItemInput {
  inventoryItemId: ID!
  quantity: Int!
}
```
