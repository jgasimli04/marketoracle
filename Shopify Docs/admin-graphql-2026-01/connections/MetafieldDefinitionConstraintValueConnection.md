---
title: MetafieldDefinitionConstraintValueConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  MetafieldDefinitionConstraintValues.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection.md
---

# Metafield​Definition​Constraint​Value​Connection

connection

An auto-generated type for paginating through multiple MetafieldDefinitionConstraintValues.

## Fields with this connection

* [Metafield​Definition​Constraints.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraints#field-MetafieldDefinitionConstraints.fields.values)

  OBJECT

  The [constraints](https://shopify.dev/apps/build/custom-data/metafields/conditional-metafield-definitions) that determine what subtypes of resources a metafield definition applies to.

***

## Possible returns

* edges

  [\[Metafield​Definition​Constraint​Value​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraintValueEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Definition​Constraint​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraintValue)

  non-null

  A list of nodes that are contained in MetafieldDefinitionConstraintValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Metafield​Definition​Constraints.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldDefinitionConstraints#field-MetafieldDefinitionConstraints.fields.values)

### Possible returns

* <->[Metafield​Definition​Constraint​Value​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection#returns-edges)
* <->[Metafield​Definition​Constraint​Value​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection#returns-nodes)
* <->[Metafield​Definition​Constraint​Value​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldDefinitionConstraintValueConnection#returns-pageInfo)
