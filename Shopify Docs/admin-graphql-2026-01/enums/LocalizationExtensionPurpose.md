---
title: LocalizationExtensionPurpose - GraphQL Admin
description: The purpose of a localization extension.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionPurpose
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/LocalizationExtensionPurpose.md
---

# Localization​Extension​Purpose

enum

The purpose of a localization extension.

## Valid values

* SHIPPING

  Extensions that are used for shipping purposes, for example, customs clearance.

* TAX

  Extensions that are used for taxes purposes, for example, invoicing.

***

## Fields

* [Draft​Order.localizationExtensions(purposes)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizationExtensions.arguments.purposes)

  ARGUMENT

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

* [Has​Localization​Extensions.localizationExtensions(purposes)](https://shopify.dev/docs/api/admin-graphql/latest/objects/HasLocalizationExtensions#field-HasLocalizationExtensions.fields.localizationExtensions.arguments.purposes)

  ARGUMENT

  Localization extensions associated with the specified resource. For example, the tax id for government invoice.

* [Localization​Extension.purpose](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtension#field-LocalizationExtension.fields.purpose)

  OBJECT

  Represents the value captured by a localization extension. Localization extensions are additional fields required by certain countries on international orders. For example, some countries require additional fields for customs information or tax identification numbers.

* [Order.localizationExtensions(purposes)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizationExtensions.arguments.purposes)

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

### Fields with this enum

* <-|[Localization​Extension.purpose](https://shopify.dev/docs/api/admin-graphql/latest/objects/LocalizationExtension#field-LocalizationExtension.fields.purpose)

### Arguments with this enum

* <-|[Draft​Order.localizationExtensions(purposes)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder#field-DraftOrder.fields.localizationExtensions.arguments.purposes)
* <-|[Has​Localization​Extensions.localizationExtensions(purposes)](https://shopify.dev/docs/api/admin-graphql/latest/objects/HasLocalizationExtensions#field-HasLocalizationExtensions.fields.localizationExtensions.arguments.purposes)
* <-|[Order.localizationExtensions(purposes)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.localizationExtensions.arguments.purposes)
