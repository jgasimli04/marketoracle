---
title: MetafieldDefinitionUnpinUserErrorCode - GraphQL Admin
description: >-
  Possible error codes that can be returned by
  `MetafieldDefinitionUnpinUserError`.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionUnpinUserErrorCode
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionUnpinUserErrorCode.md
---

# Metafield​Definition​Unpin​User​Error​Code

enum

Possible error codes that can be returned by `MetafieldDefinitionUnpinUserError`.

## Valid values

* APP\_​CONFIG\_​MANAGED

  Definition is managed by app configuration and cannot be modified through the API.

* DISALLOWED\_​OWNER\_​TYPE

  Owner type can't be used in this mutation.

* INTERNAL\_​ERROR

  An internal error occurred.

* NOT\_​FOUND

  The metafield definition was not found.

* NOT\_​PINNED

  The metafield definition isn't pinned.

***

## Fields

* [Metafield​Definition​Unpin​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUnpinUserError#field-MetafieldDefinitionUnpinUserError.fields.code)

  OBJECT

  An error that occurs during the execution of `MetafieldDefinitionUnpin`.

***

## Map

### Fields with this enum

* <-|[Metafield​Definition​Unpin​User​Error.code](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUnpinUserError#field-MetafieldDefinitionUnpinUserError.fields.code)
