---
title: SubscriptionContractUserError - GraphQL Admin
description: Represents a Subscription Contract error.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionContractUserError.md
---

# Subscription​Contract​User​Error

object

Requires `read_own_subscription_contracts` access scope.

Represents a Subscription Contract error.

## Fields

* code

  [Subscription​Contract​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionContractErrorCode)

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

* [subscription​Contract​Set​Next​Billing​Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)

  mutation

  Sets the next billing date of a Subscription Contract. This field is managed by the apps. Alternatively you can utilize our [Billing Cycles APIs](https://shopify.dev/docs/apps/selling-strategies/subscriptions/billing-cycles), which provide auto-computed billing dates and additional functionalities.

  * contract​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The gid of the Subscription Contract to set the next billing date for.

  * date

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The next billing date.

  ***

***

## <\~> SubscriptionContractUserError Mutations

### Mutated by

* <\~>[subscription​Contract​Set​Next​Billing​Date](https://shopify.dev/docs/api/admin-graphql/latest/mutations/subscriptionContractSetNextBillingDate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-SubscriptionContractUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
