---
title: SubscriptionBillingAttemptCreatePayload - GraphQL Admin
description: Return type for `subscriptionBillingAttemptCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingAttemptCreatePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingAttemptCreatePayload.md
---

# Subscription​Billing​Attempt​Create​Payload

payload

Return type for `subscriptionBillingAttemptCreate` mutation.

## Fields

* subscription​Billing​Attempt

  [Subscription​Billing​Attempt](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt)

  The subscription billing attempt.

* user​Errors

  [\[Billing​Attempt​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

* [subscription​Billing​Attempt​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate)

  mutation

  Creates a billing attempt to charge for a [`SubscriptionContract`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContract). The mutation processes either the payment for the current billing cycle or for a specific cycle, if selected.

  The mutation creates an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) when successful. Failed billing attempts include a [`processingError`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#returns-subscriptionBillingAttempt.fields.processingError) field with error details.

  ***

  Tip

  Use the [`idempotencyKey`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate#arguments-subscriptionBillingAttemptInput.fields.idempotencyKey) to ensure the billing attempt executes only once, preventing duplicate charges if the request is retried.

  ***

  You can target a specific billing cycle using the [`billingCycleSelector`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector) to bill past or future cycles. The [`originTime`](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-SubscriptionBillingAttempt.fields.originTime) parameter adjusts fulfillment scheduling for attempts completed after the expected billing date.

  Learn more about [creating billing attempts](https://shopify.dev/docs/apps/build/purchase-options/subscriptions/contracts/build-a-subscription-contract#step-4-create-a-billing-attempt).

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * subscription​Billing​Attempt​Input

    [Subscription​Billing​Attempt​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingAttemptInput)

    required

    The information to apply as a billing attempt.

  ***

***

## Map

### Mutations with this payload

* [subscription​Billing​Attempt​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingAttemptCreate)
