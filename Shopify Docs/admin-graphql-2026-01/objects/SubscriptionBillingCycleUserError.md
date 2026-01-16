---
title: SubscriptionBillingCycleUserError - GraphQL Admin
description: The possible errors for a subscription billing cycle.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUserError.md
---

# Subscription​Billing​Cycle​User​Error

object

Requires `read_own_subscription_contracts` access scope.

The possible errors for a subscription billing cycle.

## Fields

* code

  [Subscription​Billing​Cycle​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleErrorCode)

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

* [subscription​Billing​Cycle​Edit​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)

  mutation

  Delete the schedule and contract edits of the selected subscription billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object used to select and use billing cycles.

  ***

* [subscription​Billing​Cycle​Edits​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)

  mutation

  Delete the current and future schedule and contract edits of a list of subscription billing cycles.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The globally-unique identifier of the subscription contract that the billing cycle belongs to.

  * target​Selection

    [Subscription​Billing​Cycles​Target​Selection!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCyclesTargetSelection)

    required

    Select billing cycles to be deleted.

  ***

* [subscription​Billing​Cycle​Schedule​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)

  mutation

  Modify the schedule of a specific billing cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  * input

    [Subscription​Billing​Cycle​Schedule​Edit​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleScheduleEditInput)

    required

    Data used to create or modify billing cycle schedule edit.

  ***

***

## <\~> SubscriptionBillingCycleUserError Mutations

### Mutated by

* <\~>[subscription​Billing​Cycle​Edit​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditDelete)
* <\~>[subscription​Billing​Cycle​Edits​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleEditsDelete)
* <\~>[subscription​Billing​Cycle​Schedule​Edit](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleScheduleEdit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-SubscriptionBillingCycleUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
