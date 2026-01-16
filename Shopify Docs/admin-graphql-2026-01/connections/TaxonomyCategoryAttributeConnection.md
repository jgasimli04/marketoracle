---
title: TaxonomyCategoryAttributeConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  TaxonomyCategoryAttributes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection.md
---

# Taxonomy​Category​Attribute​Connection

connection

An auto-generated type for paginating through multiple TaxonomyCategoryAttributes.

## Fields with this connection

* [Taxonomy​Category.attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory#field-TaxonomyCategory.fields.attributes)

  OBJECT

  A product category within Shopify's [standardized product taxonomy](https://shopify.github.io/product-taxonomy/releases/unstable/?categoryId=sg-4-17-2-17). Provides hierarchical organization through parent-child relationships, with each category tracking its ancestors, children, and level in the taxonomy tree.

  Categories include attributes specific to their product type and navigation properties like whether they're root, leaf, or archived categories. The taxonomy enables consistent product classification across Shopify and integrated marketplaces.

***

## Possible returns

* edges

  [\[Taxonomy​Category​Attribute​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategoryAttributeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Taxonomy​Category​Attribute!\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/TaxonomyCategoryAttribute)

  non-null

  A list of nodes that are contained in TaxonomyCategoryAttributeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Taxonomy​Category.attributes](https://shopify.dev/docs/api/admin-graphql/latest/objects/TaxonomyCategory#field-TaxonomyCategory.fields.attributes)

### Possible returns

* <->[Taxonomy​Category​Attribute​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-edges)
* <->[Taxonomy​Category​Attribute​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-nodes)
* <->[Taxonomy​Category​Attribute​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/TaxonomyCategoryAttributeConnection#returns-pageInfo)
