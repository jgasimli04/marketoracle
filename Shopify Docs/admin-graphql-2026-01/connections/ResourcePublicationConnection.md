---
title: ResourcePublicationConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ResourcePublications.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection.md
---

# Resource​Publication​Connection

connection

An auto-generated type for paginating through multiple ResourcePublications.

## Fields with this connection

* [Channel.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collectionPublicationsV3)

  OBJECT

  An authenticated link to an external platform that supports syndication and optionally order ingestion, such as Facebook, Pinterest, an online store, or Point of Sale (POS).

  Each channel provides access to its underlying [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App), published products and collections, and [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings, as well as what features of the platform it supports such as [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing). Use channels to manage where catalog items appear, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different customer touchpoints.

* [Channel.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.productPublicationsV3)

  OBJECT

  An authenticated link to an external platform that supports syndication and optionally order ingestion, such as Facebook, Pinterest, an online store, or Point of Sale (POS).

  Each channel provides access to its underlying [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App), published products and collections, and [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication) settings, as well as what features of the platform it supports such as [scheduled publishing](https://shopify.dev/docs/apps/build/sales-channels/scheduled-product-publishing). Use channels to manage where catalog items appear, track publication status across platforms, and control [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) visibility for different customer touchpoints.

* [Collection.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublications)

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

* [Product.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublications)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Publication.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collectionPublicationsV3)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Publication.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.productPublicationsV3)

  OBJECT

  A group of [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) that are published to an app.

  Each publication manages which products and collections display on its associated [`Channel`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel). Merchants can automatically publish products when they're created if [`autoPublish`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.autoPublish) is enabled, or manually control publication through publication records.

  Publications support scheduled publishing through future publish dates for online store channels, allowing merchants to coordinate product launches and promotional campaigns. The [`catalog`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.catalog) field links to pricing and availability rules specific to that publication's context.

* [Publishable.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-resourcePublications)

  INTERFACE

  Represents a resource that can be published to a channel. A publishable resource can be either a Product or Collection.

***

## Possible returns

* edges

  [\[Resource​Publication​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Resource​Publication!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ResourcePublication)

  non-null

  A list of nodes that are contained in ResourcePublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Channel.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.collectionPublicationsV3)
* {}[Channel.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.productPublicationsV3)
* {}[Collection.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.resourcePublications)
* {}[Product.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.resourcePublications)
* {}[Publication.collectionPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.collectionPublicationsV3)
* {}[Publication.productPublicationsV3](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication#field-Publication.fields.productPublicationsV3)
* ||-[Publishable.resourcePublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-resourcePublications)

### Possible returns

* <->[Resource​Publication​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection#returns-edges)
* <->[Resource​Publication​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection#returns-nodes)
* <->[Resource​Publication​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ResourcePublicationConnection#returns-pageInfo)
