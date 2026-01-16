---
title: OrderInvoiceSendUserError - GraphQL Admin
description: An error that occurs during the execution of `OrderInvoiceSend`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderInvoiceSendUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderInvoiceSendUserError.md
---

# Order​Invoice​Send​User​Error

object

An error that occurs during the execution of `OrderInvoiceSend`.

## Fields

* code

  [Order​Invoice​Send​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderInvoiceSendUserErrorCode)

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

* [order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend)

  mutation

  Sends an email invoice for an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order).

  You can customize the email recipient, sender, and subject line using the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email) argument.

  ***

  Note

  Use store or staff account email addresses for the [`from`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.from) and [`bcc`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend#arguments-email.fields.bcc) input fields.

  ***

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The order associated with the invoice.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    The email input fields for the order invoice. The `bcc` and `from` fields should be store or staff account emails.

  ***

***

## <\~> OrderInvoiceSendUserError Mutations

### Mutated by

* <\~>[order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderInvoiceSend)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderInvoiceSendUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
