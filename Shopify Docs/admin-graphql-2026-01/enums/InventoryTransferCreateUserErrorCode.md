---
title: InventoryTransferCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryTransferCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryTransferCreateUserErrorCode.md
---

# Inventory​Transfer​Create​User​Error​Code

enum

Possible error codes that can be returned by `InventoryTransferCreateUserError`.

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

* INVENTORY\_​STATE\_​NOT\_​ACTIVE

  The item is not stocked at the intended location.

* ITEM\_​NOT\_​FOUND

  The item was not found.

* LOCATION\_​NOT\_​ACTIVE

  The location selected is not active.

* LOCATION\_​NOT\_​FOUND

  The location selected can't be found.

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

* [Inventory​Transfer​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError#field-InventoryTransferCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryTransferCreate`.

***

## Map

### Fields with this enum

* <-|[Inventory​Transfer​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryTransferCreateUserError#field-InventoryTransferCreateUserError.fields.code)
