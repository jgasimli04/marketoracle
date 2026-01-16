---
title: AppSubscriptionTrialExtendUserError - GraphQL Admin
description: An error that occurs during the execution of `AppSubscriptionTrialExtend`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionTrialExtendUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscriptionTrialExtendUserError.md
---

# App​Subscription​Trial​Extend​User​Error

object

An error that occurs during the execution of `AppSubscriptionTrialExtend`.

## Fields

* code

  [App​Subscription​Trial​Extend​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/AppSubscriptionTrialExtendUserErrorCode)

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

* [app​Subscription​Trial​Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

  mutation

  Extends the trial period for an existing app subscription. Trial extensions give merchants additional time to use the app before committing to paid billing.

  Requires the subscription ID and the number of days to extend (between one and 1000). The extension modifies the existing trial end date, allowing continued access to subscription features without immediate billing. Returns the updated [`AppSubscription`](https://shopify.dev/docs/api/admin-graphql/latest/objects/AppSubscription).

  Learn more about [offering free trials](https://shopify.dev/docs/apps/launch/billing/offer-free-trials).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the app subscription to extend the trial for.

  * days

    [Int!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    required

    The number of days to extend the trial. The value must be greater than 0 and less than or equal to 1000.

  ***

***

## <\~> AppSubscriptionTrialExtendUserError Mutations

### Mutated by

* <\~>[app​Subscription​Trial​Extend](https://shopify.dev/docs/api/admin-graphql/latest/mutations/appSubscriptionTrialExtend)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-AppSubscriptionTrialExtendUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
