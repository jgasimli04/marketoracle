---
title: DraftOrderLineItemConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DraftOrderLineItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection.md
---

# Draft​Order​Line​Item​Connection

connection

An auto-generated type for paginating through multiple DraftOrderLineItems.

## Fields with this connection

* [Draft​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems)

  OBJECT

  An order that a merchant creates on behalf of a customer. Draft orders are useful for merchants that need to do the following tasks:

  * Create new orders for sales made by phone, in person, by chat, or elsewhere. When a merchant accepts payment for a draft order, an order is created.
  * Send invoices to customers to pay with a secure checkout link.
  * Use custom items to represent additional costs or products that aren't displayed in a shop's inventory.
  * Re-create orders manually from active sales channels.
  * Sell products at discount or wholesale rates.
  * Take pre-orders.

  For draft orders in multiple currencies `presentment_money` is the source of truth for what a customer is going to be charged and `shop_money` is an estimate of what the merchant might receive in their shop currency.

  **Caution:** Only use this data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/api/usage/access-scopes) for apps that don't have a legitimate use for the associated data.

  Draft orders created on or after April 1, 2025 will be automatically purged after one year of inactivity.

***

## Possible returns

* edges

  [\[Draft​Order​Line​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Draft​Order​Line​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderLineItem)

  non-null

  A list of nodes that are contained in DraftOrderLineItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Draft​Order.lineItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.lineItems)

### Possible returns

* <->[Draft​Order​Line​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection#returns-edges)
* <->[Draft​Order​Line​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection#returns-nodes)
* <->[Draft​Order​Line​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DraftOrderLineItemConnection#returns-pageInfo)
