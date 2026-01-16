---
title: ReturnRefundOrderTransactionInput - GraphQL Admin
description: The input fields to create order transactions when refunding a return.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundOrderTransactionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundOrderTransactionInput.md
---

# Return​Refund​Order​Transaction​Input

input\_object

The input fields to create order transactions when refunding a return.

## Fields

* parent​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the parent order transaction. The transaction must be of kind `CAPTURE` or a `SALE`.

* transaction​Amount

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The amount of money for the transaction in the presentment currency of the order.

***

## Input objects using this input

* [Return​Process​Refund​Input.orderTransactions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessRefundInput#fields-orderTransactions)

  INPUT OBJECT

  The input fields for the refund for the return.

* [Return​Refund​Input.orderTransactions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput#fields-orderTransactions)

  INPUT OBJECT

  The input fields to refund a return.

***

## Map

### Input objects using this input

* [Return​Process​Refund​Input.orderTransactions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessRefundInput#fields-orderTransactions)
* [Return​Refund​Input.orderTransactions](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput#fields-orderTransactions)
