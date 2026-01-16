---
title: StoreCreditRefundInput - GraphQL Admin
description: The input fields to process a refund to store credit.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditRefundInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/StoreCreditRefundInput.md
---

# Store​Credit​Refund​Input

input\_object

The input fields to process a refund to store credit.

## Fields

* amount

  [Money​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MoneyInput)

  required

  The amount to be issued as store credit.

* expires​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  An optional expiration date for the store credit being issued.

***

## Input objects using this input

* [Refund​Method​Input.storeCreditRefund](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundMethodInput#fields-storeCreditRefund)

  INPUT OBJECT

  The input fields for processing the financial outcome of a refund.

***

## Map

### Input objects using this input

* [Refund​Method​Input.storeCreditRefund](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundMethodInput#fields-storeCreditRefund)
