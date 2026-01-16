---
title: ProductOptionsCreateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ProductOptionsCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductOptionsCreateUserErrorCode.md
---

# Product​Options​Create​User​Error​Code

enum

Possible error codes that can be returned by `ProductOptionsCreateUserError`.

## Valid values

* CANNOT\_​COMBINE\_​LINKED\_​METAFIELD\_​AND\_​OPTION\_​VALUES

  Cannot combine linked metafield and option values.

* CANNOT\_​MAKE\_​CHANGES\_​IF\_​VARIANT\_​IS\_​MISSING\_​REQUIRED\_​SKU

  At least one of the product variants has invalid SKUs.

* DUPLICATE\_​LINKED\_​OPTION

  Cannot link multiple options to the same metafield.

* DUPLICATED\_​OPTION\_​NAME

  Duplicated option name.

* DUPLICATED\_​OPTION\_​VALUE

  Duplicated option value.

* INVALID\_​METAFIELD\_​VALUE\_​FOR\_​LINKED\_​OPTION

  Invalid metafield value for linked option.

* INVALID\_​NAME

  The name provided is not valid.

* LINKED\_​METAFIELD\_​DEFINITION\_​NOT\_​FOUND

  No valid metafield definition found for linked option.

* LINKED\_​METAFIELD\_​VALUE\_​WITHOUT\_​LINKED\_​OPTION

  Cannot specify 'linkedMetafieldValue' for an option that is not linked to a metafield.

* LINKED\_​OPTIONS\_​NOT\_​SUPPORTED\_​FOR\_​SHOP

  Linked options are currently not supported for this shop.

* MISSING\_​METAFIELD\_​VALUES\_​FOR\_​LINKED\_​OPTION

  Missing metafield values for linked option.

* NEW\_​OPTION\_​WITHOUT\_​VALUE\_​FOR\_​EXISTING\_​VARIANTS

  Cannot create new options without values for all existing variants.

* OPTION\_​ALREADY\_​EXISTS

  Option already exists.

* OPTION\_​LINKED\_​METAFIELD\_​ALREADY\_​TAKEN

  An option linked to the provided metafield already exists.

* OPTION\_​NAME\_​MISSING

  Each option must have a name specified.

* OPTION\_​NAME\_​TOO\_​LONG

  Option name is too long.

* OPTION\_​POSITION\_​MISSING

  If specified, position field must be present in all option inputs.

* OPTION\_​VALUE\_​NAME\_​TOO\_​LONG

  Option value name is too long.

* OPTION\_​VALUES\_​MISSING

  Each option must have at least one option value specified.

* OPTION\_​VALUES\_​OVER\_​LIMIT

  Option values count is over the allowed limit.

* OPTIONS\_​OVER\_​LIMIT

  Options count is over the allowed limit.

* POSITION\_​OUT\_​OF\_​BOUNDS

  Position must be between 1 and the maximum number of options per product.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​SUSPENDED

  Product is suspended.

* TOO\_​MANY\_​VARIANTS\_​CREATED

  The number of option values created with the CREATE strategy would exceed the variant limit.

* UNSUPPORTED\_​COMBINED\_​LISTING\_​PARENT\_​OPERATION

  Operation is not supported for a combined listing parent product.

***

## Fields

* [Product​Options​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsCreateUserError#field-ProductOptionsCreateUserError.fields.code)

  OBJECT

  Error codes for failed `ProductOptionsCreate` mutation.

***

## Map

### Fields with this enum

* <-|[Product​Options​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOptionsCreateUserError#field-ProductOptionsCreateUserError.fields.code)
