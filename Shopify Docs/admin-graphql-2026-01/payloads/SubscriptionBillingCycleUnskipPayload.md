---
title: SubscriptionBillingCycleUnskipPayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleUnskip` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleUnskipPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleUnskipPayload.md
---

# Subscription​Billing​Cycle​Unskip​Payload

payload

Return type for `subscriptionBillingCycleUnskip` mutation.

## Fields

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Unskip​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUnskipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)

  mutation

  Unskips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleUnskip)
