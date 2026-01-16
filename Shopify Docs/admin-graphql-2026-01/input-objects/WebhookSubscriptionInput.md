---
title: WebhookSubscriptionInput - GraphQL Admin
description: The input fields for a webhook subscription.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/WebhookSubscriptionInput.md
---

# Webhook​Subscription​Input

input\_object

The input fields for a webhook subscription.

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

* uri

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The URI where the webhook subscription should send events. Supports an HTTPS URL, a Google Pub/Sub URI (pubsub://{project-id}:{topic-id}) or an Amazon EventBridge event source ARN.

* callback​Url

  [URL](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

  Deprecated

***

## Map

No referencing types
