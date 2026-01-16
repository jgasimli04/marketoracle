---
title: InventoryShipmentCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryShipmentCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentCreateUserErrorCode.md
---

# Inventory​Shipment​Create​User​Error​Code

enum

Possible error codes that can be returned by `InventoryShipmentCreateUserError`.

## Valid values

* BUNDLED\_​ITEM

  Bundled items cannot be used for this operation.

* DUPLICATE\_​ITEM

  A single item can't be listed twice.

* EMPTY\_​SHIPMENT\_​INPUT

  The shipment input cannot be empty.

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* INVALID\_​ITEM

  One or more items are not valid.

* INVALID\_​QUANTITY

  The quantity is invalid.

* INVALID\_​SHIPMENT\_​INPUT

  The shipment input is invalid.

* INVALID\_​TRANSFER\_​STATUS

  Current transfer status does not support this operation.

* INVALID\_​URL

  The URL is invalid.

* ITEM\_​NOT\_​FOUND

  The item was not found.

* LOCATION\_​NOT\_​ACTIVE

  The location selected is not active.

* TRANSFER\_​NOT\_​FOUND

  The transfer was not found.

* UNTRACKED\_​ITEM

  The item does not track inventory.

***

## Fields

* [Inventory​Shipment​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateUserError#field-InventoryShipmentCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentCreate`.

***

## Map

### Fields with this enum

* <-|[Inventory​Shipment​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentCreateUserError#field-InventoryShipmentCreateUserError.fields.code)
