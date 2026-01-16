---
title: NotificationUsage - GraphQL Admin
description: >-
  The valid values for the notification usage, specifying the intended
  notification environment usage for certain operations.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/NotificationUsage'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/NotificationUsage.md'
---

# Notification​Usage

enum

The valid values for the notification usage, specifying the intended notification environment usage for certain operations.

## Valid values

* SMS

  The notification environment is sms.

* WEB

  The notification environment is web.

***

## Fields

* [Order.statusPageUrl(notificationUsage)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.statusPageUrl.arguments.notificationUsage)

  ARGUMENT

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

### Arguments with this enum

* <-|[Order.statusPageUrl(notificationUsage)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.statusPageUrl.arguments.notificationUsage)
