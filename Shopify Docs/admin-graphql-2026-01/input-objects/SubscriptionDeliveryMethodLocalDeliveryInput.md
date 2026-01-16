---
title: SubscriptionDeliveryMethodLocalDeliveryInput - GraphQL Admin
description: "The input fields for a local delivery method.\n\nThis input accepts partial input.\_When a field is not provided,\nits prior value is left unchanged."
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryInput.md
---

# Subscription​Delivery​Method​Local​Delivery​Input

input\_object

The input fields for a local delivery method.

This input accepts partial input. When a field is not provided, its prior value is left unchanged.

## Fields

* address

  [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  The address to deliver to.

* local​Delivery​Option

  [Subscription​Delivery​Method​Local​Delivery​Option​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodLocalDeliveryOptionInput)

  The details of the local delivery method to use.

***

## Input objects using this input

* [Subscription​Delivery​Method​Input.localDelivery](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput#fields-localDelivery)

  INPUT OBJECT

  Specifies delivery method fields for a subscription draft. This is an input union: one, and only one, field can be provided. The field provided will determine which delivery method is to be used.

***

## Map

### Input objects using this input

* [Subscription​Delivery​Method​Input.localDelivery](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput#fields-localDelivery)
