---
title: SubscriptionBillingAttemptGenericError - GraphQL Admin
description: A base error type that applies to all uncategorized error classes.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptGenericError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/SubscriptionBillingAttemptGenericError.md
---

# Subscription​Billing​Attempt​Generic​Error

object

Requires `read_own_subscription_contracts` access scope.

A base error type that applies to all uncategorized error classes.

## Fields

* code

  [Subscription​Billing​Attempt​Error​Code!](https://shopify.dev/docs/api/admin-graphql/latest/enums/SubscriptionBillingAttemptErrorCode)

  non-null

  The code for the error.

* message

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  An explanation of the error.

***

## Map

No referencing types

***

## Interfaces

* [Subscription​Billing​Attempt​Processing​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionBillingAttemptProcessingError)

  interface

***

## ||-SubscriptionBillingAttemptGenericError Implements

### Implements

* ||-[Subscription​Billing​Attempt​Processing​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/SubscriptionBillingAttemptProcessingError)
