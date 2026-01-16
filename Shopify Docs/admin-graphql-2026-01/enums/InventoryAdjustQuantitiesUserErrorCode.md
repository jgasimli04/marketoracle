---
title: InventoryAdjustQuantitiesUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventoryAdjustQuantitiesUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryAdjustQuantitiesUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventoryAdjustQuantitiesUserErrorCode.md
---

# Inventory​Adjust​Quantities​User​Error​Code

enum

Possible error codes that can be returned by `InventoryAdjustQuantitiesUserError`.

## Valid values

* ADJUST\_​QUANTITIES\_​FAILED

  The quantities couldn't be adjusted. Try again.

* CHANGE\_​FROM\_​QUANTITY\_​STALE

  The changeFromQuantity argument no longer matches the persisted quantity.

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

* INVALID\_​QUANTITY\_​TOO\_​HIGH

  The quantity can't be higher than 2,000,000,000.

* INVALID\_​QUANTITY\_​TOO\_​LOW

  The quantity can't be lower than -2,000,000,000.

* INVALID\_​REASON

  The specified reason is invalid.

* INVALID\_​REFERENCE\_​DOCUMENT

  The specified reference document is invalid.

* ITEM\_​NOT\_​STOCKED\_​AT\_​LOCATION

  The inventory item is not stocked at the location.

* MAX\_​ONE\_​LEDGER\_​DOCUMENT

  All changes must have the same ledger document URI or, in the case of adjusting available, no ledger document URI.

* NON\_​MUTABLE\_​INVENTORY\_​ITEM

  The specified inventory item is not allowed to be adjusted via API. Example: if the inventory item is a parent bundle.

* SERVICE\_​UNAVAILABLE

  The service is temporarily unavailable. Try again later.

***

## Fields

* [Inventory​Adjust​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustQuantitiesUserError#field-InventoryAdjustQuantitiesUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventoryAdjustQuantities`.

***

## Map

### Fields with this enum

* <-|[Inventory​Adjust​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryAdjustQuantitiesUserError#field-InventoryAdjustQuantitiesUserError.fields.code)
