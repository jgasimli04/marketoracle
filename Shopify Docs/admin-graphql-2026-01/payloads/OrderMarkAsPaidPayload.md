---
title: OrderMarkAsPaidPayload - GraphQL Admin
description: Return type for `orderMarkAsPaid` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderMarkAsPaidPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderMarkAsPaidPayload.md
---

# Order​Mark​As​Paid​Payload

payload

Return type for `orderMarkAsPaid` mutation.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order marked as paid.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [order​Mark​As​Paid](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderMarkAsPaid)

  mutation

  Marks an order as paid by recording a payment transaction for the outstanding amount.

  Use the `orderMarkAsPaid` mutation to record payments received outside the standard checkout process. The `orderMarkAsPaid` mutation is particularly useful in scenarios where:

  * Orders were created with manual payment methods (cash on delivery, bank deposit, money order)
  * Payments were received offline and need to be recorded in the system
  * Previously authorized payments need to be captured manually
  * Orders require manual payment reconciliation due to external payment processing

  The mutation validates that the order can be marked as paid before processing. An order can be marked as paid only if it has a positive outstanding balance and its [financial status](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order#field-Order.fields.displayFinancialStatus) isn't already `PAID`. The mutation will either create a new sale transaction for the full outstanding amount or capture an existing authorized transaction, depending on the order's current payment state.

  After successfully marking an order as paid, the order's financial status is updated to reflect the payment, and payment events are logged for tracking and analytics purposes.

  Learn more about [managing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps) in apps.

  * input

    [Order​Mark​As​Paid​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderMarkAsPaidInput)

    required

    ### Arguments

    The input for the mutation.

  ***

***

## Map

### Mutations with this payload

* [order​Mark​As​Paid](https://shopify.dev/docs/api/admin-graphql/latest/types/orderMarkAsPaid)
