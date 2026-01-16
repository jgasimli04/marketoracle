---
title: SubscriptionDraftDiscountRemovePayload - GraphQL Admin
description: Return type for `subscriptionDraftDiscountRemove` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftDiscountRemovePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftDiscountRemovePayload.md
---

# Subscription​Draft​Discount​Remove​Payload

payload

Return type for `subscriptionDraftDiscountRemove` mutation.

## Fields

* discount​Removed

  [Subscription​Discount](https://shopify.dev/docs/api/admin-graphql/latest/unions/SubscriptionDiscount)

  The removed subscription draft discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The subscription contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Draft​Discount​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountRemove)

  mutation

  Removes a subscription discount from a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the subscription contract draft to remove a subscription discount from.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the subscription draft discount to remove.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Discount​Remove](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftDiscountRemove)
