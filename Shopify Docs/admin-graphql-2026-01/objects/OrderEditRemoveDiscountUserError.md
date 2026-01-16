---
title: OrderEditRemoveDiscountUserError - GraphQL Admin
description: An error that occurs during the execution of `OrderEditRemoveDiscount`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveDiscountUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditRemoveDiscountUserError.md
---

# Order​Edit​Remove​Discount​User​Error

object

An error that occurs during the execution of `OrderEditRemoveDiscount`.

## Fields

* code

  [Order​Edit​Remove​Discount​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditRemoveDiscountUserErrorCode)

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

* [order​Edit​Remove​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveDiscount)

  mutation

  Removes a discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit from which the discount is removed.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to remove.

  ***

***

## <\~> OrderEditRemoveDiscountUserError Mutations

### Mutated by

* <\~>[order​Edit​Remove​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditRemoveDiscount)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderEditRemoveDiscountUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
