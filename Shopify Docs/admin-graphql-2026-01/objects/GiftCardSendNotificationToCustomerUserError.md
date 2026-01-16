---
title: GiftCardSendNotificationToCustomerUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `GiftCardSendNotificationToCustomer`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToCustomerUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToCustomerUserError.md
---

# Gift​Card​Send​Notification​To​Customer​User​Error

object

An error that occurs during the execution of `GiftCardSendNotificationToCustomer`.

## Fields

* code

  [Gift​Card​Send​Notification​To​Customer​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/GiftCardSendNotificationToCustomerUserErrorCode)

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

* [gift​Card​Send​Notification​To​Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToCustomer)

  mutation

  Send notification to the customer of a gift card.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the gift card to send.

  ***

***

## <\~> GiftCardSendNotificationToCustomerUserError Mutations

### Mutated by

* <\~>[gift​Card​Send​Notification​To​Customer](https://shopify.dev/docs/api/admin-graphql/latest/mutations/giftCardSendNotificationToCustomer)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-GiftCardSendNotificationToCustomerUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
