---
title: WebhookSubscriptionFormat - GraphQL Admin
description: The supported formats for webhook subscriptions.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat.md
---

# Webhook​Subscription​Format

enum

The supported formats for webhook subscriptions.

## Valid values

* JSON
* XML

***

## Fields

* [Event​Bridge​Webhook​Subscription​Input.format](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput#fields-format)

  INPUT OBJECT

  The input fields for an EventBridge webhook subscription.

* [Pub​Sub​Webhook​Subscription​Input.format](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput#fields-format)

  INPUT OBJECT

  The input fields for a PubSub webhook subscription.

* [Webhook​Subscription.format](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription#field-WebhookSubscription.fields.format)

  OBJECT

  A webhook subscription is a persisted data object created by an app using the REST Admin API or GraphQL Admin API. It describes the topic that the app wants to receive, and a destination where Shopify should send webhooks of the specified topic. When an event for a given topic occurs, the webhook subscription sends a relevant payload to the destination. Learn more about the [webhooks system](https://shopify.dev/apps/webhooks).

* [Webhook​Subscription​Input.format](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput#fields-format)

  INPUT OBJECT

  The input fields for a webhook subscription.

* [Query​Root.webhookSubscriptions(format)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.webhookSubscriptions.arguments.format)

  ARGUMENT

  The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start.

* [webhook​Subscriptions.format](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions#arguments-format)

  ARGUMENT

***

## Map

### Fields with this enum

* <-|[Webhook​Subscription.format](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription#field-WebhookSubscription.fields.format)

### Inputs with this enum

* [Event​Bridge​Webhook​Subscription​Input.format](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput#fields-format)
* [Pub​Sub​Webhook​Subscription​Input.format](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput#fields-format)
* [Webhook​Subscription​Input.format](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput#fields-format)

### Arguments with this enum

* <-|[Query​Root.webhookSubscriptions(format)](https://shopify.dev/docs/api/admin-graphql/latest/objects/QueryRoot#field-QueryRoot.fields.webhookSubscriptions.arguments.format)
* <-|[webhook​Subscriptions.format](https://shopify.dev/docs/api/admin-graphql/latest/queries/webhookSubscriptions#arguments-format)
