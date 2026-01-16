---
title: SubscriptionBillingCycleChargePayload - GraphQL Admin
description: Return type for `subscriptionBillingCycleCharge` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleChargePayload
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/SubscriptionBillingCycleChargePayload.md
---

# Subscription​Billing​Cycle​Charge​Payload

payload

Return type for `subscriptionBillingCycleCharge` mutation.

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

## Map

### Mutations with this payload

* [subscription​Billing​Cycle​Charge](https://shopify.dev/docs/api/admin-graphql/latest/types/subscriptionBillingCycleCharge)
