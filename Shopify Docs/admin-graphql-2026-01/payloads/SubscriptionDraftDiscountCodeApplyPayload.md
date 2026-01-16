---
title: SubscriptionDraftDiscountCodeApplyPayload - GraphQL Admin
description: Return type for `subscriptionDraftDiscountCodeApply` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftDiscountCodeApplyPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftDiscountCodeApplyPayload.md
---

# Subscription​Draft​Discount​Code​Apply​Payload

payload

Return type for `subscriptionDraftDiscountCodeApply` mutation.

## Fields

* applied​Discount

  [Subscription​Applied​Code​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionAppliedCodeDiscount)

  The added subscription discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The subscription contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountCodeApply)

  mutation

  Applies a code discount on the subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the subscription contract draft to apply a subscription code discount on.

  * redeem​Code

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    Code discount redeem code.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Discount​Code​Apply](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftDiscountCodeApply)
