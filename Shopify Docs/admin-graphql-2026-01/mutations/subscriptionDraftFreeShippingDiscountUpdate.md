---
title: subscriptionDraftFreeShippingDiscountUpdate - GraphQL Admin
description: Updates a subscription free shipping discount on a subscription draft.
api_version: 2026-01
api_name: admin
type: mutation
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountUpdate.md
---

# subscription​Draft​Free​Shipping​Discount​Update

mutation

Requires `write_own_subscription_contracts` access scope. Also: The user must have manage\_orders\_information permission.

Updates a subscription free shipping discount on a subscription draft.

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

  [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

  required

  The properties to update on the Subscription Free Shipping Discount.

***

## Subscription​Draft​Free​Shipping​Discount​Update​Payload returns

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

* ### subscriptionDraftFreeShippingDiscountUpdate reference

## Mutation Reference

```graphql
mutation subscriptionDraftFreeShippingDiscountUpdate($draftId: ID!, $discountId: ID!, $input: SubscriptionFreeShippingDiscountInput!) {
  subscriptionDraftFreeShippingDiscountUpdate(draftId: $draftId, discountId: $discountId, input: $input) {
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
    "recurringCycleLimit": 1
  }
}
```

##### Schema

```graphql
input SubscriptionFreeShippingDiscountInput {
  title: String
  recurringCycleLimit: Int
}
```
