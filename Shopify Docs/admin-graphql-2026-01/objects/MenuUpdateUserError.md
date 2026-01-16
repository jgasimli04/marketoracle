---
title: MenuUpdateUserError - GraphQL Admin
description: An error that occurs during the execution of `MenuUpdate`.
api_version: 2026-01
api_name: admin
type: object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuUpdateUserError
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuUpdateUserError.md
---

# Menu​Update​User​Error

object

An error that occurs during the execution of `MenuUpdate`.

## Fields

* code

  [Menu​Update​User​Error​Code](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuUpdateUserErrorCode)

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

* [menu​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuUpdate)

  mutation

  Updates a [`Menu`](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu) for display on the storefront. Modifies the menu's title and navigation structure, including nested [`MenuItem`](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem) objects. You can update the handle for non-default menus.

  The items argument accepts a list of menu items with their nested structure. Each item can include nested items to create multi-level navigation hierarchies. Default menus have restricted updates—you can't change their handles.

  * id

    [ID!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

    required

    ### Arguments

    ID of the menu to be updated.

  * title

    [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    required

    The menu's title.

  * handle

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The menu's handle.

  * items

    [\[Menu​Item​Update​Input!\]!](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput)

    required

    List of the menu's items.

  ***

***

## <\~> MenuUpdateUserError Mutations

### Mutated by

* <\~>[menu​Update](https://shopify.dev/docs/api/admin-graphql/latest/mutations/menuUpdate)

***

## Interfaces

* [Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)

  interface

***

## ||-MenuUpdateUserError Implements

### Implements

* ||-[Displayable​Error](https://shopify.dev/docs/api/admin-graphql/latest/interfaces/DisplayableError)
