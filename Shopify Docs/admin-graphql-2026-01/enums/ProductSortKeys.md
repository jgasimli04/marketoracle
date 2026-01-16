---
title: ProductSortKeys - GraphQL Admin
description: The set of valid sort keys for the Product query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSortKeys'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductSortKeys.md'
---

# Product​Sort​Keys

enum

The set of valid sort keys for the Product query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* INVENTORY\_​TOTAL

  Sort by the `inventory_total` value.

* PRODUCT\_​TYPE

  Sort by the `product_type` value.

* PUBLISHED\_​AT

  Sort by the `published_at` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* TITLE

  Sort by the `title` value.

* UPDATED\_​AT

  Sort by the `updated_at` value.

* VENDOR

  Sort by the `vendor` value.

***

## Fields

* [Publication.includedProducts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.includedProducts.arguments.sortKey)

  ARGUMENT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Publication.products(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.products.arguments.sortKey)

  ARGUMENT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Shop.products(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.products.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Query​Root.products(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.products.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [products.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Publication.includedProducts(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.includedProducts.arguments.sortKey)
* <-|[Publication.products(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.products.arguments.sortKey)
* <-|[Shop.products(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.products.arguments.sortKey)
* <-|[Query​Root.products(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.products.arguments.sortKey)
* <-|[products.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/products#arguments-sortKey)
