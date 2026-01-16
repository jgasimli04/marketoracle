---
title: ProductBundleCreatePayload - GraphQL Admin
description: Return type for `productBundleCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductBundleCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductBundleCreatePayload.md
---

# Product​Bundle​Create​Payload

payload

Return type for `productBundleCreate` mutation.

## Fields

* product​Bundle​Operation

  [Product​Bundle​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation)

  The asynchronous ProductBundleOperation creating the product bundle or componentized product.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Bundle​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleCreate)

  mutation

  Creates a product bundle that groups multiple [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects together as components. The bundle appears as a single product in the store, with its price determined by the parent product and inventory calculated from the component products.

  The mutation runs asynchronously and returns a [`ProductBundleOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation) object to track the creation status. Poll the operation using the [`productOperation`](https://shopify.dev/docs/api/admin-graphql/latest/queries/productOperation) query to determine when the bundle is ready.

  Learn more about [creating product fixed bundles](https://shopify.dev/docs/apps/build/product-merchandising/bundles/add-product-fixed-bundle#step-1-create-a-bundle).

  * input

    [Product​Bundle​Create​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleCreateInput)

    required

    ### Arguments

    Input for creating a product bundle or componentized product.

  ***

***

## Map

### Mutations with this payload

* [product​Bundle​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/productBundleCreate)
