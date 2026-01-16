---
title: ExchangeLineItemInput - GraphQL Admin
description: >-
  The input fields for new line items to be added to the order as part of an
  exchange.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemInput.md
---

# Exchange​Line​Item​Input

input\_object

The input fields for new line items to be added to the order as part of an exchange.

## Fields

* applied​Discount

  [Exchange​Line​Item​Applied​Discount​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ExchangeLineItemAppliedDiscountInput)

  The discount to be applied to the exchange line item.

* gift​Card​Codes

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The gift card codes associated with the physical gift cards.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the item to be added.

* variant​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the product variant to be added to the order as part of an exchange.

***

## Input objects using this input

* [Return​Input.exchangeLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput#fields-exchangeLineItems)

  INPUT OBJECT

  The input fields for a return.

***

## Map

### Input objects using this input

* [Return​Input.exchangeLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnInput#fields-exchangeLineItems)
