---
title: SaleLineType - GraphQL Admin
description: >-
  The possible line types for a sale record. One of the possible order line
  types for a sale is an adjustment. Sales adjustments occur when a refund is
  issued for a line item that is either more or less than the total value of the
  line item. Examples are restocking fees and goodwill payments. When this
  happens, Shopify produces a sales agreement with sale records for each line
  item that is returned or refunded and an additional sale record for the
  adjustment (for example, a restocking fee). The sales records for the returned
  or refunded items represent the reversal of the original line item sale value.
  The additional adjustment sale record represents the difference between the
  original total value of all line items that were refunded, and the actual
  amount refunded.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/SaleLineType.md'
---

# Sale​Line​Type

enum

The possible line types for a sale record. One of the possible order line types for a sale is an adjustment. Sales adjustments occur when a refund is issued for a line item that is either more or less than the total value of the line item. Examples are restocking fees and goodwill payments. When this happens, Shopify produces a sales agreement with sale records for each line item that is returned or refunded and an additional sale record for the adjustment (for example, a restocking fee). The sales records for the returned or refunded items represent the reversal of the original line item sale value. The additional adjustment sale record represents the difference between the original total value of all line items that were refunded, and the actual amount refunded.

## Valid values

* ADDITIONAL\_​FEE

  An additional fee.

* ADJUSTMENT

  A sale adjustment.

* DUTY

  A duty charge.

* FEE

  A fee charge.

* GIFT\_​CARD

  A gift card.

* PRODUCT

  A product purchased, returned or exchanged.

* SHIPPING

  A shipping cost.

* TIP

  A tip added by the customer.

* UNKNOWN

  An unknown sale line. Represents new types that may be added in future versions.

***

## Fields

* [Additional​Fee​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.lineType)

  OBJECT

  A sale associated with an additional fee charge.

* [Adjustment​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.lineType)

  OBJECT

  A sale associated with an order price adjustment.

* [Duty​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DutySale#field-DutySale.fields.lineType)

  OBJECT

  A sale associated with a duty charge.

* [Fee​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/FeeSale#field-FeeSale.fields.lineType)

  OBJECT

  A sale associated with a fee.

* [Gift​Card​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSale#field-GiftCardSale.fields.lineType)

  OBJECT

  A sale associated with a gift card.

* [Product​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSale#field-ProductSale.fields.lineType)

  OBJECT

  A sale associated with a product.

* [Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/Sale#fields-lineType)

  INTERFACE

  An individual sale record associated with a sales agreement. Every money value in an order's sales data is represented in the currency's smallest unit. When amounts are divided across multiple line items, such as taxes or order discounts, the amounts might not divide evenly across all of the line items on the order. To address this, the remaining currency units that couldn't be divided evenly are allocated one at a time, starting with the first line item, until they are all accounted for. In aggregate, the values sum up correctly. In isolation, one line item might have a different tax or discount amount than another line item of the same price, before taxes and discounts. This is because the amount could not be divided evenly across the items. The allocation of currency units across line items is immutable. After they are allocated, currency units are never reallocated or redistributed among the line items.

* [Shipping​Line​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.lineType)

  OBJECT

  A sale associated with a shipping charge.

* [Tip​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale#field-TipSale.fields.lineType)

  OBJECT

  A sale associated with a tip.

* [Unknown​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnknownSale#field-UnknownSale.fields.lineType)

  OBJECT

  This is represents new sale types that have been added in future API versions. You may update to a more recent API version to receive additional details about this sale.

***

## Map

### Fields with this enum

* <-|[Additional​Fee​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdditionalFeeSale#field-AdditionalFeeSale.fields.lineType)
* <-|[Adjustment​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/AdjustmentSale#field-AdjustmentSale.fields.lineType)
* <-|[Duty​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/DutySale#field-DutySale.fields.lineType)
* <-|[Fee​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/FeeSale#field-FeeSale.fields.lineType)
* <-|[Gift​Card​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSale#field-GiftCardSale.fields.lineType)
* <-|[Product​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductSale#field-ProductSale.fields.lineType)
* <-|[Shipping​Line​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLineSale#field-ShippingLineSale.fields.lineType)
* <-|[Tip​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/TipSale#field-TipSale.fields.lineType)
* <-|[Unknown​Sale.lineType](https://shopify.dev/docs/api/admin-graphql/latest/objects/UnknownSale#field-UnknownSale.fields.lineType)
