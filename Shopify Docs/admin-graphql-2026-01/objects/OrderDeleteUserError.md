---
title: OrderDeleteUserError - GraphQL Admin
description: Errors related to deleting an order.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderDeleteUserError.md
---

# Order​Delete​User​Error

object

Requires `read_orders` access scope.

Errors related to deleting an order.

## Fields

* code

  [Order​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderDeleteUserErrorCode)

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

* [order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderDelete)

  mutation

  Permanently deletes an [`Order`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Order) from the store.

  You can only delete [specific order types](https://help.shopify.com/manual/orders/cancel-delete-order#delete-an-order). Other orders you can cancel using the [`orderCancel`](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCancel) mutation instead.

  ***

  Caution

  This action is irreversible. You can't recover deleted orders.

  ***

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order to be deleted.

  ***

***

## <\~> OrderDeleteUserError Mutations

### Mutated by

* <\~>[order​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
