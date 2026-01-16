---
title: SubscriptionDeliveryMethodPickupInput - GraphQL Admin
description: "The input fields for a pickup delivery method.\n\nThis input accepts partial input.\_When a field is not provided,\nits prior value is left unchanged."
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodPickupInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodPickupInput.md
---

# Subscription​Delivery​Method​Pickup​Input

input\_object

The input fields for a pickup delivery method.

This input accepts partial input. When a field is not provided, its prior value is left unchanged.

## Fields

* pickup​Option

  [Subscription​Delivery​Method​Pickup​Option​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodPickupOptionInput)

  The details of the pickup method to use.

***

## Input objects using this input

* [Subscription​Delivery​Method​Input.pickup](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput#fields-pickup)

  INPUT OBJECT

  Specifies delivery method fields for a subscription draft. This is an input union: one, and only one, field can be provided. The field provided will determine which delivery method is to be used.

***

## Map

### Input objects using this input

* [Subscription​Delivery​Method​Input.pickup](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput#fields-pickup)
