---
title: MetafieldDefinitionPinUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `MetafieldDefinitionPinUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinUserErrorCode.md
---

# Metafield​Definition​Pin​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldDefinitionPinUserError`.

## Valid values

* ALREADY\_​PINNED

  The metafield definition is already pinned.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* INTERNAL\_​ERROR

  An internal error occurred.

* NOT\_​FOUND

  The metafield definition was not found.

* PINNED\_​LIMIT\_​REACHED

  The pinned limit has been reached for owner type.

* UNSUPPORTED\_​PINNING

  The metafield definition does not support pinning.

***

## Fields

* [Metafield​Definition​Pin​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError#field-MetafieldDefinitionPinUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionPin`.

***

## Map

### Fields with this enum

* <-|[Metafield​Definition​Pin​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError#field-MetafieldDefinitionPinUserError.fields.code)
