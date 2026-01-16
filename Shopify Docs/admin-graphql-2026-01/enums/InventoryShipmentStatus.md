---
title: InventoryShipmentStatus - GraphQL Admin
description: The status of an inventory shipment.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentStatus.md
---

# Inventory​Shipment​Status

enum

The status of an inventory shipment.

## Valid values

* DRAFT

  The inventory shipment has been created but not yet shipped.

* IN\_​TRANSIT

  The inventory shipment is currently in transit.

* OTHER

  Status not included in the current enumeration set.

* PARTIALLY\_​RECEIVED

  The inventory shipment has been partially received at the destination.

* RECEIVED

  The inventory shipment has been completely received at the destination.

***

## Fields

* [Inventory​Shipment.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.status)

  OBJECT

  Represents an inventory shipment.

***

## Map

### Fields with this enum

* <-|[Inventory​Shipment.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipment#field-InventoryShipment.fields.status)
