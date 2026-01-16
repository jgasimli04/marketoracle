---
title: MetafieldDefinitionUnpinUserError - GraphQL Admin
description: An error that occurs during the execution of `MetafieldDefinitionUnpin`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUnpinUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUnpinUserError.md
---

# Metafield​Definition​Unpin​User​Error

object

An error that occurs during the execution of `MetafieldDefinitionUnpin`.

## Fields

* code

  [Metafield​Definition​Unpin​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionUnpinUserErrorCode)

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

* [metafield​Definition​Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUnpin)

  mutation

  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

  * definition​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The ID of the metafield definition to unpin. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to unpin.

  ***

***

## <\~> MetafieldDefinitionUnpinUserError Mutations

### Mutated by

* <\~>[metafield​Definition​Unpin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionUnpin)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MetafieldDefinitionUnpinUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
