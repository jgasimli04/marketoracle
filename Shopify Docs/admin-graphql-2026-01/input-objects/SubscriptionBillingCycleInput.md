---
title: SubscriptionBillingCycleInput - GraphQL Admin
description: >-
  The input fields for specifying the subscription contract and selecting the
  associated billing cycle.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput.md
---

# Subscription​Billing​Cycle​Input

input\_object

The input fields for specifying the subscription contract and selecting the associated billing cycle.

## Fields

* contract​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  non-null

  The ID of the subscription contract associated with the billing cycle.

* selector

  [Subscription​Billing​Cycle​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector)

  required

  Selects the billing cycle by date or index.

***

## Map

No referencing types
