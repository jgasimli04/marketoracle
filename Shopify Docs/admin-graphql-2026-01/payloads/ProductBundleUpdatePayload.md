---
title: ProductBundleUpdatePayload - GraphQL Admin
description: Return type for `productBundleUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductBundleUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductBundleUpdatePayload.md
---

# Product​Bundle​Update​Payload

payload

Return type for `productBundleUpdate` mutation.

## Fields

* product​Bundle​Operation

  [Product​Bundle​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductBundleOperation)

  The asynchronous ProductBundleOperation updating the product bundle or componentized product.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Bundle​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productBundleUpdate)

  mutation

  Updates a product bundle or componentized product.

  * input

    [Product​Bundle​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductBundleUpdateInput)

    required

    ### Arguments

    Input for updating a product bundle or componentized product.

  ***

***

## Map

### Mutations with this payload

* [product​Bundle​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/productBundleUpdate)
