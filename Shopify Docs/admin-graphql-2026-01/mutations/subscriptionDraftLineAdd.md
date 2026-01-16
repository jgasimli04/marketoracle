---
title: subscriptionDraftLineAdd - GraphQL Admin
description: Adds a subscription line to a subscription draft.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineAdd.md
---

# subscription​Draft​Line​Add

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Adds a subscription line to a subscription draft.

## Arguments

* draft​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The gid of the Subscription Contract draft to add a subscription line to.

* input

  [Subscription​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineInput)

  required

  The properties of the new Subscription Line.

***

## Subscription​Draft​Line​Add​Payload returns

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* line​Added

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The added Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionDraftLineAdd reference

## Mutation Reference

```graphql
mutation subscriptionDraftLineAdd($draftId: ID!, $input: SubscriptionLineInput!) {
  subscriptionDraftLineAdd(draftId: $draftId, input: $input) {
    draft {
      # SubscriptionDraft fields
    }
    lineAdded {
      # SubscriptionLine fields
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
  "input": {
    "productVariantId": "gid://shopify/<objectName>/10079785100",
    "quantity": 1,
    "currentPrice": "29.99",
    "customAttributes": [
      {
        "key": "<your-key>",
        "value": "<your-value>"
      }
    ],
    "sellingPlanId": "gid://shopify/<objectName>/10079785100",
    "sellingPlanName": "<your-sellingPlanName>",
    "pricingPolicy": {
      "basePrice": "29.99",
      "cycleDiscounts": [
        {}
      ]
    }
  }
}
```

##### Schema

```graphql
input SubscriptionLineInput {
  productVariantId: ID!
  quantity: Int!
  currentPrice: Decimal!
  customAttributes: [AttributeInput!]
  sellingPlanId: ID
  sellingPlanName: String
  pricingPolicy: SubscriptionPricingPolicyInput
}

input AttributeInput {
  key: String!
  value: String!
}

input SubscriptionPricingPolicyInput {
  basePrice: Decimal!
  cycleDiscounts: [SubscriptionPricingPolicyCycleDiscountsInput!]!
}
```
