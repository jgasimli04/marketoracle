---
title: PubSubWebhookSubscriptionUpdatePayload - GraphQL Admin
description: Return type for `pubSubWebhookSubscriptionUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PubSubWebhookSubscriptionUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/PubSubWebhookSubscriptionUpdatePayload.md
---

# Pub​Sub​Webhook​Subscription​Update​Payload

payload

Return type for `pubSubWebhookSubscriptionUpdate` mutation.

## Fields

* user​Errors

  [\[Pub​Sub​Webhook​Subscription​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PubSubWebhookSubscriptionUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was updated.

***

## Mutations with this payload

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

## Map
