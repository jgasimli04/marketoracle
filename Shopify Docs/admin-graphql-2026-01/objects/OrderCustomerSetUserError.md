---
title: OrderCustomerSetUserError - GraphQL Admin
description: Errors related to order customer set.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerSetUserError.md
---

# Order​Customer​Set​User​Error

object

Requires `read_orders` access scope.

Errors related to order customer set.

## Fields

* code

  [Order​Customer​Set​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCustomerSetUserErrorCode)

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

* [order​Customer​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet)

  mutation

  Sets a customer on an order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order having a customer set.

  * customer​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    The ID of the customer being set on the order.

  ***

***

## <\~> OrderCustomerSetUserError Mutations

### Mutated by

* <\~>[order​Customer​Set](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerSet)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderCustomerSetUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
