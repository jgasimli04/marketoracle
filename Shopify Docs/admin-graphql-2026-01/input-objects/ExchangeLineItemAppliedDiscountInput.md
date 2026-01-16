---
title: ExchangeLineItemAppliedDiscountInput - GraphQL Admin
description: The input fields for an applied discount on a calculated exchange line item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemAppliedDiscountInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemAppliedDiscountInput.md
---

# Exchange​Line​Item​Applied​Discount​Input

input\_object

The input fields for an applied discount on a calculated exchange line item.

## Fields

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The description of the discount.

* value

  [Exchange​Line​Item​Applied​Discount​Value​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemAppliedDiscountValueInput)

  required

  The value of the discount as a fixed amount or a percentage.

***

## Input objects using this input

* [Calculate​Exchange​Line​Item​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateExchangeLineItemInput#fields-appliedDiscount)

  INPUT OBJECT

  The input fields for exchange line items on a calculated return.

* [Exchange​Line​Item​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemInput#fields-appliedDiscount)

  INPUT OBJECT

  The input fields for new line items to be added to the order as part of an exchange.

***

## Map

### Input objects using this input

* [Calculate​Exchange​Line​Item​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateExchangeLineItemInput#fields-appliedDiscount)
* [Exchange​Line​Item​Input.appliedDiscount](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemInput#fields-appliedDiscount)
