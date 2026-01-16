---
title: SubscriptionManualDiscountEntitledLinesInput - GraphQL Admin
description: The input fields for the subscription lines the discount applies on.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountEntitledLinesInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountEntitledLinesInput.md
---

# Subscription​Manual​Discount​Entitled​Lines​Input

input\_object

The input fields for the subscription lines the discount applies on.

## Fields

* all

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Specify whether the subscription discount will apply on all subscription lines.

* lines

  [Subscription​Manual​Discount​Lines​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountLinesInput)

  The ID of the lines to add to or remove from the subscription discount.

***

## Input objects using this input

* [Subscription​Manual​Discount​Input.entitledLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput#fields-entitledLines)

  INPUT OBJECT

  The input fields for a subscription discount on a contract.

***

## Map

### Input objects using this input

* [Subscription​Manual​Discount​Input.entitledLines](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput#fields-entitledLines)
