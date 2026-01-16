---
title: MetafieldDefinitionPinPayload - GraphQL Admin
description: Return type for `metafieldDefinitionPin` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionPinPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionPinPayload.md
---

# Metafield​Definition​Pin​Payload

payload

Return type for `metafieldDefinitionPin` mutation.

## Fields

* pinned​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was pinned.

* user​Errors

  [\[Metafield​Definition​Pin​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionPinUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [metafield​Definition​Pin](https://shopify.dev/docs/api/admin-graphql/latest/types/metafieldDefinitionPin)
