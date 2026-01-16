---
title: PaymentReminderSendUserError - GraphQL Admin
description: An error that occurs during the execution of `PaymentReminderSend`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentReminderSendUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PaymentReminderSendUserError.md
---

# Payment​Reminder​Send​User​Error

object

An error that occurs during the execution of `PaymentReminderSend`.

## Fields

* code

  [Payment​Reminder​Send​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PaymentReminderSendUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

## <\~> PaymentReminderSendUserError Mutations

### Mutated by

* <\~>[payment​Reminder​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/paymentReminderSend)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PaymentReminderSendUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
