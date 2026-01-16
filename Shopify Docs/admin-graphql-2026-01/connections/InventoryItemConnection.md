---
title: InventoryItemConnection - GraphQL Admin
description: An auto-generated type for paginating through multiple InventoryItems.
api_version: 2026-01
api_name: admin
type: connection
api_type: graphql
source_url:
  html: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection
  md: >-
    https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection.md
---

# Inventory​Item​Connection

connection

An auto-generated type for paginating through multiple InventoryItems.

## Fields with this connection

* [Shop.inventoryItems](https://shopify.dev/docs/api/admin-graphql/latest/objects/Shop#field-Shop.fields.inventoryItems)

  OBJECT

  Deprecated

***

## Queries with this connection

* [inventory​Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItems)

  query

  Returns a list of inventory items.

  * first

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    ### Arguments

    The first `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * after

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come after the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * last

    [Int](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Int)

    The last `n` elements from the [paginated list](https://shopify.dev/api/usage/pagination-graphql).

  * before

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    The elements that come before the specified [cursor](https://shopify.dev/api/usage/pagination-graphql).

  * reverse

    [Boolean](https://shopify.dev/docs/api/admin-graphql/latest/scalars/Boolean)

    Default:false

    Reverse the order of the underlying list.

  * query

    [String](https://shopify.dev/docs/api/admin-graphql/latest/scalars/String)

    A filter made up of terms, connectives, modifiers, and comparators. You can apply one or more filters to a query. Learn more about [Shopify API search syntax](https://shopify.dev/api/usage/search-syntax).

    * created\_at

      time

    * * id

        id

      * sku

        string

      * updated\_at

        time

      - Filter by `id` range.

      - Example:

        * `id:1234`
        * `id:>=1234`
        * `id:<=1234`

        Filter by the inventory item [`sku`](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem#field-sku) field. [Learn more about SKUs](https://help.shopify.com/manual/products/details/sku).

      - Example:
        * `sku:XYZ-12345`

  ***

***

## Possible returns

* edges

  [\[Inventory​Item​Edge!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItemEdge)

  non-null

  The connection between the node and its parent. Each edge contains a minimum of the edge's cursor and the node.

* nodes

  [\[Inventory​Item!\]!](https://shopify.dev/docs/api/admin-graphql/latest/objects/InventoryItem)

  non-null

  A list of nodes that are contained in InventoryItemEdge. You can fetch data about an individual node, or you can follow the edges to fetch data about a collection of related nodes. At each node, you specify the fields that you want to retrieve.

* page​Info

  [Page​Info!](https://shopify.dev/docs/api/admin-graphql/latest/objects/PageInfo)

  non-null

  An object that’s used to retrieve [cursor information](https://shopify.dev/api/usage/pagination-graphql) about the current page.

***

## Map

### Queries with this connection

* \<?>[inventory​Items](https://shopify.dev/docs/api/admin-graphql/latest/queries/inventoryItems)

### Possible returns

* <->[Inventory​Item​Connection.edges](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#returns-edges)
* <->[Inventory​Item​Connection.nodes](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#returns-nodes)
* <->[Inventory​Item​Connection.pageInfo](https://shopify.dev/docs/api/admin-graphql/latest/connections/InventoryItemConnection#returns-pageInfo)
