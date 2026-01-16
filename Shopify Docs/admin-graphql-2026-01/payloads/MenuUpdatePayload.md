---
title: MenuUpdatePayload - GraphQL Admin
description: Return type for `menuUpdate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/MenuUpdatePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MenuUpdatePayload.md
---

# Menu​Update​Payload

payload

Return type for `menuUpdate` mutation.

## Fields

* menu

  [Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

  The updated menu.

* user​Errors

  [\[Menu​Update​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuUpdateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [menu​Update](https://shopify.dev/docs/api/admin-graphql/latest/types/menuUpdate)
