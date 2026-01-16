---
title: SubscriptionDeliveryMethodInput - GraphQL Admin
description: |-
  Specifies delivery method fields for a subscription draft.
  This is an input union: one, and only one, field can be provided.
  The field provided will determine which delivery method is to be used.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput.md
---

# Subscription​Delivery​Method​Input

input\_object

Specifies delivery method fields for a subscription draft. This is an input union: one, and only one, field can be provided. The field provided will determine which delivery method is to be used.

## Fields

* local​Delivery

  [Subscription​Delivery​Method​Local​Delivery​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput)

  The input fields for the local delivery method.

* pickup

  [Subscription​Delivery​Method​Pickup​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodPickupInput)

  The input fields for the pickup delivery method.

* shipping

  [Subscription​Delivery​Method​Shipping​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodShippingInput)

  The input fields for the shipping delivery method.

***

## Input objects using this input

* [Subscription​Draft​Input.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-deliveryMethod)

  INPUT OBJECT

  The input fields required to create a Subscription Draft.

***

## Map

### Input objects using this input

* [Subscription​Draft​Input.deliveryMethod](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDraftInput#fields-deliveryMethod)
