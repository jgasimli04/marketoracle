---
title: InventoryShipmentMarkInTransitUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryShipmentMarkInTransitUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentMarkInTransitUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentMarkInTransitUserErrorCode.md
---

# Inventory​Shipment​Mark​In​Transit​User​Error​Code

enum

Possible error codes that can be returned by `InventoryShipmentMarkInTransitUserError`.

## Valid values

* ACTIVATION\_​FAILED

  Failed to activate inventory at location.

* INVALID\_​QUANTITY

  The quantity is invalid.

* INVALID\_​SHIPMENT\_​STATUS

  Current shipment status does not support this operation.

* INVENTORY\_​STATE\_​NOT\_​ACTIVE

  The item is not stocked at the intended location.

* ITEM\_​NOT\_​FOUND

  The item was not found.

* ITEMS\_​EMPTY

  The list of line items is empty.

* LOCATION\_​NOT\_​ACTIVE

  The location selected is not active.

* SHIPMENT\_​NOT\_​FOUND

  The shipment was not found.

* UNTRACKED\_​ITEM

  The item does not track inventory.

***

## Fields

* [Inventory​Shipment​Mark​In​Transit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentMarkInTransitUserError#field-InventoryShipmentMarkInTransitUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentMarkInTransit`.

***

## Map

### Fields with this enum

* <-|[Inventory​Shipment​Mark​In​Transit​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentMarkInTransitUserError#field-InventoryShipmentMarkInTransitUserError.fields.code)
