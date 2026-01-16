---
title: OrderEditUpdateDiscountUserError - GraphQL Admin
description: An error that occurs during the execution of `OrderEditUpdateDiscount`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateDiscountUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderEditUpdateDiscountUserError.md
---

# Order​Edit​Update​Discount​User​Error

object

An error that occurs during the execution of `OrderEditUpdateDiscount`.

## Fields

* code

  [Order​Edit​Update​Discount​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderEditUpdateDiscountUserErrorCode)

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

* [order​Edit​Update​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateDiscount)

  mutation

  Updates a manual line level discount on the current order edit. For more information on how to use the GraphQL Admin API to edit an existing order, refer to [Edit existing orders](https://shopify.dev/apps/fulfillment/order-management-apps/order-editing).

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the [calculated order](https://shopify.dev/api/admin-graphql/latest/objects/calculatedorder) or the order edit session to edit. This is the edit used to update the discount.

  * discount

    [Order​Edit​Applied​Discount​Input!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/OrderEditAppliedDiscountInput)

    required

    The updated discount.

  * discount​Application​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the [calculated discount application](https://shopify.dev/api/admin-graphql/latest/interfaces/calculateddiscountapplication) to update.

  ***

***

## <\~> OrderEditUpdateDiscountUserError Mutations

### Mutated by

* <\~>[order​Edit​Update​Discount](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderEditUpdateDiscount)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderEditUpdateDiscountUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
