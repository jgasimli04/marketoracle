---
title: OrderEditUpdateShippingLineUserError - GraphQL Admin
description: An error that occurs during the execution of `OrderEditUpdateShippingLine`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateShippingLineUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateShippingLineUserError.md
---

# Order​Edit​Update​Shipping​Line​User​Error

object

An error that occurs during the execution of `OrderEditUpdateShippingLine`.

## Fields

* code

  [Order​Edit​Update​Shipping​Line​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditUpdateShippingLineUserErrorCode)

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

* [order​Edit​Update​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine)

  mutation

  Updates a shipping line on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the shipping line.

  * shipping​Line

    [Order​Edit​Update​Shipping​Line​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditUpdateShippingLineInput)

    required

    The updated shipping line.

  * shipping​Line​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the calculated shipping line to update.

  ***

***

## <\~> OrderEditUpdateShippingLineUserError Mutations

### Mutated by

* <\~>[order​Edit​Update​Shipping​Line](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateShippingLine)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderEditUpdateShippingLineUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
