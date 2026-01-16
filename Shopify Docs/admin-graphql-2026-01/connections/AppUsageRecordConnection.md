---
title: AppUsageRecordConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple AppUsageRecords.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection.md
---

# App​Usage​Record​Connection

connection

An auto-generated type for paginating through multiple AppUsageRecords.

## Fields with this connection

* [App​Subscription​Line​Item.usageRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords)

  OBJECT

  Represents a component of an app subscription that contains pricing details for either recurring fees or usage-based charges. Each subscription has exactly 1 or 2 line items - one for recurring fees and/or one for usage fees.

  If a subscription has both recurring and usage pricing, there will be 2 line items. If it only has one type of pricing, the subscription will have a single line item for that pricing model.

  Use the `AppSubscriptionLineItem` object to:

  * View the pricing terms a merchant has agreed to
  * Distinguish between recurring and usage fee components
  * Access detailed billing information for each pricing component

  This read-only object provides visibility into the subscription's pricing structure without allowing modifications.

  Read about subscription pricing models in the [billing architecture guide](https://shopify.dev/docs/apps/launch/billing/subscription-billing).

***

## Possible returns

* edges

  [\[App​Usage​Record​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecordEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[App​Usage​Record!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord)

  non-null

  A list of nodes that are contained in AppUsageRecordEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[App​Subscription​Line​Item.usageRecords](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionLineItem#field-AppSubscriptionLineItem.fields.usageRecords)

### Possible returns

* <->[App​Usage​Record​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection#returns-edges)
* <->[App​Usage​Record​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection#returns-nodes)
* <->[App​Usage​Record​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/AppUsageRecordConnection#returns-pageInfo)
