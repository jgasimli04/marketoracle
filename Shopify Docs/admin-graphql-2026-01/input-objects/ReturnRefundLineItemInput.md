---
title: ReturnRefundLineItemInput - GraphQL Admin
description: The input fields for a return refund line item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundLineItemInput.md
---

# Return​Refund​Line​Item​Input

input\_object

The input fields for a return refund line item.

## Fields

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the return line item to be refunded.

* return​Line​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the return line item to be refunded.

***

## Input objects using this input

* [Return​Refund​Input.returnRefundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput#fields-returnRefundLineItems)

  INPUT OBJECT

  The input fields to refund a return.

***

## Map

### Input objects using this input

* [Return​Refund​Input.returnRefundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput#fields-returnRefundLineItems)
