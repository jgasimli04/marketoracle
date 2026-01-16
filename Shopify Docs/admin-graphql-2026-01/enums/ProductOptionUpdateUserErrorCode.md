---
title: ProductOptionUpdateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ProductOptionUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionUpdateUserErrorCode.md
---

# Product​Option​Update​User​Error​Code

enum

Possible error codes that can be returned by `ProductOptionUpdateUserError`.

## Valid values

* CANNOT\_​COMBINE\_​LINKED\_​AND\_​NONLINKED\_​OPTION\_​VALUES

  An option cannot have both metafield linked and nonlinked option values.

* CANNOT\_​CREATE\_​VARIANTS\_​ABOVE\_​LIMIT

  The number of variants will be above the limit after this operation.

* CANNOT\_​DELETE\_​ALL\_​OPTION\_​VALUES\_​IN\_​OPTION

  Deleting all option values of an option is not allowed.

* CANNOT\_​DELETE\_​VARIANT\_​WITHOUT\_​PERMISSION

  Cannot update the option because it would result in deleting variants, and you don't have the required permissions.

* CANNOT\_​LEAVE\_​OPTIONS\_​WITHOUT\_​VARIANTS

  An option cannot be left only with option values that are not linked to any variant.

* CANNOT\_​MAKE\_​CHANGES\_​IF\_​VARIANT\_​IS\_​MISSING\_​REQUIRED\_​SKU

  At least one of the product variants has invalid SKUs.

* DUPLICATE\_​LINKED\_​OPTION

  Cannot link multiple options to the same metafield.

* DUPLICATED\_​OPTION\_​VALUE

  Duplicated option value.

* INVALID\_​METAFIELD\_​VALUE\_​FOR\_​LINKED\_​OPTION

  Invalid metafield value for linked option.

* INVALID\_​NAME

  The name provided is not valid.

* INVALID\_​POSITION

  The option position provided is not valid.

* KEY\_​MISSING\_​IN\_​INPUT

  A key is missing in the input.

* LINKED\_​METAFIELD\_​DEFINITION\_​NOT\_​FOUND

  No valid metafield definition found for linked option.

* LINKED\_​OPTION\_​UPDATE\_​MISSING\_​VALUES

  Updating the linked\_metafield of an option requires a linked\_metafield\_value for each option value.

* LINKED\_​OPTIONS\_​NOT\_​SUPPORTED\_​FOR\_​SHOP

  Linked options are currently not supported for this shop.

* NO\_​KEY\_​ON\_​CREATE

  On create, this key cannot be used.

* OPTION\_​ALREADY\_​EXISTS

  Option already exists.

* OPTION\_​DOES\_​NOT\_​EXIST

  Option does not exist.

* OPTION\_​LINKED\_​METAFIELD\_​ALREADY\_​TAKEN

  An option linked to the provided metafield already exists.

* OPTION\_​NAME\_​TOO\_​LONG

  Option name is too long.

* OPTION\_​VALUE\_​ALREADY\_​EXISTS

  Option value already exists.

* OPTION\_​VALUE\_​CONFLICTING\_​OPERATION

  Performing conflicting actions on an option value.

* OPTION\_​VALUE\_​DOES\_​NOT\_​EXIST

  Option value does not exist.

* OPTION\_​VALUE\_​HAS\_​VARIANTS

  Option value with variants linked cannot be deleted.

* OPTION\_​VALUE\_​NAME\_​TOO\_​LONG

  Option value name is too long.

* OPTION\_​VALUES\_​OVER\_​LIMIT

  Option values count is over the allowed limit.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​SUSPENDED

  Product is suspended.

* TOO\_​MANY\_​VARIANTS\_​CREATED

  The number of option values created with the MANAGE strategy would exceed the variant limit.

* UNSUPPORTED\_​COMBINED\_​LISTING\_​PARENT\_​OPERATION

  Operation is not supported for a combined listing parent product.

***

## Fields

* [Product​Option​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionUpdateUserError#field-ProductOptionUpdateUserError.fields.code)

  OBJECT

  Error codes for failed `ProductOptionUpdate` mutation.

***

## Map

### Fields with this enum

* <-|[Product​Option​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionUpdateUserError#field-ProductOptionUpdateUserError.fields.code)
