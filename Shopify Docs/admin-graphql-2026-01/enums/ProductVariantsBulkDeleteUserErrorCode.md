---
title: ProductVariantsBulkDeleteUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `ProductVariantsBulkDeleteUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkDeleteUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkDeleteUserErrorCode.md
---

# Product​Variants​Bulk​Delete​User​Error​Code

enum

Possible error codes that can be returned by `ProductVariantsBulkDeleteUserError`.

## Valid values

* AT\_​LEAST\_​ONE\_​VARIANT\_​DOES\_​NOT\_​BELONG\_​TO\_​THE\_​PRODUCT

  The variant does not exist.

* CANNOT\_​DELETE\_​LAST\_​VARIANT

  Cannot delete default variant.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​SUSPENDED

  Product is suspended.

* UNSUPPORTED\_​COMBINED\_​LISTING\_​PARENT\_​OPERATION

  Operation is not supported for a combined listing parent product.

***

## Fields

* [Product​Variants​Bulk​Delete​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkDeleteUserError#field-ProductVariantsBulkDeleteUserError.fields.code)

  OBJECT

  Error codes for failed bulk variant delete mutations.

***

## Map

### Fields with this enum

* <-|[Product​Variants​Bulk​Delete​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkDeleteUserError#field-ProductVariantsBulkDeleteUserError.fields.code)
