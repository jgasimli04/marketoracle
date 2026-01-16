---
title: SubscriptionDeliveryMethodShippingInput - GraphQL Admin
description: "Specifies shipping delivery method fields.\n\nThis input accepts partial input.\_When a field is not provided,\nits prior value is left unchanged."
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodShippingInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodShippingInput.md
---

# Subscription​Delivery​Method​Shipping​Input

input\_object

Specifies shipping delivery method fields.

This input accepts partial input. When a field is not provided, its prior value is left unchanged.

## Fields

* address

  [Mailing​Address​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MailingAddressInput)

  The address to ship to.

* shipping​Option

  [Subscription​Delivery​Method​Shipping​Option​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodShippingOptionInput)

  The details of the shipping method to use.

***

## Input objects using this input

* [Subscription​Delivery​Method​Input.shipping](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput#fields-shipping)

  INPUT OBJECT

  Specifies delivery method fields for a subscription draft. This is an input union: one, and only one, field can be provided. The field provided will determine which delivery method is to be used.

***

## Map

### Input objects using this input

* [Subscription​Delivery​Method​Input.shipping](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionDeliveryMethodInput#fields-shipping)
