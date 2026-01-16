---
title: InventoryShipmentReceiveItemInput - GraphQL Admin
description: The input fields to receive an item on an inventory shipment.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentReceiveItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentReceiveItemInput.md
---

# Inventory​Shipment​Receive​Item​Input

input\_object

The input fields to receive an item on an inventory shipment.

## Fields

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity for the item to be received.

* reason

  [Inventory​Shipment​Receive​Line​Item​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveLineItemReason)

  non-null

  The reason for received item.

* shipment​Line​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The shipment line item ID to be received.

***

## Map

No referencing types
