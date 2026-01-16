---
title: ProductOptionsDeleteUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ProductOptionsDeleteUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsDeleteUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsDeleteUserErrorCode.md
---

# Product​Options​Delete​User​Error​Code

enum

Possible error codes that can be returned by `ProductOptionsDeleteUserError`.

## Valid values

* CANNOT\_​DELETE\_​OPTION\_​WITH\_​MULTIPLE\_​VALUES

  Can't delete option with multiple values.

* CANNOT\_​DELETE\_​VARIANT\_​WITHOUT\_​PERMISSION

  Cannot perform option deletion because it would result in deleting variants, and you don't have the required permissions.

* CANNOT\_​MAKE\_​CHANGES\_​IF\_​VARIANT\_​IS\_​MISSING\_​REQUIRED\_​SKU

  At least one of the product variants has invalid SKUs.

* CANNOT\_​USE\_​NON\_​DESTRUCTIVE\_​STRATEGY

  Cannot delete options without deleting variants.

* OPTION\_​DOES\_​NOT\_​EXIST

  Option does not exist.

* OPTIONS\_​DO\_​NOT\_​BELONG\_​TO\_​THE\_​SAME\_​PRODUCT

  Options do not belong to the same product.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​SUSPENDED

  Product is suspended.

* UNSUPPORTED\_​COMBINED\_​LISTING\_​PARENT\_​OPERATION

  Operation is not supported for a combined listing parent product.

***

## Fields

* [Product​Options​Delete​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsDeleteUserError#field-ProductOptionsDeleteUserError.fields.code)

  OBJECT

  Error codes for failed `ProductOptionsDelete` mutation.

***

## Map

### Fields with this enum

* <-|[Product​Options​Delete​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsDeleteUserError#field-ProductOptionsDeleteUserError.fields.code)
