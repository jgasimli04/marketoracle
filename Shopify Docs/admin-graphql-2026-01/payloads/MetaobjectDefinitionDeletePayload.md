---
title: MetaobjectDefinitionDeletePayload - GraphQL Admin
description: Return type for `metaobjectDefinitionDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectDefinitionDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectDefinitionDeletePayload.md
---

# Metaobject​Definition​Delete​Payload

payload

Return type for `metaobjectDefinitionDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted metaobjects definition.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metaobject​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionDelete)

  mutation

  Deletes the specified metaobject definition. Also deletes all related metafield definitions, metaobjects, and metafields asynchronously.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobjects definition to delete.

  ***

***

## Map

### Mutations with this payload

* [metaobject​Definition​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/metaobjectDefinitionDelete)
