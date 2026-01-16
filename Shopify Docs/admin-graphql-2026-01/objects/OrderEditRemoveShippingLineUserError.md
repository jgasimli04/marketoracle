---
title: OrderEditRemoveShippingLineUserError - GraphQL Admin
description: An error that occurs during the execution of `OrderEditRemoveShippingLine`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveShippingLineUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveShippingLineUserError.md
---

# Order​Edit​Remove​Shipping​Line​User​Error

object

An error that occurs during the execution of `OrderEditRemoveShippingLine`.

## Fields

* code

  [Order​Edit​Remove​Shipping​Line​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditRemoveShippingLineUserErrorCode)

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

* [order​Edit​Remove​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine)

  mutation

  Removes a shipping line from an existing order. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the shipping line is removed.

  * shipping​Line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated shipping line to remove.

  ***

***

## <\~> OrderEditRemoveShippingLineUserError Mutations

### Mutated by

* <\~>[order​Edit​Remove​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveShippingLine)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderEditRemoveShippingLineUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
