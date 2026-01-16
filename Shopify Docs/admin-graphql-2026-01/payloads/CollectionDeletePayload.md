---
title: CollectionDeletePayload - GraphQL Admin
description: Return type for `collectionDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionDeletePayload.md
---

# Collection​Delete​Payload

payload

Return type for `collectionDelete` mutation.

## Fields

* deleted​Collection​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the collection that was deleted. Returns `null` if the collection doesn't exist.

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

* [collection​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionDelete)

  mutation

  Deletes a collection and removes it permanently from the store. This operation cannot be undone and will remove the collection from all sales channels where it was published.

  For example, when merchants discontinue seasonal promotions or reorganize their catalog structure, they can delete outdated collections like "Back to School 2023" to keep their store organized.

  Use `CollectionDelete` to:

  * Remove outdated or unused collections from stores
  * Clean up collection structures during catalog reorganization
  * Implement collection management tools with deletion capabilities

  Products within the deleted collection remain in the store but are no longer grouped under that collection.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * input

    [Collection​Delete​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionDeleteInput)

    required

    ### Arguments

    The collection to delete.

  ***

***

## Map

### Mutations with this payload

* [collection​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/collectionDelete)
