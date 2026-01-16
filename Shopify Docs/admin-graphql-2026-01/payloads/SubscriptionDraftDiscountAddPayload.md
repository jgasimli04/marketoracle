---
title: SubscriptionDraftDiscountAddPayload - GraphQL Admin
description: Return type for `subscriptionDraftDiscountAdd` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftDiscountAddPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftDiscountAddPayload.md
---

# Subscription​Draft​Discount​Add​Payload

payload

Return type for `subscriptionDraftDiscountAdd` mutation.

## Fields

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

## Mutations with this payload

* [subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountAdd)

  mutation

  Adds a subscription discount to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to add a subscription discount to.

  * input

    [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

    required

    The properties of the new Subscription Discount.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftDiscountAdd)
