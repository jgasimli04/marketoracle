---
title: OrderEditAddShippingLineUserError - GraphQL Admin
description: An error that occurs during the execution of `OrderEditAddShippingLine`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAddShippingLineUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditAddShippingLineUserError.md
---

# Order​Edit​Add​Shipping​Line​User​Error

object

An error that occurs during the execution of `OrderEditAddShippingLine`.

## Fields

* code

  [Order​Edit​Add​Shipping​Line​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditAddShippingLineUserErrorCode)

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

* [order​Edit​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)

  mutation

  Adds a custom shipping line to an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) during an edit session. Specify the shipping title and price to create a new [`ShippingLine`](https://shopify.dev/docs/api/admin-graphql/latest/objects/ShippingLine).

  Returns a [`CalculatedOrder`](https://shopify.dev/docs/api/admin-graphql/latest/objects/CalculatedOrder) showing the order with edits applied but not yet saved. To save your changes, use the [`orderEditCommit`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditCommit) mutation.

  Learn more about [editing existing orders](https://shopify.dev/docs/apps/build/orders-fulfillment/order-management-apps/edit-orders).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit to which the shipping line is added.

  * shipping​Line

    [Order​Edit​Add​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAddShippingLineInput)

    required

    The shipping line to be added.

  ***

***

## <\~> OrderEditAddShippingLineUserError Mutations

### Mutated by

* <\~>[order​Edit​Add​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditAddShippingLine)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderEditAddShippingLineUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
