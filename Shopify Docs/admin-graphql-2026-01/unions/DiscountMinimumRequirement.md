---
title: DiscountMinimumRequirement - GraphQL Admin
description: >-
  The type of minimum requirement that must be met for the discount to be
  applied. For example, a customer must spend a minimum subtotal to be eligible
  for the discount. Alternatively, a customer must purchase a minimum quantity
  of items to be eligible for the discount.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountMinimumRequirement.md
---

# Discount​Minimum​Requirement

union

Requires Apps must have `read_discounts` access scope.

The type of minimum requirement that must be met for the discount to be applied. For example, a customer must spend a minimum subtotal to be eligible for the discount. Alternatively, a customer must purchase a minimum quantity of items to be eligible for the discount.

## Possible types

* [Discount​Minimum​Quantity](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMinimumQuantity)

  OBJECT

  Specifies the minimum item quantity required for discount eligibility, helping merchants create volume-based promotions that encourage larger purchases. This threshold applies to qualifying items in the customer's cart.

  For example, a "Buy 3, Get 10% Off" promotion would set the minimum quantity to 3 items.

  Learn more about [discount requirements](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).

  * greater​Than​Or​Equal​To​Quantity

    [Unsigned​Int64!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/UnsignedInt64)

    non-null

    The minimum quantity of items that's required for the discount to be applied.

* [Discount​Minimum​Subtotal](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountMinimumSubtotal)

  OBJECT

  The minimum subtotal required for the discount to apply.

  * greater​Than​Or​Equal​To​Subtotal

    [Money​V2!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MoneyV2)

    non-null

    The minimum subtotal that's required for the discount to be applied.

***

## Fields with this union

* [Discount​Automatic​Basic.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.minimumRequirement)

  OBJECT

  The `DiscountAutomaticBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are automatically applied on a cart and at checkout. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic) object has similar functionality to the `DiscountAutomaticBasic` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Free​Shipping.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.minimumRequirement)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping) object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Code​Basic.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.minimumRequirement)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) object has similar functionality to the `DiscountCodeBasic` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.minimumRequirement](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.minimumRequirement)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping) object has similar functionality to the `DiscountCodeFreeShipping` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

***

```graphql
union DiscountMinimumRequirement = DiscountMinimumQuantity | DiscountMinimumSubtotal
```
