---
title: ReturnRefundInput - GraphQL Admin
description: The input fields to refund a return.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput.md
---

# Return​Refund​Input

input\_object

The input fields to refund a return.

## Fields

* notify​Customer

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to send a refund notification to the customer.

* order​Transactions

  [\[Return​Refund​Order​Transaction​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundOrderTransactionInput)

  Default:\[]

  A list of transactions involved in refunding the return.

* refund​Duties

  [\[Refund​Duty​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundDutyInput)

  A list of duties to refund.

* refund​Shipping

  [Refund​Shipping​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundShippingInput)

  The shipping amount to refund.

* return​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the return.

* return​Refund​Line​Items

  [\[Return​Refund​Line​Item​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundLineItemInput)

  required

  A list of return line items to refund.

***

## Map

No referencing types
