---
title: FulfillmentOrderSplitUserError - GraphQL Admin
description: An error that occurs during the execution of `FulfillmentOrderSplit`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderSplitUserError.md
---

# Fulfillment​Order​Split​User​Error

object

An error that occurs during the execution of `FulfillmentOrderSplit`.

## Fields

* code

  [Fulfillment​Order​Split​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderSplitUserErrorCode)

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

* [fulfillment​Order​Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit)

  mutation

  Splits [`FulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by moving the specified [`LineItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/LineItem) objects and quantities into a new fulfillment order.

  If the original fulfillment order can't be split due to its current state, then the mutation creates a replacement fulfillment order instead.

  * fulfillment​Order​Splits

    [\[Fulfillment​Order​Split​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderSplitInput)

    required

    ### Arguments

    The fulfillment orders, line items and quantities to be split into new fulfillment orders.

  ***

***

## <\~> FulfillmentOrderSplitUserError Mutations

### Mutated by

* <\~>[fulfillment​Order​Split](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderSplit)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentOrderSplitUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
