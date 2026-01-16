---
title: InventoryShipmentRemoveItemsUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryShipmentRemoveItemsUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentRemoveItemsUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentRemoveItemsUserErrorCode.md
---

# Inventory​Shipment​Remove​Items​User​Error​Code

enum

Possible error codes that can be returned by `InventoryShipmentRemoveItemsUserError`.

## Valid values

* INTERNAL\_​ERROR

  Unexpected internal error happened.

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

* [Inventory​Shipment​Remove​Items​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentRemoveItemsUserError#field-InventoryShipmentRemoveItemsUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentRemoveItems`.

***

## Map

### Fields with this enum

* <-|[Inventory​Shipment​Remove​Items​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentRemoveItemsUserError#field-InventoryShipmentRemoveItemsUserError.fields.code)
