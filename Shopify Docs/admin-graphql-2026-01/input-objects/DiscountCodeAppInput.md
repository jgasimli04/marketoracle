---
title: DiscountCodeAppInput - GraphQL Admin
description: >-
  The input fields for creating or updating a code discount, where the discount
  type is provided by an app extension that uses [Shopify
  Functions](https://shopify.dev/docs/apps/build/functions).


  Use these input fields when you need advanced or custom discount capabilities
  that aren't supported by [Shopify's native discount
  types](https://help.shopify.com/manual/discounts/discount-types).
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput.md
---

# Discount​Code​App​Input

input\_object

The input fields for creating or updating a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

Use these input fields when you need advanced or custom discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

## Fields

* applies​Once​Per​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether a customer can only use the discount once.

* applies​On​One​Time​Purchase

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:true

  Whether the discount applies on regular one-time-purchase items.

* applies​On​Subscription

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the discount applies to subscriptions items.

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The code that customers use to apply the discount.

* combines​With

  [Discount​Combines​With​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCombinesWithInput)

  The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

* context

  [Discount​Context​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountContextInput)

  The context defining which buyers can use the discount. You can target specific customer IDs, customer segments, or make the discount available to all buyers.

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

  The number of times a discount applies on recurring purchases (subscriptions). 0 will apply infinitely whereas 1 will only apply to the first checkout.

* starts​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  The date and time when the discount becomes active and is available to customers.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The discount's name that displays to merchants in the Shopify admin and to customers.

* usage​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times that a customer can use the discount. For discounts with unlimited usage, specify `null`.

### Deprecated fields

* customer​Selection

  [Discount​Customer​Selection​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCustomerSelectionInput)

  Deprecated

* function​Id

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Deprecated

***

## Map

No referencing types
