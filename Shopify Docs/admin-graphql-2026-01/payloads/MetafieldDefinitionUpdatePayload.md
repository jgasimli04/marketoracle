---
title: MetafieldDefinitionUpdatePayload - GraphQL Admin
description: Return type for `metafieldDefinitionUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetafieldDefinitionUpdatePayload.md
---

# Metafield​Definition​Update​Payload

payload

Return type for `metafieldDefinitionUpdate` mutation.

## Fields

* updated​Definition

  [Metafield​Definition](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinition)

  The metafield definition that was updated.

* user​Errors

  [\[Metafield​Definition​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* validation​Job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job updating the metafield definition's validation\_status.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [metafield​Definition​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/metafieldDefinitionUpdate)
