---
title: AppPurchaseOneTimeConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple AppPurchaseOneTimes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection.md
---

# App​Purchase​One​Time​Connection

connection

An auto-generated type for paginating through multiple AppPurchaseOneTimes.

## Fields with this connection

* [App​Installation.oneTimePurchases](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases)

  OBJECT

  An app installed on a shop. Each installation tracks the permissions granted to the app through [`AccessScope`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AccessScope) objects, along with billing subscriptions and [`Metafield`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Metafield) objects.

  The installation provides metafields that only the owning [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) can access. These metafields store app-specific configuration that merchants and other apps can't modify. The installation also provides URLs for launching and uninstalling the app, along with any active [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription) objects or [`AppPurchaseOneTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime) purchases.

***

## Possible returns

* edges

  [\[App​Purchase​One​Time​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTimeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Purchase​One​Time!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime)

  non-null

  A list of nodes that are contained in AppPurchaseOneTimeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[App​Installation.oneTimePurchases](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppInstallation#field-AppInstallation.fields.oneTimePurchases)

### Possible returns

* <->[App​Purchase​One​Time​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-edges)
* <->[App​Purchase​One​Time​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-nodes)
* <->[App​Purchase​One​Time​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppPurchaseOneTimeConnection#returns-pageInfo)
