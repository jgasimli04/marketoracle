---
title: OrderCustomerRemoveUserError - GraphQL Admin
description: Errors related to order customer removal.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerRemoveUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/OrderCustomerRemoveUserError.md
---

# Order​Customer​Remove​User​Error

object

Requires `read_orders` access scope.

Errors related to order customer removal.

## Fields

* code

  [Order​Customer​Remove​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/OrderCustomerRemoveUserErrorCode)

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

* [order​Customer​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)

  mutation

  Removes customer from an order.

  * order​Id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the order having its customer removed.

  ***

***

## <\~> OrderCustomerRemoveUserError Mutations

### Mutated by

* <\~>[order​Customer​Remove](https://shopify.dev/docs/api/admin-graphql/latest/mutations/orderCustomerRemove)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-OrderCustomerRemoveUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
