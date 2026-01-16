---
title: SellingPlanConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple SellingPlans.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection.md
---

# Selling​Plan​Connection

connection

An auto-generated type for paginating through multiple SellingPlans.

## Fields with this connection

* [Selling​Plan​Group.sellingPlans](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.sellingPlans)

  OBJECT

  A selling method that defines how products can be sold through purchase options like subscriptions, pre-orders, or try-before-you-buy. Groups one or more [`SellingPlan`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan) objects that share the same selling method and options.

  The group provides buyer-facing labels and merchant-facing descriptions for the selling method. Associates [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) and [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) objects with selling plan groups to offer them through these purchase options.

  ***

  Caution

  Selling plan groups and their associated records are automatically deleted 48 hours after a merchant uninstalls the [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) that created them. Back up these records if you need to restore them later.

  ***

***

## Possible returns

* edges

  [\[Selling​Plan​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Selling​Plan!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlan)

  non-null

  A list of nodes that are contained in SellingPlanEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Selling​Plan​Group.sellingPlans](https://shopify.dev/docs/api/admin-graphql/latest/objects/SellingPlanGroup#field-SellingPlanGroup.fields.sellingPlans)

### Possible returns

* <->[Selling​Plan​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#returns-edges)
* <->[Selling​Plan​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#returns-nodes)
* <->[Selling​Plan​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/SellingPlanConnection#returns-pageInfo)
