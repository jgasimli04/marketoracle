---
title: OrderCreateShippingLineInput - GraphQL Admin
description: The input fields for a shipping line to create for an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateShippingLineInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateShippingLineInput.md
---

# Order​Create​Shipping​Line​Input

input\_object

The input fields for a shipping line to create for an order.

## Fields

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A reference to the shipping method.

* price​Set

  [Money​Bag​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput)

  required

  The price of this shipping method in the shop currency. Can't be negative.

* source

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The source of the shipping method.

* tax​Lines

  [\[Order​Create​Tax​Line​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateTaxLineInput)

  A list of tax line objects, each of which details a tax applicable to this shipping line.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The title of the shipping method.

***

## Input objects using this input

* [Order​Create​Order​Input.shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-shippingLines)

  INPUT OBJECT

  The input fields for creating an order.

***

## Map

### Input objects using this input

* [Order​Create​Order​Input.shippingLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderInput#fields-shippingLines)
