---
title: OrderDisplayFulfillmentStatus - GraphQL Admin
description: Represents the order's aggregated fulfillment status for display purposes.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDisplayFulfillmentStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDisplayFulfillmentStatus.md
---

# Order​Display​Fulfillment​Status

enum

Represents the order's aggregated fulfillment status for display purposes.

## Valid values

* FULFILLED

  Displayed as **Fulfilled**. All the items in the order have been fulfilled.

* IN\_​PROGRESS

  Displayed as **In progress**. All of the items in the order have had a request for fulfillment sent to the fulfillment service or all of the items have been marked as in progress.

* ON\_​HOLD

  Displayed as **On hold**. All of the unfulfilled items in this order are on hold.

* OPEN

  Displayed as **Open**. None of the items in the order have been fulfilled. Replaced by "UNFULFILLED" status.

* PARTIALLY\_​FULFILLED

  Displayed as **Partially fulfilled**. Some of the items in the order have been fulfilled.

* PENDING\_​FULFILLMENT

  Displayed as **Pending fulfillment**. A request for fulfillment of some items awaits a response from the fulfillment service. Replaced by the "IN\_PROGRESS" status.

* REQUEST\_​DECLINED

  Displayed as **Request declined**. Some of the items in the order have been rejected for fulfillment by the fulfillment service.

* RESTOCKED

  Displayed as **Restocked**. All the items in the order have been restocked. Replaced by the "UNFULFILLED" status.

* SCHEDULED

  Displayed as **Scheduled**. All of the unfulfilled items in this order are scheduled for fulfillment at later time.

* UNFULFILLED

  Displayed as **Unfulfilled**. None of the items in the order have been fulfilled.

***

## Fields

* [Order.displayFulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFulfillmentStatus)

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

## Map

### Fields with this enum

* <-|[Order.displayFulfillmentStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFulfillmentStatus)
