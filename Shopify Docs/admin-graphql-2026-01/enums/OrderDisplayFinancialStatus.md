---
title: OrderDisplayFinancialStatus - GraphQL Admin
description: Represents the order's current financial status.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDisplayFinancialStatus
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDisplayFinancialStatus.md
---

# Order​Display​Financial​Status

enum

Represents the order's current financial status.

## Valid values

* AUTHORIZED

  Displayed as **Authorized**. The payment provider has validated the customer's payment information. This status appears only for manual payment capture and indicates payments should be captured before the authorization period expires.

* EXPIRED

  Displayed as **Expired**. Payment wasn't captured before the payment provider's deadline on an authorized order. Some payment providers use this status to indicate failed payment processing.

* PAID

  Displayed as **Paid**. Payment was automatically or manually captured, or the order was marked as paid.

* PARTIALLY\_​PAID

  Displayed as **Partially paid**. A payment was manually captured for the order with an amount less than the full order value.

* PARTIALLY\_​REFUNDED

  Displayed as **Partially refunded**. The amount refunded to a customer is less than the full amount paid for an order.

* PENDING

  Displayed as **Pending**. Orders have this status when the payment provider needs time to complete the payment, or when manual payment methods are being used.

* REFUNDED

  Displayed as **Refunded**. The full amount paid for an order was refunded to the customer.

* VOIDED

  Displayed as **Voided**. An unpaid (payment authorized but not captured) order was manually canceled.

***

## Fields

* [Order.displayFinancialStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus)

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

* <-|[Order.displayFinancialStatus](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus)
