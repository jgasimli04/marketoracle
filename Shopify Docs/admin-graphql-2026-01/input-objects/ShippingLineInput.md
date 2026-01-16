---
title: ShippingLineInput - GraphQL Admin
description: >-
  The input fields for specifying the shipping details for the draft order.


  > Note:

  > A custom shipping line includes a title and price with `shippingRateHandle`
  set to `nil`. A shipping line with a carrier-provided shipping rate (currently
  set via the Shopify admin) includes the shipping rate handle.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingLineInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ShippingLineInput.md
---

# Shipping​Line​Input

input\_object

The input fields for specifying the shipping details for the draft order.

***

Note

A custom shipping line includes a title and price with `shippingRateHandle` set to `nil`. A shipping line with a carrier-provided shipping rate (currently set via the Shopify admin) includes the shipping rate handle.

***

## Fields

* price​With​Currency

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  Price of the shipping rate with currency. If provided, `price` will be ignored.

* shipping​Rate​Handle

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A unique identifier for the shipping rate.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  Title of the shipping rate.

* price

  [Money](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Money)

  Deprecated

***

## Input objects using this input

* [Draft​Order​Input.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-shippingLine)

  INPUT OBJECT

  The input fields used to create or update a draft order.

***

## Map

### Input objects using this input

* [Draft​Order​Input.shippingLine](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-shippingLine)
