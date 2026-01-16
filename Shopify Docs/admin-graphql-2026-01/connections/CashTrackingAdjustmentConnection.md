---
title: CashTrackingAdjustmentConnection - GraphQL Admin
description: >-
  An auto-generated type for paginating through multiple
  CashTrackingAdjustments.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection.md
---

# Cash​Tracking​Adjustment​Connection

connection

An auto-generated type for paginating through multiple CashTrackingAdjustments.

## Fields with this connection

* [Cash​Tracking​Session.adjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.adjustments)

  OBJECT

  Tracks the balance in a cash drawer for a point of sale device over the course of a shift.

***

## Possible returns

* edges

  [\[Cash​Tracking​Adjustment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustmentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Cash​Tracking​Adjustment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment)

  non-null

  A list of nodes that are contained in CashTrackingAdjustmentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Cash​Tracking​Session.adjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.adjustments)

### Possible returns

* <->[Cash​Tracking​Adjustment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#returns-edges)
* <->[Cash​Tracking​Adjustment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#returns-nodes)
* <->[Cash​Tracking​Adjustment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CashTrackingAdjustmentConnection#returns-pageInfo)
