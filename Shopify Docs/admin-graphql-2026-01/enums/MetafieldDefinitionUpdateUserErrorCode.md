---
title: MetafieldDefinitionUpdateUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `MetafieldDefinitionUpdateUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionUpdateUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionUpdateUserErrorCode.md
---

# Metafield​Definition​Update​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldDefinitionUpdateUserError`.

## Valid values

* ADMIN\_​ACCESS\_​INPUT\_​NOT\_​ALLOWED

  Admin access can only be specified for app-owned metafield definitions.

* APP\_​CONFIG\_​MANAGED

  Definition is managed by app configuration and cannot be modified through the API.

* BLANK

  The input value is blank.

* CAPABILITY\_​CANNOT\_​BE\_​DISABLED

  The metafield definition capability cannot be disabled.

* CAPABILITY\_​REQUIRED\_​BUT\_​DISABLED

  A capability is required for the definition type but is disabled.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* DUPLICATE\_​OPTION

  A duplicate option.

* INTERNAL\_​ERROR

  An internal error occurred.

* INVALID

  The input value is invalid.

* INVALID\_​CAPABILITY

  The metafield definition capability is invalid.

* INVALID\_​CONSTRAINTS

  The metafield definition constraints are invalid.

* INVALID\_​INPUT

  An invalid input.

* INVALID\_​INPUT\_​COMBINATION

  The input combination is invalid.

* INVALID\_​OPTION

  An invalid option.

* METAFIELD\_​DEFINITION\_​IN\_​USE

  Action cannot proceed. Definition is currently in use.

* METAOBJECT\_​DEFINITION\_​CHANGED

  You cannot change the metaobject definition pointed to by a metaobject reference metafield definition.

* NOT\_​FOUND

  The metafield definition wasn't found.

* OWNER\_​TYPE\_​LIMIT\_​EXCEEDED\_​FOR\_​AUTOMATED\_​COLLECTIONS

  You have reached the maximum allowed definitions for automated collections.

* OWNER\_​TYPE\_​LIMIT\_​EXCEEDED\_​FOR\_​USE\_​AS\_​ADMIN\_​FILTERS

  You have reached the maximum allowed definitions to be used as admin filters.

* PINNED\_​LIMIT\_​REACHED

  The pinned limit has been reached for the owner type.

* PRESENT

  The input value needs to be blank.

* TOO\_​LONG

  The input value is too long.

* TYPE\_​NOT\_​ALLOWED\_​FOR\_​CONDITIONS

  The definition type is not eligible to be used as collection condition.

* UNSUPPORTED\_​PINNING

  The metafield definition does not support pinning.

***

## Fields

* [Metafield​Definition​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUpdateUserError#field-MetafieldDefinitionUpdateUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionUpdate`.

***

## Map

### Fields with this enum

* <-|[Metafield​Definition​Update​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUpdateUserError#field-MetafieldDefinitionUpdateUserError.fields.code)
