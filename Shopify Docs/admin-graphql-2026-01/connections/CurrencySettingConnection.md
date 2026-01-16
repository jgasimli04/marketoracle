---
title: CurrencySettingConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple CurrencySettings.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection.md
---

# Currency​Setting​Connection

connection

An auto-generated type for paginating through multiple CurrencySettings.

## Fields with this connection

* [Shop.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.currencySettings)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

## Possible returns

* edges

  [\[Currency​Setting​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySettingEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Currency​Setting!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencySetting)

  non-null

  A list of nodes that are contained in CurrencySettingEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Shop.currencySettings](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.currencySettings)

### Possible returns

* <->[Currency​Setting​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection#returns-edges)
* <->[Currency​Setting​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection#returns-nodes)
* <->[Currency​Setting​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CurrencySettingConnection#returns-pageInfo)
