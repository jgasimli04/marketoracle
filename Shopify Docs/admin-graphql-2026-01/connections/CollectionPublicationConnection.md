---
title: CollectionPublicationConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple CollectionPublications.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection.md
---

# Collection​Publication​Connection

connection

An auto-generated type for paginating through multiple CollectionPublications.

## Fields with this connection

* [Collection.publications](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection#field-Collection.fields.publications)

  OBJECT

  Deprecated

***

## Possible returns

* edges

  [\[Collection​Publication​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublicationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Collection​Publication!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CollectionPublication)

  non-null

  A list of nodes that are contained in CollectionPublicationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Possible returns

* <->[Collection​Publication​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection#returns-edges)
* <->[Collection​Publication​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection#returns-nodes)
* <->[Collection​Publication​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CollectionPublicationConnection#returns-pageInfo)
