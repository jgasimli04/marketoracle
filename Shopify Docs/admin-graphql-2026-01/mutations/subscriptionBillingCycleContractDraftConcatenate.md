---
title: subscriptionBillingCycleContractDraftConcatenate - GraphQL Admin
description: Concatenates a contract to a Subscription Draft.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleContractDraftConcatenate.md
---

# subscription​Billing​Cycle​Contract​Draft​Concatenate

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Concatenates a contract to a Subscription Draft.

## Arguments

* concatenated​Billing​Cycle​Contracts

  [\[Subscription​Billing​Cycle​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

  required

  An array of Subscription Contracts with their selected billing cycles to concatenate to the subscription draft.

* draft​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The gid of the Subscription Contract draft to update.

***

## Subscription​Billing​Cycle​Contract​Draft​Concatenate​Payload returns

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionBillingCycleContractDraftConcatenate reference

## Mutation Reference

```graphql
mutation subscriptionBillingCycleContractDraftConcatenate($draftId: ID!, $concatenatedBillingCycleContracts: [SubscriptionBillingCycleInput!]!) {
  subscriptionBillingCycleContractDraftConcatenate(draftId: $draftId, concatenatedBillingCycleContracts: $concatenatedBillingCycleContracts) {
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
  "draftId": "gid://shopify/<objectName>/10079785100",
  "concatenatedBillingCycleContracts": [
    {
      "contractId": "gid://shopify/<objectName>/10079785100",
      "selector": {
        "index": 1,
        "date": "2019-09-07T15:50:00Z"
      }
    }
  ]
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
