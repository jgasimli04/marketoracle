---
title: ProductSetPayload - GraphQL Admin
description: Return type for `productSet` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductSetPayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/ProductSetPayload.md
---

# Product​Set​Payload

payload

Return type for `productSet` mutation.

## Fields

* product

  [Product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product)

  The product object.

* product​Set​Operation

  [Product​Set​Operation](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation)

  The product set operation, returned when run in asynchronous mode.

* user​Errors

  [\[Product​Set​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [product​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet)

  mutation

  Performs multiple operations to create or update products in a single request.

  Use the `productSet` mutation to sync information from an external data source into Shopify, manage large product catalogs, and perform batch updates. The mutation is helpful for bulk product management, including price adjustments, inventory updates, and product lifecycle management.

  The behavior of `productSet` depends on the type of field it's modifying:

  * **For list fields**: Creates new entries, updates existing entries, and deletes existing entries that aren't included in the mutation's input. Common examples of list fields include [`collections`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.collections), [`metafields`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.metafields), and [`variants`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet#arguments-input.fields.variants).

  * **For all other field types**: Updates only the included fields. Any omitted fields will remain unchanged.

  ***

  Note

  By default, stores have a limit of 2048 product variants for each product.

  ***

  You can run `productSet` in one of the following modes:

  * **Synchronously**: Returns the updated product in the response.
  * **Asynchronously**: Returns a [`ProductSetOperation`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSetOperation) object. Use the [`productOperation`](https://shopify.dev/api/admin-graphql/latest/queries/productOperation) query to check the status of the operation and retrieve details of the updated product and its product variants.

  If you need to only manage product variants, then use one of the following mutations:

  * [`productVariantsBulkCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkCreate)
  * [`productVariantsBulkUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkUpdate)
  * [`productVariantsBulkDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productVariantsBulkDelete)

  If you need to only manage product options, then use one of the following mutations:

  * [`productOptionsCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsCreate)
  * [`productOptionUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionUpdate)
  * [`productOptionsReorder`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsReorder)
  * [`productOptionsDelete`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productOptionsDelete)

  Learn more about [syncing product data from an external source](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/sync-data).

  * input

    [Product​Set​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput)

    required

    ### Arguments

    The properties of the newly created or updated product.

  * synchronous

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:true

    Whether the mutation should be run synchronously or asynchronously.

    If `true`, the mutation will return the updated `product`.

    If `false`, the mutation will return a `productSetOperation`.

    Defaults to `true`.

    Setting `synchronous: false` may be desirable depending on the input complexity/size, and should be used if you are experiencing timeouts.

    **Note**: When run in the context of a [bulk operation](https://shopify.dev/api/usage/bulk-operations/imports), the mutation will always run synchronously and this argument will be ignored.

  * identifier

    [Product​Set​Identifiers](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetIdentifiers)

    Specifies the identifier that will be used to lookup the resource.

  ***

***

## Map

### Mutations with this payload

* [product​Set](https://shopify.dev/docs/api/admin-graphql/latest/types/productSet)
