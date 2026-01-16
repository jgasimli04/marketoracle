---
title: ProductSetUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `ProductSetUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSetUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSetUserErrorCode.md
---

# Product​Set​User​Error​Code

enum

Possible error codes that can be returned by `ProductSetUserError`.

## Valid values

* CANNOT\_​COMBINE\_​LINKED\_​AND\_​NONLINKED\_​OPTION\_​VALUES

  An option cannot have both metafield linked and nonlinked option values.

* CAPABILITY\_​VIOLATION

  The metafield violates a capability restriction.

* DUPLICATE\_​LINKED\_​OPTION

  Cannot link multiple options to the same metafield.

* DUPLICATED\_​METAFIELD\_​VALUE

  Duplicated metafield value for linked option.

* DUPLICATED\_​OPTION\_​NAME

  Duplicated option name.

* DUPLICATED\_​OPTION\_​VALUE

  Duplicated option value.

* DUPLICATED\_​VALUE

  Duplicated value.

* GENERIC\_​ERROR

  Something went wrong, please try again.

* GIFT\_​CARD\_​ATTRIBUTE\_​CANNOT\_​BE\_​CHANGED

  The product gift\_card attribute cannot be changed after creation.

* GIFT\_​CARDS\_​NOT\_​ACTIVATED

  Gift card products can only be created after they have been activated.

* HANDLE\_​NOT\_​UNIQUE

  Handle already in use. Please provide a new handle.

* ID\_​NOT\_​ALLOWED

  The id field is not allowed if identifier is provided.

* INPUT\_​MISMATCH

  The identifier value does not match the value of the corresponding field in the input.

* INVALID\_​INPUT

  Input is not valid.

* INVALID\_​METAFIELD

  Metafield is not valid.

* INVALID\_​METAFIELD\_​VALUE\_​FOR\_​LINKED\_​OPTION

  Invalid metafield value for linked option.

* INVALID\_​PRODUCT

  Product is not valid.

* INVALID\_​VARIANT

  Product variant is not valid.

* INVENTORY\_​QUANTITIES\_​LIMIT\_​EXCEEDED

  Inventory quantity input exceeds the limit of 50000. Consider using separate `inventorySetQuantities` mutations.

* JOB\_​ERROR

  Error processing request in the background job.

* LINKED\_​METAFIELD\_​DEFINITION\_​NOT\_​FOUND

  No valid metafield definition found for linked option.

* LINKED\_​OPTIONS\_​NOT\_​SUPPORTED\_​FOR\_​SHOP

  Linked options are currently not supported for this shop.

* METAFIELD\_​MISMATCH

  The input argument `metafields` (if present) must contain the `customId` value.

* MISSING\_​FIELD\_​REQUIRED

  The input field corresponding to the identifier is required.

* NOT\_​FOUND

  Resource matching the identifier was not found.

* OPTION\_​DOES\_​NOT\_​EXIST

  Option does not exist.

* OPTION\_​VALUE\_​DOES\_​NOT\_​EXIST

  Option value does not exist.

* OPTION\_​VALUES\_​MISSING

  Each option must have at least one option value specified.

* OPTION\_​VALUES\_​OVER\_​LIMIT

  Option values over limit.

* OPTIONS\_​OVER\_​LIMIT

  Options over limit.

* PRODUCT\_​DOES\_​NOT\_​EXIST

  Product does not exist.

* PRODUCT\_​OPTIONS\_​INPUT\_​MISSING

  Must specify product options when updating variants.

* PRODUCT\_​SUSPENDED

  Product is suspended.

* PRODUCT\_​VARIANT\_​DOES\_​NOT\_​EXIST

  Product variant does not exist.

* VARIANTS\_​INPUT\_​MISSING

  Must specify variants when updating options.

* VARIANTS\_​OVER\_​LIMIT

  Number of product variants exceeds shop limit.

***

## Fields

* [Product​Set​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetUserError#field-ProductSetUserError.fields.code)

  OBJECT

  Defines errors for ProductSet mutation.

***

## Map

### Fields with this enum

* <-|[Product​Set​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetUserError#field-ProductSetUserError.fields.code)
