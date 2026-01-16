---
title: WebhookSubscriptionUpdatePayload - GraphQL Admin
description: Return type for `webhookSubscriptionUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebhookSubscriptionUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebhookSubscriptionUpdatePayload.md
---

# Webhook​Subscription​Update​Payload

payload

Return type for `webhookSubscriptionUpdate` mutation.

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

* [webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionUpdate)

  mutation

  Updates a webhook subscription's configuration. Modify the endpoint URL, event filters, included fields, or metafield namespaces without recreating the subscription.

  The mutation accepts a [`WebhookSubscriptionInput`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput) that specifies the new configuration. You can switch between endpoint types (HTTP, Pub/Sub, EventBridge) by providing a different URI format. Updates apply atomically without interrupting webhook delivery.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to update.

  * webhook​Subscription

    [Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

    required

    Specifies the input fields for a webhook subscription.

  ***

***

## Map

### Mutations with this payload

* [webhook​Subscription​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/webhookSubscriptionUpdate)
