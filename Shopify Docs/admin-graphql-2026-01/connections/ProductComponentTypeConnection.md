---
title: ProductComponentTypeConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ProductComponentTypes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection.md
---

# Product​Component​Type​Connection

connection

An auto-generated type for paginating through multiple ProductComponentTypes.

## Fields with this connection

* [Product.productComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productComponents)

  OBJECT

  The `Product` object lets you manage products in a merchant’s store.

  Products are the goods and services that merchants offer to customers. They can include various details such as title, description, price, images, and options such as size or color. You can use [product variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/productvariant) to create or update different versions of the same product. You can also add or update product [media](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/media). Products can be organized by grouping them into a [collection](https://shopify.dev/docs/api/admin-graphql/latest/objects/collection).

  Learn more about working with [Shopify's product model](https://shopify.dev/docs/apps/build/graphql/migrate/new-product-model/product-model-components), including limitations and considerations.

***

## Possible returns

* edges

  [\[Product​Component​Type​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentTypeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Component​Type!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductComponentType)

  non-null

  A list of nodes that are contained in ProductComponentTypeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Product.productComponents](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productComponents)

### Possible returns

* <->[Product​Component​Type​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection#returns-edges)
* <->[Product​Component​Type​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection#returns-nodes)
* <->[Product​Component​Type​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductComponentTypeConnection#returns-pageInfo)
