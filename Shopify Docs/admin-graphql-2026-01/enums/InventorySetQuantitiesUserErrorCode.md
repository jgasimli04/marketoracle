---
title: InventorySetQuantitiesUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventorySetQuantitiesUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetQuantitiesUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetQuantitiesUserErrorCode.md
---

# Inventory​Set​Quantities​User​Error​Code

enum

Possible error codes that can be returned by `InventorySetQuantitiesUserError`.

## Valid values

* CHANGE\_​FROM\_​QUANTITY\_​STALE

  The changeFromQuantity value does not match persisted value.

* COMPARE\_​QUANTITY\_​REQUIRED

  The compareQuantity argument must be given to each quantity or ignored using ignoreCompareQuantity.

* COMPARE\_​QUANTITY\_​STALE

  The compareQuantity value does not match persisted value.

* IDEMPOTENCY\_​CONCURRENT\_​REQUEST

  This request is currently inprogress, please try again.

* IDEMPOTENCY\_​KEY\_​PARAMETER\_​MISMATCH

  The same idempotency key cannot be used with different operation parameters.

* INVALID\_​INVENTORY\_​ITEM

  The specified inventory item could not be found.

* INVALID\_​LOCATION

  The specified location could not be found.

* INVALID\_​NAME

  The quantity name must be either 'available' or 'on\_hand'.

* INVALID\_​QUANTITY\_​NEGATIVE

  The quantity can't be negative.

* INVALID\_​QUANTITY\_​TOO\_​HIGH

  The total quantity can't be higher than 1,000,000,000.

* INVALID\_​QUANTITY\_​TOO\_​LOW

  The total quantity can't be lower than -1,000,000,000.

* INVALID\_​REASON

  The specified reason is invalid.

* INVALID\_​REFERENCE\_​DOCUMENT

  The specified reference document is invalid.

* ITEM\_​NOT\_​STOCKED\_​AT\_​LOCATION

  The specified inventory item is not stocked at the location.

* NO\_​DUPLICATE\_​INVENTORY\_​ITEM\_​ID\_​GROUP\_​ID\_​PAIR

  The combination of inventoryItemId and locationId must be unique.

* NON\_​MUTABLE\_​INVENTORY\_​ITEM

  The specified inventory item is not allowed to be adjusted via API. Example: if the inventory item is a parent bundle.

***

## Fields

* [Inventory​Set​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetQuantitiesUserError#field-InventorySetQuantitiesUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventorySetQuantities`.

***

## Map

### Fields with this enum

* <-|[Inventory​Set​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetQuantitiesUserError#field-InventorySetQuantitiesUserError.fields.code)
