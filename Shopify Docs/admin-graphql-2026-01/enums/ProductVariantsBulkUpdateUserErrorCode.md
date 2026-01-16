---
title: ProductVariantsBulkUpdateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `ProductVariantsBulkUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkUpdateUserErrorCode.md
---

# Product​Variants​Bulk​Update​User​Error​Code

enum

Possible error codes that can be returned by `ProductVariantsBulkUpdateUserError`.

## Valid values

* BLANK

  The input value is blank.

* CANNOT\_​SET\_​NAME\_​FOR\_​LINKED\_​OPTION\_​VALUE

  Cannot set name for an option value linked to a metafield.

* CANNOT\_​SPECIFY\_​BOTH

  Mutually exclusive input fields provided.

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  The price of the variant must be greater than or equal to zero.

* INVALID\_​INPUT

  Input is invalid.

* INVALID\_​VALUE

  Metafield value is invalid.

* INVENTORY\_​QUANTITIES\_​LIMIT\_​EXCEEDED

  Inventory quantity input exceeds the limit of 50000. Consider using separate `inventorySetQuantities` mutations.

* MUST\_​BE\_​FOR\_​THIS\_​PRODUCT

  Input must be for this product.

* MUST\_​SPECIFY\_​ONE\_​OF\_​PAIR

  Mandatory field input field missing.

* NEED\_​TO\_​ADD\_​OPTION\_​VALUES

  Variant options are not enough.

* NEGATIVE\_​PRICE\_​VALUE

  Price cannot take a negative value.

* NO\_​INVENTORY\_​QUANTITES\_​DURING\_​UPDATE

  Inventory quantities cannot be provided during update.

* NO\_​INVENTORY\_​QUANTITIES\_​ON\_​VARIANTS\_​UPDATE

  Inventory quantities can only be provided during create. To update inventory for existing variants, use inventoryAdjustQuantities.

* NOT\_​DEFINED\_​FOR\_​SHOP

  Input is not defined for this shop.

* OPTION\_​DOES\_​NOT\_​EXIST

  Option does not exist.

* OPTION\_​VALUE\_​DOES\_​NOT\_​EXIST

  Option value does not exist.

* OPTION\_​VALUE\_​NAME\_​TOO\_​LONG

  Option value name is too long.

* OPTION\_​VALUES\_​FOR\_​NUMBER\_​OF\_​UNKNOWN\_​OPTIONS

  Variant options are more than the product options.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​SUSPENDED

  Product is suspended.

* PRODUCT\_​VARIANT\_​DOES\_​NOT\_​EXIST

  Product variant does not exist.

* PRODUCT\_​VARIANT\_​ID\_​MISSING

  Product variant is missing ID attribute.

* SUBSCRIPTION\_​VIOLATION

  You reached the limit of available SKUs in your current plan.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* UNSUPPORTED\_​COMBINED\_​LISTING\_​PARENT\_​OPERATION

  Operation is not supported for a combined listing parent product.

* VARIANT\_​ALREADY\_​EXISTS

  The variant already exists.

***

## Fields

* [Product​Variants​Bulk​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkUpdateUserError#field-ProductVariantsBulkUpdateUserError.fields.code)

  OBJECT

  Error codes for failed variant bulk update mutations.

***

## Map

### Fields with this enum

* <-|[Product​Variants​Bulk​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkUpdateUserError#field-ProductVariantsBulkUpdateUserError.fields.code)
