---
title: DiscountCombinesWith - GraphQL Admin
description: >-
  The [discount
  classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)

  that you can use in combination with

  [Shopify discount
  types](https://help.shopify.com/manual/discounts/discount-types).
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCombinesWith.md
---

# Discount​Combines​With

object

Requires Apps must have `read_discounts` access scope.

The [discount classes](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that you can use in combination with [Shopify discount types](https://help.shopify.com/manual/discounts/discount-types).

## Fields

* order​Discounts

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount combines with the [order discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

* product​Discounts

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount combines with the [product discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

* shipping​Discounts

  [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  non-null

  Whether the discount combines with the [shipping discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

***

## Map

### Fields with this object

* {}[DiscountAutomaticApp.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.combinesWith)
* {}[DiscountAutomaticBasic.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.combinesWith)
* {}[DiscountAutomaticBxgy.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.combinesWith)
* {}[DiscountAutomaticFreeShipping.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.combinesWith)
* {}[DiscountCodeApp.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.combinesWith)
* {}[DiscountCodeBasic.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.combinesWith)
* {}[DiscountCodeBxgy.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.combinesWith)
* {}[DiscountCodeFreeShipping.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.combinesWith)
* {}[PriceRule.combinesWith](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.combinesWith)
