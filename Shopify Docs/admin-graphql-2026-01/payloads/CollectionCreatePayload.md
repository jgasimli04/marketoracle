---
title: CollectionCreatePayload - GraphQL Admin
description: Return type for `collectionCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionCreatePayload.md
---

# Collection​Create​Payload

payload

Return type for `collectionCreate` mutation.

## Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The collection that has been created.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [collection​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionCreate)

  mutation

  Creates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) to group [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels). For example, an athletics store might create different collections for running attire, shoes, and accessories.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  Use the `collectionCreate` mutation when you need to:

  * Create a new collection for a product launch or campaign
  * Organize products by category, season, or promotion
  * Automate product grouping using rules (for example, by tag, type, or price)

  ***

  Note

  The created collection is unpublished by default. To make it available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

  ***

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

  * input

    [Collection​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

    required

    ### Arguments

    The properties to use when creating the collection.

  ***

***

## Map

### Mutations with this payload

* [collection​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/collectionCreate)
