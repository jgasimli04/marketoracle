---
title: DraftOrderStatus - GraphQL Admin
description: The valid statuses for a draft order.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DraftOrderStatus.md'
---

# Draft​Order​Status

enum

The valid statuses for a draft order.

## Valid values

* COMPLETED

  The draft order has been paid.

* INVOICE\_​SENT

  An invoice for the draft order has been sent to the customer.

* OPEN

  The draft order is open. It has not been paid, and an invoice hasn't been sent.

***

## Fields

* [Draft​Order.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.status)

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

## Map

### Fields with this enum

* <-|[Draft​Order.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.status)
