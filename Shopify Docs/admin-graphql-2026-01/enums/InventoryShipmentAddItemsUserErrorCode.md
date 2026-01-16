---
title: InventoryShipmentAddItemsUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryShipmentAddItemsUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentAddItemsUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentAddItemsUserErrorCode.md
---

# Inventory​Shipment​Add​Items​User​Error​Code

enum

Possible error codes that can be returned by `InventoryShipmentAddItemsUserError`.

## Valid values

* DUPLICATE\_​ITEM

  A single item can't be listed twice.

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

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

* UNTRACKED\_​ITEM

  The item does not track inventory.

***

## Fields

* [Inventory​Shipment​Add​Items​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentAddItemsUserError#field-InventoryShipmentAddItemsUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentAddItems`.

***

## Map

### Fields with this enum

* <-|[Inventory​Shipment​Add​Items​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentAddItemsUserError#field-InventoryShipmentAddItemsUserError.fields.code)
