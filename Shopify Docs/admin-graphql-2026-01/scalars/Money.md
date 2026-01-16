---
title: Money - GraphQL Admin
description: >-
  A monetary value string without a currency symbol or code. Example value:
  `"100.57"`.
api_version: 2026-01
api_name: admin
type: scalar
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money.md'
---

# Money

scalar

A monetary value string without a currency symbol or code. Example value: `"100.57"`.

## Map

### Fields with this scalar

* <-|[Price​Rule​Fixed​Amount​Value.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleFixedAmountValue#field-PriceRuleFixedAmountValue.fields.amount)
* <-|[Price​Rule​Money​Range.greaterThan](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange#field-PriceRuleMoneyRange.fields.greaterThan)
* <-|[Price​Rule​Money​Range.greaterThanOrEqualTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange#field-PriceRuleMoneyRange.fields.greaterThanOrEqualTo)
* <-|[Price​Rule​Money​Range.lessThan](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange#field-PriceRuleMoneyRange.fields.lessThan)
* <-|[Price​Rule​Money​Range.lessThanOrEqualTo](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRuleMoneyRange#field-PriceRuleMoneyRange.fields.lessThanOrEqualTo)
* <-|[Product​Variant.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.compareAtPrice)
* <-|[Product​Variant.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/ProductVariant#field-ProductVariant.fields.price)

### Inputs with this scalar

* [Draft​Order​Applied​Discount​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderAppliedDiscountInput#fields-amount)
* [Draft​Order​Line​Item​Input.originalUnitPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderLineItemInput#fields-originalUnitPrice)
* [Order​Capture​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCaptureInput#fields-amount)
* [Order​Transaction​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderTransactionInput#fields-amount)
* [Price​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PriceInput#fields-price)
* [Product​Variant​Set​Input.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-compareAtPrice)
* [Product​Variant​Set​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantSetInput#fields-price)
* [Product​Variants​Bulk​Input.compareAtPrice](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-compareAtPrice)
* [Product​Variants​Bulk​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ProductVariantsBulkInput#fields-price)
* [Shipping​Line​Input.price](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingLineInput#fields-price)
* [Shipping​Refund​Input.amount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingRefundInput#fields-amount)

### Arguments with this scalar

* <-|[Order.suggestedRefund(shippingAmount)](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.suggestedRefund.arguments.shippingAmount)
