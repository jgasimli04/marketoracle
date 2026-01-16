---
title: ReturnProcessRefundInput - GraphQL Admin
description: The input fields for the refund for the return.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessRefundInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessRefundInput.md
---

# Return​Process​Refund​Input

input\_object

The input fields for the refund for the return.

## Fields

* allow​Over​Refunding

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Default:false

  Whether to allow the total refunded amount to surpass the amount paid for the order.

* order​Transactions

  [\[Return​Refund​Order​Transaction​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundOrderTransactionInput)

  required

  The order transactions for the refund.

* refund​Methods

  [\[Refund​Method​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundMethodInput)

  Default:\[]

  A list of instructions to process the financial outcome of the refund.

***

## Input objects using this input

* [Return​Process​Financial​Transfer​Input.issueRefund](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessFinancialTransferInput#fields-issueRefund)

  INPUT OBJECT

  The input fields for the financial transfer for the return.

***

## Map

### Input objects using this input

* [Return​Process​Financial​Transfer​Input.issueRefund](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessFinancialTransferInput#fields-issueRefund)
