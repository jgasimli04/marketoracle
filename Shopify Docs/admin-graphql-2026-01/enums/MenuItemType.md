---
title: MenuItemType - GraphQL Admin
description: A menu item type.
api_version: 2026-01
api_name: admin
type: enum
api_type: graphql
source_url:
  html: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuItemType'
  md: 'https://shopify.dev/docs/api/admin-graphql/latest/enums/MenuItemType.md'
---

# Menu​Item​Type

enum

A menu item type.

## Valid values

* ARTICLE

  The article menu item type.

* BLOG

  The blog menu item type.

* CATALOG

  The catalog menu item type.

* COLLECTION

  The collection menu item type.

* COLLECTIONS

  The collections menu item type.

* CUSTOMER\_​ACCOUNT\_​PAGE

  The customer\_account\_page menu item type.

* FRONTPAGE

  The frontpage menu item type.

* HTTP

  The http menu item type.

* METAOBJECT

  The metaobject menu item type.

* PAGE

  The page menu item type.

* PRODUCT

  The product menu item type.

* SEARCH

  The search menu item type.

* SHOP\_​POLICY

  The shop\_policy menu item type.

***

## Fields

* [Menu​Item.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem#field-MenuItem.fields.type)

  OBJECT

  Individual navigation links that make up store menus, giving customers clickable paths to explore the store. Menu items are the building blocks that connect shoppers to products, collections, pages, or external resources.

  For example, within a "Products" menu, individual menu items might link to specific collections like "Summer Collection" or "Best Sellers," each with its own title, URL, and resource connection.

  Use the `MenuItem` object to:

  * Define individual navigation links and their destinations
  * Create nested menu hierarchies through item relationships
  * Use tags for collection filtering
  * Connect menu links to specific store resources

  Menu items support various link types, enabling connections to internal store content or external websites. The nested items capability allows for dropdown or multi-level navigation structures that help organize complex store catalogs.

* [Menu​Item​Create​Input.type](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput#fields-type)

  INPUT OBJECT

  The input fields required to create a valid menu item.

* [Menu​Item​Update​Input.type](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput#fields-type)

  INPUT OBJECT

  The input fields required to update a valid menu item.

***

## Map

### Fields with this enum

* <-|[Menu​Item.type](https://shopify.dev/docs/api/admin-graphql/latest/objects/MenuItem#field-MenuItem.fields.type)

### Inputs with this enum

* [Menu​Item​Create​Input.type](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemCreateInput#fields-type)
* [Menu​Item​Update​Input.type](https://shopify.dev/docs/api/admin-graphql/latest/input-objects/MenuItemUpdateInput#fields-type)
