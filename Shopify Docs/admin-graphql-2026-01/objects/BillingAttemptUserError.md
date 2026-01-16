---
title: BillingAttemptUserError - GraphQL Admin
description: >-
  Represents an error that happens during the execution of a billing attempt
  mutation.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/BillingAttemptUserError.md
---

# Billing​Attempt​User​Error

object

Requires `read_own_subscription_contracts` access scope.

Represents an error that happens during the execution of a billing attempt mutation.

## Fields

* code

  [Billing​Attempt​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/BillingAttemptUserErrorCode)

  The error code.

* field

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The path to the input field that caused the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The error message.

***

## Map

No referencing types

***

## Mutations

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

* [subscription​Billing​Cycle​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleCharge)

  mutation

  Creates a new subscription billing attempt for a specified billing cycle. This is the alternative mutation for [subscriptionBillingAttemptCreate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate). For more information, refer to [Create a subscription contract](https://shopify.dev/docs/apps/selling-strategies/subscriptions/contracts/create#step-4-create-a-billing-attempt).

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the subscription contract.

  * billing​Cycle​Selector

    [Subscription​Billing​Cycle​Selector!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleSelector)

    required

    Select the specific billing cycle to be billed. If the selected billing cycle's [billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-subscriptionbillingcycle-billingattemptexpecteddate) is in the past, the [originTime](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttempt#field-subscriptionbillingattempt-origintime) of the billing attempt will be set to this date. However, if the [billingAttemptExpectedDate](https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycle#field-subscriptionbillingcycle-billingattemptexpecteddate) is in the future, the originTime will be the current time.

  * inventory​Policy

    [Subscription​Billing​Attempt​Inventory​Policy](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptInventoryPolicy)

    Default:PRODUCT\_VARIANT\_INVENTORY\_POLICY

    The behaviour to use when updating inventory.

  ***

***

## <\~> BillingAttemptUserError Mutations

### Mutated by

* <\~>[subscription​Billing​Attempt​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingAttemptCreate)
* <\~>[subscription​Billing​Cycle​Charge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleCharge)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-BillingAttemptUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
