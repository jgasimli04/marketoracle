---
title: DiscountShippingDestinationSelection - GraphQL Admin
description: >-
  The type used to target the eligible countries of an order's shipping
  destination for which the discount applies. For example, the discount might be
  applicable when shipping to all countries, or only to a set of countries.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountShippingDestinationSelection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountShippingDestinationSelection.md
---

# Discount​Shipping​Destination​Selection

union

Requires Apps must have `read_discounts` access scope.

The type used to target the eligible countries of an order's shipping destination for which the discount applies. For example, the discount might be applicable when shipping to all countries, or only to a set of countries.

## Possible types

* [Discount​Countries](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountries)

  OBJECT

  Defines the geographic scope where a shipping discount can be applied based on customer shipping destinations. This configuration determines which countries are eligible for the promotional offer.

  For example, a "Free Shipping to EU" promotion would specify European Union countries, while a domestic-only sale might target just the store's home country.

  The object includes both specific country selections and an option to include all remaining countries not explicitly listed, providing flexible geographic targeting for international merchants.

  * countries

    [\[Country​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/enums/CountryCode)

    non-null

    The codes for the countries where the discount can be applied.

  * include​Rest​Of​World

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount is applicable to countries that haven't been defined in the shop's shipping zones.

* [Discount​Country​All](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCountryAll)

  OBJECT

  Indicates that a shipping discount applies to all countries without restriction, enabling merchants to create truly global promotions. This object represents universal geographic eligibility for shipping discount offers.

  For example, an online store launching a "Worldwide Free Shipping" campaign would use this configuration to ensure customers from any country can benefit from the promotion.

  This setting simplifies international discount management by eliminating the need to manually select individual countries or regions, making it ideal for digital products or stores with comprehensive global shipping capabilities.

  * all​Countries

    [Boolean!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    non-null

    Whether the discount can be applied to all countries as shipping destination. This value is always `true`.

***

## Fields with this union

* [Discount​Automatic​Free​Shipping.destinationSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping#field-DiscountAutomaticFreeShipping.fields.destinationSelection)

  OBJECT

  The `DiscountAutomaticFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are automatically applied on a cart and at checkout. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountAutomaticFreeShipping` object stores information about automatic free shipping discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountCodeFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping) object has similar functionality to the `DiscountAutomaticFreeShipping` object, but customers need to enter a code to receive a discount.

  API versions prior to `2025-10` only return automatic discounts with `context` set to `all`, discounts with other values are filtered out.

  ***

* [Discount​Code​Free​Shipping.destinationSelection](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.destinationSelection)

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
union DiscountShippingDestinationSelection = DiscountCountries | DiscountCountryAll
```
