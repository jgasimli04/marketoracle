---
title: CollectionRemoveProductsPayload - GraphQL Admin
description: Return type for `collectionRemoveProducts` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionRemoveProductsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionRemoveProductsPayload.md
---

# Collection​Remove​Products​Payload

payload

Return type for `collectionRemoveProducts` mutation.

## Fields

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job removing the products.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [collection​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionRemoveProducts)

  mutation

  Removes multiple products from a collection in a single operation. This mutation can process large product sets (up to 250 products) and may take significant time to complete for collections with many products.

  For example, when ending a seasonal promotion, merchants can remove all sale items from a "Summer Clearance" collection at once rather than editing each product individually.

  Use `CollectionRemoveProducts` to:

  * Bulk-remove products from collections efficiently
  * Clean up collection membership during catalog updates
  * Implement automated collection management workflows

  The operation processes asynchronously to avoid timeouts and performance issues, especially for large product sets.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection to remove products from. The ID must reference an existing manual collection.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of products to remove from the collection. The mutation doesn't validate that the products belong to the collection or whether the products exist.

  ***

***

## Map

### Mutations with this payload

* [collection​Remove​Products](https://shopify.dev/docs/api/admin-graphql/latest/types/collectionRemoveProducts)
