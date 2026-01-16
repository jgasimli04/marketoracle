---
title: StandardMetaobjectDefinitionEnablePayload - GraphQL Admin
description: Return type for `standardMetaobjectDefinitionEnable` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StandardMetaobjectDefinitionEnablePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StandardMetaobjectDefinitionEnablePayload.md
---

# Standard​Metaobject​Definition​Enable​Payload

payload

Return type for `standardMetaobjectDefinitionEnable` mutation.

## Fields

* metaobject​Definition

  [Metaobject​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition)

  The metaobject definition that was enabled using the standard template.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [standard​Metaobject​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetaobjectDefinitionEnable)

  mutation

  Enables the specified standard metaobject definition from its template.

  * type

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The type of the metaobject definition to enable.

  ***

***

## Map

### Mutations with this payload

* [standard​Metaobject​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/types/standardMetaobjectDefinitionEnable)
