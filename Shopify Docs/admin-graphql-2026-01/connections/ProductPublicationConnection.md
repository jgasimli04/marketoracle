---
title: ProductPublicationConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple ProductPublications.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection.md
---

# Product​Publication​Connection

connection

An auto-generated type for paginating through multiple ProductPublications.

## Fields with this connection

### Deprecated fields with this connection

* [Channel.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Channel#field-Channel.fields.productPublications)

  OBJECT

  Deprecated

* [Product.productPublications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.productPublications)

  OBJECT

  Deprecated

* [Product.publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product#field-Product.fields.publications)

  OBJECT

  Deprecated

***

## Possible returns

* edges

  [\[Product​Publication​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Product​Publication!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductPublication)

  non-null

  A list of nodes that are contained in ProductPublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Possible returns

* <->[Product​Publication​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection#returns-edges)
* <->[Product​Publication​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection#returns-nodes)
* <->[Product​Publication​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/ProductPublicationConnection#returns-pageInfo)
