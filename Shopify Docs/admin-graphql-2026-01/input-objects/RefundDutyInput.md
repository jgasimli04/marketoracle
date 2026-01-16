---
title: RefundDutyInput - GraphQL Admin
description: The input fields required to reimburse duties on a refund.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundDutyInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundDutyInput.md
---

# Refund​Duty​Input

input\_object

The input fields required to reimburse duties on a refund.

## Fields

* duty​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the duty in the refund.

* refund​Type

  [Refund​Duty​Refund​Type](https://shopify.dev/docs/api/admin-graphql/latest/enums/RefundDutyRefundType)

  The type of refund for this duty.

***

## Input objects using this input

* [Refund​Input.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput#fields-refundDuties)

  INPUT OBJECT

  The input fields to create a refund.

* [Return​Process​Input.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput#fields-refundDuties)

  INPUT OBJECT

  The input fields for processing a return.

* [Return​Refund​Input.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput#fields-refundDuties)

  INPUT OBJECT

  The input fields to refund a return.

***

## Map

### Input objects using this input

* [Refund​Input.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/RefundInput#fields-refundDuties)
* [Return​Process​Input.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnProcessInput#fields-refundDuties)
* [Return​Refund​Input.refundDuties](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/ReturnRefundInput#fields-refundDuties)
