---
title: MetafieldRelationConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple MetafieldRelations.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection.md
---

# Metafield​Relation​Connection

connection

An auto-generated type for paginating through multiple MetafieldRelations.

## Fields with this connection

* [Metaobject.referencedBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.referencedBy)

  OBJECT

  An instance of custom structured data defined by a [`MetaobjectDefinition`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectDefinition). [Metaobjects](https://shopify.dev/docs/apps/build/custom-data#what-are-metaobjects) store reusable data that extends beyond Shopify's standard resources, such as product highlights, size charts, or custom content sections.

  Each metaobject includes fields that match the field types and validation rules specified in its definition, which also determines the metaobject's capabilities, such as storefront visibility, publishing and translation support. [`Metafields`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) can reference metaobjects to connect custom data with [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) objects, [`Collection`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection) objects, and other Shopify resources.

***

## Possible returns

* edges

  [\[Metafield​Relation​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelationEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Relation!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldRelation)

  non-null

  A list of nodes that are contained in MetafieldRelationEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Metaobject.referencedBy](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metaobject#field-Metaobject.fields.referencedBy)

### Possible returns

* <->[Metafield​Relation​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection#returns-edges)
* <->[Metafield​Relation​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection#returns-nodes)
* <->[Metafield​Relation​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldRelationConnection#returns-pageInfo)
