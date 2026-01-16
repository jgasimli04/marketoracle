---
title: StandardMetafieldDefinitionEnableUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `StandardMetafieldDefinitionEnable`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/StandardMetafieldDefinitionEnableUserError.md
---

# Standard​Metafield​Definition​Enable​User​Error

object

An error that occurs during the execution of `StandardMetafieldDefinitionEnable`.

## Fields

* code

  [Standard​Metafield​Definition​Enable​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/StandardMetafieldDefinitionEnableUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

## <\~> StandardMetafieldDefinitionEnableUserError Mutations

### Mutated by

* <\~>[standard​Metafield​Definition​Enable](https://shopify.dev/docs/api/admin-graphql/latest/mutations/standardMetafieldDefinitionEnable)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-StandardMetafieldDefinitionEnableUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
