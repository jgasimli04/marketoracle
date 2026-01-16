---
title: subscriptionBillingCycleSkip - GraphQL Admin
description: Skips a Subscription Billing Cycle.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip.md
---

# subscription​Billing​Cycle​Skip

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Skips a Subscription Billing Cycle.

## Arguments

* billing​Cycle​Input

  [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

  required

  Input object for selecting and using billing cycles.

***

## Subscription​Billing​Cycle​Skip​Payload returns

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Skip​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleSkipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionBillingCycleSkip reference

## Mutation Reference

```graphql
mutation subscriptionBillingCycleSkip($billingCycleInput: SubscriptionBillingCycleInput!) {
  subscriptionBillingCycleSkip(billingCycleInput: $billingCycleInput) {
    billingCycle {
      # SubscriptionBillingCycle fields
    }
    userErrors {
      field
      message
    }
  }
}
```

## Input

##### Variables

```json
{
  "billingCycleInput": {
    "contractId": "gid://shopify/<objectName>/10079785100",
    "selector": {
      "index": 1,
      "date": "2019-09-07T15:50:00Z"
    }
  }
}
```

##### Schema

```graphql
input SubscriptionBillingCycleInput {
  contractId: ID!
  selector: SubscriptionBillingCycleSelector!
}

input SubscriptionBillingCycleSelector {
  index: Int
  date: DateTime
}
```
