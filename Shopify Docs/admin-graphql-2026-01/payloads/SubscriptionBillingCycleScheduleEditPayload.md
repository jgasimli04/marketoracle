---
title: SubscriptionBillingCycleScheduleEditPayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleScheduleEdit` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleScheduleEditPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleScheduleEditPayload.md
---

# Subscription​Billing​Cycle​Schedule​Edit​Payload

payload

Return type for `subscriptionBillingCycleScheduleEdit` mutation.

## Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Cycle​Schedule​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)

  mutation

  Modify the schedule of a specific billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  * input

    [Subscription​Billing​Cycle​Schedule​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleScheduleEditInput)

    required

    Data used to create or modify billing cycle schedule edit.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Schedule​Edit](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleScheduleEdit)
