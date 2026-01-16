---
title: MetafieldDefinitionUnpinPayload - GraphQL Admin
description: Return type for `metafieldDefinitionUnpin` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionUnpinPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionUnpinPayload.md
---

# Metafield​Definition​Unpin​Payload

payload

Return type for `metafieldDefinitionUnpin` mutation.

## Fields

* unpinned​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was unpinned.

* user​Errors

  [\[Metafield​Definition​Unpin​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUnpinUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [metafield​Definition​Unpin](https://shopify.dev/docs/api/admin-graphql/latest/types/metafieldDefinitionUnpin)
