---
title: SearchResultConnection - GraphQL Admin
description: The connection type for SearchResult.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SearchResultConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SearchResultConnection.md
---

# Search​Result​Connection

connection

The connection type for SearchResult.

## Fields with this connection

* [Shop.search](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.search)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

## Possible returns

* edges

  [\[Search​Result​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SearchResultEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

* results​After​Count

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-nullDeprecated

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Shop.search](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.search)

### Possible returns

* <->[Search​Result​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SearchResultConnection#returns-edges)
* <->[Search​Result​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SearchResultConnection#returns-pageInfo)
