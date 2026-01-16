---
title: ProductMediaSortKeys - GraphQL Admin
description: The set of valid sort keys for the ProductMedia query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductMediaSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductMediaSortKeys.md
---

# Product​Media​Sort​Keys

enum

The set of valid sort keys for the ProductMedia query.

## Valid values

* ID

  Sort by the `id` value.

* POSITION

  Sort by the `position` value.

***

## Fields

* [Product.media(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.media.arguments.sortKey)

  ARGUMENT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

***

## Map

### Arguments with this enum

* <-|[Product.media(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.media.arguments.sortKey)
