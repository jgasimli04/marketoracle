---
title: HasMetafieldsMetafieldIdentifierInput - GraphQL Admin
description: The input fields that identify metafield definitions.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/HasMetafieldsMetafieldIdentifierInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/HasMetafieldsMetafieldIdentifierInput.md
---

# Has​Metafields​Metafield​Identifier​Input

input\_object

The input fields that identify metafield definitions.

## Fields

* key

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The unique identifier for the metafield definition within its namespace.

* namespace

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The container for a group of metafields that the metafield definition will be associated with. If omitted, the app-reserved namespace will be used.

***

## Input objects using this input

* [Event​Bridge​Webhook​Subscription​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput#fields-metafields)

  INPUT OBJECT

  The input fields for an EventBridge webhook subscription.

* [Pub​Sub​Webhook​Subscription​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput#fields-metafields)

  INPUT OBJECT

  The input fields for a PubSub webhook subscription.

* [Webhook​Subscription​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput#fields-metafields)

  INPUT OBJECT

  The input fields for a webhook subscription.

***

## Map

### Input objects using this input

* [Event​Bridge​Webhook​Subscription​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/EventBridgeWebhookSubscriptionInput#fields-metafields)
* [Pub​Sub​Webhook​Subscription​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput#fields-metafields)
* [Webhook​Subscription​Input.metafields](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput#fields-metafields)
