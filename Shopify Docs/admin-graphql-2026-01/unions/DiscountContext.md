---
title: DiscountContext - GraphQL Admin
description: The type used to define which buyers can use the discount.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountContext.md'
---

# Discount​Context

union

Requires Apps must have `read_discounts` access scope.

The type used to define which buyers can use the discount.

## Possible types

* [Discount​Buyer​Selection​All](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountBuyerSelectionAll)

  OBJECT

  Indicates that a discount applies to all buyers without restrictions, enabling universal promotions that reach every customer. This selection removes buyer-specific limitations from discount eligibility.

  For example, a flash sale or grand opening promotion would target all buyers to maximize participation and store visibility.

  Learn more about [discount targeting](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountApplication).

  * all

    [Discount​Buyer​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountBuyerSelection)

    non-null

    All buyers are eligible for the discount.

* [Discount​Customers](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomers)

  OBJECT

  Defines customer targeting for discounts through specific individual customers. This object allows merchants to create exclusive discounts that are only available to explicitly selected customers.

  For example, a VIP customer appreciation discount might target specific high-value customers by individually selecting them, or a beta program discount could be offered to selected early adopters.

  Use `DiscountCustomers` to:

  * Target specific individual customers for exclusive promotions
  * Create personalized discount experiences for selected customers
  * Offer special discounts to VIP or loyal customers
  * Provide exclusive access to promotions for specific individuals

  This targeting method requires you to add each customer who should be eligible for the discount. For broader targeting based on customer attributes or segments, use [`DiscountCustomerSegments`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments) instead.

  Learn more about creating customer-specific discounts using [`discountCodeBasicCreate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicCreate) and [`discountCodeBasicUpdate`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/discountCodeBasicUpdate).

  * customers

    [\[Customer!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

    non-null

    The list of individual customers eligible for the discount.

* [Discount​Customer​Segments](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCustomerSegments)

  OBJECT

  Represents customer segments that are eligible to receive a specific discount, allowing merchants to target promotions to defined groups of customers. This enables personalized marketing campaigns based on customer behavior and characteristics.

  For example, a "VIP Customer 15% Off" promotion might target a segment of high-value repeat customers, while a "New Customer Welcome" discount could focus on first-time buyers.

  Segment-based discounts help merchants create more relevant promotional experiences and improve conversion rates by showing the right offers to the right customers at the right time.

  * segments

    [\[Segment!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/Segment)

    non-null

    The list of customer segments who are eligible for the discount.

***

## Fields with this union

* [Discount​Automatic​App.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp#field-DiscountAutomaticApp.fields.context)

  OBJECT

  The `DiscountAutomaticApp` object stores information about automatic discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountAutomaticApp`when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountCodeApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp) object has similar functionality to the `DiscountAutomaticApp` object, with the exception that `DiscountCodeApp` stores information about discount codes that are managed by an app using Shopify Functions.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Basic.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic#field-DiscountAutomaticBasic.fields.context)

  OBJECT

  The `DiscountAutomaticBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are automatically applied on a cart and at checkout. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountAutomaticBasic` object stores information about automatic amount off discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic) object has similar functionality to the `DiscountAutomaticBasic` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Bxgy.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy#field-DiscountAutomaticBxgy.fields.context)

  OBJECT

  The `DiscountAutomaticBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are automatically applied on a cart and at checkout. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountAutomaticBxgy` object stores information about automatic BXGY discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy) object has similar functionality to the `DiscountAutomaticBxgy` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Automatic​Free​Shipping.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.context)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping) object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Code​App.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.context)

  OBJECT

  The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp) object has similar functionality to the `DiscountCodeApp` object, with the exception that `DiscountAutomaticApp` stores information about automatic discounts that are managed by an app using Shopify Functions.

  ***

* [Discount​Code​Basic.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.context)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) object has similar functionality to the `DiscountCodeBasic` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Bxgy.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.context)

  OBJECT

  The `DiscountCodeBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy) object has similar functionality to the `DiscountCodeBxgy` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.context](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.context)

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
union DiscountContext = DiscountBuyerSelectionAll | DiscountCustomerSegments | DiscountCustomers
```
