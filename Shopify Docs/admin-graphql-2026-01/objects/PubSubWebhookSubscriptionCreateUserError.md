---
title: PubSubWebhookSubscriptionCreateUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `PubSubWebhookSubscriptionCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionCreateUserError.md
---

# Pub​Sub​Webhook​Subscription​Create​User​Error

object

An error that occurs during the execution of `PubSubWebhookSubscriptionCreate`.

## Fields

* code

  [Pub​Sub​Webhook​Subscription​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/PubSubWebhookSubscriptionCreateUserErrorCode)

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

* [pub​Sub​Webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/pubSubWebhookSubscriptionCreate)

  mutation

  Deprecated

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Pub​Sub​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput)

    required

    Specifies the input fields for a Google Cloud Pub/Sub webhook subscription.

  ***

***

## <\~> PubSubWebhookSubscriptionCreateUserError Mutations

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-PubSubWebhookSubscriptionCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
