---
title: OrderCreateTaxLineInput - GraphQL Admin
description: The input fields for a tax line to create for an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateTaxLineInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateTaxLineInput.md
---

# Order​Create​Tax​Line​Input

input\_object

The input fields for a tax line to create for an order.

## Fields

* channel​Liable

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether the channel that submitted the tax line is liable for remitting. A value of `null` indicates unknown liability for the tax line.

* price​Set

  [Money​Bag​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput)

  The amount of tax to be charged on the item.

* rate

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  The proportion of the item price that the tax represents as a decimal.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The name of the tax line to create.

***

## Input objects using this input

* [Order​Create​Line​Item​Input.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemInput#fields-taxLines)

  INPUT OBJECT

  The input fields for a line item to create for an order.

* [Order​Create​Order​Input.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-taxLines)

  INPUT OBJECT

  The input fields for creating an order.

* [Order​Create​Shipping​Line​Input.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateShippingLineInput#fields-taxLines)

  INPUT OBJECT

  The input fields for a shipping line to create for an order.

***

## Map

### Input objects using this input

* [Order​Create​Line​Item​Input.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemInput#fields-taxLines)
* [Order​Create​Order​Input.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-taxLines)
* [Order​Create​Shipping​Line​Input.taxLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateShippingLineInput#fields-taxLines)
