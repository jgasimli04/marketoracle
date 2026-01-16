---
title: DiscountRedeemCodeConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple DiscountRedeemCodes.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection.md
---

# Discount​Redeem​Code​Connection

connection

An auto-generated type for paginating through multiple DiscountRedeemCodes.

## Fields with this connection

* [Discount​Code​App.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codes)

  OBJECT

  The `DiscountCodeApp` object stores information about code discounts that are managed by an app using [Shopify Functions](https://shopify.dev/docs/apps/build/functions). Use `DiscountCodeApp` when you need advanced, custom, or dynamic discount capabilities that aren't supported by [Shopify's native discount types](https://help.shopify.com/manual/discounts/discount-types).

  Learn more about creating [custom discount functionality](https://shopify.dev/docs/apps/build/discounts/build-discount-function).

  ***

  Note

  The [`DiscountAutomaticApp`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticApp) object has similar functionality to the `DiscountCodeApp` object, with the exception that `DiscountAutomaticApp` stores information about automatic discounts that are managed by an app using Shopify Functions.

  ***

* [Discount​Code​Basic.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codes)

  OBJECT

  The `DiscountCodeBasic` object lets you manage [amount off discounts](https://help.shopify.com/manual/discounts/discount-types/percentage-fixed-amount) that are applied on a cart and at checkout when a customer enters a code. Amount off discounts give customers a fixed value or a percentage off the products in an order, but don't apply to shipping costs.

  The `DiscountCodeBasic` object stores information about amount off code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBasic`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBasic) object has similar functionality to the `DiscountCodeBasic` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Bxgy.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codes)

  OBJECT

  The `DiscountCodeBxgy` object lets you manage [buy X get Y discounts (BXGY)](https://help.shopify.com/manual/discounts/discount-types/buy-x-get-y) that are applied on a cart and at checkout when a customer enters a code. BXGY discounts incentivize customers by offering them additional items at a discounted price or for free when they purchase a specified quantity of items.

  The `DiscountCodeBxgy` object stores information about BXGY code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticBxgy`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticBxgy) object has similar functionality to the `DiscountCodeBxgy` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

* [Discount​Code​Free​Shipping.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codes)

  OBJECT

  The `DiscountCodeFreeShipping` object lets you manage [free shipping discounts](https://help.shopify.com/manual/discounts/discount-types/free-shipping) that are applied on a cart and at checkout when a customer enters a code. Free shipping discounts are promotional deals that merchants offer to customers to waive shipping costs and encourage online purchases.

  The `DiscountCodeFreeShipping` object stores information about free shipping code discounts that apply to specific [products and variants](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountProducts), [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCollections), or [all items in a cart](https://shopify.dev/docs/api/admin-graphql/latest/objects/AllDiscountItems).

  Learn more about working with [Shopify's discount model](https://shopify.dev/docs/apps/build/discounts), including limitations and considerations.

  ***

  Note

  The [`DiscountAutomaticFreeShipping`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountAutomaticFreeShipping) object has similar functionality to the `DiscountCodeFreeShipping` object, but discounts are automatically applied, without the need for customers to enter a code.

  ***

***

## Possible returns

* edges

  [\[Discount​Redeem​Code​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCodeEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Discount​Redeem​Code!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountRedeemCode)

  non-null

  A list of nodes that are contained in DiscountRedeemCodeEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Fields with this connection

* {}[Discount​Code​App.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeApp#field-DiscountCodeApp.fields.codes)
* {}[Discount​Code​Basic.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBasic#field-DiscountCodeBasic.fields.codes)
* {}[Discount​Code​Bxgy.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeBxgy#field-DiscountCodeBxgy.fields.codes)
* {}[Discount​Code​Free​Shipping.codes](https://shopify.dev/docs/api/admin-graphql/latest/objects/DiscountCodeFreeShipping#field-DiscountCodeFreeShipping.fields.codes)

### Possible returns

* <->[Discount​Redeem​Code​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection#returns-edges)
* <->[Discount​Redeem​Code​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection#returns-nodes)
* <->[Discount​Redeem​Code​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/DiscountRedeemCodeConnection#returns-pageInfo)
