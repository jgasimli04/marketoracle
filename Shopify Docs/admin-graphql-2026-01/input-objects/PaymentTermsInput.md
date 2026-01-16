---
title: PaymentTermsInput - GraphQL Admin
description: >-
  The input fields to create payment terms. Payment terms set the date that
  payment is due.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsInput.md
---

# Payment​Terms​Input

input\_object

The input fields to create payment terms. Payment terms set the date that payment is due.

## Fields

* payment​Schedules

  [\[Payment​Schedule​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput)

  Specifies the payment schedules for the payment terms.

* payment​Terms​Template​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  Specifies the ID of the payment terms template. Payment terms templates provide preset configurations to create common payment terms. Refer to the [PaymentTermsTemplate](https://shopify.dev/api/admin-graphql/latest/objects/paymenttermstemplate) object for more details.

***

## Input objects using this input

* [Draft​Order​Input.paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-paymentTerms)

  INPUT OBJECT

  The input fields used to create or update a draft order.

* [Payment​Terms​Update​Input.paymentTermsAttributes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput#fields-paymentTermsAttributes)

  INPUT OBJECT

  The input fields used to update the payment terms.

***

## Map

### Input objects using this input

* [Draft​Order​Input.paymentTerms](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/DraftOrderInput#fields-paymentTerms)
* [Payment​Terms​Update​Input.paymentTermsAttributes](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentTermsUpdateInput#fields-paymentTermsAttributes)
