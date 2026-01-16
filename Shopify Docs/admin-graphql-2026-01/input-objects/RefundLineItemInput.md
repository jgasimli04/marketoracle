---
title: RefundLineItemInput - GraphQL Admin
description: The input fields required to reimburse line items on a refund.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundLineItemInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundLineItemInput.md
---

# Refund​Line​Item​Input

input\_object

The input fields required to reimburse line items on a refund.

## Fields

* line​Item​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the line item in the refund.

* location​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The intended location for restocking. If the `restockType` is set to `NO_RESTOCK`, then this value is empty.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the associated line item to be refunded.

* restock​Type

  [Refund​Line​Item​Restock​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundLineItemRestockType)

  The type of restock for this line item.

***

## Input objects using this input

* [Refund​Input.refundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput#fields-refundLineItems)

  INPUT OBJECT

  The input fields to create a refund.

***

## Map

### Input objects using this input

* [Refund​Input.refundLineItems](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput#fields-refundLineItems)
