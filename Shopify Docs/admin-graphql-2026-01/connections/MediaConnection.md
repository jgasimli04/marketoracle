---
title: MediaConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Media.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection.md
---

# Media​Connection

connection

An auto-generated type for paginating through multiple Media.

## Fields with this connection

* [Product.media](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.media)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

* [Product​Variant.media](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.media)

  OBJECT

  The `ProductVariant` object represents a version of a [product](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) that comes in more than one [option](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductOption), such as size or color. For example, if a merchant sells t-shirts with options for size and color, then a small, blue t-shirt would be one product variant and a large, blue t-shirt would be another.

  Use the `ProductVariant` object to manage the full lifecycle and configuration of a product's variants. Common use cases for using the `ProductVariant` object include:

  * Tracking inventory for each variant
  * Setting unique prices for each variant
  * Assigning barcodes and SKUs to connect variants to fulfillment services
  * Attaching variant-specific images and media
  * Setting delivery and tax requirements
  * Supporting product bundles, subscriptions, and selling plans

  A `ProductVariant` is associated with a parent [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) object. `ProductVariant` serves as the central link between a product's merchandising configuration, inventory, pricing, fulfillment, and sales channels within the GraphQL Admin API schema. Each variant can reference other GraphQL types such as:

  * [`InventoryItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem): Used for inventory tracking
  * [`Image`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image): Used for variant-specific images
  * [`SellingPlanGroup`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup): Used for subscriptions and selling plans

  Learn more about [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components).

***

## Possible returns

* edges

  [\[Media​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MediaEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Media!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Media)

  non-null

  A list of nodes that are contained in MediaEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Product.media](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.media)
* {}[Product​Variant.media](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.media)

### Possible returns

* <->[Media​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection#returns-edges)
* <->[Media​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection#returns-nodes)
* <->[Media​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MediaConnection#returns-pageInfo)
