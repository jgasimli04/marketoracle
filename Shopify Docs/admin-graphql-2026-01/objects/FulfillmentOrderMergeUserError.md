---
title: FulfillmentOrderMergeUserError - GraphQL Admin
description: An error that occurs during the execution of `FulfillmentOrderMerge`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderMergeUserError.md
---

# Fulfillment​Order​Merge​User​Error

object

An error that occurs during the execution of `FulfillmentOrderMerge`.

## Fields

* code

  [Fulfillment​Order​Merge​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderMergeUserErrorCode)

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

* [fulfillment​Order​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge)

  mutation

  Merges a set or multiple sets of fulfillment orders together into one based on line item inputs and quantities.

  * fulfillment​Order​Merge​Inputs

    [\[Fulfillment​Order​Merge​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderMergeInput)

    required

    ### Arguments

    One or more sets of fulfillment orders to be merged.

  ***

***

## <\~> FulfillmentOrderMergeUserError Mutations

### Mutated by

* <\~>[fulfillment​Order​Merge](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderMerge)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentOrderMergeUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
