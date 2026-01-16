---
title: CalculateReturnLineItemInput - GraphQL Admin
description: The input fields for return line items on a calculated return.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnLineItemInput.md
---

# Calculate​Return​Line​Item​Input

input\_object

The input fields for return line items on a calculated return.

## Fields

* fulfillment​Line​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the fulfillment line item to be returned.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the item to be returned.

* restocking​Fee

  [Restocking​Fee​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RestockingFeeInput)

  The restocking fee for the return line item.

***

## Input objects using this input

* [Calculate​Return​Input.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput#fields-returnLineItems)

  INPUT OBJECT

  The input fields to calculate return amounts associated with an order.

***

## Map

### Input objects using this input

* [Calculate​Return​Input.returnLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/CalculateReturnInput#fields-returnLineItems)
