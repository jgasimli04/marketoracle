---
title: MoneyV2 - GraphQL Admin
description: >-
  A precise monetary value and its associated currency. Combines a decimal
  amount with a three-letter currency code to express prices, costs, and other
  financial values throughout the API. For example, 12.99 USD.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2.md'
---

# Money​V2

object

A precise monetary value and its associated currency. Combines a decimal amount with a three-letter currency code to express prices, costs, and other financial values throughout the API. For example, 12.99 USD.

## Fields

* amount

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  A monetary value in decimal format, allowing for precise representation of cents or fractional currency. For example, 12.99.

* currency​Code

  [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

  non-null

  The three-letter currency code that represents a world currency used in a store. Currency codes include standard [standard ISO 4217 codes](https://en.wikipedia.org/wiki/ISO_4217), legacy codes, and non-standard codes. For example, USD.

***

## Map

### Fields with this object

* {}[AppCredit.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppCredit#field-AppCredit.fields.amount)
* ||-[AppPurchase.price](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/AppPurchase#fields-price)
* {}[AppPurchaseOneTime.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppPurchaseOneTime#field-AppPurchaseOneTime.fields.price)
* {}[AppRecurringPricing.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRecurringPricing#field-AppRecurringPricing.fields.price)
* {}[AppRevenueAttributionRecord.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppRevenueAttributionRecord#field-AppRevenueAttributionRecord.fields.amount)
* {}[AppSubscriptionDiscount.priceAfterDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscount#field-AppSubscriptionDiscount.fields.priceAfterDiscount)
* {}[AppSubscriptionDiscountAmount.amount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionDiscountAmount#field-AppSubscriptionDiscountAmount.fields.amount)
* {}[AppUsagePricing.balanceUsed](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing#field-AppUsagePricing.fields.balanceUsed)
* {}[AppUsagePricing.cappedAmount](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsagePricing#field-AppUsagePricing.fields.cappedAmount)
* {}[AppUsageRecord.price](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppUsageRecord#field-AppUsageRecord.fields.price)
* {}[CalculatedDraftOrderLineItem.discountedTotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.discountedTotal)
* {}[CalculatedDraftOrderLineItem.originalTotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.originalTotal)
* {}[CalculatedDraftOrderLineItem.originalUnitPrice](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.originalUnitPrice)
* {}[CalculatedDraftOrderLineItem.originalUnitPriceWithCurrency](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.originalUnitPriceWithCurrency)
* {}[CalculatedDraftOrderLineItem.priceOverride](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.priceOverride)
* {}[CalculatedDraftOrderLineItem.totalDiscount](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDraftOrderLineItem#field-CalculatedDraftOrderLineItem.fields.totalDiscount)
* {}[CashTrackingAdjustment.cash](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingAdjustment#field-CashTrackingAdjustment.fields.cash)
* {}[CashTrackingSession.closingBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.closingBalance)
* {}[CashTrackingSession.expectedBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.expectedBalance)
* {}[CashTrackingSession.expectedClosingBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.expectedClosingBalance)
* {}[CashTrackingSession.expectedOpeningBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.expectedOpeningBalance)
* {}[CashTrackingSession.netCashSales](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.netCashSales)
* {}[CashTrackingSession.openingBalance](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.openingBalance)
* {}[CashTrackingSession.totalAdjustments](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.totalAdjustments)
* {}[CashTrackingSession.totalCashRefunds](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.totalCashRefunds)
* {}[CashTrackingSession.totalCashSales](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.totalCashSales)
* {}[CashTrackingSession.totalDiscrepancy](https://shopify.dev/docs/api/admin-graphql/latest/objects/CashTrackingSession#field-CashTrackingSession.fields.totalDiscrepancy)
* {}[Company.totalSpent](https://shopify.dev/docs/api/admin-graphql/latest/objects/Company#field-Company.fields.totalSpent)
* {}[CompanyLocation.totalSpent](https://shopify.dev/docs/api/admin-graphql/latest/objects/CompanyLocation#field-CompanyLocation.fields.totalSpent)
* {}[CurrencyExchangeAdjustment.adjustment](https://shopify.dev/docs/api/admin-graphql/latest/objects/CurrencyExchangeAdjustment#field-CurrencyExchangeAdjustment.fields.adjustment)

### Possible type in

* [Delivery​Condition​Criteria](https://shopify.dev/docs/api/admin-graphql/latest/unions/DeliveryConditionCriteria)
* [Pricing​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue)
* [Selling​Plan​Checkout​Charge​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanCheckoutChargeValue)
* [Selling​Plan​Pricing​Policy​Adjustment​Value](https://shopify.dev/docs/api/admin-graphql/latest/unions/SellingPlanPricingPolicyAdjustmentValue)
