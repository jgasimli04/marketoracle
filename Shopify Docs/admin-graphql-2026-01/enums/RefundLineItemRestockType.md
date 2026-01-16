---
title: RefundLineItemRestockType - GraphQL Admin
description: The type of restock performed for a particular refund line item.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundLineItemRestockType
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundLineItemRestockType.md
---

# Refund​Line​Item​Restock​Type

enum

The type of restock performed for a particular refund line item.

## Valid values

* CANCEL

  The refund line item was canceled. Use this when restocking unfulfilled line items.

* LEGACY\_​RESTOCK

  Deprecated. The refund line item was restocked, without specifically beingidentified as a return or cancelation. This value is not accepted when creating new refunds.

* NO\_​RESTOCK

  Refund line item was not restocked.

* RETURN

  The refund line item was returned. Use this when restocking line items that were fulfilled.

***

## Fields

* [Refund​Line​Item.restockType](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.restockType)

  OBJECT

  A [`Product`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product) or [`ProductVariant`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant) being refunded from an order. Each refund line item tracks the quantity, pricing, and restocking details for items returned to the merchant.

  The refund line item links to the original [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) from the [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) and includes financial information such as the refunded price, subtotal, and taxes in both shop and presentment currencies. The [`restockType`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.restockType) field indicates whether and how the merchant restocks the returned items to inventory, while the [`location`](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.location) field specifies where restocking occurs.

* [Refund​Line​Item​Input.restockType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundLineItemInput#fields-restockType)

  INPUT OBJECT

  The input fields required to reimburse line items on a refund.

***

## Map

### Fields with this enum

* <-|[Refund​Line​Item.restockType](https://shopify.dev/docs/api/admin-graphql/latest/objects/RefundLineItem#field-RefundLineItem.fields.restockType)

### Inputs with this enum

* [Refund​Line​Item​Input.restockType](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundLineItemInput#fields-restockType)
