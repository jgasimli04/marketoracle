---
title: TaxonomyValueConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple TaxonomyValues.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection.md
---

# Taxonomy​Value​Connection

connection

An auto-generated type for paginating through multiple TaxonomyValues.

## Fields with this connection

* [Taxonomy​Choice​List​Attribute.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyChoiceListAttribute#field-TaxonomyChoiceListAttribute.fields.values)

  OBJECT

  A Shopify product taxonomy choice list attribute.

***

## Possible returns

* edges

  [\[Taxonomy​Value​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValueEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Taxonomy​Value!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyValue)

  non-null

  A list of nodes that are contained in TaxonomyValueEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Taxonomy​Choice​List​Attribute.values](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyChoiceListAttribute#field-TaxonomyChoiceListAttribute.fields.values)

### Possible returns

* <->[Taxonomy​Value​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection#returns-edges)
* <->[Taxonomy​Value​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection#returns-nodes)
* <->[Taxonomy​Value​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyValueConnection#returns-pageInfo)
