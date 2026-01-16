---
title: RefundShippingInput - GraphQL Admin
description: The input fields for the shipping cost to refund.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundShippingInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundShippingInput.md
---

# Refund​Shipping​Input

input\_object

The input fields for the shipping cost to refund.

## Fields

* full​Refund

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to refund the full shipping amount.

* shipping​Refund​Amount

  [Money​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  The input fields required to refund shipping cost, in the presentment currency of the order. This overrides the `fullRefund` argument. This field defaults to 0.00 when not provided and when the `fullRefund` argument is false.

***

## Input objects using this input

* [Return​Process​Input.refundShipping](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput#fields-refundShipping)

  INPUT OBJECT

  The input fields for processing a return.

* [Return​Refund​Input.refundShipping](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput#fields-refundShipping)

  INPUT OBJECT

  The input fields to refund a return.

***

## Map

### Input objects using this input

* [Return​Process​Input.refundShipping](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput#fields-refundShipping)
* [Return​Refund​Input.refundShipping](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput#fields-refundShipping)
