---
title: CustomerMomentConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple CustomerMoments.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection.md
---

# Customer​Moment​Connection

connection

An auto-generated type for paginating through multiple CustomerMoments.

## Fields with this connection

* [Customer​Journey​Summary.moments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-CustomerJourneySummary.fields.moments)

  OBJECT

  A [`CustomerJourney`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourney) through the online store leading up to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order). Tracks session data, attribution sources, and the timeline from first visit to purchase conversion.

  The summary includes the customer's position in their order history, days between first visit and order creation, and details about their first and last sessions. Use the [`moments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-moments) connection to access the complete timeline of customer interactions before the purchase.

***

## Possible returns

* edges

  [\[Customer​Moment​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerMomentEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Customer​Moment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CustomerMoment)

  non-null

  A list of nodes that are contained in CustomerMomentEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Customer​Journey​Summary.moments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerJourneySummary#field-CustomerJourneySummary.fields.moments)

### Possible returns

* <->[Customer​Moment​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection#returns-edges)
* <->[Customer​Moment​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection#returns-nodes)
* <->[Customer​Moment​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/CustomerMomentConnection#returns-pageInfo)
