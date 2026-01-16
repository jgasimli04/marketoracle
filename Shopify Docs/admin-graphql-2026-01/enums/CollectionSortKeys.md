---
title: CollectionSortKeys - GraphQL Admin
description: The set of valid sort keys for the Collection query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortKeys.md
---

# Collection​Sort​Keys

enum

The set of valid sort keys for the Collection query.

## Valid values

* ID

  Sort by the `id` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

***

## Fields

* [Product.collections(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.collections.arguments.sortKey)

  ARGUMENT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Shop.collections(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.collections.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Query​Root.collections(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.collections.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [collections.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Product.collections(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.collections.arguments.sortKey)
* <-|[Shop.collections(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.collections.arguments.sortKey)
* <-|[Query​Root.collections(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.collections.arguments.sortKey)
* <-|[collections.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/collections#arguments-sortKey)
