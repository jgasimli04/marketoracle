---
title: SaleActionType - GraphQL Admin
description: The possible order action types for a sale.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleActionType.md'
---

# Sale​Action​Type

enum

The possible order action types for a sale.

## Valid values

* ORDER

  A purchase or charge.

* RETURN

  A removal or return.

* UNKNOWN

  An unknown order action. Represents new actions that may be added in future versions.

* UPDATE

  A change to the price, taxes, or discounts for a prior purchase.

***

## Fields

* [Additional​Fee​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.actionType)

  OBJECT

  A sale associated with an additional fee charge.

* [Adjustment​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.actionType)

  OBJECT

  A sale associated with an order price adjustment.

* [Duty​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DutySale#field-DutySale.fields.actionType)

  OBJECT

  A sale associated with a duty charge.

* [Fee​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/FeeSale#field-FeeSale.fields.actionType)

  OBJECT

  A sale associated with a fee.

* [Gift​Card​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSale#field-GiftCardSale.fields.actionType)

  OBJECT

  A sale associated with a gift card.

* [Product​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSale#field-ProductSale.fields.actionType)

  OBJECT

  A sale associated with a product.

* [Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale#fields-actionType)

  INTERFACE

  An individual sale record associated with a sales agreement. Every money value in an order's sales data is represented in the currency's smallest unit. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items.

* [Shipping​Line​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.actionType)

  OBJECT

  A sale associated with a shipping charge.

* [Tip​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale#field-TipSale.fields.actionType)

  OBJECT

  A sale associated with a tip.

* [Unknown​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnknownSale#field-UnknownSale.fields.actionType)

  OBJECT

  This is represents new sale types that have been added in future API versions. You may update to a more recent API version to receive additional details about this sale.

***

## Map

### Fields with this enum

* <-|[Additional​Fee​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.actionType)
* <-|[Adjustment​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.actionType)
* <-|[Duty​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DutySale#field-DutySale.fields.actionType)
* <-|[Fee​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/FeeSale#field-FeeSale.fields.actionType)
* <-|[Gift​Card​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSale#field-GiftCardSale.fields.actionType)
* <-|[Product​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSale#field-ProductSale.fields.actionType)
* <-|[Shipping​Line​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.actionType)
* <-|[Tip​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale#field-TipSale.fields.actionType)
* <-|[Unknown​Sale.actionType](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnknownSale#field-UnknownSale.fields.actionType)
