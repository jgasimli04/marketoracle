---
title: ProductUpdatePayload - GraphQL Admin
description: Return type for `productUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductUpdatePayload.md
---

# Product​Update​Payload

payload

Return type for `productUpdate` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The updated product object.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productUpdate)

  mutation

  Updates a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) with attributes such as title, description, vendor, and media.

  The `productUpdate` mutation helps you modify many products at once, avoiding the tedious or time-consuming process of updating them one by one in the Shopify admin. Common examples including updating product details like status or tags.

  The `productUpdate` mutation doesn't support updating [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant). To update multiple product variants for a single product and manage prices, use the [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate) mutation.

  ***

  Note

  The `productUpdate` mutation has a [throttle](https://shopify.dev/docs/api/usage/rate-limits#resource-based-rate-limits) that takes effect when a store has 50,000 product variants. After this threshold is reached, no more than 1,000 new product variants can be updated per day.

  ***

  After updating a product, you can make additional changes using one of the following mutations:

  * [`productSet`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet): Used to perform multiple operations on products, such as creating or modifying product options and variants.
  * [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish): Used to publish the product and make it available to customers, if the product is currently unpublished.

  Learn more about the [product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model) and [adding product data](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/add-data).

  * input

    [Product​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput)

    Deprecated

    ### Arguments

  * product

    [Product​Update​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput)

    The updated properties for a product.

  * media

    [\[Create​Media​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CreateMediaInput)

    List of new media to be added to the product.

  ***

***

## Map

### Mutations with this payload

* [product​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/productUpdate)
