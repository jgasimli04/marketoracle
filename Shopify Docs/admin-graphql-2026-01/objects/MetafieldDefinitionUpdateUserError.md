---
title: MetafieldDefinitionUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `MetafieldDefinitionUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUpdateUserError.md
---

# Metafield​Definition​Update​User​Error

object

An error that occurs during the execution of `MetafieldDefinitionUpdate`.

## Fields

* code

  [Metafield​Definition​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionUpdateUserErrorCode)

  The error code.

* element​Index

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The index of the array element that's causing the error.

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

* [metafield​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)

  mutation

  Updates a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/MetafieldDefinition)'s configuration and settings. You can modify the definition's name, description, validation rules, access settings, capabilities, and constraints.

  The mutation updates access settings that control visibility across different APIs, such as the [GraphQL Admin API](https://shopify.dev/docs/api/admin-graphql), [Storefront API](https://shopify.dev/docs/api/storefront), and [Customer Account API](https://shopify.dev/docs/api/customer). It also enables capabilities like admin filtering or unique value validation, and modifies constraints that determine which resource subtypes the definition applies to.

  ***

  Note

  The type, namespace, key, and owner type identify the definition and so can't be changed.

  ***

  Learn more about [updating metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * definition

    [Metafield​Definition​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionUpdateInput)

    required

    ### Arguments

    The input fields for the metafield definition update.

  ***

***

## <\~> MetafieldDefinitionUpdateUserError Mutations

### Mutated by

* <\~>[metafield​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MetafieldDefinitionUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
