---
title: LocalizedFieldConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple LocalizedFields.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection.md
---

# Localized​Field​Connection

connection

An auto-generated type for paginating through multiple LocalizedFields.

## Fields with this connection

* [Draft​Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizedFields)

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

* [Has​Localized​Fields.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields#fields-localizedFields)

  INTERFACE

  Localized fields associated with the specified resource.

* [Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizedFields)

  OBJECT

  The `Order` object represents a customer's request to purchase one or more products from a store. Use the `Order` object to handle the complete purchase lifecycle from checkout to fulfillment.

  Use the `Order` object when you need to:

  * Display order details on customer account pages or admin dashboards.
  * Create orders for phone sales, wholesale customers, or subscription services.
  * Update order information like shipping addresses, notes, or fulfillment status.
  * Process returns, exchanges, and partial refunds.
  * Generate invoices, receipts, and shipping labels.

  The `Order` object serves as the central hub connecting customer information, product details, payment processing, and fulfillment data within the GraphQL Admin API schema.

  ***

  Note

  Only the last 60 days' worth of orders from a store are accessible from the `Order` object by default. If you want to access older records, then you need to [request access to all orders](https://shopify.dev/docs/api/usage/access-scopes#orders-permissions). If your app is granted access, then you can add the `read_all_orders`, `read_orders`, and `write_orders` scopes.

  ***

  ***

  Caution

  Only use orders data if it's required for your app's functionality. Shopify will restrict [access to scopes](https://shopify.dev/docs/api/usage/access-scopes#requesting-specific-permissions) for apps that don't have a legitimate use for the associated data.

  ***

  Learn more about [building apps for orders and fulfillment](https://shopify.dev/docs/apps/build/orders-fulfillment).

***

## Possible returns

* edges

  [\[Localized​Field​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedFieldEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Localized​Field!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizedField)

  non-null

  A list of nodes that are contained in LocalizedFieldEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Draft​Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizedFields)
* ||-[Has​Localized​Fields.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/HasLocalizedFields#fields-localizedFields)
* {}[Order.localizedFields](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizedFields)

### Possible returns

* <->[Localized​Field​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection#returns-edges)
* <->[Localized​Field​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection#returns-nodes)
* <->[Localized​Field​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/LocalizedFieldConnection#returns-pageInfo)
