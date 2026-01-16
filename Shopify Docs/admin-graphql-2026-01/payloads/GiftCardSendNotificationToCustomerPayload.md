---
title: GiftCardSendNotificationToCustomerPayload - GraphQL Admin
description: Return type for `giftCardSendNotificationToCustomer` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardSendNotificationToCustomerPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/GiftCardSendNotificationToCustomerPayload.md
---

# Gift​Card​Send​Notification​To​Customer​Payload

payload

Return type for `giftCardSendNotificationToCustomer` mutation.

## Fields

* gift​Card

  [Gift​Card](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCard)

  The gift card that was sent.

* user​Errors

  [\[Gift​Card​Send​Notification​To​Customer​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/GiftCardSendNotificationToCustomerUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [gift​Card​Send​Notification​To​Customer](https://shopify.dev/docs/api/admin-graphql/latest/types/giftCardSendNotificationToCustomer)
