---
title: EventBridgeWebhookSubscriptionCreatePayload - GraphQL Admin
description: Return type for `eventBridgeWebhookSubscriptionCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/EventBridgeWebhookSubscriptionCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/EventBridgeWebhookSubscriptionCreatePayload.md
---

# Event​Bridge​Webhook​Subscription​Create​Payload

payload

Return type for `eventBridgeWebhookSubscriptionCreate` mutation.

## Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was created.

***

## Mutations with this payload

* [event​Bridge​Webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionCreate)

  mutation

  Deprecated

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Event​Bridge​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

    required

    Specifies the input fields for an EventBridge webhook subscription.

  ***

***

## Map
