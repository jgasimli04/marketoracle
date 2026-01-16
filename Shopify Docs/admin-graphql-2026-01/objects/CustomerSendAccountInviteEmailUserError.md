---
title: CustomerSendAccountInviteEmailUserError - GraphQL Admin
description: Defines errors for customerSendAccountInviteEmail mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSendAccountInviteEmailUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/CustomerSendAccountInviteEmailUserError.md
---

# Customer​Send​Account​Invite​Email​User​Error

object

Requires `read_customers` access scope.

Defines errors for customerSendAccountInviteEmail mutation.

## Fields

* code

  [Customer​Send​Account​Invite​Email​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/CustomerSendAccountInviteEmailUserErrorCode)

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

## <\~> CustomerSendAccountInviteEmailUserError Mutations

### Mutated by

* <\~>[customer​Send​Account​Invite​Email](https://shopify.dev/docs/api/admin-graphql/latest/mutations/customerSendAccountInviteEmail)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-CustomerSendAccountInviteEmailUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
