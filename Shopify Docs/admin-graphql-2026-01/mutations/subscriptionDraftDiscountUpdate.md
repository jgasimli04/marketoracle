---
title: subscriptionDraftDiscountUpdate - GraphQL Admin
description: Updates a subscription discount on a subscription draft.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate.md
---

# subscription​Draft​Discount​Update

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Updates a subscription discount on a subscription draft.

## Arguments

* discount​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The gid of the Subscription Discount to update.

* draft​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the Subscription Contract draft to update a subscription discount on.

* input

  [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

  required

  The properties to update on the Subscription Discount.

***

## Subscription​Draft​Discount​Update​Payload returns

* discount​Updated

  [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The updated Subscription Discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionDraftDiscountUpdate reference

## Mutation Reference

```graphql
mutation subscriptionDraftDiscountUpdate($draftId: ID!, $discountId: ID!, $input: SubscriptionManualDiscountInput!) {
  subscriptionDraftDiscountUpdate(draftId: $draftId, discountId: $discountId, input: $input) {
    discountUpdated {
      # SubscriptionManualDiscount fields
    }
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
  "discountId": "gid://shopify/<objectName>/10079785100",
  "input": {
    "title": "<your-title>",
    "value": {
      "percentage": 1,
      "fixedAmount": {}
    },
    "recurringCycleLimit": 1,
    "entitledLines": {
      "all": true,
      "lines": {}
    }
  }
}
```

##### Schema

```graphql
input SubscriptionManualDiscountInput {
  title: String
  value: SubscriptionManualDiscountValueInput
  recurringCycleLimit: Int
  entitledLines: SubscriptionManualDiscountEntitledLinesInput
}

input SubscriptionManualDiscountValueInput {
  percentage: Int
  fixedAmount: SubscriptionManualDiscountFixedAmountInput
}

input SubscriptionManualDiscountEntitledLinesInput {
  all: Boolean
  lines: SubscriptionManualDiscountLinesInput
}
```
