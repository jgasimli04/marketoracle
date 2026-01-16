---
title: SubscriptionManualDiscountInput - GraphQL Admin
description: The input fields for a subscription discount on a contract.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput.md
---

# Subscription​Manual​Discount​Input

input\_object

The input fields for a subscription discount on a contract.

## Fields

* entitled​Lines

  [Subscription​Manual​Discount​Entitled​Lines​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountEntitledLinesInput)

  Entitled line items used to apply the subscription discount on.

* recurring​Cycle​Limit

  [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

  The maximum number of times the subscription discount will be applied on orders.

* title

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The title associated with the subscription discount.

* value

  [Subscription​Manual​Discount​Value​Input](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountValueInput)

  Percentage or fixed amount value of the discount.

***

## Map

No referencing types
