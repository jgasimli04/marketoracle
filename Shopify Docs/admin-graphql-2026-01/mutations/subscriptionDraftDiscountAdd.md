---
title: subscriptionDraftDiscountAdd - GraphQL Admin
description: Adds a subscription discount to a subscription draft.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd.md
---

# subscription​Draft​Discount​Add

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Adds a subscription discount to a subscription draft.

## Arguments

* draft​Id

  [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  required

  The ID of the Subscription Contract draft to add a subscription discount to.

* input

  [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

  required

  The properties of the new Subscription Discount.

***

## Subscription​Draft​Discount​Add​Payload returns

* discount​Added

  [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The added Subscription Discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The Subscription Contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Examples

* ### subscriptionDraftDiscountAdd reference

## Mutation Reference

```graphql
mutation subscriptionDraftDiscountAdd($draftId: ID!, $input: SubscriptionManualDiscountInput!) {
  subscriptionDraftDiscountAdd(draftId: $draftId, input: $input) {
    discountAdded {
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
