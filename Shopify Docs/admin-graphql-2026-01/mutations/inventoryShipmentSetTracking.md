---
title: inventoryShipmentSetTracking - GraphQL Admin
description: Edits the tracking info on an inventory shipment.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventoryShipmentSetTracking.md
---

# inventory​Shipment​Set​Tracking

mutation

Requires `write_inventory_shipments` access scope. Also: The user must have permission to manage inventory.

Edits the tracking info on an inventory shipment.

## Arguments

* id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the inventory shipment whose tracking info is being edited.

* tracking

  [Inventory​Shipment​Tracking​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput)

  required

  The tracking info to edit on the inventory shipment.

***

## Inventory​Shipment​Set​Tracking​Payload returns

* inventory​Shipment

  [Inventory​Shipment](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment)

  The inventory shipment with the edited tracking info.

* user​Errors

  [\[Inventory​Shipment​Set​Tracking​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentSetTrackingUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### inventoryShipmentSetTracking reference

## Mutation Reference

```graphql
mutation inventoryShipmentSetTracking($id: ID!, $tracking: InventoryShipmentTrackingInput!) {
  inventoryShipmentSetTracking(id: $id, tracking: $tracking) {
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
  "tracking": {
    "trackingNumber": "<your-trackingNumber>",
    "company": "<your-company>",
    "trackingUrl": "https://example.myshopify.com",
    "arrivesAt": "2019-09-07T15:50:00Z"
  }
}
```

##### Schema

```graphql
input InventoryShipmentTrackingInput {
  trackingNumber: String
  company: String
  trackingUrl: URL
  arrivesAt: DateTime
}
```
