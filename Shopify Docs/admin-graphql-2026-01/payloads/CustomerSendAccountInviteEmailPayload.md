---
title: CustomerSendAccountInviteEmailPayload - GraphQL Admin
description: Return type for `customerSendAccountInviteEmail` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerSendAccountInviteEmailPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/CustomerSendAccountInviteEmailPayload.md
---

# Customer​Send​Account​Invite​Email​Payload

payload

Return type for `customerSendAccountInviteEmail` mutation.

## Fields

* customer

  [Customer](https://shopify.dev/docs/api/admin-graphql/latest/objects/Customer)

  The customer to whom an account invite email was sent.

* user​Errors

  [\[Customer​Send​Account​Invite​Email​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSendAccountInviteEmailUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [customer​Send​Account​Invite​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSendAccountInviteEmail)

  mutation

  Sends an email invitation for a customer to create a legacy customer account. The invitation lets customers set up their password and activate their account in the online store.

  You can optionally customize the email content including the subject, sender, recipients, and message body. If you don't provide email customization, the store uses its default account invitation template.

  ***

  Note

  The invite only works when legacy customer accounts are enabled on the shop.

  ***

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the customer to whom an account invite email is to be sent.

  * email

    [Email​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EmailInput)

    Specifies the account invite email fields.

  ***

***

## Map

### Mutations with this payload

* [customer​Send​Account​Invite​Email](https://shopify.dev/docs/api/admin-graphql/latest/types/customerSendAccountInviteEmail)
