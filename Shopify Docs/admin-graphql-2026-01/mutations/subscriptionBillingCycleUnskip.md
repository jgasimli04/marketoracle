---
title: subscriptionBillingCycleUnskip - GraphQL Admin
description: Unskips a Subscription Billing Cycle.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip.md
---

# subscription​Billing​Cycle​Unskip

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Unskips a Subscription Billing Cycle.

## Arguments

* billing​Cycle​Input

  [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

  required

  Input object for selecting and using billing cycles.

***

## Subscription​Billing​Cycle​Unskip​Payload returns

* billing​Cycle

  [Subscription​Billing​Cycle](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle)

  The updated billing cycle.

* user​Errors

  [\[Subscription​Billing​Cycle​Unskip​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUnskipUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionBillingCycleUnskip reference

## Mutation Reference

```graphql
mutation subscriptionBillingCycleUnskip($billingCycleInput: SubscriptionBillingCycleInput!) {
  subscriptionBillingCycleUnskip(billingCycleInput: $billingCycleInput) {
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
