---
title: PublicationConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Publications.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection.md
---

# Publication​Connection

connection

An auto-generated type for paginating through multiple Publications.

## Fields with this connection

* [Collection.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.unpublishedPublications)

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

* [Product.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.unpublishedPublications)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Publishable.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-unpublishedPublications)

  INTERFACE

  Represents a resource that can be published to a channel. A publishable resource can be either a Product or Collection.

***

## Queries with this connection

* [publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)

  query

  Returns a paginated list of [`Publication`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication).

  Filter publications by [`CatalogType`](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType).

  * catalog​Type

    [Catalog​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/CatalogType)

    ### Arguments

    Filter publications by catalog type.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  ***

***

## Possible returns

* edges

  [\[Publication​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PublicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Publication!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Publication)

  non-null

  A list of nodes that are contained in PublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Collection.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.unpublishedPublications)
* {}[Product.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.unpublishedPublications)
* ||-[Publishable.unpublishedPublications](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Publishable#fields-unpublishedPublications)

### Queries with this connection

* \<?>[publications](https://shopify.dev/docs/api/admin-graphql/latest/queries/publications)

### Possible returns

* <->[Publication​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection#returns-edges)
* <->[Publication​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection#returns-nodes)
* <->[Publication​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/PublicationConnection#returns-pageInfo)
