---
title: PaymentScheduleInput - GraphQL Admin
description: The input fields used to create a payment schedule for payment terms.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput.md
---

# Payment​Schedule​Input

input\_object

The input fields used to create a payment schedule for payment terms.

## Fields

* due​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Specifies the date and time when the payment schedule is due. This field must be provided for fixed type payment terms.

* issued​At

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Specifies the date and time that the payment schedule was issued. This field must be provided for net type payment terms.

***

## Input objects using this input

* [Payment​Terms​Create​Input.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsCreateInput#fields-paymentSchedules)

  INPUT OBJECT

  The input fields used to create a payment terms.

* [Payment​Terms​Input.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsInput#fields-paymentSchedules)

  INPUT OBJECT

  The input fields to create payment terms. Payment terms set the date that payment is due.

***

## Map

### Input objects using this input

* [Payment​Terms​Create​Input.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsCreateInput#fields-paymentSchedules)
* [Payment​Terms​Input.paymentSchedules](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsInput#fields-paymentSchedules)
