---
title: FulfillmentOrdersSetFulfillmentDeadlineUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `FulfillmentOrdersSetFulfillmentDeadline`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersSetFulfillmentDeadlineUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersSetFulfillmentDeadlineUserError.md
---

# Fulfillment​Orders​Set​Fulfillment​Deadline​User​Error

object

An error that occurs during the execution of `FulfillmentOrdersSetFulfillmentDeadline`.

## Fields

* code

  [Fulfillment​Orders​Set​Fulfillment​Deadline​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrdersSetFulfillmentDeadlineUserErrorCode)

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

* [fulfillment​Orders​Set​Fulfillment​Deadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline)

  mutation

  Sets the latest date and time by which the fulfillment orders need to be fulfilled.

  * fulfillment​Order​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The IDs of the fulfillment orders for which the deadline is being set.

  * fulfillment​Deadline

    [Date​Time!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/DateTime)

    required

    The new fulfillment deadline of the fulfillment orders.

  ***

***

## <\~> FulfillmentOrdersSetFulfillmentDeadlineUserError Mutations

### Mutated by

* <\~>[fulfillment​Orders​Set​Fulfillment​Deadline](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersSetFulfillmentDeadline)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentOrdersSetFulfillmentDeadlineUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
