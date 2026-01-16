---
title: MenuItemUpdateInput - GraphQL Admin
description: The input fields required to update a valid menu item.
api_version: 2026-01
api_name: admin
type: input-object
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput.md
---

# Menu​Item​Update​Input

input\_object

The input fields required to update a valid menu item.

## Fields

* id

  [ID](https://shopify.dev/docs/api/admin-graphql/latest/scalars/ID)

  A globally-unique ID of the online store navigation menu item.

* items

  [\[Menu​Item​Update​Input!\]](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput)

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

* [Menu​Item​Update​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput#fields-items)

  INPUT OBJECT

  The input fields required to update a valid menu item.

***

## Map

### Input objects using this input

* [Menu​Item​Update​Input.items](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput#fields-items)
