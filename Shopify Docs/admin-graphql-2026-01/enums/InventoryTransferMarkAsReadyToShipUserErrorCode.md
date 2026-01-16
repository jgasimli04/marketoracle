---
title: InventoryTransferMarkAsReadyToShipUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryTransferMarkAsReadyToShipUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferMarkAsReadyToShipUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferMarkAsReadyToShipUserErrorCode.md
---

# Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error​Code

enum

Possible error codes that can be returned by `InventoryTransferMarkAsReadyToShipUserError`.

## Valid values

* INVALID\_​ITEM

  One or more items are not valid.

* INVALID\_​TRANSFER\_​STATUS

  Current transfer status does not support this operation.

* ITEMS\_​EMPTY

  The list of line items is empty.

* LOCATION\_​NOT\_​ACTIVE

  The location selected is not active.

* LOCATION\_​NOT\_​FOUND

  The location selected can't be found.

* LOCATION\_​REQUIRED

  A location is required for this operation.

* TRANSFER\_​NOT\_​FOUND

  The transfer was not found.

***

## Fields

* [Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferMarkAsReadyToShipUserError#field-InventoryTransferMarkAsReadyToShipUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryTransferMarkAsReadyToShip`.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer​Mark​As​Ready​To​Ship​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferMarkAsReadyToShipUserError#field-InventoryTransferMarkAsReadyToShipUserError.fields.code)
