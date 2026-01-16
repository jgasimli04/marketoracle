---
title: DiscountStatus - GraphQL Admin
description: |-
  The status of the discount that describes its availability,
  expiration, or pending activation.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountStatus.md'
---

# Discount​Status

enum

The status of the discount that describes its availability, expiration, or pending activation.

## Valid values

* ACTIVE

  The discount is currently available for use.

* EXPIRED

  The discount has reached its end date and is no longer valid.

* SCHEDULED

  The discount is set to become active at a future date.

***

## Fields

* [Discount​Automatic​App.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.status)

  OBJECT

  The `DiscountAutomaticApp` object stores information about automatic discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountAutomaticApp`when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountCodeApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp) object has similar functionality to the `DiscountAutomaticApp` object, with the exception that `DiscountCodeApp` stores information about discount codes that are managed by an app using Shopify Functions.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Basic.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.status)

  OBJECT

  The `DiscountAutomaticBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are automatically applied on a cart and at checkout. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic) object has similar functionality to the `DiscountAutomaticBasic` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Bxgy.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.status)

  OBJECT

  The `DiscountAutomaticBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy) object has similar functionality to the `DiscountAutomaticBxgy` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Free​Shipping.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.status)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping) object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Code​App.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.status)

  OBJECT

  The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp) object has similar functionality to the `DiscountCodeApp` object, with the exception that `DiscountAutomaticApp` stores information about automatic discounts that are managed by an app using Shopify Functions.

  ***

* [Discount​Code​Basic.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.status)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) object has similar functionality to the `DiscountCodeBasic` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Bxgy.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.status)

  OBJECT

  The `DiscountCodeBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy) object has similar functionality to the `DiscountCodeBxgy` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.status)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping) object has similar functionality to the `DiscountCodeFreeShipping` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

***

## Map

### Fields with this enum

* <-|[Discount​Automatic​App.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.status)
* <-|[Discount​Automatic​Basic.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.status)
* <-|[Discount​Automatic​Bxgy.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.status)
* <-|[Discount​Automatic​Free​Shipping.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.status)
* <-|[Discount​Code​App.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.status)
* <-|[Discount​Code​Basic.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.status)
* <-|[Discount​Code​Bxgy.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.status)
* <-|[Discount​Code​Free​Shipping.status](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.status)
