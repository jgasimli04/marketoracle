---
title: CollectionSortOrder - GraphQL Admin
description: Specifies the sort order for the products in the collection.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortOrder'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/CollectionSortOrder.md
---

# Collection​Sort​Order

enum

Specifies the sort order for the products in the collection.

## Valid values

* ALPHA\_​ASC

  Alphabetically, in ascending order (A - Z).

* ALPHA\_​DESC

  Alphabetically, in descending order (Z - A).

* BEST\_​SELLING

  By best-selling products.

* CREATED

  By date created, in ascending order (oldest - newest).

* CREATED\_​DESC

  By date created, in descending order (newest - oldest).

* MANUAL

  In the order set manually by the merchant.

* PRICE\_​ASC

  By price, in ascending order (lowest - highest).

* PRICE\_​DESC

  By price, in descending order (highest - lowest).

***

## Fields

* [Collection.sortOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.sortOrder)

  OBJECT

  The `Collection` object represents a group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that merchants can organize to make their stores easier to browse and help customers find related products. Collections serve as the primary way to categorize and display products across [online stores](https://shopify.dev/docs/apps/build/online-store), [sales channels](https://shopify.dev/docs/apps/build/sales-channels), and marketing campaigns.

  There are two types of collections:

  * **[Custom (manual) collections](https://help.shopify.com/manual/products/collections/manual-shopify-collection)**: You specify the products to include in a collection.
  * **[Smart (automated) collections](https://help.shopify.com/manual/products/collections/automated-collections)**: You define rules, and products matching those rules are automatically included in the collection.

  The `Collection` object provides information to:

  * Organize products by category, season, or promotion.
  * Automate product grouping using rules (for example, by tag, type, or price).
  * Configure product sorting and display order (for example, alphabetical, best-selling, price, or manual).
  * Manage collection visibility and publication across sales channels.
  * Add rich descriptions, images, and metadata to enhance discovery.

  ***

  Note

  Collections are unpublished by default. To make them available to customers, use the [`publishablePublish`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/publishablePublish) mutation after creation.

  ***

  Collections can be displayed in a store with Shopify's theme system through [Liquid templates](https://shopify.dev/docs/storefronts/themes/architecture/templates/collection) and can be customized with [template suffixes](https://shopify.dev/docs/storefronts/themes/architecture/templates/alternate-templates) for unique layouts. They also support advanced features like translated content, resource feedback, and contextual publication for location-based catalogs.

  Learn about [using metafields with smart collections](https://shopify.dev/docs/apps/build/custom-data/metafields/use-metafield-capabilities).

* [Collection​Input.sortOrder](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-sortOrder)

  INPUT OBJECT

  The input fields required to create a collection.

***

## Map

### Fields with this enum

* <-|[Collection.sortOrder](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.sortOrder)

### Inputs with this enum

* [Collection​Input.sortOrder](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CollectionInput#fields-sortOrder)
