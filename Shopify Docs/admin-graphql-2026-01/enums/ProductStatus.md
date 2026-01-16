---
title: ProductStatus - GraphQL Admin
description: The possible product statuses.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus.md'
---

# Product​Status

enum

The possible product statuses.

## Valid values

* ACTIVE

  The product is ready to sell and can be published to sales channels and apps. Products with an active status aren't automatically published to sales channels, such as the online store, or apps. By default, existing products are set to active.

* ARCHIVED

  The product is no longer being sold and isn't available to customers on sales channels and apps.

* DRAFT

  The product isn't ready to sell and is unavailable to customers on sales channels and apps. By default, duplicated and unarchived products are set to draft.

* UNLISTED

  The product is active but you need a direct link to view it. The product doesn't show up in search, collections, or product recommendations. It will be returned in Storefront API and Liquid only when referenced individually by handle, id, or metafield reference.This status is only visible from 2025-10 and up, is translated to active in older versions and can't be changed from unlisted in older versions.

***

## Fields

* [Product.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.status)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Create​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-status)

  INPUT OBJECT

  The input fields required to create a product.

* [Product​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-status)

  INPUT OBJECT

  The input fields for creating or updating a product.

* [Product​Set​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-status)

  INPUT OBJECT

  The input fields required to create or update a product via ProductSet mutation.

* [Product​Update​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput#fields-status)

  INPUT OBJECT

  The input fields for updating a product.

* [product​Change​Status.status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productChangeStatus#arguments-status)

  ARGUMENT

* [product​Duplicate.newStatus](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate#arguments-newStatus)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Product.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.status)

### Inputs with this enum

* [Product​Create​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-status)
* [Product​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-status)
* [Product​Set​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-status)
* [Product​Update​Input.status](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductUpdateInput#fields-status)

### Arguments with this enum

* <-|[product​Change​Status.status](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productChangeStatus#arguments-status)
* <-|[product​Duplicate.newStatus](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productDuplicate#arguments-newStatus)
