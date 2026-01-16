---
title: EventBridgeWebhookSubscriptionUpdatePayload - GraphQL Admin
description: Return type for `eventBridgeWebhookSubscriptionUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/EventBridgeWebhookSubscriptionUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/EventBridgeWebhookSubscriptionUpdatePayload.md
---

# Event​Bridge​Webhook​Subscription​Update​Payload

payload

Return type for `eventBridgeWebhookSubscriptionUpdate` mutation.

## Fields

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

* webhook​Subscription

  [Webhook​Subscription](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription)

  The webhook subscription that was updated.

***

## Mutations with this payload

* [event​Bridge​Webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/eventBridgeWebhookSubscriptionUpdate)

  mutation

  Deprecated

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Event​Bridge​Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput)

    required

    Specifies the input fields for an EventBridge webhook subscription.

  ***

***

## Map
