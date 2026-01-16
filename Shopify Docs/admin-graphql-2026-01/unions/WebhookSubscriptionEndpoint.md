---
title: WebhookSubscriptionEndpoint - GraphQL Admin
description: An endpoint to which webhook subscriptions send webhooks events.
api_version: 2026-01
api_name: admin
type: union
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/WebhookSubscriptionEndpoint
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/unions/WebhookSubscriptionEndpoint.md
---

# Webhook​Subscription​Endpoint

union

An endpoint to which webhook subscriptions send webhooks events.

## Possible types

* [Webhook​Event​Bridge​Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookEventBridgeEndpoint)

  OBJECT

  Connects your app to Amazon EventBridge so you can receive Shopify webhook events and process them through AWS's event-driven architecture. This gives you enterprise-grade scalability and lets you tap into the full AWS ecosystem for handling webhook traffic.

  For example, when a customer places an order, Shopify can publish the order creation event directly to your EventBridge partner source, allowing your AWS infrastructure to process the event through Lambda functions, SQS queues, or other AWS services.

  EventBridge endpoints provide enterprise-grade event routing and processing capabilities, making them ideal for apps that need to handle high-volume webhook traffic or integrate deeply with AWS services.

  Learn more about [webhook endpoints](https://shopify.dev/docs/apps/build/webhooks/subscribe/get-started).

  * arn

    [ARN!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ARN)

    non-null

    The ARN of this EventBridge partner event source.

* [Webhook​Http​Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookHttpEndpoint)

  OBJECT

  An HTTPS endpoint that receives webhook events as POST requests, letting your app respond to Shopify events in real-time. This is the most common webhook endpoint type, allowing apps to process Shopify events through standard HTTP callbacks.

  For example, when setting up order notifications, your app would provide an HTTPS URL like `https://yourapp.com/webhooks/orders/create` to receive order creation events as JSON payloads.

  HTTP endpoints offer straightforward webhook integration with immediate event delivery, making them suitable for apps that need real-time notifications without complex infrastructure requirements.

  Learn more about [HTTP webhook configuration](https://shopify.dev/docs/apps/build/webhooks/subscribe/https).

  * callback​Url

    [URL!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/URL)

    non-null

    The URL to which the webhooks events are sent.

* [Webhook​Pub​Sub​Endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookPubSubEndpoint)

  OBJECT

  Individual Google Cloud Pub/Sub topics that receive webhook events for reliable, asynchronous processing. This endpoint type lets your app tap into Google Cloud's messaging infrastructure to handle events at scale.

  For example, when inventory levels change, Shopify can publish these events to your Pub/Sub topic `projects/your-project/topics/inventory-updates`, allowing your Google Cloud functions or services to process inventory changes at their own pace.

  Pub/Sub endpoints provide reliable message delivery to Google Cloud Pub/Sub, making them excellent for apps that need to handle variable webhook volumes or integrate with Google Cloud Platform services.

  Learn more about [Pub/Sub webhook configuration](https://shopify.dev/docs/apps/build/webhooks/subscribe/get-started).

  * pub​Sub​Project

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The Google Cloud Pub/Sub project ID.

  * pub​Sub​Topic

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    non-null

    The Google Cloud Pub/Sub topic ID.

***

## Fields with this union

* [Webhook​Subscription.endpoint](https://shopify.dev/docs/api/admin-graphql/latest/objects/WebhookSubscription#field-WebhookSubscription.fields.endpoint)

  OBJECT

  Deprecated

***

```graphql
union WebhookSubscriptionEndpoint = WebhookEventBridgeEndpoint | WebhookHttpEndpoint | WebhookPubSubEndpoint
```
