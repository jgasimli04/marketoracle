---
title: StorefrontAccessTokenConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple StorefrontAccessTokens.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection.md
---

# Storefront​Access​Token​Connection

connection

An auto-generated type for paginating through multiple StorefrontAccessTokens.

## Fields with this connection

* [Shop.storefrontAccessTokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.storefrontAccessTokens)

  OBJECT

  The central configuration and settings hub for a Shopify store. Access business information, operational preferences, feature availability, and store-wide settings that control how the shop operates.

  Includes core business details like the shop name, contact emails, billing address, and currency settings. The shop configuration determines customer account requirements, available sales channels, enabled features, payment settings, and policy documents. Also provides access to shop-level resources such as staff members, fulfillment services, navigation settings, and storefront access tokens.

***

## Possible returns

* edges

  [\[Storefront​Access​Token​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessTokenEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Storefront​Access​Token!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/StorefrontAccessToken)

  non-null

  A list of nodes that are contained in StorefrontAccessTokenEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Shop.storefrontAccessTokens](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.storefrontAccessTokens)

### Possible returns

* <->[Storefront​Access​Token​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#returns-edges)
* <->[Storefront​Access​Token​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#returns-nodes)
* <->[Storefront​Access​Token​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/StorefrontAccessTokenConnection#returns-pageInfo)
