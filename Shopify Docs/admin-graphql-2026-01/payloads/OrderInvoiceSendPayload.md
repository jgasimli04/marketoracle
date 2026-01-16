---
title: OrderInvoiceSendPayload - GraphQL Admin
description: Return type for `orderInvoiceSend` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderInvoiceSendPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/OrderInvoiceSendPayload.md
---

# Order​Invoice​Send​Payload

payload

Return type for `orderInvoiceSend` mutation.

## Fields

* order

  [Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order)

  The order associated with the invoice email.

* user​Errors

  [\[Order​Invoice​Send​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderInvoiceSendUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/types/orderInvoiceSend)
