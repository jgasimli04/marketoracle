---
title: CollectionUpdatePayload - GraphQL Admin
description: Return type for `collectionUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CollectionUpdatePayload.md
---

# Collection​Update​Payload

payload

Return type for `collectionUpdate` mutation.

## Fields

* collection

  [Collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection)

  The updated collection.

* job

  [Job](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job)

  The asynchronous job updating the products based on the new rule set.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/collectionUpdate)

  mutation

  Updates a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), modifying its properties, products, or publication settings. Collections help organize [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) together in the [online store](https://shopify.dev/docs/apps/build/online-store) and other [sales channels](https://shopify.dev/docs/apps/build/sales-channels).

  Use the `collectionUpdate` mutation to programmatically modify collections in scenarios such as:

  * Updating collection details, like title, description, or image
  * Modifying SEO metadata for better search visibility
  * Changing which products are included (using rule updates for smart collections)
  * Publishing or unpublishing collections across different sales channels
  * Updating custom data using [metafields](https://shopify.dev/docs/apps/build/custom-data/metafields)

  There are two types of collections with different update capabilities:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You can update collection properties, but rule sets can't be modified since products are manually selected.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You can update both collection properties and the rules that automatically determine which products are included. When updating [rule sets](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionRuleConditions) for smart collections, the operation might be processed asynchronously. In these cases, the mutation returns a [`job`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Job) object that you can use to track the progress of the update.

  To publish or unpublish collections to specific sales channels, use the dedicated [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) and [`publishableUnpublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishableUnpublish) mutations.

  Learn more about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

  * input

    [Collection​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput)

    required

    ### Arguments

    The updated properties for the collection.

  ***

***

## Map

### Mutations with this payload

* [collection​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/collectionUpdate)
