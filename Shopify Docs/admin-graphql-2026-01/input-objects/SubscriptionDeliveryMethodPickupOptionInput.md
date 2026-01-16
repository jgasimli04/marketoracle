---
title: SubscriptionDeliveryMethodPickupOptionInput - GraphQL Admin
description: The input fields for pickup option.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodPickupOptionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodPickupOptionInput.md
---

# Subscription​Delivery​Method​Pickup​Option​Input

input\_object

The input fields for pickup option.

## Fields

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A custom reference to the delivery method for use with automations.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The details displayed to the customer to describe the pickup option.

* location​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the pickup location.

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The presentment title of the pickup option.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the pickup option.

***

## Input objects using this input

* [Subscription​Delivery​Method​Pickup​Input.pickupOption](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodPickupInput#fields-pickupOption)

  INPUT OBJECT

  The input fields for a pickup delivery method.

  This input accepts partial input. When a field is not provided, its prior value is left unchanged.

***

## Map

### Input objects using this input

* [Subscription​Delivery​Method​Pickup​Input.pickupOption](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodPickupInput#fields-pickupOption)
