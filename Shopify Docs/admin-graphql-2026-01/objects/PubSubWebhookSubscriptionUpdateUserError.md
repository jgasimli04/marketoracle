---
title: PubSubWebhookSubscriptionUpdateUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `PubSubWebhookSubscriptionUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionUpdateUserError.md
---

# Pub​Sub​Webhook​Subscription​Update​User​Error

object

An error that occurs during the execution of `PubSubWebhookSubscriptionUpdate`.

## Fields

* code

  [Pub​Sub​Webhook​Subscription​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PubSubWebhookSubscriptionUpdateUserErrorCode)

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

* [pub​Sub​Webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

    required

    Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

  ***

***

## <\~> PubSubWebhookSubscriptionUpdateUserError Mutations

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PubSubWebhookSubscriptionUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
