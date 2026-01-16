---
title: FulfillmentOrderLineItemsPreparedForPickupUserError - GraphQL Admin
description: >-
  An error that occurs during the execution of
  `FulfillmentOrderLineItemsPreparedForPickup`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemsPreparedForPickupUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItemsPreparedForPickupUserError.md
---

# Fulfillment​Order​Line​Items​Prepared​For​Pickup​User​Error

object

An error that occurs during the execution of `FulfillmentOrderLineItemsPreparedForPickup`.

## Fields

* code

  [Fulfillment​Order​Line​Items​Prepared​For​Pickup​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/FulfillmentOrderLineItemsPreparedForPickupUserErrorCode)

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

* [fulfillment​Order​Line​Items​Prepared​For​Pickup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderLineItemsPreparedForPickup)

  mutation

  Marks [fulfillment order line items](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrderLineItem) as ready for customer pickup. When executed, this mutation automatically sends a "Ready For Pickup" notification to the customer.

  Use this mutation for local pickup orders after the items have been prepared and are available for the customer to collect. You can specify one or more [fulfillment order](https://shopify.dev/docs/api/admin-graphql/latest/objects/FulfillmentOrder) objects by providing the fulfillment order IDs in the [`lineItemsByFulfillmentOrder`](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/PreparedFulfillmentOrderLineItemsInput) field. This allows you to mark fulfillment order line items from different fulfillment orders as ready for pickup.

  * input

    [Fulfillment​Order​Line​Items​Prepared​For​Pickup​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/FulfillmentOrderLineItemsPreparedForPickupInput)

    required

    ### Arguments

    The input for marking fulfillment order line items as ready for pickup.

  ***

***

## <\~> FulfillmentOrderLineItemsPreparedForPickupUserError Mutations

### Mutated by

* <\~>[fulfillment​Order​Line​Items​Prepared​For​Pickup](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fulfillmentOrderLineItemsPreparedForPickup)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-FulfillmentOrderLineItemsPreparedForPickupUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
