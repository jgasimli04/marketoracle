---
title: CombinedListingsRole - GraphQL Admin
description: The role of the combined listing.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingsRole'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CombinedListingsRole.md
---

# Combined​Listings​Role

enum

The role of the combined listing.

## Valid values

* CHILD

  The product is the child of a combined listing.

* PARENT

  The product is the parent of a combined listing.

***

## Fields

* [Product.combinedListingRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.combinedListingRole)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Create​Input.combinedListingRole](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-combinedListingRole)

  INPUT OBJECT

  The input fields required to create a product.

* [Product​Input.combinedListingRole](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-combinedListingRole)

  INPUT OBJECT

  The input fields for creating or updating a product.

* [Product​Set​Input.combinedListingRole](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-combinedListingRole)

  INPUT OBJECT

  The input fields required to create or update a product via ProductSet mutation.

***

## Map

### Fields with this enum

* <-|[Product.combinedListingRole](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.combinedListingRole)

### Inputs with this enum

* [Product​Create​Input.combinedListingRole](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductCreateInput#fields-combinedListingRole)
* [Product​Input.combinedListingRole](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductInput#fields-combinedListingRole)
* [Product​Set​Input.combinedListingRole](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductSetInput#fields-combinedListingRole)
