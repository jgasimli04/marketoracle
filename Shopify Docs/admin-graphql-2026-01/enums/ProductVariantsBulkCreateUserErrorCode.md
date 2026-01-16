---
title: ProductVariantsBulkCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `ProductVariantsBulkCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantsBulkCreateUserErrorCode.md
---

# Product​Variants​Bulk​Create​User​Error​Code

enum

Possible error codes that can be returned by `ProductVariantsBulkCreateUserError`.

## Valid values

* CANNOT\_​SET\_​NAME\_​FOR\_​LINKED\_​OPTION\_​VALUE

  Cannot set name for an option value linked to a metafield.

* GREATER\_​THAN\_​OR\_​EQUAL\_​TO

  Variant price must be greater than or equal to zero.

* INVALID

  Invalid input detected.

* INVALID\_​INPUT

  Input is invalid.

* INVENTORY\_​QUANTITIES\_​LIMIT\_​EXCEEDED

  Inventory quantity input exceeds the limit of 50000. Consider using separate `inventorySetQuantities` mutations.

* MUST\_​BE\_​FOR\_​THIS\_​PRODUCT

  Input must be for this product.

* NEED\_​TO\_​ADD\_​OPTION\_​VALUES

  Variant options are not enough.

* NEGATIVE\_​PRICE\_​VALUE

  Price cannot take a negative value.

* NO\_​KEY\_​ON\_​CREATE

  On create, this key cannot be used.

* NOT\_​DEFINED\_​FOR\_​SHOP

  Input is not defined for this shop.

* OPTION\_​VALUES\_​FOR\_​NUMBER\_​OF\_​UNKNOWN\_​OPTIONS

  Variant options are more than the product options.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​SUSPENDED

  Product is suspended.

* SUBSCRIPTION\_​VIOLATION

  You reached the limit of available SKUs in your current plan.

* TOO\_​MANY\_​INVENTORY\_​LOCATIONS

  Inventory locations cannot exceed the allowed resource limit or 10.

* TRACKED\_​VARIANT\_​LOCATION\_​NOT\_​FOUND

  Quantity could not be set. The location was not found.

* UNSUPPORTED\_​COMBINED\_​LISTING\_​PARENT\_​OPERATION

  Operation is not supported for a combined listing parent product.

* VARIANT\_​ALREADY\_​EXISTS

  Variant already exists.

* VARIANT\_​ALREADY\_​EXISTS\_​CHANGE\_​OPTION\_​VALUE

  Variant options already exist. Please change the variant option(s).

***

## Fields

* [Product​Variants​Bulk​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkCreateUserError#field-ProductVariantsBulkCreateUserError.fields.code)

  OBJECT

  Error codes for failed product variant bulk create mutations.

***

## Map

### Fields with this enum

* <-|[Product​Variants​Bulk​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariantsBulkCreateUserError#field-ProductVariantsBulkCreateUserError.fields.code)
