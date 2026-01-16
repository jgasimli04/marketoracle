---
title: StandardMetafieldDefinitionEnableUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `StandardMetafieldDefinitionEnableUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StandardMetafieldDefinitionEnableUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/StandardMetafieldDefinitionEnableUserErrorCode.md
---

# Standard​Metafield​Definition​Enable​User​Error​Code

enum

Possible error codes that can be returned by `StandardMetafieldDefinitionEnableUserError`.

## Valid values

* ADMIN\_​ACCESS\_​INPUT\_​NOT\_​ALLOWED

  Admin access can only be specified for app-owned metafield definitions.

* CAPABILITY\_​CANNOT\_​BE\_​DISABLED

  The metafield definition capability cannot be disabled.

* INVALID

  The input value is invalid.

* INVALID\_​CAPABILITY

  The metafield definition capability is invalid.

* INVALID\_​INPUT\_​COMBINATION

  The input combination is invalid.

* LIMIT\_​EXCEEDED

  The maximum number of definitions per owner type has been exceeded.

* OWNER\_​TYPE\_​LIMIT\_​EXCEEDED\_​FOR\_​USE\_​AS\_​ADMIN\_​FILTERS

  You have reached the maximum allowed definitions to be used as admin filters.

* TAKEN

  The input value is already taken.

* TEMPLATE\_​NOT\_​FOUND

  The standard metafield definition template was not found.

* TYPE\_​NOT\_​ALLOWED\_​FOR\_​CONDITIONS

  The definition type is not eligible to be used as collection condition.

* UNSTRUCTURED\_​ALREADY\_​EXISTS

  The namespace and key is already in use for a set of your metafields.

* UNSUPPORTED\_​PINNING

  The metafield definition does not support pinning.

***

## Fields

* [Standard​Metafield​Definition​Enable​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError#field-StandardMetafieldDefinitionEnableUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `StandardMetafieldDefinitionEnable`.

***

## Map

### Fields with this enum

* <-|[Standard​Metafield​Definition​Enable​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError#field-StandardMetafieldDefinitionEnableUserError.fields.code)
