---
title: InventoryShipmentLineItemInput - GraphQL Admin
description: The input fields for a line item on an inventory shipment.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput.md
---

# Inventory​Shipment​Line​Item​Input

input\_object

The input fields for a line item on an inventory shipment.

## Fields

* inventory​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The inventory item ID for the shipment line item.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity for the shipment line item.

***

## Input objects using this input

* [Inventory​Shipment​Create​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput#fields-lineItems)

  INPUT OBJECT

  The input fields to add a shipment.

***

## Map

### Input objects using this input

* [Inventory​Shipment​Create​Input.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput#fields-lineItems)
