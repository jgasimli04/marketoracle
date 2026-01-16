---
title: CalculateReturnInput - GraphQL Admin
description: The input fields to calculate return amounts associated with an order.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput.md
---

# Calculate​Return​Input

input\_object

The input fields to calculate return amounts associated with an order.

## Fields

* exchange​Line​Items

  [\[Calculate​Exchange​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateExchangeLineItemInput)

  Default:\[]

  The exchange line items to add to the order.

* order​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the order that will be returned.

* return​Line​Items

  [\[Calculate​Return​Line​Item​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnLineItemInput)

  Default:\[]

  The line items from the order to include in the return.

* return​Shipping​Fee

  [Return​Shipping​Fee​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnShippingFeeInput)

  The return shipping fee associated with the return.

***

## Map

No referencing types
