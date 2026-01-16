---
title: DiscountClass - GraphQL Admin
description: >-
  The [discount
  class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations)

  that's used to control how discounts can be combined.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountClass.md'
---

# Discount​Class

enum

The [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) that's used to control how discounts can be combined.

## Valid values

* ORDER

  The discount is combined with an [order discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

* PRODUCT

  The discount is combined with a [product discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

* SHIPPING

  The discount is combined with a [shipping discount](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations) class.

***

## Fields

* [App​Discount​Type.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType#field-AppDiscountType.fields.discountClasses)

  OBJECT

  The details about the app extension that's providing the [discount type](https://help.shopify.com/manual/discounts/discount-types). This information includes the app extension's name and [client ID](https://shopify.dev/docs/apps/build/authentication-authorization/client-secrets), [App Bridge configuration](https://shopify.dev/docs/api/app-bridge), [discount class](https://help.shopify.com/manual/discounts/combining-discounts/discount-combinations), [function ID](https://shopify.dev/docs/apps/build/functions/input-output/metafields-for-input-queries), and other metadata about the discount type, including the discount type's name and description.

* [Discount​Automatic​App.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.discountClasses)

  OBJECT

  The `DiscountAutomaticApp` object stores information about automatic discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountAutomaticApp`when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountCodeApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp) object has similar functionality to the `DiscountAutomaticApp` object, with the exception that `DiscountCodeApp` stores information about discount codes that are managed by an app using Shopify Functions.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​App​Input.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-discountClasses)

  INPUT OBJECT

  The input fields for creating or updating an automatic discount that's managed by an app.

  Use these input fields when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

* [Discount​Automatic​Basic.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.discountClasses)

  OBJECT

  The `DiscountAutomaticBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are automatically applied on a cart and at checkout. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic) object has similar functionality to the `DiscountAutomaticBasic` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Bxgy.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.discountClasses)

  OBJECT

  The `DiscountAutomaticBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy) object has similar functionality to the `DiscountAutomaticBxgy` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Free​Shipping.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.discountClasses)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping) object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Code​App.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.discountClasses)

  OBJECT

  The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp) object has similar functionality to the `DiscountCodeApp` object, with the exception that `DiscountAutomaticApp` stores information about automatic discounts that are managed by an app using Shopify Functions.

  ***

* [Discount​Code​App​Input.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-discountClasses)

  INPUT OBJECT

  The input fields for creating or updating a code discount, where the discount type is provided by an app extension that uses [Shopify Functions](https://shopify.dev/docs/apps/build/functions).

  Use these input fields when you need advanced or custom discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

* [Discount​Code​Basic.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.discountClasses)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) object has similar functionality to the `DiscountCodeBasic` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Bxgy.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.discountClasses)

  OBJECT

  The `DiscountCodeBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy) object has similar functionality to the `DiscountCodeBxgy` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.discountClasses)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping) object has similar functionality to the `DiscountCodeFreeShipping` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Draft​Order​Platform​Discount.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount#field-DraftOrderPlatformDiscount.fields.discountClasses)

  OBJECT

  The platform discounts applied to the draft order.

* [Price​Rule.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountClasses)

  OBJECT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

### Deprecated fields

* [App​Discount​Type.discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType#field-AppDiscountType.fields.discountClass)

  OBJECT

  Deprecated

* [Discount​Automatic​App.discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.discountClass)

  OBJECT

  Deprecated

* [Discount​Code​App.discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.discountClass)

  OBJECT

  Deprecated

* [Draft​Order​Platform​Discount.discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount#field-DraftOrderPlatformDiscount.fields.discountClass)

  OBJECT

  Deprecated

* [Price​Rule.discountClass](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountClass)

  OBJECT

  Deprecated

***

## Map

### Fields with this enum

* <-|[App​Discount​Type.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppDiscountType#field-AppDiscountType.fields.discountClasses)
* <-|[Discount​Automatic​App.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.discountClasses)
* <-|[Discount​Automatic​Basic.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.discountClasses)
* <-|[Discount​Automatic​Bxgy.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.discountClasses)
* <-|[Discount​Automatic​Free​Shipping.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.discountClasses)
* <-|[Discount​Code​App.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.discountClasses)
* <-|[Discount​Code​Basic.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.discountClasses)
* <-|[Discount​Code​Bxgy.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.discountClasses)
* <-|[Discount​Code​Free​Shipping.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.discountClasses)
* <-|[Draft​Order​Platform​Discount.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrderPlatformDiscount#field-DraftOrderPlatformDiscount.fields.discountClasses)
* <-|[Price​Rule.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountClasses)

### Inputs with this enum

* [Discount​Automatic​App​Input.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountAutomaticAppInput#fields-discountClasses)
* [Discount​Code​App​Input.discountClasses](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DiscountCodeAppInput#fields-discountClasses)
