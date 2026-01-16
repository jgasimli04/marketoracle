---
title: ProductVariantsBulkReorderUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `ProductVariantsBulkReorderUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkReorderUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkReorderUserErrorCode.md
---

# Product​Variants​Bulk​Reorder​User​Error​Code

enum

Possible error codes that can be returned by `ProductVariantsBulkReorderUserError`.

## Valid values

* DUPLICATED\_​VARIANT\_​ID

  Product variant IDs must be unique.

* GENERIC\_​ERROR

  Something went wrong, please try again.

* INVALID\_​POSITION

  Product variant position cannot be zero or negative number.

* MISSING\_​VARIANT

  Product variant does not exist.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

***

## Fields

* [Product​Variants​Bulk​Reorder​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkReorderUserError#field-ProductVariantsBulkReorderUserError.fields.code)

  OBJECT

  Error codes for failed bulk product variants reorder operation.

***

## Map

### Fields with this enum

* <-|[Product​Variants​Bulk​Reorder​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkReorderUserError#field-ProductVariantsBulkReorderUserError.fields.code)
