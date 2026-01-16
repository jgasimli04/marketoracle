---
title: PubSubWebhookSubscriptionInput - GraphQL Admin
description: The input fields for a PubSub webhook subscription.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PubSubWebhookSubscriptionInput.md
---

# Pub​Sub​Webhook​Subscription​Input

input\_object

The input fields for a PubSub webhook subscription.

## Fields

* filter

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A constraint specified using search syntax that ensures only webhooks that match the specified filter are emitted. See our [guide on filters](https://shopify.dev/docs/apps/build/webhooks/customize/filters) for more details.

* format

  [Webhook​Subscription​Format](https://shopify.dev/docs/api/admin-graphql/latest/enums/WebhookSubscriptionFormat)

  The format in which the webhook subscription should send the data.

* include​Fields

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The list of fields to be included in the webhook subscription. Only the fields specified will be included in the webhook payload. If null, then all fields will be included. Learn more about [modifying webhook payloads](https://shopify.dev/docs/apps/build/webhooks/customize/modify_payloads).

* metafield​Namespaces

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The list of namespaces for any metafields that should be included in the webhook subscription.

* metafields

  [\[Has​Metafields​Metafield​Identifier​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/HasMetafieldsMetafieldIdentifierInput)

  A list of identifiers specifying metafields to include in the webhook payload.

* pub​Sub​Project

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The Pub/Sub project ID.

* pub​Sub​Topic

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The Pub/Sub topic ID.

***

## Map

No referencing types
