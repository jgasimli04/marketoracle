---
title: CatalogType - GraphQL Admin
description: The associated catalog's type.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType.md'
---

# Catalog​Type

enum

The associated catalog's type.

## Valid values

* APP

  Catalogs belonging to apps.

* COMPANY\_​LOCATION

  Catalogs belonging to company locations.

* MARKET

  Catalogs belonging to markets.

* NONE

  Not associated to a catalog.

***

## Fields

* [Collection.resourcePublicationsV2(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublicationsV2.arguments.catalogType)

  ARGUMENT

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

* [Product.resourcePublicationsV2(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublicationsV2.arguments.catalogType)

  ARGUMENT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Publishable.resourcePublicationsV2(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publishable#field-Publishable.fields.resourcePublicationsV2.arguments.catalogType)

  ARGUMENT

  Represents a resource that can be published to a channel. A publishable resource can be either a Product or Collection.

* [Query​Root.catalogs(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.catalogs.arguments.type)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [Query​Root.catalogsCount(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.catalogsCount.arguments.type)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [Query​Root.publications(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.publications.arguments.catalogType)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [Query​Root.publicationsCount(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.publicationsCount.arguments.catalogType)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [catalogs.type](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-type)

  ARGUMENT

* [catalogs​Count.type](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogsCount#arguments-type)

  ARGUMENT

* [publications.catalogType](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications#arguments-catalogType)

  ARGUMENT

* [publications​Count.catalogType](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationsCount#arguments-catalogType)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Collection.resourcePublicationsV2(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublicationsV2.arguments.catalogType)
* <-|[Product.resourcePublicationsV2(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublicationsV2.arguments.catalogType)
* <-|[Publishable.resourcePublicationsV2(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publishable#field-Publishable.fields.resourcePublicationsV2.arguments.catalogType)
* <-|[Query​Root.catalogs(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.catalogs.arguments.type)
* <-|[Query​Root.catalogsCount(type)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.catalogsCount.arguments.type)
* <-|[Query​Root.publications(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.publications.arguments.catalogType)
* <-|[Query​Root.publicationsCount(catalogType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.publicationsCount.arguments.catalogType)
* <-|[catalogs.type](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogs#arguments-type)
* <-|[catalogs​Count.type](https://shopify.dev/docs/api/admin-graphql/latest/queries/catalogsCount#arguments-type)
* <-|[publications.catalogType](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications#arguments-catalogType)
* <-|[publications​Count.catalogType](https://shopify.dev/docs/api/admin-graphql/latest/queries/publicationsCount#arguments-catalogType)
