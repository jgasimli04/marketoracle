---
title: TaxonomyCategoryConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple TaxonomyCategories.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection.md
---

# Taxonomy​Category​Connection

connection

An auto-generated type for paginating through multiple TaxonomyCategories.

## Fields with this connection

* [Taxonomy.categories](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy#field-Taxonomy.fields.categories)

  OBJECT

  Represents Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17) tree. Provides categories that you can filter by search criteria or hierarchical relationships.

  You can search categories globally, retrieve children of a specific category, find siblings, or get descendants. When you specify no filter arguments, you get all top-level categories in the taxonomy.

***

## Possible returns

* edges

  [\[Taxonomy​Category​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Taxonomy​Category!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory)

  non-null

  A list of nodes that are contained in TaxonomyCategoryEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Taxonomy.categories](https://shopify.dev/docs/api/admin-graphql/latest/objects/Taxonomy#field-Taxonomy.fields.categories)

### Possible returns

* <->[Taxonomy​Category​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection#returns-edges)
* <->[Taxonomy​Category​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection#returns-nodes)
* <->[Taxonomy​Category​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryConnection#returns-pageInfo)
