---
title: SubscriptionDraftFreeShippingDiscountAddPayload - GraphQL Admin
description: Return type for `subscriptionDraftFreeShippingDiscountAdd` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftFreeShippingDiscountAddPayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionDraftFreeShippingDiscountAddPayload.md
---

# Subscription​Draft​Free​Shipping​Discount​Add​Payload

payload

Return type for `subscriptionDraftFreeShippingDiscountAdd` mutation.

## Fields

* discount​Added

  [Subscription​Manual​Discount](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionManualDiscount)

  The added subscription free shipping discount.

* draft

  [Subscription​Draft](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraft)

  The subscription contract draft object.

* user​Errors

  [\[Subscription​Draft​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionDraftUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionDraftFreeShippingDiscountAdd)

  mutation

  Adds a subscription free shipping discount to a subscription draft.

  * draft​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract draft to add a subscription free shipping discount to.

  * input

    [Subscription​Free​Shipping​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionFreeShippingDiscountInput)

    required

    The properties of the new subscription free shipping discount.

  ***

***

## Map

### Mutations with this payload

* [subscription​Draft​Free​Shipping​Discount​Add](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionDraftFreeShippingDiscountAdd)
