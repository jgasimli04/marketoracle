---
title: CollectionPublishPayload - GraphQL Admin
description: Return type for `collectionPublish` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionPublishPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionPublishPayload.md
---

# Collection​Publish​Payload

payload

Return type for `collectionPublish` mutation.

## Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The published collection.

* collection​Publications

  [\[Collection​Publication!\]](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication)

  The channels where the collection has been published.

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

* [collection​Publish](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionPublish)

  mutation

  Deprecated

  * input

    [Collection​Publish​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionPublishInput)

    required

    ### Arguments

    Specify a collection to publish and the sales channels to publish it to.

  ***

***

## Map
