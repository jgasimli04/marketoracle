---
title: MenuItemCreateInput - GraphQL Admin
description: The input fields required to create a valid menu item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput.md
---

# Menu​Item​Create​Input

input\_object

The input fields required to create a valid menu item.

## Fields

* items

  [\[Menu​Item​Create​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput)

  List of the menu items nested under this item sorted by position.

* resource​Id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  The menu item's association with an existing resource.

* tags

  [\[String!\]](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The menu item's tags to filter a collection.

* title

  [String!](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  non-null

  The menu item's title.

* type

  [Menu​Item​Type!](https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuItemType)

  non-null

  The menu item's type.

* url

  [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

  The menu item's url to be used when the item doesn't point to a resource.

***

## Input objects using this input

* [Menu​Item​Create​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput#fields-items)

  INPUT OBJECT

  The input fields required to create a valid menu item.

***

## Map

### Input objects using this input

* [Menu​Item​Create​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput#fields-items)
