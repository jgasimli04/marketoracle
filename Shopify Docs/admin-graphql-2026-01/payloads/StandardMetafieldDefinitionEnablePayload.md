---
title: StandardMetafieldDefinitionEnablePayload - GraphQL Admin
description: Return type for `standardMetafieldDefinitionEnable` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StandardMetafieldDefinitionEnablePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/StandardMetafieldDefinitionEnablePayload.md
---

# Standard​Metafield​Definition​Enable​Payload

payload

Return type for `standardMetafieldDefinitionEnable` mutation.

## Fields

* created​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was created.

* user​Errors

  [\[Standard​Metafield​Definition​Enable​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [standard​Metafield​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable)

  mutation

  Activates the specified standard metafield definition from its template.

  Refer to the [list of standard metafield definition templates](https://shopify.dev/apps/metafields/definitions/standard-definitions).

  * owner​Type

    [Metafield​Owner​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldOwnerType)

    required

    ### Arguments

    The resource type that the metafield definition is scoped to.

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The ID of the standard metafield definition template to enable.

  * namespace

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The namespace of the standard metafield to enable. Used in combination with `key`.

  * key

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The key of the standard metafield to enable. Used in combination with `namespace`.

  * pin

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:null

    Whether to pin the metafield definition.

  * visible​To​Storefront​Api

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:null

  * use​As​Collection​Condition

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    DeprecatedDefault:null

  * capabilities

    [Metafield​Capability​Create​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldCapabilityCreateInput)

    The capabilities of the metafield definition.

  * access

    [Standard​Metafield​Definition​Access​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StandardMetafieldDefinitionAccessInput)

    The access settings that apply to each of the metafields that belong to the metafield definition.

  ***

***

## Map

### Mutations with this payload

* [standard​Metafield​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/types/standardMetafieldDefinitionEnable)
