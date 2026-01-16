---
title: SubscriptionContractStatusUpdateUserError - GraphQL Admin
description: Represents a subscription contract status update error.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractStatusUpdateUserError.md
---

# Subscription​Contract​Status​Update​User​Error

object

Requires `read_own_subscription_contracts` access scope.

Represents a subscription contract status update error.

## Fields

* code

  [Subscription​Contract​Status​Update​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractStatusUpdateErrorCode)

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

* [subscription​Contract​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)

  mutation

  Activates a Subscription Contract. Contract status must be either active, paused, or failed.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* [subscription​Contract​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCancel)

  mutation

  Cancels a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* [subscription​Contract​Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)

  mutation

  Expires a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* [subscription​Contract​Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractFail)

  mutation

  Fails a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

* [subscription​Contract​Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)

  mutation

  Pauses a Subscription Contract.

  * subscription​Contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the Subscription Contract.

  ***

***

## <\~> SubscriptionContractStatusUpdateUserError Mutations

### Mutated by

* <\~>[subscription​Contract​Activate](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractActivate)
* <\~>[subscription​Contract​Cancel](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractCancel)
* <\~>[subscription​Contract​Expire](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractExpire)
* <\~>[subscription​Contract​Fail](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractFail)
* <\~>[subscription​Contract​Pause](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractPause)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-SubscriptionContractStatusUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
