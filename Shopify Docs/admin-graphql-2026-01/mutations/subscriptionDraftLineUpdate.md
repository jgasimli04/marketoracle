---
title: subscriptionDraftLineUpdate - GraphQL Admin
description: Updates a subscription line on a subscription draft.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftLineUpdate.md
---

# subscription​Draft​Line​Update

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Updates a subscription line on a subscription draft.

## Arguments

* draft​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The gid of the Subscription Contract draft to update a subscription line from.

* input

  [Subscription​Line​Update​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionLineUpdateInput)

  required

  The properties of the new Subscription Line.

* line​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The gid of the Subscription Line to update.

***

## Subscription​Draft​Line​Update​Payload returns

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* line​Updated

  [Subscription​Line](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionLine)

  The updated Subscription Line.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionDraftLineUpdate reference

## Mutation Reference

```graphql
mutation subscriptionDraftLineUpdate($draftId: ID!, $lineId: ID!, $input: SubscriptionLineUpdateInput!) {
  subscriptionDraftLineUpdate(draftId: $draftId, lineId: $lineId, input: $input) {
    draft {
      # SubscriptionDraft fields
    }
    lineUpdated {
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
  "lineId": "gid://shopify/<objectName>/10079785100",
  "input": {
    "productVariantId": "gid://shopify/<objectName>/10079785100",
    "quantity": 1,
    "sellingPlanId": "gid://shopify/<objectName>/10079785100",
    "sellingPlanName": "<your-sellingPlanName>",
    "currentPrice": "29.99",
    "customAttributes": [
      {
        "key": "<your-key>",
        "value": "<your-value>"
      }
    ],
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
input SubscriptionLineUpdateInput {
  productVariantId: ID
  quantity: Int
  sellingPlanId: ID
  sellingPlanName: String
  currentPrice: Decimal
  customAttributes: [AttributeInput!]
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
