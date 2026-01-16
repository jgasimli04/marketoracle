---
title: PricingValue - GraphQL Admin
description: >-
  The type of value given to a customer when a discount is applied to an order.
  For example, the application of the discount might give the customer a
  percentage off a specified item. Alternatively, the application of the
  discount might give the customer a monetary value in a given currency off an
  order.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/PricingValue.md'
---

# Pricing​Value

union

The type of value given to a customer when a discount is applied to an order. For example, the application of the discount might give the customer a percentage off a specified item. Alternatively, the application of the discount might give the customer a monetary value in a given currency off an order.

## Possible types

* [Money​V2](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

  OBJECT

  A precise monetary value and its associated currency. Combines a decimal amount with a three-letter currency code to express prices, costs, and other financial values throughout the API. For example, 12.99 USD.

  * amount

    [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

    non-null

    A monetary value in decimal format, allowing for precise representation of cents or fractional currency. For example, 12.99.

  * currency​Code

    [Currency​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CurrencyCode)

    non-null

    The three-letter currency code that represents a world currency used in a store. Currency codes include standard [standard ISO 4217 codes](https://en.wikipedia.org/wiki/ISO_4217), legacy codes, and non-standard codes. For example, USD.

* [Pricing​Percentage​Value](https://shopify.dev/docs/api/admin-graphql/latest/objects/PricingPercentageValue)

  OBJECT

  One type of value given to a customer when a discount is applied to an order. The application of a discount with this value gives the customer the specified percentage off a specified item.

  * percentage

    [Float!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Float)

    non-null

    The percentage value of the object. This is a number between -100 (free) and 0 (no discount).

***

## Fields with this union

* [Automatic​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/AutomaticDiscountApplication#field-AutomaticDiscountApplication.fields.value)

  OBJECT

  Automatic discount applications capture the intentions of a discount that was automatically applied.

* [Calculated​Automatic​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedAutomaticDiscountApplication#field-CalculatedAutomaticDiscountApplication.fields.value)

  OBJECT

  A discount that is automatically applied to an order that is being edited.

* [Calculated​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/CalculatedDiscountApplication#fields-value)

  INTERFACE

  A [discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/discountapplication) involved in order editing that might be newly added or have new changes applied.

* [Calculated​Discount​Code​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedDiscountCodeApplication#field-CalculatedDiscountCodeApplication.fields.value)

  OBJECT

  A discount code that is applied to an order that is being edited.

* [Calculated​Manual​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedManualDiscountApplication#field-CalculatedManualDiscountApplication.fields.value)

  OBJECT

  Represents a discount that was manually created for an order that is being edited.

* [Calculated​Script​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedScriptDiscountApplication#field-CalculatedScriptDiscountApplication.fields.value)

  OBJECT

  A discount created by a Shopify script for an order that is being edited.

* [Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DiscountApplication#fields-value)

  INTERFACE

  Discount applications capture the intentions of a discount source at the time of application on an order's line items or shipping lines.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Discount​Code​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApplication#field-DiscountCodeApplication.fields.value)

  OBJECT

  Discount code applications capture the intentions of a discount code at the time that it is applied onto an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Manual​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/ManualDiscountApplication#field-ManualDiscountApplication.fields.value)

  OBJECT

  Manual discount applications capture the intentions of a discount that was manually created for an order.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

* [Order​Staged​Change​Add​Line​Item​Discount.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderStagedChangeAddLineItemDiscount#field-OrderStagedChangeAddLineItemDiscount.fields.value)

  OBJECT

  The discount applied to an item that was added during the current order edit.

* [Price​Rule.valueV2](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.valueV2)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

* [Script​Discount​Application.value](https://shopify.dev/docs/api/admin-graphql/latest/objects/ScriptDiscountApplication#field-ScriptDiscountApplication.fields.value)

  OBJECT

  Script discount applications capture the intentions of a discount that was created by a Shopify Script for an order's line item or shipping line.

  Discount applications don't represent the actual final amount discounted on a line (line item or shipping line). The actual amount discounted on a line is represented by the [DiscountAllocation](https://shopify.dev/api/admin-graphql/latest/objects/discountallocation) object.

***

```graphql
union PricingValue = MoneyV2 | PricingPercentageValue
```
