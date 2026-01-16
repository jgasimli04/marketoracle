---
title: InventoryTransferCreateAsReadyToShipUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryTransferCreateAsReadyToShipUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCreateAsReadyToShipUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCreateAsReadyToShipUserErrorCode.md
---

# Inventory​Transfer​Create​As​Ready​To​Ship​User​Error​Code

enum

Possible error codes that can be returned by `InventoryTransferCreateAsReadyToShipUserError`.

## Valid values

* BUNDLED\_​ITEM

  Bundled items cannot be used for this operation.

* DUPLICATE\_​ITEM

  A single item can't be listed twice.

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* INVALID\_​QUANTITY

  The quantity is invalid.

* INVALID\_​TRANSFER\_​STATUS

  Current transfer status does not support this operation.

* INVENTORY\_​STATE\_​NOT\_​ACTIVE

  The item is not stocked at the intended location.

* ITEM\_​NOT\_​FOUND

  The item was not found.

* ITEMS\_​EMPTY

  The list of line items is empty.

* LOCATION\_​NOT\_​ACTIVE

  The location selected is not active.

* LOCATION\_​NOT\_​FOUND

  The location selected can't be found.

* LOCATION\_​REQUIRED

  A location is required for this operation.

* TAG\_​EXCEEDS\_​MAX\_​LENGTH

  The tag exceeds the maximum length.

* TRANSFER\_​NOT\_​FOUND

  The transfer was not found.

* TRANSFER\_​ORIGIN\_​CANNOT\_​BE\_​THE\_​SAME\_​AS\_​DESTINATION

  The origin location cannot be the same as the destination location.

* UNTRACKED\_​ITEM

  The item does not track inventory.

***

## Fields

* [Inventory​Transfer​Create​As​Ready​To​Ship​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError#field-InventoryTransferCreateAsReadyToShipUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryTransferCreateAsReadyToShip`.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer​Create​As​Ready​To​Ship​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateAsReadyToShipUserError#field-InventoryTransferCreateAsReadyToShipUserError.fields.code)
