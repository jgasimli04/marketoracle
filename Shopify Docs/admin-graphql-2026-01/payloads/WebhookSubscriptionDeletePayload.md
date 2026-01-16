---
title: WebhookSubscriptionDeletePayload - GraphQL Admin
description: Return type for `webhookSubscriptionDelete` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebhookSubscriptionDeletePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/WebhookSubscriptionDeletePayload.md
---

# Webhook​Subscription​Delete​Payload

payload

Return type for `webhookSubscriptionDelete` mutation.

## Fields

* deleted​Webhook​Subscription​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The ID of the deleted webhook subscription.

* user​Errors

  [\[User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/UserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [webhook​Subscription​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/webhookSubscriptionDelete)

  mutation

  Deletes a [`WebhookSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription) and stops all future webhooks to its endpoint. Returns the deleted subscription's ID for confirmation.

  Building an app? If you only use app-specific webhooks, you won't need this. App-specific webhook subscriptions specified in your `shopify.app.toml` may be easier. They are automatically kept up to date by Shopify & require less maintenance. Please read [About managing webhook subscriptions](https://shopify.dev/docs/apps/build/webhooks/subscribe).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the webhook subscription to delete.

  ***

***

## Map

### Mutations with this payload

* [webhook​Subscription​Delete](https://shopify.dev/docs/api/admin-graphql/latest/types/webhookSubscriptionDelete)
