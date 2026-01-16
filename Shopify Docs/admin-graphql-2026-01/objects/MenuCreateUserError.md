---
title: MenuCreateUserError - GraphQL Admin
description: An error that occurs during the execution of `MenuCreate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuCreateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuCreateUserError.md
---

# Menu​Create​User​Error

object

An error that occurs during the execution of `MenuCreate`.

## Fields

* code

  [Menu​Create​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuCreateUserErrorCode)

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

* [menu​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate)

  mutation

  Creates a navigation [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for the online store. Menus organize links that help customers navigate to [collections](https://shopify.dev/docs/api/admin-graphql/latest/objects/Collection), [products](https://shopify.dev/docs/api/admin-graphql/latest/objects/Product), [pages](https://shopify.dev/docs/api/admin-graphql/latest/objects/Page), [blogs](https://shopify.dev/docs/api/admin-graphql/latest/objects/Blog), and custom URLs.

  Each menu requires a unique handle for identification and can contain multiple [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects with nested sub-items up to three levels deep.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    ### Arguments

    The menu's title.

  * handle

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The menu's handle.

  * items

    [\[Menu​Item​Create​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput)

    required

    List of the menu's items.

  ***

***

## <\~> MenuCreateUserError Mutations

### Mutated by

* <\~>[menu​Create](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuCreate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MenuCreateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
