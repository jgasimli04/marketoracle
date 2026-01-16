---
title: MetafieldDefinitionDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `MetafieldDefinitionDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionDeleteUserError.md
---

# Metafield​Definition​Delete​User​Error

object

An error that occurs during the execution of `MetafieldDefinitionDelete`.

## Fields

* code

  [Metafield​Definition​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionDeleteUserErrorCode)

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

* [metafield​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionDelete)

  mutation

  Deletes a [`MetafieldDefinition`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/MetafieldDefinition). You can identify the definition by providing either its owner type, namespace, and key, or its global ID.

  When you set [`deleteAllAssociatedMetafields`](https://shopify.dev/docs/api/admin-graphql/2026-01/mutations/metafieldDefinitionDelete#arguments-deleteAllAssociatedMetafields) to `true`, the mutation asynchronously deletes all [`Metafield`](https://shopify.dev/docs/api/admin-graphql/2026-01/objects/Metafield) objects that use this definition. This option must be `true` when deleting definitions under the `$app` namespace.

  Learn more about [deleting metafield definitions](https://shopify.dev/docs/apps/build/custom-data/metafields/definitions).

  * id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The id of the metafield definition to delete. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to delete.

  * delete​All​Associated​Metafields

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Whether to delete all associated metafields.

  ***

***

## <\~> MetafieldDefinitionDeleteUserError Mutations

### Mutated by

* <\~>[metafield​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MetafieldDefinitionDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
