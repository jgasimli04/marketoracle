---
title: LocalizationExtensionConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple LocalizationExtensions.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection.md
---

# Localization​Extension​Connection

connection

An auto-generated type for paginating through multiple LocalizationExtensions.

## Fields with this connection

### Deprecated fields with this connection

* [Draft​Order.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizationExtensions)

  OBJECT

  Deprecated

* [Has​Localization​Extensions.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizationExtensions#fields-localizationExtensions)

  INTERFACE

  Deprecated

* [Order.localizationExtensions](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizationExtensions)

  OBJECT

  Deprecated

***

## Possible returns

* edges

  [\[Localization​Extension​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtensionEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Localization​Extension!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtension)

  non-null

  A list of nodes that are contained in LocalizationExtensionEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Possible returns

* <->[Localization​Extension​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection#returns-edges)
* <->[Localization​Extension​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection#returns-nodes)
* <->[Localization​Extension​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizationExtensionConnection#returns-pageInfo)
