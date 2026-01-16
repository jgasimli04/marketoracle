---
title: MenuCreatePayload - GraphQL Admin
description: Return type for `menuCreate` mutation.
api_version: 2026-01
api_name: admin
type: payload
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/payloads/MenuCreatePayload'
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/payloads/MenuCreatePayload.md
---

# Menu​Create​Payload

payload

Return type for `menuCreate` mutation.

## Fields

* menu

  [Menu](https://shopify.dev/docs/api/admin-graphql/latest/objects/Menu)

  The created menu.

* user​Errors

  [\[Menu​Create​User​Error!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuCreateUserError)

  non-null

  The list of errors that occurred from executing the mutation.

***

## Mutations with this payload

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

## Map

### Mutations with this payload

* [menu​Create](https://shopify.dev/docs/api/admin-graphql/latest/types/menuCreate)
