---
title: SubscriptionDeliveryMethodLocalDeliveryOptionInput - GraphQL Admin
description: The input fields for local delivery option.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryOptionInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryOptionInput.md
---

# Subscription​Delivery​Method​Local​Delivery​Option​Input

input\_object

The input fields for local delivery option.

## Fields

* code

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  A custom reference to the delivery method for use with automations.

* description

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The details displayed to the customer to describe the local delivery option.

* instructions

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The delivery instructions that the customer can provide to the merchant.

* phone

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The phone number that the customer must provide to the merchant. Formatted using E.164 standard. For example, `+16135551111`.

* presentment​Title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The presentment title of the local delivery option.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title of the local delivery option.

***

## Input objects using this input

* [Subscription​Delivery​Method​Local​Delivery​Input.localDeliveryOption](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput#fields-localDeliveryOption)

  INPUT OBJECT

  The input fields for a local delivery method.

  This input accepts partial input. When a field is not provided, its prior value is left unchanged.

***

## Map

### Input objects using this input

* [Subscription​Delivery​Method​Local​Delivery​Input.localDeliveryOption](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput#fields-localDeliveryOption)
