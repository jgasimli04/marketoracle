---
title: subscriptionBillingCycleContractEdit - GraphQL Admin
description: Edit the contents of a subscription contract for the specified billing cycle.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractEdit.md
---

# subscription​Billing​Cycle​Contract​Edit

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Edit the contents of a subscription contract for the specified billing cycle.

## Arguments

* billing​Cycle​Input

  [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

  required

  Input object for selecting and using billing cycles.

***

## Subscription​Billing​Cycle​Contract​Edit​Payload returns

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The draft subscription contract object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionBillingCycleContractEdit reference

## Mutation Reference

```graphql
mutation subscriptionBillingCycleContractEdit($billingCycleInput: SubscriptionBillingCycleInput!) {
  subscriptionBillingCycleContractEdit(billingCycleInput: $billingCycleInput) {
    draft {
      # SubscriptionDraft fields
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
