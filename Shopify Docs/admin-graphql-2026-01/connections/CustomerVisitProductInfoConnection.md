---
title: CustomerVisitProductInfoConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  CustomerVisitProductInfos.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection.md
---

# Customer​Visit​Product​Info​Connection

connection

An auto-generated type for paginating through multiple CustomerVisitProductInfos.

## Fields with this connection

* [Abandonment.productsAddedToCart](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart)

  OBJECT

  Tracks a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s incomplete shopping journey, whether they abandoned while browsing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), adding items to cart, or during checkout. Provides data about the customer's behavior and products they interacted with.

  The abandonment includes fields that indicate whether the customer has completed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [draft orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) after the abandonment occurred. It also tracks when emails were sent and how long since the customer's last activity across different abandonment types.

* [Abandonment.productsViewed](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed)

  OBJECT

  Tracks a [customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)'s incomplete shopping journey, whether they abandoned while browsing [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), adding items to cart, or during checkout. Provides data about the customer's behavior and products they interacted with.

  The abandonment includes fields that indicate whether the customer has completed any [orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [draft orders](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder) after the abandonment occurred. It also tracks when emails were sent and how long since the customer's last activity across different abandonment types.

***

## Possible returns

* edges

  [\[Customer​Visit​Product​Info​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfoEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer​Visit​Product​Info!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerVisitProductInfo)

  non-null

  A list of nodes that are contained in CustomerVisitProductInfoEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Abandonment.productsAddedToCart](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsAddedToCart)
* {}[Abandonment.productsViewed](https://shopify.dev/docs/api/admin-graphql/latest/objects/Abandonment#field-Abandonment.fields.productsViewed)

### Possible returns

* <->[Customer​Visit​Product​Info​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection#returns-edges)
* <->[Customer​Visit​Product​Info​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection#returns-nodes)
* <->[Customer​Visit​Product​Info​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerVisitProductInfoConnection#returns-pageInfo)
