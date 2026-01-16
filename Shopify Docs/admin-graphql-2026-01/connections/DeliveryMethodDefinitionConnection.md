---
title: DeliveryMethodDefinitionConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  DeliveryMethodDefinitions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection.md
---

# Delivery​Method​Definition​Connection

connection

An auto-generated type for paginating through multiple DeliveryMethodDefinitions.

## Fields with this connection

* [Delivery​Location​Group​Zone.methodDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone#field-DeliveryLocationGroupZone.fields.methodDefinitions)

  OBJECT

  Links a location group with a zone and the associated method definitions.

***

## Possible returns

* edges

  [\[Delivery​Method​Definition​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinitionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Delivery​Method​Definition!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryMethodDefinition)

  non-null

  A list of nodes that are contained in DeliveryMethodDefinitionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Delivery​Location​Group​Zone.methodDefinitions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DeliveryLocationGroupZone#field-DeliveryLocationGroupZone.fields.methodDefinitions)

### Possible returns

* <->[Delivery​Method​Definition​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection#returns-edges)
* <->[Delivery​Method​Definition​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection#returns-nodes)
* <->[Delivery​Method​Definition​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DeliveryMethodDefinitionConnection#returns-pageInfo)
