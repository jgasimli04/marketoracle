---
title: MetafieldReferenceConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple MetafieldReferences.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection.md
---

# Metafield​Reference​Connection

connection

An auto-generated type for paginating through multiple MetafieldReferences.

## Fields with this connection

* [Metafield.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.references)

  OBJECT

  Metafields enable you to attach additional information to a Shopify resource, such as a [Product](https://shopify.dev/api/admin-graphql/latest/objects/product) or a [Collection](https://shopify.dev/api/admin-graphql/latest/objects/collection). For more information about where you can attach metafields refer to [HasMetafields](https://shopify.dev/api/admin-graphql/latest/interfaces/HasMetafields). Some examples of the data that metafields enable you to store are specifications, size charts, downloadable documents, release dates, images, or part numbers. Metafields are identified by an owner resource, namespace, and key. and store a value along with type information for that value.

* [Metaobject​Field.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.references)

  OBJECT

  Provides a field definition and the data value assigned to it.

***

## Possible returns

* edges

  [\[Metafield​Reference​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetafieldReferenceEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Metafield​Reference\]!](https://shopify.dev/docs/api/admin-graphql/latest/unions/MetafieldReference)

  non-null

  A list of nodes that are contained in MetafieldReferenceEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Metafield.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield#field-Metafield.fields.references)
* {}[Metaobject​Field.references](https://shopify.dev/docs/api/admin-graphql/latest/objects/MetaobjectField#field-MetaobjectField.fields.references)

### Possible returns

* <->[Metafield​Reference​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection#returns-edges)
* <->[Metafield​Reference​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection#returns-nodes)
* <->[Metafield​Reference​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/MetafieldReferenceConnection#returns-pageInfo)
