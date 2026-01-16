---
title: FulfillmentOrderRescheduleUserError - GraphQL Admin
description: An error that occurs during the execution of `FulfillmentOrderReschedule`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderRescheduleUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderRescheduleUserError.md
---

# Fulfillment​Order​Reschedule​User​Error

object

An error that occurs during the execution of `FulfillmentOrderReschedule`.

## Fields

* code

  [Fulfillment​Order​Reschedule​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderRescheduleUserErrorCode)

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

* [fulfillment​Order​Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule)

  mutation

  Reschedules a scheduled fulfillment order.

  Updates the value of the `fulfillAt` field on a scheduled fulfillment order.

  The fulfillment order will be marked as ready for fulfillment at this date and time.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order to reschedule.

  * fulfill​At

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    A future date and time when the fulfillment order will be marked as ready for fulfillment.

  ***

***

## <\~> FulfillmentOrderRescheduleUserError Mutations

### Mutated by

* <\~>[fulfillment​Order​Reschedule](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReschedule)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentOrderRescheduleUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
