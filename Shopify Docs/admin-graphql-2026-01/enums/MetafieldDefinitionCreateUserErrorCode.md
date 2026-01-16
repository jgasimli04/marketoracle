---
title: MetafieldDefinitionCreateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `MetafieldDefinitionCreateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionCreateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionCreateUserErrorCode.md
---

# Metafield​Definition​Create​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldDefinitionCreateUserError`.

## Valid values

* ADMIN\_​ACCESS\_​INPUT\_​NOT\_​ALLOWED

  Admin access can only be specified for app-owned metafield definitions.

* BLANK

  The input value is blank.

* CAPABILITY\_​REQUIRED\_​BUT\_​DISABLED

  A capability is required for the definition type but is disabled.

* DUPLICATE\_​OPTION

  A duplicate option.

* INCLUSION

  The input value isn't included in the list.

* INVALID

  The input value is invalid.

* INVALID\_​CAPABILITY

  The metafield definition capability is invalid.

* INVALID\_​CHARACTER

  A field contains an invalid character.

* INVALID\_​CONSTRAINTS

  The metafield definition constraints are invalid.

* INVALID\_​INPUT\_​COMBINATION

  The input combination is invalid.

* INVALID\_​OPTION

  An invalid option.

* LIMIT\_​EXCEEDED

  The maximum limit of definitions per owner type has exceeded.

* OWNER\_​TYPE\_​LIMIT\_​EXCEEDED\_​FOR\_​AUTOMATED\_​COLLECTIONS

  You have reached the maximum allowed definitions for automated collections.

* OWNER\_​TYPE\_​LIMIT\_​EXCEEDED\_​FOR\_​USE\_​AS\_​ADMIN\_​FILTERS

  You have reached the maximum allowed definitions to be used as admin filters.

* PINNED\_​LIMIT\_​REACHED

  The pinned limit has been reached for the owner type.

* PRESENT

  The input value needs to be blank.

* RESERVED\_​NAMESPACE\_​KEY

  This namespace and key combination is reserved for standard definitions.

* RESOURCE\_​TYPE\_​LIMIT\_​EXCEEDED

  The definition limit per owner type has exceeded.

* RESOURCE\_​TYPE\_​LIMIT\_​EXCEEDED\_​BY\_​APP

  The definition limit per owner type for the app has exceeded.

* TAKEN

  The input value is already taken.

* TOO\_​LONG

  The input value is too long.

* TOO\_​SHORT

  The input value is too short.

* TYPE\_​NOT\_​ALLOWED\_​FOR\_​CONDITIONS

  The definition type is not eligible to be used as collection condition.

* UNSTRUCTURED\_​ALREADY\_​EXISTS

  This namespace and key combination is already in use for a set of your metafields.

* UNSUPPORTED\_​PINNING

  The metafield definition does not support pinning.

***

## Fields

* [Metafield​Definition​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionCreateUserError#field-MetafieldDefinitionCreateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionCreate`.

***

## Map

### Fields with this enum

* <-|[Metafield​Definition​Create​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionCreateUserError#field-MetafieldDefinitionCreateUserError.fields.code)
