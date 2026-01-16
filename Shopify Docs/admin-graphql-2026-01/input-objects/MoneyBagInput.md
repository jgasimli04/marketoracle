---
title: MoneyBagInput - GraphQL Admin
description: >-
  An input collection of monetary values in their respective currencies.

  Represents an amount in the shop's currency and the amount as converted to the
  customer's currency of choice (the presentment currency).
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyBagInput.md
---

# Money​Bag​Input

input\_object

An input collection of monetary values in their respective currencies. Represents an amount in the shop's currency and the amount as converted to the customer's currency of choice (the presentment currency).

## Fields

* presentment​Money

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  Amount in presentment currency. If this isn't given then we assume that the presentment currency is the same as the shop's currency.

* shop​Money

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  Amount in shop currency.

***

## Input objects using this input

* [Order​Create​Fixed​Discount​Code​Attributes​Input.amountSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFixedDiscountCodeAttributesInput#fields-amountSet)

  INPUT OBJECT

  The input fields for a fixed amount discount code to apply to an order.

* [Order​Create​Line​Item​Input.priceSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemInput#fields-priceSet)

  INPUT OBJECT

  The input fields for a line item to create for an order.

* [Order​Create​Order​Transaction​Input.amountSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput#fields-amountSet)

  INPUT OBJECT

  The input fields for a transaction to create for an order.

* [Order​Create​Shipping​Line​Input.priceSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateShippingLineInput#fields-priceSet)

  INPUT OBJECT

  The input fields for a shipping line to create for an order.

* [Order​Create​Tax​Line​Input.priceSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateTaxLineInput#fields-priceSet)

  INPUT OBJECT

  The input fields for a tax line to create for an order.

***

## Map

### Input objects using this input

* [Order​Create​Fixed​Discount​Code​Attributes​Input.amountSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateFixedDiscountCodeAttributesInput#fields-amountSet)
* [Order​Create​Line​Item​Input.priceSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateLineItemInput#fields-priceSet)
* [Order​Create​Order​Transaction​Input.amountSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateOrderTransactionInput#fields-amountSet)
* [Order​Create​Shipping​Line​Input.priceSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateShippingLineInput#fields-priceSet)
* [Order​Create​Tax​Line​Input.priceSet](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderCreateTaxLineInput#fields-priceSet)
