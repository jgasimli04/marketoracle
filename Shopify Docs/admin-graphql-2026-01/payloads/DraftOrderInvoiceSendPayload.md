---
title: DraftOrderInvoiceSendPayload - GraphQL Admin
description: Return type for `draftOrderInvoiceSend` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderInvoiceSendPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/DraftOrderInvoiceSendPayload.md
---

# Draft​Order​Invoice​Send​Payload

payload

Return type for `draftOrderInvoiceSend` mutation.

## Fields

* draft​Order

  [Draft​Order](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder)

  The draft order an invoice email is sent for.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [draft​Order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend)

  mutation

  Sends an invoice email for a [`DraftOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/DraftOrder). The invoice includes a secure checkout link for reviewing and paying for the order. Use the [`email`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/draftOrderInvoiceSend#arguments-email) argument to customize the email, such as the subject and message.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    Specifies the draft order to send the invoice for.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the draft order invoice email fields.

  ***

***

## Map

### Mutations with this payload

* [draft​Order​Invoice​Send](https://shopify.dev/docs/api/admin-graphql/latest/types/draftOrderInvoiceSend)
