---
title: SubscriptionBillingCycleUnskipUserError - GraphQL Admin
description: An error that occurs during the execution of `SubscriptionBillingCycleUnskip`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUnskipUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingCycleUnskipUserError.md
---

# Subscription​Billing​Cycle​Unskip​User​Error

object

An error that occurs during the execution of `SubscriptionBillingCycleUnskip`.

## Fields

* code

  [Subscription​Billing​Cycle​Unskip​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingCycleUnskipUserErrorCode)

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

* [subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)

  mutation

  Unskips a Subscription Billing Cycle.

  * billing​Cycle​Input

    [Subscription​Billing​Cycle​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/SubscriptionBillingCycleInput)

    required

    ### Arguments

    Input object for selecting and using billing cycles.

  ***

***

## <\~> SubscriptionBillingCycleUnskipUserError Mutations

### Mutated by

* <\~>[subscription​Billing​Cycle​Unskip](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionBillingCycleUnskip)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-SubscriptionBillingCycleUnskipUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
