---
title: SubscriptionLineInput - GraphQL Admin
description: The input fields required to add a new subscription line to a contract.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput.md
---

# Subscription​Line​Input

input\_object

The input fields required to add a new subscription line to a contract.

## Fields

* current​Price

  [Decimal!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Decimal)

  non-null

  The price of the product.

* custom​Attributes

  [\[Attribute​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/AttributeInput)

  The custom attributes for this subscription line.

* pricing​Policy

  [Subscription​Pricing​Policy​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionPricingPolicyInput)

  Describes expected price changes of the subscription line over time.

* product​Variant​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the product variant the subscription line refers to.

* quantity

  [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  non-null

  The quantity of the product.

* selling​Plan​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The selling plan for the subscription line.

* selling​Plan​Name

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The selling plan name for the subscription line.

  Defaults to using the selling plan's current name when not specified.

***

## Input objects using this input

* [Subscription​Atomic​Line​Input.line](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicLineInput#fields-line)

  INPUT OBJECT

  The input fields for mapping a subscription line to a discount.

***

## Map

### Input objects using this input

* [Subscription​Atomic​Line​Input.line](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionAtomicLineInput#fields-line)
