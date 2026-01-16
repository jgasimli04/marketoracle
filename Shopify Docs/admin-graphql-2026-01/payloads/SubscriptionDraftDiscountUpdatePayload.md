---
title: SubscriptionDraftDiscountUpdatePayload - GraphQL Admin
description: Return type for `subscriptionDraftDiscountUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftDiscountUpdatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftDiscountUpdatePayload.md
---

# Subscription​Draft​Discount​Update​Payload

payload

Return type for `subscriptionDraftDiscountUpdate` mutation.

## Fields

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

## Mutations with this payload

* [subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftDiscountUpdate)

  mutation

  Updates a subscription discount on a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract draft to update a subscription discount on.

  * discount​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The gid of the Subscription Discount to update.

  * input

    [Subscription​Manual​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionManualDiscountInput)

    required

    The properties to update on the Subscription Discount.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Discount​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftDiscountUpdate)
