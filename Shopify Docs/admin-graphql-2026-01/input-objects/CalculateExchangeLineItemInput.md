---
title: CalculateExchangeLineItemInput - GraphQL Admin
description: The input fields for exchange line items on a calculated return.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateExchangeLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateExchangeLineItemInput.md
---

# Calculate​Exchange​Line​Item​Input

input\_object

The input fields for exchange line items on a calculated return.

## Fields

* applied​Discount

  [Exchange​Line​Item​Applied​Discount​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemAppliedDiscountInput)

  The discount to be applied to the exchange line item.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the item to be added.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product variant to be added to the order as part of an exchange.

***

## Input objects using this input

* [Calculate​Return​Input.exchangeLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput#fields-exchangeLineItems)

  INPUT OBJECT

  The input fields to calculate return amounts associated with an order.

***

## Map

### Input objects using this input

* [Calculate​Return​Input.exchangeLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput#fields-exchangeLineItems)
