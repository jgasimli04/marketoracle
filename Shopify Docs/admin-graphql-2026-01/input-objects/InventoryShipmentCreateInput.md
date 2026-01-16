---
title: InventoryShipmentCreateInput - GraphQL Admin
description: The input fields to add a shipment.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentCreateInput.md
---

# Inventory​Shipment​Create​Input

input\_object

The input fields to add a shipment.

## Fields

* date​Created

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date the shipment was created.

* line​Items

  [\[Inventory​Shipment​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentLineItemInput)

  required

  The list of line items for the inventory shipment.

* movement​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the inventory movement (transfer or purchase order) this shipment belongs to.

* tracking​Input

  [Inventory​Shipment​Tracking​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/InventoryShipmentTrackingInput)

  The tracking information for the shipment.

***

## Map

No referencing types
