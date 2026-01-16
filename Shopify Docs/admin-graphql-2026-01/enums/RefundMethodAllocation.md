---
title: RefundMethodAllocation - GraphQL Admin
description: The different methods that a refund amount can be allocated to.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundMethodAllocation
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundMethodAllocation.md
---

# Refund​Method​Allocation

enum

The different methods that a refund amount can be allocated to.

## Valid values

* ORIGINAL\_​PAYMENT\_​METHODS

  The refund is to original payment methods.

* STORE\_​CREDIT

  The refund is to store credit.

***

## Fields

* [Order.suggestedRefund(refundMethodAllocation)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.suggestedRefund.arguments.refundMethodAllocation)

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

* [Return.suggestedFinancialOutcome(refundMethodAllocation)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.suggestedFinancialOutcome.arguments.refundMethodAllocation)

  ARGUMENT

  The `Return` object represents the intent of a buyer to ship one or more items from an order back to a merchant or a third-party fulfillment location. A return is associated with an [order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and can include multiple return [line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem). Each return has a [status](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps#return-statuses), which indicates the state of the return.

  Use the `Return` object to capture the financial, logistical, and business intent of a return. For example, you can identify eligible items for a return and issue customers a refund for returned items on behalf of the merchant.

  Learn more about providing a [return management workflow](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/build-return-management) for merchants. You can also manage [exchanges](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-exchanges), [reverse fulfillment orders](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-fulfillment-orders), and [reverse deliveries](https://shopify.dev/docs/apps/build/orders-fulfillment/returns-apps/manage-reverse-deliveries) on behalf of merchants.

***

## Map

### Arguments with this enum

* <-|[Order.suggestedRefund(refundMethodAllocation)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.suggestedRefund.arguments.refundMethodAllocation)
* <-|[Return.suggestedFinancialOutcome(refundMethodAllocation)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Return#field-Return.fields.suggestedFinancialOutcome.arguments.refundMethodAllocation)
