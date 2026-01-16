---
title: GiftCardSendNotificationToRecipientUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `GiftCardSendNotificationToRecipient`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToRecipientUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToRecipientUserError.md
---

# Gift​Card​Send​Notification​To​Recipient​User​Error

object

An error that occurs during the execution of `GiftCardSendNotificationToRecipient`.

## Fields

* code

  [Gift​Card​Send​Notification​To​Recipient​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSendNotificationToRecipientUserErrorCode)

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

* [gift​Card​Send​Notification​To​Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToRecipient)

  mutation

  Send notification to the recipient of a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to send.

  ***

***

## <\~> GiftCardSendNotificationToRecipientUserError Mutations

### Mutated by

* <\~>[gift​Card​Send​Notification​To​Recipient](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToRecipient)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-GiftCardSendNotificationToRecipientUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
