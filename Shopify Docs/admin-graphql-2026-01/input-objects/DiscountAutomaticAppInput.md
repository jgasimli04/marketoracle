---
title: DiscountAutomaticAppInput - GraphQL Admin
description: >-
  The input fields for creating or updating an automatic discount

  that's managed by an app.


  Use these input fields when you need advanced, custom, or

  dynamic discount capabilities that aren't supported by

  [Shopify's native discount
  types](https://help.shopify.com/manual/discounts/discount-types).
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput.md
---

# Discount​Automatic​App​Input

input\_object

The input fields for creating or updating an automatic discount that's managed by an app.

Use these input fields when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

## Fields

* applies​On​One​Time​Purchase

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:true

  Whether the discount applies on one-time purchases.

* applies​On​Subscription

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the discount applies on subscription items. [Subscriptions](https://shopify.dev/docs/apps/launch/billing/subscription-billing/offer-subscription-discounts) enable customers to purchase products on a recurring basis.

* combines​With

  [Discount​Combines​With​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCombinesWithInput)

  The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

* context

  [Discount​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput)

  The context defining which buyers can use the discount. You can target specific customer IDs, customer segments, or make the discount available to all buyers. Discounts automatically apply on Point of Sale (POS) for Pro locations. For app discounts using Admin UI Extensions, merchants can control POS eligibility when the context is set to ALL.

* discount​Classes

  [\[Discount​Class!\]](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass)

  Determines which discount effects the discount can apply.

* ends​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount expires and is no longer available to customers. For discounts without a fixed expiration date, specify `null`.

* function​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The handle of the function providing the discount.

* metafields

  [\[Metafield​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MetafieldInput)

  Default:\[]

  Additional metafields to associate to the discount. [Metafields](https://shopify.dev/docs/apps/build/custom-data) provide dynamic function configuration with different parameters, such as `percentage` for a percentage discount. Merchants can set metafield values in the Shopify admin, which makes the discount function more flexible and customizable.

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  Default:1

  The number of billing cycles for which the discount can be applied, which is useful for subscription-based discounts. For example, if you set this field to `3`, then the discount only applies to the first three billing cycles of a subscription. If you specify `0`, then the discount applies indefinitely.

* starts​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount becomes active and is available to customers.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The discount's name that displays to merchants in the Shopify admin and to customers.

* function​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

No referencing types
