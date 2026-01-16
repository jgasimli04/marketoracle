---
title: AppConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple Apps.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection.md
---

# App​Connection

connection

An auto-generated type for paginating through multiple Apps.

## Fields with this connection

* [App​Catalog.apps](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps)

  OBJECT

  A catalog that defines the publication associated with an app.

* [Shop.availableChannelApps](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.availableChannelApps)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

## Possible returns

* edges

  [\[App​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/App)

  non-null

  A list of nodes that are contained in AppEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[App​Catalog.apps](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCatalog#field-AppCatalog.fields.apps)
* {}[Shop.availableChannelApps](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.availableChannelApps)

### Possible returns

* <->[App​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-edges)
* <->[App​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-nodes)
* <->[App​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppConnection#returns-pageInfo)
