---
title: CartTransformCreateUserErrorCode - GraphQL Admin
description: Possible error codes that can be returned by `CartTransformCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CartTransformCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CartTransformCreateUserErrorCode.md
---

# Cart​Transform​Create​User​Error​Code

enum

Possible error codes that can be returned by `CartTransformCreateUserError`.

## Valid values

* FUNCTION\_​ALREADY\_​REGISTERED

  A cart transform function already exists for the provided function\_id.

* FUNCTION\_​DOES\_​NOT\_​IMPLEMENT

  Function does not implement the required interface for this cart\_transform function.

* FUNCTION\_​NOT\_​FOUND

  No Shopify Function found for provided function\_id.

* INPUT\_​INVALID

  Failed to create cart transform due to invalid input.

* INVALID\_​METAFIELDS

  Could not create or update metafields.

* MISSING\_​FUNCTION\_​IDENTIFIER

  Either function\_id or function\_handle must be provided.

* MULTIPLE\_​FUNCTION\_​IDENTIFIERS

  Only one of function\_id or function\_handle can be provided, not both.

***

## Fields

* [Cart​Transform​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformCreateUserError#field-CartTransformCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `CartTransformCreate`.

***

## Map

### Fields with this enum

* <-|[Cart​Transform​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/CartTransformCreateUserError#field-CartTransformCreateUserError.fields.code)
