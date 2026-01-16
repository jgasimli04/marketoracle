---
title: CollectionUnpublishPayload - GraphQL Admin
description: Return type for `collectionUnpublish` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionUnpublishPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionUnpublishPayload.md
---

# Collection​Unpublish​Payload

payload

Return type for `collectionUnpublish` mutation.

## Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The collection that has been unpublished.

* shop

  [Shop!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop)

  non-null

  The shop associated with the collection.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [collection​Unpublish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUnpublish)

  mutation

  Deprecated

  * input

    [Collection​Unpublish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionUnpublishInput)

    required

    ### Arguments

    Specify a collection to unpublish and the sales channels to remove it from.

  ***

***

## Map
