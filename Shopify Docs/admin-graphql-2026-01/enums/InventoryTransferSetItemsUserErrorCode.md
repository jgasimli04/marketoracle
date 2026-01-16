---
title: InventoryTransferSetItemsUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryTransferSetItemsUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferSetItemsUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferSetItemsUserErrorCode.md
---

# Inventory​Transfer​Set​Items​User​Error​Code

enum

Possible error codes that can be returned by `InventoryTransferSetItemsUserError`.

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

* LOCATION\_​NOT\_​ACTIVE

  The location selected is not active.

* LOCATION\_​NOT\_​FOUND

  The location selected can't be found.

* TRANSFER\_​NOT\_​FOUND

  The transfer was not found.

* UNTRACKED\_​ITEM

  The item does not track inventory.

***

## Fields

* [Inventory​Transfer​Set​Items​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError#field-InventoryTransferSetItemsUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryTransferSetItems`.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer​Set​Items​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferSetItemsUserError#field-InventoryTransferSetItemsUserError.fields.code)
