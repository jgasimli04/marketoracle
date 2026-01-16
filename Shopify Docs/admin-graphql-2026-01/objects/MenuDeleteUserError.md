---
title: MenuDeleteUserError - GraphQL Admin
description: An error that occurs during the execution of `MenuDelete`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuDeleteUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuDeleteUserError.md
---

# Menu​Delete​User​Error

object

An error that occurs during the execution of `MenuDelete`.

## Fields

* code

  [Menu​Delete​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuDeleteUserErrorCode)

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

* [menu​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete)

  mutation

  Deletes a menu.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    The ID of the menu to be deleted.

  ***

***

## <\~> MenuDeleteUserError Mutations

### Mutated by

* <\~>[menu​Delete](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuDelete)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MenuDeleteUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
