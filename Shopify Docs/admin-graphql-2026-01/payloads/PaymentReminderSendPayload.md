---
title: PaymentReminderSendPayload - GraphQL Admin
description: Return type for `paymentReminderSend` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentReminderSendPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PaymentReminderSendPayload.md
---

# Payment​Reminder​Send​Payload

payload

Return type for `paymentReminderSend` mutation.

## Fields

* success

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Whether the payment reminder email was successfully sent.

* user​Errors

  [\[Payment​Reminder​Send​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentReminderSendUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [payment​Reminder​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentReminderSend)

  mutation

  Sends an email payment reminder for a payment schedule.

  * payment​Schedule​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The payment schedule id associated with the reminder.

  ***

***

## Map

### Mutations with this payload

* [payment​Reminder​Send](https://shopify.dev/docs/api/admin-graphql/latest/types/paymentReminderSend)
