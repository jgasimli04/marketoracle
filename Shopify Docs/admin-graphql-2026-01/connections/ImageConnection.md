---
title: ImageConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Images.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection.md
---

# Image​Connection

connection

An auto-generated type for paginating through multiple Images.

## Fields with this connection

### Deprecated fields with this connection

* [Product.images](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.images)

  OBJECT

  Deprecated

* [Shop.productImages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.productImages)

  OBJECT

  Deprecated

***

## Possible returns

* edges

  [\[Image​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ImageEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Image!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Image)

  non-null

  A list of nodes that are contained in ImageEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Possible returns

* <->[Image​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection#returns-edges)
* <->[Image​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection#returns-nodes)
* <->[Image​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ImageConnection#returns-pageInfo)
