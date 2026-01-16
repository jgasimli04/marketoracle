---
title: SubscriptionBillingCycleSkipPayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleSkip` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleSkipPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleSkipPayload.md
---

# Subscription​Billing​Cycle​Skip​Payload

payload

Return type for `subscriptionBillingCycleSkip` mutation.

## Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Skip​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleSkipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)

  mutation

  Skips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleSkip)
