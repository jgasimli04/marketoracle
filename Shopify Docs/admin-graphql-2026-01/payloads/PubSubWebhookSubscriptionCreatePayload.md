---
title: PubSubWebhookSubscriptionCreatePayload - GraphQL Admin
description: Return type for `pubSubWebhookSubscriptionCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PubSubWebhookSubscriptionCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PubSubWebhookSubscriptionCreatePayload.md
---

# Pub​Sub​Webhook​Subscription​Create​Payload

payload

Return type for `pubSubWebhookSubscriptionCreate` mutation.

## Fields

* user​Errors

  [\[Pub​Sub​Webhook​Subscription​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was created.

***

## Mutations with this payload

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

## Map
