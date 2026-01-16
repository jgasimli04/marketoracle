---
title: FulfillmentOrderHoldUserError - GraphQL Admin
description: An error that occurs during the execution of `FulfillmentOrderHold`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderHoldUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderHoldUserError.md
---

# Fulfillment​Order​Hold​User​Error

object

An error that occurs during the execution of `FulfillmentOrderHold`.

## Fields

* code

  [Fulfillment​Order​Hold​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode)

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

* [fulfillment​Order​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)

  mutation

  Applies a fulfillment hold on a fulfillment order.

  As of the [2025-01 API version](https://shopify.dev/changelog/apply-multiple-holds-to-a-single-fulfillment-order), the mutation can be successfully executed on fulfillment orders that are already on hold. To place multiple holds on a fulfillment order, apps need to supply the [handle](https://shopify.dev/api/admin-graphql/latest/objects/FulfillmentHold#field-handle) field. Each app can place up to 10 active holds per fulfillment order. If an app attempts to place more than this, the mutation will return [a user error indicating that the limit has been reached](https://shopify.dev/api/admin-graphql/latest/enums/FulfillmentOrderHoldUserErrorCode#value-fulfillmentorderholdlimitreached). The app would need to release one of its existing holds before being able to apply a new one.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order on which a fulfillment hold is applied.

  * fulfillment​Hold

    [Fulfillment​Order​Hold​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderHoldInput)

    required

    The details of the fulfillment hold applied on the fulfillment order.

  ***

***

## <\~> FulfillmentOrderHoldUserError Mutations

### Mutated by

* <\~>[fulfillment​Order​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderHold)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentOrderHoldUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
