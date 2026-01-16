---
title: SubscriptionBillingCycleSkipUserError - GraphQL Admin
description: An error that occurs during the execution of `SubscriptionBillingCycleSkip`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleSkipUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleSkipUserError.md
---

# Subscription​Billing​Cycle​Skip​User​Error

object

An error that occurs during the execution of `SubscriptionBillingCycleSkip`.

## Fields

* code

  [Subscription​Billing​Cycle​Skip​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleSkipUserErrorCode)

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

* [subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)

  mutation

  Skips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

## <\~> SubscriptionBillingCycleSkipUserError Mutations

### Mutated by

* <\~>[subscription​Billing​Cycle​Skip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleSkip)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-SubscriptionBillingCycleSkipUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
