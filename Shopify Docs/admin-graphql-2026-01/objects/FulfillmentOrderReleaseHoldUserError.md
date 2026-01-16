---
title: FulfillmentOrderReleaseHoldUserError - GraphQL Admin
description: An error that occurs during the execution of `FulfillmentOrderReleaseHold`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderReleaseHoldUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderReleaseHoldUserError.md
---

# Fulfillment​Order​Release​Hold​User​Error

object

An error that occurs during the execution of `FulfillmentOrderReleaseHold`.

## Fields

* code

  [Fulfillment​Order​Release​Hold​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderReleaseHoldUserErrorCode)

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

* [fulfillment​Order​Release​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReleaseHold)

  mutation

  Releases the fulfillment hold on a fulfillment order.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the fulfillment order for which to release the fulfillment hold.

  * hold​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The IDs of the fulfillment holds to release.\
    \
    Holds will only be released if they belong to the fulfillment order specified by the `id` argument.\
    \
    **NOTE:** If not supplied, all holds for the fulfillment order will be released. It is highly recommended that apps supply the ids of the holds that they intend to release. Releasing all holds on a fulfillment order will result in the fulfillment order being released prematurely and items being incorrectly fulfilled.

  * external​Id

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A configurable ID used to track the automation system releasing this hold.

  ***

***

## <\~> FulfillmentOrderReleaseHoldUserError Mutations

### Mutated by

* <\~>[fulfillment​Order​Release​Hold](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderReleaseHold)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentOrderReleaseHoldUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
