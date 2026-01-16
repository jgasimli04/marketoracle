---
title: ProductImageSortKeys - GraphQL Admin
description: The set of valid sort keys for the ProductImage query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductImageSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductImageSortKeys.md
---

# Product​Image​Sort​Keys

enum

The set of valid sort keys for the ProductImage query.

## Valid values

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* POSITION

  Sort by the `position` value.

***

## Fields

* [Product.images(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.images.arguments.sortKey)

  ARGUMENT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Shop.productImages(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productImages.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

## Map

### Arguments with this enum

* <-|[Product.images(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.images.arguments.sortKey)
* <-|[Shop.productImages(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productImages.arguments.sortKey)
