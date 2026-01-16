---
title: MetafieldDefinitionDeletePayload - GraphQL Admin
description: Return type for `metafieldDefinitionDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionDeletePayload.md
---

# Metafield​Definition​Delete​Payload

payload

Return type for `metafieldDefinitionDelete` mutation.

## Fields

* deleted​Definition

  [Metafield​Definition​Identifier](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionIdentifier)

  The metafield definition that was deleted.

* deleted​Definition​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted metafield definition.

* user​Errors

  [\[Metafield​Definition​Delete​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionDeleteUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [metafield​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/metafieldDefinitionDelete)
