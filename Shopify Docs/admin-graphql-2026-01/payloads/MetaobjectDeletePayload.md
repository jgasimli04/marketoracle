---
title: MetaobjectDeletePayload - GraphQL Admin
description: Return type for `metaobjectDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MetaobjectDeletePayload.md
---

# Metaobject​Delete​Payload

payload

Return type for `metaobjectDelete` mutation.

## Fields

* deleted​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted metaobject.

* user​Errors

  [\[Metaobject​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [metaobject​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDelete)

  mutation

  Deletes the specified metaobject and its associated metafields.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the metaobject to delete.

  ***

***

## Map

### Mutations with this payload

* [metaobject​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/metaobjectDelete)
