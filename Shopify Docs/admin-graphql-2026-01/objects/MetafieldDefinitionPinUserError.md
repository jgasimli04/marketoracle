---
title: MetafieldDefinitionPinUserError - GraphQL Admin
description: An error that occurs during the execution of `MetafieldDefinitionPin`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError.md
---

# Metafield​Definition​Pin​User​Error

object

An error that occurs during the execution of `MetafieldDefinitionPin`.

## Fields

* code

  [Metafield​Definition​Pin​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MetafieldDefinitionPinUserErrorCode)

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

* [metafield​Definition​Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin)

  mutation

  You can organize your metafields in your Shopify admin by pinning/unpinning metafield definitions. The order of your pinned metafield definitions determines the order in which your metafields are displayed on the corresponding pages in your Shopify admin. By default, only pinned metafields are automatically displayed.

  * definition​Id

    [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    ### Arguments

    The id of the metafield definition to pin. Using `identifier` is preferred.

  * identifier

    [Metafield​Definition​Identifier​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldDefinitionIdentifierInput)

    The identifier of the metafield definition to pin.

  ***

***

## <\~> MetafieldDefinitionPinUserError Mutations

### Mutated by

* <\~>[metafield​Definition​Pin](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metafieldDefinitionPin)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MetafieldDefinitionPinUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
