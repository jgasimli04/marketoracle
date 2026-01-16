---
title: WebhookSubscriptionCreatePayload - GraphQL Admin
description: Return type for `webhookSubscriptionCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebhookSubscriptionCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebhookSubscriptionCreatePayload.md
---

# Webhook​Subscription​Create​Payload

payload

Return type for `webhookSubscriptionCreate` mutation.

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

* [webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionCreate)

  mutation

  Creates a webhook subscription that notifies your [`App`](https://shopify.dev/docs/api/admin-graphql/latest/objects/App) when specific events occur in a shop. Webhooks push event data to your endpoint immediately when changes happen, eliminating the need for polling.

  The subscription configuration supports multiple endpoint types including HTTPS URLs, Google Pub/Sub topics, and AWS EventBridge event sources. You can filter events using [Shopify API search syntax](https://shopify.dev/docs/api/usage/search-syntax) to receive only relevant webhooks, control which data fields are included in webhook payloads, and specify metafield namespaces to include.

  ***

  Note

  The Webhooks API version [configured in your app](https://shopify.dev/docs/apps/build/webhooks/subscribe/use-newer-api-version) determines the API version for webhook events. You can't specify it per subscription.

  ***

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * topic

    [Webhook​Subscription​Topic!](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionTopic)

    required

    ### Arguments

    The type of event that triggers the webhook.

  * webhook​Subscription

    [Webhook​Subscription​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput)

    required

    Specifies the input fields for a webhook subscription.

  ***

***

## Map

### Mutations with this payload

* [webhook​Subscription​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/webhookSubscriptionCreate)
