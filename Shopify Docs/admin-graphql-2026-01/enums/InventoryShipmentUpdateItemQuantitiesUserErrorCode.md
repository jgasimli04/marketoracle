---
title: InventoryShipmentUpdateItemQuantitiesUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryShipmentUpdateItemQuantitiesUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentUpdateItemQuantitiesUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentUpdateItemQuantitiesUserErrorCode.md
---

# Inventory​Shipment​Update​Item​Quantities​User​Error​Code

enum

Possible error codes that can be returned by `InventoryShipmentUpdateItemQuantitiesUserError`.

## Valid values

* INVALID\_​QUANTITY

  The quantity is invalid.

* INVALID\_​SHIPMENT\_​STATUS

  Current shipment status does not support this operation.

* ITEM\_​NOT\_​FOUND

  The item was not found.

* LOCATION\_​NOT\_​ACTIVE

  The location selected is not active.

* LOCATION\_​NOT\_​FOUND

  The location selected can't be found.

* SHIPMENT\_​NOT\_​FOUND

  The shipment was not found.

***

## Fields

* [Inventory​Shipment​Update​Item​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError#field-InventoryShipmentUpdateItemQuantitiesUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentUpdateItemQuantities`.

***

## Map

### Fields with this enum

* <-|[Inventory​Shipment​Update​Item​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentUpdateItemQuantitiesUserError#field-InventoryShipmentUpdateItemQuantitiesUserError.fields.code)
