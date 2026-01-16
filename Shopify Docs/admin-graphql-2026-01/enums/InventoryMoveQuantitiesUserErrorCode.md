---
title: InventoryMoveQuantitiesUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryMoveQuantitiesUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryMoveQuantitiesUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryMoveQuantitiesUserErrorCode.md
---

# Inventory​Move​Quantities​User​Error​Code

enum

Possible error codes that can be returned by `InventoryMoveQuantitiesUserError`.

## Valid values

* CHANGE\_​FROM\_​QUANTITY\_​STALE

  The changeFromQuantity argument no longer matches the persisted quantity.

* DIFFERENT\_​LOCATIONS

  The quantities can't be moved between different locations.

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* INTERNAL\_​LEDGER\_​DOCUMENT

  Internal (gid://shopify/) ledger documents are not allowed to be adjusted via API.

* INVALID\_​AVAILABLE\_​DOCUMENT

  A ledger document URI is not allowed when adjusting available.

* INVALID\_​INVENTORY\_​ITEM

  The specified inventory item could not be found.

* INVALID\_​LEDGER\_​DOCUMENT

  The specified ledger document is invalid.

* INVALID\_​LOCATION

  The specified location could not be found.

* INVALID\_​QUANTITY\_​DOCUMENT

  A ledger document URI is required except when adjusting available.

* INVALID\_​QUANTITY\_​NAME

  The specified quantity name is invalid.

* INVALID\_​QUANTITY\_​NEGATIVE

  The quantity can't be negative.

* INVALID\_​QUANTITY\_​TOO\_​HIGH

  The quantity can't be higher than 2,000,000,000.

* INVALID\_​REASON

  The specified reason is invalid.

* INVALID\_​REFERENCE\_​DOCUMENT

  The specified reference document is invalid.

* ITEM\_​NOT\_​STOCKED\_​AT\_​LOCATION

  The inventory item is not stocked at the location.

* MAXIMUM\_​LEDGER\_​DOCUMENT\_​URIS

  Only a maximum of 2 ledger document URIs across all changes is allowed.

* MOVE\_​QUANTITIES\_​FAILED

  The quantities couldn't be moved. Try again.

* NON\_​MUTABLE\_​INVENTORY\_​ITEM

  The specified inventory item is not allowed to be adjusted via API. Example: if the inventory item is a parent bundle.

* SAME\_​QUANTITY\_​NAME

  The quantity names for each change can't be the same.

* SERVICE\_​UNAVAILABLE

  The service is temporarily unavailable. Try again later.

***

## Fields

* [Inventory​Move​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryMoveQuantitiesUserError#field-InventoryMoveQuantitiesUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryMoveQuantities`.

***

## Map

### Fields with this enum

* <-|[Inventory​Move​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryMoveQuantitiesUserError#field-InventoryMoveQuantitiesUserError.fields.code)
