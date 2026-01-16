---
title: DiscountCodeSortKeys - GraphQL Admin
description: The set of valid sort keys for the DiscountCode query.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/DiscountCodeSortKeys.md
---

# Discount​Code​Sort​Keys

enum

The set of valid sort keys for the DiscountCode query.

## Valid values

* CODE

  Sort by the `code` value.

* CREATED\_​AT

  Sort by the `created_at` value.

* ID

  Sort by the `id` value.

* RELEVANCE

  Sort by relevance to the search terms when the `query` parameter is specified on the connection. Don't use this sort key when no search query is specified.

***

## Fields

* [Discount​Code​App.codes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codes.arguments.sortKey)

  ARGUMENT

  The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp) object has similar functionality to the `DiscountCodeApp` object, with the exception that `DiscountAutomaticApp` stores information about automatic discounts that are managed by an app using Shopify Functions.

  ***

* [Discount​Code​Basic.codes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codes.arguments.sortKey)

  ARGUMENT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) object has similar functionality to the `DiscountCodeBasic` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Bxgy.codes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codes.arguments.sortKey)

  ARGUMENT

  The `DiscountCodeBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy) object has similar functionality to the `DiscountCodeBxgy` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.codes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codes.arguments.sortKey)

  ARGUMENT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping) object has similar functionality to the `DiscountCodeFreeShipping` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Price​Rule.discountCodes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountCodes.arguments.sortKey)

  ARGUMENT

  A set of conditions, including entitlements and prerequisites, that must be met for a discount code to apply.

  ***

  Note

  Use the types and queries included our [discount tutorials](https://shopify.dev/docs/apps/selling-strategies/discounts/getting-started) instead. These will replace the GraphQL Admin API's [`PriceRule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule) object and [`DiscountCode`](https://shopify.dev/docs/api/admin-graphql/latest/unions/DiscountCode) union, and the REST Admin API's deprecated[`PriceRule`](https://shopify.dev/docs/api/admin-rest/unstable/resources/pricerule) resource.

  ***

* [Query​Root.discountRedeemCodeSavedSearches(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.discountRedeemCodeSavedSearches.arguments.sortKey)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [discount​Redeem​Code​Saved​Searches.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeSavedSearches#arguments-sortKey)

  ARGUMENT

***

## Map

### Arguments with this enum

* <-|[Discount​Code​App.codes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codes.arguments.sortKey)
* <-|[Discount​Code​Basic.codes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codes.arguments.sortKey)
* <-|[Discount​Code​Bxgy.codes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codes.arguments.sortKey)
* <-|[Discount​Code​Free​Shipping.codes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codes.arguments.sortKey)
* <-|[Price​Rule.discountCodes(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/PriceRule#field-PriceRule.fields.discountCodes.arguments.sortKey)
* <-|[Query​Root.discountRedeemCodeSavedSearches(sortKey)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.discountRedeemCodeSavedSearches.arguments.sortKey)
* <-|[discount​Redeem​Code​Saved​Searches.sortKey](https://shopify.dev/docs/api/admin-graphql/latest/queries/discountRedeemCodeSavedSearches#arguments-sortKey)
