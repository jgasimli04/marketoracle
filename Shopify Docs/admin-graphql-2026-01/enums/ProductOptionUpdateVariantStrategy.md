---
title: ProductOptionUpdateVariantStrategy - GraphQL Admin
description: >-
  The set of variant strategies available for use in the `productOptionUpdate`
  mutation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateVariantStrategy
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateVariantStrategy.md
---

# Product​Option​Update​Variant​Strategy

enum

Requires `read_products` access scope.

The set of variant strategies available for use in the `productOptionUpdate` mutation.

## Valid values

* LEAVE\_​AS\_​IS

  Variants are not created nor deleted in response to option values to add or delete. In cases where deleting a variant would be necessary to complete the operation, an error will be returned.

* MANAGE

  Variants are created and deleted according to the option values to add and to delete.

  If an option value is added, a new variant will be added for each existing option combination available on the product. For example, if the existing options are `Size` and `Color`, with values `S`/`XL` and `Red`/`Blue`, adding a new option value `Green` for the option `Color` will create variants with the option value combinations `S`/`Green` and `XL`/`Green`.

  If an option value is deleted, all variants referencing that option value will be deleted.

***

## Fields

* [product​Option​Update.variantStrategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate#arguments-variantStrategy)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[product​Option​Update.variantStrategy](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate#arguments-variantStrategy)
