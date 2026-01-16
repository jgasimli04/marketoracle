---
title: ProductVariantSortKeys - GraphQL Admin
description: The set of valid sort keys for the ProductVariant query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantSortKeys
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductVariantSortKeys.md
---

# Product​Variant​Sort​Keys

enum

The set of valid sort keys for the ProductVariant query.

## Valid values

* FULL\_​TITLE

  Sort by the `full_title` value.

* ID

  Sort by the `id` value.

* INVENTORY\_​LEVELS\_​AVAILABLE

  Sort by available inventory quantity in the location specified by the `query:"location_id:"` argument. Don't use this sort key when no `location_id` in query is specified.

* INVENTORY\_​MANAGEMENT

  Sort by the `inventory_management` value.

* INVENTORY\_​POLICY

  Sort by the `inventory_policy` value.

* INVENTORY\_​QUANTITY

  Sort by the `inventory_quantity` value.

* NAME

  Sort by the `name` value.

* POPULAR

  Sort by the `popular` value.

* POSITION

  Sort by the `position` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

* SKU

  Sort by the `sku` value.

* TITLE

  Sort by the `title` value.

***

## Fields

* [Product.variants(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.variants.arguments.sortKey)

  ARGUMENT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Shop.productVariants(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productVariants.arguments.sortKey)

  ARGUMENT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

* [Query​Root.productVariants(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.productVariants.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [product​Variants.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants#arguments-sortKey)

  ARGUMENT

* [Delivery​Profile​Item.variants(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryProfileItem#field-DeliveryProfileItem.fields.variants.arguments.sortKey)

  ARGUMENT

  Deprecated

***

## Map

### Arguments with this enum

* <-|[Product.variants(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.variants.arguments.sortKey)
* <-|[Shop.productVariants(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productVariants.arguments.sortKey)
* <-|[Query​Root.productVariants(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.productVariants.arguments.sortKey)
* <-|[product​Variants.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/productVariants#arguments-sortKey)
