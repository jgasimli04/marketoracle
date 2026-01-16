---
title: InventorySetOnHandQuantitiesUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `InventorySetOnHandQuantitiesUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetOnHandQuantitiesUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/InventorySetOnHandQuantitiesUserErrorCode.md
---

# Inventory​Set​On​Hand​Quantities​User​Error​Code

enum

Possible error codes that can be returned by `InventorySetOnHandQuantitiesUserError`.

## Valid values

* CHANGE\_​FROM\_​QUANTITY\_​STALE

  The changeFromQuantity argument no longer matches the persisted quantity.

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

* INVALID\_​QUANTITY\_​NEGATIVE

  The quantity can't be negative.

* INVALID\_​QUANTITY\_​TOO\_​HIGH

  The total quantity can't be higher than 1,000,000,000.

* INVALID\_​REASON

  The specified reason is invalid.

* INVALID\_​REFERENCE\_​DOCUMENT

  The specified reference document is invalid.

* ITEM\_​NOT\_​STOCKED\_​AT\_​LOCATION

  The inventory item is not stocked at the location.

* NON\_​MUTABLE\_​INVENTORY\_​ITEM

  The specified inventory item is not allowed to be adjusted via API. Example: if the inventory item is a parent bundle.

* SERVICE\_​UNAVAILABLE

  The service is temporarily unavailable. Try again later.

* SET\_​ON\_​HAND\_​QUANTITIES\_​FAILED

  The on-hand quantities couldn't be set. Try again.

***

## Fields

* [Inventory​Set​On​Hand​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetOnHandQuantitiesUserError#field-InventorySetOnHandQuantitiesUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `InventorySetOnHandQuantities`.

***

## Map

### Fields with this enum

* <-|[Inventory​Set​On​Hand​Quantities​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventorySetOnHandQuantitiesUserError#field-InventorySetOnHandQuantitiesUserError.fields.code)
