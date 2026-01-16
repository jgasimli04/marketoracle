---
title: SubscriptionBillingCycleScheduleEditInput - GraphQL Admin
description: >-
  The input fields for parameters to modify the schedule of a specific billing
  cycle.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleScheduleEditInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleScheduleEditInput.md
---

# Subscription​Billing​Cycle​Schedule​Edit​Input

input\_object

The input fields for parameters to modify the schedule of a specific billing cycle.

## Fields

* billing​Date

  [Date​Time](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

  Sets the expected billing date for the billing cycle.

* reason

  [Subscription​Billing​Cycle​Schedule​Edit​Input​Schedule​Edit​Reason!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleScheduleEditInputScheduleEditReason)

  non-null

  The reason for editing.

* skip

  [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

  Sets the skip status for the billing cycle.

***

## Map

No referencing types
