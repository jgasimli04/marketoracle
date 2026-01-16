---
title: FulfillmentOrdersRerouteUserError - GraphQL Admin
description: An error that occurs during the execution of `FulfillmentOrdersReroute`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersRerouteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrdersRerouteUserError.md
---

# Fulfillment​Orders​Reroute​User​Error

object

An error that occurs during the execution of `FulfillmentOrdersReroute`.

## Fields

* code

  [Fulfillment​Orders​Reroute​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrdersRerouteUserErrorCode)

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

* [fulfillment​Orders​Reroute](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersReroute)

  mutation

  Route the fulfillment orders to an alternative location, according to the shop's order routing settings. This involves:

  * Finding an alternate location that can fulfill the fulfillment orders.
  * Assigning the fulfillment orders to the new location.

  - fulfillment​Order​Ids

    [\[ID!\]!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The list of IDs of the fulfillment orders.

  - included​Location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of IDs of the locations to include for rerouting. By default, all locations are included.

  - excluded​Location​Ids

    [\[ID!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    The list of IDs of the locations to exclude for rerouting. Excluded locations specified here take precedence over included locations provided through included\_location\_ids.

  ***

***

## <\~> FulfillmentOrdersRerouteUserError Mutations

### Mutated by

* <\~>[fulfillment​Orders​Reroute](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrdersReroute)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentOrdersRerouteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
