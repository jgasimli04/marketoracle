---
title: CollectionAddProductsPayload - GraphQL Admin
description: Return type for `collectionAddProducts` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionAddProductsPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionAddProductsPayload.md
---

# Collection​Add​Products​Payload

payload

Return type for `collectionAddProducts` mutation.

## Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The updated collection. Returns `null` if an error is raised.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [collection​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionAddProducts)

  mutation

  Adds multiple products to an existing collection in a single operation. This mutation provides an efficient way to bulk-manage collection membership without individual product updates.

  For example, when merchants create seasonal collections, they can add dozens of related products at once rather than updating each product individually. A clothing store might add all winter jackets to a "Winter Collection" in one operation.

  Use `CollectionAddProducts` to:

  * Bulk-add products to collections for efficient catalog management
  * Implement collection building tools in admin interfaces
  * Organize collection membership during bulk product operations
  * Reduce API calls when managing large product sets

  The mutation processes multiple product additions and returns success status along with any errors encountered during the operation. Products are added to the collection while preserving existing collection settings.

  This operation only works with manual collections where merchants explicitly choose which products to include. It will return an error if used with smart collections that automatically include products based on conditions.

  Learn more about [collection management](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the collection that's being updated. This can't be a smart collection.

  * product​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The IDs of the products that are being added to the collection. If any of the products is already present in the input collection, then an error is raised and no products are added.

  ***

***

## Map

### Mutations with this payload

* [collection​Add​Products](https://shopify.dev/docs/api/admin-graphql/latest/types/collectionAddProducts)
