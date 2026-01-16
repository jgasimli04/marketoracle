---
title: InventoryShipmentReceiveUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryShipmentReceiveUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryShipmentReceiveUserErrorCode.md
---

# Inventory​Shipment​Receive​User​Error​Code

enum

Possible error codes that can be returned by `InventoryShipmentReceiveUserError`.

## Valid values

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* INTERNAL\_​ERROR

  Unexpected internal error happened.

* INVALID\_​QUANTITY

  The quantity is invalid.

* INVALID\_​SHIPMENT\_​STATUS

  Current shipment status does not support this operation.

* INVENTORY\_​STATE\_​NOT\_​ACTIVE

  The item is not stocked at the intended location.

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

* [Inventory​Shipment​Receive​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentReceiveUserError#field-InventoryShipmentReceiveUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryShipmentReceive`.

***

## Map

### Fields with this enum

* <-|[Inventory​Shipment​Receive​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryShipmentReceiveUserError#field-InventoryShipmentReceiveUserError.fields.code)
