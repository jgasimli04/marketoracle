---
title: PaymentTermsType - GraphQL Admin
description: The type of a payment terms or a payment terms template.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentTermsType.md'
---

# Payment​Terms​Type

enum

The type of a payment terms or a payment terms template.

## Valid values

* FIXED

  The payment terms or payment terms template is a fixed type. It's due on a specified date.

* FULFILLMENT

  The payment terms or payment terms template is due on fulfillment.

* NET

  The payment terms or payment terms template is a net type. It's due a number of days after issue.

* RECEIPT

  The payment terms or payment terms template is due on receipt.

* UNKNOWN

  The type of the payment terms or payment terms template is unknown.

***

## Fields

* [Payment​Terms.paymentTermsType](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentTermsType)

  OBJECT

  Payment conditions for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) or [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder), including when payment is due and how it's scheduled. Payment terms are created from templates that specify net terms (payment due after a certain number of days) or fixed schedules with specific due dates. You can optionally provide custom payment schedules using [`PaymentScheduleInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PaymentScheduleInput).

  Each payment term contains one or more [`PaymentSchedule`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentSchedule), which you can access through the [`paymentSchedules`](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentSchedules) field. Payment schedules contain detailed information for each payment installment.

  Learn more about [payment terms](https://shopify.dev/docs/apps/build/checkout/payments/payment-terms).

* [Payment​Terms​Template.paymentTermsType](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate#field-PaymentTermsTemplate.fields.paymentTermsType)

  OBJECT

  Represents the payment terms template object.

* [Query​Root.paymentTermsTemplates(paymentTermsType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.paymentTermsTemplates.arguments.paymentTermsType)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [payment​Terms​Templates.paymentTermsType](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentTermsTemplates#arguments-paymentTermsType)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Payment​Terms.paymentTermsType](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTerms#field-PaymentTerms.fields.paymentTermsType)
* <-|[Payment​Terms​Template.paymentTermsType](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentTermsTemplate#field-PaymentTermsTemplate.fields.paymentTermsType)

### Arguments with this enum

* <-|[Query​Root.paymentTermsTemplates(paymentTermsType)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.paymentTermsTemplates.arguments.paymentTermsType)
* <-|[payment​Terms​Templates.paymentTermsType](https://shopify.dev/docs/api/admin-graphql/latest/queries/paymentTermsTemplates#arguments-paymentTermsType)
